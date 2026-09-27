import { TrendingUp, Compass, Target, Search, Users } from "lucide-react";
import { servicesSection } from "@/data/content";
import SectionHeading from "./SectionHeading";
import { Reveal, Stagger, StaggerItem } from "./Reveal";

const icons = { trending: TrendingUp, compass: Compass, target: Target, search: Search, users: Users };

export default function Services() {
  return (
    <section id="services" className="relative py-12 sm:py-16" data-testid="services-section">
      <div className="absolute top-20 -left-32 w-80 h-80 bg-mint-100 blob-a opacity-80 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        <SectionHeading
          eyebrow="02 · What I do"
          title={servicesSection.title}
          highlight={servicesSection.highlight}
          sub={servicesSection.intro}
        />
        <Stagger className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {servicesSection.items.map((s) => {
            const Icon = icons[s.icon];
            return (
              <StaggerItem key={s.num} className="h-full">
                <div
                  data-testid={`service-card-${s.title.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                  className="group h-full bg-white rounded-3xl shadow-soft hover:shadow-lift hover:-translate-y-1.5 transition-all duration-300 p-6 text-center"
                >
                  <span className="mx-auto w-12 h-12 rounded-2xl bg-mint-200 text-teal-600 group-hover:bg-coral-100 group-hover:text-coral-400 transition-colors flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </span>
                  <p className="mt-4 text-xs font-semibold text-coral-300">{s.num}.</p>
                  <h3 className="mt-1 font-display font-semibold text-teal-600 leading-snug">{s.title}</h3>
                  <p className="mt-2 text-sm text-mutedteal leading-relaxed">{s.desc}</p>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>

        <Reveal delay={0.1}>
          <div className="mt-12 text-center">
            <p className="text-sm text-mutedteal">{servicesSection.chipsLabel}</p>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              {servicesSection.chips.map((c) => (
                <span
                  key={c}
                  data-testid="expertise-chip"
                  className="rounded-full bg-white border border-mint-border px-4 py-2 text-sm text-teal-600 hover:bg-mint-200 hover:-translate-y-0.5 transition-all cursor-default"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
