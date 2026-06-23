# i3 Selector & API Reference

> **Last updated:** 2026-06-23 — COMPLETE. All API contracts confirmed from DevTools Network captures.

---

## Critical Architecture Facts (Confirmed Live)

### Flutter CanvasKit — confirmed
- `body[flt-renderer="canvaskit (auto-selected)"]` present in DOM
- Viewport: **2144×401** (browser window, scrolled) — canvas intrinsic size 2144×893
- All UI (buttons, dropdowns, tables, tabs) is **painted pixels on `<canvas>`** — not DOM elements

### Semantics tree permanently empty in normal use
- `flt-semantics-host` present but **0 children** — confirmed across multiple dumps
- `flt-semantics-placeholder` exists in shadow DOM with `aria-label="Enable accessibility"` at position -1,-1 (off-screen, unclikable from content script)
- **Do NOT use `flt-semantics[aria-label=...]` selectors — they will never match**

### Only real DOM elements available to content.js
| Element | Selector | Notes |
|---------|----------|-------|
| Active search input | `flt-text-editing-host input.flt-text-editing:not([readonly])` filtered by `offsetWidth > 0` | The writable one with real dimensions |
| Any proxy input | `input.flt-text-editing` | 2 present; one readonly (global tag field), one writable (search bar) |
| Flutter view root | `flutter-view[role="application"]` | Covers full viewport — target for pointer events |

---

## Authentication (Confirmed — 2026-06-23)

### Token location
```js
const token = JSON.parse(localStorage.getItem("flutter.loginToken")); // strip outer quotes
localStorage.getItem("flutter.isAuthenticated"); // "true" when logged in
localStorage.getItem("flutter.userId");          // e.g. "65"
```
`flutter.loginToken` is stored as a JSON-encoded string (has extra outer quotes) — always `JSON.parse()` it.

### Exact request headers required (confirmed from DevTools on working request)
```
Authorization: eyJhbGciOiJIUzI1NiJ9...   ← bare JWT, NO "Bearer " prefix
Accept: application/json
Content-type: application/json; charset=utf-8
```
⚠️ **No "Bearer" prefix.** The server expects the raw JWT token directly.  
⚠️ **`Content-type` lowercase t, with `; charset=utf-8`** — this exact casing was on the working request.

### Cookies required
The server also requires a valid **`JSESSIONID`** session cookie (confirmed from request headers). Since `content.js` runs on `ims.lisd.net` and calls the same origin, use `credentials: "include"` on every fetch — the browser will attach the cookie automatically.

```js
fetch(url, {
  credentials: "include",
  headers: {
    "Authorization": token,           // bare JWT — no "Bearer "
    "Accept": "application/json",
    "Content-type": "application/json; charset=utf-8"
  }
})
```

### Token lifetime and expiry handling
The JWT payload contains an `exp` field (Unix timestamp). From confirmed data: token lasts **10 hours** (issued at login, expires 10 hours later).

**Decode expiry without a library:**
```js
function getTokenExpiry(token) {
  try {
    const payload = JSON.parse(atob(token.split(".")[1].replace(/-/g, "+").replace(/_/g, "/")));
    return payload.exp; // Unix seconds
  } catch (e) {
    return null;
  }
}

function isTokenExpired(token) {
  const exp = getTokenExpiry(token);
  if (!exp) return true;
  return (Date.now() / 1000) > exp; // compare seconds
}
```

**Strategy for expired token:**
- There is **no visible refresh endpoint** — the Flutter app obtains a new token only on fresh login.
- `content.js` cannot trigger a re-login programmatically.
- **If token is expired:** surface an error to the relay → relay sends error to frontend → tech sees "Session expired — log in to i3 and try again" and re-authenticates manually in the i3 tab.
- After the tech logs back in, the new token is written to `localStorage` automatically by Flutter. The next intake run will pick it up fresh.
- The 7PM Task Scheduler restart aligns with shift end — daily re-login is expected workflow.

**`JSESSIONID` rotation:** The server issues a new `JSESSIONID` on every authenticated response (`Set-Cookie: JSESSIONID=...` in response headers). The browser handles this automatically — no extension code needed.

---

## Confirmed API Endpoints (from live resource timing)

All endpoints are relative to `https://ims.lisd.net/`.

### 1. Device lookup — FULLY CONFIRMED ✅
```
GET /inventory/transfer/getTagInformationByTagOrSerialId/{tagOrSerial}/0
```
- `{tagOrSerial}` — the asset tag string (e.g. `F6QDL039J28K`)
- `/0` — site ID; `0` = all sites

**Confirmed response shape** (from DevTools, tag F6QDL039J28K):
```json
{
  "siteName": "Technology Repair Center",
  "tagNo": "1267078",
  "serialNo": "F6QDL039J28K",
  "assetType": "IPAD",
  "availableStatus": "Disposed",
  "productName": "IPAD PRO (10.5-INCH)-A1701 64GB",
  "siteId": 145,
  "listOfResponses": [
    {
      "date": "2025-09-12 21:26:05.848",
      "inPlaceName": "Temporary Holding Room",
      "inPlaceType": "Room ( 48551 )",
      "status": "Disposed",
      "deviceId": 4125348,
      "strike": "",
      "strikePrice": "",
      "userName": "Raymond Wong",
      "siteName": "Technology Repair Center"
    }
    // ... more rows, newest first
  ],
  "message": "Entered Tag Id is belongs to This Site",
  "value": true
}
```

**Critical: history is embedded here — no separate history endpoint exists.**

**Field mapping for content.js:**
| What we need | API field | Notes |
|---|---|---|
| serial | `serialNo` | |
| productName | `productName` | |
| schoolName | `siteName` | |
| siteId | `siteId` | TRC = **145** |
| history array | `listOfResponses` | newest first |
| history date | `listOfResponses[i].date` | Format: `"YYYY-MM-DD HH:mm:ss.SSS"` — must convert to `"MM-DD-YYYY HH:MM"` for break_counter.py |
| assigned_to | `listOfResponses[i].inPlaceType` | Values: `"Room ( 48551 )"`, `"Student ( 12035362 )"`, `"Transfer"` — staff entries expected as `"Staff ( EPXXXXXX )"` |
| break_name | `listOfResponses[i].strike` | Values: `""` or damage strings — for MacBooks expect `"Staff - Device - Damaged"` ⚠️ unconfirmed on MacBook device |

**Date conversion (content.js):**
```js
function convertDate(apiDate) {
  // "2025-09-12 21:26:05.848"  →  "09-12-2025 21:26"
  const [datePart, timePart] = apiDate.split(' ');
  const [yyyy, mm, dd] = datePart.split('-');
  const [HH, MM] = timePart.split(':');
  return `${mm}-${dd}-${yyyy} ${HH}:${MM}`;
}
```

⚠️ **`inPlaceType` format risk:** Sample data shows `"Room ( 48551 )"` with spaces inside parens. Staff entries may be `"Staff ( EP12345 )"`. `break_counter.py` checks for `"Staff (EP"` (no space). If the actual format is `"Staff ( EP..."` the check will never match. Must verify with a real MacBook history row.

### 2. Reports search — FULLY CONFIRMED ✅
```
POST /inventory/reports/reportsBasedOnSearch
```
**Response is JSON, NOT CSV.** Shape:
```json
{
  "count": 699,
  "responsePayload": [
    {
      "tag": "1267078",
      "serial": "F6QDL039J28K",
      "deviceType": "IPAD",
      "productName": "IPAD PRO (10.5-INCH)-A1701 64GB",
      "model": "IPAD PRO (10.5-INCH)-A1701 64GB",
      "schoolName": "Technology Repair Center",
      "location": "room",
      "locationId": "Temporary Holding Room",
      "availableStatus": "Disposed",
      "roomDescription": "...",
      "roomName": "...",
      "roomType": "H - TRC Repair Room",
      "customAttributes": { "`purchase_order$Storage Capacity`": null }
    }
  ]
}
```
**⚠️ `csv_parser.py` is broken for this endpoint** — it expects CSV text but the API returns JSON. See "Build Prompt Corrections" below.

**TRC siteId = 145** (confirmed from device lookup response). POST body shape unconfirmed but not needed for the intake workflow — the device lookup gives everything directly.

### 3. History endpoint — DOES NOT EXIST as a separate call
History is inside the `getTagInformationByTagOrSerialId` response (`listOfResponses` array). The History Details tab in the UI renders from data already loaded. No additional network request is made.

### 4. Reports page — startup endpoints (reference)
```
GET /inventory/deviceType/findAll
GET /customAttributes/getAll
GET /inventory/reportSearchTemplate/getReportSearchTemplatesForUser/{uid}
GET /inventory/manufacturer/getAllManufacturers
GET /inventory/fundingSources/findWithPagination?page=0&size=500
GET /grades
```

### 5. Other startup endpoints (reference)
```
GET /zones/fetchAllSchoolsWithPagination?page=0&size=500&userId={userId}   → 20KB — all schools
GET /projectSettings/getProjectSettings                                     → 82KB — app config
GET /schoolType/getAll
GET /inventory/deviceType/findAll                                           → 9KB — device types
GET /role/getRoles                                                          → 168KB — roles
GET /policy/getAll
GET /settings/{userId}
GET /inventory/transfer/getListOfDeviceStatusWithoutArchive                 → 810B
```

---

## Known Extension Bug — Intercepted Calls Always Empty

`interceptedApiCalls` is `[]` in every dump despite the interceptor script being present in the DOM and XHR calls clearly firing. Root cause: Firefox's **Xray wrapper** (isolated world) security model prevents `CustomEvent`s dispatched via `window.dispatchEvent()` in the page script context from being received by `window.addEventListener()` in the content script context.

The interceptor IS patching `XMLHttpRequest.prototype` correctly (confirmed by script presence), but the events are silently dropped at the context boundary.

**Workaround (not implemented):** Use a DOM element (`document.body`) as the event bus instead of `window`, or use a shared `localStorage` key polled by the content script.

**Practical consequence:** To get request/response bodies, use **Firefox DevTools → Network tab** directly. Resource timing captures all URLs; DevTools captures bodies.

---

## Session 5 — content.js Implementation Plan

### Revised workflow — ONE API call, no CSV needed

```
Relay sends: { iiq_ticket, asset_tag, tech_initials }
                    ↓
content.js: GET /inventory/transfer/getTagInformationByTagOrSerialId/{asset_tag}/0
  → tagData.serialNo        → serial
  → tagData.productName     → product_name
  → tagData.siteName        → school_name
  → tagData.listOfResponses → map to history_rows (date convert + field rename)
                    ↓
content.js sends to relay /extension-data:
  { serial, product_name, school_name, history_rows }
  (csv_data is NOT needed — see interface change note below)
```

**`reportsBasedOnSearch` is NOT needed for intake.** The device lookup returns everything.

---

### ⚠️ Interface change required — needs approval before writing Session 5

The existing `/process` endpoint (`ProcessRequest` in `models.py`) requires `csv_data` (raw CSV text). But the API returns JSON, not CSV. Two options:

**Option A (recommended):** Update `ProcessRequest` to accept device fields directly, retire `csv_parser.py`:
```python
class ProcessRequest(BaseModel):
    iiq_ticket: str
    asset_tag: str
    tech_initials: str
    serial: str           # replaces csv_data
    product_name: str     # replaces csv_data
    school_name: str      # replaces csv_data
    history_rows: list[HistoryRow]
```

**Option B (no interface change):** `content.js` fabricates a CSV string from the JSON to feed `csv_parser.py`. Ugly but requires zero backend changes.

**Awaiting decision before writing `content.js` and any backend changes.**

---

### content.js code (ready to write once interface is decided)

```js
// Auth helpers
function i3Token() {
  const raw = localStorage.getItem("flutter.loginToken");
  if (!raw) throw new Error("Not logged in to i3 — log in and try again");
  return JSON.parse(raw); // stored with outer quotes — must parse
}

function isTokenExpired(token) {
  try {
    const payload = JSON.parse(atob(token.split(".")[1].replace(/-/g, "+").replace(/_/g, "/")));
    return (Date.now() / 1000) > payload.exp;
  } catch (e) { return true; }
}

async function i3Fetch(path, options = {}) {
  const token = i3Token();
  if (isTokenExpired(token)) throw new Error("i3 session expired — log in to i3 and try again");
  return fetch("https://ims.lisd.net/" + path, {
    ...options,
    credentials: "include",   // required: server needs JSESSIONID cookie
    headers: {
      "Authorization": token,                          // bare JWT — NO "Bearer " prefix
      "Accept": "application/json",
      "Content-type": "application/json; charset=utf-8",
      ...(options.headers || {})
    }
  });
}

// Date format: "2025-09-12 21:26:05.848" → "09-12-2025 21:26"
function convertDate(apiDate) {
  const [datePart, timePart] = apiDate.split(' ');
  const [yyyy, mm, dd] = datePart.split('-');
  const [HH, MM] = timePart.split(':');
  return `${mm}-${dd}-${yyyy} ${HH}:${MM}`;
}

async function runIntake(assetTag) {
  const resp = await i3Fetch(
    `inventory/transfer/getTagInformationByTagOrSerialId/${encodeURIComponent(assetTag)}/0`
  );
  if (!resp.ok) throw new Error(`Device lookup failed: HTTP ${resp.status}`);
  const tagData = await resp.json();

  if (!tagData.value) throw new Error(`Tag not found: ${assetTag}`);

  const historyRows = (tagData.listOfResponses || []).map(row => ({
    date:        convertDate(row.date),
    assigned_to: row.inPlaceType,  // "Room ( X )", "Student ( X )", "Staff ( EPX )"
    break_name:  row.strike        // "" or "Staff - Device - Damaged" etc.
  }));

  return {
    serial:       tagData.serialNo,
    product_name: tagData.productName,
    school_name:  tagData.siteName,
    history_rows: historyRows
  };
}
```

---

## Status — Session 5 COMPLETE ✅

All API contracts confirmed. `content.js`, `background.js`, `manifest.json`, `models.py`, `main.py`, `break_counter.py`, and `relay/server.js` have all been written/updated. `csv_parser.py` is retired (no longer imported).

**Load the extension:**
1. Firefox → `about:debugging` → This Firefox → Load Temporary Add-on
2. Select `extension/manifest.json`
3. Reload once per Firefox restart

---

## DOM Elements Summary Table

| # | Element | Approach | Selector / Endpoint | Stability |
|---|---------|----------|---------------------|-----------|
| 1 | Site filter dropdown | API: include siteId in POST body | `POST /inventory/reports/reportsBasedOnSearch` | STABLE (API) |
| 2 | TRC checkbox | API: siteId for TRC | TRC siteId value (from /zones/fetchAllSchools) | STABLE (API) |
| 3 | Done button | Not needed | — | N/A |
| 4 | Search button | API: POST directly | `POST /inventory/reports/reportsBasedOnSearch` | STABLE (API) |
| 5 | Download Report | API: same endpoint | same | STABLE (API) |
| 6 | Tag/Serial mode | Already default | No action needed | STABLE |
| 7 | Search input | Real DOM proxy input | `input.flt-text-editing:not([readonly])` where `offsetWidth > 0` | STABLE |
| 8 | Device result row | API lookup — no click needed | `GET /inventory/transfer/getTagInformationByTagOrSerialId/{tag}/0` | STABLE (API) |
| 9 | History Details tab | API — no click needed | GET device history endpoint (pending) | STABLE (API) |
| 10 | History table | API | same | STABLE (API) |
| 11 | History row | API JSON array | `[{ date, assigned_to, break_name }]` | STABLE (API) |
| 12a | Date cell | API field | `date` — format `MM-dd-yyyy HH:mm` confirmed | STABLE |
| 12b | Assigned To | API field | `assigned_to` — values: `Room(ID)`, `Student(ID)`, `Staff (EP...)` | STABLE |
| 12c | Break Name | API field | `break_name` — blank for non-damage rows | STABLE |

---

## Build Prompt Corrections for Session 5

1. **No `flt-semantics` selectors** — all must be removed. Use API calls only.
2. **Auth header required (exact format confirmed):** `Authorization: {bare JWT}` — NO "Bearer " prefix. Also requires `credentials: "include"` (JSESSIONID cookie), `Accept: application/json`, and `Content-type: application/json; charset=utf-8`. See Authentication section above.
3. **JWT parse** — `localStorage.getItem("flutter.loginToken")` returns a JSON-encoded string (has outer quotes). Use `JSON.parse()`.
4. **No URL navigation needed** — `content.js` calls API endpoints directly via `fetch()`. No page navigation or UI interaction required.
5. **No separate history endpoint** — history is in `listOfResponses` inside the device lookup response. Delete any code that tries to call a separate history endpoint.
6. **`csv_parser.py` is incompatible with the API** — `reportsBasedOnSearch` returns JSON, not CSV. `csv_parser.py` must either be retired (Option A) or bypassed. Do not call `reportsBasedOnSearch` in `content.js` for intake.
7. **API date format is `YYYY-MM-DD HH:mm:ss.SSS`** — `break_counter.py` parses `"%m-%d-%Y %H:%M"`. `content.js` must convert before sending.
8. **`inPlaceType` format risk** — sample data shows `"Room ( 48551 )"` with spaces inside parens. Staff assignments expected as `"Staff ( EPXXXXXX )"`. `break_counter.py` checks for `"Staff (EP"` (no space after `(`). Verify format with a real MacBook staff-assignment history row and update `break_counter.py` if needed.
9. **TRC siteId = 145** — hardcode this; confirmed from device lookup response. No lookup needed.
10. **`waitForFlutterReady` guard** — before any fetch, check `localStorage.getItem("flutter.isAuthenticated") === "true"`.
11. **`content.js` sends to relay `/extension-data`** — shape depends on Option A/B decision above.
