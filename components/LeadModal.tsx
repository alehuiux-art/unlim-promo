"use client";

import { useEffect, useRef, useState } from "react";
import type { ModalDict } from "@/lib/i18n";

/**
 * Lead-capture popup. Opens when any element with [data-lead] is clicked
 * (delegated listener), so server-rendered buttons can trigger it without
 * becoming client components. Closes on overlay click, the × button or Esc.
 * Text comes from the active locale via the `t` prop.
 */
export default function LeadModal({ t }: { t: ModalDict }) {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const firstFieldRef = useRef<HTMLInputElement>(null);

  // Open on any [data-lead] click anywhere on the page.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const trigger = (e.target as HTMLElement)?.closest?.("[data-lead]");
      if (trigger) {
        e.preventDefault();
        setSent(false);
        setOpen(true);
      }
    };
    document.addEventListener("click", onClick);

    // Allow deep-linking / programmatic open via the #lead hash.
    const openIfHash = () => {
      if (window.location.hash === "#lead") {
        setSent(false);
        setOpen(true);
      }
    };
    openIfHash();
    window.addEventListener("hashchange", openIfHash);

    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener("hashchange", openIfHash);
    };
  }, []);

  // Esc to close + lock body scroll while open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstFieldRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  if (!open) return null;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    // No backend wired — show a confirmation. Replace with a real POST later.
    setSent(true);
  };

  return (
    <div className="modal-overlay" onClick={() => setOpen(false)} role="dialog" aria-modal="true" aria-label={t.title}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={() => setOpen(false)} aria-label="×">×</button>

        {sent ? (
          <div className="lead-success">
            <div className="lead-success-icon">✓</div>
            <h3>{t.successTitle}</h3>
            <p className="modal-sub">{t.successText}</p>
            <button className="lead-submit" style={{ maxWidth: 220, margin: "8px auto 0" }} onClick={() => setOpen(false)}>
              {t.done}
            </button>
          </div>
        ) : (
          <>
            <h3>{t.title}</h3>
            <p className="modal-sub">{t.sub}</p>

            <form className="lead-form" onSubmit={submit}>
              <input ref={firstFieldRef} type="text" name="name" placeholder={t.name} required autoComplete="name" />
              <input type="tel" name="phone" placeholder={t.phone} required autoComplete="tel" />
              <input type="text" name="company" placeholder={t.company} autoComplete="organization" />
              <select name="category" defaultValue="">
                <option value="" disabled>{t.category}</option>
                {t.categories.map((c, i) => (
                  <option key={i} value={String(i)}>{c}</option>
                ))}
              </select>
              <button type="submit" className="lead-submit">{t.submit}</button>
            </form>

            <p className="lead-note">{t.note}</p>
          </>
        )}
      </div>
    </div>
  );
}
