import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import JsonLd from "@/components/JsonLd";
import { faqSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { getPost } from "@/lib/posts";

const post = getPost("school-safety-questions-every-parent-should-ask")!;

export const metadata = pageMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${post.slug}`,
  image: post.image,
  article: true,
  keywords: [
    "school safety questions for parents",
    "is my child safe at school",
    "school security checklist India",
    "child safety school Eluru",
    "school bullying policy",
    "safe school admission Eluru",
  ],
});

const faqs = [
  {
    question: "What safety questions should I ask before choosing a school?",
    answer:
      "Ask who can collect your child and how identity is verified, what the school does in a medical emergency and who is trained in first aid, how bullying is recorded and followed up, whether staff are police-verified, whether children are ever alone with one adult behind a closed door, and how the school will contact you if something happens. A school with real systems answers these specifically; a school without them answers in generalities.",
  },
  {
    question: "How do I know if a school takes bullying seriously?",
    answer:
      "A school that takes bullying seriously will describe a process rather than a promise — who a child can report to, whether incidents are written down, what happens in the first 24 hours, and whether parents on both sides are informed. If a school tells you bullying does not happen there, that is a warning sign rather than a reassurance.",
  },
  {
    question: "Should I be worried about school pick-up and drop-off safety?",
    answer:
      "Pick-up is statistically where most school safety failures happen, so it deserves the most attention. Ask how the school verifies who is collecting a child, what happens when an unfamiliar relative arrives, whether gates are supervised at dispersal, and how the school handles a child whose guardian is late.",
  },
  {
    question: "How can I check a school's safety arrangements in person?",
    answer:
      "Visit on an ordinary working day rather than an admission day and ask the twelve questions above directly. Watch how easily children approach a teacher, check that stairs and corridors are dry and handrails are sound, and look at how the gate is managed at dispersal. SREE SREE Educational Society welcomes parents to visit and ask these questions between 9:00 AM and 5:00 PM, Monday to Saturday.",
  },
];

export default function Page() {
  return (
    <ArticleLayout slug={post.slug}>
      <JsonLd data={faqSchema(faqs)} />

      <p>
        Every school in Eluru will tell you your child is safe with them. We would tell you the
        same thing, and we&rsquo;d mean it. But &ldquo;your child is safe here&rdquo; is a
        sentence, not a system, and you have no way of telling the difference from the outside.
      </p>
      <p>
        So here are twelve questions that do reveal the difference. They&rsquo;re not
        confrontational and you shouldn&rsquo;t feel awkward asking them — any school worth
        your child will be glad you did. What matters is not the answer itself but whether the
        answer is <em>specific</em>.
      </p>

      <h2>At the gate and at pick-up time</h2>
      <p>
        Start here, because dispersal is where most school safety failures actually happen. Not
        in classrooms. At the gate, at 3:30, in a crowd.
      </p>
      <h3>1. Who can collect my child, and how do you check?</h3>
      <p>
        You want a named-and-recorded system, not recognition. &ldquo;We know the parents&rdquo;
        works until the day there&rsquo;s a substitute at the gate.
      </p>
      <h3>2. What happens if someone unfamiliar comes for my child?</h3>
      <p>
        The right answer involves the school phoning you before releasing the child. Any answer
        that ends with the child leaving is the wrong answer.
      </p>
      <h3>3. Who supervises the gate at dispersal?</h3>
      <p>
        There should be a named adult, present, every day. Not &ldquo;the watchman is around&rdquo;.
      </p>
      <h3>4. What if I&rsquo;m late?</h3>
      <p>
        Where does your child wait, and with whom? A child waiting alone outside a gate for
        twenty minutes is the situation you are trying to prevent.
      </p>

      <h2>Medical and emergency</h2>
      <h3>5. What happens in the first ten minutes of a medical emergency?</h3>
      <p>
        Listen for a sequence: who assesses, who calls you, which hospital, who accompanies the
        child. A school that has thought about it will describe steps. A school that
        hasn&rsquo;t will say &ldquo;we take care of it&rdquo;.
      </p>
      <h3>6. Who on campus is trained in first aid?</h3>
      <p>
        You&rsquo;re looking for people, not a cupboard. A well-stocked first aid box with
        nobody trained to use it is decoration.
      </p>
      <h3>7. How will I be contacted?</h3>
      <p>
        Directly, by phone, immediately — not through a note in the diary that you&rsquo;ll read
        at 5 PM. Ask specifically who calls and how quickly.
      </p>

      <h2>Bullying and how children are treated</h2>
      <h3>8. What is your process when a child is bullied?</h3>
      <p>
        The word to listen for is <em>process</em>. Who does a child report to? Is it written
        down? What happens in 24 hours? Are both sets of parents told?
      </p>
      <p>
        And be wary of the school that tells you bullying doesn&rsquo;t happen there. Bullying
        happens everywhere children gather. A school that claims otherwise either isn&rsquo;t
        looking or won&rsquo;t admit what it finds.
      </p>
      <h3>9. Who can a child talk to if they&rsquo;re upset about a teacher?</h3>
      <p>
        This is an uncomfortable question and that is exactly why it&rsquo;s useful. A good
        school has an answer — a named adult who isn&rsquo;t the class teacher. A school that
        bristles at the question has told you something.
      </p>
      <h3>10. What is your position on physical punishment?</h3>
      <p>
        It is illegal in India, so the only acceptable answer is a flat no. Watch how it&rsquo;s
        said. A school where it genuinely doesn&rsquo;t happen answers immediately and without
        qualification. Hesitation, or a joke, or &ldquo;only when absolutely necessary&rdquo;,
        is your answer.
      </p>

      <h2>Staff and supervision</h2>
      <h3>11. Are staff background-verified, including support staff?</h3>
      <p>
        Teachers are the easy part. Ask about drivers, cleaning staff, security, anyone who is
        around children without being a teacher. That is where verification is most often
        skipped.
      </p>
      <h3>12. Is a child ever alone with one adult behind a closed door?</h3>
      <p>
        The safeguarding standard is the two-adult rule, or at minimum visibility — an open
        door, a window, a corridor with people in it. A school that has thought seriously about
        child protection will know immediately what you&rsquo;re asking and will have a policy.
        A school that hasn&rsquo;t will look puzzled, and that puzzlement is the most important
        information you&rsquo;ll gather all day.
      </p>

      <blockquote>
        You are not looking for a school with no incidents. Every school has incidents. You are
        looking for a school that notices them, writes them down, tells you, and changes
        something afterward.
      </blockquote>

      <h2>Two things to watch that you can&rsquo;t ask about</h2>
      <p>
        Some of the best safety information on a school visit isn&rsquo;t in any answer.
      </p>
      <p>
        <strong>Watch a child approach a teacher.</strong> Do they walk up easily, or hesitate?
        Children in a safe school approach adults without calculating. That single observation
        tells you more than the whole safety policy.
      </p>
      <p>
        <strong>Look at the floors, stairs and playground.</strong> Are the stairs dry? Is there
        a handrail? Is the play equipment sound? Most childhood injuries at school are ordinary
        ones — slips, falls, sharp edges — and a school that manages those well is usually
        careful about everything else. In Eluru during the{" "}
        <Link href="/blog/monsoon-health-tips-for-school-children">monsoon</Link> especially, wet
        floors cause more harm than anything dramatic.
      </p>

      <h2>What you should tell the school</h2>
      <p>
        Safety runs both ways, and schools can only act on what they know. Please tell us:
      </p>
      <ul>
        <li>Any allergy, medical condition or medication — in writing, not verbally at the gate</li>
        <li>Two working phone numbers, updated when they change</li>
        <li>Exactly who is authorised to collect your child</li>
        <li>Any family situation we should handle sensitively — custody arrangements, a bereavement, anything a child might be carrying</li>
      </ul>
      <p>
        That last one matters more than parents realise. A teacher who knows a child&rsquo;s
        grandmother died last week treats that child differently, and better.
      </p>

      <h2>How we approach it</h2>
      <p>
        Our campus is supervised through the day, dispersal is controlled rather than left to
        the crowd, and if something happens to your child you will hear it from us by phone,
        that day, from a person — not in a note you find at bedtime.
      </p>
      <p>
        We&rsquo;d also rather you asked these twelve questions of us in person than took our
        word for it here. Come on any working day between 9 and 5, and ask.{" "}
        <Link href="/contact">Get in touch to arrange a visit</Link>, or read our fuller{" "}
        <Link href="/blog/how-to-choose-the-best-school-in-eluru">
          guide to choosing a school in Eluru
        </Link>.
      </p>
    </ArticleLayout>
  );
}
