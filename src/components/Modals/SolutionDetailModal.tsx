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
  Code2 
} from 'lucide-react';

export const SolutionDetailModal: React.FC = () => {
  const { modalData, closeModal, openCheckout } = useApp();
  const product: DigitalProduct = modalData;

  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8 max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="p-5 bg-[#111827] text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
              Digital Solution Blueprint
            </span>
            <span className="text-slate-500">·</span>
            <span className="text-xs text-slate-300 font-mono">${product.price} USD</span>
          </div>
          <button
            onClick={closeModal}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
          
          {/* Title & Reviews */}
          <div>
            <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
              <span className="font-semibold text-blue-600">{product.format}</span>
              <span>·</span>
              <div className="flex items-center text-amber-500">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span className="font-bold text-slate-700 ml-1">{product.rating}</span>
              </div>
              <span>({product.reviewCount} customer reviews)</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#111827]">
              {product.title}
            </h3>
          </div>

          {/* Problem vs Solution Deep Dive */}
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-red-50/80 border border-red-200 text-xs">
              <div className="text-[10px] font-bold uppercase tracking-wider text-red-700 mb-1">
                The Problem It Resolves
              </div>
              <p className="text-slate-800 text-sm leading-relaxed">
                {product.problem}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-emerald-50/80 border border-emerald-200 text-xs">
              <div className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 mb-1">
                The Technical Solution
              </div>
              <p className="text-slate-800 text-sm leading-relaxed">
                {product.solution}
              </p>
            </div>
          </div>

          {/* What's Included */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
              What Is Included In This Download:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {product.includes.map((item, i) => (
                <div key={i} className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Sample Preview */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                <Code2 className="w-4 h-4 text-slate-500" />
                <span>Blueprint Documentation Preview</span>
              </h4>
              <span className="text-[10px] text-amber-700 font-mono bg-amber-50 px-2 py-0.5 rounded">
                Demo Template Excerpt
              </span>
            </div>
            <pre className="p-4 rounded-xl bg-slate-900 text-slate-300 text-xs font-mono overflow-x-auto leading-relaxed border border-slate-800">
              {product.downloadContentSample}
            </pre>
          </div>

          {/* Compatibility & Difficulty */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs">
            <div>
              <span className="text-slate-500 font-semibold">Technical Level:</span>{' '}
              <span className="font-bold text-slate-900">{product.difficulty}</span>
            </div>
            <div>
              <span className="text-slate-500 font-semibold">Tested With:</span>{' '}
              <span className="font-medium text-slate-800">{product.compatibility.join(', ')}</span>
            </div>
          </div>

        </div>

        {/* Footer Action */}
        <div className="p-5 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-4">
          <div>
            <span className="text-xs text-slate-500">Instant Access Price:</span>
            <div className="text-2xl font-extrabold text-[#111827]">
              ${product.price}.00 <span className="text-xs font-bold text-slate-500">USD</span>
            </div>
          </div>

          <button
            onClick={() => {
              closeModal();
              openCheckout(product);
            }}
            className="px-6 py-3 text-xs font-bold rounded-xl bg-[#2563EB] hover:bg-blue-600 text-white shadow-md shadow-blue-500/20 transition-all flex items-center gap-2 cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Buy & Download Now (${product.price})</span>
          </button>
        </div>

      </div>
    </div>
  );
};
