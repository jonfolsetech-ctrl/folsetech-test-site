"use client";

import PhoneLink from "./PhoneLink";
import MobileNav from "./MobileNav";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "/blog", label: "Blog" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className={`fixed top-0 w-full bg-brand-navy/70 backdrop-blur-md z-50 transition-all duration-300 ${
      scrolled ? "shadow-lg border-b border-brand-navy-700" : "shadow-sm"
    }`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 md:gap-3 group">
          <div className="w-10 md:w-11 h-10 md:h-11">
            <Image src="/folsetechlogo.png" alt="Folsetech" width={48} height={48} className="object-contain w-full h-full" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg md:text-xl font-bold text-slate-100 tracking-tight">Folsetech</span>
            <span className="text-xs bg-gradient-to-r from-brand-cyan-400 to-brand-gold-500 bg-clip-text text-transparent font-medium hidden sm:block">AI Solutions LLC</span>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map(link => (
            <a 
              key={link.href} 
              href={link.href} 
              className="text-slate-300 hover:text-brand-cyan-400 transition-colors font-medium text-sm relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-yellow-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
          <PhoneLink 
            label="Navigation Phone CTA" 
            className="px-5 py-2.5 bg-gradient-to-r from-brand-cyan-400 to-brand-gold-500 text-slate-900 hover:shadow-lg hover:shadow-brand-gold-500/30 rounded-lg font-medium text-sm transition-all duration-300 shadow-md hover:opacity-90"
          />
        </div>

        {/* Mobile Navigation */}
        <MobileNav navLinks={navLinks} />
      </div>
    </nav>
  );
}
