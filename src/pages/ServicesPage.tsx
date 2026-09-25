import React, { useState } from 'react';
import { 
  Home, 
  DollarSign, 
  Key, 
  ShieldCheck, 
  TrendingUp, 
  Calculator, 
  Award, 
  Building2, 
  Check, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { SERVICES_DATA } from '../data/services';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';

interface ServicesPageProps {
  onNavigate: (path: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  // Interactive Property Valuation Estimator State
  const [valCity, setValCity] = useState('Islamabad');
  const [valArea, setValArea] = useState('Sector F-7');
  const [valType, setValType] = useState('house');
  const [valSizeMarla, setValSizeMarla] = useState(20); // 1 Kanal = 20 Marla
  const [valEstimated, setValEstimated] = useState<{ min: string; max: string; avg: string } | null>(null);

  const calculateEstimate = (e: React.FormEvent) => {
    e.preventDefault();
    // Benchmark calculations
    let baseRatePerMarla = 5000000; // 50 Lakh
    if (valCity === 'Islamabad') {
      baseRatePerMarla = valArea.includes('F-7') || valArea.includes('F-6') ? 8500000 : 5500000;
    } else if (valCity === 'Lahore') {
      baseRatePerMarla = 5200000;
    } else if (valCity === 'Karachi') {
      baseRatePerMarla = 6000000;
    }

    if (valType === 'commercial') baseRatePerMarla *= 2.4;
    if (valType === 'apartment') baseRatePerMarla *= 0.8;

    const totalBase = baseRatePerMarla * valSizeMarla;
    const minVal = totalBase * 0.92;
    const maxVal = totalBase * 1.12;

    const toCrore = (num: number) => {
      const cr = num / 10000000;
      return `PKR ${cr.toFixed(2)} Crore`;
    };

    setValEstimated({
      min: toCrore(minVal),
      max: toCrore(maxVal),
      avg: toCrore(totalBase),
    });
  };

  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'Home': return <Home className="w-6 h-6 text-amber-700" />;
      case 'DollarSign': return <DollarSign className="w-6 h-6 text-amber-700" />;
      case 'Key': return <Key className="w-6 h-6 text-amber-700" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-amber-700" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-amber-700" />;
      case 'Calculator': return <Calculator className="w-6 h-6 text-amber-700" />;
      case 'Award': return <Award className="w-6 h-6 text-amber-700" />;
      default: return <Building2 className="w-6 h-6 text-amber-700" />;
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50 py-8">
      <SEO
        title="Comprehensive Real Estate Services | Prime Estate"
        description="Explore our full spectrum of real estate services: property buying, selling, rental, property management, certified valuation, and investment advisory in Pakistan."
        canonicalPath="/services"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <Breadcrumbs
          items={[{ label: 'Real Estate Services' }]}
          onNavigate={onNavigate}
        />

        {/* Hero Banner */}
        <div className="text-center max-w-3xl mx-auto my-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-700">
            End-to-End Property Expertise
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-neutral-950 font-display mt-2">
            Real Estate Services
          </h1>
          <p className="text-xs sm:text-sm text-neutral-600 mt-3 leading-relaxed">
            From verified title due diligence and luxury architectural marketing to hands-off rental management and portfolio appraisal, Prime Estate provides fiduciary property advisory across Pakistan.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {SERVICES_DATA.map((srv) => (
            <div
              key={srv.id}
              className="bg-white rounded-2xl p-7 border border-neutral-200 hover:border-neutral-300 hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center mb-5">
                  {getServiceIcon(srv.iconName)}
                </div>

                <h2 className="text-lg font-bold text-neutral-950 font-display mb-2">
                  {srv.title}
                </h2>

                <p className="text-xs text-neutral-600 mb-5 leading-relaxed">
                  {srv.fullDesc}
                </p>

                <div className="space-y-2 mb-6">
                  {srv.benefits.map((b, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-neutral-700">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => {
                  if (srv.id === 'property-buying') onNavigate('/buy');
                  else if (srv.id === 'property-selling') onNavigate('/sell-property');
                  else if (srv.id === 'property-rental') onNavigate('/rent');
                  else if (srv.id === 'property-investment') onNavigate('/investment');
                  else onNavigate('/contact');
                }}
                className="w-full py-2.5 px-4 text-xs font-semibold text-neutral-900 bg-neutral-100 hover:bg-neutral-900 hover:text-white rounded-xl transition-colors flex items-center justify-center gap-1.5"
              >
                <span>{srv.actionLabel}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        {/* Free Property Valuation Estimator Tool */}
        <div className="bg-white rounded-2xl border border-neutral-200 p-8 lg:p-12 mb-16 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-amber-700 mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Instant Market Intelligence</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-950 font-display">
                Complimentary Property Valuation Estimator
              </h2>
              <p className="text-xs sm:text-sm text-neutral-600 mt-2 leading-relaxed">
                Estimate the fair market valuation band for residential houses, plots, and commercial properties using our recent transaction pricing models.
              </p>

              <form onSubmit={calculateEstimate} className="mt-6 space-y-4 text-xs">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-neutral-700 font-semibold mb-1">City</label>
                    <select
                      value={valCity}
                      onChange={(e) => setValCity(e.target.value)}
                      className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 bg-white"
                    >
                      <option value="Islamabad">Islamabad</option>
                      <option value="Lahore">Lahore</option>
                      <option value="Karachi">Karachi</option>
                      <option value="Rawalpindi">Rawalpindi</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-neutral-700 font-semibold mb-1">Property Type</label>
                    <select
                      value={valType}
                      onChange={(e) => setValType(e.target.value)}
                      className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 bg-white"
                    >
                      <option value="house">Built House</option>
                      <option value="plot">Vacant Plot</option>
                      <option value="commercial">Commercial Building</option>
                      <option value="apartment">Apartment</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-neutral-700 font-semibold mb-1">Sector / Zone</label>
                    <input
                      type="text"
                      value={valArea}
                      onChange={(e) => setValArea(e.target.value)}
                      placeholder="e.g. Sector F-7, DHA 6"
                      className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900"
                    />
                  </div>

                  <div>
                    <label className="block text-neutral-700 font-semibold mb-1">
                      Plot/Unit Size ({valSizeMarla} Marla)
                    </label>
                    <select
                      value={valSizeMarla}
                      onChange={(e) => setValSizeMarla(Number(e.target.value))}
                      className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 bg-white"
                    >
                      <option value={5}>5 Marla (125 Sq. Yds)</option>
                      <option value={7}>7 Marla (175 Sq. Yds)</option>
                      <option value={10}>10 Marla (250 Sq. Yds)</option>
                      <option value={20}>1 Kanal (20 Marla)</option>
                      <option value={40}>2 Kanal (40 Marla)</option>
                      <option value={80}>4 Kanal Estate</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 font-semibold text-white bg-neutral-900 hover:bg-neutral-800 rounded-xl transition-colors shadow-sm"
                >
                  Calculate Benchmark Valuation
                </button>
              </form>
            </div>

            {/* Valuation Results */}
            <div className="bg-neutral-50 rounded-2xl p-6 sm:p-8 border border-neutral-200">
              {valEstimated ? (
                <div className="space-y-4 text-center">
                  <span className="text-xs uppercase tracking-wider text-neutral-500 font-semibold">
                    Estimated Market Value Range
                  </span>
                  <div className="text-3xl sm:text-4xl font-extrabold text-neutral-950 font-mono tabular-nums">
                    {valEstimated.avg}
                  </div>
                  <div className="text-xs text-neutral-500 font-mono">
                    Fair Market Band: {valEstimated.min} – {valEstimated.max}
                  </div>

                  <p className="text-xs text-neutral-600 pt-2 border-t border-neutral-200">
                    Calculated for a {valSizeMarla} Marla {valType} in {valArea}, {valCity}. For bank financing or legal partition, request our physical on-site certified valuation.
                  </p>

                  <button
                    onClick={() => onNavigate('/contact')}
                    className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-neutral-900 rounded-lg hover:bg-neutral-800 transition-colors"
                  >
                    Request Certified In-Person Valuation
                  </button>
                </div>
              ) : (
                <div className="text-center py-8">
                  <Calculator className="w-12 h-12 text-neutral-400 mx-auto mb-3" />
                  <h3 className="text-base font-bold text-neutral-900 font-display">
                    Instant Appraisal Matrix
                  </h3>
                  <p className="text-xs text-neutral-500 mt-1 max-w-xs mx-auto">
                    Select your city, property type, and size to generate an instant baseline valuation band based on verified local transaction registers.
                  </p>
                </div>
              )}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
