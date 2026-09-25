import React, { useState } from 'react';
import { UploadCloud, CheckCircle2, ShieldCheck, DollarSign, Camera, Users, Clock } from 'lucide-react';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';

interface SellPropertyPageProps {
  onNavigate: (path: string) => void;
}

export const SellPropertyPage: React.FC<SellPropertyPageProps> = ({ onNavigate }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [propertyType, setPropertyType] = useState('house');
  const [purpose, setPurpose] = useState<'sale' | 'rent'>('sale');
  const [city, setCity] = useState('Islamabad');
  const [area, setArea] = useState('');
  const [size, setSize] = useState('');
  const [expectedPrice, setExpectedPrice] = useState('');
  const [description, setDescription] = useState('');
  const [photosUploaded, setPhotosUploaded] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submissionRef, setSubmissionRef] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !area || !expectedPrice) return;

    const ref = `LST-${Math.floor(100000 + Math.random() * 900000)}`;
    setSubmissionRef(ref);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-neutral-50 py-8">
      <SEO
        title="Sell Your Property | Fast Listing & Highest Market Valuation | Prime Estate"
        description="Sell your house, apartment, plot, or commercial property with Prime Estate. Connect with 25,000+ verified buyers and get complimentary certified property valuation."
        canonicalPath="/sell-property"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <Breadcrumbs
          items={[{ label: 'Sell Your Property' }]}
          onNavigate={onNavigate}
        />

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto my-8">
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-700">
            List With Prime Estate
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 font-display mt-1">
            Sell Your Property
          </h1>
          <p className="text-xs sm:text-sm text-neutral-600 mt-2">
            Reach thousands of pre-qualified buyers and verified corporate tenants across Islamabad, Lahore, Karachi, and overseas Pakistanis.
          </p>
        </div>

        {/* Benefits Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-xs">
          <div className="p-5 bg-white rounded-2xl border border-neutral-200 flex items-start gap-3">
            <DollarSign className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-neutral-900 mb-1">Complimentary Valuation</div>
              <p className="text-neutral-500">We analyze real closed transaction comps to price your property for peak return.</p>
            </div>
          </div>

          <div className="p-5 bg-white rounded-2xl border border-neutral-200 flex items-start gap-3">
            <Camera className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-neutral-900 mb-1">Architectural Marketing</div>
              <p className="text-neutral-500">Professional photography and targeted digital promotion to high-net-worth investors.</p>
            </div>
          </div>

          <div className="p-5 bg-white rounded-2xl border border-neutral-200 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-neutral-900 mb-1">100% Secure Transfer</div>
              <p className="text-neutral-500">Full legal drafting, pay order verification, and assisted registrar closing.</p>
            </div>
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-2xl border border-neutral-200 p-6 sm:p-10 shadow-sm mb-16">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6 text-xs">
              
              {/* Section 1: Listing Intent */}
              <div className="border-b border-neutral-100 pb-5">
                <h2 className="text-base font-bold text-neutral-950 font-display mb-3">
                  1. Property Intent & Classification
                </h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-neutral-700 font-semibold mb-1">
                      Are You Selling or Renting Out? *
                    </label>
                    <div className="flex rounded-lg bg-neutral-100 p-1">
                      <button
                        type="button"
                        onClick={() => setPurpose('sale')}
                        className={`flex-1 py-2 rounded-md font-semibold transition-colors ${
                          purpose === 'sale' ? 'bg-neutral-900 text-white shadow-xs' : 'text-neutral-700'
                        }`}
                      >
                        Sell Property
                      </button>
                      <button
                        type="button"
                        onClick={() => setPurpose('rent')}
                        className={`flex-1 py-2 rounded-md font-semibold transition-colors ${
                          purpose === 'rent' ? 'bg-neutral-900 text-white shadow-xs' : 'text-neutral-700'
                        }`}
                      >
                        Rent Out Property
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-neutral-700 font-semibold mb-1">
                      Property Type *
                    </label>
                    <select
                      value={propertyType}
                      onChange={(e) => setPropertyType(e.target.value)}
                      className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 bg-white"
                    >
                      <option value="house">House / Villa</option>
                      <option value="apartment">Apartment / Penthouse</option>
                      <option value="plot">Residential Plot</option>
                      <option value="commercial-plot">Commercial Plot</option>
                      <option value="commercial-building">Commercial Building / Plaza</option>
                      <option value="shop">Retail Shop</option>
                      <option value="office">Corporate Office Space</option>
                      <option value="farmhouse">Farmhouse</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Section 2: Property Location & Specs */}
              <div className="border-b border-neutral-100 pb-5">
                <h2 className="text-base font-bold text-neutral-950 font-display mb-3">
                  2. Location, Dimensions & Expected Demand
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-neutral-700 font-semibold mb-1">
                      City *
                    </label>
                    <select
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 bg-white"
                    >
                      <option value="Islamabad">Islamabad</option>
                      <option value="Lahore">Lahore</option>
                      <option value="Karachi">Karachi</option>
                      <option value="Rawalpindi">Rawalpindi</option>
                      <option value="Other">Other City</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-neutral-700 font-semibold mb-1">
                      Sector / Area / Society *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sector F-7, DHA Phase 6"
                      value={area}
                      onChange={(e) => setArea(e.target.value)}
                      className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900"
                    />
                  </div>

                  <div>
                    <label className="block text-neutral-700 font-semibold mb-1">
                      Land / Covered Area *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 1 Kanal, 10 Marla, 2,400 Sq. Ft."
                      value={size}
                      onChange={(e) => setSize(e.target.value)}
                      className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900"
                    />
                  </div>

                  <div>
                    <label className="block text-neutral-700 font-semibold mb-1">
                      Expected Demand Price (PKR) *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 6.5 Crore or 3.5 Lakh/mo"
                      value={expectedPrice}
                      onChange={(e) => setExpectedPrice(e.target.value)}
                      className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 font-mono"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block text-neutral-700 font-semibold mb-1">
                    Property Description & Key Selling Features
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Mention floor details, bedroom count, architectural features, road width, facing park/corner, etc."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900"
                  />
                </div>
              </div>

              {/* Section 3: Photo Upload Simulator */}
              <div className="border-b border-neutral-100 pb-5">
                <h2 className="text-base font-bold text-neutral-950 font-display mb-3">
                  3. Property Images
                </h2>
                
                <div 
                  onClick={() => setPhotosUploaded(true)}
                  className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-colors ${
                    photosUploaded 
                      ? 'border-emerald-500 bg-emerald-50/50' 
                      : 'border-neutral-300 hover:border-neutral-400 bg-neutral-50'
                  }`}
                >
                  <UploadCloud className={`w-8 h-8 mx-auto mb-2 ${photosUploaded ? 'text-emerald-600' : 'text-neutral-400'}`} />
                  {photosUploaded ? (
                    <div className="text-emerald-700 font-semibold">
                      4 Images Selected & Ready for Listing Inspection
                    </div>
                  ) : (
                    <div>
                      <div className="font-semibold text-neutral-800">
                        Click to upload photos (or drag & drop)
                      </div>
                      <div className="text-neutral-500 text-[11px] mt-1">
                        PNG, JPG or WEBP up to 10MB each. High-resolution photos receive 3x more inquiries.
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Section 4: Owner Contact Details */}
              <div className="pb-2">
                <h2 className="text-base font-bold text-neutral-950 font-display mb-3">
                  4. Owner / Representative Details
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-neutral-700 font-semibold mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Malik Imran"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900"
                    />
                  </div>

                  <div>
                    <label className="block text-neutral-700 font-semibold mb-1">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+92 300 0000000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900"
                    />
                  </div>

                  <div>
                    <label className="block text-neutral-700 font-semibold mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="owner@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900"
                    />
                  </div>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3 font-semibold text-white bg-neutral-900 hover:bg-neutral-800 rounded-xl transition-colors shadow-sm text-xs"
                >
                  Submit Property for Listing
                </button>
              </div>

            </form>
          ) : (
            <div className="text-center py-10">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h2 className="text-2xl font-bold text-neutral-950 font-display">
                Property Submitted Successfully!
              </h2>
              <p className="text-xs sm:text-sm text-neutral-600 mt-2 max-w-md mx-auto">
                Thank you, <strong className="text-neutral-900">{name}</strong>. Your listing submission has been received by our senior property acquisition team.
              </p>

              <div className="my-6 p-4 bg-neutral-50 rounded-xl border border-neutral-200 text-xs max-w-sm mx-auto space-y-2 text-left">
                <div><span className="text-neutral-500">Submission Reference:</span> <strong className="font-mono">{submissionRef}</strong></div>
                <div><span className="text-neutral-500">Property:</span> {size} {propertyType} in {area}, {city}</div>
                <div><span className="text-neutral-500">Expected Demand:</span> <span className="font-mono">{expectedPrice}</span></div>
                <div><span className="text-neutral-500">Verification Desk:</span> Assigned to Regional Specialist</div>
              </div>

              <div className="flex justify-center gap-3">
                <button
                  onClick={() => onNavigate('/properties')}
                  className="px-6 py-2.5 text-xs font-semibold text-white bg-neutral-900 rounded-xl hover:bg-neutral-800"
                >
                  Browse Current Listings
                </button>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 text-xs font-semibold text-neutral-700 bg-neutral-100 rounded-xl hover:bg-neutral-200"
                >
                  Submit Another Property
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
