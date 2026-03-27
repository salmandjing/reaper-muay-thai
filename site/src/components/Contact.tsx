"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 md:py-36 bg-charcoal">
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: info */}
          <AnimatedSection>
            <span className="font-heading font-semibold text-blood text-xs tracking-[0.4em] uppercase">
              Join Us
            </span>
            <h2 className="mt-4 font-heading font-black text-5xl md:text-7xl text-bone uppercase leading-[0.9] tracking-tight">
              Start
              <br />
              Training.
            </h2>

            <p className="mt-6 font-body text-lg text-bone/60 leading-relaxed tracking-wide max-w-md">
              Walk in. Try a class. Decide if this is where you belong. First
              session is free &mdash; no pressure, no pitch.
            </p>

            <div className="mt-12 space-y-8">
              {/* Address */}
              <div>
                <h3 className="font-heading font-bold text-xs tracking-[0.2em] text-blood/70 uppercase">
                  Location
                </h3>
                <p className="font-body text-base text-bone/70 mt-2 tracking-wide leading-relaxed">
                  1247 Industrial Blvd, Unit 4
                  <br />
                  Austin, TX 78702
                </p>
              </div>

              {/* Hours */}
              <div>
                <h3 className="font-heading font-bold text-xs tracking-[0.2em] text-blood/70 uppercase">
                  Hours
                </h3>
                <div className="mt-2 space-y-1">
                  {[
                    { day: "Mon - Fri", hours: "6:00 AM - 9:00 PM" },
                    { day: "Saturday", hours: "8:00 AM - 2:00 PM" },
                    { day: "Sunday", hours: "Closed" },
                  ].map((item) => (
                    <div key={item.day} className="flex justify-between max-w-xs">
                      <span className="font-body text-sm text-bone/50 tracking-wide">
                        {item.day}
                      </span>
                      <span className="font-heading font-semibold text-sm text-bone/70 tracking-wide">
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact */}
              <div>
                <h3 className="font-heading font-bold text-xs tracking-[0.2em] text-blood/70 uppercase">
                  Contact
                </h3>
                <div className="mt-2 space-y-1">
                  <p className="font-body text-base text-bone/70 tracking-wide">
                    info@reapermuaythai.com
                  </p>
                  <p className="font-body text-base text-bone/70 tracking-wide">
                    (512) 555-0147
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right: form */}
          <AnimatedSection delay={0.2}>
            <div className="bg-smoke/30 border border-bone/5 p-8 md:p-10">
              <h3 className="font-heading font-bold text-2xl text-bone uppercase tracking-tight">
                Send a Message
              </h3>
              <p className="font-body text-sm text-bone/40 tracking-wide mt-2">
                Or just walk in. We prefer it that way.
              </p>

              <form
                onSubmit={(e) => e.preventDefault()}
                className="mt-8 space-y-6"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="font-heading font-semibold text-xs tracking-[0.15em] text-bone/50 uppercase block mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your name"
                    className="w-full bg-charcoal border border-bone/10 text-bone font-body text-base tracking-wide px-4 py-3 focus:outline-none focus:border-blood/50 transition-colors placeholder:text-bone/20"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="font-heading font-semibold text-xs tracking-[0.15em] text-bone/50 uppercase block mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="your@email.com"
                    className="w-full bg-charcoal border border-bone/10 text-bone font-body text-base tracking-wide px-4 py-3 focus:outline-none focus:border-blood/50 transition-colors placeholder:text-bone/20"
                  />
                </div>

                <div>
                  <label
                    htmlFor="interest"
                    className="font-heading font-semibold text-xs tracking-[0.15em] text-bone/50 uppercase block mb-2"
                  >
                    Interest
                  </label>
                  <select
                    id="interest"
                    className="w-full bg-charcoal border border-bone/10 text-bone/70 font-body text-base tracking-wide px-4 py-3 focus:outline-none focus:border-blood/50 transition-colors appearance-none"
                  >
                    <option value="">Select a program</option>
                    <option value="muay-thai">Muay Thai</option>
                    <option value="mma">MMA</option>
                    <option value="bjj">Brazilian Jiu-Jitsu</option>
                    <option value="all">Everything</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="font-heading font-semibold text-xs tracking-[0.15em] text-bone/50 uppercase block mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell us about your experience level and goals..."
                    className="w-full bg-charcoal border border-bone/10 text-bone font-body text-base tracking-wide px-4 py-3 focus:outline-none focus:border-blood/50 transition-colors placeholder:text-bone/20 resize-none"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full font-heading font-bold text-base tracking-[0.15em] bg-blood text-bone py-4 uppercase hover:bg-blood/80 transition-colors duration-300"
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
