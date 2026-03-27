"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedSection from "./AnimatedSection";

const galleryItems = [
  {
    src: "/photos/0517FD2D-6691-4F68-9FB6-302E4497222E.webp",
    alt: "Fighter in guard stance",
    label: "Fight Ready",
    span: "col-span-2 md:col-span-7 md:row-span-2",
    aspect: "aspect-[4/5] md:aspect-auto md:min-h-[600px]",
    objectPos: "object-top",
  },
  {
    src: "/photos/blue shorts.png",
    alt: "Reaper Muay Thai shorts — Shop official gear",
    label: "Shop Gear",
    span: "col-span-1 md:col-span-5",
    aspect: "aspect-square",
    link: "https://reapermuaythai.com",
  },
  {
    src: "/photos/gallery-training.png",
    alt: "Fighters training in the gym",
    label: "Training Floor",
    span: "col-span-1 md:col-span-5",
    aspect: "aspect-square",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-28 md:py-36 bg-charcoal overflow-hidden">
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <span className="font-heading font-semibold text-blood text-xs tracking-[0.4em] uppercase">
            Inside The Gym
          </span>
          <h2 className="mt-4 font-heading font-black text-5xl md:text-7xl text-bone uppercase leading-[0.9] tracking-tight">
            Gallery
          </h2>
        </AnimatedSection>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-12 gap-4">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.alt}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className={`${item.span} relative ${item.aspect} overflow-hidden group`}
            >
              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full"
                >
                  <GalleryImage item={item} />
                </a>
              ) : (
                <GalleryImage item={item} />
              )}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}

interface GalleryItem {
  src: string;
  alt: string;
  label: string;
  objectPos?: string;
  link?: string;
}

function GalleryImage({ item }: { item: GalleryItem }) {
  return (
    <>
      <Image
        src={item.src}
        alt={item.alt}
        fill
        className={`object-cover ${item.objectPos ?? ""} group-hover:scale-105 transition-transform duration-700`}
        sizes="(max-width: 768px) 50vw, 50vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
      <GalleryLabel label={item.label} hasLink={!!item.link} />
    </>
  );
}

function GalleryLabel({ label, hasLink }: { label: string; hasLink: boolean }) {
  return (
    <div className="absolute bottom-4 left-4">
      <span
        className={`font-heading font-bold text-xs tracking-[0.2em] text-bone/60 uppercase bg-charcoal/60 px-3 py-1.5 backdrop-blur-sm ${
          hasLink
            ? "group-hover:text-blood group-hover:bg-charcoal/80 transition-all duration-300"
            : ""
        }`}
      >
        {label}
        {hasLink && " \u2192"}
      </span>
    </div>
  );
}
