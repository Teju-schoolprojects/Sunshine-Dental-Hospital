import React from 'react';
import { Star, Quote, MessageSquarePlus, CheckCircle2 } from 'lucide-react';
import { hospitalData } from '../data/hospitalData';

export default function ReviewsSection({ onOpenReviewModal }) {
  return (
    <section id="reviews" className="py-16 bg-slate-900 relative text-white border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 bg-white/10 text-emerald-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2 border border-white/15">
              <Star className="w-3.5 h-3.5 text-emerald-400" />
              <span>Verified Patient Testimonials</span>
            </div>
            <h2 className="text-xl sm:text-3xl font-bold tracking-normal text-white">
              Trusted by Hundreds of Patients Across Kurnool
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm mt-1">
              Read real feedback from patients who experienced painless treatments and dental care.
            </p>
          </div>

          <button
            onClick={onOpenReviewModal}
            className="bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold text-xs px-5 py-3 rounded-xl transition flex items-center space-x-2 shadow-md shrink-0 cursor-pointer"
          >
            <MessageSquarePlus className="w-4 h-4 text-slate-950 font-bold" />
            <span>Write a Patient Review</span>
          </button>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {hospitalData.reviews.map((review) => (
            <div 
              key={review.id} 
              className="bg-slate-950 rounded-3xl p-6 border border-slate-800 shadow-lg hover:shadow-2xl transition relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-slate-700" />
                </div>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed italic mb-4 font-light">
                  "{review.comment}"
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                <div>
                  <h4 className="font-bold text-white">{review.author}</h4>
                  <span className="text-slate-400 text-3xs">Justdial Verified Review</span>
                </div>
                {review.verified && (
                  <span className="inline-flex items-center space-x-1 text-emerald-400 text-3xs font-bold bg-emerald-950/60 px-2 py-0.5 rounded-md border border-emerald-800">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Verified Patient</span>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
