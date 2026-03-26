"use client";

import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { QuoteRequestForm } from "@/components";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export default function TranslationPage() {
  const t = useTranslations();
  const locale = useLocale();

  const services = [
    {
      title: t("translation.s1Title"),
      desc: t("translation.s1Desc"),
    },
    {
      title: t("translation.s2Title"),
      desc: t("translation.s2Desc"),
    },
    {
      title: t("translation.s3Title"),
      desc: t("translation.s3Desc"),
    },
    {
      title: t("translation.s4Title"),
      desc: t("translation.s4Desc"),
    },
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
                {t("translation.tag")}
              </span>
              <h1 className="text-[36px] sm:text-[48px] lg:text-[64px] font-bold text-[#0A0915] leading-[1.08] tracking-[-0.045em] mb-5">
                {t("translation.pageTitle")}
              </h1>
              <p className="text-[16px] text-[#4F635E] leading-[1.6] max-w-[500px] mb-8">
                {t("translation.subtitle")}
              </p>
              <a
                href={getWhatsAppUrl(
                  "Hi, I'd like to request a quote for translation/interpretation services.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#0D883C] text-white rounded-[60px] text-[15px] font-semibold hover:bg-[#10a34a] transition-all"
              >
                {t("translation.cta")}
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
                src="/images/hero-tall.png"
                alt="Translation"
                className="w-full max-w-[400px] rounded-[20px] ml-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-[60px] lg:py-[120px]">
        <div className="max-w-[1280px] mx-auto px-[30px]">
          <h2 className="text-[28px] sm:text-[36px] lg:text-[46px] font-bold text-[#0A0915] leading-[1.2] tracking-[-0.04em] mb-[60px] text-center">
            {t("translation.servicesTitle")}
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {services.map((s, i) => (
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
                        d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"
                      />
                    </svg>
                  </div>
                  <h3 className="text-[20px] font-semibold text-[#0A0915] leading-[1.3] mb-3">
                    {s.title}
                  </h3>
                  <p className="text-[14px] text-[#4F635E] leading-[1.6]">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-[60px] lg:py-[120px] bg-[#F3FAF5]">
        <div className="max-w-[800px] mx-auto px-[30px]">
          <h2 className="text-[28px] sm:text-[36px] lg:text-[46px] font-bold text-[#0A0915] leading-[1.2] tracking-[-0.04em] mb-5 text-center">
            {t("translation.quoteTitle")}
          </h2>
          <p className="text-[16px] text-[#4F635E] leading-[1.6] text-center mb-10">
            {t("translation.quoteDesc")}
          </p>
          <div className="bg-white rounded-[20px] border border-[#EAF0EF] p-8 lg:p-10">
            <QuoteRequestForm />
          </div>
        </div>
      </section>
    </main>
  );
}
