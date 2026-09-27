import React from 'react';
import { useApp } from '../context/AppContext';
import { PricingPackage } from '../types';
import { Check, ArrowRight, Info, Sparkles } from 'lucide-react';

export const PricingSection: React.FC = () => {
  const { pricingPackages, openIntakeModal, openAuditModal } = useApp();

  const handlePackageCta = (pkg: PricingPackage) => {
    if (pkg.id === 'pkg-audit') {
      openAuditModal('Website Audit');
    } else {
      openIntakeModal(pkg.name);
    }
  };

  return (
    <section id="pricing" className="py-24 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-[#2563EB] mb-2">
              TRANSPARENT INVESTMENT
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#08111F] tracking-tight uppercase">
              SERVICE PACKAGES
            </h2>
            <p className="mt-3 text-base text-slate-600 max-w-xl">
              Honest starting rates based on structured deliverables. Final pricing depends on project scope, custom integrations, and asset readiness.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-xs text-blue-900 flex items-start gap-2.5 max-w-sm">
            <Info className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold">Transparent Scope Policy:</span> Packages represent baseline deliverables. Domain names and third-party hosting are billed directly by their respective providers.
            </div>
          </div>
        </div>

        {/* 6 Pricing Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPackages.map(pkg => (
            <div
              key={pkg.id}
              className={`bg-white rounded-2xl border p-8 flex flex-col justify-between transition-all duration-300 relative ${
                pkg.isPopular
                  ? 'border-blue-600 shadow-xl shadow-blue-600/10 ring-1 ring-blue-600'
                  : 'border-slate-200 hover:border-slate-300 hover:shadow-lg'
              }`}
            >
              {pkg.isPopular && (
                <div className="absolute -top-3.5 right-6 px-3 py-1 rounded-md bg-[#2563EB] text-white text-[10px] font-bold tracking-widest uppercase shadow-sm">
                  MOST REQUESTED
                </div>
              )}

              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <h3 className="text-lg font-bold text-[#08111F] uppercase tracking-wide">
                    {pkg.name}
                  </h3>
                </div>

                {/* Price Display */}
                <div className="mt-5 mb-4">
                  <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider block">
                    {pkg.startingPrice > 0 ? 'Starting From' : 'Bespoke Engineering'}
                  </span>
                  <div className="text-3xl font-extrabold text-[#08111F] font-mono mt-1">
                    {pkg.startingPrice > 0 ? `$${pkg.startingPrice}` : 'Custom'}
                    {pkg.startingPrice > 0 && (
                      <span className="text-xs font-sans text-slate-500 font-normal ml-1">USD</span>
                    )}
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed min-h-[40px]">
                  {pkg.description}
                </p>

                {/* Features List */}
                <div className="mt-6 pt-5 border-t border-slate-100 space-y-2.5">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-700">
                    Included Deliverables:
                  </div>
                  {pkg.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                      <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* View Details / Start Action */}
              <div className="mt-8 pt-5 border-t border-slate-100 space-y-2">
                <button
                  onClick={() => handlePackageCta(pkg)}
                  className={`w-full py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                    pkg.isPopular
                      ? 'bg-[#2563EB] hover:bg-blue-600 text-white shadow-md shadow-blue-600/20'
                      : 'bg-[#08111F] hover:bg-slate-800 text-white'
                  }`}
                >
                  <span>{pkg.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <div className="text-center text-[10px] text-slate-400">
                  Final pricing depends on project scope.
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Custom Project Callout from Section 12 */}
        <div className="mt-14 p-8 rounded-2xl bg-[#08111F] text-white flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-800">
          <div>
            <h4 className="text-xl font-bold">
              Need something custom? Let's discuss your project.
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Have specific API requirements, multi-tiered architectures, or an existing legacy platform?
            </p>
          </div>

          <button
            onClick={() => openIntakeModal('Custom Website')}
            className="px-6 py-3.5 text-xs sm:text-sm font-bold tracking-wide uppercase rounded-xl bg-[#2563EB] hover:bg-blue-600 text-white transition-all shrink-0 cursor-pointer shadow-md"
          >
            REQUEST A QUOTE
          </button>
        </div>

      </div>
    </section>
  );
};
