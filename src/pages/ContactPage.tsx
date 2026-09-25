import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageSquare, Clock, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';

interface ContactPageProps {
  onNavigate: (path: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [propertyType, setPropertyType] = useState('house');
  const [purpose, setPurpose] = useState('buy');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setSubmitted(true);
  };

  const faqs = [
    {
      q: 'How does Prime Estate verify property titles and ownership documents?',
      a: 'Our in-house legal counsel verifies title deeds directly through computerised land records (Arazi Record Center/PLRA), Sub-Registrar records, and official verification letters from society headquarters (such as CDA, LDA, DHA, and Bahria Town). We guarantee 100% clean, unencumbered titles before closing.'
    },
    {
      q: 'What are the current FBR taxes for property buyers and sellers?',
      a: 'Under current Federal Board of Revenue (FBR) regulations, advance income taxes apply under Section 236K (for buyers) and Section 236C (for sellers). Active tax filers enjoy substantially lower rates compared to non-filers. Our team provides an itemized tax computation prior to deal execution.'
    },
    {
      q: 'Can overseas Pakistanis purchase or sell property remotely?',
      a: 'Yes. We operate a dedicated Overseas Investor Desk that manages verified video inspections, power of attorney (POA) legal attestation with the respective Pakistani Embassy or Consulate, and direct State Bank compliant banking remittances.'
    },
    {
      q: 'Does Prime Estate charge a commission for property listing?',
      a: 'Initial listing, high-resolution architectural photography, and valuation are 100% complimentary. Standard industry brokerage fees apply strictly upon successful, verified transfer of the property.'
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-50 py-8">
      <SEO
        title="Contact Real Estate Consultants | Prime Estate Agency"
        description="Get in touch with Prime Estate. Call our property advisors, message on WhatsApp, visit our corporate offices in Islamabad, Lahore, or Karachi, or submit an online inquiry."
        canonicalPath="/contact"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Breadcrumbs
          items={[{ label: 'Contact Us' }]}
          onNavigate={onNavigate}
        />

        <div className="my-10 max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-700">
            Fiduciary Real Estate Support
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-neutral-950 font-display mt-2 leading-tight">
            Connect With Our Property Advisors
          </h1>
          <p className="text-xs sm:text-sm text-neutral-600 mt-3 leading-relaxed">
            Whether inquiring about prime houses for sale, commercial investment plazas, or confidential off-market acquisitions, our senior team is at your disposal.
          </p>
        </div>

        {/* Quick Contact Buttons Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 text-xs">
          <a
            href="tel:+923001234567"
            className="p-5 bg-white rounded-2xl border border-neutral-200 hover:border-neutral-900 transition-all flex items-center gap-4 group"
          >
            <div className="w-10 h-10 rounded-xl bg-neutral-100 group-hover:bg-neutral-900 group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
              <Phone className="w-5 h-5 text-neutral-700 group-hover:text-white" />
            </div>
            <div>
              <div className="text-neutral-500 font-sans">Call Advisory Desk</div>
              <div className="text-sm font-bold text-neutral-950 font-mono">+92 300 1234567</div>
            </div>
          </a>

          <a
            href="https://wa.me/923001234567?text=Hello%20Prime%20Estate%20Team%2C%20I%20would%20like%20to%20schedule%20a%20consultation."
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 bg-white rounded-2xl border border-neutral-200 hover:border-emerald-600 transition-all flex items-center gap-4 group"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-50 group-hover:bg-emerald-600 flex items-center justify-center shrink-0 transition-colors">
              <MessageSquare className="w-5 h-5 text-emerald-600 group-hover:text-white" />
            </div>
            <div>
              <div className="text-neutral-500 font-sans">WhatsApp Instant</div>
              <div className="text-sm font-bold text-neutral-950">Chat Online Now</div>
            </div>
          </a>

          <a
            href="mailto:info@primeestate.pk"
            className="p-5 bg-white rounded-2xl border border-neutral-200 hover:border-neutral-900 transition-all flex items-center gap-4 group"
          >
            <div className="w-10 h-10 rounded-xl bg-neutral-100 group-hover:bg-neutral-900 group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
              <Mail className="w-5 h-5 text-neutral-700 group-hover:text-white" />
            </div>
            <div>
              <div className="text-neutral-500 font-sans">Email Inquiries</div>
              <div className="text-sm font-bold text-neutral-950">info@primeestate.pk</div>
            </div>
          </a>

          <div className="p-5 bg-white rounded-2xl border border-neutral-200 flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5 text-neutral-700" />
            </div>
            <div>
              <div className="text-neutral-500 font-sans">Working Hours</div>
              <div className="text-xs font-bold text-neutral-950">Mon – Sat: 9 AM – 7 PM</div>
            </div>
          </div>
        </div>

        {/* Main Grid: Form + Office Locations */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16">
          
          {/* Inquiry Form */}
          <div className="lg:col-span-2 bg-white rounded-3xl p-6 sm:p-10 border border-neutral-200 shadow-xs">
            <h2 className="text-2xl font-bold text-neutral-950 font-display mb-2">
              Send Property Inquiry
            </h2>
            <p className="text-xs text-neutral-500 mb-6">
              Complete the form below and an assigned specialist will review your request and respond within 2 hours.
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-neutral-700 font-semibold mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Tariq Mehmood"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3 py-2.5 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-neutral-900"
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
                      className="w-full px-3 py-2.5 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-neutral-900"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-neutral-700 font-semibold mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-2.5 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-neutral-900"
                    />
                  </div>

                  <div>
                    <label className="block text-neutral-700 font-semibold mb-1">
                      Inquiry Intent
                    </label>
                    <select
                      value={purpose}
                      onChange={(e) => setPurpose(e.target.value)}
                      className="w-full px-3 py-2.5 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-neutral-900 bg-white"
                    >
                      <option value="buy">Buying Property</option>
                      <option value="rent">Renting Property</option>
                      <option value="sell">Selling / Listing</option>
                      <option value="valuation">Certified Valuation</option>
                      <option value="investment">Commercial Investment</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-neutral-700 font-semibold mb-1">
                      Property Category
                    </label>
                    <select
                      value={propertyType}
                      onChange={(e) => setPropertyType(e.target.value)}
                      className="w-full px-3 py-2.5 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-neutral-900 bg-white capitalize"
                    >
                      <option value="house">House / Villa</option>
                      <option value="apartment">Apartment</option>
                      <option value="plot">Plot</option>
                      <option value="commercial">Commercial Plaza</option>
                      <option value="office">Corporate Office</option>
                      <option value="farmhouse">Farmhouse</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-neutral-700 font-semibold mb-1">
                    Your Requirements & Details
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Specify target location (e.g. Sector F-7, DHA Phase 6), target budget in PKR, bedroom preference, or scheduling details..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3 py-2.5 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-neutral-900"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3 text-xs font-semibold text-white bg-neutral-900 hover:bg-neutral-800 rounded-xl transition-colors shadow-sm"
                  >
                    Send Property Inquiry
                  </button>
                  <span className="text-neutral-400 text-[11px]">
                    We treat all inquiries with strict commercial confidentiality.
                  </span>
                </div>
              </form>
            ) : (
              <div className="text-center py-10">
                <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-neutral-950 font-display">
                  Inquiry Dispatched Successfully!
                </h3>
                <p className="text-xs text-neutral-600 mt-2 max-w-sm mx-auto">
                  Thank you, <strong className="text-neutral-900">{name}</strong>. A dedicated property consultant has received your inquiry and will reach out via <strong className="text-neutral-900">{phone}</strong> shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-6 py-2 text-xs font-semibold text-neutral-800 bg-neutral-100 hover:bg-neutral-200 rounded-xl transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            )}
          </div>

          {/* Regional Offices */}
          <div className="space-y-6 text-xs">
            
            {/* Islamabad HQ */}
            <div className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-xs space-y-2">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-700">
                Headquarters
              </span>
              <h3 className="text-base font-bold text-neutral-950 font-display">
                Islamabad Executive Office
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                Executive Heights, 3rd Floor, Main Jinnah Super, Sector F-7/2, Islamabad
              </p>
              <div className="pt-2 text-neutral-500 font-mono">
                Direct: +92 300 8501234
              </div>
            </div>

            {/* Lahore Regional Office */}
            <div className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-xs space-y-2">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-700">
                Punjab Regional Office
              </span>
              <h3 className="text-base font-bold text-neutral-950 font-display">
                Lahore Commercial Office
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                The Grand Corporate Tower, MM Alam Road Corridor, Gulberg III, Lahore
              </p>
              <div className="pt-2 text-neutral-500 font-mono">
                Direct: +92 321 4455667
              </div>
            </div>

            {/* Karachi Office */}
            <div className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-xs space-y-2">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-700">
                Sindh Regional Office
              </span>
              <h3 className="text-base font-bold text-neutral-950 font-display">
                Karachi Business Office
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                Business & Finance Centre, 11th Floor, I.I. Chundrigar Road, Karachi
              </p>
              <div className="pt-2 text-neutral-500 font-mono">
                Direct: +92 333 5123987
              </div>
            </div>

          </div>

        </div>

        {/* Real Estate FAQ Section */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-neutral-200 mb-16 shadow-xs">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-700">
              Clear Answers
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-950 font-display mt-1">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="divide-y divide-neutral-200 text-xs">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="py-4">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between text-left font-semibold text-neutral-950 hover:text-amber-800 transition-colors py-1 focus:outline-none"
                  >
                    <span className="text-sm font-display">{faq.q}</span>
                    {isOpen ? <ChevronUp className="w-4 h-4 text-neutral-500 shrink-0" /> : <ChevronDown className="w-4 h-4 text-neutral-500 shrink-0" />}
                  </button>
                  {isOpen && (
                    <p className="mt-3 text-neutral-600 leading-relaxed text-xs">
                      {faq.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};
