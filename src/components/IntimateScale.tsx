import React from "react";

interface IntimateScaleProps {
  onRequestDownload?: () => void;
  onOpenEnquiry?: () => void;
}

export default function IntimateScale({ onRequestDownload, onOpenEnquiry }: IntimateScaleProps) {
  // Bottom Auto-Scrolling Building Images
  const autoScrollImages = [
    {
      src: "/assets/sukhavas/1.webp",
      fallback: "/assets/sukhavas/1.webp",
      alt: "Sukhavas 100% Park-Facing Panoramic View",
    },
    {
      src: "/assets/sukhavas/2.webp",
      fallback: "/assets/sukhavas/2.webp",
      alt: "Sukhavas Illuminated Tower Night Elevation",
    },
    {
      src: "/assets/sukhavas/3.webp",
      fallback: "/assets/sukhavas/3.webp",
      alt: "Sukhavas Wrap-Around Balcony Sunset Vista",
    },
    {
      src: "/assets/sukhavas/4.webp",
      fallback: "/assets/sukhavas/4.webp",
      alt: "Sukhavas Iconic Daytime Architecture Elevation",
    },
  ];

  return (
    <section id="about" className="w-full py-16 sm:py-24 bg-white text-[#161A22] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        
        {/* Top Header Grid matching brand guidelines */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-10 sm:mb-14">
          
          {/* Left Large Headline */}
          <div className="lg:col-span-6 space-y-3">
            <span className="text-xs uppercase font-semibold tracking-[0.2em] text-[#655335] block font-body">
              Home of Happiness
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-normal tracking-tight text-[#1B0E17] leading-[1.15]">
              About Sukhavas
            </h2>
            <p className="text-sm sm:text-base text-[#655335] font-medium italic font-body leading-relaxed pt-1">
              "Sukhavas is a serene and positive name rooted in Sanskrit origin, perfect for a residence that aspires to offer harmony, comfort and joy."
            </p>
          </div>

          {/* Right Description & CTA */}
          <div className="lg:col-span-6 space-y-4">
            <p className="text-sm sm:text-base text-[#4E4449] leading-relaxed font-normal font-body">
              Sukhavas is a contemporary residential project designed to be a sanctuary from the chaos of everyday life. Sukhavas embodies a lifestyle where serenity meets thoughtful living whether in architecture, community or values, everything here is built around the idea of balance between nature and comfort, privacy and togetherness, simplicity and elegance.
            </p>
            <p className="text-sm sm:text-base text-[#4E4449] leading-relaxed font-normal font-body">
              At Sukhavas, we believe a true home doesn't just shelter, it nurtures. Every detail is imagined to bring joy, calm and deep sense of belonging. Here, life flows gently, hearts feel lighter and days begin and end with gratitude.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenEnquiry}
                className="bg-[#1B0E17] hover:bg-[#271523] text-white font-body text-xs sm:text-sm font-semibold px-8 py-3 rounded-full transition-all shadow-md hover:scale-105 active:scale-95 cursor-pointer tracking-wide"
              >
                Explore Sukhavas
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* Bottom Full-Width Horizontal Auto-Scrolling Image Gallery */}
      <style>{`
        @keyframes autoScrollMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-autoscroll {
          display: flex;
          width: max-content;
          animation: autoScrollMarquee 35s linear infinite;
        }
        .animate-autoscroll:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="w-full overflow-hidden relative pt-2">
        <div className="animate-autoscroll gap-6 px-6">
          {[...autoScrollImages, ...autoScrollImages].map((img, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-[80vw] sm:w-[55vw] md:w-[620px] aspect-[16/11] rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-[#FAF8F5] group"
            >
              <picture className="w-full h-full block">
                <source srcSet={img.src} type="image/webp" />
                <img
                  src={img.fallback || img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </picture>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
