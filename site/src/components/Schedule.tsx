import SectionHeading from "./ui/SectionHeading";
import AnimatedSection from "./AnimatedSection";
import { SCHEDULE } from "@/lib/content";

export default function Schedule() {
  return (
    <section id="schedule" className="relative py-28 md:py-36 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading eyebrow="Soft opening" title="Class Schedule"
          intro="All levels welcome. Beginners encouraged — no experience needed for any class." />
        <div className="mt-14 grid lg:grid-cols-3 gap-4">
          {SCHEDULE.map(({ days, classes }, i) => (
            <AnimatedSection key={days} delay={i * 0.1} className="bg-smoke/50 border border-bone/10 border-t-4 border-t-accent p-6 md:p-8">
              <h3 className="font-heading font-black text-3xl text-bone uppercase tracking-wide">{days}</h3>
              <ul className="mt-6 divide-y divide-bone/10">
                {classes.map((c) => (
                  <li key={c.time} className="flex items-baseline justify-between gap-4 py-3">
                    <span className="font-heading font-bold text-lg text-bone uppercase tracking-wide">{c.name}</span>
                    <span className="shrink-0 font-body text-base text-accent tracking-wide">{c.time}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          ))}
        </div>
        <p className="mt-8 font-body text-base text-bone/60 tracking-wide">
          Kids and teen class times aren&apos;t on the soft-opening schedule yet.{" "}
          <a href="#contact" className="text-accent underline-offset-4 hover:underline">Contact us</a> and we&apos;ll let you know when they start.
        </p>
      </div>
    </section>
  );
}
