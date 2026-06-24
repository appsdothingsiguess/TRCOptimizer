# Part 4: Navigation & Organizational

Extracted from live LISD Style Guide v3 pages (`lisd.net/production2`) on **2026-06-23**. Source: page HTML plus theme CSS (`main.css`, `client_v7.css`, `application.css`). Browser MCP was unavailable during extraction; styles were parsed from published stylesheets and markup (equivalent for static CSS rules).

---

## Nav Header Styles — Summary

The district site header is a **two-tier system** on desktop (≥1100px):

| Layer | Selector | Background | Height / width | Key typography |
|-------|----------|------------|----------------|----------------|
| **Top bar** | `.fsHeader .header--holder` | `var(--primary-color, #023A6D)` | **60px** fixed height; inner content max-width **1400px**, horizontal padding **20px** | Logo thumbnail up to **130px** max-height |
| **Main nav bar** | `.nav-main` | Same primary blue | Full width below header; nav list max-width **1180px**, centered | Level-1 links: **Montserrat**, **14px** (12–11px at narrower desktop), **400**, **uppercase**, **#fff**; padding **1.11em** block |
| **Mobile drawer** | `#fsMenu.fsMenu` | Primary blue, fixed full-width panel | Slides from right; search field bg **#002a50** | Homepage nav links **16px / 600 / uppercase / #fff** |

**Active & hover (main nav):**

- Default link: `#fff`
- Hover / focus-within / open: `#e5e5e5`
- Current page (`.fsNavCurrentPage`): `#e5e5e5`
- Current ancestor in compact header nav: `#deaf25` (secondary gold)
- Dropdown (`.fsNavPageInfo`): primary blue panel; level-2 hover uses **secondary gold** background with `#e5e5e5` text

**Style-guide horizontal nav** (`.horizontal-nav`): light gray bar `#f8f8f8`, **1px** bottom border `rgba(0,0,0,.12)`, nav padding **21px 5px**, links **14px / 600 / #636363** with **2px #131313** underline on hover/active; current page link **#DEAF25** (secondary). Hidden at **≥1100px** in theme CSS (sidebar `nav-sub` used instead on interior pages with left banner).

**Breadcrumb** (`.fsBreadcrumb`): max-width **1180px**, **20px** horizontal padding, **20px** bottom margin; **11px** (0.6875rem) **Montserrat 600 uppercase**; links **#636363**, current **primary blue**; separator **#636363**, **10px** horizontal margin, renders IcoMoon chevron or `>` in markup.

---

## Cross-Cutting CSS Variables

From inline `:root` on style-guide pages (`#fsHSLColors`):

| Variable | Value |
|----------|-------|
| `--primary-color` | `#073772` |
| `--primary-color-h` | `213.08` |
| `--primary-color-s` | `88.43%` |
| `--primary-color-l` | `23.73%` |
| `--secondary-color` | `#f1b51c` |
| `--secondary-color-h` | `43.1` |
| `--secondary-color-s` | `88.38%` |
| `--secondary-color-l` | `52.75%` |

Theme CSS fallbacks (when CMS variables absent): `--primary-color, #023A6D` and `--secondary-color, #DEAF25`.

---

## Navigation Patterns Reference

### Site header (`#fsHeader`)

| Selector | Property | Value |
|----------|----------|-------|
| `.fsHeader .header--holder` | background | `var(--primary-color, #023A6D)` |
| `.fsHeader .header--holder` | height | `60px` |
| `.fsHeader .header--holder > .fsElementContent` | max-width | `1400px` |
| `.fsHeader .header--holder > .fsElementContent` | padding | `0 20px` |
| `.fsHeader .header--logo .fsThumbnail img` | max-height | `130px` |
| `.fsHeader .nav-main` | display | `none` default; `block` at `min-width: 1100px` |

### Main navigation (`.nav-main`)

| Selector | Property | Value |
|----------|----------|-------|
| `.nav-main` | background-color | `var(--primary-color, #023A6D)` |
| `.nav-main .fsNavLevel1` | max-width | `1180px` |
| `.nav-main .fsNavLevel1 > li > a` | color | `#fff` |
| `.nav-main .fsNavLevel1 > li > a` | padding | `1.1111111111em` |
| `.nav-main .fsNavLevel1 > li > a` | text-transform | `uppercase` |
| `.nav-main .fsNavLevel1 > li:hover > a` | color | `#e5e5e5` |
| `.nav-main .fsNavLevel1 > li[class*=fsNavCurrentPage] > a` | color | `#e5e5e5` |
| `.nav-main .fsNavPageInfo` | background | `var(--primary-color, #023A6D)` |
| `.nav-main .fsNavLevel2 li a:hover` | background | `var(--secondary-color, #DEAF25)` |
| `.nav-main .fsNavLevel2 li a:hover` | color | `#e5e5e5` |
| `.fsHeader .nav-main > .fsElementContent .fsNavLevel1 > li.fsNavCurrentPageAncestor > a` | color | `#deaf25 !important` |

### Left sidebar navigation (`.nav-sub`)

Used on style-guide navigation tier pages (`fsHasLeftBanner`). Title from `.fsElementTitle`.

| Selector | Property | Value |
|----------|----------|-------|
| `.nav-sub > header .fsElementTitle` | font | Montserrat **800**, **22px**, capitalize |
| `.nav-sub > header .fsElementTitle` | color | `#373737` |
| `.nav-sub > header .fsElementTitle` | border-bottom | `1px solid #636363` |
| `.nav-sub > header .fsElementTitle` | padding | `20px` |
| `.nav-sub .fsNavLevel1 > li > a` | font-size | `0.9375rem` (15px) |
| `.nav-sub .fsNavLevel1 > li > a` | font-weight | `500` |
| `.nav-sub .fsNavLevel1 > li > a` | padding | `13px 0` |
| `.nav-sub ul li a` | color | `#636363` |
| `.nav-sub ul li a` | font-size | `14px` |
| `.nav-sub ul li a:hover` | color | `#131313`; underline |
| `.nav-sub ul li.fsNavCurrentPage > a` | color | `#131313`; underline |
| `.nav-sub ul li.fsNavCurrentPageAncestor > a` | color | `var(--primary-color, #023A6D)` |
| `.nav-sub ul li .fsNavPageInfo` | background | `#f8f8f8`; padding-left `10px` |
| `.nav-sub` | margin-bottom | `70px` |

Mobile variant (`.nav-sub.mobile-nav-sub`): primary blue background, white links; shown below **1000px** when left banner absent.

### Horizontal / landing nav (`.horizontal-nav`)

| Selector | Property | Value |
|----------|----------|-------|
| `.horizontal-nav` | background | `#f8f8f8` |
| `.horizontal-nav` | border-bottom | `1px solid rgba(0,0,0,.12)` |
| `.horizontal-nav .fsElementContent` | max-width | `1180px` |
| `.horizontal-nav nav` | padding | `21px 5px` |
| `.horizontal-nav .fsNavLevel1 li a` | font | Montserrat **14px / 600** |
| `.horizontal-nav .fsNavLevel1 li a` | color | `#636363` |
| `.horizontal-nav .fsNavLevel1 li a:hover` | color | `#131313` |
| `.horizontal-nav .fsNavLevel1 li a:before` | hover underline | `2px` height, `#131313`, bottom `-3px` |
| `.horizontal-nav .fsNavLevel1 li.fsNavCurrentPage a` | color | `var(--secondary-color, #DEAF25)` |

### Breadcrumb (`.fsBreadcrumb`)

| Selector | Property | Value |
|----------|----------|-------|
| `.fsBreadcrumb` | display | `block` (interior pages) |
| `.fsBreadcrumb > .fsElementContent` | max-width | `1180px` |
| `.fsBreadcrumb` | padding | `0 20px`; margin-bottom `20px` |
| `.fsBreadcrumb ul li` | font | Montserrat **12px / 600**, uppercase |
| `.fsBreadcrumb ul li` | color | `#131313` |
| `.fsBreadcrumb ul li a` | color | `#636363` |
| `.fsBreadcrumb ul li a:hover` | color | `#131313`; underline |
| `.fsBreadcrumb ul li[class*=fsNavCurrentPage] > a` | color | `var(--primary-color, #023A6D)` |
| `.fsNavBreadcrumbSeperator` | margin | `0 10px` |
| `.fsNavBreadcrumbSeperator` | color | `#636363` |

**Tier breadcrumb trail** (Tier Five example): `Style Guide v3 > Navigation > Tier Three Page > Tier Four Page > Tier Five Page` — final crumb is plain text with `aria-current="location"`, not linked.

### Tier navigation classes (markup)

| Class | Meaning |
|-------|---------|
| `fsNavCurrentPage` | Active page |
| `fsNavCurrentPageAncestor` | Parent of active page in trail |
| `fsNavParentPage` | Has child pages (dropdown or nested list) |
| `fsNavLevel1` … `fsNavLevel4` | Nesting depth in sidebar / dropdown |
| `nav-tier` | Alternate tier nav styling: current `#cfcfcf` bg, ancestor `#e5e5e5` bg |

### Focus indicators (nav)

| Selector | Property | Value |
|----------|----------|-------|
| `.fsNavLevel1 a:focus-visible` | outline | `3px solid currentColor` |
| `.fsNavLevel1 a:focus-visible` | outline-offset | `3px` |
| `.fsBreadcrumb ul li a:focus-visible` | outline | `3px solid currentColor` |
| `.nav-sub ul li a:focus-visible` | outline | `3px solid currentColor` |

---

## Organizational Patterns Reference

### Column layouts

| Layout class | Column split | Notes |
|--------------|--------------|-------|
| `.fsOneColumnLayout` | 100% | Content max-width **1020px** when not page layout wrapper |
| `.fsTwoColumnLayout > .fsDiv` | **50% / 50%** | Float left, box-sizing border-box |
| `.fsThreeColumnLayout > .fsDiv` | **33.33%** each | Three equal columns |
| `.fsFourColumnLayout > .fsDiv` | **25%** each (50% on small breakpoints in theme) | Four equal columns |
| `.fsTwoColumnWideLeftLayout` | **340px** sidebar + `calc(100% - 340px)` main at large desktop; **240px** at medium | Left narrow column |
| `.fsTwoColumnWideRightLayout` | Mirror of wide-left | Right narrow column |

All multi-column layouts clear floats via `> footer { clear: both }`.

### Container (`.fsContainer`)

Semantic grouping element with optional `<header><h2 class="fsElementTitle">`. No dedicated public-theme box styling beyond standard element title typography. Used on Container demo page as a titled wrapper around child elements.

### Accordion (`.fsAccordion`)

| Selector | Property | Value |
|----------|----------|-------|
| `.fsAccordion .fsPanel` | border-top | `1px solid #cfcfcf` |
| `.fsAccordion .fsPanel:last-child` | border-bottom | `1px solid #cfcfcf` |
| `.fsAccordion .fsPanel > header` | cursor | `pointer` |
| `.fsAccordion .fsPanel > header h2` | font | Montserrat **1rem / 600** (panel title) |
| `.fsAccordion .fsPanel > header h2` | padding | `20px` |
| `.fsAccordion .fsPanel > header h2` | color | `#636363` (closed); primary in theme heading rule |
| `.fsAccordion .fsPanel > header:hover` | background | `#f8f8f8` |
| `.fsAccordion .fsPanel > header:hover h2` | color | `#131313` |
| `.fsAccordion .fsPanel > .fsElementContent` | padding | `0 20px 20px 29px` |
| `.fsAccordion .fsPanel > .fsElementContent` | box-shadow | `inset 4px 0 0 #e5e5e5` |
| `.fsPanelIconBefore` closed icon | border-left triangle | `#c3c5cc` |
| `.fsPanelIconBefore` open icon | down triangle | `#656567` |

Variants on accordion page: default (no icons), `fsPanelIconBefore`, `fsPanelIconAfter`.

### Tabs (`.fsTabs`)

| Selector | Property | Value |
|----------|----------|-------|
| `.fsTabs .fsTabsNav` | display | flex, wrap; margin `-10px` |
| `.fsTabs .fsTabsNav li` | margin | `10px` |
| `.fsTabs .fsTabsNav li a` | font | Montserrat **18px / 700** |
| `.fsTabs .fsTabsNav li a` | color | `#636363` |
| `.fsTabs .fsTabsNav li a:hover` | color | `#131313` |
| `.fsTabs .fsTabsNav li.fsStateSelected a` | color | `#131313` |
| `.fsTabs .fsTabsNav li.fsStateSelected a` | box-shadow | `inset 0 -4px 0 var(--secondary-color, #DEAF25)` |
| `.fsTabs .fsTabsNav li a:hover` | box-shadow | same gold bottom inset |
| `.fsTabs .fsPanel > header h2` | font | Montserrat **1rem / 600** |

At `min-width: 600px`, tab panels drop accordion-style inset shadow; content padding `20px 0 0`.

---

## Navigation

- **URL:** https://www.lisd.net/production2/navigation
- **Extracted:** 2026-06-23

### Content

# Navigation

Style-guide index for navigation components. Page demonstrates district header, optional horizontal nav strip, left sidebar sub-nav (on tier pages), and breadcrumb on deeper tiers.

### :root CSS Variables

| Variable | Value |
|----------|-------|
| `--primary-color` | `#073772` |
| `--secondary-color` | `#f1b51c` |

### Computed Styles

| Selector | Property | Value |
|----------|----------|-------|
| `#fsHeader .header--holder` | background-color | `var(--primary-color, #023A6D)` |
| `#fsHeader .header--holder` | height | `60px` |
| `.nav-main` | background-color | `var(--primary-color, #023A6D)` |
| `.nav-main .fsNavLevel1 > li > a` | color | `#fff` |
| `.horizontal-nav` | background | `#f8f8f8` |

---

## Tier Three Page

- **URL:** https://www.lisd.net/production2/navigation/tier-three-page
- **Extracted:** 2026-06-23

### Content

# Tier Three Page

Third tier in navigation hierarchy. Body includes `fsHasLeftBanner` — left `.nav-sub` lists style-guide sections with nested children.

### Breadcrumb

`Style Guide v3 > Navigation > Tier Three Page`

### Computed Styles

| Selector | Property | Value |
|----------|----------|-------|
| `.nav-sub .fsNavLevel1 > li > a` | padding-top / bottom | `13px` |
| `.nav-sub ul li.fsNavCurrentPage > a` | text-decoration | `underline` |
| `.fsBreadcrumb ul li a` | color | `#636363` |

---

## Tier Four Page

- **URL:** https://www.lisd.net/production2/navigation/tier-three-page/tier-four-page
- **Extracted:** 2026-06-23

### Content

# Tier Four Page

Fourth navigation tier; sidebar shows `fsNavLevel3` nesting under Tier Three Page.

### Breadcrumb

`Style Guide v3 > Navigation > Tier Three Page > Tier Four Page`

### Computed Styles

| Selector | Property | Value |
|----------|----------|-------|
| `.nav-sub ul li .fsNavPageInfo` | background-color | `#f8f8f8` |
| `.nav-sub ul li .fsNavPageInfo` | padding-left | `10px` |
| `.fsBreadcrumb ul li` | text-transform | `uppercase` |

---

## Tier Five Page

- **URL:** https://www.lisd.net/production2/navigation/tier-three-page/tier-four-page/tier-five-page
- **Extracted:** 2026-06-23

### Content

# Tier Five Page

Deepest navigation tier in the style guide. Sidebar collapses to current page only on mobile sub-nav; full tree in left banner on desktop.

### Breadcrumb

`Style Guide v3 > Navigation > Tier Three Page > Tier Four Page > Tier Five Page`

Final crumb: plain text, `aria-current="location"`.

### Active-state classes (horizontal nav)

- `fsNavCurrentPage` on Tier Five link
- `fsNavCurrentPageAncestor` on Navigation, Tier Three, Tier Four parents

### Computed Styles

| Selector | Property | Value |
|----------|----------|-------|
| `.horizontal-nav .fsNavLevel1 li.fsNavCurrentPage a` | color | `var(--secondary-color, #DEAF25)` |
| `.fsBreadcrumb ul li[class*=fsNavCurrentPage] > a` | color | `var(--primary-color, #023A6D)` |
| `.nav-tier ul li.fsNavCurrentPage > a` | background | `#cfcfcf` |

---

## Organizational

- **URL:** https://www.lisd.net/production2/organizational
- **Extracted:** 2026-06-23

### Content

# Organizational

Index listing organizational layout elements:

- One Column
- Two Column
- Three Column
- Four Column
- Accordion
- Container
- Tabs

### Computed Styles

| Selector | Property | Value |
|----------|----------|-------|
| `.fsPageLayout.fsOneColumnLayout` | layout | Single full-width content column |
| `.fsNavigation.fsList` | — | In-page link list to child demos |

---

## One Column

- **URL:** https://www.lisd.net/production2/organizational/one-column
- **Extracted:** 2026-06-23

### Content

# One Column

Single-column page body using `.fsOneColumnLayout`.

### Computed Styles

| Selector | Property | Value |
|----------|----------|-------|
| `.fsOneColumnLayout:not(.fsPageLayout)` | max-width | `1020px` |
| `.fsOneColumnLayout:not(.fsPageLayout)` | margin | `0 auto` |

---

## Two Column

- **URL:** https://www.lisd.net/production2/organizational/two-column
- **Extracted:** 2026-06-23

### Content

# Two Column

Demonstrates three layout variants:

### Two Column Wide Left

Equal-ish split with wider left emphasis (`.fsTwoColumnWideLeftLayout`).

### Two Column Wide Right

Mirror wide-right variant (`.fsTwoColumnWideRightLayout`).

### Computed Styles

| Selector | Property | Value |
|----------|----------|-------|
| `.fsTwoColumnLayout > .fsDiv` | width | `50%` |
| `.fsTwoColumnWideLeftLayout > .fsStyleOneThird` | width | `340px` (large) / `240px` (medium) |
| `.fsTwoColumnWideLeftLayout > .fsStyleTwoThirds` | width | `calc(100% - 340px)` |
| `.fsTwoColumnWideRightLayout > .fsStyleTwoThirds` | width | `calc(100% - 340px)` |

---

## Three Column

- **URL:** https://www.lisd.net/production2/organizational/three-column
- **Extracted:** 2026-06-23

### Content

# Three Column

Three equal columns via `.fsThreeColumnLayout`.

### Computed Styles

| Selector | Property | Value |
|----------|----------|-------|
| `.fsThreeColumnLayout > .fsDiv` | width | `33.3333333333%` |
| `.fsThreeColumnLayout > .fsDiv` | float | `left` |
| `.fsThreeColumnLayout > .fsDiv` | box-sizing | `border-box` |

---

## Four Column

- **URL:** https://www.lisd.net/production2/organizational/four-column
- **Extracted:** 2026-06-23

### Content

# Four Column

### Column One

### Column Two

### Column Three

### Column Four

Four equal columns at desktop.

### Computed Styles

| Selector | Property | Value |
|----------|----------|-------|
| `.fsFourColumnLayout > .fsDiv` | width | `25%` (desktop) |
| `.fsFourColumnLayout > .fsDiv` | width | `50%` (narrow breakpoint in theme) |
| `.fsFourColumnLayout > footer` | clear | `both` |

---

## Accordion

- **URL:** https://www.lisd.net/production2/organizational/accordion
- **Extracted:** 2026-06-23

### Content

# Accordion

### Accordion - no icons

- Malesuada Sit Parturient
- Ipsum Tristique
- Dapibus Justo Fusce Euismod

### Icons Before Title

- Condimentum Mattis
- Fusce Sit Etiam Ullamcorper
- Quam Cursus Pellentesque

### Icons After Title

(Separate `fsPanelIconAfter` block with same panel title pattern.)

### Computed Styles

| Selector | Property | Value |
|----------|----------|-------|
| `.fsAccordion .fsPanel` | border-top | `1px solid #cfcfcf` |
| `.fsAccordion .fsPanel > header h2` | padding | `20px` |
| `.fsAccordion .fsPanel > header:hover` | background-color | `#f8f8f8` |
| `.fsAccordion .fsPanel > .fsElementContent` | box-shadow | `inset 4px 0 0 #e5e5e5` |
| `.fsAccordion.fsPanelIconBefore .fsPanel > header h2::before` | border-left color | `#c3c5cc` |

---

## Container

- **URL:** https://www.lisd.net/production2/organizational/container
- **Extracted:** 2026-06-23

### Content

# Container

### Container Title

Wrapper element: `<section class="fsElement fsContainer">` with `<header><h2 class="fsElementTitle">Container Title</h2></header>`.

### Computed Styles

| Selector | Property | Value |
|----------|----------|-------|
| `.fsContainer` | — | Grouping element; no distinct border/fill in public theme |
| `.fsElementTitle` | font-family | Montserrat (element headers) |

---

## Tabs

- **URL:** https://www.lisd.net/production2/organizational/tabs
- **Extracted:** 2026-06-23

### Content

# Tabs

Tab labels:

- Amet Mollis Ipsum
- Fringilla Ridiculus
- Nibh

Each panel has an **H2** title matching the tab label plus body copy paragraphs.

Variant class on demo: `fsPanelGroup fsTabs fsPanelIconBefore`.

### Computed Styles

| Selector | Property | Value |
|----------|----------|-------|
| `.fsTabs .fsTabsNav li a` | font-size | `18px` |
| `.fsTabs .fsTabsNav li a` | font-weight | `700` |
| `.fsTabs .fsTabsNav li a` | color | `#636363` |
| `.fsTabs .fsTabsNav li.fsStateSelected a` | box-shadow | `inset 0 -4px 0 var(--secondary-color, #DEAF25)` |
| `.fsTabs .fsTabsNav li a` | letter-spacing | `0.06em` (from client_v7.css) |
| `.fsTabs .fsTabsNav li a` | text-transform | `uppercase` (from client_v7.css) |
