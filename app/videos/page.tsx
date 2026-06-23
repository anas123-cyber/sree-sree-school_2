"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Play, X, ChevronLeft } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import Reveal from "@/components/Reveal";

// NOTE: these are placeholder sample videos — replace the `video` URLs with your own.
const videoItems = [
  { id: 1, category: "Events", title: "Annual Day", video: "https://youtu.be/dH7ULHO7O2g?si=tBYtJvUrCbG_C549", color: "bg-red-500" },
  { id: 2, category: "Cultural", title: "Cultural Fest", video: "https://youtu.be/x0VPRgV65qg?si=2yY3WJqXRu5GqtS4", color: "bg-yellow-500" },
  { id: 3, category: "Sports", title: "Sports Meet", video: "https://youtu.be/gbfZPcTt4fo?si=jJOyqzciZna_eqtg", color: "bg-pink-500" },
  { id: 4, category: "Academics", title: "Science Exhibition", video: "https://youtu.be/IOm9prbr_JE?si=AwbxNukC6KJRk5DH", color: "bg-green-500" },
  { id: 5, category: "Events", title: "Independence Day", video: "https://youtu.be/HFxya8esboc?si=tAZYzPHlnQxRzVFV", color: "bg-blue-500" },
  { id: 6, category: "Cultural", title: "Dance Programme", video: "https://youtu.be/BfzHwTGBJG4?si=Ow4hM7Q7fgPeu6MV", color: "bg-purple-500" },
  { id: 7, category: "Academics", title: "Classroom Activities", video: "https://youtu.be/Dsnh2-aJNKw?si=M2f2wrEAMm4WVYt0", color: "bg-indigo-500" },
  { id: 8, category: "Leadership", title: "Felicitation", video: "https://youtu.be/Wt20WmT2Nas?si=EPjjslas4GlLrxRz", color: "bg-gray-600" },
];

const categories = ["All", "Events", "Cultural", "Academics", "Sports", "Leadership"];

// Returns the YouTube video id for any youtube.com / youtu.be / shorts / embed
// link, or null if the url is a normal video file (e.g. an .mp4).
function youTubeId(url: string): string | null {
  const m = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/))([\w-]{11})/);
  return m ? m[1] : null;
}

export default function Videos() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = activeCategory === "All"
    ? videoItems
    : videoItems.filter(item => item.category === activeCategory);

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
            alt="Videos"
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
            <span>Videos</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 text-shadow-hero">Videos</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A glimpse into life at Sree Sree — events, celebrations, achievements, and everyday moments.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 px-4 border-b border-gray-200 bg-white">
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

      {/* Video Grid */}
      <Reveal>
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            {/* Rectangular video frames, 3 per row, shrinking with the width —
                see .video-grid in globals.css */}
            <div className="video-grid">
              {filteredItems.map((item, index) => {
                const ytId = youTubeId(item.video);
                return (
                <Reveal key={item.id} delay={index * 50}>
                  <button
                    type="button"
                    onClick={() => setLightboxIndex(index)}
                    aria-label={`Play ${item.title}`}
                    className="group relative rounded-xl overflow-hidden shadow-md cursor-pointer h-full w-full text-left card-lift focus-visible:ring-2 focus-visible:ring-accent bg-gray-900"
                  >
                <div className="aspect-[516/281] relative">
                  {ytId ? (
                    // YouTube thumbnail
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      src={`https://img.youtube.com/vi/${ytId}/hqdefault.jpg`}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    // direct video file — preload a frame as the thumbnail
                    <video
                      src={`${item.video}#t=0.5`}
                      muted
                      playsInline
                      preload="metadata"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {/* Play indicator (always visible so it reads as a video) */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group-hover:bg-accent group-hover:scale-110">
                      <Play className="w-6 h-6 text-white ml-0.5" />
                    </div>
                  </div>
                </div>
              </button>
                </Reveal>
                );
              })}
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
            aria-label="Previous video"
            className="absolute left-3 md:left-6 z-10 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-accent text-white flex items-center justify-center transition-all hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); showNext(); }}
            aria-label="Next video"
            className="absolute right-3 md:right-6 z-10 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-accent text-white flex items-center justify-center transition-all hover:scale-110"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Video + caption */}
          <div
            className="relative w-full max-w-4xl animate-zoom-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl bg-black">
              {youTubeId(activeItem.video) ? (
                <iframe
                  key={activeItem.video}
                  src={`https://www.youtube.com/embed/${youTubeId(activeItem.video)}?autoplay=1&rel=0`}
                  title={activeItem.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              ) : (
                <video
                  key={activeItem.video}
                  src={activeItem.video}
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                />
              )}
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
