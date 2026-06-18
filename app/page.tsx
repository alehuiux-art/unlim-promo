"use client";
/* eslint-disable @next/next/no-img-element */
import { useEffect, useState, type ReactNode } from "react";
import Animations from "@/components/Animations";
import HeroBull from "@/components/HeroBull";
import LeadModal from "@/components/LeadModal";
import { translations, LOCALES, LOCALE_LABELS, type Locale } from "@/lib/i18n";
import { asset } from "@/lib/base";

type Variant = "soft" | "green" | "dark";

type FeatureMeta = {
  variant: Variant;
  imageLeft: boolean;
  image: string;
  icon: ReactNode;
  slotClass?: string;
};

// Language-independent presentation for each feature card (text comes from i18n).
const FEATURE_META: FeatureMeta[] = [
  {
    variant: "green",
    imageLeft: false,
    image: "/assets/shop.jpg",
    slotClass: "on-green",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M3 9l1-5h16l1 5M4 9v10a1 1 0 001 1h14a1 1 0 001-1V9M3 9h18M9 13h6" />
      </svg>
    ),
  },
  {
    variant: "soft",
    imageLeft: true,
    image: "/assets/manager.jpg",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21c0-4 4-6 8-6s8 2 8 6" />
      </svg>
    ),
  },
  {
    variant: "soft",
    imageLeft: false,
    image: "/assets/audience.jpg",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="9" cy="8" r="3" />
        <circle cx="17" cy="9" r="2.5" />
        <path d="M3 20c0-3 3-5 6-5s6 2 6 5M15 20c0-2 1.5-3.5 4-3.5" />
      </svg>
    ),
  },
  {
    variant: "soft",
    imageLeft: true,
    image: "/assets/delivery.jpg",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M3 7h11v8H3zM14 10h4l3 3v2h-7z" />
        <circle cx="7" cy="17" r="2" />
        <circle cx="17" cy="17" r="2" />
      </svg>
    ),
  },
  {
    variant: "soft",
    imageLeft: false,
    image: "/assets/business.jpg",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M4 20V10M10 20V4M16 20v-8M22 20H2" />
      </svg>
    ),
  },
  {
    variant: "soft",
    imageLeft: true,
    image: "/assets/ads.jpg",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M3 11l16-7-4 16-4-5-4 3z" />
      </svg>
    ),
  },
  {
    variant: "soft",
    imageLeft: false,
    image: "/assets/growth.jpg",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M3 17l5-5 4 4 8-8M16 4h5v5" />
      </svg>
    ),
  },
  {
    variant: "soft",
    imageLeft: true,
    image: "/assets/integrations.jpg",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 3v12M8 11l4 4 4-4M5 21h14" />
      </svg>
    ),
  },
];

function FeatureCard({
  meta,
  num,
  tag,
  title,
  descHtml,
  caption,
}: {
  meta: FeatureMeta;
  num: string;
  tag: string;
  title: string;
  descHtml: string;
  caption: string;
}) {
  const media = (
    <div data-reveal data-reveal-delay="90" className={meta.imageLeft ? "media--left" : undefined}>
      <div className={`img-slot${meta.slotClass ? " " + meta.slotClass : ""}`}>
        <span className="ph">
          {meta.icon}
          {caption}
        </span>
        <img className="slot-img" src={asset(meta.image)} alt={caption} loading="lazy" />
      </div>
    </div>
  );

  const text = (
    <div>
      <div className="feature-meta">
        <span className="feature-num">{num}</span>
        <span className="feature-line" />
        <span className="feature-tag">{tag}</span>
      </div>
      <h3>{title}</h3>
      <p dangerouslySetInnerHTML={{ __html: descHtml }} />
    </div>
  );

  return (
    <div data-reveal className={`feature feature--${meta.variant}`}>
      <div className="feature-grid">
        {meta.imageLeft ? (
          <>
            {media}
            {text}
          </>
        ) : (
          <>
            {text}
            {media}
          </>
        )}
      </div>
    </div>
  );
}

export default function Home() {
  const [locale, setLocale] = useState<Locale>("ru");

  useEffect(() => {
    const saved = localStorage.getItem("unlim_locale");
    if (saved && (LOCALES as string[]).includes(saved)) setLocale(saved as Locale);
  }, []);

  useEffect(() => {
    localStorage.setItem("unlim_locale", locale);
    document.documentElement.lang = translations[locale].htmlLang;
  }, [locale]);

  const t = translations[locale];
  const marquee = (t.marquee + "   ✦   ").repeat(4);

  return (
    <>
      <Animations />
      <LeadModal t={t.modal} />

      <header className="site-header">
        <div className="header-inner">
          <div className="brand">
            <img src={asset("/assets/unlim-logo.svg")} alt="Unlim" />
            <span className="brand-sub">{t.forBusiness}</span>
          </div>
          <nav className="nav">
            <a href="#value" className="nav-link">{t.nav.advantages}</a>
            <a href="#free" className="nav-link">{t.nav.free}</a>
            <a href="#benefit" className="nav-link">{t.nav.benefit}</a>
          </nav>
          <div className="header-right">
            <div className="lang" role="group" aria-label="Language">
              {LOCALES.map((l) => (
                <button
                  key={l}
                  type="button"
                  className={l === locale ? "active" : undefined}
                  aria-pressed={l === locale}
                  onClick={() => setLocale(l)}
                >
                  {LOCALE_LABELS[l]}
                </button>
              ))}
            </div>
            <a href="#cta" className="btn-primary sm header-cta">{t.startSelling}</a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-glow" />
        <div className="hero-grid">
          <div style={{ textAlign: "left" }}>
            <div data-reveal className="badge">
              <span className="dot" />
              {t.hero.badge}
            </div>
            <h1 data-reveal data-reveal-delay="80" dangerouslySetInnerHTML={{ __html: t.hero.h1Html }} />
            <div data-reveal data-reveal-delay="140" className="hero-sub2" dangerouslySetInnerHTML={{ __html: t.hero.sub2Html }} />
            <p data-reveal data-reveal-delay="200" className="hero-p" dangerouslySetInnerHTML={{ __html: t.hero.pHtml }} />
            <div data-reveal data-reveal-delay="220" className="hero-cta">
              <a href="#cta" className="btn-yellow" style={{ padding: "17px 32px", fontSize: "17px", borderRadius: "14px" }}>
                {t.startSellingArrow}
              </a>
              <a href="#" data-lead className="btn-ghost">{t.contactManager}</a>
            </div>
            <div data-reveal data-reveal-delay="290" className="trust">
              <span className="check">✓</span>
              {t.hero.trust}
            </div>
          </div>

          <div className="hero-art">
            <div className="hero-circle" />
            <div className="hero-shadow" />
            <HeroBull />
          </div>
        </div>

        <div className="stats">
          <div className="stats-grid">
            <div data-reveal className="stat-card">
              <div className="stat-num"><span data-count="30386">0</span></div>
              <div className="stat-label">{t.stats[0]}</div>
              <div className="stat-bar"><span style={{ width: "88%" }} /></div>
            </div>
            <div data-reveal data-reveal-delay="80" className="stat-card">
              <div className="stat-num"><span data-count="21300" data-suffix="+">0</span></div>
              <div className="stat-label">{t.stats[1]}</div>
              <div className="stat-bar"><span style={{ width: "72%" }} /></div>
            </div>
            <div data-reveal data-reveal-delay="160" className="stat-card">
              <div className="stat-num"><span data-count="1284">0</span></div>
              <div className="stat-label">{t.stats[2]}</div>
              <div className="stat-bar"><span style={{ width: "54%" }} /></div>
            </div>
            <div data-reveal data-reveal-delay="240" className="stat-card accent">
              <div className="stat-num"><span data-count="3.2" data-decimals="1">0</span> {t.daysWord}</div>
              <div className="stat-label">{t.stats[3]}</div>
              <div className="stat-bar"><span style={{ width: "40%" }} /></div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUE */}
      <section id="value" className="value">
        <div className="value-inner">
          <div data-reveal className="eyebrow">
            <span className="line" />
            {t.valueEyebrow}
          </div>
          <h2 data-reveal data-reveal-delay="70" dangerouslySetInnerHTML={{ __html: t.valueH2Html }} />

          <div className="feature-list">
            {FEATURE_META.map((meta, i) => (
              <FeatureCard
                key={i}
                meta={meta}
                num={String(i + 1).padStart(2, "0")}
                tag={t.features[i].tag}
                title={t.features[i].title}
                descHtml={t.features[i].descHtml}
                caption={t.features[i].caption}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FREE */}
      <section id="free" className="free">
        <div className="free-inner">
          <div data-reveal className="kicker">{t.free.kicker}</div>
          <h2 data-reveal data-reveal-delay="70" dangerouslySetInnerHTML={{ __html: t.free.h2Html }} />
          <p data-reveal data-reveal-delay="140">{t.free.p}</p>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="marquee">
        <div data-marquee data-dur="26" className="marquee-track">
          <span>{marquee}</span>
          <span aria-hidden="true">{marquee}</span>
        </div>
      </section>

      {/* BENEFIT */}
      <section id="benefit" className="benefit">
        <div className="benefit-inner">
          <div data-reveal className="benefit-card">
            <div className="benefit-glow" />
            <div style={{ position: "relative" }}>
              <div className="benefit-eyebrow">
                <span className="line" />
                {t.benefit.eyebrow}
              </div>
              <h2 dangerouslySetInnerHTML={{ __html: t.benefit.h2Html }} />
              <p dangerouslySetInnerHTML={{ __html: t.benefit.pHtml }} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="cta">
        <div className="cta-inner">
          <h2 data-reveal dangerouslySetInnerHTML={{ __html: t.cta.h2Html }} />
          <div data-reveal data-reveal-delay="110" className="cta-buttons">
            <a href="#" data-lead className="btn-yellow">{t.contactManager}</a>
            <a href="#" className="btn-cta-ghost">{t.startSelling}</a>
          </div>
          <div data-reveal data-reveal-delay="200" className="cta-stores">
            <a href="#" className="btn-store">
              <svg viewBox="0 0 24 24" width="21" height="21" fill="#fff" style={{ flex: "none" }} aria-hidden="true">
                <path d="M17.05 12.54c-.03-2.79 2.28-4.13 2.38-4.2-1.3-1.9-3.32-2.16-4.04-2.19-1.72-.17-3.36 1.01-4.23 1.01-.87 0-2.22-.99-3.65-.96-1.88.03-3.61 1.09-4.58 2.77-1.95 3.39-.5 8.41 1.4 11.16.93 1.35 2.04 2.86 3.49 2.81 1.4-.06 1.93-.9 3.62-.9 1.69 0 2.17.9 3.65.87 1.51-.03 2.46-1.37 3.38-2.73 1.07-1.57 1.51-3.09 1.53-3.17-.03-.01-2.93-1.12-2.96-4.45zM14.27 4.36c.77-.93 1.29-2.22 1.15-3.51-1.11.05-2.46.74-3.25 1.67-.71.82-1.33 2.14-1.16 3.4 1.24.1 2.5-.63 3.26-1.56z" />
              </svg>
              <span style={{ display: "flex", flexDirection: "column", lineHeight: 1.15, textAlign: "left" }}>
                <span className="store-eyebrow">{t.cta.availableIn}</span>
                <span className="store-name">App Store</span>
              </span>
            </a>
            <a href="#" className="btn-store">
              <svg viewBox="0 0 512 512" width="19" height="19" style={{ flex: "none" }} aria-hidden="true">
                <path fill="#00D2FF" d="M48 59.49v393a4.33 4.33 0 0 0 7.37 3.07L260 256 55.37 56.42A4.33 4.33 0 0 0 48 59.49z" />
                <path fill="#00F076" d="M345.8 174 89.22 18.76l-.16-.09c-4.42-2.64-9.62 3-5.52 7.09L260 200.66z" />
                <path fill="#FF3A44" d="M84.08 486.24c-4.1 4.05 1.1 9.73 5.52 7.09l.16-.1L345.8 338 260 251.34z" />
                <path fill="#FFCE00" d="m449.38 231.81-89.31-51.81-99.07 96.18 99.46 96.18 88.92-51.62c14.85-8.59 14.85-30.34 0-38.93z" />
              </svg>
              <span style={{ display: "flex", flexDirection: "column", lineHeight: 1.15, textAlign: "left" }}>
                <span className="store-eyebrow">{t.cta.availableIn}</span>
                <span className="store-name">Google Play</span>
              </span>
            </a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <img src={asset("/assets/unlim-logo.svg")} alt="Unlim" />
            <span>{t.footer.tagline}</span>
          </div>
          <div className="footer-copy">{t.footer.copy}</div>
        </div>
      </footer>
    </>
  );
}
