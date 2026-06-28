import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { posts } from "@/lib/posts";

/**
 * Dynamic XML sitemap served at /sitemap.xml.
 * Next.js generates the XML from this data automatically.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Static routes with priority hints (home highest, then key conversion pages).
  const routes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" },
    { path: "/about", priority: 0.9, changeFrequency: "monthly" },
    { path: "/academics", priority: 0.9, changeFrequency: "monthly" },
    { path: "/programs", priority: 0.8, changeFrequency: "monthly" },
    { path: "/specifications", priority: 0.7, changeFrequency: "monthly" },
    { path: "/achievements", priority: 0.7, changeFrequency: "monthly" },
    { path: "/gallery", priority: 0.6, changeFrequency: "monthly" },
    { path: "/videos", priority: 0.6, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.9, changeFrequency: "yearly" },
    { path: "/blog", priority: 0.8, changeFrequency: "weekly" },
  ];

  const staticEntries: MetadataRoute.Sitemap = routes.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  const blogEntries: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${SITE_URL}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticEntries, ...blogEntries];
}
