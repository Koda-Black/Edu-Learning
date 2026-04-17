"use client";

import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";

export default function TermsOfServicePage() {
  const t = useTranslations("terms");
  const locale = useLocale();

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[200px] right-[100px] w-[600px] h-[800px] opacity-10">
            <div className="absolute top-0 left-[100px] w-[300px] h-[600px] rounded-full bg-[#003B2D] blur-[80px]" />
          </div>
        </div>
        <div className="max-w-[800px] mx-auto px-4 sm:px-[30px] relative z-10">
          <h1 className="text-[32px] sm:text-[44px] font-bold text-[#0A0915] leading-[1.1] tracking-[-0.03em] mb-4">
            {t("title")}
          </h1>
          <p className="text-[15px] text-[#4F635E] leading-[1.6]">
            {t("lastUpdated")}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24">
        <div className="max-w-[800px] mx-auto px-4 sm:px-[30px]">
          <div className="prose prose-green max-w-none space-y-8">
            {/* Introduction */}
            <div>
              <p className="text-[15px] text-[#4F635E] leading-[1.8]">
                {t("intro")}
              </p>
            </div>

            {/* Section 1 */}
            <div>
              <h2 className="text-[22px] font-bold text-[#0A0915] mb-3">
                {t("s1Title")}
              </h2>
              <p className="text-[15px] text-[#4F635E] leading-[1.8]">
                {t("s1Desc")}
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-[22px] font-bold text-[#0A0915] mb-3">
                {t("s2Title")}
              </h2>
              <p className="text-[15px] text-[#4F635E] leading-[1.8]">
                {t("s2Desc")}
              </p>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-[22px] font-bold text-[#0A0915] mb-3">
                {t("s3Title")}
              </h2>
              <p className="text-[15px] text-[#4F635E] leading-[1.8]">
                {t("s3Desc")}
              </p>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-[22px] font-bold text-[#0A0915] mb-3">
                {t("s4Title")}
              </h2>
              <p className="text-[15px] text-[#4F635E] leading-[1.8]">
                {t("s4Desc")}
              </p>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-[22px] font-bold text-[#0A0915] mb-3">
                {t("s5Title")}
              </h2>
              <p className="text-[15px] text-[#4F635E] leading-[1.8]">
                {t("s5Desc")}
              </p>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="text-[22px] font-bold text-[#0A0915] mb-3">
                {t("s6Title")}
              </h2>
              <p className="text-[15px] text-[#4F635E] leading-[1.8]">
                {t("s6Desc")}
              </p>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="text-[22px] font-bold text-[#0A0915] mb-3">
                {t("s7Title")}
              </h2>
              <p className="text-[15px] text-[#4F635E] leading-[1.8]">
                {t("s7Desc")}
              </p>
            </div>

            {/* Section 8: Contact */}
            <div>
              <h2 className="text-[22px] font-bold text-[#0A0915] mb-3">
                {t("s8Title")}
              </h2>
              <p className="text-[15px] text-[#4F635E] leading-[1.8]">
                {t("s8Desc")}
              </p>
              <a
                href="mailto:contact@edulearningimmersion.org"
                className="inline-flex items-center gap-2 mt-3 text-[#0D883C] font-semibold hover:underline"
              >
                contact@edulearningimmersion.org
              </a>
            </div>
          </div>

          {/* Back link */}
          <div className="mt-12 pt-8 border-t border-[#EAF0EF]">
            <Link
              href={`/${locale}`}
              className="inline-flex items-center gap-2 text-[#0D883C] text-[14px] font-semibold hover:underline"
            >
              ← {t("backHome")}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
