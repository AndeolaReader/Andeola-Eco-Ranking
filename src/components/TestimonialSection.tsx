import React from 'react';
import { MessageSquareText } from 'lucide-react';

export const TestimonialSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        
        <div className="text-xs font-bold uppercase tracking-widest text-[#2563EB]">
          REVIEWS POLICY
        </div>

        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#08111F] tracking-tight uppercase">
          CLIENT FEEDBACK
        </h3>

        <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-xs max-w-xl mx-auto space-y-3">
          <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-slate-400">
            <MessageSquareText className="w-5 h-5" />
          </div>
          <p className="text-xs sm:text-sm text-slate-600 font-medium italic">
            "Client testimonials will appear here as projects are completed."
          </p>
          <div className="text-[11px] text-slate-400">
            ANDEOLA publishes verified client feedback upon project signoff and production deployment.
          </div>
        </div>

      </div>
    </section>
  );
};
