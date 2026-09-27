import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ShieldCheck, Lock, CreditCard, CheckCircle2, ArrowRight, Loader2, Info } from 'lucide-react';
import { ClientPayment } from '../types';

export const PaymentSection: React.FC = () => {
  const { processPayment } = useApp();

  const [clientName, setClientName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('Website Design');
  const [amount, setAmount] = useState<number>(800);
  const [gateway, setGateway] = useState<'paystack' | 'flutterwave' | 'stripe' | 'paypal'>('paystack');
  const [isProcessing, setIsProcessing] = useState(false);
  const [completedPayment, setCompletedPayment] = useState<ClientPayment | null>(null);

  const servicesList = [
    'Website Design',
    'Website Redesign',
    'Website Audit',
    'Shopify & E-commerce Store',
    'Landing Page',
    'Website Optimization',
    'Custom Project'
  ];

  const handleServiceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    setService(val);
    if (val === 'Website Design') setAmount(800);
    else if (val === 'Website Redesign') setAmount(500);
    else if (val === 'Website Audit') setAmount(150);
    else if (val.includes('E-commerce') || val.includes('Shopify')) setAmount(800);
    else if (val === 'Landing Page') setAmount(100);
    else if (val === 'Website Optimization') setAmount(300);
    else if (val === 'Custom Project') setAmount(400);
  };

  const handleContinuePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !email || !amount) return;

    setIsProcessing(true);

    try {
      // Execute payment processing through configured gateway integration endpoint
      const res = await processPayment({
        clientName,
        email,
        service,
        amount: Number(amount),
        gateway
      });
      setCompletedPayment(res);
    } catch (err) {
      console.error('Payment initialization error', err);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <section id="payment" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100 border border-slate-200 text-[11px] font-bold tracking-widest uppercase text-slate-700">
            <Lock className="w-3.5 h-3.5 text-blue-600" />
            <span>AUTHENTICATED CLIENT BILLING</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#08111F] tracking-tight uppercase">
            SECURE PROJECT PAYMENT
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Ready to start your project? Choose your service and continue to secure your project.
          </p>
        </div>

        {/* Confirmation Screen vs Form */}
        {completedPayment ? (
          <div className="bg-[#F8FAFC] rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-lg space-y-6">
            <div className="text-center space-y-2">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <span className="inline-block px-3 py-1 rounded bg-emerald-100 text-emerald-800 font-bold text-xs uppercase tracking-wider">
                Payment Received & Verified
              </span>
              <h3 className="text-2xl font-extrabold text-[#08111F]">
                Thank You, {completedPayment.clientName}
              </h3>
              <p className="text-xs text-slate-500 font-mono">
                Transaction Reference: {completedPayment.reference} · Gateway: {completedPayment.gateway.toUpperCase()}
              </p>
            </div>

            {/* Project Information Box */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 text-xs sm:text-sm">
              <div className="flex justify-between pb-2 border-b border-slate-100">
                <span className="text-slate-500 font-semibold">Service:</span>
                <span className="font-bold text-[#08111F]">{completedPayment.service}</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-slate-100">
                <span className="text-slate-500 font-semibold">Amount Paid:</span>
                <span className="font-bold font-mono text-blue-600">${completedPayment.amount}.00 USD</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-slate-100">
                <span className="text-slate-500 font-semibold">Client Email:</span>
                <span className="text-slate-700">{completedPayment.email}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 font-semibold">Settlement Status:</span>
                <span className="text-emerald-600 font-bold">Secured & Logged</span>
              </div>
            </div>

            {/* Next Steps Guidance */}
            <div className="p-5 rounded-2xl bg-blue-50/80 border border-blue-200 text-xs text-blue-950 space-y-2">
              <div className="font-bold flex items-center gap-1.5 uppercase tracking-wide">
                <Info className="w-4 h-4 text-blue-600" />
                <span>Next Steps for Your Project:</span>
              </div>
              <ol className="list-decimal pl-4 space-y-1 text-slate-700">
                <li>Your project lead will email an official welcome packet and onboarding schedule.</li>
                <li>Please submit your project details via the <strong>Project Start Form</strong> below.</li>
                <li>For any immediate questions, reach our team directly at <strong>andeolareader4@gmail.com</strong>.</li>
              </ol>
            </div>

            <div className="text-center pt-2">
              <button
                onClick={() => setCompletedPayment(null)}
                className="px-6 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-colors"
              >
                Done / Process Another Transaction
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-[#F8FAFC] rounded-3xl border border-slate-200/90 p-8 sm:p-10 shadow-lg">
            <form onSubmit={handleContinuePayment} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Client Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={clientName}
                    onChange={e => setClientName(e.target.value)}
                    placeholder="e.g. Rachel Adams"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-blue-600 bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="rachel@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-blue-600 bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Agreed Service *
                  </label>
                  <select
                    value={service}
                    onChange={handleServiceChange}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-blue-600 bg-white"
                  >
                    {servicesList.map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Project Amount ($ USD) *
                  </label>
                  <input
                    type="number"
                    required
                    min={10}
                    step={5}
                    value={amount}
                    onChange={e => setAmount(Number(e.target.value))}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm font-mono focus:outline-none focus:border-blue-600 bg-white"
                  />
                </div>
              </div>

              {/* Real Payment Provider Selector (Paystack, Flutterwave, Stripe, PayPal) */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-xs font-bold text-slate-700">
                    Select Payment Gateway Provider
                  </label>
                  <span className="text-[11px] text-slate-400 font-mono">
                    256-Bit SSL Encrypted
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <button
                    type="button"
                    onClick={() => setGateway('paystack')}
                    className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                      gateway === 'paystack'
                        ? 'border-blue-600 bg-blue-50/80 ring-1 ring-blue-600 text-blue-900'
                        : 'border-slate-200 hover:border-slate-300 bg-white text-slate-700'
                    }`}
                  >
                    <div className="text-xs font-bold">PAYSTACK</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">Nigeria & Africa</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setGateway('flutterwave')}
                    className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                      gateway === 'flutterwave'
                        ? 'border-purple-600 bg-purple-50/80 ring-1 ring-purple-600 text-purple-900'
                        : 'border-slate-200 hover:border-slate-300 bg-white text-slate-700'
                    }`}
                  >
                    <div className="text-xs font-bold">FLUTTERWAVE</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">Africa & Global</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setGateway('stripe')}
                    className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                      gateway === 'stripe'
                        ? 'border-blue-600 bg-blue-50/80 ring-1 ring-blue-600 text-blue-900'
                        : 'border-slate-200 hover:border-slate-300 bg-white text-slate-700'
                    }`}
                  >
                    <div className="text-xs font-bold">STRIPE</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">International</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setGateway('paypal')}
                    className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                      gateway === 'paypal'
                        ? 'border-blue-600 bg-blue-50/80 ring-1 ring-blue-600 text-blue-900'
                        : 'border-slate-200 hover:border-slate-300 bg-white text-slate-700'
                    }`}
                  >
                    <div className="text-xs font-bold">PAYPAL</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">Global Buyer Protection</div>
                  </button>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full py-4 px-6 text-xs sm:text-sm font-bold tracking-wide uppercase rounded-xl bg-[#2563EB] hover:bg-blue-600 disabled:opacity-50 text-white shadow-lg shadow-blue-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Connecting to {gateway.toUpperCase()} Gateway...</span>
                  </>
                ) : (
                  <>
                    <Lock className="w-4 h-4" />
                    <span>CONTINUE TO PAYMENT (${amount} USD)</span>
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Legitimate payment processing integration point. No raw card numbers stored.</span>
              </div>

            </form>
          </div>
        )}

      </div>
    </section>
  );
};
