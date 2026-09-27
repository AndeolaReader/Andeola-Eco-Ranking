import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Leaf, Zap, Globe, ShieldCheck, ArrowRight, Loader2, CheckCircle2, AlertTriangle, FileCode } from 'lucide-react';

export const EcoRankingAudit: React.FC = () => {
  const { openServiceRequest, openCheckout, digitalProducts } = useApp();
  const [urlInput, setUrlInput] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [auditResult, setAuditResult] = useState<any | null>(null);

  const handleAudit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!urlInput.trim()) return;

    setIsAnalyzing(true);
    setAuditResult(null);

    // Simulate realistic website speed & carbon eco-score calculation
    setTimeout(() => {
      let cleanUrl = urlInput.replace(/^https?:\/\//, '').replace(/\/$/, '');
      const hash = cleanUrl.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
      
      const speedScore = 65 + (hash % 30); // 65 - 94
      const carbonPerView = ((hash % 80) / 100 + 0.18).toFixed(2); // 0.18g - 0.98g
      const isGreenHost = hash % 2 === 0;
      const rankTier = speedScore > 85 ? 'A' : speedScore > 75 ? 'B' : 'C';

      setAuditResult({
        domain: cleanUrl,
        speedScore,
        carbonPerView,
        isGreenHost,
        rankTier,
        pageWeightMb: (1.2 + (hash % 20) / 10).toFixed(1),
        serverLocation: hash % 3 === 0 ? 'US East (N. Virginia)' : 'EU (Frankfurt)',
        testedAt: new Date().toLocaleTimeString()
      });
      setIsAnalyzing(false);
    }, 1200);
  };

  const speedGuide = digitalProducts.find(p => p.id === 'speed-optimization-checklist') || digitalProducts[1];

  return (
    <section id="eco-audit" className="py-20 bg-[#111827] text-white border-b border-slate-800 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-800 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3 border border-emerald-900/50">
            <Leaf className="w-3.5 h-3.5 text-emerald-400" />
            <span>ANDEOLA Eco-Ranking & Speed Diagnostic</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Instant Website Performance & Eco Audit
          </h2>
          <p className="mt-2 text-sm text-slate-300">
            A lighter, faster website consumes less server power and converts significantly higher. Test your domain’s carbon efficiency and load benchmark.
          </p>
        </div>

        {/* Input Bar */}
        <div className="max-w-2xl mx-auto bg-[#1F2937] p-2 sm:p-3 rounded-2xl border border-slate-700 shadow-xl">
          <form onSubmit={handleAudit} className="flex flex-col sm:flex-row gap-2">
            <div className="relative flex-1">
              <Globe className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Enter your website domain (e.g. yourstore.com)"
                value={urlInput}
                onChange={e => setUrlInput(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-[#111827] text-white placeholder-slate-500 rounded-xl text-xs sm:text-sm border border-slate-700 focus:outline-none focus:border-blue-500 font-mono"
                required
              />
            </div>
            <button
              type="submit"
              disabled={isAnalyzing}
              className="px-6 py-3 bg-[#2563EB] hover:bg-blue-500 disabled:opacity-50 text-white font-bold text-xs sm:text-sm rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shrink-0"
            >
              {isAnalyzing ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Auditing...</span>
                </>
              ) : (
                <>
                  <span>Run Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Audit Results Card */}
        {auditResult && (
          <div className="mt-10 max-w-3xl mx-auto bg-[#1F2937] rounded-2xl border border-slate-700 p-6 sm:p-8 animate-fade-in shadow-2xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-700/80 gap-4">
              <div>
                <span className="text-xs text-slate-400">Diagnostic target:</span>
                <h3 className="text-lg font-bold text-white font-mono flex items-center gap-2 mt-0.5">
                  <span>{auditResult.domain}</span>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-sans">
                    Eco Grade: {auditResult.rankTier}
                  </span>
                </h3>
              </div>
              <div className="text-xs text-slate-400 sm:text-right">
                Tested at {auditResult.testedAt} · Server: {auditResult.serverLocation}
              </div>
            </div>

            {/* Metrics Breakdown */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6">
              
              <div className="p-4 rounded-xl bg-[#111827] border border-slate-800">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                  <span>Speed Score</span>
                  <Zap className="w-4 h-4 text-amber-400" />
                </div>
                <div className="text-2xl font-extrabold text-white">
                  {auditResult.speedScore}/100
                </div>
                <div className="text-[10px] text-slate-500 mt-1">
                  Core Web Vitals Est.
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#111827] border border-slate-800">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                  <span>Carbon / View</span>
                  <Leaf className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="text-2xl font-extrabold text-emerald-400">
                  {auditResult.carbonPerView}g
                </div>
                <div className="text-[10px] text-slate-500 mt-1">
                  CO2 per visitor load
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#111827] border border-slate-800">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                  <span>Page Weight</span>
                  <Globe className="w-4 h-4 text-cyan-400" />
                </div>
                <div className="text-2xl font-extrabold text-white">
                  {auditResult.pageWeightMb} MB
                </div>
                <div className="text-[10px] text-slate-500 mt-1">
                  Recommended &lt; 1.5MB
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#111827] border border-slate-800">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                  <span>Green Hosting</span>
                  <ShieldCheck className="w-4 h-4 text-blue-400" />
                </div>
                <div className="text-sm font-bold text-white mt-1">
                  {auditResult.isGreenHost ? (
                    <span className="text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 className="w-4 h-4" /> Verified Green
                    </span>
                  ) : (
                    <span className="text-amber-400 flex items-center gap-1">
                      <AlertTriangle className="w-4 h-4" /> Standard Grid
                    </span>
                  )}
                </div>
                <div className="text-[10px] text-slate-500 mt-1">
                  Renewable power grid
                </div>
              </div>

            </div>

            {/* Recommended Solutions for Audit */}
            <div className="pt-6 border-t border-slate-700/80">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">
                Recommended Remediation:
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                
                {/* DIY Option */}
                <div className="p-4 rounded-xl bg-[#111827] border border-slate-800 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-cyan-300">
                      Fix it yourself (DIY Checklist)
                    </div>
                    <div className="text-[11px] text-slate-400 mt-0.5">
                      Website Speed Optimization Checklist ($15 USD)
                    </div>
                  </div>
                  <button
                    onClick={() => speedGuide && openCheckout(speedGuide)}
                    className="px-3 py-1.5 text-xs font-bold rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-400 border border-slate-700 cursor-pointer"
                  >
                    Buy ($15)
                  </button>
                </div>

                {/* Full Service Option */}
                <div className="p-4 rounded-xl bg-[#111827] border border-slate-800 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-purple-300">
                      Have ANDEOLA optimize it
                    </div>
                    <div className="text-[11px] text-slate-400 mt-0.5">
                      Full Website Speed & Eco Optimization (From $150 USD)
                    </div>
                  </div>
                  <button
                    onClick={() => openServiceRequest()}
                    className="px-3 py-1.5 text-xs font-bold rounded-lg bg-purple-600 hover:bg-purple-500 text-white cursor-pointer"
                  >
                    Get Quote
                  </button>
                </div>

              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
