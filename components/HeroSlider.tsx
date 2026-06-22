"use client";

import { useState, useEffect, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

type Slide = {
  image?: string;        // single photo
  images?: string[];     // two photos shown side by side as one banner
  tag: string;
  title: ReactNode;
  subtitle: string;
};

const slides: Slide[] = [
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
  {
    images: ["/x.jpg", "/y.jpg"],
    tag: "Honours & Recognition",
    title: (
      <>
        Moments of <span className="text-accent">Pride</span>
      </>
    ),
    subtitle: "Celebrating the legacy of Sree Sree Educational Society",
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

  const active = slides[currentSlide];

  return (
    <section className="relative">
      {/* Full-photo banner — the whole image is always visible (no cropping or
          zooming) at its natural wide shape, just like the old website. */}
      <div className="relative w-full overflow-hidden bg-primary aspect-[5/2] md:aspect-[2.8/1]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {slide.images ? (
              // Two photos side by side as a single banner (kept side by side on
              // every screen size).
              <div className="flex h-full w-full">
                {slide.images.map((img, i) => (
                  <div key={i} className="relative h-full flex-1">
                    <Image
                      src={img}
                      alt={`Sree Sree Educational Society — slide ${index + 1} (${i + 1})`}
                      fill
                      sizes="50vw"
                      className="object-cover"
                      priority={index === 0}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <Image
                src={slide.image as string}
                alt={`Sree Sree Educational Society — slide ${index + 1}`}
                fill
                sizes="100vw"
                className="object-contain"
                priority={index === 0}
              />
            )}
          </div>
        ))}

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? "w-8 bg-accent" : "w-2 bg-white/70 hover:bg-white"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Caption band below the banner — headline, subtitle and buttons live
          here so the photo above stays full and uncovered. */}
      <div className="bg-gradient-to-b from-primary to-slate-800 text-white px-4 pt-10 pb-24 md:pb-28">
        <div key={currentSlide} className="max-w-3xl mx-auto text-center animate-fade-in-up">
          <p className="text-accent font-medium mb-3 tracking-wider uppercase text-sm md:text-base">
            {active.tag}
          </p>
          <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4 leading-tight">
            {active.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 font-light">
            {active.subtitle}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
    </section>
  );
}
