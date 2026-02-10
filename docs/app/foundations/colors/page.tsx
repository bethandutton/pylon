import { PageHeader } from '../../ui/PageHeader';

const coreColors = [
  { name: '$color-dark', value: '#1A1A18', desc: 'High emphasis text' },
  { name: '$color-base', value: '#3D3D3A', desc: 'Default text' },
  { name: '$color-muted', value: '#6B6B66', desc: 'Secondary text' },
  { name: '$color-subtle', value: '#B0B0AC', desc: 'Disabled / placeholder' },
  { name: '$color-border', value: '#D4D4D1', desc: 'Borders, dividers' },
  { name: '$color-surface', value: '#F7F7F6', desc: 'Backgrounds, cards' },
  { name: '$color-white', value: '#FFFFFF', desc: 'Page background' },
];

const brandColors = [
  { name: '$color-brand', value: '#6B8BA4', desc: 'Primary accent' },
  { name: '$color-brand-dark', value: '#456A84', desc: 'Hover / active' },
  { name: '$color-brand-light', value: '#E8EFF4', desc: 'Selected / subtle bg' },
];

const semanticColors = [
  { name: '$color-success', value: '#2E7D32', desc: 'Success states' },
  { name: '$color-warning', value: '#F57F17', desc: 'Warning states' },
  { name: '$color-error', value: '#C62828', desc: 'Error states' },
];

function ColorGrid({ colors }: { colors: typeof coreColors }) {
  return (
    <div className="docs-color-grid">
      {colors.map((c) => (
        <div key={c.name} className="docs-color-swatch">
          <div
            className="docs-color-swatch__preview"
            style={{ backgroundColor: c.value }}
          />
          <div className="docs-color-swatch__info">
            <div className="docs-color-swatch__name">{c.name}</div>
            <div className="docs-color-swatch__value">{c.value}</div>
            <div className="docs-color-swatch__value">{c.desc}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function ColorsPage() {
  return (
    <>
      <PageHeader
        overline="Foundations"
        title="Colors"
        description="A deliberately constrained 10-colour system. No guessing which shade to use."
      />

      <h2>Core neutrals</h2>
      <p>
        Seven neutral tones built from the off-black <code>#3D3D3A</code>. This gives
        the entire palette a warm, airy feel instead of harsh pure-black contrast.
      </p>
      <ColorGrid colors={coreColors} />

      <h2>Brand — Steel blue</h2>
      <p>
        One blue. Three variants. That&apos;s it. Use <code>$color-brand</code> for buttons,
        links, and accents. <code>$color-brand-dark</code> for hover states.
        <code>$color-brand-light</code> for selected rows and subtle highlights.
      </p>
      <ColorGrid colors={brandColors} />

      <h2>Semantic</h2>
      <p>
        For feedback states — success, warning, and error. Each has a light variant
        (<code>$color-success-light</code>, etc.) for background fills.
      </p>
      <ColorGrid colors={semanticColors} />

      <h2>Usage</h2>
      <table>
        <thead>
          <tr>
            <th>Token</th>
            <th>Use for</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><code>$color-dark</code></td><td>Headlines, high emphasis</td></tr>
          <tr><td><code>$color-base</code></td><td>Default text, icons</td></tr>
          <tr><td><code>$color-muted</code></td><td>Secondary text, captions</td></tr>
          <tr><td><code>$color-subtle</code></td><td>Disabled, placeholder</td></tr>
          <tr><td><code>$color-border</code></td><td>Lines, dividers</td></tr>
          <tr><td><code>$color-surface</code></td><td>Card / section backgrounds</td></tr>
          <tr><td><code>$color-white</code></td><td>Page background</td></tr>
          <tr><td><code>$color-brand</code></td><td>Buttons, links, accents</td></tr>
          <tr><td><code>$color-brand-dark</code></td><td>Hover / active</td></tr>
          <tr><td><code>$color-brand-light</code></td><td>Selected rows, subtle highlights</td></tr>
        </tbody>
      </table>
    </>
  );
}
