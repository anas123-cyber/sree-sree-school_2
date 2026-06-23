"use client";

import { useEffect, useRef, useState } from "react";

export default function Reveal({ 
  children, 
  className = "", 
  delay = 0 
}: { 
  children: React.ReactNode; 
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let done = false;
    const show = () => {
      if (done) return;
      done = true;
      setTimeout(() => setIsVisible(true), delay);
    };

    // True when the element overlaps (or has been scrolled past) the viewport.
    const inView = () => {
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const r = el.getBoundingClientRect();
      return r.top < vh && r.bottom > 0;
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          show();
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    observer.observe(el);

    // Reveal immediately if it's already on screen at mount. The
    // IntersectionObserver can miss this initial state when the page is opened
    // while already in view (e.g. with devtools open), which previously left
    // content stuck invisible until the next scroll/resize. Re-checked across a
    // couple of frames + a short timeout so it works even before layout settles.
    if (inView()) show();
    const raf = requestAnimationFrame(() => { if (inView()) show(); });
    const timer = setTimeout(() => { if (inView()) show(); }, 250);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
      clearTimeout(timer);
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] transform will-change-transform ${
        isVisible
          ? "opacity-100 translate-y-0 blur-0"
          : "opacity-0 translate-y-10 blur-[6px]"
      } ${className}`}
    >
      {children}
    </div>
  );
}