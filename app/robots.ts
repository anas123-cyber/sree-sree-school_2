import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

/**
 * robots.txt served at /robots.txt.
 *
 * Allows all reputable crawlers — including AI answer-engine crawlers
 * (GPTBot, OAI-SearchBot, PerplexityBot, Google-Extended, ClaudeBot) — so the
 * school can be discovered, cited and recommended by both search engines and
 * generative AI assistants. Points crawlers to the sitemap.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
