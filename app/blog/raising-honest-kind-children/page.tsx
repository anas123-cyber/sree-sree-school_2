import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import { pageMetadata } from "@/lib/metadata";
import { getPost } from "@/lib/posts";

const post = getPost("raising-honest-kind-children")!;

export const metadata = pageMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${post.slug}`,
  image: post.image,
  article: true,
  keywords: [
    "raising honest children",
    "teaching values to kids",
    "good parenting habits",
    "character building for children",
    "value based education",
    "best school with ethics in Eluru",
  ],
});

export default function Page() {
  return (
    <ArticleLayout slug={post.slug}>
      <p>
        Every parent wants the same thing, deep down: not just a successful child, but a
        good one. Honest. Kind. Someone who&rsquo;ll be decent to the people around them long
        after we&rsquo;re not there to remind them. The good news — and the slightly daunting
        news — is that character isn&rsquo;t taught in one big conversation. It&rsquo;s built
        in a thousand small, ordinary moments, most of which don&rsquo;t feel important at the
        time.
      </p>
      <p>
        After years of watching children grow up at our school, here are the small habits we
        keep coming back to. None of them are grand. That&rsquo;s exactly why they work.
      </p>

      <h2>1. Let them tell the truth without flinching</h2>
      <p>
        A child who is terrified of your reaction learns to lie well, not to behave well.
        When your child owns up to something — a broken glass, a bad mark, a fight — try to
        pause before you react. The braver the confession, the gentler the first response
        should be. You can address the mistake in a moment; you never want to punish the
        honesty. That single habit does more for a child&rsquo;s integrity than any lecture.
      </p>

      <h2>2. Give them real jobs</h2>
      <p>
        Responsibility isn&rsquo;t a value you explain; it&rsquo;s a muscle you build. Let
        your child lay the plates, water the plants, carry their own bag, look after a younger
        cousin for ten minutes. Small duties, done regularly, quietly tell a child: <em>you
        are capable, and this family counts on you.</em> Children who are trusted with things
        tend to grow up trustworthy.
      </p>

      <h2>3. Say sorry to them when you&rsquo;re wrong</h2>
      <p>
        This one is hard for all of us. But a parent who can say &ldquo;I was too harsh, I&rsquo;m
        sorry&rdquo; teaches something no textbook can: that apologising isn&rsquo;t weakness, and
        that being an adult doesn&rsquo;t mean always being right. Children who see grown-ups
        own their mistakes learn to own their own.
      </p>
      <blockquote>
        Children rarely do what we tell them and almost always do what we do. The values you
        want them to carry are the ones they watch you live.
      </blockquote>

      <h2>4. Protect time to eat together</h2>
      <p>
        It sounds too simple to matter, but the family meal is where an enormous amount of
        quiet teaching happens — taking turns to speak, waiting for others, hearing about
        someone else&rsquo;s day, sharing the last piece. Even a few unhurried meals a week,
        with the phones away, do more for a child than most of us realise.
      </p>

      <h2>5. Praise the effort, not just the trophy</h2>
      <p>
        When we only celebrate winning and top marks, children learn to fear failure and hide
        it. When we notice the hard work — &ldquo;you really stuck with that&rdquo; — they learn
        that trying is the thing that counts. That&rsquo;s the mindset that carries a child
        through the setbacks that school, and life, will absolutely bring.
      </p>

      <h2>6. Let them be bored, and be around others</h2>
      <p>
        A little boredom sparks imagination. And unstructured time with other children — the
        squabbles, the making-up, the sharing — is where empathy is actually practised. You
        can&rsquo;t lecture a child into being kind; they learn it by bumping up against other
        people and figuring it out.
      </p>

      <h2>School and home, pulling the same way</h2>
      <p>
        Here&rsquo;s the honest truth: a school can only do so much on its own, and so can a
        home. Values grow best when the two say the same things. That&rsquo;s why, at Sree
        Sree, our <Link href="/blog/best-school-with-ethics-in-eluru">approach to ethics</Link>{" "}
        isn&rsquo;t a separate subject — it&rsquo;s woven through the whole day, and it works
        best hand-in-hand with what you&rsquo;re already doing at home.
      </p>
      <p>
        If you&rsquo;re looking for a school in Eluru that will partner with you in raising an
        honest, kind, confident child — not just a high scorer — we&rsquo;d be glad to talk.{" "}
        <Link href="/about">Learn more about us</Link> or{" "}
        <Link href="/contact">come and visit our campus</Link>. Your child is already becoming
        someone; we&rsquo;d love to help it be someone wonderful.
      </p>
    </ArticleLayout>
  );
}
