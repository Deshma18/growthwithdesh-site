import { Linkedin, Mail, ArrowUp, FileDown } from "lucide-react";
import { profile, navLinks } from "@/data/content";
import { scrollToHash } from "@/lib/scroll";

export default function Footer() {
  return (
    <footer className="border-t border-mint-border bg-mint-100" data-testid="footer-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <p className="font-script text-3xl font-semibold text-teal-600 flex items-center gap-1.5 justify-center md:justify-start">
              Deshma Marcelin
            </p>
            <p className="text-sm text-mutedteal mt-1">Growth marketer · GTM strategist</p>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map((l) => (
              <a
                key={l.hash}
                data-testid={`footer-link-${l.label.toLowerCase()}`}
                href={l.hash}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToHash(l.hash);
                }}
                className="text-sm font-medium text-ink/70 hover:text-coral-400 transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              data-testid="footer-link-resume"
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-ink/70 hover:text-coral-400 transition-colors"
            >
              Résumé
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              data-testid="footer-social-linkedin"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-full bg-white shadow-soft flex items-center justify-center text-teal-600 hover:text-coral-400 hover:-translate-y-0.5 transition-all"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              data-testid="footer-social-email"
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="w-10 h-10 rounded-full bg-white shadow-soft flex items-center justify-center text-teal-600 hover:text-coral-400 hover:-translate-y-0.5 transition-all"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              data-testid="footer-resume-download"
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              download
              aria-label="Download résumé"
              className="w-10 h-10 rounded-full bg-white shadow-soft flex items-center justify-center text-teal-600 hover:text-coral-400 hover:-translate-y-0.5 transition-all"
            >
              <FileDown className="w-4 h-4" />
            </a>
            <button
              data-testid="back-to-top"
              aria-label="Back to top"
              onClick={() => {
                if (window.__lenis) window.__lenis.scrollTo(0, { duration: 1.2 });
                else window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="w-10 h-10 rounded-full bg-coral-400 shadow-coral flex items-center justify-center text-white hover:-translate-y-0.5 transition-all"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-mutedteal">© 2026 Deshma Marcelin. All rights reserved.</p>
      </div>
    </footer>
  );
}
