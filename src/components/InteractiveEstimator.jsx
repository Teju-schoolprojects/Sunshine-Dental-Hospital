import React, { useState } from 'react';
import { HelpCircle, ChevronRight, Sparkles, AlertCircle, ArrowRight } from 'lucide-react';
import { hospitalData } from '../data/hospitalData';

export default function InteractiveEstimator({ onOpenAppointmentWithService }) {
  const [selectedSymptom, setSelectedSymptom] = useState(null);

  const symptoms = [
    {
      id: 'sym-1',
      title: 'Severe Toothache / Pain while chewing',
      recommendedServiceId: 'rct',
      description: 'Indicative of deep nerve inflammation or cavity infection.'
    },
    {
      id: 'sym-2',
      title: 'Bleeding gums / Swollen gums / Bad breath',
      recommendedServiceId: 'gums',
      description: 'Signs of gingivitis or active periodontal gum disease.'
    },
    {
      id: 'sym-3',
      title: 'Missing tooth / Difficulty chewing food',
      recommendedServiceId: 'implants',
      description: 'Suitable for biocompatible dental implants or fixed ceramic bridges.'
    },
    {
      id: 'sym-4',
      title: 'Painful wisdom tooth / Jaw discomfort',
      recommendedServiceId: 'surgery',
      description: 'Requires specialist oral surgery & painless third molar extraction.'
    },
    {
      id: 'sym-5',
      title: 'Routine dental check-up / X-Ray diagnosis',
      recommendedServiceId: 'xray',
      description: 'Quick digital 2D/3D dental X-Ray for preventive oral care.'
    }
  ];

  const getRecommendedService = () => {
    if (!selectedSymptom) return null;
    return hospitalData.services.find(s => s.id === selectedSymptom.recommendedServiceId);
  };

  const recService = getRecommendedService();

  return (
    <section className="py-16 bg-gradient-to-br from-blue-900 to-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Refined Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 bg-amber-400/20 text-amber-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2 border border-amber-400/30">
            <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
            <span>Interactive Care Helper</span>
          </div>
          <h2 className="text-xl sm:text-3xl font-bold tracking-normal text-white">
            Find The Right Treatment For Your Dental Concerns
          </h2>
          <p className="text-slate-300 text-sm mt-2">
            Select your symptom below to get an instant clinical recommendation from Dr. Sathyavathi M's care plan.
          </p>
        </div>

        {/* Symptom Selector & Recommendation Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Symptoms List */}
          <div className="lg:col-span-7 space-y-3">
            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-1">
              Select Your Symptom or Concern:
            </label>

            {symptoms.map((symptom) => {
              const isSelected = selectedSymptom?.id === symptom.id;
              return (
                <div
                  key={symptom.id}
                  onClick={() => setSelectedSymptom(symptom)}
                  className={`p-4 rounded-2xl border transition cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? 'bg-amber-500/20 border-amber-400 text-white shadow-lg'
                      : 'bg-white/10 border-white/15 text-slate-200 hover:bg-white/15'
                  }`}
                >
                  <div className="space-y-0.5">
                    <h3 className="font-bold text-sm text-white">{symptom.title}</h3>
                    <p className="text-xs text-slate-300">{symptom.description}</p>
                  </div>
                  <ChevronRight className={`w-5 h-5 shrink-0 transition ${isSelected ? 'text-amber-400 translate-x-1' : 'text-slate-400'}`} />
                </div>
              );
            })}
          </div>

          {/* Right Column: Recommendation Result */}
          <div className="lg:col-span-5 bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/20 shadow-2xl">
            {recService ? (
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-1.5 bg-amber-400 text-slate-950 text-xs font-bold px-3 py-1 rounded-full">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Recommended Treatment</span>
                </div>

                <h3 className="text-xl font-bold text-white">
                  {recService.title}
                </h3>

                <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">
                  {recService.fullDesc}
                </p>

                <div className="bg-slate-900/80 p-3.5 rounded-2xl border border-white/10 text-xs text-slate-300 space-y-1">
                  <p className="font-bold text-amber-300">Clinical Highlight:</p>
                  <p>{recService.shortDesc}</p>
                </div>

                <button
                  onClick={() => onOpenAppointmentWithService(recService.title)}
                  className="w-full bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold py-3 px-4 rounded-xl transition flex items-center justify-center space-x-2 text-xs shadow-lg cursor-pointer"
                >
                  <span>Book Appointment for {recService.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className="text-center py-8 space-y-3">
                <AlertCircle className="w-10 h-10 text-amber-400 mx-auto" />
                <h3 className="text-base font-bold text-white">Select a symptom on the left</h3>
                <p className="text-xs text-slate-300 max-w-xs mx-auto">
                  Click any dental symptom to see treatment options and instant booking details.
                </p>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
