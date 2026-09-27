export const scrollToHash = (hash) => {
  const el = document.querySelector(hash);
  if (!el) return;
  if (window.__lenis) {
    window.__lenis.scrollTo(el, { offset: -90, duration: 1.2 });
  } else {
    el.scrollIntoView({ behavior: "smooth" });
  }
};
