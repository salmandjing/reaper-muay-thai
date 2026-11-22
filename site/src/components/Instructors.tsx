"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { img } from "@/lib/config";
import SectionHeading from "./ui/SectionHeading";
import { INSTRUCTORS, SAFETY_POINTS } from "@/lib/content";

type CoachPhotoProps = { name: string; photo: (typeof INSTRUCTORS)[number]["photo"] };

function CoachPhoto({ name, photo }: CoachPhotoProps) {
  const fit = photo.cutout ? "object-contain object-bottom" : `object-cover ${photo.objectPos ?? "object-top"}`;
  return (
    <div className="relative aspect-[3/4] max-w-xs border border-bone/10 overflow-hidden bg-smoke bg-[radial-gradient(circle_at_50%_70%,rgba(47,123,255,0.35),transparent_65%)]">
      <Image src={img(photo.src)} alt={name} fill sizes="(max-width: 640px) 80vw, 20vw"
        className={`${fit} transition duration-700 ${photo.hoverSrc ? "group-hover:opacity-0" : "group-hover:scale-105"}`} />
      {photo.hoverSrc && (
        <Image src={img(photo.hoverSrc)} alt="" aria-hidden fill sizes="(max-width: 640px) 80vw, 20vw"
          className={`${fit} opacity-0 group-hover:opacity-100 transition duration-700`} />
      )}
      {!photo.cutout && <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 to-transparent" />}
    </div>
  );
}

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
              className="group grid sm:grid-cols-[2fr_3fr] gap-6 items-start"
            >
              <CoachPhoto name={c.name} photo={c.photo} />
              <div>
                <h3 className="font-heading font-black text-3xl text-bone uppercase tracking-tight">{c.name}</h3>
                <p className="font-heading font-semibold text-xs tracking-[0.15em] text-accent uppercase mt-1">{c.role}</p>
                <p className="mt-4 font-body text-base text-bone/70 tracking-wide leading-relaxed">{c.bio}</p>
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
