import { PageHeader } from '../../ui/PageHeader';
import { Preview } from '../../ui/Preview';

export default function ButtonPage() {
  return (
    <>
      <PageHeader
        overline="Components"
        title="Button"
        description="Triggers actions. Pairs with React Aria Button component."
      />

      <h2>Variants</h2>
      <Preview
        title="Primary"
        code={`<Button className="pylon-btn pylon-btn--md pylon-btn--primary">\n  Primary\n</Button>`}
      >
        <button className="pylon-btn pylon-btn--md pylon-btn--primary">Primary</button>
      </Preview>

      <Preview
        title="Secondary"
        code={`<Button className="pylon-btn pylon-btn--md pylon-btn--secondary">\n  Secondary\n</Button>`}
      >
        <button className="pylon-btn pylon-btn--md pylon-btn--secondary">Secondary</button>
      </Preview>

      <Preview
        title="Ghost"
        code={`<Button className="pylon-btn pylon-btn--md pylon-btn--ghost">\n  Ghost\n</Button>`}
      >
        <button className="pylon-btn pylon-btn--md pylon-btn--ghost">Ghost</button>
      </Preview>

      <Preview
        title="Danger"
        code={`<Button className="pylon-btn pylon-btn--md pylon-btn--danger">\n  Delete\n</Button>`}
      >
        <button className="pylon-btn pylon-btn--md pylon-btn--danger">Delete</button>
      </Preview>

      <h2>Sizes</h2>
      <Preview
        title="Small / Medium / Large"
        code={`<Button className="pylon-btn pylon-btn--sm pylon-btn--primary">Small</Button>\n<Button className="pylon-btn pylon-btn--md pylon-btn--primary">Medium</Button>\n<Button className="pylon-btn pylon-btn--lg pylon-btn--primary">Large</Button>`}
      >
        <button className="pylon-btn pylon-btn--sm pylon-btn--primary">Small</button>
        <button className="pylon-btn pylon-btn--md pylon-btn--primary">Medium</button>
        <button className="pylon-btn pylon-btn--lg pylon-btn--primary">Large</button>
      </Preview>

      <h2>States</h2>
      <Preview
        title="Disabled"
        code={`<Button className="pylon-btn pylon-btn--md pylon-btn--primary" isDisabled>\n  Disabled\n</Button>`}
      >
        <button className="pylon-btn pylon-btn--md pylon-btn--primary" disabled>Disabled</button>
        <button className="pylon-btn pylon-btn--md pylon-btn--secondary" disabled>Disabled</button>
      </Preview>

      <Preview
        title="Full width"
        code={`<Button className="pylon-btn pylon-btn--md pylon-btn--primary pylon-btn--block">\n  Full Width\n</Button>`}
      >
        <button className="pylon-btn pylon-btn--md pylon-btn--primary pylon-btn--block" style={{ width: '100%' }}>Full Width</button>
      </Preview>

      <h2>React Aria usage</h2>
      <pre><code>{`import { Button } from 'react-aria-components';\n\n<Button className="pylon-btn pylon-btn--md pylon-btn--primary">\n  Save Changes\n</Button>\n\n// React Aria automatically handles:\n// - Keyboard activation (Enter/Space)\n// - Focus management\n// - data-hovered, data-pressed, data-focus-visible states\n// - data-disabled for disabled buttons`}</code></pre>

      <h2>API</h2>
      <table>
        <thead>
          <tr>
            <th>Class</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><code>pylon-btn</code></td><td>Base class (required)</td></tr>
          <tr><td><code>pylon-btn--primary</code></td><td>Brand fill + white text</td></tr>
          <tr><td><code>pylon-btn--secondary</code></td><td>White fill + border</td></tr>
          <tr><td><code>pylon-btn--ghost</code></td><td>Transparent background</td></tr>
          <tr><td><code>pylon-btn--danger</code></td><td>Red fill for destructive actions</td></tr>
          <tr><td><code>pylon-btn--sm</code></td><td>32px height</td></tr>
          <tr><td><code>pylon-btn--md</code></td><td>38px height (default)</td></tr>
          <tr><td><code>pylon-btn--lg</code></td><td>44px height</td></tr>
          <tr><td><code>pylon-btn--block</code></td><td>Full width</td></tr>
          <tr><td><code>pylon-btn--icon</code></td><td>Square icon-only button</td></tr>
        </tbody>
      </table>
    </>
  );
}
