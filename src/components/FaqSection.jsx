import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Sparkles, PhoneCall } from 'lucide-react';
import { hospitalData } from '../data/hospitalData';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-slate-950 text-white border-b border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center space-x-2 bg-white/10 text-amber-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2 border border-white/15">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-xl sm:text-3xl font-bold text-white tracking-normal">
            Have Questions About Dental Treatments?
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm mt-1">
            Clear answers to common questions about appointments, 24/7 care, payment options, and laser procedures.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {hospitalData.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden shadow-md transition"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between font-bold text-white hover:bg-slate-850 transition cursor-pointer text-xs sm:text-sm"
                >
                  <span className="pr-4">{faq.question}</span>
                  <ChevronDown className={`w-4 h-4 shrink-0 text-amber-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 pt-1 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-slate-800 bg-slate-950/60 font-light">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Contact CTA Box */}
        <div className="mt-8 text-center bg-slate-900 p-5 rounded-2xl border border-slate-800 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <p className="text-xs font-bold text-white">Still have a specific dental query?</p>
            <p className="text-3xs text-slate-400">Dr. Sathyavathi M & our support team are available 24/7.</p>
          </div>
          <a
            href={`tel:${hospitalData.contact.phone}`}
            className="bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold px-4 py-2.5 rounded-xl transition flex items-center space-x-2 text-xs shrink-0"
          >
            <PhoneCall className="w-3.5 h-3.5 text-slate-950 font-bold" />
            <span>Call {hospitalData.contact.phone}</span>
          </a>
        </div>

      </div>
    </section>
  );
}
