import { PageHeader } from '../../ui/PageHeader';
import { Preview } from '../../ui/Preview';

export default function AlertPage() {
  return (
    <>
      <PageHeader
        overline="Components"
        title="Alert"
        description="Contextual feedback messages for user actions and system events."
      />

      <h2>Variants</h2>
      <Preview
        title="Info"
        code={`<div className="pylon-alert pylon-alert--info">\n  <div className="pylon-alert__content">\n    <div className="pylon-alert__title">Update available</div>\n    A new version is ready to install.\n  </div>\n</div>`}
        direction="col"
      >
        <div className="pylon-alert pylon-alert--info" style={{ width: '100%' }}>
          <div className="pylon-alert__content">
            <div className="pylon-alert__title">Update available</div>
            A new version is ready to install.
          </div>
        </div>
      </Preview>

      <Preview
        title="Success"
        code={`<div className="pylon-alert pylon-alert--success">\n  <div className="pylon-alert__content">\n    <div className="pylon-alert__title">Saved</div>\n    Your changes have been saved successfully.\n  </div>\n</div>`}
        direction="col"
      >
        <div className="pylon-alert pylon-alert--success" style={{ width: '100%' }}>
          <div className="pylon-alert__content">
            <div className="pylon-alert__title">Saved</div>
            Your changes have been saved successfully.
          </div>
        </div>
      </Preview>

      <Preview
        title="Warning"
        code={`<div className="pylon-alert pylon-alert--warning">\n  <div className="pylon-alert__content">\n    <div className="pylon-alert__title">Approaching limit</div>\n    You have used 90% of your storage quota.\n  </div>\n</div>`}
        direction="col"
      >
        <div className="pylon-alert pylon-alert--warning" style={{ width: '100%' }}>
          <div className="pylon-alert__content">
            <div className="pylon-alert__title">Approaching limit</div>
            You have used 90% of your storage quota.
          </div>
        </div>
      </Preview>

      <Preview
        title="Error"
        code={`<div className="pylon-alert pylon-alert--error">\n  <div className="pylon-alert__content">\n    <div className="pylon-alert__title">Connection failed</div>\n    Unable to reach the server. Please try again.\n  </div>\n</div>`}
        direction="col"
      >
        <div className="pylon-alert pylon-alert--error" style={{ width: '100%' }}>
          <div className="pylon-alert__content">
            <div className="pylon-alert__title">Connection failed</div>
            Unable to reach the server. Please try again.
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
          <tr><td><code>pylon-alert</code></td><td>Base class (required)</td></tr>
          <tr><td><code>pylon-alert--info</code></td><td>Blue info style</td></tr>
          <tr><td><code>pylon-alert--success</code></td><td>Green success style</td></tr>
          <tr><td><code>pylon-alert--warning</code></td><td>Yellow warning style</td></tr>
          <tr><td><code>pylon-alert--error</code></td><td>Red error style</td></tr>
          <tr><td><code>pylon-alert__content</code></td><td>Content wrapper</td></tr>
          <tr><td><code>pylon-alert__title</code></td><td>Bold title line</td></tr>
        </tbody>
      </table>
    </>
  );
}
