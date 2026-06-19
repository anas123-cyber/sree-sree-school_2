"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function TopBanner() {
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      // Hysteresis: collapse once past 40px, only re-expand near the very top.
      // The wide dead-zone (8–40px) keeps it from flickering around the edge.
      if (y > 40) {
        setCollapsed(true);
      } else if (y < 8) {
        setCollapsed(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      // overflowAnchor:none stops the browser from re-adjusting scrollY when the
      // banner's height animates — that re-adjustment was causing the bounce loop.
      style={{ overflowAnchor: "none" }}
      className={`w-full overflow-hidden transition-all duration-[800ms] ease-in-out ${
        collapsed ? "max-h-0 opacity-0" : "max-h-48 opacity-100"
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
