import React from 'react';
import { useApp } from '../context/AppContext';
import { ServiceItem } from '../types';
import { 
  Monitor, 
  RefreshCw, 
  Search, 
  Wrench, 
  ShoppingBag, 
  Zap, 
  Gauge, 
  TrendingUp, 
  ArrowRight, 
  Check, 
  Clock, 
  Info 
} from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const { services, openServiceRequest } = useApp();

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'web-design':
        return <Monitor className="w-5 h-5 text-blue-600" />;
      case 'web-redesign':
        return <RefreshCw className="w-5 h-5 text-cyan-600" />;
      case 'web-audit':
        return <Search className="w-5 h-5 text-blue-600" />;
      case 'web-error-fix':
        return <Wrench className="w-5 h-5 text-purple-600" />;
      case 'shopify-support':
        return <ShoppingBag className="w-5 h-5 text-emerald-600" />;
      case 'ecommerce-optimization':
        return <TrendingUp className="w-5 h-5 text-blue-600" />;
      case 'speed-optimization':
        return <Gauge className="w-5 h-5 text-amber-600" />;
      case 'seo-optimization':
        return <Zap className="w-5 h-5 text-purple-600" />;
      default:
        return <Monitor className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[11px] font-bold tracking-widest uppercase text-blue-700 mb-3">
              <Wrench className="w-3.5 h-3.5 text-blue-600" />
              <span>OPTION 1 • FULL-SERVICE ENGINEERING</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] tracking-tight uppercase">
              Hire ANDEOLA
            </h2>
            <p className="mt-3 text-base text-slate-600">
              For problems you want us to handle for you. Honest starting rates based on proven deliverables and transparent scopes.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200 text-xs text-slate-600 max-w-sm flex items-start gap-2.5 shadow-xs">
            <Info className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-900 block font-semibold">Custom Scoping:</strong>
              We evaluate your exact codebase, platform, and assets before issuing an approved Payment Request.
            </div>
          </div>
        </div>

        {/* 8 Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(service => (
            <div
              key={service.id}
              className="bg-white rounded-3xl border border-slate-200 p-7 flex flex-col justify-between hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 group hover:-translate-y-1 relative"
            >
              <div>
                {/* Icon & Turnaround */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="w-11 h-11 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getServiceIcon(service.id)}
                  </div>
                  <span className="font-mono text-[11px] font-medium text-slate-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{service.turnaroundTime}</span>
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-4 text-lg font-bold text-[#0F172A] group-hover:text-blue-600 transition-colors uppercase tracking-tight">
                  {service.name}
                </h3>

                {/* Description */}
                <p className="mt-2 text-xs text-slate-600 leading-relaxed min-h-[50px]">
                  {service.description}
                </p>

                {/* Price block */}
                <div className="mt-4 p-3.5 rounded-2xl bg-[#F8FAFC] border border-slate-200/80">
                  <div className="flex items-baseline justify-between">
                    <span className="text-[11px] font-bold text-[#0F172A] font-mono">
                      {service.priceDisplay}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">USD</span>
                  </div>
                  <div className="text-[10px] text-blue-600 font-mono mt-0.5">
                    Typical: {service.priceRange}
                  </div>
                </div>

                {/* Features bullets */}
                <div className="mt-4 space-y-1.5 pt-2">
                  {service.features.slice(0, 3).map((feat, i) => (
                    <div key={i} className="flex items-start gap-1.5 text-[11px] text-slate-600">
                      <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-4 border-t border-slate-100">
                <button
                  onClick={() => openServiceRequest(service)}
                  className="w-full py-3 px-4 rounded-xl bg-[#0F172A] hover:bg-blue-600 text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs group-hover:bg-blue-600"
                >
                  <span>{service.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Required Mandatory Disclaimer */}
        <div className="mt-12 text-center text-xs font-medium text-slate-500 bg-white p-4 rounded-2xl border border-slate-200/80 max-w-xl mx-auto shadow-xs">
          <span>ℹ️ Final pricing depends on project scope and technical requirements.</span>
        </div>

      </div>
    </section>
  );
};
