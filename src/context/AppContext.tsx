import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  ServiceItem,
  DigitalProduct,
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
  INITIAL_SERVICES,
  INITIAL_DIGITAL_PRODUCTS,
  INITIAL_REVIEWS,
  INITIAL_VIDEO_REVIEWS,
  INITIAL_PAYMENT_REQUESTS,
  INITIAL_BANK_ACCOUNT,
  INITIAL_WITHDRAWALS,
  DEFAULT_BRAND_CONFIG
} from '../data/mockData';

interface AppContextType {
  services: ServiceItem[];
  digitalProducts: DigitalProduct[];
  reviews: Review[];
  videoReviews: VideoReview[];
  orders: Order[];
  paymentRequests: ServicePaymentRequest[];
  bankAccount: BankAccount;
  withdrawals: WithdrawalRecord[];
  brandConfig: BrandConfig;
  finance: FinanceSummary;
  
  // Modals & UI state
  activeModal: string | null;
  modalData: any;
  openModal: (modalName: string, data?: any) => void;
  closeModal: () => void;

  // Actions
  openCheckout: (product: DigitalProduct) => void;
  openServiceRequest: (service?: ServiceItem) => void;
  openPayPaymentRequest: (request: ServicePaymentRequest) => void;
  processPayment: (details: {
    customerName: string;
    customerEmail: string;
    itemId: string;
    itemTitle: string;
    itemType: 'digital_product' | 'service_request' | 'custom_invoice';
    amount: number;
    gateway: 'paystack' | 'flutterwave';
  }) => Promise<Order>;
  getDownloadContent: (token: string) => { title: string; content: string; filename: string } | null;
  
  // Admin Operations
  createPaymentRequest: (request: Omit<ServicePaymentRequest, 'id' | 'createdAt' | 'status' | 'reference'>) => void;
  addDigitalProduct: (product: Omit<DigitalProduct, 'id'>) => void;
  updateServicePrice: (id: string, startingPrice: number, priceRange: string) => void;
  updateBankAccount: (account: Partial<BankAccount>) => void;
  requestWithdrawal: (amount: number) => { success: boolean; message: string };
  updateBrandConfig: (config: Partial<BrandConfig>) => void;
  addReview: (review: Omit<Review, 'id' | 'date'>) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY = 'andeola_app_state_v1';

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Load initial state with localStorage persistence
  const [services, setServices] = useState<ServiceItem[]>(() => {
    const saved = localStorage.getItem(`${LOCAL_STORAGE_KEY}_services`);
    return saved ? JSON.parse(saved) : INITIAL_SERVICES;
  });

  const [digitalProducts, setDigitalProducts] = useState<DigitalProduct[]>(() => {
    const saved = localStorage.getItem(`${LOCAL_STORAGE_KEY}_products`);
    return saved ? JSON.parse(saved) : INITIAL_DIGITAL_PRODUCTS;
  });

  const [reviews, setReviews] = useState<Review[]>(() => {
    const saved = localStorage.getItem(`${LOCAL_STORAGE_KEY}_reviews`);
    return saved ? JSON.parse(saved) : INITIAL_REVIEWS;
  });

  const [videoReviews, setVideoReviews] = useState<VideoReview[]>(() => {
    const saved = localStorage.getItem(`${LOCAL_STORAGE_KEY}_videos`);
    return saved ? JSON.parse(saved) : INITIAL_VIDEO_REVIEWS;
  });

  const [orders, setOrders] = useState<Order[]>(() => {
    const saved = localStorage.getItem(`${LOCAL_STORAGE_KEY}_orders`);
    if (saved) return JSON.parse(saved);
    // Seed initial demo purchases for customer demonstration
    return [
      {
        id: 'ord-init-1',
        reference: 'AND-ORD-77491',
        customerName: 'Demo Client',
        customerEmail: 'client@example.com',
        itemType: 'digital_product',
        itemId: 'shopify-checkout-guide',
        itemTitle: 'SHOPIFY CHECKOUT TROUBLESHOOTING GUIDE',
        amount: 19,
        currency: 'USD',
        gateway: 'paystack',
        status: 'paid',
        createdAt: '2026-09-24T10:14:00Z',
        downloadToken: 'dl_sec_tok_77491_demo',
        downloadCount: 1,
        downloadLimit: 5,
        invoiceNumber: 'INV-2026-0041'
      }
    ];
  });

  const [paymentRequests, setPaymentRequests] = useState<ServicePaymentRequest[]>(() => {
    const saved = localStorage.getItem(`${LOCAL_STORAGE_KEY}_payment_requests`);
    return saved ? JSON.parse(saved) : INITIAL_PAYMENT_REQUESTS;
  });

  const [bankAccount, setBankAccount] = useState<BankAccount>(() => {
    const saved = localStorage.getItem(`${LOCAL_STORAGE_KEY}_bank`);
    return saved ? JSON.parse(saved) : INITIAL_BANK_ACCOUNT;
  });

  const [withdrawals, setWithdrawals] = useState<WithdrawalRecord[]>(() => {
    const saved = localStorage.getItem(`${LOCAL_STORAGE_KEY}_withdrawals`);
    return saved ? JSON.parse(saved) : INITIAL_WITHDRAWALS;
  });

  const [brandConfig, setBrandConfig] = useState<BrandConfig>(() => {
    const saved = localStorage.getItem(`${LOCAL_STORAGE_KEY}_brand`);
    return saved ? JSON.parse(saved) : DEFAULT_BRAND_CONFIG;
  });

  // Modal system
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [modalData, setModalData] = useState<any>(null);

  // Sync to local storage
  useEffect(() => {
    localStorage.setItem(`${LOCAL_STORAGE_KEY}_services`, JSON.stringify(services));
  }, [services]);

  useEffect(() => {
    localStorage.setItem(`${LOCAL_STORAGE_KEY}_products`, JSON.stringify(digitalProducts));
  }, [digitalProducts]);

  useEffect(() => {
    localStorage.setItem(`${LOCAL_STORAGE_KEY}_orders`, JSON.stringify(orders));
  }, [orders]);

  useEffect(() => {
    localStorage.setItem(`${LOCAL_STORAGE_KEY}_payment_requests`, JSON.stringify(paymentRequests));
  }, [paymentRequests]);

  useEffect(() => {
    localStorage.setItem(`${LOCAL_STORAGE_KEY}_withdrawals`, JSON.stringify(withdrawals));
  }, [withdrawals]);

  useEffect(() => {
    localStorage.setItem(`${LOCAL_STORAGE_KEY}_bank`, JSON.stringify(bankAccount));
  }, [bankAccount]);

  useEffect(() => {
    localStorage.setItem(`${LOCAL_STORAGE_KEY}_brand`, JSON.stringify(brandConfig));
  }, [brandConfig]);

  // Derived Finance calculations
  const calculateFinance = (): FinanceSummary => {
    const digitalRevenue = orders
      .filter(o => o.status === 'paid' && o.itemType === 'digital_product')
      .reduce((acc, curr) => acc + curr.amount, 0);

    const paidPaymentRequests = paymentRequests
      .filter(r => r.status === 'PAID')
      .reduce((acc, curr) => acc + curr.amount, 0);

    const serviceOrdersRevenue = orders
      .filter(o => o.status === 'paid' && o.itemType !== 'digital_product')
      .reduce((acc, curr) => acc + curr.amount, 0);

    const serviceRevenue = paidPaymentRequests + serviceOrdersRevenue;
    const totalRevenue = digitalRevenue + serviceRevenue;

    const pendingPayments = paymentRequests
      .filter(r => r.status === 'PENDING')
      .reduce((acc, curr) => acc + curr.amount, 0);

    const withdrawnAmount = withdrawals
      .filter(w => w.status === 'Successful')
      .reduce((acc, curr) => acc + curr.amount, 0);

    // Available settled balance is settled gross minus withdrawn
    const settledBalance = Math.max(0, totalRevenue - withdrawnAmount);
    const pendingBalance = pendingPayments;

    return {
      totalRevenue,
      serviceRevenue,
      digitalSolutionRevenue: digitalRevenue,
      pendingPayments,
      settledBalance,
      pendingBalance,
      withdrawnAmount,
      currency: 'USD'
    };
  };

  const openModal = (name: string, data?: any) => {
    setActiveModal(name);
    setModalData(data || null);
  };

  const closeModal = () => {
    setActiveModal(null);
    setModalData(null);
  };

  const openCheckout = (product: DigitalProduct) => {
    openModal('checkout', product);
  };

  const openServiceRequest = (service?: ServiceItem) => {
    openModal('service-request', service);
  };

  const openPayPaymentRequest = (request: ServicePaymentRequest) => {
    openModal('payment-request', request);
  };

  const processPayment = async (details: {
    customerName: string;
    customerEmail: string;
    itemId: string;
    itemTitle: string;
    itemType: 'digital_product' | 'service_request' | 'custom_invoice';
    amount: number;
    gateway: 'paystack' | 'flutterwave';
  }): Promise<Order> => {
    // Generate secure reference and simulated signed token
    const refNumber = Math.floor(100000 + Math.random() * 900000);
    const reference = `AND-${details.gateway.toUpperCase().slice(0, 3)}-${refNumber}`;
    const invoiceNumber = `INV-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    const downloadToken = `dl_sec_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;

    const newOrder: Order = {
      id: `ord-${Date.now()}`,
      reference,
      customerName: details.customerName,
      customerEmail: details.customerEmail,
      itemType: details.itemType,
      itemId: details.itemId,
      itemTitle: details.itemTitle,
      amount: details.amount,
      currency: 'USD',
      gateway: details.gateway,
      status: 'paid',
      createdAt: new Date().toISOString(),
      downloadToken: details.itemType === 'digital_product' ? downloadToken : undefined,
      downloadCount: 0,
      downloadLimit: 5,
      invoiceNumber
    };

    setOrders(prev => [newOrder, ...prev]);

    // If it was a service payment request, mark that request as PAID
    if (details.itemType === 'custom_invoice') {
      setPaymentRequests(prev =>
        prev.map(req =>
          req.id === details.itemId
            ? { ...req, status: 'PAID', paidAt: new Date().toISOString() }
            : req
        )
      );
    }

    return newOrder;
  };

  const getDownloadContent = (token: string) => {
    const order = orders.find(o => o.downloadToken === token && o.status === 'paid');
    if (!order) return null;

    const product = digitalProducts.find(p => p.id === order.itemId);
    if (!product) return null;

    return {
      title: product.title,
      content: product.downloadContentSample,
      filename: `${product.id}-andeola-guide.txt`
    };
  };

  const createPaymentRequest = (req: Omit<ServicePaymentRequest, 'id' | 'createdAt' | 'status' | 'reference'>) => {
    const newReq: ServicePaymentRequest = {
      ...req,
      id: `inv-req-${Date.now()}`,
      reference: `AND-PRQ-${Math.floor(100000 + Math.random() * 900000)}`,
      createdAt: new Date().toISOString().split('T')[0],
      status: 'PENDING'
    };
    setPaymentRequests(prev => [newReq, ...prev]);
  };

  const addDigitalProduct = (product: Omit<DigitalProduct, 'id'>) => {
    const id = product.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const newProduct: DigitalProduct = {
      ...product,
      id: `prod-${id}-${Date.now().toString().slice(-4)}`
    };
    setDigitalProducts(prev => [newProduct, ...prev]);
  };

  const updateServicePrice = (id: string, startingPrice: number, priceRange: string) => {
    setServices(prev =>
      prev.map(s => (s.id === id ? { ...s, startingPrice, priceRange } : s))
    );
  };

  const updateBankAccount = (account: Partial<BankAccount>) => {
    setBankAccount(prev => ({ ...prev, ...account }));
  };

  const requestWithdrawal = (amount: number) => {
    const currentFinance = calculateFinance();
    if (amount < 50) {
      return { success: false, message: 'Minimum withdrawal is $50.00 USD.' };
    }
    if (amount > currentFinance.settledBalance) {
      return {
        success: false,
        message: `Insufficient settled balance. Available: $${currentFinance.settledBalance.toLocaleString()} USD.`
      };
    }

    const newRecord: WithdrawalRecord = {
      id: `wdr-${Date.now()}`,
      reference: `WDR-${Date.now().toString().slice(-6)}`,
      date: new Date().toISOString().split('T')[0],
      amount,
      currency: 'USD',
      destinationBank: bankAccount.bankName,
      destinationAccount: bankAccount.accountNumberMasked,
      status: 'Successful',
      notes: 'Direct payout routed via settled provider gateway.'
    };

    setWithdrawals(prev => [newRecord, ...prev]);
    return { success: true, message: `Withdrawal of $${amount.toLocaleString()} USD successfully queued.` };
  };

  const updateBrandConfig = (config: Partial<BrandConfig>) => {
    setBrandConfig(prev => ({ ...prev, ...config }));
  };

  const addReview = (review: Omit<Review, 'id' | 'date'>) => {
    const newRev: Review = {
      ...review,
      id: `rev-${Date.now()}`,
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    };
    setReviews(prev => [newRev, ...prev]);
  };

  return (
    <AppContext.Provider
      value={{
        services,
        digitalProducts,
        reviews,
        videoReviews,
        orders,
        paymentRequests,
        bankAccount,
        withdrawals,
        brandConfig,
        finance: calculateFinance(),
        activeModal,
        modalData,
        openModal,
        closeModal,
        openCheckout,
        openServiceRequest,
        openPayPaymentRequest,
        processPayment,
        getDownloadContent,
        createPaymentRequest,
        addDigitalProduct,
        updateServicePrice,
        updateBankAccount,
        requestWithdrawal,
        updateBrandConfig,
        addReview
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
