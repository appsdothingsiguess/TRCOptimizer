# LISD Style Guide Browser Extraction Instructions

Use cursor-ide-browser MCP. For each URL:

1. `browser_navigate` to the URL
2. `browser_cdp` with `Runtime.evaluate` using the script below
3. Also extract main content prose from `#fsPageContent` (headings, paragraphs, lists — skip nav/footer duplicates)
4. For expandable right-panel sections: click expand buttons first, collect child links, visit each child URL

## CDP extraction script (paste into Runtime.evaluate expression)

```javascript
(() => {
  const vars = {};
  for (const sheet of [...document.styleSheets]) {
    try {
      for (const rule of [...sheet.cssRules]) {
        if (rule.selectorText === ':root' || rule.selectorText === 'html') {
          for (const prop of rule.style) {
            if (prop.startsWith('--')) vars[prop] = rule.style.getPropertyValue(prop).trim();
          }
        }
      }
    } catch(e) {}
  }
  const pick = (sel) => {
    const el = document.querySelector(sel);
    if (!el) return null;
    const cs = getComputedStyle(el);
    const props = ['color','backgroundColor','fontFamily','fontSize','fontWeight','lineHeight','padding','margin','border','borderRadius','textTransform','letterSpacing','boxShadow','outline','maxWidth','width','minHeight'];
    const out = { selector: sel };
    for (const p of props) out[p] = cs[p];
    return out;
  };
  const selectors = ['body','h1','h2','h3','h4','h5','h6','a.fs_styleguide_link','#fsPageContent a','label','input','input[type=text]','input[type=email]','input[type=password]','textarea','select','button','.fs-button-1','.fs-button-2','.fs-button-3','.fs-button-4','.fs-button-5','.fs-button-6','#fsHeader','.fsNavMain','blockquote','.fsCallout','.fsCard','table','th','td','.fsTabsNav','.fsAccordionTitle'];
  const styles = {};
  for (const s of selectors) { const r = pick(s); if (r) styles[s] = r; }
  const main = document.querySelector('#fsPageContent');
  const contentBlocks = main ? [...main.querySelectorAll('h1,h2,h3,h4,h5,h6,p,li,blockquote,figcaption')].map(el => ({
    tag: el.tagName,
    class: el.className || '',
    text: el.innerText.trim().slice(0, 500)
  })).filter(b => b.text) : [];
  return JSON.stringify({url: location.href, title: document.title, vars, styles, contentBlocks}, null, 2);
})()
```

## Output format per page

```markdown
## [Page Title]

- **URL:** https://www.lisd.net/production2/...
- **Extracted:** [date]

### Content

[Structured markdown from contentBlocks — group under appropriate ### headings]

### :root CSS Variables

| Variable | Value |
|----------|-------|

### Computed Styles

| Selector | Property | Value |
|----------|----------|-------|
```

Only write to your assigned output file. Do not modify other part files.
