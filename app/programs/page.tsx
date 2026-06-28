import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Cpu, Hand, HeartHandshake, Crown, Dumbbell } from "lucide-react";
import Reveal from "@/components/Reveal";
import TextReveal from "@/components/TextReveal";
import LottieIcon from "@/components/LottieIcon";

const programs = [
  {
    id: "robotics-ai",
    name: "Robotics & AI",
    tagline: "Future-Ready Skills",
    icon: Cpu,
    lottie: "/lottie/orbit-blue.json",
    image: "/IMG-20260618-WA0046.jpg",
    aspect: 1.5,
    desc: "Hands-on robotics and artificial-intelligence labs where students design, build, and program their own bots. From block-based coding to real-world AI projects, learners develop computational thinking and a creator's mindset.",
    features: ["Block & Python coding", "Robotics kits & sensors", "AI / ML basics", "Innovation projects"],
    accent: "from-blue-600 to-blue-800",
  },
  {
    id: "karate",
    name: "Karate",
    tagline: "Strength & Discipline",
    icon: Hand,
    lottie: "/lottie/spin-red.json",
    image: "/06 6x4 copy.jpg",
    aspect: 1.5,
    desc: "Certified instructors guide students through traditional karate — building self-defence skills, physical fitness, focus, and inner discipline. Students progress through belt levels as confidence and respect grow.",
    features: ["Self-defence techniques", "Belt-level grading", "Focus & discipline", "Strength & flexibility"],
    accent: "from-red-600 to-red-800",
  },
  {
    id: "ethical-classes",
    name: "Ethical Classes",
    tagline: "Values for Life",
    icon: HeartHandshake,
    lottie: "/lottie/pulse-amber.json",
    image: "/04 6x4 copy.jpg",
    aspect: 1.5,
    desc: "Dedicated moral-education sessions that nurture honesty, empathy, gratitude, and responsibility. Through stories, discussions, and reflection, students build the character that guides them long after the classroom.",
    features: ["Moral storytelling", "Empathy & kindness", "Civic responsibility", "Mindful reflection"],
    accent: "from-amber-500 to-amber-700",
  },
  {
    id: "chess",
    name: "Chess Program",
    tagline: "Think Ahead",
    icon: Crown,
    lottie: "/lottie/orbit-blue.json",
    image: "/ChatGPT Image Jun 19, 2026, 07_32_15 PM.png",
    aspect: 0.706,
    desc: "A structured chess curriculum that sharpens logical reasoning, patience, and strategic planning. Students play, analyse, and compete — turning every match into a lesson in concentration and foresight.",
    features: ["Openings & tactics", "Strategic thinking", "Inter-school tournaments", "Patience & focus"],
    accent: "from-slate-600 to-slate-800",
  },
  {
    id: "sports",
    name: "Sports",
    tagline: "Play. Grow. Win.",
    icon: Dumbbell,
    lottie: "/lottie/spin-red.json",
    image: "/03.jpg",
    aspect: 2,
    desc: "A spacious playground and dedicated coaching across athletics and team games. Our sports program builds fitness, teamwork, and sportsmanship while giving every child a chance to shine on the field.",
    features: ["Athletics & track", "Team games", "Professional coaching", "Annual sports meet"],
    accent: "from-green-600 to-green-800",
  },
];

import JsonLd from "@/components/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";

export const metadata = pageMetadata({
  title: "Co-curricular Activities — Robotics, Karate, Chess & Sports",
  description:
    "Beyond the classroom: robotics & AI, karate, chess, sports and ethical classes that build skills, discipline and confidence at Sree Sree School, Eluru.",
  path: "/programs",
});

export default function Programs() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Co-curricular Activities", path: "/programs" },
          ]),
          webPageSchema({
            title: "Co-curricular Activities at Sree Sree School, Eluru",
            description:
              "Robotics & AI, karate, chess, sports and ethical classes beyond the classroom.",
            path: "/programs",
          }),
        ]}
      />
      {/* Hero Section */}
      <section className="relative h-[320px] sm:h-[420px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/1000228485.jpg"
            alt="Our Co-curricular Activities"
            fill
            className="object-cover object-top animate-ken-burns"
            priority
          />
          <div className="absolute inset-0 bg-primary/55" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/45 via-primary/25 to-primary/60" />
        </div>
        <div className="relative z-10 text-center px-4 animate-fade-in-up">
          <div className="flex items-center justify-center gap-2 text-accent text-sm mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span>Co-curricular Activities</span>
          </div>
          <TextReveal
            as="h1"
            text="Beyond the Classroom"
            highlight={["Classroom"]}
            className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 text-shadow-hero"
          />
          <p className="text-gray-200 max-w-2xl mx-auto">
            Robotics & AI, Karate, Ethical Classes, Chess and Sports — co-curricular programs that
            shape confident, well-rounded learners.
          </p>
        </div>
      </section>

      {/* Quick nav chips */}
      <Reveal>
        <section className="py-8 px-4 bg-white border-b border-gray-100">
          <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-3">
            {programs.map((p) => (
              <Link
                key={p.id}
                href={`#${p.id}`}
                className="group inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-primary transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent hover:shadow-md"
              >
                <p.icon className="w-4 h-4 text-accent" />
                {p.name}
              </Link>
            ))}
          </div>
        </section>
      </Reveal>

      {/* Program sections */}
      <section className="py-14 sm:py-20 px-4 bg-cream">
        <div className="max-w-6xl mx-auto space-y-20 md:space-y-28">
          {programs.map((p, index) => (
            <div key={p.id} id={p.id} className="scroll-mt-28">
              <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">
                {/* Image — container matches the poster's aspect ratio so it
                    fits perfectly with no cropping or distortion */}
                <Reveal className={index % 2 === 1 ? "md:order-2" : ""}>
                  <div
                    className={`group relative mx-auto w-full overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-black/5 ${
                      p.id === "chess" ? "max-w-[210px]" : "max-w-md"
                    }`}
                    style={{ aspectRatio: String(p.aspect) }}
                  >
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </Reveal>

                {/* Text */}
                <Reveal delay={120} className={index % 2 === 1 ? "md:order-1" : ""}>
                  <div>
                    <div className="flex items-center gap-3 mb-5">
                      <div className="h-14 w-14 flex-shrink-0 rounded-2xl bg-accent/10 p-1.5 shadow-sm">
                        <LottieIcon src={p.lottie} className="w-full h-full" />
                      </div>
                      <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full">
                        <p.icon className="w-4 h-4" />
                        <span className="text-sm font-semibold uppercase tracking-wider">{p.tagline}</span>
                      </div>
                    </div>
                    <TextReveal
                      as="h2"
                      text={p.name}
                      highlight={p.name.split(" ").slice(-1)}
                      className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4"
                    />
                    <p className="text-gray-600 leading-relaxed mb-6">{p.desc}</p>
                    <div className="grid grid-cols-2 gap-3">
                      {p.features.map((f) => (
                        <div key={f} className="flex items-start gap-2">
                          <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <div className="w-2 h-2 bg-accent rounded-full" />
                          </div>
                          <span className="text-sm text-gray-700">{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Co-curricular activities overview poster */}
      <Reveal>
        <section className="py-14 sm:py-20 px-4 bg-cream">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-accent font-semibold uppercase tracking-wider text-sm mb-2">At a Glance</p>
              <TextReveal
                as="h2"
                text="Technology + Tradition + Strength"
                highlight={["Strength"]}
                className="text-3xl md:text-4xl font-serif font-bold text-primary"
              />
            </div>
            <div className="max-w-md mx-auto rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5">
              <Image
                src="/IMG-20260614-WA0033.jpg"
                alt="Sree Sree Educational Society — co-curricular activities overview"
                width={1262}
                height={1600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>
      </Reveal>

      {/* CTA */}
      <Reveal>
        <section className="py-14 sm:py-20 px-4">
          <div className="max-w-4xl mx-auto bg-primary rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent" />
            <div className="glow-blob bg-accent/40 w-72 h-72 -top-16 -right-10" />
            <div className="glow-blob bg-blue-500/25 w-72 h-72 -bottom-16 -left-10" style={{ animationDelay: "5s" }} />
            <div className="relative z-10">
              <TextReveal
                as="h2"
                text="Give your child more than academics"
                highlight={["academics"]}
                className="text-3xl md:text-4xl font-serif font-bold text-white mb-4"
              />
              <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                Enrol today and let your child explore robotics, martial arts, strategy, ethics and sport
                in one nurturing environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-accent text-white px-8 py-3.5 rounded-full font-semibold hover:bg-amber-600 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/30 transition-all duration-300 flex items-center justify-center gap-2">
                  Enroll Now <ChevronRight className="w-5 h-5" />
                </Link>
                <Link href="/academics" className="bg-white/10 backdrop-blur-sm text-white border border-white/30 px-8 py-3.5 rounded-full font-semibold hover:bg-white/20 transition-all">
                  View Academics
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Reveal>
    </>
  );
}
