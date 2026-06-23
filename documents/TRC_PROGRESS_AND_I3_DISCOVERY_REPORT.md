# TRC Optimizer — Progress & i3 Discovery Report

**Prepared for:** Claude / agent handoff  
**Date:** 2026-06-23  
**Project:** TRC_Opt — LISD Technology Repair Center MacBook intake automation  
**Repo:** `TRC Optimizer/`

---

## Table of Contents

1. [What This Project Is](#1-what-this-project-is)
2. [Fixed Architecture](#2-fixed-architecture)
3. [The Discovery Journey](#3-the-discovery-journey)
4. [How extension-test Works](#4-how-extension-test-works)
5. [i3 Technical Findings](#5-i3-technical-findings)
6. [Architectural Pivot — Production Extension](#6-architectural-pivot--production-extension)
7. [Backend Status](#7-backend-status)
8. [Build Session Status](#8-build-session-status)
9. [Session 5 — Corrected Status](#9-session-5--corrected-status)
10. [Interface Contracts](#10-interface-contracts)
11. [Break Counting Logic](#11-break-counting-logic)
12. [Evidence Artifacts in Repo](#12-evidence-artifacts-in-repo)
13. [Open Risks & Unverified Items](#13-open-risks--unverified-items)
14. [Recommended Next Steps](#14-recommended-next-steps)
15. [Quick Reference — Production Intake Flow](#15-quick-reference--production-intake-flow)

---

## 1. What This Project Is

An internal Windows-only tool for TRC staff. A tech scans a barcode (asset tag) and fills two fields (IIQ ticket, tech initials). The system:

1. Looks up the device in **i3** (`ims.lisd.net`)
2. Counts **breaks** (TRC repair visits for the current staff holder)
3. Writes one row to `data/macbook_intake.xlsx`

No cloud, no database, no auth layer beyond i3 session cookies/JWT held in the browser. A Windows Task Scheduler job restarts the stack at 7PM daily.

---

## 2. Fixed Architecture

```
Firefox Extension (MV2)
  ↕ WebSocket ws://localhost:4321/ws
Node.js Relay (port 4321) — serves frontend, bridges extension
  ↕ HTTP POST http://127.0.0.1:8000/process (internal only)
Python FastAPI + openpyxl
  → data/macbook_intake.xlsx
```

Tech workflow: double-click `start.bat` → browser opens relay UI → extension loaded once per Firefox shift via `about:debugging`.

**File ownership map (summary):**

```
TRC_Opt/
├── AGENTS.md                    ← project source of truth for agents
├── relay/server.js              ← Node relay, port 4321
├── backend/                     ← FastAPI, break_counter, excel_writer, models
├── extension/                   ← production Firefox extension (MV2)
├── extension-test/              ← throwaway diagnostic extension (NOT production)
├── frontend/                    ← NOT BUILT YET (Session 6)
├── data/macbook_intake.xlsx     ← write .value only, rows 4+
├── cursor_prompts/              ← session build prompts
└── documents/                   ← discovery dumps, this report
```

---

## 3. The Discovery Journey

### Original plan (Sessions 0–5 spec)

Automate i3 **via DOM**: click Reports filters, download CSV, search devices, open History tab, scrape table cells. Session 0 was selector discovery; Sessions 1–4 built relay/backend; Session 5 was the extension.

### What actually happened on 2026-06-23

Live investigation on `ims.lisd.net` proved **DOM automation is not viable**. The project **pivoted to direct REST API calls** from `content.js`. All findings are documented in `extension/i3-selectors.md`.

**Key conclusion:** i3 is Flutter CanvasKit. The UI is painted pixels on a `<canvas>`. There are no stable DOM selectors for buttons, tables, or tabs under normal operation.

---

## 4. How extension-test Works

**Purpose:** Throwaway diagnostic Firefox MV2 extension (v0.5.6). **Not used in production.** Production code lives in `extension/`.

Reference selectors and API contracts: `extension/i3-selectors.md`.

### Load

1. Firefox → `about:debugging`
2. **This Firefox** → **Load Temporary Add-on…**
3. Select `extension-test/manifest.json`

Reload the add-on after any code change (or restart Firefox). Requires Firefox 126+.

### Permissions

`downloads`, `activeTab`, `tabs`, `storage`, `clipboardWrite`, `*://ims.lisd.net/*`

### Files

| File | Role |
|------|------|
| `manifest.json` | MV2 manifest, content script on `ims.lisd.net` |
| `popup.html` / `popup.js` | Trigger tests, API lookup, download JSON |
| `test-runner.js` | Content script — selector probes, full dump, API test (~1900 lines) |
| `background.js` | Blob URL downloads (Firefox requires background context for `browser.downloads`) |

### Popup actions

#### 1. Run Selector Tests (elements 1–12)

Probes `flt-semantics-host` for Flutter accessibility nodes. Tests 12 targets from the original automation spec:

| Scope | Elements | Prerequisites |
|-------|----------|---------------|
| Reports (1–5) | Site filter, TRC checkbox, Done, Search, Download | Navigate to `#/inventory/settings/reports`; open Sitename filter for element 2 |
| Search (6–8) | Tag/Serial dropdown, search input, autocomplete row | Navigate to inventory search; type query for element 8 |
| History (9–12) | History Details tab, table, date rows, column headers | Open device detail modal; click History Details tab |

- Waits up to 20s for semantics tree to populate
- Banner: `i3 Test: X pass / Y fail` (top-right, 15s)
- Full report auto-saves to **Downloads** as `i3-selector-report-{timestamp}.txt`
- Small reports (<80KB) also copy to clipboard
- DevTools filter: `i3 Tester VERIFY`

#### 2. Enable Semantics

Attempts to force Flutter's accessibility tree:

- Click hidden "Enable accessibility" button in `flt-glass-pane` shadow DOM
- Tab key dispatch on glass pane
- Custom accessibility events

**Result in practice:** tree stays empty under normal use. Confirms DOM selector approach is dead.

#### 3. Full Site Dump

Captures:

- Shadow DOM structure (`flt-glass-pane`, canvas)
- `localStorage` / `sessionStorage` (includes JWT keys)
- Resource timing (all network URLs)
- Window globals (Flutter-related)
- Proxy text-editing inputs
- Page-context fetch/XHR interceptor (see bug below)
- Partial document HTML

Saves to Downloads as `i3-full-dump-{timestamp}.txt`.

**Note:** Interact with i3 (search, History Details, export) *before* running to capture more API traffic in resource timing.

#### 4. API Lookup Test

Enter asset tag → calls the same endpoint production `content.js` uses:

```
GET /inventory/transfer/getTagInformationByTagOrSerialId/{tag}/0
```

Renders serial, product, school, break count preview, and history table with TRC InRepair rows highlighted. **No relay or backend needed** — validates auth + API contract in isolation.

#### 5. Screenshot / Save / Copy

- Screenshot via `browser.tabs.captureVisibleTab`
- Reports >80KB skip clipboard (use saved file)
- Save File / Save As re-downloads last report from memory

### Console verification

| Where | Filter |
|-------|--------|
| i3 tab DevTools | `i3 Tester VERIFY` |
| Extension background | `about:debugging` → extension → Inspect |

### Fetch interceptor bug (extension-test only)

`interceptedApiCalls` is always `[]` in dumps despite interceptor script being injected.

**Root cause:** Firefox **Xray wrapper** — `CustomEvent`s dispatched in page script context are not received by content script's `window.addEventListener`.

**Workaround (not implemented):** DOM element event bus or `localStorage` polling.

**Practical consequence:** For request/response bodies, use Firefox DevTools → Network tab. Resource timing still captures all URLs.

---

## 5. i3 Technical Findings

### 5.1 Flutter CanvasKit — UI is not DOM

| Fact | Detail |
|------|--------|
| Renderer | `body[flt-renderer="canvaskit (auto-selected)"]` |
| UI rendering | Single `<canvas>` inside `flt-glass-pane` shadow DOM |
| Viewport example | 2144×401 visible; canvas intrinsic ~2144×893 |
| Semantics host | `flt-semantics-host` **present but 0 children always** |
| Real DOM elements | Only hidden `input.flt-text-editing` proxy fields (off-screen via CSS transform matrix) |

**Conclusion:** `flt-semantics[aria-label=...]` selectors **never match** in normal operation.

### 5.2 Selector test results (captured 2026-06-23)

From `documents/OLD/i3-selector-report-2026-06-23T18-51-15-026Z.txt` on Reports page:

```
Summary: pass=0 fail=6 warn=0
Semantics ready: false (waited 20s)
semanticsNodes: 0, buttons: 0, checkboxes: 0, tabs: 0
textEditingInputs: 2 (both off-screen, 0×0 rect)
All unique aria-labels: (empty)
```

All 12 original DOM automation targets failed. The original element map (Reports filter, TRC checkbox, Download Report, History tab, etc.) is **obsolete for automation**.

### 5.3 Authentication (DevTools-confirmed)

**Token storage:**

```js
JSON.parse(localStorage.getItem("flutter.loginToken"))  // outer quotes — must parse
localStorage.getItem("flutter.isAuthenticated") === "true"
localStorage.getItem("flutter.userId")  // e.g. "65"
```

**Required request headers** (from `documents/request headers.txt`):

```
Authorization: {bare JWT}     ← NO "Bearer " prefix
Accept: application/json
Content-type: application/json; charset=utf-8
credentials: "include"        ← sends JSESSIONID cookie (required)
```

**Token lifetime:** ~10 hours (`exp` in JWT payload). **No refresh endpoint** — expired token requires manual re-login to i3.

**JSESSIONID:** Server rotates on every response (`Set-Cookie`); browser handles automatically.

### 5.4 Confirmed API endpoints

#### Device lookup — PRIMARY endpoint for intake ✅

```
GET /inventory/transfer/getTagInformationByTagOrSerialId/{tagOrSerial}/0
```

- `{tagOrSerial}` — asset tag string (e.g. `F6QDL039J28K`)
- `/0` — site ID; `0` = all sites
- Returns serial, product, school, **and full device history** in one response
- **No separate history endpoint exists** — History Details tab renders already-loaded data

**Field mapping:**

| Our field | API field | Notes |
|-----------|-----------|-------|
| `serial` | `serialNo` | |
| `product_name` | `productName` | |
| `school_name` | `siteName` | |
| history array | `listOfResponses` | newest first |
| `date` | `listOfResponses[i].date` | Convert `"YYYY-MM-DD HH:mm:ss.SSS"` → `"MM-DD-YYYY HH:MM"` |
| `assigned_to` | `listOfResponses[i].inPlaceType` | e.g. `"Staff ( EP12345 )"`, `"Room ( 48551 )"` |
| `break_name` | `listOfResponses[i].strike` | **Unreliable — not used for counting** |
| `site_name` | `listOfResponses[i].siteName` | |
| `status` | `listOfResponses[i].status` | e.g. `"InRepair"`, `"Available"`, `"Disposed"` |

**Sample tag tested:** `F6QDL039J28K` (iPad). TRC `siteId` = **145**.

**Date conversion (content.js):**

```js
function convertDate(apiDate) {
  const spaceIdx = apiDate.indexOf(" ");
  const datePart = apiDate.slice(0, spaceIdx);
  const timePart = apiDate.slice(spaceIdx + 1);
  const [yyyy, mm, dd] = datePart.split("-");
  const [HH, MM] = timePart.split(":");
  return `${mm}-${dd}-${yyyy} ${HH}:${MM}`;
}
```

#### Reports search — NOT needed for intake ✅ (documented for reference)

```
POST /inventory/reports/reportsBasedOnSearch
```

- Returns **JSON**, not CSV
- **`csv_parser.py` is retired** — incompatible with actual API response shape
- Intake workflow does not call this endpoint

#### History endpoint — DOES NOT EXIST as separate call

History is embedded in `getTagInformationByTagOrSerialId` response (`listOfResponses`).

#### Other startup endpoints (reference only)

```
GET /inventory/deviceType/findAll
GET /zones/fetchAllSchoolsWithPagination?page=0&size=500&userId={userId}
GET /projectSettings/getProjectSettings
GET /inventory/reportSearchTemplate/getReportSearchTemplatesForUser/{uid}
... (see extension/i3-selectors.md for full list)
```

### 5.5 DOM inspector script (Session 0 alternate tool)

`cursor_prompts/IMS_DOM_INSPECTOR.md` contains a paste-into-console DOM inspector for targets 1–12. Same conclusion on CanvasKit i3: standard DOM queries find almost nothing useful. The `extension-test` tool superseded this for systematic capture.

### 5.6 localStorage keys observed (from full dump)

```
flutter.userId, flutter.loginToken, flutter.isAuthenticated
flutter.loginUser, flutter.firstname, flutter.roleName, flutter.roleId
flutter.authType, flutter.isdName, flutter.modulesListToShow
flutter.policiesListToShow, flutter.siteIds, flutter.moduleId
```

---

## 6. Architectural Pivot — Production Extension

**Decision taken:** Option A — retire CSV path; extension sends device fields directly to relay.

`ProcessRequest` in `models.py` now carries `serial`, `product_name`, `school_name`, and `history_rows` directly. No `csv_data`.

### Production files (Session 5 — code drafted)

**`extension/content.js`** — API-only, no DOM automation:

- `getToken()`, `isAuthenticated()`, `isTokenExpired()`
- `i3Fetch()` with correct headers + `credentials: "include"`
- `convertDate()` for break_counter format
- `lookupDevice(assetTag)` → maps `listOfResponses` to `history_rows`
- Responds to `{ action: "run_intake", assetTag }` with `{ type: "device_ready", ... }` or error

**`extension/background.js`:**

- WebSocket to `ws://localhost:4321/ws`, reconnect on close (3s delay, no max retries)
- On `start_intake`: find ims.lisd.net tab → `sendMessage` to content.js
- On `device_ready`: POST to `http://localhost:4321/extension-data`

**`extension/manifest.json`:** MV2, permissions `activeTab` + `tabs`, content script on `https://ims.lisd.net/*`

---

## 7. Backend Status

| Module | Status | Notes |
|--------|--------|-------|
| `relay/server.js` | ✅ Complete | Port 4321, spawns FastAPI, WebSocket bridge, `/start-intake`, `/extension-data` |
| `backend/models.py` | ✅ Complete | `ProcessRequest` with direct device fields (no `csv_data`) |
| `backend/break_counter.py` | ✅ Complete | TRC InRepair counting since Staff EP assignment |
| `backend/excel_writer.py` | ✅ Complete | Writes row 4+, values only, columns B–I |
| `backend/main.py` | ✅ Complete | Single `/process` endpoint |
| `backend/csv_parser.py` | 🗄️ Retired | Still in repo, not imported |
| `frontend/` | ❌ Not built | Session 6 pending |
| Session 7 wiring verification | ❌ Not run | |

---

## 8. Build Session Status

```
Session 0: i3 discovery         ✅ COMPLETE — conclusion: use API, not DOM
Session 1: Relay + scaffold     ✅ COMPLETE
Session 2: Models               ✅ COMPLETE (csv retired)
Session 3: Break counter+Excel  ✅ COMPLETE
Session 4: FastAPI              ✅ COMPLETE
Session 5: Firefox extension    🟡 CODE DRAFTED — NOT VERIFIED (see Section 9)
Session 6: Frontend UI          ❌ NOT STARTED
Session 7: Wiring verification  ❌ NOT STARTED
```

---

## 9. Session 5 — Corrected Status

> **Do not treat Session 5 as complete.** Some repo docs (`extension/i3-selectors.md`, `POC_BUILD_PROMPTS (2).md`) label it "COMPLETE" because the three extension files were written after the API pivot. That overstates reality.

### What exists (code written)

| File | Present | Implements |
|------|---------|------------|
| `extension/manifest.json` | ✅ | MV2, content script on ims.lisd.net |
| `extension/content.js` | ✅ | API lookup, auth checks, history mapping |
| `extension/background.js` | ✅ | WebSocket relay bridge, POST `/extension-data` |

The API approach in `content.js` matches confirmed DevTools contracts (bare JWT, `credentials: "include"`, date conversion, history field mapping).

### What is NOT done

1. **Never tested through the full stack** — no `frontend/` yet, so the path `frontend → relay → extension → i3 → FastAPI → Excel` has not been exercised.

2. **extension-test API Lookup ≠ production extension wiring** — the test popup validates the i3 API call in isolation. Production `extension/` through relay has not been verified.

3. **Docs contradict themselves** — `i3-selectors.md` simultaneously says "Session 5 COMPLETE ✅" and "Interface change required — needs approval" / "Awaiting decision before writing content.js". Stale blocks were never cleaned up.

4. **Spec vs implementation gaps:**

   | POC spec | Actual code |
   |----------|-------------|
   | Background creates i3 tab if none open | Only queries existing tabs; errors if none found |
   | `{ type: "intake_complete" }` via `onMessage` | Uses `{ type: "device_ready" }` as `sendMessage` response |
   | Max 10 WebSocket reconnect attempts | Retries forever every 3s |
   | DOM automation + CSV download | Correctly abandoned for API approach |

5. **Real MacBook validation open** — Staff EP row format, MacBook-specific history, and break count accuracy not confirmed on a live MacBook tag through the production extension path.

### What would actually complete Session 5

1. Build Session 6 frontend **or** manually POST to `/start-intake` while relay + extension are running.
2. Run one full intake with a real asset tag on a machine where i3 is logged in.
3. Confirm Excel row written, break count sane, status/errors propagate via frontend WebSocket.
4. Fix any wiring bugs found (tab creation, message types, reconnect policy if desired).
5. Update docs to reflect verified status — remove premature "COMPLETE" labels.

### Accurate label

**Session 5: 🟡 Code drafted, not verified**

---

## 10. Interface Contracts

Do not change without explicit approval. Source of truth: `AGENTS.md`.

### Relay → Extension (WebSocket `/ws`)

```json
{ "type": "start_intake", "payload": { "asset_tag": "string" } }
```

Extension → Relay status/error:

```json
{ "type": "status", "step": "string", "message": "string" }
{ "type": "error", "step": "string", "message": "string" }
```

### Extension → Relay (HTTP POST `/extension-data`)

```json
{
  "serial": "string",
  "product_name": "string",
  "school_name": "string",
  "history_rows": [
    {
      "date": "MM-DD-YYYY HH:MM",
      "assigned_to": "string",
      "break_name": "string",
      "site_name": "string",
      "status": "string"
    }
  ]
}
```

Relay merges with session `{ iiq_ticket, asset_tag, tech_initials }` before FastAPI.

### FastAPI `/process`

**Request:** all seven fields above plus session fields.

**Success:**

```json
{ "success": true, "serial": "...", "product_name": "...", "school_name": "...", "break_count": 0 }
```

**Failure:**

```json
{ "success": false, "error": "plain English description" }
```

### Relay → Frontend (WebSocket `/frontend-ws`)

```json
{ "type": "status", "message": "string" }
{ "type": "error", "message": "string" }
{ "type": "done", "serial": "...", "product_name": "...", "school_name": "...", "break_count": 0 }
```

---

## 11. Break Counting Logic

### Business rule (confirmed 2026-06-23)

- A **break** = device arrived at **Technology Repair Center** for repair.
- Counted when `site_name == "Technology Repair Center"` AND `status == "InRepair"`.
- **NOT** counted from `strike` / `break_name` — damage logging in i3 is inconsistent.
- True business rule: breaks are **per person per device type** across all devices that person has held.
- POC implementation: **per-device floor count** since current staff EP assignment (known gap).

### Algorithm (`break_counter.py`)

1. History rows are **newest first**.
2. Find first row where `_norm(assigned_to)` contains `"Staff (EP"`.
3. `_norm()` collapses `"Staff ( EP12345 )"` → `"Staff (EP12345)"`.
4. Parse that row's date as `cutoff_date`.
5. Count rows where:
   - `site_name == "Technology Repair Center"`
   - `status == "InRepair"`
   - `parsed_date >= cutoff_date`
6. No EP row found → log warning, return 0 (never raise).

### Edge case handled

Schools have rooms named "TRC Repair" with `status=InRepair` but `site_name` = school name, not TRC. Those rows are correctly excluded by the `site_name` check.

### Known POC gap

Under-counts when the same person previously broke a different device of the same type. Full per-person-per-type counting requires querying all device histories for an EP ID — future enhancement.

---

## 12. Evidence Artifacts in Repo

| Path | Contents |
|------|----------|
| `extension/i3-selectors.md` | API + architecture reference (has stale "COMPLETE" labels — see Section 9) |
| `extension-test/README.md` | How to run the diagnostic extension |
| `documents/request headers.txt` | Live DevTools capture of working API request |
| `documents/i3-full-dump-2026-06-23T18-59-43-016Z.txt` | Full site dump from Reports page |
| `documents/OLD/i3-selector-report-2026-06-23T18-51-15-026Z.txt` | Selector test showing all failures (0 pass / 6 fail) |
| `documents/OLD/` | Earlier dumps, photos, superseded selector notes |
| `site_downloads/` | Saved i3 page JS/HTML for offline reference |
| `cursor_prompts/POC_BUILD_PROMPTS (2).md` | Session-by-session build plan |
| `cursor_prompts/IMS_DOM_INSPECTOR.md` | Session 0 console DOM inspector snippet |
| `AGENTS.md` | Project source of truth for agents |

---

## 13. Open Risks & Unverified Items

1. **`inPlaceType` format on real MacBooks** — Sample data was iPad. Staff format `"Staff ( EP12345 )"` expected but not verified on live MacBook history. `_norm()` handles spacing.

2. **`strike` field on MacBooks** — Possibly `"Staff - Device - Damaged"` but unconfirmed; correctly ignored for counting.

3. **Per-person-per-type break counting** — Known gap; POC under-counts.

4. **Token expiry UX** — Error path exists in content.js; frontend (Session 6) must display it clearly.

5. **Extension reload** — Temporary add-on clears on Firefox restart; tech must reload once per shift.

6. **Stale agent rules** — `.cursor/rules/004-extension.mdc` still describes DOM automation + CSV download watcher. Contradicts current API-only approach.

7. **POC_BUILD_PROMPTS Session 5 code block** — Still mentions `"Bearer " + getToken()` in one place; actual `content.js` correctly uses bare JWT. Trust implemented code.

8. **Session 5 end-to-end** — Not validated. See Section 9.

---

## 14. Recommended Next Steps

1. **Session 6 — Frontend** (`frontend/index.html`, `style.css`, `main.ts`): LISD-branded intake form, WebSocket to `/frontend-ws`, POST `/start-intake`. Design tokens in `.cursor/rules/002-lisd-design.mdc`.

2. **Complete Session 5 verification:**
   - Run full intake (frontend or curl) with relay + extension + logged-in i3 tab
   - Confirm Excel write and break count
   - Fix tab-creation gap in background.js if needed

3. **Session 7 — Wiring verification:** Run 8-item checklist in `POC_BUILD_PROMPTS (2).md`.

4. **Real MacBook test** via extension-test API Lookup popup — verify Staff EP row format and break count against manual i3 check.

5. **Update stale docs:** `i3-selectors.md`, `004-extension.mdc`, remove premature Session 5 "COMPLETE" labels until E2E passes.

6. **Optional future:** Per-person-per-type break counting via additional i3 API queries for EP ID across all devices of same type.

---

## 15. Quick Reference — Production Intake Flow

```
Tech fills form → POST /start-intake { iiq_ticket, asset_tag, tech_initials }
Relay stores session → WS { start_intake, asset_tag } → extension background
Background → content.js { run_intake, assetTag }
content.js → GET getTagInformationByTagOrSerialId/{asset_tag}/0
  (JWT from localStorage + JSESSIONID cookie)
content.js → { type: "device_ready", serial, product_name, school_name, history_rows }
Background → POST /extension-data → FastAPI /process
  → count_breaks(history_rows) → write_intake_row() → Excel
Relay → WS frontend { type: "done", serial, product_name, school_name, break_count }
```

**One API call. No page navigation. No DOM clicks. No CSV.**

---

## Appendix: Original 12-Element DOM Map (Obsolete)

These were the Session 0 targets. All failed on CanvasKit i3. Kept for historical reference.

| # | Element | Original approach | Current approach |
|---|---------|-------------------|------------------|
| 1 | Site filter dropdown | `flt-semantics[aria-label="Select Sitename"]` | Not needed — API |
| 2 | TRC checkbox | semantics checkbox | Not needed — API |
| 3 | Done/Apply button | semantics button | Not needed — API |
| 4 | Search button | semantics button | Not needed — API |
| 5 | Download Report | semantics button | Not needed — API |
| 6 | Tag/Serial mode dropdown | semantics | Not needed — API |
| 7 | Search input | `input.flt-text-editing` | Not needed — API |
| 8 | Device result row | semantics button | `GET getTagInformationByTagOrSerialId` |
| 9 | History Details tab | semantics tab | Not needed — history in lookup response |
| 10 | History table | `flt-semantics-scroll-overflow` | Not needed — API |
| 11 | History row (date pattern) | semantics aria-label | Not needed — API |
| 12 | Column headers | semantics labels | Not needed — API |

---

*Report generated 2026-06-23. Reflects repo state at time of writing. Session 5 status corrected per review — code exists, E2E verification pending.*
