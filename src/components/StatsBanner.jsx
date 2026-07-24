import React from 'react';
import { Award, Star, Clock, ShieldCheck } from 'lucide-react';
import { hospitalData } from '../data/hospitalData';

export default function StatsBanner() {
  const stats = [
    {
      icon: Award,
      value: `Est. ${hospitalData.basic.yearsInBusiness}`,
      title: "Years in Excellence",
      subtitle: "Serving Kurnool with modern dental care"
    },
    {
      icon: Star,
      value: `${hospitalData.basic.rating} ★`,
      title: "Patient Satisfaction",
      subtitle: "Verified reviews on Justdial & Google"
    },
    {
      icon: Clock,
      value: "24/7",
      title: "Emergency Care",
      subtitle: "Round-the-clock emergency dental surgeons"
    },
    {
      icon: ShieldCheck,
      value: "100%",
      title: "Painless Laser Tech",
      subtitle: "Minimally invasive advanced dental care"
    }
  ];

  return (
    <section className="bg-white border-y border-slate-200 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition">
                <div className="w-12 h-12 mx-auto rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-3">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  {stat.value}
                </div>
                <div className="font-bold text-sm text-slate-800 mt-1">
                  {stat.title}
                </div>
                <p className="text-xs text-slate-500 mt-0.5">
                  {stat.subtitle}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
