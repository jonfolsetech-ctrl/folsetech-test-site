"use client";

import PhoneLink from "./PhoneLink";
import MobileNav from "./MobileNav";

export default function Navigation() {
  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "/blog", label: "Blog" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-gradient-to-r from-slate-900 to-blue-900 border-b-4 border-amber-500 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-4 md:py-5 flex justify-between items-center">
        <div className="flex items-center gap-2 md:gap-3">
          <div className="w-10 md:w-12 h-10 md:h-12 bg-amber-500 rounded-lg flex items-center justify-center text-slate-900 font-bold text-xs md:text-sm">FT</div>
          <div className="flex flex-col">
            <span className="text-base md:text-lg font-bold text-white">Folsetech</span>
            <span className="text-xs text-amber-300 font-semibold hidden sm:block">AI Solutions</span>
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-10 items-center">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className="text-blue-100 hover:text-amber-400 transition font-medium text-sm uppercase tracking-wide">
              {link.label}
            </a>
          ))}
          <PhoneLink label="Navigation Phone CTA" className="px-6 py-2 bg-amber-500 text-slate-900 hover:bg-amber-400 rounded-lg font-semibold transition" />
        </div>

        {/* Mobile Navigation */}
        <MobileNav navLinks={navLinks} />
      </div>
    </nav>
  );
}
