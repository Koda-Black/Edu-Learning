"use client";

import { useState, useEffect, useCallback } from "react";
import { useTranslations } from "next-intl";
import { getWhatsAppUrl } from "@/lib/whatsapp";

interface CorporateFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CorporateConsultationForm({
  isOpen,
  onClose,
}: CorporateFormProps) {
  const t = useTranslations();

  const [trainingType, setTrainingType] = useState<"corporate" | "personal">(
    "corporate",
  );
  const [mode, setMode] = useState<"online" | "hybrid" | "physical">("online");
  const [sessionsPerWeek, setSessionsPerWeek] = useState(2);
  const [hoursPerSession, setHoursPerSession] = useState(2);
  const [trainees, setTrainees] = useState(10);
  const [timeOfDay, setTimeOfDay] = useState<
    "morning" | "afternoon" | "evening"
  >("morning");
  const [companyName, setCompanyName] = useState("");
  const [contactName, setContactName] = useState("");
  const [email, setEmail] = useState("");
  const [comments, setComments] = useState("");
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const calculatePrice = useCallback(() => {
    // Base rate per hour
    const baseRate = trainingType === "corporate" ? 5000 : 3000; // Naira

    // Mode multiplier
    const modeMultiplier = mode === "online" ? 1 : mode === "hybrid" ? 1.5 : 2;

    // Trainee factor: base for up to 5, then +500 per additional 5 trainees
    const traineeExtra =
      trainingType === "corporate"
        ? Math.max(0, Math.ceil((trainees - 5) / 5)) * 500
        : 0;

    // Cost per session
    const costPerSession =
      (baseRate + traineeExtra) * hoursPerSession * modeMultiplier;

    // Weekly cost
    const weeklyCost = costPerSession * sessionsPerWeek;

    // Monthly cost (4 weeks)
    const monthlyCost = weeklyCost * 4;

    return {
      costPerSession: Math.round(costPerSession),
      weeklyCost: Math.round(weeklyCost),
      monthlyCost: Math.round(monthlyCost),
    };
  }, [trainingType, mode, sessionsPerWeek, hoursPerSession, trainees]);

  const prices = calculatePrice();

  const handleSubmit = async () => {
    setStatus("sending");

    const data = {
      type: "corporate_consultation",
      trainingType,
      mode,
      sessionsPerWeek,
      hoursPerSession,
      trainees,
      timeOfDay,
      companyName: companyName.replace(/[<>]/g, ""),
      contactName: contactName.replace(/[<>]/g, ""),
      email: email.replace(/[<>]/g, ""),
      comments: comments.replace(/[<>]/g, ""),
      estimatedMonthly: prices.monthlyCost,
    };

    try {
      await fetch("/api/corporate-consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const modeLabel =
        mode === "online"
          ? "Online"
          : mode === "hybrid"
            ? "Hybrid"
            : "Physical";
      const typeLabel = trainingType === "corporate" ? "Corporate" : "Personal";
      const timeLabel =
        timeOfDay === "morning"
          ? "Morning"
          : timeOfDay === "afternoon"
            ? "Afternoon"
            : "Evening";
      const msg = `Hi, I'm interested in a ${typeLabel} ${modeLabel} language training program for ${trainees} people, ${sessionsPerWeek} times a week, ${hoursPerSession} hours per session (${timeLabel}). Estimated monthly cost: ₦${prices.monthlyCost.toLocaleString()}. ${companyName ? `Company: ${companyName}. ` : ""}${comments ? `Note: ${comments}` : ""}`;

      window.open(getWhatsAppUrl(msg), "_blank");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const formatNaira = (n: number) => `₦${n.toLocaleString()}`;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      <div
        className="relative bg-white rounded-[20px] w-full max-w-[600px] max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-[#EAF0EF] px-6 py-4 flex items-center justify-between rounded-t-[20px] z-10">
          <h2 className="text-[20px] font-bold text-[#0A0915]">
            {t("corporate.cta")}
          </h2>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#F3FAF5] flex items-center justify-center hover:bg-red-50 transition"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Training Type */}
          <div>
            <label className="block text-sm font-medium text-[#003B2D] mb-3">
              Training Type
            </label>
            <div className="grid grid-cols-2 gap-3">
              {(["corporate", "personal"] as const).map((type) => (
                <button
                  key={type}
                  onClick={() => setTrainingType(type)}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${trainingType === type ? "bg-[#0D883C] text-white" : "bg-[#F3FAF5] text-[#003B2D] hover:bg-[#0D883C]/10"}`}
                >
                  {type === "corporate" ? "Corporate" : "Personal"}
                </button>
              ))}
            </div>
          </div>

          {/* Mode */}
          <div>
            <label className="block text-sm font-medium text-[#003B2D] mb-3">
              Training Mode
            </label>
            <div className="grid grid-cols-3 gap-3">
              {(["online", "hybrid", "physical"] as const).map((m) => (
                <button
                  key={m}
                  onClick={() => setMode(m)}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-all capitalize ${mode === m ? "bg-[#0D883C] text-white" : "bg-[#F3FAF5] text-[#003B2D] hover:bg-[#0D883C]/10"}`}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>

          {/* Sessions per week slider */}
          <div>
            <label className="block text-sm font-medium text-[#003B2D] mb-2">
              Sessions per Week:{" "}
              <span className="text-[#0D883C] font-bold">
                {sessionsPerWeek}
              </span>
            </label>
            <input
              type="range"
              min={1}
              max={7}
              value={sessionsPerWeek}
              onChange={(e) => setSessionsPerWeek(Number(e.target.value))}
              className="w-full h-2 rounded-full appearance-none bg-[#EAF0EF] accent-[#0D883C] cursor-pointer"
            />
            <div className="flex justify-between text-xs text-[#4F635E] mt-1">
              <span>1</span>
              <span>7</span>
            </div>
          </div>

          {/* Hours per session slider */}
          <div>
            <label className="block text-sm font-medium text-[#003B2D] mb-2">
              Hours per Session:{" "}
              <span className="text-[#0D883C] font-bold">
                {hoursPerSession}
              </span>
            </label>
            <input
              type="range"
              min={1}
              max={8}
              value={hoursPerSession}
              onChange={(e) => setHoursPerSession(Number(e.target.value))}
              className="w-full h-2 rounded-full appearance-none bg-[#EAF0EF] accent-[#0D883C] cursor-pointer"
            />
            <div className="flex justify-between text-xs text-[#4F635E] mt-1">
              <span>1</span>
              <span>8</span>
            </div>
          </div>

          {/* Trainees slider */}
          <div>
            <label className="block text-sm font-medium text-[#003B2D] mb-2">
              Number of Trainees:{" "}
              <span className="text-[#0D883C] font-bold">{trainees}</span>
            </label>
            <input
              type="range"
              min={1}
              max={100}
              value={trainees}
              onChange={(e) => setTrainees(Number(e.target.value))}
              className="w-full h-2 rounded-full appearance-none bg-[#EAF0EF] accent-[#0D883C] cursor-pointer"
            />
            <div className="flex justify-between text-xs text-[#4F635E] mt-1">
              <span>1</span>
              <span>100</span>
            </div>
          </div>

          {/* Time of Day */}
          <div>
            <label className="block text-sm font-medium text-[#003B2D] mb-3">
              Preferred Time
            </label>
            <div className="grid grid-cols-3 gap-3">
              {(["morning", "afternoon", "evening"] as const).map((td) => (
                <button
                  key={td}
                  onClick={() => setTimeOfDay(td)}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-all capitalize ${timeOfDay === td ? "bg-[#0D883C] text-white" : "bg-[#F3FAF5] text-[#003B2D] hover:bg-[#0D883C]/10"}`}
                >
                  {td}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[#003B2D] mb-2">
                Company Name
              </label>
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                maxLength={100}
                className="w-full px-4 py-3 rounded-xl bg-[#F3FAF5] border border-[#EAF0EF] text-sm text-[#0A0915] focus:outline-none focus:border-[#0D883C] transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#003B2D] mb-2">
                Contact Name *
              </label>
              <input
                type="text"
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                required
                maxLength={100}
                className="w-full px-4 py-3 rounded-xl bg-[#F3FAF5] border border-[#EAF0EF] text-sm text-[#0A0915] focus:outline-none focus:border-[#0D883C] transition"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-[#003B2D] mb-2">
              Email *
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              maxLength={200}
              className="w-full px-4 py-3 rounded-xl bg-[#F3FAF5] border border-[#EAF0EF] text-sm text-[#0A0915] focus:outline-none focus:border-[#0D883C] transition"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#003B2D] mb-2">
              Additional Comments
            </label>
            <textarea
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              maxLength={1000}
              rows={3}
              className="w-full px-4 py-3 rounded-xl bg-[#F3FAF5] border border-[#EAF0EF] text-sm text-[#0A0915] focus:outline-none focus:border-[#0D883C] transition resize-none"
            />
          </div>

          {/* Price Estimate */}
          <div className="bg-[#F3FAF5] rounded-2xl p-6 space-y-3">
            <div className="flex justify-between text-sm text-[#4F635E]">
              <span>Per Session</span>
              <span className="font-semibold text-[#0A0915]">
                {formatNaira(prices.costPerSession)}
              </span>
            </div>
            <div className="flex justify-between text-sm text-[#4F635E]">
              <span>Weekly</span>
              <span className="font-semibold text-[#0A0915]">
                {formatNaira(prices.weeklyCost)}
              </span>
            </div>
            <div className="h-px bg-[#EAF0EF]" />
            <div className="flex justify-between">
              <span className="text-sm font-medium text-[#003B2D]">
                Estimated Monthly
              </span>
              <span className="text-2xl font-bold text-[#0D883C]">
                {formatNaira(prices.monthlyCost)}
              </span>
            </div>
            <p className="text-xs text-amber-600 bg-amber-50 rounded-lg p-3 mt-2">
              ⚠️ This is an estimated amount and not the final price. The actual
              cost may vary based on specific requirements and assessment.
            </p>
          </div>

          {/* Submit */}
          <button
            onClick={handleSubmit}
            disabled={status === "sending" || !contactName || !email}
            className="w-full px-7 py-4 bg-[#0D883C] text-white rounded-[60px] text-[15px] font-semibold hover:bg-[#10a34a] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {status === "sending" ? "Sending..." : t("navigation.getInTouch")}
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
          {status === "success" && (
            <p className="text-sm text-[#0D883C] text-center">
              ✓ Request submitted! WhatsApp message opened.
            </p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-500 text-center">
              Something went wrong. Please try again.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
