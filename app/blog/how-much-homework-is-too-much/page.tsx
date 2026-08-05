import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import { pageMetadata } from "@/lib/metadata";
import { getPost } from "@/lib/posts";

const post = getPost("how-much-homework-is-too-much")!;

export const metadata = pageMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${post.slug}`,
  image: post.image,
  article: true,
  keywords: [
    "how much homework is too much",
    "homework for primary school children",
    "homework guidelines India",
    "child crying over homework",
    "homework routine for kids",
    "school homework policy",
  ],
});

export default function Page() {
  return (
    <ArticleLayout slug={post.slug}>
      <p>
        Two parents can walk out of the same parent-teacher meeting with opposite complaints.
        One says: <em>there&rsquo;s not enough homework, how will she practise?</em> The other
        says: <em>he was crying at nine last night over a page of sums.</em>
      </p>
      <p>
        Both are being honest. And both are describing the same thing from different ends. So
        let us set out plainly what we think homework is for, how much is right, and what to
        do when it&rsquo;s clearly not working in your house.
      </p>

      <h2>What homework is actually for</h2>
      <p>
        Homework has exactly two jobs. It should give a child <strong>practice at something
        already understood</strong>, and it should build the habit of{" "}
        <strong>sitting down and finishing a piece of work alone</strong>.
      </p>
      <p>That&rsquo;s it. Homework is <em>not</em> for:</p>
      <ul>
        <li>Teaching something the class didn&rsquo;t get to</li>
        <li>Proving to parents that the school is strict</li>
        <li>Keeping children occupied</li>
        <li>Punishment</li>
      </ul>
      <p>
        If a child has to be taught the concept at home before they can start the homework,
        the homework has failed — and honestly, so has that day&rsquo;s lesson. That is a
        school problem, not a parent problem, and it is entirely fair to say so.
      </p>

      <h2>Roughly how much is right</h2>
      <p>
        There is no law here, but the rule of thumb used by most thoughtful schools worldwide
        is about ten minutes per grade, per night:
      </p>
      <ul>
        <li><strong>Grades I&ndash;II:</strong> 10&ndash;20 minutes, plus reading</li>
        <li><strong>Grades III&ndash;V:</strong> 30&ndash;50 minutes</li>
        <li><strong>Grades VI&ndash;VIII:</strong> 60&ndash;80 minutes</li>
        <li><strong>Grades IX&ndash;X:</strong> 90&ndash;120 minutes, more in the board year</li>
      </ul>
      <p>
        Two things about these numbers. First, they assume a child working at a reasonable
        pace, not a child who has already spent two hours at tuition. Second, they are a
        ceiling to notice, not a target to hit. A Grade 3 child who finishes good work in
        twenty minutes has not been short-changed.
      </p>
      <blockquote>
        If your Grade 4 child is regularly working past 8:30 PM on school work, something is
        wrong. It might be the quantity, it might be the difficulty, it might be how the
        evening is organised — but it is worth finding out which.
      </blockquote>

      <h2>Three different problems that look identical</h2>
      <p>
        &ldquo;My child struggles with homework&rdquo; usually turns out to be one of three
        quite different things. They need different fixes, so it&rsquo;s worth working out
        which one you have.
      </p>
      <h3>1. It&rsquo;s too much</h3>
      <p>
        Your child understands the work and does it correctly, but there&rsquo;s simply too
        much of it and it eats the evening. Tell the class teacher. Be specific: &ldquo;This
        took him seventy minutes on Tuesday and fifty on Wednesday.&rdquo; A number is very
        hard for a school to argue with.
      </p>
      <h3>2. It&rsquo;s too hard</h3>
      <p>
        Your child sits down willingly and then stalls, or asks you to explain from scratch.
        This is not a homework problem — it&rsquo;s a signal that a concept didn&rsquo;t land
        in class. Don&rsquo;t solve it silently at home for weeks. Tell the teacher, because
        if your child is lost, roughly six others are too.
      </p>
      <h3>3. It&rsquo;s a battle of wills</h3>
      <p>
        Your child can do it, in a reasonable time, and simply doesn&rsquo;t want to. This is
        the most common of the three and the least serious. It needs a routine, not a lecture.
      </p>

      <h2>The routine that fixes most homework arguments</h2>
      <p>
        Almost every homework war we&rsquo;ve helped a family end came down to the same four
        changes:
      </p>
      <ol>
        <li>
          <strong>A fixed time, decided once.</strong> Not &ldquo;after you finish playing&rdquo;.
          An actual time — 5:30, say — negotiated once and then never renegotiated. The daily
          argument is the exhausting part, not the homework.
        </li>
        <li>
          <strong>A fixed place, with nothing else on it.</strong> The same table, clear of
          everything except that one subject. No phone in the room. Not on silent — not in the
          room.
        </li>
        <li>
          <strong>You nearby, not over their shoulder.</strong> Sit in the same room doing your
          own work. Present enough that they don&rsquo;t drift, far enough that they own it.
          This one change transforms things in most homes.
        </li>
        <li>
          <strong>A hard stop.</strong> If the agreed time is up and the work isn&rsquo;t done,
          stop anyway. Write a one-line note to the teacher: &ldquo;We worked for 45 minutes
          and got through half.&rdquo; No good teacher will punish a child for that, and the
          note tells us something we need to know.
        </li>
      </ol>
      <p>
        That last one worries parents most, and it shouldn&rsquo;t. We would far rather have
        the information than a completed page finished at 10 PM by an exhausted parent.
      </p>

      <h2>Please don&rsquo;t do it for them</h2>
      <p>
        We say this gently, because the impulse comes from love. When you complete the diagram
        or work out the sums yourself, the notebook looks perfect and we learn nothing about
        what your child can actually do. We then teach the next lesson assuming they followed
        the last one. The gap widens quietly for months.
      </p>
      <p>
        A wrong answer in your child&rsquo;s own handwriting is worth more to us than a right
        one in yours. Truly.
      </p>

      <h2>Where reading fits in</h2>
      <p>
        In the primary years, if you can only protect one thing in the evening, protect
        reading over written homework. Fifteen minutes of a book — read to them, or by them —
        does more for a child&rsquo;s long-term academic life than an extra worksheet ever
        will. We&rsquo;ve written about how to build that habit in{" "}
        <Link href="/blog/building-a-reading-habit-in-children">this post</Link>.
      </p>

      <h2>How we think about it here</h2>
      <p>
        We set homework because practice matters and because learning to finish something on
        your own is a real skill. But we try to keep it purposeful rather than heavy, and our
        teachers would much rather hear from you than have you struggle silently. A short note
        in the diary saying &ldquo;this took too long&rdquo; is not a complaint. It is useful
        information, and we treat it that way.
      </p>
      <p>
        A child&rsquo;s evening should still have some room in it — for play, for a meal with
        the family, for being bored. That isn&rsquo;t wasted time. It&rsquo;s part of{" "}
        <Link href="/blog/why-holistic-education-matters">
          the kind of education we believe in
        </Link>.
      </p>
      <p>
        If homework is a nightly battle in your home, talk to your child&rsquo;s class
        teacher first. And if you&rsquo;d like to know how we approach it here,{" "}
        <Link href="/contact">come and ask us</Link>.
      </p>
    </ArticleLayout>
  );
}
