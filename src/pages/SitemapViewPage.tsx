import React from 'react';
import { FileCode, ExternalLink, Download } from 'lucide-react';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';

interface SitemapViewPageProps {
  onNavigate: (path: string) => void;
}

export const SitemapViewPage: React.FC<SitemapViewPageProps> = ({ onNavigate }) => {
  const urls = [
    { loc: 'https://prime-estate-2qag.vercel.app/', lastmod: '2026-09-25', changefreq: 'daily', priority: '1.0', name: 'Homepage (Find Your Perfect Property)' },
    { loc: 'https://prime-estate-2qag.vercel.app/properties', lastmod: '2026-09-25', changefreq: 'daily', priority: '0.9', name: 'All Properties Directory' },
    { loc: 'https://prime-estate-2qag.vercel.app/buy', lastmod: '2026-09-25', changefreq: 'daily', priority: '0.9', name: 'Properties for Sale (Houses, Plots, Apartments)' },
    { loc: 'https://prime-estate-2qag.vercel.app/rent', lastmod: '2026-09-25', changefreq: 'daily', priority: '0.9', name: 'Properties for Rent (Houses, Apartments, Offices)' },
    { loc: 'https://prime-estate-2qag.vercel.app/sell-property', lastmod: '2026-09-25', changefreq: 'weekly', priority: '0.8', name: 'Sell Your Property Listing Form' },
    { loc: 'https://prime-estate-2qag.vercel.app/services', lastmod: '2026-09-25', changefreq: 'weekly', priority: '0.8', name: 'Real Estate Services & Valuation' },
    { loc: 'https://prime-estate-2qag.vercel.app/locations', lastmod: '2026-09-25', changefreq: 'weekly', priority: '0.8', name: 'Locations & Cities Overview' },
    { loc: 'https://prime-estate-2qag.vercel.app/agents', lastmod: '2026-09-25', changefreq: 'weekly', priority: '0.7', name: 'Real Estate Agents Directory' },
    { loc: 'https://prime-estate-2qag.vercel.app/blog', lastmod: '2026-09-25', changefreq: 'weekly', priority: '0.8', name: 'Real Estate Guides & Insights' },
    { loc: 'https://prime-estate-2qag.vercel.app/about', lastmod: '2026-09-25', changefreq: 'monthly', priority: '0.7', name: 'About Prime Estate' },
    { loc: 'https://prime-estate-2qag.vercel.app/contact', lastmod: '2026-09-25', changefreq: 'monthly', priority: '0.7', name: 'Contact & Advisory Desk' },
    { loc: 'https://prime-estate-2qag.vercel.app/investment', lastmod: '2026-09-25', changefreq: 'weekly', priority: '0.8', name: 'Property Investment Opportunities' },
    { loc: 'https://prime-estate-2qag.vercel.app/properties/luxury-house-islamabad-f7', lastmod: '2026-09-25', changefreq: 'weekly', priority: '0.85', name: '1 Kanal Luxury Villa Sector F-7' },
    { loc: 'https://prime-estate-2qag.vercel.app/properties/modern-apartment-lahore-gulberg', lastmod: '2026-09-25', changefreq: 'weekly', priority: '0.85', name: 'Luxury Apartment Gulberg III' },
    { loc: 'https://prime-estate-2qag.vercel.app/properties/commercial-plaza-islamabad-blue-area', lastmod: '2026-09-25', changefreq: 'weekly', priority: '0.85', name: 'Commercial Building Blue Area' },
    { loc: 'https://prime-estate-2qag.vercel.app/blog/how-to-buy-property-complete-guide', lastmod: '2026-09-25', changefreq: 'monthly', priority: '0.75', name: 'How to Buy Property Legal Guide' },
  ];

  return (
    <div className="min-h-screen bg-neutral-50 py-8">
      <SEO
        title="XML Sitemap & Search Engine Index | Prime Estate"
        description="Index of all indexed pages, verified property listings, city guides, and real estate investment reports on Prime Estate."
        canonicalPath="/sitemap-view"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Breadcrumbs
          items={[{ label: 'XML Sitemap' }]}
          onNavigate={onNavigate}
        />

        <div className="my-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-700 uppercase tracking-wider">
              <FileCode className="w-4 h-4" />
              <span>Search Engine Optimization</span>
            </div>
            <h1 className="text-3xl font-extrabold text-neutral-950 font-display mt-1">
              XML Sitemap & URL Architecture
            </h1>
            <p className="text-xs text-neutral-600 mt-1">
              All routes are dynamically registered and crawlable via Googlebot, Bingbot, and search indexers.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/sitemap.xml"
              target="_blank"
              className="px-4 py-2 text-xs font-semibold text-neutral-900 bg-white border border-neutral-300 rounded-xl hover:bg-neutral-50 flex items-center gap-1.5"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Raw sitemap.xml</span>
            </a>
            <a
              href="/robots.txt"
              target="_blank"
              className="px-4 py-2 text-xs font-semibold text-white bg-neutral-900 rounded-xl hover:bg-neutral-800 flex items-center gap-1.5"
            >
              <span>robots.txt</span>
            </a>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-xs mb-16 text-xs">
          <table className="w-full text-left border-collapse">
            <thead className="bg-neutral-50 border-b border-neutral-200 text-neutral-500 font-semibold uppercase">
              <tr>
                <th className="py-3 px-4">Page Title & Path</th>
                <th className="py-3 px-4 hidden sm:table-cell">Change Frequency</th>
                <th className="py-3 px-4">Priority</th>
                <th className="py-3 px-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100 font-mono">
              {urls.map((u, idx) => {
                const path = u.loc.replace('https://prime-estate-2qag.vercel.app', '') || '/';
                return (
                  <tr key={idx} className="hover:bg-neutral-50/50">
                    <td className="py-3 px-4">
                      <div className="font-semibold text-neutral-900 font-sans">{u.name}</div>
                      <div className="text-[11px] text-neutral-500">{path}</div>
                    </td>
                    <td className="py-3 px-4 hidden sm:table-cell text-neutral-600">
                      {u.changefreq}
                    </td>
                    <td className="py-3 px-4 text-amber-700 font-bold">
                      {u.priority}
                    </td>
                    <td className="py-3 px-4 text-right font-sans">
                      <button
                        onClick={() => onNavigate(path)}
                        className="text-xs font-medium text-neutral-900 hover:text-amber-800 hover:underline"
                      >
                        Visit Page
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};
