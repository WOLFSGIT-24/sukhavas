import React, { useEffect } from "react";
import { X } from "lucide-react";
import { projectSnapshot } from "../data";

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrivacyPolicyModal({ isOpen, onClose }: PrivacyPolicyModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-[#211616]/90 backdrop-blur-sm animate-fade-in">
      <div 
        className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col border border-[#E8E6E3] relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-6 sm:p-8 border-b border-[#E8E6E3] bg-[#FAF8F5] shrink-0">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl text-[#211616] font-bold">Privacy Policy</h2>
            <p className="font-body text-xs text-[#655335] mt-1 uppercase tracking-widest font-semibold">
              Sukhavas by SR Paryavaran Engineers (SRP)
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[#E8E6E3] text-[#4E4449] hover:text-[#211616] transition-colors focus:outline-none cursor-pointer"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto font-body text-sm text-[#4E4449] leading-relaxed space-y-6">
          <p>
            This website is operated as an official informational and enquiry portal for <strong>Sukhavas</strong>, developed by <strong>SR Paryavaran Engineers (SRP)</strong>. We are committed to protecting the privacy of our prospective homebuyers and handling personal data with absolute integrity.
          </p>

          <div className="space-y-2">
            <h3 className="font-display text-lg font-bold text-[#211616]">1. Information We Collect</h3>
            <p>When you fill an enquiry, request floor plans, or download a brochure, we collect your Name, Phone Number, Email Address, and Unit Configuration preferences.</p>
          </div>

          <div className="space-y-2">
            <h3 className="font-display text-lg font-bold text-[#211616]">2. Use of Information</h3>
            <p>Your details are utilized solely for scheduling site walkthroughs, sharing official project documents, providing price quotations, and answering customer queries regarding Sukhavas.</p>
          </div>

          <div className="space-y-2">
            <h3 className="font-display text-lg font-bold text-[#211616]">3. Data Security & Privacy</h3>
            <p>We do not sell, trade, or distribute your personal contact information to third parties. All lead submissions are encrypted via secure SSL connections.</p>
          </div>

          <div className="space-y-2">
            <h3 className="font-display text-lg font-bold text-[#211616]">4. Official Developer Contact</h3>
            <ul className="list-none space-y-1.5 text-xs text-[#161A22] bg-[#FAF8F5] p-4 rounded-xl border border-[#E8E6E3]">
              <li><strong>Project:</strong> Sukhavas (3 & 4 BHK Contemporary Luxury Residences)</li>
              <li><strong>Developer:</strong> {projectSnapshot.developerFull}</li>
              <li><strong>Address:</strong> {projectSnapshot.address}</li>
              <li><strong>Phone:</strong> {projectSnapshot.phonePrimary} | {projectSnapshot.phoneSecondary}</li>
              <li><strong>Email:</strong> {projectSnapshot.email}</li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-[#E8E6E3] bg-[#FAF8F5] shrink-0 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-lg bg-[#211616] text-white font-body text-xs font-bold tracking-wider uppercase hover:bg-[#2e1f1f] transition-colors cursor-pointer"
          >
            Acknowledge & Close
          </button>
        </div>
      </div>
    </div>
  );
}
