"use client";

import { useTranslations, useLocale } from "next-intl";
import { QuoteRequestForm } from "@/components";

export default function ContactPage() {
  const t = useTranslations();
  const locale = useLocale();

  const contactMethods = [
    {
      title: t("contact.email"),
      value: "info@edulearning.com",
      href: "mailto:info@edulearning.com",
      icon: "email",
    },
    {
      title: t("contact.whatsapp"),
      value: "+234 810 083 5573",
      href: "https://wa.me/2348100835573?text=Hi%2C%20I%27d%20like%20to%20inquire%20about%20Edu%20Learning%20services",
      icon: "phone",
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
                {t("contact.tag")}
              </span>
              <h1 className="text-[36px] sm:text-[48px] lg:text-[64px] font-bold text-[#0A0915] leading-[1.08] tracking-[-0.045em] mb-5">
                {t("contact.pageTitle")}
              </h1>
              <p className="text-[16px] text-[#4F635E] leading-[1.6] max-w-[500px]">
                {t("contact.subtitle")}
              </p>
            </div>
            <div className="hidden lg:block flex-1">
              <img
                src="/images/faq-person.png"
                alt="Contact"
                className="w-full max-w-[400px] rounded-[20px] ml-auto"
                style={{ transform: "scaleX(-1)" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="pb-12">
        <div className="max-w-[1280px] mx-auto px-[30px]">
          <div className="grid sm:grid-cols-2 gap-6 max-w-[700px]">
            {contactMethods.map((m, i) => (
              <a
                key={i}
                href={m.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-[20px] border border-[#EAF0EF] p-7 hover:border-[#0D883C]/40 hover:shadow-lg transition-all duration-300 flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-[#F3FAF5] flex items-center justify-center text-[#0D883C] flex-shrink-0">
                  {m.icon === "email" ? (
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
                  ) : (
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
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                      />
                    </svg>
                  )}
                </div>
                <div>
                  <h3 className="text-[16px] font-semibold text-[#0A0915] mb-1">
                    {m.title}
                  </h3>
                  <p className="text-[14px] text-[#4F635E]">{m.value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-[60px] lg:py-[120px]">
        <div className="max-w-[800px] mx-auto px-[30px]">
          <div className="bg-[#F3FAF5] rounded-[20px] p-8 lg:p-10">
            <h2 className="text-[28px] sm:text-[36px] lg:text-[46px] font-bold text-[#0A0915] leading-[1.2] tracking-[-0.04em] mb-5 text-center">
              {t("contact.form")}
            </h2>
            <p className="text-[16px] text-[#4F635E] leading-[1.6] text-center mb-8">
              {t("contact.formDesc")}
            </p>
            <QuoteRequestForm />
          </div>
        </div>
      </section>
    </main>
  );
}
