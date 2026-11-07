// Placeholder contact details until the lease and business accounts are finalized.
export const CONTACT = {
  city: "West Palm Beach, FL",
  addressNote: "Exact address announced soon",
  email: "info@reaperhq.com",
  phone: "Coming soon",
  instagram: "https://instagram.com/",
  facebook: "https://facebook.com/",
};

export const YOUTH_PROGRAMS = [
  {
    name: "Reaper Cubs",
    ages: "Ages 4–6",
    points: [
      "Fun, age-appropriate martial arts activities",
      "Coordination, balance, and movement",
      "Intro striking and grappling fundamentals",
      "Basic self-defense and personal safety",
      "Listening skills, confidence, and teamwork",
      "Games that make learning enjoyable",
    ],
  },
  {
    name: "Little Reapers",
    ages: "Ages 7–11",
    points: [
      "Brazilian Jiu-Jitsu and Muay Thai fundamentals",
      "Age-appropriate self-defense",
      "Anti-bullying awareness and personal safety",
      "Coordination, fitness, and athletic development",
      "Respect, confidence, discipline, and teamwork",
      "A structured pathway toward advanced training",
    ],
  },
  {
    name: "Teen Program",
    ages: "Ages 12–15",
    points: [
      "Muay Thai and Brazilian Jiu-Jitsu fundamentals",
      "Practical self-defense and controlled technical training",
      "Strength, conditioning, and coordination",
      "Confidence, accountability, and discipline",
      "Progression toward advanced training where appropriate",
    ],
  },
  {
    name: "Adult Programs",
    ages: "16+ · All levels",
    points: [
      "Beginner Muay Thai",
      "Beginner Brazilian Jiu-Jitsu",
      "Intermediate training",
      "MMA and cross-training",
      "Advanced and competition training, when available",
      "Fitness, stress relief, and self-defense",
    ],
  },
];

export const DISCIPLINES = [
  {
    name: "Muay Thai",
    tag: "Striking",
    body: "Learn technique, footwork, and combinations with fists, elbows, knees, and kicks. Training builds conditioning, coordination, confidence, and real self-defense — with structured progression matched to your experience level.",
  },
  {
    name: "Brazilian Jiu-Jitsu",
    tag: "Grappling",
    body: "Positional control, escapes, and submissions — a physical game of problem-solving. BJJ is for people who want to compete and for people who simply want to learn, exercise, and build confidence.",
  },
  {
    name: "MMA & Advanced",
    tag: "Separate track",
    body: "Combine striking, grappling, wrestling, and the transitions between them. Competition training runs separately from beginner and recreational classes, so new students can learn at their own pace.",
  },
];

export const HOMESCHOOL_OFFERINGS = [
  "Homeschool martial arts and physical education",
  "Movement, fitness, and coordination",
  "Muay Thai and Brazilian Jiu-Jitsu instruction",
  "Self-defense and personal safety",
  "Teamwork, discipline, and confidence",
  "School enrichment and after-school partnerships, as available",
];

export const INSTRUCTORS = [
  {
    name: "Michael Rodriguez",
    role: "Brazilian Jiu-Jitsu · MMA",
    photo: "/photos/coach_mike.png",
    objectPos: "object-[20%_15%]",
    credentials: [
      "Brazilian Jiu-Jitsu black belt — five years at black belt",
      "Wrestling background",
      "Professional MMA experience",
      "Experienced teaching children's martial arts",
    ],
  },
  {
    name: "Danny Tarantino",
    role: "Instructor",
    photo: "/photos/coach_danny.png",
    objectPos: "object-top",
    credentials: ["Full bio and credentials coming soon"],
  },
];

export const SAFETY_POINTS = [
  { title: "Age-appropriate", body: "Kids, teens, and adults train in separate classes built for their stage." },
  { title: "Controlled training", body: "Technique first. Contact is supervised and scaled to experience." },
  { title: "Clear progression", body: "Beginners start with fundamentals and advance when they're ready." },
];

type ClassSlot = { time: string; name: string; group: "Kids" | "Teens" | "Adults" | "Advanced" };

const MT_BAG = { time: "5:10 PM", name: "Muay Thai Bag Work · All Levels", group: "Adults" } as const;
const CUBS = { time: "3:30 PM", name: "Reaper Cubs (4–6)", group: "Kids" } as const;
const LITTLE = { time: "4:15 PM", name: "Little Reapers (7–11)", group: "Kids" } as const;
const TEENS = { time: "5:10 PM", name: "Teens Muay Thai (12–15)", group: "Teens" } as const;

export const SCHEDULE: { day: string; classes: ClassSlot[] }[] = [
  { day: "Monday", classes: [
    { time: "7:00 AM", name: "MMA · All Levels", group: "Adults" }, CUBS, LITTLE, MT_BAG,
    { time: "6:15 PM", name: "Beginner Muay Thai", group: "Adults" },
    { time: "7:20 PM", name: "Beginner BJJ", group: "Adults" },
    { time: "8:30 PM", name: "Advanced Muay Thai", group: "Advanced" },
  ] },
  { day: "Tuesday", classes: [
    LITTLE, TEENS,
    { time: "6:15 PM", name: "MMA · All Levels", group: "Adults" },
    { time: "7:20 PM", name: "Muay Thai · All Levels", group: "Adults" },
    { time: "8:30 PM", name: "Advanced BJJ (No Gi)", group: "Advanced" },
  ] },
  { day: "Wednesday", classes: [
    { time: "7:00 AM", name: "BJJ · All Levels", group: "Adults" }, CUBS, LITTLE, MT_BAG,
    { time: "6:15 PM", name: "Beginner Muay Thai", group: "Adults" },
    { time: "7:20 PM", name: "Beginner BJJ", group: "Adults" },
    { time: "8:30 PM", name: "Advanced Muay Thai", group: "Advanced" },
  ] },
  { day: "Thursday", classes: [
    LITTLE, TEENS,
    { time: "6:15 PM", name: "MMA · All Levels", group: "Adults" },
    { time: "7:20 PM", name: "Muay Thai · All Levels", group: "Adults" },
    { time: "8:30 PM", name: "Advanced BJJ (No Gi)", group: "Advanced" },
  ] },
  { day: "Friday", classes: [
    { time: "7:00 AM", name: "MMA · All Levels", group: "Adults" }, CUBS, MT_BAG,
    { time: "6:15 PM", name: "Beginner Muay Thai", group: "Adults" },
    { time: "7:20 PM", name: "Beginner BJJ", group: "Adults" },
    { time: "8:30 PM", name: "Advanced Muay Thai", group: "Advanced" },
  ] },
  { day: "Saturday", classes: [
    { time: "10:00 AM", name: "Kids Class · Competition Focus", group: "Kids" },
    { time: "11:00 AM", name: "Open Muay Thai · All Levels", group: "Adults" },
    { time: "12:00 PM", name: "Open BJJ · Members & Invite", group: "Adults" },
    { time: "1:30 PM", name: "Women's Only BJJ (Gi) · Coming Soon", group: "Adults" },
  ] },
];

export const PLANS = [
  { name: "Kids & Teens", price: "~$150", period: "/mo", note: "Reaper Cubs, Little Reapers, or Teen Program", featured: false },
  { name: "Adult Single Discipline", price: "~$150", period: "/mo", note: "Muay Thai or Brazilian Jiu-Jitsu", featured: false },
  { name: "Adult Full Access", price: "$180–200", period: "/mo", note: "Every adult class, including MMA", featured: true },
  { name: "Homeschool", price: "~$100", period: "/mo", note: "One or two weekly daytime classes", featured: false },
];

export const FAQS = [
  { q: "Do I need experience to start?", a: "No. Most of our students start with zero martial arts experience. Beginner classes teach the fundamentals step by step." },
  { q: "Is it safe for my child?", a: "Kids' classes are age-appropriate, supervised, and focused on technique, movement, and confidence — not fighting. Children train only with children." },
  { q: "Do I have to compete or spar?", a: "Never. Competition training is a separate, optional track. Many students train purely for fitness, self-defense, and fun." },
  { q: "What should I bring to a trial class?", a: "Comfortable athletic clothes, water, and a good attitude. We'll help with anything else you need." },
  { q: "Are there family or service discounts?", a: "We're planning family memberships and discounts for veterans, active military, paramedics, and law enforcement. Ask us for details." },
  { q: "Do you accept Step Up scholarships?", a: "We are exploring Florida Step Up participation, but we cannot confirm provider status or eligibility yet. Contact us to stay updated." },
];
