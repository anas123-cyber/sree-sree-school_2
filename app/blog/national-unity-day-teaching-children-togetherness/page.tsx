import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import { pageMetadata } from "@/lib/metadata";
import { getPost } from "@/lib/posts";

const post = getPost("national-unity-day-teaching-children-togetherness")!;

export const metadata = pageMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${post.slug}`,
  image: post.image,
  article: true,
  keywords: [
    "National Unity Day for children",
    "Rashtriya Ekta Diwas school",
    "teaching unity to kids",
    "values education in school",
    "school in Eluru",
  ],
});

export default function Page() {
  return (
    <ArticleLayout slug={post.slug}>
      <p>
        On 31 October, India marks National Unity Day, remembering Sardar Vallabhbhai Patel
        and his work in bringing hundreds of princely states together into one nation. For
        children it can sound like a distant history lesson. But the idea behind it is one of
        the most practical things we can teach them: how to live well with people who are not
        the same as us.
      </p>

      <h2>Unity starts in the classroom</h2>
      <p>
        A class is a small India. Children come from different homes, speak different
        languages at home, eat different food, follow different customs. Unity isn&rsquo;t a
        slogan on the wall; it&rsquo;s the daily choice to share a bench, wait for a turn and
        stand up for a classmate.
      </p>

      <h2>Three ways to talk about it at home</h2>
      <ul>
        <li>
          <strong>Tell the story simply.</strong> Explain that a country is like a big family
          &mdash; many members, one home. Ask your child what keeps their own family together.
        </li>
        <li>
          <strong>Notice differences kindly.</strong> A friend who fasts, wears a different
          dress or speaks another language is not &ldquo;odd&rdquo;. Ask your child what they
          could learn from that friend.
        </li>
        <li>
          <strong>Do something together.</strong> Cooking a dish from another state, learning a
          few words in a new language, or visiting a neighbour&rsquo;s festival turns an idea
          into a memory.
        </li>
      </ul>
      <blockquote>
        Unity does not mean everyone being the same. It means everyone belonging.
      </blockquote>

      <h2>Respect, then responsibility</h2>
      <p>
        Children who learn to respect others also learn that a shared space needs shared
        effort &mdash; keeping the classroom clean, helping a younger child, working in a team.
        These are small acts, but they are exactly what a united country is made of.
      </p>

      <h2>How we see it at SREE SREE</h2>
      <p>
        Occasions like <Link href="/blog/independence-day-celebrations-in-school">Independence Day</Link>{" "}
        and National Unity Day are chances for children to feel part of something bigger than
        themselves, and our focus on{" "}
        <Link href="/blog/best-school-with-ethics-in-eluru">ethics and character</Link> runs
        through the whole school year.
      </p>
      <p>
        If you&rsquo;re looking for a school where values are lived, not just taught,{" "}
        <Link href="/contact">visit our campus in Eluru</Link>.
      </p>
    </ArticleLayout>
  );
}
