import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Search, CheckCircle2, ArrowRight, ShieldCheck, Clock, AlertTriangle } from 'lucide-react';

export const WebsiteAuditSection: React.FC = () => {
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [platform, setPlatform] = useState('Shopify');
  const [mainProblem, setMainProblem] = useState('Checkout issues');
  const [businessType, setBusinessType] = useState('E-commerce Store');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!websiteUrl || !email) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <section id="website-audit" className="py-24 bg-[#0F172A] text-white border-b border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#1E293B] rounded-3xl border border-slate-700 shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Column: Context & Honesty statement */}
            <div className="lg:col-span-5 bg-[#0F172A] p-8 sm:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-800">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-[11px] font-bold tracking-widest uppercase text-blue-400 border border-slate-700">
                  <Search className="w-3.5 h-3.5" />
                  <span>OBJECTIVE EVALUATION</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight leading-tight">
                  Not Sure <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-300 to-white">
                    What's Wrong?
                  </span>
                </h2>

                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  Send us your website details and our technical team will inspect your UX structure, mobile rendering, and conversion flow.
                </p>

                <div className="pt-2 space-y-3 text-xs text-slate-300">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>Real manual inspection by our web specialists</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <span>Identification of code conflicts & mobile bugs</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>Choice of DIY fix roadmap or hire proposal</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-800 text-[11px] text-slate-400 flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Reviewed and delivered via email within 48 business hours.</span>
              </div>
            </div>

            {/* Right Column: Audit Request Form */}
            <div className="lg:col-span-7 p-8 sm:p-12 bg-[#1E293B]">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Audit Request Received
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you. We have received your request for <strong>{websiteUrl}</strong>. Our engineers will inspect your site and email your report to <strong>{email}</strong>.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setWebsiteUrl('');
                    }}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-slate-800 text-slate-200 text-xs font-semibold hover:bg-slate-700 transition-colors"
                  >
                    Submit Another Site
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">
                      Website URL *
                    </label>
                    <input
                      type="text"
                      required
                      value={websiteUrl}
                      onChange={e => setWebsiteUrl(e.target.value)}
                      placeholder="https://yourstore.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#0F172A] border border-slate-700 text-xs sm:text-sm text-white font-mono focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">
                        Platform *
                      </label>
                      <select
                        value={platform}
                        onChange={e => setPlatform(e.target.value)}
                        className="w-full px-3.5 py-3 rounded-xl bg-[#0F172A] border border-slate-700 text-xs sm:text-sm text-white focus:outline-none focus:border-blue-500"
                      >
                        <option value="Shopify">Shopify</option>
                        <option value="WordPress">WordPress</option>
                        <option value="Wix">Wix</option>
                        <option value="Webflow">Webflow</option>
                        <option value="Squarespace">Squarespace</option>
                        <option value="Custom HTML/React">Custom Code</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">
                        Business Type *
                      </label>
                      <input
                        type="text"
                        required
                        value={businessType}
                        onChange={e => setBusinessType(e.target.value)}
                        placeholder="e.g. E-commerce Store, B2B SaaS, Agency"
                        className="w-full px-3.5 py-3 rounded-xl bg-[#0F172A] border border-slate-700 text-xs sm:text-sm text-white focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">
                      Main Problem You're Experiencing *
                    </label>
                    <input
                      type="text"
                      required
                      value={mainProblem}
                      onChange={e => setMainProblem(e.target.value)}
                      placeholder="e.g. Low checkout conversion, mobile elements breaking, slow speed"
                      className="w-full px-3.5 py-3 rounded-xl bg-[#0F172A] border border-slate-700 text-xs sm:text-sm text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">
                      Email to Deliver Report *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="founder@yourstore.com"
                      className="w-full px-3.5 py-3 rounded-xl bg-[#0F172A] border border-slate-700 text-xs sm:text-sm text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 text-xs sm:text-sm font-bold tracking-wider uppercase rounded-xl bg-[#2563EB] hover:bg-blue-600 disabled:opacity-50 text-white shadow-xl shadow-blue-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
                  >
                    <span>{isSubmitting ? 'Registering Request...' : 'Request Website Audit'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="text-center text-[10px] text-slate-400 pt-1">
                    🔒 No automated fake scan bots. Our human engineers inspect your website objectively.
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
