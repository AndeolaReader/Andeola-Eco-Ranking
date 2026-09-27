import React, { useState } from 'react';
import { Mail, ArrowRight, CheckCircle2, MessageSquare, Clock, Globe } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [website, setWebsite] = useState('');
  const [serviceNeeded, setServiceNeeded] = useState('Website Design');
  const [budgetRange, setBudgetRange] = useState('$250 – $500');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-24 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Agency Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <div className="text-xs font-bold uppercase tracking-widest text-[#2563EB]">
                START A CONVERSATION
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#08111F] tracking-tight uppercase leading-tight">
                LET'S BUILD <br />
                SOMETHING GREAT
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Have a new project, redesign inquiry, or want to audit your existing digital presence? Send us your brief and we will reply promptly.
              </p>
            </div>

            {/* Direct Email Display Card */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Direct Email Line
                  </div>
                  <a
                    href="mailto:andeolareader4@gmail.com"
                    className="text-sm sm:text-base font-bold text-[#08111F] hover:text-blue-600 transition-colors font-mono"
                  >
                    andeolareader4@gmail.com
                  </a>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Response Time:</span>
                <span className="font-semibold text-slate-700">Within 24 Hours</span>
              </div>
            </div>

            {/* Professional Standards */}
            <div className="space-y-3 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Transparent scope-based estimates</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Direct engineer & designer communication</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>NDA & business confidentiality respected</span>
              </div>
            </div>

          </div>

          {/* Right Column: Contact & Project Request Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-lg">
            {isSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#08111F]">
                  Project Request Received
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you, {name}. Your request has reached ANDEOLA. We will review your goals and get in touch with you shortly.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 px-5 py-2.5 text-xs font-semibold rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-[#08111F] uppercase tracking-wide">
                    Request a Project Evaluation
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Share your requirements to receive our detailed proposal.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Name *</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={e => setName(e.target.value)}
                      placeholder="Jane Doe"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-blue-600 bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Email *</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="jane@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-blue-600 bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Business Name</label>
                    <input
                      type="text"
                      value={businessName}
                      onChange={e => setBusinessName(e.target.value)}
                      placeholder="Acme Studio Ltd."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-blue-600 bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Website URL</label>
                    <input
                      type="text"
                      value={website}
                      onChange={e => setWebsite(e.target.value)}
                      placeholder="https://example.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm font-mono focus:outline-none focus:border-blue-600 bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Service Needed *</label>
                    <select
                      value={serviceNeeded}
                      onChange={e => setServiceNeeded(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-blue-600 bg-white"
                    >
                      <option>Website Design</option>
                      <option>Website Redesign</option>
                      <option>Website Audit</option>
                      <option>E-commerce Website</option>
                      <option>Landing Page</option>
                      <option>Website Optimization</option>
                      <option>Custom Digital Solution</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Budget Range</label>
                    <select
                      value={budgetRange}
                      onChange={e => setBudgetRange(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-blue-600 bg-white"
                    >
                      <option>$100 – $250 (Website Audit)</option>
                      <option>$250 – $500 (Landing Page / Optimization)</option>
                      <option>$500 – $1,200 (Website Redesign)</option>
                      <option>$800 – $1,500 (Full Shopify & Website Store Design)</option>
                      <option>$1,500+ (Custom Architecture & Scaled Platforms)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Message *</label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    placeholder="Tell us about your project, timeline, and current website challenges..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-blue-600 bg-white"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 text-xs sm:text-sm font-bold tracking-wide uppercase rounded-xl bg-[#2563EB] hover:bg-blue-600 disabled:opacity-50 text-white shadow-lg shadow-blue-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>{isSubmitting ? 'Sending Request...' : 'SEND PROJECT REQUEST'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
