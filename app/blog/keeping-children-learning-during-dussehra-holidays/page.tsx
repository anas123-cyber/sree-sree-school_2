import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import { pageMetadata } from "@/lib/metadata";
import { getPost } from "@/lib/posts";

const post = getPost("keeping-children-learning-during-dussehra-holidays")!;

export const metadata = pageMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${post.slug}`,
  image: post.image,
  article: true,
  keywords: [
    "Dussehra holidays for children",
    "school holiday learning ideas",
    "festival break study routine",
    "keeping kids learning at home",
    "school in Eluru",
  ],
});

export default function Page() {
  return (
    <ArticleLayout slug={post.slug}>
      <p>
        The festival break arrives and the whole house exhales. Relatives visit, sweets
        appear, the school bag goes into a corner. And then, about four days in, the
        familiar question: <em>what is my child actually doing all day?</em>
      </p>
      <p>
        Holidays are meant to be a rest, and children genuinely need one. But a few weeks
        without any routine can make the first week back harder than it needs to be. The
        good news is that keeping learning alive doesn&rsquo;t mean homework by another
        name. Here&rsquo;s what works.
      </p>

      <h2>1. Keep one small anchor in the day</h2>
      <p>
        You don&rsquo;t need a timetable. Just one fixed point — a half-hour after breakfast
        when everyone reads, draws or writes. A single anchor keeps the body clock and the
        habit of settling down to something, without making the day feel like school.
      </p>

      <h2>2. Let them read what they choose</h2>
      <p>
        Holidays are the best time to read for pleasure. Comics, a story from the Panchatantra,
        a book about animals, even a Telugu magazine — all count. A child who reads because
        she wants to is building the very habit we try to grow in class. Our{" "}
        <Link href="/blog/building-a-reading-habit-in-children">guide to building a reading habit</Link>{" "}
        has more ideas.
      </p>

      <h2>3. Turn the festival into the lesson</h2>
      <p>
        Dussehra is full of stories, and stories are the oldest teacher there is. Ask your
        child to retell the tale in their own words. Let them help make the kolam or
        arrange the golu steps, and ask why each thing is placed where it is. Counting
        garlands, measuring rangoli, dividing sweets fairly — it is all maths, art and
        language dressed up as fun.
      </p>
      <blockquote>
        The best holiday learning doesn&rsquo;t feel like learning. It feels like being
        trusted with something real.
      </blockquote>

      <h2>4. Give them a small project</h2>
      <p>
        A scrapbook of the holidays, a short diary, a simple recipe cooked with a grandparent.
        Choose something your child can start and finish within the break. Finishing a
        project, even a small one, is a quiet confidence-builder.
      </p>

      <h2>5. Get them moving, and get them out</h2>
      <p>
        Play outside, walk to the temple, cycle, fly a kite. Physical activity is not a
        break from learning — it&rsquo;s part of it. A child who has run around is a child
        who can sit and concentrate afterwards.
      </p>

      <h2>6. Ease back in the last two days</h2>
      <p>
        Move bedtime back to the school-day hour a couple of nights early, pack the bag
        together, and revisit one favourite subject. A gentle runway makes the first
        Monday far less painful for everyone.
      </p>

      <h2>Rest is part of the plan</h2>
      <p>
        Please don&rsquo;t feel guilty if some days are simply lazy. Rest, family time and
        play are what children come back to school with. At SREE SREE we try to balance
        this too — you can read about <Link href="/blog/why-holistic-education-matters">why holistic education matters</Link>{" "}
        to us.
      </p>
      <p>
        If you&rsquo;d like to see how our school runs day to day,{" "}
        <Link href="/contact">drop in for a campus visit</Link> — we&rsquo;d love to meet you.
      </p>
    </ArticleLayout>
  );
}
