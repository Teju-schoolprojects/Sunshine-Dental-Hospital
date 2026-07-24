import React, { useState } from 'react';
import { 
  Activity, Zap, ShieldAlert, Smile, HeartPulse, Layers, Scan, Sparkles, 
  Clock, CheckCircle2, Info, X, Calendar 
} from 'lucide-react';
import { hospitalData } from '../data/hospitalData';

const iconMap = {
  Activity, Zap, ShieldAlert, Smile, HeartPulse, Layers, Scan, Sparkles
};

export default function ServicesSection({ onSelectServiceForBooking }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedService, setSelectedService] = useState(null);

  const categories = ['All', 'Treatment', 'Surgery', 'Services'];

  const filteredServices = activeCategory === 'All' 
    ? hospitalData.services 
    : hospitalData.services.filter(s => s.category === activeCategory);

  return (
    <section id="services" className="py-16 bg-slate-950 relative text-white border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 bg-white/10 text-amber-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2 border border-white/15">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="gold-metallic-text font-bold">Comprehensive Dental Treatments</span>
          </div>
          <h2 className="text-xl sm:text-3xl font-bold text-white tracking-normal">
            Specialized Dental Solutions Tailored For Your Smile
          </h2>
          <p className="text-slate-300 text-sm mt-2">
            From routine dental check-ups and digital diagnostics to painless laser endodontics and maxillofacial surgeries, Sunshine Dental Hospital delivers exceptional quality.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl font-bold text-xs transition cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-amber-400 text-slate-950 shadow-lg font-black'
                    : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {cat === 'All' ? 'All Treatments & Services' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => {
            const IconComponent = iconMap[service.icon] || Activity;
            return (
              <div 
                key={service.id} 
                className="bg-slate-900 rounded-3xl overflow-hidden border border-slate-800/90 shadow-xl hover:shadow-2xl transition card-hover-effect flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-52 w-full overflow-hidden bg-slate-950 group">
                    <img
                      src={`${service.image}?v=2026`}
                      alt={service.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

                    <div className="absolute top-3 right-3">
                      <span className="bg-amber-400 text-slate-950 text-xs font-bold px-3 py-1 rounded-full shadow-md">
                        {service.badge}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-4 flex items-center space-x-2">
                      <div className="w-9 h-9 rounded-xl bg-slate-900/90 backdrop-blur-md text-white flex items-center justify-center border border-white/10 shadow-md">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <span className="text-3xs font-bold uppercase text-amber-300 bg-slate-950/90 px-2 py-0.5 rounded border border-white/20">
                        {service.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="text-lg font-bold text-white mb-1.5">
                      {service.title}
                    </h3>

                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-3 font-light">
                      {service.shortDesc}
                    </p>

                    <div className="flex items-center space-x-2 text-xs font-semibold text-slate-400 mb-2 bg-slate-950/60 p-2 rounded-xl border border-slate-800">
                      <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>Est. Duration: {service.estTime}</span>
                    </div>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-2 border-t border-slate-800/80 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="text-amber-400 font-bold text-xs hover:text-amber-300 flex items-center space-x-1 cursor-pointer"
                  >
                    <Info className="w-3.5 h-3.5" />
                    <span>Read Details</span>
                  </button>

                  <button
                    onClick={() => onSelectServiceForBooking(service.title)}
                    className="bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold text-xs px-3.5 py-2 rounded-xl transition flex items-center space-x-1 cursor-pointer shadow-md"
                  >
                    <Calendar className="w-3.5 h-3.5 text-slate-950 font-bold" />
                    <span>Book Now</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-sm">
          <div className="bg-slate-900 border border-slate-800 text-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl relative animate-in fade-in zoom-in duration-200">
            <div className="relative h-52 bg-slate-950">
              <img
                src={`${selectedService.image}?v=2026`}
                alt={selectedService.title}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-950/40 to-transparent"></div>

              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 p-2 text-white bg-slate-950/80 hover:bg-slate-950 rounded-full border border-slate-700 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="text-3xs font-bold text-amber-400 uppercase tracking-wider block">
                  {selectedService.badge} • {selectedService.category}
                </span>
                <h3 className="text-lg font-bold text-white">{selectedService.title}</h3>
              </div>
            </div>

            <div className="p-6 space-y-3">
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {selectedService.fullDesc}
              </p>

              <div className="bg-slate-950 border border-slate-800 rounded-2xl p-3.5">
                <div className="flex items-center space-x-2 text-amber-400 font-bold text-xs mb-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>Post-Treatment Care Recommendation</span>
                </div>
                <p className="text-xs text-slate-300 font-medium leading-relaxed">
                  {selectedService.careTip}
                </p>
              </div>

              <div className="flex items-center justify-end space-x-3 pt-2">
                <button
                  onClick={() => setSelectedService(null)}
                  className="px-4 py-2 rounded-xl border border-slate-700 text-slate-300 font-bold text-xs hover:bg-slate-800 cursor-pointer"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const title = selectedService.title;
                    setSelectedService(null);
                    onSelectServiceForBooking(title);
                  }}
                  className="bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold text-xs px-4 py-2 rounded-xl transition flex items-center space-x-1 cursor-pointer shadow-md"
                >
                  <Calendar className="w-3.5 h-3.5 text-slate-950 font-bold" />
                  <span>Book This Treatment</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
