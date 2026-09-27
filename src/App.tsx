import React from 'react';
import { useApp } from './context/AppContext';

// 15 Homepage Structure Components in exact required order
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { ServicesSection } from './components/ServicesSection';
import { ProblemFinder } from './components/ProblemFinder';
import { DigitalSolutionsSection } from './components/DigitalSolutionsSection';
import { ComparisonSection } from './components/ComparisonSection';
import { EcoRankingAudit } from './components/EcoRankingAudit';
import { BuyerVideoReviews } from './components/BuyerVideoReviews';
import { CustomerReviews } from './components/CustomerReviews';
import { HowItWorks } from './components/HowItWorks';
import { AssistantChat } from './components/AssistantChat';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

// Modals
import { CheckoutModal } from './components/Modals/CheckoutModal';
import { CustomerDashboardModal } from './components/Modals/CustomerDashboardModal';
import { ServiceRequestModal } from './components/Modals/ServiceRequestModal';
import { PaymentRequestPayModal } from './components/Modals/PaymentRequestPayModal';
import { SolutionDetailModal } from './components/Modals/SolutionDetailModal';
import { AdminDashboardModal } from './components/Modals/AdminDashboardModal';

export default function App() {
  const { activeModal } = useApp();

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#111827] flex flex-col font-sans antialiased selection:bg-[#2563EB]/20 selection:text-[#2563EB]">
      {/* 1. Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* 2. Hero */}
        <Hero />

        {/* 3. Trust/value strip */}
        <TrustStrip />

        {/* 4. Professional Website Services */}
        <ServicesSection />

        {/* 5. "What Problem Are You Having?" (Smart Solution Finder) */}
        <ProblemFinder />

        {/* 6. Digital Solutions Marketplace */}
        <DigitalSolutionsSection />

        {/* 7. Service vs Digital Solution comparison */}
        <ComparisonSection />

        {/* 8. Website Audit CTA & Eco-Ranking Diagnostic */}
        <EcoRankingAudit />

        {/* 9. Buyer Video Reviews ("See What Buyers Say") */}
        <BuyerVideoReviews />

        {/* 10. Customer Reviews (Service Reviews & Digital Solution Reviews) */}
        <CustomerReviews />

        {/* 11. How It Works */}
        <HowItWorks />

        {/* 12. AI Assistant CTA (Embedded ANDEOLA Assistant) */}
        <AssistantChat isEmbedded={true} />

        {/* 13. FAQ */}
        <FAQSection />

        {/* 14. Contact (WhatsApp +234 812 434 9094 & webhubtech299@gmail.com) */}
        <ContactSection />
      </main>

      {/* 15. Footer */}
      <Footer />

      {/* Floating Bottom-Right ANDEOLA Assistant Chatbot */}
      <AssistantChat isEmbedded={false} />

      {/* Active Modal Portals */}
      {activeModal === 'checkout' && <CheckoutModal />}
      {activeModal === 'customer-dashboard' && <CustomerDashboardModal />}
      {activeModal === 'service-request' && <ServiceRequestModal />}
      {activeModal === 'payment-request' && <PaymentRequestPayModal />}
      {activeModal === 'solution-detail' && <SolutionDetailModal />}
      {activeModal === 'admin-dashboard' && <AdminDashboardModal />}
    </div>
  );
}
