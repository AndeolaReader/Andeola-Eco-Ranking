import React from 'react';
import { useApp } from '../../context/AppContext';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, ShieldCheck } from 'lucide-react';

export const CartModal: React.FC = () => {
  const { closeModal, cart, removeFromCart, updateCartQuantity, cartTotal, openCheckout, clearCart } = useApp();

  const handleProceedToCheckout = () => {
    closeModal();
    openCheckout();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8 flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="p-6 bg-[#0F172A] text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-purple-600 flex items-center justify-center text-white">
              <ShoppingBag className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                Digital Solutions Cart
              </h3>
              <span className="text-[10px] text-slate-400 font-mono">
                {cart.length} item{cart.length !== 1 ? 's' : ''} in cart
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

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {cart.length === 0 ? (
            <div className="py-16 text-center space-y-3">
              <ShoppingBag className="w-12 h-12 text-slate-300 mx-auto" />
              <h4 className="text-base font-bold text-slate-700">Your cart is empty</h4>
              <p className="text-xs text-slate-500 max-w-xs mx-auto">
                Explore our digital checklists, guides, and troubleshooting manuals to solve your website issues.
              </p>
              <button
                onClick={closeModal}
                className="mt-2 px-5 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-semibold"
              >
                Browse Solutions
              </button>
            </div>
          ) : (
            cart.map(item => (
              <div
                key={item.product.id}
                className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200 flex items-center justify-between gap-3"
              >
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-mono font-bold uppercase text-purple-700 block">
                    {item.product.category}
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-[#0F172A] truncate">
                    {item.product.name}
                  </h4>
                  <div className="text-xs font-mono font-bold text-slate-700 mt-1">
                    ${item.product.price} USD
                  </div>
                </div>

                {/* Qty & Remove */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center border border-slate-200 rounded-lg bg-white overflow-hidden">
                    <button
                      onClick={() => updateCartQuantity(item.product.id, item.quantity - 1)}
                      className="p-1 hover:bg-slate-100 text-slate-500"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="px-2 text-xs font-mono font-bold">{item.quantity}</span>
                    <button
                      onClick={() => updateCartQuantity(item.product.id, item.quantity + 1)}
                      className="p-1 hover:bg-slate-100 text-slate-500"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.product.id)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                    title="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer with Summary & Checkout */}
        {cart.length > 0 && (
          <div className="p-6 bg-[#F8FAFC] border-t border-slate-200 space-y-4">
            
            <div className="space-y-1.5 text-xs text-slate-600">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span className="font-mono font-bold">${cartTotal} USD</span>
              </div>
              <div className="flex justify-between">
                <span>Discount:</span>
                <span className="font-mono text-emerald-600">$0.00</span>
              </div>
              <div className="flex justify-between text-sm font-black text-[#0F172A] pt-2 border-t border-slate-200">
                <span>Total Amount:</span>
                <span className="font-mono text-xl text-purple-700">${cartTotal} USD</span>
              </div>
            </div>

            <div className="text-[10px] text-slate-500 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Digital deliverables only. No physical shipping address required.</span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={clearCart}
                className="py-3 px-3 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-100 text-xs font-bold uppercase tracking-wider"
              >
                Clear Cart
              </button>

              <button
                onClick={handleProceedToCheckout}
                className="py-3 px-4 rounded-xl bg-[#7C3AED] hover:bg-purple-700 text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 shadow-md shadow-purple-600/20 cursor-pointer"
              >
                <span>Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
