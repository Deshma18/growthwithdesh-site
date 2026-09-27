import { useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { caseStudies } from "@/data/caseStudies";
import { workSection } from "@/data/content";
import SectionHeading from "./SectionHeading";
import { Reveal } from "./Reveal";
import { AsteriskMark, Sparkle } from "./Doodles";

const themeCls = {
  teal: "bg-gradient-to-br from-teal-600 to-teal-400 text-white",
  mint: "bg-mint-200 text-teal-600",
  coral: "bg-gradient-to-br from-coral-400 to-coral-300 text-white",
};

export default function Work() {
  const track = useRef(null);
  const scroll = (dir) => {
    if (track.current) {
      track.current.scrollBy({ left: dir * track.current.clientWidth * 0.8, behavior: "smooth" });
    }
  };

  return (
    <section id="work" className="relative py-12 sm:py-16" data-testid="projects-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        <SectionHeading
          eyebrow="03 · Case studies & projects"
          title={workSection.title}
          highlight={workSection.highlight}
          sub={workSection.intro}
        />

        <div className="relative mt-12">
          <div
            ref={track}
            data-testid="work-track"
            className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-4 -mx-4 px-4 sm:mx-0 sm:px-0"
          >
            {caseStudies.map((cs) => (
              <Link
                key={cs.slug}
                to={`/work/${cs.slug}`}
                data-testid={`work-card-${cs.slug}`}
                className="group snap-start shrink-0 w-[82%] sm:w-[46%] xl:w-[31.9%] bg-white rounded-3xl shadow-soft hover:shadow-lift hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col"
              >
                <div
                  className={`relative aspect-[4/3] ${themeCls[cs.theme]} flex flex-col items-center justify-center overflow-hidden`}
                >
                  <div
                    className={`absolute inset-0 ${cs.theme === "mint" ? "cover-dots" : "cover-dots-light"} opacity-70`}
                  />
                  <AsteriskMark className="absolute top-5 right-5 w-6 h-6 opacity-40 rotate-12" />
                  <Sparkle className="absolute bottom-6 left-6 w-5 h-5 opacity-40" />
                  <p className="relative font-display text-5xl font-extrabold tracking-tight">{cs.coverStat}</p>
                  <p className="relative mt-2 text-sm font-medium opacity-80 px-6 text-center">
                    {cs.coverStatLabel}
                  </p>
                </div>
                <div className="p-6 flex flex-col grow">
                  <p className="text-xs font-semibold uppercase tracking-wider text-coral-400">{cs.category}</p>
                  <h3 className="mt-2 font-display font-semibold text-teal-600 text-lg leading-snug group-hover:text-coral-400 transition-colors">
                    {cs.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-mutedteal">{cs.company}</p>
                  <p className="mt-3 text-sm text-mutedteal leading-relaxed grow">{cs.blurb}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-coral-400">
                    View case study
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <button
            data-testid="work-prev"
            aria-label="Previous projects"
            onClick={() => scroll(-1)}
            className="hidden xl:flex absolute -left-6 top-[36%] w-11 h-11 rounded-full bg-white shadow-lift items-center justify-center text-teal-600 hover:text-coral-400 hover:-translate-y-0.5 transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            data-testid="work-next"
            aria-label="Next projects"
            onClick={() => scroll(1)}
            className="hidden xl:flex absolute -right-6 top-[36%] w-11 h-11 rounded-full bg-white shadow-lift items-center justify-center text-teal-600 hover:text-coral-400 hover:-translate-y-0.5 transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
        <Reveal delay={0.1}>
          <p className="mt-4 text-center text-sm text-mutedteal">Drag or swipe — every card opens the full case study.</p>
        </Reveal>
      </div>
    </section>
  );
}
