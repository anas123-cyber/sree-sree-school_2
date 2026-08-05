import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import JsonLd from "@/components/JsonLd";
import { faqSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { getPost } from "@/lib/posts";

const post = getPost("mid-year-school-admission-in-eluru")!;

export const metadata = pageMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${post.slug}`,
  image: post.image,
  article: true,
  keywords: [
    "mid year school admission Eluru",
    "changing schools mid year",
    "school transfer certificate Andhra Pradesh",
    "admission open Eluru",
    "school admission after academic year starts",
    "TC procedure school India",
  ],
});

const faqs = [
  {
    question: "Can I get admission for my child mid-year in Eluru?",
    answer:
      "Yes. Schools in Eluru, including Sree Sree Educational Society, accept mid-year admissions across grades subject to seat availability. You will need a Transfer Certificate from the previous school, recent report cards, the birth certificate and Aadhaar, and usually a short interaction so the school can place your child correctly.",
  },
  {
    question: "What documents are needed for a mid-year school transfer?",
    answer:
      "The standard set is the Transfer Certificate (TC) from the previous school, the most recent progress report or marks memo, the child's birth certificate, Aadhaar card, passport-size photographs, and in some cases a caste or income certificate if applying for any concession. Ask the new school for its exact list before you request the TC.",
  },
  {
    question: "Will changing schools mid-year affect my child's studies?",
    answer:
      "There is usually a short adjustment period of two to six weeks covering both syllabus differences and friendships. Most children settle well when the move happens for a clear reason and the new school provides bridging support. The disruption is far smaller than the cost of leaving a child in a school where they are genuinely unhappy or unsafe.",
  },
  {
    question: "Is it better to change schools now or wait until next June?",
    answer:
      "Wait until June if the issue is minor and likely to resolve, such as a single difficult subject or an early settling-in wobble. Move now if the concern is safety, sustained unhappiness, bullying that the school will not address, or a school that cannot tell you anything specific about your child.",
  },
];

export default function Page() {
  return (
    <ArticleLayout slug={post.slug}>
      <JsonLd data={faqSchema(faqs)} />

      <p>
        The academic year has been running for a few weeks now. And in some homes in Eluru, a
        quiet doubt has set in. Your child comes home flat. Or the notebooks are half empty.
        Or you asked the class teacher a simple question and got an answer that could have
        been about anybody&rsquo;s child.
      </p>
      <p>
        So the question arrives: <em>do we move now, or do we wait until June?</em>
      </p>
      <p>
        We get these calls every July and August. Here is how we actually talk parents
        through it — including the times we tell them not to move.
      </p>

      <h2>When we&rsquo;d tell you to wait</h2>
      <p>
        A lot of mid-year worry turns out to be ordinary settling-in, and pulling a child out
        for it costs more than it fixes. Wait if:
      </p>
      <ul>
        <li>
          <strong>It&rsquo;s only been a few weeks.</strong> Almost every child dips in the
          first month of a new grade. New teacher, harder syllabus, friends in a different
          section. Give it until the first assessment.
        </li>
        <li>
          <strong>The problem is one subject.</strong> That is a fixable problem, and moving
          schools is an extremely expensive way to fix it. Ask for help first.
        </li>
        <li>
          <strong>You haven&rsquo;t raised it with the school yet.</strong> You&rsquo;d be
          surprised how often one honest conversation with a class teacher changes everything.
          Give the school a chance to respond before you write it off.
        </li>
        <li>
          <strong>Your child is in Grade 10.</strong> Unless something serious is wrong, do
          not move a child in their board year. Finish it, then decide.
        </li>
      </ul>

      <h2>When we&rsquo;d tell you to move, and not to wait</h2>
      <p>Some things do not improve with patience. Move if:</p>
      <ul>
        <li>
          <strong>Your child doesn&rsquo;t feel safe.</strong> Nothing else on this list
          outranks it. Not fees paid, not the term already begun, not what relatives will say.
        </li>
        <li>
          <strong>There is bullying and the school won&rsquo;t act.</strong> Not
          &ldquo;can&rsquo;t&rdquo; — <em>won&rsquo;t</em>. A school that minimises it in
          August will minimise it in December.
        </li>
        <li>
          <strong>Nobody at the school knows your child.</strong> If the class teacher cannot
          tell you one specific, non-academic thing about your child, your child is a roll
          number there.
        </li>
        <li>
          <strong>Your child has stopped talking about school entirely.</strong> Children
          complain about school constantly; that&rsquo;s normal. Silence is different, and
          it&rsquo;s worth paying attention to.
        </li>
      </ul>
      <blockquote>
        A term is ten weeks. A childhood is one. When those two are in conflict, we have never
        once regretted advising a parent to protect the childhood.
      </blockquote>

      <h2>What a mid-year admission actually involves</h2>
      <p>
        Parents often imagine this is far harder than it is. In practice it is a short,
        ordinary process.
      </p>
      <ol>
        <li>
          <strong>Call the new school first.</strong> Before anything else, confirm a seat is
          available in that grade. Do not request a TC until you have this.
        </li>
        <li>
          <strong>Visit with your child.</strong> Most schools, including ours, will want a
          short, friendly interaction — not an exam. It is so we know where to place your
          child and what support they might need in the first month.
        </li>
        <li>
          <strong>Collect your documents.</strong> Transfer Certificate, latest progress
          report, birth certificate, Aadhaar, photographs. Ask the new school for its exact
          list first, so you make one trip and not three.
        </li>
        <li>
          <strong>Request the TC.</strong> Do this politely and in writing. Schools are
          obliged to issue it; if yours delays, ask for the reason in writing too, which
          usually resolves matters quickly.
        </li>
        <li>
          <strong>Settle the fee position.</strong> Ask the new school how it prorates fees
          for a mid-year join. Ask the old school about any refund. Get both in writing.
        </li>
      </ol>
      <p>
        Our{" "}
        <Link href="/blog/sree-sree-school-admissions-guide">
          full admissions guide
        </Link>{" "}
        walks through the same process in more detail.
      </p>

      <h2>Helping your child land well</h2>
      <p>
        The paperwork is the easy part. The bit that matters is the first two weeks.
      </p>
      <ul>
        <li>
          <strong>Explain the move honestly.</strong> Children handle a clear reason far
          better than a vague one. &ldquo;We think you&rsquo;ll be happier there&rdquo; is
          enough. Don&rsquo;t make it about their failure.
        </li>
        <li>
          <strong>Tell the new class teacher what to watch for.</strong> If your child is shy,
          say so on day one. It changes how they&rsquo;re seated and who they&rsquo;re paired
          with.
        </li>
        <li>
          <strong>Expect a syllabus gap.</strong> Different schools cover chapters in
          different orders. Ask the new school for a bridging plan — a good one will already
          have thought about it.
        </li>
        <li>
          <strong>Give it six weeks before you judge.</strong> Friendships take about that
          long. Week two is not the verdict.
        </li>
      </ul>
      <p>
        Much of what helps here is the same as helping any child start school — our post on{" "}
        <Link href="/blog/preparing-your-child-for-first-day-of-school">
          preparing your child for the first day
        </Link>{" "}
        applies just as well to a mid-year move.
      </p>

      <h2>If you&rsquo;re considering us</h2>
      <p>
        Admissions at Sree Sree are open across grades, including mid-year, subject to seats.
        We&rsquo;ll want to meet your child, understand what wasn&rsquo;t working, and be
        honest with you about whether we&rsquo;re the right fit — sometimes we&rsquo;ve told
        parents to stay where they are, and meant it.
      </p>
      <p>
        Come and see the <Link href="/specifications">campus</Link>, meet a teacher, and ask
        us anything. Call 08812-244084 or{" "}
        <Link href="/contact">send us an enquiry</Link> and we&rsquo;ll get back to you within
        a working day.
      </p>

      <h2>Frequently asked questions</h2>
      <h3>Can I get admission mid-year in Eluru?</h3>
      <p>
        Yes — schools here, including ours, take mid-year admissions across grades subject to
        seat availability. Confirm the seat before requesting a TC from the current school.
      </p>
      <h3>What documents do I need?</h3>
      <p>
        Transfer Certificate, the latest progress report or marks memo, birth certificate,
        Aadhaar, and passport photographs. Ask the new school for its exact list first.
      </p>
      <h3>Will the move disrupt my child&rsquo;s studies?</h3>
      <p>
        Expect two to six weeks of adjustment. With a clear reason for the move and bridging
        support from the new school, most children settle well.
      </p>
    </ArticleLayout>
  );
}
