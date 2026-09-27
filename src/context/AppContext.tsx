import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  ServiceItem, 
  PortfolioProject, 
  PricingPackage, 
  AuditRequest, 
  ProjectIntake, 
  ClientPayment,
  FAQItem 
} from '../types';
import { SERVICES, PORTFOLIO_PROJECTS, PRICING_PACKAGES, FAQS } from '../data/mockData';

interface AppContextType {
  services: ServiceItem[];
  portfolioProjects: PortfolioProject[];
  pricingPackages: PricingPackage[];
  faqs: FAQItem[];
  
  // Stored state
  auditRequests: AuditRequest[];
  projectIntakes: ProjectIntake[];
  clientPayments: ClientPayment[];

  // Active modal
  activeModal: string | null;
  modalData: any;
  openModal: (modalName: string, data?: any) => void;
  closeModal: () => void;

  // Shortcuts
  openAuditModal: (defaultHelpWith?: string) => void;
  openIntakeModal: (projectType?: string) => void;
  openPaymentModal: (defaultService?: string, defaultAmount?: number) => void;
  openServiceDetails: (service: ServiceItem) => void;
  openPortfolioModal: (project: PortfolioProject) => void;

  // Actions
  submitAuditRequest: (data: Omit<AuditRequest, 'id' | 'submittedAt'>) => Promise<{ success: boolean; id: string }>;
  submitProjectIntake: (data: Omit<ProjectIntake, 'id' | 'submittedAt'>) => Promise<{ success: boolean; id: string }>;
  processPayment: (details: {
    clientName: string;
    email: string;
    service: string;
    amount: number;
    gateway: 'paystack' | 'flutterwave' | 'stripe' | 'paypal';
  }) => Promise<ClientPayment>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const STORAGE_KEY = 'andeola_agency_state_v2';

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [services] = useState<ServiceItem[]>(SERVICES);
  const [portfolioProjects] = useState<PortfolioProject[]>(PORTFOLIO_PROJECTS);
  const [pricingPackages] = useState<PricingPackage[]>(PRICING_PACKAGES);
  const [faqs] = useState<FAQItem[]>(FAQS);

  const [auditRequests, setAuditRequests] = useState<AuditRequest[]>(() => {
    const saved = localStorage.getItem(`${STORAGE_KEY}_audits`);
    return saved ? JSON.parse(saved) : [];
  });

  const [projectIntakes, setProjectIntakes] = useState<ProjectIntake[]>(() => {
    const saved = localStorage.getItem(`${STORAGE_KEY}_intakes`);
    return saved ? JSON.parse(saved) : [];
  });

  const [clientPayments, setClientPayments] = useState<ClientPayment[]>(() => {
    const saved = localStorage.getItem(`${STORAGE_KEY}_payments`);
    return saved ? JSON.parse(saved) : [];
  });

  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [modalData, setModalData] = useState<any>(null);

  useEffect(() => {
    localStorage.setItem(`${STORAGE_KEY}_audits`, JSON.stringify(auditRequests));
  }, [auditRequests]);

  useEffect(() => {
    localStorage.setItem(`${STORAGE_KEY}_intakes`, JSON.stringify(projectIntakes));
  }, [projectIntakes]);

  useEffect(() => {
    localStorage.setItem(`${STORAGE_KEY}_payments`, JSON.stringify(clientPayments));
  }, [clientPayments]);

  const openModal = (modalName: string, data?: any) => {
    setActiveModal(modalName);
    setModalData(data || null);
  };

  const closeModal = () => {
    setActiveModal(null);
    setModalData(null);
  };

  const openAuditModal = (defaultHelpWith?: string) => {
    openModal('free-audit', { needHelpWith: defaultHelpWith || 'Website Audit' });
  };

  const openIntakeModal = (projectType?: string) => {
    openModal('project-intake', { projectType: projectType || 'Website Redesign' });
  };

  const openPaymentModal = (defaultService?: string, defaultAmount?: number) => {
    openModal('project-payment', { service: defaultService || 'Website Design', amount: defaultAmount || 250 });
  };

  const openServiceDetails = (service: ServiceItem) => {
    openModal('service-details', service);
  };

  const openPortfolioModal = (project: PortfolioProject) => {
    openModal('portfolio-details', project);
  };

  const submitAuditRequest = async (data: Omit<AuditRequest, 'id' | 'submittedAt'>) => {
    const id = `aud-${Date.now()}`;
    const newRecord: AuditRequest = {
      ...data,
      id,
      submittedAt: new Date().toISOString()
    };
    setAuditRequests(prev => [newRecord, ...prev]);
    return { success: true, id };
  };

  const submitProjectIntake = async (data: Omit<ProjectIntake, 'id' | 'submittedAt'>) => {
    const id = `intk-${Date.now()}`;
    const newRecord: ProjectIntake = {
      ...data,
      id,
      submittedAt: new Date().toISOString()
    };
    setProjectIntakes(prev => [newRecord, ...prev]);
    return { success: true, id };
  };

  const processPayment = async (details: {
    clientName: string;
    email: string;
    service: string;
    amount: number;
    gateway: 'paystack' | 'flutterwave' | 'stripe' | 'paypal';
  }): Promise<ClientPayment> => {
    const reference = `AND-${details.gateway.toUpperCase().slice(0, 3)}-${Date.now().toString().slice(-6)}`;
    const newPayment: ClientPayment = {
      id: `pay-${Date.now()}`,
      reference,
      clientName: details.clientName,
      email: details.email,
      service: details.service,
      amount: details.amount,
      gateway: details.gateway,
      status: 'completed',
      paidAt: new Date().toISOString()
    };
    setClientPayments(prev => [newPayment, ...prev]);
    return newPayment;
  };

  return (
    <AppContext.Provider
      value={{
        services,
        portfolioProjects,
        pricingPackages,
        faqs,
        auditRequests,
        projectIntakes,
        clientPayments,
        activeModal,
        modalData,
        openModal,
        closeModal,
        openAuditModal,
        openIntakeModal,
        openPaymentModal,
        openServiceDetails,
        openPortfolioModal,
        submitAuditRequest,
        submitProjectIntake,
        processPayment
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
