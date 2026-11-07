import SectionHeading from "./ui/SectionHeading";
import AnimatedSection from "./AnimatedSection";
import { HOMESCHOOL_OFFERINGS } from "@/lib/content";

export default function Homeschool() {
  return (
    <section id="homeschool" className="relative py-28 md:py-36 bg-ash">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
        <SectionHeading
          eyebrow="Homeschool & community"
          title="Schools & Families"
          intro="Daytime martial arts and physical education for homeschool families, plus partnerships with schools and community organizations."
        />
        <AnimatedSection delay={0.15} className="bg-smoke/50 border-l-4 border-blood p-8 md:p-10">
          <ul className="space-y-3">
            {HOMESCHOOL_OFFERINGS.map((o) => (
              <li key={o} className="flex gap-3 font-body text-lg text-bone/80 tracking-wide">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-blood" aria-hidden />
                {o}
              </li>
            ))}
          </ul>
          <a href="#contact" className="mt-8 inline-block font-heading font-bold text-sm tracking-[0.15em] bg-blood text-bone px-8 py-3 uppercase hover:bg-blood/90 transition-colors">
            Partner With Us
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
