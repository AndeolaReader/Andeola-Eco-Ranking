import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { DigitalProduct, Order } from '../../types';
import { Logo } from '../Logo';
import { 
  X, 
  ShieldCheck, 
  CreditCard, 
  Lock, 
  CheckCircle2, 
  Download, 
  FileText, 
  ArrowRight, 
  Loader2 
} from 'lucide-react';

export const CheckoutModal: React.FC = () => {
  const { modalData, closeModal, processPayment, openModal } = useApp();
  const product: DigitalProduct = modalData;

  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [gateway, setGateway] = useState<'paystack' | 'flutterwave'>('paystack');
  const [cardNumber, setCardNumber] = useState('4084 0840 8408 4084');
  const [cardExpiry, setCardExpiry] = useState('12/28');
  const [cardCvv, setCardCvv] = useState('883');
  const [isProcessing, setIsProcessing] = useState(false);
  const [completedOrder, setCompletedOrder] = useState<Order | null>(null);

  if (!product) return null;

  const handlePay = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerEmail || !customerName) return;

    setIsProcessing(true);

    try {
      // Execute payment flow with server-side simulation & token creation
      const order = await processPayment({
        customerName,
        customerEmail,
        itemId: product.id,
        itemTitle: product.title,
        itemType: 'digital_product',
        amount: product.price,
        gateway
      });

      setCompletedOrder(order);
    } catch (err) {
      console.error('Payment error:', err);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDownloadNow = () => {
    if (!completedOrder?.downloadToken) return;

    // Secure temporary simulated payload download
    const element = document.createElement('a');
    const file = new Blob([product.downloadContentSample], { type: 'text/plain;charset=utf-8' });
    element.href = URL.createObjectURL(file);
    element.download = `${product.id}-andeola-blueprint.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8">
        
        {/* Modal Header */}
        <div className="p-5 bg-[#111827] text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <Logo variant="compact" theme="light" size="sm" showSubtitle={false} />
            <div className="border-l border-slate-700 pl-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200">
                Fast Digital Checkout
              </h3>
              <p className="text-[11px] text-slate-400">
                Instant delivery · No physical shipping required
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

        {/* Step: Completed Order / Download Unlocked */}
        {completedOrder ? (
          <div className="p-6 sm:p-8 space-y-6">
            <div className="text-center space-y-2">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-extrabold text-[#111827]">
                Payment Verified & Download Unlocked!
              </h4>
              <p className="text-xs text-slate-600">
                Your transaction was verified via <strong>{completedOrder.gateway.toUpperCase()}</strong>.
              </p>
            </div>

            {/* Receipt Summary Box */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
              <div className="flex justify-between text-slate-600">
                <span>Invoice Number:</span>
                <span className="font-mono font-bold text-slate-900">{completedOrder.invoiceNumber}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Transaction Ref:</span>
                <span className="font-mono text-slate-700">{completedOrder.reference}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Product:</span>
                <span className="font-semibold text-slate-900 text-right max-w-[200px] line-clamp-1">
                  {completedOrder.itemTitle}
                </span>
              </div>
              <div className="flex justify-between text-slate-600 pt-2 border-t border-slate-200">
                <span className="font-bold text-slate-900">Amount Paid:</span>
                <span className="font-bold text-base text-blue-600">${completedOrder.amount} USD</span>
              </div>
            </div>

            {/* Direct Download Actions */}
            <div className="space-y-3">
              <button
                onClick={handleDownloadNow}
                className="w-full py-3.5 px-4 text-xs font-bold rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download Your Solution Files Now</span>
              </button>

              <button
                onClick={() => {
                  closeModal();
                  openModal('customer-dashboard');
                }}
                className="w-full py-2.5 px-4 text-xs font-semibold rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-slate-500" />
                <span>View In "My Purchases" & Download Invoices</span>
              </button>
            </div>

            <div className="text-[11px] text-center text-slate-400">
              Download access token remains valid for your account. You can re-download anytime from your purchases portal.
            </div>
          </div>
        ) : (
          /* Step: Payment Form */
          <form onSubmit={handlePay} className="p-6 sm:p-8 space-y-5">
            {/* Product Summary banner */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start justify-between gap-4">
              <div>
                <span className="text-[10px] uppercase font-bold text-blue-600 tracking-wider">
                  Selected Digital Solution
                </span>
                <h4 className="text-sm font-bold text-slate-900 leading-snug mt-0.5">
                  {product.title}
                </h4>
                <div className="text-[11px] text-slate-500 mt-1">
                  Format: {product.format} · Instant Access
                </div>
              </div>
              <div className="text-right shrink-0">
                <div className="text-xl font-extrabold text-[#111827]">
                  ${product.price}
                </div>
                <div className="text-[10px] font-bold text-slate-500">USD</div>
              </div>
            </div>

            {/* Customer Inputs (NO SHIPPING ADDRESS REQUIRED) */}
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={customerName}
                  onChange={e => setCustomerName(e.target.value)}
                  placeholder="Alex Morgan"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Email Address (Receipt & Download Token Destination)
                </label>
                <input
                  type="email"
                  required
                  value={customerEmail}
                  onChange={e => setCustomerEmail(e.target.value)}
                  placeholder="alex@company.com"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            {/* Payment Gateway Selector */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-2">
                Select Secure Payment Gateway (USD)
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setGateway('paystack')}
                  className={`p-3 rounded-xl border text-left flex flex-col justify-between transition-all cursor-pointer ${
                    gateway === 'paystack'
                      ? 'border-blue-600 bg-blue-50/60 ring-1 ring-blue-500 text-blue-900'
                      : 'border-slate-200 hover:border-slate-300 text-slate-700'
                  }`}
                >
                  <div className="text-xs font-bold flex items-center justify-between">
                    <span>PAYSTACK</span>
                    <span className="text-[10px] uppercase font-bold text-blue-600 bg-blue-100 px-1.5 py-0.5 rounded">
                      Primary
                    </span>
                  </div>
                  <div className="text-[10px] text-slate-500 mt-1">
                    Cards, Apple Pay & Bank
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setGateway('flutterwave')}
                  className={`p-3 rounded-xl border text-left flex flex-col justify-between transition-all cursor-pointer ${
                    gateway === 'flutterwave'
                      ? 'border-purple-600 bg-purple-50/60 ring-1 ring-purple-500 text-purple-900'
                      : 'border-slate-200 hover:border-slate-300 text-slate-700'
                  }`}
                >
                  <div className="text-xs font-bold flex items-center justify-between">
                    <span>FLUTTERWAVE</span>
                    <span className="text-[10px] uppercase font-bold text-purple-600 bg-purple-100 px-1.5 py-0.5 rounded">
                      Global
                    </span>
                  </div>
                  <div className="text-[10px] text-slate-500 mt-1">
                    Global Cards & Transfers
                  </div>
                </button>
              </div>
            </div>

            {/* Card Information Fields */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                <span className="font-semibold text-slate-700 flex items-center gap-1.5">
                  <CreditCard className="w-3.5 h-3.5 text-blue-600" />
                  Card Payment Details
                </span>
                <span className="font-mono text-[11px] text-slate-400">256-Bit Encrypted</span>
              </div>

              <div>
                <input
                  type="text"
                  value={cardNumber}
                  onChange={e => setCardNumber(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs font-mono focus:outline-none focus:border-blue-500 bg-white"
                  placeholder="4084 0840 8408 4084"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  value={cardExpiry}
                  onChange={e => setCardExpiry(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs font-mono focus:outline-none focus:border-blue-500 bg-white"
                  placeholder="MM/YY"
                />
                <input
                  type="password"
                  value={cardCvv}
                  onChange={e => setCardCvv(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs font-mono focus:outline-none focus:border-blue-500 bg-white"
                  placeholder="CVV"
                />
              </div>
            </div>

            {/* Pay Button */}
            <button
              type="submit"
              disabled={isProcessing}
              className="w-full py-3.5 px-4 text-xs font-bold rounded-xl bg-[#2563EB] hover:bg-blue-600 text-white shadow-lg shadow-blue-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {isProcessing ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Verifying Transaction with {gateway.toUpperCase()}...</span>
                </>
              ) : (
                <>
                  <Lock className="w-3.5 h-3.5" />
                  <span>Pay ${product.price}.00 USD & Unlock Download</span>
                </>
              )}
            </button>

            <div className="text-center flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Verified server-side settlement. No raw card storage.</span>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
