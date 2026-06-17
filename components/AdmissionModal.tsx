"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";

export default function AdmissionModal() {
  const [isOpen, setIsOpen] = useState(true);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full relative overflow-hidden animate-zoom-in">
        
        {/* Close Button (Top Left as per reference) */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 left-4 z-10 bg-white/90 hover:bg-white text-red-600 rounded-full p-2 shadow-md transition-all hover:scale-110"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Content */}
        <div className="p-8 pb-0 text-center">
          {/* Tagline */}
          <p className="text-green-600 italic font-medium text-sm mb-3">
            Equipping Students for Life
          </p>

          {/* School Name */}
          <h2 className="text-3xl font-bold mb-1 leading-tight">
            <span className="text-red-600">శ్రీశ్రీ</span>{" "}
            <span className="text-blue-700">ఎడ్యుకేషనల్ సొసైటీ</span>
          </h2>
          <h3 className="text-red-600 font-bold uppercase tracking-wider text-xs mb-3">
            The Pride of Eluru Schools
          </h3>

          {/* Address */}
          <p className="text-blue-700 text-sm font-medium mb-6">
            Sriram Nagar 10th Road, S.V. Peta, Eluru, 534003
          </p>

          {/* Admissions Banner */}
          <div className="bg-yellow-400 rounded-xl p-5 mb-0 relative overflow-hidden">
            {/* Decorative confetti-like dots */}
            <div className="absolute top-2 right-4 w-2 h-2 bg-purple-400 rounded-full opacity-60" />
            <div className="absolute top-4 right-8 w-1.5 h-1.5 bg-pink-400 rounded-full opacity-60" />
            <div className="absolute bottom-3 left-4 w-2 h-2 bg-blue-400 rounded-full opacity-60" />
            
            <p className="text-red-700 font-extrabold text-xl tracking-wide mb-1">
              ADMISSIONS OPEN
            </p>
            <p className="text-red-700 font-bold text-2xl mb-3">
              2026-2027
            </p>
            <span className="inline-block bg-white text-blue-700 font-bold px-5 py-1.5 rounded-full text-sm shadow-sm">
              LKG - Class X
            </span>
          </div>
        </div>

        {/* School Building Image */}
        <div className="relative w-full h-48 mt-0">
          <Image
            src="/IMG-20260615-WA0046.jpg"
            alt="School Campus"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      </div>
    </div>
  );
}