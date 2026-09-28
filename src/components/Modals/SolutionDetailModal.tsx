import React from 'react';
import { useApp } from '../../context/AppContext';
import { DigitalProduct } from '../../types';
import { 
  X, 
  FileText, 
  CheckCircle2, 
  Download, 
  Layers, 
  AlertCircle, 
  Star, 
  Code2, 
  ShieldCheck, 
  Wrench,
  ArrowRight,
  ShoppingBag
} from 'lucide-react';

export const SolutionDetailModal: React.FC = () => {
  const { closeModal, modalData, openCheckout, addToCart, openServiceRequest, services, digitalProducts, openSolutionDetail } = useApp();
  const product: DigitalProduct = modalData;

  if (!product) return null;

  const relatedService = services.find(s => s.id === product.relatedServiceId) || services[0];
  const relatedSolutions = digitalProducts
    .filter(p => p.id !== product.id && (p.category === product.category || p.problemCategory === product.problemCategory))
    .slice(0, 2);

  const handleBuyNow = () => {
    closeModal();
    openCheckout(product);
  };

  const handleAddToCart = () => {
    addToCart(product, 1);
    closeModal();
  };

  const handleHireUs = () => {
    closeModal();
    openServiceRequest(relatedService);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8 max-h-[92vh] flex flex-col">
        
        {/* Top Header */}
        <div className="p-6 bg-[#0F172A] text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-purple-600/40 text-purple-300 border border-purple-500/40 uppercase">
              {product.category}
            </span>
            <span className="text-slate-400">·</span>
            <span className="text-xs text-slate-300 font-mono">Instant Digital Download</span>
          </div>

          <button
            onClick={closeModal}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 text-slate-800">
          
          {/* Title & Rating */}
          <div>
            <div className="flex items-center gap-2 text-amber-500 text-xs font-bold mb-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="text-slate-700">{product.rating}</span>
              <span className="text-slate-400 font-normal">({product.reviewCount} verified downloads)</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-[#0F172A] leading-tight">
              {product.name}
            </h2>
          </div>

          {/* Problem Box */}
          <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-xs sm:text-sm text-rose-950 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
            <div>
              <strong className="block font-bold text-rose-900 mb-0.5">Problem this solves:</strong>
              <span>{product.problem}</span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              Overview & Diagnostic Approach
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              {product.description}
            </p>
          </div>

          {/* Who this is for & What you will receive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200 space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                Who This Is For:
              </span>
              <p className="text-xs text-slate-700 leading-relaxed">
                {product.whoThisIsFor}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200 space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                What You Will Receive:
              </span>
              <p className="text-xs text-slate-700 leading-relaxed">
                {product.whatYouWillReceive}
              </p>
            </div>
          </div>

          {/* Specs grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-[#0F172A] text-white text-xs font-mono">
            <div>
              <span className="text-slate-400 text-[10px] block">FORMAT</span>
              <span className="font-bold text-cyan-300">{product.format}</span>
            </div>
            <div>
              <span className="text-slate-400 text-[10px] block">DIFFICULTY</span>
              <span className="font-bold text-purple-300">{product.difficulty}</span>
            </div>
            <div>
              <span className="text-slate-400 text-[10px] block">VERSION</span>
              <span className="font-bold text-emerald-300">{product.version}</span>
            </div>
            <div>
              <span className="text-slate-400 text-[10px] block">FILE SIZE</span>
              <span className="font-bold text-slate-200">{product.downloadSize}</span>
            </div>
          </div>

          {/* What's Included */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
              What's Included in This Solution Package:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {product.whatsIncluded.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Compatible Platforms */}
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-2">
              Compatible Platforms:
            </span>
            <div className="flex flex-wrap gap-2">
              {product.compatiblePlatforms.map((plat, i) => (
                <span key={i} className="px-3 py-1 rounded-lg bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700">
                  {plat}
                </span>
              ))}
            </div>
          </div>

          {/* Important Notice */}
          {product.importantNotice && (
            <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <span>{product.importantNotice}</span>
            </div>
          )}

          {/* Dual Choice Cross-Sell: "Need us to do it for you?" */}
          <div className="p-6 rounded-2xl bg-blue-50/80 border border-blue-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-blue-700">
                WANT OUR TEAM TO HANDLE THIS INSTEAD?
              </div>
              <h4 className="text-base font-bold text-[#0F172A] mt-0.5">
                Hire ANDEOLA for {relatedService.name}
              </h4>
              <p className="text-xs text-slate-600 mt-1">
                Skip the DIY troubleshooting and let our senior developers solve this directly ({relatedService.priceDisplay}).
              </p>
            </div>

            <button
              onClick={handleHireUs}
              className="px-5 py-2.5 rounded-xl bg-[#0F172A] hover:bg-blue-600 text-white text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-1.5 shrink-0 cursor-pointer"
            >
              <Wrench className="w-3.5 h-3.5" />
              <span>Hire ANDEOLA</span>
            </button>
          </div>

        </div>

        {/* Modal Footer CTA */}
        <div className="p-6 bg-[#F8FAFC] border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-black text-[#0F172A] font-mono">${product.price}</span>
            <span className="text-xs text-slate-400 font-sans">USD • One-time purchase</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={handleAddToCart}
              className="flex-1 sm:flex-none px-5 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4 text-purple-600" />
              <span>Add to Cart</span>
            </button>

            <button
              onClick={handleBuyNow}
              className="flex-1 sm:flex-none px-7 py-3.5 rounded-xl bg-[#7C3AED] hover:bg-purple-700 text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-purple-600/25 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Buy & Download</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
