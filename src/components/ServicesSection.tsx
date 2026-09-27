import React from 'react';
import { useApp } from '../context/AppContext';
import { ServiceItem } from '../types';
import { 
  Monitor, 
  RefreshCw, 
  Search, 
  ShoppingBag, 
  Layers, 
  Zap, 
  ArrowRight 
} from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const { services, openServiceDetails, openAuditModal } = useApp();

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'web-design':
        return <Monitor className="w-5 h-5 text-blue-600" />;
      case 'web-redesign':
        return <RefreshCw className="w-5 h-5 text-cyan-600" />;
      case 'web-audit':
        return <Search className="w-5 h-5 text-blue-600" />;
      case 'ecommerce':
        return <ShoppingBag className="w-5 h-5 text-cyan-600" />;
      case 'landing-pages':
        return <Layers className="w-5 h-5 text-blue-600" />;
      case 'web-optimization':
        return <Zap className="w-5 h-5 text-cyan-600" />;
      default:
        return <Monitor className="w-5 h-5 text-blue-600" />;
    }
  };

  const handleCardCta = (service: ServiceItem) => {
    if (service.id === 'web-audit') {
      openAuditModal('Website Audit');
    } else {
      openServiceDetails(service);
    }
  };

  return (
    <section id="services" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-[#2563EB] mb-2">
            CORE CAPABILITIES
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#08111F] tracking-tight uppercase">
            WHAT WE CAN BUILD FOR YOU
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            From a complete website redesign to a conversion-focused online store, we create digital experiences designed around your business.
          </p>
        </div>

        {/* 6 Premium Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(service => (
            <div
              key={service.id}
              onClick={() => handleCardCta(service)}
              className="bg-[#F8FAFC] rounded-2xl border border-slate-200/90 p-8 flex flex-col justify-between hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 group cursor-pointer hover:-translate-y-1"
            >
              <div>
                {/* Minimal Icon & Number Header */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200">
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getServiceIcon(service.id)}
                  </div>
                  <span className="font-mono text-xs font-bold text-slate-400 group-hover:text-blue-600 transition-colors">
                    SERVICE {service.number}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-bold text-[#08111F] group-hover:text-blue-600 transition-colors">
                  {service.name}
                </h3>

                {/* Short Description */}
                <p className="mt-3 text-sm text-slate-600 leading-relaxed font-normal">
                  {service.description}
                </p>

                {/* Starting Price quiet line */}
                <div className="mt-5 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-500">
                  <span className="font-medium">{service.priceDisplay}</span>
                  <span className="font-mono text-[11px] text-slate-400">{service.turnaroundTime}</span>
                </div>
              </div>

              {/* Action Button & Arrow */}
              <div className="mt-8 pt-4 border-t border-slate-200/80 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#08111F] group-hover:text-blue-600 transition-colors">
                  {service.ctaText}
                </span>
                <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 group-hover:bg-[#2563EB] group-hover:text-white group-hover:border-blue-600 transition-all">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
