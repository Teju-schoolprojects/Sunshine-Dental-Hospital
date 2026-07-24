import React from 'react';
import { Phone, MessageSquare, Calendar, Navigation } from 'lucide-react';
import { hospitalData } from '../data/hospitalData';

export default function FloatingActionBar({ onOpenAppointment }) {
  const whatsappUrl = `https://wa.me/${hospitalData.contact.whatsapp}?text=${encodeURIComponent("Hello Sunshine Dental Hospital, I have an urgent dental inquiry / need an appointment.")}`;
  const geoUrl = `https://www.google.com/maps/search/?api=1&query=${hospitalData.contact.geo.lat},${hospitalData.contact.geo.lng}`;

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden bg-slate-950/95 backdrop-blur-md border-t border-slate-800 px-3 py-2.5 shadow-2xl">
      <div className="max-w-md mx-auto grid grid-cols-4 gap-2 text-center text-3xs">
        
        {/* Call Button */}
        <a
          href={`tel:${hospitalData.contact.phone}`}
          className="flex flex-col items-center justify-center p-2 rounded-xl bg-slate-900 text-amber-400 font-bold hover:bg-slate-800 transition"
        >
          <Phone className="w-4 h-4 mb-0.5" />
          <span>Call 24/7</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center p-2 rounded-xl bg-emerald-600/20 text-emerald-400 font-bold border border-emerald-500/30 hover:bg-emerald-600/30 transition"
        >
          <MessageSquare className="w-4 h-4 mb-0.5" />
          <span>WhatsApp</span>
        </a>

        {/* Book Button */}
        <button
          onClick={onOpenAppointment}
          className="col-span-2 flex items-center justify-center space-x-1.5 p-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-black shadow-md cursor-pointer text-xs"
        >
          <Calendar className="w-4 h-4" />
          <span>Book Appointment</span>
        </button>

      </div>
    </div>
  );
}
