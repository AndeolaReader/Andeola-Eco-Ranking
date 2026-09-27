import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { MessageSquare, Mail, Phone, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { brandConfig } = useApp();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    websiteUrl: '',
    issueType: 'Website Error Fix',
    message: ''
  });

  const whatsappHref = `https://wa.me/2348124349094?text=${encodeURIComponent("Hello ANDEOLA, I need help with my website.")}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Brand Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#2563EB] mb-2">
                Direct Engineering Line
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight">
                Connect With ANDEOLA
              </h2>
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-widest mt-1">
                ANDEOLA ECO RANKING
              </div>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                Facing an urgent website error, checkout failure, or planning a full redesign? Contact us directly on WhatsApp or drop us an email for immediate triage.
              </p>
            </div>

            {/* Direct WhatsApp Action Button */}
            <div className="p-6 rounded-2xl bg-emerald-950 text-white border border-emerald-800/80 shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center shadow-md">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Instant WhatsApp Triage</h4>
                  <p className="text-xs text-emerald-300 font-mono">+234 812 434 9094</p>
                </div>
              </div>

              <p className="text-xs text-emerald-200 mb-4 leading-relaxed">
                Chat directly with our technical lead for rapid problem evaluation and expedited service scheduling.
              </p>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold rounded-lg bg-emerald-500 hover:bg-emerald-400 text-emerald-950 shadow-md transition-all font-sans"
              >
                <span>Chat With ANDEOLA</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Email & Details */}
            <div className="space-y-3 text-xs text-slate-700">
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-slate-200">
                <Mail className="w-5 h-5 text-blue-600 shrink-0" />
                <div>
                  <div className="font-bold text-slate-900">Email Address</div>
                  <a href="mailto:webhubtech299@gmail.com" className="text-blue-600 hover:underline font-mono">
                    webhubtech299@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-slate-200">
                <Clock className="w-5 h-5 text-purple-600 shrink-0" />
                <div>
                  <div className="font-bold text-slate-900">Response Turnaround</div>
                  <div className="text-slate-600">Typically under 2 hours during active business cycles</div>
                </div>
              </div>
            </div>

          </div>

          {/* Contact & Scope Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-md">
            {formSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Message Received</h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you. An ANDEOLA technical engineer will review your website details and reply to <strong>{formData.email}</strong> shortly with recommended next steps.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-4 px-4 py-2 text-xs font-semibold rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-[#111827]">
                    Request a Project Evaluation or Quote
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Describe your website issue or project goals for an itemized scope estimate.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@company.com"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Website URL</label>
                    <input
                      type="text"
                      value={formData.websiteUrl}
                      onChange={e => setFormData({ ...formData, websiteUrl: e.target.value })}
                      placeholder="https://example.com"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-blue-500 font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Service or Problem Category</label>
                    <select
                      value={formData.issueType}
                      onChange={e => setFormData({ ...formData, issueType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-blue-500 bg-white"
                    >
                      <option>Website Design ($800+)</option>
                      <option>Website Redesign ($600+)</option>
                      <option>Website Error Fix ($100+)</option>
                      <option>Shopify Support ($150+)</option>
                      <option>Website Speed Optimization ($150+)</option>
                      <option>Website Audit ($100+)</option>
                      <option>E-commerce Optimization ($300+)</option>
                      <option>Other Custom Solution</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Project Details or Error Symptoms</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe what is happening with your website, recent changes, or your target timeline..."
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-blue-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 text-xs font-bold rounded-lg bg-[#111827] hover:bg-[#2563EB] text-white transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Submit Project Inquiry</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
