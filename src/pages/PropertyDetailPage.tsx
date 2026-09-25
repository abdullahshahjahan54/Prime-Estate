import React, { useState } from 'react';
import { 
  Bed, 
  Bath, 
  Maximize2, 
  MapPin, 
  Calendar, 
  Car, 
  ShieldCheck, 
  Phone, 
  Mail, 
  MessageSquare, 
  Share2, 
  Heart,
  CheckCircle2,
  Clock,
  ArrowRight
} from 'lucide-react';
import { PROPERTIES_DATA } from '../data/properties';
import { AGENTS_DATA } from '../data/agents';
import { PropertyCard } from '../components/PropertyCard';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { MortgageCalculator } from '../components/MortgageCalculator';
import { ScheduleVisitModal } from '../components/ScheduleVisitModal';
import { Property } from '../types';

interface PropertyDetailPageProps {
  slug: string;
  onNavigate: (path: string) => void;
}

export const PropertyDetailPage: React.FC<PropertyDetailPageProps> = ({ slug, onNavigate }) => {
  const property = PROPERTIES_DATA.find((p) => p.slug === slug);
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [scheduleModalOpen, setScheduleModalOpen] = useState(false);
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryPhone, setInquiryPhone] = useState('');
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [inquiryMessage, setInquiryMessage] = useState('');
  const [inquirySent, setInquirySent] = useState(false);
  const [saved, setSaved] = useState(false);

  // If property not found
  if (!property) {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-2xl border border-neutral-200 text-center max-w-md">
          <h2 className="text-xl font-bold font-display text-neutral-900 mb-2">Property Not Found</h2>
          <p className="text-xs text-neutral-500 mb-6">
            The property listing you requested may have been sold, rented, or moved.
          </p>
          <button
            onClick={() => onNavigate('/properties')}
            className="px-5 py-2.5 text-xs font-semibold text-white bg-neutral-900 rounded-xl hover:bg-neutral-800"
          >
            Browse All Properties
          </button>
        </div>
      </div>
    );
  }

  const agent = AGENTS_DATA.find((a) => a.id === property.agentId) || AGENTS_DATA[0];
  const activeImage = selectedImage || property.image;
  const isRent = property.purpose === 'rent';

  // Similar properties
  const similarProperties = PROPERTIES_DATA
    .filter((p) => p.id !== property.id && (p.city === property.city || p.propertyType === property.propertyType))
    .slice(0, 3);

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryName || !inquiryPhone) return;
    setInquirySent(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello ${agent.name}, I am interested in property ${property.propertyCode}: "${property.title}" listed for ${property.formattedPrice}. Please share further details.`
  );

  // Schema.org Structured Data
  const propertySchema = {
    '@context': 'https://schema.org',
    '@type': property.propertyType === 'apartment' ? 'Apartment' : 'SingleFamilyResidence',
    name: property.title,
    description: property.description,
    image: `https://prime-estate-2qag.vercel.app${property.image}`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: property.address,
      addressLocality: property.city,
      addressCountry: 'PK',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 33.7294,
      longitude: 73.0560,
    },
    numberOfRooms: property.bedrooms || 3,
    numberOfBathroomsTotal: property.bathrooms || 3,
    floorSize: {
      '@type': 'QuantitativeValue',
      value: property.areaSqFt,
      unitCode: 'FTK',
    },
    offers: {
      '@type': 'Offer',
      price: property.price,
      priceCurrency: 'PKR',
      availability: 'https://schema.org/InStock',
      businessFunction: isRent ? 'http://purl.org/goodrelations/v1#LeaseOut' : 'http://purl.org/goodrelations/v1#Sell',
    },
  };

  return (
    <div className="min-h-screen bg-neutral-50 py-8">
      <SEO
        title={`${property.title} | Prime Estate`}
        description={property.description.slice(0, 155)}
        canonicalPath={`/properties/${property.slug}`}
        ogImage={property.image}
        jsonLd={propertySchema}
      />

      {scheduleModalOpen && (
        <ScheduleVisitModal
          property={property}
          onClose={() => setScheduleModalOpen(false)}
        />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <Breadcrumbs
          items={[
            { label: isRent ? 'Properties for Rent' : 'Properties for Sale', href: isRent ? '/rent' : '/buy' },
            { label: `${property.city} Real Estate`, href: `/locations/${property.city.toLowerCase()}` },
            { label: property.title }
          ]}
          onNavigate={onNavigate}
        />

        {/* Property Header Summary */}
        <div className="mt-4 mb-6 flex flex-col lg:flex-row lg:items-start justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded bg-neutral-900 text-white">
                {isRent ? 'For Rent' : 'For Sale'}
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded bg-amber-100 text-amber-900">
                {property.propertyType}
              </span>
              <span className="text-xs text-neutral-500 font-mono">
                ID: {property.propertyCode}
              </span>
              <span className="text-xs text-emerald-700 flex items-center gap-1 font-medium">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Verified Clear Title</span>
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-950 font-display leading-tight">
              {property.title}
            </h1>

            <div className="flex items-center gap-2 text-xs sm:text-sm text-neutral-600">
              <MapPin className="w-4 h-4 text-neutral-400 shrink-0" />
              <span>{property.address}</span>
            </div>
          </div>

          <div className="flex flex-col lg:items-end gap-2 shrink-0">
            <div className="text-xs text-neutral-500 uppercase tracking-wider">Demand Price</div>
            <div className="text-3xl font-extrabold text-neutral-950 font-mono tabular-nums">
              {property.formattedPrice}
            </div>
            
            <div className="flex items-center gap-2 pt-1">
              <button
                onClick={() => setSaved(!saved)}
                className={`p-2 rounded-xl border transition-colors flex items-center gap-1 text-xs ${
                  saved ? 'bg-rose-50 text-rose-600 border-rose-200' : 'bg-white text-neutral-600 border-neutral-200 hover:bg-neutral-50'
                }`}
                title="Save Property"
              >
                <Heart className={`w-4 h-4 ${saved ? 'fill-current' : ''}`} />
                <span>{saved ? 'Saved' : 'Save'}</span>
              </button>

              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({ title: property.title, url: window.location.href });
                  } else {
                    navigator.clipboard.writeText(window.location.href);
                    alert('Property link copied to clipboard!');
                  }
                }}
                className="p-2 rounded-xl border border-neutral-200 bg-white text-neutral-600 hover:bg-neutral-50 transition-colors flex items-center gap-1 text-xs"
                title="Share Property"
              >
                <Share2 className="w-4 h-4" />
                <span>Share</span>
              </button>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="mb-10 space-y-3">
          {/* Main Large Image */}
          <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-200">
            <img
              src={activeImage}
              alt={property.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-all duration-300"
            />
            <div className="absolute top-4 right-4 bg-black/60 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
              Verified Photography
            </div>
          </div>

          {/* Thumbnails row */}
          {property.gallery && property.gallery.length > 1 && (
            <div className="flex items-center gap-3 overflow-x-auto pb-2">
              {property.gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(img)}
                  className={`relative w-24 h-16 rounded-xl overflow-hidden border-2 shrink-0 transition-all ${
                    activeImage === img ? 'border-neutral-900 scale-95' : 'border-transparent opacity-75 hover:opacity-100'
                  }`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail view ${idx + 1}`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Core Grid: Specs & Details + Agent Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16">
          
          {/* Left Column: Details, Features, Description, Loan Calculator */}
          <div className="lg:col-span-2 space-y-10">
            
            {/* Quick Specs Strip */}
            <div className="bg-white rounded-2xl p-6 border border-neutral-200 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono tabular-nums">
              {typeof property.bedrooms === 'number' && property.bedrooms > 0 && (
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center text-neutral-700 shrink-0">
                    <Bed className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-neutral-500 font-sans">Bedrooms</div>
                    <div className="font-bold text-sm text-neutral-900">{property.bedrooms} Beds</div>
                  </div>
                </div>
              )}

              {typeof property.bathrooms === 'number' && property.bathrooms > 0 && (
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center text-neutral-700 shrink-0">
                    <Bath className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-neutral-500 font-sans">Bathrooms</div>
                    <div className="font-bold text-sm text-neutral-900">{property.bathrooms} Baths</div>
                  </div>
                </div>
              )}

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center text-neutral-700 shrink-0">
                  <Maximize2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-neutral-500 font-sans">Covered Area</div>
                  <div className="font-bold text-sm text-neutral-900">{property.areaSize}</div>
                </div>
              </div>

              {property.yearBuilt && (
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center text-neutral-700 shrink-0">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-neutral-500 font-sans">Built Year</div>
                    <div className="font-bold text-sm text-neutral-900">{property.yearBuilt}</div>
                  </div>
                </div>
              )}
            </div>

            {/* In-Depth Description */}
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-neutral-200">
              <h2 className="text-xl font-bold text-neutral-950 font-display mb-4">
                Property Overview & Architectural Highlights
              </h2>
              <p className="text-sm text-neutral-700 leading-relaxed whitespace-pre-line">
                {property.description}
              </p>

              <div className="mt-6 pt-6 border-t border-neutral-100 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-neutral-600">
                <div>
                  <span className="text-neutral-400 block">Property Type:</span>
                  <span className="font-semibold text-neutral-900 capitalize">{property.propertyType}</span>
                </div>
                <div>
                  <span className="text-neutral-400 block">Transaction Type:</span>
                  <span className="font-semibold text-neutral-900">{isRent ? 'Rental Contract' : 'Outright Sale'}</span>
                </div>
                <div>
                  <span className="text-neutral-400 block">Parking Capacity:</span>
                  <span className="font-semibold text-neutral-900">{property.parkingSpaces || 2} Vehicles</span>
                </div>
                <div>
                  <span className="text-neutral-400 block">City Sector:</span>
                  <span className="font-semibold text-neutral-900">{property.area}</span>
                </div>
                <div>
                  <span className="text-neutral-400 block">Verification Status:</span>
                  <span className="font-semibold text-emerald-700">100% Verified</span>
                </div>
                <div>
                  <span className="text-neutral-400 block">Listing Code:</span>
                  <span className="font-mono font-semibold text-neutral-900">{property.propertyCode}</span>
                </div>
              </div>
            </div>

            {/* Key Features & Amenities Checklist */}
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-neutral-200">
              <h2 className="text-xl font-bold text-neutral-950 font-display mb-4">
                Features & Premium Amenities
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {property.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-neutral-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mortgage Calculator */}
            {!isRent && (
              <MortgageCalculator initialPrice={property.price} />
            )}

          </div>

          {/* Right Column: Agent Card, Action Buttons & Direct Inquiry Form */}
          <div className="space-y-6">
            
            {/* Agent Contact Box */}
            <div className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-xs space-y-5">
              <div className="flex items-center gap-4">
                <img
                  src={agent.photo}
                  alt={agent.name}
                  referrerPolicy="no-referrer"
                  className="w-16 h-16 rounded-full object-cover border-2 border-neutral-100"
                />
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-amber-700 font-semibold">
                    Listing Specialist
                  </div>
                  <h3 className="text-base font-bold text-neutral-950 font-display">
                    {agent.name}
                  </h3>
                  <div className="text-xs text-neutral-500">
                    {agent.title} · {agent.experienceYears}y exp
                  </div>
                </div>
              </div>

              {/* Action Buttons: Schedule Visit & WhatsApp */}
              <div className="space-y-2 pt-2">
                <button
                  type="button"
                  onClick={() => setScheduleModalOpen(true)}
                  className="w-full py-3 px-4 text-xs font-semibold text-white bg-neutral-900 hover:bg-neutral-800 rounded-xl transition-colors shadow-sm flex items-center justify-center gap-2"
                >
                  <Clock className="w-4 h-4" />
                  <span>Schedule a Guided Visit</span>
                </button>

                <a
                  href={`https://wa.me/${agent.whatsapp}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-600 rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>

                <a
                  href={`tel:${agent.phone}`}
                  className="w-full py-2.5 px-4 text-xs font-semibold text-neutral-900 bg-neutral-100 hover:bg-neutral-200 rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {agent.phone}</span>
                </a>
              </div>

              {/* Inquiry Form */}
              <div className="pt-4 border-t border-neutral-100">
                <h4 className="text-xs font-bold text-neutral-950 uppercase tracking-wider mb-3">
                  Send Direct Inquiry
                </h4>

                {!inquirySent ? (
                  <form onSubmit={handleInquirySubmit} className="space-y-3 text-xs">
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="Your Full Name *"
                        value={inquiryName}
                        onChange={(e) => setInquiryName(e.target.value)}
                        className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        required
                        placeholder="Phone / WhatsApp Number *"
                        value={inquiryPhone}
                        onChange={(e) => setInquiryPhone(e.target.value)}
                        className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Email Address"
                        value={inquiryEmail}
                        onChange={(e) => setInquiryEmail(e.target.value)}
                        className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900"
                      />
                    </div>
                    <div>
                      <textarea
                        rows={3}
                        placeholder="I would like to inquire about pricing, document inspection, or title transfer..."
                        value={inquiryMessage}
                        onChange={(e) => setInquiryMessage(e.target.value)}
                        className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-2.5 px-4 text-xs font-semibold text-neutral-900 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors"
                    >
                      Send Inquiry to {agent.name.split(' ')[0]}
                    </button>
                  </form>
                ) : (
                  <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded-xl text-center space-y-1">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600 mx-auto mb-1" />
                    <div className="font-semibold text-xs">Inquiry Dispatched!</div>
                    <div className="text-[11px] text-emerald-700">
                      {agent.name} has been notified and will reach out to you within 2 business hours.
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Trust Assurance Card */}
            <div className="bg-neutral-900 text-white rounded-2xl p-6 text-xs space-y-3">
              <div className="text-amber-400 font-semibold uppercase tracking-wider text-[11px]">
                Prime Estate Guarantee
              </div>
              <div className="text-sm font-bold font-display text-white">
                Zero Counterfeit Title Guarantee
              </div>
              <p className="text-neutral-400 leading-relaxed text-xs">
                We perform direct patwari / registrar verification and legal vetting before any token exchange. Your capital safety is our fiduciary commitment.
              </p>
            </div>

          </div>

        </div>

        {/* Similar Properties Section */}
        {similarProperties.length > 0 && (
          <div className="pt-8 border-t border-neutral-200">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs uppercase tracking-wider text-neutral-500 font-semibold">
                  Recommendations
                </span>
                <h2 className="text-2xl font-bold text-neutral-950 font-display">
                  Similar Properties in {property.city}
                </h2>
              </div>
              <button
                onClick={() => onNavigate(`/properties?city=${property.city}`)}
                className="text-xs font-semibold text-neutral-900 hover:text-amber-800 flex items-center gap-1"
              >
                <span>View More in {property.city}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {similarProperties.map((simProp) => (
                <PropertyCard
                  key={simProp.id}
                  property={simProp}
                  onNavigate={onNavigate}
                />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
