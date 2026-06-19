"use client";

import { useEffect, useRef, useState } from "react";

type Tag = "h1" | "h2" | "h3" | "p" | "span";

/**
 * Animated text revelation. Splits the text into words and lets each word rise
 * and fade into place with a staggered delay once the element scrolls into view.
 * Use it on headings/taglines across the site for a polished entrance effect.
 *
 * Pass `highlight` to render those words in the brand accent colour.
 */
export default function TextReveal({
  text,
  as = "h2",
  className = "",
  highlight = [],
  stagger = 55,
  startDelay = 0,
}: {
  text: string;
  as?: Tag;
  className?: string;
  highlight?: string[];
  stagger?: number;
  startDelay?: number;
}) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const words = text.split(" ");
  const normalized = highlight.map((w) => w.toLowerCase().replace(/[.,]/g, ""));
  const Tag = as as React.ElementType;

  return (
    <Tag ref={ref} className={className} aria-label={text}>
      {words.map((word, i) => {
        const isHighlight = normalized.includes(
          word.toLowerCase().replace(/[.,]/g, "")
        );
        return (
          <span
            key={i}
            className="inline-block overflow-hidden align-bottom mr-[0.26em] last:mr-0"
          >
            <span
              aria-hidden="true"
              className={`inline-block will-change-transform transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                isHighlight ? "text-accent" : ""
              } ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-[110%]"
              }`}
              style={{ transitionDelay: `${startDelay + i * stagger}ms` }}
            >
              {word}
            </span>
          </span>
        );
      })}
    </Tag>
  );
}
