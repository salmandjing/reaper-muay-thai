"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { img } from "@/lib/config";
import AnimatedSection from "./AnimatedSection";

const instructors = [
  {
    name: "Coach Mike",
    role: "Head Muay Thai Coach",
    credentials: "Former Lumpinee Stadium Champion. 200+ fights. 15 years coaching.",
    photo: "/photos/coach_mike.png",
    objectPos: "object-[20%_15%]",
  },
  {
    name: "Coach Danny",
    role: "MMA Head Coach",
    credentials: "Pro MMA record 18-3. Black belt in BJJ. UFC veteran.",
    photo: "/photos/coach_danny.png",
  },
  {
    name: "Coach Leticia",
    role: "BJJ Head Instructor",
    credentials: "3rd Degree Black Belt. IBJJF World Medalist. 12 years teaching.",
    photo: "/photos/instructor-3.png",
  },
  {
    name: "Coach Dmitri",
    role: "Wrestling & Conditioning",
    credentials: "NCAA Division I wrestler. Certified S&C coach. Fight team prep.",
    photo: "/photos/instructor-4.png",
  },
];

export default function Instructors() {
  return (
    <section id="instructors" className="relative py-28 md:py-36 bg-ash">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <span className="font-heading font-semibold text-blood text-xs tracking-[0.4em] uppercase">
            Coaches
          </span>
          <h2 className="mt-4 font-heading font-black text-5xl md:text-7xl text-bone uppercase leading-[0.9] tracking-tight">
            The Team
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {instructors.map((instructor, i) => (
            <motion.div
              key={instructor.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="group"
            >
              <div className="relative aspect-[3/4] bg-smoke/50 border border-bone/5 overflow-hidden group-hover:border-blood/30 transition-all duration-500">
                <Image
                  src={img(instructor.photo)}
                  alt={instructor.name}
                  fill
                  className={`object-cover ${instructor.objectPos ?? "object-top"} group-hover:scale-105 transition-transform duration-700`}
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-charcoal/30" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-charcoal/40" />
              </div>

              <div className="mt-4">
                <h3 className="font-heading font-bold text-xl text-bone uppercase tracking-tight">
                  {instructor.name}
                </h3>
                <p className="font-heading font-semibold text-xs tracking-[0.15em] text-blood/70 uppercase mt-1">
                  {instructor.role}
                </p>
                <p className="font-body text-sm text-bone/50 leading-relaxed mt-3 tracking-wide">
                  {instructor.credentials}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
