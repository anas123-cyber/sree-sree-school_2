"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Cpu, Hand, HeartHandshake, Crown, Dumbbell } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Achievements", href: "/achievements" },
  { name: "Academics", href: "/academics" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

const programs = [
  { name: "Robotics & AI", href: "/programs#robotics-ai", icon: Cpu, desc: "Coding, robotics & AI labs" },
  { name: "Karate", href: "/programs#karate", icon: Hand, desc: "Discipline & self-defence" },
  { name: "Ethical Classes", href: "/programs#ethical-classes", icon: HeartHandshake, desc: "Values & character building" },
  { name: "Chess Program", href: "/programs#chess", icon: Crown, desc: "Strategy & focus" },
  { name: "Sports", href: "/programs#sports", icon: Dumbbell, desc: "Fitness & teamwork" },
];

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);
  const [mobileProgramsOpen, setMobileProgramsOpen] = useState(false);
  const programsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    // Initial check in case page loads scrolled down
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close the desktop Programs dropdown when clicking outside of it
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (programsRef.current && !programsRef.current.contains(e.target as Node)) {
        setIsProgramsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const programsActive = pathname === "/programs";

  return (
    <header className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="relative w-14 h-14 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/logo.jpg"
                alt="Sree Sree Educational Society logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="font-bold text-xl leading-tight text-brand-red tracking-tight">
                <span className="font-pragati">Sr</span>
                <span className="font-serif">ee Sree</span>
              </h1>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-blue">Educational Society</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-underline text-sm font-medium transition-colors hover:text-accent ${
                  pathname === link.href
                    ? "text-accent nav-underline-active"
                    : isScrolled ? "text-gray-700" : "text-primary"
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Programs Dropdown */}
            <div
              ref={programsRef}
              className="relative"
              onMouseEnter={() => setIsProgramsOpen(true)}
              onMouseLeave={() => setIsProgramsOpen(false)}
            >
              <button
                onClick={() => setIsProgramsOpen((v) => !v)}
                className={`nav-underline flex items-center gap-1 text-sm font-medium transition-colors hover:text-accent ${
                  programsActive
                    ? "text-accent nav-underline-active"
                    : isScrolled ? "text-gray-700" : "text-primary"
                }`}
                aria-expanded={isProgramsOpen}
              >
                Programs
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isProgramsOpen ? "rotate-180" : ""}`} />
              </button>

              <div
                className={`absolute right-0 top-full pt-3 w-72 transition-all duration-200 origin-top ${
                  isProgramsOpen
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-2 pointer-events-none"
                }`}
              >
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-2 overflow-hidden">
                  {programs.map((p) => (
                    <Link
                      key={p.href}
                      href={p.href}
                      onClick={() => setIsProgramsOpen(false)}
                      className="group/item flex items-start gap-3 rounded-xl px-3 py-2.5 hover:bg-accent/10 transition-colors"
                    >
                      <span className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent group-hover/item:bg-accent group-hover/item:text-white transition-colors">
                        <p.icon className="w-5 h-5" />
                      </span>
                      <span>
                        <span className="block text-sm font-semibold text-primary">{p.name}</span>
                        <span className="block text-xs text-gray-500">{p.desc}</span>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/contact"
              className="group bg-accent text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-amber-600 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-accent/20 hover:shadow-accent/40 hover:-translate-y-0.5"
            >
              Enroll Now
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 transition-colors ${isScrolled ? "text-gray-700" : "text-primary"}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full animate-fade-in-up max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block py-2 text-sm font-medium ${
                  pathname === link.href ? "text-accent" : "text-gray-700"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            {/* Mobile Programs accordion */}
            <div>
              <button
                onClick={() => setMobileProgramsOpen((v) => !v)}
                className={`flex w-full items-center justify-between py-2 text-sm font-medium ${
                  programsActive ? "text-accent" : "text-gray-700"
                }`}
                aria-expanded={mobileProgramsOpen}
              >
                Programs
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileProgramsOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileProgramsOpen && (
                <div className="mt-1 mb-1 space-y-1 border-l-2 border-accent/30 pl-3">
                  {programs.map((p) => (
                    <Link
                      key={p.href}
                      href={p.href}
                      onClick={() => {
                        setIsMenuOpen(false);
                        setMobileProgramsOpen(false);
                      }}
                      className="flex items-center gap-2 py-1.5 text-sm text-gray-600 hover:text-accent"
                    >
                      <p.icon className="w-4 h-4 text-accent" />
                      {p.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className="block bg-accent text-white px-5 py-3 rounded-full text-sm font-semibold text-center mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Enroll Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
