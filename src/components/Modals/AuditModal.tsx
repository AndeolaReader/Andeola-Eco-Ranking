import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Logo } from '../Logo';
import { X, Search, CheckCircle2, ArrowRight } from 'lucide-react';

export const AuditModal: React.FC = () => {
  const { closeModal, submitAuditRequest, modalData } = useApp();

  const [fullName, setFullName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [email, setEmail] = useState('');
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [needHelpWith, setNeedHelpWith] = useState(modalData?.needHelpWith || 'Website Redesign');
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8">
        
        {/* Header */}
        <div className="p-6 bg-[#08111F] text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <Logo variant="compact" theme="light" size="sm" showSubtitle={false} />
            <div className="border-l border-slate-700 pl-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400">
                Free Evaluation
              </span>
              <h3 className="text-xs sm:text-sm font-bold text-white uppercase">
                GET A FREE WEBSITE AUDIT
              </h3>
            </div>
          </div>
          <button
            onClick={closeModal}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSubmitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-[#08111F]">
              Request Received
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
              Thank you. Your request has been received. We'll review your website and get back to you.
            </p>
            <button
              onClick={closeModal}
              className="mt-2 px-6 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl bg-[#08111F] text-white hover:bg-[#2563EB] transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={e => setFullName(e.target.value)}
                  placeholder="Taylor Reid"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-blue-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Business Name</label>
                <input
                  type="text"
                  value={businessName}
                  onChange={e => setBusinessName(e.target.value)}
                  placeholder="Reid Studio"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-blue-600"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="taylor@company.com"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-blue-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Website URL *</label>
                <input
                  type="text"
                  required
                  value={websiteUrl}
                  onChange={e => setWebsiteUrl(e.target.value)}
                  placeholder="https://mysite.com"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm font-mono focus:outline-none focus:border-blue-600"
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
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-blue-600 bg-white"
              >
                <option value="Website Redesign">Website Redesign</option>
                <option value="New Website">New Website</option>
                <option value="E-commerce">E-commerce</option>
                <option value="Website Audit">Website Audit</option>
                <option value="Landing Page">Landing Page</option>
                <option value="Website Optimization">Website Optimization</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Message</label>
              <textarea
                rows={3}
                value={message}
                onChange={e => setMessage(e.target.value)}
                placeholder="Share your goals or current issues..."
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-blue-600"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 px-4 text-xs font-bold uppercase tracking-wider rounded-xl bg-[#2563EB] hover:bg-blue-600 disabled:opacity-50 text-white shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{isSubmitting ? 'Sending Request...' : 'REQUEST MY FREE AUDIT'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}

      </div>
    </div>
  );
};
