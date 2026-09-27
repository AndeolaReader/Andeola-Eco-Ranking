import React from 'react';
import { ArrowRight, Wrench, FileCode, CheckCircle2, Zap, Shield, Sparkles } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const Hero: React.FC = () => {
  const { brandConfig, openServiceRequest } = useApp();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#111827] text-white pt-16 pb-24 lg:pt-24 lg:pb-32 border-b border-slate-800">
      {/* Subtle tech background architectural glow */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#2563EB] rounded-full blur-[140px]" />
        <div className="absolute top-1/2 -right-40 w-[30rem] h-[30rem] bg-[#7C3AED] rounded-full blur-[160px]" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-[#06B6D4] rounded-full blur-[150px] opacity-40" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Hero Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Small Brand Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-800/90 border border-slate-700/80 text-[11px] font-bold tracking-widest uppercase text-cyan-400">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              ANDEOLA DIGITAL SOLUTIONS
            </div>

            {/* Hero Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08]">
              WEBSITE PROBLEMS? <br />
              <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
                FIND THE RIGHT SOLUTION.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
              {brandConfig.heroSupportingText ||
                "ANDEOLA helps businesses build, improve and fix their websites — with professional services and ready-to-use digital solutions for common website problems."}
            </p>

            {/* Dual CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
              <button
                onClick={() => openServiceRequest()}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-bold rounded-lg bg-[#2563EB] hover:bg-blue-600 text-white shadow-lg shadow-blue-500/25 transition-all hover:-translate-y-0.5"
              >
                <Wrench className="w-4 h-4 text-blue-200" />
                <span>{brandConfig.primaryCta || "Get Professional Help"}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollTo('digital-solutions')}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold rounded-lg bg-slate-800/90 hover:bg-slate-700 text-slate-200 border border-slate-700 hover:border-slate-600 transition-all hover:-translate-y-0.5"
              >
                <FileCode className="w-4 h-4 text-cyan-400" />
                <span>{brandConfig.secondaryCta || "Find a Digital Solution"}</span>
              </button>
            </div>

            {/* Value Guarantees List */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Transparent USD Pricing</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Paystack & Flutterwave</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <Zap className="w-4 h-4 text-purple-400 shrink-0" />
                <span>Instant Digital Downloads</span>
              </div>
            </div>

          </div>

          {/* Hero Visual Card: Two-Track Resolution Architecture */}
          <div className="lg:col-span-5">
            <div className="bg-[#1F2937]/90 rounded-xl border border-slate-700/80 p-6 shadow-2xl relative">
              <div className="flex items-center justify-between pb-4 border-b border-slate-700/60">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    Choose Your Resolution Path
                  </span>
                </div>
                <span className="text-[11px] font-mono text-cyan-400">v2.4 Ready</span>
              </div>

              <div className="mt-5 space-y-4">
                {/* Track 1: DIY Digital Solution */}
                <div 
                  onClick={() => scrollTo('digital-solutions')}
                  className="group p-4 rounded-lg bg-[#111827] border border-slate-800 hover:border-blue-500/60 transition-all cursor-pointer"
                >
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="font-bold text-cyan-400 flex items-center gap-1.5">
                      <FileCode className="w-3.5 h-3.5" />
                      Option A: Digital Solution (DIY)
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">$9 – $25 USD</span>
                  </div>
                  <h4 className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors">
                    Self-Service Guides & Checklists
                  </h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Download diagnostic checklists, root-cause fixes, and code templates to resolve problems yourself in minutes.
                  </p>
                  <div className="mt-3 flex items-center gap-2 text-[11px] font-semibold text-blue-400">
                    <span>Explore 10 Demo Solutions</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                {/* Track 2: Dedicated Professional Service */}
                <div 
                  onClick={() => scrollTo('services')}
                  className="group p-4 rounded-lg bg-[#111827] border border-slate-800 hover:border-purple-500/60 transition-all cursor-pointer"
                >
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="font-bold text-purple-400 flex items-center gap-1.5">
                      <Wrench className="w-3.5 h-3.5" />
                      Option B: Professional Service (Done For You)
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">Starting at $100 USD</span>
                  </div>
                  <h4 className="text-sm font-semibold text-white group-hover:text-purple-300 transition-colors">
                    Hand-Off To ANDEOLA Engineers
                  </h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Website redesigns, critical bug repairs, speed tuning, and Shopify customization handled directly by our team.
                  </p>
                  <div className="mt-3 flex items-center gap-2 text-[11px] font-semibold text-purple-400">
                    <span>View 8 Website Services</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>

              {/* Live Status Ticker */}
              <div className="mt-5 pt-4 border-t border-slate-700/60 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  Average service turnaround: <strong className="text-slate-200">24–48 hrs</strong>
                </span>
                <span className="text-slate-500 font-mono">Scope-based quotes</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
