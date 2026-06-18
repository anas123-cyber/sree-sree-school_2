import Link from "next/link";
import Image from "next/image";
import { Clock, Users, GraduationCap, Trophy, Target, Eye, ChevronRight, Star, BookOpen } from "lucide-react";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import HeroSlider from "@/components/HeroSlider";
import Marquee from "@/components/Marquee";
import Testimonials from "@/components/Testimonials";
import ConnectionHub from "@/components/ConnectionHub";

export default function Home() {
  return (
    <>
      {/* Dynamic Hero Slider Section */}
      <HeroSlider />

      {/* Stats Banner */}
      <Reveal>
        <section className="relative -mt-16 z-20 px-4">
          <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-6 sm:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center group">
              <Clock className="w-8 h-8 text-accent mx-auto mb-3 transition-transform group-hover:scale-110 duration-300" />
              <p className="text-4xl md:text-5xl font-serif font-bold text-primary mb-1 tracking-tight">
                <CountUp target={38} />+
              </p>
              <p className="text-sm text-gray-600 font-medium uppercase tracking-wide">Years of Excellence</p>
            </div>
            <div className="text-center group">
              <Users className="w-8 h-8 text-accent mx-auto mb-3 transition-transform group-hover:scale-110 duration-300" />
              <p className="text-4xl md:text-5xl font-serif font-bold text-primary mb-1 tracking-tight">
                <CountUp target={5000} />+
              </p>
              <p className="text-sm text-gray-600 font-medium uppercase tracking-wide">Students Empowered</p>
            </div>
            <div className="text-center group">
              <GraduationCap className="w-8 h-8 text-accent mx-auto mb-3 transition-transform group-hover:scale-110 duration-300" />
              <p className="text-4xl md:text-5xl font-serif font-bold text-primary mb-1 tracking-tight">
                <CountUp target={100} />+
              </p>
              <p className="text-sm text-gray-600 font-medium uppercase tracking-wide">Dedicated Educators</p>
            </div>
            <div className="text-center group">
              <Trophy className="w-8 h-8 text-accent mx-auto mb-3 transition-transform group-hover:scale-110 duration-300" />
              <p className="text-4xl md:text-5xl font-serif font-bold text-primary mb-1 tracking-tight">
                <CountUp target={50} />+
              </p>
              <p className="text-sm text-gray-600 font-medium uppercase tracking-wide">Awards & Honors</p>
            </div>
          </div>
        </section>
      </Reveal>

      {/* Values Marquee */}
      <Reveal>
        <section className="pt-16 pb-4 border-y border-gray-100 bg-white/60">
          <Marquee
            items={[
              "Holistic Development",
              "Primary School",
              "Middle School",
              "High School",
              "Yoga & Pranayama",
              "Since 1987",
              "Building Character",
              "Empowering Excellence",
            ]}
          />
        </section>
      </Reveal>

      {/* About Snippet */}
      <Reveal>
        <section className="relative overflow-hidden py-14 sm:py-20 px-4">
          <div className="glow-blob bg-accent/20 w-72 h-72 -top-10 -left-16" />
          <div className="glow-blob bg-blue-400/15 w-80 h-80 bottom-0 -right-16" style={{ animationDelay: "4s" }} />
          <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/IMG-20260614-WA0032.jpg"
                alt="Chairman"
                width={500}
                height={600}
                className="rounded-2xl shadow-lg w-full h-auto"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg max-w-xs hidden md:block">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-3">
                  <Star className="w-6 h-6 text-accent" />
                </div>
                <p className="text-sm font-semibold text-primary">Since 1987</p>
                <p className="text-xs text-gray-600 mt-1">Building a legacy of educational excellence in Eluru.</p>
              </div>
            </div>
            <div>
              <p className="text-accent font-semibold uppercase tracking-wider text-sm mb-2">About Us</p>
              <h2 className="text-4xl font-serif font-bold text-primary mb-6">Empowering Excellence through Education</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Founded in 1987, Sree Sree Educational Society has been at the forefront of providing holistic, values-based education. 
                Our institution blends traditional wisdom with modern pedagogical methods to nurture well-rounded individuals.
              </p>
              <Link href="/about" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors">
                Read More <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </Reveal>

      {/* Mission & Vision */}
      <Reveal>
        <section className="py-14 sm:py-20 px-4 bg-white">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="bg-cream p-8 rounded-2xl border border-gray-100 card-lift">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To inspire a lifelong love for learning and empower students to become confident, responsible, and successful individuals who contribute positively to society.
              </p>
            </div>
            <div className="bg-cream p-8 rounded-2xl border border-gray-100 card-lift">
              <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To ignite a passion for learning, cultivate strong character, and empower students to contribute meaningfully to a rapidly changing global community.
              </p>
            </div>
          </div>
        </section>
      </Reveal>

      {/* Specifications Section */}
      <Reveal>
        <section className="py-14 sm:py-20 px-4 bg-cream">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-xl h-[400px] md:h-[500px]">
              <Image
                src="/Screenshot 2026-06-15 214520.png"
                alt="School Ceremony"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rotate-45 bg-teal-600" />
                <span className="text-teal-600 font-bold uppercase tracking-wider text-sm">Our Specifications</span>
              </div>
              <h2 className="text-4xl font-serif font-bold mb-8">
                <span className="text-primary">Our </span>
                <span className="text-red-800">Specifications</span>
              </h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-blue-800 mb-2">Class Room:</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our classrooms feature brightly colored walls and comfortable desks arranged in collaborative groups that bring lessons to life and foster interactive learning.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-800 mb-2">Computer Lab:</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our fully equipped computer lab serves as a hub for both academic and creative pursuits. It provides an ideal space for students to work on assignments, engage in group projects, and learn essential digital skills.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-800 mb-2">School Playground:</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Physical activity and outdoor play are vital to overall development. Our spacious and well-maintained playground is designed to encourage physical fitness, teamwork, social interaction, and academic excellence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* School Academics Section */}
      <Reveal>
        <section className="py-14 sm:py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-4 mb-2">
                <div className="h-px w-12 bg-accent" />
                <span className="text-accent font-bold uppercase tracking-wider text-sm">Academics</span>
                <div className="h-px w-12 bg-accent" />
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary">
                School <span className="text-accent">Academics</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  grade: "Grade I – V",
                  title: "Primary School",
                  desc: "Play-based learning, group activities, and colorful resources to inspire curiosity and confidence in young minds.",
                  image: "/IMG-20260615-WA0051.jpg"
                },
                {
                  grade: "Grade VI – VIII",
                  title: "Middle School",
                  desc: "Empowering students to excel academically, preparing them for high school and beyond with confidence and critical thinking.",
                  image: "/IMG-20260615-WA0047.jpg"
                },
                {
                  grade: "Grade IX – X",
                  title: "High School",
                  desc: "Subject proficiency combined with spiritual practices like Yoga and Pranayama for holistic personality development.",
                  image: "/IMG-20260615-WA0061.jpg"
                }
              ].map((item, index) => (
                <div key={item.title} className="group relative rounded-2xl overflow-hidden shadow-lg card-lift">
                  <div className="relative h-64">
                    <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-primary/60 group-hover:bg-primary/70 transition-colors" />
                    <div className="absolute top-4 right-4 bg-accent text-white text-xs font-bold px-3 py-1.5 rounded-full">
                      {item.grade}
                    </div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                      <BookOpen className="w-10 h-10 text-white mb-4 opacity-90" />
                      <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                      <p className="text-gray-200 text-sm leading-relaxed mb-4">{item.desc}</p>
                      <Link href="/academics" className="text-accent font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                        Learn More <ChevronRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link href="/academics" className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3.5 rounded-full font-semibold hover:bg-primary/90 transition-all">
                View All Programs <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </Reveal>

      {/* Why Choose Us — Connection Hub */}
      <Reveal>
        <section className="py-14 sm:py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-4 mb-2">
                <div className="h-px w-12 bg-accent" />
                <span className="text-accent font-bold uppercase tracking-wider text-sm">Why Sree Sree</span>
                <div className="h-px w-12 bg-accent" />
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary">
                One connected <span className="text-accent">learning ecosystem</span>
              </h2>
            </div>
            <ConnectionHub />
          </div>
        </section>
      </Reveal>

      {/* Testimonials Section */}
      <Reveal>
        <section className="py-16 sm:py-24 px-4 bg-gradient-to-r from-primary to-slate-800 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
          <div className="glow-blob bg-accent/30 w-96 h-96 top-0 left-1/4" />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px w-12 bg-accent" />
              <span className="text-accent font-bold uppercase tracking-wider text-sm">Testimonial</span>
              <div className="h-px w-12 bg-accent" />
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-12">
              What <span className="text-accent">parents</span> say
            </h2>

            <Testimonials />
          </div>
        </section>
      </Reveal>

      {/* CTA Section */}
      <Reveal>
        <section className="py-14 sm:py-20 px-4">
          <div className="max-w-4xl mx-auto bg-primary rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent" />
            <div className="glow-blob bg-accent/40 w-72 h-72 -top-16 -right-10" />
            <div className="glow-blob bg-blue-500/25 w-72 h-72 -bottom-16 -left-10" style={{ animationDelay: "5s" }} />
            <div className="relative z-10">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-accent" />
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">Ready to join our family?</h2>
              <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                Give your child the gift of holistic education in a nurturing environment that values tradition, innovation, and character.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-accent text-white px-8 py-3.5 rounded-full font-semibold hover:bg-amber-600 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/30 transition-all duration-300 flex items-center justify-center gap-2">
                  Enroll Now <ChevronRight className="w-5 h-5" />
                </Link>
                <Link href="/academics" className="bg-white/10 backdrop-blur-sm text-white border border-white/30 px-8 py-3.5 rounded-full font-semibold hover:bg-white/20 transition-all">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Reveal>
    </>
  );
}