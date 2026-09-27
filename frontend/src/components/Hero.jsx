import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, useScroll } from "framer-motion";
import { MapPin, Download, ArrowRight, Linkedin, Mail, Star, CalendarCheck } from "lucide-react";
import { profile, hero } from "@/data/content";
import { scrollToHash } from "@/lib/scroll";
import { EASE } from "./Reveal";
import { Sparkle, Squiggle } from "./Doodles";

const lines = [
  <span key="1">I turn unclear</span>,
  <span key="2">positioning into</span>,
  <span key="3">
    <span className="relative inline-block">
      pipelines
      <Squiggle className="absolute -bottom-2 left-0 w-full h-2.5 text-coral-300" />
    </span>
  </span>,
  <span key="4" className="font-script font-semibold text-coral-400">
    that convert.
  </span>,
];

export default function Hero() {
  const ref = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 55, damping: 16 });
  const sy = useSpring(my, { stiffness: 55, damping: 16 });
  const badgeX = useTransform(sx, (v) => v * 24);
  const badgeY = useTransform(sy, (v) => v * 18);
  const badge2X = useTransform(sx, (v) => v * -18);
  const badge2Y = useTransform(sy, (v) => v * -12);
  const imgX = useTransform(sx, (v) => v * -12);
  const imgY = useTransform(sy, (v) => v * -8);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const scrollImgY = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0.35]);

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  return (
    <section
      ref={ref}
      onMouseMove={onMove}
      data-testid="hero-section"
      className="relative pt-32 sm:pt-36 pb-10 lg:pb-14 overflow-hidden"
    >
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-mint-200 blob-a opacity-70 pointer-events-none" />
      <div className="absolute top-40 -right-32 w-[28rem] h-[28rem] bg-mint-100 blob-b pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 grid lg:grid-cols-12 gap-14 lg:gap-8 items-center">
        <div className="lg:col-span-7">
          <motion.p
            initial={{ opacity: 0, y: 16, rotate: -2 }}
            animate={{ opacity: 1, y: 0, rotate: -2 }}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
            className="font-script text-3xl sm:text-4xl text-coral-400 flex items-center gap-2"
          >
            Hi, I’m {profile.firstName}
          </motion.p>

          <h1 className="mt-3 font-display font-bold tracking-tight text-teal-600 text-[2.6rem] sm:text-6xl xl:text-[4.2rem] leading-[1.08]">
            {lines.map((line, i) => (
              <span key={i} className="block overflow-hidden pb-1.5 -mb-1.5">
                <motion.span
                  className="block will-change-transform"
                  initial={{ y: "115%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.95, delay: 0.3 + i * 0.15, ease: EASE }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.0, ease: EASE }}
            className="mt-6 max-w-xl text-base sm:text-lg text-mutedteal leading-relaxed"
          >
            {hero.subtext}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1, ease: EASE }}
            className="mt-4 flex items-center gap-2 text-sm font-medium text-teal-600"
          >
            <MapPin className="w-4 h-4 text-coral-400" />
            {profile.location}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.2, ease: EASE }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <button
              data-testid="hero-primary-cta"
              onClick={() => scrollToHash("#contact")}
              className="group inline-flex items-center gap-2 rounded-full bg-coral-400 hover:bg-coral-600 text-white font-semibold px-7 py-3.5 shadow-coral hover:-translate-y-0.5 transition-all"
            >
              Let’s connect
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              data-testid="hero-resume-cta"
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              download
              className="inline-flex items-center gap-2 rounded-full border-2 border-teal-600/20 hover:border-teal-600/40 bg-white text-teal-600 font-semibold px-7 py-3.5 hover:-translate-y-0.5 transition-all"
            >
              Download Résumé
              <Download className="w-4 h-4" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.35 }}
            className="mt-9 flex items-center gap-4"
          >
            <span className="text-sm text-mutedteal">Let’s connect:</span>
            <a
              data-testid="hero-social-linkedin"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-full bg-white shadow-soft flex items-center justify-center text-teal-600 hover:text-coral-400 hover:-translate-y-0.5 transition-all"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              data-testid="hero-social-email"
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="w-10 h-10 rounded-full bg-white shadow-soft flex items-center justify-center text-teal-600 hover:text-coral-400 hover:-translate-y-0.5 transition-all"
            >
              <Mail className="w-4 h-4" />
            </a>
          </motion.div>
        </div>

        <motion.div style={{ opacity: fade }} className="lg:col-span-5 relative">
          <motion.div style={{ y: scrollImgY }}>
            <motion.div style={{ x: imgX, y: imgY }} className="relative max-w-md mx-auto">
              <div className="absolute -inset-5 bg-mint-200 blob-a rotate-6" />
              <img
                src="/images/hero-photo.webp"
                alt="Deshma Marcelin"
                data-testid="hero-portrait"
                className="relative blob-a w-full aspect-square object-cover object-top shadow-lift"
              />

              <motion.div style={{ x: badgeX, y: badgeY }} className="absolute -top-3 -right-2 sm:-right-8">
                <div className="flex items-center gap-2.5 bg-white/90 backdrop-blur rounded-2xl shadow-bubble px-4 py-3 animate-float">
                  <span className="w-9 h-9 rounded-full bg-coral-100 text-coral-400 flex items-center justify-center">
                    <Star className="w-4 h-4 fill-current" />
                  </span>
                  <div>
                    <p className="font-display font-bold text-teal-600 leading-none">{hero.badgeYears.value}</p>
                    <p className="text-xs text-mutedteal mt-1">{hero.badgeYears.label}</p>
                  </div>
                </div>
              </motion.div>

              <motion.div style={{ x: badge2X, y: badge2Y }} className="absolute -bottom-6 -left-3 sm:-left-12 max-w-[220px]">
                <div className="relative bg-white/95 backdrop-blur rounded-2xl shadow-bubble px-4 py-3 animate-float-slow">
                  <p className="text-sm font-medium text-ink leading-snug">{hero.speech}</p>
                  <span className="absolute -bottom-1.5 left-8 w-4 h-4 bg-white/95 rotate-45 rounded-[3px]" />
                </div>
              </motion.div>

              <motion.div style={{ x: badgeX, y: badge2Y }} className="absolute bottom-16 -right-2 sm:-right-10 hidden sm:block">
                <div className="flex items-center gap-2.5 bg-white/90 backdrop-blur rounded-2xl shadow-bubble px-4 py-3">
                  <span className="w-9 h-9 rounded-full bg-mint-200 text-teal-600 flex items-center justify-center">
                    <CalendarCheck className="w-4 h-4" />
                  </span>
                  <div>
                    <p className="font-display font-bold text-teal-600 leading-none">{hero.badgeDemos.value}</p>
                    <p className="text-xs text-mutedteal mt-1">{hero.badgeDemos.label}</p>
                  </div>
                </div>
              </motion.div>

              <Sparkle className="absolute -top-8 left-6 w-6 h-6 text-teal-300 animate-float" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
