import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import { pageMetadata } from "@/lib/metadata";
import { getPost } from "@/lib/posts";

const post = getPost("beyond-the-classroom-co-curricular-activities")!;

export const metadata = pageMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${post.slug}`,
  image: post.image,
  article: true,
  keywords: [
    "co-curricular activities",
    "robotics for kids Eluru",
    "chess for children",
    "karate classes Eluru",
    "extracurricular activities school",
    "best school in Eluru",
  ],
});

export default function Page() {
  return (
    <ArticleLayout slug={post.slug}>
      <p>
        Some of the most important things a child learns at school are never written on a
        blackboard. The patience to think three moves ahead. The nerve to stand up after
        being knocked down. The thrill of making a machine do what you told it to. These
        don&rsquo;t come from a textbook — they come from everything that happens{" "}
        <em>beyond</em> the classroom.
      </p>
      <p>
        At Sree Sree, we&rsquo;ve never treated <Link href="/programs">co-curricular
        activities</Link> as a reward for finishing the &ldquo;real&rdquo; work. They <em>are</em>{" "}
        real work — just the kind that builds the parts of a child a test can&rsquo;t reach.
      </p>

      <h2>Chess: learning to think before you act</h2>
      <p>
        There&rsquo;s something wonderful about watching a restless nine-year-old go completely
        still over a chessboard. Chess quietly teaches what nagging never can — that every
        action has a consequence, that patience beats impulse, and that losing is just
        information for next time. Children who play begin to <em>pause and think</em>, and
        that habit spills into everything else they do.
      </p>

      <h2>Karate: confidence that stands up straight</h2>
      <p>
        Karate isn&rsquo;t really about fighting. It&rsquo;s about discipline, respect and the
        quiet confidence of a child who knows they can look after themselves. We&rsquo;ve
        watched shy children find their voice on the mat — bowing to a partner, holding a
        stance, earning each belt through sheer persistence. That self-assurance follows them
        into the classroom and the world.
      </p>

      <h2>Robotics and AI: builders, not just users</h2>
      <p>
        This generation has a screen in every hand. We&rsquo;d rather they learn to build the
        thing than only scroll it. In our robotics and AI sessions, children stop being
        consumers of technology and become creators — wiring, coding, testing, failing,
        fixing. The look on a child&rsquo;s face when their little robot finally moves is worth
        a hundred worksheets.
      </p>

      <blockquote>
        A child who has coded a robot, won a chess match and earned a karate belt walks
        differently. They&rsquo;ve learned, in their own bones, that they can figure hard
        things out.
      </blockquote>

      <h2>Sports and the playground: growing up in the open air</h2>
      <p>
        And then there&rsquo;s the simplest, oldest teacher of all — play. On the{" "}
        <Link href="/specifications">playground</Link>, children learn to win kindly, lose
        without sulking, pass the ball, include the newcomer and settle their own arguments.
        Teamwork, fitness and friendship, all in one noisy, happy hour.
      </p>

      <h2>Why it all matters</h2>
      <p>
        Marks open a few doors. But curiosity, resilience, discipline and the courage to try —
        those are the things that decide what a child actually does with their life. That&rsquo;s
        the whole idea behind a <Link href="/blog/why-holistic-education-matters">holistic
        education</Link>: not academics <em>or</em> activities, but both, feeding each other.
      </p>
      <p>
        If you&rsquo;d like to see your child light up somewhere unexpected — a chessboard, a
        keyboard, a karate mat — come and visit us. There&rsquo;s a good chance we&rsquo;ll find
        the thing that makes them come alive.{" "}
        <Link href="/contact">Say hello and plan a visit.</Link>
      </p>
    </ArticleLayout>
  );
}
