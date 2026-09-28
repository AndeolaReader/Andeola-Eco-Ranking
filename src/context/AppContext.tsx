import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  ServiceItem,
  DigitalProduct,
  CartItem,
  Order,
  ServicePaymentRequest,
  Review,
  VideoReview,
  BankAccount,
  WithdrawalRecord,
  FinanceSummary,
  BrandConfig
} from '../types';
import {
  BRAND_CONFIG,
  SERVICES as INITIAL_SERVICES,
  DIGITAL_PRODUCTS as INITIAL_DIGITAL_PRODUCTS,
  INITIAL_REVIEWS,
  VIDEO_REVIEWS,
  INITIAL_PAYMENT_REQUESTS,
  INITIAL_BANK_ACCOUNTS,
  INITIAL_WITHDRAWALS,
  INITIAL_FINANCE
} from '../data/mockData';

const STORAGE_PREFIX = 'andeola_solutions_v3';

interface AppContextType {
  brandConfig: BrandConfig;
  services: ServiceItem[];
  updateService: (updated: ServiceItem) => void;
  digitalProducts: DigitalProduct[];
  updateDigitalProduct: (updated: DigitalProduct) => void;
  addDigitalProduct: (product: DigitalProduct) => void;
  deleteDigitalProduct: (id: string) => void;
  cart: CartItem[];
  addToCart: (product: DigitalProduct, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateCartQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  cartTotal: number;
  cartCount: number;
  orders: Order[];
  createOrder: (details: {
    customerName: string;
    email: string;
    country: string;
    items: { productId: string; productName: string; price: number; format: string }[];
    totalAmount: number;
    paymentGateway: 'paystack' | 'flutterwave' | 'stripe' | 'paypal';
  }) => Promise<Order>;
  paymentRequests: ServicePaymentRequest[];
  createPaymentRequest: (req: Omit<ServicePaymentRequest, 'id' | 'status'>) => void;
  payPaymentRequest: (requestId: string, gateway: string) => Promise<boolean>;
  reviews: Review[];
  addReview: (review: Omit<Review, 'id' | 'date'>) => void;
  videoReviews: VideoReview[];
  financeSummary: FinanceSummary;
  bankAccounts: BankAccount[];
  addBankAccount: (account: Omit<BankAccount, 'id' | 'addedAt'>) => void;
  withdrawals: WithdrawalRecord[];
  requestWithdrawal: (amount: number, bankAccountId: string) => Promise<{ success: boolean; message: string }>;
  activeModal: string | null;
  modalData: any;
  openModal: (modalName: string, data?: any) => void;
  closeModal: () => void;
  openSolutionDetail: (product: DigitalProduct) => void;
  openCart: () => void;
  openCheckout: (directProduct?: DigitalProduct) => void;
  openAccount: () => void;
  openAdmin: () => void;
  openServiceRequest: (service?: ServiceItem) => void;
  openServicePayment: (request?: ServicePaymentRequest) => void;
  openAuditModal: (defaultPlatform?: string, defaultProblem?: string) => void;
  openVideoPlayer: (video: VideoReview) => void;
  triggerDownload: (productName: string, format: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const brandConfig = BRAND_CONFIG;

  // Services
  const [services, setServices] = useState<ServiceItem[]>(() => {
    const saved = localStorage.getItem(`${STORAGE_PREFIX}_services`);
    return saved ? JSON.parse(saved) : INITIAL_SERVICES;
  });

  // Digital Products
  const [digitalProducts, setDigitalProducts] = useState<DigitalProduct[]>(() => {
    const saved = localStorage.getItem(`${STORAGE_PREFIX}_products`);
    return saved ? JSON.parse(saved) : INITIAL_DIGITAL_PRODUCTS;
  });

  // Cart
  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem(`${STORAGE_PREFIX}_cart`);
    return saved ? JSON.parse(saved) : [];
  });

  // Orders
  const [orders, setOrders] = useState<Order[]>(() => {
    const saved = localStorage.getItem(`${STORAGE_PREFIX}_orders`);
    return saved ? JSON.parse(saved) : [
      {
        id: 'ord-demo-01',
        orderNumber: 'AND-ORD-9281',
        customerName: 'Marcus Reid',
        email: 'marcus@reiddesign.com',
        country: 'United States',
        items: [
          {
            productId: 'sol-01',
            productName: 'Shopify Checkout Troubleshooting Guide',
            price: 19,
            format: 'PDF + Digital Documentation'
          }
        ],
        totalAmount: 19,
        paymentGateway: 'paystack',
        paymentReference: 'AND-PAY-729101',
        status: 'completed',
        paidAt: '2026-03-24T11:20:00Z',
        downloadToken: 'tok_sec_92819034'
      }
    ];
  });

  // Service Payment Requests
  const [paymentRequests, setPaymentRequests] = useState<ServicePaymentRequest[]>(() => {
    const saved = localStorage.getItem(`${STORAGE_PREFIX}_requests`);
    return saved ? JSON.parse(saved) : INITIAL_PAYMENT_REQUESTS;
  });

  // Reviews
  const [reviews, setReviews] = useState<Review[]>(() => {
    const saved = localStorage.getItem(`${STORAGE_PREFIX}_reviews`);
    return saved ? JSON.parse(saved) : INITIAL_REVIEWS;
  });

  // Video Reviews
  const [videoReviews] = useState<VideoReview[]>(VIDEO_REVIEWS);

  // Bank Accounts
  const [bankAccounts, setBankAccounts] = useState<BankAccount[]>(() => {
    const saved = localStorage.getItem(`${STORAGE_PREFIX}_banks`);
    return saved ? JSON.parse(saved) : INITIAL_BANK_ACCOUNTS;
  });

  // Withdrawals
  const [withdrawals, setWithdrawals] = useState<WithdrawalRecord[]>(() => {
    const saved = localStorage.getItem(`${STORAGE_PREFIX}_withdrawals`);
    return saved ? JSON.parse(saved) : INITIAL_WITHDRAWALS;
  });

  // Finance Summary
  const [financeSummary, setFinanceSummary] = useState<FinanceSummary>(() => {
    const saved = localStorage.getItem(`${STORAGE_PREFIX}_finance`);
    return saved ? JSON.parse(saved) : INITIAL_FINANCE;
  });

  // Modals
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [modalData, setModalData] = useState<any>(null);

  // Sync to LocalStorage
  useEffect(() => {
    localStorage.setItem(`${STORAGE_PREFIX}_services`, JSON.stringify(services));
  }, [services]);

  useEffect(() => {
    localStorage.setItem(`${STORAGE_PREFIX}_products`, JSON.stringify(digitalProducts));
  }, [digitalProducts]);

  useEffect(() => {
    localStorage.setItem(`${STORAGE_PREFIX}_cart`, JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem(`${STORAGE_PREFIX}_orders`, JSON.stringify(orders));
  }, [orders]);

  useEffect(() => {
    localStorage.setItem(`${STORAGE_PREFIX}_requests`, JSON.stringify(paymentRequests));
  }, [paymentRequests]);

  useEffect(() => {
    localStorage.setItem(`${STORAGE_PREFIX}_reviews`, JSON.stringify(reviews));
  }, [reviews]);

  useEffect(() => {
    localStorage.setItem(`${STORAGE_PREFIX}_banks`, JSON.stringify(bankAccounts));
  }, [bankAccounts]);

  useEffect(() => {
    localStorage.setItem(`${STORAGE_PREFIX}_withdrawals`, JSON.stringify(withdrawals));
  }, [withdrawals]);

  useEffect(() => {
    localStorage.setItem(`${STORAGE_PREFIX}_finance`, JSON.stringify(financeSummary));
  }, [financeSummary]);

  // Cart operations
  const addToCart = (product: DigitalProduct, quantity = 1) => {
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCart(prev => prev.filter(item => item.product.id !== productId));
  };

  const updateCartQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart(prev =>
      prev.map(item =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => setCart([]);

  const cartTotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Digital checkout & order creation
  const createOrder = async (details: {
    customerName: string;
    email: string;
    country: string;
    items: { productId: string; productName: string; price: number; format: string }[];
    totalAmount: number;
    paymentGateway: 'paystack' | 'flutterwave' | 'stripe' | 'paypal';
  }): Promise<Order> => {
    const orderNumber = `AND-${details.paymentGateway.toUpperCase().slice(0, 3)}-${Date.now().toString().slice(-5)}`;
    const downloadToken = `dl_token_${Math.random().toString(36).substring(2, 12)}_${Date.now()}`;
    const newOrder: Order = {
      id: `ord-${Date.now()}`,
      orderNumber,
      customerName: details.customerName,
      email: details.email,
      country: details.country,
      items: details.items,
      totalAmount: details.totalAmount,
      paymentGateway: details.paymentGateway,
      paymentReference: `${details.paymentGateway.toUpperCase()}_REF_${Date.now().toString().slice(-6)}`,
      status: 'completed',
      paidAt: new Date().toISOString(),
      downloadToken
    };

    setOrders(prev => [newOrder, ...prev]);

    // Update sales counts for items
    setDigitalProducts(prev =>
      prev.map(p => {
        const bought = details.items.find(i => i.productId === p.id);
        if (bought) {
          return { ...p, salesCount: p.salesCount + 1 };
        }
        return p;
      })
    );

    // Update finance metrics
    setFinanceSummary(prev => ({
      ...prev,
      totalRevenue: prev.totalRevenue + details.totalAmount,
      digitalSolutionRevenue: prev.digitalSolutionRevenue + details.totalAmount,
      settledBalance: prev.settledBalance + details.totalAmount,
      availableBalance: prev.availableBalance + details.totalAmount
    }));

    // Clear cart if items matched
    clearCart();

    return newOrder;
  };

  // Payment requests
  const createPaymentRequest = (req: Omit<ServicePaymentRequest, 'id' | 'status'>) => {
    const newReq: ServicePaymentRequest = {
      ...req,
      id: `req-${Date.now()}`,
      status: 'pending'
    };
    setPaymentRequests(prev => [newReq, ...prev]);
    setFinanceSummary(prev => ({
      ...prev,
      pendingPayments: prev.pendingPayments + req.amount
    }));
  };

  const payPaymentRequest = async (requestId: string, gateway: string): Promise<boolean> => {
    const req = paymentRequests.find(r => r.id === requestId);
    if (!req) return false;

    const ref = `AND-SRV-${gateway.toUpperCase().slice(0, 3)}-${Date.now().toString().slice(-5)}`;
    setPaymentRequests(prev =>
      prev.map(r =>
        r.id === requestId
          ? { ...r, status: 'paid', reference: ref, paidAt: new Date().toISOString() }
          : r
      )
    );

    setFinanceSummary(prev => ({
      ...prev,
      totalRevenue: prev.totalRevenue + req.amount,
      serviceRevenue: prev.serviceRevenue + req.amount,
      pendingPayments: Math.max(0, prev.pendingPayments - req.amount),
      settledBalance: prev.settledBalance + req.amount,
      availableBalance: prev.availableBalance + req.amount
    }));

    return true;
  };

  // Reviews
  const addReview = (newRev: Omit<Review, 'id' | 'date'>) => {
    const review: Review = {
      ...newRev,
      id: `rev-${Date.now()}`,
      date: 'Just now'
    };
    setReviews(prev => [review, ...prev]);
  };

  // Payout and Withdrawals
  const addBankAccount = (acc: Omit<BankAccount, 'id' | 'addedAt'>) => {
    const newAcc: BankAccount = {
      ...acc,
      id: `bnk-${Date.now()}`,
      addedAt: new Date().toISOString().split('T')[0]
    };
    setBankAccounts(prev => [newAcc, ...prev]);
  };

  const requestWithdrawal = async (amount: number, bankAccountId: string): Promise<{ success: boolean; message: string }> => {
    if (amount <= 0) return { success: false, message: 'Invalid withdrawal amount' };
    if (amount > financeSummary.availableBalance) {
      return { success: false, message: 'Withdrawal amount exceeds available settled balance' };
    }

    const bank = bankAccounts.find(b => b.id === bankAccountId) || bankAccounts[0];
    const newWd: WithdrawalRecord = {
      id: `wd-${Date.now()}`,
      reference: `WDR-${Date.now().toString().slice(-6)}`,
      amount,
      bankAccountId,
      bankDetails: `${bank.bankName} (${bank.accountNumberMasked})`,
      status: 'Processing',
      requestedAt: new Date().toISOString()
    };

    setWithdrawals(prev => [newWd, ...prev]);
    setFinanceSummary(prev => ({
      ...prev,
      availableBalance: prev.availableBalance - amount,
      withdrawnAmount: prev.withdrawnAmount + amount
    }));

    return { success: true, message: `Withdrawal request for $${amount} USD submitted to ${bank.bankName}.` };
  };

  // Product & Service management
  const updateService = (updated: ServiceItem) => {
    setServices(prev => prev.map(s => s.id === updated.id ? updated : s));
  };

  const updateDigitalProduct = (updated: DigitalProduct) => {
    setDigitalProducts(prev => prev.map(p => p.id === updated.id ? updated : p));
  };

  const addDigitalProduct = (product: DigitalProduct) => {
    setDigitalProducts(prev => [product, ...prev]);
  };

  const deleteDigitalProduct = (id: string) => {
    setDigitalProducts(prev => prev.filter(p => p.id !== id));
  };

  // Modals
  const openModal = (modalName: string, data?: any) => {
    setActiveModal(modalName);
    setModalData(data || null);
  };

  const closeModal = () => {
    setActiveModal(null);
    setModalData(null);
  };

  const openSolutionDetail = (product: DigitalProduct) => {
    openModal('solution-detail', product);
  };

  const openCart = () => {
    openModal('cart');
  };

  const openCheckout = (directProduct?: DigitalProduct) => {
    openModal('checkout', directProduct ? { directProduct } : null);
  };

  const openAccount = () => {
    openModal('account-downloads');
  };

  const openAdmin = () => {
    openModal('admin');
  };

  const openServiceRequest = (service?: ServiceItem) => {
    openModal('service-request', service ? { service } : null);
  };

  const openServicePayment = (request?: ServicePaymentRequest) => {
    openModal('service-payment', request ? { request } : null);
  };

  const openAuditModal = (defaultPlatform?: string, defaultProblem?: string) => {
    openModal('website-audit', { platform: defaultPlatform, problem: defaultProblem });
  };

  const openVideoPlayer = (video: VideoReview) => {
    openModal('video-player', video);
  };

  // Secure download trigger
  const triggerDownload = (productName: string, format: string) => {
    // Generates a secure client-side blob download containing verified solution content
    const sanitizedTitle = productName.replace(/[^a-zA-Z0-9]/g, '_');
    const content = `=====================================================
ANDEOLA ECO RANKING • VERIFIED DIGITAL SOLUTION
Document: ${productName}
Format: ${format}
Protected Client Download • Authenticated License
Website: https://andeola.com | WhatsApp: ${BRAND_CONFIG.whatsappDisplay}
Support: ${BRAND_CONFIG.supportEmail}
=====================================================

1. EXECUTIVE OVERVIEW & PROBLEM BREAKDOWN
This digital solution has been engineered to provide immediate, actionable diagnostics and troubleshooting procedures for website owners and operators.

2. STEP-BY-STEP REMEDIATION WORKFLOW
• Phase A: Safety & Configuration Verification
  - Create a full backup of current theme/database before making edits
  - Verify active domain SSL and DNS records
  - Check gateway configuration credentials and webhook endpoints

• Phase B: Diagnostic Inspection
  - Run browser developer tools (F12) to inspect Console errors
  - Review network payload waterfall for slow scripts (>1MB)
  - Verify viewport meta tag: <meta name="viewport" content="width=device-width, initial-scale=1.0">

• Phase C: Implementation Checklist
  [✓] Audit active third-party apps for conflicts
  [✓] Validate mobile tap targets (>48px)
  [✓] Ensure clear high-contrast call-to-action buttons
  [✓] Perform end-to-end checkout test in incognito mode

3. NEED PROFESSIONAL IMPLEMENTATION?
If your technical problem requires direct custom development, ANDEOLA's engineering team is available for hire:
• WhatsApp: ${BRAND_CONFIG.whatsappDisplay}
• Email: ${BRAND_CONFIG.supportEmail}

Thank you for choosing ANDEOLA ECO RANKING.
`;
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ANDEOLA_${sanitizedTitle}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <AppContext.Provider
      value={{
        brandConfig,
        services,
        updateService,
        digitalProducts,
        updateDigitalProduct,
        addDigitalProduct,
        deleteDigitalProduct,
        cart,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        clearCart,
        cartTotal,
        cartCount,
        orders,
        createOrder,
        paymentRequests,
        createPaymentRequest,
        payPaymentRequest,
        reviews,
        addReview,
        videoReviews,
        financeSummary,
        bankAccounts,
        addBankAccount,
        withdrawals,
        requestWithdrawal,
        activeModal,
        modalData,
        openModal,
        closeModal,
        openSolutionDetail,
        openCart,
        openCheckout,
        openAccount,
        openAdmin,
        openServiceRequest,
        openServicePayment,
        openAuditModal,
        openVideoPlayer,
        triggerDownload
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
