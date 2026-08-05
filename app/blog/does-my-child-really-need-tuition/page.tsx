import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import { pageMetadata } from "@/lib/metadata";
import { getPost } from "@/lib/posts";

const post = getPost("does-my-child-really-need-tuition")!;

export const metadata = pageMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${post.slug}`,
  image: post.image,
  article: true,
  keywords: [
    "does my child need tuition",
    "private tuition for school children",
    "tuition classes Eluru",
    "when to start tuition",
    "alternatives to tuition",
    "home tutor for kids India",
  ],
});

export default function Page() {
  return (
    <ArticleLayout slug={post.slug}>
      <p>
        By Grade 5, it can feel as though every child in the neighbourhood is going somewhere
        after school. The auto comes at four, the batch runs till six-thirty, and if your
        child isn&rsquo;t in one, you start to wonder whether you&rsquo;re letting them fall
        behind.
      </p>
      <p>
        We&rsquo;re a school, so you might expect us to say tuition is never needed. We
        won&rsquo;t say that — sometimes it genuinely helps. But we will say this: in a good
        number of cases, tuition is treating a symptom, and the underlying problem is being
        paid for twice.
      </p>

      <h2>Start by naming the actual problem</h2>
      <p>
        &ldquo;He needs tuition&rdquo; is a solution, not a diagnosis. Before you enrol, work
        out which of these you&rsquo;re actually dealing with — because only two of the five
        are solved by tuition.
      </p>
      <h3>1. A genuine gap in one subject</h3>
      <p>
        Your child understood maths until fractions arrived, and hasn&rsquo;t recovered since.
        Everything built on that is now shaky. <strong>Tuition can genuinely help here</strong>
        — but a short, targeted course to close the gap, not a permanent arrangement.
      </p>
      <h3>2. Falling behind because they missed school</h3>
      <p>
        Illness, a family situation, a mid-year move. Real content was missed while the class
        went on. <strong>Tuition helps here too</strong>, and again it should have an end date.
      </p>
      <h3>3. Nobody at home can help with the subject</h3>
      <p>
        This is completely understandable and nothing to feel bad about — Grade 9 physics
        defeats plenty of us. But please ask the school first. In our experience most schools,
        including ours, will arrange support before or after class if a parent simply asks.
        That costs you nothing.
      </p>
      <h3>4. The school isn&rsquo;t teaching it properly</h3>
      <p>
        This is the one nobody says out loud. If most of a class needs outside coaching for
        the same subject, that is not thirty struggling children. That is one teaching
        problem, and you are paying for it twice. Raise it with the school. If nothing changes,
        that tells you something about the school worth knowing.
      </p>
      <h3>5. It&rsquo;s a study-habit problem, not a knowledge problem</h3>
      <p>
        Your child understands the material perfectly in class and does nothing about it at
        home. Tuition &ldquo;works&rdquo; here only in the sense that someone is now forcing
        them to sit down. You can achieve the same thing at home for free — and the child
        actually learns to work independently, which tuition often quietly prevents.
      </p>
      <blockquote>
        Ask the parents at a school you&rsquo;re considering whether their children go for
        tuition, and for which subjects. It is the most honest audit of a school&rsquo;s
        teaching you will ever get.
      </blockquote>

      <h2>The costs nobody adds up</h2>
      <p>
        Tuition has a fee, and most families weigh that. Here are the costs that go
        unrecorded:
      </p>
      <ul>
        <li>
          <strong>Time.</strong> A Grade 6 child at school from 9 to 3:30 and tuition from 4:30
          to 6:30 has an eleven-hour working day. We&rsquo;d struggle with that. They&rsquo;re
          eleven.
        </li>
        <li>
          <strong>Play and sleep.</strong> These are the first things cut. Both matter more to
          learning than an extra hour of revision — genuinely, not sentimentally.
        </li>
        <li>
          <strong>Attention in class.</strong> This one is real and worth knowing: children who
          know a topic will be re-taught in the evening stop listening in the morning. Tuition
          can quietly manufacture the dependence it claims to fix.
        </li>
        <li>
          <strong>Independence.</strong> A child who has never sat alone with a hard problem
          and worked it out has missed something important — and will feel it in intermediate,
          where nobody hovers.
        </li>
      </ul>

      <h2>Things worth trying before you enrol</h2>
      <ol>
        <li>
          <strong>Talk to the subject teacher.</strong> Ask a precise question: &ldquo;Which
          exact topic is she losing marks on?&rdquo; A good teacher will tell you in one
          sentence, and often that sentence solves the whole thing.
        </li>
        <li>
          <strong>Ask the school for support.</strong> Extra help before or after class,
          seating changes, revised notes. Ask. Most schools say yes and are glad to be asked.
        </li>
        <li>
          <strong>Fix the evening routine.</strong> Same time, same table, phone in another
          room, a parent nearby but not hovering. See our post on{" "}
          <Link href="/blog/how-much-homework-is-too-much">homework routines</Link> — this
          alone resolves a lot of &ldquo;he needs tuition&rdquo; situations.
        </li>
        <li>
          <strong>Give it one honest month.</strong> Then look at the next assessment. If the
          gap is still there, you now know it&rsquo;s a real gap and tuition is the right call
          — and you&rsquo;ll know exactly what to ask the tutor to fix.
        </li>
      </ol>

      <h2>If you do go ahead, choose well</h2>
      <p>
        Tuition done well is a genuine help. Some questions that separate good from
        indifferent:
      </p>
      <ul>
        <li><strong>How many children in the batch?</strong> Twenty-five in a room is not tuition. It is a second school.</li>
        <li><strong>What exactly will you work on?</strong> A tutor who can&rsquo;t name a specific gap is going to re-teach the whole syllabus.</li>
        <li><strong>When does it end?</strong> Good tuition has an aim and a finish. Open-ended arrangements tend to continue for years by inertia.</li>
        <li><strong>Will you tell me what you find?</strong> A tutor who reports back is a partner. One who only collects fees is not.</li>
        <li><strong>Does it fit the school&rsquo;s method?</strong> Two conflicting methods for the same sum confuses a child badly, particularly in the primary years.</li>
      </ul>

      <h2>What we&rsquo;d rather see</h2>
      <p>
        We&rsquo;d rather your child had a clear hour of focused work at home and then went out
        to play. We&rsquo;d rather they learned to sit with a hard problem for ten minutes
        before asking for help. We&rsquo;d rather they slept nine hours.
      </p>
      <p>
        And we&rsquo;d rather you told us when something isn&rsquo;t working, early, so we can
        fix it inside school hours where it belongs. That is what a school is for. If a family
        has to buy in help to cover what the school should be doing, we have not done our job.
      </p>
      <p>
        If your child is struggling with something right now, start with the class teacher this
        week — not next term. <Link href="/contact">You can reach us here</Link>, or call
        08812-244084 during office hours.
      </p>
    </ArticleLayout>
  );
}
