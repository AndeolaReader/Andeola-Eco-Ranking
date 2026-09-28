import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { ServiceItem } from '../../types';
import { 
  X, 
  Wrench, 
  Clock, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Send
} from 'lucide-react';

export const ServiceRequestModal: React.FC = () => {
  const { closeModal, modalData, services } = useApp();
  const initialService: ServiceItem | undefined = modalData?.service;

  const [selectedServiceId, setSelectedServiceId] = useState<string>(
    initialService?.id || (services.length > 0 ? services[0].id : 'web-design')
  );

  const activeService = services.find(s => s.id === selectedServiceId) || services[0];

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [projectBrief, setProjectBrief] = useState('');
  const [budgetRange, setBudgetRange] = useState('Within typical range');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !projectBrief) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8 max-h-[92vh] flex flex-col">
        
        {/* Header */}
        <div className="p-6 bg-[#0F172A] text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center text-white">
              <Wrench className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                Request Professional Service
              </h3>
              <span className="text-[10px] text-slate-400 font-mono">
                Direct Engineering Engagement
              </span>
            </div>
          </div>

          <button
            onClick={closeModal}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8">
          {isSubmitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h4 className="text-2xl font-black text-[#0F172A]">
                Project Request Registered
              </h4>
              <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                Thank you, <strong>{name}</strong>. Our engineering lead will review your requirements for <strong>{activeService.name}</strong> and contact you at <strong>{email}</strong> with a detailed proposal and scope document.
              </p>
              <button
                onClick={closeModal}
                className="mt-2 px-6 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Service Selection */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Service Requested *
                </label>
                <select
                  value={selectedServiceId}
                  onChange={e => setSelectedServiceId(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm font-semibold bg-white"
                >
                  {services.map(s => (
                    <option key={s.id} value={s.id}>
                      {s.name} ({s.priceDisplay})
                    </option>
                  ))}
                </select>
              </div>

              {/* Service Details Card */}
              <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-slate-200 text-xs space-y-1">
                <div className="flex justify-between font-mono">
                  <span className="text-slate-500">Typical Scope:</span>
                  <strong className="text-blue-700">{activeService.priceRange}</strong>
                </div>
                <div className="flex justify-between font-mono">
                  <span className="text-slate-500">Turnaround:</span>
                  <strong className="text-slate-700">{activeService.turnaroundTime}</strong>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Marcus Reid"
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
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Website URL (if existing)</label>
                <input
                  type="text"
                  value={websiteUrl}
                  onChange={e => setWebsiteUrl(e.target.value)}
                  placeholder="https://mycurrentsite.com"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm font-mono focus:outline-none focus:border-blue-600 bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Project Brief & Main Goals *</label>
                <textarea
                  rows={3}
                  required
                  value={projectBrief}
                  onChange={e => setProjectBrief(e.target.value)}
                  placeholder="Describe what problems you are experiencing, what platform you use, or what you want built..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-blue-600 bg-white"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-4 text-xs font-bold uppercase tracking-wider rounded-xl bg-[#2563EB] hover:bg-blue-600 disabled:opacity-50 text-white shadow-lg shadow-blue-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
              >
                <span>{isSubmitting ? 'Registering Brief...' : 'Submit Service Request'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="text-center text-[10px] text-slate-400">
                🔒 We review every inquiry manually and reply with actionable next steps within 24 hours.
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
