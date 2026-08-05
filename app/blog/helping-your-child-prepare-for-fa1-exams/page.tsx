import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import { pageMetadata } from "@/lib/metadata";
import { getPost } from "@/lib/posts";

const post = getPost("helping-your-child-prepare-for-fa1-exams")!;

export const metadata = pageMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${post.slug}`,
  image: post.image,
  article: true,
  keywords: [
    "FA1 exam preparation",
    "formative assessment Andhra Pradesh",
    "first unit test preparation",
    "how to help child study for exams",
    "study timetable for school children",
    "revision tips for students",
  ],
});

export default function Page() {
  return (
    <ArticleLayout slug={post.slug}>
      <p>
        The first assessment of the year always seems to arrive too soon. FA1 in Andhra
        Pradesh state schools, a unit test or periodic test elsewhere — whatever it&rsquo;s
        called, it lands while children are still finding their way around a new grade, a new
        teacher and a heavier syllabus.
      </p>
      <p>
        And so, right on cue, the evenings get tense. Here is a calmer way through it, and a
        reminder about what this particular exam is actually for.
      </p>

      <h2>What FA1 is really for (and it isn&rsquo;t ranking)</h2>
      <p>
        A formative assessment is a diagnostic. Its job is to tell the teacher — and you —
        what has landed and what hasn&rsquo;t, early enough in the year that something can be
        done about it.
      </p>
      <p>
        That is genuinely different from a final exam, and it changes how you should treat the
        result. A weak FA1 in July is useful information. A weak final exam in March is a
        problem. Treating the first like the second is how children learn to dread exams for
        the next ten years.
      </p>
      <blockquote>
        The most valuable thing FA1 can produce is not a mark. It is a specific sentence:
        &ldquo;He is fine with everything except division with remainders.&rdquo; That sentence
        is worth more than any number on the paper.
      </blockquote>

      <h2>A workable ten-day plan</h2>
      <p>
        Most families don&rsquo;t need a study schedule with colour codes. They need a plan
        simple enough to survive a normal week.
      </p>
      <h3>Days 1&ndash;2: Find out what&rsquo;s actually shaky</h3>
      <p>
        Before any revision, spend twenty minutes finding the gaps. Ask your child to go
        through the chapters and mark each topic with a tick, a question mark, or a cross.
        Children are remarkably honest about this when it isn&rsquo;t framed as a test.
      </p>
      <p>
        Now you have a map. Do not spend the next eight days revising ticks. Almost every
        child does, because revising what you already know feels pleasant and productive.
      </p>
      <h3>Days 3&ndash;7: Work the crosses first, in short sessions</h3>
      <ul>
        <li>Two subjects an evening, not five. Rotating subjects nightly beats cramming one.</li>
        <li>Thirty to forty minutes, then a real break — outside, not on a screen.</li>
        <li>Start each session with the hardest topic, while the mind is fresh.</li>
        <li>Written practice, not reading. Reading a solved sum feels like learning. It isn&rsquo;t.</li>
      </ul>
      <h3>Days 8&ndash;9: Practise the paper, not the chapter</h3>
      <p>
        Get an old question paper or ask the teacher what the format will be. A lot of marks
        are lost by children who know the content but have never practised the shape of the
        paper — how long they have, how many marks each section carries, when to move on.
      </p>
      <p>
        Have your child do one paper in one sitting, timed, with the phone in another room.
        Then mark it together, honestly.
      </p>
      <h3>Day 10: Do almost nothing</h3>
      <p>
        A light look through the notes, an early dinner, and sleep. Nothing new is learned the
        night before, and a great deal is lost to a bad night&rsquo;s sleep. This is the most
        commonly ignored and most valuable day of the ten.
      </p>

      <h2>Four study habits that are worth more than extra hours</h2>
      <ol>
        <li>
          <strong>Close the book and say it aloud.</strong> If your child can explain the water
          cycle to you without looking, they know it. If they can only recognise it on the
          page, they don&rsquo;t. This test takes ninety seconds and is brutally accurate.
        </li>
        <li>
          <strong>Write from memory, then check.</strong> Attempt the sum first, then look at
          the solved example. Reversing that order feels easier and teaches almost nothing.
        </li>
        <li>
          <strong>Revisit yesterday&rsquo;s topic for five minutes.</strong> A brief look back
          each day is worth more than one long revision on Sunday.
        </li>
        <li>
          <strong>Sleep properly.</strong> Nine hours for a primary child, eight for a
          teenager. Memory consolidates during sleep — a child who studies until midnight is
          actively erasing part of what they studied.
        </li>
      </ol>

      <h2>What parents should and shouldn&rsquo;t do</h2>
      <p><strong>Do:</strong></p>
      <ul>
        <li>Keep the house a bit quieter for an hour in the evening</li>
        <li>Sit in the same room with your own work — presence helps, hovering doesn&rsquo;t</li>
        <li>Ask &ldquo;which part is hardest?&rdquo; rather than &ldquo;have you finished?&rdquo;</li>
        <li>Feed them properly and get them to bed on time</li>
      </ul>
      <p><strong>Don&rsquo;t:</strong></p>
      <ul>
        <li>Compare them to a cousin, a neighbour&rsquo;s child, or their own sibling</li>
        <li>Promise a big reward for marks — it turns a diagnostic into a gamble</li>
        <li>Cancel play and sport for the whole ten days; tired minds don&rsquo;t retain</li>
        <li>Sit beside them supplying answers — you will both feel productive and learn nothing</li>
      </ul>

      <h2>When the marks come back</h2>
      <p>
        This is the part that matters most, and the part most families rush.
      </p>
      <p>
        If the result is good — say so, briefly, and then ask what they found hard anyway.
        Good marks can hide a shaky topic that will resurface in December.
      </p>
      <p>
        If the result is poor, resist the two usual reactions: the scolding, and the
        immediate rush to enrol in tuition. Instead, get the paper itself and look at{" "}
        <em>what kind</em> of marks were lost:
      </p>
      <ul>
        <li>
          <strong>Careless slips and incomplete answers?</strong> That&rsquo;s exam technique.
          Very fixable, no tuition needed.
        </li>
        <li>
          <strong>Blank questions?</strong> Either time management, or a topic never
          understood. Find out which.
        </li>
        <li>
          <strong>Wrong method throughout one topic?</strong> That&rsquo;s a genuine gap. Talk
          to the subject teacher this week, not next term.
        </li>
      </ul>
      <p>
        Before signing up for coaching, read our honest take on{" "}
        <Link href="/blog/does-my-child-really-need-tuition">
          whether your child actually needs tuition
        </Link>{" "}
        — quite often the answer is no.
      </p>

      <h2>And keep it in proportion</h2>
      <p>
        FA1 is one assessment, early in a long year, in one part of a much larger education.
        Your child&rsquo;s handwriting speed in July does not predict their life. If exams are
        producing real distress in your home, our post on{" "}
        <Link href="/blog/helping-children-handle-exam-stress">exam stress in children</Link>{" "}
        goes further into what helps.
      </p>
      <p>
        And if you want to know exactly where your child stands, ask the class teacher for
        that one specific sentence. Any teacher who knows your child will be able to give it
        to you. <Link href="/contact">Get in touch with us here.</Link>
      </p>
    </ArticleLayout>
  );
}
