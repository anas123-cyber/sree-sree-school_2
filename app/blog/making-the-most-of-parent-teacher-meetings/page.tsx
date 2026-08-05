import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import { pageMetadata } from "@/lib/metadata";
import { getPost } from "@/lib/posts";

const post = getPost("making-the-most-of-parent-teacher-meetings")!;

export const metadata = pageMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${post.slug}`,
  image: post.image,
  article: true,
  keywords: [
    "parent teacher meeting questions",
    "PTM tips for parents",
    "what to ask my child's teacher",
    "parent teacher conference India",
    "school progress report meeting",
    "how to talk to teachers",
  ],
});

export default function Page() {
  return (
    <ArticleLayout slug={post.slug}>
      <p>
        Here is how most parent-teacher meetings go. You wait outside for twenty minutes. You
        sit down. The teacher shows you a progress report you have already seen. She says your
        child is doing well but should concentrate more. You nod, say thank you, and leave.
      </p>
      <p>
        Total useful information gathered: none. And it isn&rsquo;t the teacher&rsquo;s fault —
        she has forty of these to get through and no idea what you actually want to know.
      </p>
      <p>
        We&rsquo;re on the other side of that table several times a year, so let us tell you
        exactly how to make those fifteen minutes worth something.
      </p>

      <h2>Don&rsquo;t start with the marks</h2>
      <p>
        You already have the marks. They were on the report. Spending your fifteen minutes
        having them read back to you is the most common way parents waste a PTM.
      </p>
      <p>
        Open with something else entirely, and watch the conversation change:
      </p>
      <blockquote>
        &ldquo;Before we look at the report — tell me what he&rsquo;s like in your class.&rdquo;
      </blockquote>
      <p>
        That question does two things. It tells you whether the teacher knows your child as a
        person. And it gives you the information that isn&rsquo;t written anywhere: who they
        sit with, whether they speak up, how they are when things go wrong, whether they seem
        happy.
      </p>
      <p>
        If the teacher can answer that with something specific, you are at a good school. If
        the answer comes back as marks again, you have learned something important.
      </p>

      <h2>Seven questions that actually earn their place</h2>
      <ol>
        <li>
          <strong>&ldquo;What&rsquo;s the one thing he should work on this term?&rdquo;</strong>{" "}
          One. Forcing a single answer produces something actionable instead of a general
          survey.
        </li>
        <li>
          <strong>&ldquo;Which topic exactly is she losing marks on?&rdquo;</strong> Not
          &ldquo;maths&rdquo;. The actual topic. &ldquo;Division with remainders&rdquo; is a
          problem you can solve in a fortnight. &ldquo;Weak in maths&rdquo; is a label that
          follows a child for years.
        </li>
        <li>
          <strong>&ldquo;Does he ask for help when he&rsquo;s stuck?&rdquo;</strong> Enormously
          revealing. A bright child who never asks is at more risk than an average child who
          asks constantly.
        </li>
        <li>
          <strong>&ldquo;Who does she sit with, and does she have friends?&rdquo;</strong> Ask
          it plainly. A child who is unhappy socially will not perform, and this often
          doesn&rsquo;t come up unless a parent raises it.
        </li>
        <li>
          <strong>&ldquo;Is anything different about him lately?&rdquo;</strong> Teachers notice
          changes before parents do, because they see your child alongside forty others every
          day. Quieter, more tired, more withdrawn — ask.
        </li>
        <li>
          <strong>&ldquo;What can we do at home that would actually help?&rdquo;</strong> Ask
          for something specific and small. &ldquo;Ten minutes of reading aloud&rdquo; is
          usable. &ldquo;More attention to studies&rdquo; is not.
        </li>
        <li>
          <strong>&ldquo;How should I contact you if something comes up?&rdquo;</strong> Settle
          this now, calmly, rather than in a crisis in November.
        </li>
      </ol>

      <h2>Tell the teacher things too</h2>
      <p>
        A PTM is not an inspection. The most useful ones are exchanges. Things worth telling
        us, which we usually have no way of knowing:
      </p>
      <ul>
        <li>
          <strong>Anything going on at home.</strong> A death in the family, a parent working
          away, a new baby, an illness. We are not asking to intrude — but a teacher who knows
          why a child is distracted responds completely differently from one who assumes
          laziness.
        </li>
        <li>
          <strong>How long homework is taking.</strong> With a number. &ldquo;Ninety minutes on
          Tuesday&rdquo; is something we can act on.
        </li>
        <li>
          <strong>What your child says about school at home.</strong> Especially if
          they&rsquo;ve stopped saying anything.
        </li>
        <li>
          <strong>What they&rsquo;re good at outside school.</strong> A child who is a serious
          cricketer or who fixes things at home is a child we can reach differently in class.
        </li>
      </ul>

      <h2>If you have to raise a complaint</h2>
      <p>
        Sometimes you do, and you should. A few things make it far more likely to be resolved:
      </p>
      <ul>
        <li>
          <strong>Lead with the specific incident, not the conclusion.</strong> &ldquo;On
          Tuesday he came home saying he was made to stand outside&rdquo; goes somewhere.
          &ldquo;You people don&rsquo;t care&rdquo; does not.
        </li>
        <li>
          <strong>Say what you want to happen.</strong> Most complaints stall because nobody
          says what a good outcome would look like.
        </li>
        <li>
          <strong>Ask for a separate meeting if it&rsquo;s serious.</strong> A PTM with forty
          families waiting is the wrong setting for anything substantial. Ask for a proper
          appointment — every decent school will give you one.
        </li>
        <li>
          <strong>Assume good faith first.</strong> Not always warranted, but it produces a
          better result more often than not, and you can escalate later if it doesn&rsquo;t.
        </li>
      </ul>

      <h2>Two minutes of preparation</h2>
      <p>
        Before you leave the house, write down three things on your phone: one question about
        academics, one about how your child is doing socially or emotionally, and one thing you
        want to tell the teacher.
      </p>
      <p>
        That is the entire preparation, and it converts a vague fifteen minutes into a useful
        one. Almost nobody does it.
      </p>

      <h2>Afterwards, be careful what you say</h2>
      <p>
        This is the part that matters most and gets least attention. Your child is waiting to
        find out what was said about them.
      </p>
      <p>
        If it went well, tell them something specific — &ldquo;She said you helped a new boy
        settle in&rdquo; lands far better than &ldquo;good report&rdquo;. If it went badly,
        resist reporting the whole thing as a verdict. Pick the one thing to work on, say it
        once, and move on.
      </p>
      <p>
        A child who learns that a PTM is where their parents and teachers gang up on them will
        dread it for ten years, and will start managing what you hear. A child who learns that
        the adults in their life talk to each other and are on their side is in a much better
        position. That&rsquo;s the same principle behind{" "}
        <Link href="/blog/raising-honest-kind-children">
          the small habits that build honesty
        </Link>.
      </p>

      <h2>What we&rsquo;d like from you</h2>
      <p>
        Come, if you possibly can. We know office hours are difficult and that the meeting can
        feel like a formality. But a child whose parent turns up is a child who understands
        that school matters — and teachers pay closer attention to children whose families they
        know.
      </p>
      <p>
        And if you can&rsquo;t make it, call us instead. We would far rather have a five-minute
        phone conversation than nothing at all. You can reach the office on 08812-244084 or{" "}
        <Link href="/contact">get in touch here</Link>.
      </p>
    </ArticleLayout>
  );
}
