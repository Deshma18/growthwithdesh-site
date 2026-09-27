import { BadgeCheck, GraduationCap } from "lucide-react";
import { educationSection } from "@/data/content";
import SectionHeading from "./SectionHeading";
import { Stagger, StaggerItem } from "./Reveal";

const icons = { badge: BadgeCheck, cap: GraduationCap };

export default function Education() {
  return (
    <section id="education" className="relative py-12 sm:py-16" data-testid="education-section">
      <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-16">
        <SectionHeading
          title={educationSection.title}
          highlight={educationSection.highlight}
          sub={educationSection.intro}
        />
        <Stagger className="mt-12 grid md:grid-cols-2 gap-6">
          {educationSection.items.map((item) => {
            const Icon = icons[item.icon];
            return (
              <StaggerItem key={item.id} className="h-full">
                <div
                  data-testid={`education-card-${item.id}`}
                  className="h-full bg-white rounded-3xl shadow-soft hover:shadow-lift hover:-translate-y-1.5 transition-all duration-300 p-8"
                >
                  <span
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                      item.icon === "badge" ? "bg-coral-100 text-coral-400" : "bg-mint-200 text-teal-600"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </span>
                  <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-coral-400">
                    {item.eyebrow}
                  </p>
                  <h3 className="mt-2 font-display font-semibold text-teal-600 text-xl leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-mutedteal leading-relaxed">{item.institution}</p>
                  <p className="mt-4 text-sm font-medium text-ink/70">{item.meta}</p>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
