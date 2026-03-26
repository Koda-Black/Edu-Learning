"use client";

import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export default function AboutPage() {
  const t = useTranslations();
  const locale = useLocale();

  const values = [
    { title: t("about.v1Title"), desc: t("about.v1Desc"), icon: "star" },
    { title: t("about.v2Title"), desc: t("about.v2Desc"), icon: "globe" },
    { title: t("about.v3Title"), desc: t("about.v3Desc"), icon: "bulb" },
    { title: t("about.v4Title"), desc: t("about.v4Desc"), icon: "chart" },
  ];

  const team = [
    {
      name: t("about.tm1Name"),
      role: t("about.tm1Role"),
      desc: t("about.tm1Desc"),
      img: "/images/testimonial-1.png",
    },
    {
      name: t("about.tm2Name"),
      role: t("about.tm2Role"),
      desc: t("about.tm2Desc"),
      img: "/images/testimonial-2.png",
    },
    {
      name: t("about.tm3Name"),
      role: t("about.tm3Role"),
      desc: t("about.tm3Desc"),
      img: "/images/testimonial-3.png",
    },
    {
      name: t("about.tm4Name"),
      role: t("about.tm4Role"),
      desc: t("about.tm4Desc"),
      img: "/images/testimonial-4.png",
    },
  ];

  const iconMap: Record<string, React.ReactNode> = {
    star: (
      <svg
        className="w-7 h-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
        />
      </svg>
    ),
    globe: (
      <svg
        className="w-7 h-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
        />
      </svg>
    ),
    bulb: (
      <svg
        className="w-7 h-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
        />
      </svg>
    ),
    chart: (
      <svg
        className="w-7 h-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
        />
      </svg>
    ),
  };

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pb-20 overflow-hidden">
        {/* Decorative blurs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[200px] right-[100px] w-[600px] h-[800px] opacity-15">
            <div className="absolute top-0 left-[100px] w-[300px] h-[600px] rounded-full bg-[#003B2D] blur-[80px]" />
            <div className="absolute top-[200px] left-0 w-[300px] h-[400px] rounded-full bg-[#0D883C] blur-[120px]" />
          </div>
        </div>
        <div className="max-w-[1280px] mx-auto px-[30px] relative z-10">
          <div className="flex flex-col lg:flex-row gap-[60px] items-start">
            <div className="flex-1 max-w-[600px]">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-[40px] bg-[#F3FAF5] text-[#003B2D] text-[13px] font-medium mb-6">
                {t("about.tag")}
              </span>
              <h1 className="text-[36px] sm:text-[48px] lg:text-[64px] font-bold text-[#0A0915] leading-[1.08] tracking-[-0.045em] mb-5">
                {t("about.pageTitle")}
              </h1>
              <p className="text-[16px] text-[#4F635E] leading-[1.6] max-w-[500px]">
                {t("about.heroDesc")}
              </p>
            </div>
            <div className="hidden lg:block flex-1">
              <img
                src="/images/about-person.png"
                alt="About"
                className="w-full max-w-[500px] rounded-[20px] ml-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-[60px] lg:py-[120px]">
        <div className="max-w-[1280px] mx-auto px-[30px]">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#F3FAF5] rounded-[20px] p-8 lg:p-10">
              <h2 className="text-[28px] sm:text-[36px] lg:text-[46px] font-bold text-[#0A0915] leading-[1.2] tracking-[-0.04em] mb-5">
                {t("about.mission")}
              </h2>
              <p className="text-[16px] text-[#4F635E] leading-[1.6]">
                {t("about.missionText")}
              </p>
            </div>
            <div className="bg-[#F3FAF5] rounded-[20px] p-8 lg:p-10">
              <h2 className="text-[28px] sm:text-[36px] lg:text-[46px] font-bold text-[#0A0915] leading-[1.2] tracking-[-0.04em] mb-5">
                {t("about.vision")}
              </h2>
              <p className="text-[16px] text-[#4F635E] leading-[1.6]">
                {t("about.visionText")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-[60px] lg:py-[120px] bg-[#F3FAF5]">
        <div className="max-w-[1280px] mx-auto px-[30px]">
          <div className="flex flex-col lg:flex-row gap-[60px] items-center">
            <div className="flex-1">
              <h2 className="text-[28px] sm:text-[36px] lg:text-[46px] font-bold text-[#0A0915] leading-[1.2] tracking-[-0.04em] mb-6">
                {t("about.story")}
              </h2>
              <div className="space-y-4 text-[16px] text-[#4F635E] leading-[1.6]">
                <p>{t("about.storyText1")}</p>
                <p>{t("about.storyText2")}</p>
              </div>
            </div>
            <div className="flex-1">
              <div className="rounded-[20px] overflow-hidden">
                <img
                  src="/images/features-person.png"
                  alt="Our story"
                  className="w-full rounded-[20px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-[60px] lg:py-[120px]">
        <div className="max-w-[1280px] mx-auto px-[30px]">
          <h2 className="text-[28px] sm:text-[36px] lg:text-[46px] font-bold text-[#0A0915] leading-[1.2] tracking-[-0.04em] mb-[60px] text-center">
            {t("about.values")}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div
                key={i}
                className="card-gradient-accent bg-white rounded-[20px] border border-[#EAF0EF] p-7 hover:border-[#0D883C]/40 hover:shadow-lg transition-all duration-300"
              >
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-[#F3FAF5] flex items-center justify-center text-[#0D883C] mb-5">
                    {iconMap[v.icon]}
                  </div>
                  <h3 className="text-[18px] font-semibold text-[#0A0915] mb-2">
                    {v.title}
                  </h3>
                  <p className="text-[14px] text-[#4F635E] leading-[1.6]">
                    {v.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-[60px] lg:py-[120px] bg-[#F3FAF5]">
        <div className="max-w-[1280px] mx-auto px-[30px]">
          <h2 className="text-[28px] sm:text-[36px] lg:text-[46px] font-bold text-[#0A0915] leading-[1.2] tracking-[-0.04em] mb-[60px] text-center">
            {t("about.teamTitle")}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <div
                key={i}
                className="bg-white rounded-[20px] border border-[#EAF0EF] p-7 text-center hover:shadow-lg transition-all duration-300"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-16 h-16 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-[18px] font-semibold text-[#0A0915] mb-1">
                  {member.name}
                </h3>
                <p className="text-[14px] font-medium text-[#0D883C] mb-3">
                  {member.role}
                </p>
                <p className="text-[14px] text-[#4F635E] leading-[1.6]">
                  {member.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
          <h2 className="text-[28px] sm:text-[36px] lg:text-[46px] font-bold text-white leading-[1.2] tracking-[-0.04em] mb-5">
            {t("about.ctaTitle")}
          </h2>
          <p className="text-[16px] text-white/70 leading-[1.6] max-w-[500px] mx-auto mb-8">
            {t("about.ctaDesc")}
          </p>
          <a
            href={getWhatsAppUrl(
              "Hi, I'd like to learn more about Edu Learning programs and services.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#0D883C] text-white rounded-[60px] text-[15px] font-semibold hover:bg-[#10a34a] transition-all"
          >
            {t("navigation.getInTouch")}
          </a>
        </div>
      </section>
    </main>
  );
}
