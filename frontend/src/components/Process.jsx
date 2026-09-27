import { processSection } from "@/data/content";
import SectionHeading from "./SectionHeading";
import { Stagger, StaggerItem } from "./Reveal";

export default function Process() {
  return (
    <section id="process" className="relative py-12 sm:py-16" data-testid="process-section">
      <div className="absolute -top-10 -right-28 w-80 h-80 bg-mint-100 blob-b opacity-80 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        <SectionHeading
          eyebrow="04 · My approach"
          title={processSection.title}
          highlight={processSection.highlight}
          sub={processSection.intro}
        />
        <Stagger className="relative mt-14 grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-4">
          <div className="hidden md:block absolute top-8 left-[10%] right-[10%] border-t-2 border-dashed border-mint-border" />
          {processSection.steps.map((s, i) => (
            <StaggerItem key={s.num} className="relative text-center">
              <div
                className={`relative z-10 mx-auto w-16 h-16 rounded-full flex items-center justify-center font-display font-bold text-lg shadow-soft ${
                  i % 2 ? "bg-coral-100 text-coral-400" : "bg-mint-200 text-teal-600"
                }`}
              >
                {s.num}
              </div>
              <h3 className="mt-4 font-display font-semibold text-teal-600">{s.name}</h3>
              <p className="mt-2 text-sm text-mutedteal leading-relaxed max-w-[220px] mx-auto">{s.desc}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
