import { PageHeader } from '../../ui/PageHeader';
import { Preview } from '../../ui/Preview';

export default function TabsPage() {
  return (
    <>
      <PageHeader
        overline="Components"
        title="Tabs"
        description="Tabbed navigation for switching between content panels. Pairs with React Aria Tabs."
      />

      <h2>Default</h2>
      <Preview
        title="Tabs"
        code={`<Tabs>\n  <TabList className="pylon-tabs__list">\n    <Tab className="pylon-tabs__tab">Overview</Tab>\n    <Tab className="pylon-tabs__tab">Settings</Tab>\n    <Tab className="pylon-tabs__tab">Members</Tab>\n  </TabList>\n  <TabPanel className="pylon-tabs__panel">...</TabPanel>\n</Tabs>`}
        direction="col"
      >
        <div style={{ width: '100%' }}>
          <div className="pylon-tabs__list">
            <button className="pylon-tabs__tab" data-selected="">Overview</button>
            <button className="pylon-tabs__tab">Settings</button>
            <button className="pylon-tabs__tab">Members</button>
          </div>
          <div className="pylon-tabs__panel">
            <p className="body" style={{ margin: 0 }}>Overview content would appear here. Tabs automatically manage focus and keyboard navigation when using React Aria.</p>
          </div>
        </div>
      </Preview>

      <h2>Sidebar navigation</h2>
      <Preview
        title="Nav items"
        code={`<nav className="pylon-nav">\n  <div className="pylon-nav__section-title">Main</div>\n  <a className="pylon-nav__item pylon-nav__item--active">Dashboard</a>\n  <a className="pylon-nav__item">Projects</a>\n  <a className="pylon-nav__item">Team</a>\n</nav>`}
        direction="col"
      >
        <nav className="pylon-nav" style={{ width: '220px' }}>
          <div className="pylon-nav__section-title">Main</div>
          <a className="pylon-nav__item pylon-nav__item--active">Dashboard</a>
          <a className="pylon-nav__item">Projects</a>
          <a className="pylon-nav__item">Team</a>
          <div className="pylon-nav__section-title">Settings</div>
          <a className="pylon-nav__item">General</a>
          <a className="pylon-nav__item">Billing</a>
        </nav>
      </Preview>

      <h2>Breadcrumbs</h2>
      <Preview
        title="Breadcrumbs"
        code={`<nav className="pylon-breadcrumbs">\n  <a className="pylon-breadcrumbs__item">Home</a>\n  <span className="pylon-breadcrumbs__separator">/</span>\n  <a className="pylon-breadcrumbs__item">Projects</a>\n  <span className="pylon-breadcrumbs__separator">/</span>\n  <span className="pylon-breadcrumbs__item" data-current>Settings</span>\n</nav>`}
      >
        <nav className="pylon-breadcrumbs">
          <a className="pylon-breadcrumbs__item" href="#">Home</a>
          <span className="pylon-breadcrumbs__separator">/</span>
          <a className="pylon-breadcrumbs__item" href="#">Projects</a>
          <span className="pylon-breadcrumbs__separator">/</span>
          <span className="pylon-breadcrumbs__item" data-current="">Settings</span>
        </nav>
      </Preview>

      <h2>API</h2>
      <table>
        <thead><tr><th>Class</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td><code>pylon-tabs__list</code></td><td>Tab bar container</td></tr>
          <tr><td><code>pylon-tabs__tab</code></td><td>Individual tab</td></tr>
          <tr><td><code>pylon-tabs__panel</code></td><td>Tab content panel</td></tr>
          <tr><td><code>pylon-nav</code></td><td>Sidebar nav container</td></tr>
          <tr><td><code>pylon-nav__item</code></td><td>Nav link</td></tr>
          <tr><td><code>pylon-nav__item--active</code></td><td>Active nav link</td></tr>
          <tr><td><code>pylon-nav__section-title</code></td><td>Section header</td></tr>
          <tr><td><code>pylon-breadcrumbs</code></td><td>Breadcrumb container</td></tr>
          <tr><td><code>pylon-breadcrumbs__item</code></td><td>Breadcrumb link</td></tr>
          <tr><td><code>pylon-breadcrumbs__separator</code></td><td>Separator character</td></tr>
        </tbody>
      </table>
    </>
  );
}
