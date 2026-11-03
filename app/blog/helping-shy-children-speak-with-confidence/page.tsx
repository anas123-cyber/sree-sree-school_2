import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import { pageMetadata } from "@/lib/metadata";
import { getPost } from "@/lib/posts";

const post = getPost("helping-shy-children-speak-with-confidence")!;

export const metadata = pageMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${post.slug}`,
  image: post.image,
  article: true,
  keywords: [
    "shy child confidence",
    "public speaking for kids",
    "help child speak in class",
    "stage fear in children",
    "school in Eluru",
  ],
});

export default function Page() {
  return (
    <ArticleLayout slug={post.slug}>
      <p>
        Every class has a child who knows the answer and doesn&rsquo;t raise a hand. Who goes
        quiet when the teacher looks their way. Who practises a speech perfectly at home and
        freezes on the stage. If that sounds like your child, please know it is far more
        common than it looks &mdash; and it can be changed, gently.
      </p>

      <h2>Shy is not the same as weak</h2>
      <p>
        Some children simply think before they speak, and feel big rooms more than others.
        That is a temperament, not a flaw. Our aim is never to turn a quiet child into a loud
        one. It is to make sure they can speak when they have something to say.
      </p>

      <h2>1. Start at home, with tiny audiences</h2>
      <p>
        Dinner table first. Ask for opinions, not just answers: <em>which story did you like
        today, and why?</em> Let your child be the one to explain a game, a recipe or a
        school event to the family. Small, safe audiences build the muscle.
      </p>

      <h2>2. Don&rsquo;t speak for them</h2>
      <p>
        It is tempting to answer the shopkeeper or relative on your child&rsquo;s behalf,
        especially when the silence stretches. Wait a little longer than feels comfortable.
        Give them the chance to order their own snack or say their own name. Each small
        success counts.
      </p>
      <blockquote>
        Confidence is built from small moments of being heard &mdash; not from being pushed
        onto a stage.
      </blockquote>

      <h2>3. Practise, but gently</h2>
      <p>
        Before a recitation or speech, practise a few times in front of a mirror, then in
        front of one family member. Focus on the first sentence &mdash; the start is the
        hardest. Praise the effort and one specific thing they did well, rather than listing
        everything that could improve.
      </p>

      <h2>4. Let mistakes be normal</h2>
      <p>
        A child who is afraid of being laughed at will stay silent. Talk openly about your
        own slips and how you carried on. When a stumble is treated as ordinary, it loses its
        power.
      </p>

      <h2>5. Find the right stage</h2>
      <p>
        Assembly talks, drama, debates, music, quiz teams &mdash; each is a different door
        to confidence. A shy child often shines in a group activity first, and the courage
        then spreads. We try to give every child such chances; you can read about it in{" "}
        <Link href="/blog/beyond-the-classroom-co-curricular-activities">co-curricular activities at school</Link>,
        and about how discipline and confidence grow together in{" "}
        <Link href="/blog/karate-at-school-confidence-and-discipline">karate at school</Link>.
      </p>

      <h2>When to seek extra help</h2>
      <p>
        If your child is extremely anxious, avoids school or loses sleep over speaking, talk
        to their teacher and, if needed, a counsellor. Early support makes a real difference.
      </p>
      <p>
        Want to know how our teachers draw out quieter children?{" "}
        <Link href="/contact">Come and meet them</Link>.
      </p>
    </ArticleLayout>
  );
}
