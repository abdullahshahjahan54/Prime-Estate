import React from 'react';
import { Bed, Bath, Maximize2, MapPin, ArrowRight } from 'lucide-react';
import { Property } from '../types';

interface PropertyCardProps {
  property: Property;
  onNavigate: (path: string) => void;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ property, onNavigate }) => {
  const isRent = property.purpose === 'rent';

  return (
    <article className="group bg-white rounded-2xl border border-neutral-200 overflow-hidden hover:border-neutral-300 hover:shadow-lg transition-all duration-200 flex flex-col h-full">
      {/* Property Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
        <img
          src={property.image}
          alt={property.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />
        
        {/* Subtle overlay indicator for Purpose / Featured */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5">
          <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded bg-neutral-950/80 text-white backdrop-blur-sm">
            {isRent ? 'For Rent' : 'For Sale'}
          </span>
          {property.featured && (
            <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded bg-amber-600/90 text-white backdrop-blur-sm">
              Featured
            </span>
          )}
        </div>

        <div className="absolute bottom-3 right-3">
          <span className="text-xs font-mono tabular-nums px-2 py-0.5 rounded bg-black/60 text-white backdrop-blur-sm">
            {property.propertyCode}
          </span>
        </div>
      </div>

      {/* Property Details */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Price & Purpose */}
          <div className="flex items-baseline justify-between gap-2 mb-2">
            <div className="text-xl font-bold tracking-tight text-neutral-950 font-mono tabular-nums">
              {property.formattedPrice}
            </div>
            <div className="text-xs text-neutral-500 capitalize">
              {property.propertyType}
            </div>
          </div>

          {/* Title */}
          <h3 className="text-base font-semibold text-neutral-900 group-hover:text-amber-800 transition-colors line-clamp-2 mb-2 leading-snug">
            {property.title}
          </h3>

          {/* Location */}
          <div className="flex items-center gap-1.5 text-xs text-neutral-500 mb-3">
            <MapPin className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
            <span className="truncate">{property.area}, {property.city}</span>
          </div>

          {/* Description snippet */}
          <p className="text-xs text-neutral-600 line-clamp-2 mb-4 leading-relaxed">
            {property.description}
          </p>
        </div>

        <div>
          {/* Metadata Specs (Zero-Pill discipline: unboxed text with subtle typographic separators) */}
          <div className="flex items-center justify-between text-xs text-neutral-600 border-t border-neutral-100 pt-3 mb-4 font-mono tabular-nums">
            {typeof property.bedrooms === 'number' && property.bedrooms > 0 && (
              <div className="flex items-center gap-1">
                <Bed className="w-3.5 h-3.5 text-neutral-400" />
                <span>{property.bedrooms} Beds</span>
              </div>
            )}

            {typeof property.bathrooms === 'number' && property.bathrooms > 0 && (
              <div className="flex items-center gap-1">
                <Bath className="w-3.5 h-3.5 text-neutral-400" />
                <span>{property.bathrooms} Baths</span>
              </div>
            )}

            <div className="flex items-center gap-1">
              <Maximize2 className="w-3.5 h-3.5 text-neutral-400" />
              <span>{property.areaSize}</span>
            </div>
          </div>

          {/* View Property Action */}
          <button
            onClick={() => onNavigate(`/properties/${property.slug}`)}
            className="w-full flex items-center justify-center gap-1.5 py-2.5 px-4 text-xs font-semibold text-neutral-900 bg-neutral-100 hover:bg-neutral-900 hover:text-white rounded-xl transition-all duration-200 group-hover:bg-neutral-900 group-hover:text-white"
          >
            <span>View Property Details</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </article>
  );
};
