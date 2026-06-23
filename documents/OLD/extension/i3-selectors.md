# i3 Selector Reference

**Session 0 output — read by content.js (Session 5) before coding.**

---

## Critical Architecture Context

i3 (`ims.lisd.net`) is a **Flutter Web app using the CanvasKit renderer**. It is NOT Angular or React.

Evidence: `body[flt-renderer="canvaskit (auto-selected)"]`, `<flutter-view>`, `<flt-semantics-host>` present in all saved HTML files.

### What this means for content.js

- All visible UI (buttons, dropdowns, tables, tabs) is painted to `<canvas>`. No `<button>`, `<tr>`, `<td>`, or `<input>` elements exist for these widgets in the DOM.
- Automation must target the Flutter **accessibility semantics tree**: `flt-semantics-host > flt-semantics[aria-label="..."]` nodes injected at runtime (empty in static saves).
- The only directly typeable DOM element is `input.flt-text-editing` inside `flt-text-editing-host` — a hidden off-screen proxy Flutter uses for text entry.
- `waitForElement` must use `MutationObserver` on `flt-semantics-host` until `aria-label` nodes appear.
- **All selectors rated FRAGILE** — they depend on Flutter accessibility being enabled and on label strings matching exactly. Verify each against a live session before hardcoding.

---

## Element 1 — Site/Location Filter Dropdown Opener (Reports page)

| Property | Value |
|----------|-------|
| Tag | `flt-semantics` (runtime, injected under `flt-semantics-host`) |
| id | none |
| Classes | none |
| data-* | none |
| aria | `aria-label="Select Sitename"` |
| Source | `main.dart_qM9C.js` line 165811 |

**Recommended selector:**
```
flt-semantics-host flt-semantics[aria-label="Select Sitename"]
```

**If clickable child needed:**
```
flt-semantics-host flt-semantics[aria-label="Select Sitename"] flt-semantics[role="button"]
```

**Stability: FRAGILE** — Flutter semantics only; no id/data-*. Other pages use `"Select site name"` (different casing). Verify exact label on live session.

---

## Element 2 — "Technology Repair Center" Checkbox

| Property | Value |
|----------|-------|
| Tag | `flt-semantics` (runtime) |
| id | none |
| Classes | none |
| data-* | none |
| aria | `role="checkbox"`, `aria-label="Technology Repair Center"`, `aria-checked="false"` (or `"true"`) |
| Source | `main.dart_qM9C.js` (~line 165816, checkbox overlay pattern) |

**Recommended selector:**
```
flt-semantics-host flt-semantics[role="checkbox"][aria-label="Technology Repair Center"]
```

**Stability: FRAGILE** — API-driven label; the string "Technology Repair Center" does NOT appear in saved JS files — it comes from live API data. Exact casing and spacing must be verified on a live session.

---

## Element 3 — Done Button (Closes Filter Dropdown)

| Property | Value |
|----------|-------|
| Tag | `flt-semantics` (runtime) |
| id | none |
| Classes | none |
| data-* | none |
| aria | `aria-label="Done"`, `role="button"` |
| Source | `main.dart_qM9C.js` lines 165632, 165824, 165949 (`A.f("Done",...)`) |

**Recommended selector:**
```
flt-semantics-host flt-semantics[aria-label="Done"][role="button"]
```

**WARNING:** Multiple "Done" buttons exist on the Reports page — one per multi-select filter (Sitename, DeviceType, Status, Manufacturer, Funding Source all use the same overlay pattern). Scope by sequential automation: click Sitename → select TRC → click Done immediately, before any other filter interaction.

**Stability: FRAGILE** — multiple matching nodes; depends on scoping to the currently open overlay.

---

## Element 4 — Search Button (Runs Report Query)

| Property | Value |
|----------|-------|
| Tag | `flt-semantics` (runtime) |
| id | none |
| Classes | none |
| data-* | none |
| aria | `aria-label="Search"`, `role="button"` |
| Source | `main.dart_qM9C.js` line 162744 (`A.dw(..., "Search", ...)`) |

**Recommended selector:**
```
flt-semantics-host flt-semantics[aria-label="Search"][role="button"]
```

**Note:** "Search" also appears as an in-dropdown text filter label. The toolbar Search button is distinct and must be clicked AFTER filters are set and the dropdown is closed. API: `inventory/reports/reportsBasedOnSearch`.

**Stability: FRAGILE** — "Search" label reused across page; click only after confirming dropdown is closed.

---

## Element 5 — Download Report / CSV Export Button

| Property | Value |
|----------|-------|
| Tag | `flt-semantics` (runtime) |
| id | none |
| Classes | none |
| data-* | none |
| aria | `aria-label="Download Report"`, `role="button"` |
| Source | `main.dart_qM9C.js` lines 162746, 162983–162998, 86443–86471 |

**Recommended selector:**
```
flt-semantics-host flt-semantics[aria-label="Download Report"][role="button"]
```

**IMPORTANT:** The label is `"Download Report"` — **NOT** `"Download as Report"` as the Session 5 prompt states. Update Session 5 before coding.

**Download mechanism:** Flutter calls `inventory/reports/export` API → receives blob → creates a temporary `<a download="report.csv">` and clicks it programmatically. Firefox downloads API will catch it. Filename matches `/report.*\.csv$/i`.

**Stability: FRAGILE** — semantics/tooltip dependent; label is relatively unique on the Reports page toolbar.

---

## Element 6 — Search Mode Dropdown (Tag/Serial)

| Property | Value |
|----------|-------|
| Tag | `flt-semantics` (runtime, Flutter DropdownButton) |
| id | none |
| Classes | none |
| data-* | none |
| aria | `aria-label="Tag/Serial"` (current selection; options: `["Tag/Serial", "Name", "Id"]`) |
| Source | `main.dart_SHZo.js` (~line 117798, widget `A.d6()`) |

**Recommended selector:**
```
flt-semantics-host flt-semantics[aria-label="Tag/Serial"]
```

**Fallback:** text-walk to element matching `/^Tag\/Serial$/i`.

**Note:** `"Tag/Serial"` is the DEFAULT selection — content.js may not need to change it if already selected. Verify on live session.

**Stability: FRAGILE** — Flutter semantics only; no id/data-*.

---

## Element 7 — Search Input Field

| Property | Value |
|----------|-------|
| Tag | `input` — **real DOM element** (Flutter text-editing proxy) |
| id | none |
| Classes | `flt-text-editing` |
| Parent | `flt-text-editing-host` (inside `flutter-view`) |
| Style | Off-screen (`top: -9999px` or transform), `opacity: 1`, `color: transparent` |
| aria | none in static snapshot |
| Hint text | `"Search text"` (constant `B.EG`, `main.dart_SHZo.js` ~line 117840) |
| Source | `SEARCH_AND_HISTORY_Swensa I3.htm` (static), `main.dart_SHZo.js` (~line 117840) |

**Recommended selector:**
```
flt-text-editing-host input.flt-text-editing:not([readonly])
```

**After setting value:** dispatch both:
```js
element.dispatchEvent(new Event("input", { bubbles: true }));
element.dispatchEvent(new Event("change", { bubbles: true }));
```

**WARNING:** Multiple `flt-text-editing` inputs may exist simultaneously; some have `readonly="readonly"`. Target the non-readonly, focused/active one.

**Stability: FRAGILE** — hidden proxy inputs; no unique id; focus-state dependent; multiple may exist.

---

## Element 8 — Device Result Row

| Property | Value |
|----------|-------|
| Tag | `flt-semantics` (runtime, Flutter autocomplete option) |
| id | none |
| Classes | none |
| data-* | none |
| aria | `role="button"`, `aria-label` = the tag/serial text of the matching device |
| APIs | `inventory/globalSearch/pattern/{mode}/{query}`, `inventory/transfer/getTagInformationByTagOrSerialId/{tag}/{siteId}` |
| Source | `main.dart_SHZo.js` (~lines 117950–118100) |

**Recommended selector (multiple-match case):**
```
flt-semantics-host flt-semantics[role="button"]
```
Filter to first option whose `aria-label` matches the searched serial/tag.

**IMPORTANT behavioral note:** If only ONE device matches, Flutter auto-opens the device detail modal WITHOUT a result row click. content.js must handle both cases:
1. Single match → detail opens automatically (do not wait for result row)
2. Multiple matches → autocomplete overlay appears; click first matching option

**Stability: FRAGILE** — canvas autocomplete overlay; no stable id; text/aria-label matching required.

---

## Element 9 — "History Details" Tab

| Property | Value |
|----------|-------|
| Tag | `flt-semantics` (runtime, Flutter tab) |
| id | none |
| Classes | none |
| data-* | none |
| aria | `aria-label="History Details"`, `role="tab"` (likely) |
| Sibling tab | `"Details"` |
| Source | `main.dart_SHZo.js` (~line 153218, `A.f("History Details", ...)`) |

**Recommended selector:**
```
flt-semantics-host flt-semantics[aria-label="History Details"]
```

**Note:** Parent screen is "Tags Information" device detail modal. Activates history view (sets `ax.ch` state to false).

**Stability: FRAGILE** — canvas tab; aria-label match required; DOM node is not persistent.

---

## Element 10 — History Table Container

| Property | Value |
|----------|-------|
| Tag | `flt-semantics-scroll-overflow` or ancestor `flt-semantics` (runtime) |
| id | none |
| Classes | none |
| data-* | none |
| Source | `main.dart_SHZo.js` (~lines 153823–153875) |

**Recommended selector:**
```
flt-semantics-host flt-semantics-scroll-overflow
```
Scope under device detail modal.

**Note:** This is a Flutter `DataTable` inside `SingleChildScrollView` — NOT an HTML `<table>`. No `<table>`, `<thead>`, or `<tbody>` exist.

**Stability: FRAGILE** — no stable DOM identity; entire table is canvas-rendered.

---

## Element 11 — Single History Table Row

| Property | Value |
|----------|-------|
| Tag | `flt-semantics` group (runtime DataRow) |
| id | none |
| Classes | none |
| data-* | none |
| Source | `main.dart_SHZo.js` (~lines 153872–153875, data model `A.b8`, handler `cRe`) |

**Note:** No `<tr>` exists. Row date format: `MM-dd-yyyy HH:mm` — may contain extra whitespace; normalize before parsing.

**Recommended approach:** Traverse semantics nodes inside scroll container, skipping header semantics nodes.

**Stability: FRAGILE** — positional semantics traversal; no row-level id/data-*.

---

## Element 12 — History Row Cells: Date, Assigned To, Break Name

### 12a — Date Cell

| Property | Value |
|----------|-------|
| Column key (internal) | `movedDate` |
| Column header display | `Date` |
| Column index | 0 (first column) |
| Display format | `MM-dd-yyyy HH:mm` — normalize whitespace before `strptime` |
| Source | `main.dart_SHZo.js` (~line 153857) |

**Recommended selector:** semantics label matching `/\d{2}-\d{2}-\d{4}\s+\d{2}:\d{2}/`

**Stability: FRAGILE**

### 12b — Assigned To Cell

| Property | Value |
|----------|-------|
| Column key (internal) | `deviceInPlaceType` |
| Column header display | `Assigned To` |
| Column index | 1 |
| Used by | `break_counter.py` — looks for `"Staff (EP"` as substring |
| Source | `main.dart_SHZo.js` (~line 153828) |

**Recommended selector:** semantics under column header `Assigned To`, or column index 1 after Date.

**Stability: FRAGILE**

### 12c — Break Name Cell

| Property | Value |
|----------|-------|
| Column key (internal) | `strikeName` |
| Column header display | `Break Name` |
| Column index | 3 (after Date, Assigned To, Device At) |
| Used by | `break_counter.py` — matches `"Staff - Device - Damaged"` exactly |
| Source | `main.dart_SHZo.js` (~line 153828) |

**Recommended selector:** semantics under column header `Break Name`, or column index 3.

**Stability: FRAGILE**

### All 7 History Table Columns (for row indexing)

| Index | Display Label | Internal Field |
|-------|--------------|----------------|
| 0 | Date | `movedDate` |
| 1 | Assigned To | `deviceInPlaceType` |
| 2 | Device At | `deviceInPlaceName` |
| 3 | Break Name | `strikeName` |
| 4 | Site | `siteName` |
| 5 | Device Status | `status` |
| 6 | Updated By | `userName` |

---

## Selector Summary Table

| # | Element | Recommended Selector | Stability |
|---|---------|----------------------|-----------|
| 1 | Site filter dropdown opener | `flt-semantics-host flt-semantics[aria-label="Select Sitename"]` | FRAGILE |
| 2 | Technology Repair Center checkbox | `flt-semantics-host flt-semantics[role="checkbox"][aria-label="Technology Repair Center"]` | FRAGILE |
| 3 | Done button (filter overlay) | `flt-semantics-host flt-semantics[aria-label="Done"][role="button"]` | FRAGILE |
| 4 | Search button (toolbar) | `flt-semantics-host flt-semantics[aria-label="Search"][role="button"]` | FRAGILE |
| 5 | Download Report button | `flt-semantics-host flt-semantics[aria-label="Download Report"][role="button"]` | FRAGILE |
| 6 | Search mode dropdown | `flt-semantics-host flt-semantics[aria-label="Tag/Serial"]` | FRAGILE |
| 7 | Search input field | `flt-text-editing-host input.flt-text-editing:not([readonly])` | FRAGILE |
| 8 | Device result row | `flt-semantics-host flt-semantics[role="button"]` (filter by aria-label) | FRAGILE |
| 9 | History Details tab | `flt-semantics-host flt-semantics[aria-label="History Details"]` | FRAGILE |
| 10 | History table container | `flt-semantics-host flt-semantics-scroll-overflow` | FRAGILE |
| 11 | History table row | semantics inside scroll container, skip header nodes | FRAGILE |
| 12a | Date cell | aria-label matching `/\d{2}-\d{2}-\d{4}\s+\d{2}:\d{2}/` | FRAGILE |
| 12b | Assigned To cell | column index 1 in row semantics | FRAGILE |
| 12c | Break Name cell | column index 3 in row semantics | FRAGILE |

---

## Critical Build Prompt Corrections

Issues to resolve before coding Session 5.

**1. HTTPS permissions**
Manifest must use `*://ims.lisd.net/*`, not `http://` only. Live site is HTTPS.

**2. Wrong export button label**
Session 5 prompt says `"Download as Report"`. Actual label confirmed in JS is `"Download Report"`. Update Session 5 prompt before coding.

**3. Relay missing `csv_ready` → `serial_ready` chain (Session 1)**
When the relay receives `{ type: "csv_ready", csv_text }` from the extension, it must:
- (a) Store `csv_text` in session state.
- (b) Parse the CSV to find the Serial for the stored `asset_tag`.
- (c) Send `{ type: "serial_ready", serial }` back to the extension.

Session 1 prompt does not specify this. Session 5 references `serial_ready` without Session 1 defining its origin.

**4. CSV column name format unconfirmed**
Backend expects PascalCase (`DeviceType`, `ProductName`, `SchoolName`). i3 UI labels use spaces (`Device Type`, `Product Name`, `School Name`). Export a real `report.csv` and check the header row before finalizing `csv_parser.py`. Add column alias normalization if names differ.

**5. History date format whitespace**
Scraped date strings from Flutter semantics may contain extra whitespace (e.g., `MM-dd-yyyy  HH:mm` with double space). Normalize before `strptime`:
```python
import re
date_str = re.sub(r'\s+', ' ', date_str.strip())
```

**6. Single-match auto-open**
When an asset tag search returns exactly one result, Flutter opens the device detail automatically without a result row click. Sequence 2 must handle this case: do NOT wait for a result row click if the detail modal opens immediately.

**7. `waitForFlutterReady` needed**
Add a first step to both Sequence 1 and Sequence 2 that waits for `flt-semantics-host` to have child elements (i.e., Flutter has rendered and semantics are active) before attempting any interaction.

**8. No login/session handling**
If the i3 session has expired, the app redirects to `auth/login`. `content.js` should detect this URL and send an `{ type: "error", step: "auth", message: "Session expired — log in to i3 and retry." }` to `background.js` rather than timing out on all subsequent steps.

**9. `browser.downloads.onCreated` preferred**
More reliable than polling `browser.downloads.search` after the export click. Set a flag before clicking Download Report, catch the `onCreated` event as primary, with search-polling as fallback.
