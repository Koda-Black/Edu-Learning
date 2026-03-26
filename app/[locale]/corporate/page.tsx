"use client";

import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { useState } from "react";
import { CorporateConsultationForm } from "@/components";

export default function CorporatePage() {
  const t = useTranslations();
  const locale = useLocale();
  const [showConsultation, setShowConsultation] = useState(false);

  const benefits = [
    { title: t("corporate.b1Title"), desc: t("corporate.b1Desc") },
    { title: t("corporate.b2Title"), desc: t("corporate.b2Desc") },
    { title: t("corporate.b3Title"), desc: t("corporate.b3Desc") },
    { title: t("corporate.b4Title"), desc: t("corporate.b4Desc") },
    { title: t("corporate.b5Title"), desc: t("corporate.b5Desc") },
    { title: t("corporate.b6Title"), desc: t("corporate.b6Desc") },
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
                {t("corporate.tag")}
              </span>
              <h1 className="text-[36px] sm:text-[48px] lg:text-[64px] font-bold text-[#0A0915] leading-[1.08] tracking-[-0.045em] mb-5">
                {t("corporate.pageTitle")}
              </h1>
              <p className="text-[16px] text-[#4F635E] leading-[1.6] max-w-[500px] mb-8">
                {t("corporate.subtitle")}
              </p>
              <button
                onClick={() => setShowConsultation(true)}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#0D883C] text-white rounded-[60px] text-[15px] font-semibold hover:bg-[#10a34a] transition-all"
              >
                {t("corporate.cta")}
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
              </button>
            </div>
            <div className="hidden lg:block flex-1">
              <img
                src="/images/features-person.png"
                alt="Corporate training"
                className="w-full max-w-[500px] rounded-[20px] ml-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-[60px] lg:py-[120px]">
        <div className="max-w-[1280px] mx-auto px-[30px]">
          <h2 className="text-[28px] sm:text-[36px] lg:text-[46px] font-bold text-[#0A0915] leading-[1.2] tracking-[-0.04em] mb-[60px] text-center">
            {t("corporate.whyTitle")}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="card-gradient-accent bg-white rounded-[20px] border border-[#EAF0EF] p-7 hover:border-[#0D883C]/40 hover:shadow-lg transition-all duration-300"
              >
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-[#F3FAF5] flex items-center justify-center text-[#0D883C] mb-5">
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
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-[18px] font-semibold text-[#0A0915] mb-2">
                    {b.title}
                  </h3>
                  <p className="text-[14px] text-[#4F635E] leading-[1.6]">
                    {b.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-[60px] lg:py-[120px] bg-[#F3FAF5]">
        <div className="max-w-[1280px] mx-auto px-[30px]">
          <div className="flex flex-col lg:flex-row gap-[60px] items-center">
            <div className="flex-1">
              <img
                src="/images/project-2.png"
                alt="Corporate process"
                className="w-full rounded-[20px]"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-[28px] sm:text-[36px] lg:text-[46px] font-bold text-[#0A0915] leading-[1.2] tracking-[-0.04em] mb-8">
                {t("corporate.howTitle")}
              </h2>
              <div className="space-y-6">
                {[
                  t("corporate.step1"),
                  t("corporate.step2"),
                  t("corporate.step3"),
                  t("corporate.step4"),
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#0D883C] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      {i + 1}
                    </div>
                    <p className="text-[16px] text-[#4F635E] leading-[1.6] pt-2">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>
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
            {t("corporate.ctaTitle")}
          </h2>
          <p className="text-[16px] text-white/70 leading-[1.6] max-w-[500px] mx-auto mb-8">
            {t("corporate.ctaDesc")}
          </p>
          <button
            onClick={() => setShowConsultation(true)}
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#0D883C] text-white rounded-[60px] text-[15px] font-semibold hover:bg-[#10a34a] transition-all"
          >
            {t("corporate.cta")}
          </button>
        </div>
      </section>

      <CorporateConsultationForm
        isOpen={showConsultation}
        onClose={() => setShowConsultation(false)}
      />
    </main>
  );
}
