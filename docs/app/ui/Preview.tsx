'use client';

import { useState } from 'react';

interface PreviewProps {
  title?: string;
  code: string;
  children: React.ReactNode;
  direction?: 'row' | 'col';
  center?: boolean;
}

export function Preview({ title, code, children, direction = 'row', center = false }: PreviewProps) {
  const [showCode, setShowCode] = useState(false);

  const renderClass = [
    'docs-preview__render',
    direction === 'col' ? 'docs-preview__render--col' : '',
    center ? 'docs-preview__render--center' : '',
  ].filter(Boolean).join(' ');

  return (
    <div className="docs-preview">
      {title && (
        <div className="docs-preview__header">
          <span className="docs-preview__header-title">{title}</span>
          <button
            className="pylon-btn pylon-btn--ghost pylon-btn--sm"
            onClick={() => setShowCode(!showCode)}
          >
            {showCode ? 'Hide Code' : 'View Code'}
          </button>
        </div>
      )}
      <div className={renderClass}>
        {children}
      </div>
      {(showCode || !title) && (
        <div className="docs-preview__code">
          <pre><code>{code}</code></pre>
        </div>
      )}
    </div>
  );
}
