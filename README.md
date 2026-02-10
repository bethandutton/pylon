# Pylon

An enterprise SaaS component library built on [React Aria](https://react-aria.adobe.com/), designed with accessibility, theming, and developer experience as first-class concerns.

## Features

- **Built on React Aria** — Full WCAG accessibility, keyboard navigation, screen reader support, and ARIA patterns
- **Themeable** — CSS custom properties for runtime theme switching, dark mode, and font scaling
- **Light & Dark mode** — Built-in dark mode via `data-theme="dark"` or `prefers-color-scheme`
- **Font scaling** — Adjust the base font size across the entire system with a single variable
- **10-colour system** — A deliberately constrained palette that eliminates decision fatigue
- **Plus Jakarta Sans** — A warm, professional open-source typeface (SIL Open Font License)
- **Modern Sass** — Uses `@use`/`@forward` module system with zero deprecation warnings
- **Enforced consistency** — Component padding, spacing, and layout are built in and not meant to be overridden

## Installation

```bash
npm install @pylon/core
```

### Load the font

Add Plus Jakarta Sans via Google Fonts:

```html
<link
  href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
  rel="stylesheet"
/>
```

### Install React Aria

Pylon's styles are designed to pair with React Aria Components:

```bash
npm install react-aria-components
```

## Usage

### Option 1: Import compiled CSS

```css
@import '@pylon/core/dist/pylon.css';
```

### Option 2: Import Sass source (recommended)

This gives you access to variables, mixins, and tokens:

```scss
@use '@pylon/core/src/scss/tokens' as *;
@use '@pylon/core/src/scss/typography' as *;

.my-component {
  @include text-style('body');
  color: $color-brand;
  padding: map.get($spacing, 4);
}
```

### Using components

Apply Pylon class names to React Aria components:

```tsx
import { Button } from 'react-aria-components';

<Button className="pylon-btn pylon-btn--md pylon-btn--primary">
  Save Changes
</Button>
```

## Theming

### Dark mode

Add `data-theme="dark"` to your root element:

```html
<html data-theme="dark">
```

Or use the class-based approach:

```html
<body class="pylon-dark">
```

For automatic OS preference detection:

```html
<html data-theme="system">
```

### Font scaling

Scale all typography with a single attribute:

```html
<html data-font-scale="lg">
```

Available presets: `xs` (85%), `sm` (92.5%), `md` (100%), `lg` (110%), `xl` (120%)

Or set a custom scale:

```css
:root {
  --pylon-font-scale: 1.15;
}
```

### Custom themes

Override CSS custom properties to create your own theme:

```css
[data-theme="ocean"] {
  --pylon-color-brand: #2563eb;
  --pylon-color-brand-dark: #1d4ed8;
  --pylon-color-brand-light: #eff6ff;
}
```

## Components

| Component | Class prefix | React Aria pairing |
|---|---|---|
| Button | `pylon-btn` | `<Button>` |
| Input | `pylon-input` / `pylon-field` | `<TextField>` |
| Textarea | `pylon-textarea` | `<TextField>` |
| Select | `pylon-select` | `<Select>` |
| Card | `pylon-card` | — |
| Badge | `pylon-badge` | — |
| Alert | `pylon-alert` | — |
| Table | `pylon-table` | `<Table>` |
| Modal | `pylon-modal` / `pylon-overlay` | `<Modal>` / `<Dialog>` |
| Tabs | `pylon-tabs` | `<Tabs>` |
| Nav | `pylon-nav` | `<ListBox>` |
| Breadcrumbs | `pylon-breadcrumbs` | `<Breadcrumbs>` |
| Checkbox | `pylon-checkbox` | `<Checkbox>` |
| Switch | `pylon-switch` | `<Switch>` |
| Tooltip | `pylon-tooltip` | `<Tooltip>` |
| Popover | `pylon-popover` | `<Popover>` |
| Menu | `pylon-menu` | `<Menu>` |

## Design tokens

### Colours

| Token | Value | Use |
|---|---|---|
| `$color-dark` | `#1A1A18` | Headlines, high emphasis |
| `$color-base` | `#3D3D3A` | Default text |
| `$color-muted` | `#6B6B66` | Secondary text |
| `$color-subtle` | `#B0B0AC` | Disabled, placeholder |
| `$color-border` | `#D4D4D1` | Lines, dividers |
| `$color-surface` | `#F7F7F6` | Card backgrounds |
| `$color-white` | `#FFFFFF` | Page background |
| `$color-brand` | `#6B8BA4` | Primary accent |
| `$color-brand-dark` | `#456A84` | Hover / active |
| `$color-brand-light` | `#E8EFF4` | Selected, highlights |

### Spacing

4px base unit system: `0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20`

### Typography

15 text styles from `display-1` (48px) down to `small` (11px), all with built-in colour, weight, line-height, and letter-spacing.

## Accessibility

Pylon is built on React Aria, which provides:

- Full keyboard navigation for all interactive components
- Screen reader announcements and live regions
- Focus management and visible focus indicators (`data-focus-visible`)
- ARIA roles, states, and properties
- WCAG AA colour contrast compliance

All components use React Aria's `data-*` attribute selectors for state styling (`data-hovered`, `data-pressed`, `data-selected`, `data-disabled`, `data-invalid`, `data-focus-visible`).

## Project structure

```
pylon/
├── src/scss/
│   ├── _tokens.scss          # Design tokens
│   ├── _theme.scss           # CSS custom properties, dark mode, font scaling
│   ├── _reset.scss           # CSS reset + ARIA helpers
│   ├── _typography.scss      # text-style() mixin + classes
│   ├── _utilities.scss       # Layout and spacing helpers
│   └── components/           # All component styles
├── dist/
│   ├── pylon.css             # Compiled CSS
│   └── pylon.min.css         # Minified CSS
└── docs/                     # Documentation site (Next.js)
```

## Development

```bash
# Build CSS
npm run build

# Build minified CSS
npm run build:min

# Watch for changes
npm run watch

# Run docs site
cd docs && npm install && npm run dev
```

## License

MIT
