import React from 'react';
import { useApp } from '../../context/AppContext';
import { ServiceItem } from '../../types';
import { Logo } from '../Logo';
import { X, CheckCircle2, Clock, ArrowRight, DollarSign } from 'lucide-react';

export const ServiceDetailModal: React.FC = () => {
  const { closeModal, modalData, openIntakeModal, openAuditModal } = useApp();
  const service: ServiceItem = modalData;

  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8 max-h-[92vh] flex flex-col">
        
        {/* Top Header */}
        <div className="p-6 bg-[#08111F] text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold text-cyan-400">
              SERVICE {service.number}
            </span>
            <span className="text-slate-500">·</span>
            <span className="text-xs text-slate-300 font-medium capitalize">{service.category}</span>
          </div>
          <button
            onClick={closeModal}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
          
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-1">
              {service.priceDisplay}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#08111F] uppercase">
              {service.name}
            </h3>
            <p className="mt-3 text-base text-slate-600 leading-relaxed font-normal">
              {service.description}
            </p>
          </div>

          {/* Turnaround Callout */}
          <div className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2 text-slate-700">
              <Clock className="w-4 h-4 text-blue-600" />
              <span className="font-semibold">Estimated Delivery Timeline:</span>
            </div>
            <span className="font-mono font-bold text-[#08111F]">{service.turnaroundTime}</span>
          </div>

          {/* Features and Deliverables */}
          <div className="space-y-4">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
                Key Deliverables & Standards:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {service.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2 p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
                Included Scope Steps:
              </h4>
              <div className="flex flex-wrap gap-2">
                {service.deliverables.map((del, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-white border border-slate-200 text-slate-700 shadow-xs"
                  >
                    {del}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="text-[11px] text-slate-400 italic">
            Note: Final pricing depends on project scope, custom third-party integrations, and content readiness.
          </div>

        </div>

        {/* Footer Action */}
        <div className="p-6 bg-[#F8FAFC] border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-xs text-slate-500">Service Investment:</span>
            <div className="text-xl font-extrabold text-[#08111F] font-mono">
              {service.priceDisplay}
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            {service.id === 'web-audit' ? (
              <button
                onClick={() => {
                  closeModal();
                  openAuditModal('Website Audit');
                }}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#2563EB] hover:bg-blue-600 text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <span>REQUEST AUDIT</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={() => {
                  closeModal();
                  openIntakeModal(service.name);
                }}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#2563EB] hover:bg-blue-600 text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <span>{service.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
