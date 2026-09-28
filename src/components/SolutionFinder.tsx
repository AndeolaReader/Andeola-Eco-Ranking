import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  HelpCircle, 
  Wrench, 
  FileText, 
  ArrowRight, 
  CheckCircle2, 
  ChevronRight, 
  RotateCcw,
  Sparkles,
  ShoppingBag,
  ExternalLink
} from 'lucide-react';
import { DigitalProduct, ServiceItem } from '../types';

export const SolutionFinder: React.FC = () => {
  const { digitalProducts, services, openSolutionDetail, openServiceRequest } = useApp();

  const [platform, setPlatform] = useState<string>('Shopify');
  const [problem, setProblem] = useState<string>('Checkout');
  const [preference, setPreference] = useState<'diy' | 'hire' | null>('diy');

  const platforms = ['Shopify', 'WordPress', 'Wix', 'Webflow', 'Squarespace', 'Other'];
  const problems = ['Error', 'Slow website', 'Checkout', 'SEO', 'Mobile', 'Design', 'E-commerce', 'Security', 'Other'];

  // Matching logic
  const getMatchingSolutions = (): DigitalProduct[] => {
    return digitalProducts.filter(p => {
      const matchPlat = platform === 'Other' || p.compatiblePlatforms.some(cp => cp.toLowerCase().includes(platform.toLowerCase()) || cp === 'General Website');
      const matchProb = problem === 'Other' || 
        p.problemCategory.toLowerCase().includes(problem.toLowerCase()) ||
        p.problem.toLowerCase().includes(problem.toLowerCase()) ||
        p.name.toLowerCase().includes(problem.toLowerCase());
      return matchPlat || matchProb;
    }).slice(0, 3);
  };

  const getMatchingServices = (): ServiceItem[] => {
    if (problem === 'Checkout' || problem === 'E-commerce' || platform === 'Shopify') {
      return services.filter(s => s.id === 'shopify-support' || s.id === 'ecommerce-optimization' || s.id === 'web-design');
    }
    if (problem === 'Slow website') {
      return services.filter(s => s.id === 'speed-optimization' || s.id === 'web-audit');
    }
    if (problem === 'SEO') {
      return services.filter(s => s.id === 'seo-optimization' || s.id === 'web-audit');
    }
    if (problem === 'Mobile' || problem === 'Design') {
      return services.filter(s => s.id === 'web-redesign' || s.id === 'web-design');
    }
    return services.filter(s => s.id === 'web-error-fix' || s.id === 'web-audit');
  };

  const matchingSolutions = getMatchingSolutions();
  const matchingServices = getMatchingServices();

  return (
    <section id="solution-finder" className="py-20 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-[11px] font-bold tracking-widest uppercase text-purple-700">
            <Sparkles className="w-3.5 h-3.5 text-purple-600" />
            <span>INTERACTIVE PROBLEM DIAGNOSTIC</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight uppercase">
            What's Your Website Problem?
          </h2>

          <p className="text-sm sm:text-base text-slate-600">
            Answer 3 quick questions to instantly find the tailored guide or service designed for your exact issue.
          </p>
        </div>

        {/* Diagnostic Wizard Box */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden max-w-4xl mx-auto p-6 sm:p-10 space-y-8">
          
          {/* Question 1: Platform */}
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
              <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px]">
                1
              </span>
              <span>What platform are you using?</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2.5">
              {platforms.map(p => (
                <button
                  key={p}
                  onClick={() => setPlatform(p)}
                  className={`py-3 px-3 rounded-xl text-xs font-bold transition-all border text-center cursor-pointer ${
                    platform === p
                      ? 'bg-[#0F172A] text-white border-[#0F172A] shadow-md'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          {/* Question 2: Problem */}
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
              <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px]">
                2
              </span>
              <span>What problem are you having?</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5">
              {problems.map(prob => (
                <button
                  key={prob}
                  onClick={() => setProblem(prob)}
                  className={`py-3 px-3 rounded-xl text-xs font-bold transition-all border text-center cursor-pointer ${
                    problem === prob
                      ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  {prob}
                </button>
              ))}
            </div>
          </div>

          {/* Question 3: Preference (DIY vs Hire) */}
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
              <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px]">
                3
              </span>
              <span>What do you want?</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                onClick={() => setPreference('diy')}
                className={`p-4 rounded-2xl border-2 text-left transition-all cursor-pointer flex items-center gap-3 ${
                  preference === 'diy'
                    ? 'border-purple-600 bg-purple-50/70 text-purple-950 shadow-md'
                    : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300'
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                  preference === 'diy' ? 'bg-purple-600 text-white' : 'bg-slate-200 text-slate-600'
                }`}>
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider">
                    "I want to fix it myself."
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5">
                    Browse ready-made troubleshooting guides & checklists ($9–$25)
                  </div>
                </div>
              </button>

              <button
                onClick={() => setPreference('hire')}
                className={`p-4 rounded-2xl border-2 text-left transition-all cursor-pointer flex items-center gap-3 ${
                  preference === 'hire'
                    ? 'border-blue-600 bg-blue-50/70 text-blue-950 shadow-md'
                    : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300'
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                  preference === 'hire' ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-600'
                }`}>
                  <Wrench className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider">
                    "I want ANDEOLA to fix it."
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5">
                    Professional full-service handling by our engineering team
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Results Display */}
          <div className="pt-6 border-t border-slate-200 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Recommended Solutions for: <span className="text-blue-600">{platform} • {problem}</span>
              </span>
              <span className="text-[11px] text-slate-500 font-mono">
                {preference === 'diy' ? 'Showing Digital Solutions' : 'Showing Professional Services'}
              </span>
            </div>

            {preference === 'diy' ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {matchingSolutions.length > 0 ? (
                  matchingSolutions.map(sol => (
                    <div
                      key={sol.id}
                      className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200 hover:border-purple-400 transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mb-2">
                          <span className="px-2 py-0.5 rounded bg-purple-100 text-purple-700 font-bold uppercase">
                            {sol.category}
                          </span>
                          <span className="font-bold text-[#0F172A] text-sm">${sol.price} USD</span>
                        </div>
                        <h4 className="text-sm font-bold text-[#0F172A] line-clamp-2">
                          {sol.name}
                        </h4>
                        <p className="text-xs text-slate-600 mt-2 line-clamp-2">
                          {sol.description}
                        </p>
                      </div>

                      <button
                        onClick={() => openSolutionDetail(sol)}
                        className="mt-4 w-full py-2.5 px-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <span>View Solution</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))
                ) : (
                  <div className="col-span-3 text-center py-6 text-slate-500 text-xs">
                    No specific DIY guide found for this combination. Consider our general diagnostic guides or request custom help.
                  </div>
                )}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {matchingServices.map(srv => (
                  <div
                    key={srv.id}
                    className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200 hover:border-blue-400 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mb-2">
                        <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-700 font-bold uppercase">
                          {srv.turnaroundTime}
                        </span>
                        <span className="font-bold text-[#0F172A] text-sm">{srv.priceDisplay}</span>
                      </div>
                      <h4 className="text-sm font-bold text-[#0F172A]">
                        {srv.name}
                      </h4>
                      <p className="text-xs text-slate-600 mt-2 line-clamp-2">
                        {srv.description}
                      </p>
                    </div>

                    <button
                      onClick={() => openServiceRequest(srv)}
                      className="mt-4 w-full py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>{srv.ctaText}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
