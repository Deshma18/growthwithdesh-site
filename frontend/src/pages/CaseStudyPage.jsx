import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, Lock } from "lucide-react";
import { getCaseStudy, getNextCaseStudy } from "@/data/caseStudies";
import { EASE } from "@/components/Reveal";
import { AsteriskMark, Sparkle, Squiggle } from "@/components/Doodles";

const themeCls = {
  teal: "bg-gradient-to-br from-teal-600 to-teal-400 text-white",
  mint: "bg-mint-200 text-teal-600",
  coral: "bg-gradient-to-br from-coral-400 to-coral-300 text-white",
};

const Eyebrow = ({ children }) => (
  <p className="font-script text-3xl text-coral-400 -rotate-2">{children}</p>
);

export default function CaseStudyPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const cs = getCaseStudy(slug);

  if (!cs) {
    return (
      <main className="pt-40 pb-24 text-center px-4" data-testid="case-study-not-found">
        <p className="font-script text-4xl text-coral-400">Hmm, that one’s missing.</p>
        <Link to="/" data-testid="not-found-home-link" className="mt-6 inline-flex rounded-full bg-coral-400 text-white font-semibold px-7 py-3.5 shadow-coral">
          Back to the portfolio
        </Link>
      </main>
    );
  }

  const next = getNextCaseStudy(slug);
  const goHomeTo = (hash) => {
    navigate("/");
    setTimeout(() => {
      if (hash) {
        const el = document.querySelector(hash);
        if (el && window.__lenis) window.__lenis.scrollTo(el, { offset: -90, duration: 1.2 });
      }
    }, 500);
  };

  return (
    <main data-testid="case-study-page" className="pt-32 lg:pt-40 pb-16">
      <article className="max-w-4xl mx-auto px-4 sm:px-8">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: EASE }}>
          <a
            href="/#work"
            data-testid="case-study-back-link"
            onClick={(e) => {
              e.preventDefault();
              goHomeTo("#work");
            }}
            className="inline-flex items-center gap-2 text-sm font-semibold text-teal-600 hover:text-coral-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> All work
          </a>

          <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-coral-400">{cs.category}</p>
          <h1 className="mt-3 font-display text-3xl sm:text-5xl font-bold tracking-tight text-teal-600 leading-[1.12]">
            {cs.title}
          </h1>
          <p className="mt-4 font-display font-semibold text-ink">{cs.company}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
          className={`relative mt-10 rounded-[32px] ${themeCls[cs.theme]} h-56 sm:h-72 flex flex-col items-center justify-center overflow-hidden`}
        >
          <div className={`absolute inset-0 ${cs.theme === "mint" ? "cover-dots" : "cover-dots-light"} opacity-70`} />
          <AsteriskMark className="absolute top-8 right-10 w-8 h-8 opacity-40 rotate-12" />
          <AsteriskMark className="absolute bottom-10 left-12 w-5 h-5 opacity-30 -rotate-6" />
          <Sparkle className="absolute bottom-8 right-16 w-5 h-5 opacity-40" />
          <p className="relative font-display text-6xl sm:text-7xl font-extrabold tracking-tight">{cs.coverStat}</p>
          <p className="relative mt-3 text-sm sm:text-base font-medium opacity-85">{cs.coverStatLabel}</p>
        </motion.div>

        <div className="mt-14 space-y-14">
          <section data-testid="case-study-context">
            <Eyebrow>The context</Eyebrow>
            <p className="mt-4 text-base sm:text-lg text-ink/85 leading-relaxed">{cs.context}</p>
            {cs.objectives && (
              <ul className="mt-6 space-y-3">
                {cs.objectives.map((o) => (
                  <li key={o} className="flex items-start gap-3 text-[15px] text-ink/85">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-coral-100 text-coral-400 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3" />
                    </span>
                    {o}
                  </li>
                ))}
              </ul>
            )}
          </section>

          <section className="bg-mint-100 rounded-3xl p-6 sm:p-8" data-testid="case-study-role">
            <p className="text-xs font-semibold uppercase tracking-wider text-teal-600">My role</p>
            <p className="mt-2 font-display font-semibold text-teal-600">{cs.role}</p>
          </section>

          {cs.contributions && (
            <section data-testid="case-study-contributions">
              <Eyebrow>What I contributed</Eyebrow>
              <div className="mt-6 grid sm:grid-cols-2 gap-5">
                {cs.contributions.map((c, i) => (
                  <div key={c.label} className="bg-white rounded-3xl shadow-soft p-6">
                    <p className="font-display font-semibold text-teal-600 flex items-baseline gap-2.5">
                      <span className="text-sm font-bold text-coral-400">{String(i + 1).padStart(2, "0")}</span>
                      {c.label}
                    </p>
                    <p className="mt-2 text-sm text-mutedteal leading-relaxed">{c.text}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {cs.beyond && (
            <section data-testid="case-study-beyond">
              <Eyebrow>{cs.beyondTitle}</Eyebrow>
              <p className="mt-4 text-base text-ink/85 leading-relaxed">{cs.beyond}</p>
            </section>
          )}

          {cs.deliverables && (
            <section data-testid="case-study-deliverables">
              <Eyebrow>Key deliverables</Eyebrow>
              <ul className="mt-6 grid sm:grid-cols-2 gap-3">
                {cs.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-3 bg-white rounded-2xl shadow-soft px-5 py-4 text-sm text-ink/85">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-mint-200 text-teal-600 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3" />
                    </span>
                    {d}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {cs.impactStats && cs.impactStats.length > 0 && (
            <section data-testid="case-study-impact">
              <Eyebrow>The impact</Eyebrow>
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4">
                {cs.impactStats.map((s) => (
                  <div key={s.label} className="bg-white rounded-3xl shadow-soft p-6 text-center">
                    <p className="font-display text-3xl sm:text-4xl font-bold text-teal-600">{s.value}</p>
                    <p className="mt-2 text-xs sm:text-sm text-mutedteal leading-snug">{s.label}</p>
                  </div>
                ))}
              </div>
              {cs.impactNote && (
                <p className="mt-5 text-[15px] italic text-mutedteal leading-relaxed">{cs.impactNote}</p>
              )}
            </section>
          )}

          {cs.learned && (
            <section className="bg-mint-200/60 rounded-3xl p-8" data-testid="case-study-learned">
              <Eyebrow>What I learned</Eyebrow>
              <div className="mt-4 space-y-4">
                {cs.learned.map((p, i) => (
                  <p key={i} className="text-[15px] sm:text-base text-ink/85 leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </section>
          )}

          {cs.flow && (
            <section className="flex flex-wrap items-center justify-center gap-2.5" data-testid="case-study-flow">
              {cs.flow.map((f, i) => (
                <span key={f} className="flex items-center gap-2.5">
                  <span className="rounded-full bg-white border border-mint-border px-4 py-2 text-sm font-semibold text-teal-600 shadow-soft">
                    {f}
                  </span>
                  {i < cs.flow.length - 1 && <ArrowRight className="w-4 h-4 text-coral-400" />}
                </span>
              ))}
            </section>
          )}

          {cs.skills && (
            <p className="text-center text-sm text-mutedteal" data-testid="case-study-skills">
              <span className="font-semibold text-teal-600">Skills: </span>
              {cs.skills}
            </p>
          )}

          {cs.confidentiality && (
            <p className="flex items-start justify-center gap-2 text-xs italic text-mutedteal text-center px-6" data-testid="case-study-confidentiality">
              <Lock className="w-3.5 h-3.5 mt-0.5 shrink-0" />
              {cs.confidentiality}
            </p>
          )}

          {cs.summaryNote && (
            <p className="text-center text-sm italic text-mutedteal" data-testid="case-study-summary-note">
              {cs.summaryNote}
            </p>
          )}

          <Link
            to={`/work/${next.slug}`}
            data-testid="next-case-study-link"
            className="group block bg-white rounded-3xl shadow-soft hover:shadow-lift hover:-translate-y-1 transition-all duration-300 p-8"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-coral-400">Next case study</p>
            <div className="mt-2 flex items-center justify-between gap-6">
              <div>
                <p className="font-display font-semibold text-teal-600 text-lg group-hover:text-coral-400 transition-colors">
                  {next.title}
                </p>
                <p className="text-sm text-mutedteal mt-1">{next.company}</p>
              </div>
              <span className="w-11 h-11 rounded-full bg-mint-200 text-teal-600 group-hover:bg-coral-400 group-hover:text-white flex items-center justify-center transition-colors shrink-0">
                <ArrowRight className="w-5 h-5" />
              </span>
            </div>
          </Link>

          <section className="text-center pb-4" data-testid="case-study-cta">
            <p className="font-script text-3xl text-coral-400 -rotate-2">Like what you see?</p>
            <h2 className="mt-2 font-display text-2xl sm:text-4xl font-bold text-teal-600">
              Have a growth problem worth solving?
            </h2>
            <Squiggle className="w-40 h-3 text-coral-300 mx-auto mt-4" />
            <button
              data-testid="case-study-cta-button"
              onClick={() => goHomeTo("#contact")}
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-coral-400 hover:bg-coral-600 text-white font-semibold px-7 py-3.5 shadow-coral hover:-translate-y-0.5 transition-all"
            >
              Let’s connect
              <ArrowRight className="w-4 h-4" />
            </button>
          </section>
        </div>
      </article>
    </main>
  );
}
