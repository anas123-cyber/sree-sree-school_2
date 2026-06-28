/**
 * Blog post registry — metadata only.
 *
 * Drives the /blog index list and the sitemap. Each post's full content lives
 * in its own route at app/blog/<slug>/page.tsx (hand-authored for full control
 * over formatting and structured data).
 *
 * Keep `slug` in sync with the folder name under app/blog/.
 */

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  /** ISO date (YYYY-MM-DD) */
  date: string;
  /** Human-friendly date for display */
  dateLabel: string;
  /** Reading time, e.g. "6 min read" */
  readingTime: string;
  /** Cover image path under /public */
  image: string;
  /** Category tag shown on cards */
  category: string;
  author: string;
};

export const posts: PostMeta[] = [
  {
    slug: "how-to-choose-the-best-school-in-eluru",
    title: "How to Choose the Best School in Eluru: A Parent's 2026 Guide",
    description:
      "Choosing the right school in Eluru? Here are the 10 factors every parent should weigh — from academics and safety to values, facilities and fees — and how to decide with confidence.",
    date: "2026-06-15",
    dateLabel: "June 15, 2026",
    readingTime: "8 min read",
    image: "/IMG-20260615-WA0047.jpg",
    category: "Admissions Guide",
    author: "Sree Sree Educational Society",
  },
  {
    slug: "why-holistic-education-matters",
    title: "Why Holistic Education Matters More Than Marks",
    description:
      "Holistic education develops the whole child — mind, body and character. Here's what it means, why Yoga and values belong in school, and how it shapes confident, future-ready students.",
    date: "2026-06-20",
    dateLabel: "June 20, 2026",
    readingTime: "7 min read",
    image: "/IMG-20260615-WA0061.jpg",
    category: "Learning & Values",
    author: "Sree Sree Educational Society",
  },
  {
    slug: "38-years-of-educational-excellence-in-eluru",
    title: "38 Years of Educational Excellence in Eluru: The Sree Sree Story",
    description:
      "From a small language academy in 1987 to a trusted school for 10,000+ students — the story of Sree Sree Educational Society and the values that built a 38-year legacy in Eluru.",
    date: "2026-06-25",
    dateLabel: "June 25, 2026",
    readingTime: "6 min read",
    image: "/IMG-20260615-WA0051.jpg",
    category: "Our Story",
    author: "Sree Sree Educational Society",
  },
];

export function getPost(slug: string): PostMeta | undefined {
  return posts.find((p) => p.slug === slug);
}
