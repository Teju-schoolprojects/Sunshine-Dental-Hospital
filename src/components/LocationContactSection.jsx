import React from 'react';
import { MapPin, Phone, Clock, Mail, Navigation, ShieldCheck } from 'lucide-react';
import { hospitalData } from '../data/hospitalData';

export default function LocationContactSection() {
  const contact = hospitalData.contact;

  return (
    <section id="location" className="py-16 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 bg-white/10 text-amber-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2 border border-white/15">
            <MapPin className="w-3.5 h-3.5" />
            <span>Clinic Location & Directions</span>
          </div>
          <h2 className="text-xl sm:text-3xl font-bold text-white tracking-normal">
            Visit Sunshine Dental Hospital in Kurnool
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm mt-1">
            Conveniently located on the First Floor above Vijaya Diagnostics in Venkata Ramana Colony.
          </p>
        </div>

        {/* Contact Details & Embedded Google Map Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Contact Cards & 24/7 Hours */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Address Card */}
            <div className="bg-slate-950 rounded-3xl p-6 border border-slate-800 shadow-xl space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-white">Hospital Address</h3>
                  <span className="text-3xs text-emerald-400 font-bold uppercase">Open 24/7 • Prime Landmark</span>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed font-light">
                {contact.fullAddress}
              </p>

              <div className="pt-2 flex flex-wrap gap-2 text-3xs font-bold">
                <span className="bg-slate-900 px-2.5 py-1 rounded-lg border border-slate-800 text-slate-300">
                  Building: 1st Floor
                </span>
                <span className="bg-slate-900 px-2.5 py-1 rounded-lg border border-slate-800 text-slate-300">
                  Landmark: Above Vijaya Diagnostics
                </span>
                <span className="bg-slate-900 px-2.5 py-1 rounded-lg border border-slate-800 text-slate-300">
                  Pincode: 518003
                </span>
              </div>
            </div>

            {/* Direct Contact & WhatsApp */}
            <div className="bg-slate-950 rounded-3xl p-6 border border-slate-800 shadow-xl space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-2xl bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-white">Emergency & Helpline</h3>
                  <p className="text-xs text-slate-400 font-medium">Instant Consultation & Booking</p>
                </div>
              </div>

              <div className="flex flex-col space-y-2 pt-1">
                <a
                  href={`tel:${contact.phone}`}
                  className="bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold px-4 py-2.5 rounded-xl transition flex items-center justify-between text-xs cursor-pointer shadow-md"
                >
                  <span>Call Emergency: {contact.formattedPhone}</span>
                  <Phone className="w-3.5 h-3.5 text-slate-950 font-bold" />
                </a>

                <a
                  href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent("Hello Sunshine Dental Hospital, I need dental assistance.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-4 py-2.5 rounded-xl transition flex items-center justify-between text-xs cursor-pointer shadow-md"
                >
                  <span>WhatsApp Chat</span>
                  <Navigation className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* 24/7 Hours & Payments */}
            <div className="bg-slate-950 text-white rounded-3xl p-6 shadow-xl space-y-3 border border-slate-800">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-emerald-400" />
                <h3 className="font-bold text-xs text-white uppercase tracking-wider">Working Hours</h3>
              </div>

              <div className="bg-slate-900 p-3 rounded-2xl border border-slate-800 text-xs flex justify-between items-center font-semibold">
                <span>Monday - Sunday:</span>
                <span className="text-emerald-400 font-bold">Open 24 Hours (7 Days)</span>
              </div>

              <div className="pt-1">
                <p className="text-3xs font-bold uppercase text-slate-400 mb-1.5">Accepted Payments:</p>
                <div className="flex flex-wrap gap-1.5 text-3xs font-bold">
                  {hospitalData.paymentMethods.map((pm) => (
                    <span key={pm} className="bg-slate-900 px-2.5 py-1 rounded-md border border-slate-800 text-slate-300">
                      {pm}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Embedded Google Map */}
          <div className="lg:col-span-7 bg-slate-950 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl h-[420px] relative">
            <iframe
              title="Sunshine Dental Hospital Map Location"
              src={`https://www.google.com/maps?q=${contact.geo.lat},${contact.geo.lng}&hl=es;z=16&output=embed`}
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            <div className="absolute bottom-4 left-4 right-4 bg-slate-950/90 backdrop-blur-md p-3.5 rounded-2xl border border-white/20 text-white shadow-xl flex items-center justify-between text-xs">
              <div>
                <p className="font-bold text-white">Sunshine Dental Hospital</p>
                <p className="text-3xs text-slate-300">Above Vijaya Diagnostics, Venkata Ramana Colony</p>
              </div>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${contact.geo.lat},${contact.geo.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold px-3 py-1.5 rounded-lg text-3xs transition cursor-pointer shadow-md shrink-0"
              >
                Open Google Maps
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
