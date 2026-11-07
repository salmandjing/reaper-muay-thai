import SectionHeading from "./ui/SectionHeading";
import AnimatedSection from "./AnimatedSection";
import { DISCIPLINES } from "@/lib/content";

export default function Disciplines() {
  return (
    <section id="disciplines" className="relative py-28 md:py-36 bg-charcoal">
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading eyebrow="What we teach" title="Disciplines" />
        <div className="mt-16 divide-y divide-bone/10 border-y border-bone/10">
          {DISCIPLINES.map((d, i) => (
            <AnimatedSection key={d.name} delay={i * 0.1} className="grid md:grid-cols-[1fr_2fr] gap-4 md:gap-12 py-10">
              <div>
                <span className="font-heading text-xs tracking-[0.3em] text-blood uppercase">0{i + 1} · {d.tag}</span>
                <h3 className="mt-2 font-heading font-black text-4xl md:text-5xl text-bone uppercase tracking-tight">{d.name}</h3>
              </div>
              <p className="font-body text-lg text-bone/60 leading-relaxed tracking-wide self-center">{d.body}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
