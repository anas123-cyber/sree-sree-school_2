import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Calendar, Clock, ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import TextReveal from "@/components/TextReveal";
import JsonLd from "@/components/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/site";
import { posts } from "@/lib/posts";

export const metadata = pageMetadata({
  title: "Blog — School Tips, Admissions & Parenting in Eluru",
  description:
    "Guides and stories from Sree Sree Educational Society, Eluru — how to choose a school, why holistic education matters, admissions advice and more for parents.",
  path: "/blog",
});

// Blog (CollectionPage) listing schema — helps engines understand the archive.
const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": `${SITE_URL}/blog#blog`,
  name: "Sree Sree Educational Society Blog",
  description:
    "Guides and stories on schooling, admissions and holistic education in Eluru.",
  url: `${SITE_URL}/blog`,
  blogPost: posts.map((p) => ({
    "@type": "BlogPosting",
    headline: p.title,
    description: p.description,
    url: `${SITE_URL}/blog/${p.slug}`,
    datePublished: p.date,
    image: `${SITE_URL}${p.image}`,
  })),
};

export default function BlogIndex() {
  const [featured, ...rest] = posts;

  return (
    <>
      <JsonLd
        data={[
          blogSchema,
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
          ]),
        ]}
      />

      {/* Hero */}
      <section className="relative bg-primary overflow-hidden">
        <div className="glow-blob bg-accent/30 w-80 h-80 -top-16 -left-10" />
        <div className="glow-blob bg-blue-500/20 w-80 h-80 -bottom-20 -right-10" style={{ animationDelay: "5s" }} />
        <div className="relative z-10 max-w-5xl mx-auto px-4 pt-28 pb-16 sm:pt-32 sm:pb-20 text-center">
          <nav className="flex items-center justify-center gap-2 text-accent text-sm mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:underline">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span>Blog</span>
          </nav>
          <TextReveal
            as="h1"
            text="The Sree Sree Blog"
            highlight={["Sree Sree"]}
            className="text-4xl md:text-5xl font-serif font-bold text-white mb-4"
          />
          <p className="text-gray-300 max-w-2xl mx-auto">
            Practical guides and stories on schooling, admissions and holistic education for parents in Eluru and beyond.
          </p>
        </div>
      </section>

      {/* Featured post */}
      <Reveal>
        <section className="max-w-6xl mx-auto px-4 -mt-10 relative z-20">
          <Link
            href={`/blog/${featured.slug}`}
            className="group grid md:grid-cols-2 bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100"
          >
            <div className="relative h-64 md:h-auto min-h-[260px]">
              <Image src={featured.image} alt={featured.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <span className="absolute top-4 left-4 bg-accent text-white text-xs font-bold px-3 py-1.5 rounded-full">
                Featured · {featured.category}
              </span>
            </div>
            <div className="p-8 sm:p-10 flex flex-col justify-center">
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-gray-500 text-sm mb-4">
                <span className="inline-flex items-center gap-1.5"><Calendar className="w-4 h-4 text-accent" />{featured.dateLabel}</span>
                <span className="inline-flex items-center gap-1.5"><Clock className="w-4 h-4 text-accent" />{featured.readingTime}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-primary leading-tight group-hover:text-accent transition-colors">
                {featured.title}
              </h2>
              <p className="text-gray-600 mt-4 leading-relaxed">{featured.description}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                Read article <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </Link>
        </section>
      </Reveal>

      {/* Rest of posts */}
      <Reveal>
        <section className="max-w-6xl mx-auto px-4 py-14 sm:py-20">
          <div className="grid sm:grid-cols-2 gap-8">
            {rest.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group bg-white rounded-2xl border border-gray-100 overflow-hidden card-lift flex flex-col"
              >
                <div className="relative h-52">
                  <Image src={p.image} alt={p.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  <span className="absolute top-4 left-4 bg-white/90 text-primary text-xs font-bold px-3 py-1.5 rounded-full">
                    {p.category}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-gray-500 text-xs mb-3">
                    <span className="inline-flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-accent" />{p.dateLabel}</span>
                    <span className="inline-flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-accent" />{p.readingTime}</span>
                  </div>
                  <h2 className="text-xl font-serif font-bold text-primary leading-snug group-hover:text-accent transition-colors">
                    {p.title}
                  </h2>
                  <p className="text-gray-600 text-sm mt-3 leading-relaxed flex-1">{p.description}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                    Read article <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </Reveal>
    </>
  );
}
