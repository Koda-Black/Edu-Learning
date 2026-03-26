"use client";
import { useState, useEffect } from "react";

interface PricingConfig {
  homepage: { basic: string; professional: string; premium: string };
  programs: Record<string, string>;
  corporate: { corporateRate: number; personalRate: number };
  translation: { simple: number; technical: number; legal: number };
}

export default function PricingAdmin() {
  const [pricing, setPricing] = useState<PricingConfig | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetch("/api/admin/pricing")
      .then((r) => r.json())
      .then(setPricing)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const handleSave = async () => {
    if (!pricing) return;
    setSaving(true);
    try {
      const res = await fetch("/api/admin/pricing", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(pricing),
      });
      if (res.ok) {
        setSaved(true);
        setTimeout(() => setSaved(false), 3000);
      }
    } catch (err) {
      console.error(err);
    }
    setSaving(false);
  };

  if (loading || !pricing) {
    return (
      <div>
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Pricing Management
        </h1>
        <div className="bg-white rounded-xl p-6 border animate-pulse">
          <div className="h-6 bg-gray-200 rounded w-48 mb-4" />
          <div className="space-y-3">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-10 bg-gray-200 rounded" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Pricing Management</h1>
        <button
          onClick={handleSave}
          disabled={saving}
          className={`px-6 py-2 rounded-lg font-medium transition ${
            saved
              ? "bg-green-100 text-green-700"
              : "bg-green-600 text-white hover:bg-green-700"
          } disabled:opacity-50`}
        >
          {saving ? "Saving..." : saved ? "✓ Saved!" : "Save All Changes"}
        </button>
      </div>

      {/* Homepage Plans */}
      <div className="bg-white rounded-xl p-6 border mb-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Homepage Plans
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {(["basic", "professional", "premium"] as const).map((plan) => (
            <div key={plan}>
              <label className="block text-sm font-medium text-gray-600 mb-1 capitalize">
                {plan}
              </label>
              <input
                type="text"
                value={pricing.homepage[plan]}
                onChange={(e) =>
                  setPricing({
                    ...pricing,
                    homepage: { ...pricing.homepage, [plan]: e.target.value },
                  })
                }
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Program Prices */}
      <div className="bg-white rounded-xl p-6 border mb-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Program Prices
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(pricing.programs).map(([key, val]) => (
            <div key={key}>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                {key
                  .replace(/-/g, " ")
                  .replace(/\b\w/g, (c) => c.toUpperCase())}
              </label>
              <input
                type="text"
                value={val}
                onChange={(e) =>
                  setPricing({
                    ...pricing,
                    programs: { ...pricing.programs, [key]: e.target.value },
                  })
                }
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Corporate Rates */}
      <div className="bg-white rounded-xl p-6 border mb-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Corporate Training Rates (₦/hour)
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Corporate Rate
            </label>
            <input
              type="number"
              value={pricing.corporate.corporateRate}
              onChange={(e) =>
                setPricing({
                  ...pricing,
                  corporate: {
                    ...pricing.corporate,
                    corporateRate: Number(e.target.value),
                  },
                })
              }
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Personal Rate
            </label>
            <input
              type="number"
              value={pricing.corporate.personalRate}
              onChange={(e) =>
                setPricing({
                  ...pricing,
                  corporate: {
                    ...pricing.corporate,
                    personalRate: Number(e.target.value),
                  },
                })
              }
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
            />
          </div>
        </div>
      </div>

      {/* Translation Rates */}
      <div className="bg-white rounded-xl p-6 border">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Translation Rates (₦/word)
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {(["simple", "technical", "legal"] as const).map((type) => (
            <div key={type}>
              <label className="block text-sm font-medium text-gray-600 mb-1 capitalize">
                {type}
              </label>
              <input
                type="number"
                value={pricing.translation[type]}
                onChange={(e) =>
                  setPricing({
                    ...pricing,
                    translation: {
                      ...pricing.translation,
                      [type]: Number(e.target.value),
                    },
                  })
                }
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
