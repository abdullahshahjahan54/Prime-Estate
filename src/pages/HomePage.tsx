import React, { useState } from 'react';
import { 
  Search, 
  MapPin, 
  Home, 
  Building2, 
  DollarSign, 
  Bed, 
  ShieldCheck, 
  TrendingUp, 
  Award, 
  ArrowRight,
  FileCheck,
  Users,
  Compass
} from 'lucide-react';
import { PROPERTIES_DATA } from '../data/properties';
import { LOCATIONS_DATA } from '../data/locations';
import { BLOG_POSTS } from '../data/blog';
import { PropertyCard } from '../components/PropertyCard';
import { SEO } from '../components/SEO';
import { PropertyType } from '../types';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  // Search Bar State
  const [purpose, setPurpose] = useState<'sale' | 'rent'>('sale');
  const [selectedCity, setSelectedCity] = useState('');
  const [propertyType, setPropertyType] = useState<string>('all');
  const [minPrice, setMinPrice] = useState<string>('');
  const [maxPrice, setMaxPrice] = useState<string>('');
  const [bedrooms, setBedrooms] = useState<string>('any');

  const featuredProperties = PROPERTIES_DATA.filter((p) => p.featured).slice(0, 6);
  const primeCities = LOCATIONS_DATA.filter((l) => l.type === 'city');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    params.set('purpose', purpose);
    if (selectedCity) params.set('city', selectedCity);
    if (propertyType && propertyType !== 'all') params.set('type', propertyType);
    if (minPrice) params.set('minPrice', minPrice);
    if (maxPrice) params.set('maxPrice', maxPrice);
    if (bedrooms && bedrooms !== 'any') params.set('beds', bedrooms);

    onNavigate(`/properties?${params.toString()}`);
  };

  const categories = [
    { label: 'Houses for Sale', filter: '/buy?type=house', icon: Home, count: '320+ listings' },
    { label: 'Houses for Rent', filter: '/rent?type=house', icon: Home, count: '140+ listings' },
    { label: 'Apartments for Sale', filter: '/buy?type=apartment', icon: Building2, count: '210+ listings' },
    { label: 'Apartments for Rent', filter: '/rent?type=apartment', icon: Building2, count: '185+ listings' },
    { label: 'Plots for Sale', filter: '/buy?type=plot', icon: Compass, count: '450+ plots' },
    { label: 'Commercial Properties', filter: '/properties?type=commercial', icon: Building2, count: '90+ buildings' },
    { label: 'Luxury Homes & Villas', filter: '/properties?type=luxury', icon: Award, count: '65+ estates' },
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      <SEO
        title="Find Your Perfect Property | Prime Estate Real Estate Agency"
        description="Discover houses, apartments, plots, commercial properties and investment opportunities in prime locations. Verified real estate listings for sale and rent in Islamabad, Lahore, Karachi."
        canonicalPath="/"
      />

      {/* Hero Section */}
      <section className="relative min-h-[640px] lg:min-h-[720px] flex items-center justify-center bg-neutral-950 text-white overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        {/* Background Image with Optical Scrim */}
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/hero_luxury_villa_1790330964578.jpg"
            alt="Prime real estate agency luxury property and architectural modern estate"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center scale-105 opacity-40 brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-5xl mx-auto w-full text-center">
          
          {/* Unboxed editorial kicker */}
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-400 mb-4">
            <span>Verified Real Estate Agency & Consultancy</span>
            <span aria-hidden="true">·</span>
            <span>Islamabad · Lahore · Karachi</span>
          </div>

          {/* H1 Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-display text-white max-w-4xl mx-auto leading-tight" style={{ textWrap: 'balance' }}>
            Find Your Perfect Property
          </h1>

          {/* Supporting Text */}
          <p className="mt-4 text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed font-normal">
            Discover houses, apartments, plots, commercial properties and investment opportunities in prime locations with 100% verified titles and transparent property market guidance.
          </p>

          {/* Search Box Component */}
          <div className="mt-10 bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-6 shadow-2xl border border-white/20 text-neutral-900 text-left max-w-4xl mx-auto">
            
            {/* Segmented Buy / Rent Switch */}
            <div className="flex items-center gap-2 pb-5 border-b border-neutral-100">
              <div className="inline-flex p-1 bg-neutral-100 rounded-xl">
                <button
                  type="button"
                  onClick={() => setPurpose('sale')}
                  className={`px-5 py-2 text-xs font-semibold rounded-lg transition-all ${
                    purpose === 'sale'
                      ? 'bg-neutral-900 text-white shadow-xs'
                      : 'text-neutral-600 hover:text-neutral-950'
                  }`}
                >
                  Property for Sale
                </button>
                <button
                  type="button"
                  onClick={() => setPurpose('rent')}
                  className={`px-5 py-2 text-xs font-semibold rounded-lg transition-all ${
                    purpose === 'rent'
                      ? 'bg-neutral-900 text-white shadow-xs'
                      : 'text-neutral-600 hover:text-neutral-950'
                  }`}
                >
                  Property for Rent
                </button>
              </div>

              <div className="hidden sm:block ml-auto text-xs text-neutral-500">
                1,200+ Verified Listings in Pakistan
              </div>
            </div>

            {/* Filter Fields Form */}
            <form onSubmit={handleSearchSubmit} className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
              
              {/* Location */}
              <div>
                <label className="block text-neutral-700 font-semibold mb-1 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                  <span>City / Location</span>
                </label>
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="w-full px-3 py-2.5 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-neutral-900 focus:outline-none bg-white text-xs font-medium"
                >
                  <option value="">All Cities</option>
                  <option value="Islamabad">Islamabad</option>
                  <option value="Lahore">Lahore</option>
                  <option value="Karachi">Karachi</option>
                  <option value="Rawalpindi">Rawalpindi</option>
                </select>
              </div>

              {/* Property Type */}
              <div>
                <label className="block text-neutral-700 font-semibold mb-1 flex items-center gap-1">
                  <Building2 className="w-3.5 h-3.5 text-neutral-400" />
                  <span>Property Type</span>
                </label>
                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="w-full px-3 py-2.5 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-neutral-900 focus:outline-none bg-white text-xs font-medium capitalize"
                >
                  <option value="all">All Property Types</option>
                  <option value="house">Houses</option>
                  <option value="apartment">Apartments</option>
                  <option value="plot">Plots (Residential & Commercial)</option>
                  <option value="commercial">Commercial Plazas & Shops</option>
                  <option value="luxury">Luxury Villas & Mansions</option>
                  <option value="office">Corporate Offices</option>
                  <option value="farmhouse">Farmhouses</option>
                </select>
              </div>

              {/* Price Range */}
              <div>
                <label className="block text-neutral-700 font-semibold mb-1 flex items-center gap-1">
                  <DollarSign className="w-3.5 h-3.5 text-neutral-400" />
                  <span>Budget / Max Price</span>
                </label>
                <select
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  className="w-full px-3 py-2.5 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-neutral-900 focus:outline-none bg-white text-xs font-medium"
                >
                  <option value="">Any Budget</option>
                  {purpose === 'sale' ? (
                    <>
                      <option value="30000000">Up to PKR 3 Crore</option>
                      <option value="50000000">Up to PKR 5 Crore</option>
                      <option value="100000000">Up to PKR 10 Crore</option>
                      <option value="250000000">Up to PKR 25 Crore</option>
                      <option value="500000000">PKR 25 Crore+</option>
                    </>
                  ) : (
                    <>
                      <option value="100000">Up to PKR 1 Lakh/mo</option>
                      <option value="300000">Up to PKR 3 Lakh/mo</option>
                      <option value="600000">Up to PKR 6 Lakh/mo</option>
                      <option value="1500000">Up to PKR 15 Lakh/mo</option>
                    </>
                  )}
                </select>
              </div>

              {/* Bedrooms */}
              <div>
                <label className="block text-neutral-700 font-semibold mb-1 flex items-center gap-1">
                  <Bed className="w-3.5 h-3.5 text-neutral-400" />
                  <span>Bedrooms</span>
                </label>
                <select
                  value={bedrooms}
                  onChange={(e) => setBedrooms(e.target.value)}
                  className="w-full px-3 py-2.5 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-neutral-900 focus:outline-none bg-white text-xs font-medium"
                >
                  <option value="any">Any Bedrooms</option>
                  <option value="1">1+ Bedroom</option>
                  <option value="2">2+ Bedrooms</option>
                  <option value="3">3+ Bedrooms</option>
                  <option value="4">4+ Bedrooms</option>
                  <option value="5">5+ Bedrooms</option>
                </select>
              </div>

              {/* Action Buttons Row */}
              <div className="sm:col-span-2 lg:col-span-4 pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  className="w-full sm:flex-1 py-3 px-6 text-xs font-semibold text-white bg-neutral-900 hover:bg-neutral-800 rounded-xl transition-colors shadow-sm flex items-center justify-center gap-2"
                >
                  <Search className="w-4 h-4" />
                  <span>Search Properties</span>
                </button>

                <button
                  type="button"
                  onClick={() => onNavigate('/sell-property')}
                  className="w-full sm:w-auto py-3 px-6 text-xs font-semibold text-neutral-800 bg-neutral-100 hover:bg-neutral-200 rounded-xl transition-colors whitespace-nowrap"
                >
                  List Your Property
                </button>
              </div>
            </form>

          </div>

        </div>
      </section>

      {/* Property Categories Strip */}
      <section className="py-12 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-xs uppercase tracking-wider text-neutral-500 font-semibold">
                Explore The Property Market
              </span>
              <h2 className="text-2xl font-bold text-neutral-950 font-display">
                Property Categories
              </h2>
            </div>
            <button
              onClick={() => onNavigate('/properties')}
              className="text-xs font-semibold text-neutral-900 hover:text-amber-800 flex items-center gap-1"
            >
              <span>View All Listings</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
            {categories.map((cat, idx) => {
              const IconComp = cat.icon;
              return (
                <button
                  key={idx}
                  onClick={() => onNavigate(cat.filter)}
                  className="p-4 rounded-xl border border-neutral-200 bg-neutral-50 hover:bg-white hover:border-neutral-300 hover:shadow-md transition-all text-left group"
                >
                  <IconComp className="w-5 h-5 text-neutral-700 group-hover:text-amber-700 transition-colors mb-2" />
                  <div className="text-xs font-semibold text-neutral-900 leading-snug group-hover:text-amber-800">
                    {cat.label}
                  </div>
                  <div className="text-[11px] text-neutral-500 mt-1">
                    {cat.count}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-700">
              Verified Real Estate Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 font-display mt-1">
              Featured Properties
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 mt-2 max-w-2xl leading-relaxed">
              Explore our latest properties for sale and rent, including modern houses, apartments, residential plots and commercial properties with 100% verified documentation.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onNavigate('/buy')}
              className="px-4 py-2 text-xs font-semibold text-neutral-800 bg-white border border-neutral-300 hover:border-neutral-400 rounded-lg transition-colors"
            >
              Houses & Plots for Sale
            </button>
            <button
              onClick={() => onNavigate('/rent')}
              className="px-4 py-2 text-xs font-semibold text-white bg-neutral-900 hover:bg-neutral-800 rounded-lg transition-colors"
            >
              Properties for Rent
            </button>
          </div>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map((prop) => (
            <PropertyCard
              key={prop.id}
              property={prop}
              onNavigate={onNavigate}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => onNavigate('/properties')}
            className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold text-neutral-900 bg-white border border-neutral-300 hover:bg-neutral-50 rounded-xl transition-colors shadow-xs"
          >
            <span>Browse All {PROPERTIES_DATA.length} Verified Properties</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Real Estate Investment Spotlight */}
      <section className="py-16 bg-neutral-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-5">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                Capital Growth & Cash Flow
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-display leading-tight">
                High-Yield Real Estate Investment Opportunities
              </h2>
              <p className="text-neutral-300 text-sm leading-relaxed">
                Strategic property investment requires rigorous due diligence, understanding municipal zoning, and evaluating tenant demand. Whether you are acquiring commercial retail plazas in Islamabad’s Blue Area or acquiring residential plots in DHA Lahore, our investment consultants structure transactions to optimize capital appreciation and rental yield.
              </p>

              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-neutral-800 font-mono tabular-nums">
                <div>
                  <div className="text-2xl font-bold text-amber-400">7.8% - 9.2%</div>
                  <div className="text-xs text-neutral-400 mt-1 font-sans">Commercial Rental Yield</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-amber-400">100%</div>
                  <div className="text-xs text-neutral-400 mt-1 font-sans">Clear Title Guarantee</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-amber-400">PKR 45B+</div>
                  <div className="text-xs text-neutral-400 mt-1 font-sans">Brokered Volume</div>
                </div>
              </div>

              <div className="pt-4 flex items-center gap-3">
                <button
                  onClick={() => onNavigate('/investment')}
                  className="px-6 py-3 text-xs font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-colors shadow-sm"
                >
                  Explore Investment Properties
                </button>
                <button
                  onClick={() => onNavigate('/contact')}
                  className="px-6 py-3 text-xs font-semibold text-white bg-neutral-800 hover:bg-neutral-700 rounded-xl transition-colors"
                >
                  Book Private Advisory
                </button>
              </div>
            </div>

            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-neutral-800">
              <img
                src="/src/assets/images/property_commercial_plaza_1790330989336.jpg"
                alt="High-yield commercial property investment plaza in business center"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-300">
                  Featured Commercial Asset
                </span>
                <div className="text-lg font-bold text-white font-display mt-0.5">
                  Corporate Plaza on Jinnah Avenue, Blue Area
                </div>
                <div className="text-xs text-neutral-300 mt-1">
                  Fully leased Grade-A commercial asset delivering verified quarterly rental dividend.
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Prime Locations (Local SEO Hubs) */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
            Local Property Markets
          </span>
          <h2 className="text-3xl font-extrabold text-neutral-950 font-display mt-1">
            Explore Prime Real Estate Locations
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 mt-2">
            Find houses, luxury apartments, plots, and commercial buildings in top cities and master-planned residential communities across Pakistan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {primeCities.map((city) => (
            <div
              key={city.id}
              className="group relative bg-white rounded-2xl overflow-hidden border border-neutral-200 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
                <img
                  src={city.image}
                  alt={`Real estate in ${city.name} - properties for sale and rent`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-3 text-white">
                  <h3 className="text-lg font-bold font-display">{city.name}</h3>
                  <div className="text-xs text-neutral-300">{city.propertyCount} Verified Listings</div>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between text-xs">
                <div>
                  <p className="text-neutral-600 line-clamp-2 mb-3">
                    {city.description}
                  </p>
                  <div className="text-neutral-500 mb-4">
                    <span className="font-semibold text-neutral-800">Avg. Land Benchmark: </span>
                    <span className="font-mono">{city.averagePricePerMarla}</span>
                  </div>
                </div>

                <button
                  onClick={() => onNavigate(`/locations/${city.slug}`)}
                  className="w-full py-2 px-3 text-xs font-semibold text-neutral-900 bg-neutral-100 hover:bg-neutral-900 hover:text-white rounded-lg transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Explore {city.name} Real Estate</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Prime Estate (Trust & Transparency) */}
      <section className="py-16 bg-white border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-700">
              Trust & Professionalism
            </span>
            <h2 className="text-3xl font-extrabold text-neutral-950 font-display mt-1">
              Why Trust Prime Estate Real Estate Agency
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 mt-2">
              We eliminate ambiguity from Pakistan’s real estate transactions through legal integrity and deep market intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-xs">
            <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200">
              <FileCheck className="w-8 h-8 text-amber-700 mb-4" />
              <h3 className="text-base font-bold text-neutral-950 mb-2 font-display">
                100% Verified Titles & Zero Encroachment
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                Every property listing on our portal undergoes multi-tier verification: revenue office Fard audit, municipal NOC validation (CDA/LDA/RDA), and physical site boundary inspection.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200">
              <ShieldCheck className="w-8 h-8 text-amber-700 mb-4" />
              <h3 className="text-base font-bold text-neutral-950 mb-2 font-display">
                Transparent Valuations & No Hidden Costs
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                We believe in complete transparency. Our property consultants provide genuine recent comparative sales data, clear FBR tax breakdown, and fair buyer-seller negotiations.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200">
              <Users className="w-8 h-8 text-amber-700 mb-4" />
              <h3 className="text-base font-bold text-neutral-950 mb-2 font-display">
                Dedicated Overseas Investor Support
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                Specialized liaison desk for overseas Pakistanis in UK, USA, UAE, and Canada. Remote power-of-attorney coordination, video property inspections, and direct banking remittances.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Real Estate Guides & Insights (Blog Preview) */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
              Knowledge & Guides
            </span>
            <h2 className="text-3xl font-extrabold text-neutral-950 font-display mt-1">
              Real Estate Guides & Market Insights
            </h2>
          </div>
          <button
            onClick={() => onNavigate('/blog')}
            className="text-xs font-semibold text-neutral-900 hover:text-amber-800 flex items-center gap-1"
          >
            <span>Read All Guides</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.slice(0, 3).map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl border border-neutral-200 overflow-hidden hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="aspect-[16/10] overflow-hidden bg-neutral-100">
                  <img
                    src={post.featuredImage}
                    alt={post.imageAlt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-neutral-500 mb-2">
                    <span>{post.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-base font-bold text-neutral-950 hover:text-amber-800 transition-colors line-clamp-2 mb-2 font-display">
                    {post.title}
                  </h3>
                  <p className="text-xs text-neutral-600 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => onNavigate(`/blog/${post.slug}`)}
                  className="text-xs font-semibold text-neutral-900 hover:text-amber-800 inline-flex items-center gap-1"
                >
                  <span>Read Full Guide</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Lead Generation CTA Banner */}
      <section className="py-16 bg-neutral-950 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display" style={{ textWrap: 'balance' }}>
            Ready to Buy, Sell, or Rent Your Next Property?
          </h2>
          <p className="text-sm text-neutral-300 max-w-xl mx-auto">
            Connect with our verified real estate agents today for private property viewings, complimentary property valuations, and tailored investment advisory.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => onNavigate('/contact')}
              className="px-6 py-3 text-xs font-semibold text-neutral-950 bg-white hover:bg-neutral-100 rounded-xl transition-colors shadow-sm"
            >
              Contact Our Property Consultants
            </button>
            <a
              href="https://wa.me/923001234567?text=Hello%20Prime%20Estate%2C%20I%20would%20like%20to%20inquire%20about%20properties"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-600 rounded-xl transition-colors"
            >
              WhatsApp Quick Chat
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
