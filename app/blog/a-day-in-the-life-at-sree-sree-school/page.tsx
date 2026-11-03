import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import { pageMetadata } from "@/lib/metadata";
import { getPost } from "@/lib/posts";

const post = getPost("a-day-in-the-life-at-sree-sree-school")!;

export const metadata = pageMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${post.slug}`,
  image: post.image,
  article: true,
  keywords: [
    "school life Eluru",
    "day at SREE SREE School",
    "school routine",
    "SREE SREE Educational Society",
    "best school in Eluru",
    "school activities Eluru",
  ],
});

export default function Page() {
  return (
    <ArticleLayout slug={post.slug}>
      <p>
        When you&rsquo;re choosing a school, you read a lot of lists — subjects, facilities,
        timings. But what a parent really wants to know is simpler and harder to put on
        paper: <em>what will my child&rsquo;s day actually feel like?</em> So let&rsquo;s put
        the brochure aside and walk through an ordinary day at SREE SREE, from the first
        bell to the last wave goodbye.
      </p>

      <h2>8:30 — The gates open</h2>
      <p>
        The morning begins with a flood of colour and noise — cycles, autos, parents on
        scooters, the squeak of new shoes. There are shouted hellos across the compound and
        the serious business of comparing tiffin boxes. A watchful teacher stands at the
        gate, not to police anyone, but because a familiar face and a &ldquo;good morning,
        beta&rdquo; is a nice way to start a day.
      </p>

      <h2>8:50 — Assembly and a quiet beginning</h2>
      <p>
        We gather for assembly — a thought for the day, a few announcements, sometimes a
        student nervously reading out something they wrote. And then the part we hold dear:
        a few minutes of <Link href="/blog/why-morning-yoga-belongs-in-school">yoga and
        pranayama</Link>. The whole school breathes together. By the time the children file
        off to class, the morning&rsquo;s edges have softened.
      </p>

      <h2>9:15 — Into the classrooms</h2>
      <p>
        Now the real work begins. In the primary wing, learning is loud and hands-on —
        counting with beads, acting out a story, a wall slowly filling with the children&rsquo;s
        own drawings. Upstairs, the older students settle into the steadier rhythm of high
        school: a maths problem worried over together, a science idea that suddenly clicks,
        a debate that runs a minute past the bell because no one wants to stop.
      </p>
      <p>
        Between it all, teachers move around the room, kneeling by desks, catching the child
        who&rsquo;s gone quiet, stretching the one who&rsquo;s racing ahead. This is the part
        that never fits on a facilities list: a teacher who knows your child by name and by
        nature.
      </p>

      <h2>11:00 — The interval (a.k.a. the best part)</h2>
      <p>
        Ask any child and they&rsquo;ll tell you the truth: interval is the heart of the day.
        The <Link href="/specifications">playground</Link> fills in seconds. There&rsquo;s
        cricket with impossibly complicated local rules, a knot of girls skipping, a quiet
        pair on the steps sharing one packet of biscuits. A lot of growing up happens in these
        twenty minutes — how to win kindly, how to lose without sulking, how to include the
        new kid.
      </p>
      <blockquote>
        We take the playground as seriously as the classroom. Some of the most important
        lessons a child learns all year are never once written on a blackboard.
      </blockquote>

      <h2>11:20 — Back to learning, and something extra</h2>
      <p>
        The later morning often makes room for the things that make school more than a syllabus
        — a computer lab session, an art or music class, or one of our{" "}
        <Link href="/programs">co-curricular activities</Link> like chess, karate or robotics.
        You can watch a child who is ordinary at their desk come completely alive with a chessboard
        or a keyboard in front of them. We live for those moments.
      </p>

      <h2>1:00 — Lunch, together</h2>
      <p>
        Tiffin boxes click open and the smell of home fills the room — curd rice, a paratha
        folded by an early-morning mother, the lucky child with a sweet to share. We encourage
        sharing, and we notice the child who has forgotten their box. Nobody eats alone here if
        we can help it.
      </p>

      <h2>The afternoon — winding down</h2>
      <p>
        The afternoon has a gentler pace: revision, reading, group work, the day&rsquo;s loose
        ends tied up. On festival weeks the whole rhythm happily breaks — Independence Day
        rehearsals, Sankranti colours, a hum of practice for the annual day. These are the days
        the children remember years later.
      </p>

      <h2>3:30 — The last bell</h2>
      <p>
        And then it&rsquo;s over as suddenly as it began. Bags are hoisted, a forgotten water
        bottle is retrieved, a teacher calls out a reminder about homework that half of them
        won&rsquo;t hear. At the gate there are waves and the day&rsquo;s stories already
        spilling out to waiting parents.
      </p>
      <p>
        That&rsquo;s a day at SREE SREE — not extraordinary, just good, the kind of day that
        quietly stacks up into a childhood. If you&rsquo;d like to see one for yourself, our
        gates are open. <Link href="/contact">Come and visit us in Eluru.</Link>
      </p>
    </ArticleLayout>
  );
}
