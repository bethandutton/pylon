import { PageHeader } from './ui/PageHeader';

export default function Home() {
  return (
    <>
      <PageHeader
        title="Pylon"
        description="An enterprise SaaS component library built on React Aria, styled with a clean, accessible design system."
      />

      <h2>What is Pylon?</h2>
      <p>
        Pylon is a design system and component library for building enterprise SaaS applications.
        It provides a consistent set of tokens, typography, and pre-styled components that work
        seamlessly with React Aria for full WCAG accessibility.
      </p>

      <h3>Key features</h3>
      <ul>
        <li><strong>Built on React Aria</strong> — Full keyboard navigation, screen reader support, and ARIA patterns out of the box</li>
        <li><strong>10-colour system</strong> — A deliberately constrained palette that eliminates decision fatigue</li>
        <li><strong>Plus Jakarta Sans</strong> — A warm, professional typeface that balances enterprise confidence with approachability</li>
        <li><strong>Modern Sass</strong> — Uses <code>@use</code>/<code>@forward</code> module system with zero deprecation warnings</li>
        <li><strong>Enterprise-ready</strong> — Designed for dense data interfaces, forms, dashboards, and settings screens</li>
      </ul>

      <h3>Quick start</h3>
      <pre><code>npm install @pylon/core</code></pre>

      <p>
        Then import the compiled CSS or the Sass source files directly into your project.
        See the <a href="/getting-started/installation">Installation</a> guide for full details.
      </p>
    </>
  );
}
