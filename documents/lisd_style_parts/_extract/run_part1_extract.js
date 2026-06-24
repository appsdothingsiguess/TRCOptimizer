const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const OUT = path.join(__dirname, 'part1_raw.json');

const URLS = [
  'https://www.lisd.net/production2',
  'https://www.lisd.net/production2/qa-testing',
  'https://www.lisd.net/production2/qa-testing/qa-testing-buttons',
  'https://www.lisd.net/production2/qa-testing/qa-testing-content',
];

const BASE = `(() => {
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
    } catch (e) {}
  }
  const pick = (sel) => {
    const el = document.querySelector(sel);
    if (!el) return null;
    const cs = getComputedStyle(el);
    const props = [
      'color', 'backgroundColor', 'fontFamily', 'fontSize', 'fontWeight', 'lineHeight',
      'padding', 'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft',
      'margin', 'border', 'borderColor', 'borderWidth', 'borderStyle', 'borderRadius',
      'textTransform', 'letterSpacing', 'boxShadow', 'outline', 'maxWidth', 'width', 'minHeight', 'display', 'textDecoration',
    ];
    const out = { selector: sel };
    for (const p of props) out[p] = cs[p];
    return out;
  };
  const selectors = [
    'body', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', '.fsPageTitle',
    'a.fs_styleguide_link', '#fsPageContent a', 'label', 'input', 'textarea', 'select', 'button',
    '.button-1', '.button-2', '.button-3', '.button-4', '.button-5', '.button-6',
    '.button-on-dark-1', '.button-on-dark-2', '.button-large', '.full-width-button',
    '#fsHeader', 'blockquote', 'table', 'th', 'td', '.fsTabsNav', '.fsAccordion .fsPanel > header',
  ];
  const styles = {};
  for (const s of selectors) {
    const r = pick(s);
    if (r) styles[s] = r;
  }
  const main = document.querySelector('#fsPageContent');
  const contentBlocks = main
    ? [...main.querySelectorAll('h1,h2,h3,h4,h5,h6,p,li,blockquote,figcaption,th,td')].map((el) => ({
        tag: el.tagName,
        class: el.className || '',
        text: el.innerText.trim().slice(0, 500),
      })).filter((b) => b.text)
    : [];
  return { url: location.href, title: document.title, vars, styles, contentBlocks };
})()`;

const HUB = `(() => {
  const pickEl = (el) => {
    if (!el) return null;
    const cs = getComputedStyle(el);
    const props = [
      'color', 'backgroundColor', 'fontFamily', 'fontSize', 'fontWeight', 'lineHeight',
      'padding', 'border', 'borderRadius', 'textTransform', 'letterSpacing', 'boxShadow', 'margin', 'display',
    ];
    return Object.fromEntries(props.map((p) => [p, cs[p]]));
  };
  const sections = [...document.querySelectorAll('#fsPageContent .fsElementTitle, #fsPageContent h1.fsPageTitle, #fsPageContent h4')].map((el) => ({
    tag: el.tagName,
    class: el.className,
    text: el.innerText.trim(),
  }));
  const samples = {};
  const tryPick = (key, sel) => {
    const el = document.querySelector(sel);
    if (el) samples[key] = { selector: sel, ...pickEl(el) };
  };
  tryPick('blockquote', '#fsPageContent blockquote');
  tryPick('callout', '#fsPageContent .fsStyleCallout, #fsPageContent .fsCallout');
  tryPick('card_light', '#fsPageContent .fsStyleSlick .fsCard, #fsPageContent [class*="Card"]');
  const cards = [...document.querySelectorAll('#fsPageContent .fsStyleSlick.fsCard, #fsPageContent .fsCard, #fsPageContent [class*="fsCard"]')].slice(0, 8).map((el, i) => ({
    index: i,
    class: el.className,
    heading: el.querySelector('h2,h3,h4')?.innerText?.trim() || '',
    styles: pickEl(el),
  }));
  const tabsNav = pickEl(document.querySelector('.fsTabs .fsTabsNav'));
  const tabLink = pickEl(document.querySelector('.fsTabs .fsTabsNav a'));
  const tabActive = pickEl(document.querySelector('.fsTabs .fsTabsNav .fsStateSelected a, .fsTabs .fsTabsNav li.fsStateSelected a'));
  const accHeader = pickEl(document.querySelector('.fsAccordion .fsPanel > header'));
  const accTitle = pickEl(document.querySelector('.fsAccordion .fsPanel > header h2'));
  const table = pickEl(document.querySelector('#fsPageContent table'));
  const th = pickEl(document.querySelector('#fsPageContent th'));
  const td = pickEl(document.querySelector('#fsPageContent td'));
  const postItem = pickEl(document.querySelector('#fsPageContent .fsPostList .fsListItem, #fsPageContent .fsPostElement .fsListItem'));
  const calItem = pickEl(document.querySelector('#fsPageContent .fsCalendar .fsCalendarDayView, #fsPageContent .fsCalendarEvent'));
  const hubButtons = [...document.querySelectorAll('#fsPageContent a[class*="button-"]')].map((el) => ({
    classes: el.className,
    text: el.innerText.trim().slice(0, 80),
    styles: pickEl(el),
  }));
  return { sections, cards, samples, tabs: { nav: tabsNav, link: tabLink, active: tabActive }, accordion: { header: accHeader, title: accTitle }, table: { table, th, td }, postItem, calItem, hubButtons };
})()`;

const BUTTONS = `(() => {
  const pickEl = (el) => {
    const cs = getComputedStyle(el);
    const props = [
      'color', 'backgroundColor', 'fontFamily', 'fontSize', 'fontWeight', 'lineHeight',
      'padding', 'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft',
      'border', 'borderColor', 'borderWidth', 'borderStyle', 'borderRadius',
      'textTransform', 'letterSpacing', 'boxShadow', 'outline', 'minWidth', 'minHeight', 'display', 'cursor', 'textDecoration', 'width',
    ];
    return Object.fromEntries(props.map((p) => [p, cs[p]]));
  };
  const buttons = [...document.querySelectorAll('#fsPageContent a[class*="button-"], #fsPageContent a.button-on-dark-1, #fsPageContent a.button-on-dark-2')].map((el) => ({
    classes: el.className,
    text: el.innerText.trim().slice(0, 120),
    styles: pickEl(el),
  }));
  const byClass = {};
  for (const b of buttons) {
    const key = b.classes.split(/\\s+/).filter((c) => c.startsWith('button')).join(' ');
    if (!byClass[key]) byClass[key] = b;
  }
  return { buttons, byClass, count: buttons.length };
})()`;

(async () => {
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
  const results = {};
  for (const url of URLS) {
    const page = await browser.newPage();
    await page.setViewport({ width: 1400, height: 900 });
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 90000 });
    if (url === 'https://www.lisd.net/production2') {
      await page.evaluate(async () => {
        await new Promise((resolve) => {
          let y = 0;
          const step = () => {
            window.scrollBy(0, 900);
            y += 900;
            if (y < document.body.scrollHeight) setTimeout(step, 150);
            else resolve();
          };
          step();
          setTimeout(resolve, 12000);
        });
        window.scrollTo(0, 0);
      });
      await new Promise((r) => setTimeout(r, 800));
    }
    const base = await page.evaluate(BASE);
    if (url === 'https://www.lisd.net/production2') base.hub = await page.evaluate(HUB);
    if (url.includes('qa-testing-buttons')) base.buttons = await page.evaluate(BUTTONS);
    results[url] = base;
    await page.close();
    console.error('OK', url);
  }
  await browser.close();
  fs.writeFileSync(OUT, JSON.stringify(results, null, 2));
  console.log('Wrote', OUT);
})();
