import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import { pageMetadata } from "@/lib/metadata";
import { getPost } from "@/lib/posts";

const post = getPost("why-morning-yoga-belongs-in-school")!;

export const metadata = pageMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${post.slug}`,
  image: post.image,
  article: true,
  keywords: [
    "yoga in schools",
    "pranayama for children",
    "benefits of yoga for students",
    "morning yoga school",
    "mindfulness in school",
    "holistic school in Eluru",
  ],
});

export default function Page() {
  return (
    <ArticleLayout slug={post.slug}>
      <p>
        If you walked into our school a little before the first class, you might be
        surprised by how quiet it is. Not the tense quiet of an exam hall — the settled
        kind. Rows of children sitting cross-legged, eyes closed, breathing slowly in and
        out together. For about twenty minutes, before a single textbook is opened, we
        simply breathe.
      </p>
      <p>
        Some visitors ask us, gently, whether that isn&rsquo;t twenty minutes we could
        spend on the syllabus. It&rsquo;s a fair question. Here&rsquo;s our honest answer:
        those twenty minutes make the other five hours work.
      </p>

      <h2>What breathing actually does for a child</h2>
      <p>
        Children arrive at school carrying a lot — a rushed breakfast, a scolding in the
        auto, worry about a test, the general electricity of being young. You can&rsquo;t
        teach a mind that&rsquo;s still buzzing. Pranayama, the practice of slow, conscious
        breathing, is a remarkably simple way to let that buzz settle.
      </p>
      <p>
        We&rsquo;re not making grand claims. We just watch what happens. After yoga, the
        children walk into class a little calmer, a little more present. Hands stop
        fidgeting. Eyes focus. The morning&rsquo;s first lesson lands on soil that&rsquo;s
        actually ready to receive it.
      </p>

      <h2>A boy who couldn&rsquo;t sit still</h2>
      <p>
        A few years ago we had a bright, restless boy — the kind who was always half out
        of his chair, always talking. His parents were at their wits&rsquo; end. Nothing
        we tried in the classroom held him for long.
      </p>
      <p>
        What eventually helped wasn&rsquo;t a stricter rule. It was the morning breathing.
        Slowly, over weeks, he learned that he could feel that restless energy rising and
        let it out with a long exhale instead of a shout. He didn&rsquo;t become a quiet
        child — we wouldn&rsquo;t have wanted that. He became a boy who could choose when to
        be still. That is a gift that outlasts any school.
      </p>
      <blockquote>
        We&rsquo;re not trying to make children calm so they&rsquo;re easier to manage.
        We&rsquo;re teaching them to manage themselves — a skill they&rsquo;ll use long
        after they&rsquo;ve forgotten their timetables.
      </blockquote>

      <h2>Calm children are kinder children</h2>
      <p>
        Here&rsquo;s the part we didn&rsquo;t expect when we began. The biggest change
        wasn&rsquo;t in test scores — though focus certainly helps those. It was in how the
        children treat each other. A child who isn&rsquo;t agitated has room to be patient,
        to share, to notice when a friend is upset. Much of what we hope to teach about{" "}
        <Link href="/blog/best-school-with-ethics-in-eluru">values and ethics</Link> grows
        far more easily in a calm classroom than a chaotic one.
      </p>

      <h2>You can try a little of this at home</h2>
      <p>
        You don&rsquo;t need a yoga mat or an hour to spare. If your mornings are a
        scramble, try this together before school:
      </p>
      <ul>
        <li>Sit comfortably and take five slow breaths — in through the nose, out gently through the mouth.</li>
        <li>Breathe in for a count of four, hold for two, and let it out for a count of six.</li>
        <li>Ask your child one small thing they&rsquo;re looking forward to today.</li>
      </ul>
      <p>
        Two minutes. It won&rsquo;t fix everything, but it changes the tone of the day — and
        children notice.
      </p>

      <h2>Why we protect these twenty minutes</h2>
      <p>
        Every year the syllabus grows and the days feel fuller. It would be easy to quietly
        drop the morning practice to buy back some time. We won&rsquo;t. Yoga and Pranayama
        have been part of SREE SREE since the beginning — our founder built the school on
        the belief that a child&rsquo;s mind, body and spirit have to grow together. Decades
        later, watching our students, we&rsquo;re more convinced than ever that he was right.
      </p>
      <p>
        If you&rsquo;d like your child to start their days this way, we&rsquo;d love to show
        you around. Come see a morning at{" "}
        <Link href="/about">SREE SREE Educational Society</Link> in Eluru — the quiet part is
        our favourite. <Link href="/contact">Get in touch to visit.</Link>
      </p>
    </ArticleLayout>
  );
}
