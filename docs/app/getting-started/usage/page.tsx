import { PageHeader } from '../../ui/PageHeader';
import { Preview } from '../../ui/Preview';

export default function UsagePage() {
  return (
    <>
      <PageHeader
        overline="Getting Started"
        title="Usage"
        description="How to use Pylon components in your React application."
      />

      <h2>Using with React Aria</h2>
      <p>
        Pylon provides CSS classes that pair with React Aria&apos;s component library.
        Apply the Pylon class names to React Aria components:
      </p>
      <Preview code={`import { Button } from 'react-aria-components';\n\nfunction MyApp() {\n  return (\n    <Button className="pylon-btn pylon-btn--md pylon-btn--primary">\n      Save Changes\n    </Button>\n  );\n}`}>
        <button className="pylon-btn pylon-btn--md pylon-btn--primary">
          Save Changes
        </button>
      </Preview>

      <h2>Class naming convention</h2>
      <p>
        All Pylon component classes follow BEM naming with a <code>pylon-</code> prefix:
      </p>
      <ul>
        <li><code>pylon-btn</code> — Block (base component)</li>
        <li><code>pylon-btn__icon</code> — Element (child of component)</li>
        <li><code>pylon-btn--primary</code> — Modifier (variant)</li>
        <li><code>pylon-btn--lg</code> — Modifier (size)</li>
      </ul>

      <h2>Typography classes</h2>
      <p>
        Use typography classes directly on any element:
      </p>
      <Preview code={`<h1 className="display-1">Hero Heading</h1>\n<p className="body-lg">Intro paragraph text</p>\n<span className="caption text--muted">Metadata caption</span>`}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%' }}>
          <div className="display-2">Hero Heading</div>
          <p className="body-lg" style={{ margin: 0 }}>Intro paragraph text</p>
          <span className="caption text--muted">Metadata caption</span>
        </div>
      </Preview>

      <h2>Using the text-style mixin</h2>
      <p>
        For custom components, use the <code>text-style()</code> Sass mixin directly:
      </p>
      <Preview code={`@use '@pylon/core/src/scss/tokens' as *;\n@use '@pylon/core/src/scss/typography' as *;\n\n.my-card-title {\n  @include text-style('h4');\n  margin-bottom: map.get($spacing, 2);\n}\n\n.my-card-body {\n  @include text-style('body');\n}`}>
        <pre><code>{`@include text-style('h4');`}</code></pre>
      </Preview>

      <h2>Utility classes</h2>
      <p>
        Pylon includes spacing and layout utilities for quick prototyping:
      </p>
      <Preview code={`<div className="flex items-center gap-4 p-4">\n  <div className="flex-1">Content</div>\n  <button className="pylon-btn pylon-btn--sm pylon-btn--secondary">Action</button>\n</div>`}>
        <div className="flex items-center gap-4 p-4 border rounded-lg w-full">
          <div style={{ flex: 1 }} className="body">Content area</div>
          <button className="pylon-btn pylon-btn--sm pylon-btn--secondary">Action</button>
        </div>
      </Preview>
    </>
  );
}
