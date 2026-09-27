import React from 'react';
import { WHY_US_ITEMS } from '../data/mockData';
import { Layout, Smartphone, Compass, Target, MessageSquareCode } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const getWhyIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Layout className="w-5 h-5 text-blue-600" />;
      case 1:
        return <Smartphone className="w-5 h-5 text-cyan-600" />;
      case 2:
        return <Compass className="w-5 h-5 text-blue-600" />;
      case 3:
        return <Target className="w-5 h-5 text-cyan-600" />;
      case 4:
        return <MessageSquareCode className="w-5 h-5 text-blue-600" />;
      default:
        return <Layout className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section id="about" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Meet ANDEOLA (Section 15) */}
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-24">
          <div className="text-xs font-bold uppercase tracking-widest text-[#2563EB]">
            ABOUT THE BRAND
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#08111F] tracking-tight uppercase">
            MEET ANDEOLA
          </h2>

          <div className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed font-normal max-w-3xl mx-auto">
            <p>
              ANDEOLA is a digital web solutions brand focused on creating modern, strategic, and visually engaging websites for businesses, creators, and entrepreneurs.
            </p>
            <p className="text-slate-600 text-sm sm:text-base">
              We combine design, user experience, branding, and practical digital strategy to create websites that are not only visually strong but also easy for customers to understand and use.
            </p>
          </div>
        </div>

        {/* Why ANDEOLA (Section 16) */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <div className="text-xs font-bold uppercase tracking-widest text-slate-400">
              PHILOSOPHY & STANDARDS
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#08111F] tracking-tight uppercase">
              WHY WORK WITH ANDEOLA?
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {WHY_US_ITEMS.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#F8FAFC] rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:border-blue-500 hover:shadow-lg transition-all"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-5 shadow-xs">
                    {getWhyIcon(idx)}
                  </div>

                  <h4 className="text-sm font-bold uppercase tracking-wider text-[#08111F] mb-2">
                    {item.title}
                  </h4>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-200/80 text-[10px] font-mono text-slate-400">
                  STANDARD 0{idx + 1}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
