import { PageHeader } from '../ui/PageHeader';

export default function CreatePage() {
  return (
    <>
      <PageHeader
        title="Create a New Project"
        description="Get started with Pylon in a new project with a single command."
      />

      <h2>Quick start</h2>
      <p>
        Install Pylon into any existing project:
      </p>
      <pre><code>npm install @pylon/core</code></pre>

      <h2>Templates</h2>
      <p>Choose from pre-built templates to jumpstart your project:</p>
      <ul>
        <li><strong>Dashboard</strong> — Admin panel with sidebar navigation, data tables, and charts</li>
        <li><strong>SaaS App</strong> — Authentication, settings, and billing pages</li>
        <li><strong>Marketing</strong> — Landing page with hero, features, and pricing sections</li>
      </ul>
    </>
  );
}
