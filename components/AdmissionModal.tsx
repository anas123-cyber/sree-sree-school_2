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
    <div
      onClick={() => setIsOpen(false)}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl shadow-2xl max-w-md w-full relative max-h-[90vh] overflow-y-auto overflow-x-hidden animate-modal-drop"
      >
        
        {/* Close Button (Top Left as per reference) */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 left-4 z-10 bg-white/90 hover:bg-white text-red-600 rounded-full p-2 shadow-md transition-all hover:scale-110"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Content */}
        <div className="p-5 sm:p-8 pb-0 text-center">
          {/* School Banner (exact branding from the official banner) */}
          <div className="relative w-full mb-6 animate-fade-in-up" style={{ aspectRatio: "910 / 186", animationDelay: "0.25s" }}>
            <Image
              src="/banner-text.png"
              alt="Sree Sree Educational Society — Equipping Students for Life — The Pride of Eluru Schools, Sriram Nagar 10th Road, S.V. Peta, Eluru, 534003"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Admissions Banner */}
          <div className="bg-yellow-400 rounded-xl p-5 mb-0 relative overflow-hidden animate-pop-in" style={{ animationDelay: "0.45s" }}>
            {/* Decorative confetti-like dots */}
            <div className="absolute top-2 right-4 w-2 h-2 bg-purple-400 rounded-full opacity-60 animate-float-slow" />
            <div className="absolute top-4 right-8 w-1.5 h-1.5 bg-pink-400 rounded-full opacity-60 animate-float-slow" style={{ animationDelay: "1.2s" }} />
            <div className="absolute bottom-3 left-4 w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-float-slow" style={{ animationDelay: "0.6s" }} />
            
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
        <div className="relative w-full h-48 mt-0 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
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