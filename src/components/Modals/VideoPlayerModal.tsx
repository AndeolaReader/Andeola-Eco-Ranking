import React from 'react';
import { useApp } from '../../context/AppContext';
import { VideoReview } from '../../types';
import { X, Play, Star, CheckCircle, Video, ShieldCheck } from 'lucide-react';

export const VideoPlayerModal: React.FC = () => {
  const { closeModal, modalData, openSolutionDetail, openServiceRequest, digitalProducts, services } = useApp();
  const video: VideoReview = modalData;

  if (!video) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#0F172A] text-white rounded-3xl shadow-2xl border border-slate-700 overflow-hidden my-8 flex flex-col">
        
        {/* Header */}
        <div className="p-5 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Verified Buyer Experience
            </span>
          </div>

          <button
            onClick={closeModal}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Display Area */}
        <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
          <img
            src={video.videoThumbnail}
            alt={video.author}
            className="w-full h-full object-cover opacity-60"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6">
            <div className="flex items-center gap-1 text-amber-400 mb-2">
              {[...Array(video.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white">
              "{video.summary}"
            </h3>
            <div className="mt-1 text-xs text-slate-300">
              <strong>{video.author}</strong> • {video.role}, {video.company}
            </div>
          </div>

          {/* Centered Play indicator */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-16 h-16 rounded-full bg-blue-600/90 text-white flex items-center justify-center shadow-2xl shadow-blue-500/50">
              <Play className="w-7 h-7 fill-current translate-x-0.5" />
            </div>
          </div>
        </div>

        {/* Summary Footer */}
        <div className="p-6 bg-[#1E293B] space-y-4">
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-400">Target Deliverable:</span>
            <strong className="text-cyan-400 font-mono">{video.targetName}</strong>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-slate-700/80">
            <span className="text-[11px] text-slate-400">
              Verified customer session recording.
            </span>
            <button
              onClick={closeModal}
              className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold"
            >
              Close Video
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
