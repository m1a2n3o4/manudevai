"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/curriculum", label: "Curriculum" },
  { href: "#why-devai", label: "Why DevAI?" },
  { href: "#trainer", label: "Coach" },
  { href: "#outcomes", label: "Outcomes" },
  { href: "#register", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-[#ff9202]/20" style={{ backgroundColor: "rgba(16, 4, 74, 0.92)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Hamburger - Left */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white/70 hover:text-[#ff9202] transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Logo */}
          <Link href="/" className="absolute left-1/2 -translate-x-1/2 font-bold flex items-center text-2xl sm:text-4xl">
            <span className="text-white">{"{"}Manu</span>
            <span className="text-[#ff9202]">DevAI{"}"}</span>
            <img src="/logos/india.svg" alt="India" className="w-8 h-5 rounded-sm ml-2" />
          </Link>

          {/* Right spacer for balance */}
          <div className="w-6" />
        </div>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="pb-4 space-y-3 border-t border-[#ff9202]/10 pt-3">
            {navLinks.map((link) =>
              link.href.startsWith("/") ? (
                <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="block text-white/70 hover:text-[#ff9202] transition-colors">
                  {link.label}
                </Link>
              ) : (
                <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="block text-white/70 hover:text-[#ff9202] transition-colors">
                  {link.label}
                </a>
              )
            )}
            <a
              href="#register"
              onClick={() => setIsOpen(false)}
              className="block border border-[#ff9202] text-[#ff9202] hover:bg-[#ff9202] hover:text-[#10044a] px-5 py-2 rounded-full font-medium text-center transition-colors"
            >
              Register Free
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
