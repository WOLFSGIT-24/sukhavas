import React, { useEffect } from "react";
import { X } from "lucide-react";
import { projectSnapshot } from "../data";

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TermsModal({ isOpen, onClose }: TermsModalProps) {
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
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-[#1B0E17]/90 backdrop-blur-sm animate-fade-in">
      <div 
        className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col border border-[#E8E6E3] relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-6 sm:p-8 border-b border-[#E8E6E3] bg-[#FAF8F5] shrink-0">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl text-[#1B0E17] font-bold">Terms & Conditions</h2>
            <p className="font-body text-xs text-[#655335] mt-1 uppercase tracking-widest font-semibold">
              Sukhavas by SR Paryavaran Engineers (SRP)
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[#E8E6E3] text-[#4E4449] hover:text-[#1B0E17] transition-colors focus:outline-none cursor-pointer"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto font-body text-sm text-[#4E4449] leading-relaxed space-y-6">
          <p>
            Welcome to the official digital portal for <strong>Sukhavas</strong>, developed by <strong>SR Paryavaran Engineers (SRP)</strong>. By accessing this portal, you agree to comply with the terms and statutory guidelines outlined herein.
          </p>

          <div className="space-y-2">
            <h3 className="font-display text-lg font-bold text-[#1B0E17]">1. Project Representation</h3>
            <p>
              Sukhavas is a contemporary residential project nestled in the serene vicinity of Panchkula, Haryana. All architectural representations, master plans, floor layouts, and 3D visual renderings are artistic impressions for illustrative guidance.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-display text-lg font-bold text-[#1B0E17]">2. Statutory Compliance & Approvals</h3>
            <p>
              The project is planned in accordance with applicable statutory guidelines and competent authorities. All dimensions adhere to standardized carpet area standards.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-display text-lg font-bold text-[#1B0E17]">3. Contact & Inquiries</h3>
            <ul className="list-none space-y-1.5 text-xs text-[#161A22] bg-[#FAF8F5] p-4 rounded-xl border border-[#E8E6E3]">
              <li><strong>Developer:</strong> {projectSnapshot.developerFull}</li>
              <li><strong>Address:</strong> {projectSnapshot.address}</li>
              <li><strong>Contact:</strong> {projectSnapshot.phonePrimary} / {projectSnapshot.phoneSecondary}</li>
              <li><strong>Email:</strong> {projectSnapshot.email}</li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-[#E8E6E3] bg-[#FAF8F5] shrink-0 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-lg bg-[#1B0E17] text-white font-body text-xs font-bold tracking-wider uppercase hover:bg-[#271523] transition-colors cursor-pointer"
          >
            I Agree & Understand
          </button>
        </div>
      </div>
    </div>
  );
}
