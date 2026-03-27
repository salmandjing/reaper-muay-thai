"use client";

import AnimatedSection from "./AnimatedSection";

const schedule = [
  {
    day: "Monday",
    classes: [
      { time: "06:00", name: "Muay Thai Fundamentals", level: "All" },
      { time: "10:00", name: "BJJ Open Mat", level: "All" },
      { time: "17:30", name: "Muay Thai Advanced", level: "Adv" },
      { time: "19:00", name: "MMA Sparring", level: "Int+" },
    ],
  },
  {
    day: "Tuesday",
    classes: [
      { time: "06:00", name: "BJJ Fundamentals", level: "All" },
      { time: "12:00", name: "Muay Thai Pad Work", level: "All" },
      { time: "17:30", name: "BJJ Competition", level: "Adv" },
      { time: "19:00", name: "Muay Thai Sparring", level: "Int+" },
    ],
  },
  {
    day: "Wednesday",
    classes: [
      { time: "06:00", name: "MMA Conditioning", level: "All" },
      { time: "10:00", name: "Muay Thai Clinch", level: "Int+" },
      { time: "17:30", name: "BJJ No-Gi", level: "All" },
      { time: "19:00", name: "MMA Technique", level: "All" },
    ],
  },
  {
    day: "Thursday",
    classes: [
      { time: "06:00", name: "Muay Thai Fundamentals", level: "All" },
      { time: "12:00", name: "BJJ Open Mat", level: "All" },
      { time: "17:30", name: "Muay Thai Advanced", level: "Adv" },
      { time: "19:00", name: "BJJ Sparring", level: "Int+" },
    ],
  },
  {
    day: "Friday",
    classes: [
      { time: "06:00", name: "BJJ Fundamentals", level: "All" },
      { time: "10:00", name: "MMA Wrestling", level: "All" },
      { time: "17:30", name: "Muay Thai Pad Work", level: "All" },
      { time: "19:00", name: "Open Sparring", level: "Int+" },
    ],
  },
  {
    day: "Saturday",
    classes: [
      { time: "08:00", name: "Muay Thai All Levels", level: "All" },
      { time: "10:00", name: "BJJ Competition Prep", level: "Adv" },
      { time: "12:00", name: "MMA Fight Team", level: "Invite" },
    ],
  },
];

function getLevelColor(level: string): string {
  switch (level) {
    case "All":
      return "text-bone/50";
    case "Int+":
      return "text-yellow-500/70";
    case "Adv":
      return "text-blood/70";
    case "Invite":
      return "text-blood";
    default:
      return "text-bone/50";
  }
}

export default function Schedule() {
  return (
    <section id="schedule" className="relative py-28 md:py-36 bg-charcoal">
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <span className="font-heading font-semibold text-blood text-xs tracking-[0.4em] uppercase">
            Weekly
          </span>
          <h2 className="mt-4 font-heading font-black text-5xl md:text-7xl text-bone uppercase leading-[0.9] tracking-tight">
            Schedule
          </h2>
          <p className="mt-4 font-body text-lg text-bone/50 tracking-wide max-w-xl">
            Morning, midday, and evening sessions. No excuses.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="mt-16 overflow-x-auto">
            <div className="min-w-[800px]">
              {/* Header */}
              <div className="grid grid-cols-6 gap-3 mb-4">
                {schedule.map((day) => (
                  <div
                    key={day.day}
                    className="font-heading font-bold text-sm tracking-[0.15em] text-bone/80 uppercase pb-3 border-b-2 border-blood/30"
                  >
                    {day.day}
                  </div>
                ))}
              </div>

              {/* Body: row per time slot */}
              <div className="grid grid-cols-6 gap-3">
                {schedule.map((day) => (
                  <div key={day.day} className="space-y-2">
                    {day.classes.map((cls) => (
                      <div
                        key={`${day.day}-${cls.time}`}
                        className="bg-smoke/30 border border-bone/5 p-3 hover:border-blood/20 transition-colors duration-300 group"
                      >
                        <span className="font-heading font-bold text-xs text-blood/60 tracking-wider">
                          {cls.time}
                        </span>
                        <p className="font-heading font-semibold text-sm text-bone/80 mt-1 leading-tight group-hover:text-bone transition-colors">
                          {cls.name}
                        </p>
                        <span
                          className={`font-heading text-[10px] tracking-[0.2em] uppercase ${getLevelColor(
                            cls.level
                          )}`}
                        >
                          {cls.level}
                        </span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap gap-6 mt-8 pt-6 border-t border-bone/5">
            {[
              { label: "All Levels", color: "text-bone/50" },
              { label: "Intermediate+", color: "text-yellow-500/70" },
              { label: "Advanced", color: "text-blood/70" },
              { label: "Invite Only", color: "text-blood" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${item.color} bg-current`} />
                <span className="font-heading text-xs tracking-[0.15em] text-bone/40 uppercase">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>

      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
