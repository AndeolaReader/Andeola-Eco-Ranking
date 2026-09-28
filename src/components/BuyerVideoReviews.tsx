import React, { useState, useRef, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { VideoReview } from '../types';
import { 
  Play, 
  Pause,
  RotateCcw,
  Volume2, 
  VolumeX,
  Star, 
  CheckCircle2, 
  Video, 
  Maximize2,
  Subtitles,
  Info
} from 'lucide-react';

export const BuyerVideoReviews: React.FC = () => {
  const { videoReviews, openVideoPlayer } = useApp();

  // Track which card is currently playing directly on the review page
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [mutedStates, setMutedStates] = useState<Record<string, boolean>>({
    'vid-01': false,
    'vid-02': false,
    'vid-03': false,
  });
  const [activeCaptions, setActiveCaptions] = useState<Record<string, string>>({});
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});

  const handleToggleInlinePlay = (e: React.MouseEvent, vid: VideoReview) => {
    e.stopPropagation();

    const videoEl = videoRefs.current[vid.id];
    if (!videoEl) return;

    if (playingId === vid.id) {
      // Pause
      videoEl.pause();
      setPlayingId(null);
    } else {
      // Pause any previously playing video
      if (playingId && videoRefs.current[playingId]) {
        videoRefs.current[playingId]?.pause();
      }

      // Play this video
      videoEl.currentTime = 0;
      videoEl.muted = mutedStates[vid.id] ?? false;
      videoEl.play().then(() => {
        setPlayingId(vid.id);
      }).catch(err => {
        console.log('Inline video play error:', err);
        // If browser blocks unmuted autoplay, try muted
        videoEl.muted = true;
        setMutedStates(prev => ({ ...prev, [vid.id]: true }));
        videoEl.play().then(() => {
          setPlayingId(vid.id);
        }).catch(e => console.log('Muted play error:', e));
      });
    }
  };

  const handleToggleMute = (e: React.MouseEvent, vidId: string) => {
    e.stopPropagation();
    const videoEl = videoRefs.current[vidId];
    if (!videoEl) return;

    const currentMuted = mutedStates[vidId] ?? false;
    const newMuted = !currentMuted;
    videoEl.muted = newMuted;
    setMutedStates(prev => ({ ...prev, [vidId]: newMuted }));
  };

  const handleTimeUpdate = (vid: VideoReview) => {
    const videoEl = videoRefs.current[vid.id];
    if (!videoEl || !vid.captions) return;

    const time = videoEl.currentTime;
    const active = [...vid.captions].reverse().find(c => time >= c.time);
    if (active) {
      setActiveCaptions(prev => ({ ...prev, [vid.id]: active.text }));
    }
  };

  return (
    <section id="reviews-videos" className="py-24 bg-[#0F172A] text-white border-b border-slate-800 relative overflow-hidden">
      
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-600/10 blur-[180px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header as requested */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-[11px] font-bold tracking-widest uppercase text-blue-400">
            <Video className="w-3.5 h-3.5" />
            <span>REAL EXPERIENCES. REAL RESULTS.</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight">
            Real Experiences. Real Results.
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            See how businesses used ANDEOLA solutions and services to solve real website challenges.
          </p>
        </div>

        {/* Video Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videoReviews.map(vid => {
            const isThisPlaying = playingId === vid.id;
            const isMuted = mutedStates[vid.id] ?? false;
            const currentCap = activeCaptions[vid.id] || vid.quote;

            return (
              <div
                key={vid.id}
                className={`group bg-[#1E293B] rounded-3xl border transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-2xl ${
                  isThisPlaying 
                    ? 'border-blue-500 shadow-blue-500/20 ring-1 ring-blue-500/50' 
                    : 'border-slate-700/80 hover:border-blue-500/60'
                }`}
              >
                <div>
                  {/* 16:9 Video Container with Authentic Human Footage */}
                  <div className="relative aspect-[16/9] bg-black overflow-hidden select-none">
                    
                    {/* The HTML5 Video Element */}
                    <video
                      ref={el => {
                        videoRefs.current[vid.id] = el;
                      }}
                      src={vid.videoUrl}
                      poster={vid.videoThumbnail}
                      playsInline
                      loop
                      onTimeUpdate={() => handleTimeUpdate(vid)}
                      onEnded={() => setPlayingId(null)}
                      className="w-full h-full object-cover"
                    />

                    {/* Subtle vignette gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-black/30 pointer-events-none" />

                    {/* Top Badges */}
                    <div className="absolute top-3 inset-x-3 flex items-center justify-between pointer-events-none z-10">
                      {vid.verifiedCustomer && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-950/85 border border-emerald-500/40 text-emerald-400 text-[10px] font-bold uppercase tracking-wider backdrop-blur-xs">
                          <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                          <span>Verified Customer</span>
                        </span>
                      )}

                      <span className="px-2 py-0.5 rounded-md bg-black/70 text-[10px] font-mono text-slate-300 backdrop-blur-xs">
                        {vid.videoDuration}
                      </span>
                    </div>

                    {/* Live Subtitle Overlay during inline playback */}
                    {isThisPlaying && (
                      <div className="absolute bottom-11 inset-x-3 text-center z-10 pointer-events-none">
                        <span className="inline-block bg-black/80 backdrop-blur-xs px-2.5 py-1 rounded-lg text-[11px] text-white italic border border-slate-700/70 shadow-lg">
                          "{currentCap}"
                        </span>
                      </div>
                    )}

                    {/* Center Play Button Overlay (when paused) */}
                    {!isThisPlaying && (
                      <button
                        onClick={e => handleToggleInlinePlay(e, vid)}
                        className="absolute inset-0 flex items-center justify-center z-10 group/btn cursor-pointer bg-black/25 hover:bg-black/10 transition-colors"
                        title={`Play ${vid.author}'s review video`}
                      >
                        <div className="w-14 h-14 rounded-full bg-[#2563EB] group-hover/btn:bg-blue-500 text-white flex items-center justify-center shadow-2xl shadow-blue-600/50 group-hover/btn:scale-110 transition-transform">
                          <Play className="w-6 h-6 fill-current translate-x-0.5" />
                        </div>
                      </button>
                    )}

                    {/* Video Interactive Controls Bar (when playing) */}
                    {isThisPlaying && (
                      <div className="absolute bottom-2 inset-x-2.5 z-20 flex items-center justify-between bg-black/80 backdrop-blur-xs px-2.5 py-1 rounded-lg border border-slate-800">
                        <div className="flex items-center gap-1.5">
                          <button
                            onClick={e => handleToggleInlinePlay(e, vid)}
                            className="p-1 rounded bg-blue-600 hover:bg-blue-500 text-white text-xs cursor-pointer"
                            title="Pause"
                          >
                            <Pause className="w-3 h-3 fill-current" />
                          </button>

                          <button
                            onClick={e => handleToggleMute(e, vid.id)}
                            className={`p-1 rounded text-xs cursor-pointer ${
                              isMuted ? 'bg-rose-950 text-rose-300 border border-rose-500/40' : 'bg-slate-800 text-blue-400'
                            }`}
                            title={isMuted ? 'Unmute video audio' : 'Mute audio'}
                          >
                            {isMuted ? <VolumeX className="w-3 h-3" /> : <Volume2 className="w-3 h-3" />}
                          </button>
                        </div>

                        <div className="flex items-center gap-1.5">
                          <span className="text-[9px] font-mono text-emerald-400 font-semibold uppercase">
                            Talking Live
                          </span>
                          <button
                            onClick={() => openVideoPlayer(vid)}
                            className="p-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 cursor-pointer"
                            title="Open Theater Mode"
                          >
                            <Maximize2 className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Static Quality Tag when not playing */}
                    {!isThisPlaying && (
                      <div className="absolute bottom-2.5 left-3 z-10">
                        <span className="text-[10px] font-mono font-medium text-slate-300 bg-black/60 px-2 py-0.5 rounded">
                          1080p Customer Video
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="p-6 space-y-4">
                    
                    {/* Customer Name, Job Title, Company */}
                    <div>
                      <div className="flex items-center justify-between">
                        <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                          {vid.author}
                        </h3>
                        <div className="flex items-center gap-1 text-amber-400">
                          {[...Array(vid.rating)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-current" />
                          ))}
                        </div>
                      </div>
                      <p className="text-xs text-slate-400 mt-0.5">
                        {vid.role}, <strong className="text-slate-200 font-semibold">{vid.company}</strong>
                      </p>
                    </div>

                    {/* Short Review Quote */}
                    <div className="p-3.5 rounded-2xl bg-[#0F172A] border border-slate-700/60 text-xs text-slate-200 leading-relaxed italic">
                      "{vid.quote}"
                    </div>

                    {/* Service / Product Used */}
                    <div className="pt-2 border-t border-slate-700/60">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                        Service / Product Used:
                      </span>
                      <strong className="text-xs font-semibold text-blue-400 block">
                        {vid.targetName}
                      </strong>
                    </div>

                  </div>
                </div>

                {/* Action Buttons */}
                <div className="px-6 pb-6 pt-1 flex flex-col gap-2">
                  <button
                    type="button"
                    onClick={() => openVideoPlayer(vid)}
                    className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-blue-600/30"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Watch Video Review</span>
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Authentic Trust Disclaimer */}
        <div className="mt-14 max-w-2xl mx-auto p-4 rounded-2xl bg-slate-900/80 border border-slate-800 text-center text-xs text-slate-400 space-y-1">
          <div className="flex items-center justify-center gap-1.5 text-slate-300 font-medium text-[11px]">
            <Info className="w-3.5 h-3.5 text-blue-400 shrink-0" />
            <span>Authentic Client Transparency Notice</span>
          </div>
          <p className="text-[11px] text-slate-400 leading-relaxed">
            All reviews represent genuine feedback from business owners and managers who utilized ANDEOLA solutions or services. Results depend on individual website architectures, market variables, and technical conditions.
          </p>
        </div>

      </div>
    </section>
  );
};
