"use client";

import { useEffect } from "react";

/**
 * Drives the page's entrance animations on the client: scroll reveals,
 * count-up stats, the "БЕСПЛАТНО" marquee and the floating hero.
 * Renders nothing — it operates on the already-rendered DOM via data-* hooks,
 * so the page itself can stay a server component.
 */
export default function Animations() {
  useEffect(() => {
    const motion =
      !window.matchMedia ||
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const fmt = (n: number, dec: number) => {
      const s = dec > 0 ? n.toFixed(dec) : Math.round(n).toString();
      const parts = s.split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
      return parts.length > 1 ? parts[0] + "," + parts[1] : parts[0];
    };

    const setFinal = (el: HTMLElement) => {
      const t = parseFloat(el.getAttribute("data-count") || "0");
      const dec = parseInt(el.getAttribute("data-decimals") || "0", 10);
      const sfx = el.getAttribute("data-suffix") || "";
      el.textContent = fmt(t, dec) + sfx;
    };

    const counted = new WeakSet<HTMLElement>();
    const animateCount = (el: HTMLElement) => {
      if (counted.has(el)) return;
      counted.add(el);
      if (!motion) return setFinal(el);
      const t = parseFloat(el.getAttribute("data-count") || "0");
      const dec = parseInt(el.getAttribute("data-decimals") || "0", 10);
      const sfx = el.getAttribute("data-suffix") || "";
      const dur = 1400;
      let start: number | null = null;
      const step = (now: number) => {
        if (start === null) start = now;
        const p = Math.min(1, (now - start) / dur);
        const e = 1 - Math.pow(1 - p, 3);
        el.textContent = fmt(t * e, dec) + sfx;
        if (p < 1) requestAnimationFrame(step);
        else el.textContent = fmt(t, dec) + sfx;
      };
      requestAnimationFrame(step);
    };

    const shown = new WeakSet<HTMLElement>();
    const reveal = (el: HTMLElement) => {
      if (shown.has(el)) return;
      shown.add(el);
      const d = parseFloat(el.getAttribute("data-reveal-delay") || "0");
      el.style.transitionDelay = d + "ms";
      el.classList.add("is-visible");
      window.setTimeout(() => {
        el.style.transitionDelay = "";
      }, d + 750);
    };

    const reveals = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]")
    );
    const counters = Array.from(
      document.querySelectorAll<HTMLElement>("[data-count]")
    );

    const observers: IntersectionObserver[] = [];

    if (!motion) {
      reveals.forEach((el) => el.classList.add("is-visible"));
      counters.forEach(setFinal);
    } else if ("IntersectionObserver" in window) {
      const ro = new IntersectionObserver(
        (entries) =>
          entries.forEach((en) => {
            if (en.isIntersecting) {
              reveal(en.target as HTMLElement);
              ro.unobserve(en.target);
            }
          }),
        { rootMargin: "0px 0px -8% 0px", threshold: 0.01 }
      );
      reveals.forEach((el) => ro.observe(el));
      observers.push(ro);

      const co = new IntersectionObserver(
        (entries) =>
          entries.forEach((en) => {
            if (en.isIntersecting) {
              animateCount(en.target as HTMLElement);
              co.unobserve(en.target);
            }
          }),
        { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
      );
      counters.forEach((el) => co.observe(el));
      observers.push(co);
    } else {
      reveals.forEach(reveal);
      counters.forEach(animateCount);
    }

    // Safety net: never leave content hidden.
    const safety = window.setTimeout(() => {
      reveals.forEach(reveal);
      counters.forEach(animateCount);
    }, 4500);

    // Marquee + floaty hero (motion only).
    if (motion) {
      document
        .querySelectorAll<HTMLElement>("[data-marquee]")
        .forEach((el) => {
          const dur = el.getAttribute("data-dur") || "26";
          el.style.animation = "marqueeL " + dur + "s linear infinite";
        });
      const hero = document.querySelector<HTMLElement>("[data-hero-img]");
      if (hero) hero.classList.add("float");
    }

    return () => {
      observers.forEach((o) => o.disconnect());
      window.clearTimeout(safety);
    };
  }, []);

  return null;
}
