"use client";

import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";

export default function DigitalCommunicationPage() {
  const t = useTranslations("digitalComm");
  const locale = useLocale();

  const services = [
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
          />
        </svg>
      ),
      title: t("s1Title"),
      items: [t("s1i1"), t("s1i2"), t("s1i3"), t("s1i4"), t("s1i5")],
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
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
      title: t("s2Title"),
      items: [t("s2i1"), t("s2i2"), t("s2i3")],
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
          />
        </svg>
      ),
      title: t("s3Title"),
      items: [t("s3i1"), t("s3i2"), t("s3i3"), t("s3i4")],
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
          />
        </svg>
      ),
      title: t("s4Title"),
      items: [
        t("s4i1"),
        t("s4i2"),
        t("s4i3"),
        t("s4i4"),
        t("s4i5"),
        t("s4i6"),
        t("s4i7"),
        t("s4i8"),
      ],
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
          />
        </svg>
      ),
      title: t("s5Title"),
      items: [t("s5i1"), t("s5i2"), t("s5i3"), t("s5i4"), t("s5i5")],
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
          />
        </svg>
      ),
      title: t("s6Title"),
      items: [t("s6i1"), t("s6i2"), t("s6i3"), t("s6i4"), t("s6i5"), t("s6i6")],
    },
  ];

  const whyChoose = [
    { icon: "🌍", text: t("w1") },
    { icon: "🎯", text: t("w2") },
    { icon: "💼", text: t("w3") },
    { icon: "📈", text: t("w4") },
    { icon: "🏢", text: t("w5") },
  ];

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[200px] right-[100px] w-[600px] h-[800px] opacity-15">
            <div className="absolute top-0 left-[100px] w-[300px] h-[600px] rounded-full bg-[#003B2D] blur-[80px]" />
            <div className="absolute top-[200px] left-0 w-[300px] h-[400px] rounded-full bg-[#0D883C] blur-[120px]" />
          </div>
        </div>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-[30px] relative z-10">
          <div className="flex flex-col lg:flex-row gap-[60px] items-start">
            <div className="flex-1 max-w-[640px]">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-[40px] bg-[#F3FAF5] text-[#003B2D] text-[13px] font-medium mb-6">
                {t("tag")}
              </span>
              <h1 className="text-[32px] sm:text-[44px] lg:text-[56px] font-bold text-[#0A0915] leading-[1.08] tracking-[-0.04em] mb-5">
                {t("pageTitle")}
              </h1>
              <p className="text-[16px] text-[#4F635E] leading-[1.7] max-w-[540px] mb-4">
                {t("heroDesc1")}
              </p>
              <p className="text-[15px] text-[#4F635E] leading-[1.7] max-w-[540px] mb-8">
                {t("heroDesc2")}
              </p>
              <a
                href="mailto:contact@edulearningimmersion.org"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#0D883C] text-white rounded-[60px] text-[15px] font-semibold hover:bg-[#10a34a] transition-all"
              >
                {t("heroCta")}
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
                src="/images/peoples/adult-girl.webp"
                alt="Digital Communication"
                className="w-full max-w-[440px] rounded-[20px] ml-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-[60px] lg:py-[100px]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-[30px]">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-[28px] sm:text-[36px] lg:text-[46px] font-bold text-[#0A0915] leading-[1.2] tracking-[-0.04em] mb-4">
              {t("servicesTitle")}
            </h2>
            <p className="text-[15px] text-[#4F635E] leading-[1.6] max-w-[540px] mx-auto">
              {t("servicesSubtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div
                key={i}
                className="card-gradient-accent group bg-white rounded-[20px] border border-[#EAF0EF] p-6 sm:p-7 hover:border-[#0D883C]/40 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-[#F3FAF5] flex items-center justify-center text-[#0D883C] mb-5 group-hover:bg-[#0D883C] group-hover:text-white transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-[17px] sm:text-[18px] font-semibold text-[#0A0915] leading-[1.3] mb-4">
                    {service.title}
                  </h3>
                  <ul className="space-y-2.5">
                    {service.items.map((item, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2.5 text-[13px] sm:text-[14px] text-[#4F635E] leading-[1.55]"
                      >
                        <span className="text-[#0D883C] mt-0.5 shrink-0 text-[11px]">
                          ●
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="py-[50px] lg:py-[70px]">
        <div className="max-w-[900px] mx-auto px-4 sm:px-[30px] text-center">
          <div className="bg-[#003B2D] rounded-[24px] px-6 sm:px-12 py-10 sm:py-14">
            <h3 className="text-[22px] sm:text-[28px] lg:text-[32px] font-bold text-white leading-[1.2] tracking-[-0.03em] mb-4">
              {t("midCtaTitle")}
            </h3>
            <p className="text-[14px] sm:text-[15px] text-white/70 leading-[1.6] max-w-[480px] mx-auto mb-8">
              {t("midCtaDesc")}
            </p>
            <a
              href="mailto:contact@edulearningimmersion.org"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#0D883C] text-white rounded-[60px] text-[15px] font-semibold hover:bg-[#10a34a] transition-all"
            >
              {t("midCtaBtn")}
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

      {/* Why Choose Us */}
      <section className="py-[60px] lg:py-[100px] bg-[#F3FAF5]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-[30px]">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-[80px] items-center">
            <div className="flex-1 max-w-[520px]">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-[40px] bg-white text-[#003B2D] text-[13px] font-medium mb-6">
                {t("whyTag")}
              </span>
              <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-[#0A0915] leading-[1.15] tracking-[-0.04em] mb-6">
                {t("whyTitle")}
              </h2>
              <div className="space-y-4">
                {whyChoose.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 bg-white rounded-[16px] p-4 border border-[#EAF0EF]"
                  >
                    <span className="text-[22px] shrink-0 mt-0.5">
                      {item.icon}
                    </span>
                    <p className="text-[14px] sm:text-[15px] text-[#4F635E] leading-[1.6]">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 hidden lg:block">
              <img
                src="/images/peoples/hero-boy-main.webp"
                alt="Why Choose Us"
                className="w-full max-w-[460px] rounded-[20px] ml-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-[100px] lg:py-[120px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/cta-person.png"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
        </div>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-[30px] relative z-10 text-center">
          <h2 className="text-[28px] sm:text-[36px] lg:text-[46px] font-bold text-white leading-[1.2] tracking-[-0.04em] mb-5">
            {t("ctaTitle")}
          </h2>
          <p className="text-[15px] sm:text-[16px] text-white/70 leading-[1.6] max-w-[560px] mx-auto mb-8">
            {t("ctaDesc")}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:contact@edulearningimmersion.org"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#0D883C] text-white rounded-[60px] text-[15px] font-semibold hover:bg-[#10a34a] transition-all"
            >
              {t("ctaBtn")}
            </a>
            <Link
              href={`/${locale}/contact`}
              className="px-8 py-3.5 bg-white/10 text-white border border-white/20 rounded-[60px] text-[15px] font-semibold hover:bg-white/20 transition-all"
            >
              {t("ctaContact")}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
