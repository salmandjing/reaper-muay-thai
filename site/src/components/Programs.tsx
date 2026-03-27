"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const programs = [
  {
    title: "Muay Thai",
    subtitle: "The Art of Eight Limbs",
    description:
      "Strikes with fists, elbows, knees, and shins. Our program covers traditional technique, pad work, clinch fighting, and sparring for all levels. From fundamentals to fight camp.",
    icon: (
      <svg viewBox="0 0 64 64" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M32 8c-4 0-7 3-7 7v12l-8 8v8h30v-8l-8-8V15c0-4-3-7-7-7z" />
        <path d="M25 43v8h14v-8" />
        <circle cx="32" cy="12" r="2" fill="currentColor" />
      </svg>
    ),
    accent: "from-blood/20 to-transparent",
  },
  {
    title: "MMA",
    subtitle: "Mixed Martial Arts",
    description:
      "The complete combat system. Integrating striking, wrestling, and submissions into a unified fighting style. Competition-focused training with experienced coaches.",
    icon: (
      <svg viewBox="0 0 64 64" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="32" cy="32" r="20" />
        <path d="M22 32h20M32 22v20" />
        <path d="M25 25l14 14M39 25L25 39" />
      </svg>
    ),
    accent: "from-bone/10 to-transparent",
  },
  {
    title: "BJJ",
    subtitle: "Brazilian Jiu-Jitsu",
    description:
      "Ground fighting and submission grappling. Gi and no-gi classes for beginners through advanced competitors. Technique-first approach with live rolling every session.",
    icon: (
      <svg viewBox="0 0 64 64" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20 44c0-8 5-12 12-12s12 4 12 12" />
        <circle cx="32" cy="24" r="8" />
        <path d="M24 44l-4 8h24l-4-8" />
      </svg>
    ),
    accent: "from-steel/10 to-transparent",
  },
];

export default function Programs() {
  return (
    <section id="programs" className="relative py-28 md:py-36 bg-ash">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <span className="font-heading font-semibold text-blood text-xs tracking-[0.4em] uppercase">
            Disciplines
          </span>
          <h2 className="mt-4 font-heading font-black text-5xl md:text-7xl text-bone uppercase leading-[0.9] tracking-tight">
            Programs
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {programs.map((program, i) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="group relative bg-smoke/50 border border-bone/5 p-8 md:p-10 hover:border-blood/30 transition-all duration-500 overflow-hidden"
            >
              {/* Gradient accent on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-b ${program.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                <div className="text-blood/70 group-hover:text-blood transition-colors duration-300">
                  {program.icon}
                </div>

                <h3 className="mt-6 font-heading font-black text-3xl md:text-4xl text-bone uppercase tracking-tight">
                  {program.title}
                </h3>
                <p className="mt-1 font-heading font-semibold text-xs tracking-[0.2em] text-blood/60 uppercase">
                  {program.subtitle}
                </p>

                <p className="mt-5 font-body text-base text-bone/60 leading-relaxed tracking-wide">
                  {program.description}
                </p>

                <div className="mt-8 flex items-center gap-2 text-bone/40 group-hover:text-blood transition-colors duration-300">
                  <span className="font-heading font-semibold text-xs tracking-[0.2em] uppercase">
                    Learn More
                  </span>
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
