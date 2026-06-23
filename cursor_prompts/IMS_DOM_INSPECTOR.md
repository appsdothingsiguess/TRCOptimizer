# IMS.LISD.NET DOM Inspector

Paste-into-Firefox-DevTools console snippet for **DOM selector discovery** on ims.lisd.net. Use it while building `extension/content.js` to capture stable CSS selectors, `data-*` attributes, and STABLE/FRAGILE ratings for automation targets 1–12.

---

## Usage (3 runs)

Run the **same snippet** on each page after navigating there:

| Run | Navigate to | Targets reported |
|-----|-------------|------------------|
| **1** | `ims.lisd.net/#/inventory/settings/reports` | 1–5 |
| **2** | Device search view | 6–8 |
| **3** | Device detail (after clicking a result) | 9–12 |

**How to run:** `F12` → **Console** → paste the snippet → Enter. Review the grouped `console.table` output and the plain-text block at the bottom.

---

## Tips for each run

**Run 1 (reports):** Open the site/location filter dropdown manually, check **Technology Repair Center**, then paste the snippet — so targets **#2** and **#3** are in the DOM.

**Run 2 (device search):** Run a search first if you want **#8** (clickable result row) found.

**Run 3 (device detail):** Click **History Details** before pasting — so **#10–#12** (history table and sample row cells) exist in the DOM.

---

## Full snippet

Copy all of this into the Firefox DevTools console on the active ims.lisd.net page:

```javascript
(function imsDomInspector() {
  'use strict';

  const PAGE = (() => {
    const h = (location.hash || '').toLowerCase();
    const has = (t) => [...document.querySelectorAll('body *')].some(el => {
      const s = (el.innerText || el.textContent || '').trim();
      return s === t || s.includes(t);
    });
    if (h.includes('reports') || has('Download as Report')) return 'reports';
    if (has('History Details') || (has('Assigned To') && has('Break Name'))) return 'detail';
    if (h.includes('search') || h.includes('device') || has('Tag/Serial') || has('Tag / Serial')) return 'search';
    return 'unknown';
  })();

  function dataAttrs(el) {
    if (!el || el.nodeType !== 1) return {};
    const o = {};
    for (const a of el.attributes) if (a.name.startsWith('data-')) o[a.name] = a.value;
    return o;
  }

  function esc(s) {
    return (window.CSS && CSS.escape) ? CSS.escape(s) : String(s).replace(/([^\w-])/g, '\\$1');
  }

  function unique(sel) {
    try { return document.querySelectorAll(sel).length === 1; } catch { return false; }
  }

  function bestSelector(el) {
    if (!el || el.nodeType !== 1) return null;
    if (el.id && unique('#' + esc(el.id))) return '#' + esc(el.id);
    const da = dataAttrs(el);
    for (const k of Object.keys(da)) {
      const sel = `${el.tagName.toLowerCase()}[${k}="${da[k].replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"]`;
      if (unique(sel)) return sel;
    }
    if (el.classList.length) {
      const full = el.tagName.toLowerCase() + '.' + [...el.classList].map(esc).join('.');
      if (unique(full)) return full;
      for (const c of el.classList) {
        const sel = `${el.tagName.toLowerCase()}.${esc(c)}`;
        if (unique(sel)) return sel;
      }
    }
    const text = (el.innerText || el.textContent || '').trim().slice(0, 50);
    if (text && el.classList.length) {
      const cls = [...el.classList].map(esc).join('.');
      return `${el.tagName.toLowerCase()}.${cls} /* text:"${text}" */`;
    }
    const parts = [];
    let n = el;
    while (n && n.nodeType === 1 && n !== document.body) {
      let p = n.tagName.toLowerCase();
      if (n.id) { parts.unshift(p + '#' + esc(n.id)); break; }
      const par = n.parentElement;
      if (par) {
        const sibs = [...par.children].filter(c => c.tagName === n.tagName);
        if (sibs.length > 1) p += `:nth-of-type(${sibs.indexOf(n) + 1})`;
      }
      parts.unshift(p);
      n = par;
    }
    return parts.join(' > ');
  }

  function stability(el, sel) {
    if (!el) return { stability: 'N/A', reason: 'Element not found' };
    if (el.id && unique('#' + esc(el.id))) return { stability: 'STABLE', reason: 'Unique id attribute' };
    const da = dataAttrs(el);
    const keys = Object.keys(da);
    if (keys.length && sel && !sel.includes('nth-of-type') && !sel.includes('/*')) {
      return { stability: 'STABLE', reason: `Unique data attribute (${keys[0]})` };
    }
    if (sel && sel.includes('nth-of-type')) return { stability: 'FRAGILE', reason: 'Positional nth-of-type in selector' };
    if (sel && sel.includes('/* text:')) return { stability: 'FRAGILE', reason: 'Disambiguated by visible text' };
    if (el.classList.length) return { stability: 'FRAGILE', reason: 'Class-based selector; no unique id/data-*' };
    return { stability: 'FRAGILE', reason: 'Tag-only or structural selector' };
  }

  function row(el, num, label, note) {
    if (!el) {
      return { '#': num, label, tagName: '—', id: '—', className: '—', dataAttributes: '—', selector: '—', stability: 'N/A', reason: 'Element not found on this page', visibleText: note || '—' };
    }
    const da = dataAttrs(el);
    const sel = bestSelector(el);
    const st = stability(el, sel);
    return {
      '#': num,
      label,
      tagName: el.tagName.toLowerCase(),
      id: el.id || '—',
      className: (typeof el.className === 'string' && el.className) ? el.className : '—',
      dataAttributes: Object.keys(da).length ? JSON.stringify(da) : '—',
      selector: sel || '—',
      stability: st.stability,
      reason: st.reason,
      visibleText: ((el.innerText || el.textContent || '').trim().slice(0, 100)) || '—'
    };
  }

  function byText(regex, root) {
    root = root || document.body;
    const out = [];
    const walk = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT);
    while (walk.nextNode()) {
      const el = walk.currentNode;
      const t = (el.innerText || el.textContent || '').trim();
      if (!t) continue;
      if (regex.test(t)) out.push(el);
    }
    return out;
  }

  function clickable(el) {
    if (!el) return null;
    let n = el;
    while (n && n !== document.body) {
      const tag = n.tagName;
      if (['BUTTON', 'A', 'INPUT', 'SELECT', 'LABEL'].includes(tag)) return n;
      if (n.getAttribute('role') === 'button' || n.getAttribute('role') === 'tab' || n.getAttribute('role') === 'combobox') return n;
      if (n.classList && [...n.classList].some(c => /btn|click|toggle|dropdown|tab/i.test(c))) return n;
      n = n.parentElement;
    }
    return el;
  }

  function visible(el) {
    if (!el) return false;
    const r = el.getBoundingClientRect();
    if (r.width === 0 && r.height === 0) return false;
    const st = getComputedStyle(el);
    return st.visibility !== 'hidden' && st.display !== 'none';
  }

  function pick(...cands) {
    return cands.find(visible) || cands[0] || null;
  }

  function btnLabel(regex) {
    return pick(...byText(regex).map(clickable).filter(el => el && (el.tagName === 'BUTTON' || el.tagName === 'A' || el.getAttribute('role') === 'button')));
  }

  function checkboxNear(text) {
    const containers = byText(new RegExp(text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i'));
    for (const c of containers) {
      const root = c.closest('li, label, div, tr, span') || c;
      const cb = root.querySelector('input[type="checkbox"]');
      if (cb) return cb;
      if (c.tagName === 'LABEL' && c.htmlFor) {
        const inp = document.getElementById(c.htmlFor);
        if (inp) return inp;
      }
    }
    return document.querySelector('input[type="checkbox"]') &&
      [...document.querySelectorAll('input[type="checkbox"]')].find(inp => {
        const ctx = inp.closest('label, li, div, tr');
        return ctx && /technology repair center/i.test(ctx.innerText || '');
      }) || null;
  }

  function findSiteFilterOpener() {
    const site = byText(/\b(site|location|building|campus)\b/i)
      .map(clickable)
      .filter(el => el && !/technology repair center/i.test(el.innerText || ''));
    const aria = [...document.querySelectorAll('[aria-haspopup="true"], [aria-haspopup="listbox"], .dropdown-toggle, [data-toggle="dropdown"]')];
    return pick(...site, ...aria.map(clickable));
  }

  function findHistoryTable() {
    for (const table of document.querySelectorAll('table')) {
      const headers = [...table.querySelectorAll('thead th, tr th, [role="columnheader"]')].map(h => (h.innerText || '').trim().toLowerCase());
      if (!headers.length) continue;
      const hasAssigned = headers.some(h => h.includes('assigned'));
      const hasBreak = headers.some(h => h.includes('break'));
      if (hasAssigned && hasBreak) return table;
    }
    return document.querySelector('[role="grid"], .history-table, .data-table') || null;
  }

  function colIndex(table, patterns) {
    const headers = [...table.querySelectorAll('thead th, tr th, [role="columnheader"]')];
    const texts = headers.map(h => (h.innerText || '').trim().toLowerCase());
    for (let i = 0; i < texts.length; i++) {
      if (patterns.some(p => p.test(texts[i]))) return i;
    }
    return -1;
  }

  // --- resolve targets ---
  const targets = {};
  const notes = [];

  if (PAGE === 'reports' || PAGE === 'unknown') {
    targets[1] = findSiteFilterOpener();
    targets[2] = checkboxNear('Technology Repair Center');
    targets[3] = pick(
      btnLabel(/^(done|apply|ok)$/i),
      ...byText(/^(done|apply)$/i).map(clickable)
    );
    targets[4] = btnLabel(/^search$/i);
    targets[5] = pick(
      btnLabel(/download\s+as\s+report/i),
      btnLabel(/download.*report/i),
      ...byText(/download\s+as\s+report/i).map(clickable)
    );
  }

  if (PAGE === 'search' || PAGE === 'unknown') {
    targets[6] = pick(
      ...byText(/tag\s*\/?\s*serial/i).map(clickable),
      document.querySelector('select'),
      document.querySelector('[role="combobox"]'),
      ...document.querySelectorAll('.dropdown, .ui-select, mat-select').values()
    );
    targets[7] = pick(
      document.querySelector('input[type="search"]'),
      document.querySelector('input[placeholder*="serial" i]'),
      document.querySelector('input[placeholder*="tag" i]'),
      document.querySelector('input[aria-label*="search" i]'),
      document.querySelector('form input[type="text"]'),
      document.querySelector('input[type="text"]')
    );
    const resultRows = [...document.querySelectorAll('table tbody tr, [role="row"]')]
      .filter(tr => tr.querySelectorAll('td, [role="gridcell"]').length >= 2);
    targets[8] = pick(...resultRows.map(clickable));
  }

  if (PAGE === 'detail' || PAGE === 'unknown') {
    targets[9] = pick(...byText(/^history details$/i).map(clickable));
    targets[10] = findHistoryTable();
    const table = targets[10];
    if (table) {
      const tr = table.querySelector('tbody tr') || table.querySelector('tr[data-row], [role="row"]:not(:first-child)');
      targets[11] = tr;
      if (tr) {
        const cells = [...tr.querySelectorAll('td, [role="gridcell"]')];
        const iDate = colIndex(table, [/date/, /time/]);
        const iAssigned = colIndex(table, [/assigned/]);
        const iBreak = colIndex(table, [/break/]);
        targets['12a'] = iDate >= 0 ? cells[iDate] : null;
        targets['12b'] = iAssigned >= 0 ? cells[iAssigned] : null;
        targets['12c'] = iBreak >= 0 ? cells[iBreak] : null;
      }
    }
  }

  const labels = {
    1: 'Site/location filter opener',
    2: 'Technology Repair Center checkbox',
    3: 'Done/Apply button (dropdown)',
    4: 'Search button',
    5: 'Download as Report button',
    6: 'Search mode dropdown (Tag/Serial)',
    7: 'Serial/tag search input',
    8: 'Device result row (clickable)',
    9: 'History Details tab',
    10: 'History table container',
    11: 'History table row (sample)',
    '12a': 'Row cell: Date',
    '12b': 'Row cell: Assigned To',
    '12c': 'Row cell: Break Name'
  };

  const pageNote = {
    reports: 'REPORT PAGE — targets 1–5',
    search: 'DEVICE SEARCH PAGE — targets 6–8',
    detail: 'DEVICE DETAIL PAGE — targets 9–12',
    unknown: 'UNKNOWN PAGE — all targets attempted; many may be NOT FOUND'
  };

  console.clear();
  console.log('%c IMS.LISD.NET DOM INSPECTOR ', 'background:#073772;color:#fff;font-weight:bold;padding:4px 8px;');
  console.log('URL:', location.href);
  console.log('Detected page:', PAGE);
  console.log('Hint:', pageNote[PAGE]);

  const sections = {
    reports: [1, 2, 3, 4, 5],
    search: [6, 7, 8],
    detail: [9, 10, 11, '12a', '12b', '12c']
  };

  const allRows = [];
  for (const [section, nums] of Object.entries(sections)) {
    if (PAGE !== 'unknown' && PAGE !== section) continue;
    console.group(pageNote[section] || section);
    const tableRows = nums.map(n => {
      const r = row(targets[n], n, labels[n]);
      allRows.push(r);
      if (!targets[n]) notes.push(`#${n} ${labels[n]}: NOT FOUND — ${section === 'reports' && (n === 2 || n === 3) ? 'open site filter first' : section === 'detail' && n >= 10 ? 'open History Details tab first' : section === 'search' && n === 8 ? 'run a search first' : 'check navigation'}`);
      return r;
    });
    console.table(tableRows);
    console.groupEnd();
  }

  if (PAGE === 'unknown') {
    console.warn('Page not recognized. Navigate to reports, device search, or device detail and re-run.');
  }

  let copy = '=== IMS.LISD.NET DOM INSPECTION NOTES ===\n';
  copy += `URL: ${location.href}\nPage: ${PAGE}\nDate: ${new Date().toISOString()}\n\n`;
  for (const r of allRows) {
    copy += `#${r['#']} ${r.label}\n`;
    copy += `  tag: ${r.tagName}\n  id: ${r.id}\n  class: ${r.className}\n  data-*: ${r.dataAttributes}\n  selector: ${r.selector}\n  stability: ${r.stability} — ${r.reason}\n  visibleText: ${r.visibleText}\n\n`;
  }
  if (notes.length) copy += 'WARNINGS:\n' + notes.map(n => '- ' + n).join('\n') + '\n';
  copy += '=== END ===';
  console.log('%c=== COPY BELOW (paste back as notes) ===', 'font-weight:bold');
  console.log(copy);

  return { page: PAGE, targets, rows: allRows, copyText: copy };
})();
```

---

## What to paste back

After all **3 runs**, paste the **three** plain-text blocks from the console — each starts with `=== IMS.LISD.NET DOM INSPECTION NOTES ===` and ends with `=== END ===`.

Each block includes:

- URL, detected page type, and timestamp
- Per-target lines: `tag`, `id`, `class`, `data-*`, `selector`, `stability`, `visibleText`
- Any **WARNINGS** for `NOT FOUND` targets

Those notes will feed `extension/content.js` selector comments (STABLE/FRAGILE + chosen selector) when the POC extension is built.

---

## Limitations

- **Heuristic finders** may pick the wrong element if multiple buttons share the same label (e.g. two "Search" buttons). Check the `visibleText` column to spot mismatches.
- **UI state required:** targets #2 and #3 need the site filter open; #10–#12 need the History Details tab selected; #8 needs search results loaded before the snippet runs.
- **Light DOM only** — if ims.lisd.net uses closed shadow DOM heavily, elements inside shadow roots will not be found. A follow-up version could pierce open shadow roots if needed.
- On an **unrecognized page**, the snippet attempts all 12 targets; most will show `NOT FOUND`.
