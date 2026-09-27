import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ArrowRight, CheckCircle2, XCircle, Sparkles } from 'lucide-react';

export const BeforeAfterSection: React.FC = () => {
  const { openIntakeModal } = useApp();
  const [activeView, setActiveView] = useState<'both' | 'before' | 'after'>('both');

  const improvements = [
    'Improved visual hierarchy',
    'Clearer navigation',
    'Stronger CTA',
    'Better mobile experience',
    'Modern brand presentation'
  ];

  return (
    <section className="py-24 bg-[#08111F] text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-[11px] font-bold tracking-widest uppercase text-cyan-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TRANSFORMATION SHOWCASE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight uppercase leading-tight">
            FROM OUTDATED TO MODERN
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl mx-auto font-normal">
            See how a strategic redesign replaces cognitive clutter with clean aesthetics, immediate value communication, and conversion flow.
          </p>

          {/* Interactive Toggle for Mobile & Desktop */}
          <div className="pt-2 flex justify-center">
            <div className="inline-flex p-1 rounded-xl bg-slate-900 border border-slate-800 text-xs">
              <button
                onClick={() => setActiveView('both')}
                className={`px-3.5 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                  activeView === 'both' ? 'bg-[#2563EB] text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                Split View
              </button>
              <button
                onClick={() => setActiveView('before')}
                className={`px-3.5 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                  activeView === 'before' ? 'bg-[#2563EB] text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                Before Only
              </button>
              <button
                onClick={() => setActiveView('after')}
                className={`px-3.5 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                  activeView === 'after' ? 'bg-[#2563EB] text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                After (ANDEOLA)
              </button>
            </div>
          </div>
        </div>

        {/* Split Comparison Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* BEFORE: Old Website */}
          {(activeView === 'both' || activeView === 'before') && (
            <div className="bg-[#121824] rounded-2xl border border-red-900/40 p-6 flex flex-col justify-between overflow-hidden relative">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                    <span className="text-xs font-bold uppercase tracking-wider text-rose-400">
                      BEFORE • Old Website
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-500">2014 Architecture</span>
                </div>

                {/* Simulated Cluttered Old UI */}
                <div className="bg-[#181F2E] p-4 rounded-xl border border-slate-800 text-xs space-y-3 font-serif opacity-80">
                  <div className="bg-slate-800/80 p-2 text-center text-slate-400 text-[10px] uppercase tracking-widest border border-slate-700">
                    Welcome to Our Homepage - Click Here For Products
                  </div>
                  <div className="p-3 bg-slate-900 rounded border border-slate-800 space-y-2">
                    <div className="text-[11px] font-bold text-slate-300">
                      We offer many services since 2012 across multiple regions.
                    </div>
                    <p className="text-[10px] text-slate-500 leading-tight">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <div className="pt-2 flex gap-2">
                      <div className="px-2 py-1 bg-slate-800 text-[9px] text-slate-400 rounded">
                        Read More...
                      </div>
                      <div className="px-2 py-1 bg-slate-800 text-[9px] text-slate-400 rounded">
                        Submit Inquiry
                      </div>
                    </div>
                  </div>
                </div>

                {/* Identified Frictions */}
                <div className="space-y-2 pt-2 text-xs text-slate-400">
                  <div className="flex items-center gap-2 text-rose-400/90 text-[11px]">
                    <XCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>Cluttered typography and weak visual contrast</span>
                  </div>
                  <div className="flex items-center gap-2 text-rose-400/90 text-[11px]">
                    <XCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>Non-responsive elements breaking on phone screens</span>
                  </div>
                  <div className="flex items-center gap-2 text-rose-400/90 text-[11px]">
                    <XCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>Buried contact forms and unclear conversion paths</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] text-slate-500 text-center font-mono">
                Status: High bounce rate & lost inquiries
              </div>
            </div>
          )}

          {/* AFTER: Redesigned Website */}
          {(activeView === 'both' || activeView === 'after') && (
            <div className="bg-[#0F1B2F] rounded-2xl border-2 border-blue-500/60 p-6 flex flex-col justify-between overflow-hidden relative shadow-2xl">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                    <span className="text-xs font-bold uppercase tracking-wider text-cyan-300">
                      AFTER • ANDEOLA Redesign
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-cyan-400">Modern 2026 Engine</span>
                </div>

                {/* Simulated Modern Crisp UI */}
                <div className="bg-[#14233D] p-5 rounded-xl border border-slate-700/80 text-xs space-y-3 font-sans">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="font-black tracking-wider text-white uppercase">NEXUS BRAND</span>
                    <span className="text-cyan-400 font-semibold">Start Project →</span>
                  </div>

                  <div className="space-y-1.5 pt-1">
                    <h4 className="text-base font-extrabold text-white leading-tight">
                      Elevate Your Business With Strategic Web Design.
                    </h4>
                    <p className="text-[11px] text-slate-300 leading-relaxed font-normal">
                      Clear propositions, fast loading pages, and clean mobile checkout built to convert.
                    </p>
                  </div>

                  <div className="pt-1 flex items-center gap-2">
                    <div className="px-3 py-1.5 rounded-lg bg-[#2563EB] text-white text-[10px] font-bold">
                      Get Started Free
                    </div>
                    <div className="text-[10px] text-slate-400 font-mono">
                      Sub-1.2s Load Speed
                    </div>
                  </div>
                </div>

                {/* 5 Key Strategic Results */}
                <div className="space-y-2 pt-2 text-xs">
                  <div className="flex items-center gap-2 text-cyan-300 text-[11px]">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-cyan-400" />
                    <span>Clear visual hierarchy guiding visitors to high-value actions</span>
                  </div>
                  <div className="flex items-center gap-2 text-cyan-300 text-[11px]">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-cyan-400" />
                    <span>Pixel-perfect mobile experience on all iOS and Android screens</span>
                  </div>
                  <div className="flex items-center gap-2 text-cyan-300 text-[11px]">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-cyan-400" />
                    <span>Prominent calls-to-action driving inquiry submissions</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] text-emerald-400 text-center font-bold">
                ✓ Increased visitor trust & clarity
              </div>
            </div>
          )}

        </div>

        {/* 5 Key Improvements List from Section 10 */}
        <div className="mt-14 max-w-4xl mx-auto pt-10 border-t border-slate-800">
          <div className="text-center mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
              CORE REDESIGN ADVANTAGES
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-center">
            {improvements.map((imp, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-200">
                <span className="block text-cyan-400 mb-1">✓</span>
                <span>{imp}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={() => openIntakeModal('Website Redesign')}
              className="inline-flex items-center gap-2.5 px-8 py-4 text-xs sm:text-sm font-bold tracking-wide uppercase rounded-xl bg-[#2563EB] hover:bg-blue-600 text-white shadow-xl shadow-blue-600/25 transition-all hover:-translate-y-0.5 cursor-pointer"
            >
              <span>REDESIGN MY WEBSITE</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
