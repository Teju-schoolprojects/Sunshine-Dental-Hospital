import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBanner from './components/StatsBanner';
import ServicesSection from './components/ServicesSection';
import InteractiveEstimator from './components/InteractiveEstimator';
import DoctorSection from './components/DoctorSection';
import GallerySection from './components/GallerySection';
import ReviewsSection from './components/ReviewsSection';
import FaqSection from './components/FaqSection';
import LocationContactSection from './components/LocationContactSection';
import AppointmentModal from './components/AppointmentModal';
import ReviewModal from './components/ReviewModal';
import FloatingActionBar from './components/FloatingActionBar';
import Footer from './components/Footer';

export default function App() {
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [initialService, setInitialService] = useState('');
  const [reviewModalOpen, setReviewModalOpen] = useState(false);

  const handleOpenAppointment = (serviceName = '') => {
    setInitialService(serviceName);
    setAppointmentModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 font-sans text-slate-100 selection:bg-amber-400 selection:text-slate-950">
      {/* Navigation Header */}
      <Navbar onOpenAppointment={() => handleOpenAppointment()} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero onOpenAppointment={() => handleOpenAppointment()} />
        <StatsBanner />

        {/* Detailed About Section */}
        <section id="about" className="py-14 bg-slate-900 border-y border-slate-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden border border-slate-800">
              <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

              <div className="relative z-10 max-w-3xl space-y-3">
                <span className="gold-metallic-text font-bold text-xs uppercase tracking-wider block">
                  Welcome to Sunshine Dental Hospital
                </span>
                <h2 className="text-xl sm:text-2xl font-bold tracking-normal leading-snug text-white">
                  Where Excellence Meets Compassion in Dental Healthcare
                </h2>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light">
                  Sunshine Dental Hospital offers a wide array of dental treatments and procedures to ensure the oral health and well-being of all patients in Kurnool. Equipped with state-of-the-art technology, modern facilities, and minimally invasive laser systems, we deliver precision and comfort in every procedure.
                </p>
                <div className="pt-2 flex flex-wrap gap-3 text-xs font-semibold text-slate-200">
                  <span className="bg-white/10 px-3 py-1.5 rounded-xl border border-white/15">
                    ✓ Experienced Dental Professionals
                  </span>
                  <span className="bg-white/10 px-3 py-1.5 rounded-xl border border-white/15">
                    ✓ Online Appointments & Direct WhatsApp
                  </span>
                  <span className="bg-white/10 px-3 py-1.5 rounded-xl border border-white/15">
                    ✓ 24/7 Emergency Care
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ServicesSection 
          onSelectServiceForBooking={(serviceName) => handleOpenAppointment(serviceName)} 
        />

        <InteractiveEstimator 
          onOpenAppointmentWithService={(serviceName) => handleOpenAppointment(serviceName)} 
        />

        <DoctorSection 
          onOpenAppointment={() => handleOpenAppointment()} 
        />

        <GallerySection />

        <ReviewsSection 
          onOpenReviewModal={() => setReviewModalOpen(true)} 
        />

        <FaqSection />

        <LocationContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenAppointment={() => handleOpenAppointment()} />

      {/* Floating Action Bar for Mobile */}
      <FloatingActionBar onOpenAppointment={() => handleOpenAppointment()} />

      {/* Modals */}
      <AppointmentModal
        isOpen={appointmentModalOpen}
        onClose={() => setAppointmentModalOpen(false)}
        initialService={initialService}
      />

      <ReviewModal
        isOpen={reviewModalOpen}
        onClose={() => setReviewModalOpen(false)}
      />
    </div>
  );
}
