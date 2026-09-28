import React from 'react';
import { useApp } from '../context/AppContext';
import { Play, Star, CheckCircle, Video, ShieldCheck } from 'lucide-react';

export const BuyerVideoReviews: React.FC = () => {
  const { videoReviews, openVideoPlayer } = useApp();

  return (
    <section className="py-24 bg-[#0F172A] text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-[11px] font-bold tracking-widest uppercase text-blue-400">
            <Video className="w-3.5 h-3.5" />
            <span>VIDEO TESTIMONIALS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight">
            Real Buyers. Real Experiences.
          </h2>

          <p className="text-sm sm:text-base text-slate-300">
            Watch founders share how our digital solutions and technical services resolved their website challenges.
          </p>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videoReviews.map(vid => (
            <div
              key={vid.id}
              onClick={() => openVideoPlayer(vid)}
              className="group bg-[#1E293B] rounded-3xl border border-slate-700/80 overflow-hidden flex flex-col justify-between hover:border-blue-500 transition-all cursor-pointer hover:-translate-y-1 shadow-xl"
            >
              {/* Video Thumbnail with Play Button */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                <img
                  src={vid.videoThumbnail}
                  alt={vid.author}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-black/20 to-transparent" />
                
                {/* Play Badge */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-[#2563EB] group-hover:bg-blue-500 text-white flex items-center justify-center shadow-xl shadow-blue-600/40 group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-current translate-x-0.5" />
                  </div>
                </div>

                {/* Duration Badge */}
                <span className="absolute bottom-3 right-3 px-2 py-0.5 rounded-md bg-black/80 text-[11px] font-mono text-white">
                  {vid.videoDuration}
                </span>

                {/* Type Badge */}
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-slate-900/90 text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-300 border border-slate-700">
                  {vid.type === 'service' ? 'Service Case' : 'Digital Solution'}
                </span>
              </div>

              {/* Meta Content */}
              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(vid.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono text-slate-400">Verified Client</span>
                </div>

                <h4 className="text-sm font-bold text-white leading-snug line-clamp-2">
                  "{vid.summary}"
                </h4>

                <div className="pt-3 border-t border-slate-700/80 text-xs">
                  <strong className="text-white block font-bold">{vid.author}</strong>
                  <span className="text-slate-400 text-[11px] block">{vid.role} • {vid.company}</span>
                  <div className="mt-1 text-[11px] font-mono text-blue-400">
                    Target: {vid.targetName}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Transparent Note */}
        <div className="mt-12 text-center text-xs text-slate-400">
          📹 Video testimonials recorded with permission. Authenticated client accounts on record.
        </div>

      </div>
    </section>
  );
};
