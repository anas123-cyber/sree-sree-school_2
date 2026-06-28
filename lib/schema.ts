/**
 * JSON-LD structured data builders (Schema.org).
 *
 * These power both classic SEO (Google rich results) and AEO/GEO — answer
 * engines like ChatGPT, Perplexity, Gemini and Google's AI Overviews lean
 * heavily on structured data to extract facts and cite sources.
 *
 * All builders return plain objects; render them with <JsonLd> (see
 * components/JsonLd.tsx).
 */

import { SITE, SITE_URL, absoluteUrl, sameAs } from "./site";

const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

/** The school as an EducationalOrganization + its physical place. */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["EducationalOrganization", "School", "LocalBusiness"],
    "@id": ORG_ID,
    name: SITE.name,
    alternateName: SITE.alternateName,
    url: SITE_URL,
    logo: absoluteUrl(SITE.logo),
    image: absoluteUrl(SITE.ogImage),
    description: SITE.description,
    foundingDate: SITE.foundingYear,
    founder: {
      "@type": "Person",
      name: "Dr. M.B.S. Sarma",
      jobTitle: "Founder & Chairman",
    },
    slogan: "Empowering Excellence through Education",
    email: SITE.email,
    telephone: SITE.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.locality,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.latitude,
      longitude: SITE.geo.longitude,
    },
    hasMap: `https://maps.google.com/maps?q=${encodeURIComponent(
      `${SITE.name}, ${SITE.address.street}, ${SITE.address.locality}, ${SITE.address.region} ${SITE.address.postalCode}`
    )}`,
    openingHours: SITE.openingHours,
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "17:00",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE.phone,
      contactType: "admissions",
      email: SITE.email,
      areaServed: "IN",
      availableLanguage: ["en", "te", "hi"],
    },
    areaServed: {
      "@type": "City",
      name: "Eluru",
    },
    // Programs offered — helps answer engines describe what the school teaches.
    department: [
      { "@type": "EducationalOrganization", name: "Primary School (Grade I–V)" },
      { "@type": "EducationalOrganization", name: "High School (Grade VI–X)" },
    ],
    ...(sameAs.length ? { sameAs } : {}),
  };
}

/** Site-level entity with a search action (enables a sitelinks search box). */
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name: SITE.name,
    alternateName: SITE.alternateName,
    description: SITE.description,
    publisher: { "@id": ORG_ID },
    inLanguage: "en-IN",
  };
}

/** Per-page breadcrumb trail. Pass [{name, path}] from home → current page. */
export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

/** FAQPage — the core of AEO. Each Q/A can win a featured snippet / be quoted
 *  verbatim by an AI assistant. */
export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

/** BlogPosting / Article for blog content. */
export function articleSchema(opts: {
  title: string;
  description: string;
  slug: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
}) {
  const url = absoluteUrl(`/blog/${opts.slug}`);
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    headline: opts.title,
    description: opts.description,
    image: absoluteUrl(opts.image),
    datePublished: opts.datePublished,
    dateModified: opts.dateModified ?? opts.datePublished,
    author: {
      "@type": "Organization",
      name: opts.author ?? SITE.name,
      url: SITE_URL,
    },
    publisher: { "@id": ORG_ID },
    isPartOf: { "@id": WEBSITE_ID },
    inLanguage: "en-IN",
  };
}

/** A simple WebPage node — useful default for content pages. */
export function webPageSchema(opts: {
  title: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${absoluteUrl(opts.path)}#webpage`,
    url: absoluteUrl(opts.path),
    name: opts.title,
    description: opts.description,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
    inLanguage: "en-IN",
  };
}
