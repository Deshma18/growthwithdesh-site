import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/content";
import { scrollToHash } from "@/lib/scroll";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (hash) => {
    setOpen(false);
    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToHash(hash), 450);
    } else {
      scrollToHash(hash);
    }
  };

  const goTop = () => {
    setOpen(false);
    if (window.location.pathname !== "/") {
      navigate("/");
    } else if (window.__lenis) {
      window.__lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-3 sm:px-6 pt-3 sm:pt-4">
      <nav
        className={`mx-auto max-w-6xl flex items-center justify-between gap-4 rounded-full pl-5 sm:pl-7 pr-2 sm:pr-2.5 py-2 transition-all duration-300 ${
          scrolled || open
            ? "bg-white/90 backdrop-blur-xl shadow-soft border border-mint-border"
            : "bg-white/55 backdrop-blur-md border border-transparent"
        }`}
      >
        <button
          data-testid="nav-logo"
          onClick={goTop}
          className="flex items-center gap-1.5 font-script text-2xl font-semibold text-teal-600 whitespace-nowrap"
        >
          Deshma – Growth Marketer
        </button>

        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((l) => (
            <a
              key={l.hash}
              data-testid={`nav-link-${l.label.toLowerCase()}`}
              href={l.hash}
              onClick={(e) => {
                e.preventDefault();
                go(l.hash);
              }}
              className="text-sm font-medium text-ink/80 hover:text-coral-400 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            data-testid="nav-cta-button"
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              go("#contact");
            }}
            className="hidden sm:inline-flex items-center rounded-full bg-coral-400 hover:bg-coral-600 text-white text-sm font-semibold px-5 py-2.5 shadow-coral hover:-translate-y-0.5 transition-all"
          >
            Let’s Talk
          </a>
          <button
            data-testid="nav-toggle"
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
            className="lg:hidden w-10 h-10 rounded-full bg-white border border-mint-border flex items-center justify-center text-teal-600"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div
          data-testid="nav-mobile-menu"
          className="lg:hidden mx-auto max-w-6xl mt-2 rounded-3xl bg-white/95 backdrop-blur-xl shadow-lift border border-mint-border p-4 flex flex-col"
        >
          {navLinks.map((l) => (
            <a
              key={l.hash}
              href={l.hash}
              onClick={(e) => {
                e.preventDefault();
                go(l.hash);
              }}
              className="px-4 py-3 rounded-2xl text-sm font-medium text-ink hover:bg-mint-100 hover:text-teal-600 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <button
            data-testid="nav-mobile-cta"
            onClick={() => go("#contact")}
            className="mt-2 mx-1 rounded-full bg-coral-400 text-white text-sm font-semibold px-5 py-3"
          >
            Let’s Talk
          </button>
        </div>
      )}
    </header>
  );
}
