import React from 'react';
import { useApp } from './context/AppContext';

// Sections
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { ServicesSection } from './components/ServicesSection';
import { WebsiteProblems } from './components/WebsiteProblems';
import { FreeAuditSection } from './components/FreeAuditSection';
import { PortfolioSection } from './components/PortfolioSection';
import { BeforeAfterSection } from './components/BeforeAfterSection';
import { ProcessSection } from './components/ProcessSection';
import { PricingSection } from './components/PricingSection';
import { PaymentSection } from './components/PaymentSection';
import { ProjectIntakeSection } from './components/ProjectIntakeSection';
import { AboutSection } from './components/AboutSection';
import { TestimonialSection } from './components/TestimonialSection';
import { FAQSection } from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

// Modals
import { AuditModal } from './components/Modals/AuditModal';
import { IntakeModal } from './components/Modals/IntakeModal';
import { PaymentModal } from './components/Modals/PaymentModal';
import { PortfolioDetailModal } from './components/Modals/PortfolioDetailModal';
import { ServiceDetailModal } from './components/Modals/ServiceDetailModal';

export default function App() {
  const { activeModal } = useApp();

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#08111F] flex flex-col font-sans antialiased selection:bg-[#2563EB]/15 selection:text-[#2563EB]">
      {/* 1. Sticky Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Horizontal Trust Strip */}
        <TrustStrip />

        {/* 4. Core Services Section */}
        <ServicesSection />

        {/* 5. Website Problems Diagnostic */}
        <WebsiteProblems />

        {/* 6. Lead Generation: Free Website Audit Section */}
        <FreeAuditSection />

        {/* 7. Selected Work Portfolio Showcase */}
        <PortfolioSection />

        {/* 8. Before & After Transformation */}
        <BeforeAfterSection />

        {/* 9. Methodology Process Steps */}
        <ProcessSection />

        {/* 10. Pricing Packages */}
        <PricingSection />

        {/* 11. Secure Project Payment Portal */}
        <PaymentSection />

        {/* 12. Client Project Intake Form */}
        <ProjectIntakeSection />

        {/* 13. About ANDEOLA & Why Us */}
        <AboutSection />

        {/* 14. Client Feedback Policy */}
        <TestimonialSection />

        {/* 15. FAQ */}
        <FAQSection />

        {/* 16. Final Large CTA */}
        <FinalCTA />

        {/* 17. Contact Agency Form */}
        <ContactSection />
      </main>

      {/* 18. Footer */}
      <Footer />

      {/* Active Modal Portals */}
      {activeModal === 'free-audit' && <AuditModal />}
      {activeModal === 'project-intake' && <IntakeModal />}
      {activeModal === 'project-payment' && <PaymentModal />}
      {activeModal === 'portfolio-details' && <PortfolioDetailModal />}
      {activeModal === 'service-details' && <ServiceDetailModal />}
    </div>
  );
}
