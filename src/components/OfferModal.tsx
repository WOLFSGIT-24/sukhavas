import React, { useState, useEffect } from "react";
import { X, Sparkles, ShieldCheck } from "lucide-react";
import { projectSnapshot } from "../data";

interface OfferModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddLead: (lead: { fullName: string; email: string; phone: string; unitPreference: string }) => void;
  initialUnitType?: string | null;
}

export default function OfferModal({ isOpen, onClose, onAddLead, initialUnitType }: OfferModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    unitPreference: initialUnitType || "4 BHK Luxury Residence (Park-Facing)",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (initialUnitType) {
      setFormData((prev) => ({ ...prev, unitPreference: initialUnitType }));
    }
  }, [initialUnitType]);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    let sanitizedValue = value;
    if (name === "phone") {
      sanitizedValue = value.replace(/\D/g, "").slice(0, 10);
    } else if (name === "fullName") {
      sanitizedValue = value.replace(/[^A-Za-z\s]/g, "");
    }

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : sanitizedValue,
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e?: React.FormEvent | React.KeyboardEvent | React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
      (e as any).nativeEvent?.stopImmediatePropagation?.();
    }
    
    const newErrors: Record<string, string> = {};
    if (!/^[A-Za-z\s]+$/.test(formData.fullName.trim())) {
      newErrors.fullName = "Name should only contain letters";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!/^\d{10}$/.test(formData.phone.trim())) {
      newErrors.phone = "Phone number must be exactly 10 digits";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setLoading(true);
    
    onAddLead({
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      unitPreference: formData.unitPreference,
    });
    
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in">
      <div 
        className="absolute inset-0 bg-[#211616]/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div className="relative w-full max-w-[440px] bg-white rounded-2xl shadow-2xl overflow-hidden border border-[#E8E6E3] z-10 max-h-[92vh] flex flex-col">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-[#4E4449] hover:text-[#211616] p-1.5 rounded-full bg-[#FAF8F5] hover:bg-[#E8E6E3] transition-colors z-20"
        >
          <X className="h-4 w-4" />
        </button>

        <div role="form" onKeyDown={(e) => { if (e.key === "Enter") handleSubmit(e); }} data-gtm-form-ignore="true" className="flex flex-col overflow-y-auto gtm-ignore">
          <div className="p-5 sm:p-7 pb-4 bg-[#211616] text-white border-b border-white/10 shrink-0">
            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#E6C7A8]">
              SR Paryavaran Engineers (SRP)
            </span>
            <h3 className="font-display text-lg sm:text-xl font-bold text-white mt-0.5">
              Experience Sukhavas
            </h3>
            <p className="font-body text-xs text-white/70 mt-1 leading-relaxed">
              Connect directly with our relationship manager for floor plans, custom pricing, and private site walkthroughs.
            </p>
          </div>

          <div className="p-5 sm:p-7 space-y-3.5 overflow-y-auto">
            <div className="space-y-1">
              <label className="block text-xs font-bold font-body text-[#211616]">
                Full Name*
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full bg-[#FAF8F5] border border-[#E5DED3] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-[#211616] focus:bg-white font-body"
              />
              {errors.fullName && <p className="text-[11px] text-red-500 font-body">{errors.fullName}</p>}
            </div>

            <div className="space-y-1">
              <label className="block text-xs font-bold font-body text-[#211616]">
                Phone Number*
              </label>
              <div className="flex bg-[#FAF8F5] border border-[#E5DED3] rounded-lg focus-within:border-[#211616] focus-within:bg-white">
                <span className="px-3 py-2.5 text-sm text-[#4E4449] border-r border-[#E5DED3] font-body bg-gray-50/50">
                  +91
                </span>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="10-digit mobile number"
                  maxLength={10}
                  className="w-full bg-transparent px-3.5 py-2.5 text-sm outline-none font-body"
                />
              </div>
              {errors.phone && <p className="text-[11px] text-red-500 font-body">{errors.phone}</p>}
            </div>

            <div className="space-y-1">
              <label className="block text-xs font-bold font-body text-[#211616]">
                Email Address*
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@example.com"
                className="w-full bg-[#FAF8F5] border border-[#E5DED3] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-[#211616] focus:bg-white font-body"
              />
              {errors.email && <p className="text-[11px] text-red-500 font-body">{errors.email}</p>}
            </div>

            <div className="space-y-1">
              <label className="block text-xs font-bold font-body text-[#211616]">
                Residence Preference
              </label>
              <select
                name="unitPreference"
                value={formData.unitPreference}
                onChange={handleChange}
                className="w-full bg-[#FAF8F5] border border-[#E5DED3] rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-[#211616] focus:bg-white font-body"
              >
                <option value="4 BHK Luxury Residence (Park-Facing)">4 BHK Luxury Residence (Park-Facing)</option>
                <option value="4 BHK Dual-Access Suite (Convertible 3 BHK + S)">4 BHK Dual-Access Suite (Convertible 3 BHK + S)</option>
                <option value="Explore All Configurations">Explore All Configurations (Just 30 Homes)</option>
              </select>
            </div>

            <button
              type="button"
              onClick={handleSubmit}
              disabled={loading}
              className="w-full bg-[#211616] hover:bg-[#2e1f1f] text-[#FAF8F5] font-body text-xs font-bold tracking-[0.2em] uppercase py-4 rounded-lg shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 mt-3 transition-all"
            >
              {loading ? (
                <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                "SCHEDULE PRIVATE VISIT"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
