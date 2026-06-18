"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function TopBanner() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Hide if scrolled down more than 50px, show if at the very top (less than 10px)
      if (window.scrollY > 50) {
        setIsVisible(false);
      } else if (window.scrollY < 10) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial check in case page loads scrolled down
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`w-full overflow-hidden transition-all duration-500 ease-in-out ${
        isVisible ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      <div className="relative w-full h-20 sm:h-28 md:h-40 bg-yellow-50">
        <Image
          src="/top-banner.png"
          alt="Sree Sree Educational Society Banner"
          fill
          className="object-contain object-center"
          priority
        />
      </div>
    </div>
  );
}