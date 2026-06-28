/**
 * Per-page metadata builder for the Next.js App Router.
 *
 * Produces a complete Metadata object (canonical URL, Open Graph, Twitter
 * card) from a few inputs, so every page stays consistent.
 */

import type { Metadata } from "next";
import { SITE, absoluteUrl } from "./site";

type PageMetaInput = {
  title: string;
  description: string;
  /** Path WITHOUT domain, e.g. "/about". Drives the canonical URL. */
  path: string;
  /** Optional share image path (defaults to the site OG image). */
  image?: string;
  keywords?: string[];
  /** Set true for blog posts so Open Graph type is "article". */
  article?: boolean;
};

export function pageMetadata({
  title,
  description,
  path,
  image,
  keywords,
  article,
}: PageMetaInput): Metadata {
  const url = absoluteUrl(path);
  const ogImage = absoluteUrl(image ?? SITE.ogImage);

  return {
    title,
    description,
    ...(keywords?.length ? { keywords } : {}),
    alternates: { canonical: url },
    openGraph: {
      type: article ? "article" : "website",
      url,
      title,
      description,
      siteName: SITE.name,
      locale: SITE.locale,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}
