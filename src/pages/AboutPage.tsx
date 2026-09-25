import React from 'react';
import { ShieldCheck, Award, Users, CheckCircle2, TrendingUp, Building2, PhoneCall } from 'lucide-react';
import { AGENTS_DATA } from '../data/agents';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';

interface AboutPageProps {
  onNavigate: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-neutral-50 py-8">
      <SEO
        title="Trusted Real Estate Professionals in Pakistan | Prime Estate Agency"
        description="Learn about Prime Estate, Pakistan’s leading real estate agency and property consultancy. 16+ years of verified title transfers, luxury sales, and commercial advisory."
        canonicalPath="/about"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Breadcrumbs
          items={[{ label: 'About Prime Estate' }]}
          onNavigate={onNavigate}
        />

        {/* Hero */}
        <div className="my-10 max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-700">
            Fiduciary Real Estate Advisory
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-neutral-950 font-display mt-2 leading-tight">
            Trusted Real Estate Professionals
          </h1>
          <p className="text-xs sm:text-sm text-neutral-600 mt-3 leading-relaxed">
            Founded with an uncompromising commitment to title transparency and investor protection, Prime Estate is recognized as Pakistan’s premier real estate company and property consultancy.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 font-mono tabular-nums">
          <div className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-xs">
            <div className="text-3xl sm:text-4xl font-extrabold text-neutral-950">16+</div>
            <div className="text-xs text-neutral-500 font-sans mt-1">Years of Local Market Authority</div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-xs">
            <div className="text-3xl sm:text-4xl font-extrabold text-neutral-950">PKR 45B+</div>
            <div className="text-xs text-neutral-500 font-sans mt-1">Brokered Property Volume</div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-xs">
            <div className="text-3xl sm:text-4xl font-extrabold text-neutral-950">8,500+</div>
            <div className="text-xs text-neutral-500 font-sans mt-1">Satisfied Domestic & Overseas Clients</div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-xs">
            <div className="text-3xl sm:text-4xl font-extrabold text-emerald-700">100%</div>
            <div className="text-xs text-neutral-500 font-sans mt-1">Verified Clear Title Transfer Record</div>
          </div>
        </div>

        {/* Narrative & Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-4 text-xs text-neutral-600 leading-relaxed">
            <h2 className="text-2xl font-bold text-neutral-950 font-display">
              Restoring Integrity to Property Buying and Selling
            </h2>
            <p>
              In a property market historically crowded with informal property dealers and unchecked verbal promises, Prime Estate was established to institute institutional rigour, legal due diligence, and technological transparency.
            </p>
            <p>
              Whether you are acquiring a luxury house in Sector F-7 Islamabad, purchasing an investment apartment in Gulberg Lahore, or developing a commercial plaza in Bahria Town, our property consultants audit every document: registry, mutation (intiqal), society verification letter, municipal NOC, and physical site demarcation.
            </p>
            <p>
              Our clientele spans private individuals, expatriate families in the diaspora, diplomatic missions, and institutional family offices who demand discreet, professional representation.
            </p>

            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="flex items-center gap-2 text-neutral-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>CDA & LDA Registered Agency</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero Tolerance for Disputed Land</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Dedicated Legal In-House Counsel</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>End-to-End FBR Tax Guidance</span>
              </div>
            </div>
          </div>

          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-neutral-200">
            <img
              src="/src/assets/images/hero_luxury_villa_1790330964578.jpg"
              alt="Prime Estate corporate headquarters and luxury property showcase"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Core Leadership Team Preview */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs uppercase tracking-wider text-neutral-500 font-semibold">
                Our Property Specialists
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-neutral-950 font-display">
                Senior Real Estate Consultants
              </h2>
            </div>
            <button
              onClick={() => onNavigate('/agents')}
              className="text-xs font-semibold text-neutral-900 hover:text-amber-800"
            >
              View All Agents & Contact Numbers &rarr;
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {AGENTS_DATA.map((agent) => (
              <div
                key={agent.id}
                className="bg-white rounded-2xl p-5 border border-neutral-200 hover:shadow-lg transition-all text-xs"
              >
                <img
                  src={agent.photo}
                  alt={agent.name}
                  referrerPolicy="no-referrer"
                  className="w-full aspect-square rounded-xl object-cover mb-4"
                />
                <h3 className="text-sm font-bold text-neutral-950 font-display">
                  {agent.name}
                </h3>
                <div className="text-[11px] text-amber-700 font-semibold mb-2">
                  {agent.title}
                </div>
                <p className="text-neutral-500 line-clamp-2 mb-3">
                  {agent.bio}
                </p>
                <div className="pt-2 border-t border-neutral-100 flex items-center justify-between text-neutral-600 font-mono">
                  <span>{agent.experienceYears} Years Exp</span>
                  <span>{agent.activeListingsCount} Listings</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
