import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Logo } from '../Logo';
import { X, FolderKanban, CheckCircle2, ArrowRight } from 'lucide-react';

export const IntakeModal: React.FC = () => {
  const { closeModal, submitProjectIntake, modalData } = useApp();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [projectType, setProjectType] = useState(modalData?.projectType || 'Website Redesign');
  const [businessDescription, setBusinessDescription] = useState('');
  const [targetAudience, setTargetAudience] = useState('');
  const [mainGoal, setMainGoal] = useState('');
  const [preferredStyle, setPreferredStyle] = useState('Modern & Clean');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !businessName) return;

    setIsSubmitting(true);
    await submitProjectIntake({
      name,
      email,
      businessName,
      websiteUrl,
      projectType,
      businessDescription,
      targetAudience,
      mainGoal,
      preferredStyle
    });
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8">
        
        {/* Header */}
        <div className="p-6 bg-[#08111F] text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <Logo variant="compact" theme="light" size="sm" showSubtitle={false} />
            <div className="border-l border-slate-700 pl-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400">
                Kickoff Form
              </span>
              <h3 className="text-xs sm:text-sm font-bold text-white uppercase">
                START A PROJECT
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
              Project Brief Registered
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
              Thank you, {name}. Your requirements for <strong>{projectType}</strong> have been received. Our team will review your details and email your project plan.
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
                <label className="block text-xs font-bold text-slate-700 mb-1">Your Name *</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="Alex Rivers"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-blue-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="alex@rivers.com"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-blue-600"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Business Name *</label>
                <input
                  type="text"
                  required
                  value={businessName}
                  onChange={e => setBusinessName(e.target.value)}
                  placeholder="Rivers Design Group"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-blue-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Project Type *</label>
                <select
                  value={projectType}
                  onChange={e => setProjectType(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-blue-600 bg-white"
                >
                  <option value="Website Design">Website Design</option>
                  <option value="Website Redesign">Website Redesign</option>
                  <option value="E-commerce Website">E-commerce Website</option>
                  <option value="Landing Page">Landing Page</option>
                  <option value="Website Optimization">Website Optimization</option>
                  <option value="Custom Project">Custom Project</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Website URL (if existing)</label>
              <input
                type="text"
                value={websiteUrl}
                onChange={e => setWebsiteUrl(e.target.value)}
                placeholder="https://example.com"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm font-mono focus:outline-none focus:border-blue-600"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Business Description & Core Goals *</label>
              <textarea
                rows={3}
                required
                value={businessDescription}
                onChange={e => setBusinessDescription(e.target.value)}
                placeholder="Describe what you want to achieve with the new website..."
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-blue-600"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 px-4 text-xs font-bold uppercase tracking-wider rounded-xl bg-[#2563EB] hover:bg-blue-600 disabled:opacity-50 text-white shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{isSubmitting ? 'Starting Project...' : 'START MY PROJECT'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}

      </div>
    </div>
  );
};
