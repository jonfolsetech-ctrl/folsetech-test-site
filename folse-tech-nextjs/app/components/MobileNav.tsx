"use client";

import { useState } from "react";

interface MobileNavProps {
  navLinks: Array<{ href: string; label: string }>;
}

export default function MobileNav({ navLinks }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-white hover:bg-blue-800 rounded-lg transition"
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

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-gradient-to-r from-slate-900 to-blue-900 shadow-lg">
          <div className="px-6 py-4 space-y-3 border-t-4 border-amber-500">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="block text-blue-100 hover:text-amber-400 transition font-medium text-sm uppercase tracking-wide py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+1-225-313-1914"
              onClick={() => setIsOpen(false)}
              className="block w-full text-left bg-amber-500 text-slate-900 hover:bg-amber-400 rounded-lg font-semibold px-4 py-2 transition mt-3 text-center"
            >
              Call Now
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
