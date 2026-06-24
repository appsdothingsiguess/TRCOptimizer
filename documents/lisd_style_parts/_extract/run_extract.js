const fs = require('fs');
const path = require('path');

const dir = __dirname;

function extractCssRules(css, patterns) {
  const results = {};
  const re = /([^{}]+)\{([^{}]*)\}/g;
  let m;
  while ((m = re.exec(css)) !== null) {
    const sel = m[1].trim();
    const body = m[2].trim();
    if (!sel || sel.startsWith('@')) continue;
    for (const p of patterns) {
      if (sel.includes(p) || new RegExp(p, 'i').test(sel)) {
        if (!results[sel]) results[sel] = body;
      }
    }
  }
  return results;
}

function stripTags(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/\s+/g, ' ')
    .trim();
}

function extractRootVars(html) {
  const vars = {};
  for (const m of html.matchAll(/:root\s*\{([^}]+)\}/g)) {
    for (const vm of m[1].matchAll(/(--[\w-]+)\s*:\s*([^;]+);/g)) {
      vars[vm[1]] = vm[2].trim();
    }
  }
  return vars;
}

function extractContent(html) {
  const title = (html.match(/<title>([^<]+)<\/title>/) || [])[1]?.trim();
  const urlMatch = html.match(/<link rel="canonical" href="([^"]+)"/);
  const url = urlMatch ? urlMatch[1] : null;
  const mainMatch = html.match(/<main[^>]*id="fsPageContent"[^>]*>([\s\S]*?)<\/main>/i);
  const main = mainMatch ? mainMatch[1] : '';
  const blocks = [];
  const re = /<(h[1-6]|p|li|blockquote|figcaption)([^>]*)>([\s\S]*?)<\/\1>/gi;
  let m;
  while ((m = re.exec(main)) !== null) {
    const tag = m[1].toUpperCase();
    const attrs = m[2];
    const cls = (attrs.match(/class="([^"]*)"/) || [])[1] || '';
    const text = stripTags(m[3]);
    if (!text || text.startsWith('word word')) continue;
    blocks.push({ tag, class: cls, text: text.slice(0, 500) });
  }
  const classHints = [
    ...new Set(
      (main.match(/class="([^"]+)"/g) || [])
        .map((x) => x.slice(7, -1))
        .flatMap((c) => c.split(/\s+/))
    ),
  ]
    .filter((c) => /nav|bread|accordion|tab|column|layout|container|tier|fsPage|fsPanel|fsElement/i.test(c))
    .sort();

  const layouts = [...main.matchAll(/class="([^"]*fsPageLayout[^"]*)"/g)].map((x) => x[1]);
  const navEls = [...main.matchAll(/class="([^"]*fsNavigation[^"]*)"/g)].map((x) => x[1]);
  const accordionEls = [...main.matchAll(/class="([^"]*fsAccordion[^"]*)"/g)].map((x) => x[1]);
  const tabsEls = [...main.matchAll(/class="([^"]*fsTabs[^"]*)"/g)].map((x) => x[1]);

  return {
    title,
    url,
    blocks,
    classHints,
    layouts: [...new Set(layouts)],
    navElements: [...new Set(navEls)],
    accordionElements: [...new Set(accordionEls)],
    tabsElements: [...new Set(tabsEls)],
    vars: extractRootVars(html),
  };
}

const patterns = [
  'fsHeader',
  '#fsHeader',
  '.nav-main',
  'nav-main',
  'fsBreadcrumb',
  'Breadcrumb',
  'horizontal-nav',
  'nav-sub',
  'fsNavLevel',
  'fsNavCurrentPage',
  'fsNavParentPage',
  'fsNavPageInfo',
  'fsAccordion',
  'fsTabs',
  'fsTabsNav',
  'fsPanel',
  'fsPageLayout',
  'fsOneColumn',
  'fsTwoColumn',
  'fsThreeColumn',
  'fsFourColumn',
  'fsLayout',
  'fsContainer',
  'menu-homepage',
  'toggle',
  'mobile-close',
  'fsMenu',
  '#fsMenu',
  'fsElementTitle',
  'nav-title',
  'footer-links',
  'fsStyleAutoclear',
];

let allRules = {};
for (const f of ['client_v7.css', 'main.css', 'application.css']) {
  const css = fs.readFileSync(path.join(dir, f), 'utf8');
  Object.assign(allRules, extractCssRules(css, patterns));
}

const pages = [];
for (const f of fs.readdirSync(dir).filter((x) => x.endsWith('.html')).sort()) {
  const html = fs.readFileSync(path.join(dir, f), 'utf8');
  pages.push({ file: f, ...extractContent(html) });
}

fs.writeFileSync(path.join(dir, 'extracted.json'), JSON.stringify({ cssRules: allRules, pages }, null, 2));
console.log('CSS rules:', Object.keys(allRules).length);
console.log('Pages:', pages.length);
