import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import { pageMetadata } from "@/lib/metadata";
import { getPost } from "@/lib/posts";

const post = getPost("independence-day-celebrations-in-school")!;

export const metadata = pageMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${post.slug}`,
  image: post.image,
  article: true,
  keywords: [
    "Independence Day celebration in school",
    "August 15 school programme",
    "patriotism for children",
    "school flag hoisting",
    "Independence Day activities for kids",
    "value education India",
  ],
});

export default function Page() {
  return (
    <ArticleLayout slug={post.slug}>
      <p>
        In a week or so, the same thing will happen in schools across Eluru that has happened
        every August for decades. Children will arrive earlier than usual, in whiter uniforms
        than usual. There will be a flag, a slightly nervous speech, an anthem sung with more
        volume than tune, and sweets handed out in paper cups.
      </p>
      <p>
        It looks like a morning off from lessons. It isn&rsquo;t. Some of the most durable
        things a school teaches happen on days like this, and none of them are in the
        curriculum.
      </p>

      <h2>What a child actually learns standing in that line</h2>
      <p>
        Consider what is being asked of a seven-year-old on Independence Day morning. Stand
        still. Stay quiet while someone speaks. Sing with everyone else, at the same time. Wait
        your turn. Watch someone else receive applause and clap for them.
      </p>
      <p>
        Every one of those is a skill, and none of them can be taught in a classroom. They can
        only be practised in a crowd, on a morning that matters.
      </p>
      <p>
        Children who grow up doing this learn something about belonging to a group larger than
        themselves — that sometimes you stand still because everyone is standing still, and
        that this is not a loss of freedom but a kind of shared attention. It&rsquo;s hard to
        explain to a child. It&rsquo;s easy to let them feel.
      </p>

      <h2>The speech, and why we make them do it</h2>
      <p>
        Every year, a handful of children stand in front of the whole school and speak. Every
        year, at least one of them freezes. Their notes shake. They lose their place. Somebody
        in the audience giggles.
      </p>
      <p>
        And every year, they finish. Somehow, with a teacher nodding from the side, they get to
        the end.
      </p>
      <p>
        We have watched children remember that morning ten years later. Not what they said —
        nobody remembers what they said — but that they were terrified and did it anyway. That
        is worth more than a chapter on the freedom struggle, and it&rsquo;s the same kind of
        confidence-building we look for in{" "}
        <Link href="/blog/karate-at-school-confidence-and-discipline">karate</Link> and on the
        sports field.
      </p>
      <blockquote>
        A school assembly is one of the few places left where a child speaks to a large group
        of people who are actually listening. That is a rare and valuable experience, and it
        should not be reserved for the confident ones.
      </blockquote>

      <h2>Teaching freedom without the recitation</h2>
      <p>
        Here is where school celebrations often go a bit thin. Children learn to recite names
        and dates — 1947, the Quit India Movement, a list of leaders — and take away very
        little about what any of it meant.
      </p>
      <p>
        What lands much better, in our experience, is anything that makes it concrete and local.
      </p>
      <ul>
        <li>
          <strong>The people from around here.</strong> Andhra has its own freedom-struggle
          history, and it is far more vivid to a child than a national summary. Alluri
          Sitarama Raju was not from a textbook; he was from these districts.
        </li>
        <li>
          <strong>Their own great-grandparents.</strong> Ask children to go home and find out
          what their family was doing in 1947. Some come back with extraordinary stories. All of
          them come back understanding that this was a real time with real people in it.
        </li>
        <li>
          <strong>What freedom means at their scale.</strong> For a nine-year-old, the abstract
          idea is hard. The idea that you can say what you think, that you can go to whichever
          school you like, that nobody can be made to work for someone by force — that is
          graspable.
        </li>
      </ul>

      <h2>The uncomfortable part we think matters</h2>
      <p>
        There is a version of patriotism taught to children that is entirely about pride, and
        we think it does them a disservice. Pride with nothing attached to it becomes noise
        rather quickly.
      </p>
      <p>
        The more useful conversation — and children handle it better than adults expect — is
        about what freedom asks of you. That the people being remembered gave something up. That
        a country is a thing that has to be maintained by the people living in it. That
        standing for the anthem means very little if you litter the ground you&rsquo;re standing
        on.
      </p>
      <p>
        We teach that in our values classes throughout the year, but it lands hardest on a
        morning when the flag is actually going up. Children connect what they are feeling to
        what they are being asked, and it stays.
      </p>

      <h2>What parents can do at home</h2>
      <p>
        The school does the assembly. The part that makes it stick usually happens at home, and
        it takes about ten minutes.
      </p>
      <ul>
        <li>
          <strong>Ask what they did, not what they wore.</strong> &ldquo;What was the speech
          about?&rdquo; opens more than &ldquo;did you have fun?&rdquo;
        </li>
        <li>
          <strong>Tell them a family story.</strong> Where was their great-grandfather in 1947?
          What did he do? Even a partial, half-remembered story is more powerful than a
          documentary.
        </li>
        <li>
          <strong>Watch how you handle the flag.</strong> A paper flag dropped on the road on
          the evening of the 15th teaches a child more than the morning did. Children notice
          this kind of thing sharply.
        </li>
        <li>
          <strong>Connect it to something small.</strong> Picking up litter, standing in the
          queue, telling the truth when it costs something. Children understand a country
          through the behaviour of the adults around them, not through its history.
        </li>
      </ul>

      <h2>Why we protect these mornings</h2>
      <p>
        Every year the syllabus is longer and the calendar tighter, and there is always a quiet
        case for trimming celebrations down to a flag and a quick assembly.
      </p>
      <p>
        We don&rsquo;t, for the same reason we protect{" "}
        <Link href="/blog/why-morning-yoga-belongs-in-school">
          twenty minutes of yoga every morning
        </Link>{" "}
        and an hour of{" "}
        <Link href="/blog/beyond-the-classroom-co-curricular-activities">
          activities every week
        </Link>
        . A child is not only a student. They are also a person who will one day be a citizen, a
        neighbour, someone standing in a queue deciding whether to cut it.
      </p>
      <p>
        Days like the fifteenth of August are where some of that gets built — in a slightly
        wobbly line, singing slightly off-key, on a morning that a surprising number of them
        will remember for the rest of their lives.
      </p>
      <p>
        You can see how this fits into the rest of a year at Sree Sree in{" "}
        <Link href="/blog/a-day-in-the-life-at-sree-sree-school">a day in the life</Link>, or
        have a look at our <Link href="/gallery">photo gallery</Link>.
      </p>
    </ArticleLayout>
  );
}
