import { PageHeader } from '../../ui/PageHeader';
import { Preview } from '../../ui/Preview';

export default function ModalPage() {
  return (
    <>
      <PageHeader
        overline="Components"
        title="Modal"
        description="Dialogs and overlays for focused interactions. Pairs with React Aria Dialog and Modal."
      />

      <h2>Structure</h2>
      <Preview
        title="Modal layout (static preview)"
        code={`<ModalOverlay className="pylon-overlay">\n  <Modal className="pylon-modal">\n    <Dialog>\n      <div className="pylon-modal__header">\n        <h2 className="pylon-modal__title">Confirm action</h2>\n      </div>\n      <div className="pylon-modal__body">\n        Are you sure you want to proceed?\n      </div>\n      <div className="pylon-modal__footer">\n        <Button className="pylon-btn pylon-btn--sm pylon-btn--secondary">Cancel</Button>\n        <Button className="pylon-btn pylon-btn--sm pylon-btn--primary">Confirm</Button>\n      </div>\n    </Dialog>\n  </Modal>\n</ModalOverlay>`}
        direction="col"
      >
        <div style={{ width: '100%', maxWidth: '500px', border: '1px solid #D4D4D1', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 15px rgba(61,61,58,0.06)' }}>
          <div className="pylon-modal__header">
            <h2 className="h4" style={{ margin: 0 }}>Confirm action</h2>
          </div>
          <div className="pylon-modal__body">
            <p className="body" style={{ margin: 0 }}>Are you sure you want to delete this project? This action cannot be undone.</p>
          </div>
          <div className="pylon-modal__footer" style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px', padding: '16px 20px', borderTop: '1px solid #D4D4D1' }}>
            <button className="pylon-btn pylon-btn--sm pylon-btn--secondary">Cancel</button>
            <button className="pylon-btn pylon-btn--sm pylon-btn--danger">Delete Project</button>
          </div>
        </div>
      </Preview>

      <h2>Sizes</h2>
      <table>
        <thead><tr><th>Class</th><th>Max width</th></tr></thead>
        <tbody>
          <tr><td><code>pylon-modal--sm</code></td><td>400px</td></tr>
          <tr><td><code>pylon-modal</code></td><td>560px (default)</td></tr>
          <tr><td><code>pylon-modal--lg</code></td><td>720px</td></tr>
          <tr><td><code>pylon-modal--full</code></td><td>90vw</td></tr>
        </tbody>
      </table>

      <h2>React Aria usage</h2>
      <pre><code>{`import { DialogTrigger, Modal, ModalOverlay, Dialog, Button } from 'react-aria-components';\n\n<DialogTrigger>\n  <Button className="pylon-btn pylon-btn--md pylon-btn--primary">\n    Open Modal\n  </Button>\n  <ModalOverlay className="pylon-overlay">\n    <Modal className="pylon-modal">\n      <Dialog>\n        {({ close }) => (\n          <>\n            <div className="pylon-modal__header">\n              <h2 className="pylon-modal__title">Title</h2>\n            </div>\n            <div className="pylon-modal__body">\n              Modal content here\n            </div>\n            <div className="pylon-modal__footer">\n              <Button onPress={close} className="pylon-btn pylon-btn--sm pylon-btn--secondary">\n                Cancel\n              </Button>\n              <Button className="pylon-btn pylon-btn--sm pylon-btn--primary">\n                Save\n              </Button>\n            </div>\n          </>\n        )}\n      </Dialog>\n    </Modal>\n  </ModalOverlay>\n</DialogTrigger>`}</code></pre>

      <h2>API</h2>
      <table>
        <thead><tr><th>Class</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td><code>pylon-overlay</code></td><td>Background overlay with backdrop</td></tr>
          <tr><td><code>pylon-modal</code></td><td>Modal container</td></tr>
          <tr><td><code>pylon-modal--sm / --lg / --full</code></td><td>Size variants</td></tr>
          <tr><td><code>pylon-modal__header</code></td><td>Header with title</td></tr>
          <tr><td><code>pylon-modal__title</code></td><td>Modal title text</td></tr>
          <tr><td><code>pylon-modal__body</code></td><td>Content area</td></tr>
          <tr><td><code>pylon-modal__footer</code></td><td>Actions area</td></tr>
        </tbody>
      </table>
    </>
  );
}
