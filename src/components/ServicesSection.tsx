import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ArrowRight, CheckCircle2, Clock, Info, Shield, Sparkles } from 'lucide-react';
import { ServiceItem } from '../types';

export const ServicesSection: React.FC = () => {
  const { services, openServiceRequest } = useApp();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'design', label: 'Design & Redesign' },
    { id: 'development', label: 'Error Fixes & Tech' },
    { id: 'optimization', label: 'Speed & Conversion' },
    { id: 'support', label: 'Shopify & Audits' },
  ];

  const filteredServices = activeCategory === 'all'
    ? services
    : services.filter(s => s.category === activeCategory);

  return (
    <section id="services" className="py-20 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#2563EB] uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span>Full-Stack Engineering & Problem Solving</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight">
              Professional Website Services
            </h2>
            <p className="mt-2 text-base text-slate-600 max-w-2xl">
              Professional websites designed around your business, brand, and customers. Hand off your website troubleshooting, rebuilds, and performance tuning to ANDEOLA engineers.
            </p>
          </div>

          {/* Pricing Policy Disclaimer Note */}
          <div className="p-3.5 rounded-lg bg-blue-50/80 border border-blue-200 text-xs text-blue-900 flex items-start gap-2.5 max-w-md">
            <Info className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
            <div>
              <span className="font-bold">Transparent Scope Commitment:</span> Starting rates shown in USD. Final pricing depends on project scope, integrations, and asset readiness.
            </div>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#111827] text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredServices.map(service => (
            <div
              key={service.id}
              className="bg-white rounded-xl border border-slate-200 hover:border-blue-400 p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-all group"
            >
              <div>
                {/* Header & Category text */}
                <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                  <span className="capitalize font-medium">{service.category} Service</span>
                  <div className="flex items-center gap-1 text-[11px] font-medium text-slate-500">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{service.turnaroundTime}</span>
                  </div>
                </div>

                {/* Service Name */}
                <h3 className="text-lg font-bold text-[#111827] group-hover:text-[#2563EB] transition-colors leading-snug">
                  {service.name}
                </h3>

                {/* Description */}
                <p className="mt-2 text-xs text-slate-600 line-clamp-3 leading-relaxed">
                  {service.description}
                </p>

                {/* Price Display */}
                <div className="mt-5 p-3 rounded-lg bg-slate-50 border border-slate-100">
                  <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                    Starting at
                  </div>
                  <div className="flex items-baseline gap-2 mt-0.5">
                    <span className="text-2xl font-extrabold text-[#111827] tracking-tight">
                      ${service.startingPrice}
                    </span>
                    <span className="text-xs font-medium text-slate-500">USD</span>
                    <span className="text-xs text-slate-400 ml-auto font-mono">
                      ({service.priceRange})
                    </span>
                  </div>
                </div>

                {/* Scope deliverables */}
                <div className="mt-4 space-y-2">
                  <div className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">
                    Scope Highlights:
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {service.features.slice(0, 3).map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-4 border-t border-slate-100">
                <button
                  onClick={() => openServiceRequest(service)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-bold rounded-lg bg-[#111827] hover:bg-[#2563EB] text-white transition-colors"
                >
                  <span>{service.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <div className="mt-1.5 text-center text-[10px] text-slate-400">
                  Final pricing depends on project scope.
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
