import SectionHeading from "./ui/SectionHeading";
import { PLANS } from "@/lib/content";

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-28 md:py-36 bg-ash">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading eyebrow="Memberships" title="Pricing"
          intro="Estimated monthly rates. Final pricing, family memberships, and terms will be confirmed at enrollment." />
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PLANS.map((p) => (
            <div key={p.name} className={`p-8 border ${p.featured ? "border-accent bg-accent/10 lg:-translate-y-4" : "border-bone/10 bg-smoke/40"}`}>
              {p.featured && <span className="font-heading text-xs tracking-[0.3em] text-accent uppercase">Best value</span>}
              <h3 className="mt-1 font-heading font-bold text-xl text-bone uppercase tracking-wide">{p.name}</h3>
              <p className="mt-4 font-heading font-black text-5xl text-bone">{p.price}<span className="text-lg text-bone/50">{p.period}</span></p>
              <p className="mt-3 font-body text-base text-bone/60 tracking-wide">{p.note}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 font-body text-lg text-bone/70 tracking-wide">
          <span className="text-accent font-semibold">Family memberships</span> and discounts for veterans, active military, paramedics, and law enforcement — ask us.
        </p>
      </div>
    </section>
  );
}
