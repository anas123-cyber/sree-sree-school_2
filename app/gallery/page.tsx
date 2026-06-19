"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Camera, X, ChevronLeft } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import Reveal from "@/components/Reveal";

const galleryItems = [
  { id: 1, category: "Events", title: "School Event", image: "/IMG-20260615-WA0046.jpg", color: "bg-red-500" },
  { id: 2, category: "Cultural", title: "Cultural Day", image: "/1000228461.jpg", color: "bg-yellow-500" },
  { id: 3, category: "Events", title: "Annual Celebration", image: "/IMG-20260615-WA0051.jpg", color: "bg-pink-500" },
  { id: 4, category: "Academics", title: "Academic Honors", image: "/1000228468.jpg", color: "bg-green-500" },
  { id: 5, category: "Cultural", title: "Independence Day", image: "/1000228463.jpg", color: "bg-blue-500" },
  { id: 6, category: "Academics", title: "Primary School Activities", image: "/IMG-20260615-WA0057.jpg", color: "bg-purple-500" },
  { id: 7, category: "Academics", title: "Middle School Awards", image: "/1000228455.jpg", color: "bg-indigo-500" },
  { id: 8, category: "Sports", title: "High School Parade", image: "/1000228489.jpg", color: "bg-orange-500" },
  { id: 9, category: "Academics", title: "Academic Excellence", image: "/IMG-20260615-WA0061.jpg", color: "bg-teal-500" },
  { id: 10, category: "Leadership", title: "Dr. M.B.S. Sarma", image: "/1000228469.jpg", color: "bg-gray-600" },
  { id: 11, category: "Leadership", title: "Guest", image: "/1000228470.jpg", color: "bg-gray-600" },
  { id: 12, category: "Leadership", title: "Special Guest", image: "/1000228467.jpg", color: "bg-gray-600" },
  { id: 13, category: "Leadership", title: "Special Guest", image: "/Screenshot 2026-06-15 214520.png", color: "bg-gray-600" },
   {id: 14, category: "Leadership", title: "Special Guest", image: "/IMG-20260615-WA0048.jpg", color: "bg-gray-600" },
   {id: 15, category: "Leadership", title: "Special Guest", image: "/IMG-20260615-WA0060.jpg", color: "bg-gray-600" },
];

const categories = ["All", "Events", "Cultural", "Academics", "Sports", "Leadership"];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const showPrev = useCallback(
    () => setLightboxIndex((i) => (i === null ? i : (i - 1 + filteredItems.length) % filteredItems.length)),
    [filteredItems.length]
  );
  const showNext = useCallback(
    () => setLightboxIndex((i) => (i === null ? i : (i + 1) % filteredItems.length)),
    [filteredItems.length]
  );

  // Keyboard navigation + body scroll lock while the lightbox is open
  useEffect(() => {
    if (lightboxIndex === null) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightboxIndex, closeLightbox, showPrev, showNext]);

  const activeItem = lightboxIndex === null ? null : filteredItems[lightboxIndex];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[320px] sm:h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/1000228463.jpg"
            alt="Gallery"
            fill
            className="object-cover object-top animate-ken-burns"
            priority
          />
          <div className="absolute inset-0 bg-primary/50" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/45 via-primary/20 to-primary/55" />
        </div>
        <div className="relative z-10 text-center px-4 animate-fade-in-up">
          <div className="flex items-center justify-center gap-2 text-accent text-sm mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span>Gallery</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 text-shadow-hero">Gallery</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A glimpse into life at Sree Sree — events, celebrations, achievements, and everyday moments.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 px-4 border-b border-gray-200 bg-white sticky top-20 z-40">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => { setActiveCategory(category); setLightboxIndex(null); }}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-accent text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <Reveal>
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item, index) => (
                <Reveal key={item.id} delay={index * 50}>
                  <button
                    type="button"
                    onClick={() => setLightboxIndex(index)}
                    aria-label={`View ${item.title}`}
                    className="group relative rounded-xl overflow-hidden shadow-md cursor-pointer h-full w-full text-left card-lift focus-visible:ring-2 focus-visible:ring-accent"
                  >
                <div className="aspect-[4/3] relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className={`inline-block ${item.color} text-white text-xs font-bold px-2 py-1 rounded mb-2`}>
                    {item.category.toUpperCase()}
                  </span>
                  <h3 className="text-white font-bold text-lg">{item.title}</h3>
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                  <Camera className="w-5 h-5 text-white" />
                </div>
              </button>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* Lightbox */}
      {activeItem && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm animate-fade-in p-4"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.title}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            aria-label="Close"
            className="absolute top-5 right-5 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all hover:scale-110"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); showPrev(); }}
            aria-label="Previous image"
            className="absolute left-3 md:left-6 z-10 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-accent text-white flex items-center justify-center transition-all hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); showNext(); }}
            aria-label="Next image"
            className="absolute right-3 md:right-6 z-10 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-accent text-white flex items-center justify-center transition-all hover:scale-110"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image + caption */}
          <div
            className="relative w-full max-w-4xl animate-zoom-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[60vh] md:h-[72vh] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src={activeItem.image}
                alt={activeItem.title}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 896px"
              />
            </div>
            <div className="mt-4 text-center">
              <span className={`inline-block ${activeItem.color} text-white text-xs font-bold px-2.5 py-1 rounded mb-2`}>
                {activeItem.category.toUpperCase()}
              </span>
              <h3 className="text-white font-serif font-bold text-xl">{activeItem.title}</h3>
              <p className="text-gray-400 text-sm mt-1">
                {(lightboxIndex ?? 0) + 1} / {filteredItems.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}