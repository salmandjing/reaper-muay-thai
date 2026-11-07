"use client";

import { useState } from "react";
import SectionHeading from "./ui/SectionHeading";
import { SCHEDULE } from "@/lib/content";

const GROUPS = ["All", "Kids", "Teens", "Adults", "Advanced"] as const;
type Group = (typeof GROUPS)[number];

export default function Schedule() {
  const [group, setGroup] = useState<Group>("All");
  return (
    <section id="schedule" className="relative py-28 md:py-36 bg-ash">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading eyebrow="Weekly classes" title="Schedule"
          intro="Kids classes run 40–45 min, teens 50 min, adults 60 min. Beginners welcome in every All Levels class." />
        <div role="group" aria-label="Filter by group" className="mt-10 flex flex-wrap gap-2">
          {GROUPS.map((g) => (
            <button key={g} onClick={() => setGroup(g)} aria-pressed={group === g}
              className={`font-heading font-bold text-sm tracking-[0.15em] uppercase px-5 py-2 border transition-colors ${
                group === g ? "bg-accent border-accent text-bone" : "border-bone/20 text-bone/60 hover:border-accent hover:text-bone"}`}>
              {g}
            </button>
          ))}
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SCHEDULE.map(({ day, classes }) => {
            const shown = classes.filter((c) => group === "All" || c.group === group);
            return (
              <div key={day} className="bg-smoke/50 border border-bone/5 p-6">
                <h3 className="font-heading font-black text-2xl text-accent uppercase tracking-wide">{day}</h3>
                {shown.length === 0 ? (
                  <p className="mt-4 font-body text-bone/30">No classes</p>
                ) : (
                  <ul className="mt-4 space-y-3">
                    {shown.map((c) => (
                      <li key={c.time + c.name} className="flex gap-4 font-body text-base tracking-wide">
                        <span className="w-20 shrink-0 text-bone/50">{c.time}</span>
                        <span className="text-bone">{c.name}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
