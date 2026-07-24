import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, User, Phone, CheckCircle, MessageSquare, Sparkles, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { hospitalData } from '../data/hospitalData';

export default function AppointmentModal({ isOpen, onClose, initialService = '' }) {
  const [service, setService] = useState(initialService || 'Root Canal Treatment (RCT)');
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('10:00 AM');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialService) {
      setService(initialService);
    }
  }, [initialService]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {
      // fallback if confetti fails
    }
  };

  const whatsappMessage = `Hello Sunshine Dental Hospital, I have booked an online appointment:
- Service: ${service}
- Preferred Date: ${date || 'Earliest Available'}
- Time Slot: ${timeSlot}
- Patient Name: ${name}
- Phone: ${phone}
${notes ? `- Notes: ${notes}` : ''}`;

  const whatsappUrl = `https://wa.me/${hospitalData.contact.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative animate-in fade-in zoom-in duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition"
        >
          <X className="w-6 h-6" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Header */}
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/15 text-amber-600 flex items-center justify-center">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block">
                  ● 24/7 Instant Appointment Booking
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                  Book Your Consultation
                </h3>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Select Service */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Select Treatment / Service <span className="text-amber-500">*</span>
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none bg-slate-50 font-medium"
                  required
                >
                  {hospitalData.services.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title} ({s.category})
                    </option>
                  ))}
                  <option value="General Checkup & Routine Clean">General Dental Checkup</option>
                  <option value="24/7 Emergency Dental Consultation">24/7 Emergency Toothache Consultation</option>
                </select>
              </div>

              {/* Date & Time Slot */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Preferred Date <span className="text-amber-500">*</span>
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none bg-slate-50"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Time Slot
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none bg-slate-50"
                  >
                    <option value="09:00 AM - 12:00 PM">Morning (09:00 AM - 12:00 PM)</option>
                    <option value="12:00 PM - 04:00 PM">Afternoon (12:00 PM - 04:00 PM)</option>
                    <option value="04:00 PM - 08:00 PM">Evening (04:00 PM - 08:00 PM)</option>
                    <option value="24/7 Emergency Night Slot">24/7 Emergency Slot (Late Hours)</option>
                  </select>
                </div>
              </div>

              {/* Patient Name & Phone */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Patient Full Name <span className="text-amber-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none bg-slate-50"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Mobile Phone Number <span className="text-amber-500">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="e.g. 9052955079"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none bg-slate-50"
                    required
                  />
                </div>
              </div>

              {/* Additional Notes */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Describe Symptoms or Notes (Optional)
                </label>
                <textarea
                  rows="2"
                  placeholder="Mention tooth location, swelling, or pain duration..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-4 py-2 rounded-xl border border-slate-300 text-slate-900 text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none bg-slate-50"
                ></textarea>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-950 font-black py-4 rounded-xl shadow-lg transition transform hover:-translate-y-0.5 text-base flex items-center justify-center space-x-2 cursor-pointer"
              >
                <CheckCircle className="w-5 h-5" />
                <span>Confirm Appointment</span>
              </button>

            </form>
          </div>
        ) : (
          /* Confirmation Screen */
          <div className="text-center py-6 space-y-5">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto animate-bounce">
              <CheckCircle className="w-10 h-10" />
            </div>

            <div>
              <span className="text-xs font-extrabold text-emerald-600 uppercase tracking-wider">
                Appointment Registered!
              </span>
              <h3 className="text-2xl font-black text-slate-900 mt-1">
                Thank You, {name}!
              </h3>
              <p className="text-slate-600 text-sm mt-2 max-w-md mx-auto">
                Your appointment for <strong className="text-slate-900">{service}</strong> on <strong className="text-slate-900">{date || 'Today'}</strong> ({timeSlot}) has been registered.
              </p>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-left text-xs space-y-1.5 max-w-md mx-auto">
              <div className="flex justify-between">
                <span className="text-slate-500">Patient:</span>
                <span className="font-bold text-slate-900">{name} ({phone})</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Clinic:</span>
                <span className="font-bold text-amber-700">Sunshine Dental Hospital</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Address:</span>
                <span className="font-semibold text-slate-800">1st Floor, Above Vijaya Diagnostics</span>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-4 rounded-xl flex items-center justify-center space-x-2 text-sm shadow-md transition"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Send Booking Slip to Clinic WhatsApp</span>
              </a>

              <button
                onClick={() => {
                  setIsSubmitted(false);
                  onClose();
                }}
                className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold py-3 px-4 rounded-xl text-xs"
              >
                Close Window
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
