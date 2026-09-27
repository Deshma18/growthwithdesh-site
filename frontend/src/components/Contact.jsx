import { useState } from "react";
import { toast } from "sonner";
import { Mail, Linkedin, MapPin, Send, ArrowUpRight } from "lucide-react";
import { profile, contactSection } from "@/data/content";
import { Reveal } from "./Reveal";
import { AsteriskMark } from "./Doodles";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [sending, setSending] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    try {
      const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (!res.ok) throw new Error("send failed");
      toast.success("Message sent — I’ll get back to you soon!");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      toast.error("Couldn’t send right now — please email me directly at deshmamarcelin635@gmail.com");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="relative py-12 sm:py-16" data-testid="contact-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        <div className="relative bg-mint-200/70 rounded-[32px] sm:rounded-[40px] px-6 sm:px-10 lg:px-16 py-10 lg:py-14 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-white/50 blob-a pointer-events-none" />
          <AsteriskMark className="absolute top-10 right-10 w-6 h-6 text-coral-300/70 hidden sm:block" />

          <div className="relative grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <Reveal>
                <img
                  src="/images/contact-illustration.jpg"
                  alt="Envelope illustration"
                  data-testid="contact-illustration"
                  className="w-40 sm:w-48 rounded-[28px] shadow-soft -rotate-3"
                />
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="mt-8 font-display text-3xl sm:text-4xl lg:text-[2.9rem] font-bold tracking-tight text-teal-600 leading-tight">
                  Have a{" "}
                  <span className="font-script font-semibold text-coral-400">growth problem</span>{" "}
                  worth solving?
                </h2>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="mt-4 text-base sm:text-lg text-mutedteal leading-relaxed max-w-lg">
                  {contactSection.subtext}
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="mt-8 flex flex-col gap-4">
                  <a
                    data-testid="contact-email-link"
                    href={`mailto:${profile.email}`}
                    className="flex items-center gap-3 font-medium text-teal-600 hover:text-coral-400 transition-colors"
                  >
                    <span className="w-10 h-10 rounded-full bg-white shadow-soft flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 text-coral-400" />
                    </span>
                    {profile.email}
                  </a>
                  <a
                    data-testid="contact-linkedin-link"
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 font-medium text-teal-600 hover:text-coral-400 transition-colors"
                  >
                    <span className="w-10 h-10 rounded-full bg-white shadow-soft flex items-center justify-center shrink-0">
                      <Linkedin className="w-4 h-4 text-coral-400" />
                    </span>
                    LinkedIn
                    <ArrowUpRight className="w-4 h-4 opacity-60" />
                  </a>
                  <span className="flex items-center gap-3 font-medium text-teal-600">
                    <span className="w-10 h-10 rounded-full bg-white shadow-soft flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 text-coral-400" />
                    </span>
                    {profile.location}
                  </span>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.15} className="lg:col-span-6">
              <form
                data-testid="contact-form"
                onSubmit={submit}
                className="bg-white rounded-[28px] shadow-lift p-6 sm:p-8"
              >
                <p className="font-script text-3xl text-coral-400 -rotate-2">Say hello</p>
                <div className="mt-6 space-y-4">
                  <div>
                    <label htmlFor="contact-name" className="text-sm font-medium text-teal-600">
                      Your name
                    </label>
                    <input
                      id="contact-name"
                      data-testid="contact-form-input-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      className="mt-1.5 w-full rounded-xl border border-mint-border bg-mint-50 px-4 py-3 text-sm text-ink placeholder:text-mutedteal/60"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="text-sm font-medium text-teal-600">
                      Email address
                    </label>
                    <input
                      id="contact-email"
                      data-testid="contact-form-input-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="mt-1.5 w-full rounded-xl border border-mint-border bg-mint-50 px-4 py-3 text-sm text-ink placeholder:text-mutedteal/60"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-message" className="text-sm font-medium text-teal-600">
                      Your message
                    </label>
                    <textarea
                      id="contact-message"
                      data-testid="contact-form-input-message"
                      required
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell me a little about what you're working on..."
                      className="mt-1.5 w-full rounded-xl border border-mint-border bg-mint-50 px-4 py-3 text-sm text-ink placeholder:text-mutedteal/60 resize-none"
                    />
                  </div>
                  <button
                    data-testid="contact-form-submit"
                    type="submit"
                    disabled={sending}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-coral-400 hover:bg-coral-600 disabled:opacity-70 disabled:cursor-not-allowed text-white font-semibold py-3.5 shadow-coral hover:-translate-y-0.5 transition-all"
                  >
                    {sending ? "Sending…" : "Send message"}
                    <Send className="w-4 h-4" />
                  </button>
                  <p className="text-xs text-center text-mutedteal">{contactSection.formNote}</p>
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
