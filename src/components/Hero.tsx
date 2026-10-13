import React from "react";

interface HeroProps {
  onOpenEnquiry: () => void;
  onRequestDownload?: () => void;
}

export default function Hero({ onOpenEnquiry, onRequestDownload }: HeroProps) {
  return (
    <section
      id="overview"
      className="relative w-full min-h-[92vh] sm:min-h-screen flex flex-col justify-between items-center text-center overflow-hidden bg-[#1B0E17]"
    >
      {/* Background Photography - Instant High-Priority LCP Render */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <picture>
          <source srcSet="/assets/sukhavas/Sukhavas%20Hero%20image.webp" type="image/webp" />
          <img
            src="/assets/sukhavas/Sukhavas%20Hero%20image.png"
            alt="Sukhavas Contemporary Residential Landmark"
            className="w-full h-full object-cover object-center"
            fetchPriority="high"
            loading="eager"
            decoding="async"
            width="1985"
            height="792"
          />
        </picture>

        {/* Soft subtle plum & vignette gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1B0E17]/60 via-transparent to-[#1B0E17]/40 pointer-events-none" />
      </div>

      {/* Upper Empty Spacer for Fixed Header */}
      <div className="h-20 sm:h-36 w-full relative z-10 shrink-0" />

      {/* Main Content: Slightly below center on Mobile, Middle-Left on Desktop */}
      <div className="flex w-full max-w-7xl mx-auto px-5 sm:px-8 md:px-12 relative z-10 justify-start my-auto pt-16 sm:pt-4 pb-12 sm:pb-32">
        <div className="max-w-xl lg:max-w-2xl text-left flex flex-col items-start space-y-2.5 sm:space-y-6">
          
          {/* Badge: A New Standard in Boutique Luxury Living */}
          <div className="inline-flex items-center gap-2 bg-[#1B0E17]/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#DED4C4]/30 text-[#E6C7A8] text-[10px] sm:text-[11px] font-medium tracking-widest uppercase">
            <span>A New Standard in Boutique Luxury Living • HRERA-PKL-PKL-689-2025</span>
          </div>

          {/* Large Headline */}
          <h1 
            className="font-display text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white leading-[1.12] drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]"
          >
            SUKHAVAS <br className="hidden sm:inline" />
            <span className="italic font-light">Legacy of Elegance</span>
          </h1>

          {/* Location, Specification, Price */}
          <div className="space-y-0.5 sm:space-y-1.5 text-white/95 font-body text-xs sm:text-base md:text-lg drop-shadow-[0_1px_6px_rgba(0,0,0,0.5)] font-medium">
            <p className="text-[#E6C7A8]">GH 16, Sector 24, Panchkula, Haryana</p>
            <p>Spacious 4 BHK Residences • Only Two Homes Per Floor • Just 30 Homes</p>
            <p>100% Park-Facing with Wrap-Around Balconies & The Adaptive Terrace</p>
          </div>

          {/* Action Buttons */}
          <div 
            className="pt-1.5 sm:pt-2 flex flex-row items-center justify-start gap-2.5 sm:gap-3 w-auto"
          >
            <button
              onClick={onOpenEnquiry}
              className="bg-[#1B0E17]/95 hover:bg-[#271523] text-white font-body text-xs sm:text-sm font-semibold px-6 sm:px-8 py-2.5 sm:py-3.5 rounded-full border border-[#DED4C4]/30 hover:border-[#DED4C4]/70 transition-all shadow-[0_10px_25px_rgba(0,0,0,0.4)] hover:scale-105 active:scale-95 cursor-pointer tracking-wide"
            >
              Explore Sukhavas
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Spacer */}
      <div className="h-6 sm:h-10 w-full relative z-10 shrink-0" />
    </section>
  );
}
