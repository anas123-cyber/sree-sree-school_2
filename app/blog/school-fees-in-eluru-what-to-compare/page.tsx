import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import JsonLd from "@/components/JsonLd";
import { faqSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { getPost } from "@/lib/posts";

const post = getPost("school-fees-in-eluru-what-to-compare")!;

export const metadata = pageMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${post.slug}`,
  image: post.image,
  article: true,
  keywords: [
    "school fees in Eluru",
    "affordable schools in Eluru",
    "school fee structure Andhra Pradesh",
    "best value school Eluru",
    "school admission cost Eluru",
    "hidden school fees India",
  ],
});

const faqs = [
  {
    question: "What is included in school fees in Eluru?",
    answer:
      "Most schools in Eluru quote an annual tuition fee, but the total cost usually also includes an admission or registration fee, books and stationery, two sets of uniform, examination fees, and optional charges such as transport or special activity programmes. Always ask for the full annual cost in writing before comparing two schools.",
  },
  {
    question: "How do I compare school fees between two schools fairly?",
    answer:
      "Add up the complete first-year cost of each school — tuition, admission fee, books, uniforms, exam fees, transport and activity charges — then divide by twelve to get a real monthly figure. Comparing only the headline tuition fee is misleading, because schools split their charges differently.",
  },
  {
    question: "Are higher school fees a sign of better education?",
    answer:
      "No. Fees mostly reflect a school's infrastructure, location and marketing spend rather than teaching quality. Teacher experience, class size, teacher retention and how the school handles a struggling child are far better indicators of the education your child will actually receive.",
  },
  {
    question: "Can school fees be paid in instalments in Eluru?",
    answer:
      "Many schools in Eluru, including SREE SREE Educational Society, accept fee payment in terms or instalments rather than one lump sum. Ask the office directly about the instalment schedule and whether any late-payment charge applies, and get the answer in writing.",
  },
];

export default function Page() {
  return (
    <ArticleLayout slug={post.slug}>
      <JsonLd data={faqSchema(faqs)} />

      <p>
        Somewhere around this time of year, a familiar conversation happens in a lot of
        Eluru homes. Two or three school brochures on the table, a calculator on the phone,
        and a question that sounds simple but isn&rsquo;t: <em>which one can we afford, and
        which one is worth it?</em>
      </p>
      <p>
        We&rsquo;ve run a school here since 1987, and we&rsquo;ve sat across the table from
        thousands of parents having exactly this conversation. So let us say something a
        school isn&rsquo;t supposed to say out loud: the fee number on the first page of a
        brochure tells you almost nothing useful. Here is what actually helps.
      </p>

      <h2>The number you should be comparing isn&rsquo;t the tuition fee</h2>
      <p>
        Schools split their charges differently. One school quotes a low tuition fee and
        recovers it through books, uniforms, activity fees and &ldquo;annual charges&rdquo;.
        Another quotes one inclusive number that looks higher but has nothing behind it.
        Compare those two headline figures and you will reach the wrong conclusion.
      </p>
      <p>
        Instead, ask every school for the <strong>total first-year outgo</strong> in writing.
        That means:
      </p>
      <ul>
        <li>Admission or registration fee (usually one-time)</li>
        <li>Annual tuition fee, and how it is split across terms</li>
        <li>Books, notebooks and stationery</li>
        <li>Two sets of uniform, plus sports uniform and shoes</li>
        <li>Examination and assessment fees</li>
        <li>Transport, if you need it — usually charged by distance slab</li>
        <li>Activity, lab or computer charges, if billed separately</li>
        <li>Anything described as &ldquo;annual&rdquo;, &ldquo;development&rdquo; or &ldquo;miscellaneous&rdquo;</li>
      </ul>
      <p>
        Add it up. Divide by twelve. <em>That</em> is your monthly number, and it is the only
        one worth putting side by side with another school&rsquo;s.
      </p>

      <h2>Ask what happens in year two and year three</h2>
      <p>
        This is the question almost nobody asks, and it&rsquo;s the one that catches families
        out. A one-time admission fee makes year one look expensive and year two look cheap.
        A school with steep annual hikes makes year one look affordable and Grade 5 look
        impossible.
      </p>
      <p>
        Ask plainly: <em>by how much have your fees risen in each of the last three years?</em>
        A school that answers openly is telling you something good about how it will treat
        you later. A school that gets vague is also telling you something.
      </p>
      <blockquote>
        A fee you can pay comfortably for ten years is worth far more to your child than one
        you can manage brilliantly for two and then have to run from.
      </blockquote>

      <h2>Higher fees do not mean better teaching</h2>
      <p>
        We want to be careful here, because this can sound like a school defending itself.
        So let&rsquo;s be specific about where fee money actually goes. A large share of a
        premium fee typically pays for land, buildings, air conditioning, buses and
        advertising. Some of that matters to a child. A lot of it doesn&rsquo;t.
      </p>
      <p>
        What genuinely changes your child&rsquo;s education is much less photogenic:
      </p>
      <ul>
        <li><strong>How many children are in the class.</strong> Forty-five versus thirty is a completely different childhood.</li>
        <li><strong>How long teachers stay.</strong> A school where teachers leave every year is unstable no matter how good the building looks.</li>
        <li><strong>What happens to a child who falls behind.</strong> Is there a plan, or just a remark in the diary?</li>
        <li><strong>Whether the school knows your child.</strong> In a well-run school, the class teacher can tell you something about your child that isn&rsquo;t a mark.</li>
      </ul>
      <p>
        None of those four things appear on a fee structure. All four cost you nothing extra
        to ask about. We wrote more about how to weigh them in our{" "}
        <Link href="/blog/how-to-choose-the-best-school-in-eluru">
          guide to choosing the best school in Eluru
        </Link>.
      </p>

      <h2>The costs parents forget to count</h2>
      <p>
        Two things quietly inflate the real cost of schooling in Eluru, and neither appears
        on any receipt.
      </p>
      <p>
        The first is <strong>tuition</strong>. If a school&rsquo;s teaching is such that most
        of its students need private coaching by Grade 6, then your true fee is the school
        fee plus the tuition fee. Ask parents of children already in that school whether
        their child goes for tuition, and why. It&rsquo;s the most honest fee audit
        available to you. We&rsquo;ve written separately about{" "}
        <Link href="/blog/does-my-child-really-need-tuition">
          when tuition genuinely helps and when it hides a problem
        </Link>.
      </p>
      <p>
        The second is <strong>distance</strong>. A school forty minutes away costs your
        child eighty minutes of their day, every day, for a decade. That is not a rupee
        cost, but it is real, and children pay it in sleep.
      </p>

      <h2>How to have the fee conversation without embarrassment</h2>
      <p>
        Please don&rsquo;t feel awkward asking. Every good school office has this
        conversation a hundred times a year, and a school that makes you feel small for
        asking about money will not treat your child well either.
      </p>
      <p>Simple, direct questions that always work:</p>
      <ol>
        <li>&ldquo;Can I have the complete first-year cost in writing, including everything?&rdquo;</li>
        <li>&ldquo;Can this be paid in instalments? What is the schedule?&rdquo;</li>
        <li>&ldquo;How much did fees increase last year?&rdquo;</li>
        <li>&ldquo;If I have two children here, is there any concession?&rdquo;</li>
        <li>&ldquo;What is the refund position if we move cities mid-year?&rdquo;</li>
      </ol>

      <h2>What we do at SREE SREE, and why</h2>
      <p>
        Our founder started this institution in 1987 with a plain conviction: a good
        education should not be reserved for families who can pay the most. Thirty-eight
        years and more than 10,000 students later, that is still how we set our fees. We
        keep them within reach of ordinary Eluru families, we tell you the full number
        upfront, and we accept payment in instalments so that no child sits out a term over
        timing.
      </p>
      <p>
        We would rather spend on teachers, labs, the playground and the things children
        actually touch than on things that photograph well. If that is the kind of school
        you are looking for, come and see it — the{" "}
        <Link href="/about">campus in Sanivarapupeta</Link> is open Monday to Saturday, and
        we&rsquo;ll happily give you the full fee sheet before you ask twice.
      </p>

      <h2>Common questions about school fees in Eluru</h2>
      <h3>What is included in school fees?</h3>
      <p>
        Most schools quote annual tuition, but the real total also includes admission fees,
        books, uniforms, exam fees and optional transport or activity charges. Ask for the
        full annual cost in writing.
      </p>
      <h3>Do higher fees mean better education?</h3>
      <p>
        No. Fees mostly reflect infrastructure, location and marketing. Class size, teacher
        experience, teacher retention and how a school handles a struggling child tell you
        far more about the education your child will receive.
      </p>
      <h3>Can fees be paid in instalments?</h3>
      <p>
        At many Eluru schools, including ours, yes. Ask for the instalment schedule and any
        late-payment terms in writing before you enrol.
      </p>
      <p>
        Have a question we haven&rsquo;t answered here?{" "}
        <Link href="/contact">Ask us directly</Link> — we&rsquo;ll give you a straight
        answer, whether or not you choose us.
      </p>
    </ArticleLayout>
  );
}
