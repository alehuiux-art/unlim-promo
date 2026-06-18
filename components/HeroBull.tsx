"use client";

import { useEffect, useRef, useState } from "react";
import { asset } from "@/lib/base";

/**
 * Hero artwork. Uses /assets/unlim-bull.png when present; if the file is
 * missing it falls back to an inline SVG mascot so the hero never breaks.
 * Drop the real bull image into public/assets/unlim-bull.png to use it.
 */
export default function HeroBull() {
  const [failed, setFailed] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // The native error may fire before React attaches onError during hydration,
  // so re-check the image state on mount.
  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, []);

  if (failed) {
    return (
      <svg
        data-hero-img
        className="hero-bull hero-bull--svg"
        viewBox="0 0 320 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <ellipse cx="160" cy="246" rx="120" ry="92" fill="#FBF7EE" />
        <path d="M88 150c-22-6-40 4-46 24-4 14 4 26 18 28l30-6-2-46z" fill="#F4ECD8" />
        <path d="M232 150c22-6 40 4 46 24 4 14-4 26-18 28l-30-6 2-46z" fill="#F4ECD8" />
        <path d="M160 70c-46 0-78 30-78 78 0 56 34 96 78 96s78-40 78-96c0-48-32-78-78-78z" fill="#FBF7EE" />
        <path d="M120 56c-26-18-52-16-58-6 18 2 34 12 46 30l12-24z" fill="#EFE6CF" />
        <path d="M200 56c26-18 52-16 58-6-18 2-34 12-46 30l-12-24z" fill="#EFE6CF" />
        <circle cx="128" cy="150" r="13" fill="#14181F" />
        <circle cx="192" cy="150" r="13" fill="#14181F" />
        <circle cx="132" cy="146" r="4" fill="#fff" />
        <circle cx="196" cy="146" r="4" fill="#fff" />
        <path d="M138 196c8 10 36 10 44 0" stroke="#14181F" strokeWidth="7" strokeLinecap="round" />
        <ellipse cx="160" cy="190" rx="30" ry="20" fill="#F0C9C2" />
        <circle cx="148" cy="190" r="4" fill="#14181F" opacity=".5" />
        <circle cx="172" cy="190" r="4" fill="#14181F" opacity=".5" />
        <rect x="120" y="270" width="80" height="56" rx="12" fill="#0EA44E" />
        <rect x="120" y="270" width="80" height="14" rx="7" fill="#0C8F44" />
        <rect x="150" y="262" width="20" height="12" rx="4" fill="#0C8F44" />
        <text x="160" y="308" textAnchor="middle" fontFamily="Manrope,sans-serif" fontSize="26" fontWeight="800" fill="#fff">₾</text>
      </svg>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      ref={imgRef}
      data-hero-img
      className="hero-bull"
      src={asset("/assets/unlim-bull.png")}
      alt="Бизнес-бык Unlim с чемоданом денег и телефоном"
      onError={() => setFailed(true)}
    />
  );
}
