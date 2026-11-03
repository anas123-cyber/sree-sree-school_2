/**
 * Blog post registry — metadata only.
 *
 * Drives the /blog index list and the sitemap. Each post's full content lives
 * in its own route at app/blog/<slug>/page.tsx (hand-authored for full control
 * over formatting and structured data).
 *
 * Keep `slug` in sync with the folder name under app/blog/.
 */

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  /** ISO date (YYYY-MM-DD) */
  date: string;
  /** Human-friendly date for display */
  dateLabel: string;
  /** Reading time, e.g. "6 min read" */
  readingTime: string;
  /** Cover image path under /public */
  image: string;
  /** Category tag shown on cards */
  category: string;
  author: string;
};

export const posts: PostMeta[] = [
  {
    slug: "why-telugu-matters-in-an-english-medium-world",
    title: "Why Telugu Still Matters in an English-Medium World",
    description:
      "English opens doors, but a strong mother tongue gives a child roots. Here's why you don't have to choose between the two — and simple ways to keep Telugu alive at home.",
    date: "2026-10-31",
    dateLabel: "October 31, 2026",
    readingTime: "5 min read",
    image: "/blog-telugu.png",
    category: "Learning & Values",
    author: "SREE SREE Educational Society",
  },
  {
    slug: "national-unity-day-teaching-children-togetherness",
    title: "National Unity Day: Teaching Children What Togetherness Really Means",
    description:
      "A class is a small India. On National Unity Day, here's how to help children understand that unity doesn't mean everyone being the same — it means everyone belonging.",
    date: "2026-10-31",
    dateLabel: "October 31, 2026",
    readingTime: "4 min read",
    image: "/blog-unity-day.png",
    category: "School Life",
    author: "SREE SREE Educational Society",
  },
  {
    slug: "helping-shy-children-speak-with-confidence",
    title: "Helping a Shy Child Speak Up With Confidence",
    description:
      "Some children know the answer and never raise a hand. Gentle, practical ways parents can help a quiet child find their voice — without pushing them onto a stage.",
    date: "2026-10-30",
    dateLabel: "October 30, 2026",
    readingTime: "6 min read",
    image: "/blog-shy-children.png",
    category: "Parenting & Values",
    author: "SREE SREE Educational Society",
  },
  {
    slug: "why-sleep-matters-more-than-extra-study-hours",
    title: "Why Sleep Matters More Than Extra Study Hours",
    description:
      "When exams are near, sleep is the first thing families trim. Here's why a rested child often outperforms a tired one who studied longer — and how to build a healthy bedtime routine.",
    date: "2026-10-29",
    dateLabel: "October 29, 2026",
    readingTime: "5 min read",
    image: "/blog-sleep.png",
    category: "Wellbeing",
    author: "SREE SREE Educational Society",
  },
  {
    slug: "a-safe-and-meaningful-diwali-for-school-children",
    title: "A Safe and Meaningful Diwali for School Children",
    description:
      "Diwali is a festival of light and joy. Simple ways to keep your child safe this season — and to let the festival teach kindness, sharing and meaning.",
    date: "2026-10-28",
    dateLabel: "October 28, 2026",
    readingTime: "5 min read",
    image: "/blog-diwali.png",
    category: "School Life",
    author: "SREE SREE Educational Society",
  },
  {
    slug: "half-yearly-exam-preparation-plan-for-parents",
    title: "Half-Yearly Exams: A Calm 3-Week Plan for Parents",
    description:
      "Exams don't need a frantic final week. A simple three-week approach — map, practise, revise — that helps your child prepare with confidence instead of panic.",
    date: "2026-10-27",
    dateLabel: "October 27, 2026",
    readingTime: "6 min read",
    image: "/blog-half-yearly-exams.png",
    category: "Exams & Study",
    author: "SREE SREE Educational Society",
  },
  {
    slug: "keeping-children-learning-during-dussehra-holidays",
    title: "Dussehra Holidays: Keeping Your Child Learning Without the Stress",
    description:
      "A festival break should be a real rest, but it shouldn't make the first week back painful. Easy, low-pressure ways to keep young minds active over the holidays.",
    date: "2026-10-26",
    dateLabel: "October 26, 2026",
    readingTime: "5 min read",
    image: "/blog-dussehra-holidays.png",
    category: "Learning & Values",
    author: "SREE SREE Educational Society",
  },
  {
    slug: "high-school-in-eluru-grades-6-to-10",
    title: "High School in Eluru: What Grades 6 to 10 Should Give Your Child",
    description:
      "The high school years decide far more than a Grade 10 marks sheet. Here's what a good high school in Eluru should be building in your child between Grades VI and X — and the questions to ask before you choose one.",
    date: "2026-08-05",
    dateLabel: "August 5, 2026",
    readingTime: "8 min read",
    image: "/1000228455.jpg",
    category: "School Choice",
    author: "SREE SREE Educational Society",
  },
  {
    slug: "independence-day-celebrations-in-school",
    title: "Why Independence Day at School Teaches More Than Any Textbook",
    description:
      "Flag hoisting, a slightly off-key anthem, sweets in paper cups. Independence Day at school looks like a morning off from lessons — but it quietly teaches children things a chapter on history never could.",
    date: "2026-08-04",
    dateLabel: "August 4, 2026",
    readingTime: "5 min read",
    image: "/1000228461.jpg",
    category: "School Life",
    author: "SREE SREE Educational Society",
  },
  {
    slug: "helping-children-handle-exam-stress",
    title: "Exam Stress in Children: How Parents Can Actually Help",
    description:
      "Every exam season, we watch bright children come undone by nerves. Here's what actually helps — from a school that has sat with hundreds of anxious students and worried parents.",
    date: "2026-08-03",
    dateLabel: "August 3, 2026",
    readingTime: "7 min read",
    image: "/1000228463.jpg",
    category: "Wellbeing",
    author: "SREE SREE Educational Society",
  },
  {
    slug: "making-the-most-of-parent-teacher-meetings",
    title: "Parent-Teacher Meetings: How to Make Fifteen Minutes Count",
    description:
      "Most parents leave a PTM knowing their child's marks and nothing else. Here are the questions that turn a rushed fifteen minutes into the most useful conversation of your child's year.",
    date: "2026-08-02",
    dateLabel: "August 2, 2026",
    readingTime: "6 min read",
    image: "/1000228467.jpg",
    category: "Parenting & Values",
    author: "SREE SREE Educational Society",
  },
  {
    slug: "building-a-reading-habit-in-children",
    title: "How to Build a Reading Habit in Children (Without a Fight)",
    description:
      "You can't nag a child into loving books. But you can build the conditions where reading quietly takes root. Here's what works — at school and at home — for children of every age.",
    date: "2026-08-01",
    dateLabel: "August 1, 2026",
    readingTime: "6 min read",
    image: "/1000228468.jpg",
    category: "Learning & Values",
    author: "SREE SREE Educational Society",
  },
  {
    slug: "school-safety-questions-every-parent-should-ask",
    title: "School Safety in Eluru: 12 Questions Every Parent Should Ask",
    description:
      "Every school will tell you your child is safe. Here are the twelve specific questions that reveal whether safety is a system at that school — or just a sentence in the brochure.",
    date: "2026-07-31",
    dateLabel: "July 31, 2026",
    readingTime: "7 min read",
    image: "/1000228469.jpg",
    category: "Safety",
    author: "SREE SREE Educational Society",
  },
  {
    slug: "why-we-teach-chess-to-every-child",
    title: "Why Every Child at Our School Learns Chess",
    description:
      "Chess isn't on any board exam. We teach it anyway — because sixty-four squares turn out to be a remarkably good place for a child to learn patience, consequence and how to lose well.",
    date: "2026-07-30",
    dateLabel: "July 30, 2026",
    readingTime: "5 min read",
    image: "/1000228470.jpg",
    category: "Beyond the Classroom",
    author: "SREE SREE Educational Society",
  },
  {
    slug: "karate-at-school-confidence-and-discipline",
    title: "Karate at School: What It Really Teaches Children",
    description:
      "Parents often assume karate is about self-defence. It is — but the bigger gift is what it does to a shy child's posture, a restless child's focus, and every child's sense of their own body.",
    date: "2026-07-29",
    dateLabel: "July 29, 2026",
    readingTime: "5 min read",
    image: "/1000228481.jpg",
    category: "Beyond the Classroom",
    author: "SREE SREE Educational Society",
  },
  {
    slug: "robotics-and-ai-for-school-children",
    title: "Robotics and AI in School: Why We Start Early",
    description:
      "Your child will grow up alongside machines that think. Here's why we teach robotics and AI from the primary years in Eluru — and why it has less to do with coding than you'd expect.",
    date: "2026-07-28",
    dateLabel: "July 28, 2026",
    readingTime: "6 min read",
    image: "/1000228485.jpg",
    category: "Learning & Values",
    author: "SREE SREE Educational Society",
  },
  {
    slug: "primary-school-in-eluru-grades-1-to-5",
    title: "Choosing a Primary School in Eluru: What Grades 1 to 5 Should Look Like",
    description:
      "The primary years set the foundation for everything that follows. Here's what genuinely good Grade I-V schooling looks like in Eluru, and how to tell it apart from a school that's simply strict.",
    date: "2026-07-27",
    dateLabel: "July 27, 2026",
    readingTime: "7 min read",
    image: "/1000228489.jpg",
    category: "School Choice",
    author: "SREE SREE Educational Society",
  },
  {
    slug: "healthy-school-lunchbox-ideas-andhra",
    title: "The School Lunchbox: Tiffin Ideas That Actually Come Home Empty",
    description:
      "We open a lot of lunchboxes at the end of the day, and we know which ones come back full. Here's what works for Andhra households — practical, affordable, and food children actually eat.",
    date: "2026-07-26",
    dateLabel: "July 26, 2026",
    readingTime: "6 min read",
    image: "/IMG-20260614-WA0029.jpg",
    category: "Health & Nutrition",
    author: "SREE SREE Educational Society",
  },
  {
    slug: "does-my-child-really-need-tuition",
    title: "Does Your Child Really Need Tuition? An Honest Answer From a School",
    description:
      "Half of Eluru seems to be in tuition by Grade 5. Sometimes it genuinely helps. Often it hides a problem the school should have solved. Here's how to tell which situation you're in.",
    date: "2026-07-25",
    dateLabel: "July 25, 2026",
    readingTime: "6 min read",
    image: "/IMG-20260614-WA0032.jpg",
    category: "Parenting & Values",
    author: "SREE SREE Educational Society",
  },
  {
    slug: "helping-your-child-prepare-for-fa1-exams",
    title: "FA1 Is Coming: Helping Your Child Prepare Without the Panic",
    description:
      "The first formative assessment of the year arrives before most children have properly settled in. Here's a calm, workable way to prepare — and why FA1 matters less than what you do after it.",
    date: "2026-07-24",
    dateLabel: "July 24, 2026",
    readingTime: "6 min read",
    image: "/IMG-20260614-WA0034.jpg",
    category: "Exams & Study",
    author: "SREE SREE Educational Society",
  },
  {
    slug: "screen-time-rules-that-actually-work",
    title: "Screen Time and Your Child: Rules That Actually Work",
    description:
      "Every parent we meet is fighting the same battle with a phone. Blanket bans rarely survive the week. Here are the boundaries we've seen hold in real Eluru homes — and why they work.",
    date: "2026-07-23",
    dateLabel: "July 23, 2026",
    readingTime: "6 min read",
    image: "/IMG-20260618-WA0047.jpg",
    category: "Parenting & Values",
    author: "SREE SREE Educational Society",
  },
  {
    slug: "how-much-homework-is-too-much",
    title: "How Much Homework Is Too Much? A School's Honest View",
    description:
      "Some parents want more homework as proof the school is serious. Some children are crying over it at 9 PM. Here's how we think about homework — how much is right, and what to do when it isn't working.",
    date: "2026-07-22",
    dateLabel: "July 22, 2026",
    readingTime: "6 min read",
    image: "/x.jpg",
    category: "Learning & Values",
    author: "SREE SREE Educational Society",
  },
  {
    slug: "monsoon-health-tips-for-school-children",
    title: "Monsoon in Eluru: Keeping Your Child Healthy Through the Rains",
    description:
      "Every July the same things go around a school — fever, cough, stomach upsets, and a lot of missed classes. Here's what we do on campus during the monsoon, and what genuinely helps at home.",
    date: "2026-07-21",
    dateLabel: "July 21, 2026",
    readingTime: "6 min read",
    image: "/y.jpg",
    category: "Health & Nutrition",
    author: "SREE SREE Educational Society",
  },
  {
    slug: "mid-year-school-admission-in-eluru",
    title: "Changing Schools Mid-Year in Eluru: Should You Do It?",
    description:
      "The academic year has started and something isn't right. Should you move your child now or wait until next June? Here's an honest walkthrough — including when we advise parents not to move.",
    date: "2026-07-20",
    dateLabel: "July 20, 2026",
    readingTime: "7 min read",
    image: "/IMG-20260615-WA0057.jpg",
    category: "Admissions",
    author: "SREE SREE Educational Society",
  },
  {
    slug: "state-board-vs-cbse-in-andhra-pradesh",
    title: "State Board or CBSE in Andhra Pradesh? A Straight Answer for Parents",
    description:
      "AP State Board, CBSE, ICSE — the comparison charts online rarely reflect what actually happens in an Eluru classroom. Here's a practical, jargon-free look at what really separates them for your child.",
    date: "2026-07-18",
    dateLabel: "July 18, 2026",
    readingTime: "8 min read",
    image: "/IMG-20260615-WA0061.jpg",
    category: "School Choice",
    author: "SREE SREE Educational Society",
  },
  {
    slug: "english-medium-vs-telugu-medium-school",
    title: "English Medium or Telugu Medium? A Fair Look for Eluru Parents",
    description:
      "It's one of the most anxious decisions a parent in Andhra Pradesh makes. Here's an honest look at both sides — what the research says, what we see in our classrooms, and what matters more than the label.",
    date: "2026-07-17",
    dateLabel: "July 17, 2026",
    readingTime: "8 min read",
    image: "/IMG-20260615-WA0047.jpg",
    category: "School Choice",
    author: "SREE SREE Educational Society",
  },
  {
    slug: "school-fees-in-eluru-what-to-compare",
    title: "School Fees in Eluru: What Parents Should Compare Before They Pay",
    description:
      "The number on the fee receipt is only part of the story. Here's how to compare school fees in Eluru properly — the hidden costs, the fair questions to ask, and how to judge what you're actually getting.",
    date: "2026-07-16",
    dateLabel: "July 16, 2026",
    readingTime: "7 min read",
    image: "/IMG-20260615-WA0051.jpg",
    category: "Admissions Guide",
    author: "SREE SREE Educational Society",
  },
  {
    slug: "how-to-choose-the-best-school-in-eluru",
    title: "How to Choose the Best School in Eluru: A Parent's 2026 Guide",
    description:
      "Choosing the right school in Eluru? Here are the 10 factors every parent should weigh — from academics and safety to values, facilities and fees — and how to decide with confidence.",
    date: "2026-06-15",
    dateLabel: "June 15, 2026",
    readingTime: "8 min read",
    image: "/IMG-20260615-WA0047.jpg",
    category: "Admissions Guide",
    author: "SREE SREE Educational Society",
  },
  {
    slug: "sree-sree-school-admissions-guide",
    title: "How to Get Admission at SREE SREE School: A Simple Guide for Parents",
    description:
      "Thinking about admission for your child? Here's a warm, straightforward walkthrough of how admissions work at SREE SREE Educational Society in Eluru — what to bring, what to expect, and how to reach us.",
    date: "2026-06-24",
    dateLabel: "June 24, 2026",
    readingTime: "6 min read",
    image: "/IMG-20260618-WA0046.jpg",
    category: "Admissions",
    author: "SREE SREE Educational Society",
  },
  {
    slug: "best-school-with-ethics-in-eluru",
    title: "Looking for the Best School with Ethics in Eluru? Here's What to Look For",
    description:
      "\"Best school with ethics\" is easy to put on a banner and hard to live every day. Here's how we think about ethics and values at our school in Eluru — and what parents should actually look for.",
    date: "2026-06-26",
    dateLabel: "June 26, 2026",
    readingTime: "6 min read",
    image: "/IMG-20260615-WA0048.jpg",
    category: "Ethics & Values",
    author: "SREE SREE Educational Society",
  },
  {
    slug: "why-morning-yoga-belongs-in-school",
    title: "The Quiet Power of Morning Yoga in School",
    description:
      "What can twenty minutes of yoga and pranayama really do for a child? After years of starting our day this way, here's what we've watched it do — calmer minds, sharper focus, and kinder classrooms.",
    date: "2026-06-28",
    dateLabel: "June 28, 2026",
    readingTime: "5 min read",
    image: "/IMG-20260615-WA0046.jpg",
    category: "Wellbeing",
    author: "SREE SREE Educational Society",
  },
  {
    slug: "beyond-the-classroom-co-curricular-activities",
    title: "Chess, Karate and Robotics: Why Life Beyond the Classroom Matters",
    description:
      "The lessons that shape a child often happen outside the textbook. Here's why co-curricular activities — chess, karate, robotics, sports and the arts — are a real part of learning at SREE SREE, not an afterthought.",
    date: "2026-06-23",
    dateLabel: "June 23, 2026",
    readingTime: "5 min read",
    image: "/IMG-20260615-WA0064.jpg",
    category: "Beyond the Classroom",
    author: "SREE SREE Educational Society",
  },
  {
    slug: "a-day-in-the-life-at-sree-sree-school",
    title: "A Day in the Life at SREE SREE: From the Morning Bell to the Last Goodbye",
    description:
      "Ever wonder what a school day actually feels like for your child? Walk with us through one ordinary, wonderful day at SREE SREE Educational Society in Eluru.",
    date: "2026-06-27",
    dateLabel: "June 27, 2026",
    readingTime: "6 min read",
    image: "/IMG-20260614-WA0033.jpg",
    category: "School Life",
    author: "SREE SREE Educational Society",
  },
  {
    slug: "preparing-your-child-for-first-day-of-school",
    title: "Starting School: Gently Preparing Your Child for the First Day",
    description:
      "The first day of school is a big moment — for children and parents alike. Here are simple, kind ways to prepare your little one (and yourself) for a happy, confident start.",
    date: "2026-06-22",
    dateLabel: "June 22, 2026",
    readingTime: "5 min read",
    image: "/IMG-20260615-WA0057.jpg",
    category: "Early Years",
    author: "SREE SREE Educational Society",
  },
  {
    slug: "raising-honest-kind-children",
    title: "Raising Honest, Kind Kids: Small Habits That Matter More Than You Think",
    description:
      "Good character isn't built in one big lesson — it grows in small, everyday moments. Here are the simple habits we lean on, at school and at home, to raise honest, kind and confident children.",
    date: "2026-06-29",
    dateLabel: "June 29, 2026",
    readingTime: "6 min read",
    image: "/IMG-20260615-WA0049.jpg",
    category: "Parenting & Values",
    author: "SREE SREE Educational Society",
  },
  {
    slug: "why-holistic-education-matters",
    title: "Why Holistic Education Matters More Than Marks",
    description:
      "Holistic education develops the whole child — mind, body and character. Here's what it means, why Yoga and values belong in school, and how it shapes confident, future-ready students.",
    date: "2026-06-20",
    dateLabel: "June 20, 2026",
    readingTime: "7 min read",
    image: "/IMG-20260615-WA0061.jpg",
    category: "Learning & Values",
    author: "SREE SREE Educational Society",
  },
  {
    slug: "38-years-of-educational-excellence-in-eluru",
    title: "38 Years of Educational Excellence in Eluru: The SREE SREE Story",
    description:
      "From a small language academy in 1987 to a trusted school for 10,000+ students — the story of SREE SREE Educational Society and the values that built a 38-year legacy in Eluru.",
    date: "2026-06-25",
    dateLabel: "June 25, 2026",
    readingTime: "6 min read",
    image: "/IMG-20260615-WA0051.jpg",
    category: "Our Story",
    author: "SREE SREE Educational Society",
  },
];

export function getPost(slug: string): PostMeta | undefined {
  return posts.find((p) => p.slug === slug);
}
