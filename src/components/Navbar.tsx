import React, { useState } from 'react';
import { Logo } from './Logo';
import { useApp } from '../context/AppContext';
import { ShoppingBag, ShieldCheck, MessageSquare, Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { orders, openModal } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const purchasedCount = orders.filter(o => o.status === 'paid').length;

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#111827]/95 backdrop-blur-md border-b border-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg py-1"
        >
          <Logo variant="full" theme="light" size="md" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
          <button
            onClick={() => scrollTo('services')}
            className="hover:text-white transition-colors cursor-pointer py-1"
          >
            Services
          </button>
          <button
            onClick={() => scrollTo('problem-finder')}
            className="hover:text-white transition-colors cursor-pointer py-1"
          >
            Problem Finder
          </button>
          <button
            onClick={() => scrollTo('digital-solutions')}
            className="hover:text-white transition-colors cursor-pointer py-1 flex items-center gap-1.5"
          >
            <span>Digital Solutions</span>
            <span className="text-[10px] uppercase font-bold tracking-wider text-cyan-400 bg-cyan-950/60 border border-cyan-800/60 px-1.5 py-0.5 rounded">
              Store
            </span>
          </button>
          <button
            onClick={() => scrollTo('eco-audit')}
            className="hover:text-white transition-colors cursor-pointer py-1"
          >
            Eco & Speed Audit
          </button>
          <button
            onClick={() => scrollTo('reviews')}
            className="hover:text-white transition-colors cursor-pointer py-1"
          >
            Reviews
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="hover:text-white transition-colors cursor-pointer py-1"
          >
            Contact
          </button>
        </nav>

        {/* Right Action Island */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Customer Downloads / Purchases Access */}
          <button
            onClick={() => openModal('customer-dashboard')}
            className="relative flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
            title="Access your purchased digital solutions & invoices"
          >
            <ShoppingBag className="w-4 h-4 text-blue-400" />
            <span>My Downloads</span>
            {purchasedCount > 0 && (
              <span className="flex items-center justify-center w-5 h-5 text-[11px] font-bold text-white bg-blue-600 rounded-full">
                {purchasedCount}
              </span>
            )}
          </button>

          {/* Admin Dashboard Entry */}
          <button
            onClick={() => openModal('admin-dashboard')}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800/80 transition-colors"
            title="Finance, Payouts, Bank & Service Requests Admin"
          >
            <ShieldCheck className="w-4 h-4 text-purple-400" />
            <span className="hidden md:inline">Admin Portal</span>
          </button>

          {/* Primary CTA */}
          <button
            onClick={() => scrollTo('services')}
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded-lg bg-[#2563EB] hover:bg-blue-500 text-white shadow-sm shadow-blue-500/20 transition-all hover:shadow-blue-500/30"
          >
            <span>Get Started</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={() => openModal('customer-dashboard')}
            className="p-2 text-slate-300 hover:text-white"
            aria-label="View downloads"
          >
            <ShoppingBag className="w-5 h-5" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#111827] border-b border-slate-800 px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-2 text-sm font-medium text-slate-300">
            <button
              onClick={() => scrollTo('services')}
              className="text-left py-2 hover:text-white"
            >
              Services
            </button>
            <button
              onClick={() => scrollTo('problem-finder')}
              className="text-left py-2 hover:text-white"
            >
              Problem Finder
            </button>
            <button
              onClick={() => scrollTo('digital-solutions')}
              className="text-left py-2 hover:text-white"
            >
              Digital Solutions
            </button>
            <button
              onClick={() => scrollTo('eco-audit')}
              className="text-left py-2 hover:text-white"
            >
              Eco & Speed Audit
            </button>
            <button
              onClick={() => scrollTo('reviews')}
              className="text-left py-2 hover:text-white"
            >
              Reviews
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="text-left py-2 hover:text-white"
            >
              Contact
            </button>
          </div>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openModal('customer-dashboard');
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold rounded-lg bg-slate-800 text-slate-200"
            >
              <ShoppingBag className="w-4 h-4 text-blue-400" />
              <span>My Purchases & Downloads ({purchasedCount})</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openModal('admin-dashboard');
              }}
              className="w-full flex items-center justify-center gap-2 py-2 text-xs font-semibold rounded-lg bg-slate-900 border border-slate-700 text-purple-300"
            >
              <ShieldCheck className="w-4 h-4 text-purple-400" />
              <span>Admin Finance & Settings</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                scrollTo('services');
              }}
              className="w-full py-2.5 text-xs font-bold text-center rounded-lg bg-[#2563EB] text-white"
            >
              Get Professional Help
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
