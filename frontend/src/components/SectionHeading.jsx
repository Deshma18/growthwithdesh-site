import { Reveal } from "./Reveal";
import { AsteriskMark } from "./Doodles";

export default function SectionHeading({ eyebrow, title, highlight, sub, align = "center" }) {
  const alignCls = align === "left" ? "text-left items-start" : "text-center items-center mx-auto";
  const parts = highlight
    ? title.split(new RegExp(`(${highlight})`, "i"))
    : [title];
  return (
    <Reveal className={`flex flex-col ${alignCls} max-w-2xl`}>
      {eyebrow && (
        <span className="font-script text-2xl sm:text-3xl text-coral-400 -rotate-2 mb-2">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-teal-600 leading-tight">
        {parts.map((p, i) =>
          highlight && p.toLowerCase() === highlight.toLowerCase() ? (
            <span key={i} className="relative inline-block text-coral-400">
              {p}
              <AsteriskMark className="absolute -top-3 -right-5 w-4 h-4 text-coral-300" />
            </span>
          ) : (
            <span key={i}>{p}</span>
          )
        )}
      </h2>
      {sub && <p className="mt-4 text-base sm:text-lg text-mutedteal leading-relaxed">{sub}</p>}
    </Reveal>
  );
}
