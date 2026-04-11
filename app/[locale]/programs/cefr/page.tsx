"use client";

import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { useState } from "react";

const levels = ["A1", "A2", "B1", "B2"] as const;

export default function CEFRPage() {
  const t = useTranslations("cefr");
  const locale = useLocale();
  const [activeLevel, setActiveLevel] = useState<string>("A1");

  const levelMeta: Record<
    string,
    { emoji: string; gradient: string; accent: string }
  > = {
    A1: {
      emoji: "🌱",
      gradient: "from-[#E8F5E9] to-[#F3FAF5]",
      accent: "#0D883C",
    },
    A2: {
      emoji: "🌿",
      gradient: "from-[#E0F2E9] to-[#EDF7F0]",
      accent: "#0B6E31",
    },
    B1: {
      emoji: "🌳",
      gradient: "from-[#D5EBE0] to-[#E8F4EC]",
      accent: "#003B2D",
    },
    B2: {
      emoji: "🏔️",
      gradient: "from-[#CCDFD5] to-[#E3F1E8]",
      accent: "#00261D",
    },
  };

  const skills = ["listening", "reading", "speaking", "writing"] as const;
  const skillIcons: Record<string, string> = {
    listening: "🎧",
    reading: "📖",
    speaking: "🗣️",
    writing: "✍️",
  };

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative pt-32 pb-12 lg:pb-16 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[200px] right-[100px] w-[600px] h-[800px] opacity-15">
            <div className="absolute top-0 left-[100px] w-[300px] h-[600px] rounded-full bg-[#003B2D] blur-[80px]" />
            <div className="absolute top-[200px] left-0 w-[300px] h-[400px] rounded-full bg-[#0D883C] blur-[120px]" />
          </div>
        </div>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-[30px] relative z-10">
          <Link
            href={`/${locale}/programs`}
            className="inline-flex items-center gap-2 text-[#0D883C] text-[14px] font-medium mb-6 hover:underline"
          >
            ← {t("backToPrograms")}
          </Link>
          <div className="max-w-[780px]">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-[40px] bg-[#F3FAF5] text-[#003B2D] text-[13px] font-medium mb-6">
              {t("tag")}
            </span>
            <h1 className="text-[32px] sm:text-[44px] lg:text-[56px] font-bold text-[#0A0915] leading-[1.1] tracking-[-0.04em] mb-5">
              {t("pageTitle")}
            </h1>
            <p className="text-[15px] sm:text-[16px] text-[#4F635E] leading-[1.7] max-w-[640px]">
              {t("intro")}
            </p>
          </div>
        </div>
      </section>

      {/* Level Cards — Visual Selector */}
      <section className="pb-6">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-[30px]">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {levels.map((level) => (
              <button
                key={level}
                onClick={() => setActiveLevel(level)}
                className={`relative rounded-[16px] p-4 sm:p-5 text-left transition-all duration-300 border-2 ${
                  activeLevel === level
                    ? "border-[#0D883C] bg-[#F3FAF5] shadow-lg shadow-[#0D883C]/10 scale-[1.02]"
                    : "border-[#EAF0EF] bg-white hover:border-[#0D883C]/30 hover:shadow-md"
                }`}
              >
                <span className="text-[28px] sm:text-[32px] block mb-2">
                  {levelMeta[level].emoji}
                </span>
                <span
                  className={`block text-[18px] sm:text-[22px] font-bold ${activeLevel === level ? "text-[#0D883C]" : "text-[#0A0915]"}`}
                >
                  {level}
                </span>
                <span className="block text-[12px] sm:text-[13px] text-[#4F635E] font-medium mt-0.5">
                  {t(`${level}.label`)}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Active Level — Description + Skills Side by Side */}
      <section className="py-10 lg:py-14">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-[30px]">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            {/* Left: Description */}
            <div
              className={`flex-1 rounded-[20px] bg-gradient-to-br ${levelMeta[activeLevel].gradient} p-6 sm:p-8`}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[36px]">
                  {levelMeta[activeLevel].emoji}
                </span>
                <div>
                  <h2 className="text-[24px] sm:text-[28px] font-bold text-[#0A0915]">
                    {activeLevel} – {t(`${activeLevel}.label`)}
                  </h2>
                </div>
              </div>
              <p className="text-[14px] sm:text-[15px] text-[#4F635E] leading-[1.75]">
                {t(`${activeLevel}.desc`)}
              </p>
            </div>

            {/* Right: Key Skills as compact grid */}
            <div className="flex-1">
              <h3 className="text-[16px] font-semibold text-[#0A0915] mb-4">
                {t("keySkills")}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {skills.map((skill) => (
                  <div
                    key={skill}
                    className="bg-white rounded-[14px] p-4 border border-[#EAF0EF] hover:border-[#0D883C]/30 transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-[18px]">{skillIcons[skill]}</span>
                      <span className="text-[13px] font-semibold text-[#0A0915]">
                        {t(`skills.${skill}`)}
                      </span>
                    </div>
                    <p className="text-[12px] sm:text-[13px] text-[#4F635E] leading-[1.55]">
                      {t(`${activeLevel}.skill_${skill}`)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-Levels — Horizontal Timeline-style cards */}
      <section className="py-10 lg:py-14 bg-[#FAFDFB]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-[30px]">
          <h3 className="text-[20px] sm:text-[24px] font-bold text-[#0A0915] mb-2">
            {t("subLevels")}
          </h3>
          <p className="text-[14px] text-[#4F635E] mb-8">
            {activeLevel} — {t(`${activeLevel}.label`)}
          </p>
          <div className="grid md:grid-cols-3 gap-5">
            {["1", "2", "3"].map((sub, i) => (
              <div
                key={sub}
                className="bg-white rounded-[18px] p-5 sm:p-6 border border-[#EAF0EF] hover:border-[#0D883C]/30 hover:shadow-lg transition-all duration-300 relative"
              >
                {/* Step number */}
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white text-[14px] font-bold shrink-0"
                    style={{ backgroundColor: levelMeta[activeLevel].accent }}
                  >
                    {activeLevel}.{sub}
                  </span>
                  <h4 className="text-[15px] sm:text-[16px] font-semibold text-[#0A0915] leading-tight">
                    {t(`${activeLevel}.sub${sub}_title`)}
                  </h4>
                </div>
                <ul className="space-y-2 mb-4">
                  {[1, 2, 3].map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-[13px] sm:text-[14px] text-[#4F635E] leading-[1.55]"
                    >
                      <span className="text-[#0D883C] mt-0.5 shrink-0 text-[11px]">
                        ●
                      </span>
                      {t(`${activeLevel}.sub${sub}_p${point}`)}
                    </li>
                  ))}
                </ul>
                <div className="pt-3 border-t border-[#EAF0EF] flex items-center gap-2">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#F3FAF5] text-[#0D883C] text-[12px] font-semibold">
                    {t(`${activeLevel}.sub${sub}_hours`)}
                  </span>
                  <span className="text-[11px] text-[#4F635E]">
                    {t("colHours").toLowerCase()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Hours — Compact Table */}
      <section className="py-14 lg:py-20">
        <div className="max-w-[1080px] mx-auto px-4 sm:px-[30px]">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-[40px] bg-[#F3FAF5] text-[#003B2D] text-[13px] font-medium mb-4">
              📊 {t("tableTitle")}
            </span>
            <h2 className="text-[24px] sm:text-[32px] font-bold text-[#0A0915] mb-3">
              {t("tableSubtitle")}
            </h2>
          </div>

          <div className="overflow-x-auto -mx-4 px-4 sm:-mx-0 sm:px-0">
            <table className="w-full min-w-[600px] border-collapse">
              <thead>
                <tr className="bg-[#003B2D] text-white">
                  <th className="text-left p-3 sm:p-4 text-[12px] sm:text-[13px] font-semibold rounded-tl-[12px]">
                    {t("colLevel")}
                  </th>
                  <th className="text-left p-3 sm:p-4 text-[12px] sm:text-[13px] font-semibold">
                    {t("colSubLevel")}
                  </th>
                  <th className="text-center p-3 sm:p-4 text-[12px] sm:text-[13px] font-semibold">
                    {t("colHours")}
                  </th>
                  <th className="text-left p-3 sm:p-4 text-[12px] sm:text-[13px] font-semibold rounded-tr-[12px]">
                    {t("colSkills")}
                  </th>
                </tr>
              </thead>
              <tbody>
                {levels.map((level) =>
                  ["1", "2", "3"].map((sub, idx) => (
                    <tr
                      key={`${level}-${sub}`}
                      className={`border-b border-[#EAF0EF] ${idx === 0 ? "bg-[#F9FDFB]" : "bg-white"} hover:bg-[#F3FAF5] transition-colors`}
                    >
                      {idx === 0 && (
                        <td
                          rowSpan={3}
                          className="p-3 sm:p-4 text-[13px] sm:text-[14px] font-semibold text-[#0A0915] align-top border-r border-[#EAF0EF]"
                        >
                          <span className="mr-1.5">
                            {levelMeta[level].emoji}
                          </span>
                          {level}
                        </td>
                      )}
                      <td className="p-3 sm:p-4 text-[12px] sm:text-[13px] text-[#0A0915] font-medium">
                        {t(`${level}.sub${sub}_title`)}
                      </td>
                      <td className="p-3 sm:p-4 text-center">
                        <span className="inline-flex items-center justify-center px-2.5 py-0.5 rounded-full bg-[#F3FAF5] text-[#0D883C] text-[12px] font-semibold">
                          {t(`${level}.sub${sub}_hours`)}
                        </span>
                      </td>
                      <td className="p-3 sm:p-4 text-[12px] sm:text-[13px] text-[#4F635E] leading-[1.5] max-w-[280px]">
                        {t(`${level}.sub${sub}_skills`)}
                      </td>
                    </tr>
                  )),
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-[100px] lg:pb-[120px]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-[30px]">
          <div className="bg-[#003B2D] rounded-[24px] p-8 sm:p-12 text-center">
            <h2 className="text-[24px] sm:text-[32px] font-bold text-white mb-4">
              {t("ctaTitle")}
            </h2>
            <p className="text-[15px] text-white/70 leading-[1.6] max-w-[500px] mx-auto mb-8">
              {t("ctaDesc")}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={`/${locale}/programs`}
                className="px-8 py-3.5 bg-[#0D883C] text-white rounded-[60px] text-[14px] font-semibold hover:bg-[#10a34a] transition-all"
              >
                {t("ctaBrowse")}
              </Link>
              <Link
                href={`/${locale}/contact`}
                className="px-8 py-3.5 bg-white/10 text-white border border-white/20 rounded-[60px] text-[14px] font-semibold hover:bg-white/20 transition-all"
              >
                {t("ctaContact")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
