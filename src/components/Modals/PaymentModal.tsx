import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Logo } from '../Logo';
import { X, Lock, ShieldCheck, CheckCircle2, ArrowRight, Loader2 } from 'lucide-react';
import { ClientPayment } from '../../types';

export const PaymentModal: React.FC = () => {
  const { closeModal, modalData, processPayment } = useApp();

  const [clientName, setClientName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState(modalData?.service || 'Website Design');
  const [amount, setAmount] = useState<number>(modalData?.amount || 250);
  const [gateway, setGateway] = useState<'paystack' | 'flutterwave' | 'stripe' | 'paypal'>('paystack');
  const [isProcessing, setIsProcessing] = useState(false);
  const [completedPayment, setCompletedPayment] = useState<ClientPayment | null>(null);

  const servicesList = [
    'Website Design',
    'Website Redesign',
    'Website Audit',
    'E-commerce',
    'Landing Page',
    'Website Optimization',
    'Custom Project'
  ];

  const handlePay = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !email || !amount) return;

    setIsProcessing(true);
    try {
      const res = await processPayment({
        clientName,
        email,
        service,
        amount: Number(amount),
        gateway
      });
      setCompletedPayment(res);
    } catch (err) {
      console.error(err);
    } finally {
      setIsProcessing(false);
    }
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
                Secure Client Portal
              </span>
              <h3 className="text-xs sm:text-sm font-bold text-white uppercase">
                SECURE PROJECT PAYMENT
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

        {completedPayment ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <span className="inline-block px-3 py-1 rounded bg-emerald-100 text-emerald-800 font-bold text-xs uppercase tracking-wider">
              Payment Received
            </span>
            <h4 className="text-xl font-bold text-[#08111F]">
              Project Payment Settled
            </h4>
            <p className="text-xs text-slate-600 max-w-sm mx-auto">
              Thank you, {completedPayment.clientName}. Your transaction has been registered and our team will contact you with the kickoff schedule.
            </p>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-500 font-mono">
              Ref: {completedPayment.reference} · Gateway: {completedPayment.gateway.toUpperCase()}
            </div>
            <button
              onClick={closeModal}
              className="mt-2 px-6 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl bg-[#08111F] text-white hover:bg-[#2563EB] transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handlePay} className="p-6 sm:p-8 space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Client Name *</label>
              <input
                type="text"
                required
                value={clientName}
                onChange={e => setClientName(e.target.value)}
                placeholder="Marcus Reid"
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
                placeholder="marcus@company.com"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-blue-600"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Service *</label>
                <select
                  value={service}
                  onChange={e => setService(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-blue-600 bg-white"
                >
                  {servicesList.map(s => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Amount ($ USD) *</label>
                <input
                  type="number"
                  required
                  min={10}
                  value={amount}
                  onChange={e => setAmount(Number(e.target.value))}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm font-mono focus:outline-none focus:border-blue-600"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Select Payment Gateway Provider
              </label>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <button
                  type="button"
                  onClick={() => setGateway('paystack')}
                  className={`p-2.5 rounded-xl border text-left cursor-pointer transition-all ${
                    gateway === 'paystack'
                      ? 'border-blue-600 bg-blue-50 text-blue-900 font-bold'
                      : 'border-slate-200 text-slate-700 hover:border-slate-300'
                  }`}
                >
                  PAYSTACK (Africa)
                </button>
                <button
                  type="button"
                  onClick={() => setGateway('flutterwave')}
                  className={`p-2.5 rounded-xl border text-left cursor-pointer transition-all ${
                    gateway === 'flutterwave'
                      ? 'border-purple-600 bg-purple-50 text-purple-900 font-bold'
                      : 'border-slate-200 text-slate-700 hover:border-slate-300'
                  }`}
                >
                  FLUTTERWAVE
                </button>
                <button
                  type="button"
                  onClick={() => setGateway('stripe')}
                  className={`p-2.5 rounded-xl border text-left cursor-pointer transition-all ${
                    gateway === 'stripe'
                      ? 'border-blue-600 bg-blue-50 text-blue-900 font-bold'
                      : 'border-slate-200 text-slate-700 hover:border-slate-300'
                  }`}
                >
                  STRIPE (Global)
                </button>
                <button
                  type="button"
                  onClick={() => setGateway('paypal')}
                  className={`p-2.5 rounded-xl border text-left cursor-pointer transition-all ${
                    gateway === 'paypal'
                      ? 'border-blue-600 bg-blue-50 text-blue-900 font-bold'
                      : 'border-slate-200 text-slate-700 hover:border-slate-300'
                  }`}
                >
                  PAYPAL
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isProcessing}
              className="w-full py-3.5 px-4 text-xs font-bold uppercase tracking-wider rounded-xl bg-[#2563EB] hover:bg-blue-600 disabled:opacity-50 text-white shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              {isProcessing ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Processing Payment...</span>
                </>
              ) : (
                <>
                  <Lock className="w-4 h-4" />
                  <span>CONTINUE TO PAYMENT (${amount} USD)</span>
                </>
              )}
            </button>
          </form>
        )}

      </div>
    </div>
  );
};
