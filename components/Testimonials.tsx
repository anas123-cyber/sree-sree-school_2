"use client";

import { useState, useEffect } from "react";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "We've seen such a wonderful transformation in our child ever since she joined. She comes home every day excited to share what she's learned. The love, care, and dedication of the staff truly shine through. As parents, we feel confident and grateful knowing she's in such a nurturing environment.",
    name: "Priya M",
    role: "Parent",
  },
  {
    quote:
      "The teachers here treat every child like their own. My son has grown more confident, disciplined, and curious — and the balance of yoga, values, and strong academics makes all the difference. We couldn't have asked for a better foundation for his future.",
    name: "Ramesh K",
    role: "Parent",
  },
  {
    quote:
      "Choosing Sree Sree was the best decision for our family. The caring environment, dedicated educators, and genuine attention to each student's growth have exceeded all our expectations. Our daughter looks forward to school every single day.",
    name: "Anitha S",
    role: "Parent",
  },
];

const ROTATE_MS = 6000;

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  // Auto-advance; resets whenever `current` changes (incl. manual dot clicks)
  useEffect(() => {
    const timer = setTimeout(
      () => setCurrent((c) => (c + 1) % testimonials.length),
      ROTATE_MS
    );
    return () => clearTimeout(timer);
  }, [current]);

  const item = testimonials[current];

  return (
    <>
      <div className="bg-primary/40 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden">
        <Quote className="absolute top-6 left-6 w-16 h-16 text-accent/20" />

        {/* key forces a smooth fade-in on each slide change */}
        <div key={current} className="animate-fade-in">
          <p className="text-xl md:text-2xl font-serif italic leading-relaxed mb-8 relative z-10 min-h-[7rem] md:min-h-[8rem]">
            &ldquo;{item.quote}&rdquo;
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
            <div className="w-14 h-14 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center overflow-hidden">
              <div className="w-full h-full bg-gray-400" /> {/* Placeholder for avatar */}
            </div>
            <div className="text-left">
              <p className="font-bold text-lg">{item.name}</p>
              <p className="text-gray-400 text-sm">{item.role}</p>
            </div>
            <div className="flex gap-1 md:ml-auto">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-accent fill-accent" />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Clickable indicators */}
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Show testimonial ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current ? "w-8 bg-accent" : "w-2 bg-white/30 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </>
  );
}
