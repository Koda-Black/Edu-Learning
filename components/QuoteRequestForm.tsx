"use client";

import { useState, useRef } from "react";
import { useTranslations } from "next-intl";

const ALLOWED_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

export function QuoteRequestForm() {
  const t = useTranslations();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    subject: "",
    message: "",
  });
  const [file, setFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    // Sanitize: strip HTML tags
    const sanitized = value.replace(/<[^>]*>/g, "");
    setFormData((prev) => ({ ...prev, [name]: sanitized }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileError("");
    const selected = e.target.files?.[0];
    if (!selected) {
      setFile(null);
      return;
    }

    if (!ALLOWED_TYPES.includes(selected.type)) {
      setFileError("Only PDF and DOC/DOCX files are accepted.");
      setFile(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
      return;
    }
    if (selected.size > MAX_FILE_SIZE) {
      setFileError("File size must be under 10MB.");
      setFile(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
      return;
    }
    // Sanitize filename
    const safeName = selected.name.replace(/[^a-zA-Z0-9._-]/g, "_");
    if (safeName !== selected.name) {
      // Rename by re-creating, but we'll just keep the original file reference
    }
    setFile(selected);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const body = new FormData();
      body.append("name", formData.name.slice(0, 200));
      body.append("email", formData.email.slice(0, 200));
      body.append("whatsapp", formData.whatsapp.slice(0, 30));
      body.append("subject", formData.subject.slice(0, 200));
      body.append("message", formData.message.slice(0, 2000));
      if (file) body.append("file", file);

      const res = await fetch("/api/quote-request", {
        method: "POST",
        body,
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        whatsapp: "",
        subject: "",
        message: "",
      });
      setFile(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
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
            {t("forms.subject")}
          </label>
          <select
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-white border border-[#EAF0EF] text-[#0A0915] text-sm focus:outline-none focus:border-[#0D883C] transition"
          >
            <option value="">Select a subject</option>
            <option value="programs">Language Programs</option>
            <option value="corporate">Corporate Training</option>
            <option value="translation">Translation Services</option>
            <option value="partnerships">Partnerships</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-[#003B2D] mb-2">
          {t("forms.message")}
        </label>
        <textarea
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl bg-white border border-[#EAF0EF] text-[#0A0915] text-sm focus:outline-none focus:border-[#0D883C] transition resize-none"
        />
      </div>
      {/* Document Upload */}
      <div>
        <label className="block text-sm font-medium text-[#003B2D] mb-2">
          {t("forms.uploadFile")}
        </label>
        <div className="relative">
          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            onChange={handleFileChange}
            className="w-full px-4 py-3 rounded-xl bg-white border border-[#EAF0EF] text-[#0A0915] text-sm focus:outline-none focus:border-[#0D883C] transition file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#F3FAF5] file:text-[#003B2D] hover:file:bg-[#0D883C]/10"
          />
        </div>
        {file && (
          <p className="text-xs text-[#0D883C] mt-1">
            📎 {file.name} ({(file.size / 1024).toFixed(0)} KB)
          </p>
        )}
        {fileError && <p className="text-xs text-red-500 mt-1">{fileError}</p>}
        <p className="text-xs text-[#4F635E] mt-1">
          Accepted formats: PDF, DOC, DOCX (max 10MB)
        </p>
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full px-6 py-3.5 bg-[#0D883C] text-white rounded-full text-sm font-semibold hover:bg-[#10a34a] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "sending" ? t("forms.sending") : t("forms.submit")}
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
