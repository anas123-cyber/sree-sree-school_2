import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import { pageMetadata } from "@/lib/metadata";
import { getPost } from "@/lib/posts";

const post = getPost("why-telugu-matters-in-an-english-medium-world")!;

export const metadata = pageMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${post.slug}`,
  image: post.image,
  article: true,
  keywords: [
    "mother tongue importance for children",
    "Telugu in English medium school",
    "Andhra Pradesh Formation Day",
    "bilingual children benefits",
    "school in Eluru",
  ],
});

export default function Page() {
  return (
    <ArticleLayout slug={post.slug}>
      <p>
        Many parents in Andhra Pradesh share the same quiet worry. English opens doors, so we
        speak it more at home, read it more, choose it first. But in the rush, we sometimes
        notice our children can&rsquo;t read a Telugu newspaper, can&rsquo;t follow a
        grandmother&rsquo;s story, or have run out of words to describe what they feel.
      </p>
      <p>
        With Andhra Pradesh Formation Day on 1 November, it&rsquo;s a good moment to say it
        plainly: <strong>you do not have to choose</strong> between English and Telugu.
      </p>

      <h2>A strong mother tongue helps every other language</h2>
      <p>
        Children who are comfortable in the language they first think and dream in tend to
        learn other languages more easily. They understand how sentences work, and carry
        that into English, Hindi or any language they pick up later. Being bilingual is a
        strength, not a burden.
      </p>

      <h2>Language carries more than words</h2>
      <p>
        Lullabies, proverbs, folk tales, festival songs, the way an elder says something
        &mdash; these live in Telugu, and they carry our culture, humour and values. A child
        who loses the language slowly loses access to a family&rsquo;s memory.
      </p>
      <blockquote>
        English gives a child a wider world. Telugu gives that child a place to stand in it.
      </blockquote>

      <h2>Easy ways to keep Telugu alive at home</h2>
      <ul>
        <li>Make one meal or one hour a day a Telugu-speaking time.</li>
        <li>Tell and read Telugu stories &mdash; Chandamama-style tales, folk stories, poems.</li>
        <li>Sing songs together and let grandparents lead the storytelling.</li>
        <li>Write short notes, shopping lists or festival wishes in Telugu.</li>
        <li>Watch good children&rsquo;s content in Telugu together and talk about it.</li>
      </ul>

      <h2>What this means for school choice</h2>
      <p>
        A good school should help children grow confident in English without letting go of
        their roots. If you&rsquo;re weighing this up, our comparison of{" "}
        <Link href="/blog/english-medium-vs-telugu-medium-school">English-medium and Telugu-medium schools</Link>{" "}
        and our note on the{" "}
        <Link href="/blog/state-board-vs-cbse-in-andhra-pradesh">State Board and CBSE</Link>{" "}
        may help.
      </p>
      <p>
        Have questions about languages at our school?{" "}
        <Link href="/contact">Talk to our team</Link> or come and see our classrooms in Eluru.
      </p>
    </ArticleLayout>
  );
}
