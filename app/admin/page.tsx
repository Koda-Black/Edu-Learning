"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

interface DashboardStats {
  totalRequests: number;
  quoteRequests: number;
  corporateRequests: number;
  registrations: number;
  blogPosts: number;
  emailContacts: number;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/stats")
      .then((r) => r.json())
      .then(setStats)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const cards = stats
    ? [
        {
          label: "Total Requests",
          value: stats.totalRequests,
          icon: "📨",
          color: "blue",
        },
        {
          label: "Quote Requests",
          value: stats.quoteRequests,
          icon: "📄",
          color: "purple",
        },
        {
          label: "Corporate",
          value: stats.corporateRequests,
          icon: "🏢",
          color: "green",
        },
        {
          label: "Registrations",
          value: stats.registrations,
          icon: "🎓",
          color: "orange",
        },
        {
          label: "Blog Posts",
          value: stats.blogPosts,
          icon: "📝",
          color: "pink",
        },
        {
          label: "Email Contacts",
          value: stats.emailContacts,
          icon: "📧",
          color: "teal",
        },
      ]
    : [];

  const colorMap: Record<string, string> = {
    blue: "bg-blue-50 text-blue-700 border-blue-200",
    purple: "bg-purple-50 text-purple-700 border-purple-200",
    green: "bg-green-50 text-green-700 border-green-200",
    orange: "bg-orange-50 text-orange-700 border-orange-200",
    pink: "bg-pink-50 text-pink-700 border-pink-200",
    teal: "bg-teal-50 text-teal-700 border-teal-200",
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Dashboard</h1>
      <p className="text-gray-500 mb-8">
        Welcome to the Edu Learning admin panel
      </p>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 border animate-pulse"
            >
              <div className="h-4 bg-gray-200 rounded w-24 mb-3" />
              <div className="h-8 bg-gray-200 rounded w-16" />
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cards.map((card) => (
            <div
              key={card.label}
              className={`rounded-xl p-6 border ${colorMap[card.color]}`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium opacity-80">
                  {card.label}
                </span>
                <span className="text-2xl">{card.icon}</span>
              </div>
              <p className="text-3xl font-bold">{card.value}</p>
            </div>
          ))}
        </div>
      )}

      <div className="mt-8 bg-white rounded-xl p-6 border">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Quick Actions
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <Link
            href="/admin/blog"
            className="flex items-center gap-3 p-4 rounded-lg bg-gray-50 hover:bg-green-50 transition"
          >
            <span className="text-xl">✏️</span>
            <span className="text-sm font-medium text-gray-700">
              New Blog Post
            </span>
          </Link>
          <Link
            href="/admin/requests"
            className="flex items-center gap-3 p-4 rounded-lg bg-gray-50 hover:bg-green-50 transition"
          >
            <span className="text-xl">📋</span>
            <span className="text-sm font-medium text-gray-700">
              View Requests
            </span>
          </Link>
          <Link
            href="/admin/pricing"
            className="flex items-center gap-3 p-4 rounded-lg bg-gray-50 hover:bg-green-50 transition"
          >
            <span className="text-xl">💰</span>
            <span className="text-sm font-medium text-gray-700">
              Update Pricing
            </span>
          </Link>
          <Link
            href="/admin/emails"
            className="flex items-center gap-3 p-4 rounded-lg bg-gray-50 hover:bg-green-50 transition"
          >
            <span className="text-xl">📨</span>
            <span className="text-sm font-medium text-gray-700">
              Send Emails
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
