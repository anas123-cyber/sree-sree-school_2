import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Calendar, Clock, Tag, ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";
import { getPost, posts, type PostMeta } from "@/lib/posts";

/**
 * Shared shell for every blog post: breadcrumb + Article JSON-LD, a photo hero,
 * the styled article body (children), an author box and a conversion CTA, plus
 * "keep reading" links to the other posts (internal linking helps SEO).
 */
export default function ArticleLayout({
  slug,
  children,
}: {
  slug: string;
  children: React.ReactNode;
}) {
  const post = getPost(slug) as PostMeta;
  const related = posts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            title: post.title,
            description: post.description,
            slug: post.slug,
            image: post.image,
            datePublished: post.date,
            author: post.author,
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
        ]}
      />

      {/* Hero */}
      <article>
        <header className="relative h-[380px] sm:h-[460px] flex items-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/55 to-primary/30" />
          </div>
          <div className="relative z-10 max-w-3xl mx-auto px-4 pb-10 sm:pb-14 w-full">
            <nav className="flex flex-wrap items-center gap-2 text-accent text-sm mb-4" aria-label="Breadcrumb">
              <Link href="/" className="hover:underline">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/blog" className="hover:underline">Blog</Link>
            </nav>
            <span className="inline-flex items-center gap-1.5 bg-accent text-white text-xs font-bold px-3 py-1.5 rounded-full mb-4">
              <Tag className="w-3.5 h-3.5" />
              {post.category}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white leading-tight text-shadow-hero">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-5 text-gray-200 text-sm">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-accent" />
                {post.dateLabel}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-accent" />
                {post.readingTime}
              </span>
            </div>
          </div>
        </header>

        {/* Body */}
        <Reveal>
          <div className="max-w-3xl mx-auto px-4 py-12 sm:py-16">
            <p className="text-lg sm:text-xl text-gray-500 leading-relaxed mb-10 font-serif italic">
              {post.description}
            </p>

            <div className="article-body">{children}</div>

            {/* Author box */}
            <div className="mt-14 flex items-center gap-4 bg-cream rounded-2xl border border-gray-100 p-6">
              <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center text-white font-pragati font-bold text-xl flex-shrink-0">
                SS
              </div>
              <div>
                <p className="font-bold text-primary">{post.author}</p>
                <p className="text-sm text-gray-600">
                  Empowering excellence through education in Eluru since 1987.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10 bg-primary rounded-3xl p-8 sm:p-10 text-center relative overflow-hidden">
              <div className="glow-blob bg-accent/40 w-60 h-60 -top-10 -right-8" />
              <div className="relative z-10">
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-3">
                  Considering Sree Sree School for your child?
                </h2>
                <p className="text-gray-300 mb-6 max-w-xl mx-auto">
                  Admissions are open. Visit our campus in Eluru or book a call with our team to learn more.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link
                    href="/contact"
                    className="bg-accent text-white px-7 py-3 rounded-full font-semibold hover:bg-amber-600 transition-all inline-flex items-center justify-center gap-2"
                  >
                    Enquire about admissions <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href={`tel:${SITE.phoneDial}`}
                    className="bg-white/10 text-white border border-white/30 px-7 py-3 rounded-full font-semibold hover:bg-white/20 transition-all"
                  >
                    Call {SITE.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </article>

      {/* Keep reading */}
      <Reveal>
        <section className="max-w-5xl mx-auto px-4 pb-16 sm:pb-24">
          <h2 className="text-2xl font-serif font-bold text-primary mb-6">Keep reading</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {related.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group bg-white rounded-2xl border border-gray-100 overflow-hidden card-lift flex flex-col"
              >
                <div className="relative h-44">
                  <Image src={p.image} alt={p.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <span className="text-xs font-bold uppercase tracking-wide text-accent">{p.category}</span>
                  <h3 className="font-serif font-bold text-primary mt-1 leading-snug group-hover:text-accent transition-colors">
                    {p.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </Reveal>
    </>
  );
}
