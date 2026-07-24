import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, Sparkles, ShieldCheck, Calendar, Film } from 'lucide-react';
import { hospitalData } from '../data/hospitalData';

export default function VideoSection({ onOpenAppointment }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  return (
    <section className="py-20 bg-slate-950 text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 bg-amber-400/20 text-amber-300 text-xs font-extrabold px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-3 border border-amber-400/30">
            <Film className="w-4 h-4 text-amber-400" />
            <span>Official Video Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            Take a Virtual Tour of Sunshine Dental Hospital
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mt-3 font-light">
            Watch our high-definition hospital showcase video introducing our modern operatory chairs, sterile clinical procedures, laser treatment suite, and expert team.
          </p>
        </div>

        {/* Video Player Card */}
        <div className="max-w-5xl mx-auto bg-slate-900 rounded-3xl border border-white/15 overflow-hidden shadow-2xl relative group">
          
          {/* HTML5 Video Element */}
          <div className="relative aspect-16/9 bg-black flex items-center justify-center">
            <video
              ref={videoRef}
              src="/hero-video.mp4"
              autoPlay
              loop
              muted={isMuted}
              playsInline
              className="w-full h-full object-cover object-center"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />

            {/* Video Controls Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-slate-950/40 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-between p-6">
              
              {/* Top Bar */}
              <div className="flex items-center justify-between">
                <span className="bg-amber-500 text-slate-950 text-xs font-black px-3 py-1 rounded-full shadow-md uppercase tracking-wider">
                  ● HD 1080p Hospital Tour
                </span>
                <span className="text-xs text-slate-300 bg-slate-950/80 px-3 py-1 rounded-full border border-slate-700">
                  Sunshine Dental Hospital • Kurnool
                </span>
              </div>

              {/* Center Play/Pause Trigger */}
              <div className="self-center">
                <button
                  onClick={togglePlay}
                  className="w-16 h-16 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 flex items-center justify-center shadow-2xl transition transform hover:scale-110 cursor-pointer"
                  aria-label="Toggle Video Playback"
                >
                  {isPlaying ? (
                    <Pause className="w-8 h-8 fill-slate-950" />
                  ) : (
                    <Play className="w-8 h-8 fill-slate-950 ml-1" />
                  )}
                </button>
              </div>

              {/* Bottom Control Bar */}
              <div className="flex items-center justify-between pt-4 border-t border-white/15">
                <div className="flex items-center space-x-3">
                  <button
                    onClick={togglePlay}
                    className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition cursor-pointer"
                  >
                    {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                  </button>

                  <button
                    onClick={toggleMute}
                    className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition cursor-pointer flex items-center space-x-1 text-xs font-semibold"
                  >
                    {isMuted ? (
                      <>
                        <VolumeX className="w-5 h-5 text-amber-400" />
                        <span className="hidden sm:inline">Unmute Audio</span>
                      </>
                    ) : (
                      <>
                        <Volume2 className="w-5 h-5 text-emerald-400" />
                        <span className="hidden sm:inline">Mute Audio</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center space-x-3">
                  <button
                    onClick={onOpenAppointment}
                    className="hidden sm:flex items-center space-x-1.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-xs px-4 py-2 rounded-xl transition cursor-pointer shadow-md"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book Appointment</span>
                  </button>

                  <button
                    onClick={handleFullscreen}
                    className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition cursor-pointer"
                    aria-label="Fullscreen"
                  >
                    <Maximize className="w-5 h-5" />
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* Video Description Banner */}
          <div className="p-6 bg-slate-900 border-t border-slate-800 text-slate-300 sm:flex items-center justify-between gap-4">
            <div className="space-y-1 mb-4 sm:mb-0 text-left">
              <h4 className="font-bold text-white text-base">State-of-the-Art Dental Hospital Facilities</h4>
              <p className="text-xs text-slate-400">
                Painless Root Canal Treatments, Gentle Laser Dentistry, Oral Surgeries & 24/7 Emergency Care in Kurnool.
              </p>
            </div>

            <button
              onClick={onOpenAppointment}
              className="w-full sm:w-auto bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-black px-6 py-3 rounded-xl text-xs flex items-center justify-center space-x-2 transition shadow-md cursor-pointer shrink-0"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment Now</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
