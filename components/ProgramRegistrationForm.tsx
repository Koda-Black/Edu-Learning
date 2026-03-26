"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

export function ProgramRegistrationForm() {
  const t = useTranslations();
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    program: "",
    level: "",
    schedule: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/program-registration", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        whatsapp: "",
        program: "",
        level: "",
        schedule: "",
        message: "",
      });
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-[#003B2D] mb-2">
            {t("forms.fullName")}
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-white border border-[#EAF0EF] text-[#0A0915] text-sm focus:outline-none focus:border-[#0D883C] transition"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#003B2D] mb-2">
            {t("forms.email")}
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-white border border-[#EAF0EF] text-[#0A0915] text-sm focus:outline-none focus:border-[#0D883C] transition"
          />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-[#003B2D] mb-2">
            {t("forms.whatsapp")}
          </label>
          <input
            type="tel"
            name="whatsapp"
            value={formData.whatsapp}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-white border border-[#EAF0EF] text-[#0A0915] text-sm focus:outline-none focus:border-[#0D883C] transition"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#003B2D] mb-2">
            {t("forms.program")}
          </label>
          <select
            name="program"
            value={formData.program}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-white border border-[#EAF0EF] text-[#0A0915] text-sm focus:outline-none focus:border-[#0D883C] transition"
          >
            <option value="">Select a program</option>
            <option value="general-english">General English</option>
            <option value="general-french">General French</option>
            <option value="business-english">Business English</option>
            <option value="business-french">Business French</option>
            <option value="exam-prep">Exam Preparation</option>
            <option value="intensive">Intensive Immersion</option>
          </select>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-[#003B2D] mb-2">
            {t("forms.level")}
          </label>
          <select
            name="level"
            value={formData.level}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-white border border-[#EAF0EF] text-[#0A0915] text-sm focus:outline-none focus:border-[#0D883C] transition"
          >
            <option value="">Select level</option>
            <option value="beginner">{t("programs.beginner")}</option>
            <option value="intermediate">{t("programs.intermediate")}</option>
            <option value="advanced">{t("programs.advanced")}</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-[#003B2D] mb-2">
            {t("forms.schedule")}
          </label>
          <select
            name="schedule"
            value={formData.schedule}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-white border border-[#EAF0EF] text-[#0A0915] text-sm focus:outline-none focus:border-[#0D883C] transition"
          >
            <option value="">Select schedule</option>
            <option value="morning">Morning (9AM - 12PM)</option>
            <option value="afternoon">Afternoon (1PM - 4PM)</option>
            <option value="evening">Evening (5PM - 8PM)</option>
            <option value="weekend">Weekend</option>
          </select>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-[#003B2D] mb-2">
          {t("forms.message")}
        </label>
        <textarea
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl bg-white border border-[#EAF0EF] text-[#0A0915] text-sm focus:outline-none focus:border-[#0D883C] transition resize-none"
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full px-6 py-3.5 bg-[#0D883C] text-white rounded-full text-sm font-semibold hover:bg-[#10a34a] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "sending" ? t("forms.sending") : t("programs.cta")}
      </button>
      {status === "success" && (
        <div className="bg-[#F3FAF5] text-[#0D883C] rounded-xl p-4 text-sm text-center font-medium">
          {t("forms.success")}
        </div>
      )}
      {status === "error" && (
        <div className="bg-red-50 text-red-600 rounded-xl p-4 text-sm text-center font-medium">
          {t("forms.error")}
        </div>
      )}
    </form>
  );
}
