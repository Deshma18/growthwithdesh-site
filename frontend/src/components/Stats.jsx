import { statsSection } from "@/data/content";
import SectionHeading from "./SectionHeading";
import { Reveal, Stagger, StaggerItem } from "./Reveal";

export default function Stats() {
  return (
    <section id="experience" className="relative py-12 sm:py-16" data-testid="stats-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        <SectionHeading
          eyebrow="≈5 years of turning insight into impact"
          title={statsSection.title}
          highlight={statsSection.highlight}
          sub={statsSection.intro}
        />
        <Stagger className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {statsSection.items.map((s) => (
            <StaggerItem key={s.label} className="h-full">
              <div
                data-testid={`stat-${s.label.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                className="h-full bg-white rounded-3xl shadow-soft hover:shadow-lift hover:-translate-y-1.5 transition-all duration-300 p-6 text-center"
              >
                <p className="font-display text-4xl sm:text-5xl font-bold text-teal-600">{s.value}</p>
                <p className="mt-2 text-sm text-mutedteal leading-snug">{s.label}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal delay={0.15}>
          <p className="mt-6 text-center text-sm italic text-mutedteal max-w-xl mx-auto">
            {statsSection.footnote}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
