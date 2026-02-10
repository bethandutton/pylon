'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const mainNav = [
  { label: 'Docs', href: '/getting-started/installation' },
  { label: 'Components', href: '/components/button' },
  { label: 'Blocks', href: '/blocks' },
  { label: 'Create', href: '/create' },
];

export function Header() {
  const pathname = usePathname();
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const stored = localStorage.getItem('pylon-docs-theme');
    if (stored === 'dark') {
      setTheme('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    if (next === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    localStorage.setItem('pylon-docs-theme', next);
  };

  const isActive = (href: string) => {
    if (href === '/getting-started/installation') {
      return (
        pathname === '/' ||
        pathname.startsWith('/getting-started') ||
        pathname.startsWith('/foundations')
      );
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="docs-header">
      <div className="docs-header__inner">
        <Link href="/" className="docs-header__logo">
          <span>/</span> Pylon
        </Link>

        <nav className="docs-header__nav">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`docs-header__nav-link${
                isActive(item.href) ? ' docs-header__nav-link--active' : ''
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="docs-header__actions">
          <button className="docs-header__search-trigger" type="button">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <span>Search docs...</span>
            <kbd className="pylon-kbd">⌘K</kbd>
          </button>

          <Link
            href="/create"
            className="pylon-btn pylon-btn--sm pylon-btn--primary"
          >
            New Project
          </Link>

          <button
            className="docs-header__theme-toggle"
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? (
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            ) : (
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
