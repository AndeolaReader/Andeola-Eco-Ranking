import React from 'react';
import { useApp } from '../context/AppContext';
import { 
  ArrowRight, 
  FileText, 
  Wrench, 
  Code2, 
  ShoppingBag, 
  BarChart3, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Download,
  Layers
} from 'lucide-react';

export const Hero: React.FC = () => {
  const { openServiceRequest } = useApp();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative overflow-hidden bg-[#0F172A] text-white pt-14 pb-24 lg:pt-20 lg:pb-32 border-b border-slate-800">
      
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-[#2563EB] rounded-full blur-[160px]" />
        <div className="absolute top-1/4 -right-32 w-[500px] h-[500px] bg-[#7C3AED] rounded-full blur-[180px] opacity-40" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Core Agency Proposition */}
          <div className="lg:col-span-7 space-y-7 text-left">
            
            {/* Small Brand Descriptor Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-[11px] font-bold tracking-widest uppercase text-blue-400">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span>ANDEOLA • WEBSITE SERVICES & DIGITAL SOLUTIONS</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.08]">
              Website Problems? <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-300 to-white">
                Find the Right Solution.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
              ANDEOLA helps businesses build, improve and fix their websites through professional services and ready-to-use digital solutions.
            </p>

            {/* Dual CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => scrollTo('services')}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 text-xs sm:text-sm font-bold tracking-wider uppercase rounded-xl bg-[#2563EB] hover:bg-blue-600 text-white shadow-xl shadow-blue-600/30 transition-all hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Get Professional Help</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollTo('digital-solutions')}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 text-xs sm:text-sm font-bold tracking-wider uppercase rounded-xl bg-slate-800/90 hover:bg-slate-700 text-purple-300 border border-purple-500/40 hover:border-purple-400 transition-all hover:-translate-y-0.5 cursor-pointer"
              >
                <Download className="w-4 h-4 text-purple-400" />
                <span>Find a Digital Solution</span>
              </button>
            </div>

            {/* Quick Choice Indicator Strip */}
            <div className="pt-6 grid grid-cols-2 gap-4 border-t border-slate-800/80 max-w-lg text-xs">
              <div className="flex items-start gap-2.5 text-slate-300">
                <Wrench className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-semibold">Option 1: Hire Us</strong>
                  <span className="text-slate-400 text-[11px]">We fix & build your site directly.</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5 text-slate-300">
                <FileText className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-semibold">Option 2: DIY Guide</strong>
                  <span className="text-slate-400 text-[11px]">Download checklist & fix it yourself.</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Composite (Website, Analytics, Code, E-commerce, Technical Fixes, Digital Documents) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl bg-[#1E293B]/90 border border-slate-700 p-6 shadow-2xl backdrop-blur-sm space-y-4">
              
              {/* Top Browser / System Bar */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-700/80 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-[11px] font-mono text-slate-400">ANDEOLA Solution Engine</span>
                <span className="px-2 py-0.5 rounded text-[10px] bg-blue-600/30 text-blue-300 border border-blue-500/30 font-bold">
                  LIVE
                </span>
              </div>

              {/* 1. Website & Code block */}
              <div className="p-4 rounded-xl bg-[#0F172A] border border-slate-700/60 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-mono flex items-center gap-1.5">
                    <Code2 className="w-3.5 h-3.5 text-blue-400" />
                    <span>Technical Fixes & Architecture</span>
                  </span>
                  <span className="text-emerald-400 font-mono text-[10px]">Verified 100%</span>
                </div>
                <div className="text-xs font-mono text-slate-300 bg-slate-900/80 p-2.5 rounded-lg border border-slate-800">
                  <span className="text-purple-400">diagnose</span>(<span className="text-blue-300">'shopify-checkout'</span>) <br />
                  <span className="text-slate-500">&gt; Status:</span> <span className="text-emerald-400">0 errors • Gateway verified</span>
                </div>
              </div>

              {/* 2. E-commerce & Analytics block */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-[#0F172A] border border-slate-700/60 space-y-1">
                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span>E-commerce</span>
                    <ShoppingBag className="w-3.5 h-3.5 text-blue-400" />
                  </div>
                  <div className="text-lg font-bold text-white font-mono">$800–$1.5k</div>
                  <div className="text-[10px] text-slate-400">Shopify & Stores</div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#0F172A] border border-slate-700/60 space-y-1">
                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span>Audit Score</span>
                    <BarChart3 className="w-3.5 h-3.5 text-purple-400" />
                  </div>
                  <div className="text-lg font-bold text-emerald-400 font-mono">98 / 100</div>
                  <div className="text-[10px] text-slate-400">Eco & Core Vitals</div>
                </div>
              </div>

              {/* 3. Digital Documents Showcase */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-purple-950/40 to-blue-950/40 border border-purple-500/30 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-600/30 border border-purple-500/40 flex items-center justify-center text-purple-300">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">12 Instant Digital Solutions</div>
                    <div className="text-[11px] text-slate-300">Checklists, Guides & Workbooks ($9–$25)</div>
                  </div>
                </div>
                <button
                  onClick={() => scrollTo('digital-solutions')}
                  className="px-3 py-1.5 rounded-lg bg-[#7C3AED] hover:bg-purple-600 text-white text-[11px] font-bold transition-colors cursor-pointer"
                >
                  Browse
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
