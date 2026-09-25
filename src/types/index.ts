export type PropertyPurpose = 'sale' | 'rent';

export type PropertyType = 
  | 'house' 
  | 'apartment' 
  | 'plot' 
  | 'commercial' 
  | 'luxury' 
  | 'villa' 
  | 'farmhouse' 
  | 'office' 
  | 'shop';

export interface Property {
  id: string;
  slug: string;
  propertyCode: string;
  title: string;
  purpose: PropertyPurpose;
  propertyType: PropertyType;
  price: number; // in PKR
  formattedPrice: string;
  city: string;
  area: string;
  address: string;
  bedrooms?: number;
  bathrooms?: number;
  areaSize: string; // e.g. "1 Kanal", "10 Marla", "2,400 Sq. Ft."
  areaSqFt: number;
  description: string;
  features: string[];
  image: string;
  gallery: string[];
  featured: boolean;
  isLuxury?: boolean;
  yearBuilt?: number;
  parkingSpaces?: number;
  agentId: string;
  addedDate: string;
  viewsCount?: number;
}

export interface Agent {
  id: string;
  name: string;
  title: string;
  experienceYears: number;
  phone: string;
  whatsapp: string;
  email: string;
  photo: string;
  bio: string;
  specialization: string[];
  languages: string[];
  activeListingsCount: number;
}

export interface LocationItem {
  id: string;
  name: string;
  slug: string;
  type: 'city' | 'area';
  parentCity?: string;
  tagline: string;
  description: string;
  image: string;
  propertyCount: number;
  averagePricePerMarla: string;
  keyAreas?: string[];
  popularCategories: string[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  metaDescription: string;
  excerpt: string;
  content: string[];
  headings: { id: string; text: string; level: number }[];
  featuredImage: string;
  imageAlt: string;
  author: string;
  authorRole: string;
  publishedDate: string;
  readTime: string;
  category: string;
  tags: string[];
  relatedPropertySlugs: string[];
}

export interface RealEstateService {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  benefits: string[];
  actionLabel: string;
}
