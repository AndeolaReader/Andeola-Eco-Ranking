import React from 'react';
import { useApp } from '../context/AppContext';
import { Wrench, FileText, CheckCircle2, ShieldCheck, Zap, Layers, Sparkles } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { brandConfig } = useApp();

  const standards = [
    {
      title: 'Technical Problem Solving',
      desc: 'We diagnose root causes across server configurations, Liquid templates, plugin collisions, and mobile breakpoints.'
    },
    {
      title: 'Dual-Path Model',
      desc: 'Flexibility to choose between hiring our senior development team or getting immediate step-by-step DIY troubleshooting documentation.'
    },
    {
      title: 'Conversion-Engineered Design',
      desc: 'Websites and landing pages structured around customer psychology, trust signals, legible typography, and frictionless checkout.'
    },
    {
      title: 'Zero Bloat & Clean Code',
      desc: 'Clean modern code architectures ensuring sub-1.5 second loading, perfect Core Web Vitals, and responsive cross-browser rendering.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Brand Profile */}
        <div className="max-w-4xl mx-auto text-center space-y-5 mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[11px] font-bold tracking-widest uppercase text-blue-700">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>ABOUT THE COMPANY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] tracking-tight uppercase">
            Meet ANDEOLA
          </h2>

          <div className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed max-w-3xl mx-auto font-normal">
            <p>
              <strong>ANDEOLA</strong> is a digital web solutions company and technical resource platform dedicated to helping businesses, store founders, and entrepreneurs build, optimize, and repair their websites.
            </p>
            <p className="text-sm sm:text-base text-slate-600">
              Operating with our <strong>ECO RANKING</strong> performance standard, we eliminate cognitive friction, code bloat, and broken mobile viewports. Whether you need an experienced developer to rebuild your store or a granular diagnostic guide to fix a checkout glitch yourself, ANDEOLA provides the exact solution.
            </p>
          </div>
        </div>

        {/* Standards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {standards.map((std, i) => (
            <div
              key={i}
              className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-xs flex flex-col justify-between hover:border-blue-400 hover:shadow-lg transition-all"
            >
              <div className="space-y-3">
                <span className="font-mono text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">
                  STANDARD 0{i + 1}
                </span>
                <h4 className="text-base font-bold text-[#0F172A] pt-1">
                  {std.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {std.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-bold text-slate-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Strict Quality Benchmark</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
