import { PageHeader } from '../../ui/PageHeader';

const typeScale = [
  { name: 'display-1', size: '3rem / 48px', weight: '700', sample: 'Display One' },
  { name: 'display-2', size: '2.5rem / 40px', weight: '700', sample: 'Display Two' },
  { name: 'h1', size: '2rem / 32px', weight: '700', sample: 'Heading One' },
  { name: 'h2', size: '1.75rem / 28px', weight: '600', sample: 'Heading Two' },
  { name: 'h3', size: '1.5rem / 24px', weight: '600', sample: 'Heading Three' },
  { name: 'h4', size: '1.25rem / 20px', weight: '600', sample: 'Heading Four' },
  { name: 'h5', size: '1.125rem / 18px', weight: '600', sample: 'Heading Five' },
  { name: 'h6', size: '1rem / 16px', weight: '600', sample: 'Heading Six' },
  { name: 'body-lg', size: '1.0625rem / 17px', weight: '400', sample: 'Large body text for introductory paragraphs' },
  { name: 'body', size: '0.9375rem / 15px', weight: '400', sample: 'Default body text used throughout the application' },
  { name: 'body-sm', size: '0.8125rem / 13px', weight: '400', sample: 'Small body text for dense content areas' },
  { name: 'caption', size: '0.75rem / 12px', weight: '500', sample: 'Caption text for metadata' },
  { name: 'overline', size: '0.6875rem / 11px', weight: '600', sample: 'OVERLINE SECTION LABEL' },
  { name: 'label', size: '0.8125rem / 13px', weight: '600', sample: 'Form field label' },
  { name: 'small', size: '0.6875rem / 11px', weight: '400', sample: 'Fine print and footnotes' },
];

export default function TypographyPage() {
  return (
    <>
      <PageHeader
        overline="Foundations"
        title="Typography"
        description="Plus Jakarta Sans — a warm, professional typeface. 15 text styles from display to fine print."
      />

      <h2>Font family</h2>
      <p>
        <strong>Primary:</strong> Plus Jakarta Sans (SIL Open Font License)<br />
        <strong>Monospace:</strong> JetBrains Mono
      </p>

      <h2>Type scale</h2>
      <div>
        {typeScale.map((t) => (
          <div key={t.name} className="docs-type-row">
            <div className="docs-type-row__label">{t.name}</div>
            <div className={`docs-type-row__sample ${t.name}`}>{t.sample}</div>
            <div className="docs-type-row__meta">{t.size} / {t.weight}</div>
          </div>
        ))}
      </div>

      <h2>Usage</h2>
      <p>Apply as CSS classes or use the Sass mixin:</p>
      <table>
        <thead>
          <tr>
            <th>Method</th>
            <th>Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>CSS class</td>
            <td><code>{`<h1 className="h1">Title</h1>`}</code></td>
          </tr>
          <tr>
            <td>Sass mixin</td>
            <td><code>{`@include text-style('h1');`}</code></td>
          </tr>
        </tbody>
      </table>

      <h2>Colour overrides</h2>
      <table>
        <thead>
          <tr>
            <th>Class</th>
            <th>Effect</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><code>.text--primary</code></td><td>Brand colour</td></tr>
          <tr><td><code>.text--muted</code></td><td>Secondary / muted</td></tr>
          <tr><td><code>.text--subtle</code></td><td>Disabled / placeholder</td></tr>
          <tr><td><code>.text--inverse</code></td><td>White (for dark backgrounds)</td></tr>
          <tr><td><code>.text--error</code></td><td>Error red</td></tr>
          <tr><td><code>.text--success</code></td><td>Success green</td></tr>
        </tbody>
      </table>
    </>
  );
}
