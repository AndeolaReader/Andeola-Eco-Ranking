import React from 'react';
import { Logo } from './Logo';
import { useApp } from '../context/AppContext';
import { ShieldCheck, MessageSquare, Mail, Phone, Lock, ArrowUp, Download } from 'lucide-react';

export const Footer: React.FC = () => {
  const { brandConfig, openAdmin, openAccount } = useApp();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0F172A] text-white border-t border-slate-800">
      
      {/* Upper Footer: Brand & Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="full" theme="light" size="lg" showSubtitle={true} />
            <p className="text-xs sm:text-sm text-slate-300 max-w-sm leading-relaxed">
              Website Services & Digital Solutions. We help businesses build, improve, and fix their websites through professional development and ready-to-use digital troubleshooting products.
            </p>

            <div className="space-y-1.5 pt-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp: {brandConfig.whatsappDisplay}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <span>Email: {brandConfig.supportEmail}</span>
              </div>
            </div>
          </div>

          {/* Column 1: Core Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Solutions
            </h4>
            <ul className="space-y-2 text-xs text-slate-300 font-medium">
              <li>
                <button onClick={() => scrollTo('services')} className="hover:text-white transition-colors cursor-pointer">
                  Services (Hire Us)
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('digital-solutions')} className="hover:text-white transition-colors cursor-pointer text-blue-400">
                  Digital Solutions (DIY)
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('solution-finder')} className="hover:text-white transition-colors cursor-pointer">
                  Problem Finder
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('website-audit')} className="hover:text-white transition-colors cursor-pointer">
                  Website Audit
                </button>
              </li>
              <li>
                <button onClick={openAccount} className="hover:text-white transition-colors cursor-pointer text-purple-400 font-bold flex items-center gap-1">
                  <Download className="w-3 h-3" />
                  <span>My Downloads</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Company */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Company
            </h4>
            <ul className="space-y-2 text-xs text-slate-300 font-medium">
              <li>
                <button onClick={() => scrollTo('how-it-works')} className="hover:text-white transition-colors cursor-pointer">
                  How It Works
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('reviews')} className="hover:text-white transition-colors cursor-pointer">
                  Reviews & Videos
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('about')} className="hover:text-white transition-colors cursor-pointer">
                  About ANDEOLA
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('contact')} className="hover:text-white transition-colors cursor-pointer">
                  Contact & Support
                </button>
              </li>
              <li>
                <button onClick={openAdmin} className="hover:text-slate-200 transition-colors cursor-pointer text-slate-400 text-[11px] flex items-center gap-1">
                  <Lock className="w-3 h-3 text-slate-400" />
                  <span>Admin Finance</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal & Policies */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Policies
            </h4>
            <ul className="space-y-2 text-xs text-slate-300 font-medium">
              <li>
                <span className="cursor-pointer hover:text-white" onClick={() => alert('Privacy Policy: All customer information and website code submitted are kept strictly confidential.')}>
                  Privacy Policy
                </span>
              </li>
              <li>
                <span className="cursor-pointer hover:text-white" onClick={() => alert('Terms of Service: All services are governed by transparent agreed scope documents and milestone approvals.')}>
                  Terms of Service
                </span>
              </li>
              <li>
                <span className="cursor-pointer hover:text-white" onClick={() => alert('Refund Policy: Digital downloads are delivered instantly. Custom services include milestone revision cycles.')}>
                  Refund Policy
                </span>
              </li>
              <li>
                <span className="cursor-pointer hover:text-white" onClick={() => alert('Digital Product Terms: Purchased guides and checklists grant single-seat license for personal or business use.')}>
                  Digital Product Terms
                </span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Legal / Copyright Bar */}
      <div className="border-t border-slate-800 bg-[#0A0F1D] py-6 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} ANDEOLA ECO RANKING. All rights reserved.</span>
            <span>•</span>
            <span className="text-slate-400">Currency: USD ($)</span>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <div className="flex items-center gap-1.5 text-[11px]">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Paystack & Flutterwave Verified Gateway</span>
            </div>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
              title="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

    </footer>
  );
};
