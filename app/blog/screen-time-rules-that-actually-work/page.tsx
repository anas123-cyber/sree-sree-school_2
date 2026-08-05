import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import { pageMetadata } from "@/lib/metadata";
import { getPost } from "@/lib/posts";

const post = getPost("screen-time-rules-that-actually-work")!;

export const metadata = pageMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${post.slug}`,
  image: post.image,
  article: true,
  keywords: [
    "screen time for children",
    "mobile phone addiction in kids",
    "how much screen time is ok",
    "children and smartphones India",
    "reducing screen time at home",
    "parenting tips screen time",
  ],
});

export default function Page() {
  return (
    <ArticleLayout slug={post.slug}>
      <p>
        We could tell you that children should get an hour of screen time a day and leave it
        there. It would be tidy advice, and in most Eluru homes it would last about four days.
      </p>
      <p>
        The phone is where your child&rsquo;s friends are, where their homework video is,
        where the cricket score is, and where you reach them when you&rsquo;re running late.
        Pretending it can be removed is not a strategy. So here is what we&rsquo;ve seen
        actually hold — in real families, over real years.
      </p>

      <h2>Start with a better question than &ldquo;how many hours?&rdquo;</h2>
      <p>
        Two children each spend ninety minutes on a screen. One watches short videos on
        autoplay, alone, in bed. The other messages three friends, watches a match, and looks
        up how a pump works. Same number. Completely different childhoods.
      </p>
      <p>So instead of counting minutes, ask three questions:</p>
      <ul>
        <li>
          <strong>What is it replacing?</strong> If the screen time replaced boredom,
          that&rsquo;s fine. If it replaced sleep, play outside, or meals with the family,
          that&rsquo;s the actual problem — not the phone.
        </li>
        <li>
          <strong>Is it chosen or is it fed?</strong> A child watching a film they picked is
          in charge. A child on an endless autoplay feed is being driven. These are not the
          same activity and should not have the same rules.
        </li>
        <li>
          <strong>Can they stop without a scene?</strong> This is the real test. Occasional
          grumbling is normal. A meltdown every single time means the boundary has stopped
          being a boundary.
        </li>
      </ul>

      <h2>The four rules that survive contact with a real family</h2>
      <p>
        We&rsquo;ve watched a lot of elaborate screen-time systems collapse within a fortnight.
        These four are simple enough to survive.
      </p>
      <h3>1. No screens in the bedroom at night</h3>
      <p>
        If you change one thing, change this. Phones charge in the hall, not in the bedroom.
        Not on the bed, not on the desk, not under the pillow.
      </p>
      <p>
        This single rule does more than all the others combined, because it protects sleep —
        and sleep is what actually determines whether your child can concentrate tomorrow.
        We can always tell in a Monday morning class which children slept and which ones
        scrolled.
      </p>
      <h3>2. No screens during meals — including yours</h3>
      <p>
        This one only works if it applies to everyone. A parent scrolling at the dinner table
        has no authority on this subject, and children know it instantly. Twenty minutes of
        eating together with no screens is a small thing that holds a family together.
      </p>
      <h3>3. Screens come after, not before</h3>
      <p>
        Homework, dinner, whatever the evening requires — those first, screen after. Not as a
        reward to be earned or withdrawn dramatically, just as the order of the evening.
        Order creates far less conflict than negotiation.
      </p>
      <h3>4. In a common room, not behind a closed door</h3>
      <p>
        For primary-age children especially. Not to spy on them, but because a screen used in
        a room with other people in it is naturally self-limiting. You don&rsquo;t need to
        watch. You just need to be in the room.
      </p>
      <blockquote>
        A rule you can actually enforce every day beats a perfect rule you abandon by
        Thursday. Choose two rules and hold them completely, rather than six you hold loosely.
      </blockquote>

      <h2>What to do about the meltdown when you say stop</h2>
      <p>
        This is where most parents give up, so it&rsquo;s worth naming what&rsquo;s happening.
        The apps your child uses are engineered by very clever people to make stopping feel
        bad. Your eleven-year-old is not weak-willed. They&rsquo;re losing a fight that adults
        also lose.
      </p>
      <p>Two things that help enormously:</p>
      <ul>
        <li>
          <strong>Warn before the end.</strong> &ldquo;Ten more minutes.&rdquo; Then
          &ldquo;two more minutes.&rdquo; An abrupt stop mid-video guarantees a fight; a
          warned ending usually doesn&rsquo;t.
        </li>
        <li>
          <strong>Have something to move to.</strong> &ldquo;Stop&rdquo; into nothing is hard
          for anyone. &ldquo;Stop, come and help me with this&rdquo; is much easier.
        </li>
      </ul>

      <h2>The part parents don&rsquo;t want to hear</h2>
      <p>
        Children calibrate almost entirely on what we do, not what we say. If your child sees
        you check your phone during a conversation with them, no rule you write down will hold.
      </p>
      <p>
        You don&rsquo;t have to be perfect. But one visible habit — your phone face-down and
        out of reach for the hour after your child gets home — teaches more than a year of
        instruction. Children believe what they watch us do. We&rsquo;ve written about that
        pattern more generally in{" "}
        <Link href="/blog/raising-honest-kind-children">raising honest, kind children</Link>.
      </p>

      <h2>What we see at school</h2>
      <p>
        We&rsquo;re not against technology — we teach{" "}
        <Link href="/blog/robotics-and-ai-for-school-children">robotics and AI</Link> from the
        primary years, and we think children should grow up capable with these tools rather
        than afraid of them. The distinction we care about is between a child{" "}
        <em>using</em> a device and a child being <em>used by</em> one.
      </p>
      <p>
        What we notice in class is fairly consistent. Children who sleep without a phone in
        the room are sharper in the first two periods. Children who have a settled evening
        routine finish work faster. And the twenty minutes of{" "}
        <Link href="/blog/why-morning-yoga-belongs-in-school">breathing we do each morning</Link>{" "}
        is, among other things, practice at sitting with a mind that isn&rsquo;t being
        entertained — which is a skill children need now more than they ever did.
      </p>

      <h2>If it&rsquo;s already out of hand</h2>
      <p>
        Don&rsquo;t confiscate everything on a Sunday and expect it to stick. Reset one thing
        at a time:
      </p>
      <ol>
        <li>Week one: phones out of the bedroom at night. Only this.</li>
        <li>Week two: add no screens at meals — for everyone.</li>
        <li>Week three: fix the order of the evening. Work, then screen.</li>
      </ol>
      <p>
        Three weeks, three changes, each one small enough to survive. That works far more often
        than the dramatic clampdown that ends in a slammed door and a quiet return to exactly
        how things were.
      </p>
      <p>
        If you&rsquo;d like to talk about how your child is doing more generally — attention,
        sleep, focus in class — your class teacher is the right person to start with, and{" "}
        <Link href="/contact">we&rsquo;re easy to reach</Link>.
      </p>
    </ArticleLayout>
  );
}
