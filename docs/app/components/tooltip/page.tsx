import { PageHeader } from '../../ui/PageHeader';
import { Preview } from '../../ui/Preview';

export default function TooltipPage() {
  return (
    <>
      <PageHeader
        overline="Components"
        title="Tooltip & Menu"
        description="Contextual overlays for hints and dropdown menus. Pairs with React Aria Tooltip, Popover, and Menu."
      />

      <h2>Tooltip</h2>
      <Preview
        title="Tooltip (static preview)"
        code={`<TooltipTrigger>\n  <Button className="pylon-btn pylon-btn--sm pylon-btn--secondary">Hover me</Button>\n  <Tooltip className="pylon-tooltip">Helpful hint text</Tooltip>\n</TooltipTrigger>`}
      >
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <button className="pylon-btn pylon-btn--sm pylon-btn--secondary">Hover me</button>
          <div className="pylon-tooltip" style={{ position: 'absolute', top: '-36px', left: '50%', transform: 'translateX(-50%)', whiteSpace: 'nowrap' }}>
            Helpful hint text
          </div>
        </div>
      </Preview>

      <h2>Menu</h2>
      <Preview
        title="Dropdown menu (static preview)"
        code={`<MenuTrigger>\n  <Button className="pylon-btn pylon-btn--sm pylon-btn--secondary">Options</Button>\n  <Popover className="pylon-popover">\n    <Menu className="pylon-menu">\n      <MenuItem className="pylon-menu__item">Edit</MenuItem>\n      <MenuItem className="pylon-menu__item">Duplicate</MenuItem>\n      <div className="pylon-menu__separator" />\n      <MenuItem className="pylon-menu__item pylon-menu__item--danger">Delete</MenuItem>\n    </Menu>\n  </Popover>\n</MenuTrigger>`}
        direction="col"
      >
        <div className="pylon-popover" style={{ width: '200px' }}>
          <div className="pylon-menu">
            <div className="pylon-menu__section-title">Actions</div>
            <div className="pylon-menu__item">Edit</div>
            <div className="pylon-menu__item">Duplicate</div>
            <div className="pylon-menu__item">Move to folder</div>
            <div className="pylon-menu__separator" />
            <div className="pylon-menu__item pylon-menu__item--danger">Delete</div>
          </div>
        </div>
      </Preview>

      <h2>Popover</h2>
      <Preview
        title="Popover"
        code={`<DialogTrigger>\n  <Button className="pylon-btn pylon-btn--sm pylon-btn--secondary">Info</Button>\n  <Popover className="pylon-popover">\n    <div className="pylon-popover__body">Popover content here</div>\n  </Popover>\n</DialogTrigger>`}
      >
        <div className="pylon-popover" style={{ width: '280px' }}>
          <div className="pylon-popover__body">
            <p className="body" style={{ margin: 0 }}>This is a popover with custom content. It can contain any elements.</p>
          </div>
        </div>
      </Preview>

      <h2>API</h2>
      <table>
        <thead><tr><th>Class</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td><code>pylon-tooltip</code></td><td>Tooltip container (dark bg, white text)</td></tr>
          <tr><td><code>pylon-popover</code></td><td>Popover container</td></tr>
          <tr><td><code>pylon-popover__body</code></td><td>Popover content area</td></tr>
          <tr><td><code>pylon-menu</code></td><td>Menu container</td></tr>
          <tr><td><code>pylon-menu__item</code></td><td>Menu item</td></tr>
          <tr><td><code>pylon-menu__item--danger</code></td><td>Destructive menu item (red)</td></tr>
          <tr><td><code>pylon-menu__separator</code></td><td>Divider line between items</td></tr>
          <tr><td><code>pylon-menu__section-title</code></td><td>Section label within menu</td></tr>
        </tbody>
      </table>
    </>
  );
}
