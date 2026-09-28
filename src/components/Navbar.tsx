import React, { useState } from 'react';
import { Logo } from './Logo';
import { useApp } from '../context/AppContext';
import { ShoppingBag, Search, User, Menu, X, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { cartCount, openCart, openAccount, openAuditModal, openAdmin } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#0F172A]/95 backdrop-blur-md border-b border-slate-800 text-white transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollTo('hero')}>
            <Logo variant="full" theme="light" size="md" showSubtitle={true} />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-[13px] font-semibold tracking-wide text-slate-300">
            <button
              onClick={() => scrollTo('hero')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => scrollTo('services')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Services
            </button>
            <button
              onClick={() => scrollTo('digital-solutions')}
              className="text-blue-400 hover:text-blue-300 font-bold transition-colors cursor-pointer flex items-center gap-1"
            >
              <span>Digital Solutions</span>
              <span className="px-1.5 py-0.5 rounded text-[10px] bg-blue-600/30 text-blue-300 border border-blue-500/30">
                12
              </span>
            </button>
            <button
              onClick={() => scrollTo('website-audit')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Website Audit
            </button>
            <button
              onClick={() => scrollTo('how-it-works')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollTo('reviews')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Reviews
            </button>
            <button
              onClick={() => scrollTo('solution-finder')}
              className="hover:text-white transition-colors cursor-pointer text-purple-300 font-medium"
            >
              Resources
            </button>
            <button
              onClick={() => scrollTo('about')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Contact
            </button>
          </nav>

          {/* Right Action Icons & Primary CTA */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Search shortcut button */}
            <button
              onClick={() => scrollTo('digital-solutions')}
              title="Search Solutions"
              className="p-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Cart Button */}
            <button
              onClick={openCart}
              title="Shopping Cart"
              className="relative p-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#2563EB] text-white text-[11px] font-bold flex items-center justify-center animate-scale-in">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Account / My Downloads Button */}
            <button
              onClick={openAccount}
              title="My Account & Downloads"
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <User className="w-4 h-4 text-slate-400" />
              <span className="hidden xl:inline">Account</span>
            </button>

            {/* Primary Action Button: "Get Started" */}
            <button
              onClick={() => scrollTo('two-ways')}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold tracking-wider uppercase rounded-xl bg-[#2563EB] hover:bg-blue-600 text-white shadow-lg shadow-blue-600/20 transition-all hover:-translate-y-0.5 cursor-pointer ml-1"
            >
              <span>Get Started</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu & Cart Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={openCart}
              className="relative p-2 rounded-lg text-slate-300 hover:text-white"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#2563EB] text-white text-[10px] font-bold flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 cursor-pointer"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0F172A] border-b border-slate-800 px-4 pt-3 pb-6 space-y-3 animate-fade-in text-sm">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openAccount();
              }}
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-800 text-xs font-semibold text-slate-200"
            >
              <User className="w-4 h-4 text-blue-400" />
              <span>My Downloads</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openAdmin();
              }}
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-800 text-xs font-semibold text-slate-300"
            >
              <ShieldCheck className="w-4 h-4 text-purple-400" />
              <span>Admin Portal</span>
            </button>
          </div>

          <div className="flex flex-col space-y-2 text-slate-300 font-medium">
            <button
              onClick={() => scrollTo('hero')}
              className="text-left py-2 px-2 rounded-lg hover:bg-slate-800 text-white"
            >
              Home
            </button>
            <button
              onClick={() => scrollTo('services')}
              className="text-left py-2 px-2 rounded-lg hover:bg-slate-800"
            >
              Services (Hire ANDEOLA)
            </button>
            <button
              onClick={() => scrollTo('digital-solutions')}
              className="text-left py-2 px-2 rounded-lg hover:bg-slate-800 text-blue-400 font-bold"
            >
              Digital Solutions (Solve It Yourself)
            </button>
            <button
              onClick={() => scrollTo('solution-finder')}
              className="text-left py-2 px-2 rounded-lg hover:bg-slate-800 text-purple-400 font-medium"
            >
              Problem Finder
            </button>
            <button
              onClick={() => scrollTo('website-audit')}
              className="text-left py-2 px-2 rounded-lg hover:bg-slate-800"
            >
              Website Audit
            </button>
            <button
              onClick={() => scrollTo('how-it-works')}
              className="text-left py-2 px-2 rounded-lg hover:bg-slate-800"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollTo('reviews')}
              className="text-left py-2 px-2 rounded-lg hover:bg-slate-800"
            >
              Reviews
            </button>
            <button
              onClick={() => scrollTo('about')}
              className="text-left py-2 px-2 rounded-lg hover:bg-slate-800"
            >
              About ANDEOLA
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="text-left py-2 px-2 rounded-lg hover:bg-slate-800"
            >
              Contact & WhatsApp
            </button>
          </div>

          <div className="pt-2">
            <button
              onClick={() => scrollTo('two-ways')}
              className="w-full py-3 rounded-xl bg-[#2563EB] text-white font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
