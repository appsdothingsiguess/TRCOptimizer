# Part 3: Page Layout

Live extraction from [LISD Style Guide v3 — Page Layout](https://www.lisd.net/production2/page-layout) and all child layout pages. Measured at **1440×900 viewport**, **2026-06-23**. (Browser MCP was unavailable; extraction used Playwright headless with the CDP script from `EXTRACTION_INSTRUCTIONS.md`.)

---

## Global Layout Shell

### Page background

| Element | Property | Value |
|---------|----------|-------|
| `#fsPageBodyWrapper` | `background-color` | `rgb(255, 255, 255)` / `#FFFFFF` |
| `#fsPageBodyWrapper` | `padding` | `50px 20px 40px` |
| `body` | `background-color` | transparent (white shows through from wrapper) |
| `body` | `color` | `rgb(55, 55, 55)` / `#373737` |

### Content max-width

| Element | Property | Value |
|---------|----------|-------|
| `#fsPageBody` | `max-width` | **1180px** |
| `#fsPageBody` | `margin` | `0 auto` (centered) |
| `#fsPageContent` | computed width @ 1440px | **1180px** |
| `.fsBreadcrumb > .fsElementContent` | `max-width` | **1180px** |

### Layout grid extension (gutters)

Equal-column layouts use a **negative-margin gutter system**:

```css
@media (min-width: 1000px) {
  .fsLayout { margin-left: -20px; margin-right: -20px; }
}
```

| Element | Property | Value |
|---------|----------|-------|
| `.fsPageLayout` (equal-column) | computed width @ 1440px | **1220px** (1180 + 40px bleed) |
| `.fsPageLayout` (equal-column) | `margin` | `0 -20px` |
| `.fsLayout > .fsDiv` @ ≥1000px | `padding-left` / `padding-right` | **20px** each |
| `.fsLayout > .fsDiv` | `margin-bottom` | **20px** |
| Effective column content gutter | adjacent columns | **40px** (20px right + 20px left padding) |

Sidebar / wide layouts (`.fsTwoColumnWideLeftLayout`, `.fsTwoColumnWideRightLayout`, `.fsElephantLeftLayout`, `.fsElephantRightLayout`) use `margin-left: 0; margin-right: 0` and a **1180px** layout width (no −20px bleed).

### :root CSS variables (layout pages)

| Variable | Value |
|----------|-------|
| `--primary-color` | `#073772` |
| `--secondary-color` | `#f1b51c` |

---

## Breadcrumb (`.fsBreadcrumb`)

Present on all page-layout style guide pages. Trail example: **Style Guide v3 > Page Layout > [Current Page]**.

| Selector | Property | Value |
|----------|----------|-------|
| `.fsBreadcrumb` | `padding` | `0 20px` |
| `.fsBreadcrumb` | `margin-bottom` | `20px` |
| `.fsBreadcrumb > .fsElementContent` | `max-width` | `1180px` |
| `.fsBreadcrumb > .fsElementContent` | `margin` | `0 auto` |
| `.fsBreadcrumb ul` | `display` | `flex` |
| `.fsBreadcrumb ul li` | `font-family` | `Montserrat, sans-serif` |
| `.fsBreadcrumb ul li` | `font-size` | `0.6875rem` (~11px) |
| `.fsBreadcrumb ul li` | `font-weight` | `600` |
| `.fsBreadcrumb ul li` | `letter-spacing` | `0.07em` |
| `.fsBreadcrumb ul li` | `text-transform` | `uppercase` |
| `.fsBreadcrumb ul li` | `color` | `rgb(19, 19, 19)` |
| `.fsBreadcrumb ul li a` | `color` | `rgb(99, 99, 99)` |
| `.fsBreadcrumb ul li[class*="fsNavCurrentPage"] > a` | `color` | `var(--primary-color, #023A6D)` |
| `.fsNavBreadcrumbSeperator` | `margin` | `0 8px` |
| `.fsNavBreadcrumbSeperator` | `color` | `rgb(99, 99, 99)` |
| `.fsNavBreadcrumbSeperator::before` | content | `›` (IcoMoon glyph) |

---

## Equal-Column Layouts

Base CSS (desktop):

| Layout class | Column selector | Width |
|--------------|-----------------|-------|
| `.fsOneColumnLayout` | `> .fsDiv` | 100% (1220px outer @ 1440px) |
| `.fsTwoColumnLayout` | `> .fsDiv` | **50%** |
| `.fsThreeColumnLayout` | `> .fsDiv` | **33.33%** |
| `.fsFourColumnLayout` | `> .fsDiv` | **25%** |

Measured column outer widths @ 1440px (inside 1220px layout):

| Layout | Columns | Outer width each |
|--------|---------|------------------|
| 1-column | 1 | 1220px |
| 2-column | 2 | 610px |
| 3-column | 3 | 407px |
| 4-column | 4 | 305px |

---

## Sidebar Layouts

Uses `.fsStyleOneThird` (sidebar) + `.fsStyleTwoThirds` (main). CSS base: `33.33%` / `66.66%` float.

### Desktop breakpoints

| Breakpoint | Sidebar (`.fsStyleOneThird`) | Main (`.fsStyleTwoThirds`) |
|------------|------------------------------|----------------------------|
| ≥1000px | `width: 240px`; padding toward main **20px** | `width: calc(100% - 240px)` |
| ≥1100px | `width: 340px`; padding toward main **60px** | `width: calc(100% - 340px)` |

Measured @ 1440px:

| Layout | Sidebar | Main |
|--------|---------|------|
| Two Column — Left Sidebar | 340px (padding-right 60px) | 840px |
| Two Column — Right Sidebar | 340px | 840px |

Sidebar column headings use reduced type scale (e.g. `h1` 2.5rem in one-third vs full main column).

---

## Composite / Stacked Layouts

These nest inner `.fsTwoColumnLayout` or `.fsThreeColumnLayout` inside a parent `.fsPageLayout`.

| Page | Layout class | Structure |
|------|--------------|-------------|
| Two Columns Top | `.fsTwoColumnTopLayout` | Nested 2-col row + full-width row below |
| One Column Over Two | `.fsTwoColumnBottomLayout` | Full-width row + nested 2-col row below |
| Three Columns Top | `.fsThreeColumnTopLayout` | Nested 3-col row + full-width row below |
| Three Column Bottom | `.fsThreeColumnBottomLayout` | Full-width row + nested 3-col row below |
| Two Columns Middle | `.fsSandwichTwoColumnLayout` | Full-width + nested 2-col + full-width |
| Three Columns Middle | `.fsSandwichThreeColumnLayout` | Full-width + nested 3-col + full-width |
| Two Column Bottom — Right Sidebar | `.fsElephantRightLayout` | Main (2-col nested) + right sidebar |
| Two Column Bottom — Left Sidebar | `.fsElephantLeftLayout` | Left sidebar + main (2-col nested) |

**Note:** Nested columns inside a parent `.fsLayout` are affected by `.fsLayout > * > .fsDiv { float: none; width: 100% }`, which can stack inner columns vertically even when inner width is 50%/33%. Verify visually when implementing composite layouts.

### Elephant layout measured @ 1440px (Right Sidebar)

| Region | Width | Position |
|--------|-------|----------|
| Main column (`.fsStyleTwoThirds`) | 840px | left |
| Nested Column One | 420px | inside main |
| Nested Column Two | 420px | inside main |
| Sidebar (`.fsStyleOneThird`) | 340px | right |

---

## Page Layout Hub

- **URL:** https://www.lisd.net/production2/page-layout
- **Extracted:** 2026-06-23

### Content

Index page listing all layout variants:

- 1 Column Layout
- 2 Column Layout
- 3 Column Layout
- 4 Column Layout
- Two Columns Top
- One Column Over Two
- Three Columns Top
- Three Column Bottom
- Two Columns Middle
- Three Columns Middle
- Two Column Bottom — Right Sidebar
- Two Column Bottom — Left Sidebar
- Two Column — Left Sidebar
- Two Column — Right Sidebar

### Computed Styles

| Selector | Property | Value |
|----------|----------|-------|
| `body` | `color` | `rgb(55, 55, 55)` |
| `#fsPageBodyWrapper` | `background-color` | `rgb(255, 255, 255)` |
| `#fsPageBodyWrapper` | `padding` | `50px 20px 40px` |
| `#fsPageContent` | `width` | `1180px` |
| `.fsPageLayout` | `width` | `1220px` |
| `.fsPageLayout` | `margin` | `0 -20px` |
| `h1` | `color` | `rgb(7, 55, 114)` / `#073772` |
| `h1` | `font-family` | `Merriweather, serif` |
| `h1` | `font-size` | `43.56px` |
| `h1` | `font-weight` | `700` |

---

## 1 Column Layout

- **URL:** https://www.lisd.net/production2/page-layout/1-column-layout
- **Extracted:** 2026-06-23
- **Layout class:** `.fsOneColumnLayout`

### Content

Single full-width content column labeled **Column One**.

### Computed Styles

| Selector | Property | Value |
|----------|----------|-------|
| `#fsPageBody` | `max-width` | **1180px** |
| `.fsPageLayout` | `width` | **1220px** |
| `.fsPageLayout > .fsDiv` | `width` | **1220px** |
| `.fsPageLayout > .fsDiv` | `padding` | `0 20px` |
| `.fsPageLayout > .fsDiv` | `margin-bottom` | `20px` |

---

## 2 Column Layout

- **URL:** https://www.lisd.net/production2/page-layout/2-column-layout
- **Extracted:** 2026-06-23
- **Layout class:** `.fsTwoColumnLayout`

### Content

**Column One** and **Column Two** — equal 50/50 split.

### Computed Styles

| Selector | Property | Value |
|----------|----------|-------|
| `.fsTwoColumnLayout > .fsDiv` | `width` (CSS) | `50%` |
| Column One (measured) | outer width | **610px** |
| Column Two (measured) | outer width | **610px** |
| Inter-column gap | measured | **0px** (padding provides 40px content gutter) |

---

## 3 Column Layout

- **URL:** https://www.lisd.net/production2/page-layout/3-column-layout
- **Extracted:** 2026-06-23
- **Layout class:** `.fsThreeColumnLayout`

### Content

**Column One**, **Column Two**, **Column Three** — equal thirds.

### Computed Styles

| Selector | Property | Value |
|----------|----------|-------|
| `.fsThreeColumnLayout > .fsDiv` | `width` (CSS) | `33.33%` |
| Each column (measured) | outer width | **407px** |

---

## 4 Column Layout

- **URL:** https://www.lisd.net/production2/page-layout/4-column-layout
- **Extracted:** 2026-06-23
- **Layout class:** `.fsFourColumnLayout`

### Content

**Column One** through **Column Four** — equal quarters.

### Computed Styles

| Selector | Property | Value |
|----------|----------|-------|
| `.fsFourColumnLayout > .fsDiv` | `width` (CSS) | `25%` |
| Each column (measured) | outer width | **305px** |

---

## Two Columns Top

- **URL:** https://www.lisd.net/production2/page-layout/two-columns-top
- **Extracted:** 2026-06-23
- **Layout class:** `.fsTwoColumnTopLayout`

### Content

Top row: **Column One**, **Column Two**. Bottom row: **Full Width**.

### Structure

```
.fsTwoColumnTopLayout
├── .fsTwoColumnLayout (nested)
│   ├── Column One
│   └── Column Two
└── Full Width
```

---

## One Column Over Two

- **URL:** https://www.lisd.net/production2/page-layout/one-column-over-two
- **Extracted:** 2026-06-23
- **Layout class:** `.fsTwoColumnBottomLayout`

### Content

Top row: **Full Width**. Bottom row: **Column One**, **Column Two**.

---

## Three Columns Top

- **URL:** https://www.lisd.net/production2/page-layout/three-columns-top
- **Extracted:** 2026-06-23
- **Layout class:** `.fsThreeColumnTopLayout`

### Content

Top row: **Column One**, **Column Two**, **Column Three**. Bottom row: **Full Width**.

---

## Three Column Bottom

- **URL:** https://www.lisd.net/production2/page-layout/three-column-bottom
- **Extracted:** 2026-06-23
- **Layout class:** `.fsThreeColumnBottomLayout`

### Content

Top row: **Full Width**. Bottom row: **Column One**, **Column Two**, **Column Three**.

---

## Two Columns Middle

- **URL:** https://www.lisd.net/production2/page-layout/two-columns-middle
- **Extracted:** 2026-06-23
- **Layout class:** `.fsSandwichTwoColumnLayout`

### Content

**Full Width One** → **Column One** + **Column Two** → **Full Width Two**.

---

## Three Columns Middle

- **URL:** https://www.lisd.net/production2/page-layout/three-columns-middle
- **Extracted:** 2026-06-23
- **Layout class:** `.fsSandwichThreeColumnLayout`

### Content

**Full Width One** → three columns → **Full Width Two**.

---

## Two Column Bottom — Right Sidebar

- **URL:** https://www.lisd.net/production2/page-layout/two-column-bottom-right-sidebar
- **Extracted:** 2026-06-23
- **Layout class:** `.fsElephantRightLayout`

### Content

**Main Column** (with nested **Column One** + **Column Two**) and **Sidebar** on the right.

### Sidebar styles

| Region | Class | Width @ 1440px |
|--------|-------|----------------|
| Sidebar | `.fsStyleOneThird` | 340px |
| Main | `.fsStyleTwoThirds` | 840px |

---

## Two Column Bottom — Left Sidebar

- **URL:** https://www.lisd.net/production2/page-layout/two-column-bottom-left-sidebar
- **Extracted:** 2026-06-23
- **Layout class:** `.fsElephantLeftLayout`

### Content

**Sidebar** on the left, **Main Column** (with nested **Column One** + **Column Two**) on the right.

---

## Two Column — Left Sidebar

- **URL:** https://www.lisd.net/production2/page-layout/two-column-left-sidebar
- **Extracted:** 2026-06-23
- **Layout class:** `.fsTwoColumnWideRightLayout`

### Content

**Sidebar** (left, `.fsStyleOneThird`) + **Main Column** (right, `.fsStyleTwoThirds`).

### Sidebar styles

| Property | Sidebar | Main |
|----------|---------|------|
| Width @ 1440px | 340px | 840px |
| Padding toward main | `padding-right: 60px` | none |
| CSS @ ≥1100px | `width: 340px` | `width: calc(100% - 340px)` |

---

## Two Column — Right Sidebar

- **URL:** https://www.lisd.net/production2/page-layout/two-column-right-sidebar
- **Extracted:** 2026-06-23
- **Layout class:** `.fsTwoColumnWideLeftLayout`

### Content

**Main Column** (left, `.fsStyleTwoThirds`) + **Sidebar** (right, `.fsStyleOneThird`).

### Sidebar styles

| Property | Main | Sidebar |
|----------|------|---------|
| Width @ 1440px | 840px | 340px |
| Padding toward main | none | `padding-left: 60px` |
| CSS @ ≥1100px | `width: calc(100% - 340px)` | `width: 340px` |

---

## Quick Reference

| Token | Value |
|-------|-------|
| Page background | `#FFFFFF` on `#fsPageBodyWrapper` |
| Content max-width | **1180px** (`#fsPageBody`) |
| Equal-column layout outer width | **1220px** (1180 + 20px bleed each side) |
| Column horizontal padding | **20px** each side @ ≥1000px |
| Column content gutter | **40px** between adjacent columns |
| Sidebar width @ ≥1100px | **340px** |
| Main column width @ ≥1100px | **840px** (calc remainder) |
| Sidebar inner gutter | **60px** padding toward main column |
| Body wrapper padding | `50px 20px 40px` |
| Primary brand color | `#073772` |
