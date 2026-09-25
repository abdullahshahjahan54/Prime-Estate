import React, { useState } from 'react';
import { Phone, MessageSquare, Mail, Award, CheckCircle2, ArrowRight } from 'lucide-react';
import { AGENTS_DATA } from '../data/agents';
import { PROPERTIES_DATA } from '../data/properties';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';

interface AgentsPageProps {
  onNavigate: (path: string) => void;
}

export const AgentsPage: React.FC<AgentsPageProps> = ({ onNavigate }) => {
  const [selectedSpecialization, setSelectedSpecialization] = useState('all');

  const filteredAgents = AGENTS_DATA.filter((agent) => {
    if (selectedSpecialization === 'all') return true;
    return agent.specialization.some((s) => s.toLowerCase().includes(selectedSpecialization.toLowerCase()));
  });

  return (
    <div className="min-h-screen bg-neutral-50 py-8">
      <SEO
        title="Our Real Estate Agents & Property Consultants | Prime Estate"
        description="Connect with our verified real estate agents and property consultants in Islamabad, Lahore, and Karachi. Expert advice on luxury homes, plots, and commercial investments."
        canonicalPath="/agents"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Breadcrumbs
          items={[{ label: 'Real Estate Agents' }]}
          onNavigate={onNavigate}
        />

        <div className="my-10 max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-700">
            Professional Representation
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-neutral-950 font-display mt-2 leading-tight">
            Meet Our Real Estate Agents
          </h1>
          <p className="text-xs sm:text-sm text-neutral-600 mt-3 leading-relaxed">
            Every Prime Estate consultant adheres to strict ethical standards, verified document verification protocols, and deep local market pricing intelligence.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2 text-xs">
          <button
            onClick={() => setSelectedSpecialization('all')}
            className={`px-4 py-2 rounded-xl font-medium transition-colors whitespace-nowrap ${
              selectedSpecialization === 'all'
                ? 'bg-neutral-900 text-white shadow-xs'
                : 'bg-white text-neutral-700 border border-neutral-200 hover:bg-neutral-50'
            }`}
          >
            All Specialists ({AGENTS_DATA.length})
          </button>
          <button
            onClick={() => setSelectedSpecialization('luxury')}
            className={`px-4 py-2 rounded-xl font-medium transition-colors whitespace-nowrap ${
              selectedSpecialization === 'luxury'
                ? 'bg-neutral-900 text-white shadow-xs'
                : 'bg-white text-neutral-700 border border-neutral-200 hover:bg-neutral-50'
            }`}
          >
            Luxury Houses & Mansions
          </button>
          <button
            onClick={() => setSelectedSpecialization('apartment')}
            className={`px-4 py-2 rounded-xl font-medium transition-colors whitespace-nowrap ${
              selectedSpecialization === 'apartment'
                ? 'bg-neutral-900 text-white shadow-xs'
                : 'bg-white text-neutral-700 border border-neutral-200 hover:bg-neutral-50'
            }`}
          >
            Apartments & Penthouses
          </button>
          <button
            onClick={() => setSelectedSpecialization('commercial')}
            className={`px-4 py-2 rounded-xl font-medium transition-colors whitespace-nowrap ${
              selectedSpecialization === 'commercial'
                ? 'bg-neutral-900 text-white shadow-xs'
                : 'bg-white text-neutral-700 border border-neutral-200 hover:bg-neutral-50'
            }`}
          >
            Commercial Plazas & Shops
          </button>
          <button
            onClick={() => setSelectedSpecialization('plot')}
            className={`px-4 py-2 rounded-xl font-medium transition-colors whitespace-nowrap ${
              selectedSpecialization === 'plot'
                ? 'bg-neutral-900 text-white shadow-xs'
                : 'bg-white text-neutral-700 border border-neutral-200 hover:bg-neutral-50'
            }`}
          >
            Residential & Commercial Plots
          </button>
        </div>

        {/* Agents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {filteredAgents.map((agent) => {
            const agentProperties = PROPERTIES_DATA.filter((p) => p.agentId === agent.id);

            return (
              <div
                key={agent.id}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-neutral-200 hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 pb-6 border-b border-neutral-100">
                    <img
                      src={agent.photo}
                      alt={agent.name}
                      referrerPolicy="no-referrer"
                      className="w-24 h-24 rounded-2xl object-cover border-2 border-neutral-100 shadow-sm shrink-0"
                    />
                    <div>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-700">
                        {agent.title}
                      </span>
                      <h2 className="text-xl font-bold text-neutral-950 font-display">
                        {agent.name}
                      </h2>
                      <div className="text-xs text-neutral-500 mt-1 font-mono">
                        {agent.experienceYears} Years Market Experience · Speaks {agent.languages.join(', ')}
                      </div>
                      <div className="text-xs text-emerald-700 font-medium flex items-center gap-1 mt-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Registered Property Dealer & Consultant</span>
                      </div>
                    </div>
                  </div>

                  <div className="py-5 text-xs text-neutral-600 leading-relaxed">
                    <p className="mb-4">{agent.bio}</p>
                    
                    <div>
                      <div className="font-semibold text-neutral-900 mb-2">Specializations:</div>
                      <div className="flex flex-wrap gap-1.5">
                        {agent.specialization.map((spec, idx) => (
                          <span
                            key={idx}
                            className="bg-neutral-100 text-neutral-800 px-2.5 py-1 rounded-md text-[11px] font-medium"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-100 space-y-3">
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <a
                      href={`tel:${agent.phone}`}
                      className="py-2.5 px-3 bg-neutral-100 hover:bg-neutral-200 text-neutral-900 rounded-xl font-semibold flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>{agent.phone}</span>
                    </a>

                    <a
                      href={`https://wa.me/${agent.whatsapp}?text=Hello%20${encodeURIComponent(agent.name)}%2C%20I%20would%20like%20to%20consult%20you%20regarding%20property%20investment.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 px-3 bg-emerald-700 hover:bg-emerald-600 text-white rounded-xl font-semibold flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>
                  </div>

                  {agentProperties.length > 0 && (
                    <button
                      onClick={() => onNavigate(`/properties?agent=${agent.id}`)}
                      className="w-full py-2 text-xs font-semibold text-neutral-600 hover:text-neutral-950 transition-colors flex items-center justify-center gap-1"
                    >
                      <span>View Active Listings Managed by {agent.name.split(' ')[0]}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
