import { RealEstateService } from '../types';

export const SERVICES_DATA: RealEstateService[] = [
  {
    id: 'property-buying',
    title: 'Property Buying & Acquisition',
    shortDesc: 'End-to-end guidance for purchasing houses, luxury apartments, plots, and commercial assets with verified clear titles.',
    fullDesc: 'We assist private individuals, expatriates, and corporate entities in identifying, negotiating, and acquiring prime real estate. Every property listing undergoes rigorous multi-tier title verification, development authority NOC confirmation, and fair market price auditing before deal closure.',
    iconName: 'Home',
    benefits: [
      'Comprehensive 100% verified title deed due diligence',
      'Direct off-market inventory access not published publicly',
      'Skilled transaction and price negotiation saving you millions',
      'Complete legal and FBR tax structuring assistance'
    ],
    actionLabel: 'Browse Properties for Sale'
  },
  {
    id: 'property-selling',
    title: 'Property Selling & Marketing',
    shortDesc: 'Strategic marketing to reach qualified high-net-worth buyers, achieving optimal market valuations in record time.',
    fullDesc: 'Selling a premium property requires targeted positioning, high-fidelity architectural photography, and direct exposure to active domestic and overseas investors. We screen buyers, conduct discreet private viewings, and execute secure transaction paperwork with guaranteed transparency.',
    iconName: 'DollarSign',
    benefits: [
      'Professional architectural photography and virtual walk-throughs',
      'Exclusive distribution to our network of 25,000+ verified active buyers',
      'Discreet confidential marketing for VIP and executive residences',
      'Rapid turnaround times with zero compromised valuations'
    ],
    actionLabel: 'List Your Property'
  },
  {
    id: 'property-rental',
    title: 'Property Rental & Tenancy',
    shortDesc: 'Seamless leasing for residential houses, luxury apartments, corporate offices, and commercial retail shops.',
    fullDesc: 'Whether you are seeking an embassy-grade residence in Islamabad or leasing an executive corporate office in Karachi, our rental division matches qualified tenants with verified landlords. We handle background vetting, tenancy agreements, and security deposit management.',
    iconName: 'Key',
    benefits: [
      'Rigorous background and financial credit screening of prospective tenants',
      'Standardized legal lease agreements with inflation escalation clauses',
      'Corporate lease facilitation for diplomatic missions and MNCs',
      'Rapid replacement to minimize vacant rental downtime'
    ],
    actionLabel: 'Explore Properties for Rent'
  },
  {
    id: 'property-management',
    title: 'Property Management & Caretaking',
    shortDesc: 'Hands-off property management for overseas Pakistanis and busy investors, ensuring asset preservation and timely yields.',
    fullDesc: 'Our dedicated management wing oversees regular maintenance, tenant communication, monthly rent collection into your designated bank account, utility bills clearing, and periodic property inspection reports with high-resolution photographic evidence.',
    iconName: 'ShieldCheck',
    benefits: [
      'Automated monthly rent collection and direct remittance',
      '24/7 emergency repair and regular preventive property maintenance',
      'Overseas owner portal with transparent accounting ledgers',
      'Annual municipal tax and utility bill reconciliation'
    ],
    actionLabel: 'Inquire About Management'
  },
  {
    id: 'real-estate-consultation',
    title: 'Real Estate Consultation & Advisory',
    shortDesc: 'Strategic guidance on market timing, sector trends, regulatory shifts, and capital diversification.',
    fullDesc: 'Backed by real transaction data and deep local market presence, our senior consultants advise family offices, corporate boards, and private investors on when to enter, rebalance, or exit specific urban real estate sectors.',
    iconName: 'TrendingUp',
    benefits: [
      'Macro & micro-market sector performance analysis',
      'Comparative capital appreciation projections',
      'FBR tax optimization and legal transfer structuring',
      'Bespoke wealth preservation strategies through real property'
    ],
    actionLabel: 'Book a Consultation'
  },
  {
    id: 'property-valuation',
    title: 'Property Valuation & Appraisal',
    shortDesc: 'Accurate, data-backed market valuation and replacement cost analysis for purchase, sale, or mortgage underwriting.',
    fullDesc: 'Determining the true market value of land, houses, and commercial plazas requires empirical transaction comp analysis, construction cost auditing, and future potential assessment. We issue certified valuation reports accepted by financial institutions.',
    iconName: 'Calculator',
    benefits: [
      'Recent comparable sales benchmark analysis',
      'Replacement cost and depreciation breakdown',
      'Rental yield and capitalization rate assessment',
      'Certified reports for family partitions, taxation, and bank loans'
    ],
    actionLabel: 'Request Property Valuation'
  },
  {
    id: 'property-investment',
    title: 'High-Yield Property Investment',
    shortDesc: 'Curated commercial and residential investments engineered for steady rental yield and capital appreciation.',
    fullDesc: 'We curate high-yield commercial assets, corporate floor plates, pre-tenanted retail shops, and fast-growth residential corridors in Islamabad, Lahore, and Karachi. We target assets with realistic IRR between 16% and 24% combining cash flow and capital gain.',
    iconName: 'Award',
    benefits: [
      'Access to pre-leased commercial real estate with immediate cash flows',
      'Bulk purchase discounts in premier master developments',
      'Detailed cash flow waterfall modeling and risk stress-testing',
      'Exit strategy formulation with clear liquidity timelines'
    ],
    actionLabel: 'Explore Investment Portfolios'
  },
  {
    id: 'commercial-real-estate',
    title: 'Commercial Real Estate Services',
    shortDesc: 'Specialized commercial brokerage for high-rise plazas, retail boulevards, corporate headquarters, and land plots.',
    fullDesc: 'From high-visibility commercial plots in Bahria Town to multi-story buildings in Blue Area, we negotiate institutional acquisitions, corporate headquarters leases, and retail anchor placements.',
    iconName: 'Building2',
    benefits: [
      'Corporate space programming and lease negotiations',
      'Commercial plot acquisition with G+5 to G+20 height permissions',
      'Retail tenant mix optimization for commercial shopping malls',
      'Full compliance with CDA, LDA, and municipal commercial bylaws'
    ],
    actionLabel: 'View Commercial Properties'
  }
];
