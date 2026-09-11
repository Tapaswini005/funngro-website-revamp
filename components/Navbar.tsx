"use client";

import { useState } from "react";
import Link from "next/link";

const navItems = [
  { label: "How It Works", href: "/#how-it-works" },
  { label: "For Teens", href: "/audience#teens" },
  { label: "For Companies", href: "/audience#companies" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative z-50 mx-auto w-full max-w-7xl px-6 py-6 lg:px-8">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-tight">
          funngro<span className="text-[#45d483]">.</span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className="rounded-lg p-2 text-slate-300 transition-colors hover:text-white md:hidden"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
          >
            <span className="text-2xl leading-none">
              {isOpen ? "✕" : "☰"}
            </span>
          </button>

          {/* Login */}
          <a
            href="#login"
            className="hidden rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:text-white sm:block"
          >
            Log in
          </a>

          {/* Get Started */}
          <a
            href="#get-started"
            className="rounded-full bg-[#45d483] px-5 py-2.5 text-sm font-semibold text-[#08111f] transition-all hover:bg-[#5ee396] hover:shadow-lg hover:shadow-[#45d483]/20"
          >
            Get Started
          </a>
        </div>
      </div>

      {/* Mobile navigation */}
      {isOpen && (
        <div className="mt-4 rounded-2xl border border-white/10 bg-[#0d1828] p-5 shadow-2xl md:hidden">
          <div className="flex flex-col gap-5">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}

            <a
              href="#login"
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
            >
              Log in
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}