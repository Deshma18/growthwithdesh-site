import { marqueeItems } from "@/data/content";
import { AsteriskMark } from "./Doodles";

const List = ({ ariaHidden }) => (
  <div aria-hidden={ariaHidden} className="flex items-center shrink-0">
    {marqueeItems.map((item) => (
      <span key={item} className="flex items-center">
        <span className="font-display font-semibold uppercase tracking-[0.2em] text-sm sm:text-base text-teal-600 px-6 sm:px-10 whitespace-nowrap">
          {item}
        </span>
        <AsteriskMark className="w-4 h-4 text-coral-400 shrink-0" />
      </span>
    ))}
  </div>
);

export default function Marquee() {
  return (
    <div
      data-testid="editorial-marquee"
      className="relative border-y border-mint-border bg-white/70 backdrop-blur-sm py-5 overflow-hidden"
    >
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        <List />
        <List ariaHidden />
      </div>
    </div>
  );
}
