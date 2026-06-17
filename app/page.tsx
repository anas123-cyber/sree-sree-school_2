import Link from "next/link";
import Image from "next/image";
import { Clock, Users, GraduationCap, Trophy, Target, Eye, ChevronRight, Star, BookOpen, Quote } from "lucide-react";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import HeroSlider from "@/components/HeroSlider";

export default function Home() {
  return (
    <>
      {/* Dynamic Hero Slider Section */}
      <HeroSlider />

      {/* Stats Banner */}
      <Reveal>
        <section className="relative -mt-16 z-20 px-4">
          <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
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

      {/* About Snippet */}
      <Reveal>
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/IMG-20260614-WA0032.jpg"
                alt="Chairman"
                width={500}
                height={600}
                className="rounded-2xl shadow-lg"
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
        <section className="py-20 px-4 bg-white">
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
        <section className="py-20 px-4 bg-cream">
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
        <section className="py-20 px-4 bg-white">
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

      {/* Testimonials Section */}
      <Reveal>
        <section className="py-24 px-4 bg-gradient-to-r from-primary to-slate-800 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px w-12 bg-accent" />
              <span className="text-accent font-bold uppercase tracking-wider text-sm">Testimonial</span>
              <div className="h-px w-12 bg-accent" />
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-12">
              What <span className="text-accent">parents</span> say
            </h2>

            <div className="bg-primary/40 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 relative">
              <Quote className="absolute top-6 left-6 w-16 h-16 text-accent/20" />
              
              <p className="text-xl md:text-2xl font-serif italic leading-relaxed mb-8 relative z-10">
                "We've seen such a wonderful transformation in our child ever since she joined. She comes home every day excited to share what she's learned. The love, care, and dedication of the staff truly shine through. As parents, we feel confident and grateful knowing she's in such a nurturing environment."
              </p>

              <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
                <div className="w-14 h-14 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full bg-gray-400" /> {/* Placeholder for avatar */}
                </div>
                <div className="text-left">
                  <p className="font-bold text-lg">Priya M</p>
                  <p className="text-gray-400 text-sm">Parent</p>
                </div>
                <div className="flex gap-1 md:ml-auto">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-2 mt-8">
              <div className="w-8 h-2 bg-accent rounded-full" />
              <div className="w-2 h-2 bg-white/30 rounded-full" />
              <div className="w-2 h-2 bg-white/30 rounded-full" />
            </div>
          </div>
        </section>
      </Reveal>

      {/* CTA Section */}
      <Reveal>
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto bg-primary rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent" />
            <div className="relative z-10">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-accent" />
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">Ready to join our family?</h2>
              <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                Give your child the gift of holistic education in a nurturing environment that values tradition, innovation, and character.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-accent text-white px-8 py-3.5 rounded-full font-semibold hover:bg-amber-600 transition-all flex items-center justify-center gap-2">
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