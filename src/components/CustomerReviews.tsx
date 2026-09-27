import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Star, ShieldCheck, CheckCircle2, MessageSquarePlus } from 'lucide-react';

export const CustomerReviews: React.FC = () => {
  const { reviews } = useApp();
  const [activeCategory, setActiveCategory] = useState<'service' | 'digital_solution'>('service');

  const filteredReviews = reviews.filter(r => r.category === activeCategory);

  return (
    <section id="reviews" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-xs font-bold uppercase tracking-wider text-[#2563EB] mb-2">
            Verified Experiences
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight">
            Customer Reviews
          </p>
          <p className="mt-2 text-sm text-slate-600">
            Read direct feedback from clients who hired ANDEOLA or implemented our digital troubleshooting documentation.
          </p>
        </div>

        {/* Category Tabs: SERVICE REVIEWS vs DIGITAL SOLUTION REVIEWS */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 rounded-xl bg-slate-100 border border-slate-200">
            <button
              onClick={() => setActiveCategory('service')}
              className={`px-5 py-2.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                activeCategory === 'service'
                  ? 'bg-[#111827] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              SERVICE REVIEWS
            </button>
            <button
              onClick={() => setActiveCategory('digital_solution')}
              className={`px-5 py-2.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                activeCategory === 'digital_solution'
                  ? 'bg-[#111827] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              DIGITAL SOLUTION REVIEWS
            </button>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredReviews.map(rev => (
            <div
              key={rev.id}
              className="bg-[#F8FAFC] rounded-2xl border border-slate-200 p-6 flex flex-col justify-between shadow-xs hover:border-slate-300 transition-all"
            >
              <div>
                {/* Rating and Verified Badge */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {rev.isVerifiedPurchase && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      Verified Purchase
                    </span>
                  )}
                </div>

                {/* Subject Line */}
                <div className="text-xs font-bold text-blue-600 mb-2">
                  {rev.productOrService}
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              {/* Author & Date */}
              <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-xs">
                <div>
                  <div className="font-bold text-slate-900">{rev.customerName}</div>
                  {rev.roleOrCompany && (
                    <div className="text-[11px] text-slate-500">{rev.roleOrCompany}</div>
                  )}
                </div>
                <div className="text-[11px] text-slate-400">
                  {rev.date}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
