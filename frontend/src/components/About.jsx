import { MapPin, Send, Languages } from "lucide-react";
import { aboutSection } from "@/data/content";
import SectionHeading from "./SectionHeading";
import { Reveal } from "./Reveal";
import { Sparkle } from "./Doodles";

const icons = { map: MapPin, move: Send, languages: Languages };

export default function About() {
  return (
    <section id="about" className="relative py-12 sm:py-16" data-testid="about-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-16 grid lg:grid-cols-12 gap-12 items-center">
        <Reveal className="lg:col-span-5">
          <div className="relative max-w-xs mx-auto">
            <div className="bg-mint-200 blob-b aspect-square flex items-center justify-center">
              <p className="font-script text-4xl sm:text-5xl text-teal-600 -rotate-6 text-center leading-tight">
                Research-
                <br />
                first
              </p>
              <Sparkle className="absolute top-8 right-10 w-6 h-6 text-coral-300" />
            </div>
          </div>
        </Reveal>

        <div className="lg:col-span-7">
          <SectionHeading eyebrow="01 · About me" title="A little about me" align="left" />
          {aboutSection.paragraphs.map((p, i) => (
            <Reveal key={i} delay={0.1 + i * 0.1}>
              <p className="mt-5 text-base sm:text-lg text-mutedteal leading-relaxed">{p}</p>
            </Reveal>
          ))}
          <Reveal delay={0.3}>
            <div className="mt-8 flex flex-wrap gap-3">
              {aboutSection.facts.map((f) => {
                const Icon = icons[f.icon];
                return (
                  <span
                    key={f.label}
                    data-testid="about-fact-chip"
                    className="inline-flex items-center gap-2 rounded-full bg-white border border-mint-border px-4 py-2.5 text-sm font-medium text-teal-600 shadow-soft"
                  >
                    <Icon className="w-4 h-4 text-coral-400" />
                    {f.label}
                  </span>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
