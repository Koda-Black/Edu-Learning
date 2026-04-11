"use client";

import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import Link from "next/link";
import { useState, useEffect, useCallback, useRef } from "react";
import { usePathname } from "next/navigation";

export function Header() {
  const t = useTranslations();
  const locale = useLocale();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(e.target as Node)
      ) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const switchLocalePath = useCallback(
    (newLocale: string) => {
      const pathWithoutLocale = pathname.replace(/^\/(en|fr)/, "") || "/";
      return `/${newLocale}${pathWithoutLocale}`;
    },
    [pathname],
  );

  const navLinks = [
    { href: "/programs", label: t("header.programs") },
    { href: "/partnerships", label: t("header.partnerships") },
    { href: "/blog", label: t("header.blog") },
    { href: "/about", label: t("header.about") },
  ];

  const servicesDropdown = [
    { href: "/corporate", label: t("header.corporate") },
    { href: "/translation", label: t("header.translation") },
    { href: "/digital-communication", label: t("header.digitalComm") },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-[#EAF0EF] shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            href={`/${locale}`}
            className="flex items-center gap-2 group shrink-0"
          >
            <img
              src="/images/logo/LOGO.png"
              alt="Edu Learning & Immersion"
              className="w-8 h-8 rounded-xl object-contain transition-transform group-hover:scale-105"
            />
            <span className="text-[#0D883C] font-semibold text-[13px] sm:text-[15px] tracking-tight leading-tight whitespace-nowrap">
              Edu Learning & Immersion
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-0">
            {navLinks.slice(0, 1).map((link) => (
              <Link
                key={link.href}
                href={`/${locale}${link.href}`}
                className="relative px-2.5 py-2 text-[12px] font-medium whitespace-nowrap text-[#4F635E] hover:text-[#0A0915] transition-colors rounded-full hover:bg-[#F3FAF5]"
              >
                {link.label}
              </Link>
            ))}

            {/* Services Dropdown */}
            <div ref={servicesRef} className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="relative flex items-center gap-1 px-2.5 py-2 text-[12px] font-medium whitespace-nowrap text-[#4F635E] hover:text-[#0A0915] transition-colors rounded-full hover:bg-[#F3FAF5]"
              >
                {t("header.services")}
                <svg
                  className={`w-3 h-3 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-1 w-[220px] bg-white rounded-[12px] border border-[#EAF0EF] shadow-xl py-2 z-50 animate-fade-in">
                  {servicesDropdown.map((item) => (
                    <Link
                      key={item.href}
                      href={`/${locale}${item.href}`}
                      className="block px-4 py-2.5 text-[13px] font-medium text-[#4F635E] hover:text-[#0A0915] hover:bg-[#F3FAF5] transition-colors"
                      onClick={() => setServicesOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                href={`/${locale}${link.href}`}
                className="relative px-2.5 py-2 text-[12px] font-medium whitespace-nowrap text-[#4F635E] hover:text-[#0A0915] transition-colors rounded-full hover:bg-[#F3FAF5]"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <div className="flex items-center rounded-full border border-[#EAF0EF] overflow-hidden">
              <Link
                href={switchLocalePath("en")}
                className={`px-3 py-1.5 text-xs font-semibold transition-all ${
                  locale === "en"
                    ? "bg-[#0D883C] text-white"
                    : "text-[#4F635E] hover:text-[#0A0915]"
                }`}
              >
                EN
              </Link>
              <Link
                href={switchLocalePath("fr")}
                className={`px-3 py-1.5 text-xs font-semibold transition-all ${
                  locale === "fr"
                    ? "bg-[#0D883C] text-white"
                    : "text-[#4F635E] hover:text-[#0A0915]"
                }`}
              >
                FR
              </Link>
            </div>

            {/* CTA button - desktop only */}
            <Link
              href={`/${locale}/contact`}
              className="hidden lg:inline-flex items-center gap-2 px-4 py-2 bg-[#0D883C] text-white rounded-full text-[13px] font-semibold whitespace-nowrap hover:bg-[#10a34a] transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#0D883C]/25"
            >
              {t("navigation.getInTouch")}
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-xl text-[#4F635E] hover:text-[#0A0915] hover:bg-[#F3FAF5] transition"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-6 pt-2 border-t border-[#EAF0EF] bg-white rounded-b-2xl animate-fade-in">
            <div className="flex flex-col gap-1 mt-2">
              {navLinks.slice(0, 1).map((link) => (
                <Link
                  key={link.href}
                  href={`/${locale}${link.href}`}
                  className="px-4 py-3 text-[#4F635E] hover:text-[#0A0915] hover:bg-[#F3FAF5] rounded-xl text-sm font-medium transition"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              {/* Mobile Services Accordion */}
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex items-center justify-between px-4 py-3 text-[#4F635E] hover:text-[#0A0915] hover:bg-[#F3FAF5] rounded-xl text-sm font-medium transition"
              >
                {t("header.services")}
                <svg
                  className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>
              {mobileServicesOpen && (
                <div className="ml-4 flex flex-col gap-1">
                  {servicesDropdown.map((item) => (
                    <Link
                      key={item.href}
                      href={`/${locale}${item.href}`}
                      className="px-4 py-2.5 text-[#4F635E] hover:text-[#0A0915] hover:bg-[#F3FAF5] rounded-xl text-[13px] font-medium transition border-l-2 border-[#0D883C]/20"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}

              {navLinks.slice(1).map((link) => (
                <Link
                  key={link.href}
                  href={`/${locale}${link.href}`}
                  className="px-4 py-3 text-[#4F635E] hover:text-[#0A0915] hover:bg-[#F3FAF5] rounded-xl text-sm font-medium transition"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href={`/${locale}/contact`}
                className="mt-2 mx-4 text-center px-5 py-3 bg-[#0D883C] text-white rounded-full text-sm font-semibold hover:bg-[#10a34a] transition"
                onClick={() => setIsOpen(false)}
              >
                {t("navigation.getInTouch")}
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
