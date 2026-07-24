import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, X, Maximize2 } from 'lucide-react';
import { hospitalData } from '../data/hospitalData';

export default function GallerySection() {
  const photos = hospitalData.photos;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const autoPlayRef = useRef(null);

  const itemsPerView = 3;
  const maxIndex = Math.max(0, photos.length - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      nextSlide();
    }, 1000); // 1 Second Sliding Speed

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [currentIndex, maxIndex]);

  return (
    <section id="gallery" className="py-16 bg-slate-950 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Heading: Our Clinic Tour */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-xl sm:text-3xl font-bold tracking-normal text-white">
            Our Clinic Tour
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm mt-2 max-w-2xl mx-auto">
            Explore real photos of our clinic facilities, operatory chairs, doctor consultation room, and building exterior.
          </p>

          {/* Navigation Controls Centered */}
          <div className="flex justify-center items-center space-x-3 mt-5">
            <button
              onClick={prevSlide}
              className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/15 transition cursor-pointer"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              onClick={nextSlide}
              className="p-2.5 rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-950 transition cursor-pointer"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Automated Side-by-Side Image Carousel */}
        <div className="relative overflow-hidden rounded-3xl">
          <div
            className="flex transition-transform duration-500 ease-out gap-6"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
            }}
          >
            {photos.map((photo, idx) => (
              <div
                key={photo.id}
                onClick={() => setLightboxIndex(idx)}
                className="min-w-[calc(100%-1.5rem)] sm:min-w-[calc(50%-0.75rem)] lg:min-w-[calc(33.333%-1rem)] shrink-0 group relative h-64 sm:h-72 rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-xl cursor-pointer"
              >
                <img
                  src={photo.url}
                  alt={photo.alt || photo.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-500"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/40 transition flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="w-10 h-10 rounded-full bg-slate-900/90 text-amber-400 flex items-center justify-center border border-amber-400/50 shadow-2xl">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Slide Indicators */}
        <div className="flex justify-center items-center space-x-2 mt-6">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === idx ? 'w-6 bg-amber-400' : 'w-2 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 backdrop-blur-md p-4">
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-4 right-4 text-white hover:text-amber-400 p-2 rounded-full bg-white/10 cursor-pointer z-50"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={() => setLightboxIndex((lightboxIndex - 1 + photos.length) % photos.length)}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-amber-400 p-3 rounded-full bg-white/10 cursor-pointer z-50"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <button
            onClick={() => setLightboxIndex((lightboxIndex + 1) % photos.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-amber-400 p-3 rounded-full bg-white/10 cursor-pointer z-50"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <div className="max-w-4xl max-h-[85vh] flex flex-col items-center">
            <img
              src={photos[lightboxIndex].url}
              alt={photos[lightboxIndex].alt || photos[lightboxIndex].title}
              className="max-h-[80vh] w-auto object-contain rounded-2xl shadow-2xl border border-slate-800"
            />
          </div>
        </div>
      )}
    </section>
  );
}
