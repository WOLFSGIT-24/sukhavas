import React, { useEffect } from "react";
import { CheckCircle2, Phone, MessageCircle, ArrowLeft, Building2, MapPin, ShieldCheck } from "lucide-react";

export default function ThankYouPage() {
  useEffect(() => {
    // Scroll to top on load
    window.scrollTo(0, 0);

    // Ensure dataLayer tracks thank_you pageview event
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "thank_you_pageview",
        page_path: "/thank-you",
        page_title: "Thank You | Sukhavas",
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#211616] text-white flex flex-col justify-between selection:bg-[#ded4c4] selection:text-[#211616] font-body relative overflow-x-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-gradient-to-b from-[#655335]/20 via-[#211616]/40 to-transparent blur-3xl pointer-events-none" />

      {/* Header */}
      <header className="relative z-10 w-full border-b border-white/10 bg-[#211616]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <img
              src="/assets/sukhavas/sukhavas-logo.png"
              alt="Sukhavas"
              className="h-10 sm:h-12 w-auto object-contain brightness-0 invert"
            />
          </a>

          <a
            href="tel:+918867589797"
            className="flex items-center gap-2 bg-[#FAF8F5]/10 hover:bg-[#FAF8F5]/20 px-4 py-2 rounded-full border border-[#ded4c4]/30 text-xs font-semibold text-white transition-all tracking-wide"
          >
            <Phone className="h-3.5 w-3.5 text-[#E6C7A8]" />
            <span className="hidden sm:inline">+91 88675 89797</span>
            <span className="sm:hidden">Call</span>
          </a>
        </div>
      </header>

      {/* Main Thank You Card */}
      <main className="relative z-10 flex-1 flex items-center justify-center px-4 py-12 sm:py-16">
        <div className="w-full max-w-2xl bg-white/5 border border-white/15 rounded-3xl p-6 sm:p-10 backdrop-blur-xl shadow-2xl text-center space-y-7 animate-fade-in">
          
          {/* Animated Confirmation Badge */}
          <div className="relative mx-auto w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center">
            <div className="absolute inset-0 bg-[#E6C7A8]/20 rounded-full animate-ping opacity-75" />
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-[#655335] via-[#E6C7A8] to-[#FAF8F5] p-1 flex items-center justify-center shadow-lg">
              <div className="w-full h-full bg-[#211616] rounded-full flex items-center justify-center">
                <CheckCircle2 className="h-10 w-10 sm:h-12 sm:w-12 text-[#E6C7A8]" />
              </div>
            </div>
          </div>

          {/* Heading */}
          <div className="space-y-3">
            <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#E6C7A8] block">
              Inquiry Confirmed
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight leading-tight">
              Thank You For Your Interest
            </h1>
            <p className="text-sm sm:text-base text-white/80 max-w-lg mx-auto font-normal leading-relaxed">
              We have received your details. A dedicated senior relationship manager from{" "}
              <strong className="text-white font-semibold">SR Paryavaran Engineers (SRP)</strong> will connect with you shortly to share layout blueprints, pricing structures, and arrange your private site walkthrough.
            </p>
          </div>

          {/* Project Snapshot Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-left">
            <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 flex items-start gap-3">
              <MapPin className="h-4 w-4 text-[#E6C7A8] shrink-0 mt-0.5" />
              <div>
                <p className="text-[10px] text-white/50 uppercase tracking-wider font-semibold">Prime Location</p>
                <p className="text-xs font-semibold text-white">GH 16, Sector 24, Panchkula</p>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 flex items-start gap-3">
              <Building2 className="h-4 w-4 text-[#E6C7A8] shrink-0 mt-0.5" />
              <div>
                <p className="text-[10px] text-white/50 uppercase tracking-wider font-semibold">Configuration</p>
                <p className="text-xs font-semibold text-white">Exclusive 4 BHK Luxury (30 Homes)</p>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 flex items-start gap-3">
              <ShieldCheck className="h-4 w-4 text-[#E6C7A8] shrink-0 mt-0.5" />
              <div>
                <p className="text-[10px] text-white/50 uppercase tracking-wider font-semibold">HRERA Approved</p>
                <p className="text-xs font-semibold text-white">PKL-PKL-689-2025</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="tel:+918867589797"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FAF8F5] text-[#211616] hover:bg-white px-6 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider shadow-lg transition-all hover:scale-[1.02] cursor-pointer"
            >
              <Phone className="h-4 w-4" />
              <span>Call Us Now</span>
            </a>

            <a
              href="https://wa.me/918867589797?text=Hi%2C%20I%20just%20submitted%20my%20details%20on%20the%20Sukhavas%20website%20and%20would%20like%20more%20information."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-6 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider shadow-lg transition-all hover:scale-[1.02] cursor-pointer"
            >
              <MessageCircle className="h-4 w-4" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Back to Home Link */}
          <div className="pt-2 border-t border-white/10">
            <a
              href="/"
              className="inline-flex items-center gap-2 text-xs text-white/60 hover:text-white transition-colors py-1 font-medium"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Back to Sukhavas Homepage</span>
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 w-full border-t border-white/10 py-6 text-center text-xs text-white/40">
        <p>© {new Date().getFullYear()} Sukhavas Panchkula. Developed by SR Paryavaran Engineers (SRP). All Rights Reserved.</p>
      </footer>
    </div>
  );
}

