import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { ServicePaymentRequest } from '../../types';
import { 
  X, 
  CreditCard, 
  ShieldCheck, 
  Lock, 
  CheckCircle2, 
  Loader2, 
  ArrowRight,
  FileCheck,
  Calendar
} from 'lucide-react';

export const ServicePaymentModal: React.FC = () => {
  const { closeModal, modalData, paymentRequests, payPaymentRequest } = useApp();

  const initialRequest: ServicePaymentRequest | undefined = modalData?.request;
  const [selectedRequestId, setSelectedRequestId] = useState<string>(
    initialRequest?.id || (paymentRequests.length > 0 ? paymentRequests[0].id : '')
  );

  const activeRequest = paymentRequests.find(r => r.id === selectedRequestId);

  const [gateway, setGateway] = useState<'paystack' | 'flutterwave' | 'stripe' | 'paypal'>('paystack');
  const [isProcessing, setIsProcessing] = useState(false);
  const [paidSuccess, setPaidSuccess] = useState(false);

  const handlePay = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!activeRequest) return;

    setIsProcessing(true);
    try {
      const ok = await payPaymentRequest(activeRequest.id, gateway);
      if (ok) setPaidSuccess(true);
    } catch (err) {
      console.error(err);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8 max-h-[92vh] flex flex-col">
        
        {/* Header */}
        <div className="p-6 bg-[#0F172A] text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center text-white">
              <FileCheck className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                Client Project Payment Portal
              </h3>
              <span className="text-[10px] text-slate-400 font-mono">
                Authenticated Milestone Billing • USD ($)
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
          {paidSuccess ? (
            <div className="py-8 text-center space-y-5">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                  Payment Received & Verified
                </span>
                <h4 className="text-2xl font-black text-[#0F172A] mt-2">
                  Project Kickoff Activated
                </h4>
                <p className="text-xs text-slate-600 mt-1 max-w-sm mx-auto">
                  Thank you, <strong>{activeRequest?.clientName}</strong>. Your project payment for <strong>{activeRequest?.service}</strong> (${activeRequest?.amount} USD) has been confirmed.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200 text-left text-xs space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-500">Service:</span>
                  <span className="font-bold text-[#0F172A]">{activeRequest?.service}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Amount Paid:</span>
                  <span className="font-bold font-mono text-blue-600">${activeRequest?.amount}.00 USD</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Gateway:</span>
                  <span className="font-mono uppercase font-bold">{gateway}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Kickoff Notification:</span>
                  <span className="text-emerald-600 font-semibold">Sent to project lead</span>
                </div>
              </div>

              <button
                onClick={closeModal}
                className="w-full py-3.5 px-4 rounded-xl bg-slate-900 text-white text-xs font-bold uppercase tracking-wider hover:bg-slate-800 transition-colors"
              >
                Close Portal
              </button>
            </div>
          ) : !activeRequest ? (
            <div className="py-12 text-center space-y-3">
              <FileCheck className="w-12 h-12 text-slate-300 mx-auto" />
              <h4 className="text-base font-bold text-slate-800">No Pending Payment Requests</h4>
              <p className="text-xs text-slate-500 max-w-xs mx-auto">
                If you have an approved scope with ANDEOLA, request a custom payment link from our team.
              </p>
            </div>
          ) : (
            <form onSubmit={handlePay} className="space-y-5">
              
              {/* Request Selector if multiple */}
              {paymentRequests.length > 1 && (
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Select Milestone Invoice / Payment Request:
                  </label>
                  <select
                    value={selectedRequestId}
                    onChange={e => setSelectedRequestId(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm font-semibold bg-white"
                  >
                    {paymentRequests.map(r => (
                      <option key={r.id} value={r.id}>
                        {r.service} - ${r.amount} USD ({r.clientName})
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Scope Breakdown Box */}
              <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200 space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Approved Project Scope
                  </span>
                  <span className={`text-[10px] font-bold uppercase font-mono px-2 py-0.5 rounded ${
                    activeRequest.status === 'paid' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                  }`}>
                    {activeRequest.status}
                  </span>
                </div>

                <div>
                  <h4 className="text-base font-bold text-[#0F172A]">
                    {activeRequest.service}
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {activeRequest.projectDescription}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-200 text-xs">
                  <div>
                    <span className="text-slate-400 block text-[10px]">CLIENT</span>
                    <strong className="text-slate-800">{activeRequest.clientName}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">EMAIL</span>
                    <strong className="text-slate-800 truncate block">{activeRequest.email}</strong>
                  </div>
                </div>

                {activeRequest.notes && (
                  <div className="p-2.5 rounded-xl bg-blue-50 text-blue-900 text-[11px]">
                    <strong>Note:</strong> {activeRequest.notes}
                  </div>
                )}

                <div className="pt-2 border-t border-slate-200 flex justify-between items-baseline">
                  <span className="text-xs font-bold text-slate-700">Milestone Due:</span>
                  <span className="font-mono text-2xl font-black text-blue-600">
                    ${activeRequest.amount} <span className="text-xs font-normal text-slate-500 font-sans">USD</span>
                  </span>
                </div>
              </div>

              {/* Payment Gateway Options (Paystack primary) */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">
                  Select Payment Gateway Provider:
                </label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <button
                    type="button"
                    onClick={() => setGateway('paystack')}
                    className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                      gateway === 'paystack'
                        ? 'border-blue-600 bg-blue-50 text-blue-950 font-bold ring-1 ring-blue-600'
                        : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <div className="text-xs font-bold">PAYSTACK (Primary)</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">Cards & Bank Transfer</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setGateway('flutterwave')}
                    className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                      gateway === 'flutterwave'
                        ? 'border-purple-600 bg-purple-50 text-purple-950 font-bold ring-1 ring-purple-600'
                        : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <div className="text-xs font-bold">FLUTTERWAVE</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">Africa & Global Cards</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setGateway('stripe')}
                    className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                      gateway === 'stripe'
                        ? 'border-blue-600 bg-blue-50 text-blue-950 font-bold ring-1 ring-blue-600'
                        : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <div className="text-xs font-bold">STRIPE</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">International Cards</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setGateway('paypal')}
                    className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                      gateway === 'paypal'
                        ? 'border-blue-600 bg-blue-50 text-blue-950 font-bold ring-1 ring-blue-600'
                        : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <div className="text-xs font-bold">PAYPAL</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">Buyer Protection</div>
                  </button>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isProcessing || activeRequest.status === 'paid'}
                className="w-full py-4 px-6 text-xs sm:text-sm font-bold tracking-wider uppercase rounded-xl bg-[#2563EB] hover:bg-blue-600 disabled:opacity-50 text-white shadow-xl shadow-blue-600/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Connecting to {gateway.toUpperCase()} Gateway...</span>
                  </>
                ) : activeRequest.status === 'paid' ? (
                  <span>Invoice Already Settled</span>
                ) : (
                  <>
                    <Lock className="w-4 h-4" />
                    <span>Pay Securely (${activeRequest.amount} USD)</span>
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Legitimate payment processing integration. 256-bit SSL encrypted.</span>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
