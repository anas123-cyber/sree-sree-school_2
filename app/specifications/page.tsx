import Link from "next/link";
import Image from "next/image";
import { ChevronRight, BookOpen, Monitor, Bell, Library, FlaskConical, Music, Palette, Dumbbell, HeartHandshake } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function Specifications() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[320px] sm:h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=2000"
            alt="Specifications"
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
            <span>Specifications</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 text-shadow-hero">Our Specifications</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            World-class facilities designed to nurture every dimension of a child's growth — academic, physical, creative, and spiritual.
          </p>
        </div>
      </section>

      {/* Main Facilities */}
      <Reveal>
        <section className="py-14 sm:py-20 px-4">
          <div className="max-w-6xl mx-auto space-y-16">
            {/* Class Room */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="group relative rounded-2xl overflow-hidden shadow-lg h-80">
                <Image
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800"
                  alt="Class Room"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <p className="text-accent font-semibold uppercase tracking-wider text-sm mb-2">Facility 01</p>
                <h2 className="text-3xl font-serif font-bold text-primary mb-4">Class Room</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Our classrooms are designed to be bright, welcoming, and conducive to learning. They foster collaboration and curiosity.
                </p>
                <ul className="space-y-3">
                  {["Bright, colorful walls stimulating creativity", "Collaborative seating arrangements", "Smart-board ready technology", "Spacious and well-lit environments"].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full border-2 border-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-accent rounded-full" />
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Computer Lab */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="md:order-2 group relative rounded-2xl overflow-hidden shadow-lg h-80">
                <Image
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800"
                  alt="Computer Lab"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                  <Monitor className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="md:order-1">
                <p className="text-accent font-semibold uppercase tracking-wider text-sm mb-2">Facility 02</p>
                <h2 className="text-3xl font-serif font-bold text-primary mb-4">Computer Lab</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  State-of-the-art computer facilities ensuring students are equipped with essential digital literacy and coding skills.
                </p>
                <ul className="space-y-3">
                  {["Modern desktop computers", "High-speed internet connectivity", "Age-appropriate coding curriculum", "Dedicated group project zones"].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full border-2 border-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-accent rounded-full" />
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Playground */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="group relative rounded-2xl overflow-hidden shadow-lg h-80">
                <Image
                  src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800"
                  alt="Playground"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                  <Bell className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <p className="text-accent font-semibold uppercase tracking-wider text-sm mb-2">Facility 03</p>
                <h2 className="text-3xl font-serif font-bold text-primary mb-4">School Playground</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  A safe and expansive outdoor space promoting physical fitness, teamwork, and healthy competition among students.
                </p>
                <ul className="space-y-3">
                  {["Spacious open ground for various sports", "Multiple sports facilities and equipment", "Safe, monitored play zones", "Daily physical activity programs"].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full border-2 border-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-accent rounded-full" />
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* More Facilities Grid */}
      <Reveal>
        <section className="py-14 sm:py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="h-px w-12 bg-accent" />
                <p className="text-accent font-semibold uppercase tracking-wider text-sm">More Facilities</p>
                <div className="h-px w-12 bg-accent" />
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">Spaces that spark joy</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Library, title: "Library", desc: "Vast collection of books, digital resources, and quiet reading spaces." },
                { icon: FlaskConical, title: "Science Lab", desc: "Fully equipped labs for hands-on experiments and scientific discovery." },
                { icon: Music, title: "Music Room", desc: "Dedicated space for vocal and instrumental music training." },
                { icon: Palette, title: "Art & Craft Studio", desc: "Creative environment for painting, sculpture, and artistic expression." },
                { icon: Dumbbell, title: "Sports Programs", desc: "Structured coaching in cricket, football, badminton, and athletics." },
                { icon: HeartHandshake, title: "Yoga & Meditation", desc: "Daily sessions for mental clarity, flexibility, and spiritual growth." },
              ].map((facility, index) => (
                <Reveal key={facility.title} delay={index * 100}>
                  <div className="bg-cream p-6 rounded-xl border border-gray-100 card-lift text-center h-full">
                    <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <facility.icon className="w-7 h-7 text-accent" />
                    </div>
                    <h3 className="text-lg font-bold text-primary mb-2">{facility.title}</h3>
                    <p className="text-gray-600 text-sm">{facility.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3.5 rounded-full font-semibold hover:bg-primary/90 transition-all">
                Schedule a Campus Visit <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </Reveal>
    </>
  );
}