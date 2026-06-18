import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Left Column */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white font-pragati font-bold text-lg">
                SS
              </div>
              <div>
                <h3 className="font-bold text-lg text-brand-red">
                  <span className="font-pragati">Sr</span>
                  <span className="font-serif">ee Sree</span>
                </h3>
                <p className="text-xs text-gray-400 uppercase tracking-wider">Educational Society</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Empowering excellence through education since 1987 — a legacy of nurturing young minds in Eluru, Andhra Pradesh.
            </p>
            <div>
              <h4 className="font-semibold text-sm uppercase tracking-wider text-accent mb-3">Programs</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Primary School</li>
                <li>Middle School</li>
                <li>High School</li>
                <li>Yoga & Pranayama</li>
              </ul>
            </div>
          </div>

          {/* Middle Column */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-accent mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-accent transition-colors">About</Link></li>
              <li><Link href="/achievements" className="hover:text-accent transition-colors">Achievements</Link></li>
              <li><Link href="/academics" className="hover:text-accent transition-colors">Academics</Link></li>
              <li><Link href="/gallery" className="hover:text-accent transition-colors">Gallery</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Right Column */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-accent mb-4">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span>Sriram Nagar, Sanivarapupeta, Eluru, AP 534003</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <span>08812-244084</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <span>sreesreeeducationsociety1987@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Interactive Map Section — placed below Programs / Quick Links / Contact */}
        <div className="mt-12 max-w-2xl mx-auto text-center">
          <h4 className="font-semibold text-sm uppercase tracking-wider text-accent mb-4">Find Us</h4>
          <div className="relative w-full h-48 md:h-56 rounded-2xl overflow-hidden border border-white/10 shadow-lg bg-gray-800">
            <iframe
              title="School Location Map"
              src="https://maps.google.com/maps?q=Sriram+Nagar,+Sanivarapupeta,+Eluru,+Andhra+Pradesh+534003&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(20%) contrast(1.1)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            />
            {/* Map Overlay Card */}
            <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 bg-white text-primary p-4 rounded-xl shadow-lg max-w-xs hidden md:block">
              <div className="flex items-start gap-3">
                <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-sm mb-1">Sree Sree Educational Society</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Sriram Nagar, Sanivarapupeta,<br />
                    Eluru, Andhra Pradesh 534003
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © 2025 Sree Sree Educational Society. All rights reserved.
          </p>
          <p className="text-sm text-gray-500 italic">
            Crafted with care for excellence in education.
          </p>
        </div>
      </div>
    </footer>
  );
}
