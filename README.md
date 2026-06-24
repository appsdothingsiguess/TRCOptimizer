# TRC Optimizer

Internal LISD tool for the Technology Repair Center (TRC). It automates MacBook intake data entry: a tech scans an asset tag, fills two fields, and the system looks up the device in i3, counts repair visits, and writes a row to the intake Excel sheet.

Runs entirely on one Windows machine on the local LISD network. No cloud, no database, no external users.

---

## How it works

```
Firefox Extension  ──WebSocket──►  Node.js Relay (:4321)  ──HTTP──►  FastAPI (:8000, internal)
       │                                  │                              │
       │  i3 API (ims.lisd.net)           │  serves frontend             │  openpyxl
       └──────────────────────────────────┴──────────────────────────────┴──► data/macbook_intake.xlsx
```

1. Tech opens the intake form in a browser (see [Accessing the app](#accessing-the-app) below).
2. Tech enters **Asset Tag**, **IIQ Ticket**, and **Tech Initials**, then clicks **Run Intake**.
3. The relay tells the Firefox extension to look up the device in i3.
4. The extension calls the i3 JSON API (no screen scraping), sends device data back to the relay.
5. FastAPI counts TRC repair visits and appends one row to the Excel file.
6. The browser shows success (serial, school, break count) or an error message.

---

## Prerequisites

Install these once on the TRC workstation:

| Requirement | Notes |
|-------------|-------|
| **Windows 10/11** | Tool is designed for a single on-site machine |
| **Node.js 18+** | Must be on `PATH` as `node` |
| **Python 3.10+** | Must be on `PATH` as `python` (used by the relay to spawn FastAPI) |
| **Firefox 109+** | For the unpacked MV2 extension |
| **Network** | Access to `ims.lisd.net` (i3) from the browser |

---

## First-time setup (production PC)

These steps are for the **TRC workstation** where the app runs. If you are packaging on a **dev machine**, skip to [Deploying to the production PC](#deploying-to-the-production-pc) — run `npm`/`pip` on production only, not on dev.

### 1. Get the project on the machine

Copy the packaged `dist\TRC_Opt` folder (or clone the repo) to a fixed location, for example:

```
C:\TRC_Opt\
```

Keep the folder structure intact. The Excel writer expects `data/macbook_intake.xlsx` relative to the repo root.

### 2. Install dependencies (production only)

On the **production PC**, run **`setup-production.bat`** at the repo root (runs `npm ci` in `relay\` and `pip install` in `backend\`).

Or manually:

```bat
cd C:\TRC_Opt\relay
npm install

cd C:\TRC_Opt\backend
python -m pip install -r requirements.txt
```

Optional but recommended: use a virtual environment in `backend/` before running `pip install`.

### 3. Confirm the Excel file exists

The intake workbook must be present at:

```
data/macbook_intake.xlsx
```

Do **not** recreate this file from scratch. It has pre-formatted rows and headers. The app only writes **cell values** into the first empty row (column B empty, row ≥ 4).

| Column | Field |
|--------|-------|
| B | Date (today) |
| C | IIQ ticket |
| E | Asset tag |
| F | Serial |
| G | School name |
| H | Tech initials |
| I | Break count |

### 4. Load the Firefox extension

The extension must be loaded **once per Firefox session** (Firefox drops temporary add-ons on restart).

1. Open Firefox → `about:debugging`
2. Click **This Firefox**
3. Click **Load Temporary Add-on…**
4. Select `extension/manifest.json` from this repo

You should see **TRC_Opt i3 Connector** in the list. The extension connects to `ws://localhost:4321/ws` automatically.

### 5. Log in to i3

Open [ims.lisd.net](https://ims.lisd.net) in Firefox and sign in. The extension reads the JWT from `localStorage` (`flutter.loginToken`). Tokens last ~10 hours; if lookup fails with a login error, sign in again.

---

## Running the app

### Start (daily / after reboot)

Double-click **`start.bat`** at the repo root, or run manually:

```bat
cd C:\TRC_Opt\relay
node server.js
```

`start.bat` opens **`http://localhost:4321`** in your browser.

The relay:

- Listens on **127.0.0.1:4321 only** (localhost — no LAN access, no Windows Firewall prompt)
- Spawns **FastAPI on 127.0.0.1:8000** automatically (internal only)

### Accessing the app

Use **`http://localhost:4321`** on the PC where the relay runs. Form, extension, and Excel must all be on **this same machine**.

Network access from other devices is intentionally disabled so Node does not trigger Windows Firewall / IT approval prompts.

### End-of-day restart (optional)

**`restart.bat`** kills Node and Python, waits briefly, and starts the relay again. Configure Windows Task Scheduler to run it daily (e.g. 7:00 PM) so the stack resets after each shift. After a restart, reload the Firefox extension and confirm i3 login if needed.

---

## Daily workflow (tech)

1. **Start the stack** — run `start.bat` (or confirm the relay is already running).
2. **Firefox** — load the extension if Firefox was restarted; stay logged in to i3.
3. **Open the form** — `http://localhost:4321` (same PC as relay and Firefox).
4. **Scan / type asset tag** — focus starts in the Asset Tag field.
5. **Enter IIQ ticket and tech initials** — **Run Intake** enables when all three fields are filled.
6. **Click Run Intake** — watch the status area for progress, then success or error.
7. **Next device** — form clears on success; repeat from step 4.

Success shows serial, product, school, and break count. The row is already in Excel.

---

## Troubleshooting

| Symptom | Likely cause | Fix |
|---------|----------------|-----|
| **Extension not connected** on Run Intake | Relay not running, or extension not loaded | Start relay; reload add-on via `about:debugging` |
| **Not logged in to i3** | No JWT in Firefox | Log in at ims.lisd.net in the same Firefox profile |
| **Token expired** | i3 session older than ~10 hours | Log out and back in to i3 |
| **Backend unreachable** | Python/uvicorn failed to start | Check console where `node server.js` runs; verify `pip install -r requirements.txt` |
| **No empty intake row** | Excel sheet full (rows 4–522 used) | Add rows or replace workbook per TRC procedure (preserve formatting) |
| **Tag not found** | Wrong asset tag | Verify tag in i3 manually |

### Debug page

With the relay running, open:

```
http://localhost:4321/debug
```

Shows extension connection status, current session, last intake result, and recent relay/extension logs.

Health check: `http://localhost:4321/backend-health`

---

## Development

### Project layout

```
TRC_Opt/
├── start.bat / restart.bat   # Windows launch scripts
├── relay/                    # Node.js Express + WebSocket relay
├── backend/                  # FastAPI, break counter, Excel writer
├── frontend/                 # HTML, CSS, TypeScript → main.js
├── extension/                # Firefox MV2 connector (production)
├── extension-test/           # Throwaway i3 selector tester (not production)
├── data/                     # macbook_intake.xlsx (runtime data)
└── AGENTS.md                 # Full agent/architecture reference
```

### Frontend TypeScript

`frontend/main.ts` and `frontend/debug.ts` compile to checked-in `.js` files. After editing `.ts`, recompile (requires TypeScript installed globally or via `npx`):

```bat
cd frontend
npx tsc main.ts --target ES2020 --strict false --skipLibCheck --outFile main.js
npx tsc debug.ts --target ES2020 --strict false --skipLibCheck --outFile debug.js
```

Refresh the browser to pick up changes. No frontend build step runs automatically.

### Backend / relay

- Backend changes: restart the relay (or kill Python and let the relay respawn uvicorn).
- Relay changes: stop `node server.js` and start again.

See **`AGENTS.md`** for interface contracts, Excel rules, and i3 API details.

---

## Security notes

- FastAPI binds to **127.0.0.1 only** — not exposed to the network.
- Credentials are **never written to disk**; i3 auth lives in the browser session only.
- The frontend talks to the relay only, never directly to FastAPI.
- Do not commit `.env` files or live credentials.

---

## Deploying to the production PC

Dev and production are **different machines**. On dev you only package files — **do not run `setup-production.bat` or `npm install` on dev for deployment**.

**On your dev machine (before copy):**

1. Run **`package-for-production.bat`** — copies files only; no npm/pip.
2. Copy **`dist\TRC_Opt`** to USB or a network share.

**On the production PC (after copy):**

1. Paste to e.g. `C:\TRC_Opt\`
2. Run **`setup-production.bat`** once there (`npm` + `pip` on that PC).
3. Load `extension\manifest.json` in Firefox; log in to i3.
4. Run **`start.bat`**.

Full steps, update procedure (do not overwrite live Excel), and firewall notes: **`DEPLOY.md`**.

---

Internal LISD TRC tooling. POC scope: MacBook intake workflow only.
