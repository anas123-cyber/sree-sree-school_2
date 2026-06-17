import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";

export default function Achievements() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[350px] md:h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/1000228463.jpg"
            alt="Achievements Hero"
            fill
            className="object-cover animate-ken-burns"
            priority
          />
          <div className="absolute inset-0 bg-primary/50" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/45 via-primary/20 to-primary/55" />
        </div>
        <div className="relative z-10 text-center px-4 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4 tracking-wide text-shadow-hero">
            ACHIEVEMENTS
          </h1>
          <div className="flex items-center justify-center gap-2 text-sm font-medium">
            <Link href="/" className="text-white hover:text-accent transition-colors">
              Home
            </Link>
            <span className="text-teal-400">//</span>
            <span className="text-white">Achievements</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <Reveal>
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">

          {/* Left Column: Image/Poster Placeholder */}
          <div className="group relative rounded-2xl overflow-hidden shadow-xl border border-gray-100">
            <Image
              src="/IMG-20260614-WA0034.jpg"
              alt="Achievements Collage"
              width={600}
              height={800}
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Optional: Overlay badge for marks */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border-l-4 border-accent">
              <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1">Recent Top Scorers</p>
              <div className="flex flex-wrap gap-2">
                {["590", "584", "583", "575", "574"].map((score) => (
                  <span key={score} className="bg-primary text-white text-sm font-bold px-3 py-1 rounded-full transition-all hover:bg-accent hover:scale-105">
                    {score} Marks
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="pt-4 md:pt-8">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rotate-45 bg-teal-600" />
              <span className="text-teal-600 font-bold uppercase tracking-wider text-sm">
                Sree Sree Educational Society
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">
              <span className="text-primary">Our </span>
              <span className="text-red-800">Achievements</span>
            </h2>

            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              <p>
                We are immensely proud to announce the outstanding results of our students in the SSC Board Examinations for the academic years 2022–2023 and 2023–2024. Our students have consistently secured top ranks, achieving remarkable scores of <strong className="text-primary">590, 584, 583, 575, and 574 marks</strong> respectively. 
              </p>
              <p>
                Over the past 36 years, more than <strong className="text-primary">3,000 students</strong> from our institution have scored above 500 marks, a testament to our unwavering commitment to academic excellence and holistic development.
              </p>
              <p>
                Beyond board examinations, our students actively participate and excel in various state-level talent tests, Olympiads, and the Godavari talent tests. Year after year, many of our scholars secure prestigious state ranks, bringing honor and pride to the Sree Sree Educational Society family.
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-gray-100">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-cream rounded-xl card-lift">
                  <p className="text-3xl font-serif font-bold text-accent mb-1"><CountUp target={36} />+</p>
                  <p className="text-sm text-gray-600">Years of Excellence</p>
                </div>
                <div className="text-center p-4 bg-cream rounded-xl card-lift">
                  <p className="text-3xl font-serif font-bold text-accent mb-1"><CountUp target={3000} />+</p>
                  <p className="text-sm text-gray-600">Students Scored 500+</p>
                </div>
                <div className="text-center p-4 bg-cream rounded-xl card-lift">
                  <p className="text-3xl font-serif font-bold text-accent mb-1"><CountUp target={100} />+</p>
                  <p className="text-sm text-gray-600">State Rank Holders</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
      </Reveal>
    </>
  );
}