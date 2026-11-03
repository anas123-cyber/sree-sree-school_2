import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import { pageMetadata } from "@/lib/metadata";
import { getPost } from "@/lib/posts";

const post = getPost("why-sleep-matters-more-than-extra-study-hours")!;

export const metadata = pageMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${post.slug}`,
  image: post.image,
  article: true,
  keywords: [
    "sleep and learning in children",
    "how many hours should a child sleep",
    "bedtime routine for school children",
    "tired child at school",
    "school in Eluru",
  ],
});

export default function Page() {
  return (
    <ArticleLayout slug={post.slug}>
      <p>
        When exams are near, the first thing many families trim is sleep. One more hour of
        study, a late night with the textbook, an early alarm for revision. It feels
        responsible. Unfortunately, it often does the opposite.
      </p>
      <p>
        Sleep isn&rsquo;t time away from learning. It is when much of the learning actually
        gets stored. Here&rsquo;s why it deserves a firm place in your child&rsquo;s day.
      </p>

      <h2>What sleep does for a learning brain</h2>
      <p>
        During sleep, the brain sorts what a child has seen and practised during the day and
        files it into long-term memory. A well-rested child concentrates longer, picks up new
        ideas faster and manages feelings better. A tired child forgets, fidgets, and gets
        upset over small things — which is easy to mistake for &ldquo;not trying&rdquo;.
      </p>

      <h2>How much do children need?</h2>
      <p>
        Needs vary, but as a rough guide, primary-age children do best with around nine to
        eleven hours a night, and older children and teenagers with eight to ten. If your
        child is hard to wake in the morning, nods off in the car or is cranky by evening,
        they are probably short on sleep.
      </p>

      <h2>Simple habits that help</h2>
      <ul>
        <li><strong>Same time, every night.</strong> A steady bedtime and wake time, even on weekends, sets the body clock.</li>
        <li><strong>Screens off an hour before bed.</strong> The light and excitement keep minds switched on. Our guide to{" "}
          <Link href="/blog/screen-time-rules-that-actually-work">screen-time rules that work</Link> can help.</li>
        <li><strong>A calm wind-down.</strong> A bath, a story, a few quiet minutes of talk.</li>
        <li><strong>Dinner not too late, and not too heavy.</strong></li>
        <li><strong>A dark, cool, quiet room.</strong></li>
      </ul>
      <blockquote>
        A rested child with an hour less study will often outperform a tired child who studied
        longer.
      </blockquote>

      <h2>During exam weeks</h2>
      <p>
        Protect bedtime even more, not less. Move study earlier in the evening, keep revision
        short and focused, and let the last hour before sleep be easy. If you&rsquo;re
        planning ahead, our{" "}
        <Link href="/blog/half-yearly-exam-preparation-plan-for-parents">exam preparation plan</Link>{" "}
        is built around this idea.
      </p>

      <h2>A word on morning routines</h2>
      <p>
        Good sleep makes mornings easier, and a calm start sets up the whole school day. This
        is one reason we value things like{" "}
        <Link href="/blog/why-morning-yoga-belongs-in-school">morning yoga at school</Link>.
        If you&rsquo;d like to talk to us about your child&rsquo;s daily rhythm,{" "}
        <Link href="/contact">get in touch</Link>.
      </p>
    </ArticleLayout>
  );
}
