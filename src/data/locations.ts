import { LocationItem } from '../types';

export const LOCATIONS_DATA: LocationItem[] = [
  {
    id: 'loc-isb',
    name: 'Islamabad',
    slug: 'islamabad',
    type: 'city',
    tagline: 'The Capital of Prestige, High ROI & Margalla Vistas',
    description: 'Islamabad stands as Pakistan’s premier destination for high-end residential estates, diplomatic housing, and corporate headquarters. Featuring master-planned CDA sectors, scenic Margalla Hills views, state-of-the-art infrastructure, and strong capital appreciation across both residential and commercial real estate.',
    image: '/src/assets/images/hero_investment_skyline_1790331000133.jpg',
    propertyCount: 42,
    averagePricePerMarla: 'PKR 45 Lakh - 90 Lakh',
    keyAreas: ['Sector F-7', 'Sector F-6', 'Blue Area', 'Chak Shahzad', 'Sector E-11', 'Gulberg Greens'],
    popularCategories: ['Luxury Houses', 'Commercial Buildings in Blue Area', 'Executive Rentals', 'Diplomatic Enclave Residences']
  },
  {
    id: 'loc-lhr',
    name: 'Lahore',
    slug: 'lahore',
    type: 'city',
    tagline: 'The Cultural & Real Estate Powerhouse of Punjab',
    description: 'Lahore offers vibrant property markets spanning high-rise commercial boulevards in Gulberg, prestigious residential sanctuaries in DHA Phases 1 through 9, and comprehensive lifestyle communities like Bahria Town. Ideal for both rental yield seekers and long-term capital growth.',
    image: '/src/assets/images/property_commercial_plaza_1790330989336.jpg',
    propertyCount: 38,
    averagePricePerMarla: 'PKR 35 Lakh - 75 Lakh',
    keyAreas: ['Gulberg III', 'DHA Phase 5', 'DHA Phase 6', 'DHA Phase 8', 'Model Town', 'Bahria Town Lahore'],
    popularCategories: ['Luxury Apartments in Gulberg', 'Residential Plots in DHA', 'Houses for Rent', 'Commercial Shops']
  },
  {
    id: 'loc-khi',
    name: 'Karachi',
    slug: 'karachi',
    type: 'city',
    tagline: 'Pakistan’s Financial Capital & Coastal Real Estate Hub',
    description: 'As Pakistan’s largest economic engine and coastal metropolis, Karachi offers prime beachfront villas in Clifton, high-end gated communities in DHA, corporate skyscraper headquarters on I.I. Chundrigar Road, and fast-growing master developments.',
    image: '/src/assets/images/hero_luxury_villa_1790330964578.jpg',
    propertyCount: 29,
    averagePricePerMarla: 'PKR 50 Lakh - 1.2 Crore',
    keyAreas: ['Clifton Block 4', 'DHA Phase 8', 'I.I. Chundrigar Road', 'KDA Scheme 1', 'Bahria Town Karachi'],
    popularCategories: ['Beach Villas for Sale', 'Corporate Offices for Rent', 'High-Rise Apartments', 'Commercial Plots']
  },
  {
    id: 'loc-rwp',
    name: 'Rawalpindi',
    slug: 'rawalpindi',
    type: 'city',
    tagline: 'Twin City Hub for Thriving Residential Communities',
    description: 'Directly adjoining Islamabad, Rawalpindi provides high-growth suburban communities, vibrant commercial nodes, and master-planned phases in Bahria Town and DHA Rawalpindi. Offers exceptional value per square foot with rapid highway connectivity to the capital.',
    image: '/src/assets/images/hero_investment_skyline_1790331000133.jpg',
    propertyCount: 24,
    averagePricePerMarla: 'PKR 25 Lakh - 55 Lakh',
    keyAreas: ['Bahria Town Phase 7', 'Bahria Town Phase 8', 'DHA Phase 1', 'Askari 14', 'Saddar'],
    popularCategories: ['Family Houses for Sale', 'Commercial Plots for Sale', 'Houses for Rent', 'Retail Plazas']
  },

  // Specific Areas
  {
    id: 'loc-f7',
    name: 'Sector F-7',
    slug: 'sector-f7',
    type: 'area',
    parentCity: 'Islamabad',
    tagline: 'The Apex of Luxury Living in Islamabad',
    description: 'Sector F-7 is widely regarded as one of the most affluent residential sectors in Pakistan, home to diplomats, dignitaries, and top industrialists. Steps away from Jinnah Super Market and Safa Gold Mall.',
    image: '/src/assets/images/hero_luxury_villa_1790330964578.jpg',
    propertyCount: 12,
    averagePricePerMarla: 'PKR 85 Lakh - 1.1 Crore',
    popularCategories: ['1 Kanal Luxury Houses', '2 Kanal Mansions', 'Diplomatic Residences']
  },
  {
    id: 'loc-blue-area',
    name: 'Blue Area',
    slug: 'blue-area',
    type: 'area',
    parentCity: 'Islamabad',
    tagline: 'The Corporate & Commercial Spine of the Capital',
    description: 'Blue Area stretches along Jinnah Avenue, housing financial institutions, international embassies, corporate headquarters, and high-rise commercial plazas.',
    image: '/src/assets/images/property_commercial_plaza_1790330989336.jpg',
    propertyCount: 8,
    averagePricePerMarla: 'Commercial Plazas & High-Rise Plots',
    popularCategories: ['Commercial Buildings for Sale', 'Corporate Offices for Rent', 'Retail Spaces']
  },
  {
    id: 'loc-gulberg-lhr',
    name: 'Gulberg',
    slug: 'gulberg-lahore',
    type: 'area',
    parentCity: 'Lahore',
    tagline: 'The Commercial Heart & Vertical Living Destination of Lahore',
    description: 'Gulberg combines historic high-end tree-lined avenues with modern vertical apartment complexes, MM Alam dining boulevard, and retail high streets.',
    image: '/src/assets/images/property_modern_apartment_1790330977862.jpg',
    propertyCount: 16,
    averagePricePerMarla: 'PKR 60 Lakh - 95 Lakh',
    popularCategories: ['Luxury Apartments for Sale', 'Furnished Apartments for Rent', 'Commercial Shops']
  },
  {
    id: 'loc-dha6-lhr',
    name: 'DHA Phase 6',
    slug: 'dha-phase-6-lahore',
    type: 'area',
    parentCity: 'Lahore',
    tagline: 'Modern Master-Planned Community with Complete Amenities',
    description: 'DHA Phase 6 boasts wide 150-foot boulevards, Raya Golf Resort proximity, underground electrification, and excellent security.',
    image: '/src/assets/images/hero_investment_skyline_1790331000133.jpg',
    propertyCount: 15,
    averagePricePerMarla: 'PKR 45 Lakh - 70 Lakh',
    popularCategories: ['1 Kanal Residential Plots', 'Modern Houses for Sale', 'Commercial Plots']
  }
];
