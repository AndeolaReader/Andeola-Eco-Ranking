import React from 'react';
import { useApp } from './context/AppContext';

// Primary Sections
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ValueProposition } from './components/ValueProposition';
import { SolutionFinder } from './components/SolutionFinder';
import { DigitalSolutionsMarketplace } from './components/DigitalSolutionsMarketplace';
import { ServicesSection } from './components/ServicesSection';
import { HowItWorks } from './components/HowItWorks';
import { WebsiteAuditSection } from './components/WebsiteAuditSection';
import { ReviewsSection } from './components/ReviewsSection';
import { BuyerVideoReviews } from './components/BuyerVideoReviews';
import { AboutSection } from './components/AboutSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AssistantChat } from './components/AssistantChat';

// Interactive Modals
import { SolutionDetailModal } from './components/Modals/SolutionDetailModal';
import { CartModal } from './components/Modals/CartModal';
import { CheckoutModal } from './components/Modals/CheckoutModal';
import { CustomerAccountModal } from './components/Modals/CustomerAccountModal';
import { ServiceRequestModal } from './components/Modals/ServiceRequestModal';
import { ServicePaymentModal } from './components/Modals/ServicePaymentModal';
import { AdminFinanceModal } from './components/Modals/AdminFinanceModal';
import { VideoPlayerModal } from './components/Modals/VideoPlayerModal';

export default function App() {
  const { activeModal } = useApp();

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] flex flex-col font-sans antialiased selection:bg-[#2563EB]/20 selection:text-[#2563EB]">
      {/* 1. Header Navigation with Search, Cart, Account, and Brand */}
      <Navbar />

      <main className="flex-1">
        {/* 2. Hero Section: "Website Problems? Find the Right Solution." */}
        <Hero />

        {/* 3. Core Value Proposition: "Two Ways We Can Help" (Hire ANDEOLA vs Get a Digital Solution) */}
        <ValueProposition />

        {/* 4. Interactive 3-Step Solution Finder: "What's Your Website Problem?" */}
        <SolutionFinder />

        {/* 5. Major Digital Solutions Marketplace (12 Products with Filters & Instant Buy) */}
        <DigitalSolutionsMarketplace />

        {/* 6. Professional Services Pricing & Scopes (8 Services starting at $100–$800) */}
        <ServicesSection />

        {/* 7. How It Works (4 Clear Transparent Steps) */}
        <HowItWorks />

        {/* 8. Website Audit: "Not Sure What's Wrong?" */}
        <WebsiteAuditSection />

        {/* 9. Verified Reviews (Split into Service Reviews & Digital Solution Reviews) */}
        <ReviewsSection />

        {/* 10. Buyer Video Reviews: "Real Buyers. Real Experiences." */}
        <BuyerVideoReviews />

        {/* 11. Meet ANDEOLA (Brand & Quality Standards) */}
        <AboutSection />

        {/* 12. FAQ Section */}
        <FAQSection />

        {/* 13. Contact & Direct WhatsApp Line */}
        <ContactSection />
      </main>

      {/* 14. Footer */}
      <Footer />

      {/* 15. Floating AI Assistant: ANDEOLA ASSISTANT */}
      <AssistantChat />

      {/* Active Modal Portals */}
      {activeModal === 'solution-detail' && <SolutionDetailModal />}
      {activeModal === 'cart' && <CartModal />}
      {activeModal === 'checkout' && <CheckoutModal />}
      {activeModal === 'account-downloads' && <CustomerAccountModal />}
      {activeModal === 'service-request' && <ServiceRequestModal />}
      {activeModal === 'service-payment' && <ServicePaymentModal />}
      {activeModal === 'admin' && <AdminFinanceModal />}
      {activeModal === 'video-player' && <VideoPlayerModal />}
    </div>
  );
}
