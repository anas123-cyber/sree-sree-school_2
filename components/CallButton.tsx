"use client";

import { Phone } from "lucide-react";

export default function CallButton() {
  return (
    <a
      href="tel:+918812244084"
      aria-label="Call Sree Sree Educational Society at 08812-244084"
      title="Call us: 08812-244084"
      className="group fixed bottom-6 right-6 z-50 flex items-center"
    >
      {/* Pulsing ring to draw attention */}
      <span className="absolute right-0 inline-flex h-12 w-12 rounded-full bg-green-500 opacity-60 animate-ping" />

      {/* Pill that expands on hover to reveal the number */}
      <span className="relative flex items-center h-12 rounded-full bg-green-600 text-white shadow-lg shadow-green-600/30 transition-all duration-300 hover:bg-green-700 hover:-translate-y-0.5 pl-3.5 pr-3.5">
        <Phone className="w-5 h-5 shrink-0" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-300 group-hover:max-w-[160px] group-hover:ml-2">
          08812-244084
        </span>
      </span>
    </a>
  );
}
