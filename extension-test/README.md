# i3 Selector Tester (throwaway)

Diagnostic Firefox MV2 extension (v0.5.1, requires Firefox 126+) for validating Flutter semantics selectors on the live `ims.lisd.net` site. Not used in production.

**Reports save to file** — Uses `downloads` permission. Blob is created in `background.js` (required by Firefox — blob URLs from content scripts are rejected). Falls back to anchor download in page context if background save fails. Files land in **Downloads** as `.txt`. Open in VS Code or Notepad++.

**Permissions:** `downloads`, `activeTab`, `tabs`, `storage`, `clipboardWrite`, `*://ims.lisd.net/*`

**Console verification logs:** Filter i3 tab DevTools by `i3 Tester VERIFY`. Background logs: about:debugging → extension → Inspect.

## Load

1. Open Firefox and go to `about:debugging`.
2. Click **This Firefox** → **Load Temporary Add-on…**
3. Select `extension-test/manifest.json` from this repo.

Reload the add-on after any code change (or restart Firefox).

## Run tests

### Reports page (elements 1–5)

1. Log in to i3 and navigate to **Inventory → Settings → Reports** (`#/inventory/settings/reports`).
2. Open the extension popup → choose **Reports page (1–5)** or **All**.
3. Click **Run Selector Tests**.

For element 2 (TRC checkbox), open the Sitename filter dropdown first so checkboxes are in the semantics tree.

### Search page (elements 6–8)

1. Navigate to inventory search / manage assets.
2. Open the popup → **Search page (6–8)** or **All** → **Run Selector Tests**.

Element 8 always warns: it needs a typed query to surface autocomplete rows.

### History tab (elements 9–12)

1. Open a device detail modal.
2. Click the **History Details** tab so the history table is visible.
3. Open the popup → **History tab (9–12)** or **All** → **Run Selector Tests**.

## Results

- A banner appears top-right for 10 seconds: `i3 Test: X pass / Y fail`.
- Full details are logged in the page **DevTools console** (`console.table`).
- On run, the **full JSON report auto-copies to clipboard** and prints in DevTools console on the i3 tab.
- Click **Copy Report** in the popup to re-copy the last run.
- Report includes every live `flt-semantics` node with aria-label, role, position (rect), tree path, and selector hints.

## Files

| File | Role |
|------|------|
| `manifest.json` | MV2 manifest, content script on `ims.lisd.net` |
| `popup.html` / `popup.js` | Trigger tests and download JSON |
| `test-runner.js` | Content script — selector probes and report |

Reference selectors: `extension/i3-selectors.md`.
