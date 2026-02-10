import type { Metadata } from 'next';
import './globals.scss';
import { Sidebar } from './ui/Sidebar';

export const metadata: Metadata = {
  title: 'Pylon — Component Library',
  description: 'Enterprise SaaS component library built on React Aria',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Geist+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="docs-layout">
          <Sidebar />
          <main className="docs-main">
            <div className="docs-content">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
