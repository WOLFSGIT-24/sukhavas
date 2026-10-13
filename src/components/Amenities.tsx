import React, { useState, useEffect } from "react";
import { amenitiesData } from "../data";

interface AmenitiesProps {
  onOpenBooking?: () => void;
  onRequestDownload?: () => void;
}

export default function Amenities({ onOpenBooking, onRequestDownload }: AmenitiesProps) {
  // Curated slider items matching the 4 key sections from Sukhavas PDF Brochure
  const sliderItems = [
    {
      src: "/assets/sukhavas/amenities_1.webp",
      fallback: "/assets/sukhavas/amenities_1.webp",
      title: "Ultra-Filtration Swimming Pool & Wellness Centre",
      subtitle: "Equipped with the latest ultra-filtration system ensuring exceptional water purity and hygiene at all times, with sauna & steam experiences.",
      category: "LIFESTYLE & AMENITIES",
    },
    {
      src: "/assets/sukhavas/amenities_2.webp",
      fallback: "/assets/sukhavas/amenities_2.webp",
      title: "Gym with Pilates & Yoga Meditation Deck",
      subtitle: "State-of-the-art gym outfitted with latest cardio, strength, functional & Pilates training equipment.",
      category: "FITNESS ACTIVITIES",
    },
    {
      src: "/assets/sukhavas/amenities_3.webp",
      fallback: "/assets/sukhavas/amenities_3.webp",
      title: "The Adaptive Terrace: A Sky Lounge for Every Need",
      subtitle: "Open-air lounge with fire pits for cozy evenings, society party terrace, and rooftop Table Tennis & fitness deck.",
      category: "THE ADAPTIVE TERRACE",
    },
    {
      src: "/assets/sukhavas/amenities_4.webp",
      fallback: "/assets/sukhavas/amenities_4.webp",
      title: "MIVAN Monolithic Concrete Construction",
      subtitle: "Smooth crack-free walls and ceilings, fewer joints reducing dampness, earthquake-resistant safety, and more carpet area.",
      category: "CONSTRUCTION EXCELLENCE",
    },
  ];

  const [currentIdx, setCurrentIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  // Smooth auto-slide every 4.2 seconds
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % sliderItems.length);
    }, 4200);
    return () => clearInterval(timer);
  }, [isPaused, sliderItems.length]);

  return (
    <section id="amenities" className="w-full py-16 sm:py-24 bg-white text-[#161A22] overflow-hidden font-body">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        
        {/* Top Header matching reference screenshot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-10 sm:mb-12">
          
          {/* Left Large Headline */}
          <div className="lg:col-span-6 space-y-2">
            <span className="text-xs uppercase font-semibold tracking-[0.2em] text-[#655335] block font-body">
              A Sanctuary Beyond Walls
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-normal tracking-tight text-[#1B0E17] leading-[1.15]">
              Lifestyle & Amenities
            </h2>
          </div>

          {/* Right Description & Book Now CTA */}
          <div className="lg:col-span-6 space-y-5">
            <p className="text-sm sm:text-base text-[#4E4449] leading-relaxed font-normal">
              Wellness centre / Clubhouse with premium sauna and steam experiences, designed to relax your body, refresh your mind and elevate your everyday living. Equipped with an ultra-filtration swimming pool, elegant reception lounge, and dedicated kids play area.
            </p>
            <div>
              <button
                onClick={onOpenBooking}
                className="bg-[#1B0E17] hover:bg-[#271523] text-white font-body text-xs sm:text-sm font-semibold px-8 py-3.5 rounded-full transition-all shadow-md hover:scale-105 active:scale-95 cursor-pointer tracking-wide inline-flex items-center justify-center"
              >
                Explore Amenities
              </button>
            </div>
          </div>

        </div>

        {/* Large Smooth Auto-Sliding Image Banner matching screenshot */}
        <div
          className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/10] bg-[#1B0E17] shadow-xl border border-gray-100 group"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Slides Stack with smooth fade cross-dissolve */}
          {sliderItems.map((item, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                idx === currentIdx ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              <picture className="w-full h-full block">
                <source srcSet={item.src} type="image/webp" />
                <img
                  src={item.fallback || item.src}
                  alt={item.title}
                  loading={idx === 0 ? "eager" : "lazy"}
                  className="w-full h-full object-cover transform transition-transform duration-7000 ease-out scale-100 hover:scale-105"
                />
              </picture>
              {/* Subtle ambient bottom gradient for captions */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent pointer-events-none" />
            </div>
          ))}

          {/* Floating Left Slide Caption & Category Pill */}
          <div className="absolute bottom-3.5 sm:bottom-6 left-3.5 sm:left-6 z-20 flex flex-col items-start gap-1 sm:gap-2 text-white max-w-xl pr-4">
            <span className="text-[9px] sm:text-xs uppercase tracking-[0.2em] font-semibold bg-white/20 backdrop-blur-md px-2.5 sm:px-3 py-1 rounded-full border border-white/20 text-[#E6C7A8]">
              {sliderItems[currentIdx].category}
            </span>
            <h3 className="text-base sm:text-2xl font-display font-medium tracking-tight drop-shadow-md">
              {sliderItems[currentIdx].title}
            </h3>
            <p className="text-xs sm:text-sm text-white/90 font-normal hidden sm:block drop-shadow leading-relaxed">
              {sliderItems[currentIdx].subtitle}
            </p>
          </div>

          {/* Slide Progress Dots */}
          <div className="absolute top-3 right-3 sm:top-6 sm:right-6 z-20 flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-2.5 sm:px-3 py-1.5 rounded-full border border-white/10">
            {sliderItems.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => setCurrentIdx(dotIdx)}
                className={`h-1.5 rounded-full transition-all cursor-pointer ${
                  dotIdx === currentIdx ? "w-5 sm:w-6 bg-[#E6C7A8]" : "w-1.5 bg-white/40 hover:bg-white/70"
                }`}
                aria-label={`Go to slide ${dotIdx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* 4 PDF Feature Categories Grid Breakdown */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenitiesData.map((sec, sIdx) => (
            <div
              key={sec.id}
              className="bg-[#FAF8F5] rounded-2xl p-5 sm:p-6 border border-[#E8E6E3] hover:border-[#DED4C4] transition-all hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] uppercase font-semibold tracking-widest text-[#655335] block mb-1">
                  {sec.category}
                </span>
                <h4 className="text-lg font-display font-medium text-[#1B0E17] mb-3">
                  {sec.title}
                </h4>
                <ul className="space-y-2 text-xs text-[#4E4449]">
                  {sec.bullets.slice(0, 3).map((b, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#655335] mt-1.5 shrink-0" />
                      <span className="leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
