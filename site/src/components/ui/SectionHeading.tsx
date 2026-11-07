import AnimatedSection from "../AnimatedSection";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  intro?: string;
}

export default function SectionHeading({ eyebrow, title, intro }: SectionHeadingProps) {
  return (
    <AnimatedSection>
      <span className="font-heading font-semibold text-blood text-xs tracking-[0.4em] uppercase">
        {eyebrow}
      </span>
      <h2 className="mt-4 font-heading font-black text-5xl md:text-7xl text-bone uppercase leading-[0.9] tracking-tight">
        {title}
      </h2>
      {intro && (
        <p className="mt-6 max-w-2xl font-body text-lg text-bone/60 leading-relaxed tracking-wide">
          {intro}
        </p>
      )}
    </AnimatedSection>
  );
}
