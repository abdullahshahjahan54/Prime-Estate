import React, { useState, useMemo, useEffect } from 'react';
import { Filter, SlidersHorizontal, RotateCcw, MapPin, Building2, Bed, Search } from 'lucide-react';
import { PROPERTIES_DATA } from '../data/properties';
import { PropertyCard } from '../components/PropertyCard';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { PropertyType } from '../types';

interface PropertiesPageProps {
  onNavigate: (path: string) => void;
  initialPurpose?: 'sale' | 'rent' | 'all';
  initialType?: string;
  initialCity?: string;
  customTitle?: string;
  customH1?: string;
  customDescription?: string;
}

export const PropertiesPage: React.FC<PropertiesPageProps> = ({
  onNavigate,
  initialPurpose = 'all',
  initialType,
  initialCity,
  customTitle,
  customH1,
  customDescription,
}) => {
  // Query parameters parsing
  const [purpose, setPurpose] = useState<'all' | 'sale' | 'rent'>(initialPurpose);
  const [city, setCity] = useState<string>(initialCity || 'all');
  const [type, setType] = useState<string>(initialType || 'all');
  const [bedrooms, setBedrooms] = useState<string>('all');
  const [priceSort, setPriceSort] = useState<string>('featured');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [maxPrice, setMaxPrice] = useState<number>(0);

  // Sync state if props change (e.g. navigation between /buy, /rent, /properties)
  useEffect(() => {
    setPurpose(initialPurpose);
  }, [initialPurpose]);

  useEffect(() => {
    if (initialType) setType(initialType);
  }, [initialType]);

  useEffect(() => {
    if (initialCity) setCity(initialCity);
  }, [initialCity]);

  // Filtered Properties
  const filteredProperties = useMemo(() => {
    return PROPERTIES_DATA.filter((item) => {
      // Purpose
      if (purpose !== 'all' && item.purpose !== purpose) return false;

      // City
      if (city !== 'all' && item.city.toLowerCase() !== city.toLowerCase()) return false;

      // Type
      if (type !== 'all') {
        if (type === 'luxury' && !item.isLuxury && item.propertyType !== 'luxury') return false;
        if (type !== 'luxury' && item.propertyType !== type) return false;
      }

      // Bedrooms
      if (bedrooms !== 'all') {
        const numBeds = parseInt(bedrooms, 10);
        if (!item.bedrooms || item.bedrooms < numBeds) return false;
      }

      // Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchTitle = item.title.toLowerCase().includes(q);
        const matchArea = item.area.toLowerCase().includes(q);
        const matchCity = item.city.toLowerCase().includes(q);
        const matchDesc = item.description.toLowerCase().includes(q);
        if (!matchTitle && !matchArea && !matchCity && !matchDesc) return false;
      }

      // Max price
      if (maxPrice > 0 && item.price > maxPrice) return false;

      return true;
    }).sort((a, b) => {
      if (priceSort === 'price-low') return a.price - b.price;
      if (priceSort === 'price-high') return b.price - a.price;
      if (priceSort === 'newest') return new Date(b.addedDate).getTime() - new Date(a.addedDate).getTime();
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [purpose, city, type, bedrooms, searchQuery, maxPrice, priceSort]);

  const resetFilters = () => {
    setPurpose('all');
    setCity('all');
    setType('all');
    setBedrooms('all');
    setPriceSort('featured');
    setSearchQuery('');
    setMaxPrice(0);
  };

  const pageTitle = customTitle || (
    purpose === 'sale' 
      ? 'Properties for Sale | Houses, Apartments & Plots' 
      : purpose === 'rent'
      ? 'Properties for Rent | Houses & Luxury Apartments'
      : 'Real Estate Properties for Sale & Rent'
  );

  const pageH1 = customH1 || (
    purpose === 'sale'
      ? 'Properties for Sale'
      : purpose === 'rent'
      ? 'Properties for Rent'
      : 'Explore Real Estate Properties'
  );

  const pageDescription = customDescription || (
    purpose === 'sale'
      ? 'Browse verified houses for sale, apartments for sale, residential plots, and commercial properties with Prime Estate.'
      : purpose === 'rent'
      ? 'Explore houses for rent, apartments for rent, and corporate offices for rent with Prime Estate.'
      : 'Search through verified houses, apartments, plots, and commercial buildings for sale and rent in Islamabad, Lahore, and Karachi.'
  );

  return (
    <div className="min-h-screen bg-neutral-50 py-8">
      <SEO
        title={pageTitle}
        description={pageDescription}
        canonicalPath={purpose === 'sale' ? '/buy' : purpose === 'rent' ? '/rent' : '/properties'}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <Breadcrumbs
          items={[
            { label: purpose === 'sale' ? 'Properties for Sale' : purpose === 'rent' ? 'Properties for Rent' : 'Properties' }
          ]}
          onNavigate={onNavigate}
        />

        {/* Page Header */}
        <div className="mt-4 mb-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-700">
                Verified Inventory
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 font-display mt-1">
                {pageH1}
              </h1>
              <p className="text-xs sm:text-sm text-neutral-600 mt-2 max-w-2xl">
                {pageDescription}
              </p>
            </div>

            <div className="text-xs text-neutral-500 font-mono tabular-nums">
              Showing <strong className="text-neutral-900">{filteredProperties.length}</strong> available properties
            </div>
          </div>
        </div>

        {/* Filter Bar Component */}
        <div className="bg-white rounded-2xl p-5 border border-neutral-200 shadow-xs mb-8 space-y-4">
          
          {/* Top Filter Controls */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 text-xs">
            
            {/* Search Input */}
            <div className="lg:col-span-2">
              <label className="block text-neutral-600 font-semibold mb-1 flex items-center gap-1">
                <Search className="w-3.5 h-3.5 text-neutral-400" />
                <span>Search Keywords / Location</span>
              </label>
              <input
                type="text"
                placeholder="e.g. Sector F-7, DHA, 1 Kanal..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 text-xs"
              />
            </div>

            {/* Purpose */}
            <div>
              <label className="block text-neutral-600 font-semibold mb-1">
                Buy / Rent
              </label>
              <select
                value={purpose}
                onChange={(e) => setPurpose(e.target.value as any)}
                className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 bg-white text-xs font-medium"
              >
                <option value="all">All (Buy & Rent)</option>
                <option value="sale">Property for Sale</option>
                <option value="rent">Property for Rent</option>
              </select>
            </div>

            {/* City */}
            <div>
              <label className="block text-neutral-600 font-semibold mb-1 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                <span>City</span>
              </label>
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 bg-white text-xs font-medium"
              >
                <option value="all">All Cities</option>
                <option value="Islamabad">Islamabad</option>
                <option value="Lahore">Lahore</option>
                <option value="Karachi">Karachi</option>
                <option value="Rawalpindi">Rawalpindi</option>
              </select>
            </div>

            {/* Property Type */}
            <div>
              <label className="block text-neutral-600 font-semibold mb-1 flex items-center gap-1">
                <Building2 className="w-3.5 h-3.5 text-neutral-400" />
                <span>Property Type</span>
              </label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 bg-white text-xs font-medium capitalize"
              >
                <option value="all">All Types</option>
                <option value="house">House</option>
                <option value="apartment">Apartment</option>
                <option value="plot">Plot</option>
                <option value="commercial">Commercial</option>
                <option value="luxury">Luxury / Villa</option>
                <option value="office">Office</option>
                <option value="farmhouse">Farmhouse</option>
              </select>
            </div>

            {/* Sort Order */}
            <div>
              <label className="block text-neutral-600 font-semibold mb-1 flex items-center gap-1">
                <SlidersHorizontal className="w-3.5 h-3.5 text-neutral-400" />
                <span>Sort By</span>
              </label>
              <select
                value={priceSort}
                onChange={(e) => setPriceSort(e.target.value)}
                className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 bg-white text-xs font-medium"
              >
                <option value="featured">Featured First</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="newest">Recently Listed</option>
              </select>
            </div>

          </div>

          {/* Quick Filter Tag Buttons */}
          <div className="flex items-center justify-between pt-3 border-t border-neutral-100 flex-wrap gap-2 text-xs">
            <div className="flex items-center flex-wrap gap-1.5">
              <span className="text-neutral-500 mr-1">Quick Select:</span>
              <button
                onClick={() => { setPurpose('sale'); setType('house'); }}
                className="px-2.5 py-1 rounded bg-neutral-100 hover:bg-neutral-200 text-neutral-700 font-medium"
              >
                Houses for Sale
              </button>
              <button
                onClick={() => { setPurpose('rent'); setType('apartment'); }}
                className="px-2.5 py-1 rounded bg-neutral-100 hover:bg-neutral-200 text-neutral-700 font-medium"
              >
                Apartments for Rent
              </button>
              <button
                onClick={() => { setPurpose('sale'); setType('plot'); }}
                className="px-2.5 py-1 rounded bg-neutral-100 hover:bg-neutral-200 text-neutral-700 font-medium"
              >
                Plots for Sale
              </button>
              <button
                onClick={() => { setType('commercial'); }}
                className="px-2.5 py-1 rounded bg-neutral-100 hover:bg-neutral-200 text-neutral-700 font-medium"
              >
                Commercial Properties
              </button>
            </div>

            <button
              onClick={resetFilters}
              className="inline-flex items-center gap-1 text-xs text-neutral-500 hover:text-neutral-900 font-medium ml-auto"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset All Filters</span>
            </button>
          </div>

        </div>

        {/* Listings Grid */}
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((prop) => (
              <PropertyCard
                key={prop.id}
                property={prop}
                onNavigate={onNavigate}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-12 text-center border border-neutral-200 max-w-lg mx-auto my-12">
            <Filter className="w-10 h-10 text-neutral-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-neutral-900 font-display">
              No Properties Matched Your Criteria
            </h3>
            <p className="text-xs text-neutral-500 mt-2 mb-6">
              Try adjusting your search criteria, removing price thresholds, or resetting filters to view all available listings.
            </p>
            <button
              onClick={resetFilters}
              className="px-5 py-2.5 text-xs font-semibold text-white bg-neutral-900 rounded-xl hover:bg-neutral-800 transition-colors"
            >
              Reset Filters & Show All
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
