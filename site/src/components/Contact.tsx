"use client";

import { FormEvent, useState } from "react";
import SectionHeading from "./ui/SectionHeading";
import { CONTACT } from "@/lib/content";

const INTERESTS = ["Kids (4–11)", "Teens (12–15)", "Adult Muay Thai", "Adult BJJ", "MMA", "Homeschool / School partnership"];
const FIELD = "w-full bg-smoke/60 border border-bone/10 px-4 py-3 font-body text-base text-bone placeholder:text-bone/30 focus:outline-none focus:border-accent";

// No backend on GitHub Pages: the form composes an email to the gym.
export default function Contact() {
  const [error, setError] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    if (!name || !/^\S+@\S+\.\S+$/.test(email)) {
      setError("Please enter your name and a valid email.");
      return;
    }
    setError("");
    const body = [
      `Name: ${name}`, `Email: ${email}`, `Phone: ${data.get("phone") ?? ""}`,
      `Interested in: ${data.get("interest") ?? ""}`, "", String(data.get("message") ?? ""),
    ].join("\n");
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent("Trial Class Request — " + name)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section id="contact" className="relative py-28 md:py-36 bg-charcoal">
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 lg:gap-24">
        <div>
          <SectionHeading eyebrow="Get started" title="Book A Trial Class"
            intro="Tell us who's training and what you're interested in. We'll get back to you to schedule your first class." />
          <dl className="mt-12 space-y-6">
            {[
              ["Location", `${CONTACT.street}, ${CONTACT.city} ${CONTACT.zip}`],
              ["Email", CONTACT.email],
              ["Phone", CONTACT.phone],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="font-heading font-bold text-xs tracking-[0.2em] text-accent uppercase">{k}</dt>
                <dd className="mt-1 font-body text-lg text-bone/80 tracking-wide">{v}</dd>
              </div>
            ))}
          </dl>
          <iframe title="Map to Reaper HQ" loading="lazy" className="mt-10 w-full h-64 border border-bone/10 grayscale invert-[0.9]"
            src={`https://maps.google.com/maps?q=${encodeURIComponent(CONTACT.mapQuery)}&z=15&output=embed`} />
          <a href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(CONTACT.mapQuery)}`}
            target="_blank" rel="noopener noreferrer"
            className="mt-4 inline-block font-heading font-semibold text-sm tracking-[0.2em] uppercase text-accent hover:text-bone transition-colors">
            Get directions &rarr;
          </a>
        </div>
        <form onSubmit={handleSubmit} noValidate className="space-y-4 self-start bg-ash border border-bone/10 p-8 md:p-10">
          <label className="block"><span className="sr-only">Name</span><input name="name" required placeholder="Name *" className={FIELD} /></label>
          <label className="block"><span className="sr-only">Email</span><input name="email" type="email" required placeholder="Email *" className={FIELD} /></label>
          <label className="block"><span className="sr-only">Phone</span><input name="phone" type="tel" placeholder="Phone" className={FIELD} /></label>
          <label className="block"><span className="sr-only">Interest</span>
            <select name="interest" className={FIELD} defaultValue={INTERESTS[0]}>
              {INTERESTS.map((i) => <option key={i}>{i}</option>)}
            </select>
          </label>
          <label className="block"><span className="sr-only">Message</span><textarea name="message" rows={4} placeholder="Ages, experience, questions…" className={FIELD} /></label>
          {error && <p role="alert" className="font-body text-accent">{error}</p>}
          <button type="submit" className="w-full font-heading font-bold text-base tracking-[0.15em] bg-accent text-bone px-10 py-4 uppercase hover:bg-accent/90 transition-colors">
            Book a Trial Class
          </button>
        </form>
      </div>
    </section>
  );
}
