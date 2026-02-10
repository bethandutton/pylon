import { PageHeader } from '../../ui/PageHeader';
import { Preview } from '../../ui/Preview';

export default function TablePage() {
  return (
    <>
      <PageHeader
        overline="Components"
        title="Table"
        description="Data tables with sorting, selection, and density options. Pairs with React Aria Table."
      />

      <h2>Default</h2>
      <Preview
        title="Basic table"
        code={`<table className="pylon-table">\n  <thead className="pylon-table__head">\n    <tr>\n      <th className="pylon-table__header-cell">Name</th>\n      <th className="pylon-table__header-cell">Role</th>\n      <th className="pylon-table__header-cell">Status</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr className="pylon-table__row">\n      <td className="pylon-table__cell">Jane Cooper</td>\n      <td className="pylon-table__cell">Admin</td>\n      <td className="pylon-table__cell">Active</td>\n    </tr>\n  </tbody>\n</table>`}
        direction="col"
      >
        <table className="pylon-table" style={{ width: '100%' }}>
          <thead className="pylon-table__head">
            <tr>
              <th className="pylon-table__header-cell">Name</th>
              <th className="pylon-table__header-cell">Role</th>
              <th className="pylon-table__header-cell">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="pylon-table__row">
              <td className="pylon-table__cell">Jane Cooper</td>
              <td className="pylon-table__cell">Admin</td>
              <td className="pylon-table__cell"><span className="pylon-badge pylon-badge--success">Active</span></td>
            </tr>
            <tr className="pylon-table__row">
              <td className="pylon-table__cell">Robert Fox</td>
              <td className="pylon-table__cell">Editor</td>
              <td className="pylon-table__cell"><span className="pylon-badge pylon-badge--warning">Pending</span></td>
            </tr>
            <tr className="pylon-table__row">
              <td className="pylon-table__cell">Emily Chen</td>
              <td className="pylon-table__cell">Viewer</td>
              <td className="pylon-table__cell"><span className="pylon-badge pylon-badge--neutral">Inactive</span></td>
            </tr>
          </tbody>
        </table>
      </Preview>

      <h2>Compact</h2>
      <Preview
        title="Compact density"
        code={`<table className="pylon-table pylon-table--compact">...</table>`}
        direction="col"
      >
        <table className="pylon-table pylon-table--compact" style={{ width: '100%' }}>
          <thead className="pylon-table__head">
            <tr>
              <th className="pylon-table__header-cell">Name</th>
              <th className="pylon-table__header-cell">Email</th>
              <th className="pylon-table__header-cell">Role</th>
            </tr>
          </thead>
          <tbody>
            <tr className="pylon-table__row"><td className="pylon-table__cell">Jane Cooper</td><td className="pylon-table__cell">jane@example.com</td><td className="pylon-table__cell">Admin</td></tr>
            <tr className="pylon-table__row"><td className="pylon-table__cell">Robert Fox</td><td className="pylon-table__cell">robert@example.com</td><td className="pylon-table__cell">Editor</td></tr>
            <tr className="pylon-table__row"><td className="pylon-table__cell">Emily Chen</td><td className="pylon-table__cell">emily@example.com</td><td className="pylon-table__cell">Viewer</td></tr>
          </tbody>
        </table>
      </Preview>

      <h2>Striped</h2>
      <Preview
        title="Striped rows"
        code={`<table className="pylon-table pylon-table--striped">...</table>`}
        direction="col"
      >
        <table className="pylon-table pylon-table--striped" style={{ width: '100%' }}>
          <thead className="pylon-table__head">
            <tr>
              <th className="pylon-table__header-cell">Name</th>
              <th className="pylon-table__header-cell">Amount</th>
              <th className="pylon-table__header-cell">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr className="pylon-table__row"><td className="pylon-table__cell">Invoice #001</td><td className="pylon-table__cell">$1,200.00</td><td className="pylon-table__cell">Jan 15, 2026</td></tr>
            <tr className="pylon-table__row"><td className="pylon-table__cell">Invoice #002</td><td className="pylon-table__cell">$890.00</td><td className="pylon-table__cell">Jan 22, 2026</td></tr>
            <tr className="pylon-table__row"><td className="pylon-table__cell">Invoice #003</td><td className="pylon-table__cell">$2,450.00</td><td className="pylon-table__cell">Feb 1, 2026</td></tr>
            <tr className="pylon-table__row"><td className="pylon-table__cell">Invoice #004</td><td className="pylon-table__cell">$670.00</td><td className="pylon-table__cell">Feb 8, 2026</td></tr>
          </tbody>
        </table>
      </Preview>

      <h2>API</h2>
      <table>
        <thead><tr><th>Class</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td><code>pylon-table</code></td><td>Base table</td></tr>
          <tr><td><code>pylon-table--compact</code></td><td>Reduced padding</td></tr>
          <tr><td><code>pylon-table--striped</code></td><td>Alternating row backgrounds</td></tr>
          <tr><td><code>pylon-table__head</code></td><td>Table header</td></tr>
          <tr><td><code>pylon-table__header-cell</code></td><td>Header cell</td></tr>
          <tr><td><code>pylon-table__row</code></td><td>Table row (supports hover, selected)</td></tr>
          <tr><td><code>pylon-table__cell</code></td><td>Table cell</td></tr>
        </tbody>
      </table>
    </>
  );
}
