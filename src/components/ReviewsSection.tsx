import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Star, ShieldCheck, CheckCircle2, MessageSquarePlus, Filter } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const { reviews } = useApp();
  const [activeTab, setActiveTab] = useState<'all' | 'service' | 'digital-solution'>('all');

  const filteredReviews = activeTab === 'all'
    ? reviews
    : reviews.filter(r => r.type === activeTab);

  return (
    <section id="reviews" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-[11px] font-bold tracking-widest uppercase text-slate-700 mb-2">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>VERIFIED CUSTOMER FEEDBACK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] tracking-tight uppercase">
              Customer Reviews
            </h2>
            <p className="mt-2 text-base text-slate-600">
              Honest ratings and experiences from founders who hired us or solved their website problems with our digital solutions.
            </p>
          </div>

          {/* Review Filter Tabs */}
          <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-[#F8FAFC] border border-slate-200">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-[#0F172A] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Reviews ({reviews.length})
            </button>
            <button
              onClick={() => setActiveTab('service')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'service'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Service Reviews ({reviews.filter(r => r.type === 'service').length})
            </button>
            <button
              onClick={() => setActiveTab('digital-solution')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'digital-solution'
                  ? 'bg-purple-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Digital Solution Reviews ({reviews.filter(r => r.type === 'digital-solution').length})
            </button>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map(rev => (
            <div
              key={rev.id}
              className="p-7 rounded-3xl bg-[#F8FAFC] border border-slate-200/90 flex flex-col justify-between hover:shadow-lg transition-all"
            >
              <div className="space-y-4">
                
                {/* Top Badge: Verified Purchase & Stars */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  {rev.verifiedPurchase && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-[10px] font-bold uppercase tracking-wider">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      <span>Verified Purchase</span>
                    </span>
                  )}
                </div>

                {/* Target product / service tag */}
                <div className="text-[11px] font-mono text-slate-500">
                  <span className="text-slate-400">Purchased: </span>
                  <strong className={rev.type === 'service' ? 'text-blue-700' : 'text-purple-700'}>
                    {rev.targetName}
                  </strong>
                </div>

                {/* Review Content */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                  "{rev.content}"
                </p>
              </div>

              {/* Author & Date */}
              <div className="pt-5 mt-5 border-t border-slate-200/80 flex items-center justify-between text-xs">
                <div>
                  <strong className="text-[#0F172A] block font-bold">{rev.author}</strong>
                  {rev.company && <span className="text-slate-500 text-[11px]">{rev.company}</span>}
                </div>
                <span className="text-[11px] font-mono text-slate-400">{rev.date}</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
