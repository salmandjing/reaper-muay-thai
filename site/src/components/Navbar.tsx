"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { img } from "@/lib/config";

const navLinks = [
  { href: "#programs", label: "PROGRAMS" },
  { href: "#schedule", label: "SCHEDULE" },
  { href: "#pricing", label: "PRICING" },
  { href: "#instructors", label: "COACHES" },
  { href: "#gallery", label: "GALLERY" },
  { href: "#homeschool", label: "HOMESCHOOL" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-charcoal/95 backdrop-blur-md border-b border-accent/20 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-3 group">
            <Image
              src={img("/photos/logo-new.png")}
              alt="Reaper HQ"
              width={100}
              height={136}
              className={`transition-all duration-500 ${
                scrolled ? "h-9 w-auto" : "h-12 w-auto"
              }`}
            />
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                
                className="font-heading font-semibold text-sm tracking-[0.2em] text-bone/70 hover:text-accent transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <a
              href="#contact"
              className="ml-4 font-heading font-bold text-sm tracking-[0.15em] bg-accent text-bone px-6 py-2.5 hover:bg-accent/80 transition-all duration-300 uppercase"
            >
              Book a Trial
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2 z-50"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={
                mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }
              }
              className="block w-7 h-[2px] bg-bone"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-7 h-[2px] bg-bone"
            />
            <motion.span
              animate={
                mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }
              }
              className="block w-7 h-[2px] bg-bone"
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-charcoal/98 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="font-heading font-bold text-3xl tracking-[0.2em] text-bone hover:text-accent transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.05 }}
              className="mt-4 font-heading font-bold text-lg tracking-[0.15em] bg-accent text-bone px-10 py-4 hover:bg-accent/80 transition-all"
            >
              START TRAINING
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
