import React from 'react';
import { PROCESS_STEPS } from '../data/mockData';

export const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-[#2563EB] mb-2">
            METHODOLOGY
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#08111F] tracking-tight uppercase">
            HOW WE WORK
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            A disciplined, 5-phase delivery process built for predictability, transparent milestones, and zero technical surprises.
          </p>
        </div>

        {/* 5 Numbered Process Cards / Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={idx}
              className="bg-[#F8FAFC] rounded-2xl border border-slate-200 p-7 flex flex-col justify-between hover:border-blue-500 hover:shadow-lg transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200">
                  <span className="text-3xl font-black text-[#08111F] group-hover:text-blue-600 transition-colors font-mono">
                    {step.number}
                  </span>
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-300 group-hover:bg-[#2563EB] transition-colors" />
                </div>

                <h3 className="text-base font-bold uppercase tracking-wider text-[#08111F] mb-2">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 text-[10px] font-mono text-slate-400">
                PHASE 0{idx + 1}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
