import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import { pageMetadata } from "@/lib/metadata";
import { getPost } from "@/lib/posts";

const post = getPost("preparing-your-child-for-first-day-of-school")!;

export const metadata = pageMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${post.slug}`,
  image: post.image,
  article: true,
  keywords: [
    "first day of school",
    "preparing child for school",
    "starting school tips",
    "primary school Eluru",
    "school readiness",
    "nursery admission Eluru",
  ],
});

export default function Page() {
  return (
    <ArticleLayout slug={post.slug}>
      <p>
        The first day of school is one of those quiet milestones that stays with a family
        forever — the too-big uniform, the new shoes, the little hand that doesn&rsquo;t quite
        want to let go of yours at the gate. It&rsquo;s a big day for your child. If we&rsquo;re
        honest, it&rsquo;s often a bigger one for the parents. Here are some gentle, practical
        ways to help everyone start well.
      </p>

      <h2>Talk about it — warmly, and often</h2>
      <p>
        In the weeks before, weave school into everyday chatter in a happy, matter-of-fact way.
        Talk about the friends they&rsquo;ll make, the games at interval, the teacher who
        can&rsquo;t wait to meet them. Children borrow their feelings from us; if we&rsquo;re
        calm and excited, they will be too. Try not to over-promise or over-warn — just paint
        it as the normal, good next step it is.
      </p>

      <h2>Visit before the first day</h2>
      <p>
        The unknown is what worries children. So make it known. If you can, bring your child to
        see the <Link href="/specifications">campus and classrooms</Link> beforehand — let them
        stand in the playground, spot where the water cooler is, meet a friendly face. Walking
        in on day one to a place they&rsquo;ve <em>already seen</em> makes all the difference.
        You&rsquo;re always welcome to arrange a visit through our{" "}
        <Link href="/contact">office</Link>.
      </p>

      <h2>Practise the routine</h2>
      <p>
        A few days before, start easing into school hours — waking, dressing, breakfast,
        bedtime. Let your child practise the small independences too: opening their own tiffin
        box and water bottle, putting on their shoes, packing their bag. These tiny wins add up
        to a child who feels capable rather than lost.
      </p>

      <ul>
        <li>Lay out the uniform and bag together the night before.</li>
        <li>Pack a lunch you know they love — familiarity is comforting on a strange day.</li>
        <li>Practise a cheerful goodbye phrase you&rsquo;ll both use at the gate.</li>
      </ul>

      <h2>Keep the goodbye short and sure</h2>
      <p>
        This is the hard part. When the moment comes, give a warm hug, a confident smile, and a
        clear &ldquo;I&rsquo;ll be back to pick you up after your snack — have fun!&rdquo; Then
        go. A long, teary, lingering goodbye tells a child there&rsquo;s something to be
        frightened of. A brief, certain one tells them: <em>this is safe, and I&rsquo;ll be
        back.</em> Nine times out of ten, the tears stop before you&rsquo;ve reached the gate.
      </p>

      <blockquote>
        Trust the teachers. Settling a nervous little one on day one is quite literally what we
        do best — and we&rsquo;ve had a lot of practice.
      </blockquote>

      <h2>Be ready for a wobble or two</h2>
      <p>
        Some children skip in on day one and cry in week three, when the newness wears off.
        That&rsquo;s completely normal — it isn&rsquo;t a sign you&rsquo;ve done anything wrong.
        Keep the routine steady, stay calm, talk to your child&rsquo;s teacher, and give it a
        little time. Almost every child settles into a rhythm they come to love.
      </p>

      <h2>And look after yourself too</h2>
      <p>
        It&rsquo;s okay to feel a lump in your throat at that gate. Handing your child to the
        world for the first time is a real, tender thing. But it&rsquo;s also the beginning of
        friendships, discoveries and a confidence that will carry them for years. You&rsquo;re
        not losing your little one — you&rsquo;re watching them grow.
      </p>
      <p>
        If your child is starting school soon and you&rsquo;d like to see where they&rsquo;ll
        spend their days, we&rsquo;d love to show you around SREE SREE.{" "}
        <Link href="/about">Learn a little about us</Link> or{" "}
        <Link href="/contact">come and visit</Link> — the first hello is always the nicest part.
      </p>
    </ArticleLayout>
  );
}
