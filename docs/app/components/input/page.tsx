import { PageHeader } from '../../ui/PageHeader';
import { Preview } from '../../ui/Preview';

export default function InputPage() {
  return (
    <>
      <PageHeader
        overline="Components"
        title="Input"
        description="Text fields, textareas, and selects. Pairs with React Aria TextField, NumberField, and SearchField."
      />

      <h2>Text field</h2>
      <Preview
        title="Default"
        code={`<div className="pylon-field">\n  <label className="pylon-field__label">Email address</label>\n  <input className="pylon-input" type="email" placeholder="you@example.com" />\n</div>`}
        direction="col"
      >
        <div className="pylon-field" style={{ width: '100%', maxWidth: '360px' }}>
          <label className="pylon-field__label">Email address</label>
          <input className="pylon-input" type="email" placeholder="you@example.com" />
        </div>
      </Preview>

      <Preview
        title="With description"
        code={`<div className="pylon-field">\n  <label className="pylon-field__label">Password</label>\n  <input className="pylon-input" type="password" />\n  <span className="pylon-field__description">Must be at least 8 characters</span>\n</div>`}
        direction="col"
      >
        <div className="pylon-field" style={{ width: '100%', maxWidth: '360px' }}>
          <label className="pylon-field__label">Password</label>
          <input className="pylon-input" type="password" />
          <span className="pylon-field__description">Must be at least 8 characters</span>
        </div>
      </Preview>

      <Preview
        title="Error state"
        code={`<div className="pylon-field">\n  <label className="pylon-field__label">Email</label>\n  <input className="pylon-input" data-invalid type="email" />\n  <span className="pylon-field__error">Please enter a valid email</span>\n</div>`}
        direction="col"
      >
        <div className="pylon-field" style={{ width: '100%', maxWidth: '360px' }}>
          <label className="pylon-field__label">Email</label>
          <input className="pylon-input" data-invalid="" type="email" />
          <span className="pylon-field__error">Please enter a valid email</span>
        </div>
      </Preview>

      <h2>Sizes</h2>
      <Preview
        title="Small / Default / Large"
        code={`<input className="pylon-input pylon-input--sm" placeholder="Small" />\n<input className="pylon-input" placeholder="Default" />\n<input className="pylon-input pylon-input--lg" placeholder="Large" />`}
        direction="col"
      >
        <input className="pylon-input pylon-input--sm" placeholder="Small" style={{ maxWidth: '360px' }} />
        <input className="pylon-input" placeholder="Default" style={{ maxWidth: '360px' }} />
        <input className="pylon-input pylon-input--lg" placeholder="Large" style={{ maxWidth: '360px' }} />
      </Preview>

      <h2>Textarea</h2>
      <Preview
        title="Textarea"
        code={`<div className="pylon-field">\n  <label className="pylon-field__label">Description</label>\n  <textarea className="pylon-textarea" placeholder="Enter a description..." />\n</div>`}
        direction="col"
      >
        <div className="pylon-field" style={{ width: '100%', maxWidth: '360px' }}>
          <label className="pylon-field__label">Description</label>
          <textarea className="pylon-textarea" placeholder="Enter a description..." />
        </div>
      </Preview>

      <h2>Select</h2>
      <Preview
        title="Select"
        code={`<div className="pylon-field">\n  <label className="pylon-field__label">Role</label>\n  <select className="pylon-select">\n    <option>Admin</option>\n    <option>Editor</option>\n    <option>Viewer</option>\n  </select>\n</div>`}
        direction="col"
      >
        <div className="pylon-field" style={{ width: '100%', maxWidth: '360px' }}>
          <label className="pylon-field__label">Role</label>
          <select className="pylon-select">
            <option>Admin</option>
            <option>Editor</option>
            <option>Viewer</option>
          </select>
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
          <tr><td><code>pylon-field</code></td><td>Field wrapper (label + input + description)</td></tr>
          <tr><td><code>pylon-field__label</code></td><td>Field label</td></tr>
          <tr><td><code>pylon-field__description</code></td><td>Helper text</td></tr>
          <tr><td><code>pylon-field__error</code></td><td>Error message</td></tr>
          <tr><td><code>pylon-input</code></td><td>Text input</td></tr>
          <tr><td><code>pylon-input--sm</code></td><td>Small input (32px)</td></tr>
          <tr><td><code>pylon-input--lg</code></td><td>Large input (44px)</td></tr>
          <tr><td><code>pylon-textarea</code></td><td>Textarea</td></tr>
          <tr><td><code>pylon-select</code></td><td>Select dropdown</td></tr>
        </tbody>
      </table>
    </>
  );
}
