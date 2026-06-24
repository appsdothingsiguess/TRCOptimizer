const fs = require('fs');
const path = require('path');
const dir = __dirname;

function stripTags(html) {
  return html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

const pageMap = {
  navigation: 'https://www.lisd.net/production2/navigation',
  'navigation_tier-three-page': 'https://www.lisd.net/production2/navigation/tier-three-page',
  'navigation_tier-three-page_tier-four-page': 'https://www.lisd.net/production2/navigation/tier-three-page/tier-four-page',
  'navigation_tier-three-page_tier-four-page_tier-five-page': 'https://www.lisd.net/production2/navigation/tier-three-page/tier-four-page/tier-five-page',
  organizational: 'https://www.lisd.net/production2/organizational',
  'organizational_one-column': 'https://www.lisd.net/production2/organizational/one-column',
  'organizational_two-column': 'https://www.lisd.net/production2/organizational/two-column',
  'organizational_three-column': 'https://www.lisd.net/production2/organizational/three-column',
  'organizational_four-column': 'https://www.lisd.net/production2/organizational/four-column',
  'organizational_accordion': 'https://www.lisd.net/production2/organizational/accordion',
  'organizational_container': 'https://www.lisd.net/production2/organizational/container',
  'organizational_tabs': 'https://www.lisd.net/production2/organizational/tabs',
};

const pages = [];
for (const [file, url] of Object.entries(pageMap)) {
  const html = fs.readFileSync(path.join(dir, `${file}.html`), 'utf8');
  const title = (html.match(/<title>([^<]+)<\/title>/) || [])[1]?.replace(' - Lewisville Independent School District', '').trim();
  const main = (html.match(/<main[^>]*id="fsPageContent"[^>]*>([\s\S]*?)<\/main>/i) || [])[1] || '';
  const blocks = [];
  const re = /<(h[1-6]|p|li|blockquote)([^>]*)>([\s\S]*?)<\/\1>/gi;
  let m;
  while ((m = re.exec(main)) !== null) {
    const text = stripTags(m[3]);
    if (!text || text.startsWith('word word')) continue;
    blocks.push({ tag: m[1].toUpperCase(), class: (m[2].match(/class="([^"]*)"/) || [])[1] || '', text });
  }
  const vars = {};
  for (const vm of html.matchAll(/(--[\w-]+)\s*:\s*([^;]+);/g)) {
    if (vm[1].includes('color') || vm[1].includes('primary') || vm[1].includes('secondary')) vars[vm[1]] = vm[2].trim();
  }
  pages.push({ file, url, title, blocks, vars });
}
fs.writeFileSync(path.join(dir, 'pages_content.json'), JSON.stringify(pages, null, 2));
console.log(JSON.stringify(pages.map((p) => ({ title: p.title, url: p.url, blocks: p.blocks.length })), null, 2));
