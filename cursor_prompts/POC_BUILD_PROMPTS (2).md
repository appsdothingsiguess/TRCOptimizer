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
- POST /extension-data: merge received body { csv_data, history_rows } with stored session fields, POST the combined object to http://127.0.0.1:8000/process using Node 18 fetch. Return FastAPI's JSON response directly. On network error return { success: false, error: "Backend unreachable" }
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

## SESSION 2 — Python Data Models and CSV Parser

**Owns:** `backend/requirements.txt`, `backend/models.py`, `backend/csv_parser.py`
**Depends on:** Session 1 (file structure established)

```
Read AGENTS.md before writing anything.

Build the data models and CSV parser for the TRC_Opt Python backend.

backend/requirements.txt:
fastapi
uvicorn
pandas
openpyxl
pydantic

backend/models.py:
- ProcessRequest(BaseModel): iiq_ticket: str, asset_tag: str, tech_initials: str, csv_data: str, history_rows: list[dict]
- DeviceInfo(BaseModel): serial: str, device_type: str, product_name: str, model: str, school_name: str, available_status: str, room_description: str, room_type: str
- TagNotFoundError(Exception): __init__(self, asset_tag: str), message is f"Asset tag '{asset_tag}' not found in CSV"

backend/csv_parser.py:
- Function: def parse_csv(csv_text: str, asset_tag: str) -> DeviceInfo
- Use pd.read_csv(io.StringIO(csv_text))
- Drop all columns where the column name starts with "Unnamed"
- Ignore any column named exactly `purchase_order$Storage Capacity` (with backticks)
- Before matching: strip whitespace from both asset_tag and every value in the Tag column
- Extract these fields from the matching row: Serial, DeviceType, ProductName, Model, SchoolName, AvailableStatus, RoomDescription, RoomType
- Return DeviceInfo with those values
- Raise TagNotFoundError(asset_tag) if no row matches
- Never delete any file — the CSV arrives as text, not a file path
```

---

## SESSION 3 — Break Counter and Excel Writer

**Owns:** `backend/break_counter.py`, `backend/excel_writer.py`
**Depends on:** Session 2 (models.py must exist and be importable)

```
Read AGENTS.md before writing anything.

Build break_counter.py and excel_writer.py for the TRC_Opt Python backend.

backend/break_counter.py:
- Function: def count_breaks(history_rows: list[dict]) -> int
- history_rows are newest-first. Each dict has keys: date (string), assigned_to (string), break_name (string)
- Find the FIRST row where "Staff (EP" is a substring of assigned_to
- Parse that row's date as the cutoff: datetime.strptime(date_str, "%m-%d-%Y %H:%M")
- Count all rows where break_name == "Staff - Device - Damaged" AND parsed date >= cutoff_date
- If no EP row found: log a warning with logging.warning() and return 0 — never raise
- If no damage rows after cutoff: return 0 — this is valid

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
**Depends on:** Sessions 2 and 3 (all three modules must be importable)

```
Read AGENTS.md before writing anything.

Build the FastAPI main.py for the TRC_Opt backend.

backend/main.py:
- app = FastAPI()
- Imports: FastAPI; from models import ProcessRequest, TagNotFoundError; from csv_parser import parse_csv; from break_counter import count_breaks; from excel_writer import write_intake_row; from pathlib import Path
- EXCEL_PATH = Path(__file__).parent.parent / "data" / "macbook_intake.xlsx"
- Single endpoint: @app.post("/process") async def process_intake(request: ProcessRequest)
- Call sequence inside try block:
  1. device = parse_csv(request.csv_data, request.asset_tag)
  2. break_count = count_breaks(request.history_rows)
  3. write_intake_row(request.iiq_ticket, request.asset_tag, device.serial, device.school_name, request.tech_initials, break_count, EXCEL_PATH)
- On success return: { "success": True, "serial": device.serial, "product_name": device.product_name, "school_name": device.school_name, "break_count": break_count }
- Except block catches Exception as e: return { "success": False, "error": str(e) }
- No other endpoints. No CORS. No middleware. No authentication. No startup events.
```

---

## SESSION 5 — Firefox Extension

**Owns:** `extension/manifest.json`, `extension/background.js`, `extension/content.js`
**Depends on:** Session 0 complete (real i3 selectors in `extension/i3-selectors.md`) + Session 1 (WebSocket message contracts confirmed)

*background.js and manifest.json can be written before Session 0 is done. content.js must not be written until `extension/i3-selectors.md` exists with real selector data.*

*Can run in parallel with Sessions 2–4 using Cursor Agents Window + git worktree isolation — but content.js is blocked until Session 0 output is pasted in.*

**PREREQUISITE — installation method:** This is an unpacked extension loaded via `about:debugging > This Firefox > Load Temporary Add-on > select extension/manifest.json`. No signing required. It clears on Firefox restart, so the tech loads it once at the start of each shift. The gecko ID in manifest.json is for identification only — it does not need to match any folder name for temporary loading.

```
Read AGENTS.md before writing anything.

Build the Firefox MV2 extension for TRC_Opt. This is Firefox-only — never use chrome.* API, always use browser.* throughout.

extension/manifest.json:
- manifest_version: 2
- name: "TRC Opt", version: "1.0.0"
- permissions: ["tabs", "downloads", "storage", "webNavigation", "http://ims.lisd.net/*", "http://localhost:4321/*"]
- background: { "scripts": ["background.js"], "persistent": true }
  Note: persistent:true is required because the extension holds a long-lived WebSocket connection. Without it the background page would be suspended and the WebSocket dropped.
- No content_scripts key at manifest level — content.js is injected programmatically at runtime
- browser_specific_settings: { "gecko": { "id": "trc-opt@lisd.internal", "strict_min_version": "109.0" } }

extension/background.js:
- Use browser.* API throughout — never chrome.*
- On startup: connect WebSocket to ws://localhost:4321/ws
- Reconnect on close: retry after 3000ms, stop after 10 attempts and log "Extension WebSocket: max retries reached"
- On message { type: "start_intake", payload: { asset_tag } }:
  1. Store asset_tag in browser.storage.local (not browser.storage.session — session storage is MV3-only in Firefox; use local for POC)
  2. Send { type: "status", step: "download", message: "Downloading i3 report..." } to relay via WebSocket
  3. Find or create a tab at ims.lisd.net: browser.tabs.query({ url: "*://ims.lisd.net/*" }) — if found use tabs[0].id, if not create with browser.tabs.create({ url: "http://ims.lisd.net" })
  4. Inject content.js: browser.tabs.executeScript(tabId, { file: "content.js" })
  5. IMPORTANT — injection race fix: after executeScript resolves (it returns a Promise), wait 500ms then send the command message. The content script needs time to register its onMessage listener after injection. Use: executeScript(...).then(() => setTimeout(() => browser.tabs.sendMessage(tabId, { action: "run_sequence1" }), 500))
  6. Store tabId in a module-level variable for later use

- On browser.runtime.onMessage from content.js { type: "sequence1_complete" }:
  1. Send { type: "status", step: "download", message: "Report downloaded, reading file..." } to relay via WebSocket
  2. Search downloads: browser.downloads.search({ orderBy: ["-startTime"], limit: 10 })
  3. Filter results: item.filename must match /report.*\.csv$/i AND item.state === "complete"
  4. Take the first match (most recent). If none found after 3 retries (500ms apart), send error to relay.
  5. Read file: fetch(item.url).then(r => r.text())
  6. Send { type: "csv_ready", csv_text: text } to relay via WebSocket

- On WebSocket message { type: "serial_ready", serial }:
  1. Send { action: "run_sequence2", serial } to the stored ims.lisd.net tabId via browser.tabs.sendMessage
  2. If tab no longer exists, send error to relay

- All unknown message types from relay or content: log with console.warn and ignore — never throw

extension/content.js:
- On injection: immediately call browser.runtime.sendMessage({ type: "content_ready" }) so background.js knows the script is live (this is the correct pattern to avoid the race — but since we also use the 500ms delay as belt-and-suspenders, the ready message is for logging only)
- Listen for messages via browser.runtime.onMessage — return true from the listener to keep the message channel open for async responses
- waitForElement(selector, timeoutMs = 10000): MutationObserver on document.body with { childList: true, subtree: true }. On timeout: throw new Error("Timeout waiting for: " + selector). Always disconnect observer on both success and timeout.
- Never use setTimeout for sequencing steps — only for timeout countdown
- Every DOM selector must have a comment: // [description of element] — STABLE (data attr / id) or FRAGILE (class/position) — [reason]
- Selectors will be filled in from extension/i3-selectors.md after Session 0 — use placeholder comments like // TODO: replace with selector from i3-selectors.md

Sequence 1 (triggered by { action: "run_sequence1" }):
1. Navigate: window.location.href = "http://ims.lisd.net/#/inventory/settings/reports"
2. waitForElement([sitename filter selector from i3-selectors.md]), click it to open dropdown
3. waitForElement([TRC checkbox selector]), click it to select
4. waitForElement([Done button selector]), click it
5. waitForElement([Search button selector]), click it
6. waitForElement([Download as Report button selector]), click it
7. browser.runtime.sendMessage({ type: "sequence1_complete" })
- Each numbered step in its own try/catch: on error, browser.runtime.sendMessage({ type: "error", step: "seq1_step" + N, message: e.message }) and return

Sequence 2 (triggered by { action: "run_sequence2", serial }):
1. Navigate to device search page
2. waitForElement([search mode dropdown]), click it, select "Tag/Serial" option
3. waitForElement([search input field]), clear it, type serial character by character using input events to trigger SPA reactivity: field.value = serial; field.dispatchEvent(new Event("input", { bubbles: true }))
4. waitForElement([result row]), click it
5. waitForElement([History Details tab]), click it
6. waitForElement([history table]), scrape all rows into: [{ date: cells[dateCol].textContent.trim(), assigned_to: cells[assignedCol].textContent.trim(), break_name: cells[breakCol].textContent.trim() }]
7. fetch("http://localhost:4321/extension-data", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ history_rows: rows }) })
- Each numbered step in its own try/catch: on error, browser.runtime.sendMessage({ type: "error", step: "seq2_step" + N, message: e.message }) and return

Note on SPA input: i3 is almost certainly a JavaScript SPA (Angular or React based on LISD's typical vendor stack). Setting .value alone on an input field will not trigger the framework's change detection. Always dispatch an "input" event with bubbles:true after setting a value. If results still don't appear, also dispatch "change".
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

Do not write any new code. Review the complete project for wiring correctness and report PASS, FAIL, or NEEDS REVIEW on each item with one sentence of justification.

1. relay/server.js POST /extension-data: does it merge the received body with the stored session fields before sending to FastAPI? Does the merged object contain all five fields that ProcessRequest expects: iiq_ticket, asset_tag, tech_initials, csv_data, history_rows?

2. backend/main.py: are parse_csv, count_breaks, and write_intake_row called in that order in the try block? Does the except block catch TagNotFoundError (which extends Exception)?

3. backend/excel_writer.py: does the row search begin at row 4? Is row 3 never the target? Confirm column assignments: B=2, C=3, D=skipped, E=5, F=6, G=7, H=8, I=9. Confirm columns 1 and 10–21 are never written.

4. extension/background.js: does WebSocket reconnect fire on the close event? Does the download reader use browser.downloads.search and then fetch the result URL?

5. extension/content.js: does waitForElement use MutationObserver (not setTimeout)? Is every selector commented with a stability rating?

6. frontend/main.ts: does WebSocket connect to /frontend-ws (not /ws)? Does resetForm() set button.disabled = true?

7. restart.bat: does it kill both node.exe and python.exe before restarting?

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
