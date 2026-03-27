"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const plans = [
  {
    name: "Foundation",
    price: "89",
    period: "/month",
    description: "For those starting their journey",
    features: [
      "3 classes per week",
      "Access to fundamentals classes",
      "Locker room access",
      "Community events",
    ],
    highlight: false,
  },
  {
    name: "Warrior",
    price: "149",
    period: "/month",
    description: "Unlimited access. Unlimited growth.",
    features: [
      "Unlimited classes",
      "All disciplines included",
      "Open mat access",
      "1 private session / month",
      "Priority sparring slots",
      "Reaper team gear discount (reapermuaythai.com)",
    ],
    highlight: true,
  },
  {
    name: "Fight Team",
    price: "229",
    period: "/month",
    description: "For serious competitors",
    features: [
      "Everything in Warrior",
      "Fight team training",
      "4 private sessions / month",
      "Cornering for fights",
      "Nutrition guidance",
      "Video analysis sessions",
    ],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-28 md:py-36 bg-ash">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="text-center">
            <span className="font-heading font-semibold text-blood text-xs tracking-[0.4em] uppercase">
              Memberships
            </span>
            <h2 className="mt-4 font-heading font-black text-5xl md:text-7xl text-bone uppercase leading-[0.9] tracking-tight">
              Pricing
            </h2>
            <p className="mt-4 font-body text-lg text-bone/50 tracking-wide max-w-md mx-auto">
              No contracts. No sign-up fees. Cancel anytime.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className={`relative p-8 md:p-10 border transition-all duration-500 ${
                plan.highlight
                  ? "bg-smoke/50 border-blood/40 md:scale-105"
                  : "bg-smoke/20 border-bone/5 hover:border-bone/15"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-px left-0 right-0 h-[3px] bg-blood" />
              )}
              {plan.highlight && (
                <span className="absolute top-4 right-4 font-heading font-bold text-[10px] tracking-[0.2em] text-blood uppercase bg-blood/10 px-3 py-1">
                  Most Popular
                </span>
              )}

              <h3 className="font-heading font-bold text-xl text-bone uppercase tracking-tight">
                {plan.name}
              </h3>
              <p className="font-body text-sm text-bone/40 tracking-wide mt-1">
                {plan.description}
              </p>

              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-heading font-black text-5xl text-bone">
                  ${plan.price}
                </span>
                <span className="font-body text-base text-bone/40">
                  {plan.period}
                </span>
              </div>

              <ul className="mt-8 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 font-body text-sm text-bone/60 tracking-wide"
                  >
                    <svg
                      className="w-4 h-4 text-blood mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-8 block text-center font-heading font-bold text-sm tracking-[0.15em] py-3.5 uppercase transition-all duration-300 ${
                  plan.highlight
                    ? "bg-blood text-bone hover:bg-blood/80"
                    : "border-2 border-bone/20 text-bone/70 hover:border-blood hover:text-blood"
                }`}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
