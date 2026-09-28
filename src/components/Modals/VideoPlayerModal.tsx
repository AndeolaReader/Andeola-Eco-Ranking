import React, { useState, useRef, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { VideoReview } from '../../types';
import { 
  X, 
  Play, 
  Pause, 
  RotateCcw, 
  Volume2, 
  VolumeX, 
  Star, 
  CheckCircle2, 
  Maximize2, 
  Minimize2, 
  Subtitles, 
  Download, 
  Wrench,
  Video as VideoIcon
} from 'lucide-react';

export const VideoPlayerModal: React.FC = () => {
  const { closeModal, modalData, openSolutionDetail, openServiceRequest, digitalProducts, services } = useApp();
  const video: VideoReview = modalData;

  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true); // "Do not autoplay with sound"
  const [volume, setVolume] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(30);
  const [showCaptions, setShowCaptions] = useState(true);
  const [currentCaption, setCurrentCaption] = useState<string>('');
  const [isFullscreen, setIsFullscreen] = useState(false);

  const videoContainerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (!video) return;

    // Reset states for new video
    setIsPlaying(true);
    setIsMuted(true);
    setCurrentTime(0);

    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.muted = true;
      videoRef.current.volume = volume;
      videoRef.current.play().catch(e => {
        console.log('Video autoplay error:', e);
        setIsPlaying(false);
      });
    }

    if (video.captions && video.captions.length > 0) {
      setCurrentCaption(video.captions[0].text);
    }
  }, [video]);

  // Synchronize subtitles with real video playback time
  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const time = videoRef.current.currentTime;
    setCurrentTime(time);

    if (video?.captions && video.captions.length > 0) {
      // Find the latest caption whose timestamp <= current time
      const activeCaption = [...video.captions]
        .reverse()
        .find(cap => time >= cap.time);
      if (activeCaption) {
        setCurrentCaption(activeCaption.text);
      }
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current && videoRef.current.duration) {
      setDuration(videoRef.current.duration);
    }
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().catch(e => console.log('Video play error:', e));
      setIsPlaying(true);
    }
  };

  const handleUnmute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = false;
    videoRef.current.volume = volume > 0 ? volume : 1;
    setIsMuted(false);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    if (isMuted) {
      handleUnmute();
    } else {
      videoRef.current.muted = true;
      setIsMuted(true);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (videoRef.current) {
      videoRef.current.volume = val;
      if (val === 0) {
        videoRef.current.muted = true;
        setIsMuted(true);
      } else {
        videoRef.current.muted = false;
        setIsMuted(false);
      }
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const seekTo = parseFloat(e.target.value);
    setCurrentTime(seekTo);
    if (videoRef.current) {
      videoRef.current.currentTime = seekTo;
    }
  };

  const handleReplay = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(e => console.log(e));
      setIsPlaying(true);
    }
  };

  const toggleFullscreen = () => {
    if (!videoContainerRef.current) return;

    if (!document.fullscreenElement) {
      videoContainerRef.current.requestFullscreen().then(() => {
        setIsFullscreen(true);
      }).catch(err => console.log('Fullscreen error:', err));
    } else {
      document.exitFullscreen().then(() => {
        setIsFullscreen(false);
      }).catch(err => console.log('Exit fullscreen error:', err));
    }
  };

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainingSecs = Math.floor(secs % 60);
    return `${mins}:${remainingSecs < 10 ? '0' : ''}${remainingSecs}`;
  };

  if (!video) return null;

  const matchedProduct = digitalProducts.find(p => p.name === video.targetName || p.id === 'sol-01');
  const matchedService = services.find(s => s.name === video.targetName || s.id === 'web-redesign');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/90 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div 
        ref={videoContainerRef}
        className="relative w-full max-w-3xl bg-[#0F172A] text-white rounded-3xl shadow-2xl border border-slate-700/80 overflow-hidden my-6 flex flex-col max-h-[94vh]"
      >
        
        {/* Minimal Clean Header */}
        <div className="px-5 py-3 flex items-center justify-between border-b border-slate-800 bg-[#0A0F1D]">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-200 flex items-center gap-2">
              <VideoIcon className="w-3.5 h-3.5 text-blue-400" />
              <span>Customer Video Review • {video.author}</span>
            </span>
          </div>

          <button
            onClick={closeModal}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close video"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 16:9 Landscape Video Container */}
        <div className="relative aspect-[16/9] bg-black flex items-center justify-center overflow-hidden select-none">
          
          <video
            ref={videoRef}
            src={video.videoUrl}
            poster={video.videoThumbnail}
            playsInline
            loop
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            className="w-full h-full object-cover"
          />

          {/* Vignette overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/25 pointer-events-none" />

          {/* Unmute Prompt Banner if muted (respects "Do not autoplay with sound") */}
          {isMuted && (
            <div className="absolute top-4 inset-x-4 flex justify-center z-20 pointer-events-auto">
              <button
                onClick={handleUnmute}
                className="px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-2xl shadow-blue-600/50 transition-all hover:scale-105 cursor-pointer border border-blue-400/40"
              >
                <VolumeX className="w-4 h-4 text-white" />
                <span>Tap to Unmute Audio & Hear {video.author.split(' ')[0]}</span>
              </button>
            </div>
          )}

          {/* Subtitles Overlay */}
          {showCaptions && (
            <div className="absolute bottom-16 inset-x-4 sm:inset-x-8 text-center z-10 pointer-events-none">
              <div className="inline-block bg-black/85 backdrop-blur-sm px-4 py-2 rounded-2xl border border-slate-700/80 shadow-2xl max-w-xl">
                <span className="text-[9px] font-mono text-blue-400 font-bold uppercase tracking-wider block mb-0.5">
                  Subtitles (CC)
                </span>
                <p className="text-xs sm:text-sm font-medium text-white italic leading-snug">
                  "{currentCaption || video.quote}"
                </p>
              </div>
            </div>
          )}

          {/* Video Controls Bar */}
          <div className="absolute bottom-2.5 inset-x-3 sm:inset-x-4 z-20 bg-slate-950/85 backdrop-blur-md px-3 sm:px-4 py-2 rounded-xl border border-slate-800 space-y-1.5 shadow-2xl">
            
            {/* Scrubber / Progress Bar */}
            <div className="flex items-center gap-2">
              <input
                type="range"
                min={0}
                max={duration || 30}
                step={0.1}
                value={currentTime}
                onChange={handleSeek}
                className="w-full h-1 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
              <span className="text-[10px] font-mono text-slate-400 whitespace-nowrap">
                {formatTime(currentTime)} / {formatTime(duration || 30)}
              </span>
            </div>

            {/* Buttons Row */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button
                  onClick={togglePlay}
                  className="p-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition-colors cursor-pointer"
                  title={isPlaying ? 'Pause' : 'Play'}
                >
                  {isPlaying ? <Pause className="w-3.5 h-3.5 fill-current" /> : <Play className="w-3.5 h-3.5 fill-current translate-x-0.5" />}
                </button>

                <button
                  onClick={handleReplay}
                  className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors cursor-pointer"
                  title="Replay from start"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>

                {/* Volume & Mute */}
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={toggleMute}
                    className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                      isMuted ? 'bg-rose-950/80 text-rose-300 border border-rose-500/40' : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
                    }`}
                    title={isMuted ? 'Unmute voice' : 'Mute voice'}
                  >
                    {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-blue-400" />}
                  </button>

                  <input
                    type="range"
                    min={0}
                    max={1}
                    step={0.05}
                    value={isMuted ? 0 : volume}
                    onChange={handleVolumeChange}
                    className="w-16 h-1 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500 hidden sm:block"
                    title="Volume slider"
                  />
                </div>

                {/* Subtitles CC Toggle */}
                <button
                  onClick={() => setShowCaptions(!showCaptions)}
                  className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                    showCaptions ? 'bg-blue-900/60 text-blue-300 border border-blue-500/40' : 'bg-slate-800 text-slate-400'
                  }`}
                  title="Toggle Subtitles"
                >
                  <Subtitles className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Badges & Fullscreen */}
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded hidden sm:inline">
                  1080p HD
                </span>
                <button
                  onClick={toggleFullscreen}
                  className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors cursor-pointer"
                  title="Fullscreen"
                >
                  {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* Video Information & Verified Context */}
        <div className="p-5 sm:p-6 bg-[#1E293B] space-y-4 overflow-y-auto">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-700/80">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-bold text-white">
                  {video.author}
                </h3>
                {video.verifiedCustomer && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-950/90 border border-emerald-500/40 text-emerald-400 text-[10px] font-bold uppercase tracking-wider">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    <span>Verified Customer</span>
                  </span>
                )}
                <div className="flex items-center gap-0.5 text-amber-400 ml-1">
                  {[...Array(video.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                {video.role}, <strong className="text-slate-200">{video.company}</strong>
              </p>
            </div>

            <div className="text-left sm:text-right">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                Related Service / Product:
              </span>
              <strong className="text-xs font-semibold text-blue-400 block font-mono">
                {video.targetName}
              </strong>
            </div>
          </div>

          {/* Conversational Quote */}
          <div className="p-3.5 rounded-2xl bg-[#0F172A] border border-slate-700/70 text-xs sm:text-sm text-slate-200 leading-relaxed italic">
            "{video.quote}"
          </div>

          {/* Full Conversational Story Transcript */}
          <div className="space-y-1">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
              Testimonial Transcript:
            </span>
            <p className="text-xs text-slate-300 leading-relaxed bg-[#0F172A]/70 p-3.5 rounded-xl border border-slate-800">
              "{video.spokenScript}"
            </p>
          </div>

          {/* Direct CTA */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-xs text-slate-400 text-center sm:text-left">
              Explore the exact technical deliverable discussed in this review:
            </span>

            {video.type === 'digital-solution' && matchedProduct ? (
              <button
                onClick={() => {
                  closeModal();
                  openSolutionDetail(matchedProduct);
                }}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#7C3AED] hover:bg-purple-700 text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 shadow-md shadow-purple-600/20 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>View {matchedProduct.name} (${matchedProduct.price} USD)</span>
              </button>
            ) : (
              <button
                onClick={() => {
                  closeModal();
                  openServiceRequest(matchedService);
                }}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#2563EB] hover:bg-blue-600 text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 shadow-md shadow-blue-600/20 cursor-pointer"
              >
                <Wrench className="w-3.5 h-3.5" />
                <span>Inquire About This Service</span>
              </button>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
