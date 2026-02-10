import { PageHeader } from '../../ui/PageHeader';
import { Preview } from '../../ui/Preview';

export default function BadgePage() {
  return (
    <>
      <PageHeader
        overline="Components"
        title="Badge"
        description="Small status indicators for labels, tags, and counts."
      />

      <h2>Variants</h2>
      <Preview
        title="All variants"
        code={`<span className="pylon-badge pylon-badge--neutral">Neutral</span>\n<span className="pylon-badge pylon-badge--brand">Brand</span>\n<span className="pylon-badge pylon-badge--success">Success</span>\n<span className="pylon-badge pylon-badge--warning">Warning</span>\n<span className="pylon-badge pylon-badge--error">Error</span>`}
      >
        <span className="pylon-badge pylon-badge--neutral">Neutral</span>
        <span className="pylon-badge pylon-badge--brand">Brand</span>
        <span className="pylon-badge pylon-badge--success">Success</span>
        <span className="pylon-badge pylon-badge--warning">Warning</span>
        <span className="pylon-badge pylon-badge--error">Error</span>
      </Preview>

      <h2>Use cases</h2>
      <Preview
        title="Status labels"
        code={`<span className="pylon-badge pylon-badge--success">Active</span>\n<span className="pylon-badge pylon-badge--warning">Pending</span>\n<span className="pylon-badge pylon-badge--error">Expired</span>\n<span className="pylon-badge pylon-badge--neutral">Draft</span>`}
      >
        <span className="pylon-badge pylon-badge--success">Active</span>
        <span className="pylon-badge pylon-badge--warning">Pending</span>
        <span className="pylon-badge pylon-badge--error">Expired</span>
        <span className="pylon-badge pylon-badge--neutral">Draft</span>
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
          <tr><td><code>pylon-badge</code></td><td>Base class (required)</td></tr>
          <tr><td><code>pylon-badge--neutral</code></td><td>Grey background</td></tr>
          <tr><td><code>pylon-badge--brand</code></td><td>Blue background</td></tr>
          <tr><td><code>pylon-badge--success</code></td><td>Green background</td></tr>
          <tr><td><code>pylon-badge--warning</code></td><td>Yellow background</td></tr>
          <tr><td><code>pylon-badge--error</code></td><td>Red background</td></tr>
        </tbody>
      </table>
    </>
  );
}
