# TRC_Opt — Agent Context

Read this file completely before writing any code. All decisions in this project flow from this document.

---

## What this project is

An internal LISD staff tool running on a single Windows machine at the Technology Repair Center. It automates the MacBook intake data entry workflow. A tech scans a barcode and fills two fields. The system handles everything else and writes a row to an Excel sheet.

This is not a web app. It has no cloud deployment, no authentication layer, no external users, and no database. A Windows Task Scheduler job restarts the whole thing at 7PM daily, which is the only session management that exists.

---

## Architecture — fixed, do not redesign

```
Firefox Extension
      ↓  WebSocket (ws://localhost:4321/ws)
Node.js Relay — port 4321
      ↓  HTTP POST to 127.0.0.1:8000 (internal only)
Python FastAPI — subprocess, never network-exposed
      ↓
openpyxl → data/macbook_intake.xlsx
```

The relay also serves the frontend at `http://[local-ip]:4321` as static files. The relay pushes status messages to the browser via a second WebSocket channel at `/frontend-ws`. FastAPI is spawned by the relay as a child process and is only reachable at `127.0.0.1:8000` — never from the browser or extension directly.

---

## File ownership map

```
TRC_Opt/
├── AGENTS.md                     ← this file, do not modify during builds
├── relay/
│   ├── server.js                 ← Node.js relay (CommonJS, no build step)
│   └── package.json
├── backend/
│   ├── main.py                   ← FastAPI app, single /process endpoint
│   ├── models.py                 ← Pydantic models
│   ├── break_counter.py          ← history rows → int (counts TRC repair visits)
│   ├── excel_writer.py           ← writes one row to macbook_intake.xlsx
│   ├── csv_parser.py             ← RETIRED: no longer imported or called
│   └── requirements.txt
├── frontend/
│   ├── index.html
│   ├── style.css
│   ├── main.ts                   ← compiles to main.js, referenced by index.html
│   └── assets/                  ← logo files go here when supplied
├── extension/
│   ├── manifest.json             ← Firefox MV2
│   ├── background.js             ← WebSocket client, tab management, HTTP relay to /extension-data
│   ├── content.js                ← i3 API calls on ims.lisd.net (no DOM automation)
│   └── i3-selectors.md           ← confirmed API contracts and field reference
├── data/
│   └── macbook_intake.xlsx       ← never recreate, only write values to existing rows
├── start.bat                     ← double-click to start everything from cold (Node + browser)
└── restart.bat                   ← taskkill node + python, restart both (run by Task Scheduler at 7PM)
```

---

## Interface contracts — do not change these without explicit instruction

### Relay endpoints

| Method | Path | Body | Returns |
|--------|------|------|---------|
| GET | / | — | serves index.html |
| POST | /start-intake | `{ iiq_ticket, asset_tag, tech_initials }` | `{ status: "started" }` or `{ status: "error", error: "..." }` |
| POST | /extension-data | `{ serial, product_name, school_name, history_rows }` | FastAPI /process response verbatim |
| WS | /ws | — | extension connection |
| WS | /frontend-ws | — | browser connection |

### WebSocket message shapes

**Extension → Relay (`/ws`):**
```json
{ "type": "status", "step": "string", "message": "string" }
{ "type": "error", "step": "string", "message": "string" }
```
Device data is sent via `POST /extension-data` (HTTP), not via WebSocket.

**Relay → Frontend (`/frontend-ws`):**
```json
{ "type": "status", "message": "string" }
{ "type": "error", "message": "string" }
{ "type": "done", "serial": "...", "product_name": "...", "school_name": "...", "break_count": 0 }
```

**Relay → Extension (`/ws`):**
```json
{ "type": "start_intake", "payload": { "asset_tag": "string" } }
```

### FastAPI /process

**Request** (matches `ProcessRequest` in models.py):
```json
{
  "iiq_ticket":    "string",
  "asset_tag":     "string",
  "tech_initials": "string",
  "serial":        "string",
  "product_name":  "string",
  "school_name":   "string",
  "history_rows": [
    {
      "date":        "MM-DD-YYYY HH:MM",
      "assigned_to": "string",
      "break_name":  "string",
      "site_name":   "string",
      "status":      "string"
    }
  ]
}
```
All device fields come directly from the i3 `getTagInformationByTagOrSerialId` API response. `csv_data` has been removed — `csv_parser.py` is retired.

**Success response:**
```json
{ "success": true, "serial": "...", "product_name": "...", "school_name": "...", "break_count": 0 }
```

**Failure response:**
```json
{ "success": false, "error": "plain English description" }
```

---

## Stack constraints — exact, no substitutions

| Layer | Technology | Notes |
|-------|-----------|-------|
| Relay | Node.js, CommonJS, Express, ws | No TypeScript, no ESM, no build step |
| Backend | Python, FastAPI, uvicorn, pandas, openpyxl, pydantic | No SQLAlchemy, no databases |
| Frontend | HTML, CSS, TypeScript → compiled JS | No React, no Vue, no Astro; Google Fonts (Montserrat/Merriweather) via index.html only |
| Extension | Firefox MV2, unpacked | Use `browser.*` API, never `chrome.*`. Load via `about:debugging > This Firefox > Load Temporary Add-on > manifest.json`. No signing needed. Reloads on Firefox restart — tech loads once per shift. |
| Excel | openpyxl write `.value` only | Never touch cell formatting |

---

## Excel file rules — critical

- File: `data/macbook_intake.xlsx`, Sheet: `Sheet1`
- `B1:H1` merged cell — never touch
- Row 2: headers, dark blue fill — never touch
- Row 3: template data, yellow fill — never touch, never overwrite
- Rows 4–522: pre-allocated with formatting — write `.value` only, never `.font`/`.fill`/`.border`/`.alignment`/`.number_format`
- Column A: dark blue fill on every row — never write to column A
- Write target: first row ≥ 4 where `ws.cell(row=n, column=2).value is None`
- Column write map: B=date, C=iiq_ticket, D=skip, E=asset_tag, F=serial, G=school_name, H=tech_initials, I=break_count

---

## Business logic — exact

### Device lookup (content.js → i3 API)
- i3 API: `GET https://ims.lisd.net/inventory/transfer/getTagInformationByTagOrSerialId/{assetTag}/0`
- Auth headers (exact format confirmed from DevTools 2026-06-23):
  - `Authorization: {bare JWT}` — **no "Bearer " prefix**, raw token only
  - `Accept: application/json`
  - `Content-type: application/json; charset=utf-8`
  - `credentials: "include"` — required for `JSESSIONID` session cookie (auto-sent by browser)
- Token: `JSON.parse(localStorage["flutter.loginToken"])` — stored with outer quotes, must parse
- Token lifetime: ~10 hours. Decode `exp` from JWT payload to check expiry before calling.
- No refresh endpoint exists — expired token requires tech to log back in to i3 manually.
- Response fields used: `serialNo`, `productName`, `siteName`, `listOfResponses`
- `listOfResponses` contains the full device history, newest first
- History row mapping (API → history_rows dict):

| history_rows field | i3 API field | Example value |
|--------------------|-------------|---------------|
| `date`        | `listOfResponses[i].date` converted | `"09-12-2025 21:26"` (MM-DD-YYYY HH:MM) |
| `assigned_to` | `listOfResponses[i].inPlaceType` | `"Staff ( EP12345 )"`, `"Room ( 48551 )"`, `"Student ( 123 )"` |
| `break_name`  | `listOfResponses[i].strike` | `""` or `"1st iPad Damaged"` — unreliable, not used for counting |
| `site_name`   | `listOfResponses[i].siteName` | `"Technology Repair Center"` or school name |
| `status`      | `listOfResponses[i].status` | `"InRepair"`, `"Available"`, `"Disposed"`, `"In_use"`, `"Submitted"` |

- Date conversion: API sends `"YYYY-MM-DD HH:mm:ss.SSS"` → split on space and `-`, reconstruct as `"MM-DD-YYYY HH:MM"`
- No DOM automation. No UI interaction. No MutationObservers.

### Break counting (break_counter.py)
**What a "break" means (confirmed 2026-06-23):**
- A break is counted when a device arrives at Technology Repair Center for repair.
- Damage logging in i3 is **not consistent** — `break_name`/`strike` fields are unreliable and must NOT be used for counting.
- Breaks are tied to the **person per device type** (e.g., John's total MacBook repairs), not per individual device instance.

**Current implementation (POC — per-device floor count):**
- Input: list of history row dicts, newest first, each with `date`, `assigned_to`, `site_name`, `status`
- Find the FIRST row where `"Staff (EP"` is a substring of `_norm(assigned_to)`
  - `_norm()` collapses interior spaces: `"Staff ( EP12345 )"` → `"Staff (EP12345)"`
- Record that row's `date` as `cutoff_date` — parse with `strptime(date_str, "%m-%d-%Y %H:%M")`
- Count rows where `site_name == "Technology Repair Center"` AND `status == "InRepair"` AND `parsed_date >= cutoff_date`
- No EP row found → log warning and return 0 — never raise

**Known gap:** This counts TRC repair visits for the current device only, since the current staff member received it. It does NOT count repairs the same person caused on other devices of the same type. Full per-person-per-type counting requires querying all device histories for that EP ID — a future enhancement.

---

## Design — LISD brand (Style Guide v3, lisd.net/production2)

```css
--lisd-primary:   #073772;   /* primary color, headers, site header, light H1 */
--lisd-secondary: #f1b51c;   /* CTA button bg, dark H1 */
--lisd-text:      #373737;   /* body copy and labels (light) */
--lisd-white:     #FFFFFF;   /* page background (light), card surface */
--lisd-border:    #D4D8E1;   /* input borders (light) */
--lisd-green:     #0b6e27;   /* success */
--lisd-error:     #B63D4B;   /* error */

/* Dark theme (html[data-theme="dark"]) */
--bg-page:    #07111C;
--bg-card:    #0D1B2A;
--bg-input:   #0A1520;
--border:     #1E3A5A;
--text-main:  #E0EAF4;
--text-label: #9DBBD6;
```

Fonts: Montserrat (body, labels, buttons, inputs) + Merriweather (headings h1–h4, status) via Google Fonts `<link>` tags in `frontend/index.html` only.

Logo: `frontend/assets/lisd-logo.png` — file provided separately, use `<img>` tag only, no placeholder SVGs.

---

## Agent boundaries

✅ Always: Follow the interface contracts above. Write `.value` only on Excel cells. Use `browser.*` in the extension. Keep FastAPI internal.

⚠️ Ask first: Any new npm or pip dependency. Any change to the interface contracts above. Any change to how the relay spawns FastAPI.

🚫 Never: Write credentials to disk. Expose FastAPI to the network. Modify Excel cell formatting. Add React, Vue, or any JS framework. Use `chrome.*` in the extension. Touch rows 1–3 in the Excel sheet. Write to Excel column A.

---

## Current build status

POC (MacBook Intake) — in progress. All specs in `cursor_prompts/POC_BUILD_PROMPTS.md`.
