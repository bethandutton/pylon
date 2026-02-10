import { PageHeader } from '../../ui/PageHeader';
import { Preview } from '../../ui/Preview';

export default function CheckboxPage() {
  return (
    <>
      <PageHeader
        overline="Components"
        title="Checkbox & Switch"
        description="Boolean inputs for toggling options. Pairs with React Aria Checkbox and Switch."
      />

      <h2>Checkbox</h2>
      <Preview
        title="States"
        code={`<Checkbox className="pylon-checkbox">\n  <div className="pylon-checkbox__box">&#10003;</div>\n  Enable notifications\n</Checkbox>`}
      >
        <label className="pylon-checkbox">
          <div className="pylon-checkbox__box" style={{ border: '1.5px solid #D4D4D1', width: '18px', height: '18px', borderRadius: '4px' }} />
          Unchecked option
        </label>
        <label className="pylon-checkbox" data-selected="">
          <div className="pylon-checkbox__box" style={{ background: '#6B8BA4', borderColor: '#6B8BA4', color: 'white', width: '18px', height: '18px', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px' }}>&#10003;</div>
          Checked option
        </label>
      </Preview>

      <h2>Switch</h2>
      <Preview
        title="Toggle switch"
        code={`<Switch className="pylon-switch">\n  <div className="pylon-switch__track">\n    <div className="pylon-switch__thumb" />\n  </div>\n  Dark mode\n</Switch>`}
      >
        <label className="pylon-switch">
          <div className="pylon-switch__track">
            <div className="pylon-switch__thumb" />
          </div>
          Inactive toggle
        </label>
        <label className="pylon-switch" data-selected="">
          <div className="pylon-switch__track" style={{ background: '#6B8BA4' }}>
            <div className="pylon-switch__thumb" style={{ transform: 'translateX(16px)' }} />
          </div>
          Active toggle
        </label>
      </Preview>

      <h2>React Aria usage</h2>
      <pre><code>{`import { Checkbox, Switch } from 'react-aria-components';\n\n<Checkbox className="pylon-checkbox">\n  {({ isSelected }) => (\n    <>\n      <div className="pylon-checkbox__box">\n        {isSelected && <CheckIcon />}\n      </div>\n      Enable notifications\n    </>\n  )}\n</Checkbox>\n\n<Switch className="pylon-switch">\n  {({ isSelected }) => (\n    <>\n      <div className="pylon-switch__track">\n        <div className="pylon-switch__thumb" />\n      </div>\n      Dark mode\n    </>\n  )}\n</Switch>`}</code></pre>

      <h2>API</h2>
      <table>
        <thead><tr><th>Class</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td><code>pylon-checkbox</code></td><td>Checkbox wrapper</td></tr>
          <tr><td><code>pylon-checkbox__box</code></td><td>Visual checkbox indicator</td></tr>
          <tr><td><code>pylon-switch</code></td><td>Switch wrapper</td></tr>
          <tr><td><code>pylon-switch__track</code></td><td>Switch track background</td></tr>
          <tr><td><code>pylon-switch__thumb</code></td><td>Switch thumb circle</td></tr>
        </tbody>
      </table>
    </>
  );
}
