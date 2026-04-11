"use client";

import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { useState } from "react";

const DEFAULT_FORM =
  "https://docs.google.com/forms/d/e/1FAIpQLSd8BNy8jVCiD0LhYaOJZ76yhXmc_V6EPNAd74_AyPiZZCN3bA/viewform?usp=publish-editor";

const CORPORATE_FORM =
  "https://docs.google.com/forms/d/e/1FAIpQLSdnIQjq4uEaXKQ0bR8FsA8ssPdwXhFbTXfoNugPZVqnhK_Gjw/viewform?usp=publish-editor";

const EXAM_FORM =
  "https://docs.google.com/forms/d/e/1FAIpQLSeGrdTl5S9gvXeWb5X08MYf-t-_SiRO_l1jt8n4Lk3V7G_q_A/viewform?usp=publish-editor";

export default function ProgramsPage() {
  const t = useTranslations();
  const locale = useLocale();
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { key: "all", label: t("programs.allLevels") },
    { key: "a1a2", label: t("programs.beginner") },
    { key: "b1b2", label: t("programs.intermediate") },
    { key: "exam", label: t("programs.advanced") },
    { key: "immersion", label: t("programs.immersion") },
    { key: "special", label: t("programs.special") },
  ];

  const programs = [
    {
      title: t("programs.p1Title"),
      level: "a1a2",
      duration: t("programs.p1Duration"),
      format: t("programs.p1Format"),
      price: "₦32,000–₦34,000",
      desc: t("programs.p1Desc"),
      img: "/images/peoples/hero-girl.webp",
      formUrl: DEFAULT_FORM,
    },
    {
      title: t("programs.p2Title"),
      level: "a1a2",
      duration: t("programs.p2Duration"),
      format: t("programs.p2Format"),
      price: "₦32,000–₦34,000",
      desc: t("programs.p2Desc"),
      img: "/images/peoples/young-girl.webp",
      formUrl: DEFAULT_FORM,
    },
    {
      title: t("programs.p3Title"),
      level: "b1b2",
      duration: t("programs.p3Duration"),
      format: t("programs.p3Format"),
      price: "₦46,000–₦52,000",
      desc: t("programs.p3Desc"),
      img: "/images/features-person.png",
      formUrl: DEFAULT_FORM,
    },
    {
      title: t("programs.p4Title"),
      level: "b1b2",
      duration: t("programs.p4Duration"),
      format: t("programs.p4Format"),
      price: "₦46,000–₦52,000",
      desc: t("programs.p4Desc"),
      img: "/images/peoples/hero-boy.webp",
      formUrl: DEFAULT_FORM,
    },
    {
      title: t("programs.p5Title"),
      level: "a1a2",
      duration: t("programs.p5Duration"),
      format: t("programs.p5Format"),
      price: "₦41,600–₦44,200",
      desc: t("programs.p5Desc"),
      img: "/images/peoples/young-boy.webp",
      formUrl: DEFAULT_FORM,
    },
    {
      title: t("programs.p6Title"),
      level: "b1b2",
      duration: t("programs.p6Duration"),
      format: t("programs.p6Format"),
      price: "On request",
      desc: t("programs.p6Desc"),
      img: "/images/peoples/library.webp",
      formUrl: DEFAULT_FORM,
    },
    {
      title: t("programs.p7Title"),
      level: "exam",
      duration: t("programs.p7Duration"),
      format: t("programs.p7Format"),
      price: "Contact us",
      desc: t("programs.p7Desc"),
      img: "/images/project-1.png",
      formUrl: EXAM_FORM,
    },
    {
      title: t("programs.p8Title"),
      level: "exam",
      duration: t("programs.p8Duration"),
      format: t("programs.p8Format"),
      price: "Contact us",
      desc: t("programs.p8Desc"),
      img: "/images/peoples/adult-man.webp",
      formUrl: DEFAULT_FORM,
    },
    {
      title: t("programs.p9Title"),
      level: "b1b2",
      duration: t("programs.p9Duration"),
      format: t("programs.p9Format"),
      price: "Custom",
      desc: t("programs.p9Desc"),
      img: "/images/peoples/adult-girl.webp",
      formUrl: CORPORATE_FORM,
    },
    {
      title: t("programs.p10Title"),
      level: "a1a2",
      duration: t("programs.p10Duration"),
      format: t("programs.p10Format"),
      price: "₦41,600–₦44,200",
      desc: t("programs.p10Desc"),
      img: "/images/peoples/hero-boy-main.webp",
      formUrl: DEFAULT_FORM,
    },
    {
      title: t("programs.p11Title"),
      level: "b1b2",
      duration: t("programs.p11Duration"),
      format: t("programs.p11Format"),
      price: "On request",
      desc: t("programs.p11Desc"),
      img: "/images/peoples/library.webp",
      formUrl: DEFAULT_FORM,
    },
    {
      title: t("programs.p12Title"),
      level: "immersion",
      duration: t("programs.p12Duration"),
      format: t("programs.p12Format"),
      price: "Custom",
      desc: t("programs.p12Desc"),
      img: "/images/peoples/immersion-girl.webp",
      formUrl: DEFAULT_FORM,
    },
    {
      title: t("programs.p13Title"),
      level: "special",
      duration: t("programs.p13Duration"),
      format: t("programs.p13Format"),
      price: "On request",
      desc: t("programs.p13Desc"),
      img: "/images/peoples/flag-countries.webp",
      formUrl: DEFAULT_FORM,
    },
    {
      title: t("programs.p14Title"),
      level: "special",
      duration: t("programs.p14Duration"),
      format: t("programs.p14Format"),
      price: "Custom",
      desc: t("programs.p14Desc"),
      img: "/images/peoples/school-boy.webp",
      formUrl: DEFAULT_FORM,
    },
  ];

  const levelLabels: Record<string, string> = {
    a1a2: t("programs.beginner"),
    b1b2: t("programs.intermediate"),
    exam: t("programs.advanced"),
    immersion: t("programs.immersion"),
    special: t("programs.special"),
  };

  const filtered =
    activeFilter === "all"
      ? programs
      : programs.filter((p) => p.level === activeFilter);

  const overviewData = [
    {
      lang: t("programs.overviewLang1"),
      levels: "A1–A2",
      packs: "3 " + t("programs.overviewPacksPerLevel"),
      schedule: t("programs.overviewSchedule1"),
      hours: "32–34h " + t("programs.overviewPerPack"),
      milestone: t("programs.overviewMilestone1"),
    },
    {
      lang: t("programs.overviewLang1"),
      levels: "B1–B2",
      packs: "3 " + t("programs.overviewPacksPerLevel"),
      schedule: t("programs.overviewSchedule1"),
      hours: "46–52h " + t("programs.overviewPerPack"),
      milestone: t("programs.overviewMilestone2"),
    },
    {
      lang: t("programs.overviewLang2"),
      levels: "A1–A2",
      packs: "3 " + t("programs.overviewPacksPerLevel"),
      schedule: t("programs.overviewSchedule1"),
      hours: "32–34h " + t("programs.overviewPerPack"),
      milestone: t("programs.overviewMilestone1"),
    },
    {
      lang: t("programs.overviewLang2"),
      levels: "B1–B2",
      packs: "3 " + t("programs.overviewPacksPerLevel"),
      schedule: t("programs.overviewSchedule1"),
      hours: "46–52h " + t("programs.overviewPerPack"),
      milestone: t("programs.overviewMilestone2"),
    },
    {
      lang: t("programs.overviewLang3"),
      levels: "A1–A2",
      packs: "3 " + t("programs.overviewPacksPerLevel"),
      schedule: t("programs.overviewSchedule1"),
      hours: "32–34h " + t("programs.overviewPerPack"),
      milestone: t("programs.overviewMilestone1"),
    },
    {
      lang: t("programs.overviewLang3"),
      levels: "B1–B2",
      packs: "3 " + t("programs.overviewPacksPerLevel"),
      schedule: t("programs.overviewSchedule1"),
      hours: "46–52h " + t("programs.overviewPerPack"),
      milestone: t("programs.overviewMilestone2"),
    },
    {
      lang: t("programs.overviewLang4"),
      levels: "A1–A2",
      packs: "3 " + t("programs.overviewPacksPerLevel"),
      schedule: t("programs.overviewSchedule1"),
      hours: "32–34h " + t("programs.overviewPerPack"),
      milestone: t("programs.overviewMilestone1"),
    },
    {
      lang: t("programs.overviewLang4"),
      levels: "B1–B2",
      packs: "3 " + t("programs.overviewPacksPerLevel"),
      schedule: t("programs.overviewSchedule1"),
      hours: "46–52h " + t("programs.overviewPerPack"),
      milestone: t("programs.overviewMilestone2"),
    },
    {
      lang: t("programs.overviewLang5"),
      levels: "TEF/TCF/DELF/DALF",
      packs: "1",
      schedule: t("programs.overviewSchedule2"),
      hours: "40h",
      milestone: t("programs.overviewMilestone3"),
    },
    {
      lang: t("programs.overviewLang6"),
      levels: t("programs.overviewCustom"),
      packs: t("programs.overviewCustom"),
      schedule: t("programs.overviewSchedule3"),
      hours: t("programs.overviewCustom"),
      milestone: t("programs.overviewMilestone4"),
    },
    {
      lang: t("programs.overviewLang7"),
      levels: "A1–B2+",
      packs: t("programs.overviewCustom"),
      schedule: t("programs.overviewSchedule4"),
      hours: t("programs.overviewCustom"),
      milestone: t("programs.overviewMilestone5"),
    },
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
          <div className="max-w-[700px]">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-[40px] bg-[#F3FAF5] text-[#003B2D] text-[13px] font-medium mb-6">
              {t("programs.tag")}
            </span>
            <h1 className="text-[32px] sm:text-[48px] lg:text-[64px] font-bold text-[#0A0915] leading-[1.08] tracking-[-0.045em] mb-5">
              {t("programs.pageTitle")}
            </h1>
            <p className="text-[16px] text-[#4F635E] leading-[1.6] max-w-[500px] mb-3">
              {t("programs.subtitle")}
            </p>
            <Link
              href={`/${locale}/programs/cefr`}
              className="inline-flex items-center gap-1.5 text-[#0D883C] text-[14px] font-semibold hover:underline"
            >
              {t("programs.learnMoreCefr")} →
            </Link>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="pb-10">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-[30px]">
          <div className="flex flex-wrap gap-3">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setActiveFilter(f.key)}
                className={`px-5 sm:px-6 py-2.5 rounded-[60px] text-[13px] sm:text-[14px] font-medium transition-all ${
                  activeFilter === f.key
                    ? "bg-[#0D883C] text-white"
                    : "bg-[#F3FAF5] text-[#003B2D] hover:bg-[#0D883C]/10"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Program Cards */}
      <section className="pb-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-[30px]">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((prog, i) => (
              <div
                key={i}
                className="card-gradient-accent group bg-white rounded-[20px] border border-[#EAF0EF] overflow-hidden hover:border-[#0D883C]/40 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative z-10">
                  <div className="aspect-[1.6] overflow-hidden">
                    <img
                      src={prog.img}
                      alt={prog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 sm:p-7">
                    <div className="flex items-center gap-2 mb-4 flex-wrap">
                      <span className="px-3 py-1 rounded-[40px] bg-[#F3FAF5] text-[#003B2D] text-xs font-medium">
                        {levelLabels[prog.level] || prog.level}
                      </span>
                      <span className="px-3 py-1 rounded-[40px] bg-[#F3FAF5] text-[#003B2D] text-xs font-medium">
                        {prog.format}
                      </span>
                    </div>
                    <h3 className="text-[18px] sm:text-[20px] font-semibold text-[#0A0915] leading-[1.3] mb-2">
                      {prog.title}
                    </h3>
                    <p className="text-[14px] text-[#4F635E] leading-[1.6] mb-5">
                      {prog.desc}
                    </p>
                    <div className="flex items-center justify-between mb-5 text-[14px] text-[#4F635E]">
                      <span>
                        {t("programs.duration")}: {prog.duration}
                      </span>
                      <span className="font-semibold text-[#0A0915]">
                        {prog.price}
                      </span>
                    </div>
                    <a
                      href={prog.formUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center px-5 py-3 bg-[#0D883C] text-white rounded-[60px] text-[14px] font-semibold hover:bg-[#10a34a] transition-all"
                    >
                      {t("programs.cta")}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Overview Table */}
      <section className="pb-[120px]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-[30px]">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-[40px] bg-[#F3FAF5] text-[#003B2D] text-[13px] font-medium mb-4">
              {t("programs.overviewTag")}
            </span>
            <h2 className="text-[28px] sm:text-[36px] font-bold text-[#0A0915] mb-3">
              {t("programs.overviewTitle")}
            </h2>
            <p className="text-[15px] text-[#4F635E] leading-[1.6] max-w-[560px] mx-auto">
              {t("programs.overviewSubtitle")}
            </p>
          </div>

          <div className="overflow-x-auto -mx-4 px-4 sm:-mx-0 sm:px-0">
            <table className="w-full min-w-[800px] border-collapse">
              <thead>
                <tr className="bg-[#003B2D] text-white">
                  <th className="text-left p-3 sm:p-4 text-[12px] sm:text-[13px] font-semibold rounded-tl-[12px]">
                    {t("programs.overviewColLang")}
                  </th>
                  <th className="text-left p-3 sm:p-4 text-[12px] sm:text-[13px] font-semibold">
                    {t("programs.overviewColLevels")}
                  </th>
                  <th className="text-center p-3 sm:p-4 text-[12px] sm:text-[13px] font-semibold">
                    {t("programs.overviewColPacks")}
                  </th>
                  <th className="text-left p-3 sm:p-4 text-[12px] sm:text-[13px] font-semibold">
                    {t("programs.overviewColSchedule")}
                  </th>
                  <th className="text-center p-3 sm:p-4 text-[12px] sm:text-[13px] font-semibold">
                    {t("programs.overviewColHours")}
                  </th>
                  <th className="text-left p-3 sm:p-4 text-[12px] sm:text-[13px] font-semibold rounded-tr-[12px]">
                    {t("programs.overviewColMilestone")}
                  </th>
                </tr>
              </thead>
              <tbody>
                {overviewData.map((row, i) => (
                  <tr
                    key={i}
                    className={`border-b border-[#EAF0EF] ${i % 2 === 0 ? "bg-[#F9FDFB]" : "bg-white"} hover:bg-[#F3FAF5] transition-colors`}
                  >
                    <td className="p-3 sm:p-4 text-[13px] sm:text-[14px] font-semibold text-[#0A0915]">
                      {row.lang}
                    </td>
                    <td className="p-3 sm:p-4 text-[13px] sm:text-[14px] text-[#4F635E]">
                      {row.levels}
                    </td>
                    <td className="p-3 sm:p-4 text-center text-[13px] sm:text-[14px] text-[#4F635E]">
                      {row.packs}
                    </td>
                    <td className="p-3 sm:p-4 text-[13px] sm:text-[14px] text-[#4F635E]">
                      {row.schedule}
                    </td>
                    <td className="p-3 sm:p-4 text-center">
                      <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-[#F3FAF5] text-[#0D883C] text-[12px] sm:text-[13px] font-semibold">
                        {row.hours}
                      </span>
                    </td>
                    <td className="p-3 sm:p-4 text-[13px] sm:text-[14px] text-[#4F635E]">
                      {row.milestone}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}
