const fs = require('fs');
const path = require('path');

const dir = __dirname;
const cssFiles = ['main.css', 'home_v1.css', 'application.css'];

const selectors = [
  '#fsHeader',
  '.nav-main',
  '.horizontal-nav',
  '.nav-sub',
  '.fsBreadcrumb',
  '.fsNavCurrentPage',
  '.fsNavCurrentPageAncestor',
  '.fsNavParentPage',
  '.fsNavPageInfo',
  '.fsNavBreadcrumbSeperator',
  '.fsAccordion',
  '.fsAccordionTitle',
  '.fsPanelGroup',
  '.fsPanel',
  '.fsTabs',
  '.fsTabsNav',
  '.fsTabsNavItem',
  '.fsOneColumnLayout',
  '.fsTwoColumnLayout',
  '.fsTwoColumnWideLeftLayout',
  '.fsTwoColumnWideRightLayout',
  '.fsThreeColumnLayout',
  '.fsFourColumnLayout',
  '.fsPageLayout',
  '#fsMenu',
  '.fsMenu',
  '.menu-homepage-nav',
  '.nav-title',
  '.fsContainer',
  '.fsElementContainer',
];

function extractRules(css) {
  const out = [];
  const re = /([^{}@]+)\{([^{}]*)\}/g;
  let m;
  while ((m = re.exec(css)) !== null) {
    const sel = m[1].trim();
    const body = m[2].trim();
    if (!sel || sel.includes('icon-')) continue;
    const hit = selectors.some((s) => sel.includes(s.replace('.', '').replace('#', '')));
    if (hit) out.push({ sel, body });
  }
  return out;
}

let all = [];
for (const f of cssFiles) {
  const css = fs.readFileSync(path.join(dir, f), 'utf8');
  all = all.concat(extractRules(css).map((r) => ({ ...r, file: f })));
}

// dedupe by selector+body
const seen = new Set();
const deduped = all.filter((r) => {
  const k = r.sel + '|' + r.body;
  if (seen.has(k)) return false;
  seen.add(k);
  return true;
});

deduped.sort((a, b) => a.sel.localeCompare(b.sel));
fs.writeFileSync(path.join(dir, 'theme_rules.json'), JSON.stringify(deduped, null, 2));
console.log('theme rules', deduped.length);

for (const r of deduped.slice(0, 100)) {
  console.log('\n[' + r.file + '] ' + r.sel);
  console.log(r.body.slice(0, 350));
}
