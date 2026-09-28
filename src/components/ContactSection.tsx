import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { MessageSquare, Mail, Phone, Clock, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { brandConfig } = useApp();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    setSubmitted(true);
  };

  const whatsappUrl = `https://wa.me/2348124349094?text=${encodeURIComponent('Hello ANDEOLA, I need help with my website.')}`;

  return (
    <section id="contact" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Brand & Direct Contact Methods */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[11px] font-bold tracking-widest uppercase text-blue-700">
              <MessageSquare className="w-3.5 h-3.5 text-blue-600" />
              <span>DIRECT CHANNELS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] tracking-tight uppercase">
              Get in Touch with ANDEOLA
            </h2>

            <p className="text-base text-slate-600 leading-relaxed font-normal">
              Need assistance deciding between a Digital Solution or hiring our team? Chat directly with an engineer or submit your project details.
            </p>

            {/* Direct Cards */}
            <div className="space-y-4 pt-2">
              
              {/* WhatsApp Card */}
              <div className="p-6 rounded-3xl bg-[#F8FAFC] border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-emerald-400 transition-all shadow-xs">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-emerald-600/20">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-700 block">
                      Direct WhatsApp Line
                    </span>
                    <strong className="text-base text-[#0F172A] font-bold">
                      {brandConfig.whatsappDisplay}
                    </strong>
                    <div className="text-[11px] text-slate-500">Fast response within business hours</div>
                  </div>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-1.5 shadow-sm shrink-0"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat with ANDEOLA</span>
                </a>
              </div>

              {/* Email Card */}
              <div className="p-6 rounded-3xl bg-[#F8FAFC] border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-blue-400 transition-all shadow-xs">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#2563EB] text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-600/20">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-blue-700 block">
                      Official Support Email
                    </span>
                    <strong className="text-base text-[#0F172A] font-bold font-mono">
                      {brandConfig.supportEmail}
                    </strong>
                    <div className="text-[11px] text-slate-500">Project briefs, audits & payment requests</div>
                  </div>
                </div>

                <a
                  href={`mailto:${brandConfig.supportEmail}?subject=Website%20Inquiry%20-%20ANDEOLA`}
                  className="px-5 py-3 rounded-xl bg-[#0F172A] hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-1.5 shadow-sm shrink-0"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send Email</span>
                </a>
              </div>

            </div>

            <div className="pt-2 text-xs text-slate-500 flex items-center gap-2">
              <Clock className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Standard business hours: Monday–Saturday, 8:00 AM – 7:00 PM GMT+1.</span>
            </div>
          </div>

          {/* Right Column: Quick Contact Form */}
          <div className="lg:col-span-6">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#F8FAFC] border border-slate-200 shadow-xl">
              {submitted ? (
                <div className="py-10 text-center space-y-3">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0F172A]">Message Sent</h3>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto">
                    Thank you, {name}. Our team will review your message and reply to <strong>{email}</strong> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setMessage('');
                    }}
                    className="mt-2 px-5 py-2 rounded-xl bg-slate-900 text-white text-xs font-semibold"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <h3 className="text-xl font-bold text-[#0F172A] uppercase tracking-tight">
                    Send Us a Message
                  </h3>
                  <p className="text-xs text-slate-500">
                    Tell us about your project or questions regarding our digital products.
                  </p>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={e => setName(e.target.value)}
                      placeholder="Marcus Rivers"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-blue-600 bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="marcus@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-blue-600 bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Message *</label>
                    <textarea
                      rows={3}
                      required
                      value={message}
                      onChange={e => setMessage(e.target.value)}
                      placeholder="What is your website challenge or what solution do you need?"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-blue-600 bg-white"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-[#2563EB] hover:bg-blue-600 text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <span>Send Message</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
