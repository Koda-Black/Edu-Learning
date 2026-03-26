"use client";

import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

/* ── Animated counter ── */
function useCountUp(end: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const step = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration]);

  return { count, ref };
}

/* ── Reveal on scroll ── */
function RevealSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("opacity-100", "translate-y-0");
          el.classList.remove("opacity-0", "translate-y-8");
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={`opacity-0 translate-y-8 transition-all duration-700 ease-out ${className}`}
    >
      {children}
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════════════ */
export default function HomePage() {
  const t = useTranslations();
  const locale = useLocale();

  const stat1 = useCountUp(97);
  const stat2 = useCountUp(50);
  const stat3 = useCountUp(3000);
  const stat4 = useCountUp(25);

  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [openFeature, setOpenFeature] = useState<number>(0);

  /* ── data ── */
  const programs = [
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
          />
        </svg>
      ),
      title: t("homepage.programs.p1Title"),
      desc: t("homepage.programs.p1Desc"),
      tag: t("homepage.programs.p1Tag"),
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0"
          />
        </svg>
      ),
      title: t("homepage.programs.p2Title"),
      desc: t("homepage.programs.p2Desc"),
      tag: t("homepage.programs.p2Tag"),
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46"
          />
        </svg>
      ),
      title: t("homepage.programs.p3Title"),
      desc: t("homepage.programs.p3Desc"),
      tag: t("homepage.programs.p3Tag"),
    },
  ];

  const features = [
    {
      title: t("homepage.features.f1Title"),
      desc: t("homepage.features.f1Desc"),
    },
    {
      title: t("homepage.features.f2Title"),
      desc: t("homepage.features.f2Desc"),
    },
    {
      title: t("homepage.features.f3Title"),
      desc: t("homepage.features.f3Desc"),
    },
    {
      title: t("homepage.features.f4Title"),
      desc: t("homepage.features.f4Desc"),
    },
  ];

  const skills = [
    {
      col: "left",
      items: [
        t("homepage.skills.s1"),
        t("homepage.skills.s2"),
        t("homepage.skills.s3"),
        t("homepage.skills.s4"),
        t("homepage.skills.s5"),
        t("homepage.skills.s6"),
      ],
    },
    {
      col: "right",
      items: [
        t("homepage.skills.s7"),
        t("homepage.skills.s8"),
        t("homepage.skills.s9"),
        t("homepage.skills.s10"),
        t("homepage.skills.s11"),
        t("homepage.skills.s12"),
      ],
    },
  ];

  const testimonials = [
    {
      title: t("homepage.testimonials.t1Title"),
      text: t("homepage.testimonials.t1Text"),
      name: t("homepage.testimonials.t1Name"),
      role: t("homepage.testimonials.t1Role"),
      avatar: "/images/testimonial-1.png",
      tags: [
        t("homepage.testimonials.t1Tag1"),
        t("homepage.testimonials.t1Tag2"),
      ],
    },
    {
      title: t("homepage.testimonials.t2Title"),
      text: t("homepage.testimonials.t2Text"),
      name: t("homepage.testimonials.t2Name"),
      role: t("homepage.testimonials.t2Role"),
      avatar: "/images/testimonial-2.png",
      tags: [
        t("homepage.testimonials.t2Tag1"),
        t("homepage.testimonials.t2Tag2"),
      ],
    },
    {
      title: t("homepage.testimonials.t3Title"),
      text: t("homepage.testimonials.t3Text"),
      name: t("homepage.testimonials.t3Name"),
      role: t("homepage.testimonials.t3Role"),
      avatar: "/images/testimonial-3.png",
      tags: [
        t("homepage.testimonials.t3Tag1"),
        t("homepage.testimonials.t3Tag2"),
      ],
    },
    {
      title: t("homepage.testimonials.t4Title"),
      text: t("homepage.testimonials.t4Text"),
      name: t("homepage.testimonials.t4Name"),
      role: t("homepage.testimonials.t4Role"),
      avatar: "/images/testimonial-4.png",
      tags: [
        t("homepage.testimonials.t4Tag1"),
        t("homepage.testimonials.t4Tag2"),
      ],
    },
  ];

  const pricing = [
    {
      name: t("homepage.pricing.plan1Name"),
      price: "₦15,000",
      period: t("homepage.pricing.plan1Period"),
      desc: t("homepage.pricing.plan1Desc"),
      included: [
        t("homepage.pricing.plan1F1"),
        t("homepage.pricing.plan1F2"),
        t("homepage.pricing.plan1F3"),
        t("homepage.pricing.plan1F4"),
      ],
      excluded: [t("homepage.pricing.plan1E1"), t("homepage.pricing.plan1E2")],
      featured: false,
    },
    {
      name: t("homepage.pricing.plan2Name"),
      price: "₦30,000",
      period: t("homepage.pricing.plan2Period"),
      desc: t("homepage.pricing.plan2Desc"),
      included: [
        t("homepage.pricing.plan2F1"),
        t("homepage.pricing.plan2F2"),
        t("homepage.pricing.plan2F3"),
        t("homepage.pricing.plan2F4"),
        t("homepage.pricing.plan2F5"),
      ],
      excluded: [t("homepage.pricing.plan2E1")],
      featured: true,
    },
    {
      name: t("homepage.pricing.plan3Name"),
      price: "₦75,000",
      period: t("homepage.pricing.plan3Period"),
      desc: t("homepage.pricing.plan3Desc"),
      included: [
        t("homepage.pricing.plan3F1"),
        t("homepage.pricing.plan3F2"),
        t("homepage.pricing.plan3F3"),
        t("homepage.pricing.plan3F4"),
        t("homepage.pricing.plan3F5"),
        t("homepage.pricing.plan3F6"),
      ],
      excluded: [],
      featured: false,
    },
  ];

  const faqs = [
    {
      q: t("homepage.faq.q1"),
      a: t("homepage.faq.a1"),
    },
    {
      q: t("homepage.faq.q2"),
      a: t("homepage.faq.a2"),
    },
    {
      q: t("homepage.faq.q3"),
      a: t("homepage.faq.a3"),
    },
    {
      q: t("homepage.faq.q4"),
      a: t("homepage.faq.a4"),
    },
  ];

  const projects = [
    { title: t("homepage.projects.p1"), img: "/images/project-1.png" },
    { title: t("homepage.projects.p2"), img: "/images/project-2.png" },
    { title: t("homepage.projects.p3"), img: "/images/project-3.png" },
  ];

  return (
    <main className="bg-white">
      {/* ━━━ HERO ━━━ */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        {/* Decorative blurs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[271px] right-[200px] w-[775px] h-[1525px] opacity-20">
            <div className="absolute top-[30px] left-[150px] w-[439px] h-[1465px] rounded-full bg-[#003B2D] opacity-80 blur-[97px]" />
            <div className="absolute top-[417px] left-[40px] w-[439px] h-[769px] rounded-full bg-[#0D883C] blur-[162px]" />
            <div className="absolute top-[471px] left-[336px] w-[439px] h-[769px] rounded-full bg-[#a5a6f6] blur-[127px]" />
          </div>
        </div>

        <div className="max-w-[1280px] mx-auto px-[30px] py-[140px] lg:py-[120px] relative z-10 w-full">
          <div className="flex flex-col lg:flex-row gap-[60px] lg:gap-[78px] items-start">
            {/* Left content */}
            <div className="flex-1 max-w-[547px] flex flex-col gap-[32px]">
              <div className="flex flex-col gap-[20px]">
                <h1 className="text-[36px] sm:text-[48px] lg:text-[64px] font-bold text-[#0A0915] leading-[1.08] tracking-[-0.045em]">
                  {t("homepage.hero.title")}
                </h1>
                <p className="text-[16px] text-[#4F635E] leading-[1.6] max-w-[479px]">
                  {t("homepage.hero.subtitle")}
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link
                  href={`/${locale}/programs`}
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#0D883C] text-white rounded-[60px] text-[15px] font-semibold hover:bg-[#10a34a] transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#0D883C]/25"
                >
                  {t("homepage.hero.cta1")}
                  <svg
                    className="w-4 h-4"
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
              </div>

              {/* Floating badge pill */}
              <div className="hidden lg:flex items-center gap-3 px-5 py-3 rounded-[60px] bg-[#F3FAF5] border border-[#EAF0EF] w-fit">
                <div className="w-[45px] h-[45px] rounded-full bg-[#0D883C] flex items-center justify-center">
                  <img
                    src="/images/cap-icon.svg"
                    alt=""
                    className="w-[21px] h-[21px] brightness-0 invert"
                  />
                </div>
                <div>
                  <div className="text-[13px] font-semibold text-[#0A0915]">
                    {t("homepage.hero.badgeTitle")}
                  </div>
                  <div className="text-[12px] text-[#4F635E]">
                    {t("homepage.hero.badgeDesc")}
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Hero Image Grid */}
            <div className="hidden lg:flex flex-1 max-w-[612px] gap-4">
              {/* Column 1 */}
              <div className="flex flex-col gap-4 flex-1">
                <div className="rounded-[20px] overflow-hidden relative">
                  <img
                    src="/images/hero-main.png"
                    alt="Students learning"
                    className="w-full h-auto object-cover rounded-[20px]"
                  />
                </div>
                {/* Green stat card */}
                <div className="bg-[#0D883C] rounded-[20px] p-5 flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="text-white/60 text-xs">
                      &copy; 2026 &ndash; Edu Learning
                    </span>
                    <span className="inline-flex px-4 py-1 rounded-[50px] bg-[#F3FAF5] text-[#003B2D] text-xs font-medium">
                      {t("homepage.hero.languageTag")}
                    </span>
                  </div>
                  <img
                    src="/images/hero-card.png"
                    alt="Course preview"
                    className="w-full rounded-[10px]"
                  />
                </div>
              </div>

              {/* Column 2 */}
              <div className="flex flex-col gap-4 flex-1">
                {/* Dark card with quote */}
                <div className="bg-[#003B2D] rounded-[20px] p-5 flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="text-white/60 text-xs">
                      &copy; 2026 &ndash; Edu Learning
                    </span>
                    <span className="text-white/60 text-xs">Best</span>
                  </div>
                  <p className="text-white/80 text-sm leading-relaxed">
                    &ldquo;{t("homepage.hero.quote")}&rdquo;
                  </p>
                </div>
                {/* Stat counter card */}
                <div className="bg-[#F3FAF5] rounded-[20px] p-5">
                  <h3 className="text-[36px] font-bold text-[#0A0915] mb-1">
                    62+
                  </h3>
                  <p className="text-[13px] text-[#4F635E]">
                    {t("homepage.hero.coursesDesc")}
                  </p>
                </div>
                {/* Tall image */}
                <div className="rounded-[20px] overflow-hidden relative flex-1">
                  <img
                    src="/images/hero-tall.png"
                    alt="Interactive classroom"
                    className="w-full h-full object-cover rounded-[20px]"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-5">
                    <h5 className="text-white text-sm font-semibold">
                      {t("homepage.hero.interactiveClassrooms")}
                    </h5>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile hero image */}
            <div className="lg:hidden w-full">
              <img
                src="/images/hero-main.png"
                alt="Students learning"
                className="w-full rounded-[20px]"
              />
            </div>
          </div>

          {/* Floating star rating card */}
          <div className="hidden lg:flex absolute bottom-[15%] left-[30px] z-20">
            <div className="bg-white rounded-[20px] p-4 shadow-xl shadow-black/5 flex flex-col items-center gap-2">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <img
                    key={i}
                    src="/images/star-green.svg"
                    alt=""
                    className="w-[28px] h-[28px]"
                  />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[22px] font-bold text-[#0A0915]">
                  4.9
                </span>
                <span className="text-[13px] text-[#4F635E]">
                  {t("homepage.hero.averageRating")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ TRUST BAR ━━━ */}
      <RevealSection>
        <section className="py-5 border-y border-[#EAF0EF]">
          <div className="max-w-[1280px] mx-auto px-[30px]">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <p className="text-[13px] text-[#4F635E] font-medium whitespace-nowrap">
                {t("homepage.trust.title")}
              </p>
              <div className="flex items-center gap-10 overflow-hidden">
                {[1, 2, 3, 4, 5].map((i) => (
                  <img
                    key={i}
                    src={`/images/logo-${i}.svg`}
                    alt={`Partner ${i}`}
                    className="h-[30px] w-auto opacity-50 grayscale"
                  />
                ))}
              </div>
              <div className="flex items-center gap-2 text-[13px] text-[#4F635E]">
                <span className="w-2 h-2 rounded-full bg-[#0D883C]" />
                {t("homepage.trust.madeIn")}
              </div>
            </div>
          </div>
        </section>
      </RevealSection>

      {/* ━━━ ABOUT ━━━ */}
      <RevealSection>
        <section className="py-[60px] lg:py-[120px]">
          <div className="max-w-[1280px] mx-auto px-[30px]">
            <div className="flex flex-col lg:flex-row gap-[60px] lg:gap-[78px] items-start">
              {/* Left text */}
              <div className="flex-1 max-w-[558px] flex flex-col gap-[32px]">
                <div className="flex flex-col gap-[20px]">
                  <h2 className="text-[28px] sm:text-[36px] lg:text-[46px] font-bold text-[#0A0915] leading-[1.2] tracking-[-0.04em]">
                    {t("homepage.about.title")}
                  </h2>
                  <p className="text-[16px] text-[#4F635E] leading-[1.6] max-w-[389px]">
                    {t("homepage.about.desc")}
                  </p>
                </div>
                <Link
                  href={`/${locale}/programs`}
                  className="inline-flex items-center gap-2 w-fit px-7 py-3.5 bg-[#0D883C] text-white rounded-[60px] text-[15px] font-semibold hover:bg-[#10a34a] transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#0D883C]/25"
                >
                  {t("navigation.explorePrograms")}
                  <svg
                    className="w-4 h-4"
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
              </div>

              {/* Right - About image with floating pills */}
              <div className="flex-1 max-w-[612px]">
                <div className="relative rounded-[20px] overflow-visible">
                  <img
                    src="/images/about-person.png"
                    alt="Learning"
                    className="w-full rounded-[20px]"
                  />
                  {/* Floating category pills */}
                  <div className="absolute bottom-[180px] left-1/2 -translate-x-1/2 whitespace-nowrap flex items-center gap-2 px-5 py-2.5 rounded-[60px] bg-white/90 backdrop-blur-sm shadow-lg text-[13px] text-[#003B2D] font-medium">
                    <img
                      src="/images/star-green.svg"
                      alt=""
                      className="w-5 h-5"
                    />
                    English & French
                  </div>
                  <div className="absolute bottom-[125px] left-1/2 -translate-x-1/2 whitespace-nowrap flex items-center gap-2 px-5 py-2.5 rounded-[60px] bg-white/90 backdrop-blur-sm shadow-lg text-[13px] text-[#003B2D] font-medium">
                    <img
                      src="/images/star-green.svg"
                      alt=""
                      className="w-5 h-5"
                    />
                    {t("homepage.about.pill2")}
                  </div>
                  <div className="absolute bottom-[70px] left-1/2 -translate-x-1/2 whitespace-nowrap flex items-center gap-2 px-5 py-2.5 rounded-[60px] bg-white/90 backdrop-blur-sm shadow-lg text-[13px] text-[#003B2D] font-medium">
                    <img
                      src="/images/star-green.svg"
                      alt=""
                      className="w-5 h-5"
                    />
                    {t("homepage.about.pill3")}
                  </div>
                  {/* Rating block */}
                  <div className="mt-4 flex items-center gap-3">
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <img
                          key={i}
                          src="/images/star-green.svg"
                          alt=""
                          className="w-[26px] h-[26px]"
                        />
                      ))}
                    </div>
                    <span className="text-[20px] font-bold text-[#0A0915]">
                      4.9
                    </span>
                    <span className="text-[13px] text-[#4F635E]">
                      {t("homepage.hero.averageRating")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </RevealSection>

      {/* ━━━ STATS ━━━ */}
      <RevealSection>
        <section className="py-[60px]">
          <div className="max-w-[1280px] mx-auto px-[30px]">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-[#005843]/40 to-transparent mb-8" />
            <div className="flex flex-col sm:flex-row items-center justify-center gap-0 py-4">
              {[
                {
                  ref: stat1.ref,
                  val: stat1.count,
                  suffix: "%",
                  label: t("homepage.stats.satisfaction"),
                },
                {
                  ref: stat2.ref,
                  val: stat2.count,
                  suffix: "+",
                  label: t("homepage.stats.courses"),
                },
                {
                  ref: stat3.ref,
                  val: `${Math.floor(stat3.count / 1000)}K`,
                  suffix: "+",
                  label: t("homepage.stats.learners"),
                },
                {
                  ref: stat4.ref,
                  val: stat4.count,
                  suffix: "+",
                  label: t("homepage.stats.countries"),
                },
              ].map((s, i) => (
                <div key={i} className="flex items-center">
                  {i > 0 && (
                    <div className="hidden sm:block stat-divider mx-[40px] lg:mx-[55px]" />
                  )}
                  <div
                    ref={s.ref as React.Ref<HTMLDivElement>}
                    className="text-center py-4 sm:py-0 min-w-[140px]"
                  >
                    <div className="text-[36px] lg:text-[46px] font-bold text-[#0A0915] leading-[1.2] tracking-[-0.04em]">
                      {s.val}
                      {s.suffix}
                    </div>
                    <div className="text-[14px] text-[#4F635E] mt-1">
                      {s.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full h-px bg-gradient-to-r from-transparent via-[#005843]/40 to-transparent mt-8" />
          </div>
        </section>
      </RevealSection>

      {/* ━━━ PROGRAMS ━━━ */}
      <RevealSection>
        <section className="py-[60px] lg:py-[120px]">
          <div className="max-w-[1280px] mx-auto px-[30px]">
            <div className="flex flex-col lg:flex-row gap-[40px] lg:gap-[200px] items-start mb-[60px]">
              <h2 className="flex-1 text-[28px] sm:text-[36px] lg:text-[46px] font-bold text-[#0A0915] leading-[1.2] tracking-[-0.04em]">
                {t("homepage.programs.title")}
              </h2>
              <p className="flex-1 max-w-[371px] text-[16px] text-[#4F635E] leading-[1.6]">
                From general language courses to specialized corporate training,
                we have the right program for your goals.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {programs.map((prog, i) => (
                <div
                  key={i}
                  className="card-gradient-accent group bg-white rounded-[20px] border border-[#EAF0EF] p-8 hover:border-[#0D883C]/40 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-[#F3FAF5] flex items-center justify-center text-[#0D883C] mb-6 group-hover:bg-[#0D883C] group-hover:text-white transition-colors">
                      {prog.icon}
                    </div>
                    <span className="inline-block px-3 py-1 rounded-full bg-[#F3FAF5] text-[#003B2D] text-xs font-medium mb-4">
                      {prog.tag}
                    </span>
                    <h3 className="text-[20px] font-semibold text-[#0A0915] leading-[1.3] mb-3">
                      {prog.title}
                    </h3>
                    <p className="text-[14px] text-[#4F635E] leading-[1.6]">
                      {prog.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealSection>

      {/* ━━━ PROJECTS ━━━ */}
      <RevealSection>
        <section className="py-[60px]">
          <div className="max-w-[1280px] mx-auto px-[30px]">
            <div className="flex flex-col lg:flex-row gap-[40px] lg:gap-[200px] items-start mb-[60px]">
              <h2 className="flex-1 text-[28px] sm:text-[36px] lg:text-[46px] font-bold text-[#0A0915] leading-[1.2] tracking-[-0.04em]">
                {t("homepage.projects.title")}
              </h2>
              <p className="flex-1 max-w-[385px] text-[16px] text-[#4F635E] leading-[1.6]">
                {t("homepage.projects.desc")}
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {projects.map((proj, i) => (
                <div
                  key={i}
                  className="group bg-white rounded-[20px] border border-[#EAF0EF] overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative aspect-[1.35] overflow-hidden">
                    <img
                      src={proj.img}
                      alt={proj.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 left-4 text-white/50 text-xs">
                      &copy; 2026 &ndash; Edu Learning
                    </div>
                    <div className="absolute bottom-5 left-5 right-5">
                      <h4 className="text-[20px] font-semibold text-white leading-[1.3]">
                        {proj.title}
                      </h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealSection>

      {/* ━━━ FEATURES (Accordion layout matching reference) ━━━ */}
      <RevealSection>
        <section className="py-[60px] lg:py-[120px]">
          <div className="max-w-[1280px] mx-auto px-[30px]">
            <div className="flex flex-col lg:flex-row gap-[52px] items-start">
              {/* Left: Image */}
              <div className="flex-1">
                <img
                  src="/images/features-person.png"
                  alt="Learning experience"
                  className="w-full rounded-[20px]"
                />
              </div>
              {/* Right: Heading + Accordion */}
              <div className="flex-1 flex flex-col gap-[40px]">
                <h2 className="text-[28px] sm:text-[36px] lg:text-[46px] font-bold text-[#0A0915] leading-[1.2] tracking-[-0.04em]">
                  {t("homepage.features.title")}
                </h2>
                <div className="space-y-0">
                  {features.map((feat, i) => (
                    <div key={i} className="border-b border-[#EAF0EF]">
                      <button
                        onClick={() =>
                          setOpenFeature(openFeature === i ? -1 : i)
                        }
                        className="w-full flex items-center justify-between py-5 text-left group"
                      >
                        <h4 className="text-[18px] font-semibold text-[#0A0915]">
                          {feat.title}
                        </h4>
                        <svg
                          className={`w-5 h-5 text-[#4F635E] flex-shrink-0 transition-transform duration-300 ${openFeature === i ? "rotate-45" : ""}`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4.5v15m7.5-7.5h-15"
                          />
                        </svg>
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${openFeature === i ? "max-h-40 pb-5" : "max-h-0"}`}
                      >
                        <p className="text-[14px] text-[#4F635E] leading-[1.6]">
                          {feat.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </RevealSection>

      {/* ━━━ SKILLS ━━━ */}
      <RevealSection>
        <section className="py-[60px] lg:py-[120px]">
          <div className="max-w-[1280px] mx-auto px-[30px]">
            <div className="text-center mb-[60px]">
              <h2 className="text-[28px] sm:text-[36px] lg:text-[46px] font-bold text-[#0A0915] leading-[1.2] tracking-[-0.04em] mb-5">
                {t("homepage.skills.title")}
              </h2>
              <p className="text-[16px] text-[#4F635E] leading-[1.6] max-w-[520px] mx-auto">
                {t("homepage.skills.desc")}
              </p>
            </div>

            {/* Two columns of skill pills */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {skills.map((col, ci) => (
                <div key={ci} className="flex flex-col gap-0">
                  <h4 className="text-[16px] font-bold text-[#0A0915] mb-5">
                    {t("homepage.skills.colTitle")}
                  </h4>
                  <div className="flex flex-col gap-3">
                    {col.items.map((skill, si) => (
                      <div
                        key={si}
                        className="flex items-center gap-3 px-5 py-3.5 rounded-[60px] bg-[#F3FAF5] border border-[#EAF0EF]"
                      >
                        <div className="w-[14px] h-[14px] rounded-full bg-[#003B2D] flex-shrink-0" />
                        <span className="text-[14px] text-[#4F635E]">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Full-width image */}
            <div className="rounded-[20px] overflow-hidden">
              <img
                src="/images/skills-wide.png"
                alt="Skills in action"
                className="w-full object-cover"
              />
            </div>
          </div>
        </section>
      </RevealSection>

      {/* ━━━ TESTIMONIALS ━━━ */}
      <RevealSection>
        <section className="py-[60px] lg:py-[120px]">
          <div className="max-w-[1280px] mx-auto px-[30px]">
            <div className="flex flex-col lg:flex-row gap-[60px] items-start">
              {/* Left: heading + CTA */}
              <div className="lg:max-w-[350px] flex flex-col gap-[20px] lg:sticky lg:top-32">
                <h2 className="text-[28px] sm:text-[36px] lg:text-[46px] font-bold text-[#0A0915] leading-[1.2] tracking-[-0.04em]">
                  {t("homepage.testimonials.title")}
                </h2>
                <p className="text-[16px] text-[#4F635E] leading-[1.6]">
                  {t("homepage.testimonials.desc")}
                </p>
                <Link
                  href={`/${locale}/programs`}
                  className="inline-flex items-center gap-2 w-fit px-7 py-3.5 bg-[#0D883C] text-white rounded-[60px] text-[15px] font-semibold hover:bg-[#10a34a] transition-all"
                >
                  {t("navigation.explorePrograms")}
                </Link>
              </div>

              {/* Right: Testimonial cards in 2-column grid */}
              <div className="flex-1 grid sm:grid-cols-2 gap-6">
                {testimonials.map((test, i) => (
                  <div
                    key={i}
                    className="card-gradient-accent bg-white rounded-[20px] border border-[#EAF0EF] p-7"
                  >
                    <div className="relative z-10 flex flex-col h-full">
                      <h4 className="text-[18px] font-semibold text-[#0A0915] leading-[1.3] mb-3">
                        &ldquo;{test.title}&rdquo;
                      </h4>
                      <p className="text-[14px] text-[#4F635E] leading-[1.6] mb-6 flex-1">
                        &ldquo;{test.text}&rdquo;
                      </p>
                      <div className="flex items-center gap-3 mb-4">
                        <img
                          src={test.avatar}
                          alt={test.name}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div>
                          <div className="text-[14px] font-semibold text-[#0A0915]">
                            {test.name}
                          </div>
                          <div className="text-[13px] text-[#4F635E]">
                            {test.role}
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        {test.tags.map((tag, ti) => (
                          <span
                            key={ti}
                            className="px-4 py-1.5 rounded-[40px] bg-[#F3FAF5] text-[#003B2D] text-[13px] font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </RevealSection>

      {/* ━━━ PRICING ━━━ */}
      <RevealSection>
        <section className="py-[60px] lg:py-[120px]">
          <div className="max-w-[1280px] mx-auto px-[30px]">
            <div className="flex flex-col lg:flex-row gap-[40px] items-start mb-[60px]">
              <h2 className="flex-1 text-[28px] sm:text-[36px] lg:text-[46px] font-bold text-[#0A0915] leading-[1.2] tracking-[-0.04em]">
                {t("homepage.pricing.title")}
              </h2>
              <p className="flex-1 max-w-[400px] text-[16px] text-[#4F635E] leading-[1.6]">
                Choose a plan that fits your learning goals and grow at your own
                pace with confidence.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {pricing.map((plan, i) => (
                <div
                  key={i}
                  className={`rounded-[20px] border p-8 transition-all duration-300 hover:-translate-y-1 ${
                    plan.featured
                      ? "border-[#0D883C] bg-white shadow-lg shadow-[#0D883C]/10 relative"
                      : "border-[#EAF0EF] bg-white hover:border-[#0D883C] hover:shadow-lg hover:shadow-[#0D883C]/5"
                  }`}
                >
                  {plan.featured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#0D883C] text-white text-xs font-semibold rounded-full whitespace-nowrap">
                      {t("homepage.pricing.popular")}
                    </div>
                  )}
                  <h3 className="text-[20px] font-semibold text-[#0A0915] mb-4">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-[46px] font-bold text-[#0A0915] leading-[1.2] tracking-[-0.04em]">
                      {plan.price}
                    </span>
                    <span className="text-[16px] text-[#4F635E]">
                      {plan.period}
                    </span>
                  </div>
                  <p className="text-[14px] text-[#4F635E] mb-6 leading-[1.6]">
                    {plan.desc}
                  </p>
                  <a
                    href={getWhatsAppUrl(
                      `Hi, I'm interested in the ${plan.name} plan (${plan.price}${plan.period}). I'd like to get started!`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-2 px-6 py-3 rounded-[60px] text-[15px] font-semibold transition-all mb-6 ${
                      plan.featured
                        ? "bg-[#0D883C] text-white hover:bg-[#10a34a]"
                        : "border border-[#EAF0EF] text-[#003B2D] hover:border-[#0D883C]"
                    }`}
                  >
                    {t("homepage.pricing.getStarted")}
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </a>
                  <ul className="space-y-3">
                    {plan.included.map((f, j) => (
                      <li
                        key={j}
                        className="flex items-center gap-3 text-[14px] text-[#4F635E]"
                      >
                        <img
                          src="/images/check-green.svg"
                          alt=""
                          className="w-[22px] h-[22px] flex-shrink-0"
                        />
                        {f}
                      </li>
                    ))}
                    {plan.excluded.map((f, j) => (
                      <li
                        key={`ex-${j}`}
                        className="flex items-center gap-3 text-[14px] text-[#4F635E]/40"
                      >
                        <img
                          src="/images/check-grey.svg"
                          alt=""
                          className="w-[22px] h-[22px] flex-shrink-0 opacity-40"
                        />
                        <span className="line-through">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealSection>

      {/* ━━━ FAQ ━━━ */}
      <RevealSection>
        <section className="py-[60px] lg:py-[120px]">
          <div className="max-w-[1280px] mx-auto px-[30px]">
            <div className="flex flex-col lg:flex-row gap-[40px] items-start">
              {/* Left: Heading + FAQ grid */}
              <div className="flex-1 flex flex-col gap-[32px]">
                <div className="flex flex-col lg:flex-row gap-[40px]">
                  <div className="flex flex-col gap-[20px] lg:max-w-[280px]">
                    <h2 className="text-[28px] sm:text-[36px] lg:text-[46px] font-bold text-[#0A0915] leading-[1.2] tracking-[-0.04em]">
                      {t("homepage.faq.title")}
                    </h2>
                    <p className="text-[16px] text-[#4F635E] leading-[1.6]">
                      {t("homepage.faq.desc")}
                    </p>
                    <a
                      href={getWhatsAppUrl(
                        "Hi, I have a question about Edu Learning programs and services.",
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 w-fit px-7 py-3.5 bg-[#0D883C] text-white rounded-[60px] text-[15px] font-semibold hover:bg-[#10a34a] transition-all"
                    >
                      {t("homepage.faq.contactBtn")}
                    </a>
                  </div>
                  {/* FAQ cards grid */}
                  <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {faqs.map((faq, i) => (
                      <div
                        key={i}
                        className="bg-white rounded-[20px] border border-[#EAF0EF] p-6 hover:border-[#0D883C]/30 transition-all"
                      >
                        <button
                          onClick={() => setOpenFaq(openFaq === i ? null : i)}
                          className="w-full text-left"
                        >
                          <h4 className="text-[16px] font-semibold text-[#0A0915] leading-[1.4] mb-2">
                            {faq.q}
                          </h4>
                          {openFaq === i && (
                            <p className="text-[13px] text-[#4F635E] leading-[1.6]">
                              {faq.a}
                            </p>
                          )}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Right: FAQ image */}
              <div className="hidden lg:block w-[300px] flex-shrink-0">
                <img
                  src="/images/faq-person.png"
                  alt="FAQ"
                  className="w-full rounded-[20px]"
                  style={{ transform: "scaleX(-1)" }}
                />
              </div>
            </div>
          </div>
        </section>
      </RevealSection>

      {/* ━━━ CTA ━━━ */}
      <RevealSection>
        <section className="relative py-[120px] overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/images/cta-person.png"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
          </div>
          <div className="max-w-[1280px] mx-auto px-[30px] relative z-10 text-center">
            <h2 className="text-[28px] sm:text-[36px] lg:text-[46px] font-bold text-white leading-[1.2] tracking-[-0.04em] max-w-[680px] mx-auto mb-5">
              {t("homepage.cta.title")}
            </h2>
            <p className="text-[16px] text-white/70 leading-[1.6] max-w-[508px] mx-auto mb-8">
              {t("homepage.cta.desc")}
            </p>
            <Link
              href={`/${locale}/programs`}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#0D883C] text-white rounded-[60px] text-[15px] font-semibold hover:bg-[#10a34a] transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#0D883C]/25"
            >
              {t("navigation.explorePrograms")}
              <svg
                className="w-4 h-4"
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
          </div>
        </section>
      </RevealSection>
    </main>
  );
}
