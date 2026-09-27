import React from 'react';
import { Search, CreditCard, Download, Send, CheckCircle2, Rocket } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  return (
    <section className="py-20 bg-[#111827] text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2">
            Clear & Predictable
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            How ANDEOLA Works
          </p>
          <p className="mt-2 text-sm text-slate-300">
            Whether you choose self-service digital documentation or full-service engineering, our workflow is transparent from minute one.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Track 1: Digital Solutions Flow */}
          <div className="p-8 rounded-2xl bg-[#1F2937] border border-slate-700/80">
            <div className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2">
              Path A: Self-Service Solutions
            </div>
            <h3 className="text-xl font-bold text-white mb-6">
              Instant Diagnostic Downloads
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-lg bg-blue-900/60 border border-blue-700/60 text-cyan-300 flex items-center justify-center font-bold text-sm shrink-0">
                  1
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Identify Your Website Issue</h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Select your problem in the marketplace or Smart Finder (e.g. checkout errors, slow load times, broken layouts).
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-lg bg-blue-900/60 border border-blue-700/60 text-cyan-300 flex items-center justify-center font-bold text-sm shrink-0">
                  2
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Fast Digital Checkout (USD)</h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Pay securely via Paystack or Flutterwave. No unnecessary shipping forms or physical address requirements.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-lg bg-blue-900/60 border border-blue-700/60 text-cyan-300 flex items-center justify-center font-bold text-sm shrink-0">
                  3
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Download & Fix Your Website</h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Your signed temporary download link unlocks instantly. Access your checklists, code, and PDF receipts anytime.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Track 2: Professional Services Flow */}
          <div className="p-8 rounded-2xl bg-[#1F2937] border border-slate-700/80">
            <div className="text-xs font-bold uppercase tracking-wider text-purple-400 mb-2">
              Path B: Professional Services
            </div>
            <h3 className="text-xl font-bold text-white mb-6">
              Done-For-You Engineering
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-lg bg-purple-900/60 border border-purple-700/60 text-purple-300 flex items-center justify-center font-bold text-sm shrink-0">
                  1
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Submit Problem & Scope Request</h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Share your URL, symptoms, or design requirements. We evaluate complexity and provide an itemized USD quote.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-lg bg-purple-900/60 border border-purple-700/60 text-purple-300 flex items-center justify-center font-bold text-sm shrink-0">
                  2
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Engineer Triage & Milestones</h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Work begins in staging or directly on bug fixes with direct WhatsApp updates (+234 812 434 9094).
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-lg bg-purple-900/60 border border-purple-700/60 text-purple-300 flex items-center justify-center font-bold text-sm shrink-0">
                  3
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Verification & Go-Live</h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Complete regression testing across mobile and desktop. Payment requests settled securely via online invoice.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
