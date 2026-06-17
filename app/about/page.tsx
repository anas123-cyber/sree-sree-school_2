import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Target, Eye, Heart, Trophy, BookOpen, Users, Sparkles, Medal, Clock } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/1000228463.jpg"
            alt="About Us"
            fill
            className="object-cover animate-ken-burns"
            priority
          />
          <div className="absolute inset-0 bg-primary/50" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/45 via-primary/20 to-primary/55" />
        </div>
        <div className="relative z-10 text-center px-4 animate-fade-in-up">
          <div className="flex items-center justify-center gap-2 text-accent text-sm mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span>About Us</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 text-shadow-hero">About Us</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Empowering Excellence through Education — a legacy spanning over three decades in Eluru, Andhra Pradesh.
          </p>
        </div>
      </section>

      {/* Chairman Profile */}
      <Reveal>
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
            <div className="relative">
              <Image
                src="/IMG-20260614-WA0032.jpg"
                alt="Dr. M.B.S. Sarma"
                width={500}
                height={600}
                className="rounded-2xl shadow-lg"
              />
              <div className="absolute top-4 left-4 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">
                FOUNDER & CHAIRMAN
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-6">
                <Clock className="w-4 h-4" />
                <span className="text-sm font-semibold">SINCE 1987</span>
              </div>
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">Dr. M.B.S. Sarma (Chairman)</h2>
              <ul className="space-y-2 mb-6 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                  M.A., Yoga Spiritual Science, Ph.D.
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                  M.A., English, B.Ed., Hindi Sahitya Ratna
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                  Ex. Chairman ABC-CS
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                  APPUSMA State General Secretary
                </li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-6">
                With a profound vision for holistic education, Dr. M.B.S. Sarma founded the Sree Sree Educational Society in 1989. 
                His dedication to blending traditional Indian values with modern educational practices has transformed the lives of 
                thousands of students, creating a legacy of excellence and compassion that continues to thrive today.
              </p>
            </div>
          </div>
        </section>
      </Reveal>

      {/* Timeline */}
      <Reveal>
        <section className="py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Empowering Excellence through Education</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our journey from a small language academy to a comprehensive educational institution reflects our unwavering commitment to nurturing young minds.
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 md:-translate-x-1/2" />
              
              {[
                { year: "1987", title: "The Beginning", desc: "Founding of Sree Sree Academy of Languages, laying the foundation for our educational journey." },
                { year: "1989", title: "Society Established", desc: "Official registration of Sree Sree Educational Society, expanding our vision for holistic education." },
                { year: "2000s", title: "Expansion of Programs", desc: "Introduction of Primary, Middle, and High School programs with state-of-the-art facilities." },
                { year: "Today", title: "Three Decades Strong", desc: "Continued focus on holistic development, serving over 5,000 students with 100+ dedicated educators." },
              ].map((item, index) => (
                <div key={item.year} className={`relative flex items-start mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-accent rounded-full border-4 border-white shadow md:-translate-x-1/2 mt-1.5" />
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <span className="inline-block bg-accent/10 text-accent font-bold px-3 py-1 rounded-full text-sm mb-2">{item.year}</span>
                    <h3 className="text-xl font-serif font-bold text-primary mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* Core Values */}
      <Reveal>
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-accent font-semibold uppercase tracking-wider text-sm mb-2">Core Values</p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">What we stand for</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Heart, title: "Compassion", desc: "Nurturing every child with love, care, and individual attention." },
                { icon: Trophy, title: "Excellence", desc: "Striving for the highest standards in academics and conduct." },
                { icon: BookOpen, title: "Knowledge", desc: "Lifelong learning via traditional wisdom and modern methods." },
                { icon: Users, title: "Community", desc: "Building strong bonds between students, families, and educators." },
                { icon: Sparkles, title: "Creativity", desc: "Encouraging creative expression in all facets of learning." },
                { icon: Medal, title: "Discipline", desc: "Instilling values that shape responsible global citizens." },
              ].map((value, index) => (
                <Reveal key={value.title} delay={index * 100}>
                  <div className="bg-white p-6 rounded-xl border border-gray-100 card-lift h-full">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                      <value.icon className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="text-lg font-bold text-primary mb-2">{value.title}</h3>
                    <p className="text-gray-600 text-sm">{value.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-accent text-white px-8 py-3.5 rounded-full font-semibold hover:bg-amber-600 transition-all">
                Contact Us <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </Reveal>
    </>
  );
}