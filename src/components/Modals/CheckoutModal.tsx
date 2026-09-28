import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { DigitalProduct, Order } from '../../types';
import { 
  X, 
  ShieldCheck, 
  CreditCard, 
  Lock, 
  CheckCircle2, 
  Download, 
  ArrowRight, 
  Loader2, 
  FileText 
} from 'lucide-react';

export const CheckoutModal: React.FC = () => {
  const { closeModal, modalData, cart, cartTotal, createOrder, triggerDownload, openAccount } = useApp();

  const directProduct: DigitalProduct | undefined = modalData?.directProduct;

  const checkoutItems = directProduct
    ? [{ productId: directProduct.id, productName: directProduct.name, price: directProduct.price, format: directProduct.format }]
    : cart.map(item => ({
        productId: item.product.id,
        productName: item.product.name,
        price: item.product.price * item.quantity,
        format: item.product.format
      }));

  const totalAmount = directProduct ? directProduct.price : cartTotal;

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('Nigeria');
  const [gateway, setGateway] = useState<'paystack' | 'flutterwave' | 'stripe' | 'paypal'>('paystack');
  const [isProcessing, setIsProcessing] = useState(false);
  const [completedOrder, setCompletedOrder] = useState<Order | null>(null);

  const countries = ['Nigeria', 'United States', 'United Kingdom', 'Canada', 'Ghana', 'South Africa', 'Kenya', 'Germany', 'Australia', 'Other'];

  const handlePay = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email) return;

    setIsProcessing(true);

    try {
      const order = await createOrder({
        customerName: fullName,
        email,
        country,
        items: checkoutItems,
        totalAmount,
        paymentGateway: gateway
      });
      setCompletedOrder(order);
    } catch (err) {
      console.error(err);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDownload = (productName: string, format: string) => {
    triggerDownload(productName, format);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8 max-h-[92vh] flex flex-col">
        
        {/* Header */}
        <div className="p-6 bg-[#0F172A] text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-purple-600 flex items-center justify-center text-white">
              <Lock className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                {completedOrder ? 'Order Completed' : 'Instant Digital Checkout'}
              </h3>
              <span className="text-[10px] text-slate-400 font-mono">
                256-Bit SSL Encrypted • Currency: USD
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
          {completedOrder ? (
            <div className="space-y-6 text-center">
              
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                  Payment Verified
                </span>
                <h4 className="text-2xl font-black text-[#0F172A] mt-2">
                  Your solution is ready.
                </h4>
                <p className="text-xs text-slate-600 mt-1 max-w-sm mx-auto">
                  Thank you, <strong>{completedOrder.customerName}</strong>. A purchase confirmation and access token have been dispatched to <strong>{completedOrder.email}</strong>.
                </p>
              </div>

              {/* Order Box & Instant Download Buttons */}
              <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200 text-left space-y-3">
                <div className="flex justify-between text-xs text-slate-500 font-mono pb-2 border-b border-slate-200">
                  <span>Order Ref: {completedOrder.orderNumber}</span>
                  <span className="font-bold text-emerald-600">Settled (${completedOrder.totalAmount} USD)</span>
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Purchased Downloads ({completedOrder.items.length}):
                  </span>
                  {completedOrder.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-center justify-between gap-3 shadow-xs"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <FileText className="w-4 h-4 text-purple-600 shrink-0" />
                        <div className="truncate">
                          <strong className="text-xs text-[#0F172A] block truncate">{item.productName}</strong>
                          <span className="text-[10px] text-slate-400 font-mono">{item.format}</span>
                        </div>
                      </div>

                      <button
                        onClick={() => handleDownload(item.productName, item.format)}
                        className="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shrink-0 transition-colors shadow-xs"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Download Solution</span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-2 pt-2">
                <button
                  onClick={() => {
                    closeModal();
                    openAccount();
                  }}
                  className="w-full py-3 px-4 rounded-xl bg-[#0F172A] hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  View in My Purchases
                </button>
                <button
                  onClick={closeModal}
                  className="w-full py-3 px-4 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 text-xs font-semibold"
                >
                  Done
                </button>
              </div>

            </div>
          ) : (
            <form onSubmit={handlePay} className="space-y-5">
              
              {/* Order Items Summary */}
              <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200 space-y-2">
                <div className="flex justify-between items-center text-xs font-bold text-slate-700">
                  <span>Selected Solution{checkoutItems.length !== 1 ? 's' : ''}:</span>
                  <span className="font-mono text-purple-700 text-sm">${totalAmount} USD</span>
                </div>
                <div className="space-y-1">
                  {checkoutItems.map((item, idx) => (
                    <div key={idx} className="flex justify-between text-xs text-slate-600">
                      <span className="truncate pr-2">{item.productName}</span>
                      <span className="font-mono shrink-0">${item.price}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Customer Fields (NO shipping address!) */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={e => setFullName(e.target.value)}
                  placeholder="Rachel Adams"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-purple-600 bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="rachel@company.com"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-purple-600 bg-white"
                />
                <span className="text-[10px] text-slate-400 mt-0.5 block">
                  Your download links and license will be delivered to this email.
                </span>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Country *</label>
                <select
                  value={country}
                  onChange={e => setCountry(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-purple-600 bg-white"
                >
                  {countries.map(c => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              {/* Payment Gateway Provider Selector (PAYSTACK primary) */}
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
                        ? 'border-blue-600 bg-blue-50/80 text-blue-950 font-bold ring-1 ring-blue-600'
                        : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <div className="text-xs font-bold flex items-center justify-between">
                      <span>PAYSTACK</span>
                      <span className="text-[9px] px-1.5 py-0.2 rounded bg-blue-200 text-blue-800">Primary</span>
                    </div>
                    <div className="text-[10px] text-slate-500 mt-0.5">Cards, Transfer, USSD</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setGateway('flutterwave')}
                    className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                      gateway === 'flutterwave'
                        ? 'border-purple-600 bg-purple-50/80 text-purple-950 font-bold ring-1 ring-purple-600'
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
                        ? 'border-blue-600 bg-blue-50/80 text-blue-950 font-bold ring-1 ring-blue-600'
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
                        ? 'border-blue-600 bg-blue-50/80 text-blue-950 font-bold ring-1 ring-blue-600'
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
                disabled={isProcessing || totalAmount <= 0}
                className="w-full py-4 px-6 text-xs sm:text-sm font-bold tracking-wider uppercase rounded-xl bg-[#7C3AED] hover:bg-purple-700 disabled:opacity-50 text-white shadow-xl shadow-purple-600/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Verifying with {gateway.toUpperCase()}...</span>
                  </>
                ) : (
                  <>
                    <Lock className="w-4 h-4" />
                    <span>Pay & Get Access (${totalAmount} USD)</span>
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Zero physical shipping required. Verified instant download upon payment.</span>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
