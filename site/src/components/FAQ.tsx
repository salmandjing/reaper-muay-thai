import SectionHeading from "./ui/SectionHeading";
import { FAQS } from "@/lib/content";

export default function FAQ() {
  return (
    <section id="faq" className="relative py-28 md:py-36 bg-ash">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading eyebrow="Questions" title="FAQ" />
        <div className="mt-12 divide-y divide-bone/10 border-y border-bone/10">
          {FAQS.map((f) => (
            <details key={f.q} className="group py-6">
              <summary className="flex justify-between gap-6 cursor-pointer list-none font-heading font-bold text-xl md:text-2xl text-bone uppercase tracking-wide">
                {f.q}
                <span className="text-blood transition-transform group-open:rotate-45" aria-hidden>+</span>
              </summary>
              <p className="mt-4 font-body text-lg text-bone/60 tracking-wide leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
