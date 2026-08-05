import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import { pageMetadata } from "@/lib/metadata";
import { getPost } from "@/lib/posts";

const post = getPost("monsoon-health-tips-for-school-children")!;

export const metadata = pageMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${post.slug}`,
  image: post.image,
  article: true,
  keywords: [
    "monsoon health tips for children",
    "rainy season child health India",
    "school children fever cough monsoon",
    "dengue prevention children",
    "monsoon safety school Eluru",
    "child immunity rainy season",
  ],
});

export default function Page() {
  return (
    <ArticleLayout slug={post.slug}>
      <p>
        You can tell the monsoon has properly arrived in Eluru without looking outside.
        You can hear it in the classrooms. By the third week of July, every room has its own
        small chorus of coughs, three or four empty desks, and at least one child sitting in
        damp socks pretending they&rsquo;re fine.
      </p>
      <p>
        Some of this is unavoidable — children and rain belong together. But a surprising
        amount of monsoon illness is preventable with about five minutes of effort a day.
        Here is what we&rsquo;ve learned watching it happen for thirty-eight years.
      </p>

      <h2>The three things that actually make children ill in the rains</h2>
      <p>
        Not the rain itself, whatever your grandmother said. In our experience it comes down
        to three things, in this order:
      </p>
      <ol>
        <li>
          <strong>Staying wet.</strong> Not getting wet — <em>staying</em> wet. A child who
          gets drenched and changes is fine. A child who sits in a damp uniform from 9 AM to
          3:30 PM in a fan-cooled room is the one who comes down with a fever by Thursday.
        </li>
        <li>
          <strong>Water and street food.</strong> The monsoon is when contaminated water finds
          its way into everything. Most of the stomach upsets we see trace back to a water
          bottle refilled somewhere unsafe, or a snack bought on the walk home.
        </li>
        <li>
          <strong>Standing water near home.</strong> Dengue and chikungunya don&rsquo;t come
          from far away. They breed in the water sitting in your own flower pot, your
          neighbour&rsquo;s discarded tyre, the tray under the fridge.
        </li>
      </ol>

      <h2>The five-minute morning checklist</h2>
      <p>
        We&rsquo;d honestly rather send you this than another list of general advice. Before
        your child leaves in the morning during the rains:
      </p>
      <ul>
        <li>
          <strong>A spare set of clothes in the bag.</strong> This one item prevents more
          fevers than anything else on the list. A spare uniform, or at minimum a dry
          t-shirt and a second pair of socks and underwear.
        </li>
        <li>
          <strong>A second pair of socks, separately.</strong> Wet feet all day is how a cold
          becomes a week off school.
        </li>
        <li>
          <strong>Water from home, in a sealed bottle.</strong> Boiled and cooled, or filtered.
          Enough for the whole day so there&rsquo;s no need to refill anywhere else.
        </li>
        <li>
          <strong>Food from home, nothing bought outside.</strong> The monsoon is not the
          season for the cart near the school gate. Our{" "}
          <Link href="/blog/healthy-school-lunchbox-ideas-andhra">tiffin ideas post</Link> has
          options that travel well in humidity.
        </li>
        <li>
          <strong>A proper umbrella or raincoat, and shoes that dry.</strong> Canvas shoes
          stay wet for two days. During heavy weeks, sandals your child can dry are kinder
          than smart shoes that can&rsquo;t.
        </li>
      </ul>

      <h2>What we do on campus</h2>
      <p>
        Parents ask, so it&rsquo;s fair to say. During the monsoon we keep the corridors and
        stairs dry and mopped, because wet floors cause more injuries in July than the whole
        rest of the year. We check the campus for standing water — pots, drains, unused
        containers — because a single neglected corner is a mosquito nursery. Drinking water
        stays covered and clean. And teachers are told to send a visibly wet child to change
        rather than leave them shivering through the lesson.
      </p>
      <p>
        Our daily <Link href="/blog/why-morning-yoga-belongs-in-school">yoga and pranayama</Link>{" "}
        session moves indoors when it rains, but it doesn&rsquo;t stop. If anything, the
        breathing practice helps in a season when a lot of children are congested.
      </p>

      <h2>Food that helps, without the folklore</h2>
      <p>
        There is a great deal of monsoon food advice in circulation, much of it invented. The
        parts that are sensible are fairly simple:
      </p>
      <ul>
        <li>
          <strong>Eat hot, freshly cooked food.</strong> Humidity spoils food faster than
          usual. Anything sitting out for hours is a risk it isn&rsquo;t in January.
        </li>
        <li>
          <strong>Wash leafy vegetables very well.</strong> Palakura, gongura and the rest hold
          more grit and contamination in the rains. Salt water soak, then rinse.
        </li>
        <li>
          <strong>Keep the immunity basics going.</strong> A boiled egg, dal, curd, seasonal
          fruit. Nothing exotic. Consistency beats superfoods.
        </li>
        <li>
          <strong>Turmeric milk at night is genuinely fine.</strong> Not a cure, but warm, mild
          and good for a sore throat. Grandmothers were right about this one.
        </li>
        <li>
          <strong>Skip cut fruit and juice sold outside.</strong> That is the single most
          common source of a monsoon stomach upset in a school-age child.
        </li>
      </ul>

      <h2>When to keep your child at home</h2>
      <p>
        We know it&rsquo;s hard. Attendance matters, work is waiting, and the child insists
        they&rsquo;re fine. But please keep your child home if:
      </p>
      <ul>
        <li>There is any fever at all — not &ldquo;a slight temperature&rdquo;, any fever</li>
        <li>There has been vomiting or loose motions in the last 24 hours</li>
        <li>They have red, watery, sticky eyes — conjunctivitis moves through a class in days</li>
        <li>The cough is constant and wet, not an occasional dry one</li>
      </ul>
      <p>
        One day at home is one day. A child sent in with a fever infects a dozen classmates,
        and half of them will be absent next week instead. We would genuinely rather have your
        child recovered on Thursday than half-present on Tuesday.
      </p>
      <blockquote>
        No lesson we teach on a Tuesday is worth a week of your child&rsquo;s health. We can
        catch up the chapter. We can&rsquo;t give back the week.
      </blockquote>

      <h2>The dengue question every Eluru parent should ask</h2>
      <p>
        Once a week during the monsoon, walk around your own home and empty anything holding
        water. Flower pot trays. The tray under the fridge. Buckets on the terrace. Old tyres.
        Coconut shells. Bird baths. The mosquito that carries dengue breeds in clean, still
        water, close to home, and it bites during the day — which is exactly when your child
        is out.
      </p>
      <p>
        Full-sleeved clothing in the evening, mosquito nets or repellent at night, and that
        weekly five-minute walk around the house does more than any tonic.
      </p>

      <h2>And let them play in the rain sometimes</h2>
      <p>
        We&rsquo;ll end against our own advice. A childhood without ever having run out into
        the first proper rain of the season is a poorer childhood. Let them. Then bring them
        in, dry their hair properly, give them something warm, and change their clothes.
      </p>
      <p>
        That&rsquo;s the whole trick, really. Not keeping children away from the rain — just
        not leaving them in it.
      </p>
      <p>
        Curious how we look after children through the year on campus? Have a look at our{" "}
        <Link href="/specifications">facilities</Link> or{" "}
        <Link href="/contact">come and visit us</Link> — even on a wet day.
      </p>
    </ArticleLayout>
  );
}
