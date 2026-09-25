import React from 'react';
import { Mail, Phone, MapPin, ExternalLink, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-neutral-950 text-neutral-300 pt-16 pb-12 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-neutral-800 text-sm">
          
          {/* Brand & Trust */}
          <div className="lg:col-span-2 space-y-4">
            <button
              onClick={() => onNavigate('/')}
              className="text-2xl font-bold tracking-tight text-white font-display hover:text-amber-400 transition-colors text-left"
            >
              Prime Estate
            </button>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-sm">
              Pakistan’s premier real estate agency and property consultancy. We provide 100% verified property titles, transparent market valuations, and bespoke investment portfolio management in Islamabad, Lahore, Karachi, and Rawalpindi.
            </p>
            <div className="flex items-center gap-2 text-xs text-neutral-400 pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Certified Real Estate Agents & CDA / LDA Registered Brokerage</span>
            </div>

            {/* Social Media Links & Logos */}
            <div className="pt-3">
              <div className="text-xs uppercase font-semibold tracking-wider text-neutral-400 mb-3">
                Follow Us & Connect
              </div>
              <div className="flex items-center flex-wrap gap-2.5">
                
                {/* Facebook */}
                <a
                  href="https://facebook.com/primeestate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-[#1877F2] hover:border-[#1877F2] transition-all shadow-xs"
                  aria-label="Prime Estate on Facebook"
                  title="Facebook"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com/primeestate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-gradient-to-tr hover:from-amber-500 hover:via-rose-600 hover:to-purple-600 hover:border-transparent transition-all shadow-xs"
                  aria-label="Prime Estate on Instagram"
                  title="Instagram"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/923001234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-[#25D366] hover:border-[#25D366] transition-all shadow-xs"
                  aria-label="Prime Estate on WhatsApp"
                  title="WhatsApp"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                </a>

                {/* TikTok */}
                <a
                  href="https://tiktok.com/@primeestate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-black hover:border-neutral-500 transition-all shadow-xs"
                  aria-label="Prime Estate on TikTok"
                  title="TikTok"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href="https://youtube.com/@primeestate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-[#FF0000] hover:border-[#FF0000] transition-all shadow-xs"
                  aria-label="Prime Estate on YouTube"
                  title="YouTube"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/company/primeestate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-[#0A66C2] hover:border-[#0A66C2] transition-all shadow-xs"
                  aria-label="Prime Estate on LinkedIn"
                  title="LinkedIn"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                </a>

                {/* X (formerly Twitter) */}
                <a
                  href="https://x.com/primeestate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-neutral-800 hover:border-neutral-600 transition-all shadow-xs"
                  aria-label="Prime Estate on X"
                  title="X (Twitter)"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>

              </div>
            </div>
          </div>

          {/* Column 1: Properties for Sale & Rent */}
          <div className="space-y-3">
            <div className="text-white font-semibold text-xs tracking-wider uppercase">
              Property Categories
            </div>
            <ul className="space-y-2 text-neutral-400 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('/buy?type=house')}
                  className="hover:text-white transition-colors text-left"
                >
                  Houses for Sale
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/rent?type=house')}
                  className="hover:text-white transition-colors text-left"
                >
                  Houses for Rent
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/buy?type=apartment')}
                  className="hover:text-white transition-colors text-left"
                >
                  Apartments for Sale
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/rent?type=apartment')}
                  className="hover:text-white transition-colors text-left"
                >
                  Apartments for Rent
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/buy?type=plot')}
                  className="hover:text-white transition-colors text-left"
                >
                  Plots for Sale
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/properties?type=commercial')}
                  className="hover:text-white transition-colors text-left"
                >
                  Commercial Properties
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/properties?type=luxury')}
                  className="hover:text-white transition-colors text-left"
                >
                  Luxury Homes & Villas
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Local Real Estate Hubs */}
          <div className="space-y-3">
            <div className="text-white font-semibold text-xs tracking-wider uppercase">
              Prime Locations
            </div>
            <ul className="space-y-2 text-neutral-400 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('/locations/islamabad')}
                  className="hover:text-white transition-colors text-left"
                >
                  Real Estate in Islamabad
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/locations/lahore')}
                  className="hover:text-white transition-colors text-left"
                >
                  Real Estate in Lahore
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/locations/karachi')}
                  className="hover:text-white transition-colors text-left"
                >
                  Real Estate in Karachi
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/locations/rawalpindi')}
                  className="hover:text-white transition-colors text-left"
                >
                  Real Estate in Rawalpindi
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/locations/sector-f7')}
                  className="hover:text-white transition-colors text-left"
                >
                  Houses in Sector F-7
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/locations/blue-area')}
                  className="hover:text-white transition-colors text-left"
                >
                  Commercial in Blue Area
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/locations/gulberg-lahore')}
                  className="hover:text-white transition-colors text-left"
                >
                  Apartments in Gulberg
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Corporate Office */}
          <div className="space-y-3">
            <div className="text-white font-semibold text-xs tracking-wider uppercase">
              Corporate Office
            </div>
            <div className="space-y-2.5 text-neutral-400 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-neutral-500 shrink-0 mt-0.5" />
                <span>Executive Heights, Main Jinnah Super, Sector F-7/2, Islamabad, Pakistan</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-neutral-500 shrink-0" />
                <a href="tel:+923001234567" className="hover:text-white transition-colors">
                  +92 300 1234567
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-neutral-500 shrink-0" />
                <a href="mailto:info@primeestate.pk" className="hover:text-white transition-colors">
                  info@primeestate.pk
                </a>
              </div>
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('/contact')}
                  className="inline-flex items-center gap-1 text-xs text-amber-400 hover:text-amber-300 font-medium"
                >
                  <span>Schedule an In-Person Consultation</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright, Internal SEO Sitemap Links, Legal */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            &copy; {new Date().getFullYear()} Prime Estate (Pvt) Ltd. All rights reserved.
          </div>

          <div className="flex items-center flex-wrap gap-5">
            <button onClick={() => onNavigate('/services')} className="hover:text-neutral-300 transition-colors">
              Property Services
            </button>
            <button onClick={() => onNavigate('/investment')} className="hover:text-neutral-300 transition-colors">
              Investment Advisory
            </button>
            <button onClick={() => onNavigate('/blog')} className="hover:text-neutral-300 transition-colors">
              Real Estate Guides
            </button>
            <button onClick={() => onNavigate('/sitemap-view')} className="hover:text-neutral-300 transition-colors">
              XML Sitemap
            </button>
            <a href="/robots.txt" target="_blank" className="hover:text-neutral-300 transition-colors">
              robots.txt
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
