"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const slides = [
  {
    image: "/1000228485.jpg",
    tag: "Est. 1987 • Eluru, Andhra Pradesh",
    title: (
      <>
        Holistic <span className="text-accent">Development</span>
      </>
    ),
    subtitle: "Mind, Body & Spirit",
  },
  {
    image: "/1000228463.jpg",
    tag: "Empowering Excellence",
    title: (
      <>
        Nurturing <span className="text-accent">Young Minds</span>
      </>
    ),
    subtitle: "From curious beginners to confident graduates",
  },
  {
    image: "/Screenshot 2026-06-15 213649.png",
    tag: "Beyond the Classroom",
    title: (
      <>
        Building <span className="text-accent">Character</span>
      </>
    ),
    subtitle: "Through yoga, arts, and holistic growth",
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[560px] md:min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Images with Fade Transition */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={slide.image}
              alt="Hero Background"
              fill
              className="object-cover"
              priority={index === 0}
            />
            {/* Gradient Overlay for text readability (lightened so the photo shows through) */}
            <div className="absolute inset-0 bg-gradient-to-r from-teal-900/65 via-primary/35 to-cream/65" />
          </div>
        ))}
      </div>

      {/* Content with Fade & Slide Up Transition */}
      <div className="relative z-20 w-full max-w-5xl mx-auto px-4 pt-24 flex items-center justify-center min-h-[560px] md:min-h-[700px]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 flex flex-col items-center justify-center text-center transition-all duration-1000 ease-in-out transform px-4 ${
              index === currentSlide
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8 pointer-events-none"
            }`}
          >
            <p className="text-accent font-medium mb-4 tracking-wider uppercase text-sm md:text-base">
              {slide.tag}
            </p>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight max-w-4xl text-shadow-hero">
              {slide.title}
            </h1>
            <p className="text-lg md:text-2xl text-gray-100 mb-10 font-light max-w-2xl mx-auto text-shadow-hero">
              {slide.subtitle}
            </p>
            
            {/* Restored Original Button Layout */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
              <Link
                href="/about"
                className="bg-accent text-white px-8 py-3.5 rounded-full font-semibold hover:bg-amber-600 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/30 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Discover Our Story <ChevronRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="bg-white/10 backdrop-blur-sm text-white border border-white/30 px-8 py-3.5 rounded-full font-semibold hover:bg-white/20 transition-all flex items-center justify-center"
              >
                Contact Us
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? "w-8 bg-accent" : "w-2 bg-white/50 hover:bg-white"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}