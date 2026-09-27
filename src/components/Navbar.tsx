import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { useApp } from '../context/AppContext';
import { Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { openAuditModal, openPaymentModal } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#08111F]/95 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/10'
          : 'bg-[#08111F] border-b border-slate-800/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Left: ANDEOLA Logo */}
        <button
          onClick={() => scrollTo('hero')}
          className="flex items-center text-left focus:outline-none rounded-lg cursor-pointer"
        >
          <Logo variant="full" theme="light" size="md" showSubtitle={true} />
        </button>

        {/* Center: Clean Editorial Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-300">
          <button
            onClick={() => scrollTo('hero')}
            className="hover:text-white transition-colors cursor-pointer py-1"
          >
            Home
          </button>
          <button
            onClick={() => scrollTo('services')}
            className="hover:text-white transition-colors cursor-pointer py-1"
          >
            Services
          </button>
          <button
            onClick={() => scrollTo('portfolio')}
            className="hover:text-white transition-colors cursor-pointer py-1"
          >
            Portfolio
          </button>
          <button
            onClick={() => scrollTo('process')}
            className="hover:text-white transition-colors cursor-pointer py-1"
          >
            Process
          </button>
          <button
            onClick={() => scrollTo('pricing')}
            className="hover:text-white transition-colors cursor-pointer py-1"
          >
            Pricing
          </button>
          <button
            onClick={() => scrollTo('about')}
            className="hover:text-white transition-colors cursor-pointer py-1"
          >
            About
          </button>
          <button
            onClick={() => scrollTo('faq')}
            className="hover:text-white transition-colors cursor-pointer py-1"
          >
            FAQ
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="hover:text-white transition-colors cursor-pointer py-1"
          >
            Contact
          </button>
        </nav>

        {/* Right: Primary Prominent CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={() => openPaymentModal()}
            className="hidden xl:inline-flex items-center gap-1.5 px-3.5 py-2.5 text-xs font-semibold rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            <span>Client Payment</span>
          </button>

          <button
            onClick={() => openAuditModal()}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold tracking-wide uppercase rounded-xl bg-[#2563EB] hover:bg-blue-600 text-white shadow-md shadow-blue-600/20 hover:shadow-blue-600/30 transition-all cursor-pointer"
          >
            <span>GET A FREE AUDIT</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={() => openAuditModal()}
            className="sm:hidden px-3 py-1.5 text-xs font-bold uppercase rounded-lg bg-[#2563EB] text-white"
          >
            Free Audit
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 text-slate-300 hover:text-white focus:outline-none cursor-pointer rounded-lg bg-slate-900 border border-slate-800"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#08111F] border-b border-slate-800 px-6 py-6 space-y-4 animate-fade-in shadow-2xl">
          <div className="flex flex-col space-y-3 text-sm font-medium text-slate-300">
            <button
              onClick={() => scrollTo('hero')}
              className="text-left py-2 hover:text-white transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollTo('services')}
              className="text-left py-2 hover:text-white transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollTo('portfolio')}
              className="text-left py-2 hover:text-white transition-colors"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollTo('process')}
              className="text-left py-2 hover:text-white transition-colors"
            >
              Process
            </button>
            <button
              onClick={() => scrollTo('pricing')}
              className="text-left py-2 hover:text-white transition-colors"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollTo('about')}
              className="text-left py-2 hover:text-white transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollTo('faq')}
              className="text-left py-2 hover:text-white transition-colors"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="text-left py-2 hover:text-white transition-colors"
            >
              Contact
            </button>
          </div>

          <div className="pt-4 border-t border-slate-800 space-y-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openAuditModal();
              }}
              className="w-full py-3.5 px-4 text-xs font-bold tracking-wide uppercase text-center rounded-xl bg-[#2563EB] text-white shadow-md flex items-center justify-center gap-2"
            >
              <span>GET A FREE AUDIT</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openPaymentModal();
              }}
              className="w-full py-3 px-4 text-xs font-semibold text-center rounded-xl bg-slate-900 border border-slate-800 text-slate-300 flex items-center justify-center gap-2"
            >
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>Client Project Payment</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
