import React from 'react';
import { Sun, Phone, MapPin, Mail, Clock, Heart, ShieldCheck } from 'lucide-react';
import { hospitalData } from '../data/hospitalData';

export default function Footer({ onOpenAppointment }) {
  return (
    <footer className="bg-slate-950 text-white pt-16 pb-24 lg:pb-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-black">
                <Sun className="w-6 h-6" />
              </div>
              <div>
                <span className="text-lg font-black tracking-tight text-white block">
                  SUNSHINE DENTAL
                </span>
                <span className="text-xs text-amber-400 font-semibold">
                  Hospital • Kurnool
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed font-light">
              Providing state-of-the-art dental care, painless Root Canal Treatments (RCT), Laser Dentistry, Dental Implants, and Oral Surgery since 2019.
            </p>

            <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 px-3 py-1 rounded-full text-xs font-semibold">
              <Clock className="w-3.5 h-3.5" />
              <span>Available 24 Hours / 7 Days</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-amber-300 uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li><a href="#about" className="hover:text-amber-400 transition">About Sunshine Hospital</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition">Root Canal & Laser Dentistry</a></li>
              <li><a href="#estimator" className="hover:text-amber-400 transition">Interactive Cost Guide</a></li>
              <li><a href="#doctor" className="hover:text-amber-400 transition">Meet Dr. Sathyavathi M</a></li>
              <li><a href="#gallery" className="hover:text-amber-400 transition">Hospital Photo Tour</a></li>
              <li><a href="#reviews" className="hover:text-amber-400 transition">Verified Patient Reviews</a></li>
              <li><a href="#location" className="hover:text-amber-400 transition">Location & Directions</a></li>
            </ul>
          </div>

          {/* Col 3: Key Treatments */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-amber-300 uppercase tracking-wider">
              Specialist Treatments
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>Painless Root Canal (RCT)</li>
              <li>Laser Soft Tissue Dentistry</li>
              <li>Oral & Maxillofacial Surgery</li>
              <li>Artificial Teeth & Dental Implants</li>
              <li>Bleeding Gums & Periodontics</li>
              <li>Maxillofacial Prosthetics</li>
              <li>Digital Low-Radiation X-Ray</li>
            </ul>
          </div>

          {/* Col 4: Contact & Helpline */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-amber-300 uppercase tracking-wider">
              Emergency Contact
            </h4>
            
            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{hospitalData.contact.building}, {hospitalData.contact.area}, Above Vijaya Diagnostics, Kurnool, AP 518003</span>
              </div>

              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${hospitalData.contact.phone}`} className="hover:text-amber-400 font-bold text-white">
                  +91 {hospitalData.contact.phone}
                </a>
              </div>

              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{hospitalData.contact.email}</span>
              </div>
            </div>

            <button
              onClick={onOpenAppointment}
              className="w-full bg-amber-400 hover:bg-amber-500 text-slate-950 font-black py-2.5 rounded-xl text-xs transition shadow-md mt-2"
            >
              Book Online Appointment
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Sunshine Dental Hospital, Kurnool. All rights reserved.</p>
          <div className="flex items-center space-x-4 text-slate-400">
            <span className="flex items-center space-x-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>NABH Standards & Sterilized</span>
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
