import React from 'react';
import { Star, ShieldCheck, Sparkles, Activity, Clock } from 'lucide-react';
import { hospitalData } from '../data/hospitalData';

export default function Hero() {
  return (
    <section className="relative overflow-hidden text-white min-h-[65vh] lg:min-h-[75vh] flex items-center pt-8 pb-12 lg:py-16 bg-black">
      
      {/* Background Video Layer - 100% Full Video Visibility Without Cropping */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0 bg-black flex items-center justify-center">
        <video
          src="/hero-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-contain md:object-cover object-center"
        />
        {/* Soft Focused Scrim Behind Text to Ensure Readability While Keeping Full Video Clear */}
        <div className="absolute inset-y-0 left-0 w-full md:w-3/4 lg:w-3/5 bg-gradient-to-r from-black/90 via-black/60 to-transparent pointer-events-none"></div>
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>
      </div>

      {/* Hero Content Layer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-3xl space-y-4 text-left">
          
          {/* Badges */}
          <div className="flex flex-wrap items-center gap-2.5">
            <div className="inline-flex items-center space-x-1.5 gold-metallic-box px-3.5 py-1 rounded-full text-xs font-bold tracking-wide uppercase shadow-md">
              <Star className="w-3.5 h-3.5 gold-metallic-icon-fill" />
              <span className="gold-metallic-text font-extrabold">{hospitalData.basic.rating} ★ Rated Dental Hospital ({hospitalData.basic.ratingCount} Reviews)</span>
            </div>

            <div className="inline-flex items-center space-x-1.5 bg-slate-900/90 border border-emerald-400 text-emerald-400 px-3.5 py-1 rounded-full text-xs font-bold tracking-wide uppercase shadow-md">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              <span>24/7 Open • Emergency Care</span>
            </div>
          </div>

          {/* Metallic Gold Main Headline */}
          <h1 className="text-xl sm:text-3xl lg:text-4xl font-bold tracking-normal leading-snug text-white [text-shadow:_0_2px_8px_rgba(0,0,0,0.9)]">
            Advanced <span className="gold-metallic-text font-black">Laser & Cosmetic</span> Dental Care
          </h1>

          {/* Subtitle with Metallic Gold Hospital Name */}
          <p className="text-white text-sm sm:text-base leading-relaxed font-normal max-w-2xl [text-shadow:_0_2px_6px_rgba(0,0,0,0.9)]">
            Welcome to <strong className="gold-metallic-text font-extrabold">Sunshine Dental Hospital</strong>. 
            Delivering high-precision single-visit Root Canals, Laser Dentistry, Dental Implants, and Oral Surgery with utmost care and state-of-the-art technology.
          </p>

          {/* Feature Badges */}
          <div className="pt-3 border-t border-white/30 flex flex-wrap gap-2 text-xs font-semibold text-white">
            <span className="flex items-center space-x-1.5 bg-slate-900/90 px-3 py-1.5 rounded-xl border border-white/30 shadow-md">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>100% Painless RCT</span>
            </span>
            <span className="flex items-center space-x-1.5 bg-slate-900/90 px-3 py-1.5 rounded-xl border border-white/30 shadow-md">
              <Sparkles className="w-3.5 h-3.5 gold-metallic-icon" />
              <span className="gold-metallic-text font-bold">Laser Dentistry</span>
            </span>
            <span className="flex items-center space-x-1.5 bg-slate-900/90 px-3 py-1.5 rounded-xl border border-white/30 shadow-md">
              <Activity className="w-3.5 h-3.5 text-cyan-400" />
              <span>Maxillofacial Surgery</span>
            </span>
            <span className="flex items-center space-x-1.5 bg-slate-900/90 px-3 py-1.5 rounded-xl border border-white/30 shadow-md">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Digital X-Ray</span>
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
