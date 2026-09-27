import React from 'react';
import { useApp } from '../context/AppContext';
import { ArrowRight, Sparkles } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  const { openAuditModal, openIntakeModal } = useApp();

  return (
    <section className="py-24 bg-[#08111F] text-white relative overflow-hidden border-b border-slate-800">
      
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[36rem] h-[36rem] bg-[#2563EB] rounded-full blur-[160px]" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-[11px] font-bold tracking-widest uppercase text-cyan-400">
          <Sparkles className="w-3.5 h-3.5" />
          <span>TAKE THE NEXT STEP</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white uppercase leading-tight max-w-2xl mx-auto">
          READY TO BUILD A <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-white">
            BETTER WEBSITE?
          </span>
        </h2>

        <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal max-w-xl mx-auto">
          Whether you need a new website, a redesign, an online store, or an expert website audit, let's turn your idea into a professional digital experience.
        </p>

        {/* The Two Primary Action Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => openAuditModal()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-xs sm:text-sm font-bold tracking-wide uppercase rounded-xl bg-[#2563EB] hover:bg-blue-600 text-white shadow-xl shadow-blue-600/25 transition-all hover:-translate-y-0.5 cursor-pointer"
          >
            <span>GET A FREE AUDIT</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => openIntakeModal('New Website')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-xs sm:text-sm font-semibold tracking-wide uppercase rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 transition-all hover:-translate-y-0.5 cursor-pointer"
          >
            <span>START A PROJECT</span>
          </button>
        </div>

      </div>
    </section>
  );
};
