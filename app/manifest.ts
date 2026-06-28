import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

/**
 * Web app manifest served at /manifest.webmanifest.
 * Improves mobile/PWA presentation and is a positive signal for mobile SEO.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.name,
    short_name: SITE.shortName,
    description: SITE.description,
    start_url: "/",
    display: "standalone",
    background_color: "#FAFAF9",
    theme_color: "#1e293b",
    icons: [
      {
        src: "/logo.jpg",
        sizes: "any",
        type: "image/jpeg",
      },
    ],
  };
}
