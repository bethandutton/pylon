import { PageHeader } from '../../ui/PageHeader';
import { Preview } from '../../ui/Preview';

export default function CardPage() {
  return (
    <>
      <PageHeader
        overline="Components"
        title="Card"
        description="A container for grouping related content. Supports bordered, shadow, and interactive variants."
      />

      <h2>Variants</h2>
      <Preview
        title="Default (bordered)"
        code={`<div className="pylon-card">\n  <div className="pylon-card__header">\n    <h3 className="h5">Card Title</h3>\n  </div>\n  <div className="pylon-card__body">\n    <p className="body">Card content goes here.</p>\n  </div>\n</div>`}
        direction="col"
      >
        <div className="pylon-card" style={{ width: '100%', maxWidth: '400px' }}>
          <div className="pylon-card__header">
            <h3 className="h5" style={{ margin: 0 }}>Card Title</h3>
          </div>
          <div className="pylon-card__body">
            <p className="body" style={{ margin: 0 }}>Card content goes here. This is a default bordered card.</p>
          </div>
        </div>
      </Preview>

      <Preview
        title="With shadow"
        code={`<div className="pylon-card pylon-card--shadow">\n  <div className="pylon-card__body">Shadow card</div>\n</div>`}
        direction="col"
      >
        <div className="pylon-card pylon-card--shadow" style={{ width: '100%', maxWidth: '400px' }}>
          <div className="pylon-card__body">
            <p className="body" style={{ margin: 0 }}>This card uses a subtle shadow instead of a border.</p>
          </div>
        </div>
      </Preview>

      <Preview
        title="Elevated"
        code={`<div className="pylon-card pylon-card--elevated">\n  <div className="pylon-card__body">Elevated card</div>\n</div>`}
        direction="col"
      >
        <div className="pylon-card pylon-card--elevated" style={{ width: '100%', maxWidth: '400px' }}>
          <div className="pylon-card__body">
            <p className="body" style={{ margin: 0 }}>Elevated card with a stronger shadow.</p>
          </div>
        </div>
      </Preview>

      <h2>With footer</h2>
      <Preview
        title="Header + Body + Footer"
        code={`<div className="pylon-card">\n  <div className="pylon-card__header">Title</div>\n  <div className="pylon-card__body">Content</div>\n  <div className="pylon-card__footer">Footer</div>\n</div>`}
        direction="col"
      >
        <div className="pylon-card" style={{ width: '100%', maxWidth: '400px' }}>
          <div className="pylon-card__header">
            <h3 className="h5" style={{ margin: 0 }}>Project Settings</h3>
          </div>
          <div className="pylon-card__body">
            <p className="body" style={{ margin: 0 }}>Configure your project name, description, and visibility settings.</p>
          </div>
          <div className="pylon-card__footer" style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
            <button className="pylon-btn pylon-btn--sm pylon-btn--secondary">Cancel</button>
            <button className="pylon-btn pylon-btn--sm pylon-btn--primary">Save</button>
          </div>
        </div>
      </Preview>

      <h2>API</h2>
      <table>
        <thead>
          <tr>
            <th>Class</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><code>pylon-card</code></td><td>Base card (bordered)</td></tr>
          <tr><td><code>pylon-card--shadow</code></td><td>Subtle shadow, no border</td></tr>
          <tr><td><code>pylon-card--elevated</code></td><td>Stronger shadow</td></tr>
          <tr><td><code>pylon-card--interactive</code></td><td>Hover/focus states for clickable cards</td></tr>
          <tr><td><code>pylon-card__header</code></td><td>Card header section</td></tr>
          <tr><td><code>pylon-card__body</code></td><td>Card body section</td></tr>
          <tr><td><code>pylon-card__footer</code></td><td>Card footer section (subtle background)</td></tr>
        </tbody>
      </table>
    </>
  );
}
