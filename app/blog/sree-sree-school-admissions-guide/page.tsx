import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import { pageMetadata } from "@/lib/metadata";
import { getPost } from "@/lib/posts";
import { SITE } from "@/lib/site";

const post = getPost("sree-sree-school-admissions-guide")!;

export const metadata = pageMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${post.slug}`,
  image: post.image,
  article: true,
  keywords: [
    "Sree Sree School admission",
    "school admission Eluru",
    "how to apply to school in Eluru",
    "school admission process",
    "best school in Eluru admission",
    "admission open Eluru",
  ],
});

export default function Page() {
  return (
    <ArticleLayout slug={post.slug}>
      <p>
        For most families, choosing a school is the easy part. Actually starting the
        admission is where the nerves creep in — the paperwork, the &ldquo;are we too
        late?&rdquo;, the worry that it&rsquo;s all going to be complicated. We promise you
        it isn&rsquo;t. Here&rsquo;s exactly how admission works at Sree Sree, in plain words,
        so you know what to expect before you even pick up the phone.
      </p>

      <h2>First, just reach out — no forms yet</h2>
      <p>
        The very first step is simply to talk to us. You can call us on{" "}
        <a href={`tel:${SITE.phoneDial}`}>{SITE.phone}</a>, send a note to{" "}
        <a href={`mailto:${SITE.email}`}>{SITE.email}</a>, or fill in the short enquiry form
        on our <Link href="/contact">Contact page</Link>. Tell us your child&rsquo;s age and
        the class you&rsquo;re looking at, and we&rsquo;ll take it from there. No commitment,
        no pressure — this is just a conversation.
      </p>

      <h2>Come and see the school</h2>
      <p>
        We&rsquo;d always rather you visit than take our word for anything. Come and walk the
        corridors, see a <Link href="/specifications">classroom and the playground</Link>,
        and get a feel for the place while it&rsquo;s alive with children. Our office is open{" "}
        <strong>Monday to Saturday, 9:00 AM to 5:00 PM</strong>. A short visit tells you more
        than any brochure ever could, and it lets your child picture themselves here too.
      </p>

      <h2>A gentle meeting, not an exam</h2>
      <p>
        For younger children especially, any &ldquo;interaction&rdquo; is really just a
        friendly chat — a few questions, maybe some colours or numbers, mostly to help us
        understand your child and place them well. Please don&rsquo;t let anyone lose sleep
        over it. We&rsquo;re not looking for a genius; we&rsquo;re getting to know a child.
      </p>

      <h2>The documents you&rsquo;ll usually need</h2>
      <p>
        Keeping a small folder ready makes everything smoother. In most cases you&rsquo;ll be
        asked for:
      </p>
      <ul>
        <li>Your child&rsquo;s birth certificate (for date-of-birth proof)</li>
        <li>The report card or Transfer Certificate (TC) from the previous school, if any</li>
        <li>A few passport-size photographs</li>
        <li>Aadhaar card copies for the child and a parent</li>
      </ul>
      <p>
        Don&rsquo;t worry about getting this perfect on your own — our office will hand you the
        exact, up-to-date checklist for your child&rsquo;s class when you visit.
      </p>

      <h2>Securing the seat</h2>
      <p>
        Once the class has a place and the paperwork is in order, you complete the admission
        form, settle the fees, and that&rsquo;s it — your child is one of ours. We&rsquo;ll walk
        you through timings, uniforms, books and the first-day routine so nothing feels like a
        surprise. (If those first-day butterflies are already fluttering, our guide to{" "}
        <Link href="/blog/preparing-your-child-for-first-day-of-school">preparing for the first
        day</Link> may help.)
      </p>

      <blockquote>
        A quick, honest word on timing: popular classes do fill up, so it&rsquo;s always worth
        enquiring early — even if you&rsquo;re still deciding. An early conversation costs you
        nothing and keeps your options open.
      </blockquote>

      <h2>Still comparing schools? That&rsquo;s wise</h2>
      <p>
        If you&rsquo;re weighing us against other schools in Eluru — good, you should. Our
        guide on <Link href="/blog/how-to-choose-the-best-school-in-eluru">how to choose the
        best school in Eluru</Link> lays out the questions worth asking anywhere, not just here.
        And if values matter to you as much as marks, you might like our thoughts on being a{" "}
        <Link href="/blog/best-school-with-ethics-in-eluru">school with ethics</Link>.
      </p>

      <h2>We&rsquo;re here whenever you&rsquo;re ready</h2>
      <p>
        Admission needn&rsquo;t be stressful. Reach out, come see us, ask us anything —
        we&rsquo;ve welcomed families in Eluru for nearly four decades, and we&rsquo;d be glad
        to welcome yours.
      </p>
      <p>
        <Link href="/contact">Start your enquiry here</Link>, or simply call{" "}
        <a href={`tel:${SITE.phoneDial}`}>{SITE.phone}</a> — a real person will pick up and help.
      </p>
    </ArticleLayout>
  );
}
