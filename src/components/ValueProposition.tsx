import React from 'react';
import { useApp } from '../context/AppContext';
import { Wrench, FileText, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

export const ValueProposition: React.FC = () => {
  const { openServiceRequest } = useApp();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const hireItems = [
    'Website Design',
    'Website Redesign',
    'Website Audit',
    'Error Fixing',
    'Shopify Support',
    'E-commerce Optimization',
    'Speed Optimization',
    'SEO'
  ];

  const diyItems = [
    'Troubleshooting Guides',
    'Checklists',
    'Templates',
    'Optimization Documents',
    'Technical Resources',
    'Website Documentation'
  ];

  return (
    <section id="two-ways" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[11px] font-bold tracking-widest uppercase text-blue-700">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>THE ANDEOLA BUSINESS MODEL</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] tracking-tight uppercase">
            Two Ways We Can Help
          </h2>

          <p className="text-base text-slate-600 max-w-2xl mx-auto">
            Choose the path that fits your budget, timeline, and technical preference: hire our team for full-service implementation or grab a ready-to-use digital solution to fix it yourself.
          </p>
        </div>

        {/* The 2 Core Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* CARD 1: HIRE ANDEOLA */}
          <div className="rounded-3xl border-2 border-blue-600 bg-[#F8FAFC] p-8 sm:p-10 flex flex-col justify-between shadow-xl shadow-blue-600/5 relative group hover:-translate-y-1 transition-all">
            <div className="space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-md">
                  <Wrench className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-blue-700 bg-blue-100 px-3 py-1 rounded-full">
                  OPTION 1 • FULL SERVICE
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] uppercase tracking-tight">
                  HIRE ANDEOLA
                </h3>
                <p className="text-sm font-semibold text-blue-700 mt-1">
                  "For problems you want us to handle for you."
                </p>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  Work directly with our engineering team for end-to-end web design, store redesigns, technical troubleshooting, and speed tuning.
                </p>
              </div>

              <div className="pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-3">
                  Services Included:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {hireItems.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-700 bg-white p-2.5 rounded-xl border border-slate-200/80">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            <div className="pt-8 mt-6 border-t border-slate-200">
              <button
                onClick={() => scrollTo('services')}
                className="w-full py-4 px-6 rounded-xl bg-[#2563EB] hover:bg-blue-600 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-blue-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>View Services</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* CARD 2: GET A DIGITAL SOLUTION */}
          <div className="rounded-3xl border-2 border-purple-500 bg-[#F8FAFC] p-8 sm:p-10 flex flex-col justify-between shadow-xl shadow-purple-500/5 relative group hover:-translate-y-1 transition-all">
            <div className="space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <div className="w-12 h-12 rounded-2xl bg-[#7C3AED] text-white flex items-center justify-center shadow-md">
                  <FileText className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-purple-700 bg-purple-100 px-3 py-1 rounded-full">
                  OPTION 2 • SELF-SERVICE DOWNLOAD
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] uppercase tracking-tight">
                  GET A DIGITAL SOLUTION
                </h3>
                <p className="text-sm font-semibold text-purple-700 mt-1">
                  "For specific problems you want to solve yourself."
                </p>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  Instant access to battle-tested diagnostic checklists, troubleshooting guides, and optimization workbooks starting from just $9 USD.
                </p>
              </div>

              <div className="pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-3">
                  Solution Formats Included:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {diyItems.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-700 bg-white p-2.5 rounded-xl border border-slate-200/80">
                      <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            <div className="pt-8 mt-6 border-t border-slate-200">
              <button
                onClick={() => scrollTo('digital-solutions')}
                className="w-full py-4 px-6 rounded-xl bg-[#7C3AED] hover:bg-purple-700 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-purple-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Browse Solutions</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
