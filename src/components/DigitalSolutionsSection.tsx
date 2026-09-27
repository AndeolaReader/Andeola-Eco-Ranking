import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { DigitalProduct } from '../types';
import { 
  FileText, 
  ArrowDown, 
  Check, 
  Star, 
  Download, 
  Eye, 
  Layers, 
  ShieldCheck, 
  Sparkles,
  AlertCircle
} from 'lucide-react';

export const DigitalSolutionsSection: React.FC = () => {
  const { digitalProducts, openCheckout, openModal } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Shopify', 'WordPress', 'Speed', 'SEO', 'Security', 'UI/UX', 'Errors'];

  const filteredProducts = selectedCategory === 'All'
    ? digitalProducts
    : digitalProducts.filter(p => p.category === selectedCategory);

  const viewSolution = (product: DigitalProduct) => {
    openModal('solution-detail', product);
  };

  return (
    <section id="digital-solutions" className="py-20 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-xs font-bold uppercase tracking-wider text-[#2563EB] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Digital Solutions Marketplace</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight uppercase">
            DIGITAL SOLUTIONS
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 font-medium">
            Got a specific website problem? Get the solution without paying for a full service.
          </p>
          <div className="mt-2 text-xs text-slate-500">
            PDF guides, diagnostic checklists, code snippets, and troubleshooting workflows with instant unlock.
          </div>
        </div>

        {/* Demo Notice Banner */}
        <div className="mb-8 p-3.5 rounded-lg bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
            <span>
              <strong>Demo Catalog Notice:</strong> The documents below are clearly labeled demo solutions with sample troubleshooting blueprints until final production PDFs are uploaded.
            </span>
          </div>
          <span className="hidden sm:inline font-mono text-[11px] text-amber-800">
            USD Instant Checkout Active
          </span>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#111827] text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat === 'All' ? 'All 10 Solutions' : cat}
            </button>
          ))}
        </div>

        {/* Problem-Solution Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <div
              key={product.id}
              className="bg-white rounded-2xl border border-slate-200 hover:border-blue-400 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between overflow-hidden group"
            >
              {/* Card Top / Header */}
              <div className="p-6">
                
                {/* Meta Bar */}
                <div className="flex items-center justify-between text-xs text-slate-500 mb-3 pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-1.5 font-medium">
                    <FileText className="w-3.5 h-3.5 text-blue-600" />
                    <span>{product.format}</span>
                  </div>
                  {product.isDemo && (
                    <span className="text-[10px] font-mono uppercase font-bold text-amber-700 bg-amber-100/80 px-2 py-0.5 rounded">
                      Demo
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-base font-extrabold text-[#111827] group-hover:text-[#2563EB] transition-colors leading-snug">
                  {product.title}
                </h3>

                {/* Reviews & Compatibility Quiet Line */}
                <div className="mt-2 flex items-center gap-2 text-xs text-slate-500">
                  <div className="flex items-center text-amber-500">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span className="font-bold text-slate-800 ml-1">{product.rating}</span>
                  </div>
                  <span>({product.reviewCount} reviews)</span>
                  <span>·</span>
                  <span className="text-slate-600 font-medium">Diff: {product.difficulty}</span>
                </div>

                {/* Problem -> Solution Flow Architecture */}
                <div className="mt-5 space-y-3">
                  
                  {/* Step 1: YOU HAVE THIS PROBLEM */}
                  <div className="p-3 rounded-lg bg-red-50/70 border border-red-100 text-xs">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-red-700 mb-1 flex items-center gap-1">
                      <span>YOU HAVE THIS PROBLEM</span>
                    </div>
                    <p className="text-slate-700 leading-relaxed font-medium">
                      {product.problem}
                    </p>
                  </div>

                  {/* Flow Arrow */}
                  <div className="flex justify-center text-slate-400 -my-1">
                    <ArrowDown className="w-4 h-4" />
                  </div>

                  {/* Step 2: HERE IS THE SOLUTION */}
                  <div className="p-3 rounded-lg bg-emerald-50/80 border border-emerald-100 text-xs">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 mb-1 flex items-center gap-1">
                      <span>HERE IS THE SOLUTION</span>
                    </div>
                    <p className="text-slate-800 leading-relaxed">
                      {product.solution}
                    </p>
                  </div>

                  {/* Flow Arrow */}
                  <div className="flex justify-center text-slate-400 -my-1">
                    <ArrowDown className="w-4 h-4" />
                  </div>

                  {/* Step 3: WHAT YOU RECEIVE */}
                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-600 mb-1.5 flex items-center gap-1">
                      <span>WHAT YOU RECEIVE</span>
                    </div>
                    <ul className="space-y-1 text-slate-600">
                      {product.includes.slice(0, 3).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{item}</span>
                        </li>
                      ))}
                      {product.includes.length > 3 && (
                        <li className="text-[11px] text-slate-400 pl-5">
                          + {product.includes.length - 3} more checklists & references
                        </li>
                      )}
                    </ul>
                  </div>

                </div>

                {/* Compatibility tags */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {product.compatibility.map((c, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-medium text-slate-600 bg-slate-100 px-2 py-0.5 rounded"
                    >
                      {c}
                    </span>
                  ))}
                </div>

              </div>

              {/* Card Bottom: PRICE -> BUY & DOWNLOAD */}
              <div className="p-6 bg-slate-50/80 border-t border-slate-200">
                <div className="flex items-baseline justify-between mb-4">
                  <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                    Instant Access Price
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-extrabold text-[#111827]">
                      ${product.price}
                    </span>
                    <span className="text-xs font-bold text-slate-500">USD</span>
                  </div>
                </div>

                {/* Two Action Buttons: View Solution & Buy Now */}
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => viewSolution(product)}
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-semibold rounded-lg bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5 text-slate-500" />
                    <span>View Solution</span>
                  </button>

                  <button
                    onClick={() => openCheckout(product)}
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-bold rounded-lg bg-[#2563EB] hover:bg-blue-600 text-white shadow-sm shadow-blue-500/20 transition-all hover:shadow-blue-500/30"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Buy Now</span>
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
