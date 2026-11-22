// Email, phone, and socials are placeholders until the business accounts are finalized.
export const CONTACT = {
  street: "5033B Okeechobee Blvd",
  city: "West Palm Beach, FL",
  zip: "33417",
  mapQuery: "5033B Okeechobee Blvd, West Palm Beach, FL 33417",
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

type Instructor = {
  name: string;
  role: string;
  // Transparent cutouts sit on a backdrop; regular photos fill the frame.
  photo: { src: string; cutout?: boolean; hoverSrc?: string; objectPos?: string };
  bio: string;
};

export const INSTRUCTORS: Instructor[] = [
  {
    name: "Michael Rodriguez",
    role: "Brazilian Jiu-Jitsu · MMA",
    photo: { src: "/photos/mike2.png", hoverSrc: "/photos/mike.png", cutout: true },
    bio: "Michael is a Brazilian Jiu-Jitsu black belt with six years at the rank and professional MMA experience. He also brings a wrestling background and experience teaching children's martial arts, so beginners, kids, and experienced athletes all get coaching built for where they are.",
  },
  {
    name: "Danny Tarantino",
    role: "Co-Owner · Muay Thai Coach",
    photo: { src: "/photos/coach_danny.png", objectPos: "object-top" },
    bio: "Danny is the co-owner and Muay Thai coach at Reaper Headquarters. He started martial arts as a kid, and it gave him structure, discipline, and grounding throughout his life. He brings that experience to his coaching, focusing on fundamentals, safety, and steady progress through hard, structured training in a family-friendly gym where everyone feels welcome and supported.",
  },
];

export const SAFETY_POINTS = [
  { title: "Age-appropriate", body: "Kids, teens, and adults train in separate classes built for their stage." },
  { title: "Controlled training", body: "Technique first. Contact is supervised and scaled to experience." },
  { title: "Clear progression", body: "Beginners start with fundamentals and advance when they're ready." },
];

// Soft-opening schedule (from the gym's flyer). Kids and teen classes are not on it yet.
export const SCHEDULE: { days: string; classes: { time: string; name: string }[] }[] = [
  { days: "Mon · Wed · Fri", classes: [
    { time: "7:00 – 8:00 AM", name: "MMA" },
    { time: "6:00 – 7:15 PM", name: "BJJ (Gi)" },
    { time: "7:30 – 8:45 PM", name: "Muay Thai" },
  ] },
  { days: "Tue · Thu", classes: [
    { time: "6:00 – 7:15 PM", name: "Muay Thai" },
    { time: "7:30 – 8:45 PM", name: "BJJ (No-Gi)" },
  ] },
  { days: "Saturday", classes: [
    { time: "10:00 AM", name: "Open Mat – Sparring" },
    { time: "11:30 AM", name: "BJJ Open Mat" },
    { time: "1:00 PM", name: "Women's Only Gi Class" },
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

// Real class photos, ordered for a balanced Muay Thai / BJJ mix. Dimensions match the files.
export const GALLERY: { src: string; alt: string; w: number; h: number }[] = [
  { src: "01.jpg", alt: "Student throwing a roundhouse kick into a coach's Thai pads", w: 1000, h: 978 },
  { src: "02.jpg", alt: "Coach supervising students during a no-gi BJJ drill", w: 1000, h: 1000 },
  { src: "03.jpg", alt: "Students grappling on the mats beside the heavy bags", w: 1000, h: 997 },
  { src: "04.jpg", alt: "Student landing a jab on a coach's pads", w: 1000, h: 999 },
  { src: "05.jpg", alt: "Two students working grips in a grappling drill", w: 1000, h: 1000 },
  { src: "07.jpg", alt: "Smiling student crouched on the mats", w: 760, h: 1000 },
  { src: "08.jpg", alt: "Two students drilling a BJJ position", w: 999, h: 1000 },
  { src: "09.jpg", alt: "Student throwing a kick during pad work", w: 1000, h: 958 },
  { src: "10.jpg", alt: "Muay Thai pad work as a coach looks on", w: 913, h: 1000 },
  { src: "11.jpg", alt: "Coach holding pads for a student's punch", w: 1000, h: 710 },
  { src: "12.jpg", alt: "Class gathered around a technique demonstration", w: 1000, h: 693 },
  { src: "13.jpg", alt: "Two students drilling a grappling position", w: 1000, h: 1000 },
  { src: "14.jpg", alt: "Coach giving instruction during a grappling drill", w: 1000, h: 666 },
  { src: "15.jpg", alt: "Student throwing a jab during pad work", w: 1000, h: 1000 },
  { src: "16.jpg", alt: "Students drilling Brazilian Jiu-Jitsu with a partner", w: 1000, h: 710 },
  { src: "17.jpg", alt: "Partners practicing guard work by the heavy bags", w: 1000, h: 885 },
  { src: "18.jpg", alt: "Students and coaches watching a live roll", w: 1000, h: 650 },
];
