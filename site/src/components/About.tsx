"use client";

import AnimatedSection from "./AnimatedSection";

export default function About() {
  return (
    <section id="about" className="relative py-28 md:py-36 overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 bg-charcoal" />
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: label */}
          <AnimatedSection>
            <span className="font-heading font-semibold text-blood text-xs tracking-[0.4em] uppercase">
              The Gym
            </span>
            <h2 className="mt-4 font-heading font-black text-5xl md:text-7xl lg:text-8xl text-bone uppercase leading-[0.9] tracking-tight">
              Built
              <br />
              Different.
            </h2>
          </AnimatedSection>

          {/* Right: manifesto */}
          <AnimatedSection delay={0.2}>
            <div className="space-y-6 pt-0 lg:pt-12">
              <p className="font-body text-lg md:text-xl text-bone/70 leading-relaxed tracking-wide">
                Reaper isn&apos;t a franchise. There&apos;s no smoothie bar.
                Nobody&apos;s here for the aesthetic. This is a room where people
                come to get better at something hard &mdash; and they keep
                showing up because the work is honest.
              </p>
              <p className="font-body text-lg md:text-xl text-bone/70 leading-relaxed tracking-wide">
                We train Muay Thai, MMA, and Brazilian Jiu-Jitsu the way
                they&apos;re meant to be trained: with discipline, with
                intensity, and with people who hold you to a standard. Every
                session is earned. Every round counts.
              </p>
              <p className="font-body text-lg md:text-xl text-bone/60 leading-relaxed tracking-wide">
                Whether you&apos;re stepping onto the mats for the first time or
                preparing for your next fight, you&apos;ll find the same thing
                here: a room full of people doing the work. No shortcuts. No
                excuses.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 mt-8 border-t border-bone/10">
                {[
                  { num: "10+", label: "Years" },
                  { num: "500+", label: "Members" },
                  { num: "50+", label: "Fighters" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <span className="font-heading font-black text-3xl md:text-4xl text-blood">
                      {stat.num}
                    </span>
                    <p className="font-heading font-semibold text-xs tracking-[0.2em] text-bone/40 uppercase mt-1">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
