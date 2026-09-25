import React, { useState } from 'react';
import { Menu, X, PhoneCall, ChevronDown } from 'lucide-react';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleNav = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  };

  const navLinks = [
    { label: 'Properties', href: '/properties' },
    { label: 'Buy', href: '/buy' },
    { label: 'Rent', href: '/rent' },
    { label: 'Locations', href: '/locations' },
    { label: 'Investment', href: '/investment' },
    { label: 'Services', href: '/services' },
  ];

  const secondaryLinks = [
    { label: 'About Us', href: '/about' },
    { label: 'Our Agents', href: '/agents' },
    { label: 'Real Estate Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Zone 1: Brand Title (Single text element wordmark in display face) */}
          <button
            onClick={() => handleNav('/')}
            className="text-2xl font-bold tracking-tight text-neutral-950 font-display hover:text-amber-800 transition-colors focus:outline-none flex items-center gap-2"
          >
            <span>Prime Estate</span>
          </button>

          {/* Zone 2: 4-6 Clean text navigation links with subtle hover states */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-neutral-700">
            {navLinks.map((link) => {
              const isActive = currentPath === link.href;
              return (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className={`transition-colors py-1 relative focus:outline-none whitespace-nowrap ${
                    isActive
                      ? 'text-neutral-950 font-semibold'
                      : 'text-neutral-600 hover:text-neutral-950'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-neutral-900 rounded-full" />
                  )}
                </button>
              );
            })}

            {/* More dropdown */}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-1 py-1 text-neutral-600 hover:text-neutral-950 transition-colors focus:outline-none whitespace-nowrap"
              >
                <span>Company</span>
                <ChevronDown className="w-3.5 h-3.5 text-neutral-400" />
              </button>

              {dropdownOpen && (
                <div 
                  className="absolute right-0 mt-2 w-48 bg-white border border-neutral-200 rounded-xl shadow-lg py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  {secondaryLinks.map((sub) => (
                    <button
                      key={sub.href}
                      onClick={() => handleNav(sub.href)}
                      className="block w-full text-left px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50 hover:text-neutral-950 transition-colors"
                    >
                      {sub.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Zone 3: 1-2 Primary Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://wa.me/923001234567?text=Hello%20Prime%20Estate%20Team%2C%20I%20am%20interested%20in%20property%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-neutral-700 bg-neutral-100 hover:bg-neutral-200 rounded-lg transition-colors whitespace-nowrap"
            >
              <PhoneCall className="w-3.5 h-3.5 text-neutral-600" />
              <span>+92 300 1234567</span>
            </a>

            <button
              onClick={() => handleNav('/sell-property')}
              className="px-4 py-2 text-xs font-semibold text-white bg-neutral-900 hover:bg-neutral-800 rounded-lg transition-colors shadow-sm whitespace-nowrap"
            >
              List Your Property
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-700 hover:text-neutral-950 rounded-lg focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-neutral-200 px-4 pt-3 pb-6 space-y-3">
          <div className="grid grid-cols-2 gap-2 text-sm">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className={`text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                  currentPath === link.href
                    ? 'bg-neutral-100 text-neutral-950 font-semibold'
                    : 'text-neutral-700 hover:bg-neutral-50'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-neutral-100">
            <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2 px-1">
              Company
            </div>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {secondaryLinks.map((sub) => (
                <button
                  key={sub.href}
                  onClick={() => handleNav(sub.href)}
                  className="text-left px-3 py-1.5 text-neutral-700 hover:bg-neutral-50 rounded-lg text-sm"
                >
                  {sub.label}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-neutral-100 flex flex-col gap-2">
            <button
              onClick={() => handleNav('/sell-property')}
              className="w-full py-2.5 text-center text-xs font-semibold text-white bg-neutral-900 rounded-lg shadow-sm"
            >
              List Your Property
            </button>
            <a
              href="https://wa.me/923001234567?text=Hello%20Prime%20Estate%20Team%2C%20I%20am%20interested%20in%20property%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2 text-center text-xs font-semibold text-neutral-700 bg-neutral-100 rounded-lg"
            >
              WhatsApp Support (+92 300 1234567)
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
