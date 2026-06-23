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
│   ├── models.py                 ← Pydantic models and custom exceptions
│   ├── csv_parser.py             ← CSV text → DeviceInfo
│   ├── break_counter.py          ← history rows → int
│   ├── excel_writer.py           ← writes one row to macbook_intake.xlsx
│   └── requirements.txt
├── frontend/
│   ├── index.html
│   ├── style.css
│   ├── main.ts                   ← compiles to main.js, referenced by index.html
│   └── assets/                  ← logo files go here when supplied
├── extension/
│   ├── manifest.json             ← Firefox MV2
│   ├── background.js             ← WebSocket client, tab management, download watcher
│   └── content.js                ← DOM automation on ims.lisd.net
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
| POST | /extension-data | `{ csv_data, history_rows }` | FastAPI /process response verbatim |
| WS | /ws | — | extension connection |
| WS | /frontend-ws | — | browser connection |

### WebSocket message shapes

**Extension → Relay (`/ws`):**
```json
{ "type": "status", "step": "string", "message": "string" }
{ "type": "error", "step": "string", "message": "string" }
{ "type": "csv_ready", "csv_text": "raw CSV string" }
```

**Relay → Frontend (`/frontend-ws`):**
```json
{ "type": "status", "message": "string" }
{ "type": "error", "message": "string" }
{ "type": "done", "serial": "...", "product_name": "...", "school_name": "...", "break_count": 0 }
```

**Relay → Extension (`/ws`):**
```json
{ "type": "start_intake", "payload": { "asset_tag": "string" } }
{ "type": "serial_ready", "serial": "string" }
```

### FastAPI /process

**Request** (matches `ProcessRequest` in models.py):
```json
{
  "iiq_ticket": "string",
  "asset_tag": "string",
  "tech_initials": "string",
  "csv_data": "raw CSV text as string",
  "history_rows": [{ "date": "MM-DD-YYYY HH:MM", "assigned_to": "string", "break_name": "string" }]
}
```

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
| Frontend | HTML, CSS, TypeScript → compiled JS | No React, no Vue, no Astro, no CDN fonts |
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

### CSV parsing (csv_parser.py)
- Input: raw CSV text string, asset_tag string
- Use `pd.read_csv(io.StringIO(csv_text))`
- Drop columns where header starts with `"Unnamed"`
- Ignore column named `` `purchase_order$Storage Capacity` `` entirely
- Match: `str(row["Tag"]).strip() == asset_tag.strip()` — case-sensitive, whitespace-stripped
- Extract: `Serial, DeviceType, ProductName, Model, SchoolName, AvailableStatus, RoomDescription, RoomType`
- Raise `TagNotFoundError(asset_tag)` if no match

### Break counting (break_counter.py)
- Input: list of `{ date, assigned_to, break_name }` dicts, newest row first
- Find first row where `"Staff (EP"` is a substring of `assigned_to`
- Record that row's date as `cutoff_date`, parse with `datetime.strptime(date_str, "%m-%d-%Y %H:%M")`
- Count rows where `break_name == "Staff - Device - Damaged"` AND parsed date >= cutoff_date
- No EP row found → return 0, log warning — never raise

### DOM automation rules (content.js)
- All waits use MutationObserver — never `setTimeout` for sequencing
- Every step has a 10-second timeout that sends `{ type: "error", step: "...", message: "Timeout waiting for: [selector]" }` to background.js
- Prefer `data-*` attributes and stable IDs; every selector must be commented with a stability assessment

---

## Design — LISD brand (confirmed from lisd.net/production2 source CSS)

```css
--lisd-navy:       #073772;   /* primary color, headers, buttons */
--lisd-gold:       #f1b51c;   /* secondary accent, use sparingly */
--lisd-blue-link:  #3366CC;   /* interactive/focus */
--lisd-dark:       #102738;   /* heading text */
--lisd-gray-body:  #3a3a3a;   /* body text */
--lisd-gray-border:#D4D8E1;   /* input borders */
--lisd-gray-light: #F1F4F6;   /* page background */
--lisd-white:      #FFFFFF;
--lisd-green:      #0b6e27;   /* success */
--lisd-error:      #B63D4B;   /* error */
```

Font: `Arial, "Helvetica Neue", Helvetica, sans-serif` — no CDN fonts, no Google Fonts, no proxima-nova.

Logo: `frontend/assets/lisd-logo.png` — file provided separately, use `<img>` tag only, no placeholder SVGs.

---

## Agent boundaries

✅ Always: Follow the interface contracts above. Write `.value` only on Excel cells. Use `browser.*` in the extension. Keep FastAPI internal.

⚠️ Ask first: Any new npm or pip dependency. Any change to the interface contracts above. Any change to how the relay spawns FastAPI.

🚫 Never: Write credentials to disk. Expose FastAPI to the network. Modify Excel cell formatting. Add React, Vue, or any JS framework. Use `chrome.*` in the extension. Touch rows 1–3 in the Excel sheet. Write to Excel column A.

---

## Current build status

POC (MacBook Intake) — in progress. All specs in `cursor_prompts/POC_BUILD_PROMPTS.md`.
