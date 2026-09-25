import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  onNavigate: (href: string) => void;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, onNavigate }) => {
  const allItems: BreadcrumbItem[] = [{ label: 'Home', href: '/' }, ...items];

  // Schema.org BreadcrumbList JSON-LD
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: allItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: item.href ? `https://primeestate.vercel.app${item.href}` : undefined,
    })),
  };

  return (
    <nav aria-label="Breadcrumb" className="py-3 text-xs text-neutral-500">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ol className="flex items-center flex-wrap gap-1.5">
        {allItems.map((item, idx) => {
          const isLast = idx === allItems.length - 1;
          return (
            <li key={idx} className="flex items-center gap-1.5">
              {idx === 0 ? (
                <button
                  onClick={() => onNavigate('/')}
                  className="flex items-center gap-1 hover:text-neutral-900 transition-colors focus:outline-none"
                  title="Return to Prime Estate Homepage"
                >
                  <Home className="w-3.5 h-3.5" />
                  <span className="sr-only">Home</span>
                </button>
              ) : null}

              {idx > 0 && <ChevronRight className="w-3 h-3 text-neutral-400 shrink-0" />}

              {isLast || !item.href ? (
                <span className="text-neutral-900 font-medium truncate max-w-[240px] sm:max-w-none" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <button
                  onClick={() => onNavigate(item.href!)}
                  className="hover:text-neutral-900 transition-colors focus:outline-none truncate max-w-[180px] sm:max-w-none"
                >
                  {item.label}
                </button>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
