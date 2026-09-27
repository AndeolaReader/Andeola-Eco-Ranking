import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { VideoReview } from '../types';
import { Play, Star, CheckCircle, Video, AlertCircle, X } from 'lucide-react';

export const BuyerVideoReviews: React.FC = () => {
  const { videoReviews, openModal } = useApp();
  const [activeVideo, setActiveVideo] = useState<VideoReview | null>(null);

  return (
    <section className="py-20 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2563EB] mb-2">
              <Video className="w-4 h-4" />
              <span>Real Customer Stories</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight">
              See What Buyers Say
            </h2>
            <p className="mt-2 text-sm text-slate-600 max-w-xl">
              Founders and online merchants share how ANDEOLA services and digital troubleshooting solutions helped their websites.
            </p>
          </div>

          <div className="p-2.5 rounded-lg bg-slate-100 border border-slate-200 text-xs text-slate-600 flex items-center gap-2 max-w-sm">
            <AlertCircle className="w-4 h-4 text-slate-500 shrink-0" />
            <span>Demo Placeholders active until production client recordings are published.</span>
          </div>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videoReviews.map(review => (
            <div
              key={review.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-lg transition-all group flex flex-col justify-between"
            >
              {/* Thumbnail Container */}
              <div 
                className="relative aspect-video bg-slate-900 overflow-hidden cursor-pointer"
                onClick={() => setActiveVideo(review)}
              >
                <img
                  src={review.thumbnailUrl}
                  alt={review.customerName}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-blue-600/90 text-white flex items-center justify-center shadow-lg group-hover:bg-blue-500 group-hover:scale-110 transition-all">
                    <Play className="w-6 h-6 fill-white ml-0.5" />
                  </div>
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                  <span className="bg-black/60 backdrop-blur-md px-2 py-0.5 rounded font-mono text-[11px]">
                    {review.duration}
                  </span>
                  <span className="bg-emerald-600/90 px-2 py-0.5 rounded font-semibold text-[10px] uppercase flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" /> Verified Client
                  </span>
                </div>
              </div>

              {/* Info Block */}
              <div className="p-6">
                <div className="flex items-center gap-1 text-amber-500 mb-2">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <h4 className="text-sm font-bold text-[#111827] line-clamp-2">
                  "{review.summary}"
                </h4>

                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div>
                    <div className="font-bold text-slate-900">{review.customerName}</div>
                    <div className="text-[11px] text-slate-500">{review.company}</div>
                  </div>
                  <div className="text-[11px] text-blue-600 font-semibold text-right max-w-[130px] line-clamp-1">
                    {review.productOrService}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Video Modal Popup */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-3xl bg-[#111827] rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
            <div className="flex items-center justify-between p-4 border-b border-slate-800 text-white">
              <div>
                <h3 className="text-sm font-bold">{activeVideo.customerName} - {activeVideo.company}</h3>
                <p className="text-xs text-slate-400">{activeVideo.productOrService}</p>
              </div>
              <button
                onClick={() => setActiveVideo(null)}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="relative aspect-video bg-black">
              <video
                src={activeVideo.videoUrl}
                controls
                autoPlay
                className="w-full h-full object-contain"
              />
            </div>

            <div className="p-4 bg-slate-900 text-xs text-slate-300 flex items-center justify-between">
              <span>{activeVideo.summary}</span>
              <span className="text-[11px] text-slate-500 font-mono">Demo Video Showcase</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
