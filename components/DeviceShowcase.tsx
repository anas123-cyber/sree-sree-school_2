"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";

/**
 * Campus-tour device showcase.
 *  - Desktop / tablet (md+): laptop frame.
 *  - Mobile: phone frame.
 *
 * Before interaction each screen shows a poster + play button. On click the
 * YouTube Short plays ONCE with its original sound (the click unlocks audio).
 * When it ends it returns to the poster, so replaying needs another click.
 */

// YouTube Short: https://www.youtube.com/shorts/sT2yLc3qPf8
const YT_ID = "sT2yLc3qPf8";

// Load the YouTube IFrame API once and resolve when it's ready.
let apiPromise: Promise<void> | null = null;
function loadYouTubeApi(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  const w = window as unknown as { YT?: { Player?: unknown }; onYouTubeIframeAPIReady?: () => void };
  if (w.YT && w.YT.Player) return Promise.resolve();
  if (apiPromise) return apiPromise;
  apiPromise = new Promise<void>((resolve) => {
    const prev = w.onYouTubeIframeAPIReady;
    w.onYouTubeIframeAPIReady = () => {
      prev?.();
      resolve();
    };
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.head.appendChild(tag);
  });
  return apiPromise;
}

function Screen({
  poster,
  posterAlt,
  contain = false,
}: {
  poster: string;
  posterAlt: string;
  contain?: boolean;
}) {
  const [active, setActive] = useState(false);
  const hostRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const playerRef = useRef<any>(null);

  useEffect(() => {
    if (!active) return;
    let cancelled = false;

    loadYouTubeApi().then(() => {
      if (cancelled || !hostRef.current) return;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const YT = (window as any).YT;
      playerRef.current = new YT.Player(hostRef.current, {
        videoId: YT_ID,
        host: "https://www.youtube-nocookie.com",
        playerVars: {
          autoplay: 1,
          controls: 1,
          rel: 0,
          playsinline: 1,
          modestbranding: 1,
        },
        events: {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onReady: (e: any) => e.target.playVideo(),
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onStateChange: (e: any) => {
            // 0 === YT.PlayerState.ENDED → back to the poster (play once)
            if (e.data === 0) setActive(false);
          },
        },
      });
    });

    return () => {
      cancelled = true;
      if (playerRef.current?.destroy) {
        playerRef.current.destroy();
        playerRef.current = null;
      }
    };
  }, [active]);

  if (active) {
    return (
      <div className="absolute inset-0 h-full w-full bg-black">
        <div ref={hostRef} className="h-full w-full" />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setActive(true)}
      className={`group/screen relative h-full w-full overflow-hidden ${contain ? "bg-cream" : "bg-black"}`}
      aria-label="Play campus tour with sound"
    >
      <Image
        src={poster}
        alt={posterAlt}
        fill
        className={contain ? "object-contain p-4 sm:p-5" : "object-cover animate-ken-burns"}
      />
      <span
        className={`pointer-events-none absolute inset-0 ${
          contain
            ? "bg-gradient-to-tr from-black/5 via-transparent to-black/5"
            : "bg-gradient-to-tr from-black/30 via-transparent to-black/10"
        }`}
      />
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform duration-300 group-hover/screen:scale-110">
          <Play className="ml-0.5 h-7 w-7 fill-accent text-accent" />
        </span>
      </span>
      <span className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full bg-black/55 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
        </span>
        Tap to play • sound on
      </span>
    </button>
  );
}

export default function DeviceShowcase() {
  return (
    <section className="relative overflow-hidden py-14 sm:py-20 px-4 bg-gradient-to-b from-white to-cream">
      <div className="glow-blob bg-accent/20 w-72 h-72 -top-10 -right-16" />
      <div className="glow-blob bg-blue-400/15 w-80 h-80 bottom-0 -left-16" style={{ animationDelay: "4s" }} />

      <div className="relative max-w-5xl mx-auto text-center">
        <div className="flex items-center justify-center gap-4 mb-3">
          <div className="h-px w-12 bg-accent" />
          <span className="text-accent font-bold uppercase tracking-wider text-sm">Campus Tour</span>
          <div className="h-px w-12 bg-accent" />
        </div>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-3">
          Step inside <span className="text-accent">Sree Sree</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Take a look at life on our campus — classrooms, labs, the playground and the moments that
          make learning here special. Tap the screen to play with sound.
        </p>

        {/* Laptop frame (desktop / tablet) — thin bezels */}
        <div className="hidden md:block">
          <div className="relative mx-auto w-full max-w-3xl">
            <div className="relative rounded-[0.9rem] border-[6px] border-slate-800 bg-slate-800 shadow-2xl">
              <div className="absolute top-1 left-1/2 z-20 h-1 w-12 -translate-x-1/2 rounded-full bg-slate-700" />
              <div className="relative aspect-video overflow-hidden rounded-[0.45rem]">
                <Screen poster="/logo.jpg" posterAlt="Sree Sree Educational Society logo" contain />
              </div>
            </div>
            {/* Laptop base */}
            <div className="relative mx-auto h-2.5 w-[112%] -translate-x-[5.4%] rounded-b-lg bg-gradient-to-b from-slate-700 to-slate-900 shadow-xl" />
            <div className="relative mx-auto -mt-px h-1.5 w-[40%] rounded-b-xl bg-slate-800" />
          </div>
        </div>

        {/* Phone frame (mobile) — thin bezels */}
        <div className="md:hidden">
          <div className="relative mx-auto w-[250px]">
            <div className="relative rounded-[2.2rem] border-[6px] border-slate-900 bg-slate-900 shadow-2xl">
              <div className="absolute top-1.5 left-1/2 z-20 h-4 w-20 -translate-x-1/2 rounded-full bg-slate-900" />
              <div className="relative aspect-[9/19] overflow-hidden rounded-[1.7rem]">
                <Screen poster="/logo.jpg" posterAlt="Sree Sree Educational Society logo" contain />
              </div>
              <div className="absolute -right-[8px] top-24 h-12 w-[3px] rounded-r bg-slate-700" />
              <div className="absolute -left-[8px] top-20 h-8 w-[3px] rounded-l bg-slate-700" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
