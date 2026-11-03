import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import { pageMetadata } from "@/lib/metadata";
import { getPost } from "@/lib/posts";

const post = getPost("a-safe-and-meaningful-diwali-for-school-children")!;

export const metadata = pageMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${post.slug}`,
  image: post.image,
  article: true,
  keywords: [
    "Diwali safety for children",
    "Diwali celebration at school",
    "festival values for kids",
    "eco friendly Diwali",
    "school in Eluru",
  ],
});

export default function Page() {
  return (
    <ArticleLayout slug={post.slug}>
      <p>
        Few days light up a child&rsquo;s face like Diwali does. New clothes, sweets from
        every neighbour, rows of diyas — and, of course, the crackers. It is a festival
        built for joy, and a good one to remember that joy and care go together.
      </p>
      <p>
        Here are a few simple ways to keep your child safe this Diwali and to let the
        festival teach something lasting.
      </p>

      <h2>1. Make safety a family rule, not a lecture</h2>
      <p>
        Children listen more when rules are clear and calm. Decide a few together before
        the day: an adult is always present, no crackers in hand, a bucket of water nearby,
        and a safe distance for everyone. When rules are set early, there are far fewer
        arguments in the moment.
      </p>
      <ul>
        <li>Cotton clothes are safer than loose, flowing fabric near flames.</li>
        <li>Keep diyas and candles away from curtains and low shelves.</li>
        <li>Know where the nearest first-aid kit is and keep it within reach.</li>
      </ul>

      <h2>2. Choose a quieter, greener festival</h2>
      <p>
        Pets, babies, older relatives and many children are frightened by loud noise, and
        the smoke is hard on young lungs. Diyas, rangoli, flowers and lights make a
        beautiful Diwali on their own. Let children design the rangoli — it keeps their
        hands busy and their creativity going.
      </p>
      <blockquote>
        The best part of Diwali was never the noise. It was always the light.
      </blockquote>

      <h2>3. Tell the story behind the lamps</h2>
      <p>
        Take ten minutes to tell your child the story of why we celebrate: light over
        darkness, good over wrong. Ask them what &ldquo;light&rdquo; could mean in their own
        life — kindness, honesty, helping a friend. A festival with meaning stays in the
        memory long after the sweets are finished.
      </p>

      <h2>4. Share, not just receive</h2>
      <p>
        Let your child pack sweets for the watchman, the house-help&rsquo;s family or a
        neighbour who lives alone. Giving, even in small ways, is a lesson in empathy that
        no textbook matches. It also ties neatly to the values we talk about in our piece
        on <Link href="/blog/raising-honest-kind-children">raising honest, kind children</Link>.
      </p>

      <h2>5. Eat with care</h2>
      <p>
        A few too many sweets are part of the fun, but balance helps. Keep fruit, dry
        fruits and water on the table too, and make sure children eat proper meals between
        the treats so they come back to school feeling well.
      </p>

      <h2>Festivals at SREE SREE</h2>
      <p>
        Celebrations are part of school life for us — you can see the spirit in how we mark
        occasions like{" "}
        <Link href="/blog/independence-day-celebrations-in-school">Independence Day</Link>.
        To see our campus and meet our teachers,{" "}
        <Link href="/contact">plan a visit</Link>. Wishing you and your family a bright,
        safe Diwali.
      </p>
    </ArticleLayout>
  );
}
