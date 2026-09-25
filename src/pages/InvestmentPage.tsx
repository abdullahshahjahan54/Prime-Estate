import React from 'react';
import { TrendingUp, ShieldAlert, Award, ArrowRight, Building, CheckCircle2 } from 'lucide-react';
import { PROPERTIES_DATA } from '../data/properties';
import { PropertyCard } from '../components/PropertyCard';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';

interface InvestmentPageProps {
  onNavigate: (path: string) => void;
}

export const InvestmentPage: React.FC<InvestmentPageProps> = ({ onNavigate }) => {
  const investmentProperties = PROPERTIES_DATA.filter(
    (p) => p.propertyType === 'commercial' || p.propertyType === 'plot' || p.isLuxury
  ).slice(0, 3);

  return (
    <div className="min-h-screen bg-neutral-50 py-8">
      <SEO
        title="Real Estate Investment Opportunities | Commercial & Residential Portfolios | Prime Estate"
        description="Explore high-yield real estate investment opportunities in Pakistan. Commercial property investment, residential plots, rental cash flow modeling and land advisory."
        canonicalPath="/investment"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <Breadcrumbs
          items={[{ label: 'Real Estate Investment' }]}
          onNavigate={onNavigate}
        />

        {/* Hero */}
        <div className="my-10 max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-700">
            Portfolio Allocation & Wealth Preservation
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-neutral-950 font-display mt-2 leading-tight">
            Real Estate Investment Opportunities
          </h1>
          <p className="text-xs sm:text-sm text-neutral-600 mt-3 leading-relaxed">
            Real estate investment remains Pakistan’s proven vehicle for capital preservation against inflation, combining predictable cash yield with steady underlying land appreciation.
          </p>
        </div>

        {/* Investment Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-xs">
            <TrendingUp className="w-8 h-8 text-amber-700 mb-3" />
            <h2 className="text-lg font-bold text-neutral-950 font-display mb-2">
              Commercial Property Investment
            </h2>
            <p className="text-xs text-neutral-600 leading-relaxed mb-4">
              High-visibility retail shops, corporate office floors, and multi-story plazas in prime central business districts (such as Islamabad’s Blue Area and Lahore’s Gulberg) historically produce 7% to 9% net annual rental cash flow with corporate lease stability.
            </p>
            <div className="text-xs text-neutral-500 font-mono">
              Typical Horizon: 5–10 Years · Cash Flow Focused
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-xs">
            <Building className="w-8 h-8 text-amber-700 mb-3" />
            <h2 className="text-lg font-bold text-neutral-950 font-display mb-2">
              Residential Property Investment
            </h2>
            <p className="text-xs text-neutral-600 leading-relaxed mb-4">
              Turnkey houses and luxury apartments in mature sectors (F-7, F-6, DHA Phase 5) provide consistent tenant occupancy from corporate executives and diplomats, offering moderate rental income alongside substantial residential land value accretion.
            </p>
            <div className="text-xs text-neutral-500 font-mono">
              Typical Horizon: 3–7 Years · Balanced Yield & Gain
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-xs">
            <Award className="w-8 h-8 text-amber-700 mb-3" />
            <h2 className="text-lg font-bold text-neutral-950 font-display mb-2">
              Land Investment & Plots for Sale
            </h2>
            <p className="text-xs text-neutral-600 leading-relaxed mb-4">
              Acquiring verified residential and commercial plots in expanding master-planned societies allows investors to benefit from infrastructural progression without the maintenance liabilities or depreciation associated with built structures.
            </p>
            <div className="text-xs text-neutral-500 font-mono">
              Typical Horizon: 2–5 Years · Pure Capital Gain
            </div>
          </div>
        </div>

        {/* Asset Class Comparison Matrix */}
        <div className="bg-white rounded-2xl border border-neutral-200 p-6 md:p-8 mb-16 shadow-xs overflow-x-auto">
          <h2 className="text-xl font-bold text-neutral-950 font-display mb-1">
            Property Market Asset Class Comparative Analysis
          </h2>
          <p className="text-xs text-neutral-500 mb-6">
            Estimated performance matrix across asset classes in major metropolitan centers.
          </p>

          <table className="w-full text-left text-xs border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b border-neutral-200 text-neutral-500 font-semibold uppercase">
                <th className="py-3 px-3">Asset Category</th>
                <th className="py-3 px-3">Average Rental Yield</th>
                <th className="py-3 px-3">Liquidity Speed</th>
                <th className="py-3 px-3">Tenant Lease Length</th>
                <th className="py-3 px-3">Maintenance Overhead</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100 text-neutral-700 font-mono">
              <tr>
                <td className="py-3 px-3 font-semibold text-neutral-950 font-sans">Commercial Plazas / Offices</td>
                <td className="py-3 px-3 text-emerald-700 font-bold">7.0% – 9.5%</td>
                <td className="py-3 px-3">Moderate (3–6 mo)</td>
                <td className="py-3 px-3">3 – 9 Years</td>
                <td className="py-3 px-3 text-neutral-500">Low (Tenant Fit-out)</td>
              </tr>
              <tr>
                <td className="py-3 px-3 font-semibold text-neutral-950 font-sans">High-End Luxury Apartments</td>
                <td className="py-3 px-3 text-emerald-700 font-bold">5.5% – 7.0%</td>
                <td className="py-3 px-3">High (1–2 mo)</td>
                <td className="py-3 px-3">1 – 2 Years</td>
                <td className="py-3 px-3 text-neutral-500">Moderate (Building Admin)</td>
              </tr>
              <tr>
                <td className="py-3 px-3 font-semibold text-neutral-950 font-sans">Residential Houses</td>
                <td className="py-3 px-3 text-amber-700 font-bold">3.5% – 4.8%</td>
                <td className="py-3 px-3">Moderate (2–4 mo)</td>
                <td className="py-3 px-3">1 – 3 Years</td>
                <td className="py-3 px-3 text-neutral-500">High (Independent Owner)</td>
              </tr>
              <tr>
                <td className="py-3 px-3 font-semibold text-neutral-950 font-sans">Vacant Residential Plots</td>
                <td className="py-3 px-3 text-neutral-400">0.0% (Holding)</td>
                <td className="py-3 px-3">Very High (Days/Weeks)</td>
                <td className="py-3 px-3">N/A</td>
                <td className="py-3 px-3 text-neutral-500">Zero Maintenance</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Featured Investment Assets */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs uppercase tracking-wider text-neutral-500 font-semibold">
                Curated Opportunities
              </span>
              <h2 className="text-2xl font-bold text-neutral-950 font-display">
                Featured Investment Properties
              </h2>
            </div>
            <button
              onClick={() => onNavigate('/properties?type=commercial')}
              className="text-xs font-semibold text-neutral-900 hover:text-amber-800 flex items-center gap-1"
            >
              <span>Explore Commercial Listings</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {investmentProperties.map((prop) => (
              <PropertyCard
                key={prop.id}
                property={prop}
                onNavigate={onNavigate}
              />
            ))}
          </div>
        </div>

        {/* Prudent Investment Notice / Disclaimer */}
        <div className="bg-neutral-100 rounded-2xl p-6 border border-neutral-200 text-xs text-neutral-600 flex items-start gap-4 mb-16">
          <ShieldAlert className="w-5 h-5 text-neutral-500 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <strong className="text-neutral-900 font-semibold block">
              Investment Considerations & Fiduciary Transparency
            </strong>
            <p className="leading-relaxed">
              Real estate investments are subject to market conditions, government taxation policies (FBR), local municipality bylaws, and liquidity variables. Historical appreciation trends and rental yields do not constitute guaranteed future returns. Prime Estate conducts independent title audits and transaction modeling to help clients make informed decisions.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
