import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { ServicePaymentRequest } from '../../types';
import { Logo } from '../Logo';
import { X, CreditCard, ShieldCheck, Lock, CheckCircle2, Loader2, ArrowRight } from 'lucide-react';

export const PaymentRequestPayModal: React.FC = () => {
  const { modalData, closeModal, processPayment } = useApp();
  const request: ServicePaymentRequest = modalData;

  const [gateway, setGateway] = useState<'paystack' | 'flutterwave'>('paystack');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isPaid, setIsPaid] = useState(request?.status === 'PAID');

  if (!request) return null;

  const handlePay = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    try {
      await processPayment({
        customerName: request.clientName,
        customerEmail: request.clientEmail,
        itemId: request.id,
        itemTitle: request.serviceTitle,
        itemType: 'custom_invoice',
        amount: request.amount,
        gateway
      });

      setIsPaid(true);
    } catch (err) {
      console.error(err);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8">
        
        {/* Top Header */}
        <div className="p-5 bg-[#111827] text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <Logo variant="compact" theme="light" size="sm" showSubtitle={false} />
            <div className="border-l border-slate-700 pl-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Official Payment Portal
              </span>
              <h3 className="text-xs font-bold text-white">
                ANDEOLA PAYMENT REQUEST
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

        {isPaid ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <span className="inline-block px-3 py-1 rounded bg-emerald-100 text-emerald-800 font-bold text-xs uppercase tracking-wider">
              Status: PAID
            </span>
            <h4 className="text-xl font-bold text-slate-900">
              Payment Confirmed!
            </h4>
            <p className="text-xs text-slate-600 max-w-sm mx-auto">
              Thank you, {request.clientName}. Your payment of <strong>${request.amount.toLocaleString()} USD</strong> for <strong>{request.serviceTitle}</strong> has been successfully settled.
            </p>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-500 font-mono">
              Reference: {request.reference} · Settled via {gateway.toUpperCase()}
            </div>
            <button
              onClick={closeModal}
              className="px-6 py-2.5 text-xs font-bold rounded-lg bg-[#111827] hover:bg-[#2563EB] text-white transition-colors"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handlePay} className="p-6 sm:p-8 space-y-6">
            
            {/* Payment Request Information Layout as specified in Section 14 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  ANDEOLA PAYMENT REQUEST
                </span>
                <span className="text-[11px] font-mono text-slate-500">
                  {request.reference}
                </span>
              </div>

              <div>
                <span className="text-xs text-slate-500">Service Project:</span>
                <h4 className="text-lg font-extrabold text-[#111827]">
                  {request.serviceTitle}
                </h4>
              </div>

              <div>
                <span className="text-xs text-slate-500">Project amount:</span>
                <div className="text-3xl font-extrabold text-blue-600 font-mono mt-0.5">
                  ${request.amount.toLocaleString()} <span className="text-sm font-sans font-bold text-slate-600">USD</span>
                </div>
              </div>

              <div>
                <span className="text-xs text-slate-500">Description:</span>
                <p className="text-xs text-slate-700 leading-relaxed mt-0.5">
                  {request.description}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-200 flex justify-between text-xs text-slate-500">
                <span>Client: <strong className="text-slate-800">{request.clientName}</strong></span>
                <span>Due date: <strong className="text-slate-800">{request.dueDate}</strong></span>
              </div>
            </div>

            {/* Gateway selection */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-2">
                Select Payment Gateway
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setGateway('paystack')}
                  className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                    gateway === 'paystack'
                      ? 'border-blue-600 bg-blue-50/60 ring-1 ring-blue-500 text-blue-900'
                      : 'border-slate-200 hover:border-slate-300 text-slate-700'
                  }`}
                >
                  <div className="text-xs font-bold">PAYSTACK (USD)</div>
                  <div className="text-[10px] text-slate-500 mt-0.5">Instant Card & Bank</div>
                </button>

                <button
                  type="button"
                  onClick={() => setGateway('flutterwave')}
                  className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                    gateway === 'flutterwave'
                      ? 'border-purple-600 bg-purple-50/60 ring-1 ring-purple-500 text-purple-900'
                      : 'border-slate-200 hover:border-slate-300 text-slate-700'
                  }`}
                >
                  <div className="text-xs font-bold">FLUTTERWAVE (USD)</div>
                  <div className="text-[10px] text-slate-500 mt-0.5">Global Gateway</div>
                </button>
              </div>
            </div>

            {/* Submit Button: Pay Securely */}
            <button
              type="submit"
              disabled={isProcessing}
              className="w-full py-3.5 px-4 text-xs font-bold rounded-xl bg-[#2563EB] hover:bg-blue-600 text-white shadow-lg shadow-blue-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {isProcessing ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Processing Secure Payment with {gateway.toUpperCase()}...</span>
                </>
              ) : (
                <>
                  <Lock className="w-3.5 h-3.5" />
                  <span>Pay Securely (${request.amount.toLocaleString()} USD)</span>
                </>
              )}
            </button>

            <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Encrypted payment. Once verified, invoice status becomes PAID.</span>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
