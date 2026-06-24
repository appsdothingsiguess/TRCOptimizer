const fs = require('fs');
const path = require('path');

function esc(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function extract(css, terms, limit = 15) {
  for (const term of terms) {
    const re = new RegExp(`([^{}@]*${esc(term)}[^{}@]*)\\{([^}]*)\\}`, 'gi');
    let m;
    let n = 0;
    const rules = [];
    while ((m = re.exec(css)) && n < limit) {
      rules.push({ sel: m[1].trim(), body: m[2].trim() });
      n++;
    }
    if (rules.length) {
      console.log(`\n### ${term} (${rules.length})`);
      for (const r of rules) console.log(`${r.sel} => ${r.body.slice(0, 280)}`);
    }
  }
}

const main = fs.readFileSync(path.join(__dirname, 'main.css'), 'utf8');
const app = fs.readFileSync(path.join(__dirname, 'application.css'), 'utf8');

console.log('=== MAIN.CSS ===');
extract(main, [
  'nav-main',
  'horizontal-nav',
  'nav-sub',
  'fsNavCurrentPage',
  'fsNavCurrentPageAncestor',
  'fsNavParentPage',
  'fsNavPageInfo',
  'fsAccordion',
  'fsTabsNav',
  'fsTwoColumnLayout',
  'fsThreeColumnLayout',
  'fsFourColumnLayout',
  'fsOneColumnLayout',
  'fsTwoColumnWideLeftLayout',
  'fsTwoColumnWideRightLayout',
  'fsHeader',
  'fsMenu',
  'menu-schools',
  'nav-title',
]);

console.log('\n=== APPLICATION.CSS ===');
extract(app, [
  'fsAccordion',
  'fsTabs',
  'fsTabsNav',
  'fsPanel',
  'fsContainer',
  'fsOneColumnLayout',
  'fsTwoColumnLayout',
  'fsThreeColumnLayout',
  'fsFourColumnLayout',
]);
