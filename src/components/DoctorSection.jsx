import React from 'react';
import { Award, ShieldCheck, Stethoscope, Sparkles, Calendar, Clock, Star } from 'lucide-react';
import { hospitalData } from '../data/hospitalData';

export default function DoctorSection({ onOpenAppointment }) {
  const doctor = hospitalData.doctors[0];

  return (
    <section id="doctor" className="py-16 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 bg-amber-100 text-amber-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 gold-metallic-icon" />
            <span className="gold-metallic-text font-extrabold">Expert Medical Leadership</span>
          </div>
          <h2 className="text-xl sm:text-3xl font-bold text-slate-900 tracking-normal">
            Meet Our Founder & Chief Dental Specialist
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Dedicated to delivering gentle, surgical precision and modern dental excellence to the people of Kurnool.
          </p>
        </div>

        {/* Doctor Leadership Profile */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950 text-white rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden border border-slate-800">
          
          <div className="relative z-10 max-w-4xl space-y-5">
            
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="gold-metallic-box text-slate-950 text-xs font-extrabold px-3.5 py-1 rounded-full uppercase tracking-wider shadow-md">
                <span className="gold-metallic-text">Chief Dental Surgeon</span>
              </span>
              <span className="bg-emerald-500/20 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full border border-emerald-500/40 flex items-center space-x-1">
                <Clock className="w-3.5 h-3.5" />
                <span>24/7 Available for Emergencies</span>
              </span>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-1">
                {doctor.name}
              </h3>
              <p className="gold-metallic-text text-sm sm:text-base font-extrabold">
                {doctor.qualification}
              </p>
              <p className="text-slate-300 text-xs font-medium">
                {doctor.specialization} • {doctor.experience}
              </p>
            </div>

            <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-normal border-l-4 border-amber-400 pl-4 py-1">
              "{doctor.about}"
            </p>

            {/* Core Specialties Pills */}
            <div className="grid sm:grid-cols-2 gap-4 pt-1">
              <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/15 flex items-start space-x-3">
                <Award className="w-5 h-5 gold-metallic-icon shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-white">Oral & Maxillofacial Specialist</h4>
                  <p className="text-xs text-slate-300">Expertise in wisdom tooth surgery, jaw reconstruction & facial trauma.</p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/15 flex items-start space-x-3">
                <Stethoscope className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-white">Advanced Rotary Endodontics</h4>
                  <p className="text-xs text-slate-300">High-precision 100% painless single-sitting Root Canal Treatments.</p>
                </div>
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenAppointment}
                className="bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-950 font-black px-6 py-3 rounded-xl shadow-xl transition flex items-center space-x-2 text-xs cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-slate-950 font-bold" />
                <span>Book Consultation with {doctor.name}</span>
              </button>

              <div className="flex items-center space-x-1.5 text-xs text-amber-300 font-bold bg-white/10 px-3.5 py-2.5 rounded-xl border border-white/15">
                <Star className="w-3.5 h-3.5 gold-metallic-icon-fill" />
                <span className="gold-metallic-text font-extrabold">4.7★ Patient Rated Specialist</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
