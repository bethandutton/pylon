import { PageHeader } from '../../ui/PageHeader';
import { Preview } from '../../ui/Preview';

export default function ThemingPage() {
  return (
    <>
      <PageHeader
        overline="Foundations"
        title="Theming"
        description="Pylon supports runtime theming, dark mode, and font scaling via CSS custom properties."
      />

      <h2>Dark mode</h2>
      <p>
        Every theme includes both light and dark mode. Activate dark mode with a data attribute
        on your root element:
      </p>
      <Preview
        code={`<!-- Light mode (default) -->\n<html>\n\n<!-- Dark mode -->\n<html data-theme="dark">\n\n<!-- System preference -->\n<html data-theme="system">\n\n<!-- Or use the class -->\n<body class="pylon-dark">`}
      >
        <pre><code>{`<html data-theme="dark">`}</code></pre>
      </Preview>

      <h2>Font scaling</h2>
      <p>
        All text sizes scale relative to <code>--pylon-font-scale</code>. Use the built-in
        presets or set a custom value:
      </p>

      <table>
        <thead>
          <tr>
            <th>Attribute</th>
            <th>Scale</th>
            <th>Body text</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><code>data-font-scale=&quot;xs&quot;</code></td><td>85%</td><td>~12.75px</td></tr>
          <tr><td><code>data-font-scale=&quot;sm&quot;</code></td><td>92.5%</td><td>~13.9px</td></tr>
          <tr><td><code>data-font-scale=&quot;md&quot;</code></td><td>100% (default)</td><td>15px</td></tr>
          <tr><td><code>data-font-scale=&quot;lg&quot;</code></td><td>110%</td><td>~16.5px</td></tr>
          <tr><td><code>data-font-scale=&quot;xl&quot;</code></td><td>120%</td><td>18px</td></tr>
        </tbody>
      </table>

      <Preview
        code={`<!-- Preset -->\n<html data-font-scale="lg">\n\n<!-- Custom value -->\n<style>\n  :root { --pylon-font-scale: 1.15; }\n</style>`}
      >
        <pre><code>{`:root { --pylon-font-scale: 1.15; }`}</code></pre>
      </Preview>

      <h2>Custom themes</h2>
      <p>
        Create a custom theme by overriding Pylon&apos;s CSS custom properties. Only colour and font
        tokens are exposed for theming — component padding, spacing, and layout are enforced by
        the design system and should not be overridden.
      </p>

      <Preview
        code={`[data-theme="ocean"] {\n  --pylon-color-brand:       #2563eb;\n  --pylon-color-brand-dark:  #1d4ed8;\n  --pylon-color-brand-light: #eff6ff;\n}\n\n[data-theme="ocean"].pylon-dark,\n[data-theme="ocean"][data-mode="dark"] {\n  --pylon-color-brand:       #60a5fa;\n  --pylon-color-brand-dark:  #93c5fd;\n  --pylon-color-brand-light: #1e3a5f;\n}`}
      >
        <pre><code>{`[data-theme="ocean"] {\n  --pylon-color-brand: #2563eb;\n}`}</code></pre>
      </Preview>

      <h2>Available CSS custom properties</h2>
      <table>
        <thead>
          <tr>
            <th>Property</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><code>--pylon-color-dark</code></td><td>High emphasis text</td></tr>
          <tr><td><code>--pylon-color-base</code></td><td>Default text</td></tr>
          <tr><td><code>--pylon-color-muted</code></td><td>Secondary text</td></tr>
          <tr><td><code>--pylon-color-subtle</code></td><td>Disabled / placeholder</td></tr>
          <tr><td><code>--pylon-color-border</code></td><td>Borders, dividers</td></tr>
          <tr><td><code>--pylon-color-surface</code></td><td>Card backgrounds</td></tr>
          <tr><td><code>--pylon-color-white</code></td><td>Page background</td></tr>
          <tr><td><code>--pylon-color-bg</code></td><td>Root background</td></tr>
          <tr><td><code>--pylon-color-brand</code></td><td>Primary accent</td></tr>
          <tr><td><code>--pylon-color-brand-dark</code></td><td>Hover / active accent</td></tr>
          <tr><td><code>--pylon-color-brand-light</code></td><td>Selected / subtle highlights</td></tr>
          <tr><td><code>--pylon-color-success</code></td><td>Success state</td></tr>
          <tr><td><code>--pylon-color-warning</code></td><td>Warning state</td></tr>
          <tr><td><code>--pylon-color-error</code></td><td>Error state</td></tr>
          <tr><td><code>--pylon-font-scale</code></td><td>Font size multiplier (default: 1)</td></tr>
          <tr><td><code>--pylon-font-family</code></td><td>Base font family</td></tr>
          <tr><td><code>--pylon-shadow-sm/md/lg</code></td><td>Box shadows</td></tr>
          <tr><td><code>--pylon-focus-ring</code></td><td>Focus indicator</td></tr>
        </tbody>
      </table>

      <h2>What you can and cannot customise</h2>
      <table>
        <thead>
          <tr>
            <th>Customisable</th>
            <th>Not customisable</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Colours (brand, semantic, neutrals)</td><td>Component padding</td></tr>
          <tr><td>Font family</td><td>Component spacing</td></tr>
          <tr><td>Font scale</td><td>Border radius on components</td></tr>
          <tr><td>Shadow intensity</td><td>Component layout structure</td></tr>
          <tr><td>Focus ring colour</td><td>Typography line-height ratios</td></tr>
        </tbody>
      </table>
    </>
  );
}
