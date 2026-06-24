# Deploying TRC Optimizer to the production PC

Use this guide when copying from your **dev machine** to the **TRC production workstation**.

**Important:** Dev and production are different PCs. **`npm install` and `pip install` run on production only** — never on dev as part of deployment.

## Preferred: Git pull (fastest)

### Dev machine (after changes)

1. Run **`package-for-production.bat`** (sanity-check package; `dist/` is not pushed).
2. Commit and push branch **`deploy/production`**.

### Production PC — one-time setup

```bat
git clone https://github.com/appsdothingsiguess/TRCOptimizer.git C:\TRC_Opt
cd C:\TRC_Opt
git checkout deploy/production
setup-production.bat
git update-index --skip-worktree data/macbook_intake.xlsx
```

Load Firefox extension, log in to i3, run `start.bat`.

### Production PC — every update

```bat
cd C:\TRC_Opt
git pull origin deploy/production
```

Reload Firefox extension, then `start.bat`. Skip `setup-production.bat` unless `package.json` or `requirements.txt` changed.

---

## Fallback: USB copy

The **`package-for-production.bat`** script builds a clean folder at:

```
dist\TRC_Opt\
```

That folder contains only what the app needs at runtime:

| Path | Purpose |
|------|---------|
| `start.bat` / `restart.bat` | Start and daily restart |
| `setup-production.bat` | One-time `npm` + `pip` install on the PC |
| `relay/` | Node relay (no `node_modules` — installed on site) |
| `backend/` | FastAPI + Excel writer |
| `frontend/` | Intake UI (compiled `.js`, no TypeScript sources) |
| `extension/` | Firefox add-on |
| `data/macbook_intake.xlsx` | Intake workbook |
| `README.md` / `DEPLOY.md` | Docs |

**Not included** (dev-only): `.cursor/`, `documents/`, `site_downloads/`, `extension-test/`, `cursor_prompts/`, `node_modules/`, `.git/`.

---

## First-time deployment

### On your dev machine (this PC)

1. Open Command Prompt in the repo root.
2. Run **`package-for-production.bat`** — copies files only; **no npm or pip**.
3. Copy the entire **`dist\TRC_Opt`** folder to USB or a network share.

You do **not** need Node or Python installed on dev for packaging (only to run the app locally during development).

### On the production PC (different machine)

1. **Prerequisites** (install once on production if missing):
   - Node.js 18+ (`node` on PATH)
   - Python 3.10+ (`python` on PATH)
   - Firefox 109+

2. Paste the folder to a fixed path, for example:
   ```
   C:\TRC_Opt\
   ```

3. Run **`setup-production.bat`** once **on the production PC** (installs `relay\node_modules` and Python packages there).

4. **Firefox extension** (once per Firefox restart):
   - `about:debugging` → **This Firefox** → **Load Temporary Add-on…**
   - Select `C:\TRC_Opt\extension\manifest.json`

5. Log in to [ims.lisd.net](https://ims.lisd.net) in Firefox.

6. Double-click **`start.bat`** — opens `http://localhost:4321` (localhost only; no firewall prompt).

No Windows Firewall rule is required — the relay does not accept connections from other devices.

---

## Updating an existing production install

When you have a new build but production already has intake data in Excel:

1. Run **`package-for-production.bat`** on dev.
2. On production, **stop** the app (`restart.bat` or close the relay window).
3. Copy over **only** these paths (replace files):
   - `relay/` (except do not copy `node_modules` from dev)
   - `backend/`
   - `frontend/`
   - `extension/`
   - `start.bat`, `restart.bat`, `setup-production.bat` if changed
4. **Do not overwrite** `data\macbook_intake.xlsx` if it already has intake rows.
5. If `relay\package.json` changed, run **`setup-production.bat`** again **on production** (or `cd relay && npm ci` on production).
6. Reload the Firefox extension and run **`start.bat`**.

---

## Copy methods

| Method | Notes |
|--------|--------|
| **USB** | Copy `dist\TRC_Opt` as a whole folder |
| **Network share** | Same folder; avoid copying dev repo root |
| **Git clone** | Works but pulls dev extras; prefer `package-for-production.bat` |

Recommended install path on production: **`C:\TRC_Opt\`** so shortcuts and Task Scheduler paths stay consistent.

---

## Task Scheduler (optional)

Point a daily job (e.g. 7:00 PM) at:

```
C:\TRC_Opt\restart.bat
```

After restart, reload the Firefox extension if Firefox was left open.

---

## Quick verification

| Check | URL / action |
|-------|----------------|
| Form | `http://localhost:4321` |
| Debug panel | `http://localhost:4321/debug` |
| Backend health | `http://localhost:4321/backend-health` |

**Extension not connected** → relay not running, or extension not loaded in Firefox on **this** PC.

---

## Production checklist

- [ ] `setup-production.bat` run **on production PC** (not on dev)
- [ ] `data\macbook_intake.xlsx` present
- [ ] Firefox extension loaded
- [ ] Logged in to i3
- [ ] `start.bat` opens localhost form
- [ ] Test intake writes a row to Excel
