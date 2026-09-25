import React from 'react';
import { MapPin, ArrowRight, Building, Home, CheckCircle2 } from 'lucide-react';
import { LOCATIONS_DATA } from '../data/locations';
import { PROPERTIES_DATA } from '../data/properties';
import { PropertyCard } from '../components/PropertyCard';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';

interface LocationsPageProps {
  locationSlug?: string;
  onNavigate: (path: string) => void;
}

export const LocationsPage: React.FC<LocationsPageProps> = ({ locationSlug, onNavigate }) => {
  // If a specific location slug is provided
  if (locationSlug) {
    const loc = LOCATIONS_DATA.find((l) => l.slug.toLowerCase() === locationSlug.toLowerCase());

    if (!loc) {
      return (
        <div className="min-h-screen bg-neutral-50 flex items-center justify-center p-4">
          <div className="bg-white p-8 rounded-2xl border border-neutral-200 text-center max-w-md">
            <h2 className="text-xl font-bold font-display text-neutral-900 mb-2">Location Not Found</h2>
            <p className="text-xs text-neutral-500 mb-6">
              The requested city or area page could not be located.
            </p>
            <button
              onClick={() => onNavigate('/locations')}
              className="px-5 py-2.5 text-xs font-semibold text-white bg-neutral-900 rounded-xl hover:bg-neutral-800"
            >
              View All Locations
            </button>
          </div>
        </div>
      );
    }

    // Filter properties for this city or area
    const locationProperties = PROPERTIES_DATA.filter((p) => {
      if (loc.type === 'city') {
        return p.city.toLowerCase() === loc.name.toLowerCase();
      }
      return p.area.toLowerCase().includes(loc.name.toLowerCase());
    });

    const isCity = loc.type === 'city';

    return (
      <div className="min-h-screen bg-neutral-50 py-8">
        <SEO
          title={`Real Estate in ${loc.name} | Property for Sale & Rent | Prime Estate`}
          description={`Find verified houses, luxury apartments, residential plots, and commercial property for sale and rent in ${loc.name}. ${loc.tagline}.`}
          canonicalPath={`/locations/${loc.slug}`}
          ogImage={loc.image}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <Breadcrumbs
            items={[
              { label: 'Locations', href: '/locations' },
              ...(loc.parentCity ? [{ label: `${loc.parentCity} Real Estate`, href: `/locations/${loc.parentCity.toLowerCase()}` }] : []),
              { label: `${loc.name} Real Estate` }
            ]}
            onNavigate={onNavigate}
          />

          {/* Hero Banner for this location */}
          <div className="relative rounded-3xl overflow-hidden my-8 min-h-[360px] flex items-end p-8 sm:p-12 text-white bg-neutral-950">
            <img
              src={loc.image}
              alt={`Real estate properties in ${loc.name}`}
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover opacity-45"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent" />

            <div className="relative z-10 max-w-3xl space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                {isCity ? 'City Real Estate Guide' : `Prime Sector in ${loc.parentCity}`}
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-white">
                Real Estate in {loc.name}
              </h1>
              <p className="text-sm sm:text-base text-neutral-300 font-normal leading-relaxed">
                {loc.description}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono">
                <div className="bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-lg">
                  <span className="text-neutral-300">Available Properties: </span>
                  <strong className="text-white">{loc.propertyCount} Verified Listings</strong>
                </div>
                <div className="bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-lg">
                  <span className="text-neutral-300">Price Range: </span>
                  <strong className="text-white">{loc.averagePricePerMarla}</strong>
                </div>
              </div>
            </div>
          </div>

          {/* Sub-Areas / Key Sectors Grid if City */}
          {loc.keyAreas && loc.keyAreas.length > 0 && (
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-neutral-200 mb-12 shadow-xs">
              <h2 className="text-lg font-bold text-neutral-950 font-display mb-3">
                Key Sectors & High-Demand Areas in {loc.name}
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-xs">
                {loc.keyAreas.map((areaName, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      const areaSlug = areaName.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                      const areaMatch = LOCATIONS_DATA.find((l) => l.slug === areaSlug);
                      if (areaMatch) {
                        onNavigate(`/locations/${areaMatch.slug}`);
                      } else {
                        onNavigate(`/properties?city=${loc.name}&search=${encodeURIComponent(areaName)}`);
                      }
                    }}
                    className="p-3 rounded-xl bg-neutral-50 hover:bg-neutral-900 hover:text-white border border-neutral-200 transition-all text-left group"
                  >
                    <MapPin className="w-3.5 h-3.5 text-neutral-400 group-hover:text-amber-400 mb-1" />
                    <div className="font-semibold text-neutral-900 group-hover:text-white truncate">
                      {areaName}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Location Listings Grid */}
          <div className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs uppercase tracking-wider text-neutral-500 font-semibold">
                  Verified Inventory
                </span>
                <h2 className="text-2xl font-bold text-neutral-950 font-display">
                  Properties in {loc.name}
                </h2>
              </div>

              <button
                onClick={() => onNavigate(`/properties?city=${loc.name}`)}
                className="text-xs font-semibold text-neutral-900 hover:text-amber-800 flex items-center gap-1"
              >
                <span>Filter All in {loc.name}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {locationProperties.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {locationProperties.map((prop) => (
                  <PropertyCard
                    key={prop.id}
                    property={prop}
                    onNavigate={onNavigate}
                  />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-10 text-center border border-neutral-200">
                <p className="text-xs text-neutral-500 mb-4">
                  All current verified listings in {loc.name} are currently under confidential offer.
                </p>
                <button
                  onClick={() => onNavigate('/contact')}
                  className="px-5 py-2 text-xs font-semibold text-white bg-neutral-900 rounded-lg hover:bg-neutral-800"
                >
                  Request Off-Market Listings in {loc.name}
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    );
  }

  // All Locations Directory View
  const cities = LOCATIONS_DATA.filter((l) => l.type === 'city');
  const areas = LOCATIONS_DATA.filter((l) => l.type === 'area');

  return (
    <div className="min-h-screen bg-neutral-50 py-8">
      <SEO
        title="Prime Real Estate Locations in Pakistan | Islamabad, Lahore, Karachi | Prime Estate"
        description="Explore top cities and prime residential and commercial sectors in Pakistan. Find verified houses, plots, and apartments in Islamabad, Lahore, Karachi, and Rawalpindi."
        canonicalPath="/locations"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Breadcrumbs
          items={[{ label: 'Locations' }]}
          onNavigate={onNavigate}
        />

        <div className="text-center max-w-3xl mx-auto my-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-700">
            Regional Real Estate Markets
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-neutral-950 font-display mt-2">
            Prime Real Estate Locations
          </h1>
          <p className="text-xs sm:text-sm text-neutral-600 mt-3 leading-relaxed">
            Discover verified houses, apartments, plots, and commercial properties in Pakistan’s premier metropolises and exclusive master-planned communities.
          </p>
        </div>

        {/* Cities Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {cities.map((city) => (
            <div
              key={city.id}
              className="bg-white rounded-3xl overflow-hidden border border-neutral-200 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-neutral-900">
                <img
                  src={city.image}
                  alt={`Real estate in ${city.name}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent" />
                <div className="absolute bottom-5 left-5 text-white">
                  <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">Major Metropolis</span>
                  <h2 className="text-2xl font-bold font-display">{city.name}</h2>
                  <div className="text-xs text-neutral-300 font-mono mt-0.5">{city.propertyCount} Verified Listings</div>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-4 text-xs">
                <p className="text-neutral-600 leading-relaxed">
                  {city.description}
                </p>

                <div className="pt-2 border-t border-neutral-100 flex items-center justify-between font-mono">
                  <span className="text-neutral-500 font-sans">Benchmark Valuation:</span>
                  <span className="font-semibold text-neutral-900">{city.averagePricePerMarla}</span>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => onNavigate(`/locations/${city.slug}`)}
                    className="w-full py-3 px-4 font-semibold text-white bg-neutral-900 hover:bg-neutral-800 rounded-xl transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <span>View All {city.name} Properties</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* High-Demand Sectors & Areas */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-neutral-200 mb-16 shadow-xs">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-700">
              Specific Neighborhood Guides
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-950 font-display mt-1">
              High-Demand Residential & Commercial Sectors
            </h2>
            <p className="text-xs text-neutral-500 mt-2">
              Explore in-depth sector guides for capital growth, rental occupancy rates, and infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs">
            {areas.map((area) => (
              <div
                key={area.id}
                className="p-5 rounded-2xl bg-neutral-50 border border-neutral-200 hover:border-neutral-300 hover:bg-white hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="text-[11px] font-semibold text-amber-700 uppercase tracking-wider mb-1">
                    {area.parentCity}
                  </div>
                  <h3 className="text-base font-bold text-neutral-950 font-display mb-2">
                    {area.name}
                  </h3>
                  <p className="text-neutral-600 line-clamp-3 mb-4 leading-relaxed">
                    {area.description}
                  </p>
                </div>

                <button
                  onClick={() => onNavigate(`/locations/${area.slug}`)}
                  className="w-full py-2 px-3 text-xs font-semibold text-neutral-900 bg-neutral-200 hover:bg-neutral-900 hover:text-white rounded-lg transition-colors flex items-center justify-center gap-1"
                >
                  <span>Explore {area.name}</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
