"use client";

import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";

export default function BlogPage() {
  const t = useTranslations();
  const locale = useLocale();

  const posts = [
    { title: t("blog.p1Title"), desc: t("blog.p1Desc"), date: t("blog.p1Date"), tag: t("blog.p1Tag"), img: "/images/hero-main.png" },
    { title: t("blog.p2Title"), desc: t("blog.p2Desc"), date: t("blog.p2Date"), tag: t("blog.p2Tag"), img: "/images/features-person.png" },
    { title: t("blog.p3Title"), desc: t("blog.p3Desc"), date: t("blog.p3Date"), tag: t("blog.p3Tag"), img: "/images/about-person.png" },
    { title: t("blog.p4Title"), desc: t("blog.p4Desc"), date: t("blog.p4Date"), tag: t("blog.p4Tag"), img: "/images/hero-tall.png" },
    { title: t("blog.p5Title"), desc: t("blog.p5Desc"), date: t("blog.p5Date"), tag: t("blog.p5Tag"), img: "/images/faq-person.png" },
    { title: t("blog.p6Title"), desc: t("blog.p6Desc"), date: t("blog.p6Date"), tag: t("blog.p6Tag"), img: "/images/project-1.png" },
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
          <div className="max-w-[700px]">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-[40px] bg-[#F3FAF5] text-[#003B2D] text-[13px] font-medium mb-6">{t("blog.tag")}</span>
            <h1 className="text-[36px] sm:text-[48px] lg:text-[64px] font-bold text-[#0A0915] leading-[1.08] tracking-[-0.045em] mb-5">
              {t("blog.pageTitle")}
            </h1>
            <p className="text-[16px] text-[#4F635E] leading-[1.6] max-w-[500px]">{t("blog.subtitle")}</p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="pb-[120px]">
        <div className="max-w-[1280px] mx-auto px-[30px]">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <article key={i} className="group bg-white rounded-[20px] border border-[#EAF0EF] overflow-hidden hover:border-[#0D883C]/40 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-[1.6] overflow-hidden">
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-7">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-[40px] bg-[#F3FAF5] text-[#003B2D] text-xs font-medium">{post.tag}</span>
                    <span className="text-[13px] text-[#4F635E]">{post.date}</span>
                  </div>
                  <h3 className="text-[18px] font-semibold text-[#0A0915] leading-[1.3] mb-2">{post.title}</h3>
                  <p className="text-[14px] text-[#4F635E] leading-[1.6]">{post.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
