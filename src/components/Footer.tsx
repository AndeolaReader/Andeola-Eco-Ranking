import React from 'react';
import { Logo } from './Logo';
import { useApp } from '../context/AppContext';
import { Shield, MessageSquare, Mail, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const { openModal } = useApp();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#111827] text-slate-400 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1: Brand & Positioning */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="full" theme="light" size="lg" />
            
            <p className="text-slate-400 text-xs sm:text-sm max-w-sm leading-relaxed">
              Professional website services, troubleshooting, and ready-to-use digital solutions for common website problems. Fixed price USD solutions & bespoke engineering.
            </p>

            <div className="pt-2 flex flex-col gap-1.5 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-slate-500">Brand:</span>
                <span className="font-bold text-white tracking-wide">ANDEOLA</span>
                <span className="text-slate-500">·</span>
                <span className="text-cyan-400 font-medium">ECO RANKING</span>
              </div>
              <div className="flex items-center gap-2 font-mono text-[11px] text-slate-400">
                <span>WhatsApp:</span>
                <a href="https://wa.me/2348124349094" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400">
                  +234 812 434 9094
                </a>
              </div>
              <div className="flex items-center gap-2 font-mono text-[11px] text-slate-400">
                <span>Email:</span>
                <a href="mailto:webhubtech299@gmail.com" className="hover:text-blue-400">
                  webhubtech299@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Website Services
            </h4>
            <ul className="space-y-2.5">
              <li><button onClick={() => scrollTo('services')} className="hover:text-white transition-colors cursor-pointer">Website Design ($800+)</button></li>
              <li><button onClick={() => scrollTo('services')} className="hover:text-white transition-colors cursor-pointer">Website Redesign ($600+)</button></li>
              <li><button onClick={() => scrollTo('services')} className="hover:text-white transition-colors cursor-pointer">Website Error Fix ($100+)</button></li>
              <li><button onClick={() => scrollTo('services')} className="hover:text-white transition-colors cursor-pointer">Shopify Support ($150+)</button></li>
              <li><button onClick={() => scrollTo('services')} className="hover:text-white transition-colors cursor-pointer">Speed Optimization ($150+)</button></li>
              <li><button onClick={() => scrollTo('services')} className="hover:text-white transition-colors cursor-pointer">Website Audit ($100+)</button></li>
            </ul>
          </div>

          {/* Col 3: Digital Marketplace */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Digital Solutions
            </h4>
            <ul className="space-y-2.5">
              <li><button onClick={() => scrollTo('digital-solutions')} className="hover:text-white transition-colors cursor-pointer">Shopify Checkout Guide ($19)</button></li>
              <li><button onClick={() => scrollTo('digital-solutions')} className="hover:text-white transition-colors cursor-pointer">Speed Optimization Checklist ($15)</button></li>
              <li><button onClick={() => scrollTo('digital-solutions')} className="hover:text-white transition-colors cursor-pointer">WordPress Error Recovery ($19)</button></li>
              <li><button onClick={() => scrollTo('digital-solutions')} className="hover:text-white transition-colors cursor-pointer">404 Error Fix Blueprint ($9)</button></li>
              <li><button onClick={() => scrollTo('digital-solutions')} className="hover:text-white transition-colors cursor-pointer">Mobile Responsive Checklist ($12)</button></li>
              <li><button onClick={() => scrollTo('digital-solutions')} className="hover:text-white transition-colors cursor-pointer">Website Security Checklist ($15)</button></li>
            </ul>
          </div>

          {/* Col 4: Operations & Portals */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Access & Portals
            </h4>
            <ul className="space-y-2.5">
              <li>
                <button
                  onClick={() => openModal('customer-dashboard')}
                  className="hover:text-cyan-400 font-semibold transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <span>My Purchases & Downloads</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => openModal('admin-dashboard')}
                  className="hover:text-purple-400 font-semibold transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <span>Admin Finance Portal</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('eco-audit')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  <span>Website Eco & Speed Audit</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('problem-finder')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  <span>Smart Problem Finder</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  <span>Contact Engineering</span>
                </button>
              </li>
            </ul>

            <div className="mt-6 pt-4 border-t border-slate-800">
              <div className="text-[11px] text-slate-500 font-mono">
                Gateways: Paystack · Flutterwave
              </div>
              <div className="text-[11px] text-slate-500 font-mono mt-0.5">
                Currency: USD ($)
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} ANDEOLA ECO RANKING. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-500">Final pricing depends on project scope.</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
