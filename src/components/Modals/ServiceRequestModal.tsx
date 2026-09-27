import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { ServiceItem } from '../../types';
import { Logo } from '../Logo';
import { X, Wrench, Clock, CheckCircle2, ArrowRight } from 'lucide-react';

export const ServiceRequestModal: React.FC = () => {
  const { modalData, closeModal, services } = useApp();
  const selectedService: ServiceItem | undefined = modalData;

  const [serviceId, setServiceId] = useState(selectedService?.id || services[0].id);
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [scopeDetails, setScopeDetails] = useState('');
  const [urgency, setUrgency] = useState<'Standard' | 'Urgent' | 'Emergency'>('Standard');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const currentService = services.find(s => s.id === serviceId) || services[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8">
        
        {/* Header */}
        <div className="p-5 bg-[#111827] text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-purple-600 flex items-center justify-center text-white">
              <Wrench className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200">
                Request Professional Service
              </h3>
              <p className="text-[11px] text-slate-400">
                Scope-based USD quote & dedicated engineer assignment
              </p>
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
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-slate-900">
              Service Request Submitted!
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
              We received your request for <strong>{currentService.name}</strong>. An ANDEOLA engineer will review your site and email an itemized scope quote to <strong>{clientEmail}</strong> within 2 hours.
            </p>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-500">
              Need immediate triage? Chat directly on WhatsApp: <strong className="text-slate-800">+234 812 434 9094</strong>
            </div>
            <button
              onClick={closeModal}
              className="px-6 py-2.5 text-xs font-bold rounded-lg bg-[#111827] hover:bg-[#2563EB] text-white transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4">
            
            {/* Service Selector & Starting Price */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Select Website Service
              </label>
              <select
                value={serviceId}
                onChange={e => setServiceId(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-blue-500 bg-white"
              >
                {services.map(s => (
                  <option key={s.id} value={s.id}>
                    {s.name} — Starting at ${s.startingPrice} USD ({s.priceRange})
                  </option>
                ))}
              </select>
            </div>

            {/* Selected Service Highlights banner */}
            <div className="p-3.5 rounded-xl bg-purple-50/70 border border-purple-200 text-xs flex items-center justify-between">
              <div>
                <span className="font-bold text-purple-900">{currentService.name}</span>
                <div className="text-[11px] text-purple-700 mt-0.5 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Est. turnaround: {currentService.turnaroundTime}</span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-xs text-purple-600 font-semibold">Starting at</span>
                <div className="text-lg font-extrabold text-purple-900 font-mono">
                  ${currentService.startingPrice} USD
                </div>
              </div>
            </div>

            {/* Client Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  value={clientName}
                  onChange={e => setClientName(e.target.value)}
                  placeholder="Taylor Swift"
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  value={clientEmail}
                  onChange={e => setClientEmail(e.target.value)}
                  placeholder="taylor@brand.com"
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Website URL</label>
              <input
                type="text"
                value={websiteUrl}
                onChange={e => setWebsiteUrl(e.target.value)}
                placeholder="https://mysite.com"
                className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs font-mono focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Project Scope & Requirements</label>
              <textarea
                rows={3}
                required
                value={scopeDetails}
                onChange={e => setScopeDetails(e.target.value)}
                placeholder="Describe what needs to be built, redesigned, or fixed on the website..."
                className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="text-[11px] text-slate-500 italic">
              Note: Final pricing depends on project scope. No upfront charge until scope is finalized and accepted.
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 text-xs font-bold rounded-xl bg-purple-600 hover:bg-purple-500 text-white shadow-md shadow-purple-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Submit Service Request</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

          </form>
        )}

      </div>
    </div>
  );
};
