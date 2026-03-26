"use client";

import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export default function PartnershipsPage() {
  const t = useTranslations();
  const locale = useLocale();

  const types = [
    { title: t("partnerships.t1Title"), desc: t("partnerships.t1Desc") },
    { title: t("partnerships.t2Title"), desc: t("partnerships.t2Desc") },
    { title: t("partnerships.t3Title"), desc: t("partnerships.t3Desc") },
    { title: t("partnerships.t4Title"), desc: t("partnerships.t4Desc") },
  ];

  const teachLanguages = [
    { lang: "Dutch", flag: "🇳🇱", country: "Netherlands" },
    { lang: "German", flag: "🇩🇪", country: "Germany" },
    { lang: "Spanish", flag: "🇪🇸", country: "Spain" },
    { lang: "Chinese", flag: "🇨🇳", country: "China" },
    { lang: "Arabic", flag: "🇸🇦", country: "Saudi Arabia" },
    { lang: "Portuguese", flag: "🇧🇷", country: "Brazil" },
    { lang: "Italian", flag: "🇮🇹", country: "Italy" },
    { lang: "Japanese", flag: "🇯🇵", country: "Japan" },
  ];

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
                {t("partnerships.tag")}
              </span>
              <h1 className="text-[36px] sm:text-[48px] lg:text-[64px] font-bold text-[#0A0915] leading-[1.08] tracking-[-0.045em] mb-5">
                {t("partnerships.pageTitle")}
              </h1>
              <p className="text-[16px] text-[#4F635E] leading-[1.6] max-w-[500px] mb-8">
                {t("partnerships.subtitle")}
              </p>
              <a
                href={getWhatsAppUrl(
                  "Hey, I'd love to partner with you! I'm interested in learning more about partnership opportunities with Edu Learning.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#0D883C] text-white rounded-[60px] text-[15px] font-semibold hover:bg-[#10a34a] transition-all"
              >
                {t("partnerships.becomePartner")}
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
              </a>
            </div>
            <div className="hidden lg:block flex-1">
              <img
                src="/images/about-person.png"
                alt="Partnerships"
                className="w-full max-w-[500px] rounded-[20px] ml-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-[60px] lg:py-[120px]">
        <div className="max-w-[1280px] mx-auto px-[30px]">
          <h2 className="text-[28px] sm:text-[36px] lg:text-[46px] font-bold text-[#0A0915] leading-[1.2] tracking-[-0.04em] mb-[60px] text-center">
            {t("partnerships.typesTitle")}
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {types.map((item, i) => (
              <div
                key={i}
                className="card-gradient-accent bg-white rounded-[20px] border border-[#EAF0EF] p-8 hover:border-[#0D883C]/40 hover:shadow-lg transition-all duration-300"
              >
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-[#F3FAF5] flex items-center justify-center text-[#0D883C] mb-6">
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
                        d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-[20px] font-semibold text-[#0A0915] leading-[1.3] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[14px] text-[#4F635E] leading-[1.6]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teach Under Edu Learning */}
      <section className="py-[60px] lg:py-[120px] bg-[#F3FAF5]">
        <div className="max-w-[1280px] mx-auto px-[30px]">
          <div className="text-center mb-[60px]">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-[40px] bg-white text-[#003B2D] text-[13px] font-medium mb-6">
              🌍 Teach With Us
            </span>
            <h2 className="text-[28px] sm:text-[36px] lg:text-[46px] font-bold text-[#0A0915] leading-[1.2] tracking-[-0.04em] mb-5">
              Teach Your Language Under Edu Learning
            </h2>
            <p className="text-[16px] text-[#4F635E] leading-[1.6] max-w-[600px] mx-auto">
              Are you a language teacher? Join our platform and teach students
              from around the world. We&apos;re looking for passionate teachers
              of these languages and more.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12">
            {teachLanguages.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-[20px] border border-[#EAF0EF] p-6 text-center hover:border-[#0D883C]/40 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="text-5xl mb-4">{item.flag}</div>
                <h3 className="text-[18px] font-semibold text-[#0A0915] mb-1">
                  {item.lang}
                </h3>
                <p className="text-[13px] text-[#4F635E]">{item.country}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a
              href={getWhatsAppUrl(
                "Hey, I'm a language teacher and I'd love to teach under Edu Learning platform. I'd like to discuss opportunities.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#0D883C] text-white rounded-[60px] text-[15px] font-semibold hover:bg-[#10a34a] transition-all"
            >
              Apply to Teach
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
            </a>
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
            {t("partnerships.ctaTitle")}
          </h2>
          <p className="text-[16px] text-white/70 leading-[1.6] max-w-[500px] mx-auto mb-8">
            {t("partnerships.ctaDesc")}
          </p>
          <a
            href={getWhatsAppUrl(
              "Hey, I'd love to partner with you! Let's discuss how we can collaborate.",
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
