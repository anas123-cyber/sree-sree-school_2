/**
 * Single source of truth for site-wide SEO / GEO / AEO data.
 *
 * ─────────────────────────────────────────────────────────────────────────
 *  👉 UPDATE THESE TWO BLOCKS WHEN YOU HAVE THE REAL VALUES, then redeploy.
 *     Everything else (meta tags, canonical URLs, sitemap, JSON-LD structured
 *     data, Open Graph, Twitter cards) reads from here automatically.
 * ─────────────────────────────────────────────────────────────────────────
 */

// 1) The live production URL — NO trailing slash. Used for canonical URLs,
//    sitemap, Open Graph image URLs and structured data @id's.
//    TODO: replace with your real domain once it is live.
export const SITE_URL = "https://www.sreesreeschool.com";

// 2) Real social profile URLs. These become the `sameAs` array in structured
//    data — a strong identity signal for Google and AI answer engines.
//    Leave a URL as "" (empty string) to omit it.
export const SOCIAL_LINKS = {
  facebook: "", // e.g. "https://www.facebook.com/sreesreeschool"
  instagram: "", // e.g. "https://www.instagram.com/sreesreeschool"
  youtube: "", // e.g. "https://www.youtube.com/@sreesreeschool"
  twitter: "", // e.g. "https://twitter.com/sreesreeschool"
};

// ── The rest is derived from facts already on the site. ───────────────────

export const SITE = {
  /** Legal / brand name */
  name: "Sree Sree Educational Society",
  /** Short name for app manifest / tight UI spots */
  shortName: "Sree Sree School",
  /** Common search alias people actually type */
  alternateName: "Sree Sree School Eluru",
  url: SITE_URL,
  /** Default share image (1200x630 recommended). Falls back to logo. */
  ogImage: "/Screenshot 2026-06-15 214520.png",
  logo: "/logo.jpg",
  foundingYear: "1987",
  description:
    "Sree Sree Educational Society is a holistic, values-based school in Eluru, Andhra Pradesh, established in 1987. We offer Primary, Middle and High School education with Yoga, Pranayama, sports and co-curricular programs.",
  /** Telephone in human and dial formats */
  phone: "08812-244084",
  phoneDial: "+918812244084",
  email: "sreesreeeducationsociety1987@gmail.com",
  address: {
    street: "Sriram Nagar, Sanivarapupeta",
    locality: "Eluru",
    region: "Andhra Pradesh",
    postalCode: "534003",
    country: "IN",
  },
  /** Approx campus coordinates for Eluru — refine from Google Business Profile. */
  geo: {
    latitude: 16.7107,
    longitude: 81.0952,
  },
  openingHours: "Mo-Sa 09:00-17:00",
  /** Default locale */
  locale: "en_IN",
} as const;

/** Build the full `sameAs` array, dropping any empty entries. */
export const sameAs = Object.values(SOCIAL_LINKS).filter(Boolean);

/** Absolute URL helper — pass a path like "/about" → full canonical URL. */
export function absoluteUrl(path = "/"): string {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
