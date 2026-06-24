---
name: LISD CSS Source Audit
overview: Use the browser MCP to inspect the live CSS source of lisd.net/production2, extract the actual computed design tokens (colors, fonts, spacing, button shapes), compare against the current frontend implementation, and fix any discrepancies in style.css and the design rule file.
todos:
  - id: live-inspect
    content: "Sub-agent: Navigate to lisd.net/production2 via browser MCP, extract all :root CSS variables and computed styles on key elements"
    status: completed
  - id: diff-fix
    content: "Sub-agent: Compare live values to current style.css tokens, update style.css and 002-lisd-design.mdc for any discrepancies"
    status: completed
  - id: verify
    content: "Sub-agent (readonly): Confirm all tokens in style.css match confirmed live site values"
    status: completed
isProject: false
---

# LISD Live CSS Inspection and Frontend Reconciliation

## Context

`documents/lisd_style.md` is a text scrape — no CSS values. The right-side navigation panel on the style guide (as seen in the screenshot) links to distinct sections, each with its own component examples. The only reliable token source is inspecting the live CSS on each page. This plan navigates every relevant section, extracts computed values, and reconciles with `frontend/style.css`.

## Pages to inspect (right-side panel sections)

| Priority | URL | What to extract |
|----------|-----|----------------|
| **1** | `/production2` | `:root` CSS variables, body font, H1/H2 styles, site header |
| **2** | `/production2/form` | Input border/radius/padding, label style, submit button |
| **3** | `/production2/login` | Auth form pattern, input focus state |
| **4** | `/production2/page-layout/1-column-layout` | Content column max-width, page bg, breadcrumb |
| **5** | `/production2/qa-testing/qa-testing-buttons` | All button variants: colors, border-radius, padding |
| **6** | `/production2/navigation` | Nav bar height, active state colors |
| **7** | `/production2/organizational/one-column` | Card/container borders, padding |

## CSS to extract on each page

**Global (run on every page once):**
```javascript
// All :root CSS custom properties
const cs = getComputedStyle(document.documentElement);
const keys = [];
for (const sheet of document.styleSheets) {
  try {
    for (const rule of sheet.cssRules) {
      if (rule.selectorText === ':root') {
        const text = rule.cssText;
        const matches = text.match(/--[\w-]+/g) || [];
        keys.push(...matches);
      }
    }
  } catch(e) {}
}
const result = {};
[...new Set(keys)].forEach(k => { result[k] = cs.getPropertyValue(k).trim(); });
JSON.stringify(result, null, 2);
```

**Per element (run on relevant pages):**
- Body: `font-family`, `color`, `background-color`, `font-size`
- Site header (`.fs-header` or `header`): `background-color`, `min-height`, `padding`
- H1/`.fs-headline`: `font-family`, `color`, `font-size`, `font-weight`
- H2/H3: same
- `.fs-button-1` (Button 1): `background-color`, `color`, `border-radius`, `padding`, `font-weight`, `text-transform`, `font-family`
- `.fs-button-2` (Button 2 — gold): same
- `.fs-button-3` through `.fs-button-5`: same
- `input[type="text"]` or `input[type="email"]`: `border`, `border-radius`, `background-color`, `padding`, `font-family`
- `label`: `font-family`, `font-size`, `font-weight`, `color`
- Form submit button: same as button

## Steps

### Step 1 — Sub-agent: Live multi-page CSS inspection

**Spawn:** `generalPurpose`  
**Uses:** `cursor-ide-browser` MCP  
**Sequence:**
1. Navigate to `https://www.lisd.net/production2` — extract `:root` variables + body/header/H1/H2/button computed styles
2. Navigate to `https://www.lisd.net/production2/qa-testing/qa-testing-buttons` — extract all `.fs-button-*` variant styles
3. Navigate to `https://www.lisd.net/production2/form` — extract input, label, submit button styles
4. Navigate to `https://www.lisd.net/production2/login` — extract input/focus styles
5. Navigate to `https://www.lisd.net/production2/page-layout/1-column-layout` — extract content column width and page background

Take a screenshot after each navigation to confirm the correct page loaded.

**Deliver:** A complete token table mapping property → confirmed value across all pages. Flag any value that differs from the current `style.css`:
- `--lisd-primary` currently `#023A6D`
- `--lisd-secondary` currently `#DEAF25`
- `--lisd-text` currently `#373737`
- body `font-family` currently Merriweather
- labels `font-family` currently Montserrat
- input `border-radius` currently `0`
- button `border-radius` currently `50px`
- content column `max-width` currently `700px`

---

### Step 2 — Sub-agent: Diff and fix

**Spawn:** `generalPurpose` (sequential, after Step 1)  
**Owns:** [`frontend/style.css`](frontend/style.css), [`.cursor/rules/002-lisd-design.mdc`](.cursor/rules/002-lisd-design.mdc), [`AGENTS.md`](AGENTS.md) design section  
**Must NOT edit:** `index.html`, `main.ts`, `main.js`

For each confirmed live value from Step 1:
- Match → leave, mark confirmed
- Mismatch → update `style.css` `:root` / `html[data-theme="light"]` block + update `002-lisd-design.mdc` token table

Structural fixes (if found): button border-radius, input border-radius, font stack, header height/padding, content column max-width.

---

### Step 3 — Sub-agent: Verification report

**Spawn:** `explore` (`readonly: true`)

Read [`frontend/style.css`](frontend/style.css) and [`.cursor/rules/002-lisd-design.mdc`](.cursor/rules/002-lisd-design.mdc). Report PASS/FAIL for each token against the confirmed live values from Step 1. No edits.

---

## Files that may change

| File | Scope |
|------|-------|
| [`frontend/style.css`](frontend/style.css) | Token corrections, structural fixes (border-radius, fonts, layout) |
| [`.cursor/rules/002-lisd-design.mdc`](.cursor/rules/002-lisd-design.mdc) | Token table, font rules, component specs |
| [`AGENTS.md`](AGENTS.md) | Design token block only |

**Not changed:** `index.html`, `main.ts`, `main.js`, `relay/`, `backend/`, `extension/`
