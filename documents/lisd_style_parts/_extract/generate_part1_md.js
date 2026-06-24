const fs = require('fs');
const path = require('path');

const raw = require('./part1_raw.json');
const mainCss = fs.readFileSync(path.join(__dirname, 'main.css'), 'utf8');
const OUT = path.join(__dirname, '..', '01-hub-qa.md');
const DATE = '2026-06-23';

function cssBlock(selector) {
  const esc = selector.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const re = new RegExp(esc.replace(/\\\./g, '\\.') + '\\{([^}]+)\\}', 'g');
  const blocks = [];
  let m;
  while ((m = re.exec(mainCss)) !== null) blocks.push(m[1].trim());
  return blocks.slice(0, 3).join('\n');
}

function styleTable(obj, keys) {
  if (!obj) return '_Not found on page._\n';
  const k = keys || Object.keys(obj).filter((x) => x !== 'selector');
  let md = '| Property | Value |\n|----------|-------|\n';
  for (const p of k) md += `| ${p} | \`${obj[p]}\` |\n`;
  return md;
}

function varsTable(vars) {
  const colorVars = Object.entries(vars).filter(([k]) => k.includes('color') || k.includes('font'));
  let md = '| Variable | Value |\n|----------|-------|\n';
  for (const [k, v] of colorVars) md += `| \`${k}\` | \`${v}\` |\n`;
  return md;
}

function computedSection(styles) {
  let md = '';
  for (const [sel, st] of Object.entries(styles)) {
    md += `#### \`${sel}\`\n\n${styleTable(st)}\n`;
  }
  return md;
}

function hubButtonSection(hubButtons) {
  const seen = new Map();
  for (const b of hubButtons) {
    if (!seen.has(b.classes)) seen.set(b.classes, b);
  }
  let md = '';
  for (const [cls, b] of seen) {
    md += `##### \`.${cls.split(' ').join('.')}\` — "${b.text.replace(/\n/g, ' ')}"\n\n`;
    md += styleTable(b.styles);
    const css = ['button-1', 'button-2', 'button-3', 'button-4', 'button-5', 'button-on-dark-1', 'button-on-dark-2', 'button-large', 'full-width-button']
      .filter((c) => cls.includes(c))
      .map((c) => `**Source CSS (\`.${c}\`):**\n\`\`\`css\n.${c} { ${cssBlock('.' + c.split(' ')[0].replace('.', '')) || 'see main.css'} }\n\`\`\``)
      .join('\n\n');
    if (css) md += css + '\n\n';
  }
  return md;
}

function contentFromBlocks(blocks) {
  return blocks.map((b) => {
    const prefix = b.tag.startsWith('H') ? `${'#'.repeat(Number(b.tag[1]))} ` : b.tag === 'LI' ? '- ' : '';
    return `${prefix}${b.text}`;
  }).join('\n\n');
}

function hubContentBySection(blocks) {
  const sections = [];
  let current = { title: 'Introduction', items: [] };
  for (const b of blocks) {
    if (b.tag === 'H2' && b.class.includes('fsElementTitle')) {
      if (current.items.length) sections.push(current);
      current = { title: b.text, items: [] };
    } else if (b.tag === 'H4' && !b.class) {
      if (current.items.length) sections.push(current);
      current = { title: b.text, items: [] };
    } else {
      current.items.push(b);
    }
  }
  if (current.items.length) sections.push(current);
  return sections;
}

const hub = raw['https://www.lisd.net/production2'];
const qa = raw['https://www.lisd.net/production2/qa-testing'];
const qaBtn = raw['https://www.lisd.net/production2/qa-testing/qa-testing-buttons'];
const qaContent = raw['https://www.lisd.net/production2/qa-testing/qa-testing-content'];

let md = `# Part 1: Hub & QA Testing

Extracted from live LISD Style Guide v3 pages via headless browser (Puppeteer) computed styles + theme CSS (\`main.css\`, \`client_v7.css\`).

**Pages visited:**
1. https://www.lisd.net/production2
2. https://www.lisd.net/production2/qa-testing
3. https://www.lisd.net/production2/qa-testing/qa-testing-buttons
4. https://www.lisd.net/production2/qa-testing/qa-testing-content

**Key global tokens (live \`:root\`, 2026-06-23):**
| Token | Computed value | CSS fallback in theme |
|-------|----------------|----------------------|
| \`--primary-color\` | \`${hub.vars['--primary-color']}\` | \`#023A6D\` |
| \`--secondary-color\` | \`${hub.vars['--secondary-color']}\` | \`#DEAF25\` |
| Body font | Montserrat, sans-serif | Montserrat |
| Heading font (h1–h4 interior) | Merriweather, serif | Merriweather |
| Body text color | rgb(55, 55, 55) / #373737 | #373737 |

> **Note:** Live site resolves brand colors via HSL custom properties (\`--primary-color-h/s/l\`). Computed primary/secondary may differ slightly from static fallbacks in \`main.css\`.

---

## Style Guide v3 (Hub)

- **URL:** https://www.lisd.net/production2
- **Extracted:** ${DATE}

### Content

`;

const hubSections = hubContentBySection(hub.contentBlocks);
for (const sec of hubSections) {
  md += `#### ${sec.title}\n\n`;
  md += contentFromBlocks(sec.items) + '\n\n';
}

md += `### Hub section index (page structure)

| Section | Element |
|---------|---------|
`;
for (const s of hub.hub.sections) {
  if (s.text.trim()) md += `| ${s.text} | \`${s.tag}\` \`${s.class}\` |\n`;
}

md += `
### :root CSS Variables

${varsTable(hub.vars)}

### Typography — Headings (computed)

| Level | Font | Size | Weight | Color | Line height | Letter-spacing |
|-------|------|------|--------|-------|-------------|----------------|
| h1 | ${hub.styles.h1.fontFamily} | ${hub.styles.h1.fontSize} | ${hub.styles.h1.fontWeight} | ${hub.styles.h1.color} | ${hub.styles.h1.lineHeight} | ${hub.styles.h1.letterSpacing} |
| h2 | ${hub.styles.h2.fontFamily} | ${hub.styles.h2.fontSize} | ${hub.styles.h2.fontWeight} | ${hub.styles.h2.color} | ${hub.styles.h2.lineHeight} | ${hub.styles.h2.letterSpacing} |
| h3 | ${hub.styles.h3.fontFamily} | ${hub.styles.h3.fontSize} | ${hub.styles.h3.fontWeight} | ${hub.styles.h3.color} | ${hub.styles.h3.lineHeight} | ${hub.styles.h3.letterSpacing} |
| h4 | ${hub.styles.h4.fontFamily} | ${hub.styles.h4.fontSize} | ${hub.styles.h4.fontWeight} | ${hub.styles.h4.color} | ${hub.styles.h4.lineHeight} | ${hub.styles.h4.letterSpacing} |
| h5 | ${hub.styles.h5.fontFamily} | ${hub.styles.h5.fontSize} | ${hub.styles.h5.fontWeight} | ${hub.styles.h5.color} | ${hub.styles.h5.lineHeight} | ${hub.styles.h5.letterSpacing} |
| h6 | ${hub.styles.h6.fontFamily} | ${hub.styles.h6.fontSize} | ${hub.styles.h6.fontWeight} | ${hub.styles.h6.color} | ${hub.styles.h6.lineHeight} | ${hub.styles.h6.letterSpacing} |

**Interior page rule (from \`client_v7.css\`):** \`body:not(.home) h1–h4\` use Merriweather; h5–h6 use Montserrat. Tabs/accordion panel headers use Montserrat 600.

### Blockquotes & Callouts

${hub.styles.blockquote ? styleTable(hub.styles.blockquote) : ''}

**Theme CSS samples:**
\`\`\`css
${cssBlock('blockquote') || 'blockquote styles in main.css'}
\`\`\`

### Cards (Light / Dark / Primary / Secondary / Accent)

Hub demonstrates equal-height card grid with variants: Card Light, Card Dark, Card Primary, Card Secondary, Card Accent.

${hub.hub.cards.length ? hub.hub.cards.map((c, i) => `**Card sample ${i + 1}** (\`${c.class}\`) — ${c.heading || 'untitled'}\n\n${styleTable(c.styles)}`).join('\n') : '_Card elements use Finalsite slick/grid classes; inspect `.fsStyleSlick` containers on hub._'}

### Tabs

**Tab nav (computed):**
${styleTable(hub.hub.tabs.nav)}

**Tab link (default):**
${styleTable(hub.hub.tabs.link)}

**Tab link (active / \`.fsStateSelected\`):**
${styleTable(hub.hub.tabs.active)}

**Theme CSS:**
\`\`\`css
.fsTabs .fsTabsNav li a { ${cssBlock('.fsTabs .fsTabsNav li a')} }
.fsTabs .fsTabsNav li.fsStateSelected a { ${cssBlock('.fsTabs .fsTabsNav li.fsStateSelected a')} }
\`\`\`

Sample tab labels on hub: Active Tab, Tab Label, Another Tab.

### Accordions

**Panel header:**
${styleTable(hub.hub.accordion.header)}

**Panel title (h2):**
${styleTable(hub.hub.accordion.title)}

**Theme CSS:**
\`\`\`css
.fsAccordion .fsPanel > header h2 { ${cssBlock('.fsAccordion .fsPanel > header h2')} }
\`\`\`

### Styled Table

${styleTable(hub.styles.table)}
${styleTable(hub.styles.th)}
${styleTable(hub.styles.td)}

### Posts List

${hub.hub.postItem ? styleTable(hub.hub.postItem) : '_Posts list items use `.fsPostElement` / `.fsListItem` on hub._'}

### Calendar Item

${hub.hub.calItem ? styleTable(hub.hub.calItem) : '_Calendar item styles from `.fsCalendar` elements on hub._'}

### Buttons and Links (Hub samples)

LISD theme uses \`.button-1\` through \`.button-5\` (not \`.fs-button-*\`). No \`.button-6\` in \`main.css\`.

${hubButtonSection(hub.hub.hubButtons)}

### Site Colors and Fonts

See global tokens above. Header (\`#fsHeader\`) uses primary brand background via \`.header--holder\`.

${styleTable(hub.styles['#fsHeader'])}

### Computed Styles (global selectors)

${computedSection(hub.styles)}

---

## QA Testing

- **URL:** https://www.lisd.net/production2/qa-testing
- **Extracted:** ${DATE}

### Content

${contentFromBlocks(qa.contentBlocks)}

### :root CSS Variables

${varsTable(qa.vars)}

### Computed Styles

${computedSection(qa.styles)}

---

## Button Testing

- **URL:** https://www.lisd.net/production2/qa-testing/qa-testing-buttons
- **Extracted:** ${DATE}

### Content

This page catalogs **system/component buttons** (form submit, search, calendar, login, etc.) — not the marketing \`.button-1\`–\`.button-5\` pill set (those live on the hub).

${contentFromBlocks(qaBtn.contentBlocks)}

### Brand button classes (\`.button-1\` – \`.button-5\`)

Documented from hub live samples + \`main.css\` source rules:

| Class | Background | Text | Border | Border-radius | Font |
|-------|------------|------|--------|---------------|------|
| \`.button-1\` | \`var(--primary-color)\` | #fff | 1px primary | 100px (pill) | Montserrat 500 14px |
| \`.button-2\` | \`var(--secondary-color)\` | #131313 | transparent | 100px | Montserrat 500 14px |
| \`.button-3\` | transparent | primary | 1px primary | 100px | Montserrat 500 14px |
| \`.button-4\` | #131313 | #fff | 1px #131313 | 100px | Montserrat 500 14px |
| \`.button-5\` | transparent | #131313 | 1px #131313 | 100px | Montserrat 500 14px |
| \`.button-on-dark-1\` | transparent | #fff | 1px #fff | 100px | Montserrat 500 14px |
| \`.button-on-dark-2\` | #fff | primary | 1px #fff | 100px | Montserrat 500 14px |
| \`.button-large\` | — | — | — | — | 17px, weight 700, uppercase |
| \`.full-width-button\` | — | — | — | width 100% | — |

#### \`.button-1\` — computed (hub sample)

${styleTable(hub.hub.hubButtons.find((b) => b.classes === 'button-1')?.styles)}

#### \`.button-2\` — computed (hub sample)

${styleTable(hub.hub.hubButtons.find((b) => b.classes === 'button-2')?.styles)}

#### \`.button-3\` — computed (hub sample)

${styleTable(hub.hub.hubButtons.find((b) => b.classes === 'button-3')?.styles)}

#### \`.button-4\` — computed (hub sample)

${styleTable(hub.hub.hubButtons.find((b) => b.classes === 'button-4')?.styles)}

#### \`.button-5\` — computed (hub sample)

${styleTable(hub.hub.hubButtons.find((b) => b.classes === 'button-5')?.styles)}

#### \`.button-on-dark-1\` / \`.button-on-dark-2\`

${styleTable(hub.hub.hubButtons.find((b) => b.classes === 'button-on-dark-1')?.styles)}

${styleTable(hub.hub.hubButtons.find((b) => b.classes === 'button-on-dark-2')?.styles)}

#### \`.button-1.button-large\` (+ optional \`em\` subtext)

${styleTable(hub.hub.hubButtons.find((b) => b.classes.includes('button-large'))?.styles)}

#### \`.button-1.button-large.full-width-button\`

${styleTable(hub.hub.hubButtons.find((b) => b.classes.includes('full-width'))?.styles)}

### Full CSS source rules

\`\`\`css
.button-1 { ${cssBlock('.button-1')} }
.button-2 { ${cssBlock('.button-2')} }
.button-3 { ${cssBlock('.button-3')} }
.button-4 { ${cssBlock('.button-4')} }
.button-5 { ${cssBlock('.button-5')} }
.button-on-dark-1 { ${cssBlock('.button-on-dark-1')} }
.button-on-dark-2 { ${cssBlock('.button-on-dark-2')} }
.button-large { ${cssBlock('.button-large')} }
.full-width-button { ${cssBlock('.full-width-button')} }
\`\`\`

### :root CSS Variables

${varsTable(qaBtn.vars)}

### Computed Styles

${computedSection(qaBtn.styles)}

---

## Content Testing

- **URL:** https://www.lisd.net/production2/qa-testing/qa-testing-content
- **Extracted:** ${DATE}

### Content

${contentFromBlocks(qaContent.contentBlocks)}

### :root CSS Variables

${varsTable(qaContent.vars)}

### Computed Styles

${computedSection(qaContent.styles)}

`;

fs.writeFileSync(OUT, md);
console.log('Wrote', OUT, md.length, 'chars');
