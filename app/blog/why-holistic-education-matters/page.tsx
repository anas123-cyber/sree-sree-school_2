import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import { pageMetadata } from "@/lib/metadata";
import { getPost } from "@/lib/posts";

const post = getPost("why-holistic-education-matters")!;

export const metadata = pageMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${post.slug}`,
  image: post.image,
  article: true,
  keywords: [
    "holistic education",
    "what is holistic education",
    "value based education",
    "yoga in schools",
    "holistic school in Eluru",
    "all round development of child",
  ],
});

export default function Page() {
  return (
    <ArticleLayout slug={post.slug}>
      <p>
        Ask any parent what they want for their child and very few will say
        &ldquo;just good marks.&rdquo; They want a confident, kind, capable young
        person who can think for themselves and handle whatever life brings. That is
        exactly what <strong>holistic education</strong> is designed to nurture — and
        it is why it matters far more than any single report card.
      </p>

      <h2>What is holistic education?</h2>
      <p>
        Holistic education is an approach that develops the <strong>whole child</strong> —
        intellectually, physically, emotionally, socially and ethically — rather than
        focusing on academic results alone. Instead of treating a child as a brain to be
        filled with facts, it treats them as a complete person with a body, a heart and a
        character that all need to grow together.
      </p>
      <p>
        In practice, that means a school day where mathematics and science sit alongside
        sports, art, music, meditation, teamwork and lessons in honesty and responsibility
        — each reinforcing the others.
      </p>

      <h2>Why does holistic education matter more than marks?</h2>
      <p>
        Marks measure one thing at one moment. The skills that actually determine a
        child&rsquo;s future — focus, resilience, communication, creativity, empathy and
        self-discipline — rarely show up on an exam. Holistic education builds these
        deliberately, so that strong academics are supported by an even stronger
        foundation of character.
      </p>
      <blockquote>
        A student who can score well <em>and</em> stay calm under pressure, work in a
        team, and treat others with respect is far better prepared for life than one who
        can only do the first.
      </blockquote>

      <h2>The five pillars of holistic development</h2>
      <ul>
        <li>
          <strong>Intellectual:</strong> curiosity, critical thinking and a genuine love
          of learning — not just memorisation.
        </li>
        <li>
          <strong>Physical:</strong> sports, play and yoga that build health, energy and
          coordination.
        </li>
        <li>
          <strong>Emotional:</strong> self-awareness, calm and confidence to handle
          setbacks and stress.
        </li>
        <li>
          <strong>Social:</strong> teamwork, communication and empathy developed through
          group activities and clubs.
        </li>
        <li>
          <strong>Ethical:</strong> honesty, discipline and a sense of responsibility
          toward others and society.
        </li>
      </ul>

      <h2>Why Yoga and Pranayama belong in school</h2>
      <p>
        One of the simplest, most powerful tools for holistic growth is also one of the
        oldest. Daily <strong>Yoga and Pranayama</strong> (breathing practice) help
        children improve concentration, manage stress, sleep better and build physical
        flexibility and strength. A few calm, focused minutes each morning can transform
        how a child shows up for the rest of the day.
      </p>
      <p>
        At Sree Sree Educational Society, Yoga and Pranayama are a daily part of school
        life — a habit we believe pays dividends well beyond the classroom. You can read
        more about our approach on the <Link href="/academics">Academics</Link> page.
      </p>

      <h2>How co-curricular activities complete the picture</h2>
      <p>
        Robotics and coding spark problem-solving. Chess sharpens strategy and patience.
        Karate builds discipline and self-confidence. Sports teach teamwork and
        resilience. Each <Link href="/programs">co-curricular activity</Link> develops a
        different muscle — and together they shape a well-rounded, capable young person.
      </p>

      <h2>What parents can look for in a holistic school</h2>
      <ul>
        <li>Is character and values education a timetabled part of the week?</li>
        <li>Do all children get to play sports and join activities — not just a few?</li>
        <li>Are mindfulness, yoga or quiet reflection built into the day?</li>
        <li>Do teachers know each child as a person, not just a roll number?</li>
        <li>Is success defined more broadly than exam ranks alone?</li>
      </ul>

      <h2>The Sree Sree approach</h2>
      <p>
        For more than three decades, Sree Sree Educational Society in Eluru has built its
        identity around exactly this balance: strong academics, daily yoga, sports,
        creative arts and a deep commitment to values. We believe the goal of education is
        not just to help a child pass — but to help a child <strong>flourish</strong>.
      </p>
      <p>
        If that vision resonates with you, we&rsquo;d love to show you how it works in
        practice. <Link href="/contact">Get in touch or visit our campus</Link> to learn
        more.
      </p>
    </ArticleLayout>
  );
}
