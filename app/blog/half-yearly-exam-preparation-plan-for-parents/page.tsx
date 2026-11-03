import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import { pageMetadata } from "@/lib/metadata";
import { getPost } from "@/lib/posts";

const post = getPost("half-yearly-exam-preparation-plan-for-parents")!;

export const metadata = pageMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${post.slug}`,
  image: post.image,
  article: true,
  keywords: [
    "half yearly exam preparation",
    "how to help child study for exams",
    "exam study plan for school children",
    "revision timetable for students",
    "school in Eluru",
  ],
});

export default function Page() {
  return (
    <ArticleLayout slug={post.slug}>
      <p>
        Half-yearly exams have a way of arriving faster than anyone expects. One week the
        syllabus feels far away; the next, the house is full of anxious energy and a child
        who &ldquo;knows it all&rdquo; but can&rsquo;t say where to begin.
      </p>
      <p>
        The secret isn&rsquo;t more hours. It&rsquo;s a calm, simple plan that starts early
        enough to feel manageable. Here is the three-week approach we suggest to parents.
      </p>

      <h2>Week 1: Map it out</h2>
      <p>
        Sit down together and list every subject and chapter that will be tested. Mark the
        ones your child feels confident about, and the ones that feel shaky. Seeing it on
        one sheet of paper takes away the fog — most children discover it&rsquo;s smaller
        than it felt.
      </p>
      <ul>
        <li>Pick the weakest two or three topics first, while energy is fresh.</li>
        <li>Share the timetable with your child; don&rsquo;t hand it down. Ownership matters.</li>
        <li>Keep a clear start and end time each day. Open-ended study drains children.</li>
      </ul>

      <h2>Week 2: Practise, don&rsquo;t just reread</h2>
      <p>
        Reading the same page again feels productive but teaches little. What works is
        recalling: close the book and explain the chapter aloud, write answers from memory,
        solve a few problems with no notes. When your child gets something wrong, that is
        not failure — it&rsquo;s exactly the place worth spending time.
      </p>
      <blockquote>
        A child who can teach a topic to you has truly learned it.
      </blockquote>

      <h2>Week 3: Revise and settle</h2>
      <p>
        The last week is for light revision of notes, formulas and key points, and a couple
        of timed practice papers. Resist the urge to start anything brand new in the last
        two days. Confidence matters more than cramming now.
      </p>

      <h2>Look after the basics</h2>
      <p>
        Sleep, a proper breakfast and a bit of play outside matter as much as any revision.
        A tired mind forgets what a rested mind would remember easily. Our note on{" "}
        <Link href="/blog/why-sleep-matters-more-than-extra-study-hours">sleep and learning</Link>{" "}
        explains why.
      </p>

      <h2>Watch the stress, too</h2>
      <p>
        Some nerves are normal and even helpful. But if your child is losing sleep, going
        quiet or snapping easily, slow down and talk. We&rsquo;ve written about{" "}
        <Link href="/blog/helping-children-handle-exam-stress">how parents can help with exam stress</Link>,
        and it is worth a read before the exams begin.
      </p>
      <p>
        Also see our earlier guide to{" "}
        <Link href="/blog/helping-your-child-prepare-for-fa1-exams">preparing for FA1 exams</Link>.
        Questions about how we support students through exams?{" "}
        <Link href="/contact">Get in touch with our team</Link>.
      </p>
    </ArticleLayout>
  );
}
