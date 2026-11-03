import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import { pageMetadata } from "@/lib/metadata";
import { getPost } from "@/lib/posts";

const post = getPost("healthy-school-lunchbox-ideas-andhra")!;

export const metadata = pageMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${post.slug}`,
  image: post.image,
  article: true,
  keywords: [
    "healthy lunch box ideas for school",
    "tiffin ideas for kids",
    "Andhra lunch box recipes",
    "school snack ideas India",
    "kids lunchbox nutrition",
    "easy morning tiffin",
  ],
});

export default function Page() {
  return (
    <ArticleLayout slug={post.slug}>
      <p>
        Teachers see something parents don&rsquo;t: the lunchbox at the end of the day. And
        after enough years of it, you learn some fairly reliable rules. Bright red pickle
        never comes back. Anything that has gone soggy comes back. And the beautifully
        arranged salad a hopeful parent packed on Monday comes back entirely untouched, every
        single time.
      </p>
      <p>
        So this isn&rsquo;t a list of ideal meals. It&rsquo;s what actually gets eaten by
        children in Eluru, put together in a real morning with a real amount of time.
      </p>

      <h2>The simple formula</h2>
      <p>
        You don&rsquo;t need variety every day. You need a shape you can fill quickly.
        Something from each of these three, and you&rsquo;re done:
      </p>
      <ul>
        <li>
          <strong>Something filling</strong> — rice, chapati, idli, dosa, upma, pulao. This is
          the fuel that gets your child through to 3:30.
        </li>
        <li>
          <strong>Something with protein</strong> — dal, curd, egg, paneer, chana, groundnut
          chutney. This is the part most commonly missing, and it&rsquo;s the part that stops
          the mid-afternoon slump.
        </li>
        <li>
          <strong>Something with colour</strong> — carrot, cucumber, beetroot, banana, a
          seasonal fruit. Small quantities. A little that gets eaten beats a lot that
          doesn&rsquo;t.
        </li>
      </ul>

      <h2>Ten tiffins that come home empty</h2>
      <ol>
        <li><strong>Curd rice with a little grated carrot</strong> — travels well, doesn&rsquo;t spoil, and is genuinely gentle on a hot or humid day.</li>
        <li><strong>Lemon rice with groundnuts</strong> — quick from leftover rice, and the peanuts add protein.</li>
        <li><strong>Idli with peanut chutney</strong> — three idlis, chutney in a separate small box so nothing goes soggy.</li>
        <li><strong>Chapati rolls with dal or paneer</strong> — rolled, not folded. Easier for small hands, and no cutlery needed.</li>
        <li><strong>Upma with vegetables</strong> — fast, warm, filling. Add peas and carrot and it covers two of the three groups at once.</li>
        <li><strong>Vegetable pulao with curd</strong> — a Sunday favourite that works even better as Monday tiffin.</li>
        <li><strong>Pesarattu or dosa, rolled</strong> — pesarattu especially: moong dal makes it one of the better protein options.</li>
        <li><strong>Boiled egg with chapati</strong> — plain, cheap, and among the most complete things you can pack.</li>
        <li><strong>Poha with peanuts and lemon</strong> — light, quick, and it doesn&rsquo;t turn heavy by lunchtime.</li>
        <li><strong>Curd rice with a small piece of pickle</strong> — the classic, and there&rsquo;s a reason it endures.</li>
      </ol>
      <p>
        None of these need a special trip to the shop or an extra twenty minutes in the
        morning. That is the point.
      </p>

      <h2>What comes back full, and why</h2>
      <p>Some honest observations from the end of the school day:</p>
      <ul>
        <li>
          <strong>Anything that has gone soggy.</strong> Chutney poured over idli at 7:30 AM is
          a paste by 12:30. Pack wet things separately, always.
        </li>
        <li>
          <strong>Too much of one thing.</strong> A box packed for an adult overwhelms a child,
          who then eats nothing. Less food, more often eaten.
        </li>
        <li>
          <strong>Things that need cutting.</strong> A whole apple comes home. Sliced apple gets
          eaten. Children have twenty minutes and a lot of friends to talk to.
        </li>
        <li>
          <strong>Anything too spicy.</strong> What&rsquo;s mild at home is much harsher when
          it&rsquo;s cold and there&rsquo;s only a water bottle for relief.
        </li>
        <li>
          <strong>Salad, in almost every case.</strong> We&rsquo;re sorry. Grate the vegetables
          into the rice instead, and they will disappear without comment.
        </li>
      </ul>
      <blockquote>
        A child who eats half a plain lunch is better fed than a child who eats none of a
        perfect one. Pack for the child you have, not the one in the health article.
      </blockquote>

      <h2>Monsoon and hot-weather rules</h2>
      <p>
        In Eluru&rsquo;s humidity, food safety in a lunchbox isn&rsquo;t a theoretical concern.
        A few things genuinely matter:
      </p>
      <ul>
        <li>
          <strong>Cook it that morning.</strong> Last night&rsquo;s curry sitting in a warm bag
          for five hours is how a stomach upset happens.
        </li>
        <li>
          <strong>Curd-based food is your friend in the heat</strong>, and coconut or
          fried-onion dishes are not — they turn fastest.
        </li>
        <li>
          <strong>Cool food before closing the box.</strong> Steam trapped in a sealed box is
          what makes everything soggy and speeds up spoiling.
        </li>
        <li>
          <strong>Water from home, in a sealed bottle</strong>, filled to last the whole day.
          More on this in our{" "}
          <Link href="/blog/monsoon-health-tips-for-school-children">monsoon health post</Link>.
        </li>
      </ul>

      <h2>The snack box question</h2>
      <p>
        Most children need something small in the morning break, and this is where packet food
        creeps in. Sensible alternatives that survive a school bag:
      </p>
      <ul>
        <li>A banana — the most convenient fruit ever invented</li>
        <li>Roasted chana or a small handful of groundnuts</li>
        <li>Two dates or a few raisins</li>
        <li>A boiled egg</li>
        <li>A small piece of homemade sweet — this is not a crime</li>
      </ul>
      <p>
        We&rsquo;re not going to tell you never to pack a biscuit. A packet of biscuits on a
        rushed Wednesday is a perfectly reasonable thing. It&rsquo;s the everyday pattern that
        matters, not the exception.
      </p>

      <h2>Get your child into the kitchen</h2>
      <p>
        The single most effective trick we know: let your child help pack it. A child who
        chose between curd rice and lemon rice on Sunday evening eats it on Monday. A child who
        washed the coriander eats what it went into.
      </p>
      <p>
        It costs you five minutes and buys a week of empty boxes. It also teaches something
        beyond food — the small daily responsibility we try to build at school too, in{" "}
        <Link href="/blog/raising-honest-kind-children">a hundred ordinary ways</Link>.
      </p>

      <h2>And what we notice at school</h2>
      <p>
        Children who eat a proper lunch are different in the afternoon. Sharper in the last two
        periods, steadier in games, less irritable with each other. It is not a small effect
        and it isn&rsquo;t subtle — any teacher will tell you which children have eaten.
      </p>
      <p>
        So if the morning rush means the lunchbox gets four minutes instead of ten, take the
        ten. It&rsquo;s one of the highest-return ten minutes in your child&rsquo;s day.
      </p>
      <p>
        Want to see how a school day fits together at SREE SREE? Read{" "}
        <Link href="/blog/a-day-in-the-life-at-sree-sree-school">a day in the life here</Link>,
        or <Link href="/contact">come and visit us in Eluru</Link>.
      </p>
    </ArticleLayout>
  );
}
