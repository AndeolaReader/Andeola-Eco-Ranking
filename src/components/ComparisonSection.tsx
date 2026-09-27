import React from 'react';
import { useApp } from '../context/AppContext';
import { FileCode, Wrench, Check, ArrowRight } from 'lucide-react';

export const ComparisonSection: React.FC = () => {
  const { openServiceRequest } = useApp();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-xs font-bold uppercase tracking-wider text-[#2563EB] mb-2">
            Which Path Fits Your Needs?
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight">
            Digital Solution vs. Professional Service
          </p>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Compare our self-service problem guides with full-service engineering to find the fastest, most cost-effective path for your website.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Card 1: Digital Solution */}
          <div className="p-8 rounded-2xl bg-[#F8FAFC] border-2 border-slate-200 hover:border-blue-400 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="p-2.5 rounded-lg bg-blue-100 text-blue-700">
                  <FileCode className="w-6 h-6" />
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded border border-blue-200">
                  Self-Service (DIY)
                </span>
              </div>

              <h3 className="text-xl font-bold text-[#111827]">
                Digital Solution
              </h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Step-by-step diagnostic documentation, checklists, and code templates you or your team can execute immediately.
              </p>

              <div className="mt-6 space-y-3.5 text-xs text-slate-700">
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Cost:</strong> $9 – $25 USD one-time purchase
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Speed:</strong> Instant unlock & download in 30 seconds
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Effort:</strong> You follow the diagnostic checklist and apply fixes yourself
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Best for:</strong> Business owners, internal teams, or developers seeking root-cause workflows
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200">
              <button
                onClick={() => scrollTo('digital-solutions')}
                className="w-full py-3 px-4 text-xs font-bold rounded-lg bg-white hover:bg-slate-100 text-[#111827] border border-slate-300 transition-colors flex items-center justify-center gap-2"
              >
                <span>Browse Digital Solutions</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 2: Professional Service */}
          <div className="p-8 rounded-2xl bg-[#111827] text-white border-2 border-slate-800 hover:border-purple-500 transition-all flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="p-2.5 rounded-lg bg-purple-950 text-purple-400 border border-purple-800">
                  <Wrench className="w-6 h-6" />
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-purple-300 bg-purple-950/80 px-2.5 py-1 rounded border border-purple-800">
                  Done-For-You
                </span>
              </div>

              <h3 className="text-xl font-bold text-white">
                Professional Website Service
              </h3>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                Hand off the problem entirely to ANDEOLA engineers who audit, write code, resolve errors, or build your custom website.
              </p>

              <div className="mt-6 space-y-3.5 text-xs text-slate-300">
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Cost:</strong> Starting at $100 – $800 USD (Scope-based quotes)
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Speed:</strong> 24–48 hr quick fixes, 5–14 days for full design
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Effort:</strong> Zero technical work required on your end
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Best for:</strong> Busy founders, store owners, and businesses needing guaranteed execution
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800">
              <button
                onClick={() => openServiceRequest()}
                className="w-full py-3 px-4 text-xs font-bold rounded-lg bg-[#2563EB] hover:bg-blue-500 text-white shadow-md shadow-blue-500/25 transition-all flex items-center justify-center gap-2"
              >
                <span>Request Professional Service</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
