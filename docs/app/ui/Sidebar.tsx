'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const docsNav = [
  {
    title: 'Getting Started',
    items: [
      { label: 'Introduction', href: '/' },
      { label: 'Installation', href: '/getting-started/installation' },
      { label: 'Usage', href: '/getting-started/usage' },
    ],
  },
  {
    title: 'Foundations',
    items: [
      { label: 'Colors', href: '/foundations/colors' },
      { label: 'Typography', href: '/foundations/typography' },
      { label: 'Spacing', href: '/foundations/spacing' },
      { label: 'Theming', href: '/foundations/theming' },
    ],
  },
];

const componentsNav = [
  {
    title: 'Components',
    items: [
      { label: 'Button', href: '/components/button' },
      { label: 'Input', href: '/components/input' },
      { label: 'Card', href: '/components/card' },
      { label: 'Badge', href: '/components/badge' },
      { label: 'Alert', href: '/components/alert' },
      { label: 'Table', href: '/components/table' },
      { label: 'Modal', href: '/components/modal' },
      { label: 'Tabs', href: '/components/tabs' },
      { label: 'Checkbox & Switch', href: '/components/checkbox' },
      { label: 'Tooltip & Menu', href: '/components/tooltip' },
    ],
  },
];

const blocksNav = [
  {
    title: 'Blocks',
    items: [
      { label: 'Overview', href: '/blocks' },
    ],
  },
];

export function Sidebar() {
  const pathname = usePathname();

  // Hide sidebar on create page
  if (pathname.startsWith('/create')) {
    return null;
  }

  // Contextual nav based on route
  let nav = docsNav;
  if (pathname.startsWith('/components')) {
    nav = componentsNav;
  } else if (pathname.startsWith('/blocks')) {
    nav = blocksNav;
  }

  return (
    <aside className="docs-sidebar">
      {nav.map((section) => (
        <div key={section.title} className="docs-sidebar__section">
          <div className="docs-sidebar__section-title">{section.title}</div>
          {section.items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`docs-sidebar__link${
                pathname === item.href ? ' docs-sidebar__link--active' : ''
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      ))}
    </aside>
  );
}
