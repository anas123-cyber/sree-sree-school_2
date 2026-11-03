import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import JsonLd from "@/components/JsonLd";
import { faqSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { getPost } from "@/lib/posts";

const post = getPost("primary-school-in-eluru-grades-1-to-5")!;

export const metadata = pageMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${post.slug}`,
  image: post.image,
  article: true,
  keywords: [
    "primary school in Eluru",
    "best primary school Eluru",
    "Grade 1 admission Eluru",
    "primary education Andhra Pradesh",
    "choosing a primary school",
    "SREE SREE School primary",
  ],
});

const faqs = [
  {
    question: "What should a good primary school teach in Grades 1 to 5?",
    answer:
      "Beyond reading, writing and arithmetic, a good primary school builds fluent reading by around Grade 3, number sense rather than memorised tables, curiosity through hands-on science, and everyday habits of honesty, sharing and routine. Physical play, art and music are not extras at this stage — they are how young children develop coordination, expression and confidence.",
  },
  {
    question: "How many students should there be in a primary class?",
    answer:
      "Smaller is meaningfully better in the primary years. Around 30 students per class allows a teacher to notice an individual child; beyond about 40, teaching necessarily becomes broadcast rather than personal. Ask any school you visit for the actual current strength of the specific class your child would join, not the average across the school.",
  },
  {
    question: "Which grade does primary school start at in Andhra Pradesh?",
    answer:
      "Primary school in Andhra Pradesh covers Grade I to Grade V, typically starting at age five or six. SREE SREE Educational Society in Eluru offers Primary School from Grade I to V and High School from Grade VI to X.",
  },
  {
    question: "How do I choose a primary school in Eluru?",
    answer:
      "Visit on an ordinary working day rather than an admission day, observe how a teacher speaks to a child who answers incorrectly, ask what the school does when a child falls behind, check the class strength and teacher retention, and confirm the full annual cost in writing. How the school treats a struggling child tells you more than any brochure.",
  },
];

export default function Page() {
  return (
    <ArticleLayout slug={post.slug}>
      <JsonLd data={faqSchema(faqs)} />

      <p>
        Parents put enormous care into choosing a high school and comparatively little into
        choosing a primary school. We understand why — Grade 10 has a public result attached
        to it, and Grade 2 doesn&rsquo;t.
      </p>
      <p>
        But if you asked us which five years matter most, we&rsquo;d say Grades I to V without
        hesitation. This is where a child decides, quietly and more or less permanently,
        whether learning is something they can do. Everything after that is built on that
        decision.
      </p>

      <h2>What these five years are really building</h2>
      <p>
        The syllabus at this stage is not the point. Any competent school will get through the
        textbook. What separates a good primary school from an adequate one is what it builds
        underneath.
      </p>
      <ul>
        <li>
          <strong>Fluent reading by Grade 3.</strong> This is the single most important
          milestone in primary school. A child who is still decoding words at Grade 4 will
          struggle in every subject, because from that point on all learning happens through
          reading.
        </li>
        <li>
          <strong>Number sense, not memorised tables.</strong> A child who can recite the
          seven-times table but cannot work out what seven fours might be has learned a song,
          not mathematics.
        </li>
        <li>
          <strong>The belief that they can figure things out.</strong> Watch how a school
          handles a wrong answer. That moment, repeated a thousand times, is what produces
          either a confident child or a cautious one.
        </li>
        <li>
          <strong>Ordinary daily habits.</strong> Coming on time, finishing what you started,
          putting things back, telling the truth when it&rsquo;s inconvenient. These are taught
          in the primary years or not at all.
        </li>
      </ul>

      <h2>What to look for when you visit</h2>
      <p>
        Go on an ordinary Wednesday, not an admission day. Everyone performs on admission days.
        Here is what actually tells you something:
      </p>
      <h3>How the teacher handles a wrong answer</h3>
      <p>
        Stand near a primary classroom and wait for a child to get something wrong. It
        won&rsquo;t take long. What happens next is the most informative thirty seconds of your
        visit. Is the child helped toward the answer, or corrected and moved past? Does the
        class laugh, and is that allowed?
      </p>
      <h3>How many children are in the room</h3>
      <p>
        Ask for the actual strength of the class your child would join, not the school average.
        Around thirty lets a teacher know a child. Beyond forty, teaching becomes broadcasting
        — the teacher is doing their best, but they cannot see your particular child.
      </p>
      <h3>Whether there is noise</h3>
      <p>
        A completely silent primary school is not a good sign. Seven-year-olds who are
        engaged are audible. What you want is purposeful noise, not chaos and not silence.
      </p>
      <h3>What happens at 11 AM</h3>
      <p>
        Is there a break where children actually run about? Do they get outside? Primary
        children need physical play the way they need food, and a school that has quietly
        eliminated it to gain teaching time has misunderstood how young children work.
      </p>
      <h3>Whether anyone knows your child&rsquo;s name</h3>
      <p>
        If you already have a child there, this is the test. If not, ask the teacher to
        describe a current student to you. A teacher who knows children will light up and tell
        you a story. One who doesn&rsquo;t will describe marks.
      </p>
      <blockquote>
        Ask one question at every school you visit: &ldquo;What do you do when a child falls
        behind?&rdquo; A good school has an actual answer, with steps in it. A weak school
        recommends tuition.
      </blockquote>

      <h2>The things that don&rsquo;t matter as much as you think</h2>
      <p>
        We&rsquo;d gently suggest weighting these lower than the brochure does: air-conditioned
        classrooms, a smart board in every room, the number of buses, and the size of the
        building. None of them are bad. None of them teach your child to read.
      </p>
      <p>
        What matters far more, and photographs far worse: how long the teachers have been
        there. A primary school where the same teachers have taught for a decade is a school
        where children are known. A school with a new set of faces every June has a problem it
        will not mention on the tour.
      </p>

      <h2>How we approach the primary years</h2>
      <p>
        Our primary school runs Grade I to V, and we teach it with a fairly simple conviction:
        young children learn by doing, so we keep them doing. Storytelling, hands-on activity,
        things they build and touch, and a great deal of talking out loud.
      </p>
      <p>
        Alongside that, every child&rsquo;s day starts with{" "}
        <Link href="/blog/why-morning-yoga-belongs-in-school">yoga and pranayama</Link>, which
        settles a room of eight-year-olds better than any instruction we&rsquo;ve found. There
        are values classes, because character is easiest to build at this age. There is real
        playtime, chess, karate and the beginnings of{" "}
        <Link href="/blog/robotics-and-ai-for-school-children">robotics</Link>. And there is a
        playground that gets properly used.
      </p>
      <p>
        We also try to make sure someone knows your child. That sounds modest, but it is the
        thing parents thank us for years later — not the syllabus.
      </p>

      <h2>A word about starting age and readiness</h2>
      <p>
        Parents often worry that their child isn&rsquo;t &ldquo;ready&rdquo; for Grade 1.
        Almost always, the anxiety is about academics — can she write her letters, does he know
        his numbers. Those are the easy part, and school will handle them.
      </p>
      <p>
        What actually helps a child settle into Grade 1 is different: being able to sit for a
        stretch, ask for help, use the toilet independently, eat their own lunch, and manage a
        few hours away from home. Our post on{" "}
        <Link href="/blog/preparing-your-child-for-first-day-of-school">
          preparing your child for the first day
        </Link>{" "}
        goes through this properly.
      </p>

      <h2>Frequently asked questions</h2>
      <h3>What should a good primary school teach?</h3>
      <p>
        Fluent reading by around Grade 3, number sense rather than rote tables, curiosity
        through hands-on work, and everyday habits of honesty and routine — alongside real
        physical play, art and music, which at this age are not extras.
      </p>
      <h3>How many students should be in a primary class?</h3>
      <p>
        Around thirty allows a teacher to know each child. Beyond forty, teaching becomes
        broadcast. Ask for the strength of the specific class your child would join.
      </p>
      <h3>Which grades does primary school cover in Andhra Pradesh?</h3>
      <p>
        Grade I to Grade V. SREE SREE Educational Society offers Primary (I&ndash;V) and High
        School (VI&ndash;X) — see our <Link href="/academics">academics page</Link>.
      </p>
      <p>
        Looking at primary schools in Eluru right now? Come and see an ordinary school day at
        our Sanivarapupeta campus. <Link href="/contact">Book a visit here</Link> or call
        08812-244084.
      </p>
    </ArticleLayout>
  );
}
