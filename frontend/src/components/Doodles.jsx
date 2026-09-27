export const HeartDoodle = ({ className = "", strokeWidth = 2 }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path
      d="M12 20.5c-.3 0-6.5-4-8.6-8C1.9 9.7 3.3 6 6.6 6c2 0 3.5 1.2 4.4 2.6h2C13.9 7.2 15.4 6 17.4 6c3.3 0 4.7 3.7 3.2 6.5-2.1 4-8.3 8-8.6 8Z"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const HeartFilled = ({ className = "" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12 21s-7.5-4.7-9.5-9C.9 8.6 2.7 4.5 6.5 4.5c2.3 0 4.1 1.4 5.5 3.4 1.4-2 3.2-3.4 5.5-3.4 3.8 0 5.6 4.1 4 7.5-2 4.3-9.5 9-9.5 9Z" />
  </svg>
);

export const Squiggle = ({ className = "" }) => (
  <svg viewBox="0 0 120 12" fill="none" className={className} aria-hidden="true" preserveAspectRatio="none">
    <path
      d="M2 8c10-6 18-6 28 0s18 6 28 0 18-6 28 0 18 6 32 0"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
);

export const AsteriskMark = ({ className = "" }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <g stroke="currentColor" strokeWidth="2.6" strokeLinecap="round">
      <line x1="12" y1="3" x2="12" y2="21" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="5.6" y1="5.6" x2="18.4" y2="18.4" />
      <line x1="18.4" y1="5.6" x2="5.6" y2="18.4" />
    </g>
  </svg>
);

export const Sparkle = ({ className = "" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12 2c.6 4.8 2.6 7 7.5 7.6-4.9.7-6.9 2.9-7.5 7.7-.6-4.8-2.6-7-7.5-7.7C9.4 9 11.4 6.8 12 2Z" />
    <path d="M19 14c.3 2.4 1.3 3.5 3.7 3.8-2.4.3-3.4 1.4-3.7 3.8-.3-2.4-1.3-3.5-3.7-3.8 2.4-.3 3.4-1.4 3.7-3.8Z" />
  </svg>
);

export const ArrowRightDoodle = ({ className = "" }) => (
  <svg viewBox="0 0 48 24" fill="none" className={className} aria-hidden="true">
    <path
      d="M2 12c10 0 26-2 34-2m0 0c-4 0-8 3-9 6m9-6c-3-2-5-5-5-8"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
