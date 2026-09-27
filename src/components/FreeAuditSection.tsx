import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { CheckCircle2, Search, ArrowRight, ShieldCheck, Clock } from 'lucide-react';

export const FreeAuditSection: React.FC = () => {
  const { submitAuditRequest } = useApp();

  const [fullName, setFullName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [email, setEmail] = useState('');
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [needHelpWith, setNeedHelpWith] = useState('Website Redesign');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !websiteUrl) return;

    setIsSubmitting(true);
    await submitAuditRequest({
      fullName,
      businessName,
      email,
      websiteUrl,
      needHelpWith,
      message
    });
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <section id="free-audit-section" className="py-24 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Column: Context & Guarantees */}
            <div className="lg:col-span-5 bg-[#08111F] text-white p-8 sm:p-12 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-900 border border-slate-800 text-[11px] font-bold tracking-widest uppercase text-cyan-400">
                  <Search className="w-3.5 h-3.5" />
                  <span>ACTIONABLE EVALUATION</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight uppercase leading-tight">
                  GET A FREE <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                    WEBSITE AUDIT
                  </span>
                </h2>

                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  Send us your website and we'll identify key opportunities to improve its design, user experience, mobile experience, and conversion potential.
                </p>

                <div className="pt-4 space-y-3.5 text-xs text-slate-300">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>UX design & visual hierarchy inspection</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>Mobile usability & tap-target diagnostics</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>Call-to-action & conversion friction review</span>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-slate-800 mt-8 text-[11px] text-slate-400 flex items-center gap-2">
                <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Human review delivered via email within 48 business hours.</span>
              </div>
            </div>

            {/* Right Column: Professional Lead Generation Form */}
            <div className="lg:col-span-7 p-8 sm:p-12">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#08111F]">
                    Audit Request Received
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you. Your request has been received. We'll review your website and get back to you.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setWebsiteUrl('');
                      setMessage('');
                    }}
                    className="mt-4 px-5 py-2.5 text-xs font-semibold rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
                  >
                    Submit Another Website
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={e => setFullName(e.target.value)}
                        placeholder="Johnathan Davis"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Business Name
                      </label>
                      <input
                        type="text"
                        value={businessName}
                        onChange={e => setBusinessName(e.target.value)}
                        placeholder="Davis Logistics Inc."
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="john@davislogistics.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Website URL *
                      </label>
                      <input
                        type="text"
                        required
                        value={websiteUrl}
                        onChange={e => setWebsiteUrl(e.target.value)}
                        placeholder="https://yourwebsite.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm font-mono focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      What do you need help with?
                    </label>
                    <select
                      value={needHelpWith}
                      onChange={e => setNeedHelpWith(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 bg-white"
                    >
                      <option value="Website Redesign">Website Redesign</option>
                      <option value="New Website">New Website</option>
                      <option value="Shopify & E-commerce">Shopify & E-commerce</option>
                      <option value="Website Audit">Website Audit</option>
                      <option value="Landing Page">Landing Page</option>
                      <option value="Website Optimization">Website Optimization</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Message
                    </label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={e => setMessage(e.target.value)}
                      placeholder="Share what is currently not working well or what your main goals are..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 bg-white"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 text-xs sm:text-sm font-bold tracking-wide uppercase rounded-xl bg-[#2563EB] hover:bg-blue-600 disabled:opacity-50 text-white shadow-lg shadow-blue-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>{isSubmitting ? 'Submitting Request...' : 'REQUEST MY FREE AUDIT'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="text-center text-[11px] text-slate-400">
                    No spam. We only use your email to send your customized audit breakdown.
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
