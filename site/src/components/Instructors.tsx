"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { img } from "@/lib/config";
import SectionHeading from "./ui/SectionHeading";
import { INSTRUCTORS, SAFETY_POINTS } from "@/lib/content";

export default function Instructors() {
  return (
    <section id="instructors" className="relative py-28 md:py-36 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading eyebrow="Coaches" title="The Team" />
        <div className="grid md:grid-cols-2 gap-10 mt-16">
          {INSTRUCTORS.map((c, i) => (
            <motion.article
              key={c.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group grid grid-cols-[2fr_3fr] gap-6 items-end"
            >
              <div className="relative aspect-[3/4] border border-bone/5 overflow-hidden">
                <Image src={img(c.photo)} alt={c.name} fill sizes="(max-width: 768px) 40vw, 20vw"
                  className={`object-cover ${c.objectPos} group-hover:scale-105 transition-transform duration-700`} />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 to-transparent" />
              </div>
              <div>
                <h3 className="font-heading font-black text-3xl text-bone uppercase tracking-tight">{c.name}</h3>
                <p className="font-heading font-semibold text-xs tracking-[0.15em] text-blood uppercase mt-1">{c.role}</p>
                <ul className="mt-4 space-y-2">
                  {c.credentials.map((cr) => (
                    <li key={cr} className="font-body text-base text-bone/60 tracking-wide leading-snug">{cr}</li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
        <div className="mt-20 grid sm:grid-cols-3 gap-px bg-bone/10 border border-bone/10">
          {SAFETY_POINTS.map((s) => (
            <div key={s.title} className="bg-charcoal p-8">
              <h3 className="font-heading font-bold text-xl text-bone uppercase tracking-wide">{s.title}</h3>
              <p className="mt-2 font-body text-base text-bone/60 tracking-wide">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
