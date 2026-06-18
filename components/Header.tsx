"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Achievements", href: "/achievements" },
  { name: "Academics", href: "/academics" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    // Initial check in case page loads scrolled down
    handleScroll();
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full animate-fade-in-up">
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