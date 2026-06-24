# Lewisville ISD Style Guide v3 — Full Reference

**Source:** Live extraction from [https://www.lisd.net/production2](https://www.lisd.net/production2) and all right-panel linked sections.

**Extracted:** 2026-06-23 via parallel browser inspection (computed CSS + page content).

**Method:** Six parallel extraction agents visited every style-guide section; each page captured `:root` CSS variables, computed styles on key selectors, and structured content prose.

---

## Global Design Tokens (live computed)

| Token | Live computed | CSS fallback in theme |
|-------|---------------|----------------------|
| `--primary-color` | `#073772` | `#023A6D` |
| `--secondary-color` | `#f1b51c` | `#DEAF25` |
| Body font | Montserrat, sans-serif | Montserrat |
| Heading font (h1–h4) | Merriweather, serif | Merriweather |
| Body text color | `#373737` | `#373737` |
| Content max-width | `1180px` (`#fsPageBody`) | — |
| Page background | `#FFFFFF` (`#fsPageBodyWrapper`) | — |

> Live site resolves brand colors via HSL custom properties (`--primary-color-h/s/l`). Computed values may differ slightly from static fallbacks in `main.css`.

---

## Section Coverage

| Part | Sections | Output file |
|------|----------|-------------|
| 1 | Hub, QA Testing (buttons, content) | `lisd_style_parts/01-hub-qa.md` |
| 2 | Form, Login, Embed, Search, Resources | `lisd_style_parts/02-forms-utility.md` |
| 3 | Page Layout (hub + 14 layout variants) | `lisd_style_parts/03-page-layout.md` |
| 4 | Navigation (tiers 3–5), Organizational | `lisd_style_parts/04-nav-organizational.md` |
| 5 | Athletics, Banners, Calendar, Constituent | `lisd_style_parts/05-widgets-a.md` |
| 6 | Posts, Social Elements | `lisd_style_parts/06-widgets-b.md` |

### Right-panel top-level sections

Athletics · Banners · Calendar · Constituent · Embed · Form · Login · Navigation · Organizational · Page Layout · Posts · Resources · Search · Social Elements · QA Testing

---

## Table of Contents

1. [Part 1: Hub & QA Testing](#part-1-hub--qa-testing)
2. [Part 2: Form, Login & Utility Pages](#part-2-form-login--utility-pages)
3. [Part 3: Page Layout](#part-3-page-layout)
4. [Part 4: Navigation & Organizational](#part-4-navigation--organizational)
5. [Part 5: Athletics, Banners, Calendar & Constituent](#part-5-athletics-banners-calendar--constituent)
6. [Part 6: Posts & Social Elements](#part-6-posts--social-elements)

---
# Part 1: Hub & QA Testing

Extracted from live LISD Style Guide v3 pages via headless browser (Puppeteer) computed styles + theme CSS (`main.css`, `client_v7.css`).

**Pages visited:**
1. https://www.lisd.net/production2
2. https://www.lisd.net/production2/qa-testing
3. https://www.lisd.net/production2/qa-testing/qa-testing-buttons
4. https://www.lisd.net/production2/qa-testing/qa-testing-content

**Key global tokens (live `:root`, 2026-06-23):**
| Token | Computed value | CSS fallback in theme |
|-------|----------------|----------------------|
| `--primary-color` | `#073772` | `#023A6D` |
| `--secondary-color` | `#f1b51c` | `#DEAF25` |
| Body font | Montserrat, sans-serif | Montserrat |
| Heading font (h1–h4 interior) | Merriweather, serif | Merriweather |
| Body text color | rgb(55, 55, 55) / #373737 | #373737 |

> **Note:** Live site resolves brand colors via HSL custom properties (`--primary-color-h/s/l`). Computed primary/secondary may differ slightly from static fallbacks in `main.css`.

---

## Style Guide v3 (Hub)

- **URL:** https://www.lisd.net/production2
- **Extracted:** 2026-06-23

### Content

#### Introduction

# Style Guide v3

Lead-in Style Curabitur blandit tempus porttitor maecenas faucibus mollis interdum praesent commodo.

Body style Vestibulum id ligula porta felis euismod semper, dapibus ac facilisis in, egestas eget quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus.

Vestibulum id ligula porta felis Hyperlink cras justo odio dapibus ac facilisis in.

Regular Bold Italic

## Heading Two

Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.

Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.

### Heading Three

Maecenas sed diam eget risus varius blandit sit amet non magna. Aenean lacinia bibendum nulla sed consectetur. Cras justo odio, dapibus ac facilisis in, egestas eget quam.

#### Heading Four

Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean lacinia bibendum nulla sed consectetur. Nullam id dolor id nibh ultricies vehicula ut id elit.

##### HEADING FIVE

Vestibulum id ligula porta felis euismod semper. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam id dolor id nibh ultricies vehicula ut id elit.

###### HEADING SIX

Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam quis risus eget urna mollis ornare vel eu leo. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.

#### Blockquotes & Callouts

Aenean lacinia bibendum nulla sed consectetur. Donec ullamcorper nulla non metus auctor fringilla. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.

Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Sed posuere consectetur est at lobortis. Maecenas sed diam eget risus varius blandit sit amet non magna.
Author Name,
Grade 6

Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Sed posuere consectetur est at lobortis. Maecenas sed diam eget risus varius blandit sit amet non magna.
Author Name,
Grade 6

Nulla vitae elit libero, a pharetra augue. Nulla vitae elit libero, a pharetra augue. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas sed diam eget risus varius blandit

nullam id dolor id nibh ultricies vehicula ut id elit. Curabitur blandit tempus porttitor. Donec id elit non mi porta gravida at eget metus. Etiam porta sem malesuada magna mollis.

Callout-text. Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna vel scelerisque nisl consectetur et.

Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam porta sem malesuada magna mollis euismod. Nulla vitae elit libero, a pharetra augue.

#### Style Guide v3

- Athletics
expand this section

- Events List

- Single Event

- Roster

- Teams

- Profile

- Event Table

- Banners
expand this section

- Left Banner

- Right Banner

- Left & Right Banners

- Calendar
expand this section

- List

- Grid

- Slideshow

- Event

- Constituent
expand this section

- Directory

- Profile

- Search

- Students

- Embed

- Form

- Login

- Navigation
expand this section

- Tier Three Pageexpand this sectionTier Four Pageexpand this sectionTier Five Page

- Tier Four Pageexpand this sectionTier Five Page

- Tier Five Page

- Organizational
expand this section

- One Column

- Two Column

- Three Column

- Four Column

- Accordion

- Container

- Tabs

- Page Layout
expand this section

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

- Two Column Bottom - Right Sidebar

- Two Column Bottom - Left Sidebar

- Two Column - Left Sidebar

- Two Column - Right Sidebar

- Posts
expand this section

- Post List

- Post Grid

- Post Slideshow

- Single

- Resources

- Search

- Social Elements
expand this section

- Vimeo

- YouTube

- Feeds

- QA Testing
expand this section

- Content Testing

- Button Testing

## Heading Two

Maecenas sed diam eget risus varius blandit sit amet non magna. Aenean lacinia bibendum nulla sed consectetur. Cras justo odio, dapibus ac facilisis in, egestas eget quam.

Lead-in donec sed odio dui. Curabitur blandit tempus porttitor. Donec ullamcorper nulla non metus.

### Heading Three

Maecenas sed diam eget risus varius blandit sit amet non magna. Aenean lacinia bibendum nulla sed consectetur. Cras justo odio, dapibus ac facilisis in, egestas eget quam.

#### Heading Four

Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean lacinia bibendum nulla sed consectetur. Nullam id dolor id nibh ultricies vehicula ut id elit.

##### HEADING FIVE

Vestibulum id ligula porta felis euismod semper. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam id dolor id nibh ultricies vehicula ut id elit.

###### HEADING SIX

Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam quis risus eget urna mollis ornare vel eu leo. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.

#### Blockquotes & Callouts

Aenean lacinia bibendum nulla sed consectetur. Donec ullamcorper nulla non metus auctor fringilla. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.

Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Sed posuere consectetur est at lobortis. Maecenas sed diam eget risus varius blandit sit amet non magna.
Author Name,
Grade 6

Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Sed posuere consectetur est at lobortis. Maecenas sed diam eget risus varius blandit sit amet non magna.
Author Name,
Grade 6

Nulla vitae elit libero, a pharetra augue. Nulla vitae elit libero, a pharetra augue. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas sed diam eget risus varius blandit

nullam id dolor id nibh ultricies vehicula ut id elit. Curabitur blandit tempus porttitor. Donec id elit non mi porta gravida at eget metus. Etiam porta sem malesuada magna mollis.

Callout-text. Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna vel scelerisque nisl consectetur et.

Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam porta sem malesuada magna mollis euismod. Nulla vitae elit libero, a pharetra augue.

#### Horizontal Rule

#### Cards

Fill the width of the container they are placed within. Can be used with or without a photo.

## Card Light

Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.

Link

BUTTON-2 + FULL-WIDTH-BUTTON

## Card: Dark

Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.

Link

BUTTON-2 + FULL-WIDTH-BUTTON

## Card: Primary

Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla.

Hyperlink

BUTTON-2 + FULL-WIDTH-BUTTON

## Card: Secondary

Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.

Lin

BUTTON-2 + FULL-WIDTH-BUTTON

## Card: Accent

Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla.

Hyperlink

BUTTON-2 + FULL-WIDTH-BUTTON

## Equal

Donec sed odio dui. Maecenas faucibus mollis interdum. Curabitur blandit tempus porttitor.

BUTTON-2 + FULL-WIDTH-BUTTON

## Height

Aenean lacinia bibendum nulla sed consectetur. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus. Cras mattis consectetur purus sit amet fermentum.

BUTTON-2 + FULL-WIDTH-BUTTON

## Cards

Etiam porta sem malesuada magna mollis euismod. Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus.

BUTTON-2 + FULL-WIDTH-BUTTON

#### Tabs

- ACTIVE TAB

- TAB LABEL

- ANOTHER TAB

#### Active Tab

Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Aenean eu leo quam. Pellent es que or nare sem lacinia quam venenatis vestibulum. Vivamus sagittis lacus vel augue laoreet rut rum ac ibus dolor auctor. Curabitur blandit tempus porttitor.

#### Tab Label

Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cras mattis consectetur purus sit amet fermentum.

#### Another Tab

Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.

#### Accordions

- Active Accordion

- Accordion Title

- Accordion Title praesent commodo cursus magna vel scelerisque nisl consectetur et donec sed odio dui

#### Active Accordion

Donec sed odio dui. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Nulla vitae elit libero, a pharetra augue. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.

#### Accordion Title

Vestibulum id ligula porta felis euismod semper. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras justo odio, dapibus ac facilisis in, egestas eget quam.

#### Accordion Title Praesent Commodo Cursus Magna Vel Scelerisque Nisl Consectetur Et Donec Sed Odio Dui

Aenean lacinia bibendum nulla sed consectetur. Nulla vitae elit libero, a pharetra augue. Maecenas faucibus mollis interdum.

#### Styled Table

Available with and without a table header.

Table Header

Value

Table Data

1

Table Data

2

Table Data

3

Table Data

4

#### Posts

Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor.

#### Posts List

This is the post summary. This post shows elements that you can choose to display or omit within your own lists (eg. thumbnail, categories, author, date, summary, tags, read more link).

This is the post summary. This post shows elements that you can choose to display or omit within your own lists (eg. thumbnail, categories, author, date, summary, tags, read more link).

#### Posts List

This is the post summary. This post shows elements that you can choose to display or omit within your own lists (eg. thumbnail, categories, author, date, summary, tags, read more link).

This is the post summary. This post shows elements that you can choose to display or omit within your own lists (eg. thumbnail, categories, author, date, summary, tags, read more link).

#### Posts List

This is the post summary. This post shows elements that you can choose to display or omit within your own lists (eg. thumbnail, categories, author, date, summary, tags, read more link).

#### Calendars

Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor.

#### Buttons and links

Small and large buttons will have the same colors and hover states

Small, medium and large buttons will have the same color options.

System Button

Button-1 Button-2 Button-3 Button-4 Button-5

## Button-on-dark-1 & Button-on-dark-2

Button-on-dark-1

Button-on-dark-2

## Button + Large

BUTTON-1 + LARGE-BUTTON

BUTTON-1 + LARGE-BUTTON 
Optional Button Subtext

## Button + Expand

BUTTON-1 + LARGE-BUTTON + FULL-WIDTH-BUTTON

Link to another URL

Download a file

#### Site Colors and Fonts

Please review the colors and fonts listed here, which will be used on your website. Note that they may vary slightly from branding colors used for printed work and may have been adjusted in order to meet accessible color contrast minimums.

### Hub section index (page structure)

| Section | Element |
|---------|---------|
| Style Guide v3 | `H1` `fsPageTitle` |
| Heading Four | `H4` `` |
| Blockquotes & Callouts | `H2` `fsElementTitle` |
| Style Guide v3 | `H2` `fsElementTitle` |
| Heading Four | `H4` `` |
| Blockquotes & Callouts | `H2` `fsElementTitle` |
| Horizontal Rule | `H4` `fsElementTitle` |
| Cards | `H4` `` |
| Tabs | `H2` `fsElementTitle` |
| Active Tab | `H2` `fsElementTitle` |
| Tab Label | `H2` `fsElementTitle` |
| Another Tab | `H2` `fsElementTitle` |
| Accordions | `H2` `fsElementTitle` |
| Active Accordion | `H2` `fsElementTitle` |
| Accordion Title | `H2` `fsElementTitle` |
| Accordion Title Praesent Commodo Cursus Magna Vel Scelerisque Nisl Consectetur Et Donec Sed Odio Dui | `H2` `fsElementTitle` |
| Styled Table | `H2` `fsElementTitle` |
| Posts | `H4` `` |
| Posts List | `H2` `fsElementTitle` |
| Posts List | `H2` `fsElementTitle` |
| Posts List | `H2` `fsElementTitle` |
| Calendars | `H4` `` |
| Calendar Item | `H2` `fsElementTitle` |
| Buttons and links | `H4` `` |
| Site Colors and Fonts | `H4` `` |

### :root CSS Variables

| Variable | Value |
|----------|-------|
| `--primary-color-h` | `213.08` |
| `--primary-color-s` | `88.43%` |
| `--primary-color-l` | `23.73%` |
| `--primary-color-hsl` | `var(--primary-color-h), var(--primary-color-s), var(--primary-color-l)` |
| `--primary-color` | `#073772` |
| `--secondary-color-h` | `43.1` |
| `--secondary-color-s` | `88.38%` |
| `--secondary-color-l` | `52.75%` |
| `--secondary-color-hsl` | `var(--secondary-color-h), var(--secondary-color-s), var(--secondary-color-l)` |
| `--secondary-color` | `#f1b51c` |


### Typography — Headings (computed)

| Level | Font | Size | Weight | Color | Line height | Letter-spacing |
|-------|------|------|--------|-------|-------------|----------------|
| h1 | Merriweather, serif | 42.35px | 700 | rgb(7, 55, 114) | 48.7025px | -0.847px |
| h2 | Merriweather, serif | 30.8px | 700 | rgb(7, 55, 114) | 36.96px | -0.308px |
| h3 | Merriweather, serif | 23.1px | 700 | rgb(7, 55, 114) | 30.03px | -0.231px |
| h4 | Merriweather, serif | 19.25px | 700 | rgb(19, 19, 19) | 25.9875px | normal |
| h5 | Montserrat, sans-serif | 14.4375px | 600 | rgb(19, 19, 19) | 20.2125px | 0.5775px |
| h6 | Montserrat, sans-serif | 12.5125px | 600 | rgb(19, 19, 19) | 18.7687px | 0.625625px |

**Interior page rule (from `client_v7.css`):** `body:not(.home) h1–h4` use Merriweather; h5–h6 use Montserrat. Tabs/accordion panel headers use Montserrat 600.

### Blockquotes & Callouts

| Property | Value |
|----------|-------|
| color | `rgb(19, 19, 19)` |
| backgroundColor | `rgba(0, 0, 0, 0)` |
| fontFamily | `Merriweather, serif` |
| fontSize | `22px` |
| fontWeight | `300` |
| lineHeight | `38.5px` |
| padding | `0px 0px 20px` |
| paddingTop | `0px` |
| paddingRight | `0px` |
| paddingBottom | `20px` |
| paddingLeft | `0px` |
| margin | `50px 0px` |
| border | `` |
| borderColor | `rgb(19, 19, 19) rgb(19, 19, 19) rgb(207, 207, 207)` |
| borderWidth | `0px 0px 1px` |
| borderStyle | `none none solid` |
| borderRadius | `0px` |
| textTransform | `none` |
| letterSpacing | `0.22px` |
| boxShadow | `none` |
| outline | `rgb(19, 19, 19) none 0px` |
| maxWidth | `none` |
| width | `840px` |
| minHeight | `0px` |
| display | `block` |
| textDecoration | `none solid rgb(19, 19, 19)` |


**Theme CSS samples:**
```css
margin:50px 0;padding-bottom:20px;position:relative;font-weight:300;font-size:22px;line-height:1.6;text-align:center;font-family:"Merriweather",serif;border-bottom:1px solid #cfcfcf;color:#131313
margin:40px 0;font-size:18px
margin:40px 0;font-size:18px
```

### Cards (Light / Dark / Primary / Secondary / Accent)

Hub demonstrates equal-height card grid with variants. Cards fill container width; usable with or without photo. Inner padding on `.fsElementContent`: **30px**. Card title (h2): Merriweather 26px / 700.

| Variant | Card surface (`backgroundColor`) | Title color | Body text color |
|---------|----------------------------------|-------------|-----------------|
| **Card Light** | `rgb(248, 248, 248)` (#f8f8f8) | `rgb(7, 55, 114)` (primary) | `rgb(19, 19, 19)` |
| **Card: Dark** | `rgb(7, 55, 114)` (primary) | `#fff` | `#fff` |
| **Card: Primary** | `rgb(7, 55, 114)` (primary) | `#fff` | `#fff` |
| **Card: Secondary** | `rgb(107, 202, 155)` (mint green accent) | `rgb(55, 55, 55)` | `rgb(55, 55, 55)` |
| **Card: Accent** | `rgb(229, 229, 229)` (#e5e5e5) | `rgb(7, 55, 114)` (primary) | `rgb(19, 19, 19)` |

**Computed — Card Light (container):**
| Property | Value |
|----------|-------|
| backgroundColor | `rgb(248, 248, 248)` |
| padding (inner) | `30px` |
| fontFamily (body) | `Montserrat, sans-serif` |
| fontSize (body) | `15px` |

**Computed — Card: Dark (container):**
| Property | Value |
|----------|-------|
| backgroundColor | `rgb(7, 55, 114)` |
| color | `rgb(255, 255, 255)` |
| padding (inner) | `30px` |

### Tabs

**Tab nav (computed):**
| Property | Value |
|----------|-------|
| color | `rgb(55, 55, 55)` |
| backgroundColor | `rgba(0, 0, 0, 0)` |
| fontFamily | `Montserrat, sans-serif` |
| fontSize | `15.4px` |
| fontWeight | `400` |
| lineHeight | `25.025px` |
| padding | `0px` |
| border | `0px none rgb(55, 55, 55)` |
| borderRadius | `0px` |
| textTransform | `none` |
| letterSpacing | `0.17325px` |
| boxShadow | `none` |
| margin | `0px` |
| display | `flex` |


**Tab link (default):**
| Property | Value |
|----------|-------|
| color | `rgb(71, 71, 71)` |
| backgroundColor | `rgba(0, 0, 0, 0)` |
| fontFamily | `Montserrat, sans-serif` |
| fontSize | `21px` |
| fontWeight | `800` |
| lineHeight | `28px` |
| padding | `0px` |
| border | `0px none rgb(71, 71, 71)` |
| borderRadius | `0px` |
| textTransform | `uppercase` |
| letterSpacing | `1.26px` |
| boxShadow | `none` |
| margin | `0px` |
| display | `inline-block` |


**Tab link (active / `.fsStateSelected`):**
| Property | Value |
|----------|-------|
| color | `rgb(71, 71, 71)` |
| backgroundColor | `rgba(0, 0, 0, 0)` |
| fontFamily | `Montserrat, sans-serif` |
| fontSize | `21px` |
| fontWeight | `800` |
| lineHeight | `28px` |
| padding | `0px` |
| border | `0px none rgb(71, 71, 71)` |
| borderRadius | `0px` |
| textTransform | `uppercase` |
| letterSpacing | `1.26px` |
| boxShadow | `none` |
| margin | `0px` |
| display | `inline-block` |


**Theme CSS:**
```css
.fsTabs .fsTabsNav li a { margin-top:0;font-weight:700;color:var(--primary-color, #023A6D)
margin-top:40px
font-size:1.125rem;line-height:1.5625rem }
.fsTabs .fsTabsNav li.fsStateSelected a { -webkit-box-shadow:inset 0 -4px 0 var(--secondary-color, #DEAF25);box-shadow:inset 0 -4px 0 var(--secondary-color, #DEAF25)
background:rgba(0,0,0,0);color:#131313 }
```

Sample tab labels on hub: Active Tab, Tab Label, Another Tab.

### Accordions

**Panel header:**
| Property | Value |
|----------|-------|
| color | `rgb(55, 55, 55)` |
| backgroundColor | `rgba(0, 0, 0, 0)` |
| fontFamily | `Montserrat, sans-serif` |
| fontSize | `17.325px` |
| fontWeight | `400` |
| lineHeight | `30.3187px` |
| padding | `0px` |
| border | `0px none rgb(55, 55, 55)` |
| borderRadius | `0px` |
| textTransform | `none` |
| letterSpacing | `0.17325px` |
| boxShadow | `none` |
| margin | `0px` |
| display | `block` |


**Panel title (h2):**
| Property | Value |
|----------|-------|
| color | `rgb(19, 19, 19)` |
| backgroundColor | `rgba(0, 0, 0, 0)` |
| fontFamily | `Montserrat, sans-serif` |
| fontSize | `15.4px` |
| fontWeight | `600` |
| lineHeight | `21.56px` |
| padding | `20px 20px 20px 51px` |
| border | `0px none rgb(19, 19, 19)` |
| borderRadius | `0px` |
| textTransform | `none` |
| letterSpacing | `0.154px` |
| boxShadow | `none` |
| margin | `0px` |
| display | `block` |


**Theme CSS:**
```css
.fsAccordion .fsPanel > header h2 {  }
```

### Styled Table

| Property | Value |
|----------|-------|
| color | `rgb(55, 55, 55)` |
| backgroundColor | `rgba(0, 0, 0, 0)` |
| fontFamily | `Montserrat, sans-serif` |
| fontSize | `17.325px` |
| fontWeight | `400` |
| lineHeight | `30.3187px` |
| padding | `0px` |
| paddingTop | `0px` |
| paddingRight | `0px` |
| paddingBottom | `0px` |
| paddingLeft | `0px` |
| margin | `0px` |
| border | `0px none rgb(128, 128, 128)` |
| borderColor | `rgb(128, 128, 128)` |
| borderWidth | `0px` |
| borderStyle | `none` |
| borderRadius | `0px` |
| textTransform | `none` |
| letterSpacing | `0.17325px` |
| boxShadow | `none` |
| outline | `rgb(55, 55, 55) none 0px` |
| maxWidth | `none` |
| width | `1180px` |
| minHeight | `0px` |
| display | `table` |
| textDecoration | `none solid rgb(55, 55, 55)` |

| Property | Value |
|----------|-------|
| color | `rgb(255, 255, 255)` |
| backgroundColor | `rgb(7, 55, 114)` |
| fontFamily | `Montserrat, sans-serif` |
| fontSize | `17.325px` |
| fontWeight | `700` |
| lineHeight | `24.0625px` |
| padding | `20px` |
| paddingTop | `20px` |
| paddingRight | `20px` |
| paddingBottom | `20px` |
| paddingLeft | `20px` |
| margin | `0px` |
| border | `0px none rgb(255, 255, 255)` |
| borderColor | `rgb(255, 255, 255)` |
| borderWidth | `0px` |
| borderStyle | `none` |
| borderRadius | `0px` |
| textTransform | `none` |
| letterSpacing | `0.17325px` |
| boxShadow | `none` |
| outline | `rgb(255, 255, 255) none 0px` |
| maxWidth | `none` |
| width | `753.578px` |
| minHeight | `0px` |
| display | `table-cell` |
| textDecoration | `none solid rgb(255, 255, 255)` |

| Property | Value |
|----------|-------|
| color | `rgb(55, 55, 55)` |
| backgroundColor | `rgb(229, 229, 229)` |
| fontFamily | `Montserrat, sans-serif` |
| fontSize | `17.325px` |
| fontWeight | `400` |
| lineHeight | `30.3187px` |
| padding | `13px 20px` |
| paddingTop | `13px` |
| paddingRight | `20px` |
| paddingBottom | `13px` |
| paddingLeft | `20px` |
| margin | `0px` |
| border | `0px none rgb(55, 55, 55)` |
| borderColor | `rgb(55, 55, 55)` |
| borderWidth | `0px` |
| borderStyle | `none` |
| borderRadius | `0px` |
| textTransform | `none` |
| letterSpacing | `0.17325px` |
| boxShadow | `none` |
| outline | `rgb(55, 55, 55) none 0px` |
| maxWidth | `none` |
| width | `753.578px` |
| minHeight | `0px` |
| display | `table-cell` |
| textDecoration | `none solid rgb(55, 55, 55)` |


### Posts List

_Posts list items use `.fsPostElement` / `.fsListItem` on hub._

### Calendar Item

_Calendar item styles from `.fsCalendar` elements on hub._

### Buttons and Links (Hub samples)

LISD theme uses `.button-1` through `.button-5` (Finalsite class names; **not** `.fs-button-*`). No `.button-6` exists in theme CSS. Modifiers: `.button-large`, `.full-width-button`, `.button-on-dark-1`, `.button-on-dark-2`.

##### `.button-2.full-width-button` — "BUTTON-2 + FULL-WIDTH-BUTTON"

| Property | Value |
|----------|-------|
| color | `rgb(55, 55, 55)` |
| backgroundColor | `rgb(241, 181, 28)` |
| fontFamily | `Montserrat, sans-serif` |
| fontSize | `12.5125px` |
| fontWeight | `700` |
| lineHeight | `17.5175px` |
| padding | `10px 24px` |
| border | `1px solid rgba(0, 0, 0, 0)` |
| borderRadius | `100px` |
| textTransform | `uppercase` |
| letterSpacing | `1.001px` |
| boxShadow | `none` |
| margin | `0px 0px 10px` |
| display | `inline-block` |
**Source CSS (`.button-2`):**
```css
.button-2 { display:inline-block;margin-bottom:10px;position:relative;padding:10px 24px;border:1px solid rgba(0,0,0,0) !important;background:var(--secondary-color, #DEAF25);color:#131313;font-family:"Montserrat",sans-serif;font-weight:500;font-size:14px;line-height:1.4;letter-spacing:0px;text-decoration:none;text-align:center;border-radius:100px;cursor:pointer;-webkit-transition:.3s all;transition:.3s all
position:relative;z-index:30;color:#373737 !important
text-transform:uppercase;font-weight:700 }
```

**Source CSS (`.full-width-button`):**
```css
.full-width-button { width:100%;max-width:unset
width:100%;max-width:unset
width:100%;max-width:unset }
```

##### `.button-1` — "Button-1"

| Property | Value |
|----------|-------|
| color | `rgb(255, 255, 255)` |
| backgroundColor | `rgb(7, 55, 114)` |
| fontFamily | `Montserrat, sans-serif` |
| fontSize | `12.5125px` |
| fontWeight | `600` |
| lineHeight | `17.5175px` |
| padding | `10px 24px` |
| border | `1px solid rgb(7, 55, 114)` |
| borderRadius | `100px` |
| textTransform | `none` |
| letterSpacing | `1.001px` |
| boxShadow | `none` |
| margin | `0px 0px 10px` |
| display | `inline-block` |
**Source CSS (`.button-1`):**
```css
.button-1 { display:inline-block;margin-bottom:10px;position:relative;padding:10px 24px;border:1px solid var(--primary-color, #023A6D) !important;background:var(--primary-color, #023A6D);color:#fff;font-family:"Montserrat",sans-serif;font-weight:500;font-size:14px;line-height:1.4;letter-spacing:0px;text-decoration:none;text-align:center;border-radius:100px;cursor:pointer;-webkit-transition:.3s all;transition:.3s all }
```

##### `.button-2` — "Button-2"

| Property | Value |
|----------|-------|
| color | `rgb(55, 55, 55)` |
| backgroundColor | `rgb(241, 181, 28)` |
| fontFamily | `Montserrat, sans-serif` |
| fontSize | `12.5125px` |
| fontWeight | `600` |
| lineHeight | `17.5175px` |
| padding | `10px 24px` |
| border | `1px solid rgba(0, 0, 0, 0)` |
| borderRadius | `100px` |
| textTransform | `none` |
| letterSpacing | `1.001px` |
| boxShadow | `none` |
| margin | `0px 0px 10px` |
| display | `inline-block` |
**Source CSS (`.button-2`):**
```css
.button-2 { display:inline-block;margin-bottom:10px;position:relative;padding:10px 24px;border:1px solid rgba(0,0,0,0) !important;background:var(--secondary-color, #DEAF25);color:#131313;font-family:"Montserrat",sans-serif;font-weight:500;font-size:14px;line-height:1.4;letter-spacing:0px;text-decoration:none;text-align:center;border-radius:100px;cursor:pointer;-webkit-transition:.3s all;transition:.3s all
position:relative;z-index:30;color:#373737 !important
text-transform:uppercase;font-weight:700 }
```

##### `.button-3` — "Button-3"

| Property | Value |
|----------|-------|
| color | `rgb(7, 55, 114)` |
| backgroundColor | `rgba(0, 0, 0, 0)` |
| fontFamily | `Montserrat, sans-serif` |
| fontSize | `12.5125px` |
| fontWeight | `600` |
| lineHeight | `17.5175px` |
| padding | `10px 24px` |
| border | `1px solid rgb(7, 55, 114)` |
| borderRadius | `100px` |
| textTransform | `none` |
| letterSpacing | `1.001px` |
| boxShadow | `none` |
| margin | `0px 0px 10px` |
| display | `inline-block` |
**Source CSS (`.button-3`):**
```css
.button-3 { display:inline-block;margin-bottom:10px;position:relative;padding:10px 24px;border:1px solid var(--primary-color, #023A6D) !important;background:rgba(0,0,0,0);color:var(--primary-color, #023A6D);font-family:"Montserrat",sans-serif;font-weight:500;font-size:14px;line-height:1.4;letter-spacing:0px;text-decoration:none;text-align:center;border-radius:100px;cursor:pointer;-webkit-transition:.3s all;transition:.3s all }
```

##### `.button-4` — "Button-4"

| Property | Value |
|----------|-------|
| color | `rgb(255, 255, 255)` |
| backgroundColor | `rgb(19, 19, 19)` |
| fontFamily | `Montserrat, sans-serif` |
| fontSize | `12.5125px` |
| fontWeight | `600` |
| lineHeight | `17.5175px` |
| padding | `10px 24px` |
| border | `1px solid rgb(19, 19, 19)` |
| borderRadius | `100px` |
| textTransform | `none` |
| letterSpacing | `1.001px` |
| boxShadow | `none` |
| margin | `0px 0px 10px` |
| display | `inline-block` |
**Source CSS (`.button-4`):**
```css
.button-4 { display:inline-block;margin-bottom:10px;position:relative;padding:10px 24px;border:1px solid #131313 !important;background:#131313;color:#fff;font-family:"Montserrat",sans-serif;font-weight:500;font-size:14px;line-height:1.4;letter-spacing:0px;text-decoration:none;text-align:center;border-radius:100px;cursor:pointer;-webkit-transition:.3s all;transition:.3s all }
```

##### `.button-5` — "Button-5"

| Property | Value |
|----------|-------|
| color | `rgb(19, 19, 19)` |
| backgroundColor | `rgba(0, 0, 0, 0)` |
| fontFamily | `Montserrat, sans-serif` |
| fontSize | `12.5125px` |
| fontWeight | `600` |
| lineHeight | `17.5175px` |
| padding | `10px 24px` |
| border | `1px solid rgb(19, 19, 19)` |
| borderRadius | `100px` |
| textTransform | `none` |
| letterSpacing | `1.001px` |
| boxShadow | `none` |
| margin | `0px 0px 10px` |
| display | `inline-block` |
**Source CSS (`.button-5`):**
```css
.button-5 { display:inline-block;margin-bottom:10px;position:relative;padding:10px 24px;border:1px solid #131313 !important;background:rgba(0,0,0,0);color:#131313;font-family:"Montserrat",sans-serif;font-weight:500;font-size:14px;line-height:1.4;letter-spacing:0px;text-decoration:none;text-align:center;border-radius:100px;cursor:pointer;-webkit-transition:.3s all;transition:.3s all }
```

##### `.button-on-dark-1` — "Button-on-dark-1"

| Property | Value |
|----------|-------|
| color | `rgb(255, 255, 255)` |
| backgroundColor | `rgba(0, 0, 0, 0)` |
| fontFamily | `Montserrat, sans-serif` |
| fontSize | `12.5125px` |
| fontWeight | `600` |
| lineHeight | `17.5175px` |
| padding | `10px 24px` |
| border | `1px solid rgb(255, 255, 255)` |
| borderRadius | `100px` |
| textTransform | `none` |
| letterSpacing | `1.001px` |
| boxShadow | `none` |
| margin | `0px 0px 10px` |
| display | `inline-block` |
**Source CSS (`.button-on-dark-1`):**
```css
.button-on-dark-1 { display:inline-block;margin-bottom:10px;position:relative;padding:10px 24px;border:1px solid #fff !important;background:rgba(0,0,0,0);color:#fff;font-family:"Montserrat",sans-serif;font-weight:500;font-size:14px;line-height:1.4;letter-spacing:0px;text-decoration:none;text-align:center;border-radius:100px;cursor:pointer;-webkit-transition:.3s all;transition:.3s all }
```

##### `.button-on-dark-2` — "Button-on-dark-2"

| Property | Value |
|----------|-------|
| color | `rgb(7, 55, 114)` |
| backgroundColor | `rgb(255, 255, 255)` |
| fontFamily | `Montserrat, sans-serif` |
| fontSize | `12.5125px` |
| fontWeight | `600` |
| lineHeight | `17.5175px` |
| padding | `10px 24px` |
| border | `1px solid rgb(255, 255, 255)` |
| borderRadius | `100px` |
| textTransform | `none` |
| letterSpacing | `1.001px` |
| boxShadow | `none` |
| margin | `0px 0px 10px` |
| display | `inline-block` |
**Source CSS (`.button-on-dark-2`):**
```css
.button-on-dark-2 { display:inline-block;margin-bottom:10px;position:relative;padding:10px 24px;border:1px solid #fff !important;background:#fff;color:var(--primary-color, #023A6D);font-family:"Montserrat",sans-serif;font-weight:500;font-size:14px;line-height:1.4;letter-spacing:0px;text-decoration:none;text-align:center;border-radius:100px;cursor:pointer;-webkit-transition:.3s all;transition:.3s all }
```

##### `.button-1.button-large.` — "BUTTON-1 + LARGE-BUTTON"

| Property | Value |
|----------|-------|
| color | `rgb(255, 255, 255)` |
| backgroundColor | `rgb(7, 55, 114)` |
| fontFamily | `Montserrat, sans-serif` |
| fontSize | `13.475px` |
| fontWeight | `700` |
| lineHeight | `18.865px` |
| padding | `24px` |
| border | `1px solid rgb(7, 55, 114)` |
| borderRadius | `100px` |
| textTransform | `uppercase` |
| letterSpacing | `1.3475px` |
| boxShadow | `none` |
| margin | `0px 0px 10px` |
| display | `inline-block` |
**Source CSS (`.button-1`):**
```css
.button-1 { display:inline-block;margin-bottom:10px;position:relative;padding:10px 24px;border:1px solid var(--primary-color, #023A6D) !important;background:var(--primary-color, #023A6D);color:#fff;font-family:"Montserrat",sans-serif;font-weight:500;font-size:14px;line-height:1.4;letter-spacing:0px;text-decoration:none;text-align:center;border-radius:100px;cursor:pointer;-webkit-transition:.3s all;transition:.3s all }
```

**Source CSS (`.button-large`):**
```css
.button-large { padding:24px !important;font-size:17px !important;font-weight:700 !important;text-transform:uppercase !important }
```

##### `.button-1.button-large..full-width-button` — "BUTTON-1 + LARGE-BUTTON + FULL-WIDTH-BUTTON"

| Property | Value |
|----------|-------|
| color | `rgb(255, 255, 255)` |
| backgroundColor | `rgb(7, 55, 114)` |
| fontFamily | `Montserrat, sans-serif` |
| fontSize | `13.475px` |
| fontWeight | `700` |
| lineHeight | `18.865px` |
| padding | `24px` |
| border | `1px solid rgb(7, 55, 114)` |
| borderRadius | `100px` |
| textTransform | `uppercase` |
| letterSpacing | `1.3475px` |
| boxShadow | `none` |
| margin | `0px 0px 10px` |
| display | `inline-block` |
**Source CSS (`.button-1`):**
```css
.button-1 { display:inline-block;margin-bottom:10px;position:relative;padding:10px 24px;border:1px solid var(--primary-color, #023A6D) !important;background:var(--primary-color, #023A6D);color:#fff;font-family:"Montserrat",sans-serif;font-weight:500;font-size:14px;line-height:1.4;letter-spacing:0px;text-decoration:none;text-align:center;border-radius:100px;cursor:pointer;-webkit-transition:.3s all;transition:.3s all }
```

**Source CSS (`.button-large`):**
```css
.button-large { padding:24px !important;font-size:17px !important;font-weight:700 !important;text-transform:uppercase !important }
```

**Source CSS (`.full-width-button`):**
```css
.full-width-button { width:100%;max-width:unset
width:100%;max-width:unset
width:100%;max-width:unset }
```



### Site Colors and Fonts

See global tokens above. Header (`#fsHeader`) uses primary brand background via `.header--holder`.

| Property | Value |
|----------|-------|
| color | `rgb(55, 55, 55)` |
| backgroundColor | `rgba(0, 0, 0, 0)` |
| fontFamily | `Montserrat, sans-serif` |
| fontSize | `17.325px` |
| fontWeight | `400` |
| lineHeight | `30.3187px` |
| padding | `0px` |
| paddingTop | `0px` |
| paddingRight | `0px` |
| paddingBottom | `0px` |
| paddingLeft | `0px` |
| margin | `0px` |
| border | `0px none rgb(55, 55, 55)` |
| borderColor | `rgb(55, 55, 55)` |
| borderWidth | `0px` |
| borderStyle | `none` |
| borderRadius | `0px` |
| textTransform | `none` |
| letterSpacing | `0.17325px` |
| boxShadow | `none` |
| outline | `rgb(55, 55, 55) none 0px` |
| maxWidth | `none` |
| width | `1400px` |
| minHeight | `0px` |
| display | `block` |
| textDecoration | `none solid rgb(55, 55, 55)` |


### Computed Styles (global selectors)

#### `body`

| Property | Value |
|----------|-------|
| color | `rgb(55, 55, 55)` |
| backgroundColor | `rgba(0, 0, 0, 0)` |
| fontFamily | `Montserrat, sans-serif` |
| fontSize | `17.325px` |
| fontWeight | `400` |
| lineHeight | `30.3187px` |
| padding | `0px` |
| paddingTop | `0px` |
| paddingRight | `0px` |
| paddingBottom | `0px` |
| paddingLeft | `0px` |
| margin | `0px` |
| border | `0px none rgb(55, 55, 55)` |
| borderColor | `rgb(55, 55, 55)` |
| borderWidth | `0px` |
| borderStyle | `none` |
| borderRadius | `0px` |
| textTransform | `none` |
| letterSpacing | `0.17325px` |
| boxShadow | `none` |
| outline | `rgb(55, 55, 55) none 0px` |
| maxWidth | `none` |
| width | `1400px` |
| minHeight | `0px` |
| display | `block` |
| textDecoration | `none solid rgb(55, 55, 55)` |

#### `h1`

| Property | Value |
|----------|-------|
| color | `rgb(7, 55, 114)` |
| backgroundColor | `rgba(0, 0, 0, 0)` |
| fontFamily | `Merriweather, serif` |
| fontSize | `42.35px` |
| fontWeight | `700` |
| lineHeight | `48.7025px` |
| padding | `0px` |
| paddingTop | `0px` |
| paddingRight | `0px` |
| paddingBottom | `0px` |
| paddingLeft | `0px` |
| margin | `0px 0px 20px` |
| border | `0px none rgb(7, 55, 114)` |
| borderColor | `rgb(7, 55, 114)` |
| borderWidth | `0px` |
| borderStyle | `none` |
| borderRadius | `0px` |
| textTransform | `none` |
| letterSpacing | `-0.847px` |
| boxShadow | `none` |
| outline | `rgb(7, 55, 114) none 0px` |
| maxWidth | `none` |
| width | `1180px` |
| minHeight | `0px` |
| display | `block` |
| textDecoration | `none solid rgb(7, 55, 114)` |

#### `h2`

| Property | Value |
|----------|-------|
| color | `rgb(7, 55, 114)` |
| backgroundColor | `rgba(0, 0, 0, 0)` |
| fontFamily | `Merriweather, serif` |
| fontSize | `30.8px` |
| fontWeight | `700` |
| lineHeight | `36.96px` |
| padding | `0px` |
| paddingTop | `0px` |
| paddingRight | `0px` |
| paddingBottom | `0px` |
| paddingLeft | `0px` |
| margin | `0px 0px 15.4px` |
| border | `0px none rgb(7, 55, 114)` |
| borderColor | `rgb(7, 55, 114)` |
| borderWidth | `0px` |
| borderStyle | `none` |
| borderRadius | `0px` |
| textTransform | `none` |
| letterSpacing | `-0.308px` |
| boxShadow | `none` |
| outline | `rgb(7, 55, 114) none 0px` |
| maxWidth | `none` |
| width | `auto` |
| minHeight | `0px` |
| display | `block` |
| textDecoration | `none solid rgb(7, 55, 114)` |

#### `h3`

| Property | Value |
|----------|-------|
| color | `rgb(7, 55, 114)` |
| backgroundColor | `rgba(0, 0, 0, 0)` |
| fontFamily | `Merriweather, serif` |
| fontSize | `23.1px` |
| fontWeight | `700` |
| lineHeight | `30.03px` |
| padding | `0px` |
| paddingTop | `0px` |
| paddingRight | `0px` |
| paddingBottom | `0px` |
| paddingLeft | `0px` |
| margin | `40px 0px 13.475px` |
| border | `0px none rgb(7, 55, 114)` |
| borderColor | `rgb(7, 55, 114)` |
| borderWidth | `0px` |
| borderStyle | `none` |
| borderRadius | `0px` |
| textTransform | `none` |
| letterSpacing | `-0.231px` |
| boxShadow | `none` |
| outline | `rgb(7, 55, 114) none 0px` |
| maxWidth | `none` |
| width | `840px` |
| minHeight | `0px` |
| display | `block` |
| textDecoration | `none solid rgb(7, 55, 114)` |

#### `h4`

| Property | Value |
|----------|-------|
| color | `rgb(19, 19, 19)` |
| backgroundColor | `rgba(0, 0, 0, 0)` |
| fontFamily | `Merriweather, serif` |
| fontSize | `19.25px` |
| fontWeight | `700` |
| lineHeight | `25.9875px` |
| padding | `0px` |
| paddingTop | `0px` |
| paddingRight | `0px` |
| paddingBottom | `0px` |
| paddingLeft | `0px` |
| margin | `40px 0px 20px` |
| border | `0px none rgb(19, 19, 19)` |
| borderColor | `rgb(19, 19, 19)` |
| borderWidth | `0px` |
| borderStyle | `none` |
| borderRadius | `0px` |
| textTransform | `none` |
| letterSpacing | `normal` |
| boxShadow | `none` |
| outline | `rgb(19, 19, 19) none 0px` |
| maxWidth | `none` |
| width | `840px` |
| minHeight | `0px` |
| display | `block` |
| textDecoration | `none solid rgb(19, 19, 19)` |

#### `h5`

| Property | Value |
|----------|-------|
| color | `rgb(19, 19, 19)` |
| backgroundColor | `rgba(0, 0, 0, 0)` |
| fontFamily | `Montserrat, sans-serif` |
| fontSize | `14.4375px` |
| fontWeight | `600` |
| lineHeight | `20.2125px` |
| padding | `0px` |
| paddingTop | `0px` |
| paddingRight | `0px` |
| paddingBottom | `0px` |
| paddingLeft | `0px` |
| margin | `40px 0px 15px` |
| border | `0px none rgb(19, 19, 19)` |
| borderColor | `rgb(19, 19, 19)` |
| borderWidth | `0px` |
| borderStyle | `none` |
| borderRadius | `0px` |
| textTransform | `uppercase` |
| letterSpacing | `0.5775px` |
| boxShadow | `none` |
| outline | `rgb(19, 19, 19) none 0px` |
| maxWidth | `none` |
| width | `840px` |
| minHeight | `0px` |
| display | `block` |
| textDecoration | `none solid rgb(19, 19, 19)` |

#### `h6`

| Property | Value |
|----------|-------|
| color | `rgb(19, 19, 19)` |
| backgroundColor | `rgba(0, 0, 0, 0)` |
| fontFamily | `Montserrat, sans-serif` |
| fontSize | `12.5125px` |
| fontWeight | `600` |
| lineHeight | `18.7687px` |
| padding | `0px` |
| paddingTop | `0px` |
| paddingRight | `0px` |
| paddingBottom | `0px` |
| paddingLeft | `0px` |
| margin | `40px 0px 15px` |
| border | `0px none rgb(19, 19, 19)` |
| borderColor | `rgb(19, 19, 19)` |
| borderWidth | `0px` |
| borderStyle | `none` |
| borderRadius | `0px` |
| textTransform | `uppercase` |
| letterSpacing | `0.625625px` |
| boxShadow | `none` |
| outline | `rgb(19, 19, 19) none 0px` |
| maxWidth | `none` |
| width | `840px` |
| minHeight | `0px` |
| display | `block` |
| textDecoration | `none solid rgb(19, 19, 19)` |

#### `.fsPageTitle`

| Property | Value |
|----------|-------|
| color | `rgb(7, 55, 114)` |
| backgroundColor | `rgba(0, 0, 0, 0)` |
| fontFamily | `Merriweather, serif` |
| fontSize | `42.35px` |
| fontWeight | `700` |
| lineHeight | `48.7025px` |
| padding | `0px` |
| paddingTop | `0px` |
| paddingRight | `0px` |
| paddingBottom | `0px` |
| paddingLeft | `0px` |
| margin | `0px 0px 20px` |
| border | `0px none rgb(7, 55, 114)` |
| borderColor | `rgb(7, 55, 114)` |
| borderWidth | `0px` |
| borderStyle | `none` |
| borderRadius | `0px` |
| textTransform | `none` |
| letterSpacing | `-0.847px` |
| boxShadow | `none` |
| outline | `rgb(7, 55, 114) none 0px` |
| maxWidth | `none` |
| width | `1180px` |
| minHeight | `0px` |
| display | `block` |
| textDecoration | `none solid rgb(7, 55, 114)` |

#### `#fsPageContent a`

| Property | Value |
|----------|-------|
| color | `rgb(7, 55, 114)` |
| backgroundColor | `rgba(0, 0, 0, 0)` |
| fontFamily | `Montserrat, sans-serif` |
| fontSize | `17.325px` |
| fontWeight | `500` |
| lineHeight | `31.185px` |
| padding | `0px` |
| paddingTop | `0px` |
| paddingRight | `0px` |
| paddingBottom | `0px` |
| paddingLeft | `0px` |
| margin | `0px` |
| border | `0px none rgb(7, 55, 114)` |
| borderColor | `rgb(7, 55, 114)` |
| borderWidth | `0px` |
| borderStyle | `none` |
| borderRadius | `0px` |
| textTransform | `none` |
| letterSpacing | `0.17325px` |
| boxShadow | `none` |
| outline | `rgb(7, 55, 114) none 0px` |
| maxWidth | `none` |
| width | `auto` |
| minHeight | `0px` |
| display | `inline` |
| textDecoration | `underline solid rgb(7, 55, 114)` |

#### `label`

| Property | Value |
|----------|-------|
| color | `rgb(55, 55, 55)` |
| backgroundColor | `rgba(0, 0, 0, 0)` |
| fontFamily | `Montserrat, sans-serif` |
| fontSize | `17.325px` |
| fontWeight | `400` |
| lineHeight | `30.3187px` |
| padding | `0px` |
| paddingTop | `0px` |
| paddingRight | `0px` |
| paddingBottom | `0px` |
| paddingLeft | `0px` |
| margin | `0px 8px 0px 0px` |
| border | `0px none rgb(55, 55, 55)` |
| borderColor | `rgb(55, 55, 55)` |
| borderWidth | `0px` |
| borderStyle | `none` |
| borderRadius | `0px` |
| textTransform | `none` |
| letterSpacing | `0.17325px` |
| boxShadow | `none` |
| outline | `rgb(55, 55, 55) none 0px` |
| maxWidth | `none` |
| width | `auto` |
| minHeight | `0px` |
| display | `none` |
| textDecoration | `none solid rgb(55, 55, 55)` |

#### `input`

| Property | Value |
|----------|-------|
| color | `rgb(255, 255, 255)` |
| backgroundColor | `rgb(0, 42, 80)` |
| fontFamily | `Montserrat, sans-serif` |
| fontSize | `14px` |
| fontWeight | `400` |
| lineHeight | `22.4px` |
| padding | `10px 30px 10px 31px` |
| paddingTop | `10px` |
| paddingRight | `30px` |
| paddingBottom | `10px` |
| paddingLeft | `31px` |
| margin | `0px` |
| border | `1px solid rgba(0, 0, 0, 0)` |
| borderColor | `rgba(0, 0, 0, 0)` |
| borderWidth | `1px` |
| borderStyle | `solid` |
| borderRadius | `3px` |
| textTransform | `none` |
| letterSpacing | `normal` |
| boxShadow | `none` |
| outline | `rgb(255, 255, 255) none 0px` |
| maxWidth | `100%` |
| width | `100%` |
| minHeight | `0px` |
| display | `block` |
| textDecoration | `none solid rgb(255, 255, 255)` |

#### `button`

| Property | Value |
|----------|-------|
| color | `rgba(0, 0, 0, 0)` |
| backgroundColor | `rgba(0, 0, 0, 0)` |
| fontFamily | `Montserrat, sans-serif` |
| fontSize | `17.325px` |
| fontWeight | `400` |
| lineHeight | `30.3187px` |
| padding | `1px 6px` |
| paddingTop | `1px` |
| paddingRight | `6px` |
| paddingBottom | `1px` |
| paddingLeft | `6px` |
| margin | `0px` |
| border | `0px none rgba(0, 0, 0, 0)` |
| borderColor | `rgba(0, 0, 0, 0)` |
| borderWidth | `0px` |
| borderStyle | `none` |
| borderRadius | `0px` |
| textTransform | `none` |
| letterSpacing | `normal` |
| boxShadow | `none` |
| outline | `rgba(0, 0, 0, 0) none 0px` |
| maxWidth | `none` |
| width | `24px` |
| minHeight | `0px` |
| display | `block` |
| textDecoration | `none solid rgba(0, 0, 0, 0)` |

#### `.button-1`

| Property | Value |
|----------|-------|
| color | `rgb(255, 255, 255)` |
| backgroundColor | `rgb(7, 55, 114)` |
| fontFamily | `Montserrat, sans-serif` |
| fontSize | `12.5125px` |
| fontWeight | `600` |
| lineHeight | `17.5175px` |
| padding | `10px 24px` |
| paddingTop | `10px` |
| paddingRight | `24px` |
| paddingBottom | `10px` |
| paddingLeft | `24px` |
| margin | `0px 0px 10px` |
| border | `1px solid rgb(7, 55, 114)` |
| borderColor | `rgb(7, 55, 114)` |
| borderWidth | `1px` |
| borderStyle | `solid` |
| borderRadius | `100px` |
| textTransform | `none` |
| letterSpacing | `1.001px` |
| boxShadow | `none` |
| outline | `rgb(255, 255, 255) none 0px` |
| maxWidth | `none` |
| width | `112.266px` |
| minHeight | `0px` |
| display | `inline-block` |
| textDecoration | `none solid rgb(255, 255, 255)` |

#### `.button-2`

| Property | Value |
|----------|-------|
| color | `rgb(55, 55, 55)` |
| backgroundColor | `rgb(241, 181, 28)` |
| fontFamily | `Montserrat, sans-serif` |
| fontSize | `12.5125px` |
| fontWeight | `600` |
| lineHeight | `17.5175px` |
| padding | `10px 24px` |
| paddingTop | `10px` |
| paddingRight | `24px` |
| paddingBottom | `10px` |
| paddingLeft | `24px` |
| margin | `0px 0px 10px` |
| border | `1px solid rgba(0, 0, 0, 0)` |
| borderColor | `rgba(0, 0, 0, 0)` |
| borderWidth | `1px` |
| borderStyle | `solid` |
| borderRadius | `100px` |
| textTransform | `none` |
| letterSpacing | `1.001px` |
| boxShadow | `none` |
| outline | `rgb(55, 55, 55) none 0px` |
| maxWidth | `none` |
| width | `auto` |
| minHeight | `0px` |
| display | `inline-block` |
| textDecoration | `none solid rgb(55, 55, 55)` |

#### `.button-3`

| Property | Value |
|----------|-------|
| color | `rgb(7, 55, 114)` |
| backgroundColor | `rgba(0, 0, 0, 0)` |
| fontFamily | `Montserrat, sans-serif` |
| fontSize | `12.5125px` |
| fontWeight | `600` |
| lineHeight | `17.5175px` |
| padding | `10px 24px` |
| paddingTop | `10px` |
| paddingRight | `24px` |
| paddingBottom | `10px` |
| paddingLeft | `24px` |
| margin | `0px 0px 10px` |
| border | `1px solid rgb(7, 55, 114)` |
| borderColor | `rgb(7, 55, 114)` |
| borderWidth | `1px` |
| borderStyle | `solid` |
| borderRadius | `100px` |
| textTransform | `none` |
| letterSpacing | `1.001px` |
| boxShadow | `none` |
| outline | `rgb(7, 55, 114) none 0px` |
| maxWidth | `none` |
| width | `114.766px` |
| minHeight | `0px` |
| display | `inline-block` |
| textDecoration | `none solid rgb(7, 55, 114)` |

#### `.button-4`

| Property | Value |
|----------|-------|
| color | `rgb(255, 255, 255)` |
| backgroundColor | `rgb(19, 19, 19)` |
| fontFamily | `Montserrat, sans-serif` |
| fontSize | `12.5125px` |
| fontWeight | `600` |
| lineHeight | `17.5175px` |
| padding | `10px 24px` |
| paddingTop | `10px` |
| paddingRight | `24px` |
| paddingBottom | `10px` |
| paddingLeft | `24px` |
| margin | `0px 0px 10px` |
| border | `1px solid rgb(19, 19, 19)` |
| borderColor | `rgb(19, 19, 19)` |
| borderWidth | `1px` |
| borderStyle | `solid` |
| borderRadius | `100px` |
| textTransform | `none` |
| letterSpacing | `1.001px` |
| boxShadow | `none` |
| outline | `rgb(255, 255, 255) none 0px` |
| maxWidth | `none` |
| width | `116.297px` |
| minHeight | `0px` |
| display | `inline-block` |
| textDecoration | `none solid rgb(255, 255, 255)` |

#### `.button-5`

| Property | Value |
|----------|-------|
| color | `rgb(19, 19, 19)` |
| backgroundColor | `rgba(0, 0, 0, 0)` |
| fontFamily | `Montserrat, sans-serif` |
| fontSize | `12.5125px` |
| fontWeight | `600` |
| lineHeight | `17.5175px` |
| padding | `10px 24px` |
| paddingTop | `10px` |
| paddingRight | `24px` |
| paddingBottom | `10px` |
| paddingLeft | `24px` |
| margin | `0px 0px 10px` |
| border | `1px solid rgb(19, 19, 19)` |
| borderColor | `rgb(19, 19, 19)` |
| borderWidth | `1px` |
| borderStyle | `solid` |
| borderRadius | `100px` |
| textTransform | `none` |
| letterSpacing | `1.001px` |
| boxShadow | `none` |
| outline | `rgb(19, 19, 19) none 0px` |
| maxWidth | `none` |
| width | `115.047px` |
| minHeight | `0px` |
| display | `inline-block` |
| textDecoration | `none solid rgb(19, 19, 19)` |

#### `.button-on-dark-1`

| Property | Value |
|----------|-------|
| color | `rgb(255, 255, 255)` |
| backgroundColor | `rgba(0, 0, 0, 0)` |
| fontFamily | `Montserrat, sans-serif` |
| fontSize | `12.5125px` |
| fontWeight | `600` |
| lineHeight | `17.5175px` |
| padding | `10px 24px` |
| paddingTop | `10px` |
| paddingRight | `24px` |
| paddingBottom | `10px` |
| paddingLeft | `24px` |
| margin | `0px 0px 10px` |
| border | `1px solid rgb(255, 255, 255)` |
| borderColor | `rgb(255, 255, 255)` |
| borderWidth | `1px` |
| borderStyle | `solid` |
| borderRadius | `100px` |
| textTransform | `none` |
| letterSpacing | `1.001px` |
| boxShadow | `none` |
| outline | `rgb(255, 255, 255) none 0px` |
| maxWidth | `none` |
| width | `175.797px` |
| minHeight | `0px` |
| display | `inline-block` |
| textDecoration | `none solid rgb(255, 255, 255)` |

#### `.button-on-dark-2`

| Property | Value |
|----------|-------|
| color | `rgb(7, 55, 114)` |
| backgroundColor | `rgb(255, 255, 255)` |
| fontFamily | `Montserrat, sans-serif` |
| fontSize | `12.5125px` |
| fontWeight | `600` |
| lineHeight | `17.5175px` |
| padding | `10px 24px` |
| paddingTop | `10px` |
| paddingRight | `24px` |
| paddingBottom | `10px` |
| paddingLeft | `24px` |
| margin | `0px 0px 10px` |
| border | `1px solid rgb(255, 255, 255)` |
| borderColor | `rgb(255, 255, 255)` |
| borderWidth | `1px` |
| borderStyle | `solid` |
| borderRadius | `100px` |
| textTransform | `none` |
| letterSpacing | `1.001px` |
| boxShadow | `none` |
| outline | `rgb(7, 55, 114) none 0px` |
| maxWidth | `none` |
| width | `178.375px` |
| minHeight | `0px` |
| display | `inline-block` |
| textDecoration | `none solid rgb(7, 55, 114)` |

#### `.button-large`

| Property | Value |
|----------|-------|
| color | `rgb(255, 255, 255)` |
| backgroundColor | `rgb(7, 55, 114)` |
| fontFamily | `Montserrat, sans-serif` |
| fontSize | `13.475px` |
| fontWeight | `700` |
| lineHeight | `18.865px` |
| padding | `24px` |
| paddingTop | `24px` |
| paddingRight | `24px` |
| paddingBottom | `24px` |
| paddingLeft | `24px` |
| margin | `0px 0px 10px` |
| border | `1px solid rgb(7, 55, 114)` |
| borderColor | `rgb(7, 55, 114)` |
| borderWidth | `1px` |
| borderStyle | `solid` |
| borderRadius | `100px` |
| textTransform | `uppercase` |
| letterSpacing | `1.3475px` |
| boxShadow | `none` |
| outline | `rgb(255, 255, 255) none 0px` |
| maxWidth | `none` |
| width | `278.922px` |
| minHeight | `0px` |
| display | `inline-block` |
| textDecoration | `none solid rgb(255, 255, 255)` |

#### `.full-width-button`

| Property | Value |
|----------|-------|
| color | `rgb(55, 55, 55)` |
| backgroundColor | `rgb(241, 181, 28)` |
| fontFamily | `Montserrat, sans-serif` |
| fontSize | `12.5125px` |
| fontWeight | `700` |
| lineHeight | `17.5175px` |
| padding | `10px 24px` |
| paddingTop | `10px` |
| paddingRight | `24px` |
| paddingBottom | `10px` |
| paddingLeft | `24px` |
| margin | `0px 0px 10px` |
| border | `1px solid rgba(0, 0, 0, 0)` |
| borderColor | `rgba(0, 0, 0, 0)` |
| borderWidth | `1px` |
| borderStyle | `solid` |
| borderRadius | `100px` |
| textTransform | `uppercase` |
| letterSpacing | `1.001px` |
| boxShadow | `none` |
| outline | `rgb(55, 55, 55) none 0px` |
| maxWidth | `none` |
| width | `510px` |
| minHeight | `0px` |
| display | `inline-block` |
| textDecoration | `none solid rgb(55, 55, 55)` |

#### `#fsHeader`

| Property | Value |
|----------|-------|
| color | `rgb(55, 55, 55)` |
| backgroundColor | `rgba(0, 0, 0, 0)` |
| fontFamily | `Montserrat, sans-serif` |
| fontSize | `17.325px` |
| fontWeight | `400` |
| lineHeight | `30.3187px` |
| padding | `0px` |
| paddingTop | `0px` |
| paddingRight | `0px` |
| paddingBottom | `0px` |
| paddingLeft | `0px` |
| margin | `0px` |
| border | `0px none rgb(55, 55, 55)` |
| borderColor | `rgb(55, 55, 55)` |
| borderWidth | `0px` |
| borderStyle | `none` |
| borderRadius | `0px` |
| textTransform | `none` |
| letterSpacing | `0.17325px` |
| boxShadow | `none` |
| outline | `rgb(55, 55, 55) none 0px` |
| maxWidth | `none` |
| width | `1400px` |
| minHeight | `0px` |
| display | `block` |
| textDecoration | `none solid rgb(55, 55, 55)` |

#### `blockquote`

| Property | Value |
|----------|-------|
| color | `rgb(19, 19, 19)` |
| backgroundColor | `rgba(0, 0, 0, 0)` |
| fontFamily | `Merriweather, serif` |
| fontSize | `22px` |
| fontWeight | `300` |
| lineHeight | `38.5px` |
| padding | `0px 0px 20px` |
| paddingTop | `0px` |
| paddingRight | `0px` |
| paddingBottom | `20px` |
| paddingLeft | `0px` |
| margin | `50px 0px` |
| border | `` |
| borderColor | `rgb(19, 19, 19) rgb(19, 19, 19) rgb(207, 207, 207)` |
| borderWidth | `0px 0px 1px` |
| borderStyle | `none none solid` |
| borderRadius | `0px` |
| textTransform | `none` |
| letterSpacing | `0.22px` |
| boxShadow | `none` |
| outline | `rgb(19, 19, 19) none 0px` |
| maxWidth | `none` |
| width | `840px` |
| minHeight | `0px` |
| display | `block` |
| textDecoration | `none solid rgb(19, 19, 19)` |

#### `table`

| Property | Value |
|----------|-------|
| color | `rgb(55, 55, 55)` |
| backgroundColor | `rgba(0, 0, 0, 0)` |
| fontFamily | `Montserrat, sans-serif` |
| fontSize | `17.325px` |
| fontWeight | `400` |
| lineHeight | `30.3187px` |
| padding | `0px` |
| paddingTop | `0px` |
| paddingRight | `0px` |
| paddingBottom | `0px` |
| paddingLeft | `0px` |
| margin | `0px` |
| border | `0px none rgb(128, 128, 128)` |
| borderColor | `rgb(128, 128, 128)` |
| borderWidth | `0px` |
| borderStyle | `none` |
| borderRadius | `0px` |
| textTransform | `none` |
| letterSpacing | `0.17325px` |
| boxShadow | `none` |
| outline | `rgb(55, 55, 55) none 0px` |
| maxWidth | `none` |
| width | `1180px` |
| minHeight | `0px` |
| display | `table` |
| textDecoration | `none solid rgb(55, 55, 55)` |

#### `th`

| Property | Value |
|----------|-------|
| color | `rgb(255, 255, 255)` |
| backgroundColor | `rgb(7, 55, 114)` |
| fontFamily | `Montserrat, sans-serif` |
| fontSize | `17.325px` |
| fontWeight | `700` |
| lineHeight | `24.0625px` |
| padding | `20px` |
| paddingTop | `20px` |
| paddingRight | `20px` |
| paddingBottom | `20px` |
| paddingLeft | `20px` |
| margin | `0px` |
| border | `0px none rgb(255, 255, 255)` |
| borderColor | `rgb(255, 255, 255)` |
| borderWidth | `0px` |
| borderStyle | `none` |
| borderRadius | `0px` |
| textTransform | `none` |
| letterSpacing | `0.17325px` |
| boxShadow | `none` |
| outline | `rgb(255, 255, 255) none 0px` |
| maxWidth | `none` |
| width | `753.578px` |
| minHeight | `0px` |
| display | `table-cell` |
| textDecoration | `none solid rgb(255, 255, 255)` |

#### `td`

| Property | Value |
|----------|-------|
| color | `rgb(55, 55, 55)` |
| backgroundColor | `rgb(229, 229, 229)` |
| fontFamily | `Montserrat, sans-serif` |
| fontSize | `17.325px` |
| fontWeight | `400` |
| lineHeight | `30.3187px` |
| padding | `13px 20px` |
| paddingTop | `13px` |
| paddingRight | `20px` |
| paddingBottom | `13px` |
| paddingLeft | `20px` |
| margin | `0px` |
| border | `0px none rgb(55, 55, 55)` |
| borderColor | `rgb(55, 55, 55)` |
| borderWidth | `0px` |
| borderStyle | `none` |
| borderRadius | `0px` |
| textTransform | `none` |
| letterSpacing | `0.17325px` |
| boxShadow | `none` |
| outline | `rgb(55, 55, 55) none 0px` |
| maxWidth | `none` |
| width | `753.578px` |
| minHeight | `0px` |
| display | `table-cell` |
| textDecoration | `none solid rgb(55, 55, 55)` |

#### `.fsTabsNav`

| Property | Value |
|----------|-------|
| color | `rgb(55, 55, 55)` |
| backgroundColor | `rgba(0, 0, 0, 0)` |
| fontFamily | `Montserrat, sans-serif` |
| fontSize | `15.4px` |
| fontWeight | `400` |
| lineHeight | `25.025px` |
| padding | `0px` |
| paddingTop | `0px` |
| paddingRight | `0px` |
| paddingBottom | `0px` |
| paddingLeft | `0px` |
| margin | `0px` |
| border | `0px none rgb(55, 55, 55)` |
| borderColor | `rgb(55, 55, 55)` |
| borderWidth | `0px` |
| borderStyle | `none` |
| borderRadius | `0px` |
| textTransform | `none` |
| letterSpacing | `0.17325px` |
| boxShadow | `none` |
| outline | `rgb(55, 55, 55) none 0px` |
| maxWidth | `none` |
| width | `1080px` |
| minHeight | `0px` |
| display | `flex` |
| textDecoration | `none solid rgb(55, 55, 55)` |

#### `.fsAccordion .fsPanel > header`

| Property | Value |
|----------|-------|
| color | `rgb(55, 55, 55)` |
| backgroundColor | `rgba(0, 0, 0, 0)` |
| fontFamily | `Montserrat, sans-serif` |
| fontSize | `17.325px` |
| fontWeight | `400` |
| lineHeight | `30.3187px` |
| padding | `0px` |
| paddingTop | `0px` |
| paddingRight | `0px` |
| paddingBottom | `0px` |
| paddingLeft | `0px` |
| margin | `0px` |
| border | `0px none rgb(55, 55, 55)` |
| borderColor | `rgb(55, 55, 55)` |
| borderWidth | `0px` |
| borderStyle | `none` |
| borderRadius | `0px` |
| textTransform | `none` |
| letterSpacing | `0.17325px` |
| boxShadow | `none` |
| outline | `rgb(55, 55, 55) none 0px` |
| maxWidth | `none` |
| width | `1180px` |
| minHeight | `0px` |
| display | `block` |
| textDecoration | `none solid rgb(55, 55, 55)` |



---

## QA Testing

- **URL:** https://www.lisd.net/production2/qa-testing
- **Extracted:** 2026-06-23

### Content

# QA Testing

- Content Testing

- Button Testing

### :root CSS Variables

| Variable | Value |
|----------|-------|
| `--primary-color-h` | `213.08` |
| `--primary-color-s` | `88.43%` |
| `--primary-color-l` | `23.73%` |
| `--primary-color-hsl` | `var(--primary-color-h), var(--primary-color-s), var(--primary-color-l)` |
| `--primary-color` | `#073772` |
| `--secondary-color-h` | `43.1` |
| `--secondary-color-s` | `88.38%` |
| `--secondary-color-l` | `52.75%` |
| `--secondary-color-hsl` | `var(--secondary-color-h), var(--secondary-color-s), var(--secondary-color-l)` |
| `--secondary-color` | `#f1b51c` |


### Computed Styles

#### `body`

| Property | Value |
|----------|-------|
| color | `rgb(55, 55, 55)` |
| backgroundColor | `rgba(0, 0, 0, 0)` |
| fontFamily | `Montserrat, sans-serif` |
| fontSize | `17.325px` |
| fontWeight | `400` |
| lineHeight | `30.3187px` |
| padding | `0px` |
| paddingTop | `0px` |
| paddingRight | `0px` |
| paddingBottom | `0px` |
| paddingLeft | `0px` |
| margin | `0px` |
| border | `0px none rgb(55, 55, 55)` |
| borderColor | `rgb(55, 55, 55)` |
| borderWidth | `0px` |
| borderStyle | `none` |
| borderRadius | `0px` |
| textTransform | `none` |
| letterSpacing | `0.17325px` |
| boxShadow | `none` |
| outline | `rgb(55, 55, 55) none 0px` |
| maxWidth | `none` |
| width | `1400px` |
| minHeight | `0px` |
| display | `block` |
| textDecoration | `none solid rgb(55, 55, 55)` |

#### `h1`

| Property | Value |
|----------|-------|
| color | `rgb(7, 55, 114)` |
| backgroundColor | `rgba(0, 0, 0, 0)` |
| fontFamily | `Merriweather, serif` |
| fontSize | `42.35px` |
| fontWeight | `700` |
| lineHeight | `48.7025px` |
| padding | `0px` |
| paddingTop | `0px` |
| paddingRight | `0px` |
| paddingBottom | `0px` |
| paddingLeft | `0px` |
| margin | `0px 0px 20px` |
| border | `0px none rgb(7, 55, 114)` |
| borderColor | `rgb(7, 55, 114)` |
| borderWidth | `0px` |
| borderStyle | `none` |
| borderRadius | `0px` |
| textTransform | `none` |
| letterSpacing | `-0.847px` |
| boxShadow | `none` |
| outline | `rgb(7, 55, 114) none 0px` |
| maxWidth | `none` |
| width | `1180px` |
| minHeight | `0px` |
| display | `block` |
| textDecoration | `none solid rgb(7, 55, 114)` |

#### `h2`

| Property | Value |
|----------|-------|
| color | `rgb(7, 55, 114)` |
| backgroundColor | `rgba(0, 0, 0, 0)` |
| fontFamily | `Merriweather, serif` |
| fontSize | `30.8px` |
| fontWeight | `700` |
| lineHeight | `36.96px` |
| padding | `0px` |
| paddingTop | `0px` |
| paddingRight | `0px` |
| paddingBottom | `0px` |
| paddingLeft | `0px` |
| margin | `0px 0px 15.4px` |
| border | `0px none rgb(7, 55, 114)` |
| borderColor | `rgb(7, 55, 114)` |
| borderWidth | `0px` |
| borderStyle | `none` |
| borderRadius | `0px` |
| textTransform | `none` |
| letterSpacing | `-0.308px` |
| boxShadow | `none` |
| outline | `rgb(7, 55, 114) none 0px` |
| maxWidth | `none` |
| width | `auto` |
| minHeight | `0px` |
| display | `block` |
| textDecoration | `none solid rgb(7, 55, 114)` |

#### `.fsPageTitle`

| Property | Value |
|----------|-------|
| color | `rgb(7, 55, 114)` |
| backgroundColor | `rgba(0, 0, 0, 0)` |
| fontFamily | `Merriweather, serif` |
| fontSize | `42.35px` |
| fontWeight | `700` |
| lineHeight | `48.7025px` |
| padding | `0px` |
| paddingTop | `0px` |
| paddingRight | `0px` |
| paddingBottom | `0px` |
| paddingLeft | `0px` |
| margin | `0px 0px 20px` |
| border | `0px none rgb(7, 55, 114)` |
| borderColor | `rgb(7, 55, 114)` |
| borderWidth | `0px` |
| borderStyle | `none` |
| borderRadius | `0px` |
| textTransform | `none` |
| letterSpacing | `-0.847px` |
| boxShadow | `none` |
| outline | `rgb(7, 55, 114) none 0px` |
| maxWidth | `none` |
| width | `1180px` |
| minHeight | `0px` |
| display | `block` |
| textDecoration | `none solid rgb(7, 55, 114)` |

#### `#fsPageContent a`

| Property | Value |
|----------|-------|
| color | `rgb(7, 55, 114)` |
| backgroundColor | `rgba(0, 0, 0, 0)` |
| fontFamily | `Montserrat, sans-serif` |
| fontSize | `17.325px` |
| fontWeight | `500` |
| lineHeight | `30.3187px` |
| padding | `10px 0px` |
| paddingTop | `10px` |
| paddingRight | `0px` |
| paddingBottom | `10px` |
| paddingLeft | `0px` |
| margin | `0px` |
| border | `0px none rgb(7, 55, 114)` |
| borderColor | `rgb(7, 55, 114)` |
| borderWidth | `0px` |
| borderStyle | `none` |
| borderRadius | `0px` |
| textTransform | `none` |
| letterSpacing | `0.17325px` |
| boxShadow | `none` |
| outline | `rgb(7, 55, 114) none 0px` |
| maxWidth | `none` |
| width | `1180px` |
| minHeight | `0px` |
| display | `block` |
| textDecoration | `underline solid rgb(7, 55, 114)` |

#### `label`

| Property | Value |
|----------|-------|
| color | `rgb(55, 55, 55)` |
| backgroundColor | `rgba(0, 0, 0, 0)` |
| fontFamily | `Montserrat, sans-serif` |
| fontSize | `17.325px` |
| fontWeight | `400` |
| lineHeight | `30.3187px` |
| padding | `0px` |
| paddingTop | `0px` |
| paddingRight | `0px` |
| paddingBottom | `0px` |
| paddingLeft | `0px` |
| margin | `0px 8px 0px 0px` |
| border | `0px none rgb(55, 55, 55)` |
| borderColor | `rgb(55, 55, 55)` |
| borderWidth | `0px` |
| borderStyle | `none` |
| borderRadius | `0px` |
| textTransform | `none` |
| letterSpacing | `0.17325px` |
| boxShadow | `none` |
| outline | `rgb(55, 55, 55) none 0px` |
| maxWidth | `none` |
| width | `auto` |
| minHeight | `0px` |
| display | `none` |
| textDecoration | `none solid rgb(55, 55, 55)` |

#### `input`

| Property | Value |
|----------|-------|
| color | `rgb(255, 255, 255)` |
| backgroundColor | `rgb(0, 42, 80)` |
| fontFamily | `Montserrat, sans-serif` |
| fontSize | `14px` |
| fontWeight | `400` |
| lineHeight | `22.4px` |
| padding | `10px 30px 10px 31px` |
| paddingTop | `10px` |
| paddingRight | `30px` |
| paddingBottom | `10px` |
| paddingLeft | `31px` |
| margin | `0px` |
| border | `1px solid rgba(0, 0, 0, 0)` |
| borderColor | `rgba(0, 0, 0, 0)` |
| borderWidth | `1px` |
| borderStyle | `solid` |
| borderRadius | `3px` |
| textTransform | `none` |
| letterSpacing | `normal` |
| boxShadow | `none` |
| outline | `rgb(255, 255, 255) none 0px` |
| maxWidth | `100%` |
| width | `100%` |
| minHeight | `0px` |
| display | `block` |
| textDecoration | `none solid rgb(255, 255, 255)` |

#### `button`

| Property | Value |
|----------|-------|
| color | `rgba(0, 0, 0, 0)` |
| backgroundColor | `rgba(0, 0, 0, 0)` |
| fontFamily | `Montserrat, sans-serif` |
| fontSize | `17.325px` |
| fontWeight | `400` |
| lineHeight | `30.3187px` |
| padding | `1px 6px` |
| paddingTop | `1px` |
| paddingRight | `6px` |
| paddingBottom | `1px` |
| paddingLeft | `6px` |
| margin | `0px` |
| border | `0px none rgba(0, 0, 0, 0)` |
| borderColor | `rgba(0, 0, 0, 0)` |
| borderWidth | `0px` |
| borderStyle | `none` |
| borderRadius | `0px` |
| textTransform | `none` |
| letterSpacing | `normal` |
| boxShadow | `none` |
| outline | `rgba(0, 0, 0, 0) none 0px` |
| maxWidth | `none` |
| width | `24px` |
| minHeight | `0px` |
| display | `block` |
| textDecoration | `none solid rgba(0, 0, 0, 0)` |

#### `.button-2`

| Property | Value |
|----------|-------|
| color | `rgb(55, 55, 55)` |
| backgroundColor | `rgb(241, 181, 28)` |
| fontFamily | `Montserrat, sans-serif` |
| fontSize | `12.5125px` |
| fontWeight | `600` |
| lineHeight | `17.5175px` |
| padding | `10px 24px` |
| paddingTop | `10px` |
| paddingRight | `24px` |
| paddingBottom | `10px` |
| paddingLeft | `24px` |
| margin | `0px 0px 10px` |
| border | `1px solid rgba(0, 0, 0, 0)` |
| borderColor | `rgba(0, 0, 0, 0)` |
| borderWidth | `1px` |
| borderStyle | `solid` |
| borderRadius | `100px` |
| textTransform | `none` |
| letterSpacing | `1.001px` |
| boxShadow | `none` |
| outline | `rgb(55, 55, 55) none 0px` |
| maxWidth | `none` |
| width | `auto` |
| minHeight | `0px` |
| display | `inline-block` |
| textDecoration | `none solid rgb(55, 55, 55)` |

#### `#fsHeader`

| Property | Value |
|----------|-------|
| color | `rgb(55, 55, 55)` |
| backgroundColor | `rgba(0, 0, 0, 0)` |
| fontFamily | `Montserrat, sans-serif` |
| fontSize | `17.325px` |
| fontWeight | `400` |
| lineHeight | `30.3187px` |
| padding | `0px 0px 80px` |
| paddingTop | `0px` |
| paddingRight | `0px` |
| paddingBottom | `80px` |
| paddingLeft | `0px` |
| margin | `0px` |
| border | `0px none rgb(55, 55, 55)` |
| borderColor | `rgb(55, 55, 55)` |
| borderWidth | `0px` |
| borderStyle | `none` |
| borderRadius | `0px` |
| textTransform | `none` |
| letterSpacing | `0.17325px` |
| boxShadow | `none` |
| outline | `rgb(55, 55, 55) none 0px` |
| maxWidth | `none` |
| width | `1400px` |
| minHeight | `0px` |
| display | `block` |
| textDecoration | `none solid rgb(55, 55, 55)` |

#### `.fsTabsNav`

| Property | Value |
|----------|-------|
| color | `rgb(55, 55, 55)` |
| backgroundColor | `rgba(0, 0, 0, 0)` |
| fontFamily | `Montserrat, sans-serif` |
| fontSize | `15.4px` |
| fontWeight | `400` |
| lineHeight | `25.025px` |
| padding | `0px` |
| paddingTop | `0px` |
| paddingRight | `0px` |
| paddingBottom | `0px` |
| paddingLeft | `0px` |
| margin | `0px` |
| border | `0px none rgb(55, 55, 55)` |
| borderColor | `rgb(55, 55, 55)` |
| borderWidth | `0px` |
| borderStyle | `none` |
| borderRadius | `0px` |
| textTransform | `none` |
| letterSpacing | `0.17325px` |
| boxShadow | `none` |
| outline | `rgb(55, 55, 55) none 0px` |
| maxWidth | `none` |
| width | `1080px` |
| minHeight | `0px` |
| display | `flex` |
| textDecoration | `none solid rgb(55, 55, 55)` |



---

## Button Testing

- **URL:** https://www.lisd.net/production2/qa-testing/qa-testing-buttons
- **Extracted:** 2026-06-23

### Content

This page catalogs **system/component buttons** (form submit, search, calendar, login, etc.) — not the marketing `.button-1`–`.button-5` pill set (those live on the hub).

# Button Testing

#### Form Submit

#### Constituent Search

#### Calendar Grid Deselect

#### Calendar Grid Mobile Back

#### Calendar Load More

#### Posts Load More

#### Search

#### Vimeo

- View on vimeo

#### Feeds

#### Login Forms

##### LOGIN

##### FORGOT

##### NEW

##### RESET

##### PASSKEY

##### LOGOUT

Logout

#### Form Submit

#### Constituent Search

#### Calendar Grid Deselect

#### Calendar Grid Mobile Back

#### Calendar Load More

#### Posts Load More

#### Search

#### Vimeo

- View on vimeo

#### Feeds

#### Login Forms

##### LOGIN

##### FORGOT

##### NEW

##### RESET

##### PASSKEY

##### LOGOUT

Logout

### Brand button classes (`.button-1` – `.button-5`)

Documented from hub live samples + `main.css` source rules:

| Class | Background | Text | Border | Border-radius | Font |
|-------|------------|------|--------|---------------|------|
| `.button-1` | `var(--primary-color)` | #fff | 1px primary | 100px (pill) | Montserrat 500 14px |
| `.button-2` | `var(--secondary-color)` | #131313 | transparent | 100px | Montserrat 500 14px |
| `.button-3` | transparent | primary | 1px primary | 100px | Montserrat 500 14px |
| `.button-4` | #131313 | #fff | 1px #131313 | 100px | Montserrat 500 14px |
| `.button-5` | transparent | #131313 | 1px #131313 | 100px | Montserrat 500 14px |
| `.button-on-dark-1` | transparent | #fff | 1px #fff | 100px | Montserrat 500 14px |
| `.button-on-dark-2` | #fff | primary | 1px #fff | 100px | Montserrat 500 14px |
| `.button-large` | — | — | — | — | 17px, weight 700, uppercase |
| `.full-width-button` | — | — | — | width 100% | — |

#### `.button-1` — computed (hub sample)

| Property | Value |
|----------|-------|
| color | `rgb(255, 255, 255)` |
| backgroundColor | `rgb(7, 55, 114)` |
| fontFamily | `Montserrat, sans-serif` |
| fontSize | `12.5125px` |
| fontWeight | `600` |
| lineHeight | `17.5175px` |
| padding | `10px 24px` |
| border | `1px solid rgb(7, 55, 114)` |
| borderRadius | `100px` |
| textTransform | `none` |
| letterSpacing | `1.001px` |
| boxShadow | `none` |
| margin | `0px 0px 10px` |
| display | `inline-block` |


#### `.button-2` — computed (hub sample)

| Property | Value |
|----------|-------|
| color | `rgb(55, 55, 55)` |
| backgroundColor | `rgb(241, 181, 28)` |
| fontFamily | `Montserrat, sans-serif` |
| fontSize | `12.5125px` |
| fontWeight | `600` |
| lineHeight | `17.5175px` |
| padding | `10px 24px` |
| border | `1px solid rgba(0, 0, 0, 0)` |
| borderRadius | `100px` |
| textTransform | `none` |
| letterSpacing | `1.001px` |
| boxShadow | `none` |
| margin | `0px 0px 10px` |
| display | `inline-block` |


#### `.button-3` — computed (hub sample)

| Property | Value |
|----------|-------|
| color | `rgb(7, 55, 114)` |
| backgroundColor | `rgba(0, 0, 0, 0)` |
| fontFamily | `Montserrat, sans-serif` |
| fontSize | `12.5125px` |
| fontWeight | `600` |
| lineHeight | `17.5175px` |
| padding | `10px 24px` |
| border | `1px solid rgb(7, 55, 114)` |
| borderRadius | `100px` |
| textTransform | `none` |
| letterSpacing | `1.001px` |
| boxShadow | `none` |
| margin | `0px 0px 10px` |
| display | `inline-block` |


#### `.button-4` — computed (hub sample)

| Property | Value |
|----------|-------|
| color | `rgb(255, 255, 255)` |
| backgroundColor | `rgb(19, 19, 19)` |
| fontFamily | `Montserrat, sans-serif` |
| fontSize | `12.5125px` |
| fontWeight | `600` |
| lineHeight | `17.5175px` |
| padding | `10px 24px` |
| border | `1px solid rgb(19, 19, 19)` |
| borderRadius | `100px` |
| textTransform | `none` |
| letterSpacing | `1.001px` |
| boxShadow | `none` |
| margin | `0px 0px 10px` |
| display | `inline-block` |


#### `.button-5` — computed (hub sample)

| Property | Value |
|----------|-------|
| color | `rgb(19, 19, 19)` |
| backgroundColor | `rgba(0, 0, 0, 0)` |
| fontFamily | `Montserrat, sans-serif` |
| fontSize | `12.5125px` |
| fontWeight | `600` |
| lineHeight | `17.5175px` |
| padding | `10px 24px` |
| border | `1px solid rgb(19, 19, 19)` |
| borderRadius | `100px` |
| textTransform | `none` |
| letterSpacing | `1.001px` |
| boxShadow | `none` |
| margin | `0px 0px 10px` |
| display | `inline-block` |


#### `.button-on-dark-1` / `.button-on-dark-2`

| Property | Value |
|----------|-------|
| color | `rgb(255, 255, 255)` |
| backgroundColor | `rgba(0, 0, 0, 0)` |
| fontFamily | `Montserrat, sans-serif` |
| fontSize | `12.5125px` |
| fontWeight | `600` |
| lineHeight | `17.5175px` |
| padding | `10px 24px` |
| border | `1px solid rgb(255, 255, 255)` |
| borderRadius | `100px` |
| textTransform | `none` |
| letterSpacing | `1.001px` |
| boxShadow | `none` |
| margin | `0px 0px 10px` |
| display | `inline-block` |


| Property | Value |
|----------|-------|
| color | `rgb(7, 55, 114)` |
| backgroundColor | `rgb(255, 255, 255)` |
| fontFamily | `Montserrat, sans-serif` |
| fontSize | `12.5125px` |
| fontWeight | `600` |
| lineHeight | `17.5175px` |
| padding | `10px 24px` |
| border | `1px solid rgb(255, 255, 255)` |
| borderRadius | `100px` |
| textTransform | `none` |
| letterSpacing | `1.001px` |
| boxShadow | `none` |
| margin | `0px 0px 10px` |
| display | `inline-block` |


#### `.button-1.button-large` (+ optional `em` subtext)

| Property | Value |
|----------|-------|
| color | `rgb(255, 255, 255)` |
| backgroundColor | `rgb(7, 55, 114)` |
| fontFamily | `Montserrat, sans-serif` |
| fontSize | `13.475px` |
| fontWeight | `700` |
| lineHeight | `18.865px` |
| padding | `24px` |
| border | `1px solid rgb(7, 55, 114)` |
| borderRadius | `100px` |
| textTransform | `uppercase` |
| letterSpacing | `1.3475px` |
| boxShadow | `none` |
| margin | `0px 0px 10px` |
| display | `inline-block` |


#### `.button-1.button-large.full-width-button`

| Property | Value |
|----------|-------|
| color | `rgb(55, 55, 55)` |
| backgroundColor | `rgb(241, 181, 28)` |
| fontFamily | `Montserrat, sans-serif` |
| fontSize | `12.5125px` |
| fontWeight | `700` |
| lineHeight | `17.5175px` |
| padding | `10px 24px` |
| border | `1px solid rgba(0, 0, 0, 0)` |
| borderRadius | `100px` |
| textTransform | `uppercase` |
| letterSpacing | `1.001px` |
| boxShadow | `none` |
| margin | `0px 0px 10px` |
| display | `inline-block` |


### Full CSS source rules

```css
.button-1 { display:inline-block;margin-bottom:10px;position:relative;padding:10px 24px;border:1px solid var(--primary-color, #023A6D) !important;background:var(--primary-color, #023A6D);color:#fff;font-family:"Montserrat",sans-serif;font-weight:500;font-size:14px;line-height:1.4;letter-spacing:0px;text-decoration:none;text-align:center;border-radius:100px;cursor:pointer;-webkit-transition:.3s all;transition:.3s all }
.button-2 { display:inline-block;margin-bottom:10px;position:relative;padding:10px 24px;border:1px solid rgba(0,0,0,0) !important;background:var(--secondary-color, #DEAF25);color:#131313;font-family:"Montserrat",sans-serif;font-weight:500;font-size:14px;line-height:1.4;letter-spacing:0px;text-decoration:none;text-align:center;border-radius:100px;cursor:pointer;-webkit-transition:.3s all;transition:.3s all
position:relative;z-index:30;color:#373737 !important
text-transform:uppercase;font-weight:700 }
.button-3 { display:inline-block;margin-bottom:10px;position:relative;padding:10px 24px;border:1px solid var(--primary-color, #023A6D) !important;background:rgba(0,0,0,0);color:var(--primary-color, #023A6D);font-family:"Montserrat",sans-serif;font-weight:500;font-size:14px;line-height:1.4;letter-spacing:0px;text-decoration:none;text-align:center;border-radius:100px;cursor:pointer;-webkit-transition:.3s all;transition:.3s all }
.button-4 { display:inline-block;margin-bottom:10px;position:relative;padding:10px 24px;border:1px solid #131313 !important;background:#131313;color:#fff;font-family:"Montserrat",sans-serif;font-weight:500;font-size:14px;line-height:1.4;letter-spacing:0px;text-decoration:none;text-align:center;border-radius:100px;cursor:pointer;-webkit-transition:.3s all;transition:.3s all }
.button-5 { display:inline-block;margin-bottom:10px;position:relative;padding:10px 24px;border:1px solid #131313 !important;background:rgba(0,0,0,0);color:#131313;font-family:"Montserrat",sans-serif;font-weight:500;font-size:14px;line-height:1.4;letter-spacing:0px;text-decoration:none;text-align:center;border-radius:100px;cursor:pointer;-webkit-transition:.3s all;transition:.3s all }
.button-on-dark-1 { display:inline-block;margin-bottom:10px;position:relative;padding:10px 24px;border:1px solid #fff !important;background:rgba(0,0,0,0);color:#fff;font-family:"Montserrat",sans-serif;font-weight:500;font-size:14px;line-height:1.4;letter-spacing:0px;text-decoration:none;text-align:center;border-radius:100px;cursor:pointer;-webkit-transition:.3s all;transition:.3s all }
.button-on-dark-2 { display:inline-block;margin-bottom:10px;position:relative;padding:10px 24px;border:1px solid #fff !important;background:#fff;color:var(--primary-color, #023A6D);font-family:"Montserrat",sans-serif;font-weight:500;font-size:14px;line-height:1.4;letter-spacing:0px;text-decoration:none;text-align:center;border-radius:100px;cursor:pointer;-webkit-transition:.3s all;transition:.3s all }
.button-large { padding:24px !important;font-size:17px !important;font-weight:700 !important;text-transform:uppercase !important }
.full-width-button { width:100%;max-width:unset
width:100%;max-width:unset
width:100%;max-width:unset }
```

### :root CSS Variables

| Variable | Value |
|----------|-------|
| `--primary-color-h` | `213.08` |
| `--primary-color-s` | `88.43%` |
| `--primary-color-l` | `23.73%` |
| `--primary-color-hsl` | `var(--primary-color-h), var(--primary-color-s), var(--primary-color-l)` |
| `--primary-color` | `#073772` |
| `--secondary-color-h` | `43.1` |
| `--secondary-color-s` | `88.38%` |
| `--secondary-color-l` | `52.75%` |
| `--secondary-color-hsl` | `var(--secondary-color-h), var(--secondary-color-s), var(--secondary-color-l)` |
| `--secondary-color` | `#f1b51c` |


### Computed Styles

#### `body`

| Property | Value |
|----------|-------|
| color | `rgb(55, 55, 55)` |
| backgroundColor | `rgba(0, 0, 0, 0)` |
| fontFamily | `Montserrat, sans-serif` |
| fontSize | `17.325px` |
| fontWeight | `400` |
| lineHeight | `30.3187px` |
| padding | `0px` |
| paddingTop | `0px` |
| paddingRight | `0px` |
| paddingBottom | `0px` |
| paddingLeft | `0px` |
| margin | `0px` |
| border | `0px none rgb(55, 55, 55)` |
| borderColor | `rgb(55, 55, 55)` |
| borderWidth | `0px` |
| borderStyle | `none` |
| borderRadius | `0px` |
| textTransform | `none` |
| letterSpacing | `0.17325px` |
| boxShadow | `none` |
| outline | `rgb(55, 55, 55) none 0px` |
| maxWidth | `none` |
| width | `1400px` |
| minHeight | `0px` |
| display | `block` |
| textDecoration | `none solid rgb(55, 55, 55)` |

#### `h1`

| Property | Value |
|----------|-------|
| color | `rgb(7, 55, 114)` |
| backgroundColor | `rgba(0, 0, 0, 0)` |
| fontFamily | `Merriweather, serif` |
| fontSize | `42.35px` |
| fontWeight | `700` |
| lineHeight | `48.7025px` |
| padding | `0px` |
| paddingTop | `0px` |
| paddingRight | `0px` |
| paddingBottom | `0px` |
| paddingLeft | `0px` |
| margin | `0px 0px 20px` |
| border | `0px none rgb(7, 55, 114)` |
| borderColor | `rgb(7, 55, 114)` |
| borderWidth | `0px` |
| borderStyle | `none` |
| borderRadius | `0px` |
| textTransform | `none` |
| letterSpacing | `-0.847px` |
| boxShadow | `none` |
| outline | `rgb(7, 55, 114) none 0px` |
| maxWidth | `none` |
| width | `1180px` |
| minHeight | `0px` |
| display | `block` |
| textDecoration | `none solid rgb(7, 55, 114)` |

#### `h2`

| Property | Value |
|----------|-------|
| color | `rgb(7, 55, 114)` |
| backgroundColor | `rgba(0, 0, 0, 0)` |
| fontFamily | `Merriweather, serif` |
| fontSize | `30.8px` |
| fontWeight | `700` |
| lineHeight | `36.96px` |
| padding | `0px` |
| paddingTop | `0px` |
| paddingRight | `0px` |
| paddingBottom | `0px` |
| paddingLeft | `0px` |
| margin | `0px 0px 15.4px` |
| border | `0px none rgb(7, 55, 114)` |
| borderColor | `rgb(7, 55, 114)` |
| borderWidth | `0px` |
| borderStyle | `none` |
| borderRadius | `0px` |
| textTransform | `none` |
| letterSpacing | `-0.308px` |
| boxShadow | `none` |
| outline | `rgb(7, 55, 114) none 0px` |
| maxWidth | `none` |
| width | `auto` |
| minHeight | `0px` |
| display | `block` |
| textDecoration | `none solid rgb(7, 55, 114)` |

#### `h4`

| Property | Value |
|----------|-------|
| color | `rgb(19, 19, 19)` |
| backgroundColor | `rgba(0, 0, 0, 0)` |
| fontFamily | `Merriweather, serif` |
| fontSize | `19.25px` |
| fontWeight | `700` |
| lineHeight | `25.9875px` |
| padding | `0px` |
| paddingTop | `0px` |
| paddingRight | `0px` |
| paddingBottom | `0px` |
| paddingLeft | `0px` |
| margin | `0px 0px 20px` |
| border | `0px none rgb(19, 19, 19)` |
| borderColor | `rgb(19, 19, 19)` |
| borderWidth | `0px` |
| borderStyle | `none` |
| borderRadius | `0px` |
| textTransform | `none` |
| letterSpacing | `normal` |
| boxShadow | `none` |
| outline | `rgb(19, 19, 19) none 0px` |
| maxWidth | `none` |
| width | `840px` |
| minHeight | `0px` |
| display | `block` |
| textDecoration | `none solid rgb(19, 19, 19)` |

#### `h5`

| Property | Value |
|----------|-------|
| color | `rgb(19, 19, 19)` |
| backgroundColor | `rgba(0, 0, 0, 0)` |
| fontFamily | `Montserrat, sans-serif` |
| fontSize | `14.4375px` |
| fontWeight | `600` |
| lineHeight | `20.2125px` |
| padding | `0px` |
| paddingTop | `0px` |
| paddingRight | `0px` |
| paddingBottom | `0px` |
| paddingLeft | `0px` |
| margin | `0px 0px 15px` |
| border | `0px none rgb(19, 19, 19)` |
| borderColor | `rgb(19, 19, 19)` |
| borderWidth | `0px` |
| borderStyle | `none` |
| borderRadius | `0px` |
| textTransform | `uppercase` |
| letterSpacing | `0.5775px` |
| boxShadow | `none` |
| outline | `rgb(19, 19, 19) none 0px` |
| maxWidth | `none` |
| width | `840px` |
| minHeight | `0px` |
| display | `block` |
| textDecoration | `none solid rgb(19, 19, 19)` |

#### `.fsPageTitle`

| Property | Value |
|----------|-------|
| color | `rgb(7, 55, 114)` |
| backgroundColor | `rgba(0, 0, 0, 0)` |
| fontFamily | `Merriweather, serif` |
| fontSize | `42.35px` |
| fontWeight | `700` |
| lineHeight | `48.7025px` |
| padding | `0px` |
| paddingTop | `0px` |
| paddingRight | `0px` |
| paddingBottom | `0px` |
| paddingLeft | `0px` |
| margin | `0px 0px 20px` |
| border | `0px none rgb(7, 55, 114)` |
| borderColor | `rgb(7, 55, 114)` |
| borderWidth | `0px` |
| borderStyle | `none` |
| borderRadius | `0px` |
| textTransform | `none` |
| letterSpacing | `-0.847px` |
| boxShadow | `none` |
| outline | `rgb(7, 55, 114) none 0px` |
| maxWidth | `none` |
| width | `1180px` |
| minHeight | `0px` |
| display | `block` |
| textDecoration | `none solid rgb(7, 55, 114)` |

#### `#fsPageContent a`

| Property | Value |
|----------|-------|
| color | `rgb(7, 55, 114)` |
| backgroundColor | `rgb(229, 229, 229)` |
| fontFamily | `Montserrat, sans-serif` |
| fontSize | `14px` |
| fontWeight | `500` |
| lineHeight | `19.6px` |
| padding | `10px 24px` |
| paddingTop | `10px` |
| paddingRight | `24px` |
| paddingBottom | `10px` |
| paddingLeft | `24px` |
| margin | `0px 0px 10px` |
| border | `1px solid rgb(229, 229, 229)` |
| borderColor | `rgb(229, 229, 229)` |
| borderWidth | `1px` |
| borderStyle | `solid` |
| borderRadius | `100px` |
| textTransform | `none` |
| letterSpacing | `normal` |
| boxShadow | `none` |
| outline | `rgb(7, 55, 114) none 0px` |
| maxWidth | `none` |
| width | `154.641px` |
| minHeight | `0px` |
| display | `inline-block` |
| textDecoration | `none solid rgb(7, 55, 114)` |

#### `label`

| Property | Value |
|----------|-------|
| color | `rgb(55, 55, 55)` |
| backgroundColor | `rgba(0, 0, 0, 0)` |
| fontFamily | `Montserrat, sans-serif` |
| fontSize | `17.325px` |
| fontWeight | `400` |
| lineHeight | `30.3187px` |
| padding | `0px` |
| paddingTop | `0px` |
| paddingRight | `0px` |
| paddingBottom | `0px` |
| paddingLeft | `0px` |
| margin | `0px 8px 0px 0px` |
| border | `0px none rgb(55, 55, 55)` |
| borderColor | `rgb(55, 55, 55)` |
| borderWidth | `0px` |
| borderStyle | `none` |
| borderRadius | `0px` |
| textTransform | `none` |
| letterSpacing | `0.17325px` |
| boxShadow | `none` |
| outline | `rgb(55, 55, 55) none 0px` |
| maxWidth | `none` |
| width | `auto` |
| minHeight | `0px` |
| display | `none` |
| textDecoration | `none solid rgb(55, 55, 55)` |

#### `input`

| Property | Value |
|----------|-------|
| color | `rgb(255, 255, 255)` |
| backgroundColor | `rgb(0, 42, 80)` |
| fontFamily | `Montserrat, sans-serif` |
| fontSize | `14px` |
| fontWeight | `400` |
| lineHeight | `22.4px` |
| padding | `10px 30px 10px 31px` |
| paddingTop | `10px` |
| paddingRight | `30px` |
| paddingBottom | `10px` |
| paddingLeft | `31px` |
| margin | `0px` |
| border | `1px solid rgba(0, 0, 0, 0)` |
| borderColor | `rgba(0, 0, 0, 0)` |
| borderWidth | `1px` |
| borderStyle | `solid` |
| borderRadius | `3px` |
| textTransform | `none` |
| letterSpacing | `normal` |
| boxShadow | `none` |
| outline | `rgb(255, 255, 255) none 0px` |
| maxWidth | `100%` |
| width | `100%` |
| minHeight | `0px` |
| display | `block` |
| textDecoration | `none solid rgb(255, 255, 255)` |

#### `button`

| Property | Value |
|----------|-------|
| color | `rgba(0, 0, 0, 0)` |
| backgroundColor | `rgba(0, 0, 0, 0)` |
| fontFamily | `Montserrat, sans-serif` |
| fontSize | `17.325px` |
| fontWeight | `400` |
| lineHeight | `30.3187px` |
| padding | `1px 6px` |
| paddingTop | `1px` |
| paddingRight | `6px` |
| paddingBottom | `1px` |
| paddingLeft | `6px` |
| margin | `0px` |
| border | `0px none rgba(0, 0, 0, 0)` |
| borderColor | `rgba(0, 0, 0, 0)` |
| borderWidth | `0px` |
| borderStyle | `none` |
| borderRadius | `0px` |
| textTransform | `none` |
| letterSpacing | `normal` |
| boxShadow | `none` |
| outline | `rgba(0, 0, 0, 0) none 0px` |
| maxWidth | `none` |
| width | `24px` |
| minHeight | `0px` |
| display | `block` |
| textDecoration | `none solid rgba(0, 0, 0, 0)` |

#### `.button-2`

| Property | Value |
|----------|-------|
| color | `rgb(55, 55, 55)` |
| backgroundColor | `rgb(241, 181, 28)` |
| fontFamily | `Montserrat, sans-serif` |
| fontSize | `12.5125px` |
| fontWeight | `600` |
| lineHeight | `17.5175px` |
| padding | `10px 24px` |
| paddingTop | `10px` |
| paddingRight | `24px` |
| paddingBottom | `10px` |
| paddingLeft | `24px` |
| margin | `0px 0px 10px` |
| border | `1px solid rgba(0, 0, 0, 0)` |
| borderColor | `rgba(0, 0, 0, 0)` |
| borderWidth | `1px` |
| borderStyle | `solid` |
| borderRadius | `100px` |
| textTransform | `none` |
| letterSpacing | `1.001px` |
| boxShadow | `none` |
| outline | `rgb(55, 55, 55) none 0px` |
| maxWidth | `none` |
| width | `auto` |
| minHeight | `0px` |
| display | `inline-block` |
| textDecoration | `none solid rgb(55, 55, 55)` |

#### `#fsHeader`

| Property | Value |
|----------|-------|
| color | `rgb(55, 55, 55)` |
| backgroundColor | `rgba(0, 0, 0, 0)` |
| fontFamily | `Montserrat, sans-serif` |
| fontSize | `17.325px` |
| fontWeight | `400` |
| lineHeight | `30.3187px` |
| padding | `0px 0px 80px` |
| paddingTop | `0px` |
| paddingRight | `0px` |
| paddingBottom | `80px` |
| paddingLeft | `0px` |
| margin | `0px` |
| border | `0px none rgb(55, 55, 55)` |
| borderColor | `rgb(55, 55, 55)` |
| borderWidth | `0px` |
| borderStyle | `none` |
| borderRadius | `0px` |
| textTransform | `none` |
| letterSpacing | `0.17325px` |
| boxShadow | `none` |
| outline | `rgb(55, 55, 55) none 0px` |
| maxWidth | `none` |
| width | `1400px` |
| minHeight | `0px` |
| display | `block` |
| textDecoration | `none solid rgb(55, 55, 55)` |

#### `.fsTabsNav`

| Property | Value |
|----------|-------|
| color | `rgb(55, 55, 55)` |
| backgroundColor | `rgba(0, 0, 0, 0)` |
| fontFamily | `Montserrat, sans-serif` |
| fontSize | `15.4px` |
| fontWeight | `400` |
| lineHeight | `25.025px` |
| padding | `0px` |
| paddingTop | `0px` |
| paddingRight | `0px` |
| paddingBottom | `0px` |
| paddingLeft | `0px` |
| margin | `0px` |
| border | `0px none rgb(55, 55, 55)` |
| borderColor | `rgb(55, 55, 55)` |
| borderWidth | `0px` |
| borderStyle | `none` |
| borderRadius | `0px` |
| textTransform | `none` |
| letterSpacing | `0.17325px` |
| boxShadow | `none` |
| outline | `rgb(55, 55, 55) none 0px` |
| maxWidth | `none` |
| width | `1080px` |
| minHeight | `0px` |
| display | `flex` |
| textDecoration | `none solid rgb(55, 55, 55)` |



---

## Content Testing

- **URL:** https://www.lisd.net/production2/qa-testing/qa-testing-content
- **Extracted:** 2026-06-23

### Content

# Content Testing

## Content

This page is used by the deployment QA team to test site styles from the style guide. Styles on this page may not be present on all sites/designs.

Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis

Bold | Italic | Bold Italic | Italic Bold | Link

#### Unordered List

- Unordered List

- Unordered List
Unordered List
Unordered List

- Unordered List

- Unordered List

- Unordered List

- Unordered List
Ordered List
Ordered List

- Ordered List

- Ordered List

#### Ordered List

- Ordered List

- Ordered List
Ordered List
Ordered List

- Ordered List

- Ordered List

- Ordered List

- Ordered List
Unordered List
Unordered List

- Unordered List

- Unordered List

## Lead In

#### Short

Lead-in QA text lorem ipsum dolor sit amet, consectetuer adipiscing elit.

#### Long

Lead-in QA text egestas rhoncus sit. Ac sapien est. Qui nibh euismod officia curabitur vel ut hac etiam. Velit pulvinar in turpis lacus veniam. Ullamcorper mi sit sollicitudin phasellus inceptos penatibus nulla sapien. Non vestibulum egestas. Nullam vel aliquam. In ut parturient wisi feugiat nulla lectus maecenas vitae. Tellus mauris massa sit nisl nonummy ac nunc viverra congue a et.

## Block Quote

#### Short

Blockquote QA text lorem ipsum dolor sit amet, consectetuer adipiscing elit.

Blockquote QA text lorem ipsum dolor sit amet, consectetuer adipiscing elit.

#### Long

Blockquote QA text egestas rhoncus sit. Ac sapien est. Qui nibh euismod officia curabitur vel ut hac etiam. Velit pulvinar in turpis lacus veniam. Ullamcorper mi sit sollicitudin phasellus inceptos penatibus nulla sapien. Non vestibulum egestas. Nullam vel aliquam. In ut parturient wisi feugiat nulla lectus maecenas vitae. Tellus mauris massa sit nisl nonummy ac nunc viverra congue a et.

Blockquote QA text egestas rhoncus sit. Ac sapien est. Qui nibh euismod officia curabitur vel ut hac etiam. Velit pulvinar in turpis lacus veniam. Ullamcorper mi sit sollicitudin phasellus inceptos penatibus nulla sapien. Non vestibulum egestas. Nullam vel aliquam. In ut parturient wisi feugiat nulla lectus maecenas vitae. Tellus mauris massa sit nisl nonummy ac nunc viverra congue a et.

## Block Quote with Citation

#### Long with Short Citation

Blockquote with Citation QA text egestas rhoncus sit. Ac sapien est. Qui nibh euismod officia curabitur vel ut hac etiam. Velit pulvinar in turpis lacus veniam. Ullamcorper mi sit sollicitudin phasellus inceptos penatibus nulla sapien. Non vestibulum egestas. Nullam vel aliquam. In ut parturient wisi feugiat nulla lectus maecenas vitae. Tellus mauris massa sit nisl nonummy ac nunc viverra congue a et.
Citation text.

Blockquote with Citation QA text egestas rhoncus sit. Ac sapien est. Qui nibh euismod officia curabitur vel ut hac etiam. Velit pulvinar in turpis lacus veniam. Ullamcorper mi sit sollicitudin phasellus inceptos penatibus nulla sapien. Non vestibulum egestas. Nullam vel aliquam. In ut parturient wisi feugiat nulla lectus maecenas vitae. Tellus mauris massa sit nisl nonummy ac nunc viverra congue a et.
Citation text.

#### Short with Long Citation

Blockquote with Citation QA text lorem ipsum dolor sit amet, consectetuer adipiscing elit.
Citation text egestas rhoncus sit. Ac sapien est. Qui nibh euismod officia curabitur vel ut hac etiam. Velit pulvinar in turpis lacus veniam.

Blockquote with Citation QA text lorem ipsum dolor sit amet, consectetuer adipiscing elit.
Citation text egestas rhoncus sit. Ac sapien est. Qui nibh euismod officia curabitur vel ut hac etiam. Velit pulvinar in turpis lacus veniam.

## Buttons

#### Large Buttons

LARGE BUTTON 1 SHORT

LARGE BUTTON 1 SHORT
Tagline Short

LARGE BUTTON 1 LONG LOREM IPSUM DOLOR SIT AMET, CONSECTETUER ADIPISCING ELIT.
Ullamcorper mi sit sollicitudin phasellus inceptos penatibus nulla sapien. Non vestibulum egestas. Nullam vel aliquam.

LARGE BUTTON 1 LONG LOREM IPSUM DOLOR SIT AMET, CONSECTETUER ADIPISCING ELIT.
Ullamcorper mi sit sollicitudin phasellus inceptos penatibus nulla sapien. Non vestibulum egestas. Nullam vel aliquam. Tagline Long egestas rhoncus sit. Ac sapien est. Qui nibh euismod officia curabitur vel ut hac etiam. Velit pulvinar in turpis lacus veniam. Ullamcorper mi sit sollicitudin phasellus inceptos penatibus nulla sapien. Non vestibulum egestas.

LARGE BUTTON 2 SHORT

LARGE 1 BUTTON 2 SHORT
Tagline Short

LARGE BUTTON 2 LONG LOREM IPSUM DOLOR SIT AMET, CONSECTETUER ADIPISCING ELIT.
Ullamcorper mi sit sollicitudin phasellus inceptos penatibus nulla sapien. Non vestibulum egestas. Nullam vel aliquam.

LARGE BUTTON 2 LONG LOREM IPSUM DOLOR SIT AMET, CONSECTETUER ADIPISCING ELIT.
Ullamcorper mi sit sollicitudin phasellus inceptos penatibus nulla sapien. Non vestibulum egestas. Nullam vel aliquam. Tagline Long egestas rhoncus sit. Ac sapien est. Qui nibh euismod officia curabitur vel ut hac etiam. Velit pulvinar in turpis lacus veniam. Ullamcorper mi sit sollicitudin phasellus inceptos penatibus nulla sapien. Non vestibulum egestas.

LARGE BUTTON 3 SHORT - SOLID

LARGE BUTTON 3 SHORT - SOLID
Tagline Short

LARGE BUTTON 3 - SOLID LONG LOREM IPSUM DOLOR SIT AMET, CONSECTETUER ADIPISCING ELIT.
Ullamcorper mi sit sollicitudin phasellus inceptos penatibus nulla sapien. Non vestibulum egestas. Nullam vel aliquam.

LARGE BUTTON 3 LONG- SOLID  LOREM IPSUM DOLOR SIT AMET, CONSECTETUER ADIPISCING ELIT.
Ullamcorper mi sit sollicitudin phasellus inceptos penatibus nulla sapien. Non vestibulum egestas. Nullam vel aliquam. Tagline Long egestas rhoncus sit. Ac sapien est. Qui nibh euismod officia curabitur vel ut hac etiam. Velit pulvinar in turpis lacus veniam. Ullamcorper mi sit sollicitudin phasellus inceptos penatibus nulla sapien. Non vestibulum egestas.

LARGE BUTTON 4 - SOLID SHORT

LARGE BUTTON 4 - SOLID SHORT
Tagline Short

LARGE BUTTON 4 - SOLID LONG LOREM IPSUM DOLOR SIT AMET, CONSECTETUER ADIPISCING ELIT.
Ullamcorper mi sit sollicitudin phasellus inceptos penatibus nulla sapien. Non vestibulum egestas. Nullam vel aliquam.

LARGE BUTTON 4 - SOLID LONG LOREM IPSUM DOLOR SIT AMET, CONSECTETUER ADIPISCING ELIT.
Ullamcorper mi sit sollicitudin phasellus inceptos penatibus nulla sapien. Non vestibulum egestas. Nullam vel aliquam. Tagline Long egestas rhoncus sit. Ac sapien est. Qui nibh euismod officia curabitur vel ut hac etiam. Velit pulvinar in turpis lacus veniam. Ullamcorper mi sit sollicitudin phasellus inceptos penatibus nulla sapien. Non vestibulum egestas.

LARGE BUTTON 5 - SOLID SHORT

LARGE BUTTON 5 - SOLID SHORT
Tagline Short

LARGE BUTTON 5 - SOLID LONG LOREM IPSUM DOLOR SIT AMET, CONSECTETUER ADIPISCING ELIT.
Ullamcorper mi sit sollicitudin phasellus inceptos penatibus nulla sapien. Non vestibulum egestas. Nullam vel aliquam.

LARGE BUTTON 5 - SOLID LONG LOREM IPSUM DOLOR SIT AMET, CONSECTETUER ADIPISCING ELIT.
Ullamcorper mi sit sollicitudin phasellus inceptos penatibus nulla sapien. Non vestibulum egestas. Nullam vel aliquam. Tagline Long egestas rhoncus sit. Ac sapien est. Qui nibh euismod officia curabitur vel ut hac etiam. Velit pulvinar in turpis lacus veniam. Ullamcorper mi sit sollicitudin phasellus inceptos penatibus nulla sapien. Non vestibulum egestas.

LARGE ON DARK 1 BUTTON SHORT

LARGE ON DARK 1 BUTTON SHORT
Tagline Short

LARGE ON DARK 1 BUTTON LONG LOREM IPSUM DOLOR SIT AMET, CONSECTETUER ADIPISCING ELIT.
Ullamcorper mi sit sollicitudin phasellus inceptos penatibus nulla sapien. Non vestibulum egestas. Nullam vel aliquam.

LARGE ON DARK 1 BUTTON LONG LOREM IPSUM DOLOR SIT AMET, CONSECTETUER ADIPISCING ELIT.
Ullamcorper mi sit sollicitudin phasellus inceptos penatibus nulla sapien. Non vestibulum egestas. Nullam vel aliquam. Tagline Long egestas rhoncus sit. Ac sapien est. Qui nibh euismod officia curabitur vel ut hac etiam. Velit pulvinar in turpis lacus veniam. Ullamcorper mi sit sollicitudin phasellus inceptos penatibus nulla sapien. Non vestibulum egestas.

LARGE ON DARK 1 BUTTON - SOLID SHORT

LARGE ON DARK 1 BUTTON - SOLID SHORT
Tagline Short

LARGE ON DARK 1 BUTTON - SOLID LONG LOREM IPSUM DOLOR SIT AMET, CONSECTETUER ADIPISCING ELIT.
Ullamcorper mi sit sollicitudin phasellus inceptos penatibus nulla sapien. Non vestibulum egestas. Nullam vel aliquam.

LARGE ON DARK 1 BUTTON - SOLID LONG LOREM IPSUM DOLOR SIT AMET, CONSECTETUER ADIPISCING ELIT.
Ullamcorper mi sit sollicitudin phasellus inceptos penatibus nulla sapien. Non vestibulum egestas. Nullam vel aliquam. Tagline Long egestas rhoncus sit. Ac sapien est. Qui nibh euismod officia curabitur vel ut hac etiam. Velit pulvinar in turpis lacus veniam. Ullamcorper mi sit sollicitudin phasellus inceptos penatibus nulla sapien. Non vestibulum egestas.

#### Small Buttons

Small 1 Button

Small 1 Button Long lorem ipsum dolor sit amet, consectetuer adipiscing elit. Ullamcorper mi sit sollicitudin phasellus inceptos penatibus nulla sapien. Non vestibulum egestas. Nullam vel aliquam.

Small 2 Button

Small 2 Button Long lorem ipsum dolor sit amet, consectetuer adipiscing elit. Ullamcorper mi sit sollicitudin phasellus inceptos penatibus nulla sapien. Non vestibulum egestas. Nullam vel aliquam.

Small 1 Button - Solid

Small 1 Button - Solid Long lorem ipsum dolor sit amet, consectetuer adipiscing elit. Ullamcorper mi sit sollicitudin phasellus inceptos penatibus nulla sapien. Non vestibulum egestas. Nullam vel aliquam.

Small 2 Button - Solid

Small 2 Button - Solid Long lorem ipsum dolor sit amet, consectetuer adipiscing elit. Ullamcorper mi sit sollicitudin phasellus inceptos penatibus nulla sapien. Non vestibulum egestas. Nullam vel aliquam.

Download Button

Download Button Long lorem ipsum dolor sit amet, consectetuer adipiscing elit. Ullamcorper mi sit sollicitudin phasellus inceptos penatibus nulla sapien. Non vestibulum egestas. Nullam vel aliquam.

Link Button

Link Button Long lorem ipsum dolor sit amet, consectetuer adipiscing elit. Ullamcorper mi sit sollicitudin phasellus inceptos penatibus nulla sapien. Non vestibulum egestas. Nullam vel aliquam.

Small on Dark 1 Button

Small on Dark 1 Button Long lorem ipsum dolor sit amet, consectetuer adipiscing elit. Ullamcorper mi sit sollicitudin phasellus inceptos penatibus nulla sapien. Non vestibulum egestas. Nullam vel aliquam.

Small on Dark 2 Button

Small on Dark 2 Button Long lorem ipsum dolor sit amet, consectetuer adipiscing elit. Ullamcorper mi sit sollicitudin phasellus inceptos penatibus nulla sapien. Non vestibulum egestas. Nullam vel aliquam.

## Tables - Styled

#### Without Header

Table First Row

Table First Row

Row with all cells filled

Row with all cells filled

Row with all cells filled

Row with all cells Filled

Row above is left blank

Row above is left blank

Cell with medium text. Long lorem ipsum dolor sit amet, consectetuer adipiscing elit.

Cell with long text. Long lorem ipsum dolor sit amet, consectetuer adipiscing elit. Ullamcorper mi sit sollicitudin phasellus inceptos penatibus nulla sapien.

Cell with medium text. Long lorem ipsum dolor sit amet, consectetuer adipiscing elit.

Cell with medium text. Long lorem ipsum dolor sit amet, consectetuer adipiscing elit.

#### With Header

Table Header Row

Table Header Row

Table Header Row

Table Header Row

Row with all cells filled

Row with all cells filled

Row with all cells filled

Row with all cells Filled

Row above is left blank

Row above is left blank

Cell with medium text. Long lorem ipsum dolor sit amet, consectetuer adipiscing elit.

Cell with long text. Long lorem ipsum dolor sit amet, consectetuer adipiscing elit. Ullamcorper mi sit sollicitudin phasellus inceptos penatibus nulla sapien.

Cell with medium text. Long lorem ipsum dolor sit amet, consectetuer adipiscing elit.

Cell with medium text. Long lorem ipsum dolor sit amet, consectetuer adipiscing elit.

## Callout

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu purus nec tellus iaculis laoreet. Mauris ut magna non metus egestas fringilla in sed felis. Vivamus rutrum vestibulum pharetra. Phasellus ut erat maximus, tempor urna vitae, lacinia turpis. Aenean at mauris elementum, auctor velit pellentesque, luctus ante.

Callout Left text. Aliquam ornare rutrum felis. Vestibulum velit ante, consectetur sed rutrum vel, pellentesque sit amet sapien. Vestibulum placerat, nulla non ullamcorper congue, leo lectus congue neque, id gravida leo purus non dolor.

Proin feugiat, augue in ullamcorper semper, nunc nunc pellentesque felis, ut luctus sapien quam eget metus. In condimentum est quis dui gravida, nec bibendum diam feugiat. Pellentesque ut tellus pharetra, iaculis orci non, porta justo.

Vestibulum placerat, nulla non ullamcorper congue, leo lectus congue neque, id gravida leo purus non dolor.

Etiam venenatis metus ac dignissim accumsan. Etiam scelerisque, justo at pharetra vulputate, elit metus cursus risus, tincidunt suscipit magna nunc nec tellus. Morbi ultricies eros tellus, id congue purus porttitor in. Integer lacus tellus, volutpat nec vestibulum fringilla, venenatis vitae sapien. Morbi consectetur purus nec purus sagittis ullamcorper.

Callout Center text. Morbi gravida tincidunt gravida. Ut ac ex id nisi blandit sollicitudin. Suspendisse porta arcu risus. Proin id mauris a nibh faucibus suscipit. Vestibulum placerat, nulla non ullamcorper congue, leo lectus congue neque, id gravida leo purus non dolor.

Nullam ornare ante nisi, a fermentum nibh porta at. Duis turpis elit, congue eu magna vel, laoreet tincidunt nibh. Praesent bibendum aliquet nisl vel sodales. Cras at ex at metus ultricies venenatis. Suspendisse eleifend hendrerit diam. Fusce vitae aliquet sapien, quis imperdiet odio. Donec finibus congue odio.

Nulla dui felis, porttitor in dolor vitae, feugiat faucibus elit. Etiam tempor nisi sit amet elementum viverra. Aenean urna enim, venenatis sit amet sapien nec, eleifend finibus arcu. Nulla posuere quam velit. Sed vulputate lacus tincidunt, ullamcorper quam vitae, pellentesque diam.

Callout Right text. Morbi gravida tincidunt gravida. Ut ac ex id nisi blandit sollicitudin. Suspendisse porta arcu risus. Proin id mauris a nibh faucibus suscipit. Vestibulum placerat, nulla non ullamcorper congue, leo lectus congue neque, id gravida leo purus non dolor.

Nullam ornare ante nisi, a fermentum nibh porta at. Duis turpis elit, congue eu magna vel, laoreet tincidunt nibh. Praesent bibendum aliquet nisl vel sodales. Cras at ex at metus ultricies venenatis. Suspendisse eleifend hendrerit diam. Fusce vitae aliquet sapien, quis imperdiet odio. Donec finibus congue odio.

Nulla dui felis, porttitor in dolor vitae, feugiat faucibus elit. Etiam tempor nisi sit amet elementum viverra. Aenean urna enim, venenatis sit amet sapien nec, eleifend finibus arcu. Nulla posuere quam velit. Sed vulputate lacus tincidunt, ullamcorper quam vitae, pellentesque diam.

## Account Bar

### :root CSS Variables

| Variable | Value |
|----------|-------|
| `--primary-color-h` | `213.08` |
| `--primary-color-s` | `88.43%` |
| `--primary-color-l` | `23.73%` |
| `--primary-color-hsl` | `var(--primary-color-h), var(--primary-color-s), var(--primary-color-l)` |
| `--primary-color` | `#073772` |
| `--secondary-color-h` | `43.1` |
| `--secondary-color-s` | `88.38%` |
| `--secondary-color-l` | `52.75%` |
| `--secondary-color-hsl` | `var(--secondary-color-h), var(--secondary-color-s), var(--secondary-color-l)` |
| `--secondary-color` | `#f1b51c` |


### Computed Styles

#### `body`

| Property | Value |
|----------|-------|
| color | `rgb(55, 55, 55)` |
| backgroundColor | `rgba(0, 0, 0, 0)` |
| fontFamily | `Montserrat, sans-serif` |
| fontSize | `17.325px` |
| fontWeight | `400` |
| lineHeight | `30.3187px` |
| padding | `0px` |
| paddingTop | `0px` |
| paddingRight | `0px` |
| paddingBottom | `0px` |
| paddingLeft | `0px` |
| margin | `45px 0px 0px` |
| border | `0px none rgb(55, 55, 55)` |
| borderColor | `rgb(55, 55, 55)` |
| borderWidth | `0px` |
| borderStyle | `none` |
| borderRadius | `0px` |
| textTransform | `none` |
| letterSpacing | `0.17325px` |
| boxShadow | `none` |
| outline | `rgb(55, 55, 55) none 0px` |
| maxWidth | `none` |
| width | `1400px` |
| minHeight | `0px` |
| display | `block` |
| textDecoration | `none solid rgb(55, 55, 55)` |

#### `h1`

| Property | Value |
|----------|-------|
| color | `rgb(7, 55, 114)` |
| backgroundColor | `rgba(0, 0, 0, 0)` |
| fontFamily | `Merriweather, serif` |
| fontSize | `42.35px` |
| fontWeight | `700` |
| lineHeight | `48.7025px` |
| padding | `0px` |
| paddingTop | `0px` |
| paddingRight | `0px` |
| paddingBottom | `0px` |
| paddingLeft | `0px` |
| margin | `0px 0px 20px` |
| border | `0px none rgb(7, 55, 114)` |
| borderColor | `rgb(7, 55, 114)` |
| borderWidth | `0px` |
| borderStyle | `none` |
| borderRadius | `0px` |
| textTransform | `none` |
| letterSpacing | `-0.847px` |
| boxShadow | `none` |
| outline | `rgb(7, 55, 114) none 0px` |
| maxWidth | `none` |
| width | `1180px` |
| minHeight | `0px` |
| display | `block` |
| textDecoration | `none solid rgb(7, 55, 114)` |

#### `h2`

| Property | Value |
|----------|-------|
| color | `rgb(7, 55, 114)` |
| backgroundColor | `rgba(0, 0, 0, 0)` |
| fontFamily | `Merriweather, serif` |
| fontSize | `30.8px` |
| fontWeight | `700` |
| lineHeight | `36.96px` |
| padding | `0px` |
| paddingTop | `0px` |
| paddingRight | `0px` |
| paddingBottom | `0px` |
| paddingLeft | `0px` |
| margin | `0px 0px 15.4px` |
| border | `0px none rgb(7, 55, 114)` |
| borderColor | `rgb(7, 55, 114)` |
| borderWidth | `0px` |
| borderStyle | `none` |
| borderRadius | `0px` |
| textTransform | `none` |
| letterSpacing | `-0.308px` |
| boxShadow | `none` |
| outline | `rgb(7, 55, 114) none 0px` |
| maxWidth | `none` |
| width | `auto` |
| minHeight | `0px` |
| display | `block` |
| textDecoration | `none solid rgb(7, 55, 114)` |

#### `h4`

| Property | Value |
|----------|-------|
| color | `rgb(19, 19, 19)` |
| backgroundColor | `rgba(0, 0, 0, 0)` |
| fontFamily | `Merriweather, serif` |
| fontSize | `19.25px` |
| fontWeight | `700` |
| lineHeight | `25.9875px` |
| padding | `0px` |
| paddingTop | `0px` |
| paddingRight | `0px` |
| paddingBottom | `0px` |
| paddingLeft | `0px` |
| margin | `40px 0px 20px` |
| border | `0px none rgb(19, 19, 19)` |
| borderColor | `rgb(19, 19, 19)` |
| borderWidth | `0px` |
| borderStyle | `none` |
| borderRadius | `0px` |
| textTransform | `none` |
| letterSpacing | `normal` |
| boxShadow | `none` |
| outline | `rgb(19, 19, 19) none 0px` |
| maxWidth | `none` |
| width | `1180px` |
| minHeight | `0px` |
| display | `block` |
| textDecoration | `none solid rgb(19, 19, 19)` |

#### `.fsPageTitle`

| Property | Value |
|----------|-------|
| color | `rgb(7, 55, 114)` |
| backgroundColor | `rgba(0, 0, 0, 0)` |
| fontFamily | `Merriweather, serif` |
| fontSize | `42.35px` |
| fontWeight | `700` |
| lineHeight | `48.7025px` |
| padding | `0px` |
| paddingTop | `0px` |
| paddingRight | `0px` |
| paddingBottom | `0px` |
| paddingLeft | `0px` |
| margin | `0px 0px 20px` |
| border | `0px none rgb(7, 55, 114)` |
| borderColor | `rgb(7, 55, 114)` |
| borderWidth | `0px` |
| borderStyle | `none` |
| borderRadius | `0px` |
| textTransform | `none` |
| letterSpacing | `-0.847px` |
| boxShadow | `none` |
| outline | `rgb(7, 55, 114) none 0px` |
| maxWidth | `none` |
| width | `1180px` |
| minHeight | `0px` |
| display | `block` |
| textDecoration | `none solid rgb(7, 55, 114)` |

#### `#fsPageContent a`

| Property | Value |
|----------|-------|
| color | `rgb(7, 55, 114)` |
| backgroundColor | `rgba(0, 0, 0, 0)` |
| fontFamily | `Montserrat, sans-serif` |
| fontSize | `17.325px` |
| fontWeight | `500` |
| lineHeight | `31.185px` |
| padding | `0px` |
| paddingTop | `0px` |
| paddingRight | `0px` |
| paddingBottom | `0px` |
| paddingLeft | `0px` |
| margin | `0px` |
| border | `0px none rgb(7, 55, 114)` |
| borderColor | `rgb(7, 55, 114)` |
| borderWidth | `0px` |
| borderStyle | `none` |
| borderRadius | `0px` |
| textTransform | `none` |
| letterSpacing | `0.17325px` |
| boxShadow | `none` |
| outline | `rgb(7, 55, 114) none 0px` |
| maxWidth | `none` |
| width | `auto` |
| minHeight | `0px` |
| display | `inline` |
| textDecoration | `underline solid rgb(7, 55, 114)` |

#### `label`

| Property | Value |
|----------|-------|
| color | `rgb(55, 55, 55)` |
| backgroundColor | `rgba(0, 0, 0, 0)` |
| fontFamily | `Montserrat, sans-serif` |
| fontSize | `17.325px` |
| fontWeight | `400` |
| lineHeight | `30.3187px` |
| padding | `0px` |
| paddingTop | `0px` |
| paddingRight | `0px` |
| paddingBottom | `0px` |
| paddingLeft | `0px` |
| margin | `0px 8px 0px 0px` |
| border | `0px none rgb(55, 55, 55)` |
| borderColor | `rgb(55, 55, 55)` |
| borderWidth | `0px` |
| borderStyle | `none` |
| borderRadius | `0px` |
| textTransform | `none` |
| letterSpacing | `0.17325px` |
| boxShadow | `none` |
| outline | `rgb(55, 55, 55) none 0px` |
| maxWidth | `none` |
| width | `auto` |
| minHeight | `0px` |
| display | `none` |
| textDecoration | `none solid rgb(55, 55, 55)` |

#### `input`

| Property | Value |
|----------|-------|
| color | `rgb(255, 255, 255)` |
| backgroundColor | `rgb(0, 42, 80)` |
| fontFamily | `Montserrat, sans-serif` |
| fontSize | `14px` |
| fontWeight | `400` |
| lineHeight | `22.4px` |
| padding | `10px 30px 10px 31px` |
| paddingTop | `10px` |
| paddingRight | `30px` |
| paddingBottom | `10px` |
| paddingLeft | `31px` |
| margin | `0px` |
| border | `1px solid rgba(0, 0, 0, 0)` |
| borderColor | `rgba(0, 0, 0, 0)` |
| borderWidth | `1px` |
| borderStyle | `solid` |
| borderRadius | `3px` |
| textTransform | `none` |
| letterSpacing | `normal` |
| boxShadow | `none` |
| outline | `rgb(255, 255, 255) none 0px` |
| maxWidth | `100%` |
| width | `100%` |
| minHeight | `0px` |
| display | `block` |
| textDecoration | `none solid rgb(255, 255, 255)` |

#### `button`

| Property | Value |
|----------|-------|
| color | `rgba(0, 0, 0, 0)` |
| backgroundColor | `rgba(0, 0, 0, 0)` |
| fontFamily | `Montserrat, sans-serif` |
| fontSize | `17.325px` |
| fontWeight | `400` |
| lineHeight | `30.3187px` |
| padding | `1px 6px` |
| paddingTop | `1px` |
| paddingRight | `6px` |
| paddingBottom | `1px` |
| paddingLeft | `6px` |
| margin | `0px` |
| border | `0px none rgba(0, 0, 0, 0)` |
| borderColor | `rgba(0, 0, 0, 0)` |
| borderWidth | `0px` |
| borderStyle | `none` |
| borderRadius | `0px` |
| textTransform | `none` |
| letterSpacing | `normal` |
| boxShadow | `none` |
| outline | `rgba(0, 0, 0, 0) none 0px` |
| maxWidth | `none` |
| width | `24px` |
| minHeight | `0px` |
| display | `block` |
| textDecoration | `none solid rgba(0, 0, 0, 0)` |

#### `.button-1`

| Property | Value |
|----------|-------|
| color | `rgb(255, 255, 255)` |
| backgroundColor | `rgb(7, 55, 114)` |
| fontFamily | `Montserrat, sans-serif` |
| fontSize | `13.475px` |
| fontWeight | `700` |
| lineHeight | `18.865px` |
| padding | `24px` |
| paddingTop | `24px` |
| paddingRight | `24px` |
| paddingBottom | `24px` |
| paddingLeft | `24px` |
| margin | `0px 0px 10px` |
| border | `1px solid rgb(7, 55, 114)` |
| borderColor | `rgb(7, 55, 114)` |
| borderWidth | `1px` |
| borderStyle | `solid` |
| borderRadius | `100px` |
| textTransform | `uppercase` |
| letterSpacing | `1.3475px` |
| boxShadow | `none` |
| outline | `rgb(255, 255, 255) none 0px` |
| maxWidth | `none` |
| width | `250.078px` |
| minHeight | `0px` |
| display | `inline-block` |
| textDecoration | `none solid rgb(255, 255, 255)` |

#### `.button-2`

| Property | Value |
|----------|-------|
| color | `rgb(55, 55, 55)` |
| backgroundColor | `rgb(241, 181, 28)` |
| fontFamily | `Montserrat, sans-serif` |
| fontSize | `12.5125px` |
| fontWeight | `600` |
| lineHeight | `17.5175px` |
| padding | `10px 24px` |
| paddingTop | `10px` |
| paddingRight | `24px` |
| paddingBottom | `10px` |
| paddingLeft | `24px` |
| margin | `0px 0px 10px` |
| border | `1px solid rgba(0, 0, 0, 0)` |
| borderColor | `rgba(0, 0, 0, 0)` |
| borderWidth | `1px` |
| borderStyle | `solid` |
| borderRadius | `100px` |
| textTransform | `none` |
| letterSpacing | `1.001px` |
| boxShadow | `none` |
| outline | `rgb(55, 55, 55) none 0px` |
| maxWidth | `none` |
| width | `auto` |
| minHeight | `0px` |
| display | `inline-block` |
| textDecoration | `none solid rgb(55, 55, 55)` |

#### `.button-3`

| Property | Value |
|----------|-------|
| color | `rgb(7, 55, 114)` |
| backgroundColor | `rgba(0, 0, 0, 0)` |
| fontFamily | `Montserrat, sans-serif` |
| fontSize | `13.475px` |
| fontWeight | `700` |
| lineHeight | `18.865px` |
| padding | `24px` |
| paddingTop | `24px` |
| paddingRight | `24px` |
| paddingBottom | `24px` |
| paddingLeft | `24px` |
| margin | `0px 0px 10px` |
| border | `1px solid rgb(7, 55, 114)` |
| borderColor | `rgb(7, 55, 114)` |
| borderWidth | `1px` |
| borderStyle | `solid` |
| borderRadius | `100px` |
| textTransform | `uppercase` |
| letterSpacing | `1.3475px` |
| boxShadow | `none` |
| outline | `rgb(7, 55, 114) none 0px` |
| maxWidth | `none` |
| width | `320.016px` |
| minHeight | `0px` |
| display | `inline-block` |
| textDecoration | `none solid rgb(7, 55, 114)` |

#### `.button-4`

| Property | Value |
|----------|-------|
| color | `rgb(255, 255, 255)` |
| backgroundColor | `rgb(19, 19, 19)` |
| fontFamily | `Montserrat, sans-serif` |
| fontSize | `13.475px` |
| fontWeight | `700` |
| lineHeight | `18.865px` |
| padding | `24px` |
| paddingTop | `24px` |
| paddingRight | `24px` |
| paddingBottom | `24px` |
| paddingLeft | `24px` |
| margin | `0px 0px 10px` |
| border | `1px solid rgb(19, 19, 19)` |
| borderColor | `rgb(19, 19, 19)` |
| borderWidth | `1px` |
| borderStyle | `solid` |
| borderRadius | `100px` |
| textTransform | `uppercase` |
| letterSpacing | `1.3475px` |
| boxShadow | `none` |
| outline | `rgb(255, 255, 255) none 0px` |
| maxWidth | `none` |
| width | `321.328px` |
| minHeight | `0px` |
| display | `inline-block` |
| textDecoration | `none solid rgb(255, 255, 255)` |

#### `.button-5`

| Property | Value |
|----------|-------|
| color | `rgb(19, 19, 19)` |
| backgroundColor | `rgba(0, 0, 0, 0)` |
| fontFamily | `Montserrat, sans-serif` |
| fontSize | `13.475px` |
| fontWeight | `700` |
| lineHeight | `18.865px` |
| padding | `24px` |
| paddingTop | `24px` |
| paddingRight | `24px` |
| paddingBottom | `24px` |
| paddingLeft | `24px` |
| margin | `0px 0px 10px` |
| border | `1px solid rgb(19, 19, 19)` |
| borderColor | `rgb(19, 19, 19)` |
| borderWidth | `1px` |
| borderStyle | `solid` |
| borderRadius | `100px` |
| textTransform | `uppercase` |
| letterSpacing | `1.3475px` |
| boxShadow | `none` |
| outline | `rgb(19, 19, 19) none 0px` |
| maxWidth | `none` |
| width | `320.062px` |
| minHeight | `0px` |
| display | `inline-block` |
| textDecoration | `none solid rgb(19, 19, 19)` |

#### `.button-on-dark-1`

| Property | Value |
|----------|-------|
| color | `rgb(255, 255, 255)` |
| backgroundColor | `rgba(0, 0, 0, 0)` |
| fontFamily | `Montserrat, sans-serif` |
| fontSize | `13.475px` |
| fontWeight | `700` |
| lineHeight | `18.865px` |
| padding | `24px` |
| paddingTop | `24px` |
| paddingRight | `24px` |
| paddingBottom | `24px` |
| paddingLeft | `24px` |
| margin | `0px 0px 10px` |
| border | `1px solid rgb(255, 255, 255)` |
| borderColor | `rgb(255, 255, 255)` |
| borderWidth | `1px` |
| borderStyle | `solid` |
| borderRadius | `100px` |
| textTransform | `uppercase` |
| letterSpacing | `1.3475px` |
| boxShadow | `none` |
| outline | `rgb(255, 255, 255) none 0px` |
| maxWidth | `none` |
| width | `331.906px` |
| minHeight | `0px` |
| display | `inline-block` |
| textDecoration | `none solid rgb(255, 255, 255)` |

#### `.button-on-dark-2`

| Property | Value |
|----------|-------|
| color | `rgb(7, 55, 114)` |
| backgroundColor | `rgb(255, 255, 255)` |
| fontFamily | `Montserrat, sans-serif` |
| fontSize | `12.5125px` |
| fontWeight | `600` |
| lineHeight | `17.5175px` |
| padding | `10px 24px` |
| paddingTop | `10px` |
| paddingRight | `24px` |
| paddingBottom | `10px` |
| paddingLeft | `24px` |
| margin | `0px 0px 10px` |
| border | `1px solid rgb(255, 255, 255)` |
| borderColor | `rgb(255, 255, 255)` |
| borderWidth | `1px` |
| borderStyle | `solid` |
| borderRadius | `100px` |
| textTransform | `none` |
| letterSpacing | `1.001px` |
| boxShadow | `none` |
| outline | `rgb(7, 55, 114) none 0px` |
| maxWidth | `none` |
| width | `221.578px` |
| minHeight | `0px` |
| display | `inline-block` |
| textDecoration | `none solid rgb(7, 55, 114)` |

#### `.button-large`

| Property | Value |
|----------|-------|
| color | `rgb(255, 255, 255)` |
| backgroundColor | `rgb(7, 55, 114)` |
| fontFamily | `Montserrat, sans-serif` |
| fontSize | `13.475px` |
| fontWeight | `700` |
| lineHeight | `18.865px` |
| padding | `24px` |
| paddingTop | `24px` |
| paddingRight | `24px` |
| paddingBottom | `24px` |
| paddingLeft | `24px` |
| margin | `0px 0px 10px` |
| border | `1px solid rgb(7, 55, 114)` |
| borderColor | `rgb(7, 55, 114)` |
| borderWidth | `1px` |
| borderStyle | `solid` |
| borderRadius | `100px` |
| textTransform | `uppercase` |
| letterSpacing | `1.3475px` |
| boxShadow | `none` |
| outline | `rgb(255, 255, 255) none 0px` |
| maxWidth | `none` |
| width | `250.078px` |
| minHeight | `0px` |
| display | `inline-block` |
| textDecoration | `none solid rgb(255, 255, 255)` |

#### `#fsHeader`

| Property | Value |
|----------|-------|
| color | `rgb(55, 55, 55)` |
| backgroundColor | `rgba(0, 0, 0, 0)` |
| fontFamily | `Montserrat, sans-serif` |
| fontSize | `17.325px` |
| fontWeight | `400` |
| lineHeight | `30.3187px` |
| padding | `0px 0px 80px` |
| paddingTop | `0px` |
| paddingRight | `0px` |
| paddingBottom | `80px` |
| paddingLeft | `0px` |
| margin | `0px` |
| border | `0px none rgb(55, 55, 55)` |
| borderColor | `rgb(55, 55, 55)` |
| borderWidth | `0px` |
| borderStyle | `none` |
| borderRadius | `0px` |
| textTransform | `none` |
| letterSpacing | `0.17325px` |
| boxShadow | `none` |
| outline | `rgb(55, 55, 55) none 0px` |
| maxWidth | `none` |
| width | `1400px` |
| minHeight | `0px` |
| display | `block` |
| textDecoration | `none solid rgb(55, 55, 55)` |

#### `blockquote`

| Property | Value |
|----------|-------|
| color | `rgb(19, 19, 19)` |
| backgroundColor | `rgba(0, 0, 0, 0)` |
| fontFamily | `Merriweather, serif` |
| fontSize | `22px` |
| fontWeight | `300` |
| lineHeight | `38.5px` |
| padding | `0px 0px 20px` |
| paddingTop | `0px` |
| paddingRight | `0px` |
| paddingBottom | `20px` |
| paddingLeft | `0px` |
| margin | `50px 0px` |
| border | `` |
| borderColor | `rgb(19, 19, 19) rgb(19, 19, 19) rgb(207, 207, 207)` |
| borderWidth | `0px 0px 1px` |
| borderStyle | `none none solid` |
| borderRadius | `0px` |
| textTransform | `none` |
| letterSpacing | `0.22px` |
| boxShadow | `none` |
| outline | `rgb(19, 19, 19) none 0px` |
| maxWidth | `none` |
| width | `1180px` |
| minHeight | `0px` |
| display | `block` |
| textDecoration | `none solid rgb(19, 19, 19)` |

#### `table`

| Property | Value |
|----------|-------|
| color | `rgb(55, 55, 55)` |
| backgroundColor | `rgba(0, 0, 0, 0)` |
| fontFamily | `Montserrat, sans-serif` |
| fontSize | `17.325px` |
| fontWeight | `400` |
| lineHeight | `30.3187px` |
| padding | `0px` |
| paddingTop | `0px` |
| paddingRight | `0px` |
| paddingBottom | `0px` |
| paddingLeft | `0px` |
| margin | `0px` |
| border | `0px none rgb(128, 128, 128)` |
| borderColor | `rgb(128, 128, 128)` |
| borderWidth | `0px` |
| borderStyle | `none` |
| borderRadius | `0px` |
| textTransform | `none` |
| letterSpacing | `0.17325px` |
| boxShadow | `none` |
| outline | `rgb(55, 55, 55) none 0px` |
| maxWidth | `none` |
| width | `1180px` |
| minHeight | `0px` |
| display | `table` |
| textDecoration | `none solid rgb(55, 55, 55)` |

#### `th`

| Property | Value |
|----------|-------|
| color | `rgb(255, 255, 255)` |
| backgroundColor | `rgb(7, 55, 114)` |
| fontFamily | `Montserrat, sans-serif` |
| fontSize | `17.325px` |
| fontWeight | `700` |
| lineHeight | `24.0625px` |
| padding | `20px` |
| paddingTop | `20px` |
| paddingRight | `20px` |
| paddingBottom | `20px` |
| paddingLeft | `20px` |
| margin | `0px` |
| border | `0px none rgb(255, 255, 255)` |
| borderColor | `rgb(255, 255, 255)` |
| borderWidth | `0px` |
| borderStyle | `none` |
| borderRadius | `0px` |
| textTransform | `none` |
| letterSpacing | `0.17325px` |
| boxShadow | `none` |
| outline | `rgb(255, 255, 255) none 0px` |
| maxWidth | `none` |
| width | `268.109px` |
| minHeight | `0px` |
| display | `table-cell` |
| textDecoration | `none solid rgb(255, 255, 255)` |

#### `td`

| Property | Value |
|----------|-------|
| color | `rgb(55, 55, 55)` |
| backgroundColor | `rgb(229, 229, 229)` |
| fontFamily | `Montserrat, sans-serif` |
| fontSize | `17.325px` |
| fontWeight | `400` |
| lineHeight | `30.3187px` |
| padding | `13px 20px` |
| paddingTop | `13px` |
| paddingRight | `20px` |
| paddingBottom | `13px` |
| paddingLeft | `20px` |
| margin | `0px` |
| border | `0px none rgb(55, 55, 55)` |
| borderColor | `rgb(55, 55, 55)` |
| borderWidth | `0px` |
| borderStyle | `none` |
| borderRadius | `0px` |
| textTransform | `none` |
| letterSpacing | `0.17325px` |
| boxShadow | `none` |
| outline | `rgb(55, 55, 55) none 0px` |
| maxWidth | `none` |
| width | `268.109px` |
| minHeight | `0px` |
| display | `table-cell` |
| textDecoration | `none solid rgb(55, 55, 55)` |

#### `.fsTabsNav`

| Property | Value |
|----------|-------|
| color | `rgb(55, 55, 55)` |
| backgroundColor | `rgba(0, 0, 0, 0)` |
| fontFamily | `Montserrat, sans-serif` |
| fontSize | `15.4px` |
| fontWeight | `400` |
| lineHeight | `25.025px` |
| padding | `0px` |
| paddingTop | `0px` |
| paddingRight | `0px` |
| paddingBottom | `0px` |
| paddingLeft | `0px` |
| margin | `0px` |
| border | `0px none rgb(55, 55, 55)` |
| borderColor | `rgb(55, 55, 55)` |
| borderWidth | `0px` |
| borderStyle | `none` |
| borderRadius | `0px` |
| textTransform | `none` |
| letterSpacing | `0.17325px` |
| boxShadow | `none` |
| outline | `rgb(55, 55, 55) none 0px` |
| maxWidth | `none` |
| width | `1080px` |
| minHeight | `0px` |
| display | `flex` |
| textDecoration | `none solid rgb(55, 55, 55)` |



# Part 2: Form, Login & Utility Pages

Live browser extraction from LISD Style Guide v3 production pages (lisd.net/production2). Computed styles captured via headless Chromium (Playwright) with `:focus` simulation on form-related selectors.

**Extraction method:** CDP `Runtime.evaluate` equivalent — `getComputedStyle()` on page elements after `element.focus()` for focus states.

---

## Cross-Page :root CSS Variables

All five pages share identical `:root` custom properties:

| Variable | Value |
|----------|-------|
| `--primary-color-h` | 213.08 |
| `--primary-color-s` | 88.43% |
| `--primary-color-l` | 23.73% |
| `--primary-color-hsl` | var(--primary-color-h), var(--primary-color-s), var(--primary-color-l) |
| `--primary-color` | #073772 |
| `--secondary-color-h` | 43.1 |
| `--secondary-color-s` | 88.38% |
| `--secondary-color-l` | 52.75% |
| `--secondary-color-hsl` | var(--secondary-color-h), var(--secondary-color-s), var(--secondary-color-l) |
| `--secondary-color` | #f1b51c |
| `--display-accred-panel` | none |
| `--has-sticky-header` | false |
| `--is-district-site` | false |
| `--header-logo-enabled` | true |
| `--footer-logo-enabled` | true |
| `--header-logo-bg` | false |
| `--footer-logo-bg` | false |
| `--header-logo-height-class` | height-medium |
| `--footer-logo-height-class` | height-medium |
| `--show-header-location-name` | false |
| `--show-header-location-title` | false |
| `--show-header-subtitle` | false |
| `--show-header-motto` | false |
| `--show-footer-title` | false |
| `--weglot-display-position` | default |

### Brand color notes

| Token | Computed hex | Usage on form pages |
|-------|-------------|---------------------|
| `--primary-color` | #073772 | H1/page title, button text, link accents |
| `--secondary-color` | #f1b51c | Defined; primary CTA buttons on live site use gray pill (`rgb(229,229,229)`) via `.fsStyleUpdateButton` |

---

## Form

- **URL:** https://www.lisd.net/production2/form
- **Extracted:** 2026-06-23

### Content

### Form

#### Forms

* Required

**Name* required**

**Single Choice**

**Multiple Choice**

**Terms of Service**

#### Form field inventory

- **INPUT**, type=`hidden`, name=`submission_uuid`, text="9d6a4808-3b37-4197-b7e9-039f8c8ce672"
- **FIELDSET**, type=`fieldset`, id=`field_2_2179`, text="Name*
required
First Name
Last Name"
- **INPUT**, type=`text`, id=`field_3_2179`, class=`fsFormField`, name=`field_3`
- **INPUT**, type=`text`, id=`field_4_2179`, class=`fsFormField`, name=`field_4`
- **LABEL**, text="Email Address"
- **INPUT**, type=`email`, id=`field_5_2179`, class=`fsFormField`, name=`field_5`
- **LABEL**, text="Short Answer*
required"
- **INPUT**, type=`text`, id=`field_6_2179`, class=`fsFormField`, placeholder="Placeholder Text", name=`field_6`
- **LABEL**, text="Long Answer"
- **TEXTAREA**, type=`textarea`, id=`field_7_2179`, class=`fsFormField`, name=`field_7`
- **FIELDSET**, type=`fieldset`, id=`field_8_2179`, text="Single Choice
First Choice
Second Choice
Third Choice"
- **INPUT**, type=`radio`, id=`field_8_2179_1`, name=`field_8`, text="First Choice"
- **LABEL**, text="First Choice"
- **INPUT**, type=`radio`, id=`field_8_2179_2`, name=`field_8`, text="Second Choice"
- **LABEL**, text="Second Choice"
- **INPUT**, type=`radio`, id=`field_8_2179_3`, name=`field_8`, text="Third Choice"
- **LABEL**, text="Third Choice"
- **FIELDSET**, type=`fieldset`, id=`field_9_2179`, text="Multiple Choice
First Choice
Second Choice
Third Choice"
- **INPUT**, type=`checkbox`, id=`field_9_2179_1`, name=`field_9`, text="First Choice"
- **LABEL**, text="First Choice"
- **INPUT**, type=`checkbox`, id=`field_9_2179_2`, name=`field_9`, text="Second Choice"
- **LABEL**, text="Second Choice"
- **INPUT**, type=`checkbox`, id=`field_9_2179_3`, name=`field_9`, text="Third Choice"
- **LABEL**, text="Third Choice"
- **LABEL**, text="Dropdown Menu"
- **SELECT**, type=`select-one`, id=`field_11_2179`, class=`fsFormField fsFormFieldDropdown`, name=`field_11`, text="First Choice
Second Choice
Third Choice"
- **LABEL**, text="Conditional Field"
- **INPUT**, type=`text`, id=`field_12_2179`, class=`fsFormField`, name=`field_12`
- **LABEL**, text="Date"
- **INPUT**, type=`text`, id=`field_13_2179`, class=`fsFormField`, name=`field_13`
- **LABEL**, id=`fsFormFieldLabel_14_2179`, text="File Upload"
- **BUTTON**, type=`submit`, id=`field_14_2179_btn`, class=`fsFormFileUploadPicker`, text="Select File(s)"
- **INPUT**, type=`file`, id=`field_14_2179`, class=`fsFormField fsStateHidden`, name=`field_14`
- **FIELDSET**, type=`fieldset`, text="Terms of Service
I agree to the Terms of Service"
- **INPUT**, type=`checkbox`, id=`field_15_2179`, name=`field_15`, text="✓"
- **LABEL**, text="I agree to the Terms of Service"
- **BUTTON**, type=`submit`, class=`fsFormSubmitButton fsStyleUpdateButton`, text="Submit"

#### Field types observed

| Type | Class | Notes |
|------|-------|-------|
| Text (name split) | `fsFormField` | First/Last name in `fieldset` with `legend`; hint text via `.fsFormFieldHintText` |
| Email | `fsFormField` | `type="email"`, `autocomplete="email"` |
| Short answer | `fsFormField` | `pattern`, `placeholder`, `minlength`, required indicator |
| Long answer | `fsFormField` | `<textarea rows="3">` |
| Single choice | radio in `fieldset` | `.fsFormFieldOption` layout, vertical columns |
| Multiple choice | checkbox in `fieldset` | Same layout pattern |
| Dropdown | `fsFormField fsFormFieldDropdown` | Native `<select>` |
| Conditional field | `fsFormField` | Hidden via `fsStateHidden` until condition met |
| Date | `fsFormField` | `data-type="date"`, MM/DD/YYYY pattern |
| File upload | `fsFormFileUploadPicker` button + hidden `input[type=file]` | "Select File(s)" picker button |
| Terms checkbox | checkbox in `fieldset` | `.fsFormFieldTermsContainer` |
| Submit | `fsFormSubmitButton fsStyleUpdateButton` | Pill button, initially `disabled` |

#### Required field pattern

- Legend/label shows `<span class="fsFormFieldRequiredIndicator">*</span>` (color `rgb(211, 65, 71)` / #D34147)
- Page legend: `.fsFormsRequiredLegend` — "* Required"

#### Error state (CSS class present, hidden until validation)

- Container: `.fsFormFieldError` with `role="alert"`, hidden via `.fsStateHidden`
- Error text color: `rgb(211, 65, 71)` (#D34147)
- Font: Montserrat 14px, weight 400

### :root CSS Variables

| Variable | Value |
|----------|-------|
| `--primary-color-h` | 213.08 |
| `--primary-color-s` | 88.43% |
| `--primary-color-l` | 23.73% |
| `--primary-color-hsl` | var(--primary-color-h), var(--primary-color-s), var(--primary-color-l) |
| `--primary-color` | #073772 |
| `--secondary-color-h` | 43.1 |
| `--secondary-color-s` | 88.38% |
| `--secondary-color-l` | 52.75% |
| `--secondary-color-hsl` | var(--secondary-color-h), var(--secondary-color-s), var(--secondary-color-l) |
| `--secondary-color` | #f1b51c |
| `--display-accred-panel` | none |
| `--has-sticky-header` | false |
| `--is-district-site` | false |
| `--header-logo-enabled` | true |
| `--footer-logo-enabled` | true |
| `--header-logo-bg` | false |
| `--footer-logo-bg` | false |
| `--header-logo-height-class` | height-medium |
| `--footer-logo-height-class` | height-medium |
| `--show-header-location-name` | false |
| `--show-header-location-title` | false |
| `--show-header-subtitle` | false |
| `--show-header-motto` | false |
| `--show-footer-title` | false |
| `--weglot-display-position` | default |

### Computed Styles — Form Elements

| Selector | Property | Value |
|----------|----------|-------|
| `body` | color | rgb(55, 55, 55) |
| `body` | fontFamily | Montserrat, sans-serif |
| `body` | fontSize | 16.875px |
| `body` | fontWeight | 400 |
| `body` | lineHeight | 29.5312px |
| `body` | border | 0px none rgb(55, 55, 55) |
| `body` | letterSpacing | 0.16875px |
| `body` | outline | rgb(55, 55, 55) none 0px |
| `body` | width | 1280px |
| `h1` | color | rgb(7, 55, 114) |
| `h1` | fontFamily | Merriweather, serif |
| `h1` | fontSize | 41.25px |
| `h1` | fontWeight | 700 |
| `h1` | lineHeight | 47.4375px |
| `h1` | margin | 0px 0px 20px |
| `h1` | border | 0px none rgb(7, 55, 114) |
| `h1` | letterSpacing | -0.825px |
| `h1` | outline | rgb(7, 55, 114) none 0px |
| `h1` | width | 1180px |
| `.fsPageTitle` | color | rgb(7, 55, 114) |
| `.fsPageTitle` | fontFamily | Merriweather, serif |
| `.fsPageTitle` | fontSize | 41.25px |
| `.fsPageTitle` | fontWeight | 700 |
| `.fsPageTitle` | lineHeight | 47.4375px |
| `.fsPageTitle` | margin | 0px 0px 20px |
| `.fsPageTitle` | border | 0px none rgb(7, 55, 114) |
| `.fsPageTitle` | letterSpacing | -0.825px |
| `.fsPageTitle` | outline | rgb(7, 55, 114) none 0px |
| `.fsPageTitle` | width | 1180px |
| `label` | color | rgb(55, 55, 55) |
| `label` | fontFamily | Montserrat, sans-serif |
| `label` | fontSize | 16.875px |
| `label` | fontWeight | 400 |
| `label` | lineHeight | 29.5312px |
| `label` | margin | 0px 8px 0px 0px |
| `label` | border | 0px none rgb(55, 55, 55) |
| `label` | letterSpacing | 0.16875px |
| `label` | outline | rgb(55, 55, 55) none 0px |
| `.fsFormFieldWrapper > label` | color | rgb(55, 55, 55) |
| `.fsFormFieldWrapper > label` | fontFamily | Montserrat, sans-serif |
| `.fsFormFieldWrapper > label` | fontSize | 16.875px |
| `.fsFormFieldWrapper > label` | fontWeight | 700 |
| `.fsFormFieldWrapper > label` | lineHeight | 29.5312px |
| `.fsFormFieldWrapper > label` | margin | 3.75px 0px |
| `.fsFormFieldWrapper > label` | border | 0px none rgb(55, 55, 55) |
| `.fsFormFieldWrapper > label` | letterSpacing | 0.16875px |
| `.fsFormFieldWrapper > label` | outline | rgb(55, 55, 55) none 0px |
| `.fsFormFieldWrapper > label` | width | 1180px |
| `input` | color | rgb(255, 255, 255) |
| `input` | backgroundColor | rgb(0, 42, 80) |
| `input` | fontFamily | Montserrat, sans-serif |
| `input` | fontSize | 14px |
| `input` | fontWeight | 400 |
| `input` | lineHeight | 22.4px |
| `input` | padding | 10px 30px 10px 31px |
| `input` | border | 1px solid rgba(0, 0, 0, 0) |
| `input` | borderRadius | 3px |
| `input` | outline | rgb(255, 255, 255) none 0px |
| `input` | maxWidth | 100% |
| `input` | width | 100% |
| `textarea` | color | rgb(0, 0, 0) |
| `textarea` | backgroundColor | rgb(255, 255, 255) |
| `textarea` | fontFamily | Montserrat, sans-serif |
| `textarea` | fontSize | 16.875px |
| `textarea` | fontWeight | 400 |
| `textarea` | lineHeight | 29.5312px |
| `textarea` | padding | 7px 12px |
| `textarea` | margin | 3.75px 0px |
| `textarea` | border | 1px solid rgb(220, 221, 224) |
| `textarea` | borderRadius | 3px |
| `textarea` | boxShadow | rgb(116, 116, 118) 0px 0px 0px 1px |
| `textarea` | outline | rgb(0, 0, 0) none 0px |
| `textarea` | maxWidth | 100% |
| `textarea` | width | 1180px |
| `select` | color | rgb(0, 0, 0) |
| `select` | backgroundColor | rgb(255, 255, 255) |
| `select` | fontFamily | Montserrat, sans-serif |
| `select` | fontSize | 16.875px |
| `select` | fontWeight | 400 |
| `select` | lineHeight | 29.5312px |
| `select` | padding | 7px 12px |
| `select` | margin | 3.75px 0px |
| `select` | border | 1px solid rgb(220, 221, 224) |
| `select` | borderRadius | 3px |
| `select` | boxShadow | rgb(116, 116, 118) 0px 0px 0px 1px |
| `select` | outline | rgb(0, 0, 0) none 0px |
| `select` | maxWidth | 100% |
| `select` | width | 1180px |
| `.fsFormField` | color | rgb(0, 0, 0) |
| `.fsFormField` | backgroundColor | rgb(255, 255, 255) |
| `.fsFormField` | fontFamily | Montserrat, sans-serif |
| `.fsFormField` | fontSize | 16.875px |
| `.fsFormField` | fontWeight | 400 |
| `.fsFormField` | lineHeight | 29.5312px |
| `.fsFormField` | padding | 7px 12px |
| `.fsFormField` | margin | 3.75px 0px |
| `.fsFormField` | border | 1px solid rgb(220, 221, 224) |
| `.fsFormField` | borderRadius | 3px |
| `.fsFormField` | boxShadow | rgb(116, 116, 118) 0px 0px 0px 1px |
| `.fsFormField` | outline | rgb(0, 0, 0) none 0px |
| `.fsFormField` | maxWidth | 100% |
| `.fsFormField` | width | 582.5px |
| `.fsFormField:focus` | color | rgb(0, 0, 0) |
| `.fsFormField:focus` | backgroundColor | rgb(255, 255, 255) |
| `.fsFormField:focus` | fontFamily | Montserrat, sans-serif |
| `.fsFormField:focus` | fontSize | 16.875px |
| `.fsFormField:focus` | fontWeight | 400 |
| `.fsFormField:focus` | lineHeight | 29.5312px |
| `.fsFormField:focus` | padding | 7px 12px |
| `.fsFormField:focus` | margin | 3.75px 0px |
| `.fsFormField:focus` | border | 1px solid rgba(0, 0, 0, 0) |
| `.fsFormField:focus` | borderRadius | 3px |
| `.fsFormField:focus` | boxShadow | rgb(116, 116, 118) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px |
| `.fsFormField:focus` | outline | rgb(0, 0, 0) solid 3px |
| `.fsFormField:focus` | outlineWidth | 3px |
| `.fsFormField:focus` | outlineOffset | 3px |
| `.fsFormField:focus` | maxWidth | 100% |
| `.fsFormField:focus` | width | 582.5px |
| `.fsFormFieldHintText` | color | rgb(116, 116, 118) |
| `.fsFormFieldHintText` | fontFamily | Montserrat, sans-serif |
| `.fsFormFieldHintText` | fontSize | 13.125px |
| `.fsFormFieldHintText` | fontWeight | 400 |
| `.fsFormFieldHintText` | lineHeight | 22.9688px |
| `.fsFormFieldHintText` | margin | 3.75px 0px |
| `.fsFormFieldHintText` | border | 0px none rgb(116, 116, 118) |
| `.fsFormFieldHintText` | letterSpacing | 0.16875px |
| `.fsFormFieldHintText` | outline | rgb(116, 116, 118) none 0px |
| `.fsFormFieldHintText` | width | 582.5px |
| `.fsFormFieldError` | color | rgb(211, 65, 71) |
| `.fsFormFieldError` | fontFamily | Montserrat, sans-serif |
| `.fsFormFieldError` | fontSize | 14px |
| `.fsFormFieldError` | fontWeight | 400 |
| `.fsFormFieldError` | lineHeight | 24.5px |
| `.fsFormFieldError` | margin | 3.75px 0px |
| `.fsFormFieldError` | border | 0px none rgb(211, 65, 71) |
| `.fsFormFieldError` | letterSpacing | 0.16875px |
| `.fsFormFieldError` | outline | rgb(211, 65, 71) none 0px |
| `.fsFormFieldRequiredIndicator` | color | rgb(211, 65, 71) |
| `.fsFormFieldRequiredIndicator` | fontFamily | Montserrat, sans-serif |
| `.fsFormFieldRequiredIndicator` | fontSize | 16.875px |
| `.fsFormFieldRequiredIndicator` | fontWeight | 400 |
| `.fsFormFieldRequiredIndicator` | lineHeight | 30.375px |
| `.fsFormFieldRequiredIndicator` | margin | 0px 0px 0px 1.875px |
| `.fsFormFieldRequiredIndicator` | border | 0px none rgb(211, 65, 71) |
| `.fsFormFieldRequiredIndicator` | letterSpacing | 0.16875px |
| `.fsFormFieldRequiredIndicator` | outline | rgb(211, 65, 71) none 0px |
| `.fsFormFieldRequiredIndicator` | width | 6.6875px |
| `.fsFormsRequiredLegend` | color | rgb(55, 55, 55) |
| `.fsFormsRequiredLegend` | fontFamily | Montserrat, sans-serif |
| `.fsFormsRequiredLegend` | fontSize | 16.875px |
| `.fsFormsRequiredLegend` | fontWeight | 400 |
| `.fsFormsRequiredLegend` | lineHeight | 30.375px |
| `.fsFormsRequiredLegend` | margin | 0px 0px 21.0938px |
| `.fsFormsRequiredLegend` | border | 0px none rgb(55, 55, 55) |
| `.fsFormsRequiredLegend` | letterSpacing | 0.16875px |
| `.fsFormsRequiredLegend` | outline | rgb(55, 55, 55) none 0px |
| `.fsFormsRequiredLegend` | width | 1180px |
| `fieldset` | color | rgb(55, 55, 55) |
| `fieldset` | fontFamily | Montserrat, sans-serif |
| `fieldset` | fontSize | 16.875px |
| `fieldset` | fontWeight | 400 |
| `fieldset` | lineHeight | 29.5312px |
| `fieldset` | border | 0px none rgb(55, 55, 55) |
| `fieldset` | letterSpacing | 0.16875px |
| `fieldset` | outline | rgb(55, 55, 55) none 0px |
| `fieldset` | width | 1180px |
| `fieldset legend` | color | rgb(55, 55, 55) |
| `fieldset legend` | fontFamily | Montserrat, sans-serif |
| `fieldset legend` | fontSize | 16.875px |
| `fieldset legend` | fontWeight | 700 |
| `fieldset legend` | lineHeight | 29.5312px |
| `fieldset legend` | margin | 3.75px 0px |
| `fieldset legend` | border | 0px none rgb(55, 55, 55) |
| `fieldset legend` | letterSpacing | 0.16875px |
| `fieldset legend` | outline | rgb(55, 55, 55) none 0px |
| `fieldset legend` | maxWidth | 100% |
| `fieldset legend` | width | 62.5px |
| `.fsFormSubmitButton` | color | rgb(7, 55, 114) |
| `.fsFormSubmitButton` | backgroundColor | rgb(229, 229, 229) |
| `.fsFormSubmitButton` | fontFamily | Montserrat, sans-serif |
| `.fsFormSubmitButton` | fontSize | 12.1875px |
| `.fsFormSubmitButton` | fontWeight | 600 |
| `.fsFormSubmitButton` | lineHeight | 17.0625px |
| `.fsFormSubmitButton` | padding | 10px 24px |
| `.fsFormSubmitButton` | margin | 0px 0px 10px |
| `.fsFormSubmitButton` | border | 1px solid rgb(229, 229, 229) |
| `.fsFormSubmitButton` | borderRadius | 100px |
| `.fsFormSubmitButton` | letterSpacing | 0.975px |
| `.fsFormSubmitButton` | outline | rgb(7, 55, 114) none 0px |
| `.fsFormSubmitButton` | width | 101.672px |
| `.fsStyleUpdateButton` | fontFamily | Montserrat, sans-serif |
| `.fsStyleUpdateButton` | fontSize | 14px |
| `.fsStyleUpdateButton` | fontWeight | 600 |
| `.fsStyleUpdateButton` | lineHeight | 19.6px |
| `.fsStyleUpdateButton` | padding | 10px 24px |
| `.fsStyleUpdateButton` | border | 0px none rgba(0, 0, 0, 0) |
| `.fsStyleUpdateButton` | borderRadius | 100px |
| `.fsStyleUpdateButton` | letterSpacing | 1.12px |
| `.fsStyleUpdateButton` | outline | rgba(0, 0, 0, 0) none 0px |
| `.fsStyleUpdateButton` | width | 20px |
| `.fsFormFileUploadPicker` | color | rgb(69, 69, 74) |
| `.fsFormFileUploadPicker` | backgroundColor | rgb(244, 244, 245) |
| `.fsFormFileUploadPicker` | fontFamily | Montserrat, sans-serif |
| `.fsFormFileUploadPicker` | fontSize | 13.5px |
| `.fsFormFileUploadPicker` | fontWeight | 400 |
| `.fsFormFileUploadPicker` | padding | 4.5px |
| `.fsFormFileUploadPicker` | border | 1px solid rgb(180, 184, 191) |
| `.fsFormFileUploadPicker` | outline | rgb(69, 69, 74) none 0px |
| `.fsFormFileUploadPicker` | width | 95.3906px |

### Per-Element Focus Detail (.fsForm)

| Element | State | Key values |
|---------|-------|------------|
| `.fsFormField` (text/email/textarea) | default | bg `#FFFFFF`, border `1px solid #DCDDE0`, radius `3px`, padding `7px 12px`, Montserrat `16.875px` |
| `.fsFormField` | :focus | border transparent, `outline: 3px solid #000000`, radius `3px` |
| `label` / `legend` | default | color `#373737`, Montserrat `16.875px`, weight `700`, letter-spacing `0.16875px` |
| `.fsFormFieldHintText` | default | color `#747476`, Montserrat `13.125px` |
| `.fsFormFieldError` | default | color `#D34147`, Montserrat `14px` |
| `.fsFormSubmitButton` | default (enabled) | color `#073772`, bg `#E5E5E5`, pill radius `100px`, padding `10px 24px`, Montserrat `12.1875px` weight `600` |
| `.fsFormFileUploadPicker` | default | Same pill button pattern as submit |

---

## Login

- **URL:** https://www.lisd.net/production2/login
- **Extracted:** 2026-06-23

### Content

### Login

Please provide your username and password to log in:

##### Forgot your login?

Please enter your email address. Instructions for retrieving your username and password will be emailed to you.

##### Create Account

You have been sent an email with your login information.

If you do not have a username and password, please supply the following information and click Continue. Your email address will be your username.

##### Create a new Password

Please enter your username and create a new password.

#### Login flow (staggered)

1. **Stage 1** (`.fsStaggeredLoginStage1`): Username field + "Next" button
2. **Stage 2** (`.fsStaggeredLoginStage2`, hidden): Username display, password field + "Login" button
3. **Forgot password** (`.fsLoginForgotView`): Email field, Submit/Cancel buttons
4. **Create account** (`.fsLoginNewView`): First/Last name, Email, Verify Email, Password, Verify Password, Captcha, Continue/Cancel
5. **Reset password** (`.fsResetPasswordView`): Username, new password fields

#### Form field inventory

- **INPUT**, type=`hidden`, name=`utf8`, text="✓"
- **LABEL**, class=`fsLoginUsernameCheck`, text="Username"
- **INPUT**, type=`text`, id=`fsLoginUsernameCheckField2182`, class=`fsStyleDefaultField`, placeholder="Enter your username", name=`usernameCheck`
- **INPUT**, type=`submit`, class=`fsStyleUpdateButton fsLoginNext`, name=`commit`, text="Next"
- **INPUT**, type=`hidden`, name=`utf8`, text="✓"
- **LABEL**, class=`fsLoginUsername`, text="Username"
- **INPUT**, type=`text`, id=`fsLoginUsernameField2182`, class=`fsStyleDefaultField`, placeholder="Enter your username", name=`username`
- **LABEL**, class=`fsLoginPassword`, text="Password"
- **INPUT**, type=`password`, id=`fsLoginPasswordField2182`, class=`fsStyleDefaultField`, placeholder="Enter your password", name=`password`
- **INPUT**, type=`hidden`, id=`protected_page`, name=`protected_page`, text="false"
- **INPUT**, type=`submit`, class=`fsStyleUpdateButton fsLoginSubmit`, name=`commit`, text="Login"
- **LABEL**, class=`fsFieldLabel`, text="Email:"
- **INPUT**, type=`text`, id=`fsLoginForgotEmailField2182`, class=`fsLoginForgotEmail fsStyleDefaultField`
- **BUTTON**, type=`submit`, class=`fsLoginForgotSubmit fsStyleUpdateButton`, text="Submit"
- **BUTTON**, type=`submit`, class=`fsLoginForgotCancel fsStyleDefaultButton`, text="Cancel"
- **BUTTON**, type=`submit`, class=`fsStyleDefaultButton`, text="OK"
- **LABEL**, class=`fsLoginNewFirstName`, text="First Name"
- **INPUT**, type=`text`, id=`fsLoginNewFirstNameField2182`, class=`fsStyleDefaultField`, placeholder="Enter your first name"
- **LABEL**, class=`fsLoginNewLastName`, text="Last Name"
- **INPUT**, type=`text`, id=`fsLoginNewLastNameField2182`, class=`fsStyleDefaultField`, placeholder="Enter your last name"
- **LABEL**, class=`fsLoginNewEmail`, text="Email"
- **INPUT**, type=`text`, id=`fsLoginNewEmailField2182`, class=`fsStyleDefaultField`, placeholder="Enter your email"
- **LABEL**, class=`fsLoginNewVerifyEmail`, text="Verify Email"
- **INPUT**, type=`text`, id=`fsLoginNewVerifyEmailField2182`, class=`fsStyleDefaultField`, placeholder="Verify your email"
- **LABEL**, class=`fsLoginNewPassword`, text="Password"
- **INPUT**, type=`password`, id=`fsLoginNewPasswordField2182`, class=`fsStyleDefaultField`, placeholder="Enter a password"
- **LABEL**, class=`fsLoginNewVerifyPassword`, text="Verify Password"
- **INPUT**, type=`password`, id=`fsLoginNewVerifyPasswordField2182`, class=`fsStyleDefaultField`, placeholder="Verify the password"
- **TEXTAREA**, type=`textarea`, id=`g-recaptcha-response`, class=`g-recaptcha-response`, name=`g-recaptcha-response`
- **BUTTON**, type=`submit`, class=`fsLoginNewCancel fsStyleDefaultButton`, text="Cancel"
- **BUTTON**, type=`submit`, class=`fsLoginNewContinue fsStyleUpdateButton`, text="Continue"
- **LABEL**, text="Username"
- **INPUT**, type=`text`, id=`fsResetUsernameField2182`, class=`fsResetUsername fsStyleDefaultField`, placeholder="Enter your username"
- **LABEL**, text="Password"
- **INPUT**, type=`password`, id=`fsResetNewPasswordField2182`, class=`fsResetNewPassword fsStyleDefaultField`, placeholder="Enter a password"
- **LABEL**, text="Verify Password"
- **INPUT**, type=`password`, id=`fsResetNewVerifyPasswordField2182`, class=`fsResetNewVerifyPassword fsStyleDefaultField`, placeholder="Verify the password"
- **INPUT**, type=`hidden`, id=`request_key`, class=`fsResetRequestKey`, name=`request_key`
- **BUTTON**, type=`submit`, class=`fsResetContinue fsStyleUpdateButton`, text="Create New Password"
- **BUTTON**, type=`submit`, class=`fsResetCancel fsStyleDefaultButton`, text="Cancel"

### :root CSS Variables

| Variable | Value |
|----------|-------|
| `--primary-color-h` | 213.08 |
| `--primary-color-s` | 88.43% |
| `--primary-color-l` | 23.73% |
| `--primary-color-hsl` | var(--primary-color-h), var(--primary-color-s), var(--primary-color-l) |
| `--primary-color` | #073772 |
| `--secondary-color-h` | 43.1 |
| `--secondary-color-s` | 88.38% |
| `--secondary-color-l` | 52.75% |
| `--secondary-color-hsl` | var(--secondary-color-h), var(--secondary-color-s), var(--secondary-color-l) |
| `--secondary-color` | #f1b51c |
| `--display-accred-panel` | none |
| `--has-sticky-header` | false |
| `--is-district-site` | false |
| `--header-logo-enabled` | true |
| `--footer-logo-enabled` | true |
| `--header-logo-bg` | false |
| `--footer-logo-bg` | false |
| `--header-logo-height-class` | height-medium |
| `--footer-logo-height-class` | height-medium |
| `--show-header-location-name` | false |
| `--show-header-location-title` | false |
| `--show-header-subtitle` | false |
| `--show-header-motto` | false |
| `--show-footer-title` | false |
| `--weglot-display-position` | default |

### Computed Styles — Login Elements

| Selector | Property | Value |
|----------|----------|-------|
| `body` | color | rgb(55, 55, 55) |
| `body` | fontFamily | Montserrat, sans-serif |
| `body` | fontSize | 16.875px |
| `body` | fontWeight | 400 |
| `body` | lineHeight | 29.5312px |
| `body` | border | 0px none rgb(55, 55, 55) |
| `body` | letterSpacing | 0.16875px |
| `body` | outline | rgb(55, 55, 55) none 0px |
| `body` | width | 1280px |
| `h1` | color | rgb(7, 55, 114) |
| `h1` | fontFamily | Merriweather, serif |
| `h1` | fontSize | 41.25px |
| `h1` | fontWeight | 700 |
| `h1` | lineHeight | 47.4375px |
| `h1` | margin | 0px 0px 20px |
| `h1` | border | 0px none rgb(7, 55, 114) |
| `h1` | letterSpacing | -0.825px |
| `h1` | outline | rgb(7, 55, 114) none 0px |
| `h1` | width | 1180px |
| `.fsPageTitle` | color | rgb(7, 55, 114) |
| `.fsPageTitle` | fontFamily | Merriweather, serif |
| `.fsPageTitle` | fontSize | 41.25px |
| `.fsPageTitle` | fontWeight | 700 |
| `.fsPageTitle` | lineHeight | 47.4375px |
| `.fsPageTitle` | margin | 0px 0px 20px |
| `.fsPageTitle` | border | 0px none rgb(7, 55, 114) |
| `.fsPageTitle` | letterSpacing | -0.825px |
| `.fsPageTitle` | outline | rgb(7, 55, 114) none 0px |
| `.fsPageTitle` | width | 1180px |
| `label` | color | rgb(55, 55, 55) |
| `label` | fontFamily | Montserrat, sans-serif |
| `label` | fontSize | 16.875px |
| `label` | fontWeight | 400 |
| `label` | lineHeight | 29.5312px |
| `label` | margin | 0px 8px 0px 0px |
| `label` | border | 0px none rgb(55, 55, 55) |
| `label` | letterSpacing | 0.16875px |
| `label` | outline | rgb(55, 55, 55) none 0px |
| `.fsFieldLabel` | color | rgb(55, 55, 55) |
| `.fsFieldLabel` | fontFamily | Montserrat, sans-serif |
| `.fsFieldLabel` | fontSize | 16.875px |
| `.fsFieldLabel` | fontWeight | 400 |
| `.fsFieldLabel` | lineHeight | 29.5312px |
| `.fsFieldLabel` | margin | 0px 8px 0px 0px |
| `.fsFieldLabel` | border | 0px none rgb(55, 55, 55) |
| `.fsFieldLabel` | letterSpacing | 0.16875px |
| `.fsFieldLabel` | outline | rgb(55, 55, 55) none 0px |
| `.fsStyleDefaultField` | color | rgb(255, 255, 255) |
| `.fsStyleDefaultField` | backgroundColor | rgb(0, 42, 80) |
| `.fsStyleDefaultField` | fontFamily | Montserrat, sans-serif |
| `.fsStyleDefaultField` | fontSize | 14px |
| `.fsStyleDefaultField` | fontWeight | 400 |
| `.fsStyleDefaultField` | lineHeight | 22.4px |
| `.fsStyleDefaultField` | padding | 10px 30px 10px 31px |
| `.fsStyleDefaultField` | border | 1px solid rgba(0, 0, 0, 0) |
| `.fsStyleDefaultField` | borderRadius | 3px |
| `.fsStyleDefaultField` | outline | rgb(255, 255, 255) none 0px |
| `.fsStyleDefaultField` | maxWidth | 100% |
| `.fsStyleDefaultField` | width | 100% |
| `.fsStyleDefaultField:focus` | color | rgb(255, 255, 255) |
| `.fsStyleDefaultField:focus` | backgroundColor | rgb(0, 42, 80) |
| `.fsStyleDefaultField:focus` | fontFamily | Montserrat, sans-serif |
| `.fsStyleDefaultField:focus` | fontSize | 14px |
| `.fsStyleDefaultField:focus` | fontWeight | 400 |
| `.fsStyleDefaultField:focus` | lineHeight | 22.4px |
| `.fsStyleDefaultField:focus` | padding | 10px 30px 10px 31px |
| `.fsStyleDefaultField:focus` | border | 1px solid rgba(0, 0, 0, 0) |
| `.fsStyleDefaultField:focus` | borderRadius | 3px |
| `.fsStyleDefaultField:focus` | outline | rgb(255, 255, 255) none 0px |
| `.fsStyleDefaultField:focus` | maxWidth | 100% |
| `.fsStyleDefaultField:focus` | width | 100% |
| `.fsLoginUsernameCheck` | color | rgb(55, 55, 55) |
| `.fsLoginUsernameCheck` | fontFamily | Montserrat, sans-serif |
| `.fsLoginUsernameCheck` | fontSize | 16.875px |
| `.fsLoginUsernameCheck` | fontWeight | 400 |
| `.fsLoginUsernameCheck` | lineHeight | 29.5312px |
| `.fsLoginUsernameCheck` | border | 0px none rgb(55, 55, 55) |
| `.fsLoginUsernameCheck` | letterSpacing | 0.16875px |
| `.fsLoginUsernameCheck` | outline | rgb(55, 55, 55) none 0px |
| `.fsLoginUsernameCheck` | width | 1180px |
| `.fsLoginNext` | color | rgb(7, 55, 114) |
| `.fsLoginNext` | backgroundColor | rgb(229, 229, 229) |
| `.fsLoginNext` | fontFamily | Montserrat, sans-serif |
| `.fsLoginNext` | fontSize | 12.1875px |
| `.fsLoginNext` | fontWeight | 600 |
| `.fsLoginNext` | lineHeight | 17.0625px |
| `.fsLoginNext` | padding | 10px 24px |
| `.fsLoginNext` | margin | 0px 0px 20px |
| `.fsLoginNext` | border | 1px solid rgb(229, 229, 229) |
| `.fsLoginNext` | borderRadius | 100px |
| `.fsLoginNext` | letterSpacing | 0.975px |
| `.fsLoginNext` | outline | rgb(7, 55, 114) none 0px |
| `.fsLoginNext` | maxWidth | 100% |
| `.fsLoginNext` | width | 83.3125px |
| `.fsLoginSubmit` | color | rgb(7, 55, 114) |
| `.fsLoginSubmit` | backgroundColor | rgb(229, 229, 229) |
| `.fsLoginSubmit` | fontFamily | Montserrat, sans-serif |
| `.fsLoginSubmit` | fontSize | 12.1875px |
| `.fsLoginSubmit` | fontWeight | 600 |
| `.fsLoginSubmit` | lineHeight | 17.0625px |
| `.fsLoginSubmit` | padding | 10px 24px |
| `.fsLoginSubmit` | margin | 0px 0px 20px |
| `.fsLoginSubmit` | border | 1px solid rgb(229, 229, 229) |
| `.fsLoginSubmit` | borderRadius | 100px |
| `.fsLoginSubmit` | letterSpacing | 0.975px |
| `.fsLoginSubmit` | outline | rgb(7, 55, 114) none 0px |
| `.fsLoginSubmit` | maxWidth | 100% |
| `.fsStyleDefaultButton` | color | rgb(7, 55, 114) |
| `.fsStyleDefaultButton` | backgroundColor | rgb(229, 229, 229) |
| `.fsStyleDefaultButton` | fontFamily | Montserrat, sans-serif |
| `.fsStyleDefaultButton` | fontSize | 12.1875px |
| `.fsStyleDefaultButton` | fontWeight | 600 |
| `.fsStyleDefaultButton` | lineHeight | 17.0625px |
| `.fsStyleDefaultButton` | padding | 10px 24px |
| `.fsStyleDefaultButton` | margin | 0px 0px 10px |
| `.fsStyleDefaultButton` | border | 1px solid rgb(229, 229, 229) |
| `.fsStyleDefaultButton` | borderRadius | 100px |
| `.fsStyleDefaultButton` | letterSpacing | 0.975px |
| `.fsStyleDefaultButton` | outline | rgb(7, 55, 114) none 0px |
| `.fsNotification` | color | rgb(22, 48, 82) |
| `.fsNotification` | backgroundColor | rgb(209, 240, 250) |
| `.fsNotification` | fontFamily | Montserrat, sans-serif |
| `.fsNotification` | fontSize | 14px |
| `.fsNotification` | fontWeight | 700 |
| `.fsNotification` | lineHeight | 25.2px |
| `.fsNotification` | padding | 10px |
| `.fsNotification` | margin | 10px 0px 17.5px |
| `.fsNotification` | border | 0px none rgb(22, 48, 82) |
| `.fsNotification` | letterSpacing | 0.16875px |
| `.fsNotification` | outline | rgb(22, 48, 82) none 0px |
| `.fsError` | color | rgb(211, 65, 71) |
| `.fsError` | fontFamily | Montserrat, sans-serif |
| `.fsError` | fontSize | 14px |
| `.fsError` | fontWeight | 400 |
| `.fsError` | lineHeight | 24.5px |
| `.fsError` | margin | 18.75px 0px 50px |
| `.fsError` | border | 0px none rgb(211, 65, 71) |
| `.fsError` | letterSpacing | 0.16875px |
| `.fsError` | outline | rgb(211, 65, 71) none 0px |

### Login Context Styles (.fsLoginMainView)

| Selector | Property | Value |
|----------|----------|-------|
| `.fsLoginMainView input (loginInput)` | color | rgb(0, 0, 0) |
| `.fsLoginMainView input (loginInput)` | backgroundColor | rgb(255, 255, 255) |
| `.fsLoginMainView input (loginInput)` | fontFamily | Montserrat, sans-serif |
| `.fsLoginMainView input (loginInput)` | fontSize | 16.875px |
| `.fsLoginMainView input (loginInput)` | fontWeight | 400 |
| `.fsLoginMainView input (loginInput)` | padding | 5px |
| `.fsLoginMainView input (loginInput)` | border | 1px solid rgb(207, 207, 207) |
| `.fsLoginMainView input (loginInput)` | borderRadius | 0px |
| `.fsLoginMainView input (loginInput)` | outline | rgb(0, 0, 0) none 0px |
| `.fsLoginMainView input (loginInput)` | outlineWidth | 0px |
| `.fsLoginMainView input (loginInput)` | outlineOffset | 0px |
| `.fsLoginMainView input (loginInputFocus)` | border | 1px solid rgb(207, 207, 207) |
| `.fsLoginMainView input (loginInputFocus)` | borderRadius | 2px |
| `.fsLoginMainView input (loginInputFocus)` | outline | rgb(0, 0, 0) solid 3px |
| `.fsLoginMainView input (loginInputFocus)` | outlineWidth | 3px |
| `.fsLoginMainView input (loginInputFocus)` | outlineOffset | 3px |
| `.fsLoginMainView input (loginLabel)` | color | rgb(55, 55, 55) |
| `.fsLoginMainView input (loginLabel)` | fontFamily | Montserrat, sans-serif |
| `.fsLoginMainView input (loginLabel)` | fontSize | 16.875px |
| `.fsLoginMainView input (loginLabel)` | fontWeight | 400 |
| `.fsLoginMainView input (loginLabel)` | letterSpacing | 0.16875px |
| `.fsLoginMainView input (loginNext)` | color | rgb(7, 55, 114) |
| `.fsLoginMainView input (loginNext)` | backgroundColor | rgb(229, 229, 229) |
| `.fsLoginMainView input (loginNext)` | fontSize | 12.1875px |
| `.fsLoginMainView input (loginNext)` | fontWeight | 600 |
| `.fsLoginMainView input (loginNext)` | padding | 10px 24px |
| `.fsLoginMainView input (loginNext)` | border | 1px solid rgb(229, 229, 229) |
| `.fsLoginMainView input (loginNext)` | borderRadius | 100px |
| `.fsLoginMainView input (loginNext)` | letterSpacing | 0.975px |

| Selector | Property | Value |
|----------|----------|-------|
| `.fsLoginMainView label` | color | rgb(55, 55, 55) (#373737) |
| `.fsLoginMainView label` | fontFamily | Montserrat, sans-serif |
| `.fsLoginMainView label` | fontSize | 16.875px |
| `.fsLoginMainView label` | fontWeight | 400 |
| `.fsLoginNext` / `.fsLoginSubmit` | color | rgb(7, 55, 114) (#073772) |
| `.fsLoginNext` / `.fsLoginSubmit` | backgroundColor | rgb(229, 229, 229) (#E5E5E5) |
| `.fsLoginNext` / `.fsLoginSubmit` | borderRadius | 100px (pill) |
| `.fsLoginNext` / `.fsLoginSubmit` | padding | 10px 24px |
| `.fsNotification` | color | rgb(22, 48, 82) |
| `.fsNotification` | backgroundColor | rgb(209, 240, 250) |
| `.fsNotification` | fontWeight | 700 |
| `.fsNotification` | padding | 10px |
| `.fsError` | color | rgb(211, 65, 71) (#D34147) |
| `.fsError` | fontSize | 14px |

#### Login input focus

- Border stays `1px solid rgb(207, 207, 207)` (#CFCFCF)
- Focus ring: `outline: 3px solid rgb(0, 0, 0)` with `outline-offset: 3px`
- Border-radius increases to `2px` on focus

---

## Embed

- **URL:** https://www.lisd.net/production2/embed
- **Extracted:** 2026-06-23

### Content

### Embed

#### YouTube Embed Test

No form elements in page content. Page demonstrates YouTube embed element only.

### :root CSS Variables

| Variable | Value |
|----------|-------|
| `--primary-color-h` | 213.08 |
| `--primary-color-s` | 88.43% |
| `--primary-color-l` | 23.73% |
| `--primary-color-hsl` | var(--primary-color-h), var(--primary-color-s), var(--primary-color-l) |
| `--primary-color` | #073772 |
| `--secondary-color-h` | 43.1 |
| `--secondary-color-s` | 88.38% |
| `--secondary-color-l` | 52.75% |
| `--secondary-color-hsl` | var(--secondary-color-h), var(--secondary-color-s), var(--secondary-color-l) |
| `--secondary-color` | #f1b51c |
| `--display-accred-panel` | none |
| `--has-sticky-header` | false |
| `--is-district-site` | false |
| `--header-logo-enabled` | true |
| `--footer-logo-enabled` | true |
| `--header-logo-bg` | false |
| `--footer-logo-bg` | false |
| `--header-logo-height-class` | height-medium |
| `--footer-logo-height-class` | height-medium |
| `--show-header-location-name` | false |
| `--show-header-location-title` | false |
| `--show-header-subtitle` | false |
| `--show-header-motto` | false |
| `--show-footer-title` | false |
| `--weglot-display-position` | default |

### Computed Styles

| Selector | Property | Value |
|----------|----------|-------|
| `body` | color | rgb(55, 55, 55) |
| `body` | fontFamily | Montserrat, sans-serif |
| `body` | fontSize | 16.875px |
| `body` | fontWeight | 400 |
| `body` | lineHeight | 29.5312px |
| `body` | border | 0px none rgb(55, 55, 55) |
| `body` | letterSpacing | 0.16875px |
| `body` | outline | rgb(55, 55, 55) none 0px |
| `body` | width | 1280px |
| `h1` | color | rgb(7, 55, 114) |
| `h1` | fontFamily | Merriweather, serif |
| `h1` | fontSize | 41.25px |
| `h1` | fontWeight | 700 |
| `h1` | lineHeight | 47.4375px |
| `h1` | margin | 0px 0px 20px |
| `h1` | border | 0px none rgb(7, 55, 114) |
| `h1` | letterSpacing | -0.825px |
| `h1` | outline | rgb(7, 55, 114) none 0px |
| `h1` | width | 1180px |
| `h2` | color | rgb(7, 55, 114) |
| `h2` | fontFamily | Merriweather, serif |
| `h2` | fontSize | 30px |
| `h2` | fontWeight | 700 |
| `h2` | lineHeight | 36px |
| `h2` | margin | 0px 0px 15px |
| `h2` | border | 0px none rgb(7, 55, 114) |
| `h2` | letterSpacing | -0.3px |
| `h2` | outline | rgb(7, 55, 114) none 0px |
| `.fsPageTitle` | color | rgb(7, 55, 114) |
| `.fsPageTitle` | fontFamily | Merriweather, serif |
| `.fsPageTitle` | fontSize | 41.25px |
| `.fsPageTitle` | fontWeight | 700 |
| `.fsPageTitle` | lineHeight | 47.4375px |
| `.fsPageTitle` | margin | 0px 0px 20px |
| `.fsPageTitle` | border | 0px none rgb(7, 55, 114) |
| `.fsPageTitle` | letterSpacing | -0.825px |
| `.fsPageTitle` | outline | rgb(7, 55, 114) none 0px |
| `.fsPageTitle` | width | 1180px |
| `input` | color | rgb(255, 255, 255) |
| `input` | backgroundColor | rgb(0, 42, 80) |
| `input` | fontFamily | Montserrat, sans-serif |
| `input` | fontSize | 14px |
| `input` | fontWeight | 400 |
| `input` | lineHeight | 22.4px |
| `input` | padding | 10px 30px 10px 31px |
| `input` | border | 1px solid rgba(0, 0, 0, 0) |
| `input` | borderRadius | 3px |
| `input` | outline | rgb(255, 255, 255) none 0px |
| `input` | maxWidth | 100% |
| `input` | width | 100% |
| `.fsStyleSearchField` | color | rgb(255, 255, 255) |
| `.fsStyleSearchField` | backgroundColor | rgb(0, 42, 80) |
| `.fsStyleSearchField` | fontFamily | Montserrat, sans-serif |
| `.fsStyleSearchField` | fontSize | 14px |
| `.fsStyleSearchField` | fontWeight | 400 |
| `.fsStyleSearchField` | lineHeight | 22.4px |
| `.fsStyleSearchField` | padding | 10px 30px 10px 31px |
| `.fsStyleSearchField` | border | 1px solid rgba(0, 0, 0, 0) |
| `.fsStyleSearchField` | borderRadius | 3px |
| `.fsStyleSearchField` | outline | rgb(255, 255, 255) none 0px |
| `.fsStyleSearchField` | maxWidth | 100% |
| `.fsStyleSearchField` | width | 100% |
| `.fsStyleSearchField:focus` | color | rgb(255, 255, 255) |
| `.fsStyleSearchField:focus` | backgroundColor | rgb(0, 42, 80) |
| `.fsStyleSearchField:focus` | fontFamily | Montserrat, sans-serif |
| `.fsStyleSearchField:focus` | fontSize | 14px |
| `.fsStyleSearchField:focus` | fontWeight | 400 |
| `.fsStyleSearchField:focus` | lineHeight | 22.4px |
| `.fsStyleSearchField:focus` | padding | 10px 30px 10px 31px |
| `.fsStyleSearchField:focus` | border | 1px solid rgba(0, 0, 0, 0) |
| `.fsStyleSearchField:focus` | borderRadius | 3px |
| `.fsStyleSearchField:focus` | outline | rgb(255, 255, 255) none 0px |
| `.fsStyleSearchField:focus` | maxWidth | 100% |
| `.fsStyleSearchField:focus` | width | 100% |
| `.fsFieldLabel` | color | rgb(55, 55, 55) |
| `.fsFieldLabel` | fontFamily | Montserrat, sans-serif |
| `.fsFieldLabel` | fontSize | 16.875px |
| `.fsFieldLabel` | fontWeight | 400 |
| `.fsFieldLabel` | lineHeight | 29.5312px |
| `.fsFieldLabel` | margin | 0px 8px 0px 0px |
| `.fsFieldLabel` | border | 0px none rgb(55, 55, 55) |
| `.fsFieldLabel` | letterSpacing | 0.16875px |
| `.fsFieldLabel` | outline | rgb(55, 55, 55) none 0px |
| `.fsSearchElementSearchButton` | fontFamily | Montserrat, sans-serif |
| `.fsSearchElementSearchButton` | fontSize | 14px |
| `.fsSearchElementSearchButton` | fontWeight | 600 |
| `.fsSearchElementSearchButton` | lineHeight | 19.6px |
| `.fsSearchElementSearchButton` | padding | 10px 24px |
| `.fsSearchElementSearchButton` | border | 0px none rgba(0, 0, 0, 0) |
| `.fsSearchElementSearchButton` | borderRadius | 100px |
| `.fsSearchElementSearchButton` | letterSpacing | 1.12px |
| `.fsSearchElementSearchButton` | outline | rgba(0, 0, 0, 0) none 0px |
| `.fsSearchElementSearchButton` | width | 20px |
| `.fsStyleUpdateButton` | fontFamily | Montserrat, sans-serif |
| `.fsStyleUpdateButton` | fontSize | 14px |
| `.fsStyleUpdateButton` | fontWeight | 600 |
| `.fsStyleUpdateButton` | lineHeight | 19.6px |
| `.fsStyleUpdateButton` | padding | 10px 24px |
| `.fsStyleUpdateButton` | border | 0px none rgba(0, 0, 0, 0) |
| `.fsStyleUpdateButton` | borderRadius | 100px |
| `.fsStyleUpdateButton` | letterSpacing | 1.12px |
| `.fsStyleUpdateButton` | outline | rgba(0, 0, 0, 0) none 0px |
| `.fsStyleUpdateButton` | width | 20px |

---

## Search

- **URL:** https://www.lisd.net/production2/search
- **Extracted:** 2026-06-23

### Content

### Search

#### Search

#### Search Results

#### Search form in content area

- **LABEL**, class=`fsFieldLabel`, text="Search"
- **INPUT**, type=`text`, id=`fsSearchInput_2404`, class=`fsStyleSearchField fsStyleDefaultField`, placeholder="Search", name=`q`
- **BUTTON**, type=`reset`, class=`fsButtonClear fsStateHidden`, text="Clear"
- **BUTTON**, type=`submit`, class=`fsSearchElementSearchButton fsStyleUpdateButton`, text="Search"

### :root CSS Variables

| Variable | Value |
|----------|-------|
| `--primary-color-h` | 213.08 |
| `--primary-color-s` | 88.43% |
| `--primary-color-l` | 23.73% |
| `--primary-color-hsl` | var(--primary-color-h), var(--primary-color-s), var(--primary-color-l) |
| `--primary-color` | #073772 |
| `--secondary-color-h` | 43.1 |
| `--secondary-color-s` | 88.38% |
| `--secondary-color-l` | 52.75% |
| `--secondary-color-hsl` | var(--secondary-color-h), var(--secondary-color-s), var(--secondary-color-l) |
| `--secondary-color` | #f1b51c |
| `--display-accred-panel` | none |
| `--has-sticky-header` | false |
| `--is-district-site` | false |
| `--header-logo-enabled` | true |
| `--footer-logo-enabled` | true |
| `--header-logo-bg` | false |
| `--footer-logo-bg` | false |
| `--header-logo-height-class` | height-medium |
| `--footer-logo-height-class` | height-medium |
| `--show-header-location-name` | false |
| `--show-header-location-title` | false |
| `--show-header-subtitle` | false |
| `--show-header-motto` | false |
| `--show-footer-title` | false |
| `--weglot-display-position` | default |

### Computed Styles

| Selector | Property | Value |
|----------|----------|-------|
| `body` | color | rgb(55, 55, 55) |
| `body` | fontFamily | Montserrat, sans-serif |
| `body` | fontSize | 16.875px |
| `body` | fontWeight | 400 |
| `body` | lineHeight | 29.5312px |
| `body` | border | 0px none rgb(55, 55, 55) |
| `body` | letterSpacing | 0.16875px |
| `body` | outline | rgb(55, 55, 55) none 0px |
| `body` | width | 1280px |
| `h1` | color | rgb(7, 55, 114) |
| `h1` | fontFamily | Merriweather, serif |
| `h1` | fontSize | 41.25px |
| `h1` | fontWeight | 700 |
| `h1` | lineHeight | 47.4375px |
| `h1` | margin | 0px 0px 20px |
| `h1` | border | 0px none rgb(7, 55, 114) |
| `h1` | letterSpacing | -0.825px |
| `h1` | outline | rgb(7, 55, 114) none 0px |
| `h1` | width | 1180px |
| `h2` | color | rgb(7, 55, 114) |
| `h2` | fontFamily | Merriweather, serif |
| `h2` | fontSize | 30px |
| `h2` | fontWeight | 700 |
| `h2` | lineHeight | 36px |
| `h2` | margin | 0px 0px 15px |
| `h2` | border | 0px none rgb(7, 55, 114) |
| `h2` | letterSpacing | -0.3px |
| `h2` | outline | rgb(7, 55, 114) none 0px |
| `.fsPageTitle` | color | rgb(7, 55, 114) |
| `.fsPageTitle` | fontFamily | Merriweather, serif |
| `.fsPageTitle` | fontSize | 41.25px |
| `.fsPageTitle` | fontWeight | 700 |
| `.fsPageTitle` | lineHeight | 47.4375px |
| `.fsPageTitle` | margin | 0px 0px 20px |
| `.fsPageTitle` | border | 0px none rgb(7, 55, 114) |
| `.fsPageTitle` | letterSpacing | -0.825px |
| `.fsPageTitle` | outline | rgb(7, 55, 114) none 0px |
| `.fsPageTitle` | width | 1180px |
| `input` | color | rgb(255, 255, 255) |
| `input` | backgroundColor | rgb(0, 42, 80) |
| `input` | fontFamily | Montserrat, sans-serif |
| `input` | fontSize | 14px |
| `input` | fontWeight | 400 |
| `input` | lineHeight | 22.4px |
| `input` | padding | 10px 30px 10px 31px |
| `input` | border | 1px solid rgba(0, 0, 0, 0) |
| `input` | borderRadius | 3px |
| `input` | outline | rgb(255, 255, 255) none 0px |
| `input` | maxWidth | 100% |
| `input` | width | 100% |
| `.fsStyleSearchField` | color | rgb(255, 255, 255) |
| `.fsStyleSearchField` | backgroundColor | rgb(0, 42, 80) |
| `.fsStyleSearchField` | fontFamily | Montserrat, sans-serif |
| `.fsStyleSearchField` | fontSize | 14px |
| `.fsStyleSearchField` | fontWeight | 400 |
| `.fsStyleSearchField` | lineHeight | 22.4px |
| `.fsStyleSearchField` | padding | 10px 30px 10px 31px |
| `.fsStyleSearchField` | border | 1px solid rgba(0, 0, 0, 0) |
| `.fsStyleSearchField` | borderRadius | 3px |
| `.fsStyleSearchField` | outline | rgb(255, 255, 255) none 0px |
| `.fsStyleSearchField` | maxWidth | 100% |
| `.fsStyleSearchField` | width | 100% |
| `.fsStyleSearchField:focus` | color | rgb(255, 255, 255) |
| `.fsStyleSearchField:focus` | backgroundColor | rgb(0, 42, 80) |
| `.fsStyleSearchField:focus` | fontFamily | Montserrat, sans-serif |
| `.fsStyleSearchField:focus` | fontSize | 14px |
| `.fsStyleSearchField:focus` | fontWeight | 400 |
| `.fsStyleSearchField:focus` | lineHeight | 22.4px |
| `.fsStyleSearchField:focus` | padding | 10px 30px 10px 31px |
| `.fsStyleSearchField:focus` | border | 1px solid rgba(0, 0, 0, 0) |
| `.fsStyleSearchField:focus` | borderRadius | 3px |
| `.fsStyleSearchField:focus` | outline | rgb(255, 255, 255) none 0px |
| `.fsStyleSearchField:focus` | maxWidth | 100% |
| `.fsStyleSearchField:focus` | width | 100% |
| `.fsFieldLabel` | color | rgb(55, 55, 55) |
| `.fsFieldLabel` | fontFamily | Montserrat, sans-serif |
| `.fsFieldLabel` | fontSize | 16.875px |
| `.fsFieldLabel` | fontWeight | 400 |
| `.fsFieldLabel` | lineHeight | 29.5312px |
| `.fsFieldLabel` | margin | 0px 8px 0px 0px |
| `.fsFieldLabel` | border | 0px none rgb(55, 55, 55) |
| `.fsFieldLabel` | letterSpacing | 0.16875px |
| `.fsFieldLabel` | outline | rgb(55, 55, 55) none 0px |
| `.fsSearchElementSearchButton` | fontFamily | Montserrat, sans-serif |
| `.fsSearchElementSearchButton` | fontSize | 14px |
| `.fsSearchElementSearchButton` | fontWeight | 600 |
| `.fsSearchElementSearchButton` | lineHeight | 19.6px |
| `.fsSearchElementSearchButton` | padding | 10px 24px |
| `.fsSearchElementSearchButton` | border | 0px none rgba(0, 0, 0, 0) |
| `.fsSearchElementSearchButton` | borderRadius | 100px |
| `.fsSearchElementSearchButton` | letterSpacing | 1.12px |
| `.fsSearchElementSearchButton` | outline | rgba(0, 0, 0, 0) none 0px |
| `.fsSearchElementSearchButton` | width | 20px |
| `.fsStyleUpdateButton` | fontFamily | Montserrat, sans-serif |
| `.fsStyleUpdateButton` | fontSize | 14px |
| `.fsStyleUpdateButton` | fontWeight | 600 |
| `.fsStyleUpdateButton` | lineHeight | 19.6px |
| `.fsStyleUpdateButton` | padding | 10px 24px |
| `.fsStyleUpdateButton` | border | 0px none rgba(0, 0, 0, 0) |
| `.fsStyleUpdateButton` | borderRadius | 100px |
| `.fsStyleUpdateButton` | letterSpacing | 1.12px |
| `.fsStyleUpdateButton` | outline | rgba(0, 0, 0, 0) none 0px |
| `.fsStyleUpdateButton` | width | 20px |

### Search Form Context (#fsPageContent)

| Selector | Property | Value |
|----------|----------|-------|
| `#fsPageContent .fsStyleSearchField (default)` | color | rgb(0, 0, 0) |
| `#fsPageContent .fsStyleSearchField (default)` | backgroundColor | rgb(255, 255, 255) |
| `#fsPageContent .fsStyleSearchField (default)` | fontSize | 16.875px |
| `#fsPageContent .fsStyleSearchField (default)` | padding | 5px 30px 5px 5px |
| `#fsPageContent .fsStyleSearchField (default)` | border | 1px solid rgb(207, 207, 207) |
| `#fsPageContent .fsStyleSearchField (default)` | borderRadius | 0px |
| `#fsPageContent .fsStyleSearchField (focus)` | borderRadius | 2px |
| `#fsPageContent .fsStyleSearchField (focus)` | outline | rgb(0, 0, 0) solid 3px |
| `#fsPageContent .fsStyleSearchField (focus)` | outlineWidth | 3px |

| Selector | Property | Value |
|----------|----------|-------|
| `#fsPageContent .fsSearchElementSearchButton (default)` | color | rgb(7, 55, 114) |
| `#fsPageContent .fsSearchElementSearchButton (default)` | backgroundColor | rgb(229, 229, 229) |
| `#fsPageContent .fsSearchElementSearchButton (default)` | fontSize | 12.1875px |
| `#fsPageContent .fsSearchElementSearchButton (default)` | fontWeight | 600 |
| `#fsPageContent .fsSearchElementSearchButton (default)` | padding | 10px 24px |
| `#fsPageContent .fsSearchElementSearchButton (default)` | borderRadius | 100px |
| `#fsPageContent .fsSearchElementSearchButton (default)` | letterSpacing | 0.975px |

---

## Resources

- **URL:** https://www.lisd.net/production2/resources
- **Extracted:** 2026-06-23

### Content

### Resources

#### Single Image

#### Single Video

#### Resource List

#### Resource Grid

#### Resource Slideshow

No form elements in page content. Page demonstrates resource display elements (Single Image, Single Video, Resource List, Resource Grid, Resource Slideshow).

### :root CSS Variables

| Variable | Value |
|----------|-------|
| `--primary-color-h` | 213.08 |
| `--primary-color-s` | 88.43% |
| `--primary-color-l` | 23.73% |
| `--primary-color-hsl` | var(--primary-color-h), var(--primary-color-s), var(--primary-color-l) |
| `--primary-color` | #073772 |
| `--secondary-color-h` | 43.1 |
| `--secondary-color-s` | 88.38% |
| `--secondary-color-l` | 52.75% |
| `--secondary-color-hsl` | var(--secondary-color-h), var(--secondary-color-s), var(--secondary-color-l) |
| `--secondary-color` | #f1b51c |
| `--display-accred-panel` | none |
| `--has-sticky-header` | false |
| `--is-district-site` | false |
| `--header-logo-enabled` | true |
| `--footer-logo-enabled` | true |
| `--header-logo-bg` | false |
| `--footer-logo-bg` | false |
| `--header-logo-height-class` | height-medium |
| `--footer-logo-height-class` | height-medium |
| `--show-header-location-name` | false |
| `--show-header-location-title` | false |
| `--show-header-subtitle` | false |
| `--show-header-motto` | false |
| `--show-footer-title` | false |
| `--weglot-display-position` | default |

### Computed Styles

| Selector | Property | Value |
|----------|----------|-------|
| `body` | color | rgb(55, 55, 55) |
| `body` | fontFamily | Montserrat, sans-serif |
| `body` | fontSize | 16.875px |
| `body` | fontWeight | 400 |
| `body` | lineHeight | 29.5312px |
| `body` | border | 0px none rgb(55, 55, 55) |
| `body` | letterSpacing | 0.16875px |
| `body` | outline | rgb(55, 55, 55) none 0px |
| `body` | width | 1280px |
| `h1` | color | rgb(7, 55, 114) |
| `h1` | fontFamily | Merriweather, serif |
| `h1` | fontSize | 41.25px |
| `h1` | fontWeight | 700 |
| `h1` | lineHeight | 47.4375px |
| `h1` | margin | 0px 0px 20px |
| `h1` | border | 0px none rgb(7, 55, 114) |
| `h1` | letterSpacing | -0.825px |
| `h1` | outline | rgb(7, 55, 114) none 0px |
| `h1` | width | 1180px |
| `h2` | color | rgb(7, 55, 114) |
| `h2` | fontFamily | Merriweather, serif |
| `h2` | fontSize | 30px |
| `h2` | fontWeight | 700 |
| `h2` | lineHeight | 36px |
| `h2` | margin | 0px 0px 15px |
| `h2` | border | 0px none rgb(7, 55, 114) |
| `h2` | letterSpacing | -0.3px |
| `h2` | outline | rgb(7, 55, 114) none 0px |
| `.fsPageTitle` | color | rgb(7, 55, 114) |
| `.fsPageTitle` | fontFamily | Merriweather, serif |
| `.fsPageTitle` | fontSize | 41.25px |
| `.fsPageTitle` | fontWeight | 700 |
| `.fsPageTitle` | lineHeight | 47.4375px |
| `.fsPageTitle` | margin | 0px 0px 20px |
| `.fsPageTitle` | border | 0px none rgb(7, 55, 114) |
| `.fsPageTitle` | letterSpacing | -0.825px |
| `.fsPageTitle` | outline | rgb(7, 55, 114) none 0px |
| `.fsPageTitle` | width | 1180px |
| `input` | color | rgb(255, 255, 255) |
| `input` | backgroundColor | rgb(0, 42, 80) |
| `input` | fontFamily | Montserrat, sans-serif |
| `input` | fontSize | 14px |
| `input` | fontWeight | 400 |
| `input` | lineHeight | 22.4px |
| `input` | padding | 10px 30px 10px 31px |
| `input` | border | 1px solid rgba(0, 0, 0, 0) |
| `input` | borderRadius | 3px |
| `input` | outline | rgb(255, 255, 255) none 0px |
| `input` | maxWidth | 100% |
| `input` | width | 100% |
| `.fsStyleSearchField` | color | rgb(255, 255, 255) |
| `.fsStyleSearchField` | backgroundColor | rgb(0, 42, 80) |
| `.fsStyleSearchField` | fontFamily | Montserrat, sans-serif |
| `.fsStyleSearchField` | fontSize | 14px |
| `.fsStyleSearchField` | fontWeight | 400 |
| `.fsStyleSearchField` | lineHeight | 22.4px |
| `.fsStyleSearchField` | padding | 10px 30px 10px 31px |
| `.fsStyleSearchField` | border | 1px solid rgba(0, 0, 0, 0) |
| `.fsStyleSearchField` | borderRadius | 3px |
| `.fsStyleSearchField` | outline | rgb(255, 255, 255) none 0px |
| `.fsStyleSearchField` | maxWidth | 100% |
| `.fsStyleSearchField` | width | 100% |
| `.fsStyleSearchField:focus` | color | rgb(255, 255, 255) |
| `.fsStyleSearchField:focus` | backgroundColor | rgb(0, 42, 80) |
| `.fsStyleSearchField:focus` | fontFamily | Montserrat, sans-serif |
| `.fsStyleSearchField:focus` | fontSize | 14px |
| `.fsStyleSearchField:focus` | fontWeight | 400 |
| `.fsStyleSearchField:focus` | lineHeight | 22.4px |
| `.fsStyleSearchField:focus` | padding | 10px 30px 10px 31px |
| `.fsStyleSearchField:focus` | border | 1px solid rgba(0, 0, 0, 0) |
| `.fsStyleSearchField:focus` | borderRadius | 3px |
| `.fsStyleSearchField:focus` | outline | rgb(255, 255, 255) none 0px |
| `.fsStyleSearchField:focus` | maxWidth | 100% |
| `.fsStyleSearchField:focus` | width | 100% |
| `.fsFieldLabel` | color | rgb(55, 55, 55) |
| `.fsFieldLabel` | fontFamily | Montserrat, sans-serif |
| `.fsFieldLabel` | fontSize | 16.875px |
| `.fsFieldLabel` | fontWeight | 400 |
| `.fsFieldLabel` | lineHeight | 29.5312px |
| `.fsFieldLabel` | margin | 0px 8px 0px 0px |
| `.fsFieldLabel` | border | 0px none rgb(55, 55, 55) |
| `.fsFieldLabel` | letterSpacing | 0.16875px |
| `.fsFieldLabel` | outline | rgb(55, 55, 55) none 0px |
| `.fsSearchElementSearchButton` | fontFamily | Montserrat, sans-serif |
| `.fsSearchElementSearchButton` | fontSize | 14px |
| `.fsSearchElementSearchButton` | fontWeight | 600 |
| `.fsSearchElementSearchButton` | lineHeight | 19.6px |
| `.fsSearchElementSearchButton` | padding | 10px 24px |
| `.fsSearchElementSearchButton` | border | 0px none rgba(0, 0, 0, 0) |
| `.fsSearchElementSearchButton` | borderRadius | 100px |
| `.fsSearchElementSearchButton` | letterSpacing | 1.12px |
| `.fsSearchElementSearchButton` | outline | rgba(0, 0, 0, 0) none 0px |
| `.fsSearchElementSearchButton` | width | 20px |
| `.fsStyleUpdateButton` | fontFamily | Montserrat, sans-serif |
| `.fsStyleUpdateButton` | fontSize | 14px |
| `.fsStyleUpdateButton` | fontWeight | 600 |
| `.fsStyleUpdateButton` | lineHeight | 19.6px |
| `.fsStyleUpdateButton` | padding | 10px 24px |
| `.fsStyleUpdateButton` | border | 0px none rgba(0, 0, 0, 0) |
| `.fsStyleUpdateButton` | borderRadius | 100px |
| `.fsStyleUpdateButton` | letterSpacing | 1.12px |
| `.fsStyleUpdateButton` | outline | rgba(0, 0, 0, 0) none 0px |
| `.fsStyleUpdateButton` | width | 20px |

---

## Global Focus Indicator Rules (client_v7.css)

From `/uploaded/themes/lisd_custom/client_v7.css` Section 13 — WCAG 2.1 AA:

```css
a:focus-visible,
button:focus-visible,
input:focus-visible,
select:focus-visible,
textarea:focus-visible,
[tabindex]:focus-visible {
  outline: 3px solid currentColor;
  outline-offset: 3px;
  border-radius: 2px;
}

a:focus,
button:focus {
  outline: 2px solid currentColor;
  outline-offset: 2px;
}
```

**Observed on form inputs:** `.fsFormField:focus` uses `outline: 3px solid #000` (not `currentColor`). Login/search `.fsStyleDefaultField:focus` matches the global rule with black outline + 3px offset.

---

## Summary: Key Form/Input CSS Values

| Property | Form fields (`.fsFormField`) | Login/Search (`.fsStyleDefaultField` in content) | Header search (dark bar) |
|----------|-------------------------------|--------------------------------------------------|--------------------------|
| Font | Montserrat 16.875px, weight 400 | Montserrat 16.875px, weight 400 | Montserrat 14px |
| Text color | `#000000` | `#000000` | `#FFFFFF` |
| Background | `#FFFFFF` | `#FFFFFF` | `#002A50` (rgb(0,42,80)) |
| Border | `1px solid #DCDDE0` | `1px solid #CFCFCF` | transparent |
| Border-radius | `3px` | `0px` | `3px` |
| Padding | `7px 12px` | `5px` (login) / `5px 30px 5px 5px` (search) | `10px 30px 10px 31px` |
| Focus outline | `3px solid #000`, border → transparent | `3px solid #000`, offset `3px`, radius → `2px` | No visible outline change |
| Label color | `#373737`, weight 700 | `#373737`, weight 400 | `#373737` |
| Hint text | `#747476`, 13.125px | — | — |
| Error text | `#D34147`, 14px | `#D34147`, 14px | — |
| Required asterisk | `#D34147` | — | — |
| Submit/CTA button | Pill, bg `#E5E5E5`, text `#073772`, 12.1875px weight 600 | Same pattern | Same pattern |
| Primary brand | `--primary-color: #073772` | | |
| Secondary brand | `--secondary-color: #f1b51c` | | |
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
# Part 5: Athletics, Banners, Calendar & Constituent

> Live extraction from lisd.net/production2 — 2026-06-23. Pages extracted: 21.

## Athletics

- **URL:** https://www.lisd.net/production2/athletics
- **Extracted:** 2026-06-23

### Content

### Athletics

- Events List
- Single Event
- Roster
- Teams
- Profile
- Event Table

### :root CSS Variables

| Variable | Value |
|----------|-------|
| `--display-accred-panel` | none |
| `--footer-logo-bg` | false |
| `--footer-logo-enabled` | true |
| `--footer-logo-height-class` | height-medium |
| `--has-sticky-header` | false |
| `--header-logo-bg` | false |
| `--header-logo-enabled` | true |
| `--header-logo-height-class` | height-medium |
| `--is-district-site` | false |
| `--primary-color` | #073772 |
| `--primary-color-h` | 213.08 |
| `--primary-color-hsl` | var(--primary-color-h), var(--primary-color-s), var(--primary-color-l) |
| `--primary-color-l` | 23.73% |
| `--primary-color-s` | 88.43% |
| `--secondary-color` | #f1b51c |
| `--secondary-color-h` | 43.1 |
| `--secondary-color-hsl` | var(--secondary-color-h), var(--secondary-color-s), var(--secondary-color-l) |
| `--secondary-color-l` | 52.75% |
| `--secondary-color-s` | 88.38% |
| `--show-footer-title` | false |
| `--show-header-location-name` | false |
| `--show-header-location-title` | false |
| `--show-header-motto` | false |
| `--show-header-subtitle` | false |
| `--weglot-display-position` | default |

### Computed Styles

| Selector | Property | Value |
|----------|----------|-------|
| `body` | color | rgb(55, 55, 55) |
| `body` | backgroundColor | rgba(0, 0, 0, 0) |
| `body` | fontFamily | Montserrat, sans-serif |
| `body` | fontSize | 16.875px |
| `body` | fontWeight | 400 |
| `body` | lineHeight | 29.5312px |
| `body` | padding | 0px |
| `body` | margin | 0px |
| `body` | border | 0px none rgb(55, 55, 55) |
| `body` | borderRadius | 0px |
| `body` | textTransform | none |
| `body` | letterSpacing | 0.16875px |
| `body` | boxShadow | none |
| `body` | outline | rgb(55, 55, 55) none 0px |
| `body` | maxWidth | none |
| `body` | width | 1280px |
| `body` | minHeight | 0px |
| `h1` | color | rgb(7, 55, 114) |
| `h1` | backgroundColor | rgba(0, 0, 0, 0) |
| `h1` | fontFamily | Merriweather, serif |
| `h1` | fontSize | 41.25px |
| `h1` | fontWeight | 700 |
| `h1` | lineHeight | 47.4375px |
| `h1` | padding | 0px |
| `h1` | margin | 0px 0px 20px |
| `h1` | border | 0px none rgb(7, 55, 114) |
| `h1` | borderRadius | 0px |
| `h1` | textTransform | none |
| `h1` | letterSpacing | -0.825px |
| `h1` | boxShadow | none |
| `h1` | outline | rgb(7, 55, 114) none 0px |
| `h1` | maxWidth | none |
| `h1` | width | 1180px |
| `h1` | minHeight | 0px |
| `h2` | color | rgb(7, 55, 114) |
| `h2` | backgroundColor | rgba(0, 0, 0, 0) |
| `h2` | fontFamily | Merriweather, serif |
| `h2` | fontSize | 30px |
| `h2` | fontWeight | 700 |
| `h2` | lineHeight | 36px |
| `h2` | padding | 0px |
| `h2` | margin | 0px 0px 15px |
| `h2` | border | 0px none rgb(7, 55, 114) |
| `h2` | borderRadius | 0px |
| `h2` | textTransform | none |
| `h2` | letterSpacing | -0.3px |
| `h2` | boxShadow | none |
| `h2` | outline | rgb(7, 55, 114) none 0px |
| `h2` | maxWidth | none |
| `h2` | width | auto |
| `h2` | minHeight | 0px |
| `#fsPageContent a` | color | rgb(7, 55, 114) |
| `#fsPageContent a` | backgroundColor | rgba(0, 0, 0, 0) |
| `#fsPageContent a` | fontFamily | Montserrat, sans-serif |
| `#fsPageContent a` | fontSize | 16.875px |
| `#fsPageContent a` | fontWeight | 500 |
| `#fsPageContent a` | lineHeight | 29.5312px |
| `#fsPageContent a` | padding | 10px 0px |
| `#fsPageContent a` | margin | 0px |
| `#fsPageContent a` | border | 0px none rgb(7, 55, 114) |
| `#fsPageContent a` | borderRadius | 0px |
| `#fsPageContent a` | textTransform | none |
| `#fsPageContent a` | letterSpacing | 0.16875px |
| `#fsPageContent a` | boxShadow | none |
| `#fsPageContent a` | outline | rgb(7, 55, 114) none 0px |
| `#fsPageContent a` | maxWidth | none |
| `#fsPageContent a` | width | 1180px |
| `#fsPageContent a` | minHeight | 0px |
| `label` | color | rgb(55, 55, 55) |
| `label` | backgroundColor | rgba(0, 0, 0, 0) |
| `label` | fontFamily | Montserrat, sans-serif |
| `label` | fontSize | 16.875px |
| `label` | fontWeight | 400 |
| `label` | lineHeight | 29.5312px |
| `label` | padding | 0px |
| `label` | margin | 0px 8px 0px 0px |
| `label` | border | 0px none rgb(55, 55, 55) |
| `label` | borderRadius | 0px |
| `label` | textTransform | none |
| `label` | letterSpacing | 0.16875px |
| `label` | boxShadow | none |
| `label` | outline | rgb(55, 55, 55) none 0px |
| `label` | maxWidth | none |
| `label` | width | auto |
| `label` | minHeight | 0px |
| `input` | color | rgb(255, 255, 255) |
| `input` | backgroundColor | rgb(0, 42, 80) |
| `input` | fontFamily | Montserrat, sans-serif |
| `input` | fontSize | 14px |
| `input` | fontWeight | 400 |
| `input` | lineHeight | 22.4px |
| `input` | padding | 10px 30px 10px 31px |
| `input` | margin | 0px |
| `input` | border | 1px solid rgba(0, 0, 0, 0) |
| `input` | borderRadius | 3px |
| `input` | textTransform | none |
| `input` | letterSpacing | normal |
| `input` | boxShadow | none |
| `input` | outline | rgb(255, 255, 255) none 0px |
| `input` | maxWidth | 100% |
| `input` | width | 100% |
| `input` | minHeight | 0px |
| `input[type=text]` | color | rgb(255, 255, 255) |
| `input[type=text]` | backgroundColor | rgb(0, 42, 80) |
| `input[type=text]` | fontFamily | Montserrat, sans-serif |
| `input[type=text]` | fontSize | 14px |
| `input[type=text]` | fontWeight | 400 |
| `input[type=text]` | lineHeight | 22.4px |
| `input[type=text]` | padding | 10px 30px 10px 31px |
| `input[type=text]` | margin | 0px |
| `input[type=text]` | border | 1px solid rgba(0, 0, 0, 0) |
| `input[type=text]` | borderRadius | 3px |
| `input[type=text]` | textTransform | none |
| `input[type=text]` | letterSpacing | normal |
| `input[type=text]` | boxShadow | none |
| `input[type=text]` | outline | rgb(255, 255, 255) none 0px |
| `input[type=text]` | maxWidth | 100% |
| `input[type=text]` | width | 100% |
| `input[type=text]` | minHeight | 0px |
| `button` | color | rgba(0, 0, 0, 0) |
| `button` | backgroundColor | rgba(0, 0, 0, 0) |
| `button` | fontFamily | Montserrat, sans-serif |
| `button` | fontSize | 16.875px |
| `button` | fontWeight | 400 |
| `button` | lineHeight | 29.5312px |
| `button` | padding | 1px 6px |
| `button` | margin | 0px |
| `button` | border | 0px none rgba(0, 0, 0, 0) |
| `button` | borderRadius | 0px |
| `button` | textTransform | none |
| `button` | letterSpacing | normal |
| `button` | boxShadow | none |
| `button` | outline | rgba(0, 0, 0, 0) none 0px |
| `button` | maxWidth | none |
| `button` | width | 24px |
| `button` | minHeight | 0px |
| `#fsHeader` | color | rgb(55, 55, 55) |
| `#fsHeader` | backgroundColor | rgba(0, 0, 0, 0) |
| `#fsHeader` | fontFamily | Montserrat, sans-serif |
| `#fsHeader` | fontSize | 16.875px |
| `#fsHeader` | fontWeight | 400 |
| `#fsHeader` | lineHeight | 29.5312px |
| `#fsHeader` | padding | 0px 0px 80px |
| `#fsHeader` | margin | 0px |
| `#fsHeader` | border | 0px none rgb(55, 55, 55) |
| `#fsHeader` | borderRadius | 0px |
| `#fsHeader` | textTransform | none |
| `#fsHeader` | letterSpacing | 0.16875px |
| `#fsHeader` | boxShadow | none |
| `#fsHeader` | outline | rgb(55, 55, 55) none 0px |
| `#fsHeader` | maxWidth | none |
| `#fsHeader` | width | 1280px |
| `#fsHeader` | minHeight | 0px |
| `.fsTabsNav` | color | rgb(55, 55, 55) |
| `.fsTabsNav` | backgroundColor | rgba(0, 0, 0, 0) |
| `.fsTabsNav` | fontFamily | Montserrat, sans-serif |
| `.fsTabsNav` | fontSize | 15px |
| `.fsTabsNav` | fontWeight | 400 |
| `.fsTabsNav` | lineHeight | 24.375px |
| `.fsTabsNav` | padding | 0px |
| `.fsTabsNav` | margin | 0px |
| `.fsTabsNav` | border | 0px none rgb(55, 55, 55) |
| `.fsTabsNav` | borderRadius | 0px |
| `.fsTabsNav` | textTransform | none |
| `.fsTabsNav` | letterSpacing | 0.16875px |
| `.fsTabsNav` | boxShadow | none |
| `.fsTabsNav` | outline | rgb(55, 55, 55) none 0px |
| `.fsTabsNav` | maxWidth | none |
| `.fsTabsNav` | width | 1080px |
| `.fsTabsNav` | minHeight | 0px |

## Events List

- **URL:** https://www.lisd.net/production2/athletics/events-list
- **Extracted:** 2026-06-23

### Content

### Events List

#### Athletics Event List

### :root CSS Variables

| Variable | Value |
|----------|-------|
| `--display-accred-panel` | none |
| `--footer-logo-bg` | false |
| `--footer-logo-enabled` | true |
| `--footer-logo-height-class` | height-medium |
| `--has-sticky-header` | false |
| `--header-logo-bg` | false |
| `--header-logo-enabled` | true |
| `--header-logo-height-class` | height-medium |
| `--is-district-site` | false |
| `--primary-color` | #073772 |
| `--primary-color-h` | 213.08 |
| `--primary-color-hsl` | var(--primary-color-h), var(--primary-color-s), var(--primary-color-l) |
| `--primary-color-l` | 23.73% |
| `--primary-color-s` | 88.43% |
| `--secondary-color` | #f1b51c |
| `--secondary-color-h` | 43.1 |
| `--secondary-color-hsl` | var(--secondary-color-h), var(--secondary-color-s), var(--secondary-color-l) |
| `--secondary-color-l` | 52.75% |
| `--secondary-color-s` | 88.38% |
| `--show-footer-title` | false |
| `--show-header-location-name` | false |
| `--show-header-location-title` | false |
| `--show-header-motto` | false |
| `--show-header-subtitle` | false |
| `--weglot-display-position` | default |

### Computed Styles

| Selector | Property | Value |
|----------|----------|-------|
| `body` | color | rgb(55, 55, 55) |
| `body` | backgroundColor | rgba(0, 0, 0, 0) |
| `body` | fontFamily | Montserrat, sans-serif |
| `body` | fontSize | 16.875px |
| `body` | fontWeight | 400 |
| `body` | lineHeight | 29.5312px |
| `body` | padding | 0px |
| `body` | margin | 0px |
| `body` | border | 0px none rgb(55, 55, 55) |
| `body` | borderRadius | 0px |
| `body` | textTransform | none |
| `body` | letterSpacing | 0.16875px |
| `body` | boxShadow | none |
| `body` | outline | rgb(55, 55, 55) none 0px |
| `body` | maxWidth | none |
| `body` | width | 1280px |
| `body` | minHeight | 0px |
| `h1` | color | rgb(7, 55, 114) |
| `h1` | backgroundColor | rgba(0, 0, 0, 0) |
| `h1` | fontFamily | Merriweather, serif |
| `h1` | fontSize | 41.25px |
| `h1` | fontWeight | 700 |
| `h1` | lineHeight | 47.4375px |
| `h1` | padding | 0px |
| `h1` | margin | 0px 0px 20px |
| `h1` | border | 0px none rgb(7, 55, 114) |
| `h1` | borderRadius | 0px |
| `h1` | textTransform | none |
| `h1` | letterSpacing | -0.825px |
| `h1` | boxShadow | none |
| `h1` | outline | rgb(7, 55, 114) none 0px |
| `h1` | maxWidth | none |
| `h1` | width | 1180px |
| `h1` | minHeight | 0px |
| `h2` | color | rgb(7, 55, 114) |
| `h2` | backgroundColor | rgba(0, 0, 0, 0) |
| `h2` | fontFamily | Merriweather, serif |
| `h2` | fontSize | 30px |
| `h2` | fontWeight | 700 |
| `h2` | lineHeight | 36px |
| `h2` | padding | 0px |
| `h2` | margin | 0px 0px 15px |
| `h2` | border | 0px none rgb(7, 55, 114) |
| `h2` | borderRadius | 0px |
| `h2` | textTransform | none |
| `h2` | letterSpacing | -0.3px |
| `h2` | boxShadow | none |
| `h2` | outline | rgb(7, 55, 114) none 0px |
| `h2` | maxWidth | none |
| `h2` | width | auto |
| `h2` | minHeight | 0px |
| `label` | color | rgb(55, 55, 55) |
| `label` | backgroundColor | rgba(0, 0, 0, 0) |
| `label` | fontFamily | Montserrat, sans-serif |
| `label` | fontSize | 16.875px |
| `label` | fontWeight | 400 |
| `label` | lineHeight | 29.5312px |
| `label` | padding | 0px |
| `label` | margin | 0px 8px 0px 0px |
| `label` | border | 0px none rgb(55, 55, 55) |
| `label` | borderRadius | 0px |
| `label` | textTransform | none |
| `label` | letterSpacing | 0.16875px |
| `label` | boxShadow | none |
| `label` | outline | rgb(55, 55, 55) none 0px |
| `label` | maxWidth | none |
| `label` | width | auto |
| `label` | minHeight | 0px |
| `input` | color | rgb(255, 255, 255) |
| `input` | backgroundColor | rgb(0, 42, 80) |
| `input` | fontFamily | Montserrat, sans-serif |
| `input` | fontSize | 14px |
| `input` | fontWeight | 400 |
| `input` | lineHeight | 22.4px |
| `input` | padding | 10px 30px 10px 31px |
| `input` | margin | 0px |
| `input` | border | 1px solid rgba(0, 0, 0, 0) |
| `input` | borderRadius | 3px |
| `input` | textTransform | none |
| `input` | letterSpacing | normal |
| `input` | boxShadow | none |
| `input` | outline | rgb(255, 255, 255) none 0px |
| `input` | maxWidth | 100% |
| `input` | width | 100% |
| `input` | minHeight | 0px |
| `input[type=text]` | color | rgb(255, 255, 255) |
| `input[type=text]` | backgroundColor | rgb(0, 42, 80) |
| `input[type=text]` | fontFamily | Montserrat, sans-serif |
| `input[type=text]` | fontSize | 14px |
| `input[type=text]` | fontWeight | 400 |
| `input[type=text]` | lineHeight | 22.4px |
| `input[type=text]` | padding | 10px 30px 10px 31px |
| `input[type=text]` | margin | 0px |
| `input[type=text]` | border | 1px solid rgba(0, 0, 0, 0) |
| `input[type=text]` | borderRadius | 3px |
| `input[type=text]` | textTransform | none |
| `input[type=text]` | letterSpacing | normal |
| `input[type=text]` | boxShadow | none |
| `input[type=text]` | outline | rgb(255, 255, 255) none 0px |
| `input[type=text]` | maxWidth | 100% |
| `input[type=text]` | width | 100% |
| `input[type=text]` | minHeight | 0px |
| `button` | color | rgba(0, 0, 0, 0) |
| `button` | backgroundColor | rgba(0, 0, 0, 0) |
| `button` | fontFamily | Montserrat, sans-serif |
| `button` | fontSize | 16.875px |
| `button` | fontWeight | 400 |
| `button` | lineHeight | 29.5312px |
| `button` | padding | 1px 6px |
| `button` | margin | 0px |
| `button` | border | 0px none rgba(0, 0, 0, 0) |
| `button` | borderRadius | 0px |
| `button` | textTransform | none |
| `button` | letterSpacing | normal |
| `button` | boxShadow | none |
| `button` | outline | rgba(0, 0, 0, 0) none 0px |
| `button` | maxWidth | none |
| `button` | width | 24px |
| `button` | minHeight | 0px |
| `#fsHeader` | color | rgb(55, 55, 55) |
| `#fsHeader` | backgroundColor | rgba(0, 0, 0, 0) |
| `#fsHeader` | fontFamily | Montserrat, sans-serif |
| `#fsHeader` | fontSize | 16.875px |
| `#fsHeader` | fontWeight | 400 |
| `#fsHeader` | lineHeight | 29.5312px |
| `#fsHeader` | padding | 0px 0px 80px |
| `#fsHeader` | margin | 0px |
| `#fsHeader` | border | 0px none rgb(55, 55, 55) |
| `#fsHeader` | borderRadius | 0px |
| `#fsHeader` | textTransform | none |
| `#fsHeader` | letterSpacing | 0.16875px |
| `#fsHeader` | boxShadow | none |
| `#fsHeader` | outline | rgb(55, 55, 55) none 0px |
| `#fsHeader` | maxWidth | none |
| `#fsHeader` | width | 1280px |
| `#fsHeader` | minHeight | 0px |
| `.fsTabsNav` | color | rgb(55, 55, 55) |
| `.fsTabsNav` | backgroundColor | rgba(0, 0, 0, 0) |
| `.fsTabsNav` | fontFamily | Montserrat, sans-serif |
| `.fsTabsNav` | fontSize | 15px |
| `.fsTabsNav` | fontWeight | 400 |
| `.fsTabsNav` | lineHeight | 24.375px |
| `.fsTabsNav` | padding | 0px |
| `.fsTabsNav` | margin | 0px |
| `.fsTabsNav` | border | 0px none rgb(55, 55, 55) |
| `.fsTabsNav` | borderRadius | 0px |
| `.fsTabsNav` | textTransform | none |
| `.fsTabsNav` | letterSpacing | 0.16875px |
| `.fsTabsNav` | boxShadow | none |
| `.fsTabsNav` | outline | rgb(55, 55, 55) none 0px |
| `.fsTabsNav` | maxWidth | none |
| `.fsTabsNav` | width | 1080px |
| `.fsTabsNav` | minHeight | 0px |

## Single Event

- **URL:** https://www.lisd.net/production2/athletics/single-event
- **Extracted:** 2026-06-23

### Content

### Single Event

#### Athletics Event

### :root CSS Variables

| Variable | Value |
|----------|-------|
| `--display-accred-panel` | none |
| `--footer-logo-bg` | false |
| `--footer-logo-enabled` | true |
| `--footer-logo-height-class` | height-medium |
| `--has-sticky-header` | false |
| `--header-logo-bg` | false |
| `--header-logo-enabled` | true |
| `--header-logo-height-class` | height-medium |
| `--is-district-site` | false |
| `--primary-color` | #073772 |
| `--primary-color-h` | 213.08 |
| `--primary-color-hsl` | var(--primary-color-h), var(--primary-color-s), var(--primary-color-l) |
| `--primary-color-l` | 23.73% |
| `--primary-color-s` | 88.43% |
| `--secondary-color` | #f1b51c |
| `--secondary-color-h` | 43.1 |
| `--secondary-color-hsl` | var(--secondary-color-h), var(--secondary-color-s), var(--secondary-color-l) |
| `--secondary-color-l` | 52.75% |
| `--secondary-color-s` | 88.38% |
| `--show-footer-title` | false |
| `--show-header-location-name` | false |
| `--show-header-location-title` | false |
| `--show-header-motto` | false |
| `--show-header-subtitle` | false |
| `--weglot-display-position` | default |

### Computed Styles

| Selector | Property | Value |
|----------|----------|-------|
| `body` | color | rgb(55, 55, 55) |
| `body` | backgroundColor | rgba(0, 0, 0, 0) |
| `body` | fontFamily | Montserrat, sans-serif |
| `body` | fontSize | 16.875px |
| `body` | fontWeight | 400 |
| `body` | lineHeight | 29.5312px |
| `body` | padding | 0px |
| `body` | margin | 0px |
| `body` | border | 0px none rgb(55, 55, 55) |
| `body` | borderRadius | 0px |
| `body` | textTransform | none |
| `body` | letterSpacing | 0.16875px |
| `body` | boxShadow | none |
| `body` | outline | rgb(55, 55, 55) none 0px |
| `body` | maxWidth | none |
| `body` | width | 1280px |
| `body` | minHeight | 0px |
| `h1` | color | rgb(7, 55, 114) |
| `h1` | backgroundColor | rgba(0, 0, 0, 0) |
| `h1` | fontFamily | Merriweather, serif |
| `h1` | fontSize | 41.25px |
| `h1` | fontWeight | 700 |
| `h1` | lineHeight | 47.4375px |
| `h1` | padding | 0px |
| `h1` | margin | 0px 0px 20px |
| `h1` | border | 0px none rgb(7, 55, 114) |
| `h1` | borderRadius | 0px |
| `h1` | textTransform | none |
| `h1` | letterSpacing | -0.825px |
| `h1` | boxShadow | none |
| `h1` | outline | rgb(7, 55, 114) none 0px |
| `h1` | maxWidth | none |
| `h1` | width | 1180px |
| `h1` | minHeight | 0px |
| `h2` | color | rgb(7, 55, 114) |
| `h2` | backgroundColor | rgba(0, 0, 0, 0) |
| `h2` | fontFamily | Merriweather, serif |
| `h2` | fontSize | 30px |
| `h2` | fontWeight | 700 |
| `h2` | lineHeight | 36px |
| `h2` | padding | 0px |
| `h2` | margin | 0px 0px 15px |
| `h2` | border | 0px none rgb(7, 55, 114) |
| `h2` | borderRadius | 0px |
| `h2` | textTransform | none |
| `h2` | letterSpacing | -0.3px |
| `h2` | boxShadow | none |
| `h2` | outline | rgb(7, 55, 114) none 0px |
| `h2` | maxWidth | none |
| `h2` | width | auto |
| `h2` | minHeight | 0px |
| `label` | color | rgb(55, 55, 55) |
| `label` | backgroundColor | rgba(0, 0, 0, 0) |
| `label` | fontFamily | Montserrat, sans-serif |
| `label` | fontSize | 16.875px |
| `label` | fontWeight | 400 |
| `label` | lineHeight | 29.5312px |
| `label` | padding | 0px |
| `label` | margin | 0px 8px 0px 0px |
| `label` | border | 0px none rgb(55, 55, 55) |
| `label` | borderRadius | 0px |
| `label` | textTransform | none |
| `label` | letterSpacing | 0.16875px |
| `label` | boxShadow | none |
| `label` | outline | rgb(55, 55, 55) none 0px |
| `label` | maxWidth | none |
| `label` | width | auto |
| `label` | minHeight | 0px |
| `input` | color | rgb(255, 255, 255) |
| `input` | backgroundColor | rgb(0, 42, 80) |
| `input` | fontFamily | Montserrat, sans-serif |
| `input` | fontSize | 14px |
| `input` | fontWeight | 400 |
| `input` | lineHeight | 22.4px |
| `input` | padding | 10px 30px 10px 31px |
| `input` | margin | 0px |
| `input` | border | 1px solid rgba(0, 0, 0, 0) |
| `input` | borderRadius | 3px |
| `input` | textTransform | none |
| `input` | letterSpacing | normal |
| `input` | boxShadow | none |
| `input` | outline | rgb(255, 255, 255) none 0px |
| `input` | maxWidth | 100% |
| `input` | width | 100% |
| `input` | minHeight | 0px |
| `input[type=text]` | color | rgb(255, 255, 255) |
| `input[type=text]` | backgroundColor | rgb(0, 42, 80) |
| `input[type=text]` | fontFamily | Montserrat, sans-serif |
| `input[type=text]` | fontSize | 14px |
| `input[type=text]` | fontWeight | 400 |
| `input[type=text]` | lineHeight | 22.4px |
| `input[type=text]` | padding | 10px 30px 10px 31px |
| `input[type=text]` | margin | 0px |
| `input[type=text]` | border | 1px solid rgba(0, 0, 0, 0) |
| `input[type=text]` | borderRadius | 3px |
| `input[type=text]` | textTransform | none |
| `input[type=text]` | letterSpacing | normal |
| `input[type=text]` | boxShadow | none |
| `input[type=text]` | outline | rgb(255, 255, 255) none 0px |
| `input[type=text]` | maxWidth | 100% |
| `input[type=text]` | width | 100% |
| `input[type=text]` | minHeight | 0px |
| `button` | color | rgba(0, 0, 0, 0) |
| `button` | backgroundColor | rgba(0, 0, 0, 0) |
| `button` | fontFamily | Montserrat, sans-serif |
| `button` | fontSize | 16.875px |
| `button` | fontWeight | 400 |
| `button` | lineHeight | 29.5312px |
| `button` | padding | 1px 6px |
| `button` | margin | 0px |
| `button` | border | 0px none rgba(0, 0, 0, 0) |
| `button` | borderRadius | 0px |
| `button` | textTransform | none |
| `button` | letterSpacing | normal |
| `button` | boxShadow | none |
| `button` | outline | rgba(0, 0, 0, 0) none 0px |
| `button` | maxWidth | none |
| `button` | width | 24px |
| `button` | minHeight | 0px |
| `#fsHeader` | color | rgb(55, 55, 55) |
| `#fsHeader` | backgroundColor | rgba(0, 0, 0, 0) |
| `#fsHeader` | fontFamily | Montserrat, sans-serif |
| `#fsHeader` | fontSize | 16.875px |
| `#fsHeader` | fontWeight | 400 |
| `#fsHeader` | lineHeight | 29.5312px |
| `#fsHeader` | padding | 0px 0px 80px |
| `#fsHeader` | margin | 0px |
| `#fsHeader` | border | 0px none rgb(55, 55, 55) |
| `#fsHeader` | borderRadius | 0px |
| `#fsHeader` | textTransform | none |
| `#fsHeader` | letterSpacing | 0.16875px |
| `#fsHeader` | boxShadow | none |
| `#fsHeader` | outline | rgb(55, 55, 55) none 0px |
| `#fsHeader` | maxWidth | none |
| `#fsHeader` | width | 1280px |
| `#fsHeader` | minHeight | 0px |
| `.fsTabsNav` | color | rgb(55, 55, 55) |
| `.fsTabsNav` | backgroundColor | rgba(0, 0, 0, 0) |
| `.fsTabsNav` | fontFamily | Montserrat, sans-serif |
| `.fsTabsNav` | fontSize | 15px |
| `.fsTabsNav` | fontWeight | 400 |
| `.fsTabsNav` | lineHeight | 24.375px |
| `.fsTabsNav` | padding | 0px |
| `.fsTabsNav` | margin | 0px |
| `.fsTabsNav` | border | 0px none rgb(55, 55, 55) |
| `.fsTabsNav` | borderRadius | 0px |
| `.fsTabsNav` | textTransform | none |
| `.fsTabsNav` | letterSpacing | 0.16875px |
| `.fsTabsNav` | boxShadow | none |
| `.fsTabsNav` | outline | rgb(55, 55, 55) none 0px |
| `.fsTabsNav` | maxWidth | none |
| `.fsTabsNav` | width | 1080px |
| `.fsTabsNav` | minHeight | 0px |

## Roster

- **URL:** https://www.lisd.net/production2/athletics/roster
- **Extracted:** 2026-06-23

### Content

### Roster

#### Player Roster

#### Coaches Roster

### :root CSS Variables

| Variable | Value |
|----------|-------|
| `--display-accred-panel` | none |
| `--footer-logo-bg` | false |
| `--footer-logo-enabled` | true |
| `--footer-logo-height-class` | height-medium |
| `--has-sticky-header` | false |
| `--header-logo-bg` | false |
| `--header-logo-enabled` | true |
| `--header-logo-height-class` | height-medium |
| `--is-district-site` | false |
| `--primary-color` | #073772 |
| `--primary-color-h` | 213.08 |
| `--primary-color-hsl` | var(--primary-color-h), var(--primary-color-s), var(--primary-color-l) |
| `--primary-color-l` | 23.73% |
| `--primary-color-s` | 88.43% |
| `--secondary-color` | #f1b51c |
| `--secondary-color-h` | 43.1 |
| `--secondary-color-hsl` | var(--secondary-color-h), var(--secondary-color-s), var(--secondary-color-l) |
| `--secondary-color-l` | 52.75% |
| `--secondary-color-s` | 88.38% |
| `--show-footer-title` | false |
| `--show-header-location-name` | false |
| `--show-header-location-title` | false |
| `--show-header-motto` | false |
| `--show-header-subtitle` | false |
| `--weglot-display-position` | default |

### Computed Styles

| Selector | Property | Value |
|----------|----------|-------|
| `body` | color | rgb(55, 55, 55) |
| `body` | backgroundColor | rgba(0, 0, 0, 0) |
| `body` | fontFamily | Montserrat, sans-serif |
| `body` | fontSize | 16.875px |
| `body` | fontWeight | 400 |
| `body` | lineHeight | 29.5312px |
| `body` | padding | 0px |
| `body` | margin | 0px |
| `body` | border | 0px none rgb(55, 55, 55) |
| `body` | borderRadius | 0px |
| `body` | textTransform | none |
| `body` | letterSpacing | 0.16875px |
| `body` | boxShadow | none |
| `body` | outline | rgb(55, 55, 55) none 0px |
| `body` | maxWidth | none |
| `body` | width | 1280px |
| `body` | minHeight | 0px |
| `h1` | color | rgb(7, 55, 114) |
| `h1` | backgroundColor | rgba(0, 0, 0, 0) |
| `h1` | fontFamily | Merriweather, serif |
| `h1` | fontSize | 41.25px |
| `h1` | fontWeight | 700 |
| `h1` | lineHeight | 47.4375px |
| `h1` | padding | 0px |
| `h1` | margin | 0px 0px 20px |
| `h1` | border | 0px none rgb(7, 55, 114) |
| `h1` | borderRadius | 0px |
| `h1` | textTransform | none |
| `h1` | letterSpacing | -0.825px |
| `h1` | boxShadow | none |
| `h1` | outline | rgb(7, 55, 114) none 0px |
| `h1` | maxWidth | none |
| `h1` | width | 1180px |
| `h1` | minHeight | 0px |
| `h2` | color | rgb(7, 55, 114) |
| `h2` | backgroundColor | rgba(0, 0, 0, 0) |
| `h2` | fontFamily | Merriweather, serif |
| `h2` | fontSize | 30px |
| `h2` | fontWeight | 700 |
| `h2` | lineHeight | 36px |
| `h2` | padding | 0px |
| `h2` | margin | 0px 0px 15px |
| `h2` | border | 0px none rgb(7, 55, 114) |
| `h2` | borderRadius | 0px |
| `h2` | textTransform | none |
| `h2` | letterSpacing | -0.3px |
| `h2` | boxShadow | none |
| `h2` | outline | rgb(7, 55, 114) none 0px |
| `h2` | maxWidth | none |
| `h2` | width | auto |
| `h2` | minHeight | 0px |
| `label` | color | rgb(55, 55, 55) |
| `label` | backgroundColor | rgba(0, 0, 0, 0) |
| `label` | fontFamily | Montserrat, sans-serif |
| `label` | fontSize | 16.875px |
| `label` | fontWeight | 400 |
| `label` | lineHeight | 29.5312px |
| `label` | padding | 0px |
| `label` | margin | 0px 8px 0px 0px |
| `label` | border | 0px none rgb(55, 55, 55) |
| `label` | borderRadius | 0px |
| `label` | textTransform | none |
| `label` | letterSpacing | 0.16875px |
| `label` | boxShadow | none |
| `label` | outline | rgb(55, 55, 55) none 0px |
| `label` | maxWidth | none |
| `label` | width | auto |
| `label` | minHeight | 0px |
| `input` | color | rgb(255, 255, 255) |
| `input` | backgroundColor | rgb(0, 42, 80) |
| `input` | fontFamily | Montserrat, sans-serif |
| `input` | fontSize | 14px |
| `input` | fontWeight | 400 |
| `input` | lineHeight | 22.4px |
| `input` | padding | 10px 30px 10px 31px |
| `input` | margin | 0px |
| `input` | border | 1px solid rgba(0, 0, 0, 0) |
| `input` | borderRadius | 3px |
| `input` | textTransform | none |
| `input` | letterSpacing | normal |
| `input` | boxShadow | none |
| `input` | outline | rgb(255, 255, 255) none 0px |
| `input` | maxWidth | 100% |
| `input` | width | 100% |
| `input` | minHeight | 0px |
| `input[type=text]` | color | rgb(255, 255, 255) |
| `input[type=text]` | backgroundColor | rgb(0, 42, 80) |
| `input[type=text]` | fontFamily | Montserrat, sans-serif |
| `input[type=text]` | fontSize | 14px |
| `input[type=text]` | fontWeight | 400 |
| `input[type=text]` | lineHeight | 22.4px |
| `input[type=text]` | padding | 10px 30px 10px 31px |
| `input[type=text]` | margin | 0px |
| `input[type=text]` | border | 1px solid rgba(0, 0, 0, 0) |
| `input[type=text]` | borderRadius | 3px |
| `input[type=text]` | textTransform | none |
| `input[type=text]` | letterSpacing | normal |
| `input[type=text]` | boxShadow | none |
| `input[type=text]` | outline | rgb(255, 255, 255) none 0px |
| `input[type=text]` | maxWidth | 100% |
| `input[type=text]` | width | 100% |
| `input[type=text]` | minHeight | 0px |
| `button` | color | rgba(0, 0, 0, 0) |
| `button` | backgroundColor | rgba(0, 0, 0, 0) |
| `button` | fontFamily | Montserrat, sans-serif |
| `button` | fontSize | 16.875px |
| `button` | fontWeight | 400 |
| `button` | lineHeight | 29.5312px |
| `button` | padding | 1px 6px |
| `button` | margin | 0px |
| `button` | border | 0px none rgba(0, 0, 0, 0) |
| `button` | borderRadius | 0px |
| `button` | textTransform | none |
| `button` | letterSpacing | normal |
| `button` | boxShadow | none |
| `button` | outline | rgba(0, 0, 0, 0) none 0px |
| `button` | maxWidth | none |
| `button` | width | 24px |
| `button` | minHeight | 0px |
| `#fsHeader` | color | rgb(55, 55, 55) |
| `#fsHeader` | backgroundColor | rgba(0, 0, 0, 0) |
| `#fsHeader` | fontFamily | Montserrat, sans-serif |
| `#fsHeader` | fontSize | 16.875px |
| `#fsHeader` | fontWeight | 400 |
| `#fsHeader` | lineHeight | 29.5312px |
| `#fsHeader` | padding | 0px 0px 80px |
| `#fsHeader` | margin | 0px |
| `#fsHeader` | border | 0px none rgb(55, 55, 55) |
| `#fsHeader` | borderRadius | 0px |
| `#fsHeader` | textTransform | none |
| `#fsHeader` | letterSpacing | 0.16875px |
| `#fsHeader` | boxShadow | none |
| `#fsHeader` | outline | rgb(55, 55, 55) none 0px |
| `#fsHeader` | maxWidth | none |
| `#fsHeader` | width | 1280px |
| `#fsHeader` | minHeight | 0px |
| `.fsTabsNav` | color | rgb(55, 55, 55) |
| `.fsTabsNav` | backgroundColor | rgba(0, 0, 0, 0) |
| `.fsTabsNav` | fontFamily | Montserrat, sans-serif |
| `.fsTabsNav` | fontSize | 15px |
| `.fsTabsNav` | fontWeight | 400 |
| `.fsTabsNav` | lineHeight | 24.375px |
| `.fsTabsNav` | padding | 0px |
| `.fsTabsNav` | margin | 0px |
| `.fsTabsNav` | border | 0px none rgb(55, 55, 55) |
| `.fsTabsNav` | borderRadius | 0px |
| `.fsTabsNav` | textTransform | none |
| `.fsTabsNav` | letterSpacing | 0.16875px |
| `.fsTabsNav` | boxShadow | none |
| `.fsTabsNav` | outline | rgb(55, 55, 55) none 0px |
| `.fsTabsNav` | maxWidth | none |
| `.fsTabsNav` | width | 1080px |
| `.fsTabsNav` | minHeight | 0px |

## Teams

- **URL:** https://www.lisd.net/production2/athletics/teams
- **Extracted:** 2026-06-23

### Content

### Teams

#### Athletics Team Directory

### :root CSS Variables

| Variable | Value |
|----------|-------|
| `--display-accred-panel` | none |
| `--footer-logo-bg` | false |
| `--footer-logo-enabled` | true |
| `--footer-logo-height-class` | height-medium |
| `--has-sticky-header` | false |
| `--header-logo-bg` | false |
| `--header-logo-enabled` | true |
| `--header-logo-height-class` | height-medium |
| `--is-district-site` | false |
| `--primary-color` | #073772 |
| `--primary-color-h` | 213.08 |
| `--primary-color-hsl` | var(--primary-color-h), var(--primary-color-s), var(--primary-color-l) |
| `--primary-color-l` | 23.73% |
| `--primary-color-s` | 88.43% |
| `--secondary-color` | #f1b51c |
| `--secondary-color-h` | 43.1 |
| `--secondary-color-hsl` | var(--secondary-color-h), var(--secondary-color-s), var(--secondary-color-l) |
| `--secondary-color-l` | 52.75% |
| `--secondary-color-s` | 88.38% |
| `--show-footer-title` | false |
| `--show-header-location-name` | false |
| `--show-header-location-title` | false |
| `--show-header-motto` | false |
| `--show-header-subtitle` | false |
| `--weglot-display-position` | default |

### Computed Styles

| Selector | Property | Value |
|----------|----------|-------|
| `body` | color | rgb(55, 55, 55) |
| `body` | backgroundColor | rgba(0, 0, 0, 0) |
| `body` | fontFamily | Montserrat, sans-serif |
| `body` | fontSize | 16.875px |
| `body` | fontWeight | 400 |
| `body` | lineHeight | 29.5312px |
| `body` | padding | 0px |
| `body` | margin | 0px |
| `body` | border | 0px none rgb(55, 55, 55) |
| `body` | borderRadius | 0px |
| `body` | textTransform | none |
| `body` | letterSpacing | 0.16875px |
| `body` | boxShadow | none |
| `body` | outline | rgb(55, 55, 55) none 0px |
| `body` | maxWidth | none |
| `body` | width | 1280px |
| `body` | minHeight | 0px |
| `h1` | color | rgb(7, 55, 114) |
| `h1` | backgroundColor | rgba(0, 0, 0, 0) |
| `h1` | fontFamily | Merriweather, serif |
| `h1` | fontSize | 41.25px |
| `h1` | fontWeight | 700 |
| `h1` | lineHeight | 47.4375px |
| `h1` | padding | 0px |
| `h1` | margin | 0px 0px 20px |
| `h1` | border | 0px none rgb(7, 55, 114) |
| `h1` | borderRadius | 0px |
| `h1` | textTransform | none |
| `h1` | letterSpacing | -0.825px |
| `h1` | boxShadow | none |
| `h1` | outline | rgb(7, 55, 114) none 0px |
| `h1` | maxWidth | none |
| `h1` | width | 1180px |
| `h1` | minHeight | 0px |
| `h2` | color | rgb(7, 55, 114) |
| `h2` | backgroundColor | rgba(0, 0, 0, 0) |
| `h2` | fontFamily | Merriweather, serif |
| `h2` | fontSize | 30px |
| `h2` | fontWeight | 700 |
| `h2` | lineHeight | 36px |
| `h2` | padding | 0px |
| `h2` | margin | 0px 0px 15px |
| `h2` | border | 0px none rgb(7, 55, 114) |
| `h2` | borderRadius | 0px |
| `h2` | textTransform | none |
| `h2` | letterSpacing | -0.3px |
| `h2` | boxShadow | none |
| `h2` | outline | rgb(7, 55, 114) none 0px |
| `h2` | maxWidth | none |
| `h2` | width | auto |
| `h2` | minHeight | 0px |
| `label` | color | rgb(55, 55, 55) |
| `label` | backgroundColor | rgba(0, 0, 0, 0) |
| `label` | fontFamily | Montserrat, sans-serif |
| `label` | fontSize | 16.875px |
| `label` | fontWeight | 400 |
| `label` | lineHeight | 29.5312px |
| `label` | padding | 0px |
| `label` | margin | 0px 8px 0px 0px |
| `label` | border | 0px none rgb(55, 55, 55) |
| `label` | borderRadius | 0px |
| `label` | textTransform | none |
| `label` | letterSpacing | 0.16875px |
| `label` | boxShadow | none |
| `label` | outline | rgb(55, 55, 55) none 0px |
| `label` | maxWidth | none |
| `label` | width | auto |
| `label` | minHeight | 0px |
| `input` | color | rgb(255, 255, 255) |
| `input` | backgroundColor | rgb(0, 42, 80) |
| `input` | fontFamily | Montserrat, sans-serif |
| `input` | fontSize | 14px |
| `input` | fontWeight | 400 |
| `input` | lineHeight | 22.4px |
| `input` | padding | 10px 30px 10px 31px |
| `input` | margin | 0px |
| `input` | border | 1px solid rgba(0, 0, 0, 0) |
| `input` | borderRadius | 3px |
| `input` | textTransform | none |
| `input` | letterSpacing | normal |
| `input` | boxShadow | none |
| `input` | outline | rgb(255, 255, 255) none 0px |
| `input` | maxWidth | 100% |
| `input` | width | 100% |
| `input` | minHeight | 0px |
| `input[type=text]` | color | rgb(255, 255, 255) |
| `input[type=text]` | backgroundColor | rgb(0, 42, 80) |
| `input[type=text]` | fontFamily | Montserrat, sans-serif |
| `input[type=text]` | fontSize | 14px |
| `input[type=text]` | fontWeight | 400 |
| `input[type=text]` | lineHeight | 22.4px |
| `input[type=text]` | padding | 10px 30px 10px 31px |
| `input[type=text]` | margin | 0px |
| `input[type=text]` | border | 1px solid rgba(0, 0, 0, 0) |
| `input[type=text]` | borderRadius | 3px |
| `input[type=text]` | textTransform | none |
| `input[type=text]` | letterSpacing | normal |
| `input[type=text]` | boxShadow | none |
| `input[type=text]` | outline | rgb(255, 255, 255) none 0px |
| `input[type=text]` | maxWidth | 100% |
| `input[type=text]` | width | 100% |
| `input[type=text]` | minHeight | 0px |
| `button` | color | rgba(0, 0, 0, 0) |
| `button` | backgroundColor | rgba(0, 0, 0, 0) |
| `button` | fontFamily | Montserrat, sans-serif |
| `button` | fontSize | 16.875px |
| `button` | fontWeight | 400 |
| `button` | lineHeight | 29.5312px |
| `button` | padding | 1px 6px |
| `button` | margin | 0px |
| `button` | border | 0px none rgba(0, 0, 0, 0) |
| `button` | borderRadius | 0px |
| `button` | textTransform | none |
| `button` | letterSpacing | normal |
| `button` | boxShadow | none |
| `button` | outline | rgba(0, 0, 0, 0) none 0px |
| `button` | maxWidth | none |
| `button` | width | 24px |
| `button` | minHeight | 0px |
| `#fsHeader` | color | rgb(55, 55, 55) |
| `#fsHeader` | backgroundColor | rgba(0, 0, 0, 0) |
| `#fsHeader` | fontFamily | Montserrat, sans-serif |
| `#fsHeader` | fontSize | 16.875px |
| `#fsHeader` | fontWeight | 400 |
| `#fsHeader` | lineHeight | 29.5312px |
| `#fsHeader` | padding | 0px 0px 80px |
| `#fsHeader` | margin | 0px |
| `#fsHeader` | border | 0px none rgb(55, 55, 55) |
| `#fsHeader` | borderRadius | 0px |
| `#fsHeader` | textTransform | none |
| `#fsHeader` | letterSpacing | 0.16875px |
| `#fsHeader` | boxShadow | none |
| `#fsHeader` | outline | rgb(55, 55, 55) none 0px |
| `#fsHeader` | maxWidth | none |
| `#fsHeader` | width | 1280px |
| `#fsHeader` | minHeight | 0px |
| `.fsTabsNav` | color | rgb(55, 55, 55) |
| `.fsTabsNav` | backgroundColor | rgba(0, 0, 0, 0) |
| `.fsTabsNav` | fontFamily | Montserrat, sans-serif |
| `.fsTabsNav` | fontSize | 15px |
| `.fsTabsNav` | fontWeight | 400 |
| `.fsTabsNav` | lineHeight | 24.375px |
| `.fsTabsNav` | padding | 0px |
| `.fsTabsNav` | margin | 0px |
| `.fsTabsNav` | border | 0px none rgb(55, 55, 55) |
| `.fsTabsNav` | borderRadius | 0px |
| `.fsTabsNav` | textTransform | none |
| `.fsTabsNav` | letterSpacing | 0.16875px |
| `.fsTabsNav` | boxShadow | none |
| `.fsTabsNav` | outline | rgb(55, 55, 55) none 0px |
| `.fsTabsNav` | maxWidth | none |
| `.fsTabsNav` | width | 1080px |
| `.fsTabsNav` | minHeight | 0px |

## Profile

- **URL:** https://www.lisd.net/production2/athletics/profile
- **Extracted:** 2026-06-23

### Content

### Profile

#### Athletics Team Profile

### :root CSS Variables

| Variable | Value |
|----------|-------|
| `--display-accred-panel` | none |
| `--footer-logo-bg` | false |
| `--footer-logo-enabled` | true |
| `--footer-logo-height-class` | height-medium |
| `--has-sticky-header` | false |
| `--header-logo-bg` | false |
| `--header-logo-enabled` | true |
| `--header-logo-height-class` | height-medium |
| `--is-district-site` | false |
| `--primary-color` | #073772 |
| `--primary-color-h` | 213.08 |
| `--primary-color-hsl` | var(--primary-color-h), var(--primary-color-s), var(--primary-color-l) |
| `--primary-color-l` | 23.73% |
| `--primary-color-s` | 88.43% |
| `--secondary-color` | #f1b51c |
| `--secondary-color-h` | 43.1 |
| `--secondary-color-hsl` | var(--secondary-color-h), var(--secondary-color-s), var(--secondary-color-l) |
| `--secondary-color-l` | 52.75% |
| `--secondary-color-s` | 88.38% |
| `--show-footer-title` | false |
| `--show-header-location-name` | false |
| `--show-header-location-title` | false |
| `--show-header-motto` | false |
| `--show-header-subtitle` | false |
| `--weglot-display-position` | default |

### Computed Styles

| Selector | Property | Value |
|----------|----------|-------|
| `body` | color | rgb(55, 55, 55) |
| `body` | backgroundColor | rgba(0, 0, 0, 0) |
| `body` | fontFamily | Montserrat, sans-serif |
| `body` | fontSize | 16.875px |
| `body` | fontWeight | 400 |
| `body` | lineHeight | 29.5312px |
| `body` | padding | 0px |
| `body` | margin | 0px |
| `body` | border | 0px none rgb(55, 55, 55) |
| `body` | borderRadius | 0px |
| `body` | textTransform | none |
| `body` | letterSpacing | 0.16875px |
| `body` | boxShadow | none |
| `body` | outline | rgb(55, 55, 55) none 0px |
| `body` | maxWidth | none |
| `body` | width | 1280px |
| `body` | minHeight | 0px |
| `h1` | color | rgb(7, 55, 114) |
| `h1` | backgroundColor | rgba(0, 0, 0, 0) |
| `h1` | fontFamily | Merriweather, serif |
| `h1` | fontSize | 41.25px |
| `h1` | fontWeight | 700 |
| `h1` | lineHeight | 47.4375px |
| `h1` | padding | 0px |
| `h1` | margin | 0px 0px 20px |
| `h1` | border | 0px none rgb(7, 55, 114) |
| `h1` | borderRadius | 0px |
| `h1` | textTransform | none |
| `h1` | letterSpacing | -0.825px |
| `h1` | boxShadow | none |
| `h1` | outline | rgb(7, 55, 114) none 0px |
| `h1` | maxWidth | none |
| `h1` | width | 1180px |
| `h1` | minHeight | 0px |
| `h2` | color | rgb(7, 55, 114) |
| `h2` | backgroundColor | rgba(0, 0, 0, 0) |
| `h2` | fontFamily | Merriweather, serif |
| `h2` | fontSize | 30px |
| `h2` | fontWeight | 700 |
| `h2` | lineHeight | 36px |
| `h2` | padding | 0px |
| `h2` | margin | 0px 0px 15px |
| `h2` | border | 0px none rgb(7, 55, 114) |
| `h2` | borderRadius | 0px |
| `h2` | textTransform | none |
| `h2` | letterSpacing | -0.3px |
| `h2` | boxShadow | none |
| `h2` | outline | rgb(7, 55, 114) none 0px |
| `h2` | maxWidth | none |
| `h2` | width | auto |
| `h2` | minHeight | 0px |
| `label` | color | rgb(55, 55, 55) |
| `label` | backgroundColor | rgba(0, 0, 0, 0) |
| `label` | fontFamily | Montserrat, sans-serif |
| `label` | fontSize | 16.875px |
| `label` | fontWeight | 400 |
| `label` | lineHeight | 29.5312px |
| `label` | padding | 0px |
| `label` | margin | 0px 8px 0px 0px |
| `label` | border | 0px none rgb(55, 55, 55) |
| `label` | borderRadius | 0px |
| `label` | textTransform | none |
| `label` | letterSpacing | 0.16875px |
| `label` | boxShadow | none |
| `label` | outline | rgb(55, 55, 55) none 0px |
| `label` | maxWidth | none |
| `label` | width | auto |
| `label` | minHeight | 0px |
| `input` | color | rgb(255, 255, 255) |
| `input` | backgroundColor | rgb(0, 42, 80) |
| `input` | fontFamily | Montserrat, sans-serif |
| `input` | fontSize | 14px |
| `input` | fontWeight | 400 |
| `input` | lineHeight | 22.4px |
| `input` | padding | 10px 30px 10px 31px |
| `input` | margin | 0px |
| `input` | border | 1px solid rgba(0, 0, 0, 0) |
| `input` | borderRadius | 3px |
| `input` | textTransform | none |
| `input` | letterSpacing | normal |
| `input` | boxShadow | none |
| `input` | outline | rgb(255, 255, 255) none 0px |
| `input` | maxWidth | 100% |
| `input` | width | 100% |
| `input` | minHeight | 0px |
| `input[type=text]` | color | rgb(255, 255, 255) |
| `input[type=text]` | backgroundColor | rgb(0, 42, 80) |
| `input[type=text]` | fontFamily | Montserrat, sans-serif |
| `input[type=text]` | fontSize | 14px |
| `input[type=text]` | fontWeight | 400 |
| `input[type=text]` | lineHeight | 22.4px |
| `input[type=text]` | padding | 10px 30px 10px 31px |
| `input[type=text]` | margin | 0px |
| `input[type=text]` | border | 1px solid rgba(0, 0, 0, 0) |
| `input[type=text]` | borderRadius | 3px |
| `input[type=text]` | textTransform | none |
| `input[type=text]` | letterSpacing | normal |
| `input[type=text]` | boxShadow | none |
| `input[type=text]` | outline | rgb(255, 255, 255) none 0px |
| `input[type=text]` | maxWidth | 100% |
| `input[type=text]` | width | 100% |
| `input[type=text]` | minHeight | 0px |
| `button` | color | rgba(0, 0, 0, 0) |
| `button` | backgroundColor | rgba(0, 0, 0, 0) |
| `button` | fontFamily | Montserrat, sans-serif |
| `button` | fontSize | 16.875px |
| `button` | fontWeight | 400 |
| `button` | lineHeight | 29.5312px |
| `button` | padding | 1px 6px |
| `button` | margin | 0px |
| `button` | border | 0px none rgba(0, 0, 0, 0) |
| `button` | borderRadius | 0px |
| `button` | textTransform | none |
| `button` | letterSpacing | normal |
| `button` | boxShadow | none |
| `button` | outline | rgba(0, 0, 0, 0) none 0px |
| `button` | maxWidth | none |
| `button` | width | 24px |
| `button` | minHeight | 0px |
| `#fsHeader` | color | rgb(55, 55, 55) |
| `#fsHeader` | backgroundColor | rgba(0, 0, 0, 0) |
| `#fsHeader` | fontFamily | Montserrat, sans-serif |
| `#fsHeader` | fontSize | 16.875px |
| `#fsHeader` | fontWeight | 400 |
| `#fsHeader` | lineHeight | 29.5312px |
| `#fsHeader` | padding | 0px 0px 80px |
| `#fsHeader` | margin | 0px |
| `#fsHeader` | border | 0px none rgb(55, 55, 55) |
| `#fsHeader` | borderRadius | 0px |
| `#fsHeader` | textTransform | none |
| `#fsHeader` | letterSpacing | 0.16875px |
| `#fsHeader` | boxShadow | none |
| `#fsHeader` | outline | rgb(55, 55, 55) none 0px |
| `#fsHeader` | maxWidth | none |
| `#fsHeader` | width | 1280px |
| `#fsHeader` | minHeight | 0px |
| `.fsTabsNav` | color | rgb(55, 55, 55) |
| `.fsTabsNav` | backgroundColor | rgba(0, 0, 0, 0) |
| `.fsTabsNav` | fontFamily | Montserrat, sans-serif |
| `.fsTabsNav` | fontSize | 15px |
| `.fsTabsNav` | fontWeight | 400 |
| `.fsTabsNav` | lineHeight | 24.375px |
| `.fsTabsNav` | padding | 0px |
| `.fsTabsNav` | margin | 0px |
| `.fsTabsNav` | border | 0px none rgb(55, 55, 55) |
| `.fsTabsNav` | borderRadius | 0px |
| `.fsTabsNav` | textTransform | none |
| `.fsTabsNav` | letterSpacing | 0.16875px |
| `.fsTabsNav` | boxShadow | none |
| `.fsTabsNav` | outline | rgb(55, 55, 55) none 0px |
| `.fsTabsNav` | maxWidth | none |
| `.fsTabsNav` | width | 1080px |
| `.fsTabsNav` | minHeight | 0px |

## Event Table

- **URL:** https://www.lisd.net/production2/athletics/table
- **Extracted:** 2026-06-23

### Content

### Event Table

#### Athletics Event

### :root CSS Variables

| Variable | Value |
|----------|-------|
| `--display-accred-panel` | none |
| `--footer-logo-bg` | false |
| `--footer-logo-enabled` | true |
| `--footer-logo-height-class` | height-medium |
| `--has-sticky-header` | false |
| `--header-logo-bg` | false |
| `--header-logo-enabled` | true |
| `--header-logo-height-class` | height-medium |
| `--is-district-site` | false |
| `--primary-color` | #073772 |
| `--primary-color-h` | 213.08 |
| `--primary-color-hsl` | var(--primary-color-h), var(--primary-color-s), var(--primary-color-l) |
| `--primary-color-l` | 23.73% |
| `--primary-color-s` | 88.43% |
| `--secondary-color` | #f1b51c |
| `--secondary-color-h` | 43.1 |
| `--secondary-color-hsl` | var(--secondary-color-h), var(--secondary-color-s), var(--secondary-color-l) |
| `--secondary-color-l` | 52.75% |
| `--secondary-color-s` | 88.38% |
| `--show-footer-title` | false |
| `--show-header-location-name` | false |
| `--show-header-location-title` | false |
| `--show-header-motto` | false |
| `--show-header-subtitle` | false |
| `--weglot-display-position` | default |

### Computed Styles

| Selector | Property | Value |
|----------|----------|-------|
| `body` | color | rgb(55, 55, 55) |
| `body` | backgroundColor | rgba(0, 0, 0, 0) |
| `body` | fontFamily | Montserrat, sans-serif |
| `body` | fontSize | 16.875px |
| `body` | fontWeight | 400 |
| `body` | lineHeight | 29.5312px |
| `body` | padding | 0px |
| `body` | margin | 0px |
| `body` | border | 0px none rgb(55, 55, 55) |
| `body` | borderRadius | 0px |
| `body` | textTransform | none |
| `body` | letterSpacing | 0.16875px |
| `body` | boxShadow | none |
| `body` | outline | rgb(55, 55, 55) none 0px |
| `body` | maxWidth | none |
| `body` | width | 1280px |
| `body` | minHeight | 0px |
| `h1` | color | rgb(7, 55, 114) |
| `h1` | backgroundColor | rgba(0, 0, 0, 0) |
| `h1` | fontFamily | Merriweather, serif |
| `h1` | fontSize | 41.25px |
| `h1` | fontWeight | 700 |
| `h1` | lineHeight | 47.4375px |
| `h1` | padding | 0px |
| `h1` | margin | 0px 0px 20px |
| `h1` | border | 0px none rgb(7, 55, 114) |
| `h1` | borderRadius | 0px |
| `h1` | textTransform | none |
| `h1` | letterSpacing | -0.825px |
| `h1` | boxShadow | none |
| `h1` | outline | rgb(7, 55, 114) none 0px |
| `h1` | maxWidth | none |
| `h1` | width | 1180px |
| `h1` | minHeight | 0px |
| `h2` | color | rgb(7, 55, 114) |
| `h2` | backgroundColor | rgba(0, 0, 0, 0) |
| `h2` | fontFamily | Merriweather, serif |
| `h2` | fontSize | 30px |
| `h2` | fontWeight | 700 |
| `h2` | lineHeight | 36px |
| `h2` | padding | 0px |
| `h2` | margin | 0px 0px 15px |
| `h2` | border | 0px none rgb(7, 55, 114) |
| `h2` | borderRadius | 0px |
| `h2` | textTransform | none |
| `h2` | letterSpacing | -0.3px |
| `h2` | boxShadow | none |
| `h2` | outline | rgb(7, 55, 114) none 0px |
| `h2` | maxWidth | none |
| `h2` | width | auto |
| `h2` | minHeight | 0px |
| `#fsPageContent a` | color | rgb(7, 55, 114) |
| `#fsPageContent a` | backgroundColor | rgb(116, 116, 118) |
| `#fsPageContent a` | fontFamily | Montserrat, sans-serif |
| `#fsPageContent a` | fontSize | 16.875px |
| `#fsPageContent a` | fontWeight | 700 |
| `#fsPageContent a` | lineHeight | 16.875px |
| `#fsPageContent a` | padding | 0px |
| `#fsPageContent a` | margin | 0px 5px 0px 0px |
| `#fsPageContent a` | border | 0px none rgb(7, 55, 114) |
| `#fsPageContent a` | borderRadius | 3px |
| `#fsPageContent a` | textTransform | none |
| `#fsPageContent a` | letterSpacing | 0.16875px |
| `#fsPageContent a` | boxShadow | none |
| `#fsPageContent a` | outline | rgb(7, 55, 114) none 0px |
| `#fsPageContent a` | maxWidth | none |
| `#fsPageContent a` | width | 18px |
| `#fsPageContent a` | minHeight | auto |
| `label` | color | rgb(55, 55, 55) |
| `label` | backgroundColor | rgba(0, 0, 0, 0) |
| `label` | fontFamily | Montserrat, sans-serif |
| `label` | fontSize | 16.875px |
| `label` | fontWeight | 400 |
| `label` | lineHeight | 29.5312px |
| `label` | padding | 0px |
| `label` | margin | 0px 8px 0px 0px |
| `label` | border | 0px none rgb(55, 55, 55) |
| `label` | borderRadius | 0px |
| `label` | textTransform | none |
| `label` | letterSpacing | 0.16875px |
| `label` | boxShadow | none |
| `label` | outline | rgb(55, 55, 55) none 0px |
| `label` | maxWidth | none |
| `label` | width | auto |
| `label` | minHeight | 0px |
| `input` | color | rgb(255, 255, 255) |
| `input` | backgroundColor | rgb(0, 42, 80) |
| `input` | fontFamily | Montserrat, sans-serif |
| `input` | fontSize | 14px |
| `input` | fontWeight | 400 |
| `input` | lineHeight | 22.4px |
| `input` | padding | 10px 30px 10px 31px |
| `input` | margin | 0px |
| `input` | border | 1px solid rgba(0, 0, 0, 0) |
| `input` | borderRadius | 3px |
| `input` | textTransform | none |
| `input` | letterSpacing | normal |
| `input` | boxShadow | none |
| `input` | outline | rgb(255, 255, 255) none 0px |
| `input` | maxWidth | 100% |
| `input` | width | 100% |
| `input` | minHeight | 0px |
| `input[type=text]` | color | rgb(255, 255, 255) |
| `input[type=text]` | backgroundColor | rgb(0, 42, 80) |
| `input[type=text]` | fontFamily | Montserrat, sans-serif |
| `input[type=text]` | fontSize | 14px |
| `input[type=text]` | fontWeight | 400 |
| `input[type=text]` | lineHeight | 22.4px |
| `input[type=text]` | padding | 10px 30px 10px 31px |
| `input[type=text]` | margin | 0px |
| `input[type=text]` | border | 1px solid rgba(0, 0, 0, 0) |
| `input[type=text]` | borderRadius | 3px |
| `input[type=text]` | textTransform | none |
| `input[type=text]` | letterSpacing | normal |
| `input[type=text]` | boxShadow | none |
| `input[type=text]` | outline | rgb(255, 255, 255) none 0px |
| `input[type=text]` | maxWidth | 100% |
| `input[type=text]` | width | 100% |
| `input[type=text]` | minHeight | 0px |
| `button` | color | rgba(0, 0, 0, 0) |
| `button` | backgroundColor | rgba(0, 0, 0, 0) |
| `button` | fontFamily | Montserrat, sans-serif |
| `button` | fontSize | 16.875px |
| `button` | fontWeight | 400 |
| `button` | lineHeight | 29.5312px |
| `button` | padding | 1px 6px |
| `button` | margin | 0px |
| `button` | border | 0px none rgba(0, 0, 0, 0) |
| `button` | borderRadius | 0px |
| `button` | textTransform | none |
| `button` | letterSpacing | normal |
| `button` | boxShadow | none |
| `button` | outline | rgba(0, 0, 0, 0) none 0px |
| `button` | maxWidth | none |
| `button` | width | 24px |
| `button` | minHeight | 0px |
| `#fsHeader` | color | rgb(55, 55, 55) |
| `#fsHeader` | backgroundColor | rgba(0, 0, 0, 0) |
| `#fsHeader` | fontFamily | Montserrat, sans-serif |
| `#fsHeader` | fontSize | 16.875px |
| `#fsHeader` | fontWeight | 400 |
| `#fsHeader` | lineHeight | 29.5312px |
| `#fsHeader` | padding | 0px 0px 80px |
| `#fsHeader` | margin | 0px |
| `#fsHeader` | border | 0px none rgb(55, 55, 55) |
| `#fsHeader` | borderRadius | 0px |
| `#fsHeader` | textTransform | none |
| `#fsHeader` | letterSpacing | 0.16875px |
| `#fsHeader` | boxShadow | none |
| `#fsHeader` | outline | rgb(55, 55, 55) none 0px |
| `#fsHeader` | maxWidth | none |
| `#fsHeader` | width | 1280px |
| `#fsHeader` | minHeight | 0px |
| `table` | color | rgb(55, 55, 55) |
| `table` | backgroundColor | rgba(0, 0, 0, 0) |
| `table` | fontFamily | Montserrat, sans-serif |
| `table` | fontSize | 16.875px |
| `table` | fontWeight | 400 |
| `table` | lineHeight | 29.5312px |
| `table` | padding | 0px |
| `table` | margin | 0px |
| `table` | border | 0px none rgb(128, 128, 128) |
| `table` | borderRadius | 0px |
| `table` | textTransform | none |
| `table` | letterSpacing | 0.16875px |
| `table` | boxShadow | none |
| `table` | outline | rgb(55, 55, 55) none 0px |
| `table` | maxWidth | none |
| `table` | width | 1861.92px |
| `table` | minHeight | 0px |
| `th` | color | rgb(255, 255, 255) |
| `th` | backgroundColor | rgb(7, 55, 114) |
| `th` | fontFamily | Merriweather, serif |
| `th` | fontSize | 16.875px |
| `th` | fontWeight | 700 |
| `th` | lineHeight | 23.4375px |
| `th` | padding | 20px |
| `th` | margin | 0px |
| `th` | border | 0px none rgb(255, 255, 255) |
| `th` | borderRadius | 0px |
| `th` | textTransform | none |
| `th` | letterSpacing | -0.084375px |
| `th` | boxShadow | none |
| `th` | outline | rgb(255, 255, 255) none 0px |
| `th` | maxWidth | none |
| `th` | width | 86.6094px |
| `th` | minHeight | 0px |
| `td` | color | rgb(19, 19, 19) |
| `td` | backgroundColor | rgb(229, 229, 229) |
| `td` | fontFamily | Montserrat, sans-serif |
| `td` | fontSize | 15px |
| `td` | fontWeight | 400 |
| `td` | lineHeight | 20.625px |
| `td` | padding | 13px 20px |
| `td` | margin | 0px |
| `td` | border | 0px none rgb(19, 19, 19) |
| `td` | borderRadius | 0px |
| `td` | textTransform | none |
| `td` | letterSpacing | 0.16875px |
| `td` | boxShadow | none |
| `td` | outline | rgb(19, 19, 19) none 0px |
| `td` | maxWidth | none |
| `td` | width | 1861.92px |
| `td` | minHeight | 0px |
| `.fsTabsNav` | color | rgb(55, 55, 55) |
| `.fsTabsNav` | backgroundColor | rgba(0, 0, 0, 0) |
| `.fsTabsNav` | fontFamily | Montserrat, sans-serif |
| `.fsTabsNav` | fontSize | 15px |
| `.fsTabsNav` | fontWeight | 400 |
| `.fsTabsNav` | lineHeight | 24.375px |
| `.fsTabsNav` | padding | 0px |
| `.fsTabsNav` | margin | 0px |
| `.fsTabsNav` | border | 0px none rgb(55, 55, 55) |
| `.fsTabsNav` | borderRadius | 0px |
| `.fsTabsNav` | textTransform | none |
| `.fsTabsNav` | letterSpacing | 0.16875px |
| `.fsTabsNav` | boxShadow | none |
| `.fsTabsNav` | outline | rgb(55, 55, 55) none 0px |
| `.fsTabsNav` | maxWidth | none |
| `.fsTabsNav` | width | 1080px |
| `.fsTabsNav` | minHeight | 0px |

## Banners

- **URL:** https://www.lisd.net/production2/banners
- **Extracted:** 2026-06-23

### Content

### Banners

- Left Banner
- Right Banner
- Left & Right Banners

### :root CSS Variables

| Variable | Value |
|----------|-------|
| `--display-accred-panel` | none |
| `--footer-logo-bg` | false |
| `--footer-logo-enabled` | true |
| `--footer-logo-height-class` | height-medium |
| `--has-sticky-header` | false |
| `--header-logo-bg` | false |
| `--header-logo-enabled` | true |
| `--header-logo-height-class` | height-medium |
| `--is-district-site` | false |
| `--primary-color` | #073772 |
| `--primary-color-h` | 213.08 |
| `--primary-color-hsl` | var(--primary-color-h), var(--primary-color-s), var(--primary-color-l) |
| `--primary-color-l` | 23.73% |
| `--primary-color-s` | 88.43% |
| `--secondary-color` | #f1b51c |
| `--secondary-color-h` | 43.1 |
| `--secondary-color-hsl` | var(--secondary-color-h), var(--secondary-color-s), var(--secondary-color-l) |
| `--secondary-color-l` | 52.75% |
| `--secondary-color-s` | 88.38% |
| `--show-footer-title` | false |
| `--show-header-location-name` | false |
| `--show-header-location-title` | false |
| `--show-header-motto` | false |
| `--show-header-subtitle` | false |
| `--weglot-display-position` | default |

### Computed Styles

| Selector | Property | Value |
|----------|----------|-------|
| `body` | color | rgb(55, 55, 55) |
| `body` | backgroundColor | rgba(0, 0, 0, 0) |
| `body` | fontFamily | Montserrat, sans-serif |
| `body` | fontSize | 16.875px |
| `body` | fontWeight | 400 |
| `body` | lineHeight | 29.5312px |
| `body` | padding | 0px |
| `body` | margin | 0px |
| `body` | border | 0px none rgb(55, 55, 55) |
| `body` | borderRadius | 0px |
| `body` | textTransform | none |
| `body` | letterSpacing | 0.16875px |
| `body` | boxShadow | none |
| `body` | outline | rgb(55, 55, 55) none 0px |
| `body` | maxWidth | none |
| `body` | width | 1280px |
| `body` | minHeight | 0px |
| `h1` | color | rgb(7, 55, 114) |
| `h1` | backgroundColor | rgba(0, 0, 0, 0) |
| `h1` | fontFamily | Merriweather, serif |
| `h1` | fontSize | 41.25px |
| `h1` | fontWeight | 700 |
| `h1` | lineHeight | 47.4375px |
| `h1` | padding | 0px |
| `h1` | margin | 0px 0px 20px |
| `h1` | border | 0px none rgb(7, 55, 114) |
| `h1` | borderRadius | 0px |
| `h1` | textTransform | none |
| `h1` | letterSpacing | -0.825px |
| `h1` | boxShadow | none |
| `h1` | outline | rgb(7, 55, 114) none 0px |
| `h1` | maxWidth | none |
| `h1` | width | 1180px |
| `h1` | minHeight | 0px |
| `h2` | color | rgb(7, 55, 114) |
| `h2` | backgroundColor | rgba(0, 0, 0, 0) |
| `h2` | fontFamily | Merriweather, serif |
| `h2` | fontSize | 30px |
| `h2` | fontWeight | 700 |
| `h2` | lineHeight | 36px |
| `h2` | padding | 0px |
| `h2` | margin | 0px 0px 15px |
| `h2` | border | 0px none rgb(7, 55, 114) |
| `h2` | borderRadius | 0px |
| `h2` | textTransform | none |
| `h2` | letterSpacing | -0.3px |
| `h2` | boxShadow | none |
| `h2` | outline | rgb(7, 55, 114) none 0px |
| `h2` | maxWidth | none |
| `h2` | width | auto |
| `h2` | minHeight | 0px |
| `#fsPageContent a` | color | rgb(7, 55, 114) |
| `#fsPageContent a` | backgroundColor | rgba(0, 0, 0, 0) |
| `#fsPageContent a` | fontFamily | Montserrat, sans-serif |
| `#fsPageContent a` | fontSize | 16.875px |
| `#fsPageContent a` | fontWeight | 500 |
| `#fsPageContent a` | lineHeight | 29.5312px |
| `#fsPageContent a` | padding | 10px 0px |
| `#fsPageContent a` | margin | 0px |
| `#fsPageContent a` | border | 0px none rgb(7, 55, 114) |
| `#fsPageContent a` | borderRadius | 0px |
| `#fsPageContent a` | textTransform | none |
| `#fsPageContent a` | letterSpacing | 0.16875px |
| `#fsPageContent a` | boxShadow | none |
| `#fsPageContent a` | outline | rgb(7, 55, 114) none 0px |
| `#fsPageContent a` | maxWidth | none |
| `#fsPageContent a` | width | 1180px |
| `#fsPageContent a` | minHeight | 0px |
| `label` | color | rgb(55, 55, 55) |
| `label` | backgroundColor | rgba(0, 0, 0, 0) |
| `label` | fontFamily | Montserrat, sans-serif |
| `label` | fontSize | 16.875px |
| `label` | fontWeight | 400 |
| `label` | lineHeight | 29.5312px |
| `label` | padding | 0px |
| `label` | margin | 0px 8px 0px 0px |
| `label` | border | 0px none rgb(55, 55, 55) |
| `label` | borderRadius | 0px |
| `label` | textTransform | none |
| `label` | letterSpacing | 0.16875px |
| `label` | boxShadow | none |
| `label` | outline | rgb(55, 55, 55) none 0px |
| `label` | maxWidth | none |
| `label` | width | auto |
| `label` | minHeight | 0px |
| `input` | color | rgb(255, 255, 255) |
| `input` | backgroundColor | rgb(0, 42, 80) |
| `input` | fontFamily | Montserrat, sans-serif |
| `input` | fontSize | 14px |
| `input` | fontWeight | 400 |
| `input` | lineHeight | 22.4px |
| `input` | padding | 10px 30px 10px 31px |
| `input` | margin | 0px |
| `input` | border | 1px solid rgba(0, 0, 0, 0) |
| `input` | borderRadius | 3px |
| `input` | textTransform | none |
| `input` | letterSpacing | normal |
| `input` | boxShadow | none |
| `input` | outline | rgb(255, 255, 255) none 0px |
| `input` | maxWidth | 100% |
| `input` | width | 100% |
| `input` | minHeight | 0px |
| `input[type=text]` | color | rgb(255, 255, 255) |
| `input[type=text]` | backgroundColor | rgb(0, 42, 80) |
| `input[type=text]` | fontFamily | Montserrat, sans-serif |
| `input[type=text]` | fontSize | 14px |
| `input[type=text]` | fontWeight | 400 |
| `input[type=text]` | lineHeight | 22.4px |
| `input[type=text]` | padding | 10px 30px 10px 31px |
| `input[type=text]` | margin | 0px |
| `input[type=text]` | border | 1px solid rgba(0, 0, 0, 0) |
| `input[type=text]` | borderRadius | 3px |
| `input[type=text]` | textTransform | none |
| `input[type=text]` | letterSpacing | normal |
| `input[type=text]` | boxShadow | none |
| `input[type=text]` | outline | rgb(255, 255, 255) none 0px |
| `input[type=text]` | maxWidth | 100% |
| `input[type=text]` | width | 100% |
| `input[type=text]` | minHeight | 0px |
| `button` | color | rgba(0, 0, 0, 0) |
| `button` | backgroundColor | rgba(0, 0, 0, 0) |
| `button` | fontFamily | Montserrat, sans-serif |
| `button` | fontSize | 16.875px |
| `button` | fontWeight | 400 |
| `button` | lineHeight | 29.5312px |
| `button` | padding | 1px 6px |
| `button` | margin | 0px |
| `button` | border | 0px none rgba(0, 0, 0, 0) |
| `button` | borderRadius | 0px |
| `button` | textTransform | none |
| `button` | letterSpacing | normal |
| `button` | boxShadow | none |
| `button` | outline | rgba(0, 0, 0, 0) none 0px |
| `button` | maxWidth | none |
| `button` | width | 24px |
| `button` | minHeight | 0px |
| `#fsHeader` | color | rgb(55, 55, 55) |
| `#fsHeader` | backgroundColor | rgba(0, 0, 0, 0) |
| `#fsHeader` | fontFamily | Montserrat, sans-serif |
| `#fsHeader` | fontSize | 16.875px |
| `#fsHeader` | fontWeight | 400 |
| `#fsHeader` | lineHeight | 29.5312px |
| `#fsHeader` | padding | 0px 0px 80px |
| `#fsHeader` | margin | 0px |
| `#fsHeader` | border | 0px none rgb(55, 55, 55) |
| `#fsHeader` | borderRadius | 0px |
| `#fsHeader` | textTransform | none |
| `#fsHeader` | letterSpacing | 0.16875px |
| `#fsHeader` | boxShadow | none |
| `#fsHeader` | outline | rgb(55, 55, 55) none 0px |
| `#fsHeader` | maxWidth | none |
| `#fsHeader` | width | 1280px |
| `#fsHeader` | minHeight | 0px |
| `.fsTabsNav` | color | rgb(55, 55, 55) |
| `.fsTabsNav` | backgroundColor | rgba(0, 0, 0, 0) |
| `.fsTabsNav` | fontFamily | Montserrat, sans-serif |
| `.fsTabsNav` | fontSize | 15px |
| `.fsTabsNav` | fontWeight | 400 |
| `.fsTabsNav` | lineHeight | 24.375px |
| `.fsTabsNav` | padding | 0px |
| `.fsTabsNav` | margin | 0px |
| `.fsTabsNav` | border | 0px none rgb(55, 55, 55) |
| `.fsTabsNav` | borderRadius | 0px |
| `.fsTabsNav` | textTransform | none |
| `.fsTabsNav` | letterSpacing | 0.16875px |
| `.fsTabsNav` | boxShadow | none |
| `.fsTabsNav` | outline | rgb(55, 55, 55) none 0px |
| `.fsTabsNav` | maxWidth | none |
| `.fsTabsNav` | width | 1080px |
| `.fsTabsNav` | minHeight | 0px |

## Left Banner

- **URL:** https://www.lisd.net/production2/banners/left-banner
- **Extracted:** 2026-06-23

### Content

### Left Banner

Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Maecenas faucibus mollis interdum. Donec ullamcorper nulla non metus auctor fringilla. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.

Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec ullamcorper nulla non metus auctor fringilla. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras mattis consectetur purus sit amet fermentum. Maecenas sed diam eget risus varius blandit sit amet non magna. Nullam quis risus eg

### :root CSS Variables

| Variable | Value |
|----------|-------|
| `--display-accred-panel` | none |
| `--footer-logo-bg` | false |
| `--footer-logo-enabled` | true |
| `--footer-logo-height-class` | height-medium |
| `--has-sticky-header` | false |
| `--header-logo-bg` | false |
| `--header-logo-enabled` | true |
| `--header-logo-height-class` | height-medium |
| `--is-district-site` | false |
| `--primary-color` | #073772 |
| `--primary-color-h` | 213.08 |
| `--primary-color-hsl` | var(--primary-color-h), var(--primary-color-s), var(--primary-color-l) |
| `--primary-color-l` | 23.73% |
| `--primary-color-s` | 88.43% |
| `--secondary-color` | #f1b51c |
| `--secondary-color-h` | 43.1 |
| `--secondary-color-hsl` | var(--secondary-color-h), var(--secondary-color-s), var(--secondary-color-l) |
| `--secondary-color-l` | 52.75% |
| `--secondary-color-s` | 88.38% |
| `--show-footer-title` | false |
| `--show-header-location-name` | false |
| `--show-header-location-title` | false |
| `--show-header-motto` | false |
| `--show-header-subtitle` | false |
| `--weglot-display-position` | default |

### Computed Styles

| Selector | Property | Value |
|----------|----------|-------|
| `body` | color | rgb(55, 55, 55) |
| `body` | backgroundColor | rgba(0, 0, 0, 0) |
| `body` | fontFamily | Montserrat, sans-serif |
| `body` | fontSize | 16.875px |
| `body` | fontWeight | 400 |
| `body` | lineHeight | 29.5312px |
| `body` | padding | 0px |
| `body` | margin | 0px |
| `body` | border | 0px none rgb(55, 55, 55) |
| `body` | borderRadius | 0px |
| `body` | textTransform | none |
| `body` | letterSpacing | 0.16875px |
| `body` | boxShadow | none |
| `body` | outline | rgb(55, 55, 55) none 0px |
| `body` | maxWidth | none |
| `body` | width | 1280px |
| `body` | minHeight | 0px |
| `h1` | color | rgb(7, 55, 114) |
| `h1` | backgroundColor | rgba(0, 0, 0, 0) |
| `h1` | fontFamily | Merriweather, serif |
| `h1` | fontSize | 41.25px |
| `h1` | fontWeight | 700 |
| `h1` | lineHeight | 47.4375px |
| `h1` | padding | 0px |
| `h1` | margin | 0px 0px 20px |
| `h1` | border | 0px none rgb(7, 55, 114) |
| `h1` | borderRadius | 0px |
| `h1` | textTransform | none |
| `h1` | letterSpacing | -0.825px |
| `h1` | boxShadow | none |
| `h1` | outline | rgb(7, 55, 114) none 0px |
| `h1` | maxWidth | none |
| `h1` | width | 1180px |
| `h1` | minHeight | 0px |
| `h2` | color | rgb(7, 55, 114) |
| `h2` | backgroundColor | rgba(0, 0, 0, 0) |
| `h2` | fontFamily | Merriweather, serif |
| `h2` | fontSize | 30px |
| `h2` | fontWeight | 700 |
| `h2` | lineHeight | 36px |
| `h2` | padding | 0px |
| `h2` | margin | 0px 0px 15px |
| `h2` | border | 0px none rgb(7, 55, 114) |
| `h2` | borderRadius | 0px |
| `h2` | textTransform | none |
| `h2` | letterSpacing | -0.3px |
| `h2` | boxShadow | none |
| `h2` | outline | rgb(7, 55, 114) none 0px |
| `h2` | maxWidth | none |
| `h2` | width | auto |
| `h2` | minHeight | 0px |
| `label` | color | rgb(55, 55, 55) |
| `label` | backgroundColor | rgba(0, 0, 0, 0) |
| `label` | fontFamily | Montserrat, sans-serif |
| `label` | fontSize | 16.875px |
| `label` | fontWeight | 400 |
| `label` | lineHeight | 29.5312px |
| `label` | padding | 0px |
| `label` | margin | 0px 8px 0px 0px |
| `label` | border | 0px none rgb(55, 55, 55) |
| `label` | borderRadius | 0px |
| `label` | textTransform | none |
| `label` | letterSpacing | 0.16875px |
| `label` | boxShadow | none |
| `label` | outline | rgb(55, 55, 55) none 0px |
| `label` | maxWidth | none |
| `label` | width | auto |
| `label` | minHeight | 0px |
| `input` | color | rgb(255, 255, 255) |
| `input` | backgroundColor | rgb(0, 42, 80) |
| `input` | fontFamily | Montserrat, sans-serif |
| `input` | fontSize | 14px |
| `input` | fontWeight | 400 |
| `input` | lineHeight | 22.4px |
| `input` | padding | 10px 30px 10px 31px |
| `input` | margin | 0px |
| `input` | border | 1px solid rgba(0, 0, 0, 0) |
| `input` | borderRadius | 3px |
| `input` | textTransform | none |
| `input` | letterSpacing | normal |
| `input` | boxShadow | none |
| `input` | outline | rgb(255, 255, 255) none 0px |
| `input` | maxWidth | 100% |
| `input` | width | 100% |
| `input` | minHeight | 0px |
| `input[type=text]` | color | rgb(255, 255, 255) |
| `input[type=text]` | backgroundColor | rgb(0, 42, 80) |
| `input[type=text]` | fontFamily | Montserrat, sans-serif |
| `input[type=text]` | fontSize | 14px |
| `input[type=text]` | fontWeight | 400 |
| `input[type=text]` | lineHeight | 22.4px |
| `input[type=text]` | padding | 10px 30px 10px 31px |
| `input[type=text]` | margin | 0px |
| `input[type=text]` | border | 1px solid rgba(0, 0, 0, 0) |
| `input[type=text]` | borderRadius | 3px |
| `input[type=text]` | textTransform | none |
| `input[type=text]` | letterSpacing | normal |
| `input[type=text]` | boxShadow | none |
| `input[type=text]` | outline | rgb(255, 255, 255) none 0px |
| `input[type=text]` | maxWidth | 100% |
| `input[type=text]` | width | 100% |
| `input[type=text]` | minHeight | 0px |
| `button` | color | rgba(0, 0, 0, 0) |
| `button` | backgroundColor | rgba(0, 0, 0, 0) |
| `button` | fontFamily | Montserrat, sans-serif |
| `button` | fontSize | 16.875px |
| `button` | fontWeight | 400 |
| `button` | lineHeight | 29.5312px |
| `button` | padding | 1px 6px |
| `button` | margin | 0px |
| `button` | border | 0px none rgba(0, 0, 0, 0) |
| `button` | borderRadius | 0px |
| `button` | textTransform | none |
| `button` | letterSpacing | normal |
| `button` | boxShadow | none |
| `button` | outline | rgba(0, 0, 0, 0) none 0px |
| `button` | maxWidth | none |
| `button` | width | 24px |
| `button` | minHeight | 0px |
| `#fsHeader` | color | rgb(55, 55, 55) |
| `#fsHeader` | backgroundColor | rgba(0, 0, 0, 0) |
| `#fsHeader` | fontFamily | Montserrat, sans-serif |
| `#fsHeader` | fontSize | 16.875px |
| `#fsHeader` | fontWeight | 400 |
| `#fsHeader` | lineHeight | 29.5312px |
| `#fsHeader` | padding | 0px 0px 80px |
| `#fsHeader` | margin | 0px |
| `#fsHeader` | border | 0px none rgb(55, 55, 55) |
| `#fsHeader` | borderRadius | 0px |
| `#fsHeader` | textTransform | none |
| `#fsHeader` | letterSpacing | 0.16875px |
| `#fsHeader` | boxShadow | none |
| `#fsHeader` | outline | rgb(55, 55, 55) none 0px |
| `#fsHeader` | maxWidth | none |
| `#fsHeader` | width | 1280px |
| `#fsHeader` | minHeight | 0px |
| `.fsTabsNav` | color | rgb(55, 55, 55) |
| `.fsTabsNav` | backgroundColor | rgba(0, 0, 0, 0) |
| `.fsTabsNav` | fontFamily | Montserrat, sans-serif |
| `.fsTabsNav` | fontSize | 15px |
| `.fsTabsNav` | fontWeight | 400 |
| `.fsTabsNav` | lineHeight | 24.375px |
| `.fsTabsNav` | padding | 0px |
| `.fsTabsNav` | margin | 0px |
| `.fsTabsNav` | border | 0px none rgb(55, 55, 55) |
| `.fsTabsNav` | borderRadius | 0px |
| `.fsTabsNav` | textTransform | none |
| `.fsTabsNav` | letterSpacing | 0.16875px |
| `.fsTabsNav` | boxShadow | none |
| `.fsTabsNav` | outline | rgb(55, 55, 55) none 0px |
| `.fsTabsNav` | maxWidth | none |
| `.fsTabsNav` | width | 1080px |
| `.fsTabsNav` | minHeight | 0px |

## Right Banner

- **URL:** https://www.lisd.net/production2/banners/right-banner
- **Extracted:** 2026-06-23

### Content

### Right Banner

Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Maecenas faucibus mollis interdum. Donec ullamcorper nulla non metus auctor fringilla. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.

Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec ullamcorper nulla non metus auctor fringilla. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras mattis consectetur purus sit amet fermentum. Maecenas sed diam eget risus varius blandit sit amet non magna. Nullam quis risus eg

### :root CSS Variables

| Variable | Value |
|----------|-------|
| `--display-accred-panel` | none |
| `--footer-logo-bg` | false |
| `--footer-logo-enabled` | true |
| `--footer-logo-height-class` | height-medium |
| `--has-sticky-header` | false |
| `--header-logo-bg` | false |
| `--header-logo-enabled` | true |
| `--header-logo-height-class` | height-medium |
| `--is-district-site` | false |
| `--primary-color` | #073772 |
| `--primary-color-h` | 213.08 |
| `--primary-color-hsl` | var(--primary-color-h), var(--primary-color-s), var(--primary-color-l) |
| `--primary-color-l` | 23.73% |
| `--primary-color-s` | 88.43% |
| `--secondary-color` | #f1b51c |
| `--secondary-color-h` | 43.1 |
| `--secondary-color-hsl` | var(--secondary-color-h), var(--secondary-color-s), var(--secondary-color-l) |
| `--secondary-color-l` | 52.75% |
| `--secondary-color-s` | 88.38% |
| `--show-footer-title` | false |
| `--show-header-location-name` | false |
| `--show-header-location-title` | false |
| `--show-header-motto` | false |
| `--show-header-subtitle` | false |
| `--weglot-display-position` | default |

### Computed Styles

| Selector | Property | Value |
|----------|----------|-------|
| `body` | color | rgb(55, 55, 55) |
| `body` | backgroundColor | rgba(0, 0, 0, 0) |
| `body` | fontFamily | Montserrat, sans-serif |
| `body` | fontSize | 16.875px |
| `body` | fontWeight | 400 |
| `body` | lineHeight | 29.5312px |
| `body` | padding | 0px |
| `body` | margin | 0px |
| `body` | border | 0px none rgb(55, 55, 55) |
| `body` | borderRadius | 0px |
| `body` | textTransform | none |
| `body` | letterSpacing | 0.16875px |
| `body` | boxShadow | none |
| `body` | outline | rgb(55, 55, 55) none 0px |
| `body` | maxWidth | none |
| `body` | width | 1280px |
| `body` | minHeight | 0px |
| `h1` | color | rgb(7, 55, 114) |
| `h1` | backgroundColor | rgba(0, 0, 0, 0) |
| `h1` | fontFamily | Merriweather, serif |
| `h1` | fontSize | 41.25px |
| `h1` | fontWeight | 700 |
| `h1` | lineHeight | 47.4375px |
| `h1` | padding | 0px |
| `h1` | margin | 0px 0px 20px |
| `h1` | border | 0px none rgb(7, 55, 114) |
| `h1` | borderRadius | 0px |
| `h1` | textTransform | none |
| `h1` | letterSpacing | -0.825px |
| `h1` | boxShadow | none |
| `h1` | outline | rgb(7, 55, 114) none 0px |
| `h1` | maxWidth | none |
| `h1` | width | 1180px |
| `h1` | minHeight | 0px |
| `h2` | color | rgb(7, 55, 114) |
| `h2` | backgroundColor | rgba(0, 0, 0, 0) |
| `h2` | fontFamily | Merriweather, serif |
| `h2` | fontSize | 30px |
| `h2` | fontWeight | 700 |
| `h2` | lineHeight | 36px |
| `h2` | padding | 0px |
| `h2` | margin | 0px 0px 15px |
| `h2` | border | 0px none rgb(7, 55, 114) |
| `h2` | borderRadius | 0px |
| `h2` | textTransform | none |
| `h2` | letterSpacing | -0.3px |
| `h2` | boxShadow | none |
| `h2` | outline | rgb(7, 55, 114) none 0px |
| `h2` | maxWidth | none |
| `h2` | width | auto |
| `h2` | minHeight | 0px |
| `label` | color | rgb(55, 55, 55) |
| `label` | backgroundColor | rgba(0, 0, 0, 0) |
| `label` | fontFamily | Montserrat, sans-serif |
| `label` | fontSize | 16.875px |
| `label` | fontWeight | 400 |
| `label` | lineHeight | 29.5312px |
| `label` | padding | 0px |
| `label` | margin | 0px 8px 0px 0px |
| `label` | border | 0px none rgb(55, 55, 55) |
| `label` | borderRadius | 0px |
| `label` | textTransform | none |
| `label` | letterSpacing | 0.16875px |
| `label` | boxShadow | none |
| `label` | outline | rgb(55, 55, 55) none 0px |
| `label` | maxWidth | none |
| `label` | width | auto |
| `label` | minHeight | 0px |
| `input` | color | rgb(255, 255, 255) |
| `input` | backgroundColor | rgb(0, 42, 80) |
| `input` | fontFamily | Montserrat, sans-serif |
| `input` | fontSize | 14px |
| `input` | fontWeight | 400 |
| `input` | lineHeight | 22.4px |
| `input` | padding | 10px 30px 10px 31px |
| `input` | margin | 0px |
| `input` | border | 1px solid rgba(0, 0, 0, 0) |
| `input` | borderRadius | 3px |
| `input` | textTransform | none |
| `input` | letterSpacing | normal |
| `input` | boxShadow | none |
| `input` | outline | rgb(255, 255, 255) none 0px |
| `input` | maxWidth | 100% |
| `input` | width | 100% |
| `input` | minHeight | 0px |
| `input[type=text]` | color | rgb(255, 255, 255) |
| `input[type=text]` | backgroundColor | rgb(0, 42, 80) |
| `input[type=text]` | fontFamily | Montserrat, sans-serif |
| `input[type=text]` | fontSize | 14px |
| `input[type=text]` | fontWeight | 400 |
| `input[type=text]` | lineHeight | 22.4px |
| `input[type=text]` | padding | 10px 30px 10px 31px |
| `input[type=text]` | margin | 0px |
| `input[type=text]` | border | 1px solid rgba(0, 0, 0, 0) |
| `input[type=text]` | borderRadius | 3px |
| `input[type=text]` | textTransform | none |
| `input[type=text]` | letterSpacing | normal |
| `input[type=text]` | boxShadow | none |
| `input[type=text]` | outline | rgb(255, 255, 255) none 0px |
| `input[type=text]` | maxWidth | 100% |
| `input[type=text]` | width | 100% |
| `input[type=text]` | minHeight | 0px |
| `button` | color | rgba(0, 0, 0, 0) |
| `button` | backgroundColor | rgba(0, 0, 0, 0) |
| `button` | fontFamily | Montserrat, sans-serif |
| `button` | fontSize | 16.875px |
| `button` | fontWeight | 400 |
| `button` | lineHeight | 29.5312px |
| `button` | padding | 1px 6px |
| `button` | margin | 0px |
| `button` | border | 0px none rgba(0, 0, 0, 0) |
| `button` | borderRadius | 0px |
| `button` | textTransform | none |
| `button` | letterSpacing | normal |
| `button` | boxShadow | none |
| `button` | outline | rgba(0, 0, 0, 0) none 0px |
| `button` | maxWidth | none |
| `button` | width | 24px |
| `button` | minHeight | 0px |
| `#fsHeader` | color | rgb(55, 55, 55) |
| `#fsHeader` | backgroundColor | rgba(0, 0, 0, 0) |
| `#fsHeader` | fontFamily | Montserrat, sans-serif |
| `#fsHeader` | fontSize | 16.875px |
| `#fsHeader` | fontWeight | 400 |
| `#fsHeader` | lineHeight | 29.5312px |
| `#fsHeader` | padding | 0px 0px 80px |
| `#fsHeader` | margin | 0px |
| `#fsHeader` | border | 0px none rgb(55, 55, 55) |
| `#fsHeader` | borderRadius | 0px |
| `#fsHeader` | textTransform | none |
| `#fsHeader` | letterSpacing | 0.16875px |
| `#fsHeader` | boxShadow | none |
| `#fsHeader` | outline | rgb(55, 55, 55) none 0px |
| `#fsHeader` | maxWidth | none |
| `#fsHeader` | width | 1280px |
| `#fsHeader` | minHeight | 0px |
| `.fsTabsNav` | color | rgb(55, 55, 55) |
| `.fsTabsNav` | backgroundColor | rgba(0, 0, 0, 0) |
| `.fsTabsNav` | fontFamily | Montserrat, sans-serif |
| `.fsTabsNav` | fontSize | 15px |
| `.fsTabsNav` | fontWeight | 400 |
| `.fsTabsNav` | lineHeight | 24.375px |
| `.fsTabsNav` | padding | 0px |
| `.fsTabsNav` | margin | 0px |
| `.fsTabsNav` | border | 0px none rgb(55, 55, 55) |
| `.fsTabsNav` | borderRadius | 0px |
| `.fsTabsNav` | textTransform | none |
| `.fsTabsNav` | letterSpacing | 0.16875px |
| `.fsTabsNav` | boxShadow | none |
| `.fsTabsNav` | outline | rgb(55, 55, 55) none 0px |
| `.fsTabsNav` | maxWidth | none |
| `.fsTabsNav` | width | 1080px |
| `.fsTabsNav` | minHeight | 0px |

## Left & Right Banners

- **URL:** https://www.lisd.net/production2/banners/left-right-banners
- **Extracted:** 2026-06-23

### Content

### Left & Right Banners

Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Maecenas faucibus mollis interdum. Donec ullamcorper nulla non metus auctor fringilla. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.

Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec ullamcorper nulla non metus auctor fringilla. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras mattis consectetur purus sit amet fermentum. Maecenas sed diam eget risus varius blandit sit amet non magna. Nullam quis risus eg

### :root CSS Variables

| Variable | Value |
|----------|-------|
| `--display-accred-panel` | none |
| `--footer-logo-bg` | false |
| `--footer-logo-enabled` | true |
| `--footer-logo-height-class` | height-medium |
| `--has-sticky-header` | false |
| `--header-logo-bg` | false |
| `--header-logo-enabled` | true |
| `--header-logo-height-class` | height-medium |
| `--is-district-site` | false |
| `--primary-color` | #073772 |
| `--primary-color-h` | 213.08 |
| `--primary-color-hsl` | var(--primary-color-h), var(--primary-color-s), var(--primary-color-l) |
| `--primary-color-l` | 23.73% |
| `--primary-color-s` | 88.43% |
| `--secondary-color` | #f1b51c |
| `--secondary-color-h` | 43.1 |
| `--secondary-color-hsl` | var(--secondary-color-h), var(--secondary-color-s), var(--secondary-color-l) |
| `--secondary-color-l` | 52.75% |
| `--secondary-color-s` | 88.38% |
| `--show-footer-title` | false |
| `--show-header-location-name` | false |
| `--show-header-location-title` | false |
| `--show-header-motto` | false |
| `--show-header-subtitle` | false |
| `--weglot-display-position` | default |

### Computed Styles

| Selector | Property | Value |
|----------|----------|-------|
| `body` | color | rgb(55, 55, 55) |
| `body` | backgroundColor | rgba(0, 0, 0, 0) |
| `body` | fontFamily | Montserrat, sans-serif |
| `body` | fontSize | 16.875px |
| `body` | fontWeight | 400 |
| `body` | lineHeight | 29.5312px |
| `body` | padding | 0px |
| `body` | margin | 0px |
| `body` | border | 0px none rgb(55, 55, 55) |
| `body` | borderRadius | 0px |
| `body` | textTransform | none |
| `body` | letterSpacing | 0.16875px |
| `body` | boxShadow | none |
| `body` | outline | rgb(55, 55, 55) none 0px |
| `body` | maxWidth | none |
| `body` | width | 1280px |
| `body` | minHeight | 0px |
| `h1` | color | rgb(7, 55, 114) |
| `h1` | backgroundColor | rgba(0, 0, 0, 0) |
| `h1` | fontFamily | Merriweather, serif |
| `h1` | fontSize | 41.25px |
| `h1` | fontWeight | 700 |
| `h1` | lineHeight | 47.4375px |
| `h1` | padding | 0px |
| `h1` | margin | 0px 0px 20px |
| `h1` | border | 0px none rgb(7, 55, 114) |
| `h1` | borderRadius | 0px |
| `h1` | textTransform | none |
| `h1` | letterSpacing | -0.825px |
| `h1` | boxShadow | none |
| `h1` | outline | rgb(7, 55, 114) none 0px |
| `h1` | maxWidth | none |
| `h1` | width | 1180px |
| `h1` | minHeight | 0px |
| `h2` | color | rgb(7, 55, 114) |
| `h2` | backgroundColor | rgba(0, 0, 0, 0) |
| `h2` | fontFamily | Merriweather, serif |
| `h2` | fontSize | 30px |
| `h2` | fontWeight | 700 |
| `h2` | lineHeight | 36px |
| `h2` | padding | 0px |
| `h2` | margin | 0px 0px 15px |
| `h2` | border | 0px none rgb(7, 55, 114) |
| `h2` | borderRadius | 0px |
| `h2` | textTransform | none |
| `h2` | letterSpacing | -0.3px |
| `h2` | boxShadow | none |
| `h2` | outline | rgb(7, 55, 114) none 0px |
| `h2` | maxWidth | none |
| `h2` | width | auto |
| `h2` | minHeight | 0px |
| `label` | color | rgb(55, 55, 55) |
| `label` | backgroundColor | rgba(0, 0, 0, 0) |
| `label` | fontFamily | Montserrat, sans-serif |
| `label` | fontSize | 16.875px |
| `label` | fontWeight | 400 |
| `label` | lineHeight | 29.5312px |
| `label` | padding | 0px |
| `label` | margin | 0px 8px 0px 0px |
| `label` | border | 0px none rgb(55, 55, 55) |
| `label` | borderRadius | 0px |
| `label` | textTransform | none |
| `label` | letterSpacing | 0.16875px |
| `label` | boxShadow | none |
| `label` | outline | rgb(55, 55, 55) none 0px |
| `label` | maxWidth | none |
| `label` | width | auto |
| `label` | minHeight | 0px |
| `input` | color | rgb(255, 255, 255) |
| `input` | backgroundColor | rgb(0, 42, 80) |
| `input` | fontFamily | Montserrat, sans-serif |
| `input` | fontSize | 14px |
| `input` | fontWeight | 400 |
| `input` | lineHeight | 22.4px |
| `input` | padding | 10px 30px 10px 31px |
| `input` | margin | 0px |
| `input` | border | 1px solid rgba(0, 0, 0, 0) |
| `input` | borderRadius | 3px |
| `input` | textTransform | none |
| `input` | letterSpacing | normal |
| `input` | boxShadow | none |
| `input` | outline | rgb(255, 255, 255) none 0px |
| `input` | maxWidth | 100% |
| `input` | width | 100% |
| `input` | minHeight | 0px |
| `input[type=text]` | color | rgb(255, 255, 255) |
| `input[type=text]` | backgroundColor | rgb(0, 42, 80) |
| `input[type=text]` | fontFamily | Montserrat, sans-serif |
| `input[type=text]` | fontSize | 14px |
| `input[type=text]` | fontWeight | 400 |
| `input[type=text]` | lineHeight | 22.4px |
| `input[type=text]` | padding | 10px 30px 10px 31px |
| `input[type=text]` | margin | 0px |
| `input[type=text]` | border | 1px solid rgba(0, 0, 0, 0) |
| `input[type=text]` | borderRadius | 3px |
| `input[type=text]` | textTransform | none |
| `input[type=text]` | letterSpacing | normal |
| `input[type=text]` | boxShadow | none |
| `input[type=text]` | outline | rgb(255, 255, 255) none 0px |
| `input[type=text]` | maxWidth | 100% |
| `input[type=text]` | width | 100% |
| `input[type=text]` | minHeight | 0px |
| `button` | color | rgba(0, 0, 0, 0) |
| `button` | backgroundColor | rgba(0, 0, 0, 0) |
| `button` | fontFamily | Montserrat, sans-serif |
| `button` | fontSize | 16.875px |
| `button` | fontWeight | 400 |
| `button` | lineHeight | 29.5312px |
| `button` | padding | 1px 6px |
| `button` | margin | 0px |
| `button` | border | 0px none rgba(0, 0, 0, 0) |
| `button` | borderRadius | 0px |
| `button` | textTransform | none |
| `button` | letterSpacing | normal |
| `button` | boxShadow | none |
| `button` | outline | rgba(0, 0, 0, 0) none 0px |
| `button` | maxWidth | none |
| `button` | width | 24px |
| `button` | minHeight | 0px |
| `#fsHeader` | color | rgb(55, 55, 55) |
| `#fsHeader` | backgroundColor | rgba(0, 0, 0, 0) |
| `#fsHeader` | fontFamily | Montserrat, sans-serif |
| `#fsHeader` | fontSize | 16.875px |
| `#fsHeader` | fontWeight | 400 |
| `#fsHeader` | lineHeight | 29.5312px |
| `#fsHeader` | padding | 0px 0px 80px |
| `#fsHeader` | margin | 0px |
| `#fsHeader` | border | 0px none rgb(55, 55, 55) |
| `#fsHeader` | borderRadius | 0px |
| `#fsHeader` | textTransform | none |
| `#fsHeader` | letterSpacing | 0.16875px |
| `#fsHeader` | boxShadow | none |
| `#fsHeader` | outline | rgb(55, 55, 55) none 0px |
| `#fsHeader` | maxWidth | none |
| `#fsHeader` | width | 1280px |
| `#fsHeader` | minHeight | 0px |
| `.fsTabsNav` | color | rgb(55, 55, 55) |
| `.fsTabsNav` | backgroundColor | rgba(0, 0, 0, 0) |
| `.fsTabsNav` | fontFamily | Montserrat, sans-serif |
| `.fsTabsNav` | fontSize | 15px |
| `.fsTabsNav` | fontWeight | 400 |
| `.fsTabsNav` | lineHeight | 24.375px |
| `.fsTabsNav` | padding | 0px |
| `.fsTabsNav` | margin | 0px |
| `.fsTabsNav` | border | 0px none rgb(55, 55, 55) |
| `.fsTabsNav` | borderRadius | 0px |
| `.fsTabsNav` | textTransform | none |
| `.fsTabsNav` | letterSpacing | 0.16875px |
| `.fsTabsNav` | boxShadow | none |
| `.fsTabsNav` | outline | rgb(55, 55, 55) none 0px |
| `.fsTabsNav` | maxWidth | none |
| `.fsTabsNav` | width | 1080px |
| `.fsTabsNav` | minHeight | 0px |

## Calendar

- **URL:** https://www.lisd.net/production2/calendar
- **Extracted:** 2026-06-23

### Content

### Calendar

- List
- Grid
- Slideshow
- Event

### :root CSS Variables

| Variable | Value |
|----------|-------|
| `--display-accred-panel` | none |
| `--footer-logo-bg` | false |
| `--footer-logo-enabled` | true |
| `--footer-logo-height-class` | height-medium |
| `--has-sticky-header` | false |
| `--header-logo-bg` | false |
| `--header-logo-enabled` | true |
| `--header-logo-height-class` | height-medium |
| `--is-district-site` | false |
| `--primary-color` | #073772 |
| `--primary-color-h` | 213.08 |
| `--primary-color-hsl` | var(--primary-color-h), var(--primary-color-s), var(--primary-color-l) |
| `--primary-color-l` | 23.73% |
| `--primary-color-s` | 88.43% |
| `--secondary-color` | #f1b51c |
| `--secondary-color-h` | 43.1 |
| `--secondary-color-hsl` | var(--secondary-color-h), var(--secondary-color-s), var(--secondary-color-l) |
| `--secondary-color-l` | 52.75% |
| `--secondary-color-s` | 88.38% |
| `--show-footer-title` | false |
| `--show-header-location-name` | false |
| `--show-header-location-title` | false |
| `--show-header-motto` | false |
| `--show-header-subtitle` | false |
| `--weglot-display-position` | default |

### Computed Styles

| Selector | Property | Value |
|----------|----------|-------|
| `body` | color | rgb(55, 55, 55) |
| `body` | backgroundColor | rgba(0, 0, 0, 0) |
| `body` | fontFamily | Montserrat, sans-serif |
| `body` | fontSize | 16.875px |
| `body` | fontWeight | 400 |
| `body` | lineHeight | 29.5312px |
| `body` | padding | 0px |
| `body` | margin | 0px |
| `body` | border | 0px none rgb(55, 55, 55) |
| `body` | borderRadius | 0px |
| `body` | textTransform | none |
| `body` | letterSpacing | 0.16875px |
| `body` | boxShadow | none |
| `body` | outline | rgb(55, 55, 55) none 0px |
| `body` | maxWidth | none |
| `body` | width | 1280px |
| `body` | minHeight | 0px |
| `h1` | color | rgb(7, 55, 114) |
| `h1` | backgroundColor | rgba(0, 0, 0, 0) |
| `h1` | fontFamily | Merriweather, serif |
| `h1` | fontSize | 41.25px |
| `h1` | fontWeight | 700 |
| `h1` | lineHeight | 47.4375px |
| `h1` | padding | 0px |
| `h1` | margin | 0px 0px 20px |
| `h1` | border | 0px none rgb(7, 55, 114) |
| `h1` | borderRadius | 0px |
| `h1` | textTransform | none |
| `h1` | letterSpacing | -0.825px |
| `h1` | boxShadow | none |
| `h1` | outline | rgb(7, 55, 114) none 0px |
| `h1` | maxWidth | none |
| `h1` | width | 1180px |
| `h1` | minHeight | 0px |
| `h2` | color | rgb(7, 55, 114) |
| `h2` | backgroundColor | rgba(0, 0, 0, 0) |
| `h2` | fontFamily | Merriweather, serif |
| `h2` | fontSize | 30px |
| `h2` | fontWeight | 700 |
| `h2` | lineHeight | 36px |
| `h2` | padding | 0px |
| `h2` | margin | 0px 0px 15px |
| `h2` | border | 0px none rgb(7, 55, 114) |
| `h2` | borderRadius | 0px |
| `h2` | textTransform | none |
| `h2` | letterSpacing | -0.3px |
| `h2` | boxShadow | none |
| `h2` | outline | rgb(7, 55, 114) none 0px |
| `h2` | maxWidth | none |
| `h2` | width | auto |
| `h2` | minHeight | 0px |
| `#fsPageContent a` | color | rgb(7, 55, 114) |
| `#fsPageContent a` | backgroundColor | rgba(0, 0, 0, 0) |
| `#fsPageContent a` | fontFamily | Montserrat, sans-serif |
| `#fsPageContent a` | fontSize | 16.875px |
| `#fsPageContent a` | fontWeight | 500 |
| `#fsPageContent a` | lineHeight | 29.5312px |
| `#fsPageContent a` | padding | 10px 0px |
| `#fsPageContent a` | margin | 0px |
| `#fsPageContent a` | border | 0px none rgb(7, 55, 114) |
| `#fsPageContent a` | borderRadius | 0px |
| `#fsPageContent a` | textTransform | none |
| `#fsPageContent a` | letterSpacing | 0.16875px |
| `#fsPageContent a` | boxShadow | none |
| `#fsPageContent a` | outline | rgb(7, 55, 114) none 0px |
| `#fsPageContent a` | maxWidth | none |
| `#fsPageContent a` | width | 1180px |
| `#fsPageContent a` | minHeight | 0px |
| `label` | color | rgb(55, 55, 55) |
| `label` | backgroundColor | rgba(0, 0, 0, 0) |
| `label` | fontFamily | Montserrat, sans-serif |
| `label` | fontSize | 16.875px |
| `label` | fontWeight | 400 |
| `label` | lineHeight | 29.5312px |
| `label` | padding | 0px |
| `label` | margin | 0px 8px 0px 0px |
| `label` | border | 0px none rgb(55, 55, 55) |
| `label` | borderRadius | 0px |
| `label` | textTransform | none |
| `label` | letterSpacing | 0.16875px |
| `label` | boxShadow | none |
| `label` | outline | rgb(55, 55, 55) none 0px |
| `label` | maxWidth | none |
| `label` | width | auto |
| `label` | minHeight | 0px |
| `input` | color | rgb(255, 255, 255) |
| `input` | backgroundColor | rgb(0, 42, 80) |
| `input` | fontFamily | Montserrat, sans-serif |
| `input` | fontSize | 14px |
| `input` | fontWeight | 400 |
| `input` | lineHeight | 22.4px |
| `input` | padding | 10px 30px 10px 31px |
| `input` | margin | 0px |
| `input` | border | 1px solid rgba(0, 0, 0, 0) |
| `input` | borderRadius | 3px |
| `input` | textTransform | none |
| `input` | letterSpacing | normal |
| `input` | boxShadow | none |
| `input` | outline | rgb(255, 255, 255) none 0px |
| `input` | maxWidth | 100% |
| `input` | width | 100% |
| `input` | minHeight | 0px |
| `input[type=text]` | color | rgb(255, 255, 255) |
| `input[type=text]` | backgroundColor | rgb(0, 42, 80) |
| `input[type=text]` | fontFamily | Montserrat, sans-serif |
| `input[type=text]` | fontSize | 14px |
| `input[type=text]` | fontWeight | 400 |
| `input[type=text]` | lineHeight | 22.4px |
| `input[type=text]` | padding | 10px 30px 10px 31px |
| `input[type=text]` | margin | 0px |
| `input[type=text]` | border | 1px solid rgba(0, 0, 0, 0) |
| `input[type=text]` | borderRadius | 3px |
| `input[type=text]` | textTransform | none |
| `input[type=text]` | letterSpacing | normal |
| `input[type=text]` | boxShadow | none |
| `input[type=text]` | outline | rgb(255, 255, 255) none 0px |
| `input[type=text]` | maxWidth | 100% |
| `input[type=text]` | width | 100% |
| `input[type=text]` | minHeight | 0px |
| `button` | color | rgba(0, 0, 0, 0) |
| `button` | backgroundColor | rgba(0, 0, 0, 0) |
| `button` | fontFamily | Montserrat, sans-serif |
| `button` | fontSize | 16.875px |
| `button` | fontWeight | 400 |
| `button` | lineHeight | 29.5312px |
| `button` | padding | 1px 6px |
| `button` | margin | 0px |
| `button` | border | 0px none rgba(0, 0, 0, 0) |
| `button` | borderRadius | 0px |
| `button` | textTransform | none |
| `button` | letterSpacing | normal |
| `button` | boxShadow | none |
| `button` | outline | rgba(0, 0, 0, 0) none 0px |
| `button` | maxWidth | none |
| `button` | width | 24px |
| `button` | minHeight | 0px |
| `#fsHeader` | color | rgb(55, 55, 55) |
| `#fsHeader` | backgroundColor | rgba(0, 0, 0, 0) |
| `#fsHeader` | fontFamily | Montserrat, sans-serif |
| `#fsHeader` | fontSize | 16.875px |
| `#fsHeader` | fontWeight | 400 |
| `#fsHeader` | lineHeight | 29.5312px |
| `#fsHeader` | padding | 0px 0px 80px |
| `#fsHeader` | margin | 0px |
| `#fsHeader` | border | 0px none rgb(55, 55, 55) |
| `#fsHeader` | borderRadius | 0px |
| `#fsHeader` | textTransform | none |
| `#fsHeader` | letterSpacing | 0.16875px |
| `#fsHeader` | boxShadow | none |
| `#fsHeader` | outline | rgb(55, 55, 55) none 0px |
| `#fsHeader` | maxWidth | none |
| `#fsHeader` | width | 1280px |
| `#fsHeader` | minHeight | 0px |
| `.fsTabsNav` | color | rgb(55, 55, 55) |
| `.fsTabsNav` | backgroundColor | rgba(0, 0, 0, 0) |
| `.fsTabsNav` | fontFamily | Montserrat, sans-serif |
| `.fsTabsNav` | fontSize | 15px |
| `.fsTabsNav` | fontWeight | 400 |
| `.fsTabsNav` | lineHeight | 24.375px |
| `.fsTabsNav` | padding | 0px |
| `.fsTabsNav` | margin | 0px |
| `.fsTabsNav` | border | 0px none rgb(55, 55, 55) |
| `.fsTabsNav` | borderRadius | 0px |
| `.fsTabsNav` | textTransform | none |
| `.fsTabsNav` | letterSpacing | 0.16875px |
| `.fsTabsNav` | boxShadow | none |
| `.fsTabsNav` | outline | rgb(55, 55, 55) none 0px |
| `.fsTabsNav` | maxWidth | none |
| `.fsTabsNav` | width | 1080px |
| `.fsTabsNav` | minHeight | 0px |

## List

- **URL:** https://www.lisd.net/production2/calendar/list
- **Extracted:** 2026-06-23

### Content

### List

### :root CSS Variables

| Variable | Value |
|----------|-------|
| `--display-accred-panel` | none |
| `--footer-logo-bg` | false |
| `--footer-logo-enabled` | true |
| `--footer-logo-height-class` | height-medium |
| `--has-sticky-header` | false |
| `--header-logo-bg` | false |
| `--header-logo-enabled` | true |
| `--header-logo-height-class` | height-medium |
| `--is-district-site` | false |
| `--primary-color` | #073772 |
| `--primary-color-h` | 213.08 |
| `--primary-color-hsl` | var(--primary-color-h), var(--primary-color-s), var(--primary-color-l) |
| `--primary-color-l` | 23.73% |
| `--primary-color-s` | 88.43% |
| `--secondary-color` | #f1b51c |
| `--secondary-color-h` | 43.1 |
| `--secondary-color-hsl` | var(--secondary-color-h), var(--secondary-color-s), var(--secondary-color-l) |
| `--secondary-color-l` | 52.75% |
| `--secondary-color-s` | 88.38% |
| `--show-footer-title` | false |
| `--show-header-location-name` | false |
| `--show-header-location-title` | false |
| `--show-header-motto` | false |
| `--show-header-subtitle` | false |
| `--weglot-display-position` | default |

### Computed Styles

| Selector | Property | Value |
|----------|----------|-------|
| `body` | color | rgb(55, 55, 55) |
| `body` | backgroundColor | rgba(0, 0, 0, 0) |
| `body` | fontFamily | Montserrat, sans-serif |
| `body` | fontSize | 16.875px |
| `body` | fontWeight | 400 |
| `body` | lineHeight | 29.5312px |
| `body` | padding | 0px |
| `body` | margin | 0px |
| `body` | border | 0px none rgb(55, 55, 55) |
| `body` | borderRadius | 0px |
| `body` | textTransform | none |
| `body` | letterSpacing | 0.16875px |
| `body` | boxShadow | none |
| `body` | outline | rgb(55, 55, 55) none 0px |
| `body` | maxWidth | none |
| `body` | width | 1280px |
| `body` | minHeight | 0px |
| `h1` | color | rgb(7, 55, 114) |
| `h1` | backgroundColor | rgba(0, 0, 0, 0) |
| `h1` | fontFamily | Merriweather, serif |
| `h1` | fontSize | 41.25px |
| `h1` | fontWeight | 700 |
| `h1` | lineHeight | 47.4375px |
| `h1` | padding | 0px |
| `h1` | margin | 0px 0px 20px |
| `h1` | border | 0px none rgb(7, 55, 114) |
| `h1` | borderRadius | 0px |
| `h1` | textTransform | none |
| `h1` | letterSpacing | -0.825px |
| `h1` | boxShadow | none |
| `h1` | outline | rgb(7, 55, 114) none 0px |
| `h1` | maxWidth | none |
| `h1` | width | 1180px |
| `h1` | minHeight | 0px |
| `h2` | color | rgb(7, 55, 114) |
| `h2` | backgroundColor | rgba(0, 0, 0, 0) |
| `h2` | fontFamily | Merriweather, serif |
| `h2` | fontSize | 30px |
| `h2` | fontWeight | 700 |
| `h2` | lineHeight | 36px |
| `h2` | padding | 0px |
| `h2` | margin | 0px 0px 15px |
| `h2` | border | 0px none rgb(7, 55, 114) |
| `h2` | borderRadius | 0px |
| `h2` | textTransform | none |
| `h2` | letterSpacing | -0.3px |
| `h2` | boxShadow | none |
| `h2` | outline | rgb(7, 55, 114) none 0px |
| `h2` | maxWidth | none |
| `h2` | width | auto |
| `h2` | minHeight | 0px |
| `label` | color | rgb(55, 55, 55) |
| `label` | backgroundColor | rgba(0, 0, 0, 0) |
| `label` | fontFamily | Montserrat, sans-serif |
| `label` | fontSize | 16.875px |
| `label` | fontWeight | 400 |
| `label` | lineHeight | 29.5312px |
| `label` | padding | 0px |
| `label` | margin | 0px 8px 0px 0px |
| `label` | border | 0px none rgb(55, 55, 55) |
| `label` | borderRadius | 0px |
| `label` | textTransform | none |
| `label` | letterSpacing | 0.16875px |
| `label` | boxShadow | none |
| `label` | outline | rgb(55, 55, 55) none 0px |
| `label` | maxWidth | none |
| `label` | width | auto |
| `label` | minHeight | 0px |
| `input` | color | rgb(255, 255, 255) |
| `input` | backgroundColor | rgb(0, 42, 80) |
| `input` | fontFamily | Montserrat, sans-serif |
| `input` | fontSize | 14px |
| `input` | fontWeight | 400 |
| `input` | lineHeight | 22.4px |
| `input` | padding | 10px 30px 10px 31px |
| `input` | margin | 0px |
| `input` | border | 1px solid rgba(0, 0, 0, 0) |
| `input` | borderRadius | 3px |
| `input` | textTransform | none |
| `input` | letterSpacing | normal |
| `input` | boxShadow | none |
| `input` | outline | rgb(255, 255, 255) none 0px |
| `input` | maxWidth | 100% |
| `input` | width | 100% |
| `input` | minHeight | 0px |
| `input[type=text]` | color | rgb(255, 255, 255) |
| `input[type=text]` | backgroundColor | rgb(0, 42, 80) |
| `input[type=text]` | fontFamily | Montserrat, sans-serif |
| `input[type=text]` | fontSize | 14px |
| `input[type=text]` | fontWeight | 400 |
| `input[type=text]` | lineHeight | 22.4px |
| `input[type=text]` | padding | 10px 30px 10px 31px |
| `input[type=text]` | margin | 0px |
| `input[type=text]` | border | 1px solid rgba(0, 0, 0, 0) |
| `input[type=text]` | borderRadius | 3px |
| `input[type=text]` | textTransform | none |
| `input[type=text]` | letterSpacing | normal |
| `input[type=text]` | boxShadow | none |
| `input[type=text]` | outline | rgb(255, 255, 255) none 0px |
| `input[type=text]` | maxWidth | 100% |
| `input[type=text]` | width | 100% |
| `input[type=text]` | minHeight | 0px |
| `button` | color | rgba(0, 0, 0, 0) |
| `button` | backgroundColor | rgba(0, 0, 0, 0) |
| `button` | fontFamily | Montserrat, sans-serif |
| `button` | fontSize | 16.875px |
| `button` | fontWeight | 400 |
| `button` | lineHeight | 29.5312px |
| `button` | padding | 1px 6px |
| `button` | margin | 0px |
| `button` | border | 0px none rgba(0, 0, 0, 0) |
| `button` | borderRadius | 0px |
| `button` | textTransform | none |
| `button` | letterSpacing | normal |
| `button` | boxShadow | none |
| `button` | outline | rgba(0, 0, 0, 0) none 0px |
| `button` | maxWidth | none |
| `button` | width | 24px |
| `button` | minHeight | 0px |
| `#fsHeader` | color | rgb(55, 55, 55) |
| `#fsHeader` | backgroundColor | rgba(0, 0, 0, 0) |
| `#fsHeader` | fontFamily | Montserrat, sans-serif |
| `#fsHeader` | fontSize | 16.875px |
| `#fsHeader` | fontWeight | 400 |
| `#fsHeader` | lineHeight | 29.5312px |
| `#fsHeader` | padding | 0px 0px 80px |
| `#fsHeader` | margin | 0px |
| `#fsHeader` | border | 0px none rgb(55, 55, 55) |
| `#fsHeader` | borderRadius | 0px |
| `#fsHeader` | textTransform | none |
| `#fsHeader` | letterSpacing | 0.16875px |
| `#fsHeader` | boxShadow | none |
| `#fsHeader` | outline | rgb(55, 55, 55) none 0px |
| `#fsHeader` | maxWidth | none |
| `#fsHeader` | width | 1280px |
| `#fsHeader` | minHeight | 0px |
| `.fsTabsNav` | color | rgb(55, 55, 55) |
| `.fsTabsNav` | backgroundColor | rgba(0, 0, 0, 0) |
| `.fsTabsNav` | fontFamily | Montserrat, sans-serif |
| `.fsTabsNav` | fontSize | 15px |
| `.fsTabsNav` | fontWeight | 400 |
| `.fsTabsNav` | lineHeight | 24.375px |
| `.fsTabsNav` | padding | 0px |
| `.fsTabsNav` | margin | 0px |
| `.fsTabsNav` | border | 0px none rgb(55, 55, 55) |
| `.fsTabsNav` | borderRadius | 0px |
| `.fsTabsNav` | textTransform | none |
| `.fsTabsNav` | letterSpacing | 0.16875px |
| `.fsTabsNav` | boxShadow | none |
| `.fsTabsNav` | outline | rgb(55, 55, 55) none 0px |
| `.fsTabsNav` | maxWidth | none |
| `.fsTabsNav` | width | 1080px |
| `.fsTabsNav` | minHeight | 0px |

## Grid

- **URL:** https://www.lisd.net/production2/calendar/grid
- **Extracted:** 2026-06-23

### Content

### Grid

### :root CSS Variables

| Variable | Value |
|----------|-------|
| `--app-200` | #f9def3 |
| `--app-500` | #c53ba8 |
| `--blue-200` | #e6f5fa |
| `--blue-500` | #1080a7 |
| `--blue-700` | #0a546d |
| `--bp-2xl` | '1536px' |
| `--bp-large` | '1024px' |
| `--bp-medium` | '768px' |
| `--bp-small` | '640px' |
| `--bp-xl` | '1280px' |
| `--button-background-color-disabled` | var(--neutral-300) |
| `--button-base-border-radius` | var(--corner-m) |
| `--button-base-border-width` | 2px |
| `--button-base-font-size` | var(--font-size-xs) |
| `--button-base-font-weight` | var(--font-weight-normal) |
| `--button-base-padding` | var(--space-2xs) var(--space-xs) |
| `--button-danger-background-color` | var(--red-500) |
| `--button-danger-background-color-hover` | #aa424e |
| `--button-danger-text-color` | var(--neutral-0) |
| `--button-large-font-size` | var(--font-size-base) |
| `--button-large-line-height` | 22px |
| `--button-large-padding` | var(--space-s) var(--space-m) |
| `--button-link-subtle-text-color` | var(--neutral-500) |
| `--button-link-subtle-text-color-hover` | var(--neutral-700) |
| `--button-link-text-color` | var(--neutral-700) |
| `--button-link-text-color-disabled` | #cccccc |
| `--button-normal-font-size` | var(--font-size-sm) |
| `--button-normal-line-height` | 20px |
| `--button-normal-padding` | var(--space-xs) var(--space-s) |
| `--button-primary-color` | var(--green-500) |
| `--button-primary-color-hover` | color-mix(
		in srgb,
		var(--green-500),
		#363636 24%
	) |
| `--button-primary-text-color` | var(--neutral-0) |
| `--button-secondary-background-color` | var(--green-200) |
| `--button-secondary-background-color-hover` | #d3eaef |
| `--button-secondary-text-color` | var(--green-700) |
| `--button-small-font-size` | var(--font-size-xs) |
| `--button-small-line-height` | 16px |
| `--button-small-padding` | var(--space-2xs) var(--space-xs) |
| `--button-tertiary-background-color` | var(--neutral-100) |
| `--button-tertiary-background-color-hover` | #e7ebf5 |
| `--button-tertiary-text-color` | var(--neutral-700) |
| `--button-text-color-disabled` | var(--neutral-450) |
| `--button-theme-border-radius` | var(--space-0) |
| `--button-theme-box-shadow` | inset 0 0 0 1px var(--button-theme-color) |
| `--button-theme-color` | var(--color-gray-6) |
| `--button-theme-color-border` | var(--button-theme-color) |
| `--button-theme-font-size` | var(--font-size-sm) |
| `--button-theme-font-weight` | var(--font-bold) |
| `--button-theme-padding` | var(--space-s) var(--space-l) |
| `--button-theme-text-transform` | uppercase |
| `--button-transparent-background-color` | transparent |
| `--button-transparent-background-color-hover` | var(--hover) |
| `--button-transparent-text-color` | var(--blue-500) |
| `--button-white-background-color` | var(--neutral-0) |
| `--button-white-background-color-hover` | #eff3fb |
| `--button-white-text-color` | var(--blue-500) |
| `--corner-l` | 1rem |
| `--corner-m` | 0.5rem |
| `--corner-s` | 0.25rem |
| `--display-accred-panel` | none |
| `--email-200` | #d4e9f5 |
| `--email-500` | #1a7db8 |
| `--error` | var(--red-500) |
| `--fb-200` | #d6e9ff |
| `--fb-500` | #1877f2 |
| `--focus` | var(--royal-500) |
| `--font-primary` | 'Outfit', system-ui, sans-serif |
| `--font-secondary` | 'Zilla Slab', serif |
| `--font-size-2xl` | 1.5rem |
| `--font-size-3xl` | 1.75rem |
| `--font-size-4xl` | 2rem |
| `--font-size-base` | 1rem |
| `--font-size-lg` | 1.125rem |
| `--font-size-sm` | 0.875rem |
| `--font-size-xl` | 1.25rem |
| `--font-size-xs` | 0.75rem |
| `--font-weight-black` | 900 |
| `--font-weight-bold` | 700 |
| `--font-weight-extrabold` | 800 |
| `--font-weight-extralight` | 200 |
| `--font-weight-light` | 300 |
| `--font-weight-medium` | 500 |
| `--font-weight-normal` | 400 |
| `--font-weight-semibold` | 600 |
| `--font-weight-thin` | 100 |
| `--footer-logo-bg` | false |
| `--footer-logo-enabled` | true |
| `--footer-logo-height-class` | height-medium |
| `--green-200` | #e1f5f2 |
| `--green-500` | #208475 |
| `--green-700` | #1c7265 |
| `--has-sticky-header` | false |
| `--header-logo-bg` | false |
| `--header-logo-enabled` | true |
| `--header-logo-height-class` | height-medium |
| `--heading-display` | 36px |
| `--heading-display-leading` | 48px |
| `--heading-title1` | 28px |
| `--heading-title1-leading` | 36px |
| `--heading-title2` | 24px |
| `--heading-title2-leading` | 32px |
| `--heading-title3` | 18px |
| `--heading-title3-leading` | 24px |
| `--heading-title4` | 16px |
| `--heading-title4-leading` | 22px |
| `--heading-title5` | 14px |
| `--heading-title5-leading` | 20px |
| `--heading-title6` | 14px |
| `--heading-title6-leading` | 20px |
| `--hover` | color-mix(in srgb, var(--royal-500), transparent 92%) |
| `--hover-dark` | color-mix(in srgb, var(--royal-500), transparent 76%) |
| `--icon-color` | var(--neutral-700) |
| `--icon-color-danger` | var(--red-500) |
| `--icon-color-disabled` | var(--neutral-450) |
| `--icon-color-grey` | var(--neutral-500) |
| `--icon-color-info` | var(--blue-500) |
| `--icon-color-magic` | var(--purple-500) |
| `--icon-color-success` | var(--green-500) |
| `--icon-color-warning` | var(--yellow-500) |
| `--icon-color-white` | var(--neutral-0) |
| `--is-district-site` | false |
| `--neutral-0` | #ffffff |
| `--neutral-100` | #f7f7f9 |
| `--neutral-200` | #f0f2f4 |
| `--neutral-300` | #e4e7eb |
| `--neutral-400` | #c6ccd4 |
| `--neutral-450` | #a9b3bf |
| `--neutral-500` | #576a81 |
| `--neutral-600` | #1a3454 |
| `--neutral-700` | #0a1726 |
| `--orange-200` | #fdeee8 |
| `--orange-500` | #f2774a |
| `--orange-700` | #ba5b39 |
| `--outline` | 2px solid var(--focus) |
| `--pop-200` | #fbdfe0 |
| `--pop-500` | #d34147 |
| `--primary-color` | #073772 |
| `--primary-color-h` | 213.08 |
| `--primary-color-hsl` | var(--primary-color-h), var(--primary-color-s), var(--primary-color-l) |
| `--primary-color-l` | 23.73% |
| `--primary-color-s` | 88.43% |
| `--purple-200` | #f3f1f8 |
| `--purple-500` | #7e6bb4 |
| `--purple-700` | #53447f |
| `--red-200` | #feeef0 |
| `--red-500` | #cf4656 |
| `--red-700` | #b63d48 |
| `--royal-200` | #ecf1fa |
| `--royal-500` | #3366cc |
| `--royal-700` | #254a95 |
| `--secondary-color` | #f1b51c |
| `--secondary-color-h` | 43.1 |
| `--secondary-color-hsl` | var(--secondary-color-h), var(--secondary-color-s), var(--secondary-color-l) |
| `--secondary-color-l` | 52.75% |
| `--secondary-color-s` | 88.38% |
| `--shadow-color-1` | rgba(14, 31, 53, 0.04) |
| `--shadow-color-2` | rgba(14, 31, 53, 0.08) |
| `--shadow-color-3` | rgba(14, 31, 53, 0.12) |
| `--shadow-color-4` | rgba(14, 31, 53, 0.16) |
| `--shadow-l` | 0px 8px 12px 0px var(--shadow-color-1),
		0px 6px 8px 0px var(--shadow-color-4) |
| `--shadow-m` | 0px 4px 8px 0px var(--shadow-color-1),
		0px 4px 6px 0px var(--shadow-color-3) |
| `--shadow-s` | 0px 4px 4px -1px var(--shadow-color-1),
		0px 2px 4px 0 var(--shadow-color-2) |
| `--shadow-xs` | 0px 1px 2px 0px var(--shadow-color-2) |
| `--show-footer-title` | false |
| `--show-header-location-name` | false |
| `--show-header-location-title` | false |
| `--show-header-motto` | false |
| `--show-header-subtitle` | false |
| `--sms-200` | #dbedc8 |
| `--sms-500` | #61a21a |
| `--space-0` | 0rem |
| `--space-2xl` | 3rem |
| `--space-2xs` | 0.25rem |
| `--space-3xl` | 4rem |
| `--space-4xl` | 5rem |
| `--space-l` | 1.5rem |
| `--space-m` | 1rem |
| `--space-s` | 0.75rem |
| `--space-xl` | 2rem |
| `--space-xs` | 0.5rem |
| `--text-caption` | 12px |
| `--text-caption-leading` | 16px |
| `--text-color` | var(--neutral-700) |
| `--text-lg` | 18px |
| `--text-lg-leading` | 24px |
| `--text-n` | 16px |
| `--text-n-leading` | 22px |
| `--text-sm` | 14px |
| `--text-sm-leading` | 20px |
| `--transition-duration` | 0.3s |
| `--voice-200` | #fce1d8 |
| `--voice-500` | #f2774a |
| `--weglot-display-position` | default |
| `--x-200` | #e7e7e7 |
| `--x-500` | #000000 |
| `--yellow-200` | #fcf2d3 |
| `--yellow-500` | #f4cd58 |
| `--yellow-700` | #3c3316 |

### Computed Styles

| Selector | Property | Value |
|----------|----------|-------|
| `body` | color | rgb(55, 55, 55) |
| `body` | backgroundColor | rgba(0, 0, 0, 0) |
| `body` | fontFamily | Montserrat, sans-serif |
| `body` | fontSize | 16.875px |
| `body` | fontWeight | 400 |
| `body` | lineHeight | 29.5312px |
| `body` | padding | 0px |
| `body` | margin | 0px |
| `body` | border | 0px none rgb(55, 55, 55) |
| `body` | borderRadius | 0px |
| `body` | textTransform | none |
| `body` | letterSpacing | 0.16875px |
| `body` | boxShadow | none |
| `body` | outline | rgb(55, 55, 55) none 0px |
| `body` | maxWidth | none |
| `body` | width | 1280px |
| `body` | minHeight | 0px |
| `h1` | color | rgb(7, 55, 114) |
| `h1` | backgroundColor | rgba(0, 0, 0, 0) |
| `h1` | fontFamily | Merriweather, serif |
| `h1` | fontSize | 41.25px |
| `h1` | fontWeight | 700 |
| `h1` | lineHeight | 47.4375px |
| `h1` | padding | 0px |
| `h1` | margin | 0px 0px 20px |
| `h1` | border | 0px none rgb(7, 55, 114) |
| `h1` | borderRadius | 0px |
| `h1` | textTransform | none |
| `h1` | letterSpacing | -0.825px |
| `h1` | boxShadow | none |
| `h1` | outline | rgb(7, 55, 114) none 0px |
| `h1` | maxWidth | none |
| `h1` | width | 1180px |
| `h1` | minHeight | 0px |
| `h2` | color | rgb(7, 55, 114) |
| `h2` | backgroundColor | rgba(0, 0, 0, 0) |
| `h2` | fontFamily | Merriweather, serif |
| `h2` | fontSize | 30px |
| `h2` | fontWeight | 700 |
| `h2` | lineHeight | 36px |
| `h2` | padding | 0px |
| `h2` | margin | 0px 0px 15px |
| `h2` | border | 0px none rgb(7, 55, 114) |
| `h2` | borderRadius | 0px |
| `h2` | textTransform | none |
| `h2` | letterSpacing | -0.3px |
| `h2` | boxShadow | none |
| `h2` | outline | rgb(7, 55, 114) none 0px |
| `h2` | maxWidth | none |
| `h2` | width | auto |
| `h2` | minHeight | 0px |
| `#fsPageContent a` | color | rgb(255, 255, 255) |
| `#fsPageContent a` | backgroundColor | rgb(35, 150, 220) |
| `#fsPageContent a` | fontFamily | Montserrat, sans-serif |
| `#fsPageContent a` | fontSize | 16.875px |
| `#fsPageContent a` | fontWeight | 700 |
| `#fsPageContent a` | lineHeight | 16.875px |
| `#fsPageContent a` | padding | 1px 1px 0px |
| `#fsPageContent a` | margin | 0px 5px 0px 0px |
| `#fsPageContent a` | border | 0px none rgb(255, 255, 255) |
| `#fsPageContent a` | borderRadius | 3px |
| `#fsPageContent a` | textTransform | none |
| `#fsPageContent a` | letterSpacing | 0.16875px |
| `#fsPageContent a` | boxShadow | none |
| `#fsPageContent a` | outline | rgb(255, 255, 255) none 0px |
| `#fsPageContent a` | maxWidth | none |
| `#fsPageContent a` | width | 18.1719px |
| `#fsPageContent a` | minHeight | auto |
| `label` | color | rgb(55, 55, 55) |
| `label` | backgroundColor | rgba(0, 0, 0, 0) |
| `label` | fontFamily | Montserrat, sans-serif |
| `label` | fontSize | 16.875px |
| `label` | fontWeight | 400 |
| `label` | lineHeight | 29.5312px |
| `label` | padding | 0px |
| `label` | margin | 0px 8px 0px 0px |
| `label` | border | 0px none rgb(55, 55, 55) |
| `label` | borderRadius | 0px |
| `label` | textTransform | none |
| `label` | letterSpacing | 0.16875px |
| `label` | boxShadow | none |
| `label` | outline | rgb(55, 55, 55) none 0px |
| `label` | maxWidth | none |
| `label` | width | auto |
| `label` | minHeight | 0px |
| `input` | color | rgb(255, 255, 255) |
| `input` | backgroundColor | rgb(0, 42, 80) |
| `input` | fontFamily | Montserrat, sans-serif |
| `input` | fontSize | 14px |
| `input` | fontWeight | 400 |
| `input` | lineHeight | 22.4px |
| `input` | padding | 10px 30px 10px 31px |
| `input` | margin | 0px |
| `input` | border | 1px solid rgba(0, 0, 0, 0) |
| `input` | borderRadius | 3px |
| `input` | textTransform | none |
| `input` | letterSpacing | normal |
| `input` | boxShadow | none |
| `input` | outline | rgb(255, 255, 255) none 0px |
| `input` | maxWidth | 100% |
| `input` | width | 100% |
| `input` | minHeight | 0px |
| `input[type=text]` | color | rgb(255, 255, 255) |
| `input[type=text]` | backgroundColor | rgb(0, 42, 80) |
| `input[type=text]` | fontFamily | Montserrat, sans-serif |
| `input[type=text]` | fontSize | 14px |
| `input[type=text]` | fontWeight | 400 |
| `input[type=text]` | lineHeight | 22.4px |
| `input[type=text]` | padding | 10px 30px 10px 31px |
| `input[type=text]` | margin | 0px |
| `input[type=text]` | border | 1px solid rgba(0, 0, 0, 0) |
| `input[type=text]` | borderRadius | 3px |
| `input[type=text]` | textTransform | none |
| `input[type=text]` | letterSpacing | normal |
| `input[type=text]` | boxShadow | none |
| `input[type=text]` | outline | rgb(255, 255, 255) none 0px |
| `input[type=text]` | maxWidth | 100% |
| `input[type=text]` | width | 100% |
| `input[type=text]` | minHeight | 0px |
| `button` | color | rgba(0, 0, 0, 0) |
| `button` | backgroundColor | rgba(0, 0, 0, 0) |
| `button` | fontFamily | Montserrat, sans-serif |
| `button` | fontSize | 16.875px |
| `button` | fontWeight | 400 |
| `button` | lineHeight | 29.5312px |
| `button` | padding | 1px 6px |
| `button` | margin | 0px |
| `button` | border | 0px none rgba(0, 0, 0, 0) |
| `button` | borderRadius | 0px |
| `button` | textTransform | none |
| `button` | letterSpacing | normal |
| `button` | boxShadow | none |
| `button` | outline | rgba(0, 0, 0, 0) none 0px |
| `button` | maxWidth | none |
| `button` | width | 24px |
| `button` | minHeight | 0px |
| `#fsHeader` | color | rgb(55, 55, 55) |
| `#fsHeader` | backgroundColor | rgba(0, 0, 0, 0) |
| `#fsHeader` | fontFamily | Montserrat, sans-serif |
| `#fsHeader` | fontSize | 16.875px |
| `#fsHeader` | fontWeight | 400 |
| `#fsHeader` | lineHeight | 29.5312px |
| `#fsHeader` | padding | 0px 0px 80px |
| `#fsHeader` | margin | 0px |
| `#fsHeader` | border | 0px none rgb(55, 55, 55) |
| `#fsHeader` | borderRadius | 0px |
| `#fsHeader` | textTransform | none |
| `#fsHeader` | letterSpacing | 0.16875px |
| `#fsHeader` | boxShadow | none |
| `#fsHeader` | outline | rgb(55, 55, 55) none 0px |
| `#fsHeader` | maxWidth | none |
| `#fsHeader` | width | 1280px |
| `#fsHeader` | minHeight | 0px |
| `.fsTabsNav` | color | rgb(55, 55, 55) |
| `.fsTabsNav` | backgroundColor | rgba(0, 0, 0, 0) |
| `.fsTabsNav` | fontFamily | Montserrat, sans-serif |
| `.fsTabsNav` | fontSize | 15px |
| `.fsTabsNav` | fontWeight | 400 |
| `.fsTabsNav` | lineHeight | 24.375px |
| `.fsTabsNav` | padding | 0px |
| `.fsTabsNav` | margin | 0px |
| `.fsTabsNav` | border | 0px none rgb(55, 55, 55) |
| `.fsTabsNav` | borderRadius | 0px |
| `.fsTabsNav` | textTransform | none |
| `.fsTabsNav` | letterSpacing | 0.16875px |
| `.fsTabsNav` | boxShadow | none |
| `.fsTabsNav` | outline | rgb(55, 55, 55) none 0px |
| `.fsTabsNav` | maxWidth | none |
| `.fsTabsNav` | width | 1080px |
| `.fsTabsNav` | minHeight | 0px |

## Slideshow

- **URL:** https://www.lisd.net/production2/calendar/slideshow
- **Extracted:** 2026-06-23

### Content

### Slideshow

#### Horizontal Scroll

#### Vertical Scroll

### :root CSS Variables

| Variable | Value |
|----------|-------|
| `--display-accred-panel` | none |
| `--footer-logo-bg` | false |
| `--footer-logo-enabled` | true |
| `--footer-logo-height-class` | height-medium |
| `--has-sticky-header` | false |
| `--header-logo-bg` | false |
| `--header-logo-enabled` | true |
| `--header-logo-height-class` | height-medium |
| `--is-district-site` | false |
| `--primary-color` | #073772 |
| `--primary-color-h` | 213.08 |
| `--primary-color-hsl` | var(--primary-color-h), var(--primary-color-s), var(--primary-color-l) |
| `--primary-color-l` | 23.73% |
| `--primary-color-s` | 88.43% |
| `--secondary-color` | #f1b51c |
| `--secondary-color-h` | 43.1 |
| `--secondary-color-hsl` | var(--secondary-color-h), var(--secondary-color-s), var(--secondary-color-l) |
| `--secondary-color-l` | 52.75% |
| `--secondary-color-s` | 88.38% |
| `--show-footer-title` | false |
| `--show-header-location-name` | false |
| `--show-header-location-title` | false |
| `--show-header-motto` | false |
| `--show-header-subtitle` | false |
| `--weglot-display-position` | default |

### Computed Styles

| Selector | Property | Value |
|----------|----------|-------|
| `body` | color | rgb(55, 55, 55) |
| `body` | backgroundColor | rgba(0, 0, 0, 0) |
| `body` | fontFamily | Montserrat, sans-serif |
| `body` | fontSize | 16.875px |
| `body` | fontWeight | 400 |
| `body` | lineHeight | 29.5312px |
| `body` | padding | 0px |
| `body` | margin | 0px |
| `body` | border | 0px none rgb(55, 55, 55) |
| `body` | borderRadius | 0px |
| `body` | textTransform | none |
| `body` | letterSpacing | 0.16875px |
| `body` | boxShadow | none |
| `body` | outline | rgb(55, 55, 55) none 0px |
| `body` | maxWidth | none |
| `body` | width | 1280px |
| `body` | minHeight | 0px |
| `h1` | color | rgb(7, 55, 114) |
| `h1` | backgroundColor | rgba(0, 0, 0, 0) |
| `h1` | fontFamily | Merriweather, serif |
| `h1` | fontSize | 41.25px |
| `h1` | fontWeight | 700 |
| `h1` | lineHeight | 47.4375px |
| `h1` | padding | 0px |
| `h1` | margin | 0px 0px 20px |
| `h1` | border | 0px none rgb(7, 55, 114) |
| `h1` | borderRadius | 0px |
| `h1` | textTransform | none |
| `h1` | letterSpacing | -0.825px |
| `h1` | boxShadow | none |
| `h1` | outline | rgb(7, 55, 114) none 0px |
| `h1` | maxWidth | none |
| `h1` | width | 1180px |
| `h1` | minHeight | 0px |
| `h2` | color | rgb(7, 55, 114) |
| `h2` | backgroundColor | rgba(0, 0, 0, 0) |
| `h2` | fontFamily | Merriweather, serif |
| `h2` | fontSize | 30px |
| `h2` | fontWeight | 700 |
| `h2` | lineHeight | 36px |
| `h2` | padding | 0px |
| `h2` | margin | 0px 0px 15px |
| `h2` | border | 0px none rgb(7, 55, 114) |
| `h2` | borderRadius | 0px |
| `h2` | textTransform | none |
| `h2` | letterSpacing | -0.3px |
| `h2` | boxShadow | none |
| `h2` | outline | rgb(7, 55, 114) none 0px |
| `h2` | maxWidth | none |
| `h2` | width | auto |
| `h2` | minHeight | 0px |
| `label` | color | rgb(55, 55, 55) |
| `label` | backgroundColor | rgba(0, 0, 0, 0) |
| `label` | fontFamily | Montserrat, sans-serif |
| `label` | fontSize | 16.875px |
| `label` | fontWeight | 400 |
| `label` | lineHeight | 29.5312px |
| `label` | padding | 0px |
| `label` | margin | 0px 8px 0px 0px |
| `label` | border | 0px none rgb(55, 55, 55) |
| `label` | borderRadius | 0px |
| `label` | textTransform | none |
| `label` | letterSpacing | 0.16875px |
| `label` | boxShadow | none |
| `label` | outline | rgb(55, 55, 55) none 0px |
| `label` | maxWidth | none |
| `label` | width | auto |
| `label` | minHeight | 0px |
| `input` | color | rgb(255, 255, 255) |
| `input` | backgroundColor | rgb(0, 42, 80) |
| `input` | fontFamily | Montserrat, sans-serif |
| `input` | fontSize | 14px |
| `input` | fontWeight | 400 |
| `input` | lineHeight | 22.4px |
| `input` | padding | 10px 30px 10px 31px |
| `input` | margin | 0px |
| `input` | border | 1px solid rgba(0, 0, 0, 0) |
| `input` | borderRadius | 3px |
| `input` | textTransform | none |
| `input` | letterSpacing | normal |
| `input` | boxShadow | none |
| `input` | outline | rgb(255, 255, 255) none 0px |
| `input` | maxWidth | 100% |
| `input` | width | 100% |
| `input` | minHeight | 0px |
| `input[type=text]` | color | rgb(255, 255, 255) |
| `input[type=text]` | backgroundColor | rgb(0, 42, 80) |
| `input[type=text]` | fontFamily | Montserrat, sans-serif |
| `input[type=text]` | fontSize | 14px |
| `input[type=text]` | fontWeight | 400 |
| `input[type=text]` | lineHeight | 22.4px |
| `input[type=text]` | padding | 10px 30px 10px 31px |
| `input[type=text]` | margin | 0px |
| `input[type=text]` | border | 1px solid rgba(0, 0, 0, 0) |
| `input[type=text]` | borderRadius | 3px |
| `input[type=text]` | textTransform | none |
| `input[type=text]` | letterSpacing | normal |
| `input[type=text]` | boxShadow | none |
| `input[type=text]` | outline | rgb(255, 255, 255) none 0px |
| `input[type=text]` | maxWidth | 100% |
| `input[type=text]` | width | 100% |
| `input[type=text]` | minHeight | 0px |
| `button` | color | rgba(0, 0, 0, 0) |
| `button` | backgroundColor | rgba(0, 0, 0, 0) |
| `button` | fontFamily | Montserrat, sans-serif |
| `button` | fontSize | 16.875px |
| `button` | fontWeight | 400 |
| `button` | lineHeight | 29.5312px |
| `button` | padding | 1px 6px |
| `button` | margin | 0px |
| `button` | border | 0px none rgba(0, 0, 0, 0) |
| `button` | borderRadius | 0px |
| `button` | textTransform | none |
| `button` | letterSpacing | normal |
| `button` | boxShadow | none |
| `button` | outline | rgba(0, 0, 0, 0) none 0px |
| `button` | maxWidth | none |
| `button` | width | 24px |
| `button` | minHeight | 0px |
| `#fsHeader` | color | rgb(55, 55, 55) |
| `#fsHeader` | backgroundColor | rgba(0, 0, 0, 0) |
| `#fsHeader` | fontFamily | Montserrat, sans-serif |
| `#fsHeader` | fontSize | 16.875px |
| `#fsHeader` | fontWeight | 400 |
| `#fsHeader` | lineHeight | 29.5312px |
| `#fsHeader` | padding | 0px 0px 80px |
| `#fsHeader` | margin | 0px |
| `#fsHeader` | border | 0px none rgb(55, 55, 55) |
| `#fsHeader` | borderRadius | 0px |
| `#fsHeader` | textTransform | none |
| `#fsHeader` | letterSpacing | 0.16875px |
| `#fsHeader` | boxShadow | none |
| `#fsHeader` | outline | rgb(55, 55, 55) none 0px |
| `#fsHeader` | maxWidth | none |
| `#fsHeader` | width | 1280px |
| `#fsHeader` | minHeight | 0px |
| `.fsTabsNav` | color | rgb(55, 55, 55) |
| `.fsTabsNav` | backgroundColor | rgba(0, 0, 0, 0) |
| `.fsTabsNav` | fontFamily | Montserrat, sans-serif |
| `.fsTabsNav` | fontSize | 15px |
| `.fsTabsNav` | fontWeight | 400 |
| `.fsTabsNav` | lineHeight | 24.375px |
| `.fsTabsNav` | padding | 0px |
| `.fsTabsNav` | margin | 0px |
| `.fsTabsNav` | border | 0px none rgb(55, 55, 55) |
| `.fsTabsNav` | borderRadius | 0px |
| `.fsTabsNav` | textTransform | none |
| `.fsTabsNav` | letterSpacing | 0.16875px |
| `.fsTabsNav` | boxShadow | none |
| `.fsTabsNav` | outline | rgb(55, 55, 55) none 0px |
| `.fsTabsNav` | maxWidth | none |
| `.fsTabsNav` | width | 1080px |
| `.fsTabsNav` | minHeight | 0px |

## Event

- **URL:** https://www.lisd.net/production2/calendar/event
- **Extracted:** 2026-06-23

### Content

### Event

### :root CSS Variables

| Variable | Value |
|----------|-------|
| `--display-accred-panel` | none |
| `--footer-logo-bg` | false |
| `--footer-logo-enabled` | true |
| `--footer-logo-height-class` | height-medium |
| `--has-sticky-header` | false |
| `--header-logo-bg` | false |
| `--header-logo-enabled` | true |
| `--header-logo-height-class` | height-medium |
| `--is-district-site` | false |
| `--primary-color` | #073772 |
| `--primary-color-h` | 213.08 |
| `--primary-color-hsl` | var(--primary-color-h), var(--primary-color-s), var(--primary-color-l) |
| `--primary-color-l` | 23.73% |
| `--primary-color-s` | 88.43% |
| `--secondary-color` | #f1b51c |
| `--secondary-color-h` | 43.1 |
| `--secondary-color-hsl` | var(--secondary-color-h), var(--secondary-color-s), var(--secondary-color-l) |
| `--secondary-color-l` | 52.75% |
| `--secondary-color-s` | 88.38% |
| `--show-footer-title` | false |
| `--show-header-location-name` | false |
| `--show-header-location-title` | false |
| `--show-header-motto` | false |
| `--show-header-subtitle` | false |
| `--weglot-display-position` | default |

### Computed Styles

| Selector | Property | Value |
|----------|----------|-------|
| `body` | color | rgb(55, 55, 55) |
| `body` | backgroundColor | rgba(0, 0, 0, 0) |
| `body` | fontFamily | Montserrat, sans-serif |
| `body` | fontSize | 16.875px |
| `body` | fontWeight | 400 |
| `body` | lineHeight | 29.5312px |
| `body` | padding | 0px |
| `body` | margin | 0px |
| `body` | border | 0px none rgb(55, 55, 55) |
| `body` | borderRadius | 0px |
| `body` | textTransform | none |
| `body` | letterSpacing | 0.16875px |
| `body` | boxShadow | none |
| `body` | outline | rgb(55, 55, 55) none 0px |
| `body` | maxWidth | none |
| `body` | width | 1280px |
| `body` | minHeight | 0px |
| `h1` | color | rgb(7, 55, 114) |
| `h1` | backgroundColor | rgba(0, 0, 0, 0) |
| `h1` | fontFamily | Merriweather, serif |
| `h1` | fontSize | 41.25px |
| `h1` | fontWeight | 700 |
| `h1` | lineHeight | 47.4375px |
| `h1` | padding | 0px |
| `h1` | margin | 0px 0px 20px |
| `h1` | border | 0px none rgb(7, 55, 114) |
| `h1` | borderRadius | 0px |
| `h1` | textTransform | none |
| `h1` | letterSpacing | -0.825px |
| `h1` | boxShadow | none |
| `h1` | outline | rgb(7, 55, 114) none 0px |
| `h1` | maxWidth | none |
| `h1` | width | 1180px |
| `h1` | minHeight | 0px |
| `h2` | color | rgb(7, 55, 114) |
| `h2` | backgroundColor | rgba(0, 0, 0, 0) |
| `h2` | fontFamily | Merriweather, serif |
| `h2` | fontSize | 30px |
| `h2` | fontWeight | 700 |
| `h2` | lineHeight | 36px |
| `h2` | padding | 0px |
| `h2` | margin | 0px 0px 15px |
| `h2` | border | 0px none rgb(7, 55, 114) |
| `h2` | borderRadius | 0px |
| `h2` | textTransform | none |
| `h2` | letterSpacing | -0.3px |
| `h2` | boxShadow | none |
| `h2` | outline | rgb(7, 55, 114) none 0px |
| `h2` | maxWidth | none |
| `h2` | width | auto |
| `h2` | minHeight | 0px |
| `label` | color | rgb(55, 55, 55) |
| `label` | backgroundColor | rgba(0, 0, 0, 0) |
| `label` | fontFamily | Montserrat, sans-serif |
| `label` | fontSize | 16.875px |
| `label` | fontWeight | 400 |
| `label` | lineHeight | 29.5312px |
| `label` | padding | 0px |
| `label` | margin | 0px 8px 0px 0px |
| `label` | border | 0px none rgb(55, 55, 55) |
| `label` | borderRadius | 0px |
| `label` | textTransform | none |
| `label` | letterSpacing | 0.16875px |
| `label` | boxShadow | none |
| `label` | outline | rgb(55, 55, 55) none 0px |
| `label` | maxWidth | none |
| `label` | width | auto |
| `label` | minHeight | 0px |
| `input` | color | rgb(255, 255, 255) |
| `input` | backgroundColor | rgb(0, 42, 80) |
| `input` | fontFamily | Montserrat, sans-serif |
| `input` | fontSize | 14px |
| `input` | fontWeight | 400 |
| `input` | lineHeight | 22.4px |
| `input` | padding | 10px 30px 10px 31px |
| `input` | margin | 0px |
| `input` | border | 1px solid rgba(0, 0, 0, 0) |
| `input` | borderRadius | 3px |
| `input` | textTransform | none |
| `input` | letterSpacing | normal |
| `input` | boxShadow | none |
| `input` | outline | rgb(255, 255, 255) none 0px |
| `input` | maxWidth | 100% |
| `input` | width | 100% |
| `input` | minHeight | 0px |
| `input[type=text]` | color | rgb(255, 255, 255) |
| `input[type=text]` | backgroundColor | rgb(0, 42, 80) |
| `input[type=text]` | fontFamily | Montserrat, sans-serif |
| `input[type=text]` | fontSize | 14px |
| `input[type=text]` | fontWeight | 400 |
| `input[type=text]` | lineHeight | 22.4px |
| `input[type=text]` | padding | 10px 30px 10px 31px |
| `input[type=text]` | margin | 0px |
| `input[type=text]` | border | 1px solid rgba(0, 0, 0, 0) |
| `input[type=text]` | borderRadius | 3px |
| `input[type=text]` | textTransform | none |
| `input[type=text]` | letterSpacing | normal |
| `input[type=text]` | boxShadow | none |
| `input[type=text]` | outline | rgb(255, 255, 255) none 0px |
| `input[type=text]` | maxWidth | 100% |
| `input[type=text]` | width | 100% |
| `input[type=text]` | minHeight | 0px |
| `button` | color | rgba(0, 0, 0, 0) |
| `button` | backgroundColor | rgba(0, 0, 0, 0) |
| `button` | fontFamily | Montserrat, sans-serif |
| `button` | fontSize | 16.875px |
| `button` | fontWeight | 400 |
| `button` | lineHeight | 29.5312px |
| `button` | padding | 1px 6px |
| `button` | margin | 0px |
| `button` | border | 0px none rgba(0, 0, 0, 0) |
| `button` | borderRadius | 0px |
| `button` | textTransform | none |
| `button` | letterSpacing | normal |
| `button` | boxShadow | none |
| `button` | outline | rgba(0, 0, 0, 0) none 0px |
| `button` | maxWidth | none |
| `button` | width | 24px |
| `button` | minHeight | 0px |
| `#fsHeader` | color | rgb(55, 55, 55) |
| `#fsHeader` | backgroundColor | rgba(0, 0, 0, 0) |
| `#fsHeader` | fontFamily | Montserrat, sans-serif |
| `#fsHeader` | fontSize | 16.875px |
| `#fsHeader` | fontWeight | 400 |
| `#fsHeader` | lineHeight | 29.5312px |
| `#fsHeader` | padding | 0px 0px 80px |
| `#fsHeader` | margin | 0px |
| `#fsHeader` | border | 0px none rgb(55, 55, 55) |
| `#fsHeader` | borderRadius | 0px |
| `#fsHeader` | textTransform | none |
| `#fsHeader` | letterSpacing | 0.16875px |
| `#fsHeader` | boxShadow | none |
| `#fsHeader` | outline | rgb(55, 55, 55) none 0px |
| `#fsHeader` | maxWidth | none |
| `#fsHeader` | width | 1280px |
| `#fsHeader` | minHeight | 0px |
| `.fsTabsNav` | color | rgb(55, 55, 55) |
| `.fsTabsNav` | backgroundColor | rgba(0, 0, 0, 0) |
| `.fsTabsNav` | fontFamily | Montserrat, sans-serif |
| `.fsTabsNav` | fontSize | 15px |
| `.fsTabsNav` | fontWeight | 400 |
| `.fsTabsNav` | lineHeight | 24.375px |
| `.fsTabsNav` | padding | 0px |
| `.fsTabsNav` | margin | 0px |
| `.fsTabsNav` | border | 0px none rgb(55, 55, 55) |
| `.fsTabsNav` | borderRadius | 0px |
| `.fsTabsNav` | textTransform | none |
| `.fsTabsNav` | letterSpacing | 0.16875px |
| `.fsTabsNav` | boxShadow | none |
| `.fsTabsNav` | outline | rgb(55, 55, 55) none 0px |
| `.fsTabsNav` | maxWidth | none |
| `.fsTabsNav` | width | 1080px |
| `.fsTabsNav` | minHeight | 0px |

## Constituent

- **URL:** https://www.lisd.net/production2/constituent
- **Extracted:** 2026-06-23

### Content

### Constituent

### :root CSS Variables

| Variable | Value |
|----------|-------|
| `--display-accred-panel` | none |
| `--footer-logo-bg` | false |
| `--footer-logo-enabled` | true |
| `--footer-logo-height-class` | height-medium |
| `--has-sticky-header` | false |
| `--header-logo-bg` | false |
| `--header-logo-enabled` | true |
| `--header-logo-height-class` | height-medium |
| `--is-district-site` | false |
| `--primary-color` | #073772 |
| `--primary-color-h` | 213.08 |
| `--primary-color-hsl` | var(--primary-color-h), var(--primary-color-s), var(--primary-color-l) |
| `--primary-color-l` | 23.73% |
| `--primary-color-s` | 88.43% |
| `--secondary-color` | #f1b51c |
| `--secondary-color-h` | 43.1 |
| `--secondary-color-hsl` | var(--secondary-color-h), var(--secondary-color-s), var(--secondary-color-l) |
| `--secondary-color-l` | 52.75% |
| `--secondary-color-s` | 88.38% |
| `--show-footer-title` | false |
| `--show-header-location-name` | false |
| `--show-header-location-title` | false |
| `--show-header-motto` | false |
| `--show-header-subtitle` | false |
| `--weglot-display-position` | default |

### Computed Styles

| Selector | Property | Value |
|----------|----------|-------|
| `body` | color | rgb(55, 55, 55) |
| `body` | backgroundColor | rgba(0, 0, 0, 0) |
| `body` | fontFamily | Montserrat, sans-serif |
| `body` | fontSize | 16.875px |
| `body` | fontWeight | 400 |
| `body` | lineHeight | 29.5312px |
| `body` | padding | 0px |
| `body` | margin | 0px |
| `body` | border | 0px none rgb(55, 55, 55) |
| `body` | borderRadius | 0px |
| `body` | textTransform | none |
| `body` | letterSpacing | 0.16875px |
| `body` | boxShadow | none |
| `body` | outline | rgb(55, 55, 55) none 0px |
| `body` | maxWidth | none |
| `body` | width | 1280px |
| `body` | minHeight | 0px |
| `h1` | color | rgb(7, 55, 114) |
| `h1` | backgroundColor | rgba(0, 0, 0, 0) |
| `h1` | fontFamily | Merriweather, serif |
| `h1` | fontSize | 41.25px |
| `h1` | fontWeight | 700 |
| `h1` | lineHeight | 47.4375px |
| `h1` | padding | 0px |
| `h1` | margin | 0px 0px 20px |
| `h1` | border | 0px none rgb(7, 55, 114) |
| `h1` | borderRadius | 0px |
| `h1` | textTransform | none |
| `h1` | letterSpacing | -0.825px |
| `h1` | boxShadow | none |
| `h1` | outline | rgb(7, 55, 114) none 0px |
| `h1` | maxWidth | none |
| `h1` | width | 1180px |
| `h1` | minHeight | 0px |
| `h2` | color | rgb(7, 55, 114) |
| `h2` | backgroundColor | rgba(0, 0, 0, 0) |
| `h2` | fontFamily | Merriweather, serif |
| `h2` | fontSize | 30px |
| `h2` | fontWeight | 700 |
| `h2` | lineHeight | 36px |
| `h2` | padding | 0px |
| `h2` | margin | 0px 0px 15px |
| `h2` | border | 0px none rgb(7, 55, 114) |
| `h2` | borderRadius | 0px |
| `h2` | textTransform | none |
| `h2` | letterSpacing | -0.3px |
| `h2` | boxShadow | none |
| `h2` | outline | rgb(7, 55, 114) none 0px |
| `h2` | maxWidth | none |
| `h2` | width | auto |
| `h2` | minHeight | 0px |
| `label` | color | rgb(55, 55, 55) |
| `label` | backgroundColor | rgba(0, 0, 0, 0) |
| `label` | fontFamily | Montserrat, sans-serif |
| `label` | fontSize | 16.875px |
| `label` | fontWeight | 400 |
| `label` | lineHeight | 29.5312px |
| `label` | padding | 0px |
| `label` | margin | 0px 8px 0px 0px |
| `label` | border | 0px none rgb(55, 55, 55) |
| `label` | borderRadius | 0px |
| `label` | textTransform | none |
| `label` | letterSpacing | 0.16875px |
| `label` | boxShadow | none |
| `label` | outline | rgb(55, 55, 55) none 0px |
| `label` | maxWidth | none |
| `label` | width | auto |
| `label` | minHeight | 0px |
| `input` | color | rgb(255, 255, 255) |
| `input` | backgroundColor | rgb(0, 42, 80) |
| `input` | fontFamily | Montserrat, sans-serif |
| `input` | fontSize | 14px |
| `input` | fontWeight | 400 |
| `input` | lineHeight | 22.4px |
| `input` | padding | 10px 30px 10px 31px |
| `input` | margin | 0px |
| `input` | border | 1px solid rgba(0, 0, 0, 0) |
| `input` | borderRadius | 3px |
| `input` | textTransform | none |
| `input` | letterSpacing | normal |
| `input` | boxShadow | none |
| `input` | outline | rgb(255, 255, 255) none 0px |
| `input` | maxWidth | 100% |
| `input` | width | 100% |
| `input` | minHeight | 0px |
| `input[type=text]` | color | rgb(255, 255, 255) |
| `input[type=text]` | backgroundColor | rgb(0, 42, 80) |
| `input[type=text]` | fontFamily | Montserrat, sans-serif |
| `input[type=text]` | fontSize | 14px |
| `input[type=text]` | fontWeight | 400 |
| `input[type=text]` | lineHeight | 22.4px |
| `input[type=text]` | padding | 10px 30px 10px 31px |
| `input[type=text]` | margin | 0px |
| `input[type=text]` | border | 1px solid rgba(0, 0, 0, 0) |
| `input[type=text]` | borderRadius | 3px |
| `input[type=text]` | textTransform | none |
| `input[type=text]` | letterSpacing | normal |
| `input[type=text]` | boxShadow | none |
| `input[type=text]` | outline | rgb(255, 255, 255) none 0px |
| `input[type=text]` | maxWidth | 100% |
| `input[type=text]` | width | 100% |
| `input[type=text]` | minHeight | 0px |
| `button` | color | rgba(0, 0, 0, 0) |
| `button` | backgroundColor | rgba(0, 0, 0, 0) |
| `button` | fontFamily | Montserrat, sans-serif |
| `button` | fontSize | 16.875px |
| `button` | fontWeight | 400 |
| `button` | lineHeight | 29.5312px |
| `button` | padding | 1px 6px |
| `button` | margin | 0px |
| `button` | border | 0px none rgba(0, 0, 0, 0) |
| `button` | borderRadius | 0px |
| `button` | textTransform | none |
| `button` | letterSpacing | normal |
| `button` | boxShadow | none |
| `button` | outline | rgba(0, 0, 0, 0) none 0px |
| `button` | maxWidth | none |
| `button` | width | 24px |
| `button` | minHeight | 0px |
| `#fsHeader` | color | rgb(55, 55, 55) |
| `#fsHeader` | backgroundColor | rgba(0, 0, 0, 0) |
| `#fsHeader` | fontFamily | Montserrat, sans-serif |
| `#fsHeader` | fontSize | 16.875px |
| `#fsHeader` | fontWeight | 400 |
| `#fsHeader` | lineHeight | 29.5312px |
| `#fsHeader` | padding | 0px 0px 80px |
| `#fsHeader` | margin | 0px |
| `#fsHeader` | border | 0px none rgb(55, 55, 55) |
| `#fsHeader` | borderRadius | 0px |
| `#fsHeader` | textTransform | none |
| `#fsHeader` | letterSpacing | 0.16875px |
| `#fsHeader` | boxShadow | none |
| `#fsHeader` | outline | rgb(55, 55, 55) none 0px |
| `#fsHeader` | maxWidth | none |
| `#fsHeader` | width | 1280px |
| `#fsHeader` | minHeight | 0px |
| `.fsTabsNav` | color | rgb(55, 55, 55) |
| `.fsTabsNav` | backgroundColor | rgba(0, 0, 0, 0) |
| `.fsTabsNav` | fontFamily | Montserrat, sans-serif |
| `.fsTabsNav` | fontSize | 15px |
| `.fsTabsNav` | fontWeight | 400 |
| `.fsTabsNav` | lineHeight | 24.375px |
| `.fsTabsNav` | padding | 0px |
| `.fsTabsNav` | margin | 0px |
| `.fsTabsNav` | border | 0px none rgb(55, 55, 55) |
| `.fsTabsNav` | borderRadius | 0px |
| `.fsTabsNav` | textTransform | none |
| `.fsTabsNav` | letterSpacing | 0.16875px |
| `.fsTabsNav` | boxShadow | none |
| `.fsTabsNav` | outline | rgb(55, 55, 55) none 0px |
| `.fsTabsNav` | maxWidth | none |
| `.fsTabsNav` | width | 1080px |
| `.fsTabsNav` | minHeight | 0px |

## Directory

- **URL:** https://www.lisd.net/production2/constituent/directory
- **Extracted:** 2026-06-23

### Content

### Directory

##### test user

### :root CSS Variables

| Variable | Value |
|----------|-------|
| `--display-accred-panel` | none |
| `--footer-logo-bg` | false |
| `--footer-logo-enabled` | true |
| `--footer-logo-height-class` | height-medium |
| `--has-sticky-header` | false |
| `--header-logo-bg` | false |
| `--header-logo-enabled` | true |
| `--header-logo-height-class` | height-medium |
| `--is-district-site` | false |
| `--primary-color` | #073772 |
| `--primary-color-h` | 213.08 |
| `--primary-color-hsl` | var(--primary-color-h), var(--primary-color-s), var(--primary-color-l) |
| `--primary-color-l` | 23.73% |
| `--primary-color-s` | 88.43% |
| `--secondary-color` | #f1b51c |
| `--secondary-color-h` | 43.1 |
| `--secondary-color-hsl` | var(--secondary-color-h), var(--secondary-color-s), var(--secondary-color-l) |
| `--secondary-color-l` | 52.75% |
| `--secondary-color-s` | 88.38% |
| `--show-footer-title` | false |
| `--show-header-location-name` | false |
| `--show-header-location-title` | false |
| `--show-header-motto` | false |
| `--show-header-subtitle` | false |
| `--weglot-display-position` | default |

### Computed Styles

| Selector | Property | Value |
|----------|----------|-------|
| `body` | color | rgb(55, 55, 55) |
| `body` | backgroundColor | rgba(0, 0, 0, 0) |
| `body` | fontFamily | Montserrat, sans-serif |
| `body` | fontSize | 16.875px |
| `body` | fontWeight | 400 |
| `body` | lineHeight | 29.5312px |
| `body` | padding | 0px |
| `body` | margin | 0px |
| `body` | border | 0px none rgb(55, 55, 55) |
| `body` | borderRadius | 0px |
| `body` | textTransform | none |
| `body` | letterSpacing | 0.16875px |
| `body` | boxShadow | none |
| `body` | outline | rgb(55, 55, 55) none 0px |
| `body` | maxWidth | none |
| `body` | width | 1280px |
| `body` | minHeight | 0px |
| `h1` | color | rgb(7, 55, 114) |
| `h1` | backgroundColor | rgba(0, 0, 0, 0) |
| `h1` | fontFamily | Merriweather, serif |
| `h1` | fontSize | 41.25px |
| `h1` | fontWeight | 700 |
| `h1` | lineHeight | 47.4375px |
| `h1` | padding | 0px |
| `h1` | margin | 0px 0px 20px |
| `h1` | border | 0px none rgb(7, 55, 114) |
| `h1` | borderRadius | 0px |
| `h1` | textTransform | none |
| `h1` | letterSpacing | -0.825px |
| `h1` | boxShadow | none |
| `h1` | outline | rgb(7, 55, 114) none 0px |
| `h1` | maxWidth | none |
| `h1` | width | 1180px |
| `h1` | minHeight | 0px |
| `h2` | color | rgb(7, 55, 114) |
| `h2` | backgroundColor | rgba(0, 0, 0, 0) |
| `h2` | fontFamily | Merriweather, serif |
| `h2` | fontSize | 30px |
| `h2` | fontWeight | 700 |
| `h2` | lineHeight | 36px |
| `h2` | padding | 0px |
| `h2` | margin | 0px 0px 15px |
| `h2` | border | 0px none rgb(7, 55, 114) |
| `h2` | borderRadius | 0px |
| `h2` | textTransform | none |
| `h2` | letterSpacing | -0.3px |
| `h2` | boxShadow | none |
| `h2` | outline | rgb(7, 55, 114) none 0px |
| `h2` | maxWidth | none |
| `h2` | width | auto |
| `h2` | minHeight | 0px |
| `h3` | color | rgb(7, 55, 114) |
| `h3` | backgroundColor | rgba(0, 0, 0, 0) |
| `h3` | fontFamily | Merriweather, serif |
| `h3` | fontSize | 15.9375px |
| `h3` | fontWeight | 700 |
| `h3` | lineHeight | 21.5156px |
| `h3` | padding | 0px |
| `h3` | margin | 0px 0px 7.5px |
| `h3` | border | 0px none rgb(7, 55, 114) |
| `h3` | borderRadius | 0px |
| `h3` | textTransform | none |
| `h3` | letterSpacing | -0.0796875px |
| `h3` | boxShadow | none |
| `h3` | outline | rgb(7, 55, 114) none 0px |
| `h3` | maxWidth | none |
| `h3` | width | 321.953px |
| `h3` | minHeight | 0px |
| `#fsPageContent a` | color | rgb(7, 55, 114) |
| `#fsPageContent a` | backgroundColor | rgba(0, 0, 0, 0) |
| `#fsPageContent a` | fontFamily | Merriweather, serif |
| `#fsPageContent a` | fontSize | 15.9375px |
| `#fsPageContent a` | fontWeight | 700 |
| `#fsPageContent a` | lineHeight | 21.5156px |
| `#fsPageContent a` | padding | 0px |
| `#fsPageContent a` | margin | 0px |
| `#fsPageContent a` | border | 0px none rgb(7, 55, 114) |
| `#fsPageContent a` | borderRadius | 0px |
| `#fsPageContent a` | textTransform | none |
| `#fsPageContent a` | letterSpacing | -0.0796875px |
| `#fsPageContent a` | boxShadow | none |
| `#fsPageContent a` | outline | rgb(7, 55, 114) none 0px |
| `#fsPageContent a` | maxWidth | none |
| `#fsPageContent a` | width | auto |
| `#fsPageContent a` | minHeight | 0px |
| `label` | color | rgb(55, 55, 55) |
| `label` | backgroundColor | rgba(0, 0, 0, 0) |
| `label` | fontFamily | Montserrat, sans-serif |
| `label` | fontSize | 16.875px |
| `label` | fontWeight | 400 |
| `label` | lineHeight | 29.5312px |
| `label` | padding | 0px |
| `label` | margin | 0px 8px 0px 0px |
| `label` | border | 0px none rgb(55, 55, 55) |
| `label` | borderRadius | 0px |
| `label` | textTransform | none |
| `label` | letterSpacing | 0.16875px |
| `label` | boxShadow | none |
| `label` | outline | rgb(55, 55, 55) none 0px |
| `label` | maxWidth | none |
| `label` | width | auto |
| `label` | minHeight | 0px |
| `input` | color | rgb(255, 255, 255) |
| `input` | backgroundColor | rgb(0, 42, 80) |
| `input` | fontFamily | Montserrat, sans-serif |
| `input` | fontSize | 14px |
| `input` | fontWeight | 400 |
| `input` | lineHeight | 22.4px |
| `input` | padding | 10px 30px 10px 31px |
| `input` | margin | 0px |
| `input` | border | 1px solid rgba(0, 0, 0, 0) |
| `input` | borderRadius | 3px |
| `input` | textTransform | none |
| `input` | letterSpacing | normal |
| `input` | boxShadow | none |
| `input` | outline | rgb(255, 255, 255) none 0px |
| `input` | maxWidth | 100% |
| `input` | width | 100% |
| `input` | minHeight | 0px |
| `input[type=text]` | color | rgb(255, 255, 255) |
| `input[type=text]` | backgroundColor | rgb(0, 42, 80) |
| `input[type=text]` | fontFamily | Montserrat, sans-serif |
| `input[type=text]` | fontSize | 14px |
| `input[type=text]` | fontWeight | 400 |
| `input[type=text]` | lineHeight | 22.4px |
| `input[type=text]` | padding | 10px 30px 10px 31px |
| `input[type=text]` | margin | 0px |
| `input[type=text]` | border | 1px solid rgba(0, 0, 0, 0) |
| `input[type=text]` | borderRadius | 3px |
| `input[type=text]` | textTransform | none |
| `input[type=text]` | letterSpacing | normal |
| `input[type=text]` | boxShadow | none |
| `input[type=text]` | outline | rgb(255, 255, 255) none 0px |
| `input[type=text]` | maxWidth | 100% |
| `input[type=text]` | width | 100% |
| `input[type=text]` | minHeight | 0px |
| `button` | color | rgba(0, 0, 0, 0) |
| `button` | backgroundColor | rgba(0, 0, 0, 0) |
| `button` | fontFamily | Montserrat, sans-serif |
| `button` | fontSize | 16.875px |
| `button` | fontWeight | 400 |
| `button` | lineHeight | 29.5312px |
| `button` | padding | 1px 6px |
| `button` | margin | 0px |
| `button` | border | 0px none rgba(0, 0, 0, 0) |
| `button` | borderRadius | 0px |
| `button` | textTransform | none |
| `button` | letterSpacing | normal |
| `button` | boxShadow | none |
| `button` | outline | rgba(0, 0, 0, 0) none 0px |
| `button` | maxWidth | none |
| `button` | width | 24px |
| `button` | minHeight | 0px |
| `#fsHeader` | color | rgb(55, 55, 55) |
| `#fsHeader` | backgroundColor | rgba(0, 0, 0, 0) |
| `#fsHeader` | fontFamily | Montserrat, sans-serif |
| `#fsHeader` | fontSize | 16.875px |
| `#fsHeader` | fontWeight | 400 |
| `#fsHeader` | lineHeight | 29.5312px |
| `#fsHeader` | padding | 0px 0px 80px |
| `#fsHeader` | margin | 0px |
| `#fsHeader` | border | 0px none rgb(55, 55, 55) |
| `#fsHeader` | borderRadius | 0px |
| `#fsHeader` | textTransform | none |
| `#fsHeader` | letterSpacing | 0.16875px |
| `#fsHeader` | boxShadow | none |
| `#fsHeader` | outline | rgb(55, 55, 55) none 0px |
| `#fsHeader` | maxWidth | none |
| `#fsHeader` | width | 1280px |
| `#fsHeader` | minHeight | 0px |
| `.fsTabsNav` | color | rgb(55, 55, 55) |
| `.fsTabsNav` | backgroundColor | rgba(0, 0, 0, 0) |
| `.fsTabsNav` | fontFamily | Montserrat, sans-serif |
| `.fsTabsNav` | fontSize | 15px |
| `.fsTabsNav` | fontWeight | 400 |
| `.fsTabsNav` | lineHeight | 24.375px |
| `.fsTabsNav` | padding | 0px |
| `.fsTabsNav` | margin | 0px |
| `.fsTabsNav` | border | 0px none rgb(55, 55, 55) |
| `.fsTabsNav` | borderRadius | 0px |
| `.fsTabsNav` | textTransform | none |
| `.fsTabsNav` | letterSpacing | 0.16875px |
| `.fsTabsNav` | boxShadow | none |
| `.fsTabsNav` | outline | rgb(55, 55, 55) none 0px |
| `.fsTabsNav` | maxWidth | none |
| `.fsTabsNav` | width | 1080px |
| `.fsTabsNav` | minHeight | 0px |

## Profile

- **URL:** https://www.lisd.net/production2/constituent/profile
- **Extracted:** 2026-06-23

### Content

### Profile

### :root CSS Variables

| Variable | Value |
|----------|-------|
| `--display-accred-panel` | none |
| `--footer-logo-bg` | false |
| `--footer-logo-enabled` | true |
| `--footer-logo-height-class` | height-medium |
| `--has-sticky-header` | false |
| `--header-logo-bg` | false |
| `--header-logo-enabled` | true |
| `--header-logo-height-class` | height-medium |
| `--is-district-site` | false |
| `--primary-color` | #073772 |
| `--primary-color-h` | 213.08 |
| `--primary-color-hsl` | var(--primary-color-h), var(--primary-color-s), var(--primary-color-l) |
| `--primary-color-l` | 23.73% |
| `--primary-color-s` | 88.43% |
| `--secondary-color` | #f1b51c |
| `--secondary-color-h` | 43.1 |
| `--secondary-color-hsl` | var(--secondary-color-h), var(--secondary-color-s), var(--secondary-color-l) |
| `--secondary-color-l` | 52.75% |
| `--secondary-color-s` | 88.38% |
| `--show-footer-title` | false |
| `--show-header-location-name` | false |
| `--show-header-location-title` | false |
| `--show-header-motto` | false |
| `--show-header-subtitle` | false |
| `--weglot-display-position` | default |

### Computed Styles

| Selector | Property | Value |
|----------|----------|-------|
| `body` | color | rgb(55, 55, 55) |
| `body` | backgroundColor | rgba(0, 0, 0, 0) |
| `body` | fontFamily | Montserrat, sans-serif |
| `body` | fontSize | 16.875px |
| `body` | fontWeight | 400 |
| `body` | lineHeight | 29.5312px |
| `body` | padding | 0px |
| `body` | margin | 0px |
| `body` | border | 0px none rgb(55, 55, 55) |
| `body` | borderRadius | 0px |
| `body` | textTransform | none |
| `body` | letterSpacing | 0.16875px |
| `body` | boxShadow | none |
| `body` | outline | rgb(55, 55, 55) none 0px |
| `body` | maxWidth | none |
| `body` | width | 1280px |
| `body` | minHeight | 0px |
| `h1` | color | rgb(7, 55, 114) |
| `h1` | backgroundColor | rgba(0, 0, 0, 0) |
| `h1` | fontFamily | Merriweather, serif |
| `h1` | fontSize | 41.25px |
| `h1` | fontWeight | 700 |
| `h1` | lineHeight | 47.4375px |
| `h1` | padding | 0px |
| `h1` | margin | 0px 0px 20px |
| `h1` | border | 0px none rgb(7, 55, 114) |
| `h1` | borderRadius | 0px |
| `h1` | textTransform | none |
| `h1` | letterSpacing | -0.825px |
| `h1` | boxShadow | none |
| `h1` | outline | rgb(7, 55, 114) none 0px |
| `h1` | maxWidth | none |
| `h1` | width | 1180px |
| `h1` | minHeight | 0px |
| `h2` | color | rgb(7, 55, 114) |
| `h2` | backgroundColor | rgba(0, 0, 0, 0) |
| `h2` | fontFamily | Merriweather, serif |
| `h2` | fontSize | 30px |
| `h2` | fontWeight | 700 |
| `h2` | lineHeight | 36px |
| `h2` | padding | 0px |
| `h2` | margin | 0px 0px 15px |
| `h2` | border | 0px none rgb(7, 55, 114) |
| `h2` | borderRadius | 0px |
| `h2` | textTransform | none |
| `h2` | letterSpacing | -0.3px |
| `h2` | boxShadow | none |
| `h2` | outline | rgb(7, 55, 114) none 0px |
| `h2` | maxWidth | none |
| `h2` | width | auto |
| `h2` | minHeight | 0px |
| `label` | color | rgb(55, 55, 55) |
| `label` | backgroundColor | rgba(0, 0, 0, 0) |
| `label` | fontFamily | Montserrat, sans-serif |
| `label` | fontSize | 16.875px |
| `label` | fontWeight | 400 |
| `label` | lineHeight | 29.5312px |
| `label` | padding | 0px |
| `label` | margin | 0px 8px 0px 0px |
| `label` | border | 0px none rgb(55, 55, 55) |
| `label` | borderRadius | 0px |
| `label` | textTransform | none |
| `label` | letterSpacing | 0.16875px |
| `label` | boxShadow | none |
| `label` | outline | rgb(55, 55, 55) none 0px |
| `label` | maxWidth | none |
| `label` | width | auto |
| `label` | minHeight | 0px |
| `input` | color | rgb(255, 255, 255) |
| `input` | backgroundColor | rgb(0, 42, 80) |
| `input` | fontFamily | Montserrat, sans-serif |
| `input` | fontSize | 14px |
| `input` | fontWeight | 400 |
| `input` | lineHeight | 22.4px |
| `input` | padding | 10px 30px 10px 31px |
| `input` | margin | 0px |
| `input` | border | 1px solid rgba(0, 0, 0, 0) |
| `input` | borderRadius | 3px |
| `input` | textTransform | none |
| `input` | letterSpacing | normal |
| `input` | boxShadow | none |
| `input` | outline | rgb(255, 255, 255) none 0px |
| `input` | maxWidth | 100% |
| `input` | width | 100% |
| `input` | minHeight | 0px |
| `input[type=text]` | color | rgb(255, 255, 255) |
| `input[type=text]` | backgroundColor | rgb(0, 42, 80) |
| `input[type=text]` | fontFamily | Montserrat, sans-serif |
| `input[type=text]` | fontSize | 14px |
| `input[type=text]` | fontWeight | 400 |
| `input[type=text]` | lineHeight | 22.4px |
| `input[type=text]` | padding | 10px 30px 10px 31px |
| `input[type=text]` | margin | 0px |
| `input[type=text]` | border | 1px solid rgba(0, 0, 0, 0) |
| `input[type=text]` | borderRadius | 3px |
| `input[type=text]` | textTransform | none |
| `input[type=text]` | letterSpacing | normal |
| `input[type=text]` | boxShadow | none |
| `input[type=text]` | outline | rgb(255, 255, 255) none 0px |
| `input[type=text]` | maxWidth | 100% |
| `input[type=text]` | width | 100% |
| `input[type=text]` | minHeight | 0px |
| `button` | color | rgba(0, 0, 0, 0) |
| `button` | backgroundColor | rgba(0, 0, 0, 0) |
| `button` | fontFamily | Montserrat, sans-serif |
| `button` | fontSize | 16.875px |
| `button` | fontWeight | 400 |
| `button` | lineHeight | 29.5312px |
| `button` | padding | 1px 6px |
| `button` | margin | 0px |
| `button` | border | 0px none rgba(0, 0, 0, 0) |
| `button` | borderRadius | 0px |
| `button` | textTransform | none |
| `button` | letterSpacing | normal |
| `button` | boxShadow | none |
| `button` | outline | rgba(0, 0, 0, 0) none 0px |
| `button` | maxWidth | none |
| `button` | width | 24px |
| `button` | minHeight | 0px |
| `#fsHeader` | color | rgb(55, 55, 55) |
| `#fsHeader` | backgroundColor | rgba(0, 0, 0, 0) |
| `#fsHeader` | fontFamily | Montserrat, sans-serif |
| `#fsHeader` | fontSize | 16.875px |
| `#fsHeader` | fontWeight | 400 |
| `#fsHeader` | lineHeight | 29.5312px |
| `#fsHeader` | padding | 0px 0px 80px |
| `#fsHeader` | margin | 0px |
| `#fsHeader` | border | 0px none rgb(55, 55, 55) |
| `#fsHeader` | borderRadius | 0px |
| `#fsHeader` | textTransform | none |
| `#fsHeader` | letterSpacing | 0.16875px |
| `#fsHeader` | boxShadow | none |
| `#fsHeader` | outline | rgb(55, 55, 55) none 0px |
| `#fsHeader` | maxWidth | none |
| `#fsHeader` | width | 1280px |
| `#fsHeader` | minHeight | 0px |
| `.fsTabsNav` | color | rgb(55, 55, 55) |
| `.fsTabsNav` | backgroundColor | rgba(0, 0, 0, 0) |
| `.fsTabsNav` | fontFamily | Montserrat, sans-serif |
| `.fsTabsNav` | fontSize | 15px |
| `.fsTabsNav` | fontWeight | 400 |
| `.fsTabsNav` | lineHeight | 24.375px |
| `.fsTabsNav` | padding | 0px |
| `.fsTabsNav` | margin | 0px |
| `.fsTabsNav` | border | 0px none rgb(55, 55, 55) |
| `.fsTabsNav` | borderRadius | 0px |
| `.fsTabsNav` | textTransform | none |
| `.fsTabsNav` | letterSpacing | 0.16875px |
| `.fsTabsNav` | boxShadow | none |
| `.fsTabsNav` | outline | rgb(55, 55, 55) none 0px |
| `.fsTabsNav` | maxWidth | none |
| `.fsTabsNav` | width | 1080px |
| `.fsTabsNav` | minHeight | 0px |

## Search

- **URL:** https://www.lisd.net/production2/constituent/search
- **Extracted:** 2026-06-23

### Content

### Search

### :root CSS Variables

| Variable | Value |
|----------|-------|
| `--display-accred-panel` | none |
| `--footer-logo-bg` | false |
| `--footer-logo-enabled` | true |
| `--footer-logo-height-class` | height-medium |
| `--has-sticky-header` | false |
| `--header-logo-bg` | false |
| `--header-logo-enabled` | true |
| `--header-logo-height-class` | height-medium |
| `--is-district-site` | false |
| `--primary-color` | #073772 |
| `--primary-color-h` | 213.08 |
| `--primary-color-hsl` | var(--primary-color-h), var(--primary-color-s), var(--primary-color-l) |
| `--primary-color-l` | 23.73% |
| `--primary-color-s` | 88.43% |
| `--secondary-color` | #f1b51c |
| `--secondary-color-h` | 43.1 |
| `--secondary-color-hsl` | var(--secondary-color-h), var(--secondary-color-s), var(--secondary-color-l) |
| `--secondary-color-l` | 52.75% |
| `--secondary-color-s` | 88.38% |
| `--show-footer-title` | false |
| `--show-header-location-name` | false |
| `--show-header-location-title` | false |
| `--show-header-motto` | false |
| `--show-header-subtitle` | false |
| `--weglot-display-position` | default |

### Computed Styles

| Selector | Property | Value |
|----------|----------|-------|
| `body` | color | rgb(55, 55, 55) |
| `body` | backgroundColor | rgba(0, 0, 0, 0) |
| `body` | fontFamily | Montserrat, sans-serif |
| `body` | fontSize | 16.875px |
| `body` | fontWeight | 400 |
| `body` | lineHeight | 29.5312px |
| `body` | padding | 0px |
| `body` | margin | 0px |
| `body` | border | 0px none rgb(55, 55, 55) |
| `body` | borderRadius | 0px |
| `body` | textTransform | none |
| `body` | letterSpacing | 0.16875px |
| `body` | boxShadow | none |
| `body` | outline | rgb(55, 55, 55) none 0px |
| `body` | maxWidth | none |
| `body` | width | 1280px |
| `body` | minHeight | 0px |
| `h1` | color | rgb(7, 55, 114) |
| `h1` | backgroundColor | rgba(0, 0, 0, 0) |
| `h1` | fontFamily | Merriweather, serif |
| `h1` | fontSize | 41.25px |
| `h1` | fontWeight | 700 |
| `h1` | lineHeight | 47.4375px |
| `h1` | padding | 0px |
| `h1` | margin | 0px 0px 20px |
| `h1` | border | 0px none rgb(7, 55, 114) |
| `h1` | borderRadius | 0px |
| `h1` | textTransform | none |
| `h1` | letterSpacing | -0.825px |
| `h1` | boxShadow | none |
| `h1` | outline | rgb(7, 55, 114) none 0px |
| `h1` | maxWidth | none |
| `h1` | width | 1180px |
| `h1` | minHeight | 0px |
| `h2` | color | rgb(7, 55, 114) |
| `h2` | backgroundColor | rgba(0, 0, 0, 0) |
| `h2` | fontFamily | Merriweather, serif |
| `h2` | fontSize | 30px |
| `h2` | fontWeight | 700 |
| `h2` | lineHeight | 36px |
| `h2` | padding | 0px |
| `h2` | margin | 0px 0px 15px |
| `h2` | border | 0px none rgb(7, 55, 114) |
| `h2` | borderRadius | 0px |
| `h2` | textTransform | none |
| `h2` | letterSpacing | -0.3px |
| `h2` | boxShadow | none |
| `h2` | outline | rgb(7, 55, 114) none 0px |
| `h2` | maxWidth | none |
| `h2` | width | auto |
| `h2` | minHeight | 0px |
| `label` | color | rgb(55, 55, 55) |
| `label` | backgroundColor | rgba(0, 0, 0, 0) |
| `label` | fontFamily | Montserrat, sans-serif |
| `label` | fontSize | 16.875px |
| `label` | fontWeight | 400 |
| `label` | lineHeight | 29.5312px |
| `label` | padding | 0px |
| `label` | margin | 0px 8px 0px 0px |
| `label` | border | 0px none rgb(55, 55, 55) |
| `label` | borderRadius | 0px |
| `label` | textTransform | none |
| `label` | letterSpacing | 0.16875px |
| `label` | boxShadow | none |
| `label` | outline | rgb(55, 55, 55) none 0px |
| `label` | maxWidth | none |
| `label` | width | auto |
| `label` | minHeight | 0px |
| `input` | color | rgb(255, 255, 255) |
| `input` | backgroundColor | rgb(0, 42, 80) |
| `input` | fontFamily | Montserrat, sans-serif |
| `input` | fontSize | 14px |
| `input` | fontWeight | 400 |
| `input` | lineHeight | 22.4px |
| `input` | padding | 10px 30px 10px 31px |
| `input` | margin | 0px |
| `input` | border | 1px solid rgba(0, 0, 0, 0) |
| `input` | borderRadius | 3px |
| `input` | textTransform | none |
| `input` | letterSpacing | normal |
| `input` | boxShadow | none |
| `input` | outline | rgb(255, 255, 255) none 0px |
| `input` | maxWidth | 100% |
| `input` | width | 100% |
| `input` | minHeight | 0px |
| `input[type=text]` | color | rgb(255, 255, 255) |
| `input[type=text]` | backgroundColor | rgb(0, 42, 80) |
| `input[type=text]` | fontFamily | Montserrat, sans-serif |
| `input[type=text]` | fontSize | 14px |
| `input[type=text]` | fontWeight | 400 |
| `input[type=text]` | lineHeight | 22.4px |
| `input[type=text]` | padding | 10px 30px 10px 31px |
| `input[type=text]` | margin | 0px |
| `input[type=text]` | border | 1px solid rgba(0, 0, 0, 0) |
| `input[type=text]` | borderRadius | 3px |
| `input[type=text]` | textTransform | none |
| `input[type=text]` | letterSpacing | normal |
| `input[type=text]` | boxShadow | none |
| `input[type=text]` | outline | rgb(255, 255, 255) none 0px |
| `input[type=text]` | maxWidth | 100% |
| `input[type=text]` | width | 100% |
| `input[type=text]` | minHeight | 0px |
| `button` | color | rgba(0, 0, 0, 0) |
| `button` | backgroundColor | rgba(0, 0, 0, 0) |
| `button` | fontFamily | Montserrat, sans-serif |
| `button` | fontSize | 16.875px |
| `button` | fontWeight | 400 |
| `button` | lineHeight | 29.5312px |
| `button` | padding | 1px 6px |
| `button` | margin | 0px |
| `button` | border | 0px none rgba(0, 0, 0, 0) |
| `button` | borderRadius | 0px |
| `button` | textTransform | none |
| `button` | letterSpacing | normal |
| `button` | boxShadow | none |
| `button` | outline | rgba(0, 0, 0, 0) none 0px |
| `button` | maxWidth | none |
| `button` | width | 24px |
| `button` | minHeight | 0px |
| `#fsHeader` | color | rgb(55, 55, 55) |
| `#fsHeader` | backgroundColor | rgba(0, 0, 0, 0) |
| `#fsHeader` | fontFamily | Montserrat, sans-serif |
| `#fsHeader` | fontSize | 16.875px |
| `#fsHeader` | fontWeight | 400 |
| `#fsHeader` | lineHeight | 29.5312px |
| `#fsHeader` | padding | 0px 0px 80px |
| `#fsHeader` | margin | 0px |
| `#fsHeader` | border | 0px none rgb(55, 55, 55) |
| `#fsHeader` | borderRadius | 0px |
| `#fsHeader` | textTransform | none |
| `#fsHeader` | letterSpacing | 0.16875px |
| `#fsHeader` | boxShadow | none |
| `#fsHeader` | outline | rgb(55, 55, 55) none 0px |
| `#fsHeader` | maxWidth | none |
| `#fsHeader` | width | 1280px |
| `#fsHeader` | minHeight | 0px |
| `.fsTabsNav` | color | rgb(55, 55, 55) |
| `.fsTabsNav` | backgroundColor | rgba(0, 0, 0, 0) |
| `.fsTabsNav` | fontFamily | Montserrat, sans-serif |
| `.fsTabsNav` | fontSize | 15px |
| `.fsTabsNav` | fontWeight | 400 |
| `.fsTabsNav` | lineHeight | 24.375px |
| `.fsTabsNav` | padding | 0px |
| `.fsTabsNav` | margin | 0px |
| `.fsTabsNav` | border | 0px none rgb(55, 55, 55) |
| `.fsTabsNav` | borderRadius | 0px |
| `.fsTabsNav` | textTransform | none |
| `.fsTabsNav` | letterSpacing | 0.16875px |
| `.fsTabsNav` | boxShadow | none |
| `.fsTabsNav` | outline | rgb(55, 55, 55) none 0px |
| `.fsTabsNav` | maxWidth | none |
| `.fsTabsNav` | width | 1080px |
| `.fsTabsNav` | minHeight | 0px |

## Students

- **URL:** https://www.lisd.net/production2/constituent/students
- **Extracted:** 2026-06-23

### Content

### Students

#### Search

### :root CSS Variables

| Variable | Value |
|----------|-------|
| `--display-accred-panel` | none |
| `--footer-logo-bg` | false |
| `--footer-logo-enabled` | true |
| `--footer-logo-height-class` | height-medium |
| `--has-sticky-header` | false |
| `--header-logo-bg` | false |
| `--header-logo-enabled` | true |
| `--header-logo-height-class` | height-medium |
| `--is-district-site` | false |
| `--primary-color` | #073772 |
| `--primary-color-h` | 213.08 |
| `--primary-color-hsl` | var(--primary-color-h), var(--primary-color-s), var(--primary-color-l) |
| `--primary-color-l` | 23.73% |
| `--primary-color-s` | 88.43% |
| `--secondary-color` | #f1b51c |
| `--secondary-color-h` | 43.1 |
| `--secondary-color-hsl` | var(--secondary-color-h), var(--secondary-color-s), var(--secondary-color-l) |
| `--secondary-color-l` | 52.75% |
| `--secondary-color-s` | 88.38% |
| `--show-footer-title` | false |
| `--show-header-location-name` | false |
| `--show-header-location-title` | false |
| `--show-header-motto` | false |
| `--show-header-subtitle` | false |
| `--weglot-display-position` | default |

### Computed Styles

| Selector | Property | Value |
|----------|----------|-------|
| `body` | color | rgb(55, 55, 55) |
| `body` | backgroundColor | rgba(0, 0, 0, 0) |
| `body` | fontFamily | Montserrat, sans-serif |
| `body` | fontSize | 16.875px |
| `body` | fontWeight | 400 |
| `body` | lineHeight | 29.5312px |
| `body` | padding | 0px |
| `body` | margin | 0px |
| `body` | border | 0px none rgb(55, 55, 55) |
| `body` | borderRadius | 0px |
| `body` | textTransform | none |
| `body` | letterSpacing | 0.16875px |
| `body` | boxShadow | none |
| `body` | outline | rgb(55, 55, 55) none 0px |
| `body` | maxWidth | none |
| `body` | width | 1280px |
| `body` | minHeight | 0px |
| `h1` | color | rgb(7, 55, 114) |
| `h1` | backgroundColor | rgba(0, 0, 0, 0) |
| `h1` | fontFamily | Merriweather, serif |
| `h1` | fontSize | 41.25px |
| `h1` | fontWeight | 700 |
| `h1` | lineHeight | 47.4375px |
| `h1` | padding | 0px |
| `h1` | margin | 0px 0px 20px |
| `h1` | border | 0px none rgb(7, 55, 114) |
| `h1` | borderRadius | 0px |
| `h1` | textTransform | none |
| `h1` | letterSpacing | -0.825px |
| `h1` | boxShadow | none |
| `h1` | outline | rgb(7, 55, 114) none 0px |
| `h1` | maxWidth | none |
| `h1` | width | 1180px |
| `h1` | minHeight | 0px |
| `h2` | color | rgb(7, 55, 114) |
| `h2` | backgroundColor | rgba(0, 0, 0, 0) |
| `h2` | fontFamily | Merriweather, serif |
| `h2` | fontSize | 30px |
| `h2` | fontWeight | 700 |
| `h2` | lineHeight | 36px |
| `h2` | padding | 0px |
| `h2` | margin | 0px 0px 15px |
| `h2` | border | 0px none rgb(7, 55, 114) |
| `h2` | borderRadius | 0px |
| `h2` | textTransform | none |
| `h2` | letterSpacing | -0.3px |
| `h2` | boxShadow | none |
| `h2` | outline | rgb(7, 55, 114) none 0px |
| `h2` | maxWidth | none |
| `h2` | width | auto |
| `h2` | minHeight | 0px |
| `label` | color | rgb(55, 55, 55) |
| `label` | backgroundColor | rgba(0, 0, 0, 0) |
| `label` | fontFamily | Montserrat, sans-serif |
| `label` | fontSize | 16.875px |
| `label` | fontWeight | 400 |
| `label` | lineHeight | 29.5312px |
| `label` | padding | 0px |
| `label` | margin | 0px 8px 0px 0px |
| `label` | border | 0px none rgb(55, 55, 55) |
| `label` | borderRadius | 0px |
| `label` | textTransform | none |
| `label` | letterSpacing | 0.16875px |
| `label` | boxShadow | none |
| `label` | outline | rgb(55, 55, 55) none 0px |
| `label` | maxWidth | none |
| `label` | width | auto |
| `label` | minHeight | 0px |
| `input` | color | rgb(255, 255, 255) |
| `input` | backgroundColor | rgb(0, 42, 80) |
| `input` | fontFamily | Montserrat, sans-serif |
| `input` | fontSize | 14px |
| `input` | fontWeight | 400 |
| `input` | lineHeight | 22.4px |
| `input` | padding | 10px 30px 10px 31px |
| `input` | margin | 0px |
| `input` | border | 1px solid rgba(0, 0, 0, 0) |
| `input` | borderRadius | 3px |
| `input` | textTransform | none |
| `input` | letterSpacing | normal |
| `input` | boxShadow | none |
| `input` | outline | rgb(255, 255, 255) none 0px |
| `input` | maxWidth | 100% |
| `input` | width | 100% |
| `input` | minHeight | 0px |
| `input[type=text]` | color | rgb(255, 255, 255) |
| `input[type=text]` | backgroundColor | rgb(0, 42, 80) |
| `input[type=text]` | fontFamily | Montserrat, sans-serif |
| `input[type=text]` | fontSize | 14px |
| `input[type=text]` | fontWeight | 400 |
| `input[type=text]` | lineHeight | 22.4px |
| `input[type=text]` | padding | 10px 30px 10px 31px |
| `input[type=text]` | margin | 0px |
| `input[type=text]` | border | 1px solid rgba(0, 0, 0, 0) |
| `input[type=text]` | borderRadius | 3px |
| `input[type=text]` | textTransform | none |
| `input[type=text]` | letterSpacing | normal |
| `input[type=text]` | boxShadow | none |
| `input[type=text]` | outline | rgb(255, 255, 255) none 0px |
| `input[type=text]` | maxWidth | 100% |
| `input[type=text]` | width | 100% |
| `input[type=text]` | minHeight | 0px |
| `button` | color | rgba(0, 0, 0, 0) |
| `button` | backgroundColor | rgba(0, 0, 0, 0) |
| `button` | fontFamily | Montserrat, sans-serif |
| `button` | fontSize | 16.875px |
| `button` | fontWeight | 400 |
| `button` | lineHeight | 29.5312px |
| `button` | padding | 1px 6px |
| `button` | margin | 0px |
| `button` | border | 0px none rgba(0, 0, 0, 0) |
| `button` | borderRadius | 0px |
| `button` | textTransform | none |
| `button` | letterSpacing | normal |
| `button` | boxShadow | none |
| `button` | outline | rgba(0, 0, 0, 0) none 0px |
| `button` | maxWidth | none |
| `button` | width | 24px |
| `button` | minHeight | 0px |
| `#fsHeader` | color | rgb(55, 55, 55) |
| `#fsHeader` | backgroundColor | rgba(0, 0, 0, 0) |
| `#fsHeader` | fontFamily | Montserrat, sans-serif |
| `#fsHeader` | fontSize | 16.875px |
| `#fsHeader` | fontWeight | 400 |
| `#fsHeader` | lineHeight | 29.5312px |
| `#fsHeader` | padding | 0px 0px 80px |
| `#fsHeader` | margin | 0px |
| `#fsHeader` | border | 0px none rgb(55, 55, 55) |
| `#fsHeader` | borderRadius | 0px |
| `#fsHeader` | textTransform | none |
| `#fsHeader` | letterSpacing | 0.16875px |
| `#fsHeader` | boxShadow | none |
| `#fsHeader` | outline | rgb(55, 55, 55) none 0px |
| `#fsHeader` | maxWidth | none |
| `#fsHeader` | width | 1280px |
| `#fsHeader` | minHeight | 0px |
| `.fsTabsNav` | color | rgb(55, 55, 55) |
| `.fsTabsNav` | backgroundColor | rgba(0, 0, 0, 0) |
| `.fsTabsNav` | fontFamily | Montserrat, sans-serif |
| `.fsTabsNav` | fontSize | 15px |
| `.fsTabsNav` | fontWeight | 400 |
| `.fsTabsNav` | lineHeight | 24.375px |
| `.fsTabsNav` | padding | 0px |
| `.fsTabsNav` | margin | 0px |
| `.fsTabsNav` | border | 0px none rgb(55, 55, 55) |
| `.fsTabsNav` | borderRadius | 0px |
| `.fsTabsNav` | textTransform | none |
| `.fsTabsNav` | letterSpacing | 0.16875px |
| `.fsTabsNav` | boxShadow | none |
| `.fsTabsNav` | outline | rgb(55, 55, 55) none 0px |
| `.fsTabsNav` | maxWidth | none |
| `.fsTabsNav` | width | 1080px |
| `.fsTabsNav` | minHeight | 0px |
# Part 6: Posts & Social Elements

> Extracted from live LISD style guide (production2) on 2026-06-23.
> **Pages extracted:** 9 of 9

---

## Posts

- **URL:** https://www.lisd.net/production2/posts
- **Extracted:** 2026-06-23

### Content

### Posts _(fsPageTitle)_

- Post List

- Post Grid

- Post Slideshow

- Single

### Widget Elements

- **`fsEl_2381`** — `fsElement fsNavigation fsList`
  - data-use-new: `true`

### :root CSS Variables

| Variable | Value |
|----------|-------|
| `--primary-color-h` | 213.08 |
| `--primary-color-s` | 88.43% |
| `--primary-color-l` | 23.73% |
| `--primary-color-hsl` | var(--primary-color-h), var(--primary-color-s), var(--primary-color-l) |
| `--primary-color` | #073772 |
| `--secondary-color-h` | 43.1 |
| `--secondary-color-s` | 88.38% |
| `--secondary-color-l` | 52.75% |
| `--secondary-color-hsl` | var(--secondary-color-h), var(--secondary-color-s), var(--secondary-color-l) |
| `--secondary-color` | #f1b51c |
| `--display-accred-panel` | none |
| `--has-sticky-header` | false |
| `--is-district-site` | false |
| `--header-logo-enabled` | true |
| `--footer-logo-enabled` | true |
| `--header-logo-bg` | false |
| `--footer-logo-bg` | false |
| `--header-logo-height-class` | height-medium |
| `--footer-logo-height-class` | height-medium |
| `--show-header-location-name` | false |
| `--show-header-location-title` | false |
| `--show-header-subtitle` | false |
| `--show-header-motto` | false |
| `--show-footer-title` | false |
| `--weglot-display-position` | default |

### Computed Styles

| Selector | Property | Value |
|----------|----------|-------|
| `body` | color | rgb(55, 55, 55) |
| `body` | backgroundColor | rgba(0, 0, 0, 0) |
| `body` | fontFamily | Montserrat, sans-serif |
| `body` | fontSize | 16.875px |
| `body` | fontWeight | 400 |
| `body` | lineHeight | 29.5312px |
| `body` | padding | 0px |
| `body` | margin | 0px |
| `body` | border | 0px none rgb(55, 55, 55) |
| `body` | borderRadius | 0px |
| `body` | textTransform | none |
| `body` | letterSpacing | 0.16875px |
| `body` | boxShadow | none |
| `body` | outline | rgb(55, 55, 55) none 3px |
| `body` | maxWidth | none |
| `body` | width | 1280px |
| `body` | minHeight | 0px |
| `h1` | color | rgb(7, 55, 114) |
| `h1` | backgroundColor | rgba(0, 0, 0, 0) |
| `h1` | fontFamily | Merriweather, serif |
| `h1` | fontSize | 41.25px |
| `h1` | fontWeight | 700 |
| `h1` | lineHeight | 47.4375px |
| `h1` | padding | 0px |
| `h1` | margin | 0px 0px 20px |
| `h1` | border | 0px none rgb(7, 55, 114) |
| `h1` | borderRadius | 0px |
| `h1` | textTransform | none |
| `h1` | letterSpacing | -0.825px |
| `h1` | boxShadow | none |
| `h1` | outline | rgb(7, 55, 114) none 3px |
| `h1` | maxWidth | none |
| `h1` | width | 1180px |
| `h1` | minHeight | 0px |
| `h2` | color | rgb(7, 55, 114) |
| `h2` | backgroundColor | rgba(0, 0, 0, 0) |
| `h2` | fontFamily | Merriweather, serif |
| `h2` | fontSize | 30px |
| `h2` | fontWeight | 700 |
| `h2` | lineHeight | 36px |
| `h2` | padding | 0px |
| `h2` | margin | 0px 0px 15px |
| `h2` | border | 0px none rgb(7, 55, 114) |
| `h2` | borderRadius | 0px |
| `h2` | textTransform | none |
| `h2` | letterSpacing | -0.3px |
| `h2` | boxShadow | none |
| `h2` | outline | rgb(7, 55, 114) none 3px |
| `h2` | maxWidth | none |
| `h2` | width | auto |
| `h2` | minHeight | 0px |
| `#fsPageContent a` | color | rgb(7, 55, 114) |
| `#fsPageContent a` | backgroundColor | rgba(0, 0, 0, 0) |
| `#fsPageContent a` | fontFamily | Montserrat, sans-serif |
| `#fsPageContent a` | fontSize | 16.875px |
| `#fsPageContent a` | fontWeight | 500 |
| `#fsPageContent a` | lineHeight | 29.5312px |
| `#fsPageContent a` | padding | 10px 0px |
| `#fsPageContent a` | margin | 0px |
| `#fsPageContent a` | border | 0px none rgb(7, 55, 114) |
| `#fsPageContent a` | borderRadius | 0px |
| `#fsPageContent a` | textTransform | none |
| `#fsPageContent a` | letterSpacing | 0.16875px |
| `#fsPageContent a` | boxShadow | none |
| `#fsPageContent a` | outline | rgb(7, 55, 114) none 3px |
| `#fsPageContent a` | maxWidth | none |
| `#fsPageContent a` | width | 1180px |
| `#fsPageContent a` | minHeight | 0px |
| `label` | color | rgb(55, 55, 55) |
| `label` | backgroundColor | rgba(0, 0, 0, 0) |
| `label` | fontFamily | Montserrat, sans-serif |
| `label` | fontSize | 16.875px |
| `label` | fontWeight | 400 |
| `label` | lineHeight | 29.5312px |
| `label` | padding | 0px |
| `label` | margin | 0px 8px 0px 0px |
| `label` | border | 0px none rgb(55, 55, 55) |
| `label` | borderRadius | 0px |
| `label` | textTransform | none |
| `label` | letterSpacing | 0.16875px |
| `label` | boxShadow | none |
| `label` | outline | rgb(55, 55, 55) none 3px |
| `label` | maxWidth | none |
| `label` | width | auto |
| `label` | minHeight | 0px |
| `input` | color | rgb(255, 255, 255) |
| `input` | backgroundColor | rgb(0, 42, 80) |
| `input` | fontFamily | Montserrat, sans-serif |
| `input` | fontSize | 14px |
| `input` | fontWeight | 400 |
| `input` | lineHeight | 22.4px |
| `input` | padding | 10px 30px 10px 31px |
| `input` | margin | 0px |
| `input` | border | 1px solid rgba(0, 0, 0, 0) |
| `input` | borderRadius | 3px |
| `input` | textTransform | none |
| `input` | letterSpacing | normal |
| `input` | boxShadow | none |
| `input` | outline | rgb(255, 255, 255) none 3px |
| `input` | maxWidth | 100% |
| `input` | width | 100% |
| `input` | minHeight | 0px |
| `input[type=text]` | color | rgb(255, 255, 255) |
| `input[type=text]` | backgroundColor | rgb(0, 42, 80) |
| `input[type=text]` | fontFamily | Montserrat, sans-serif |
| `input[type=text]` | fontSize | 14px |
| `input[type=text]` | fontWeight | 400 |
| `input[type=text]` | lineHeight | 22.4px |
| `input[type=text]` | padding | 10px 30px 10px 31px |
| `input[type=text]` | margin | 0px |
| `input[type=text]` | border | 1px solid rgba(0, 0, 0, 0) |
| `input[type=text]` | borderRadius | 3px |
| `input[type=text]` | textTransform | none |
| `input[type=text]` | letterSpacing | normal |
| `input[type=text]` | boxShadow | none |
| `input[type=text]` | outline | rgb(255, 255, 255) none 3px |
| `input[type=text]` | maxWidth | 100% |
| `input[type=text]` | width | 100% |
| `input[type=text]` | minHeight | 0px |
| `button` | color | rgba(0, 0, 0, 0) |
| `button` | backgroundColor | rgba(0, 0, 0, 0) |
| `button` | fontFamily | Montserrat, sans-serif |
| `button` | fontSize | 16.875px |
| `button` | fontWeight | 400 |
| `button` | lineHeight | 29.5312px |
| `button` | padding | 1px 6px |
| `button` | margin | 0px |
| `button` | border | 0px none rgba(0, 0, 0, 0) |
| `button` | borderRadius | 0px |
| `button` | textTransform | none |
| `button` | letterSpacing | normal |
| `button` | boxShadow | none |
| `button` | outline | rgba(0, 0, 0, 0) none 3px |
| `button` | maxWidth | none |
| `button` | width | 24px |
| `button` | minHeight | 0px |
| `#fsHeader` | color | rgb(55, 55, 55) |
| `#fsHeader` | backgroundColor | rgba(0, 0, 0, 0) |
| `#fsHeader` | fontFamily | Montserrat, sans-serif |
| `#fsHeader` | fontSize | 16.875px |
| `#fsHeader` | fontWeight | 400 |
| `#fsHeader` | lineHeight | 29.5312px |
| `#fsHeader` | padding | 0px 0px 80px |
| `#fsHeader` | margin | 0px |
| `#fsHeader` | border | 0px none rgb(55, 55, 55) |
| `#fsHeader` | borderRadius | 0px |
| `#fsHeader` | textTransform | none |
| `#fsHeader` | letterSpacing | 0.16875px |
| `#fsHeader` | boxShadow | none |
| `#fsHeader` | outline | rgb(55, 55, 55) none 3px |
| `#fsHeader` | maxWidth | none |
| `#fsHeader` | width | 1280px |
| `#fsHeader` | minHeight | 0px |
| `.fsTabsNav` | color | rgb(55, 55, 55) |
| `.fsTabsNav` | backgroundColor | rgba(0, 0, 0, 0) |
| `.fsTabsNav` | fontFamily | Montserrat, sans-serif |
| `.fsTabsNav` | fontSize | 15px |
| `.fsTabsNav` | fontWeight | 400 |
| `.fsTabsNav` | lineHeight | 24.375px |
| `.fsTabsNav` | padding | 0px |
| `.fsTabsNav` | margin | 0px |
| `.fsTabsNav` | border | 0px none rgb(55, 55, 55) |
| `.fsTabsNav` | borderRadius | 0px |
| `.fsTabsNav` | textTransform | none |
| `.fsTabsNav` | letterSpacing | 0.16875px |
| `.fsTabsNav` | boxShadow | none |
| `.fsTabsNav` | outline | rgb(55, 55, 55) none 3px |
| `.fsTabsNav` | maxWidth | none |
| `.fsTabsNav` | width | 1080px |
| `.fsTabsNav` | minHeight | 0px |

---

## Post List

- **URL:** https://www.lisd.net/production2/posts/list
- **Extracted:** 2026-06-23

### Content

### Post List _(fsPageTitle)_

#### Post List _(fsElementTitle)_

No post to display. _(fsElementEmpty)_

### Widget Elements

- **`fsEl_2384`** — `fsElement fsPostElement fsList fsThumbnailOriginal fsThumbnailMedium fsItemCount_10`
  - data-use-new: `true`
  - data-board-id: `2`
  - data-overwrite-title: ``

### :root CSS Variables

| Variable | Value |
|----------|-------|
| `--primary-color-h` | 213.08 |
| `--primary-color-s` | 88.43% |
| `--primary-color-l` | 23.73% |
| `--primary-color-hsl` | var(--primary-color-h), var(--primary-color-s), var(--primary-color-l) |
| `--primary-color` | #073772 |
| `--secondary-color-h` | 43.1 |
| `--secondary-color-s` | 88.38% |
| `--secondary-color-l` | 52.75% |
| `--secondary-color-hsl` | var(--secondary-color-h), var(--secondary-color-s), var(--secondary-color-l) |
| `--secondary-color` | #f1b51c |
| `--display-accred-panel` | none |
| `--has-sticky-header` | false |
| `--is-district-site` | false |
| `--header-logo-enabled` | true |
| `--footer-logo-enabled` | true |
| `--header-logo-bg` | false |
| `--footer-logo-bg` | false |
| `--header-logo-height-class` | height-medium |
| `--footer-logo-height-class` | height-medium |
| `--show-header-location-name` | false |
| `--show-header-location-title` | false |
| `--show-header-subtitle` | false |
| `--show-header-motto` | false |
| `--show-footer-title` | false |
| `--weglot-display-position` | default |

### Computed Styles

| Selector | Property | Value |
|----------|----------|-------|
| `body` | color | rgb(55, 55, 55) |
| `body` | backgroundColor | rgba(0, 0, 0, 0) |
| `body` | fontFamily | Montserrat, sans-serif |
| `body` | fontSize | 16.875px |
| `body` | fontWeight | 400 |
| `body` | lineHeight | 29.5312px |
| `body` | padding | 0px |
| `body` | margin | 0px |
| `body` | border | 0px none rgb(55, 55, 55) |
| `body` | borderRadius | 0px |
| `body` | textTransform | none |
| `body` | letterSpacing | 0.16875px |
| `body` | boxShadow | none |
| `body` | outline | rgb(55, 55, 55) none 3px |
| `body` | maxWidth | none |
| `body` | width | 1280px |
| `body` | minHeight | 0px |
| `h1` | color | rgb(7, 55, 114) |
| `h1` | backgroundColor | rgba(0, 0, 0, 0) |
| `h1` | fontFamily | Merriweather, serif |
| `h1` | fontSize | 41.25px |
| `h1` | fontWeight | 700 |
| `h1` | lineHeight | 47.4375px |
| `h1` | padding | 0px |
| `h1` | margin | 0px 0px 20px |
| `h1` | border | 0px none rgb(7, 55, 114) |
| `h1` | borderRadius | 0px |
| `h1` | textTransform | none |
| `h1` | letterSpacing | -0.825px |
| `h1` | boxShadow | none |
| `h1` | outline | rgb(7, 55, 114) none 3px |
| `h1` | maxWidth | none |
| `h1` | width | 1180px |
| `h1` | minHeight | 0px |
| `h2` | color | rgb(7, 55, 114) |
| `h2` | backgroundColor | rgba(0, 0, 0, 0) |
| `h2` | fontFamily | Merriweather, serif |
| `h2` | fontSize | 30px |
| `h2` | fontWeight | 700 |
| `h2` | lineHeight | 36px |
| `h2` | padding | 0px |
| `h2` | margin | 0px 0px 15px |
| `h2` | border | 0px none rgb(7, 55, 114) |
| `h2` | borderRadius | 0px |
| `h2` | textTransform | none |
| `h2` | letterSpacing | -0.3px |
| `h2` | boxShadow | none |
| `h2` | outline | rgb(7, 55, 114) none 3px |
| `h2` | maxWidth | none |
| `h2` | width | auto |
| `h2` | minHeight | 0px |
| `label` | color | rgb(55, 55, 55) |
| `label` | backgroundColor | rgba(0, 0, 0, 0) |
| `label` | fontFamily | Montserrat, sans-serif |
| `label` | fontSize | 16.875px |
| `label` | fontWeight | 400 |
| `label` | lineHeight | 29.5312px |
| `label` | padding | 0px |
| `label` | margin | 0px 8px 0px 0px |
| `label` | border | 0px none rgb(55, 55, 55) |
| `label` | borderRadius | 0px |
| `label` | textTransform | none |
| `label` | letterSpacing | 0.16875px |
| `label` | boxShadow | none |
| `label` | outline | rgb(55, 55, 55) none 3px |
| `label` | maxWidth | none |
| `label` | width | auto |
| `label` | minHeight | 0px |
| `input` | color | rgb(255, 255, 255) |
| `input` | backgroundColor | rgb(0, 42, 80) |
| `input` | fontFamily | Montserrat, sans-serif |
| `input` | fontSize | 14px |
| `input` | fontWeight | 400 |
| `input` | lineHeight | 22.4px |
| `input` | padding | 10px 30px 10px 31px |
| `input` | margin | 0px |
| `input` | border | 1px solid rgba(0, 0, 0, 0) |
| `input` | borderRadius | 3px |
| `input` | textTransform | none |
| `input` | letterSpacing | normal |
| `input` | boxShadow | none |
| `input` | outline | rgb(255, 255, 255) none 3px |
| `input` | maxWidth | 100% |
| `input` | width | 100% |
| `input` | minHeight | 0px |
| `input[type=text]` | color | rgb(255, 255, 255) |
| `input[type=text]` | backgroundColor | rgb(0, 42, 80) |
| `input[type=text]` | fontFamily | Montserrat, sans-serif |
| `input[type=text]` | fontSize | 14px |
| `input[type=text]` | fontWeight | 400 |
| `input[type=text]` | lineHeight | 22.4px |
| `input[type=text]` | padding | 10px 30px 10px 31px |
| `input[type=text]` | margin | 0px |
| `input[type=text]` | border | 1px solid rgba(0, 0, 0, 0) |
| `input[type=text]` | borderRadius | 3px |
| `input[type=text]` | textTransform | none |
| `input[type=text]` | letterSpacing | normal |
| `input[type=text]` | boxShadow | none |
| `input[type=text]` | outline | rgb(255, 255, 255) none 3px |
| `input[type=text]` | maxWidth | 100% |
| `input[type=text]` | width | 100% |
| `input[type=text]` | minHeight | 0px |
| `button` | color | rgba(0, 0, 0, 0) |
| `button` | backgroundColor | rgba(0, 0, 0, 0) |
| `button` | fontFamily | Montserrat, sans-serif |
| `button` | fontSize | 16.875px |
| `button` | fontWeight | 400 |
| `button` | lineHeight | 29.5312px |
| `button` | padding | 1px 6px |
| `button` | margin | 0px |
| `button` | border | 0px none rgba(0, 0, 0, 0) |
| `button` | borderRadius | 0px |
| `button` | textTransform | none |
| `button` | letterSpacing | normal |
| `button` | boxShadow | none |
| `button` | outline | rgba(0, 0, 0, 0) none 3px |
| `button` | maxWidth | none |
| `button` | width | 24px |
| `button` | minHeight | 0px |
| `#fsHeader` | color | rgb(55, 55, 55) |
| `#fsHeader` | backgroundColor | rgba(0, 0, 0, 0) |
| `#fsHeader` | fontFamily | Montserrat, sans-serif |
| `#fsHeader` | fontSize | 16.875px |
| `#fsHeader` | fontWeight | 400 |
| `#fsHeader` | lineHeight | 29.5312px |
| `#fsHeader` | padding | 0px 0px 80px |
| `#fsHeader` | margin | 0px |
| `#fsHeader` | border | 0px none rgb(55, 55, 55) |
| `#fsHeader` | borderRadius | 0px |
| `#fsHeader` | textTransform | none |
| `#fsHeader` | letterSpacing | 0.16875px |
| `#fsHeader` | boxShadow | none |
| `#fsHeader` | outline | rgb(55, 55, 55) none 3px |
| `#fsHeader` | maxWidth | none |
| `#fsHeader` | width | 1280px |
| `#fsHeader` | minHeight | 0px |
| `.fsTabsNav` | color | rgb(55, 55, 55) |
| `.fsTabsNav` | backgroundColor | rgba(0, 0, 0, 0) |
| `.fsTabsNav` | fontFamily | Montserrat, sans-serif |
| `.fsTabsNav` | fontSize | 15px |
| `.fsTabsNav` | fontWeight | 400 |
| `.fsTabsNav` | lineHeight | 24.375px |
| `.fsTabsNav` | padding | 0px |
| `.fsTabsNav` | margin | 0px |
| `.fsTabsNav` | border | 0px none rgb(55, 55, 55) |
| `.fsTabsNav` | borderRadius | 0px |
| `.fsTabsNav` | textTransform | none |
| `.fsTabsNav` | letterSpacing | 0.16875px |
| `.fsTabsNav` | boxShadow | none |
| `.fsTabsNav` | outline | rgb(55, 55, 55) none 3px |
| `.fsTabsNav` | maxWidth | none |
| `.fsTabsNav` | width | 1080px |
| `.fsTabsNav` | minHeight | 0px |
| `.fsPostElement` | color | rgb(55, 55, 55) |
| `.fsPostElement` | backgroundColor | rgba(0, 0, 0, 0) |
| `.fsPostElement` | fontFamily | Montserrat, sans-serif |
| `.fsPostElement` | fontSize | 16.875px |
| `.fsPostElement` | fontWeight | 400 |
| `.fsPostElement` | lineHeight | 29.5312px |
| `.fsPostElement` | padding | 0px |
| `.fsPostElement` | margin | 0px |
| `.fsPostElement` | border | 0px none rgb(55, 55, 55) |
| `.fsPostElement` | borderRadius | 0px |
| `.fsPostElement` | textTransform | none |
| `.fsPostElement` | letterSpacing | 0.16875px |
| `.fsPostElement` | boxShadow | none |
| `.fsPostElement` | outline | rgb(55, 55, 55) none 3px |
| `.fsPostElement` | maxWidth | none |
| `.fsPostElement` | width | 1180px |
| `.fsPostElement` | minHeight | 0px |

---

## Post Grid

- **URL:** https://www.lisd.net/production2/posts/grid
- **Extracted:** 2026-06-23

### Content

### Post Grid _(fsPageTitle)_

#### Post Grid _(fsElementTitle)_

No post to display. _(fsElementEmpty)_

### Widget Elements

- **`fsEl_2387`** — `fsElement fsPostElement fsGrid fsThumbnailRectangle fsThumbnailFull fsItemCount_6`
  - data-use-new: `true`
  - data-board-id: `2`
  - data-overwrite-title: ``

### :root CSS Variables

| Variable | Value |
|----------|-------|
| `--primary-color-h` | 213.08 |
| `--primary-color-s` | 88.43% |
| `--primary-color-l` | 23.73% |
| `--primary-color-hsl` | var(--primary-color-h), var(--primary-color-s), var(--primary-color-l) |
| `--primary-color` | #073772 |
| `--secondary-color-h` | 43.1 |
| `--secondary-color-s` | 88.38% |
| `--secondary-color-l` | 52.75% |
| `--secondary-color-hsl` | var(--secondary-color-h), var(--secondary-color-s), var(--secondary-color-l) |
| `--secondary-color` | #f1b51c |
| `--display-accred-panel` | none |
| `--has-sticky-header` | false |
| `--is-district-site` | false |
| `--header-logo-enabled` | true |
| `--footer-logo-enabled` | true |
| `--header-logo-bg` | false |
| `--footer-logo-bg` | false |
| `--header-logo-height-class` | height-medium |
| `--footer-logo-height-class` | height-medium |
| `--show-header-location-name` | false |
| `--show-header-location-title` | false |
| `--show-header-subtitle` | false |
| `--show-header-motto` | false |
| `--show-footer-title` | false |
| `--weglot-display-position` | default |

### Computed Styles

| Selector | Property | Value |
|----------|----------|-------|
| `body` | color | rgb(55, 55, 55) |
| `body` | backgroundColor | rgba(0, 0, 0, 0) |
| `body` | fontFamily | Montserrat, sans-serif |
| `body` | fontSize | 16.875px |
| `body` | fontWeight | 400 |
| `body` | lineHeight | 29.5312px |
| `body` | padding | 0px |
| `body` | margin | 0px |
| `body` | border | 0px none rgb(55, 55, 55) |
| `body` | borderRadius | 0px |
| `body` | textTransform | none |
| `body` | letterSpacing | 0.16875px |
| `body` | boxShadow | none |
| `body` | outline | rgb(55, 55, 55) none 3px |
| `body` | maxWidth | none |
| `body` | width | 1280px |
| `body` | minHeight | 0px |
| `h1` | color | rgb(7, 55, 114) |
| `h1` | backgroundColor | rgba(0, 0, 0, 0) |
| `h1` | fontFamily | Merriweather, serif |
| `h1` | fontSize | 41.25px |
| `h1` | fontWeight | 700 |
| `h1` | lineHeight | 47.4375px |
| `h1` | padding | 0px |
| `h1` | margin | 0px 0px 20px |
| `h1` | border | 0px none rgb(7, 55, 114) |
| `h1` | borderRadius | 0px |
| `h1` | textTransform | none |
| `h1` | letterSpacing | -0.825px |
| `h1` | boxShadow | none |
| `h1` | outline | rgb(7, 55, 114) none 3px |
| `h1` | maxWidth | none |
| `h1` | width | 1180px |
| `h1` | minHeight | 0px |
| `h2` | color | rgb(7, 55, 114) |
| `h2` | backgroundColor | rgba(0, 0, 0, 0) |
| `h2` | fontFamily | Merriweather, serif |
| `h2` | fontSize | 30px |
| `h2` | fontWeight | 700 |
| `h2` | lineHeight | 36px |
| `h2` | padding | 0px |
| `h2` | margin | 0px 0px 15px |
| `h2` | border | 0px none rgb(7, 55, 114) |
| `h2` | borderRadius | 0px |
| `h2` | textTransform | none |
| `h2` | letterSpacing | -0.3px |
| `h2` | boxShadow | none |
| `h2` | outline | rgb(7, 55, 114) none 3px |
| `h2` | maxWidth | none |
| `h2` | width | auto |
| `h2` | minHeight | 0px |
| `label` | color | rgb(55, 55, 55) |
| `label` | backgroundColor | rgba(0, 0, 0, 0) |
| `label` | fontFamily | Montserrat, sans-serif |
| `label` | fontSize | 16.875px |
| `label` | fontWeight | 400 |
| `label` | lineHeight | 29.5312px |
| `label` | padding | 0px |
| `label` | margin | 0px 8px 0px 0px |
| `label` | border | 0px none rgb(55, 55, 55) |
| `label` | borderRadius | 0px |
| `label` | textTransform | none |
| `label` | letterSpacing | 0.16875px |
| `label` | boxShadow | none |
| `label` | outline | rgb(55, 55, 55) none 3px |
| `label` | maxWidth | none |
| `label` | width | auto |
| `label` | minHeight | 0px |
| `input` | color | rgb(255, 255, 255) |
| `input` | backgroundColor | rgb(0, 42, 80) |
| `input` | fontFamily | Montserrat, sans-serif |
| `input` | fontSize | 14px |
| `input` | fontWeight | 400 |
| `input` | lineHeight | 22.4px |
| `input` | padding | 10px 30px 10px 31px |
| `input` | margin | 0px |
| `input` | border | 1px solid rgba(0, 0, 0, 0) |
| `input` | borderRadius | 3px |
| `input` | textTransform | none |
| `input` | letterSpacing | normal |
| `input` | boxShadow | none |
| `input` | outline | rgb(255, 255, 255) none 3px |
| `input` | maxWidth | 100% |
| `input` | width | 100% |
| `input` | minHeight | 0px |
| `input[type=text]` | color | rgb(255, 255, 255) |
| `input[type=text]` | backgroundColor | rgb(0, 42, 80) |
| `input[type=text]` | fontFamily | Montserrat, sans-serif |
| `input[type=text]` | fontSize | 14px |
| `input[type=text]` | fontWeight | 400 |
| `input[type=text]` | lineHeight | 22.4px |
| `input[type=text]` | padding | 10px 30px 10px 31px |
| `input[type=text]` | margin | 0px |
| `input[type=text]` | border | 1px solid rgba(0, 0, 0, 0) |
| `input[type=text]` | borderRadius | 3px |
| `input[type=text]` | textTransform | none |
| `input[type=text]` | letterSpacing | normal |
| `input[type=text]` | boxShadow | none |
| `input[type=text]` | outline | rgb(255, 255, 255) none 3px |
| `input[type=text]` | maxWidth | 100% |
| `input[type=text]` | width | 100% |
| `input[type=text]` | minHeight | 0px |
| `button` | color | rgba(0, 0, 0, 0) |
| `button` | backgroundColor | rgba(0, 0, 0, 0) |
| `button` | fontFamily | Montserrat, sans-serif |
| `button` | fontSize | 16.875px |
| `button` | fontWeight | 400 |
| `button` | lineHeight | 29.5312px |
| `button` | padding | 1px 6px |
| `button` | margin | 0px |
| `button` | border | 0px none rgba(0, 0, 0, 0) |
| `button` | borderRadius | 0px |
| `button` | textTransform | none |
| `button` | letterSpacing | normal |
| `button` | boxShadow | none |
| `button` | outline | rgba(0, 0, 0, 0) none 3px |
| `button` | maxWidth | none |
| `button` | width | 24px |
| `button` | minHeight | 0px |
| `#fsHeader` | color | rgb(55, 55, 55) |
| `#fsHeader` | backgroundColor | rgba(0, 0, 0, 0) |
| `#fsHeader` | fontFamily | Montserrat, sans-serif |
| `#fsHeader` | fontSize | 16.875px |
| `#fsHeader` | fontWeight | 400 |
| `#fsHeader` | lineHeight | 29.5312px |
| `#fsHeader` | padding | 0px 0px 80px |
| `#fsHeader` | margin | 0px |
| `#fsHeader` | border | 0px none rgb(55, 55, 55) |
| `#fsHeader` | borderRadius | 0px |
| `#fsHeader` | textTransform | none |
| `#fsHeader` | letterSpacing | 0.16875px |
| `#fsHeader` | boxShadow | none |
| `#fsHeader` | outline | rgb(55, 55, 55) none 3px |
| `#fsHeader` | maxWidth | none |
| `#fsHeader` | width | 1280px |
| `#fsHeader` | minHeight | 0px |
| `.fsTabsNav` | color | rgb(55, 55, 55) |
| `.fsTabsNav` | backgroundColor | rgba(0, 0, 0, 0) |
| `.fsTabsNav` | fontFamily | Montserrat, sans-serif |
| `.fsTabsNav` | fontSize | 15px |
| `.fsTabsNav` | fontWeight | 400 |
| `.fsTabsNav` | lineHeight | 24.375px |
| `.fsTabsNav` | padding | 0px |
| `.fsTabsNav` | margin | 0px |
| `.fsTabsNav` | border | 0px none rgb(55, 55, 55) |
| `.fsTabsNav` | borderRadius | 0px |
| `.fsTabsNav` | textTransform | none |
| `.fsTabsNav` | letterSpacing | 0.16875px |
| `.fsTabsNav` | boxShadow | none |
| `.fsTabsNav` | outline | rgb(55, 55, 55) none 3px |
| `.fsTabsNav` | maxWidth | none |
| `.fsTabsNav` | width | 1080px |
| `.fsTabsNav` | minHeight | 0px |
| `.fsPostElement` | color | rgb(55, 55, 55) |
| `.fsPostElement` | backgroundColor | rgba(0, 0, 0, 0) |
| `.fsPostElement` | fontFamily | Montserrat, sans-serif |
| `.fsPostElement` | fontSize | 16.875px |
| `.fsPostElement` | fontWeight | 400 |
| `.fsPostElement` | lineHeight | 29.5312px |
| `.fsPostElement` | padding | 0px |
| `.fsPostElement` | margin | 0px |
| `.fsPostElement` | border | 0px none rgb(55, 55, 55) |
| `.fsPostElement` | borderRadius | 0px |
| `.fsPostElement` | textTransform | none |
| `.fsPostElement` | letterSpacing | 0.16875px |
| `.fsPostElement` | boxShadow | none |
| `.fsPostElement` | outline | rgb(55, 55, 55) none 3px |
| `.fsPostElement` | maxWidth | none |
| `.fsPostElement` | width | 1180px |
| `.fsPostElement` | minHeight | 0px |

---

## Post Slideshow

- **URL:** https://www.lisd.net/production2/posts/slideshow
- **Extracted:** 2026-06-23

### Content

### Post Slideshow _(fsPageTitle)_

#### Post (Horizontal) _(fsElementTitle)_

No post to display. _(fsElementEmpty)_

#### Post (Vertical) _(fsElementTitle)_

No post to display. _(fsElementEmpty)_

### Widget Elements

- **`fsEl_2390`** — `fsElement fsPostElement fsSlideshow fsThumbnailRectangle fsThumbnailFull fsItemCount_10 fsSlideshowHorizontal`
  - data-use-new: `true`
  - data-board-id: `2`
  - data-overwrite-title: ``
- **`fsEl_2391`** — `fsElement fsPostElement fsSlideshow fsThumbnailRectangle fsThumbnailFull fsItemCount_10 fsSlideshowVertical`
  - data-use-new: `true`
  - data-board-id: `2`
  - data-overwrite-title: ``

### :root CSS Variables

| Variable | Value |
|----------|-------|
| `--primary-color-h` | 213.08 |
| `--primary-color-s` | 88.43% |
| `--primary-color-l` | 23.73% |
| `--primary-color-hsl` | var(--primary-color-h), var(--primary-color-s), var(--primary-color-l) |
| `--primary-color` | #073772 |
| `--secondary-color-h` | 43.1 |
| `--secondary-color-s` | 88.38% |
| `--secondary-color-l` | 52.75% |
| `--secondary-color-hsl` | var(--secondary-color-h), var(--secondary-color-s), var(--secondary-color-l) |
| `--secondary-color` | #f1b51c |
| `--display-accred-panel` | none |
| `--has-sticky-header` | false |
| `--is-district-site` | false |
| `--header-logo-enabled` | true |
| `--footer-logo-enabled` | true |
| `--header-logo-bg` | false |
| `--footer-logo-bg` | false |
| `--header-logo-height-class` | height-medium |
| `--footer-logo-height-class` | height-medium |
| `--show-header-location-name` | false |
| `--show-header-location-title` | false |
| `--show-header-subtitle` | false |
| `--show-header-motto` | false |
| `--show-footer-title` | false |
| `--weglot-display-position` | default |

### Computed Styles

| Selector | Property | Value |
|----------|----------|-------|
| `body` | color | rgb(55, 55, 55) |
| `body` | backgroundColor | rgba(0, 0, 0, 0) |
| `body` | fontFamily | Montserrat, sans-serif |
| `body` | fontSize | 16.875px |
| `body` | fontWeight | 400 |
| `body` | lineHeight | 29.5312px |
| `body` | padding | 0px |
| `body` | margin | 0px |
| `body` | border | 0px none rgb(55, 55, 55) |
| `body` | borderRadius | 0px |
| `body` | textTransform | none |
| `body` | letterSpacing | 0.16875px |
| `body` | boxShadow | none |
| `body` | outline | rgb(55, 55, 55) none 3px |
| `body` | maxWidth | none |
| `body` | width | 1280px |
| `body` | minHeight | 0px |
| `h1` | color | rgb(7, 55, 114) |
| `h1` | backgroundColor | rgba(0, 0, 0, 0) |
| `h1` | fontFamily | Merriweather, serif |
| `h1` | fontSize | 41.25px |
| `h1` | fontWeight | 700 |
| `h1` | lineHeight | 47.4375px |
| `h1` | padding | 0px |
| `h1` | margin | 0px 0px 20px |
| `h1` | border | 0px none rgb(7, 55, 114) |
| `h1` | borderRadius | 0px |
| `h1` | textTransform | none |
| `h1` | letterSpacing | -0.825px |
| `h1` | boxShadow | none |
| `h1` | outline | rgb(7, 55, 114) none 3px |
| `h1` | maxWidth | none |
| `h1` | width | 1180px |
| `h1` | minHeight | 0px |
| `h2` | color | rgb(7, 55, 114) |
| `h2` | backgroundColor | rgba(0, 0, 0, 0) |
| `h2` | fontFamily | Merriweather, serif |
| `h2` | fontSize | 30px |
| `h2` | fontWeight | 700 |
| `h2` | lineHeight | 36px |
| `h2` | padding | 0px |
| `h2` | margin | 0px 0px 15px |
| `h2` | border | 0px none rgb(7, 55, 114) |
| `h2` | borderRadius | 0px |
| `h2` | textTransform | none |
| `h2` | letterSpacing | -0.3px |
| `h2` | boxShadow | none |
| `h2` | outline | rgb(7, 55, 114) none 3px |
| `h2` | maxWidth | none |
| `h2` | width | auto |
| `h2` | minHeight | 0px |
| `label` | color | rgb(55, 55, 55) |
| `label` | backgroundColor | rgba(0, 0, 0, 0) |
| `label` | fontFamily | Montserrat, sans-serif |
| `label` | fontSize | 16.875px |
| `label` | fontWeight | 400 |
| `label` | lineHeight | 29.5312px |
| `label` | padding | 0px |
| `label` | margin | 0px 8px 0px 0px |
| `label` | border | 0px none rgb(55, 55, 55) |
| `label` | borderRadius | 0px |
| `label` | textTransform | none |
| `label` | letterSpacing | 0.16875px |
| `label` | boxShadow | none |
| `label` | outline | rgb(55, 55, 55) none 3px |
| `label` | maxWidth | none |
| `label` | width | auto |
| `label` | minHeight | 0px |
| `input` | color | rgb(255, 255, 255) |
| `input` | backgroundColor | rgb(0, 42, 80) |
| `input` | fontFamily | Montserrat, sans-serif |
| `input` | fontSize | 14px |
| `input` | fontWeight | 400 |
| `input` | lineHeight | 22.4px |
| `input` | padding | 10px 30px 10px 31px |
| `input` | margin | 0px |
| `input` | border | 1px solid rgba(0, 0, 0, 0) |
| `input` | borderRadius | 3px |
| `input` | textTransform | none |
| `input` | letterSpacing | normal |
| `input` | boxShadow | none |
| `input` | outline | rgb(255, 255, 255) none 3px |
| `input` | maxWidth | 100% |
| `input` | width | 100% |
| `input` | minHeight | 0px |
| `input[type=text]` | color | rgb(255, 255, 255) |
| `input[type=text]` | backgroundColor | rgb(0, 42, 80) |
| `input[type=text]` | fontFamily | Montserrat, sans-serif |
| `input[type=text]` | fontSize | 14px |
| `input[type=text]` | fontWeight | 400 |
| `input[type=text]` | lineHeight | 22.4px |
| `input[type=text]` | padding | 10px 30px 10px 31px |
| `input[type=text]` | margin | 0px |
| `input[type=text]` | border | 1px solid rgba(0, 0, 0, 0) |
| `input[type=text]` | borderRadius | 3px |
| `input[type=text]` | textTransform | none |
| `input[type=text]` | letterSpacing | normal |
| `input[type=text]` | boxShadow | none |
| `input[type=text]` | outline | rgb(255, 255, 255) none 3px |
| `input[type=text]` | maxWidth | 100% |
| `input[type=text]` | width | 100% |
| `input[type=text]` | minHeight | 0px |
| `button` | color | rgba(0, 0, 0, 0) |
| `button` | backgroundColor | rgba(0, 0, 0, 0) |
| `button` | fontFamily | Montserrat, sans-serif |
| `button` | fontSize | 16.875px |
| `button` | fontWeight | 400 |
| `button` | lineHeight | 29.5312px |
| `button` | padding | 1px 6px |
| `button` | margin | 0px |
| `button` | border | 0px none rgba(0, 0, 0, 0) |
| `button` | borderRadius | 0px |
| `button` | textTransform | none |
| `button` | letterSpacing | normal |
| `button` | boxShadow | none |
| `button` | outline | rgba(0, 0, 0, 0) none 3px |
| `button` | maxWidth | none |
| `button` | width | 24px |
| `button` | minHeight | 0px |
| `#fsHeader` | color | rgb(55, 55, 55) |
| `#fsHeader` | backgroundColor | rgba(0, 0, 0, 0) |
| `#fsHeader` | fontFamily | Montserrat, sans-serif |
| `#fsHeader` | fontSize | 16.875px |
| `#fsHeader` | fontWeight | 400 |
| `#fsHeader` | lineHeight | 29.5312px |
| `#fsHeader` | padding | 0px 0px 80px |
| `#fsHeader` | margin | 0px |
| `#fsHeader` | border | 0px none rgb(55, 55, 55) |
| `#fsHeader` | borderRadius | 0px |
| `#fsHeader` | textTransform | none |
| `#fsHeader` | letterSpacing | 0.16875px |
| `#fsHeader` | boxShadow | none |
| `#fsHeader` | outline | rgb(55, 55, 55) none 3px |
| `#fsHeader` | maxWidth | none |
| `#fsHeader` | width | 1280px |
| `#fsHeader` | minHeight | 0px |
| `.fsTabsNav` | color | rgb(55, 55, 55) |
| `.fsTabsNav` | backgroundColor | rgba(0, 0, 0, 0) |
| `.fsTabsNav` | fontFamily | Montserrat, sans-serif |
| `.fsTabsNav` | fontSize | 15px |
| `.fsTabsNav` | fontWeight | 400 |
| `.fsTabsNav` | lineHeight | 24.375px |
| `.fsTabsNav` | padding | 0px |
| `.fsTabsNav` | margin | 0px |
| `.fsTabsNav` | border | 0px none rgb(55, 55, 55) |
| `.fsTabsNav` | borderRadius | 0px |
| `.fsTabsNav` | textTransform | none |
| `.fsTabsNav` | letterSpacing | 0.16875px |
| `.fsTabsNav` | boxShadow | none |
| `.fsTabsNav` | outline | rgb(55, 55, 55) none 3px |
| `.fsTabsNav` | maxWidth | none |
| `.fsTabsNav` | width | 1080px |
| `.fsTabsNav` | minHeight | 0px |
| `.fsPostElement` | color | rgb(55, 55, 55) |
| `.fsPostElement` | backgroundColor | rgba(0, 0, 0, 0) |
| `.fsPostElement` | fontFamily | Montserrat, sans-serif |
| `.fsPostElement` | fontSize | 16.875px |
| `.fsPostElement` | fontWeight | 400 |
| `.fsPostElement` | lineHeight | 29.5312px |
| `.fsPostElement` | padding | 0px |
| `.fsPostElement` | margin | 0px 0px 40px |
| `.fsPostElement` | border | 0px none rgb(55, 55, 55) |
| `.fsPostElement` | borderRadius | 0px |
| `.fsPostElement` | textTransform | none |
| `.fsPostElement` | letterSpacing | 0.16875px |
| `.fsPostElement` | boxShadow | none |
| `.fsPostElement` | outline | rgb(55, 55, 55) none 3px |
| `.fsPostElement` | maxWidth | none |
| `.fsPostElement` | width | 1180px |
| `.fsPostElement` | minHeight | 0px |
| `.fsPostElement.fsSlideshow` | color | rgb(55, 55, 55) |
| `.fsPostElement.fsSlideshow` | backgroundColor | rgba(0, 0, 0, 0) |
| `.fsPostElement.fsSlideshow` | fontFamily | Montserrat, sans-serif |
| `.fsPostElement.fsSlideshow` | fontSize | 16.875px |
| `.fsPostElement.fsSlideshow` | fontWeight | 400 |
| `.fsPostElement.fsSlideshow` | lineHeight | 29.5312px |
| `.fsPostElement.fsSlideshow` | padding | 0px |
| `.fsPostElement.fsSlideshow` | margin | 0px 0px 40px |
| `.fsPostElement.fsSlideshow` | border | 0px none rgb(55, 55, 55) |
| `.fsPostElement.fsSlideshow` | borderRadius | 0px |
| `.fsPostElement.fsSlideshow` | textTransform | none |
| `.fsPostElement.fsSlideshow` | letterSpacing | 0.16875px |
| `.fsPostElement.fsSlideshow` | boxShadow | none |
| `.fsPostElement.fsSlideshow` | outline | rgb(55, 55, 55) none 3px |
| `.fsPostElement.fsSlideshow` | maxWidth | none |
| `.fsPostElement.fsSlideshow` | width | 1180px |
| `.fsPostElement.fsSlideshow` | minHeight | 0px |

---

## Single

- **URL:** https://www.lisd.net/production2/posts/single
- **Extracted:** 2026-06-23

### Content

### Single _(fsPageTitle)_

No post to display. _(fsElementEmpty)_

### Widget Elements

- **`fsEl_2394`** — `fsElement fsPostElement fsPost fsThumbnailRectangle fsThumbnailMedium fsSingleItem`
  - data-use-new: `true`
  - data-overwrite-title: ``

### :root CSS Variables

| Variable | Value |
|----------|-------|
| `--primary-color-h` | 213.08 |
| `--primary-color-s` | 88.43% |
| `--primary-color-l` | 23.73% |
| `--primary-color-hsl` | var(--primary-color-h), var(--primary-color-s), var(--primary-color-l) |
| `--primary-color` | #073772 |
| `--secondary-color-h` | 43.1 |
| `--secondary-color-s` | 88.38% |
| `--secondary-color-l` | 52.75% |
| `--secondary-color-hsl` | var(--secondary-color-h), var(--secondary-color-s), var(--secondary-color-l) |
| `--secondary-color` | #f1b51c |
| `--display-accred-panel` | none |
| `--has-sticky-header` | false |
| `--is-district-site` | false |
| `--header-logo-enabled` | true |
| `--footer-logo-enabled` | true |
| `--header-logo-bg` | false |
| `--footer-logo-bg` | false |
| `--header-logo-height-class` | height-medium |
| `--footer-logo-height-class` | height-medium |
| `--show-header-location-name` | false |
| `--show-header-location-title` | false |
| `--show-header-subtitle` | false |
| `--show-header-motto` | false |
| `--show-footer-title` | false |
| `--weglot-display-position` | default |

### Computed Styles

| Selector | Property | Value |
|----------|----------|-------|
| `body` | color | rgb(55, 55, 55) |
| `body` | backgroundColor | rgba(0, 0, 0, 0) |
| `body` | fontFamily | Montserrat, sans-serif |
| `body` | fontSize | 16.875px |
| `body` | fontWeight | 400 |
| `body` | lineHeight | 29.5312px |
| `body` | padding | 0px |
| `body` | margin | 0px |
| `body` | border | 0px none rgb(55, 55, 55) |
| `body` | borderRadius | 0px |
| `body` | textTransform | none |
| `body` | letterSpacing | 0.16875px |
| `body` | boxShadow | none |
| `body` | outline | rgb(55, 55, 55) none 3px |
| `body` | maxWidth | none |
| `body` | width | 1280px |
| `body` | minHeight | 0px |
| `h1` | color | rgb(7, 55, 114) |
| `h1` | backgroundColor | rgba(0, 0, 0, 0) |
| `h1` | fontFamily | Merriweather, serif |
| `h1` | fontSize | 41.25px |
| `h1` | fontWeight | 700 |
| `h1` | lineHeight | 47.4375px |
| `h1` | padding | 0px |
| `h1` | margin | 0px 0px 20px |
| `h1` | border | 0px none rgb(7, 55, 114) |
| `h1` | borderRadius | 0px |
| `h1` | textTransform | none |
| `h1` | letterSpacing | -0.825px |
| `h1` | boxShadow | none |
| `h1` | outline | rgb(7, 55, 114) none 3px |
| `h1` | maxWidth | none |
| `h1` | width | 1180px |
| `h1` | minHeight | 0px |
| `h2` | color | rgb(7, 55, 114) |
| `h2` | backgroundColor | rgba(0, 0, 0, 0) |
| `h2` | fontFamily | Merriweather, serif |
| `h2` | fontSize | 30px |
| `h2` | fontWeight | 700 |
| `h2` | lineHeight | 36px |
| `h2` | padding | 0px |
| `h2` | margin | 0px 0px 15px |
| `h2` | border | 0px none rgb(7, 55, 114) |
| `h2` | borderRadius | 0px |
| `h2` | textTransform | none |
| `h2` | letterSpacing | -0.3px |
| `h2` | boxShadow | none |
| `h2` | outline | rgb(7, 55, 114) none 3px |
| `h2` | maxWidth | none |
| `h2` | width | auto |
| `h2` | minHeight | 0px |
| `label` | color | rgb(55, 55, 55) |
| `label` | backgroundColor | rgba(0, 0, 0, 0) |
| `label` | fontFamily | Montserrat, sans-serif |
| `label` | fontSize | 16.875px |
| `label` | fontWeight | 400 |
| `label` | lineHeight | 29.5312px |
| `label` | padding | 0px |
| `label` | margin | 0px 8px 0px 0px |
| `label` | border | 0px none rgb(55, 55, 55) |
| `label` | borderRadius | 0px |
| `label` | textTransform | none |
| `label` | letterSpacing | 0.16875px |
| `label` | boxShadow | none |
| `label` | outline | rgb(55, 55, 55) none 3px |
| `label` | maxWidth | none |
| `label` | width | auto |
| `label` | minHeight | 0px |
| `input` | color | rgb(255, 255, 255) |
| `input` | backgroundColor | rgb(0, 42, 80) |
| `input` | fontFamily | Montserrat, sans-serif |
| `input` | fontSize | 14px |
| `input` | fontWeight | 400 |
| `input` | lineHeight | 22.4px |
| `input` | padding | 10px 30px 10px 31px |
| `input` | margin | 0px |
| `input` | border | 1px solid rgba(0, 0, 0, 0) |
| `input` | borderRadius | 3px |
| `input` | textTransform | none |
| `input` | letterSpacing | normal |
| `input` | boxShadow | none |
| `input` | outline | rgb(255, 255, 255) none 3px |
| `input` | maxWidth | 100% |
| `input` | width | 100% |
| `input` | minHeight | 0px |
| `input[type=text]` | color | rgb(255, 255, 255) |
| `input[type=text]` | backgroundColor | rgb(0, 42, 80) |
| `input[type=text]` | fontFamily | Montserrat, sans-serif |
| `input[type=text]` | fontSize | 14px |
| `input[type=text]` | fontWeight | 400 |
| `input[type=text]` | lineHeight | 22.4px |
| `input[type=text]` | padding | 10px 30px 10px 31px |
| `input[type=text]` | margin | 0px |
| `input[type=text]` | border | 1px solid rgba(0, 0, 0, 0) |
| `input[type=text]` | borderRadius | 3px |
| `input[type=text]` | textTransform | none |
| `input[type=text]` | letterSpacing | normal |
| `input[type=text]` | boxShadow | none |
| `input[type=text]` | outline | rgb(255, 255, 255) none 3px |
| `input[type=text]` | maxWidth | 100% |
| `input[type=text]` | width | 100% |
| `input[type=text]` | minHeight | 0px |
| `button` | color | rgba(0, 0, 0, 0) |
| `button` | backgroundColor | rgba(0, 0, 0, 0) |
| `button` | fontFamily | Montserrat, sans-serif |
| `button` | fontSize | 16.875px |
| `button` | fontWeight | 400 |
| `button` | lineHeight | 29.5312px |
| `button` | padding | 1px 6px |
| `button` | margin | 0px |
| `button` | border | 0px none rgba(0, 0, 0, 0) |
| `button` | borderRadius | 0px |
| `button` | textTransform | none |
| `button` | letterSpacing | normal |
| `button` | boxShadow | none |
| `button` | outline | rgba(0, 0, 0, 0) none 3px |
| `button` | maxWidth | none |
| `button` | width | 24px |
| `button` | minHeight | 0px |
| `#fsHeader` | color | rgb(55, 55, 55) |
| `#fsHeader` | backgroundColor | rgba(0, 0, 0, 0) |
| `#fsHeader` | fontFamily | Montserrat, sans-serif |
| `#fsHeader` | fontSize | 16.875px |
| `#fsHeader` | fontWeight | 400 |
| `#fsHeader` | lineHeight | 29.5312px |
| `#fsHeader` | padding | 0px 0px 80px |
| `#fsHeader` | margin | 0px |
| `#fsHeader` | border | 0px none rgb(55, 55, 55) |
| `#fsHeader` | borderRadius | 0px |
| `#fsHeader` | textTransform | none |
| `#fsHeader` | letterSpacing | 0.16875px |
| `#fsHeader` | boxShadow | none |
| `#fsHeader` | outline | rgb(55, 55, 55) none 3px |
| `#fsHeader` | maxWidth | none |
| `#fsHeader` | width | 1280px |
| `#fsHeader` | minHeight | 0px |
| `.fsTabsNav` | color | rgb(55, 55, 55) |
| `.fsTabsNav` | backgroundColor | rgba(0, 0, 0, 0) |
| `.fsTabsNav` | fontFamily | Montserrat, sans-serif |
| `.fsTabsNav` | fontSize | 15px |
| `.fsTabsNav` | fontWeight | 400 |
| `.fsTabsNav` | lineHeight | 24.375px |
| `.fsTabsNav` | padding | 0px |
| `.fsTabsNav` | margin | 0px |
| `.fsTabsNav` | border | 0px none rgb(55, 55, 55) |
| `.fsTabsNav` | borderRadius | 0px |
| `.fsTabsNav` | textTransform | none |
| `.fsTabsNav` | letterSpacing | 0.16875px |
| `.fsTabsNav` | boxShadow | none |
| `.fsTabsNav` | outline | rgb(55, 55, 55) none 3px |
| `.fsTabsNav` | maxWidth | none |
| `.fsTabsNav` | width | 1080px |
| `.fsTabsNav` | minHeight | 0px |
| `.fsPostElement` | color | rgb(55, 55, 55) |
| `.fsPostElement` | backgroundColor | rgba(0, 0, 0, 0) |
| `.fsPostElement` | fontFamily | Montserrat, sans-serif |
| `.fsPostElement` | fontSize | 16.875px |
| `.fsPostElement` | fontWeight | 400 |
| `.fsPostElement` | lineHeight | 29.5312px |
| `.fsPostElement` | padding | 0px |
| `.fsPostElement` | margin | 0px |
| `.fsPostElement` | border | 0px none rgb(55, 55, 55) |
| `.fsPostElement` | borderRadius | 0px |
| `.fsPostElement` | textTransform | none |
| `.fsPostElement` | letterSpacing | 0.16875px |
| `.fsPostElement` | boxShadow | none |
| `.fsPostElement` | outline | rgb(55, 55, 55) none 3px |
| `.fsPostElement` | maxWidth | none |
| `.fsPostElement` | width | 1180px |
| `.fsPostElement` | minHeight | 0px |

---

## Social Elements

- **URL:** https://www.lisd.net/production2/social-elements
- **Extracted:** 2026-06-23

### Content

### Social Elements _(fsPageTitle)_

- Vimeo

- YouTube

- Feeds

### Widget Elements

- **`fsEl_2408`** — `fsElement fsNavigation fsList`
  - data-use-new: `true`

### :root CSS Variables

| Variable | Value |
|----------|-------|
| `--primary-color-h` | 213.08 |
| `--primary-color-s` | 88.43% |
| `--primary-color-l` | 23.73% |
| `--primary-color-hsl` | var(--primary-color-h), var(--primary-color-s), var(--primary-color-l) |
| `--primary-color` | #073772 |
| `--secondary-color-h` | 43.1 |
| `--secondary-color-s` | 88.38% |
| `--secondary-color-l` | 52.75% |
| `--secondary-color-hsl` | var(--secondary-color-h), var(--secondary-color-s), var(--secondary-color-l) |
| `--secondary-color` | #f1b51c |
| `--display-accred-panel` | none |
| `--has-sticky-header` | false |
| `--is-district-site` | false |
| `--header-logo-enabled` | true |
| `--footer-logo-enabled` | true |
| `--header-logo-bg` | false |
| `--footer-logo-bg` | false |
| `--header-logo-height-class` | height-medium |
| `--footer-logo-height-class` | height-medium |
| `--show-header-location-name` | false |
| `--show-header-location-title` | false |
| `--show-header-subtitle` | false |
| `--show-header-motto` | false |
| `--show-footer-title` | false |
| `--weglot-display-position` | default |

### Computed Styles

| Selector | Property | Value |
|----------|----------|-------|
| `body` | color | rgb(55, 55, 55) |
| `body` | backgroundColor | rgba(0, 0, 0, 0) |
| `body` | fontFamily | Montserrat, sans-serif |
| `body` | fontSize | 16.875px |
| `body` | fontWeight | 400 |
| `body` | lineHeight | 29.5312px |
| `body` | padding | 0px |
| `body` | margin | 0px |
| `body` | border | 0px none rgb(55, 55, 55) |
| `body` | borderRadius | 0px |
| `body` | textTransform | none |
| `body` | letterSpacing | 0.16875px |
| `body` | boxShadow | none |
| `body` | outline | rgb(55, 55, 55) none 3px |
| `body` | maxWidth | none |
| `body` | width | 1280px |
| `body` | minHeight | 0px |
| `h1` | color | rgb(7, 55, 114) |
| `h1` | backgroundColor | rgba(0, 0, 0, 0) |
| `h1` | fontFamily | Merriweather, serif |
| `h1` | fontSize | 41.25px |
| `h1` | fontWeight | 700 |
| `h1` | lineHeight | 47.4375px |
| `h1` | padding | 0px |
| `h1` | margin | 0px 0px 20px |
| `h1` | border | 0px none rgb(7, 55, 114) |
| `h1` | borderRadius | 0px |
| `h1` | textTransform | none |
| `h1` | letterSpacing | -0.825px |
| `h1` | boxShadow | none |
| `h1` | outline | rgb(7, 55, 114) none 3px |
| `h1` | maxWidth | none |
| `h1` | width | 1180px |
| `h1` | minHeight | 0px |
| `h2` | color | rgb(7, 55, 114) |
| `h2` | backgroundColor | rgba(0, 0, 0, 0) |
| `h2` | fontFamily | Merriweather, serif |
| `h2` | fontSize | 30px |
| `h2` | fontWeight | 700 |
| `h2` | lineHeight | 36px |
| `h2` | padding | 0px |
| `h2` | margin | 0px 0px 15px |
| `h2` | border | 0px none rgb(7, 55, 114) |
| `h2` | borderRadius | 0px |
| `h2` | textTransform | none |
| `h2` | letterSpacing | -0.3px |
| `h2` | boxShadow | none |
| `h2` | outline | rgb(7, 55, 114) none 3px |
| `h2` | maxWidth | none |
| `h2` | width | auto |
| `h2` | minHeight | 0px |
| `#fsPageContent a` | color | rgb(7, 55, 114) |
| `#fsPageContent a` | backgroundColor | rgba(0, 0, 0, 0) |
| `#fsPageContent a` | fontFamily | Montserrat, sans-serif |
| `#fsPageContent a` | fontSize | 16.875px |
| `#fsPageContent a` | fontWeight | 500 |
| `#fsPageContent a` | lineHeight | 29.5312px |
| `#fsPageContent a` | padding | 10px 0px |
| `#fsPageContent a` | margin | 0px |
| `#fsPageContent a` | border | 0px none rgb(7, 55, 114) |
| `#fsPageContent a` | borderRadius | 0px |
| `#fsPageContent a` | textTransform | none |
| `#fsPageContent a` | letterSpacing | 0.16875px |
| `#fsPageContent a` | boxShadow | none |
| `#fsPageContent a` | outline | rgb(7, 55, 114) none 3px |
| `#fsPageContent a` | maxWidth | none |
| `#fsPageContent a` | width | 1180px |
| `#fsPageContent a` | minHeight | 0px |
| `label` | color | rgb(55, 55, 55) |
| `label` | backgroundColor | rgba(0, 0, 0, 0) |
| `label` | fontFamily | Montserrat, sans-serif |
| `label` | fontSize | 16.875px |
| `label` | fontWeight | 400 |
| `label` | lineHeight | 29.5312px |
| `label` | padding | 0px |
| `label` | margin | 0px 8px 0px 0px |
| `label` | border | 0px none rgb(55, 55, 55) |
| `label` | borderRadius | 0px |
| `label` | textTransform | none |
| `label` | letterSpacing | 0.16875px |
| `label` | boxShadow | none |
| `label` | outline | rgb(55, 55, 55) none 3px |
| `label` | maxWidth | none |
| `label` | width | auto |
| `label` | minHeight | 0px |
| `input` | color | rgb(255, 255, 255) |
| `input` | backgroundColor | rgb(0, 42, 80) |
| `input` | fontFamily | Montserrat, sans-serif |
| `input` | fontSize | 14px |
| `input` | fontWeight | 400 |
| `input` | lineHeight | 22.4px |
| `input` | padding | 10px 30px 10px 31px |
| `input` | margin | 0px |
| `input` | border | 1px solid rgba(0, 0, 0, 0) |
| `input` | borderRadius | 3px |
| `input` | textTransform | none |
| `input` | letterSpacing | normal |
| `input` | boxShadow | none |
| `input` | outline | rgb(255, 255, 255) none 3px |
| `input` | maxWidth | 100% |
| `input` | width | 100% |
| `input` | minHeight | 0px |
| `input[type=text]` | color | rgb(255, 255, 255) |
| `input[type=text]` | backgroundColor | rgb(0, 42, 80) |
| `input[type=text]` | fontFamily | Montserrat, sans-serif |
| `input[type=text]` | fontSize | 14px |
| `input[type=text]` | fontWeight | 400 |
| `input[type=text]` | lineHeight | 22.4px |
| `input[type=text]` | padding | 10px 30px 10px 31px |
| `input[type=text]` | margin | 0px |
| `input[type=text]` | border | 1px solid rgba(0, 0, 0, 0) |
| `input[type=text]` | borderRadius | 3px |
| `input[type=text]` | textTransform | none |
| `input[type=text]` | letterSpacing | normal |
| `input[type=text]` | boxShadow | none |
| `input[type=text]` | outline | rgb(255, 255, 255) none 3px |
| `input[type=text]` | maxWidth | 100% |
| `input[type=text]` | width | 100% |
| `input[type=text]` | minHeight | 0px |
| `button` | color | rgba(0, 0, 0, 0) |
| `button` | backgroundColor | rgba(0, 0, 0, 0) |
| `button` | fontFamily | Montserrat, sans-serif |
| `button` | fontSize | 16.875px |
| `button` | fontWeight | 400 |
| `button` | lineHeight | 29.5312px |
| `button` | padding | 1px 6px |
| `button` | margin | 0px |
| `button` | border | 0px none rgba(0, 0, 0, 0) |
| `button` | borderRadius | 0px |
| `button` | textTransform | none |
| `button` | letterSpacing | normal |
| `button` | boxShadow | none |
| `button` | outline | rgba(0, 0, 0, 0) none 3px |
| `button` | maxWidth | none |
| `button` | width | 24px |
| `button` | minHeight | 0px |
| `#fsHeader` | color | rgb(55, 55, 55) |
| `#fsHeader` | backgroundColor | rgba(0, 0, 0, 0) |
| `#fsHeader` | fontFamily | Montserrat, sans-serif |
| `#fsHeader` | fontSize | 16.875px |
| `#fsHeader` | fontWeight | 400 |
| `#fsHeader` | lineHeight | 29.5312px |
| `#fsHeader` | padding | 0px 0px 80px |
| `#fsHeader` | margin | 0px |
| `#fsHeader` | border | 0px none rgb(55, 55, 55) |
| `#fsHeader` | borderRadius | 0px |
| `#fsHeader` | textTransform | none |
| `#fsHeader` | letterSpacing | 0.16875px |
| `#fsHeader` | boxShadow | none |
| `#fsHeader` | outline | rgb(55, 55, 55) none 3px |
| `#fsHeader` | maxWidth | none |
| `#fsHeader` | width | 1280px |
| `#fsHeader` | minHeight | 0px |
| `.fsTabsNav` | color | rgb(55, 55, 55) |
| `.fsTabsNav` | backgroundColor | rgba(0, 0, 0, 0) |
| `.fsTabsNav` | fontFamily | Montserrat, sans-serif |
| `.fsTabsNav` | fontSize | 15px |
| `.fsTabsNav` | fontWeight | 400 |
| `.fsTabsNav` | lineHeight | 24.375px |
| `.fsTabsNav` | padding | 0px |
| `.fsTabsNav` | margin | 0px |
| `.fsTabsNav` | border | 0px none rgb(55, 55, 55) |
| `.fsTabsNav` | borderRadius | 0px |
| `.fsTabsNav` | textTransform | none |
| `.fsTabsNav` | letterSpacing | 0.16875px |
| `.fsTabsNav` | boxShadow | none |
| `.fsTabsNav` | outline | rgb(55, 55, 55) none 3px |
| `.fsTabsNav` | maxWidth | none |
| `.fsTabsNav` | width | 1080px |
| `.fsTabsNav` | minHeight | 0px |

---

## Vimeo

- **URL:** https://www.lisd.net/production2/social-elements/vimeo
- **Extracted:** 2026-06-23

### Content

### Vimeo _(fsPageTitle)_

#### Single Video _(fsElementTitle)_

#### Channel List _(fsElementTitle)_

- Finalsite Composer
3835 views
Learn about Finalsite's school-specific CMS, Composer _(fsVimeoListItem fsStyleAutoclear)_

- Thank You from Finalsite
487 views
In case we don’t say it enough, we’re so grateful for all you do. _(fsVimeoListItem fsStyleAutoclear)_

- View on vimeo _(vimeo_view_link)_

### Widget Elements

- **`fsEl_2411`** — `fsElement fsVimeo`
  - data-id: `112483303`
  - data-videotype: `video`
  - data-mostrecent: `false`
  - data-private-video-hash: ``
  - data-maxvideos: `5`
  - data-title: `Single Video`
  - data-use-new: `true`
- **`fsEl_2413`** — `fsElement fsVimeo`
  - data-id: `finalsite`
  - data-videotype: `user`
  - data-mostrecent: `false`
  - data-private-video-hash: ``
  - data-maxvideos: `5`
  - data-title: `Channel List`
  - data-use-new: `true`

### :root CSS Variables

| Variable | Value |
|----------|-------|
| `--primary-color-h` | 213.08 |
| `--primary-color-s` | 88.43% |
| `--primary-color-l` | 23.73% |
| `--primary-color-hsl` | var(--primary-color-h), var(--primary-color-s), var(--primary-color-l) |
| `--primary-color` | #073772 |
| `--secondary-color-h` | 43.1 |
| `--secondary-color-s` | 88.38% |
| `--secondary-color-l` | 52.75% |
| `--secondary-color-hsl` | var(--secondary-color-h), var(--secondary-color-s), var(--secondary-color-l) |
| `--secondary-color` | #f1b51c |
| `--display-accred-panel` | none |
| `--has-sticky-header` | false |
| `--is-district-site` | false |
| `--header-logo-enabled` | true |
| `--footer-logo-enabled` | true |
| `--header-logo-bg` | false |
| `--footer-logo-bg` | false |
| `--header-logo-height-class` | height-medium |
| `--footer-logo-height-class` | height-medium |
| `--show-header-location-name` | false |
| `--show-header-location-title` | false |
| `--show-header-subtitle` | false |
| `--show-header-motto` | false |
| `--show-footer-title` | false |
| `--weglot-display-position` | default |

### Computed Styles

| Selector | Property | Value |
|----------|----------|-------|
| `body` | color | rgb(55, 55, 55) |
| `body` | backgroundColor | rgba(0, 0, 0, 0) |
| `body` | fontFamily | Montserrat, sans-serif |
| `body` | fontSize | 16.875px |
| `body` | fontWeight | 400 |
| `body` | lineHeight | 29.5312px |
| `body` | padding | 0px |
| `body` | margin | 0px |
| `body` | border | 0px none rgb(55, 55, 55) |
| `body` | borderRadius | 0px |
| `body` | textTransform | none |
| `body` | letterSpacing | 0.16875px |
| `body` | boxShadow | none |
| `body` | outline | rgb(55, 55, 55) none 3px |
| `body` | maxWidth | none |
| `body` | width | 1280px |
| `body` | minHeight | 0px |
| `h1` | color | rgb(7, 55, 114) |
| `h1` | backgroundColor | rgba(0, 0, 0, 0) |
| `h1` | fontFamily | Merriweather, serif |
| `h1` | fontSize | 41.25px |
| `h1` | fontWeight | 700 |
| `h1` | lineHeight | 47.4375px |
| `h1` | padding | 0px |
| `h1` | margin | 0px 0px 20px |
| `h1` | border | 0px none rgb(7, 55, 114) |
| `h1` | borderRadius | 0px |
| `h1` | textTransform | none |
| `h1` | letterSpacing | -0.825px |
| `h1` | boxShadow | none |
| `h1` | outline | rgb(7, 55, 114) none 3px |
| `h1` | maxWidth | none |
| `h1` | width | 1180px |
| `h1` | minHeight | 0px |
| `h2` | color | rgb(7, 55, 114) |
| `h2` | backgroundColor | rgba(0, 0, 0, 0) |
| `h2` | fontFamily | Merriweather, serif |
| `h2` | fontSize | 30px |
| `h2` | fontWeight | 700 |
| `h2` | lineHeight | 36px |
| `h2` | padding | 0px |
| `h2` | margin | 0px 0px 15px |
| `h2` | border | 0px none rgb(7, 55, 114) |
| `h2` | borderRadius | 0px |
| `h2` | textTransform | none |
| `h2` | letterSpacing | -0.3px |
| `h2` | boxShadow | none |
| `h2` | outline | rgb(7, 55, 114) none 3px |
| `h2` | maxWidth | none |
| `h2` | width | auto |
| `h2` | minHeight | 0px |
| `#fsPageContent a` | color | rgb(7, 55, 114) |
| `#fsPageContent a` | backgroundColor | rgb(229, 229, 229) |
| `#fsPageContent a` | fontFamily | Montserrat, sans-serif |
| `#fsPageContent a` | fontSize | 14px |
| `#fsPageContent a` | fontWeight | 500 |
| `#fsPageContent a` | lineHeight | 19.6px |
| `#fsPageContent a` | padding | 10px 24px |
| `#fsPageContent a` | margin | 0px 0px 10px |
| `#fsPageContent a` | border | 1px solid rgb(229, 229, 229) |
| `#fsPageContent a` | borderRadius | 100px |
| `#fsPageContent a` | textTransform | none |
| `#fsPageContent a` | letterSpacing | normal |
| `#fsPageContent a` | boxShadow | none |
| `#fsPageContent a` | outline | rgb(7, 55, 114) none 3px |
| `#fsPageContent a` | maxWidth | none |
| `#fsPageContent a` | width | 154.641px |
| `#fsPageContent a` | minHeight | 0px |
| `label` | color | rgb(55, 55, 55) |
| `label` | backgroundColor | rgba(0, 0, 0, 0) |
| `label` | fontFamily | Montserrat, sans-serif |
| `label` | fontSize | 16.875px |
| `label` | fontWeight | 400 |
| `label` | lineHeight | 29.5312px |
| `label` | padding | 0px |
| `label` | margin | 0px 8px 0px 0px |
| `label` | border | 0px none rgb(55, 55, 55) |
| `label` | borderRadius | 0px |
| `label` | textTransform | none |
| `label` | letterSpacing | 0.16875px |
| `label` | boxShadow | none |
| `label` | outline | rgb(55, 55, 55) none 3px |
| `label` | maxWidth | none |
| `label` | width | auto |
| `label` | minHeight | 0px |
| `input` | color | rgb(255, 255, 255) |
| `input` | backgroundColor | rgb(0, 42, 80) |
| `input` | fontFamily | Montserrat, sans-serif |
| `input` | fontSize | 14px |
| `input` | fontWeight | 400 |
| `input` | lineHeight | 22.4px |
| `input` | padding | 10px 30px 10px 31px |
| `input` | margin | 0px |
| `input` | border | 1px solid rgba(0, 0, 0, 0) |
| `input` | borderRadius | 3px |
| `input` | textTransform | none |
| `input` | letterSpacing | normal |
| `input` | boxShadow | none |
| `input` | outline | rgb(255, 255, 255) none 3px |
| `input` | maxWidth | 100% |
| `input` | width | 100% |
| `input` | minHeight | 0px |
| `input[type=text]` | color | rgb(255, 255, 255) |
| `input[type=text]` | backgroundColor | rgb(0, 42, 80) |
| `input[type=text]` | fontFamily | Montserrat, sans-serif |
| `input[type=text]` | fontSize | 14px |
| `input[type=text]` | fontWeight | 400 |
| `input[type=text]` | lineHeight | 22.4px |
| `input[type=text]` | padding | 10px 30px 10px 31px |
| `input[type=text]` | margin | 0px |
| `input[type=text]` | border | 1px solid rgba(0, 0, 0, 0) |
| `input[type=text]` | borderRadius | 3px |
| `input[type=text]` | textTransform | none |
| `input[type=text]` | letterSpacing | normal |
| `input[type=text]` | boxShadow | none |
| `input[type=text]` | outline | rgb(255, 255, 255) none 3px |
| `input[type=text]` | maxWidth | 100% |
| `input[type=text]` | width | 100% |
| `input[type=text]` | minHeight | 0px |
| `button` | color | rgba(0, 0, 0, 0) |
| `button` | backgroundColor | rgba(0, 0, 0, 0) |
| `button` | fontFamily | Montserrat, sans-serif |
| `button` | fontSize | 16.875px |
| `button` | fontWeight | 400 |
| `button` | lineHeight | 29.5312px |
| `button` | padding | 1px 6px |
| `button` | margin | 0px |
| `button` | border | 0px none rgba(0, 0, 0, 0) |
| `button` | borderRadius | 0px |
| `button` | textTransform | none |
| `button` | letterSpacing | normal |
| `button` | boxShadow | none |
| `button` | outline | rgba(0, 0, 0, 0) none 3px |
| `button` | maxWidth | none |
| `button` | width | 24px |
| `button` | minHeight | 0px |
| `#fsHeader` | color | rgb(55, 55, 55) |
| `#fsHeader` | backgroundColor | rgba(0, 0, 0, 0) |
| `#fsHeader` | fontFamily | Montserrat, sans-serif |
| `#fsHeader` | fontSize | 16.875px |
| `#fsHeader` | fontWeight | 400 |
| `#fsHeader` | lineHeight | 29.5312px |
| `#fsHeader` | padding | 0px 0px 80px |
| `#fsHeader` | margin | 0px |
| `#fsHeader` | border | 0px none rgb(55, 55, 55) |
| `#fsHeader` | borderRadius | 0px |
| `#fsHeader` | textTransform | none |
| `#fsHeader` | letterSpacing | 0.16875px |
| `#fsHeader` | boxShadow | none |
| `#fsHeader` | outline | rgb(55, 55, 55) none 3px |
| `#fsHeader` | maxWidth | none |
| `#fsHeader` | width | 1280px |
| `#fsHeader` | minHeight | 0px |
| `.fsTabsNav` | color | rgb(55, 55, 55) |
| `.fsTabsNav` | backgroundColor | rgba(0, 0, 0, 0) |
| `.fsTabsNav` | fontFamily | Montserrat, sans-serif |
| `.fsTabsNav` | fontSize | 15px |
| `.fsTabsNav` | fontWeight | 400 |
| `.fsTabsNav` | lineHeight | 24.375px |
| `.fsTabsNav` | padding | 0px |
| `.fsTabsNav` | margin | 0px |
| `.fsTabsNav` | border | 0px none rgb(55, 55, 55) |
| `.fsTabsNav` | borderRadius | 0px |
| `.fsTabsNav` | textTransform | none |
| `.fsTabsNav` | letterSpacing | 0.16875px |
| `.fsTabsNav` | boxShadow | none |
| `.fsTabsNav` | outline | rgb(55, 55, 55) none 3px |
| `.fsTabsNav` | maxWidth | none |
| `.fsTabsNav` | width | 1080px |
| `.fsTabsNav` | minHeight | 0px |
| `.fsVimeo` | color | rgb(55, 55, 55) |
| `.fsVimeo` | backgroundColor | rgba(0, 0, 0, 0) |
| `.fsVimeo` | fontFamily | Montserrat, sans-serif |
| `.fsVimeo` | fontSize | 16.875px |
| `.fsVimeo` | fontWeight | 400 |
| `.fsVimeo` | lineHeight | 29.5312px |
| `.fsVimeo` | padding | 0px |
| `.fsVimeo` | margin | 0px |
| `.fsVimeo` | border | 0px none rgb(55, 55, 55) |
| `.fsVimeo` | borderRadius | 0px |
| `.fsVimeo` | textTransform | none |
| `.fsVimeo` | letterSpacing | 0.16875px |
| `.fsVimeo` | boxShadow | none |
| `.fsVimeo` | outline | rgb(55, 55, 55) none 3px |
| `.fsVimeo` | maxWidth | none |
| `.fsVimeo` | width | 570px |
| `.fsVimeo` | minHeight | 0px |

---

## YouTube

- **URL:** https://www.lisd.net/production2/social-elements/youtube
- **Extracted:** 2026-06-23

### Content

### YouTube _(fsPageTitle)_

#### Single Video _(fsElementTitle)_

#### Channel List _(fsElementTitle)_

- Accessible First: How K-12 Schools Can Prepare for Compliance Deadlines
Join us to discuss how to prepare for the new accessibility requirements and to see the guardrails in Composer that help keep your site in compliance. We’ll cover what to do if a complaint lands in your inbox and how to align IT, communications, and your administrative team on next steps. _(fsYoutubeListItem fsStyleAutoclear)_

- The Best School Websites of 2025. Our favorite designs. Your next big idea.
The best school websites don’t happen by accident. They’re intentional, strategic, and built with purpose. That's why we're kicking off the year by spotlighting some of the sites that made us stop scrolling, click around, and think: “They nailed it!” We'll celebrate the schools that raised the bar in 2025 with bold design choices, standout storytelling, and intuitive user experiences that are now serving their communitie _(fsYoutubeListItem fsStyleAutoclear)_

- AI Chatbot for Schools | Finalsite Ask AI | Intelligent Web Assistant
Finalsite's Ask AI, and intelligent web assistant, provides real-time assistance and accurate answers directly from your school's publicly available information to create a seamless, efficient, and branded user experience. Learn more at www.finalsite.com/ask-ai _(fsYoutubeListItem fsStyleAutoclear)_

- Finalsite Onsite | Local Professional Development Workshops for Schools
We're delivering a comprehensive professional learning experience tailored to your specific needs — right at your doorstep. Our mission goes beyond just delivering better tools; it's to help you achieve your full potential so you can leverage our tools effectively — sparking creativity, collaboration, and engagement within your school community. Find a location near you at www.finalsite.com/onsi _(fsYoutubeListItem fsStyleAutoclear)_

- Finalsite Focus | 2025 Product Roadmap for Districts
Join Finalsite CEO and Founder Jon Moser and Chief Product Officer Steven Dong as they unveil Finalsite's exciting innovations ahead. You'll discover solutions your district can start using today, explore new products designed to improve communications with your community, and see how Finalsite’s tools are working smarter together. Learn more at https://www.finalsite.com/focus/districts _(fsYoutubeListItem fsStyleAutoclear)_

### Widget Elements

- **`fsEl_2416`** — `fsElement fsYoutube`
  - data-id: `m5S06YGlOxA`
  - data-videotype: `video`
  - data-mostrecent: `false`
  - data-maxvideos: `5`
  - data-title: `Single Video`
  - data-use-new: `true`
- **`fsEl_2418`** — `fsElement fsYoutube`
  - data-id: `finalsite`
  - data-videotype: `user`
  - data-mostrecent: `false`
  - data-maxvideos: `5`
  - data-title: `Channel List`
  - data-use-new: `true`

### :root CSS Variables

| Variable | Value |
|----------|-------|
| `--primary-color-h` | 213.08 |
| `--primary-color-s` | 88.43% |
| `--primary-color-l` | 23.73% |
| `--primary-color-hsl` | var(--primary-color-h), var(--primary-color-s), var(--primary-color-l) |
| `--primary-color` | #073772 |
| `--secondary-color-h` | 43.1 |
| `--secondary-color-s` | 88.38% |
| `--secondary-color-l` | 52.75% |
| `--secondary-color-hsl` | var(--secondary-color-h), var(--secondary-color-s), var(--secondary-color-l) |
| `--secondary-color` | #f1b51c |
| `--display-accred-panel` | none |
| `--has-sticky-header` | false |
| `--is-district-site` | false |
| `--header-logo-enabled` | true |
| `--footer-logo-enabled` | true |
| `--header-logo-bg` | false |
| `--footer-logo-bg` | false |
| `--header-logo-height-class` | height-medium |
| `--footer-logo-height-class` | height-medium |
| `--show-header-location-name` | false |
| `--show-header-location-title` | false |
| `--show-header-subtitle` | false |
| `--show-header-motto` | false |
| `--show-footer-title` | false |
| `--weglot-display-position` | default |

### Computed Styles

| Selector | Property | Value |
|----------|----------|-------|
| `body` | color | rgb(55, 55, 55) |
| `body` | backgroundColor | rgba(0, 0, 0, 0) |
| `body` | fontFamily | Montserrat, sans-serif |
| `body` | fontSize | 16.875px |
| `body` | fontWeight | 400 |
| `body` | lineHeight | 29.5312px |
| `body` | padding | 0px |
| `body` | margin | 0px |
| `body` | border | 0px none rgb(55, 55, 55) |
| `body` | borderRadius | 0px |
| `body` | textTransform | none |
| `body` | letterSpacing | 0.16875px |
| `body` | boxShadow | none |
| `body` | outline | rgb(55, 55, 55) none 3px |
| `body` | maxWidth | none |
| `body` | width | 1280px |
| `body` | minHeight | 0px |
| `h1` | color | rgb(7, 55, 114) |
| `h1` | backgroundColor | rgba(0, 0, 0, 0) |
| `h1` | fontFamily | Merriweather, serif |
| `h1` | fontSize | 41.25px |
| `h1` | fontWeight | 700 |
| `h1` | lineHeight | 47.4375px |
| `h1` | padding | 0px |
| `h1` | margin | 0px 0px 20px |
| `h1` | border | 0px none rgb(7, 55, 114) |
| `h1` | borderRadius | 0px |
| `h1` | textTransform | none |
| `h1` | letterSpacing | -0.825px |
| `h1` | boxShadow | none |
| `h1` | outline | rgb(7, 55, 114) none 3px |
| `h1` | maxWidth | none |
| `h1` | width | 1180px |
| `h1` | minHeight | 0px |
| `h2` | color | rgb(7, 55, 114) |
| `h2` | backgroundColor | rgba(0, 0, 0, 0) |
| `h2` | fontFamily | Merriweather, serif |
| `h2` | fontSize | 30px |
| `h2` | fontWeight | 700 |
| `h2` | lineHeight | 36px |
| `h2` | padding | 0px |
| `h2` | margin | 0px 0px 15px |
| `h2` | border | 0px none rgb(7, 55, 114) |
| `h2` | borderRadius | 0px |
| `h2` | textTransform | none |
| `h2` | letterSpacing | -0.3px |
| `h2` | boxShadow | none |
| `h2` | outline | rgb(7, 55, 114) none 3px |
| `h2` | maxWidth | none |
| `h2` | width | auto |
| `h2` | minHeight | 0px |
| `label` | color | rgb(55, 55, 55) |
| `label` | backgroundColor | rgba(0, 0, 0, 0) |
| `label` | fontFamily | Montserrat, sans-serif |
| `label` | fontSize | 16.875px |
| `label` | fontWeight | 400 |
| `label` | lineHeight | 29.5312px |
| `label` | padding | 0px |
| `label` | margin | 0px 8px 0px 0px |
| `label` | border | 0px none rgb(55, 55, 55) |
| `label` | borderRadius | 0px |
| `label` | textTransform | none |
| `label` | letterSpacing | 0.16875px |
| `label` | boxShadow | none |
| `label` | outline | rgb(55, 55, 55) none 3px |
| `label` | maxWidth | none |
| `label` | width | auto |
| `label` | minHeight | 0px |
| `input` | color | rgb(255, 255, 255) |
| `input` | backgroundColor | rgb(0, 42, 80) |
| `input` | fontFamily | Montserrat, sans-serif |
| `input` | fontSize | 14px |
| `input` | fontWeight | 400 |
| `input` | lineHeight | 22.4px |
| `input` | padding | 10px 30px 10px 31px |
| `input` | margin | 0px |
| `input` | border | 1px solid rgba(0, 0, 0, 0) |
| `input` | borderRadius | 3px |
| `input` | textTransform | none |
| `input` | letterSpacing | normal |
| `input` | boxShadow | none |
| `input` | outline | rgb(255, 255, 255) none 3px |
| `input` | maxWidth | 100% |
| `input` | width | 100% |
| `input` | minHeight | 0px |
| `input[type=text]` | color | rgb(255, 255, 255) |
| `input[type=text]` | backgroundColor | rgb(0, 42, 80) |
| `input[type=text]` | fontFamily | Montserrat, sans-serif |
| `input[type=text]` | fontSize | 14px |
| `input[type=text]` | fontWeight | 400 |
| `input[type=text]` | lineHeight | 22.4px |
| `input[type=text]` | padding | 10px 30px 10px 31px |
| `input[type=text]` | margin | 0px |
| `input[type=text]` | border | 1px solid rgba(0, 0, 0, 0) |
| `input[type=text]` | borderRadius | 3px |
| `input[type=text]` | textTransform | none |
| `input[type=text]` | letterSpacing | normal |
| `input[type=text]` | boxShadow | none |
| `input[type=text]` | outline | rgb(255, 255, 255) none 3px |
| `input[type=text]` | maxWidth | 100% |
| `input[type=text]` | width | 100% |
| `input[type=text]` | minHeight | 0px |
| `button` | color | rgba(0, 0, 0, 0) |
| `button` | backgroundColor | rgba(0, 0, 0, 0) |
| `button` | fontFamily | Montserrat, sans-serif |
| `button` | fontSize | 16.875px |
| `button` | fontWeight | 400 |
| `button` | lineHeight | 29.5312px |
| `button` | padding | 1px 6px |
| `button` | margin | 0px |
| `button` | border | 0px none rgba(0, 0, 0, 0) |
| `button` | borderRadius | 0px |
| `button` | textTransform | none |
| `button` | letterSpacing | normal |
| `button` | boxShadow | none |
| `button` | outline | rgba(0, 0, 0, 0) none 3px |
| `button` | maxWidth | none |
| `button` | width | 24px |
| `button` | minHeight | 0px |
| `#fsHeader` | color | rgb(55, 55, 55) |
| `#fsHeader` | backgroundColor | rgba(0, 0, 0, 0) |
| `#fsHeader` | fontFamily | Montserrat, sans-serif |
| `#fsHeader` | fontSize | 16.875px |
| `#fsHeader` | fontWeight | 400 |
| `#fsHeader` | lineHeight | 29.5312px |
| `#fsHeader` | padding | 0px 0px 80px |
| `#fsHeader` | margin | 0px |
| `#fsHeader` | border | 0px none rgb(55, 55, 55) |
| `#fsHeader` | borderRadius | 0px |
| `#fsHeader` | textTransform | none |
| `#fsHeader` | letterSpacing | 0.16875px |
| `#fsHeader` | boxShadow | none |
| `#fsHeader` | outline | rgb(55, 55, 55) none 3px |
| `#fsHeader` | maxWidth | none |
| `#fsHeader` | width | 1280px |
| `#fsHeader` | minHeight | 0px |
| `.fsTabsNav` | color | rgb(55, 55, 55) |
| `.fsTabsNav` | backgroundColor | rgba(0, 0, 0, 0) |
| `.fsTabsNav` | fontFamily | Montserrat, sans-serif |
| `.fsTabsNav` | fontSize | 15px |
| `.fsTabsNav` | fontWeight | 400 |
| `.fsTabsNav` | lineHeight | 24.375px |
| `.fsTabsNav` | padding | 0px |
| `.fsTabsNav` | margin | 0px |
| `.fsTabsNav` | border | 0px none rgb(55, 55, 55) |
| `.fsTabsNav` | borderRadius | 0px |
| `.fsTabsNav` | textTransform | none |
| `.fsTabsNav` | letterSpacing | 0.16875px |
| `.fsTabsNav` | boxShadow | none |
| `.fsTabsNav` | outline | rgb(55, 55, 55) none 3px |
| `.fsTabsNav` | maxWidth | none |
| `.fsTabsNav` | width | 1080px |
| `.fsTabsNav` | minHeight | 0px |

---

## Feeds

- **URL:** https://www.lisd.net/production2/social-elements/feeds
- **Extracted:** 2026-06-23

### Content

### Feeds _(fsPageTitle)_

#### Feeds _(fsElementTitle)_

- Finalsite
@Finalsite
X (Twitter) Logo
Photo from Finalsite on Twitter at 6/23/26 at 9:00AM

Your next great social media strategy might already be working at another school!

We gathered tips, strategies, and examples from 20+ schools and districts around the world and compiled them into one free guide.

Get your free copy: finalsite.com/resources/soci… https://t.co/Fw74A5wrJC

Reply
Retweet
Like
23 Jun 2026 _(feed-item j-x-twitter j-x-twitter-bg image-post Finalsite  j-username  is-not-youTube)_

Your next great social media strategy might already be working at another school!

We gathered tips, strategies, and examples from 20+ schools and districts around the world and compiled them into one free guide.

Get your free copy: finalsite.com/resources/soci… https://t.co/Fw74A5wrJC

- Reply

- Retweet

- Like

- Finalsite
@Finalsite
X (Twitter) Logo
Photo from Finalsite on Twitter at 6/18/26 at 9:00AM

Not sure what to post during summer break?

With 120+ content ideas, the July-September edition of the Social Media Calendar for Schools will fuel your social media strategy all summer long.☀️📱

Download your free copy & start posting: bit.ly/39Pn3vp https://t.co/5HQLnm2KA2

Reply
Retweet
Like
18 Jun 2026 _(feed-item j-x-twitter j-x-twitter-bg image-post Finalsite  j-username  is-not-youTube)_

Not sure what to post during summer break?

With 120+ content ideas, the July-September edition of the Social Media Calendar for Schools will fuel your social media strategy all summer long.☀️📱

Download your free copy & start posting: bit.ly/39Pn3vp https://t.co/5HQLnm2KA2

- Reply

- Retweet

- Like

- Finalsite
@Finalsite
X (Twitter) Logo
Photo from Finalsite on Twitter at 6/17/26 at 9:00AM

Our Social Media Day for Schools keynote speaker is Brianna Doe, CEO & founder of Verbatim, a top-ranked influencer marketing agency. You won’t want to miss this or any of our sessions!

Save your free spot: finalsite.com/free-courses/s… https://t.co/oslHJcyJLg

Reply
Retweet
Like
17 Jun 2026 _(feed-item j-x-twitter j-x-twitter-bg image-post Finalsite  j-username  is-not-youTube)_

Our Social Media Day for Schools keynote speaker is Brianna Doe, CEO & founder of Verbatim, a top-ranked influencer marketing agency. You won’t want to miss this or any of our sessions!

Save your free spot: finalsite.com/free-courses/s… https://t.co/oslHJcyJLg

- Reply

- Retweet

- Like

### Widget Elements

- **`fsEl_2421`** — `fsElement fsFeeds fsGrid`
  - data-use-new: `true`

### :root CSS Variables

| Variable | Value |
|----------|-------|
| `--primary-color-h` | 213.08 |
| `--primary-color-s` | 88.43% |
| `--primary-color-l` | 23.73% |
| `--primary-color-hsl` | var(--primary-color-h), var(--primary-color-s), var(--primary-color-l) |
| `--primary-color` | #073772 |
| `--secondary-color-h` | 43.1 |
| `--secondary-color-s` | 88.38% |
| `--secondary-color-l` | 52.75% |
| `--secondary-color-hsl` | var(--secondary-color-h), var(--secondary-color-s), var(--secondary-color-l) |
| `--secondary-color` | #f1b51c |
| `--display-accred-panel` | none |
| `--has-sticky-header` | false |
| `--is-district-site` | false |
| `--header-logo-enabled` | true |
| `--footer-logo-enabled` | true |
| `--header-logo-bg` | false |
| `--footer-logo-bg` | false |
| `--header-logo-height-class` | height-medium |
| `--footer-logo-height-class` | height-medium |
| `--show-header-location-name` | false |
| `--show-header-location-title` | false |
| `--show-header-subtitle` | false |
| `--show-header-motto` | false |
| `--show-footer-title` | false |
| `--weglot-display-position` | default |

### Computed Styles

| Selector | Property | Value |
|----------|----------|-------|
| `body` | color | rgb(55, 55, 55) |
| `body` | backgroundColor | rgba(0, 0, 0, 0) |
| `body` | fontFamily | Montserrat, sans-serif |
| `body` | fontSize | 16.875px |
| `body` | fontWeight | 400 |
| `body` | lineHeight | 29.5312px |
| `body` | padding | 0px |
| `body` | margin | 0px |
| `body` | border | 0px none rgb(55, 55, 55) |
| `body` | borderRadius | 0px |
| `body` | textTransform | none |
| `body` | letterSpacing | 0.16875px |
| `body` | boxShadow | none |
| `body` | outline | rgb(55, 55, 55) none 3px |
| `body` | maxWidth | none |
| `body` | width | 1280px |
| `body` | minHeight | 0px |
| `h1` | color | rgb(7, 55, 114) |
| `h1` | backgroundColor | rgba(0, 0, 0, 0) |
| `h1` | fontFamily | Merriweather, serif |
| `h1` | fontSize | 41.25px |
| `h1` | fontWeight | 700 |
| `h1` | lineHeight | 47.4375px |
| `h1` | padding | 0px |
| `h1` | margin | 0px 0px 20px |
| `h1` | border | 0px none rgb(7, 55, 114) |
| `h1` | borderRadius | 0px |
| `h1` | textTransform | none |
| `h1` | letterSpacing | -0.825px |
| `h1` | boxShadow | none |
| `h1` | outline | rgb(7, 55, 114) none 3px |
| `h1` | maxWidth | none |
| `h1` | width | 1180px |
| `h1` | minHeight | 0px |
| `h2` | color | rgb(7, 55, 114) |
| `h2` | backgroundColor | rgba(0, 0, 0, 0) |
| `h2` | fontFamily | Merriweather, serif |
| `h2` | fontSize | 30px |
| `h2` | fontWeight | 700 |
| `h2` | lineHeight | 36px |
| `h2` | padding | 0px |
| `h2` | margin | 0px 0px 15px |
| `h2` | border | 0px none rgb(7, 55, 114) |
| `h2` | borderRadius | 0px |
| `h2` | textTransform | none |
| `h2` | letterSpacing | -0.3px |
| `h2` | boxShadow | none |
| `h2` | outline | rgb(7, 55, 114) none 3px |
| `h2` | maxWidth | none |
| `h2` | width | auto |
| `h2` | minHeight | 0px |
| `#fsPageContent a` | color | rgb(58, 58, 58) |
| `#fsPageContent a` | backgroundColor | rgba(0, 0, 0, 0) |
| `#fsPageContent a` | fontFamily | "Helvetica Neue", Helvetica, Arial, sans-serif |
| `#fsPageContent a` | fontSize | 16px |
| `#fsPageContent a` | fontWeight | 500 |
| `#fsPageContent a` | lineHeight | 22.4px |
| `#fsPageContent a` | padding | 0px |
| `#fsPageContent a` | margin | 0px |
| `#fsPageContent a` | border | 0px none rgb(58, 58, 58) |
| `#fsPageContent a` | borderRadius | 0px |
| `#fsPageContent a` | textTransform | none |
| `#fsPageContent a` | letterSpacing | 0.16875px |
| `#fsPageContent a` | boxShadow | none |
| `#fsPageContent a` | outline | rgb(58, 58, 58) none 3px |
| `#fsPageContent a` | maxWidth | none |
| `#fsPageContent a` | width | auto |
| `#fsPageContent a` | minHeight | 0px |
| `label` | color | rgb(55, 55, 55) |
| `label` | backgroundColor | rgba(0, 0, 0, 0) |
| `label` | fontFamily | Montserrat, sans-serif |
| `label` | fontSize | 16.875px |
| `label` | fontWeight | 400 |
| `label` | lineHeight | 29.5312px |
| `label` | padding | 0px |
| `label` | margin | 0px 8px 0px 0px |
| `label` | border | 0px none rgb(55, 55, 55) |
| `label` | borderRadius | 0px |
| `label` | textTransform | none |
| `label` | letterSpacing | 0.16875px |
| `label` | boxShadow | none |
| `label` | outline | rgb(55, 55, 55) none 3px |
| `label` | maxWidth | none |
| `label` | width | auto |
| `label` | minHeight | 0px |
| `input` | color | rgb(255, 255, 255) |
| `input` | backgroundColor | rgb(0, 42, 80) |
| `input` | fontFamily | Montserrat, sans-serif |
| `input` | fontSize | 14px |
| `input` | fontWeight | 400 |
| `input` | lineHeight | 22.4px |
| `input` | padding | 10px 30px 10px 31px |
| `input` | margin | 0px |
| `input` | border | 1px solid rgba(0, 0, 0, 0) |
| `input` | borderRadius | 3px |
| `input` | textTransform | none |
| `input` | letterSpacing | normal |
| `input` | boxShadow | none |
| `input` | outline | rgb(255, 255, 255) none 3px |
| `input` | maxWidth | 100% |
| `input` | width | 100% |
| `input` | minHeight | 0px |
| `input[type=text]` | color | rgb(255, 255, 255) |
| `input[type=text]` | backgroundColor | rgb(0, 42, 80) |
| `input[type=text]` | fontFamily | Montserrat, sans-serif |
| `input[type=text]` | fontSize | 14px |
| `input[type=text]` | fontWeight | 400 |
| `input[type=text]` | lineHeight | 22.4px |
| `input[type=text]` | padding | 10px 30px 10px 31px |
| `input[type=text]` | margin | 0px |
| `input[type=text]` | border | 1px solid rgba(0, 0, 0, 0) |
| `input[type=text]` | borderRadius | 3px |
| `input[type=text]` | textTransform | none |
| `input[type=text]` | letterSpacing | normal |
| `input[type=text]` | boxShadow | none |
| `input[type=text]` | outline | rgb(255, 255, 255) none 3px |
| `input[type=text]` | maxWidth | 100% |
| `input[type=text]` | width | 100% |
| `input[type=text]` | minHeight | 0px |
| `button` | color | rgba(0, 0, 0, 0) |
| `button` | backgroundColor | rgba(0, 0, 0, 0) |
| `button` | fontFamily | Montserrat, sans-serif |
| `button` | fontSize | 16.875px |
| `button` | fontWeight | 400 |
| `button` | lineHeight | 29.5312px |
| `button` | padding | 1px 6px |
| `button` | margin | 0px |
| `button` | border | 0px none rgba(0, 0, 0, 0) |
| `button` | borderRadius | 0px |
| `button` | textTransform | none |
| `button` | letterSpacing | normal |
| `button` | boxShadow | none |
| `button` | outline | rgba(0, 0, 0, 0) none 3px |
| `button` | maxWidth | none |
| `button` | width | 24px |
| `button` | minHeight | 0px |
| `#fsHeader` | color | rgb(55, 55, 55) |
| `#fsHeader` | backgroundColor | rgba(0, 0, 0, 0) |
| `#fsHeader` | fontFamily | Montserrat, sans-serif |
| `#fsHeader` | fontSize | 16.875px |
| `#fsHeader` | fontWeight | 400 |
| `#fsHeader` | lineHeight | 29.5312px |
| `#fsHeader` | padding | 0px 0px 80px |
| `#fsHeader` | margin | 0px |
| `#fsHeader` | border | 0px none rgb(55, 55, 55) |
| `#fsHeader` | borderRadius | 0px |
| `#fsHeader` | textTransform | none |
| `#fsHeader` | letterSpacing | 0.16875px |
| `#fsHeader` | boxShadow | none |
| `#fsHeader` | outline | rgb(55, 55, 55) none 3px |
| `#fsHeader` | maxWidth | none |
| `#fsHeader` | width | 1280px |
| `#fsHeader` | minHeight | 0px |
| `.fsTabsNav` | color | rgb(55, 55, 55) |
| `.fsTabsNav` | backgroundColor | rgba(0, 0, 0, 0) |
| `.fsTabsNav` | fontFamily | Montserrat, sans-serif |
| `.fsTabsNav` | fontSize | 15px |
| `.fsTabsNav` | fontWeight | 400 |
| `.fsTabsNav` | lineHeight | 24.375px |
| `.fsTabsNav` | padding | 0px |
| `.fsTabsNav` | margin | 0px |
| `.fsTabsNav` | border | 0px none rgb(55, 55, 55) |
| `.fsTabsNav` | borderRadius | 0px |
| `.fsTabsNav` | textTransform | none |
| `.fsTabsNav` | letterSpacing | 0.16875px |
| `.fsTabsNav` | boxShadow | none |
| `.fsTabsNav` | outline | rgb(55, 55, 55) none 3px |
| `.fsTabsNav` | maxWidth | none |
| `.fsTabsNav` | width | 1080px |
| `.fsTabsNav` | minHeight | 0px |
| `.fsFeeds` | color | rgb(55, 55, 55) |
| `.fsFeeds` | backgroundColor | rgba(0, 0, 0, 0) |
| `.fsFeeds` | fontFamily | Montserrat, sans-serif |
| `.fsFeeds` | fontSize | 16.875px |
| `.fsFeeds` | fontWeight | 400 |
| `.fsFeeds` | lineHeight | 29.5312px |
| `.fsFeeds` | padding | 0px |
| `.fsFeeds` | margin | 0px |
| `.fsFeeds` | border | 0px none rgb(55, 55, 55) |
| `.fsFeeds` | borderRadius | 0px |
| `.fsFeeds` | textTransform | none |
| `.fsFeeds` | letterSpacing | 0.16875px |
| `.fsFeeds` | boxShadow | none |
| `.fsFeeds` | outline | rgb(55, 55, 55) none 3px |
| `.fsFeeds` | maxWidth | none |
| `.fsFeeds` | width | 1180px |
| `.fsFeeds` | minHeight | 0px |

---

