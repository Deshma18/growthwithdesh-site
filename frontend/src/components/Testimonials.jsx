import { Quote } from "lucide-react";
import { testimonialsSection } from "@/data/content";
import SectionHeading from "./SectionHeading";
import { Stagger, StaggerItem } from "./Reveal";

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-12 sm:py-16" data-testid="testimonials-section">
      <div className="absolute top-24 -left-28 w-80 h-80 bg-mint-200/70 blob-a pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        <SectionHeading
          eyebrow="05 · Testimonials"
          title={testimonialsSection.title}
          highlight={testimonialsSection.highlight}
          sub={testimonialsSection.intro}
        />
        <Stagger className="mt-12 grid lg:grid-cols-12 gap-6">
          {testimonialsSection.items.map((t, i) => (
            <StaggerItem key={t.id} className={`h-full ${i === 0 ? "lg:col-span-7" : "lg:col-span-5"}`}>
              <figure
                data-testid={`testimonial-card-${t.id}`}
                className="h-full bg-white rounded-3xl shadow-soft hover:shadow-lift transition-shadow duration-300 p-8 sm:p-10 flex flex-col"
              >
                <Quote className="w-8 h-8 text-coral-300 fill-current" />
                <div className="mt-5 space-y-4 grow">
                  {t.paragraphs.map((p, j) => (
                    <p key={j} className="text-[15px] sm:text-base text-ink/85 leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
                <figcaption className="mt-8 flex items-center gap-4">
                  <span
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-display font-semibold text-white ${
                      i === 0 ? "bg-teal-600" : "bg-coral-400"
                    }`}
                  >
                    {t.initials}
                  </span>
                  <span>
                    <span className="block font-display font-semibold text-teal-600">{t.name}</span>
                    <span className="block text-sm text-mutedteal mt-0.5">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
