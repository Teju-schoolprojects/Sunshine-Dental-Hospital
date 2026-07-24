import React, { useState } from 'react';
import { Phone, Clock, Calendar, Menu, X, Sun, ShieldCheck } from 'lucide-react';
import { hospitalData } from '../data/hospitalData';

export default function Navbar({ onOpenAppointment }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full glass-nav shadow-xs transition-all">
      {/* Top Announcement Bar */}
      <div className="bg-slate-900 text-white text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center space-x-3">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping mr-1.5"></span>
              24/7 OPEN NOW
            </span>
            <span className="hidden sm:inline text-slate-300">
              Emergency Dental Care Available Round-the-Clock in Kurnool
            </span>
          </div>

          <div className="flex items-center space-x-4 text-slate-300">
            <a 
              href={`tel:${hospitalData.contact.phone}`} 
              className="flex items-center space-x-1 hover:text-amber-400 transition"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span className="font-semibold text-white">{hospitalData.contact.formattedPhone}</span>
            </a>
            <span className="hidden md:inline text-slate-600">|</span>
            <span className="hidden md:flex items-center space-x-1 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-cyan-400" />
              <span>Always Open (24 Hours)</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo & Brand */}
          <a href="#" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-amber-500 via-amber-400 to-amber-300 flex items-center justify-center shadow-md group-hover:scale-105 transition transform">
              <Sun className="w-7 h-7 text-slate-950 animate-spin-slow" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-xl font-black tracking-tight text-slate-900 group-hover:text-blue-900 transition">
                  SUNSHINE
                </span>
                <span className="text-xs px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-bold">
                  DENTAL
                </span>
              </div>
              <span className="text-xs text-slate-500 font-medium block">
                Hospital • Kurnool (Est. 2019)
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium text-slate-700">
            <a href="#about" className="hover:text-blue-700 transition">About Us</a>
            <a href="#services" className="hover:text-blue-700 transition">Treatments</a>
            <a href="#estimator" className="hover:text-blue-700 transition">Cost Guide</a>
            <a href="#doctor" className="hover:text-blue-700 transition">Our Doctors</a>
            <a href="#gallery" className="hover:text-blue-700 transition">Gallery</a>
            <a href="#reviews" className="hover:text-blue-700 transition">Reviews</a>
            <a href="#location" className="hover:text-blue-700 transition">Contact</a>
          </nav>

          {/* Action Button */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              onClick={onOpenAppointment}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold px-5 py-2.5 rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-0.5 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={onOpenAppointment}
              className="sm:hidden bg-amber-500 text-slate-950 px-3 py-1.5 rounded-lg text-xs font-bold"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3 shadow-xl">
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50"
          >
            About Us
          </a>
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50"
          >
            Treatments & Services
          </a>
          <a
            href="#estimator"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50"
          >
            Cost Consultation Guide
          </a>
          <a
            href="#doctor"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50"
          >
            Our Doctor
          </a>
          <a
            href="#gallery"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50"
          >
            Hospital Gallery
          </a>
          <a
            href="#reviews"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50"
          >
            Patient Reviews
          </a>
          <a
            href="#location"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50"
          >
            Location & Contact
          </a>
          
          <div className="pt-4 border-t border-slate-100 flex flex-col space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAppointment();
              }}
              className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-3 rounded-xl shadow-md text-center flex items-center justify-center space-x-2"
            >
              <Calendar className="w-5 h-5" />
              <span>Book Appointment Now</span>
            </button>
            <a
              href={`tel:${hospitalData.contact.phone}`}
              className="w-full bg-slate-900 text-white font-semibold py-3 rounded-xl text-center flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5 text-amber-400" />
              <span>Emergency Call: {hospitalData.contact.formattedPhone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
