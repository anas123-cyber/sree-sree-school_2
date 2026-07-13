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
    slug: "sree-sree-school-admissions-guide",
    title: "How to Get Admission at Sree Sree School: A Simple Guide for Parents",
    description:
      "Thinking about admission for your child? Here's a warm, straightforward walkthrough of how admissions work at Sree Sree Educational Society in Eluru — what to bring, what to expect, and how to reach us.",
    date: "2026-06-24",
    dateLabel: "June 24, 2026",
    readingTime: "6 min read",
    image: "/IMG-20260618-WA0046.jpg",
    category: "Admissions",
    author: "Sree Sree Educational Society",
  },
  {
    slug: "best-school-with-ethics-in-eluru",
    title: "Looking for the Best School with Ethics in Eluru? Here's What to Look For",
    description:
      "\"Best school with ethics\" is easy to put on a banner and hard to live every day. Here's how we think about ethics and values at our school in Eluru — and what parents should actually look for.",
    date: "2026-06-26",
    dateLabel: "June 26, 2026",
    readingTime: "6 min read",
    image: "/IMG-20260615-WA0048.jpg",
    category: "Ethics & Values",
    author: "Sree Sree Educational Society",
  },
  {
    slug: "why-morning-yoga-belongs-in-school",
    title: "The Quiet Power of Morning Yoga in School",
    description:
      "What can twenty minutes of yoga and pranayama really do for a child? After years of starting our day this way, here's what we've watched it do — calmer minds, sharper focus, and kinder classrooms.",
    date: "2026-06-28",
    dateLabel: "June 28, 2026",
    readingTime: "5 min read",
    image: "/IMG-20260615-WA0046.jpg",
    category: "Wellbeing",
    author: "Sree Sree Educational Society",
  },
  {
    slug: "beyond-the-classroom-co-curricular-activities",
    title: "Chess, Karate and Robotics: Why Life Beyond the Classroom Matters",
    description:
      "The lessons that shape a child often happen outside the textbook. Here's why co-curricular activities — chess, karate, robotics, sports and the arts — are a real part of learning at Sree Sree, not an afterthought.",
    date: "2026-06-23",
    dateLabel: "June 23, 2026",
    readingTime: "5 min read",
    image: "/IMG-20260615-WA0064.jpg",
    category: "Beyond the Classroom",
    author: "Sree Sree Educational Society",
  },
  {
    slug: "a-day-in-the-life-at-sree-sree-school",
    title: "A Day in the Life at Sree Sree: From the Morning Bell to the Last Goodbye",
    description:
      "Ever wonder what a school day actually feels like for your child? Walk with us through one ordinary, wonderful day at Sree Sree Educational Society in Eluru.",
    date: "2026-06-27",
    dateLabel: "June 27, 2026",
    readingTime: "6 min read",
    image: "/IMG-20260614-WA0033.jpg",
    category: "School Life",
    author: "Sree Sree Educational Society",
  },
  {
    slug: "preparing-your-child-for-first-day-of-school",
    title: "Starting School: Gently Preparing Your Child for the First Day",
    description:
      "The first day of school is a big moment — for children and parents alike. Here are simple, kind ways to prepare your little one (and yourself) for a happy, confident start.",
    date: "2026-06-22",
    dateLabel: "June 22, 2026",
    readingTime: "5 min read",
    image: "/IMG-20260615-WA0057.jpg",
    category: "Early Years",
    author: "Sree Sree Educational Society",
  },
  {
    slug: "raising-honest-kind-children",
    title: "Raising Honest, Kind Kids: Small Habits That Matter More Than You Think",
    description:
      "Good character isn't built in one big lesson — it grows in small, everyday moments. Here are the simple habits we lean on, at school and at home, to raise honest, kind and confident children.",
    date: "2026-06-29",
    dateLabel: "June 29, 2026",
    readingTime: "6 min read",
    image: "/IMG-20260615-WA0049.jpg",
    category: "Parenting & Values",
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
