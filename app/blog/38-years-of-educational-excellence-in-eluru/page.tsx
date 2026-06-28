import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import { pageMetadata } from "@/lib/metadata";
import { getPost } from "@/lib/posts";

const post = getPost("38-years-of-educational-excellence-in-eluru")!;

export const metadata = pageMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${post.slug}`,
  image: post.image,
  article: true,
  keywords: [
    "Sree Sree Educational Society",
    "Sree Sree School Eluru history",
    "oldest school in Eluru",
    "trusted school Eluru",
    "Dr M.B.S. Sarma",
    "schools in Eluru Andhra Pradesh",
  ],
});

export default function Page() {
  return (
    <ArticleLayout slug={post.slug}>
      <p>
        Every great institution begins with a single conviction. For Sree Sree
        Educational Society, that conviction — that education should build{" "}
        <strong>character as much as competence</strong> — has guided us for more than
        38 years. This is the story of how a small language academy in Eluru grew into a
        school trusted by generations of families.
      </p>

      <h2>1987: A vision takes root</h2>
      <p>
        It began in 1987, when <strong>Dr. M.B.S. Sarma</strong> founded{" "}
        <em>Sree Sree Academy of Languages</em> in Eluru with a simple but ambitious aim:
        to deliver quality education rooted in strong values. A scholar with degrees in
        Yoga Spiritual Science and English, Dr. Sarma believed that real education must
        nurture the mind, the body and the spirit together — a philosophy that still
        defines the school today.
      </p>

      <h2>1989: The Society is established</h2>
      <p>
        Two years later, in 1989, that vision was formalised with the registration of{" "}
        <strong>Sree Sree Educational Society</strong>. This laid the foundation for a
        legacy of academic distinction and holistic development — and the structure that
        would let the institution grow well beyond its language-academy beginnings.
      </p>

      <h2>Growing into a full school</h2>
      <p>
        Over the following years, the Society expanded into a complete school, adding
        primary and high school programs supported by modern facilities — bright
        classrooms, a computer lab, science labs and a spacious playground. You can
        explore these <Link href="/specifications">facilities here</Link>. With every
        addition, the founding commitment to values-based, all-round education stayed at
        the centre.
      </p>

      <h2>Three decades of trust</h2>
      <p>
        Numbers only tell part of the story, but they speak to the trust Eluru families
        have placed in us:
      </p>
      <ul>
        <li><strong>38+ years</strong> of continuous service to the community since 1987.</li>
        <li><strong>10,000+ students</strong> educated and guided into the world.</li>
        <li><strong>100+ dedicated educators</strong> who make learning come alive.</li>
        <li><strong>50+ awards and honours</strong> recognising sustained excellence.</li>
      </ul>
      <p>
        See more on our <Link href="/achievements">achievements</Link> page.
      </p>

      <h2>What has stayed the same</h2>
      <p>
        The world has changed enormously since 1987 — but the heart of Sree Sree has not.
        We still believe that the best education balances academics with discipline,
        values and creative expression. We still begin the day with{" "}
        <Link href="/academics">Yoga and Pranayama</Link>. And we still treat every child
        as an individual with their own gifts to discover.
      </p>
      <blockquote>
        &ldquo;Empowering Excellence through Education&rdquo; is more than a motto — it is
        the standard we have held ourselves to for nearly four decades.
      </blockquote>

      <h2>Looking ahead</h2>
      <p>
        As we move forward, Sree Sree continues to add modern programs — from{" "}
        <Link href="/programs">robotics and AI to chess and karate</Link> — while staying
        anchored to the values that built our reputation. The goal remains exactly what it
        was on day one: to prepare confident, capable, good-hearted young people for life.
      </p>

      <h2>Be part of the next chapter</h2>
      <p>
        For 38 years, families across Eluru have made Sree Sree part of their story. If
        you would like your child to be part of the next chapter, admissions are open.{" "}
        <Link href="/contact">Visit our campus or send an enquiry</Link> — we&rsquo;d love
        to welcome you.
      </p>
    </ArticleLayout>
  );
}
