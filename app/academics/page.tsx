import Link from "next/link";
import Image from "next/image";
import { ChevronRight, BookOpen, Sparkles, GraduationCap, Phone, Dumbbell, Palette, FlaskConical, HeartHandshake } from "lucide-react";
import Reveal from "@/components/Reveal";
import TextReveal from "@/components/TextReveal";
import FeatureGrid from "@/components/FeatureGrid";

const offerings = [
  { icon: BookOpen, title: "Academic Excellence", desc: "Strong fundamentals and exam readiness from Primary through High School." },
  { icon: Sparkles, title: "Yoga & Pranayama", desc: "Daily practice for focus, calm, and inner well-being." },
  { icon: Dumbbell, title: "Sports & Fitness", desc: "A spacious playground and coaching that build teamwork and health." },
  { icon: Palette, title: "Arts & Culture", desc: "Music, art, and celebrations that nurture creativity and confidence." },
  { icon: FlaskConical, title: "Science & Computer Labs", desc: "Hands-on labs and digital skills for curious young minds." },
  { icon: HeartHandshake, title: "Character & Values", desc: "Discipline, compassion, and citizenship at the heart of learning." },
];

import JsonLd from "@/components/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";

export const metadata = pageMetadata({
  title: "Academics — Primary, Middle & High School Curriculum",
  description:
    "Explore academics at Sree Sree School, Eluru — a strong curriculum from Primary to High School with Yoga, science and computer labs, sports and character education.",
  path: "/academics",
});

export default function Academics() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Academics", path: "/academics" },
          ]),
          webPageSchema({
            title: "Academics at Sree Sree School, Eluru",
            description:
              "Primary, Middle and High School curriculum with Yoga, labs, sports and values.",
            path: "/academics",
          }),
        ]}
      />
      {/* Hero Section */}
      <section className="relative h-[320px] sm:h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/1000228463.jpg"
            alt="Academics"
            fill
            className="object-cover object-top animate-ken-burns"
            priority
          />
          <div className="absolute inset-0 bg-primary/50" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/45 via-primary/20 to-primary/55" />
        </div>
        <div className="relative z-10 text-center px-4 animate-fade-in-up">
          <div className="flex items-center justify-center gap-2 text-accent text-sm mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span>Academics</span>
          </div>
          <TextReveal
            as="h1"
            text="Academics"
            highlight={["Academics"]}
            className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 text-shadow-hero"
          />
          <p className="text-gray-200 max-w-2xl mx-auto">
            A structured journey of learning that grows with every student — from curious beginners to confident graduates.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 50L60 45.7C120 41.3 240 32.7 360 30.2C480 27.7 600 31.3 720 38.5C840 45.7 960 56.3 1080 58.8C1200 61.3 1320 55.7 1380 52.8L1440 50V100H1380C1320 100 1200 100 1080 100C960 100 840 100 720 100C600 100 480 100 360 100C240 100 120 100 60 100H0V50Z" fill="#FAFAF9"/>
          </svg>
        </div>
      </section>

      {/* What We Offer — bordered feature grid */}
      <Reveal>
        <section className="py-14 sm:py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-4 mb-2">
                <div className="h-px w-12 bg-accent" />
                <span className="text-accent font-bold uppercase tracking-wider text-sm">What We Offer</span>
                <div className="h-px w-12 bg-accent" />
              </div>
              <TextReveal
                as="h2"
                text="A well-rounded education"
                highlight={["well-rounded"]}
                className="text-3xl md:text-4xl font-serif font-bold text-primary"
              />
            </div>
            <FeatureGrid items={offerings} />
          </div>
        </section>
      </Reveal>

      {/* Primary School */}
      <Reveal>
        <section className="py-14 sm:py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div className="group relative rounded-2xl overflow-hidden shadow-lg h-80">
                <Image
                  src="/IMG-20260615-WA0057.jpg"
                  alt="Primary School"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-accent text-white text-sm font-bold px-4 py-1.5 rounded-full">
                  Grade I – V
                </div>
              </div>
              <div>
                <p className="text-accent font-semibold uppercase tracking-wider text-sm mb-2">Building Strong Foundations</p>
                <h2 className="text-3xl font-serif font-bold text-primary mb-4">Primary School</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Our primary program focuses on play-based learning, storytelling, and hands-on activities that build foundational values and a love for learning.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {["Play-based learning", "Storytelling sessions", "Hands-on activities", "Foundational values"].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-accent rounded-full" />
                      </div>
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {["English", "Telugu", "Hindi", "Math", "Science", "Social Studies", "Art", "PE"].map((subject) => (
                    <span key={subject} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                      {subject}
                    </span>
                  ))}
                </div>
              </div>
            </div>

           
            {/* High School */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="group relative rounded-2xl overflow-hidden shadow-lg h-80">
                <Image
                  src="/1000228461.jpg"
                  alt="High School"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-accent text-white text-sm font-bold px-4 py-1.5 rounded-full">
                  Grade IX – X
                </div>
              </div>
              <div>
                <p className="text-accent font-semibold uppercase tracking-wider text-sm mb-2">Preparing for the Future</p>
                <h2 className="text-3xl font-serif font-bold text-primary mb-4">High School</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Our high school program focuses on academic proficiency, cultural exposure, and character building to prepare students for higher education and life.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {["Exam proficiency", "Cultural exposure", "Daily Yoga & Pranayama", "Nation-building character"].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-accent rounded-full" />
                      </div>
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Physical Science", "Biological Science", "Mathematics", "Languages", "Yoga & Pranayama", "Career Guidance"].map((subject) => (
                    <span key={subject} className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                      {subject}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* Whole Child Section */}
      <Reveal>
        <section className="py-14 sm:py-20 px-4 bg-primary text-white">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Education for the <span className="text-accent">whole child</span></h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-12">
              We believe true education is more than textbooks — it is shaping character, sparking curiosity, and preparing children for a meaningful life.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                { icon: BookOpen, title: "Academic Mastery", desc: "Rigorous curriculum designed to build strong foundational knowledge and critical thinking skills." },
                { icon: Sparkles, title: "Spiritual Growth", desc: "Daily Yoga and Pranayama sessions for mental clarity, focus, and inner peace." },
                { icon: GraduationCap, title: "Character Building", desc: "Instilling core values, ethics, and citizenship to shape responsible global leaders." },
              ].map((item, index) => (
                <Reveal key={item.title} delay={index * 150}>
                  <div className="bg-primary/50 p-8 rounded-2xl border border-white/10 h-full card-lift hover:border-accent/30">
                    <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-7 h-7 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-accent text-white px-8 py-3.5 rounded-full font-semibold hover:bg-amber-600 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/30 transition-all duration-300 flex items-center justify-center gap-2">
                Apply for Admission <ChevronRight className="w-5 h-5" />
              </Link>
              <Link href="/contact" className="bg-white text-primary border-2 border-white px-8 py-3.5 rounded-full font-semibold hover:bg-gray-100 transition-all flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" /> Enroll Now
              </Link>
            </div>
          </div>
        </section>
      </Reveal>
    </>
  );
}