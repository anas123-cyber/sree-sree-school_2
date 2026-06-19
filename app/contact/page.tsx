import Link from "next/link";
import Image from "next/image";
import { ChevronRight, MapPin, Mail, Phone, Clock, Facebook, Instagram, Youtube, Twitter, Send } from "lucide-react";
import Reveal from "@/components/Reveal";
import TextReveal from "@/components/TextReveal";

export default function Contact() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[320px] sm:h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/1000228463.jpg"
            alt="Contact"
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
            <span>Contact</span>
          </div>
          <TextReveal
            as="h1"
            text="Get in Touch"
            highlight={["Touch"]}
            className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 text-shadow-hero"
          />
          <p className="text-gray-200 max-w-2xl mx-auto">
            Building a strong foundation for lifelong success through education and innovation. We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <Reveal>
        <section className="py-14 sm:py-20 px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-12">
          {/* Left Column - Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start gap-4 card-lift">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-primary mb-1">Address</h3>
                <p className="text-gray-600 text-sm">Sriram Nagar, Sanivarapupeta, Eluru, Andhra Pradesh 534003</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start gap-4 card-lift">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-primary mb-1">Email</h3>
                <p className="text-gray-600 text-sm">sreesreeeducationsociety1987@gmail.com</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start gap-4 card-lift">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-primary mb-1">Phone</h3>
                <p className="text-gray-600 text-sm">08812-244084</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start gap-4 card-lift">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-primary mb-1">Office Hours</h3>
                <p className="text-gray-600 text-sm">Mon – Sat • 9:00 AM – 5:00 PM</p>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-primary p-6 rounded-xl text-white">
              <h3 className="font-bold text-lg mb-2">Follow Us</h3>
              <p className="text-gray-400 text-sm mb-4">Stay connected through social media.</p>
              <div className="flex gap-3">
                {[Facebook, Instagram, Youtube, Twitter].map((Icon, index) => (
                  <a key={index} href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-serif font-bold text-primary mb-2">Send us a Message</h2>
              <p className="text-gray-600 text-sm mb-8">Fill the form below and we'll get back to you within one business day.</p>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                    <input 
                      type="text" 
                      placeholder="Your full name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input 
                      type="email" 
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                  <input 
                    type="tel" 
                    placeholder="+91 9876543210"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea 
                    rows={5}
                    placeholder="How can we help you?"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all resize-none"
                  />
                </div>
                
                <button 
                  type="submit"
                  className="w-full md:w-auto bg-accent text-white px-8 py-3.5 rounded-full font-semibold hover:bg-amber-600 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/30 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Send Message <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
        </section>
      </Reveal>

      {/* Map Section */}
      <Reveal>
        <section className="py-14 sm:py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px w-12 bg-accent" />
              <p className="text-accent font-semibold uppercase tracking-wider text-sm">Find Us</p>
              <div className="h-px w-12 bg-accent" />
            </div>
            <TextReveal
              as="h2"
              text="Visit our campus"
              highlight={["campus"]}
              className="text-3xl md:text-4xl font-serif font-bold text-primary"
            />
          </div>
          
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 h-96 relative">
            <iframe
              title="Sree Sree Educational Society Location"
              src="https://maps.google.com/maps?q=Sree+Sree+Educational+Society,+Sriram+Nagar,+Sanivarapupeta,+Eluru,+Andhra+Pradesh+534003&t=&z=18&ie=UTF8&iwloc=B&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            />
          </div>
        </div>
        </section>
      </Reveal>
    </>
  );
}