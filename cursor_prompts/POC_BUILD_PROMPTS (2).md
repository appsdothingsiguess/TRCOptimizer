# TRC_Opt POC — Cursor Build Prompts
## MacBook Intake Automation

---

## HOW TO USE THESE

Each session below is one Cursor agent task.

**For every session:**
1. Open Cursor in the `TRC_Opt/` project root
2. Paste the prompt into the agent input
3. Hit **Plan** — Cursor reads the codebase and spec and builds the plan
4. Review the plan. If anything conflicts with `AGENTS.md` or the interface contracts, reject it and say why before hitting Build
5. Hit **Build**
6. Review output before starting the next session

**Do not start a later session until the session before it is complete.**

Sessions 2 and 5 have no overlap and can run in parallel using Cursor's Agents Window with git worktree isolation.

---

## SESSION 0 — i3 Selector Discovery

**Owns:** nothing — writes no project files
**Depends on:** nothing, but you must complete this before Session 5
**What this is:** Cursor writes a console inspector script you run manually in Firefox DevTools while logged into i3. The output gives you the real selectors needed to write content.js. You paste the results back and we update Session 5 before running it.

```
Read AGENTS.md before doing anything.

Write a single self-contained JavaScript snippet I can paste into the Firefox DevTools console while on ims.lisd.net. Do not create any project files.

The snippet must inspect the live DOM and report the following for each target element — in a clearly labelled console.table or console.group output:

REPORT PAGE (I will navigate to ims.lisd.net/#/inventory/settings/reports first):
1. The element that opens the site/location filter dropdown (the one that lets you filter by "Technology Repair Center")
2. The "Technology Repair Center" checkbox or option inside that dropdown
3. The Done or Apply button that closes the dropdown and confirms the selection
4. The Search button that runs the report query
5. The "Download as Report" button (or equivalent export button)

DEVICE SEARCH PAGE (I will navigate to the device search view first):
6. The dropdown that switches search mode (the one where you select "Tag/Serial" instead of the default)
7. The search input field where you type the serial number
8. The element representing a device result row that you click to open the device

DEVICE DETAIL PAGE (I will click a device first to open its detail view):
9. The "History Details" tab
10. The history table container
11. One complete table row — report the tag or selector for the row element itself
12. Inside a row: the cell containing the date, the cell containing "Assigned To", the cell containing "Break Name"

For each element report:
- tag name
- id (if present)
- all class names
- any data-* attributes
- the most stable CSS selector you can construct (prefer id > data attribute > unique class > positional)
- stability rating: STABLE or FRAGILE with one-line reason

Format the output so I can copy it directly and paste it back as notes.
```

**After running the script:** paste the console output into a file called `extension/i3-selectors.md` in the project. Then come back and update the Session 5 prompt with the real selectors before running that session.

---

## SESSION 1 — Relay Server and Project Scaffold

**Owns:** `relay/server.js`, `relay/package.json`, `restart.bat`, `start.bat`
**Depends on:** nothing — start here

```
Read AGENTS.md before writing anything.

Build the Node.js relay server for TRC_Opt.

relay/package.json:
- name: trc-opt-relay
- dependencies: express, ws
- scripts.start: "node server.js"
- CommonJS, no TypeScript, no build step

relay/server.js:
- CommonJS require() throughout, no ESM
- Serve ../frontend/ as static files at GET /
- Store session state in a module-level variable: { iiq_ticket, asset_tag, tech_initials }
- POST /start-intake: validate all three fields present. Store them. If extension WebSocket is connected, send { type: "start_intake", payload: { asset_tag } } to it. Return { status: "started" }. If extension not connected, return { status: "error", error: "Extension not connected" }
- POST /extension-data: merge received body { serial, product_name, school_name, history_rows } with stored session fields, POST the combined object to http://127.0.0.1:8000/process using Node 18 fetch. Return FastAPI's JSON response directly. On network error return { success: false, error: "Backend unreachable" }
- WebSocket /ws: one slot for the Firefox extension. Store reference on connect, clear on close. On message { type: "status" or "error" }: parse and forward to all connected /frontend-ws clients
- WebSocket /frontend-ws: multiple browser clients. Used only to receive forwarded status messages from the relay
- On startup: spawn FastAPI with child_process.spawn("python", ["-m", "uvicorn", "main:app", "--host", "127.0.0.1", "--port", "8000"], { cwd: path.join(__dirname, "../backend"), stdio: "inherit" }). On exit, log and restart after 2000ms
- Log "TRC_Opt relay listening on port 4321" on startup

restart.bat (project root):
- taskkill /F /IM node.exe /T
- taskkill /F /IM python.exe /T
- timeout /t 2 /nobreak
- start "" cmd /c "cd relay && node server.js"

start.bat (project root):
- start "" cmd /c "cd relay && node server.js"
- timeout /t 2 /nobreak
- start "" http://localhost:4321
- This is the single file a tech double-clicks to start the whole tool from cold. Node starts, which spawns FastAPI as a child process, then the browser opens automatically. No other steps needed.
```

---

## SESSION 2 — Python Data Models

**Owns:** `backend/requirements.txt`, `backend/models.py`
**Depends on:** Session 1 (file structure established)

> **UPDATED 2026-06-23:** `csv_parser.py` and CSV-based data ingestion are retired. Device data
> comes directly from the i3 API via the extension. `ProcessRequest` now carries `serial`,
> `product_name`, and `school_name` directly. `DeviceInfo` and `TagNotFoundError` are removed.

```
Read AGENTS.md before writing anything.

Build the data models for the TRC_Opt Python backend.

backend/requirements.txt:
fastapi
uvicorn
openpyxl
pydantic

backend/models.py:
- ProcessRequest(BaseModel):
    iiq_ticket:    str
    asset_tag:     str
    tech_initials: str
    serial:        str
    product_name:  str
    school_name:   str
    history_rows:  list[dict]
  Each history_rows dict has keys: date (MM-DD-YYYY HH:MM), assigned_to, break_name, site_name, status.
  break_name is present for schema compatibility but is NOT used for break counting.
- No other models. No DeviceInfo. No TagNotFoundError. No csv_parser.py.
```

---

## SESSION 3 — Break Counter and Excel Writer

**Owns:** `backend/break_counter.py`, `backend/excel_writer.py`
**Depends on:** Session 2 (models.py must exist and be importable)

> **UPDATED 2026-06-23:** Break counting no longer uses `break_name`/`strike` because damage is
> not consistently logged in i3. A "break" is now defined as a **TRC repair visit**: a history row
> where `site_name == "Technology Repair Center"` AND `status == "InRepair"`.
>
> **Business rule (confirmed):** Breaks are counted per person per device type — John's break count
> is his TOTAL MacBook repairs across every MacBook he has ever held, not just the current device.
> The current implementation is a per-device floor count (see "Known gap" below); full
> per-person-per-type counting is a future enhancement.

```
Read AGENTS.md before writing anything.

Build break_counter.py and excel_writer.py for the TRC_Opt Python backend.

backend/break_counter.py:
- Function: def count_breaks(history_rows: list[dict]) -> int
- history_rows are newest-first. Each dict has keys: date (str), assigned_to (str),
  break_name (str, present but not used), site_name (str), status (str)
- Helper _norm(s): collapses interior spaces in parentheses using re.sub.
  "Staff ( EP12345 )" → "Staff (EP12345)" so the EP check works regardless of spacing.
- Find the FIRST row where "Staff (EP" is a substring of _norm(assigned_to)
- Parse that row's date as cutoff_date: datetime.strptime(date_str, "%m-%d-%Y %H:%M")
- Count all rows where:
    site_name == "Technology Repair Center"
    AND status == "InRepair"
    AND datetime.strptime(row["date"], "%m-%d-%Y %H:%M") >= cutoff_date
- If no EP row found: log a warning with logging.warning() and return 0 — never raise
- If no qualifying TRC rows after cutoff: return 0 — this is valid
- Never count rows based on break_name or strike — those fields are unreliable

Known gap: this counts TRC InRepair visits for the current device only since this staff
member received it. It does not count repairs the same person caused on other devices of
the same type. Full per-person-per-type counting requires querying all device histories for
that EP ID — defer to a future session.

backend/excel_writer.py:
- Function: def write_intake_row(iiq_ticket, asset_tag, serial, school_name, tech_initials, break_count, excel_path) -> None
- Load: openpyxl.load_workbook(excel_path) — never read_only=True
- Sheet: wb["Sheet1"]
- Find target row: iterate from row 4 upward using range(4, ws.max_row + 2). First row where ws.cell(row=n, column=2).value is None is the target. Row 3 is never the target.
- Write values only to target row:
  - column 2 (B): datetime.date.today()
  - column 3 (C): iiq_ticket
  - column 4 (D): do not write anything
  - column 5 (E): asset_tag
  - column 6 (F): serial
  - column 7 (G): school_name
  - column 8 (H): tech_initials
  - column 9 (I): int(break_count)
- Never touch column 1 (A) or columns 10–21 (J–U)
- Never access .font, .fill, .border, .alignment, or .number_format on any cell
- Save: wb.save(excel_path) then wb.close()
```

---

## SESSION 4 — FastAPI Entry Point

**Owns:** `backend/main.py`
**Depends on:** Sessions 2 and 3 (all modules must be importable)

> **UPDATED 2026-06-23:** `csv_parser` and `TagNotFoundError` are removed. Device fields arrive
> directly on the request body from the extension.

```
Read AGENTS.md before writing anything.

Build the FastAPI main.py for the TRC_Opt backend.

backend/main.py:
- app = FastAPI()
- Imports: FastAPI; from models import ProcessRequest; from break_counter import count_breaks;
  from excel_writer import write_intake_row; from pathlib import Path
- Do NOT import csv_parser — it is retired.
- EXCEL_PATH = Path(__file__).parent.parent / "data" / "macbook_intake.xlsx"
- Single endpoint: @app.post("/process") async def process_intake(request: ProcessRequest)
- Call sequence inside try block:
  1. break_count = count_breaks(request.history_rows)
  2. write_intake_row(request.iiq_ticket, request.asset_tag, request.serial,
                     request.school_name, request.tech_initials, break_count, EXCEL_PATH)
- On success return: { "success": True, "serial": request.serial,
  "product_name": request.product_name, "school_name": request.school_name,
  "break_count": break_count }
- Except block catches Exception as e: return { "success": False, "error": str(e) }
- No other endpoints. No CORS. No middleware. No authentication. No startup events.
```

---

## SESSION 5 — Firefox Extension

**Owns:** `extension/manifest.json`, `extension/background.js`, `extension/content.js`
**Depends on:** Session 1 (WebSocket message contracts confirmed)

> **UPDATED 2026-06-23 — COMPLETE.** Session 0 (selector discovery) revealed that i3 is built on
> Flutter CanvasKit, which renders everything to a `<canvas>` in a shadow DOM. No DOM selectors
> exist for UI elements. All three extension files have been built and confirmed.
>
> **Architecture change from original spec:** No DOM automation. No CSV download. The extension
> makes a single i3 REST API call (`getTagInformationByTagOrSerialId`) using the JWT from
> `localStorage`, maps the response to the relay body format, and POSTs to `/extension-data`.
> See `extension/i3-selectors.md` for full API contracts.

**PREREQUISITE — installation method:** Unpacked extension loaded via
`about:debugging > This Firefox > Load Temporary Add-on > select extension/manifest.json`.
No signing required. Clears on Firefox restart — tech loads once per shift.

```
Read AGENTS.md before writing anything. Read extension/i3-selectors.md for confirmed API contracts.

The three files below are COMPLETE as of 2026-06-23. Do not rewrite them unless a specific
bug is being fixed. If building from scratch, use this spec.

extension/manifest.json:
- manifest_version: 2
- name: "TRC_Opt i3 Connector", version: "1.0.0"
- permissions: ["activeTab", "tabs"]
- background: { "scripts": ["background.js"], "persistent": true }
  persistent:true is required — background page holds a long-lived WebSocket connection.
- content_scripts: matches "https://ims.lisd.net/*", js: ["content.js"], run_at: "document_idle"
- browser_specific_settings: { "gecko": { "id": "trcopt-connector@lisd.net", "strict_min_version": "109.0" } }

extension/background.js:
- Use browser.* API throughout — never chrome.*
- On startup: connect WebSocket to ws://localhost:4321/ws
- Reconnect on close: retry after 3000ms, stop after 10 attempts, log "Extension WebSocket: max retries reached"
- On WebSocket message { type: "start_intake", payload: { asset_tag } }:
  1. Store asset_tag in a module-level variable
  2. Send { type: "status", step: "lookup", message: "Looking up device in i3..." } via WebSocket
  3. Find or create a tab at ims.lisd.net: browser.tabs.query({ url: "*://ims.lisd.net/*" })
     — if found use tabs[0].id, if not create with browser.tabs.create({ url: "https://ims.lisd.net" })
  4. After tab is ready, send { action: "run_intake", asset_tag } via browser.tabs.sendMessage
- On browser.runtime.onMessage from content.js:
  - { type: "intake_complete", serial, product_name, school_name, history_rows }:
    POST to http://localhost:4321/extension-data with that body.
    On HTTP error, send { type: "error", step: "relay_post", message: ... } via WebSocket.
  - { type: "error", step, message }: forward as { type: "error", message } via WebSocket
  - { type: "status", message }: forward as { type: "status", message } via WebSocket
- All unknown message types: log with console.warn and ignore — never throw

extension/content.js:
- No DOM automation. No MutationObservers. No UI clicking.
- i3 is Flutter CanvasKit — the UI is drawn on a <canvas>. All data comes from the REST API.
- getToken(): parse JSON.parse(localStorage["flutter.loginToken"]) → return the token string
- isAuthenticated(): check localStorage["flutter.isAuthenticated"] === "true"
- i3Fetch(path): fetch("https://ims.lisd.net" + path, { headers: { Authorization: "Bearer " + getToken() } })
- convertDate(apiDate): convert "YYYY-MM-DD HH:mm:ss.SSS" → "MM-DD-YYYY HH:MM"
- lookupDevice(asset_tag):
  1. Call GET /inventory/transfer/getTagInformationByTagOrSerialId/{asset_tag}/0
  2. Parse response: serial = data.serialNo, product_name = data.productName, school_name = data.siteName
  3. Map data.listOfResponses → history_rows array, newest first:
     Each row: { date: convertDate(row.date), assigned_to: row.inPlaceType || "",
                 break_name: row.strike || "", site_name: row.siteName || "", status: row.status || "" }
  4. Return { serial, product_name, school_name, history_rows }
- On browser.runtime.onMessage { action: "run_intake", asset_tag }:
  1. If !isAuthenticated(): send error "Not logged in to i3" and return
  2. Call lookupDevice(asset_tag)
  3. On success: send { type: "intake_complete", serial, product_name, school_name, history_rows }
  4. On error: send { type: "error", step: "lookup", message: e.message }
- Return true from the onMessage listener to keep channel open for async responses

Note: TRC site ID is 145 (confirmed from i3 login localStorage). The relay URL is
http://localhost:4321 (not https) — extension connects to local relay only.
```

---

## SESSION 6 — Frontend UI

**Owns:** `frontend/index.html`, `frontend/style.css`, `frontend/main.ts`
**Depends on:** Sessions 1 and 4 complete (relay routes and FastAPI response shape confirmed)

```
Read AGENTS.md before writing anything.

Build the frontend UI for TRC_Opt. LISD brand tokens are in .cursor/rules/002-lisd-design.mdc — use those exact hex values for every color decision.

frontend/index.html:
- No framework. No React.
- <link rel="stylesheet" href="style.css">
- <script src="main.js" defer></script>
- No CDN font imports of any kind
- Structure: full-height page with centered card. Inside card: header bar with <img src="assets/lisd-logo.png" alt="LISD Logo"> (file not present yet, that is expected). Below header: form area with three inputs and button. Below button: status div.
- Each input has an explicit <label for="[id]"> above it
- Input IDs: asset-tag, iiq-ticket, tech-initials
- Asset Tag input: has autofocus attribute
- Button: id="run-intake", disabled attribute set by default, text "Run Intake"
- Status: <div id="status"></div>

frontend/style.css:
- :root block with all LISD color tokens as CSS custom properties using exact hex values from AGENTS.md
- font-family: Arial, "Helvetica Neue", Helvetica, sans-serif on body and all inputs — no @import, no url() font loading
- Page background: var(--lisd-gray-light)
- Card: background white, max-width 480px, centered with margin auto, border-top 4px solid var(--lisd-navy), border 1px solid var(--lisd-gray-border), border-radius 4px, padding 32px, box-shadow 0 2px 8px rgba(0,0,0,0.12)
- Header bar: background var(--lisd-navy), height 48px, display flex, align-items center, padding 0 16px, margin -32px -32px 24px -32px (bleeds to card edges)
- Inputs: height 40px, border 1px solid var(--lisd-gray-border), border-radius 4px, padding 0 12px. On focus: border 2px solid var(--lisd-blue-link), outline none (focus is provided by the border change)
- Labels: font-size 13px, font-weight 500, color var(--lisd-gray-body), display block, margin-bottom 4px
- Button enabled: background var(--lisd-navy), color white, height 40px, border-radius 4px, border none, font Arial bold 14px, width 100%, cursor pointer. Hover: background var(--lisd-blue-hover, #122C4B)
- Button disabled: background var(--lisd-gray-border), color var(--lisd-gray-mid, #595959), cursor not-allowed, opacity 0.6
- Status div: padding 12px, margin-top 16px, font-size 13px. Class .status-success: border-left 3px solid var(--lisd-green), background rgba(11,110,39,0.06). Class .status-error: border-left 3px solid var(--lisd-error), background rgba(182,61,75,0.06)

frontend/main.ts (compiles to ES2020, no framework imports):
- On DOMContentLoaded: explicitly call document.getElementById("asset-tag").focus()
- WebSocket: const ws = new WebSocket(`ws://${location.host}/frontend-ws`)
- ws.onmessage: parse JSON, switch on type. "status": set status div textContent to message. "error": set status div textContent to "Error: " + message, add class status-error. "done": set status div textContent to "Done — " + product_name + " | Serial: " + serial + " | Campus: " + school_name + " | Breaks: " + break_count, add class status-success. Then call resetForm() after 3000ms setTimeout.
- Asset Tag input: addEventListener "input" with 300ms debounce. On debounce fire: if iiq-ticket value is empty, focus iiq-ticket; else if all three fields have values, enable button and focus it
- Enable/disable button: check all three inputs on every "input" event across all three fields. Button enabled when all three have .value.trim() !== "". Set or remove the disabled attribute accordingly.
- Run Intake button click: fetch("/start-intake", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ iiq_ticket, asset_tag, tech_initials }) }). On success: set status textContent to "Downloading i3 report...". On fetch error: set status textContent to "Error: Could not reach relay", add status-error class.
- resetForm(): clear all three input values, set status textContent to empty string, remove status-success and status-error classes, set button.disabled = true, focus asset-tag input
- Use textContent for all status updates — never innerHTML with server-provided data
```

---

## SESSION 7 — Wiring Verification

**Owns:** read-only review of all files. May edit specific lines to fix bugs — must state which file and exactly what change before editing.
**Depends on:** all sessions 1–6 complete

```
Read AGENTS.md before doing anything.

Do not write any new code. Review the complete project for wiring correctness and report
PASS, FAIL, or NEEDS REVIEW on each item with one sentence of justification.

1. relay/server.js POST /extension-data: does it accept { serial, product_name, school_name,
   history_rows } in the request body? Does the merged payload to FastAPI contain all seven
   fields ProcessRequest expects: iiq_ticket, asset_tag, tech_initials, serial, product_name,
   school_name, history_rows?

2. backend/main.py: is csv_parser NOT imported? Are count_breaks and write_intake_row called in
   that order in the try block? Does write_intake_row receive request.serial and request.school_name
   directly (not from a DeviceInfo object)?

3. backend/break_counter.py: does count_breaks count rows where site_name ==
   "Technology Repair Center" AND status == "InRepair" (NOT break_name == "Staff - Device - Damaged")?
   Does _norm() collapse interior spaces in parentheses?

4. backend/excel_writer.py: does the row search begin at row 4? Is row 3 never the target?
   Confirm column assignments: B=2, C=3, D=skipped, E=5, F=6, G=7, H=8, I=9.
   Confirm columns 1 and 10–21 are never written.

5. extension/background.js: does WebSocket reconnect fire on the close event? Does it POST to
   http://localhost:4321/extension-data on receiving { type: "intake_complete" } from content.js?

6. extension/content.js: does it use the i3 REST API (no DOM automation, no MutationObservers)?
   Does it send history rows with site_name and status fields populated?

7. frontend/main.ts: does WebSocket connect to /frontend-ws (not /ws)? Does resetForm() set
   button.disabled = true?

8. restart.bat: does it kill both node.exe and python.exe before restarting?

If any item FAILs, fix only the specific issue in the specific file — do not refactor surrounding code.
```

---

## DEPENDENCY ORDER

```
Session 0: i3 selector discovery    → no dependencies — do this before anything else
Session 1: Relay + scaffold         → no dependencies
Session 2: Models + CSV parser      → needs Session 1
Session 3: Break counter + Excel    → needs Session 2
Session 4: FastAPI main.py          → needs Sessions 2 + 3
Session 5: Firefox extension        → needs Session 0 (for content.js) + Session 1
             manifest.json + background.js can be written in parallel with Sessions 2-4
             content.js is blocked until Session 0 output is pasted into i3-selectors.md
Session 6: Frontend UI              → needs Sessions 1 + 4
Session 7: Verification             → needs all sessions
```
