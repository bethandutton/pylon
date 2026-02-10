# CLAUDE.md — Pylon AI-First Development Rules

This is the instruction file for AI assistants (Claude, Copilot, etc.) working on the Pylon component library. This project is AI-first — AI is the primary development tool.

## Project overview

Pylon is an enterprise SaaS component library built on React Aria. It provides Sass-based styling that pairs with React Aria's accessible component primitives. The design system enforces visual consistency through built-in tokens for colours, typography, spacing, and component layout.

### Key principles

1. **Accessibility is non-negotiable** — Every component MUST work with React Aria and meet WCAG AA standards. All interactive elements must support keyboard navigation, screen readers, and visible focus indicators.

2. **The design system is enforced, not suggested** — Component padding, spacing, border-radius, and visual application are built into the component styles. Consumers should NOT override these. Only theme-level tokens (colours, fonts, scale) are exposed for customisation.

3. **Theming over hardcoding** — All colours MUST use CSS custom properties (`--pylon-*`) so themes and dark mode work at runtime. Sass variables are for build-time convenience only.

4. **Every theme has light and dark mode** — When creating or modifying themes, ALWAYS provide both light and dark mode values.

5. **Font scaling must be preserved** — All font sizes use `calc(Xrem * var(--pylon-font-scale))` so the entire type scale can be adjusted by consumers. Never use fixed pixel values for font sizes.

## When creating a new component

Follow this checklist every time:

1. **Create the Sass file** at `src/scss/components/_componentname.scss`
2. **Use the token system** — Import tokens with `@use '../tokens' as *` and typography with `@use '../typography' as *`
3. **Use `map.get()`** for all spacing, font sizes, etc. Never hardcode pixel values for spacing.
4. **Support React Aria states** — Style these data attributes: `data-hovered`, `data-pressed`, `data-selected`, `data-disabled`, `data-invalid`, `data-focus-visible`, `data-entering`, `data-exiting`
5. **Add focus styles** — Every interactive element needs `&[data-focus-visible] { box-shadow: $focus-ring; }`
6. **Register in the index** — Add `@forward 'componentname'` to `src/scss/components/_index.scss`
7. **Build and verify** — Run `npm run build` and check for zero warnings
8. **Document the component** — Create a page at `docs/app/components/componentname/page.tsx` with:
   - PageHeader with overline, title, and description
   - Preview blocks showing every variant and state
   - Code examples using React Aria
   - Use cases explaining when to use this component
   - Full API table listing all CSS classes
9. **Register in the sidebar** — Add the component to `docs/app/ui/Sidebar.tsx` navigation
10. **Update the README** — Add the component to the components table in `README.md`

## Component naming convention

- BEM with `pylon-` prefix: `pylon-componentname`, `pylon-componentname__element`, `pylon-componentname--modifier`
- Size modifiers: `--sm`, `--md`, `--lg`
- State styling via React Aria data attributes, not CSS classes

## File structure

```
src/scss/
├── _tokens.scss          # Design tokens (Sass variables + maps)
├── _theme.scss           # CSS custom properties, dark mode, font scaling
├── _reset.scss           # CSS reset + ARIA helpers (sr-only, skip-link)
├── _typography.scss      # text-style() mixin + text classes
├── _utilities.scss       # Spacing, flex, display helpers
├── main.scss             # Entry point
└── components/
    ├── _index.scss       # Forwards all components
    └── _*.scss           # Individual component files

docs/app/
├── layout.tsx            # Root layout with sidebar
├── ui/                   # Docs site UI components (Sidebar, Preview, PageHeader)
├── getting-started/      # Installation and usage guides
├── foundations/          # Colours, typography, spacing docs
└── components/           # One page per component
```

## Colour system

10 core colours. Do not add more without explicit approval:

- `$color-dark` (#1A1A18) — High emphasis
- `$color-base` (#3D3D3A) — Default text
- `$color-muted` (#6B6B66) — Secondary
- `$color-subtle` (#B0B0AC) — Disabled
- `$color-border` (#D4D4D1) — Borders
- `$color-surface` (#F7F7F6) — Backgrounds
- `$color-white` (#FFFFFF) — Page bg
- `$color-brand` (#6B8BA4) — Primary accent
- `$color-brand-dark` (#456A84) — Hover
- `$color-brand-light` (#E8EFF4) — Selected

Plus semantic colours: `$color-success`, `$color-warning`, `$color-error` (each with a `-light` variant).

## What NOT to do

- Do NOT add new colour shades (e.g. no `$color-brand-200`, `$color-brand-300` scales)
- Do NOT use `@import` — use `@use` and `@forward` only
- Do NOT use `map-get()` — use `map.get()` with `@use 'sass:map'`
- Do NOT use `darken()` / `lighten()` — use `color.adjust()` with `@use 'sass:color'`
- Do NOT use `@extend` — use mixins instead
- Do NOT use hardcoded pixel values for spacing or font sizes
- Do NOT let consumers override component-level padding/spacing — it's enforced
- Do NOT create a component without documentation
- Do NOT create a component without React Aria focus/state support

## Build commands

```bash
npm run build        # Compile Sass to dist/pylon.css
npm run build:min    # Compile minified to dist/pylon.min.css
npm run watch        # Watch mode

# Docs site
cd docs && npm run dev    # Development server
cd docs && npm run build  # Production build
```

## Testing changes

After any change to Sass files:
1. Run `npm run build` — must produce zero warnings
2. Check `dist/pylon.css` output is valid
3. Visually verify in the docs site (`cd docs && npm run dev`)
