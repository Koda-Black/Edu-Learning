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

  const interpretationRates = [
    {
      title: t("translation.i1Title"),
      standard: t("translation.i1Standard"),
      urgent: t("translation.i1Urgent"),
    },
    {
      title: t("translation.i2Title"),
      standard: t("translation.i2Standard"),
      urgent: t("translation.i2Urgent"),
    },
    {
      title: t("translation.i3Title"),
      standard: t("translation.i3Standard"),
      urgent: t("translation.i3Urgent"),
    },
    {
      title: t("translation.i4Title"),
      standard: t("translation.i4Standard"),
      urgent: t("translation.i4Urgent"),
    },
  ];

  const proofreadingRates = [
    {
      title: t("translation.pr1Title"),
      col1: t("translation.pr1General"),
      col2: t("translation.pr1Academic"),
    },
    {
      title: t("translation.pr2Title"),
      col1: t("translation.pr2General"),
      col2: t("translation.pr2Business"),
    },
    {
      title: t("translation.pr3Title"),
      col1: t("translation.pr3General"),
      col2: t("translation.pr3Technical"),
    },
  ];

  return (
    <main className="bg-white flex flex-col">
      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pb-20 overflow-hidden">
        {/* Decorative blurs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[200px] right-[100px] w-[600px] h-[800px] opacity-15">
            <div className="absolute top-0 left-[100px] w-[300px] h-[600px] rounded-full bg-[#003B2D] blur-[80px]" />
            <div className="absolute top-[200px] left-0 w-[300px] h-[400px] rounded-full bg-[#0D883C] blur-[120px]" />
          </div>
        </div>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-[30px] relative z-10">
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
                src="/images/peoples/Translation.webp"
                alt="Translation"
                className="w-full max-w-[400px] rounded-[20px] ml-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-[60px] lg:py-[120px]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-[30px]">
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
        <div className="max-w-[800px] mx-auto px-4 sm:px-[30px]">
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

      {/* Interpretation Rate Card */}
      <section className="py-[60px] lg:py-[120px] order-5">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-[30px]">
          <h2 className="text-[28px] sm:text-[36px] lg:text-[46px] font-bold text-[#0A0915] leading-[1.2] tracking-[-0.04em] mb-5 text-center">
            {t("translation.interpretationTitle")}
          </h2>
          <p className="text-[16px] text-[#4F635E] leading-[1.6] text-center mb-10">
            {t("translation.interpretationDesc")}
          </p>
          <div className="max-w-[800px] mx-auto">
            <div className="bg-white rounded-[20px] border border-[#EAF0EF] overflow-hidden">
              <div className="grid grid-cols-3 gap-0 bg-[#003B2D] text-white text-[12px] sm:text-[14px] font-semibold">
                <div className="p-3 sm:p-4">Service</div>
                <div className="p-3 sm:p-4 text-center">
                  {t("translation.standardRate")}
                </div>
                <div className="p-3 sm:p-4 text-center">
                  {t("translation.urgentRate")}
                </div>
              </div>
              {interpretationRates.map((rate, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-3 gap-0 text-[12px] sm:text-[14px] ${i % 2 === 0 ? "bg-[#F3FAF5]" : "bg-white"}`}
                >
                  <div className="p-3 sm:p-4 font-medium text-[#0A0915]">
                    {rate.title}
                  </div>
                  <div className="p-3 sm:p-4 text-center text-[#4F635E]">
                    {rate.standard}
                  </div>
                  <div className="p-3 sm:p-4 text-center text-[#4F635E]">
                    {rate.urgent}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-[13px] text-[#0D883C] font-medium text-center mt-4">
              {t("translation.fullDayDiscount")}
            </p>
          </div>
        </div>
      </section>

      {/* Proofreading & Editing Rates */}
      <section className="py-[60px] lg:py-[120px] bg-[#F3FAF5] order-6">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-[30px]">
          <h2 className="text-[28px] sm:text-[36px] lg:text-[46px] font-bold text-[#0A0915] leading-[1.2] tracking-[-0.04em] mb-5 text-center">
            {t("translation.proofreadingTitle")}
          </h2>
          <p className="text-[16px] text-[#4F635E] leading-[1.6] text-center mb-10">
            {t("translation.proofreadingDesc")}
          </p>
          <div className="max-w-[800px] mx-auto">
            <div className="bg-white rounded-[20px] border border-[#EAF0EF] overflow-hidden mb-6">
              {proofreadingRates.map((rate, i) => (
                <div
                  key={i}
                  className={`p-6 ${i < proofreadingRates.length - 1 ? "border-b border-[#EAF0EF]" : ""}`}
                >
                  <h3 className="text-[16px] font-semibold text-[#0A0915] mb-2">
                    {rate.title}
                  </h3>
                  <div className="flex gap-6 text-[14px] text-[#4F635E]">
                    <span>{rate.col1}</span>
                    <span>{rate.col2}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Corporate Translation Rate Card */}
      <section className="py-[60px] lg:py-[100px] order-4">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-[30px]">
          <h2 className="text-[28px] sm:text-[36px] lg:text-[46px] font-bold text-[#0A0915] leading-[1.2] tracking-[-0.04em] mb-5 text-center">
            {t("translation.corporateTitle")}
          </h2>
          <p className="text-[15px] text-[#4F635E] leading-[1.6] text-center mb-10 max-w-[700px] mx-auto">
            {t("translation.corporateDesc")}
          </p>

          {/* Rate Table */}
          <div className="max-w-[900px] mx-auto mb-10">
            <h3 className="text-[20px] font-semibold text-[#0A0915] mb-5 text-center">
              {t("translation.frenchEnglishRatesTitle")}
            </h3>
            <div className="overflow-x-auto -mx-4 px-4 sm:-mx-0 sm:px-0">
              <div className="bg-white rounded-[20px] border border-[#EAF0EF] overflow-hidden min-w-[560px]">
                {/* Header */}
                <div className="grid grid-cols-4 gap-0 bg-[#003B2D] text-white text-[12px] sm:text-[14px] font-semibold">
                  <div className="p-3 sm:p-4">
                    {t("translation.documentTypes")}
                  </div>
                  <div className="p-3 sm:p-4 text-center">
                    <div>{t("translation.standardService")}</div>
                    <div className="text-[10px] sm:text-[11px] font-normal text-white/70 mt-0.5">
                      {t("translation.standardTimeline")}
                    </div>
                  </div>
                  <div className="p-3 sm:p-4 text-center">
                    <div>{t("translation.semiExpressService")}</div>
                    <div className="text-[10px] sm:text-[11px] font-normal text-white/70 mt-0.5">
                      {t("translation.semiExpressTimeline")}
                    </div>
                  </div>
                  <div className="p-3 sm:p-4 text-center">
                    <div>{t("translation.expressService")}</div>
                    <div className="text-[10px] sm:text-[11px] font-normal text-white/70 mt-0.5">
                      {t("translation.expressTimeline")}
                    </div>
                  </div>
                </div>
                {/* Simple Documents */}
                <div className="grid grid-cols-4 gap-0 text-[12px] sm:text-[14px] bg-[#F3FAF5]">
                  <div className="p-3 sm:p-4">
                    <div className="font-medium text-[#0A0915]">
                      {t("translation.simpleDocuments")}
                    </div>
                    <div className="text-[10px] sm:text-[11px] text-[#4F635E] mt-1">
                      {t("translation.simpleDesc")}
                    </div>
                  </div>
                  <div className="p-3 sm:p-4 text-center text-[#4F635E] flex items-center justify-center">
                    {t("translation.stdSimpleRate")}
                    <span className="text-[10px] sm:text-[11px] ml-0.5">
                      /{t("translation.perPage")}
                    </span>
                  </div>
                  <div className="p-3 sm:p-4 text-center text-[#4F635E] flex items-center justify-center">
                    {t("translation.semiSimpleRate")}
                    <span className="text-[10px] sm:text-[11px] ml-0.5">
                      /{t("translation.perPage")}
                    </span>
                  </div>
                  <div className="p-3 sm:p-4 text-center text-[#4F635E] flex items-center justify-center">
                    {t("translation.expSimpleRate")}
                    <span className="text-[10px] sm:text-[11px] ml-0.5">
                      /{t("translation.perPage")}
                    </span>
                  </div>
                </div>
                {/* Legal Documents */}
                <div className="grid grid-cols-4 gap-0 text-[12px] sm:text-[14px] bg-white">
                  <div className="p-3 sm:p-4">
                    <div className="font-medium text-[#0A0915]">
                      {t("translation.legalDocuments")}
                    </div>
                    <div className="text-[10px] sm:text-[11px] text-[#4F635E] mt-1">
                      {t("translation.legalDesc")}
                    </div>
                  </div>
                  <div className="p-3 sm:p-4 text-center text-[#4F635E] flex items-center justify-center">
                    {t("translation.stdLegalRate")}
                    <span className="text-[10px] sm:text-[11px] ml-0.5">
                      /{t("translation.perPage")}
                    </span>
                  </div>
                  <div className="p-3 sm:p-4 text-center text-[#4F635E] flex items-center justify-center">
                    {t("translation.semiLegalRate")}
                    <span className="text-[10px] sm:text-[11px] ml-0.5">
                      /{t("translation.perPage")}
                    </span>
                  </div>
                  <div className="p-3 sm:p-4 text-center text-[#4F635E] flex items-center justify-center">
                    {t("translation.expLegalRate")}
                    <span className="text-[10px] sm:text-[11px] ml-0.5">
                      /{t("translation.perPage")}
                    </span>
                  </div>
                </div>
                {/* Technical Documents */}
                <div className="grid grid-cols-4 gap-0 text-[12px] sm:text-[14px] bg-[#F3FAF5]">
                  <div className="p-3 sm:p-4">
                    <div className="font-medium text-[#0A0915]">
                      {t("translation.technicalDocuments")}
                    </div>
                    <div className="text-[10px] sm:text-[11px] text-[#4F635E] mt-1">
                      {t("translation.technicalDesc")}
                    </div>
                  </div>
                  <div className="p-3 sm:p-4 text-center text-[#4F635E] flex items-center justify-center">
                    {t("translation.stdTechnicalRate")}
                    <span className="text-[10px] sm:text-[11px] ml-0.5">
                      /{t("translation.perPage")}
                    </span>
                  </div>
                  <div className="p-3 sm:p-4 text-center text-[#4F635E] flex items-center justify-center">
                    {t("translation.semiTechnicalRate")}
                    <span className="text-[10px] sm:text-[11px] ml-0.5">
                      /{t("translation.perPage")}
                    </span>
                  </div>
                  <div className="p-3 sm:p-4 text-center text-[#4F635E] flex items-center justify-center">
                    {t("translation.expTechnicalRate")}
                    <span className="text-[10px] sm:text-[11px] ml-0.5">
                      /{t("translation.perPage")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-[900px] mx-auto mb-10">
            <h3 className="text-[20px] font-semibold text-[#0A0915] mb-3 text-center">
              {t("translation.otherLanguageRatesTitle")}
            </h3>
            <p className="text-[13px] text-[#4F635E] leading-[1.6] text-center mb-5 max-w-[700px] mx-auto">
              {t("translation.otherLanguageRatesDesc")}
            </p>
            <div className="overflow-x-auto -mx-4 px-4 sm:-mx-0 sm:px-0">
              <div className="bg-white rounded-[20px] border border-[#EAF0EF] overflow-hidden min-w-[560px]">
                <div className="grid grid-cols-4 bg-[#003B2D] text-white text-[12px] sm:text-[14px] font-semibold">
                  <div className="p-3 sm:p-4">{t("translation.documentTypes")}</div>
                  <div className="p-3 sm:p-4 text-center">{t("translation.standardService")}</div>
                  <div className="p-3 sm:p-4 text-center">{t("translation.semiExpressService")}</div>
                  <div className="p-3 sm:p-4 text-center">{t("translation.expressService")}</div>
                </div>
                {["simpleDocuments", "legalDocuments", "technicalDocuments"].map((key, i) => (
                  <div key={key} className={`grid grid-cols-4 text-[12px] sm:text-[14px] ${i % 2 === 0 ? "bg-[#F3FAF5]" : "bg-white"}`}>
                    <div className="p-3 sm:p-4 font-medium text-[#0A0915]">{t(`translation.${key}`)}</div>
                    {[0, 1, 2].map((column) => (
                      <div key={column} className="p-3 sm:p-4 text-center text-[#4F635E]">
                        {t("translation.otherLanguageRate")}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Notes */}
          <div className="max-w-[700px] mx-auto space-y-3 text-[13px] text-[#4F635E] mb-10">
            <p>ðŸ“Œ {t("translation.turnaroundNote")}</p>
            <p>ðŸ“Œ {t("translation.additionalLangSurcharge")}</p>
            <p>ðŸ“Œ {t("translation.paymentTermsNote")}</p>
            <p>ðŸ“Œ {t("translation.certificateNote")}</p>
            <p>ðŸ“Œ {t("translation.nonRefundNote")}</p>
          </div>

          {/* Document Types Explanation */}
          <div className="max-w-[700px] mx-auto mb-10">
            <h3 className="text-[20px] font-semibold text-[#0A0915] mb-6 text-center">
              {t("translation.docTypesTitle")}
            </h3>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-[#F3FAF5] rounded-[16px] p-5">
                <h4 className="text-[15px] font-semibold text-[#0A0915] mb-2">
                  {t("translation.simpleDocsTitle")}
                </h4>
                <p className="text-[13px] text-[#4F635E] leading-[1.5]">
                  {t("translation.simpleDocsList")}
                </p>
              </div>
              <div className="bg-[#F3FAF5] rounded-[16px] p-5">
                <h4 className="text-[15px] font-semibold text-[#0A0915] mb-2">
                  {t("translation.legalDocsTitle")}
                </h4>
                <p className="text-[13px] text-[#4F635E] leading-[1.5]">
                  {t("translation.legalDocsList")}
                </p>
              </div>
              <div className="bg-[#F3FAF5] rounded-[16px] p-5">
                <h4 className="text-[15px] font-semibold text-[#0A0915] mb-2">
                  {t("translation.technicalDocsTitle")}
                </h4>
                <p className="text-[13px] text-[#4F635E] leading-[1.5]">
                  {t("translation.technicalDocsList")}
                </p>
              </div>
            </div>
          </div>

          {/* Value Proposition */}
          <div className="max-w-[700px] mx-auto bg-[#F3FAF5] rounded-[20px] p-8 mb-10">
            <h3 className="text-[20px] font-semibold text-[#0A0915] mb-4">
              {t("translation.valuePropositionTitle")}
            </h3>
            <ul className="space-y-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-[14px] text-[#4F635E]"
                >
                  <svg
                    className="w-5 h-5 text-[#0D883C] shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {t(`translation.vp${i}`)}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center">
            <p className="text-[14px] text-[#4F635E] mb-3">
              {t("translation.contactLanguageServices")}
            </p>
            <a
              href={`mailto:${t("translation.languageServicesEmail")}`}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#0D883C] text-white rounded-[60px] text-[15px] font-semibold hover:bg-[#10a34a] transition-all"
            >
              {t("translation.languageServicesEmail")}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

