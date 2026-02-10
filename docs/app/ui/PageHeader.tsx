interface PageHeaderProps {
  overline?: string;
  title: string;
  description: string;
}

export function PageHeader({ overline, title, description }: PageHeaderProps) {
  return (
    <div className="docs-page-header">
      {overline && <div className="docs-page-header__overline">{overline}</div>}
      <h1>{title}</h1>
      <p className="docs-page-header__description">{description}</p>
    </div>
  );
}
