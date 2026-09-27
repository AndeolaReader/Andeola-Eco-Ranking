import React from 'react';
import { Logo } from './Logo';
import { Mail, Globe, ArrowUp, Instagram, Video, ShoppingCart } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#08111F] text-slate-400 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1 & 2: Brand & Positioning */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="full" theme="light" size="lg" showSubtitle={true} />
            
            <p className="text-slate-300 text-sm font-semibold tracking-wide mt-2">
              Web Design • Redesign • E-commerce • Digital Solutions
            </p>

            <p className="text-slate-400 text-xs sm:text-sm max-w-sm leading-relaxed font-normal">
              Modern digital web solutions crafted to help businesses look professional, communicate clearly, and convert visitors into loyal customers.
            </p>

            {/* Official Website URL */}
            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-cyan-400">
              <Globe className="w-4 h-4 text-slate-500" />
              <a
                href="https://andeolaecorankwebsolution.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                andeolaecorankwebsolution.netlify.app
              </a>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              <li>
                <button
                  onClick={() => scrollTo('hero')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('services')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('portfolio')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('process')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Process
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('faq')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  FAQ
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Services Overview */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">
              Core Solutions
            </h4>
            <ul className="space-y-2.5">
              <li>
                <button onClick={() => scrollTo('services')} className="hover:text-white transition-colors cursor-pointer">
                  Website Design
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('services')} className="hover:text-white transition-colors cursor-pointer">
                  Website Redesign
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('services')} className="hover:text-white transition-colors cursor-pointer">
                  Website Audit
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('services')} className="hover:text-white transition-colors cursor-pointer">
                  E-commerce Websites
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('services')} className="hover:text-white transition-colors cursor-pointer">
                  Landing Pages
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('services')} className="hover:text-white transition-colors cursor-pointer">
                  Website Optimization
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Contact & Social Handles */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">
              Connect
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 font-mono text-[11px]">
                <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <a href="mailto:andeolareader4@gmail.com" className="hover:text-white">
                  andeolareader4@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-2 font-mono text-[11px]">
                <Instagram className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                <span className="text-slate-300">@andeolareader</span>
              </div>

              <div className="flex items-center gap-2 font-mono text-[11px]">
                <Video className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span className="text-slate-300">@rolex.bookeditor</span>
              </div>

              <div className="flex items-center gap-2 font-mono text-[11px]">
                <ShoppingCart className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span className="text-slate-300">Fiverr: andeola_read</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 ANDEOLA. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-slate-300 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-300 cursor-pointer">Terms of Service</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
