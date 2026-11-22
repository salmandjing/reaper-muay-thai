import SectionHeading from "./ui/SectionHeading";
import AnimatedSection from "./AnimatedSection";

const PILLARS = ["Legitimate martial arts", "Welcoming to everyone", "Built around community"];

export default function About() {
  return (
    <section id="about" className="relative py-28 md:py-36 bg-ash">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[3fr_2fr] gap-12 lg:gap-24">
        <div>
          <SectionHeading eyebrow="About Reaper HQ" title="You Don't Need To Be A Fighter" />
          <AnimatedSection delay={0.1} className="mt-8 space-y-5 font-body text-lg text-bone/70 leading-relaxed tracking-wide">
            <p>
              Reaper HQ is a community-focused martial arts academy in West Palm Beach. We built it so martial
              arts are accessible to everyone — not just competitive fighters.
            </p>
            <p>
              Whether you&apos;re a parent looking for a positive activity for your child, a beginner looking to
              get in shape, or an experienced martial artist, there&apos;s a place for you here. Our mission is to
              help people of every age and level become stronger, more confident, and more capable.
            </p>
          </AnimatedSection>
        </div>
        <AnimatedSection delay={0.2} className="self-end space-y-4">
          {PILLARS.map((p, i) => (
            <div key={p} className="flex items-center gap-5 border-b border-bone/10 pb-4">
              <span className="font-heading font-black text-4xl text-accent">0{i + 1}</span>
              <span className="font-heading font-bold text-2xl text-bone uppercase tracking-wide">{p}</span>
            </div>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
