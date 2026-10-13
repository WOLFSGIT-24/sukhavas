import React, { useState } from "react";
import { ZoomIn, X } from "lucide-react";

const galleryImages = [
  {
    src: "/assets/sukhavas/1.webp",
    fallback: "/assets/sukhavas/1.webp",
    title: "100% Park-Facing Panoramic View",
    category: "Nature & Panoramic Greens",
  },
  {
    src: "/assets/sukhavas/2.webp",
    fallback: "/assets/sukhavas/2.webp",
    title: "Illuminated Tower Night Elevation",
    category: "Landmark Architecture",
  },
  {
    src: "/assets/sukhavas/3.webp",
    fallback: "/assets/sukhavas/3.webp",
    title: "Wrap-Around Balcony Living at Sunset",
    category: "Exclusive Residences",
  },
  {
    src: "/assets/sukhavas/4.webp",
    fallback: "/assets/sukhavas/4.webp",
    title: "Iconic Daytime Architecture",
    category: "Contemporary Facade",
  },
];

export default function Gallery() {
  const [activePhoto, setActivePhoto] = useState<any | null>(null);

  return (
    <section id="gallery" className="w-full py-16 md:py-24 bg-white text-[#161A22] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header matching reference screenshot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-10 sm:mb-12">
          
          {/* Left Large Headline */}
          <div className="lg:col-span-6 space-y-2">
            <span className="text-xs uppercase font-semibold tracking-[0.2em] text-[#655335] block font-body">
              A Home That Lives As Beautiful As It Looks
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-normal tracking-tight text-[#1B0E17] leading-[1.15]">
              Curated Living Spaces & Architecture
            </h2>
          </div>

          {/* Right Description */}
          <div className="lg:col-span-6 space-y-4">
            <p className="text-sm sm:text-base text-[#4E4449] leading-relaxed font-normal font-body">
              Generous space with thoughtfully designed areas for living, entertaining and privacy in perfect balance. High end finishes that blend beauty with functionality across every square foot.
            </p>
          </div>

        </div>

        {/* Marquee Animation Styles */}
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            display: flex;
            width: max-content;
            animation: marquee 35s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}</style>

        {/* Marquee Row */}
        <div className="w-full overflow-hidden relative py-2">
          <div className="animate-marquee gap-6">
            {[...galleryImages, ...galleryImages, ...galleryImages, ...galleryImages].map((img, idx) => (
              <div
                key={idx}
                onClick={() => setActivePhoto(img)}
                className="flex-shrink-0 w-[280px] sm:w-[380px] md:w-[460px] aspect-[1514/1039] rounded-2xl overflow-hidden shadow-lg relative group cursor-pointer border border-[#E5DED3]"
              >
                <picture className="w-full h-full block">
                  <source srcSet={img.src} type="image/webp" />
                  <img
                    src={img.fallback || img.src}
                    alt={img.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </picture>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                  <span className="text-[10px] uppercase font-semibold text-white/80 tracking-widest">
                    {img.category}
                  </span>
                  <h4 className="text-base sm:text-lg font-medium text-white tracking-tight">
                    {img.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Full Screen Lightbox */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-50 bg-[#090F1D]/95 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setActivePhoto(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-4xl w-full p-4 relative shadow-2xl flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-2 border-b border-gray-100">
              <div>
                <h3 className="text-xl font-normal text-[#161A22] tracking-tight">
                  {activePhoto.title}
                </h3>
                <span className="text-xs text-gray-500 font-normal uppercase tracking-wider">
                  {activePhoto.category}
                </span>
              </div>
              <button
                onClick={() => setActivePhoto(null)}
                className="w-8 h-8 rounded-full bg-[#FAF8F5] hover:bg-[#E5DED3] flex items-center justify-center text-[#0E172A] cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="overflow-auto flex-1 my-3 flex items-center justify-center bg-[#090F1D] rounded-xl p-2">
              <picture className="max-w-full max-h-[68vh] flex items-center justify-center">
                <source srcSet={activePhoto.src} type="image/webp" />
                <img
                  src={activePhoto.fallback || activePhoto.src}
                  alt={activePhoto.title}
                  className="max-w-full max-h-[68vh] object-contain rounded-lg"
                />
              </picture>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
