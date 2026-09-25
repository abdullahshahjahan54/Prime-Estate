import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { PropertiesPage } from './pages/PropertiesPage';
import { PropertyDetailPage } from './pages/PropertyDetailPage';
import { SellPropertyPage } from './pages/SellPropertyPage';
import { ServicesPage } from './pages/ServicesPage';
import { InvestmentPage } from './pages/InvestmentPage';
import { LocationsPage } from './pages/LocationsPage';
import { AboutPage } from './pages/AboutPage';
import { AgentsPage } from './pages/AgentsPage';
import { BlogPage } from './pages/BlogPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { ContactPage } from './pages/ContactPage';
import { SitemapViewPage } from './pages/SitemapViewPage';
import { AIAssistant } from './components/AIAssistant';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });

  const [searchParams, setSearchParams] = useState<URLSearchParams>(() => {
    return new URLSearchParams(window.location.search);
  });

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
      setSearchParams(new URLSearchParams(window.location.search));
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    // If full url or external
    if (path.startsWith('http')) {
      window.location.href = path;
      return;
    }

    const [pathname, search] = path.split('?');
    window.history.pushState({}, '', path);
    setCurrentPath(pathname);
    setSearchParams(new URLSearchParams(search || ''));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Route Dispatcher
  const renderRoute = () => {
    // 1. Homepage
    if (currentPath === '/' || currentPath === '') {
      return <HomePage onNavigate={navigate} />;
    }

    // 2. Buy Property Page
    if (currentPath === '/buy') {
      const typeParam = searchParams.get('type') || undefined;
      const cityParam = searchParams.get('city') || undefined;
      return (
        <PropertiesPage
          onNavigate={navigate}
          initialPurpose="sale"
          initialType={typeParam}
          initialCity={cityParam}
          customH1="Properties for Sale"
          customTitle="Properties for Sale | Houses, Apartments & Plots"
          customDescription="Explore verified properties for sale in Pakistan. Buy modern houses, luxury apartments, residential plots, and commercial properties with clear titles."
        />
      );
    }

    // 3. Rent Property Page
    if (currentPath === '/rent') {
      const typeParam = searchParams.get('type') || undefined;
      const cityParam = searchParams.get('city') || undefined;
      return (
        <PropertiesPage
          onNavigate={navigate}
          initialPurpose="rent"
          initialType={typeParam}
          initialCity={cityParam}
          customH1="Properties for Rent"
          customTitle="Properties for Rent | Houses & Luxury Apartments"
          customDescription="Discover prime properties for rent in Pakistan. Find houses for rent, furnished luxury apartments, corporate offices, and retail commercial spaces."
        />
      );
    }

    // 4. Property Detail Page (/properties/:slug)
    if (currentPath.startsWith('/properties/') && currentPath !== '/properties') {
      const slug = currentPath.replace('/properties/', '');
      return <PropertyDetailPage slug={slug} onNavigate={navigate} />;
    }

    // 5. Properties Listing Page (/properties)
    if (currentPath === '/properties') {
      const purposeParam = searchParams.get('purpose') as 'sale' | 'rent' | null;
      const typeParam = searchParams.get('type') || undefined;
      const cityParam = searchParams.get('city') || undefined;
      return (
        <PropertiesPage
          onNavigate={navigate}
          initialPurpose={purposeParam || 'all'}
          initialType={typeParam}
          initialCity={cityParam}
        />
      );
    }

    // 6. Sell Property Page
    if (currentPath === '/sell-property') {
      return <SellPropertyPage onNavigate={navigate} />;
    }

    // 7. Real Estate Services
    if (currentPath === '/services') {
      return <ServicesPage onNavigate={navigate} />;
    }

    // 8. Investment Opportunities
    if (currentPath === '/investment') {
      return <InvestmentPage onNavigate={navigate} />;
    }

    // 9. Locations (/locations/:city or /locations/:city/:area)
    if (currentPath.startsWith('/locations/') && currentPath !== '/locations') {
      const parts = currentPath.replace('/locations/', '').split('/');
      // If /locations/:city/:area, use the last segment as area slug or first as city
      const locSlug = parts[parts.length - 1];
      return <LocationsPage locationSlug={locSlug} onNavigate={navigate} />;
    }

    if (currentPath === '/locations') {
      return <LocationsPage onNavigate={navigate} />;
    }

    // 10. About Page
    if (currentPath === '/about') {
      return <AboutPage onNavigate={navigate} />;
    }

    // 11. Agents Directory
    if (currentPath === '/agents') {
      return <AgentsPage onNavigate={navigate} />;
    }

    // 12. Blog Article Reader (/blog/:slug)
    if (currentPath.startsWith('/blog/') && currentPath !== '/blog') {
      const slug = currentPath.replace('/blog/', '');
      return <BlogPostPage slug={slug} onNavigate={navigate} />;
    }

    // 13. Blog Directory (/blog)
    if (currentPath === '/blog') {
      return <BlogPage onNavigate={navigate} />;
    }

    // 14. Contact Page
    if (currentPath === '/contact') {
      return <ContactPage onNavigate={navigate} />;
    }

    // 15. XML Sitemap Viewer
    if (currentPath === '/sitemap-view') {
      return <SitemapViewPage onNavigate={navigate} />;
    }

    // Fallback 404 -> Not Found
    return (
      <div className="min-h-[70vh] bg-neutral-50 flex items-center justify-center p-4">
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-neutral-200 text-center max-w-md shadow-xs">
          <span className="text-4xl font-extrabold text-neutral-900 font-mono">404</span>
          <h2 className="text-2xl font-bold font-display text-neutral-950 mt-2">Page Not Found</h2>
          <p className="text-xs text-neutral-500 mt-2 mb-6">
            The real estate page or property listing you are searching for does not exist or has been relocated.
          </p>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-2.5 text-xs font-semibold text-white bg-neutral-900 rounded-xl hover:bg-neutral-800 transition-colors shadow-sm"
          >
            Return to Prime Estate Home
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-neutral-50 text-neutral-900 selection:bg-amber-700 selection:text-white">
      <Navbar currentPath={currentPath} onNavigate={navigate} />
      <main className="flex-1">
        {renderRoute()}
      </main>
      <Footer onNavigate={navigate} />
      <AIAssistant onNavigate={navigate} />
    </div>
  );
}
