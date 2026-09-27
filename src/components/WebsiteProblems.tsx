import React from 'react';
import { useApp } from '../context/AppContext';
import { AlertTriangle, ArrowRight, Smartphone, Compass, MousePointerClick, Clock, ShieldAlert, Palette } from 'lucide-react';
import { WEBSITE_PROBLEMS } from '../data/mockData';

export const WebsiteProblems: React.FC = () => {
  const { openAuditModal } = useApp();

  const getProblemIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Palette className="w-5 h-5 text-rose-500" />;
      case 1:
        return <Smartphone className="w-5 h-5 text-amber-500" />;
      case 2:
        return <Compass className="w-5 h-5 text-blue-500" />;
      case 3:
        return <MousePointerClick className="w-5 h-5 text-cyan-500" />;
      case 4:
        return <Clock className="w-5 h-5 text-purple-500" />;
      case 5:
        return <ShieldAlert className="w-5 h-5 text-rose-500" />;
      default:
        return <AlertTriangle className="w-5 h-5 text-rose-500" />;
    }
  };

  return (
    <section className="py-24 bg-[#08111F] text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-[11px] font-bold tracking-widest uppercase text-cyan-400">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
            <span>DIAGNOSTIC REALITY CHECK</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight uppercase leading-tight">
            IS YOUR WEBSITE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-amber-300 to-cyan-300">
              COSTING YOU CUSTOMERS?
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal max-w-2xl mx-auto">
            A website can look functional and still lose visitors because of poor design, confusing navigation, weak calls-to-action, slow loading, or a poor mobile experience.
          </p>
        </div>

        {/* 6 Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WEBSITE_PROBLEMS.map((prob, idx) => (
            <div
              key={idx}
              className="bg-[#0F1B2F] rounded-2xl border border-slate-800 p-7 flex flex-col justify-between hover:border-slate-700 transition-all group"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-5">
                  {getProblemIcon(idx)}
                </div>
                
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {prob.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {prob.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span>IMPACT: REVENUE AT RISK</span>
                <span className="text-amber-400">FIXABLE</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Block */}
        <div className="mt-14 text-center">
          <button
            onClick={() => openAuditModal('Website Audit')}
            className="inline-flex items-center gap-2.5 px-8 py-4 text-xs sm:text-sm font-bold tracking-wide uppercase rounded-xl bg-[#2563EB] hover:bg-blue-600 text-white shadow-xl shadow-blue-600/25 transition-all hover:-translate-y-0.5 cursor-pointer"
          >
            <span>GET MY WEBSITE AUDITED</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
