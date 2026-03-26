"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

export function PriceCalculator() {
  const t = useTranslations();
  const [wordCount, setWordCount] = useState(1000);
  const [docType, setDocType] = useState("simple");
  const [speed, setSpeed] = useState("standard");

  const rates: Record<string, number> = {
    simple: 50,
    technical: 80,
    legal: 100,
  };
  const speedMultipliers: Record<string, number> = {
    standard: 1,
    semiExpress: 1.5,
    express: 2,
  };

  const total = wordCount * rates[docType] * speedMultipliers[speed];

  return (
    <div className="bg-white rounded-[20px] border border-[#EAF0EF] p-8 max-w-xl mx-auto">
      <h3 className="text-xl font-bold text-[#0A0915] mb-6 text-center">
        Price Calculator
      </h3>
      <div className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-[#003B2D] mb-2">
            Word Count
          </label>
          <input
            type="number"
            value={wordCount}
            onChange={(e) =>
              setWordCount(Math.max(0, parseInt(e.target.value) || 0))
            }
            className="w-full px-4 py-3 rounded-xl bg-[#F3FAF5] border border-[#EAF0EF] text-[#0A0915] text-sm focus:outline-none focus:border-[#0D883C] transition"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#003B2D] mb-2">
            {t("translation.documentTypes")}
          </label>
          <div className="flex gap-2">
            {(["simple", "technical", "legal"] as const).map((type) => (
              <button
                key={type}
                onClick={() => setDocType(type)}
                className={`flex-1 px-4 py-2.5 rounded-full text-sm font-medium transition-all ${
                  docType === type
                    ? "bg-[#0D883C] text-white"
                    : "bg-[#F3FAF5] text-[#003B2D] hover:bg-[#0D883C]/10"
                }`}
              >
                {t(`translation.${type}`)}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-[#003B2D] mb-2">
            {t("translation.serviceSpeed")}
          </label>
          <div className="flex gap-2">
            {(["standard", "semiExpress", "express"] as const).map((s) => (
              <button
                key={s}
                onClick={() => setSpeed(s)}
                className={`flex-1 px-4 py-2.5 rounded-full text-sm font-medium transition-all ${
                  speed === s
                    ? "bg-[#0D883C] text-white"
                    : "bg-[#F3FAF5] text-[#003B2D] hover:bg-[#0D883C]/10"
                }`}
              >
                {t(`translation.${s}`)}
              </button>
            ))}
          </div>
        </div>
        <div className="bg-[#F3FAF5] rounded-2xl p-5 text-center">
          <div className="text-sm text-[#4F635E] mb-1">Estimated Price</div>
          <div className="text-3xl font-bold text-[#0D883C]">
            ₦{total.toLocaleString()}
          </div>
        </div>
      </div>
    </div>
  );
}
