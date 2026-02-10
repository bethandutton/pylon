import { PageHeader } from '../../ui/PageHeader';

const spacingScale = [
  { key: '0', rem: '0', px: '0px' },
  { key: '1', rem: '0.25rem', px: '4px' },
  { key: '2', rem: '0.5rem', px: '8px' },
  { key: '3', rem: '0.75rem', px: '12px' },
  { key: '4', rem: '1rem', px: '16px' },
  { key: '5', rem: '1.25rem', px: '20px' },
  { key: '6', rem: '1.5rem', px: '24px' },
  { key: '8', rem: '2rem', px: '32px' },
  { key: '10', rem: '2.5rem', px: '40px' },
  { key: '12', rem: '3rem', px: '48px' },
  { key: '16', rem: '4rem', px: '64px' },
  { key: '20', rem: '5rem', px: '80px' },
];

export default function SpacingPage() {
  return (
    <>
      <PageHeader
        overline="Foundations"
        title="Spacing"
        description="A 4px base unit system. Consistent spacing from 0 to 80px."
      />

      <h2>Scale</h2>
      <div>
        {spacingScale.map((s) => (
          <div key={s.key} className="docs-spacing-row">
            <div className="docs-spacing-row__label">{s.key}</div>
            <div
              className="docs-spacing-row__bar"
              style={{ width: s.px === '0px' ? '2px' : s.px }}
            />
            <div className="docs-spacing-row__value">{s.rem} ({s.px})</div>
          </div>
        ))}
      </div>

      <h2>Utility classes</h2>
      <p>
        Spacing utilities follow the pattern <code>.{'{property}'}-{'{scale}'}</code>:
      </p>
      <table>
        <thead>
          <tr>
            <th>Prefix</th>
            <th>Property</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><code>m-</code></td><td>margin (all sides)</td></tr>
          <tr><td><code>mt- / mr- / mb- / ml-</code></td><td>margin individual side</td></tr>
          <tr><td><code>mx- / my-</code></td><td>margin horizontal / vertical</td></tr>
          <tr><td><code>p-</code></td><td>padding (all sides)</td></tr>
          <tr><td><code>pt- / pr- / pb- / pl-</code></td><td>padding individual side</td></tr>
          <tr><td><code>px- / py-</code></td><td>padding horizontal / vertical</td></tr>
          <tr><td><code>gap-</code></td><td>flex/grid gap</td></tr>
        </tbody>
      </table>

      <h3>Examples</h3>
      <table>
        <thead>
          <tr>
            <th>Class</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><code>.p-4</code></td><td>padding: 1rem (16px)</td></tr>
          <tr><td><code>.mt-6</code></td><td>margin-top: 1.5rem (24px)</td></tr>
          <tr><td><code>.gap-3</code></td><td>gap: 0.75rem (12px)</td></tr>
          <tr><td><code>.px-8</code></td><td>padding-left & right: 2rem (32px)</td></tr>
        </tbody>
      </table>

      <h2>Sass usage</h2>
      <pre><code>{`@use 'sass:map';\n@use '@pylon/core/src/scss/tokens' as *;\n\n.my-component {\n  padding: map.get($spacing, 4);       // 16px\n  margin-bottom: map.get($spacing, 6); // 24px\n}`}</code></pre>
    </>
  );
}
