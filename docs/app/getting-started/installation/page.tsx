import { PageHeader } from '../../ui/PageHeader';
import { Preview } from '../../ui/Preview';

export default function InstallationPage() {
  return (
    <>
      <PageHeader
        overline="Getting Started"
        title="Installation"
        description="Get Pylon set up in your project in under a minute."
      />

      <h2>Install via npm</h2>
      <Preview code="npm install @pylon/core">
        <pre><code>npm install @pylon/core</code></pre>
      </Preview>

      <h2>Import the CSS</h2>
      <p>
        The simplest way to use Pylon is to import the compiled CSS. This gives you all component
        styles, typography classes, and utility helpers.
      </p>
      <Preview code={`// In your main CSS or layout file\n@import '@pylon/core/dist/pylon.css';`}>
        <pre><code>@import &apos;@pylon/core/dist/pylon.css&apos;;</code></pre>
      </Preview>

      <h2>Import Sass source (recommended)</h2>
      <p>
        For full access to design tokens, mixins, and variables, import the Sass source directly.
        This lets you use Pylon&apos;s <code>$color-brand</code>, <code>$spacing</code>, and
        <code>text-style()</code> mixin in your own components.
      </p>
      <Preview code={`// Import tokens for variables\n@use '@pylon/core/src/scss/tokens' as *;\n\n// Import typography for the text-style() mixin\n@use '@pylon/core/src/scss/typography' as *;\n\n// Use in your own components\n.my-component {\n  color: $color-brand;\n  padding: map.get($spacing, 4);\n  @include text-style('body');\n}`}>
        <pre><code>{`@use '@pylon/core/src/scss/tokens' as *;\n@use '@pylon/core/src/scss/typography' as *;`}</code></pre>
      </Preview>

      <h2>Load the font</h2>
      <p>
        Pylon uses <strong>Plus Jakarta Sans</strong> (SIL Open Font License). Add it via Google Fonts:
      </p>
      <Preview code={`<link\n  href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"\n  rel="stylesheet"\n/>`}>
        <pre><code>{`<link\n  href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"\n  rel="stylesheet"\n/>`}</code></pre>
      </Preview>

      <h2>Install React Aria</h2>
      <p>
        Pylon&apos;s component styles are designed to pair with React Aria Components.
        Install it alongside Pylon:
      </p>
      <Preview code="npm install react-aria-components">
        <pre><code>npm install react-aria-components</code></pre>
      </Preview>
    </>
  );
}
