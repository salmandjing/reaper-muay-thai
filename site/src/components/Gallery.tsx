import Image from "next/image";
import { img } from "@/lib/config";
import SectionHeading from "./ui/SectionHeading";
import { GALLERY } from "@/lib/content";

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-28 md:py-36 bg-charcoal">
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading eyebrow="Inside the gym" title="Gallery"
          intro="Real classes, real students. Muay Thai and Brazilian Jiu-Jitsu on the mats at Reaper HQ." />
        <div className="mt-16 columns-2 md:columns-3 gap-3 md:gap-4">
          {GALLERY.map((p) => (
            <figure key={p.src} className="group mb-3 md:mb-4 break-inside-avoid overflow-hidden border border-bone/5">
              <Image
                src={img(`/photos/gallery/${p.src}`)}
                alt={p.alt}
                width={p.w}
                height={p.h}
                loading="lazy"
                sizes="(max-width: 768px) 50vw, 33vw"
                className="w-full h-auto group-hover:scale-[1.03] transition-transform duration-700"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
