"use client";

import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";

export function Footer() {
  const t = useTranslations();
  const locale = useLocale();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const pageLinks = [
    { href: `/${locale}`, label: t("footer.home") },
    { href: `/${locale}/about`, label: t("header.about") },
    { href: `/${locale}/programs`, label: t("header.programs") },
    { href: `/${locale}/corporate`, label: t("header.corporate") },
    { href: `/${locale}/blog`, label: t("header.blog") },
  ];

  const supportLinks = [
    { href: `/${locale}/contact`, label: t("header.contact") },
    { href: `/${locale}/partnerships`, label: t("header.partnerships") },
    { href: `/${locale}/translation`, label: t("header.translation") },
  ];

  return (
    <footer className="bg-[#003B2D]">
      <div className="max-w-[1280px] mx-auto px-[30px] pt-16 pb-8 flex flex-col items-center">
        {/* Logo */}
        <Link href={`/${locale}`} className="flex items-center gap-2.5 mb-6">
          <img
            src="/images/logo/LOGO.png"
            alt="Edu Learning"
            className="w-9 h-9 rounded-xl object-contain"
          />
          <span className="text-white font-semibold text-lg tracking-tight">
            Edu<span className="text-[#0D883C]">Learning</span>
          </span>
        </Link>

        {/* Tagline */}
        <h3 className="text-[28px] font-bold text-white leading-[1.3] tracking-[-0.02em] text-center mb-10">
          {t("footer.tagline")}
        </h3>

        {/* Page links */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-4">
          {pageLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white/60 hover:text-white transition-colors text-[14px]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Support links */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8">
          {supportLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-white/60 hover:text-white transition-colors text-[14px]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex gap-3 mb-8">
          {["facebook", "twitter", "linkedin", "youtube"].map((s) => (
            <a
              key={s}
              href={`https://${s}.com`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-all"
              aria-label={s}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                {s === "facebook" && (
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                )}
                {s === "twitter" && (
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                )}
                {s === "linkedin" && (
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                )}
                {s === "youtube" && (
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                )}
              </svg>
            </a>
          ))}
        </div>

        {/* Back to top */}
        <button
          onClick={scrollToTop}
          className="group flex items-center gap-2 text-white/60 hover:text-white transition-colors text-[14px] mb-8"
        >
          {t("footer.backToTop")}
          <svg
            className="w-4 h-4 transition-transform group-hover:-translate-y-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>

        <div className="w-full border-t border-white/20 pt-6">
          <p className="text-white/40 text-[14px] text-center">
            &copy; {currentYear} Edu Learning & Immersion. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
