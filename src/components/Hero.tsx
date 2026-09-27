import React from 'react';
import { useApp } from '../context/AppContext';
import { ArrowRight, CheckCircle2, Sparkles, Globe, Shield, Smartphone } from 'lucide-react';

export const Hero: React.FC = () => {
  const { openAuditModal } = useApp();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative overflow-hidden bg-[#08111F] text-white pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-slate-800">
      
      {/* Subtle architectural ambient background */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#2563EB] rounded-full blur-[140px]" />
        <div className="absolute top-1/3 -right-32 w-96 h-96 bg-[#22D3EE] rounded-full blur-[150px] opacity-30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Core Agency Message */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Small Brand Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-[11px] font-bold tracking-widest uppercase text-cyan-400">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>ANDEOLA • DIGITAL WEB SOLUTIONS</span>
            </div>

            {/* Main Headline (H1) */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.08] uppercase">
              WE BUILD WEBSITES <br />
              THAT MAKE BUSINESSES <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-white">
                STAND OUT.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
              Modern websites, redesigns, e-commerce experiences, and website audits designed to help businesses look professional, communicate clearly, and turn visitors into customers.
            </p>

            {/* Dual CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
              <button
                onClick={() => openAuditModal()}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 text-xs sm:text-sm font-bold tracking-wide uppercase rounded-xl bg-[#2563EB] hover:bg-blue-600 text-white shadow-xl shadow-blue-600/25 transition-all hover:-translate-y-0.5 cursor-pointer"
              >
                <span>GET A FREE WEBSITE AUDIT</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollTo('portfolio')}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 text-xs sm:text-sm font-semibold tracking-wide uppercase rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-slate-600 transition-all hover:-translate-y-0.5 cursor-pointer"
              >
                <span>VIEW OUR WORK</span>
              </button>
            </div>

            {/* Trust Statement */}
            <div className="pt-4 flex items-center gap-2 text-xs font-medium text-slate-400">
              <span className="text-cyan-400">●</span>
              <span>Responsive • Modern • Conversion-Focused</span>
            </div>

          </div>

          {/* Right Column: Sophisticated 3D / Browser Mockup */}
          <div className="lg:col-span-5 relative">
            
            {/* Main Browser Frame */}
            <div className="relative rounded-2xl bg-[#0F1B2F] border border-slate-700/90 shadow-2xl overflow-hidden group">
              
              {/* Browser Window Chrome Topbar */}
              <div className="px-4 py-3 bg-[#0B1526] border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <div className="px-4 py-1 rounded bg-[#08111F] border border-slate-800 text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>https://yourbusiness.com</span>
                </div>
                <div className="w-8" />
              </div>

              {/* Mockup Content Body */}
              <div className="p-5 sm:p-6 space-y-4 bg-gradient-to-b from-[#0F1B2F] to-[#0A1220]">
                
                {/* Mockup Header preview */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded bg-blue-600 flex items-center justify-center text-[10px] font-black text-white">
                      A
                    </div>
                    <span className="text-xs font-bold text-white tracking-wider">AURA STUDIO</span>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] text-slate-400">
                    <span className="hover:text-white">Services</span>
                    <span className="hover:text-white">Work</span>
                    <span className="text-cyan-400 font-semibold">Book Demo</span>
                  </div>
                </div>

                {/* Mockup Hero Card inside browser */}
                <div className="p-4 rounded-xl bg-[#14233D] border border-slate-700/60 space-y-2">
                  <span className="text-[9px] font-bold text-cyan-400 tracking-wider uppercase">
                    Conversion-Engineered Architecture
                  </span>
                  <h4 className="text-base sm:text-lg font-black text-white leading-tight">
                    Scale Your Digital Footprint With Next-Gen Web Solutions.
                  </h4>
                  <div className="pt-2 flex items-center gap-2">
                    <div className="px-3 py-1 rounded bg-[#2563EB] text-[10px] font-bold text-white">
                      Explore Solutions
                    </div>
                    <div className="text-[10px] text-slate-400 font-mono">
                      Fast 1.1s Core Web Vitals
                    </div>
                  </div>
                </div>

                {/* Metrics & Feature Grid inside Mockup */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className="p-3 rounded-lg bg-[#0D1829] border border-slate-800/80">
                    <div className="flex items-center justify-between text-[11px] text-slate-400">
                      <span>Mobile UX</span>
                      <Smartphone className="w-3.5 h-3.5 text-cyan-400" />
                    </div>
                    <div className="text-base font-bold text-white mt-1">100%</div>
                    <div className="text-[9px] text-emerald-400 mt-0.5">Fully Responsive</div>
                  </div>

                  <div className="p-3 rounded-lg bg-[#0D1829] border border-slate-800/80">
                    <div className="flex items-center justify-between text-[11px] text-slate-400">
                      <span>Engagement</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                    </div>
                    <div className="text-base font-bold text-white mt-1">Strategic</div>
                    <div className="text-[9px] text-blue-400 mt-0.5">Clear CTA Architecture</div>
                  </div>
                </div>

              </div>

              {/* Bottom status bar in mockup */}
              <div className="px-4 py-2 bg-[#08111F] border-t border-slate-800 flex items-center justify-between text-[10px] text-slate-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Live Preview Mode
                </span>
                <span className="font-mono text-cyan-400">Designed by ANDEOLA</span>
              </div>

            </div>

            {/* Decorative Subtle Accent Tag Floating */}
            <div className="hidden sm:flex absolute -bottom-5 -left-5 bg-[#08111F] border border-slate-700 p-3 rounded-xl shadow-xl items-center gap-2.5 text-xs">
              <div className="w-8 h-8 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center font-bold">
                ✓
              </div>
              <div>
                <div className="font-bold text-white">Built For Real Growth</div>
                <div className="text-[10px] text-slate-400">Zero generic template bloat</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
