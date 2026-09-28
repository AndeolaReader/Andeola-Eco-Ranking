export interface ServiceItem {
  id: string;
  name: string;
  startingPrice: number;
  priceDisplay: string;
  priceRange: string;
  description: string;
  ctaText: string;
  category: 'design' | 'redesign' | 'audit' | 'error-fix' | 'shopify' | 'ecommerce' | 'speed' | 'seo';
  turnaroundTime: string;
  features: string[];
  deliverables: string[];
}

export interface DigitalProduct {
  id: string;
  name: string;
  price: number;
  category: string;
  problem: string;
  description: string;
  whoThisIsFor: string;
  whatYouWillReceive: string;
  whatsIncluded: string[];
  format: string;
  difficulty: 'Beginner' | 'Beginner–Intermediate' | 'Intermediate' | 'Advanced';
  compatiblePlatforms: string[];
  problemCategory: 'Checkout' | 'Speed' | 'SEO' | 'Mobile' | 'Errors' | 'Design' | 'Conversion' | 'Security' | 'Product Pages' | 'Store Setup';
  ctaText: string;
  purchaseCtaText: string;
  rating: number;
  reviewCount: number;
  salesCount: number;
  isPopular?: boolean;
  version: string;
  downloadSize: string;
  importantNotice?: string;
  relatedServiceId?: string;
}

export interface CartItem {
  product: DigitalProduct;
  quantity: number;
}

export interface Order {
  id: string;
  orderNumber: string;
  customerName: string;
  email: string;
  country: string;
  items: {
    productId: string;
    productName: string;
    price: number;
    format: string;
  }[];
  totalAmount: number;
  paymentGateway: 'paystack' | 'flutterwave' | 'stripe' | 'paypal';
  paymentReference: string;
  status: 'completed' | 'processing' | 'pending';
  paidAt: string;
  downloadToken: string;
}

export interface ServicePaymentRequest {
  id: string;
  clientName: string;
  email: string;
  service: string;
  projectDescription: string;
  amount: number;
  dueDate: string;
  notes?: string;
  status: 'pending' | 'paid';
  reference?: string;
  paidAt?: string;
}

export interface Review {
  id: string;
  author: string;
  company?: string;
  rating: number;
  date: string;
  content: string;
  type: 'service' | 'digital-solution';
  targetName: string;
  verifiedPurchase: boolean;
}

export interface VideoReview {
  id: string;
  author: string;
  role: string;
  company: string;
  quote: string;
  targetName: string;
  type: 'service' | 'digital-solution';
  rating: number;
  summary: string;
  videoThumbnail: string;
  videoDuration: string;
  videoUrl: string;
  spokenScript: string;
  voiceGender: 'female' | 'male';
  voicePitch?: number;
  voiceRate?: number;
  verifiedCustomer: boolean;
  captions?: { time: number; text: string }[];
}

export interface BankAccount {
  id: string;
  country: string;
  bankName: string;
  accountName: string;
  accountNumberMasked: string;
  isDefault: boolean;
  addedAt: string;
}

export interface WithdrawalRecord {
  id: string;
  reference: string;
  amount: number;
  bankAccountId: string;
  bankDetails: string;
  status: 'Pending' | 'Processing' | 'Successful' | 'Failed' | 'Reversed';
  requestedAt: string;
  settledAt?: string;
}

export interface FinanceSummary {
  totalRevenue: number;
  digitalSolutionRevenue: number;
  serviceRevenue: number;
  pendingPayments: number;
  settledBalance: number;
  availableBalance: number;
  withdrawnAmount: number;
}

export interface BrandConfig {
  brandName: string;
  descriptor: string;
  whatsappNumber: string;
  whatsappDisplay: string;
  supportEmail: string;
  currency: string;
}

export interface FAQItem {
  q: string;
  a: string;
  category?: 'general' | 'digital-solutions' | 'services' | 'payments';
}
