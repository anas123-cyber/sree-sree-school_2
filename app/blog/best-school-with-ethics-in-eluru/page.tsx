import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import { pageMetadata } from "@/lib/metadata";
import { getPost } from "@/lib/posts";

const post = getPost("best-school-with-ethics-in-eluru")!;

export const metadata = pageMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${post.slug}`,
  image: post.image,
  article: true,
  keywords: [
    "best school with ethics",
    "best school with ethics in Eluru",
    "value based school in Eluru",
    "school with moral values Eluru",
    "ethics education for children",
    "Sree Sree School Eluru",
  ],
});

export default function Page() {
  return (
    <ArticleLayout slug={post.slug}>
      <p>
        A few months ago, one of our Grade V students found a fifty-rupee note near
        the water cooler. No one was watching. He could have slipped it into his
        pocket and no one would ever have known. Instead, he walked it straight to the
        staff room and handed it over. When his teacher asked why, he shrugged and said,
        &ldquo;It isn&rsquo;t mine, madam.&rdquo;
      </p>
      <p>
        That small, unremarkable moment is, honestly, the whole point of what we do. You
        can measure marks. You can&rsquo;t easily measure a child who does the right thing
        when nobody is looking. And yet that is exactly what most parents mean when they
        type <strong>&ldquo;best school with ethics in Eluru&rdquo;</strong> into their
        phones late at night.
      </p>

      <h2>&ldquo;Ethics&rdquo; is easy to print on a banner</h2>
      <p>
        Almost every school in Eluru will tell you it teaches values. It looks lovely on
        a brochure. But a value that lives only on the wall isn&rsquo;t really a value —
        it&rsquo;s a decoration. Children are far too sharp to be fooled by a poster. They
        learn honesty by watching how a teacher returns extra change, how a classmate is
        treated when they fail a test, how the school responds when someone tells the
        truth about a mistake.
      </p>
      <p>
        So when we talk about being a school with ethics, we don&rsquo;t mean we run a
        moral-science period once a week and tick a box. We mean we try — imperfectly, every
        single day — to make good behaviour the ordinary, expected way of doing things.
      </p>

      <h2>How we actually try to teach values</h2>
      <p>
        There is no magic to it. It comes down to a hundred small, repeated things:
      </p>
      <ul>
        <li>
          <strong>Ethical classes that use real situations,</strong> not just definitions.
          What would you do if your friend cheated? If you broke something and could blame
          someone else? We talk it through, together.
        </li>
        <li>
          <strong>Teachers who model it.</strong> Our staff know the children are always
          watching. Patience, fairness and honesty from an adult teach more than any lecture.
        </li>
        <li>
          <strong>A calm start with Yoga and Pranayama.</strong> A settled child is a kinder
          child. It&rsquo;s hard to be thoughtful when you&rsquo;re agitated — more on that in
          our piece on <Link href="/blog/why-morning-yoga-belongs-in-school">morning yoga</Link>.
        </li>
        <li>
          <strong>Owning up without fear.</strong> A child who is terrified of punishment
          learns to hide. We&rsquo;d rather a child feel safe enough to say &ldquo;I did it,
          I&rsquo;m sorry.&rdquo;
        </li>
      </ul>
      <blockquote>
        We&rsquo;d take an honest child with average marks over a dishonest topper any day.
        Thankfully, we&rsquo;ve found you rarely have to choose — the two grow together.
      </blockquote>

      <h2>What to look for when you visit a school</h2>
      <p>
        If you&rsquo;re a parent comparing schools in Eluru, don&rsquo;t just read the values
        page. Go and feel the place. A few honest questions worth asking:
      </p>
      <ul>
        <li>How do teachers speak to children who are struggling — with patience or with pressure?</li>
        <li>What actually happens when a child owns up to a mistake?</li>
        <li>Are the students relaxed and polite with each other, or only when the principal walks in?</li>
        <li>Is there time in the day for reflection, prayer, or quiet — or is every minute a race?</li>
      </ul>
      <p>
        The answers you&rsquo;ll find in the corridors, not the prospectus.
      </p>

      <h2>Why it matters more than ever</h2>
      <p>
        Children today grow up faster and with more noise around them than any generation
        before. Marks will open a door for them; character decides what they do once they
        walk through it. A strong moral foundation — honesty, empathy, discipline,
        responsibility — is the one thing that keeps working long after the exam is over.
      </p>
      <p>
        For nearly four decades in Eluru, that belief has been the quiet centre of everything
        at Sree Sree Educational Society. You can read more about{" "}
        <Link href="/about">who we are</Link> and our approach to{" "}
        <Link href="/academics">academics and values</Link> — or, better still, come and see
        it for yourself.
      </p>
      <p>
        If a school where your child learns to be good, not just to score well, is what
        you&rsquo;re after, we&rsquo;d love to meet you.{" "}
        <Link href="/contact">Come visit our campus</Link> — the fifty-rupee note will
        probably still be in the staff room, waiting for its owner.
      </p>
    </ArticleLayout>
  );
}
