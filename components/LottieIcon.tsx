"use client";

import { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";

/**
 * Lightweight Lottie wrapper that lazy-fetches a themed animation JSON from
 * /public/lottie and only starts playing once it scrolls into view. Animations
 * are tinted with the brand palette (amber / blue / navy / red) so they match
 * the rest of the site.
 */
export default function LottieIcon({
  src,
  className = "",
  loop = true,
}: {
  src: string;
  className?: string;
  loop?: boolean;
}) {
  const [data, setData] = useState<unknown>(null);
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let active = true;
    fetch(src)
      .then((r) => r.json())
      .then((json) => {
        if (active) setData(json);
      })
      .catch(() => {});
    return () => {
      active = false;
    };
  }, [src]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={className}>
      {data && inView ? (
        <Lottie animationData={data as object} loop={loop} className="w-full h-full" />
      ) : null}
    </div>
  );
}
