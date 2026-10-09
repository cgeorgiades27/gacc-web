"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Phone, Clock, MapPin, Menu, X, Calendar } from "lucide-react";
import logoImg from "@/public/images/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Programs", href: "/programs" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-stone-200/80 shadow-xs">
      {/* Top contact strip */}
      <div className="bg-[#6ea843] text-white text-xs py-2 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <a
              href="tel:727-393-8352"
              className="flex items-center gap-1.5 hover:text-amber-200 transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>(727) 393-8352</span>
            </a>
            <div className="hidden md:flex items-center gap-1.5 text-white/90">
              <Clock className="w-3.5 h-3.5" />
              <span>Mon – Fri: 6:30 AM – 6:00 PM</span>
            </div>
            <div className="hidden lg:flex items-center gap-1.5 text-white/90">
              <MapPin className="w-3.5 h-3.5" />
              <span>9110 102nd Ave N, Seminole, FL</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center rounded-full bg-amber-400/20 px-2 py-0.5 text-[11px] font-semibold text-amber-200 border border-amber-300/30">
              30+ Years of Caring Excellence
            </span>
            <span className="hidden sm:inline-block text-white/90 text-xs">
              Florida VPK Provider
            </span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative h-12 w-44 sm:h-14 sm:w-56 transition-transform group-hover:scale-[1.01]">
            <Image
              src={logoImg}
              alt="Green Acres Child Care Center Logo"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-semibold transition-all relative py-1 ${
                  active
                    ? "text-[#6ea843]"
                    : "text-slate-600 hover:text-[#6ea843]"
                }`}
              >
                {link.name}
                {active && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#6ea843] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:727-393-8352"
            className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-[#4d7a2c] bg-[#f1f7ec] hover:bg-[#e2efd7] rounded-full transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>Call Us</span>
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-5 py-2 text-sm font-semibold text-white bg-[#6ea843] hover:bg-[#588b32] rounded-full shadow-sm hover:shadow-md transition-all"
          >
            <Calendar className="w-4 h-4" />
            <span>Schedule Tour</span>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg text-slate-700 hover:text-[#6ea843] hover:bg-[#f1f7ec] focus:outline-hidden"
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-stone-200 px-4 pt-2 pb-6 space-y-3 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-3 py-2 rounded-lg text-base font-medium transition-colors ${
                    active
                      ? "bg-[#f1f7ec] text-[#4d7a2c] font-semibold"
                      : "text-slate-700 hover:bg-slate-50 hover:text-[#6ea843]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
            <a
              href="tel:727-393-8352"
              className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-semibold text-[#4d7a2c] bg-[#f1f7ec]"
            >
              <Phone className="w-4 h-4" />
              <span>Call (727) 393-8352</span>
            </a>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-semibold text-white bg-[#6ea843]"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule a Tour</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
