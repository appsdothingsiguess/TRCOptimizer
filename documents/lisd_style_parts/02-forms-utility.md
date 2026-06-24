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
