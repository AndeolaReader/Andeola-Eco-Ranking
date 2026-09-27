import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { HelpCircle, FileCode, Wrench, ArrowRight, RefreshCw, CheckCircle2, ChevronRight, DollarSign } from 'lucide-react';
import { DigitalProduct, ServiceItem } from '../types';

export const ProblemFinder: React.FC = () => {
  const { digitalProducts, services, openCheckout, openServiceRequest } = useApp();

  const [selectedProblem, setSelectedProblem] = useState<string | null>(null);
  const [diyPreference, setDiyPreference] = useState<'yes' | 'no' | null>(null);

  const problemOptions = [
    { id: 'checkout', label: 'Checkout problem', icon: '💳', hint: 'Payments failing, gateway errors' },
    { id: 'error', label: 'Website error', icon: '⚠️', hint: 'Broken scripts, 404s, 500 crashes' },
    { id: 'speed', label: 'Slow website', icon: '⚡', hint: 'Laggy page load, high bounce' },
    { id: 'mobile', label: 'Mobile problem', icon: '📱', hint: 'Overflowing layout, tiny buttons' },
    { id: 'shopify', label: 'Shopify problem', icon: '🛍️', hint: 'Theme Liquid bugs, app conflicts' },
    { id: 'wordpress', label: 'WordPress problem', icon: '⚙️', hint: 'Plugin conflicts, white screen' },
    { id: 'seo', label: 'SEO problem', icon: '🔍', hint: 'Missing indexation, meta issues' },
    { id: 'design', label: 'Design problem', icon: '🎨', hint: 'Dated look, poor UX conversion' },
    { id: 'ecommerce', label: 'E-commerce problem', icon: '📦', hint: 'Cart drops, product page friction' },
    { id: 'other', label: 'Other', icon: '💬', hint: 'Custom challenge or advice' },
  ];

  // Helper matching problem to Digital Products (DIY)
  const getMatchingDigitalProducts = (): DigitalProduct[] => {
    if (!selectedProblem) return [];
    if (selectedProblem === 'checkout') {
      return digitalProducts.filter(p => p.id.includes('checkout') || p.id.includes('ecommerce'));
    }
    if (selectedProblem === 'error') {
      return digitalProducts.filter(p => p.id.includes('error') || p.id.includes('404'));
    }
    if (selectedProblem === 'speed') {
      return digitalProducts.filter(p => p.id.includes('speed'));
    }
    if (selectedProblem === 'mobile') {
      return digitalProducts.filter(p => p.id.includes('mobile'));
    }
    if (selectedProblem === 'shopify') {
      return digitalProducts.filter(p => p.category === 'Shopify');
    }
    if (selectedProblem === 'wordpress') {
      return digitalProducts.filter(p => p.category === 'WordPress');
    }
    if (selectedProblem === 'seo') {
      return digitalProducts.filter(p => p.category === 'SEO' || p.id.includes('404'));
    }
    if (selectedProblem === 'design') {
      return digitalProducts.filter(p => p.id.includes('product-page') || p.id.includes('mobile'));
    }
    if (selectedProblem === 'ecommerce') {
      return digitalProducts.filter(p => p.id.includes('conversion') || p.id.includes('product-page') || p.id.includes('checkout'));
    }
    return digitalProducts.slice(0, 3);
  };

  // Helper matching problem to Services (Done For You)
  const getMatchingServices = (): ServiceItem[] => {
    if (!selectedProblem) return [];
    if (selectedProblem === 'checkout' || selectedProblem === 'error') {
      return services.filter(s => s.id === 'error-fix' || s.id === 'shopify-support');
    }
    if (selectedProblem === 'speed') {
      return services.filter(s => s.id === 'speed-opt' || s.id === 'web-audit');
    }
    if (selectedProblem === 'mobile' || selectedProblem === 'design') {
      return services.filter(s => s.id === 'web-redesign' || s.id === 'web-design');
    }
    if (selectedProblem === 'shopify') {
      return services.filter(s => s.id === 'shopify-support' || s.id === 'ecommerce-opt');
    }
    if (selectedProblem === 'wordpress') {
      return services.filter(s => s.id === 'error-fix' || s.id === 'web-audit');
    }
    if (selectedProblem === 'seo') {
      return services.filter(s => s.id === 'seo-opt' || s.id === 'web-audit');
    }
    if (selectedProblem === 'ecommerce') {
      return services.filter(s => s.id === 'ecommerce-opt' || s.id === 'shopify-support');
    }
    return services.slice(0, 2);
  };

  const resetFinder = () => {
    setSelectedProblem(null);
    setDiyPreference(null);
  };

  const matchingProducts = getMatchingDigitalProducts();
  const matchingServices = getMatchingServices();

  return (
    <section id="problem-finder" className="py-20 bg-[#111827] text-white border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title & Introduction */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-800 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            Smart Solution Finder
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            What’s Wrong With Your Website?
          </h2>
          <p className="mt-2 text-sm text-slate-300">
            Select what you are facing right now and whether you want to fix it yourself with a guide or have ANDEOLA engineers resolve it for you.
          </p>
        </div>

        {/* Finder Interactive Container */}
        <div className="bg-[#1F2937] rounded-2xl border border-slate-700/80 p-6 sm:p-8 shadow-xl">
          
          {/* Step 1: What problem are you experiencing? */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-200 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold">1</span>
                <span>What problem are you experiencing?</span>
              </h3>
              {selectedProblem && (
                <button
                  onClick={resetFinder}
                  className="text-xs text-slate-400 hover:text-white flex items-center gap-1 cursor-pointer"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span>Reset</span>
                </button>
              )}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {problemOptions.map(opt => {
                const isSelected = selectedProblem === opt.id;
                return (
                  <button
                    key={opt.id}
                    onClick={() => {
                      setSelectedProblem(opt.id);
                    }}
                    className={`p-3.5 rounded-xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? 'bg-blue-600/20 border-blue-500 text-white ring-1 ring-blue-500'
                        : 'bg-[#111827] border-slate-800 hover:border-slate-700 text-slate-300'
                    }`}
                  >
                    <div>
                      <div className="text-xl mb-1.5">{opt.icon}</div>
                      <div className="text-xs font-bold leading-tight">{opt.label}</div>
                    </div>
                    <div className="text-[10px] text-slate-400 mt-1 line-clamp-1">{opt.hint}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Do you want to fix it yourself? */}
          {selectedProblem && (
            <div className="mt-8 pt-8 border-t border-slate-700/80 animate-fade-in">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-200 flex items-center gap-2 mb-4">
                <span className="w-6 h-6 rounded-full bg-purple-600 text-white flex items-center justify-center text-xs font-bold">2</span>
                <span>Do you want to fix it yourself?</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
                {/* YES Option */}
                <button
                  onClick={() => setDiyPreference('yes')}
                  className={`p-5 rounded-xl border text-left transition-all cursor-pointer ${
                    diyPreference === 'yes'
                      ? 'bg-cyan-950/40 border-cyan-400 text-white ring-1 ring-cyan-400'
                      : 'bg-[#111827] border-slate-800 hover:border-slate-700 text-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-bold text-cyan-300 flex items-center gap-2">
                      <FileCode className="w-4 h-4" />
                      YES, I want to fix it myself
                    </span>
                    <span className="text-xs font-mono text-cyan-400">$9–$25 USD</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Show me the relevant step-by-step Digital Solutions, checklists, and technical documentation to resolve it immediately.
                  </p>
                </button>

                {/* NO Option */}
                <button
                  onClick={() => setDiyPreference('no')}
                  className={`p-5 rounded-xl border text-left transition-all cursor-pointer ${
                    diyPreference === 'no'
                      ? 'bg-purple-950/40 border-purple-400 text-white ring-1 ring-purple-400'
                      : 'bg-[#111827] border-slate-800 hover:border-slate-700 text-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-bold text-purple-300 flex items-center gap-2">
                      <Wrench className="w-4 h-4" />
                      NO, I want ANDEOLA to fix it
                    </span>
                    <span className="text-xs font-mono text-purple-400">Starting at $100</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Have an experienced engineer take over, run diagnostics, and deliver the solution without taking up my time.
                  </p>
                </button>
              </div>
            </div>
          )}

          {/* Results Display */}
          {selectedProblem && diyPreference && (
            <div className="mt-8 pt-8 border-t border-slate-700/80 animate-fade-in">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h4 className="text-base font-bold text-white">
                    {diyPreference === 'yes'
                      ? 'Recommended Digital Solutions (Instant Downloads)'
                      : 'Recommended ANDEOLA Professional Services'}
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {diyPreference === 'yes'
                      ? 'Fast checkout with instant access to diagnostic checklists and code guides.'
                      : 'Dedicated engineers available with scope-based quotes in USD.'}
                  </p>
                </div>
              </div>

              {/* If YES: Show Digital Solutions */}
              {diyPreference === 'yes' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {matchingProducts.map(prod => (
                    <div
                      key={prod.id}
                      className="p-5 rounded-xl bg-[#111827] border border-slate-800 hover:border-cyan-500/50 transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                          <span className="font-semibold text-cyan-400 uppercase tracking-wider text-[10px]">
                            {prod.format}
                          </span>
                          <span className="font-mono text-white text-base font-extrabold">
                            ${prod.price} USD
                          </span>
                        </div>
                        <h5 className="text-sm font-bold text-white leading-snug">
                          {prod.title}
                        </h5>
                        <p className="text-xs text-slate-400 mt-2 line-clamp-2">
                          {prod.solution}
                        </p>
                        <div className="mt-3 text-[11px] text-slate-500">
                          Includes: {prod.includes.slice(0, 2).join(' · ')}
                        </div>
                      </div>

                      <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between gap-3">
                        <span className="text-[10px] text-slate-500 font-mono">
                          {prod.isDemo && 'Demo Guide'}
                        </span>
                        <button
                          onClick={() => openCheckout(prod)}
                          className="px-4 py-2 text-xs font-bold rounded-lg bg-[#2563EB] hover:bg-blue-500 text-white transition-colors"
                        >
                          Buy & Download (${prod.price})
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* If NO: Show Professional Services */}
              {diyPreference === 'no' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {matchingServices.map(srv => (
                    <div
                      key={srv.id}
                      className="p-5 rounded-xl bg-[#111827] border border-slate-800 hover:border-purple-500/50 transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                          <span className="font-semibold text-purple-400 uppercase tracking-wider text-[10px]">
                            Turnaround: {srv.turnaroundTime}
                          </span>
                          <span className="font-mono text-white text-base font-extrabold">
                            Starting at ${srv.startingPrice} USD
                          </span>
                        </div>
                        <h5 className="text-sm font-bold text-white leading-snug">
                          {srv.name}
                        </h5>
                        <p className="text-xs text-slate-400 mt-2 line-clamp-2">
                          {srv.description}
                        </p>
                        <div className="mt-3 text-[11px] text-slate-400 font-mono">
                          Expected range: {srv.priceRange} (Depends on scope)
                        </div>
                      </div>

                      <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between gap-3">
                        <span className="text-[10px] text-emerald-400 flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" />
                          Direct Engineer Assignment
                        </span>
                        <button
                          onClick={() => openServiceRequest(srv)}
                          className="px-4 py-2 text-xs font-bold rounded-lg bg-purple-600 hover:bg-purple-500 text-white transition-colors"
                        >
                          Request Service
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
