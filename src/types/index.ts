export interface ServiceItem {
  id: string;
  name: string;
  startingPrice: number;
  priceRange: string;
  description: string;
  ctaText: string;
  category: 'design' | 'development' | 'optimization' | 'support';
  turnaroundTime: string;
  features: string[];
  recommendedFor: string;
}

export interface DigitalProduct {
  id: string;
  title: string;
  problem: string;
  solution: string;
  includes: string[];
  format: string;
  price: number;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  compatibility: string[];
  rating: number;
  reviewCount: number;
  category: 'Shopify' | 'WordPress' | 'Speed' | 'SEO' | 'Security' | 'UI/UX' | 'Errors';
  isDemo: boolean;
  demoNote?: string;
  downloadContentSample: string;
  tags: string[];
}

export interface Order {
  id: string;
  reference: string;
  customerName: string;
  customerEmail: string;
  itemType: 'digital_product' | 'service_request' | 'custom_invoice';
  itemId: string;
  itemTitle: string;
  amount: number;
  currency: 'USD';
  gateway: 'paystack' | 'flutterwave';
  status: 'pending' | 'paid' | 'failed' | 'refunded';
  createdAt: string;
  downloadToken?: string;
  downloadCount: number;
  downloadLimit: number;
  invoiceNumber: string;
}

export interface ServicePaymentRequest {
  id: string;
  clientName: string;
  clientEmail: string;
  serviceTitle: string;
  amount: number;
  currency: 'USD';
  description: string;
  dueDate: string;
  status: 'PENDING' | 'PAID' | 'CANCELLED';
  createdAt: string;
  paidAt?: string;
  reference: string;
}

export interface Review {
  id: string;
  customerName: string;
  avatar?: string;
  productOrService: string;
  category: 'service' | 'digital_solution';
  rating: number;
  comment: string;
  date: string;
  isVerifiedPurchase: boolean;
  roleOrCompany?: string;
}

export interface VideoReview {
  id: string;
  customerName: string;
  company?: string;
  productOrService: string;
  category: 'service' | 'digital_solution';
  rating: number;
  videoUrl: string;
  thumbnailUrl: string;
  summary: string;
  duration: string;
  isVerified: boolean;
}

export interface BankAccount {
  id: string;
  country: string;
  bankName: string;
  accountName: string;
  accountNumberMasked: string;
  isVerified: boolean;
  createdAt: string;
}

export interface WithdrawalRecord {
  id: string;
  reference: string;
  date: string;
  amount: number;
  currency: 'USD';
  destinationBank: string;
  destinationAccount: string;
  status: 'Pending' | 'Processing' | 'Successful' | 'Failed' | 'Reversed';
  notes?: string;
}

export interface FinanceSummary {
  totalRevenue: number;
  serviceRevenue: number;
  digitalSolutionRevenue: number;
  pendingPayments: number;
  settledBalance: number;
  pendingBalance: number;
  withdrawnAmount: number;
  currency: 'USD';
}

export interface BrandConfig {
  brandName: string;
  secondaryBrand: string;
  tagline: string;
  heroHeadline: string;
  heroSupportingText: string;
  primaryCta: string;
  secondaryCta: string;
  whatsappNumber: string;
  whatsappDisplay: string;
  email: string;
  defaultCurrency: 'USD';
  primaryColor: string;
  electricBlue: string;
  purple: string;
}
