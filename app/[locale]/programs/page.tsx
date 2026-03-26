"use client";

import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { useState } from "react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export default function ProgramsPage() {
  const t = useTranslations();
  const locale = useLocale();
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { key: "all", label: t("programs.allLevels") },
    { key: "beginner", label: t("programs.beginner") },
    { key: "intermediate", label: t("programs.intermediate") },
    { key: "advanced", label: t("programs.advanced") },
  ];

  const programs = [
    {
      title: t("programs.p1Title"),
      level: "beginner",
      duration: t("programs.p1Duration"),
      format: t("programs.p1Format"),
      price: "₦35,000/mo",
      desc: t("programs.p1Desc"),
      img: "/images/hero-main.png",
    },
    {
      title: t("programs.p2Title"),
      level: "beginner",
      duration: t("programs.p2Duration"),
      format: t("programs.p2Format"),
      price: "₦35,000/mo",
      desc: t("programs.p2Desc"),
      img: "/images/about-person.png",
    },
    {
      title: t("programs.p3Title"),
      level: "intermediate",
      duration: t("programs.p3Duration"),
      format: t("programs.p3Format"),
      price: "₦55,000/mo",
      desc: t("programs.p3Desc"),
      img: "/images/features-person.png",
    },
    {
      title: t("programs.p4Title"),
      level: "intermediate",
      duration: t("programs.p4Duration"),
      format: t("programs.p4Format"),
      price: "₦55,000/mo",
      desc: t("programs.p4Desc"),
      img: "/images/hero-tall.png",
    },
    {
      title: t("programs.p5Title"),
      level: "advanced",
      duration: t("programs.p5Duration"),
      format: t("programs.p5Format"),
      price: "₦40,000/mo",
      desc: t("programs.p5Desc"),
      img: "/images/faq-person.png",
    },
    {
      title: t("programs.p6Title"),
      level: "advanced",
      duration: t("programs.p6Duration"),
      format: t("programs.p6Format"),
      price: "₦65,000/mo",
      desc: t("programs.p6Desc"),
      img: "/images/hero-card.png",
    },
    {
      title: t("programs.p7Title"),
      level: "beginner",
      duration: t("programs.p7Duration"),
      format: t("programs.p7Format"),
      price: "₦25,000/mo",
      desc: t("programs.p7Desc"),
      img: "/images/project-1.png",
    },
    {
      title: t("programs.p8Title"),
      level: "intermediate",
      duration: t("programs.p8Duration"),
      format: t("programs.p8Format"),
      price: "Custom",
      desc: t("programs.p8Desc"),
      img: "/images/project-2.png",
    },
    {
      title: t("programs.p9Title"),
      level: "advanced",
      duration: t("programs.p9Duration"),
      format: t("programs.p9Format"),
      price: "₦120,000",
      desc: t("programs.p9Desc"),
      img: "/images/project-3.png",
    },
  ];

  const filtered =
    activeFilter === "all"
      ? programs
      : programs.filter((p) => p.level === activeFilter);

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
          <div className="max-w-[700px]">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-[40px] bg-[#F3FAF5] text-[#003B2D] text-[13px] font-medium mb-6">
              Our Programs
            </span>
            <h1 className="text-[36px] sm:text-[48px] lg:text-[64px] font-bold text-[#0A0915] leading-[1.08] tracking-[-0.045em] mb-5">
              {t("programs.pageTitle")}
            </h1>
            <p className="text-[16px] text-[#4F635E] leading-[1.6] max-w-[500px]">
              {t("programs.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="pb-10">
        <div className="max-w-[1280px] mx-auto px-[30px]">
          <div className="flex flex-wrap gap-3">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setActiveFilter(f.key)}
                className={`px-6 py-2.5 rounded-[60px] text-[14px] font-medium transition-all ${
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
      <section className="pb-[120px]">
        <div className="max-w-[1280px] mx-auto px-[30px]">
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
                  <div className="p-7">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 rounded-[40px] bg-[#F3FAF5] text-[#003B2D] text-xs font-medium">
                        {prog.level === "beginner"
                          ? t("programs.beginner")
                          : prog.level === "intermediate"
                            ? t("programs.intermediate")
                            : t("programs.advanced")}
                      </span>
                      <span className="px-3 py-1 rounded-[40px] bg-[#F3FAF5] text-[#003B2D] text-xs font-medium">
                        {prog.format}
                      </span>
                    </div>
                    <h3 className="text-[20px] font-semibold text-[#0A0915] leading-[1.3] mb-2">
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
                      href={getWhatsAppUrl(
                        `Hi, I'm interested in the ${prog.title} program (${prog.price}). I'd like to register.`,
                      )}
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
    </main>
  );
}
