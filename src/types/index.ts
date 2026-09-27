export interface ServiceItem {
  id: string;
  number: string;
  name: string;
  startingPrice: number;
  priceDisplay: string;
  priceRange?: string;
  description: string;
  ctaText: string;
  category: 'design' | 'redesign' | 'audit' | 'ecommerce' | 'landing' | 'optimization';
  turnaroundTime: string;
  features: string[];
  deliverables: string[];
}

export interface PortfolioProject {
  id: string;
  name: string;
  category: 'Business' | 'E-commerce' | 'Landing Page' | 'Redesign' | 'Concept';
  isConcept: boolean;
  shortDescription: string;
  fullDescription: string;
  imageUrl: string;
  accentColor: string;
  deliverables: string[];
  year: string;
}

export interface PricingPackage {
  id: string;
  name: string;
  startingPrice: number;
  priceDisplay: string;
  priceRange?: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
}

export interface AuditRequest {
  id: string;
  fullName: string;
  businessName: string;
  email: string;
  websiteUrl: string;
  needHelpWith: string;
  message: string;
  submittedAt: string;
}

export interface ProjectIntake {
  id: string;
  name: string;
  email: string;
  businessName: string;
  websiteUrl?: string;
  projectType: string;
  businessDescription: string;
  targetAudience: string;
  mainGoal: string;
  preferredStyle: string;
  referenceWebsites?: string;
  additionalRequirements?: string;
  fileName?: string;
  submittedAt: string;
}

export interface ClientPayment {
  id: string;
  reference: string;
  clientName: string;
  email: string;
  service: string;
  amount: number;
  gateway: 'paystack' | 'flutterwave' | 'stripe' | 'paypal';
  status: 'pending' | 'completed';
  paidAt: string;
}

export interface FAQItem {
  q: string;
  a: string;
}
