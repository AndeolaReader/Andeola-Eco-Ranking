import React from 'react';
import { DollarSign, ShieldAlert, Cpu, DownloadCloud, Clock, CheckCircle } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  return (
    <div className="bg-[#1F2937] border-b border-slate-800 text-slate-300 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center sm:text-left">
          
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
            <div className="p-2.5 rounded-lg bg-slate-800 text-blue-400 shrink-0">
              <DollarSign className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">USD Standard Pricing</h4>
              <p className="text-xs text-slate-400 mt-0.5">Transparent starting rates & scope quotes. No hidden retainers.</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
            <div className="p-2.5 rounded-lg bg-slate-800 text-emerald-400 shrink-0">
              <CheckCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Paystack & Flutterwave</h4>
              <p className="text-xs text-slate-400 mt-0.5">Secure server-side verified payments with automated USD settlement.</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
            <div className="p-2.5 rounded-lg bg-slate-800 text-purple-400 shrink-0">
              <DownloadCloud className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Instant Digital Delivery</h4>
              <p className="text-xs text-slate-400 mt-0.5">Fast checkout with signed temporary tokens. No shipping forms.</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
            <div className="p-2.5 rounded-lg bg-slate-800 text-cyan-400 shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Rapid Triage & Support</h4>
              <p className="text-xs text-slate-400 mt-0.5">Direct WhatsApp engineer line (+234 812 434 9094) for urgent fixes.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
