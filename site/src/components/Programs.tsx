"use client";

import { motion } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";
import { YOUTH_PROGRAMS } from "@/lib/content";

export default function Programs() {
  return (
    <section id="programs" aria-labelledby="programs-heading" className="relative py-28 md:py-36 bg-ash">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow="Programs for every age"
          title="Find Your Class"
          intro="Kids, teens, and adults train in separate, age-appropriate classes. No prior martial arts experience needed — beginners are always welcome."
        />
        <div className="grid md:grid-cols-2 gap-6 mt-16">
          {YOUTH_PROGRAMS.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.15 }}
              className="group relative bg-smoke/50 border border-bone/5 p-8 md:p-10 hover:border-accent/40 transition-colors duration-500"
            >
              <div className="flex items-baseline justify-between gap-4 flex-wrap">
                <h3 className="font-heading font-black text-3xl md:text-4xl text-bone uppercase tracking-tight">
                  {p.name}
                </h3>
                <span className="font-heading font-bold text-sm tracking-[0.2em] text-accent uppercase">
                  {p.ages}
                </span>
              </div>
              <ul className="mt-6 space-y-2">
                {p.points.map((pt) => (
                  <li key={pt} className="flex gap-3 font-body text-base text-bone/70 tracking-wide">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent" aria-hidden />
                    {pt}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="mt-8 inline-block font-heading font-semibold text-xs tracking-[0.2em] uppercase text-bone/50 group-hover:text-accent transition-colors">
                Book a trial class &rarr;
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
