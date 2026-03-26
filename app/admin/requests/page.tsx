"use client";
import { useState, useEffect } from "react";

interface StoredRequest {
  id: string;
  type: "quote" | "corporate" | "registration";
  data: Record<string, unknown>;
  createdAt: string;
}

export default function RequestsAdmin() {
  const [requests, setRequests] = useState<StoredRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>("all");
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/admin/requests")
      .then((r) => r.json())
      .then(setRequests)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this request?")) return;
    const res = await fetch(`/api/admin/requests?id=${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      const data = await res.json();
      setRequests(data);
    }
  };

  const filtered =
    filter === "all" ? requests : requests.filter((r) => r.type === filter);

  const typeColors: Record<string, string> = {
    quote: "bg-purple-100 text-purple-700",
    corporate: "bg-blue-100 text-blue-700",
    registration: "bg-green-100 text-green-700",
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Requests</h1>
        <span className="text-sm text-gray-500">{filtered.length} total</span>
      </div>

      {/* Filters */}
      <div className="flex gap-2 mb-6">
        {["all", "quote", "corporate", "registration"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
              filter === f
                ? "bg-green-600 text-white"
                : "bg-white text-gray-600 border hover:bg-gray-50"
            }`}
          >
            {f === "all" ? "All" : f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="space-y-3">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 border animate-pulse"
            >
              <div className="h-5 bg-gray-200 rounded w-48 mb-2" />
              <div className="h-4 bg-gray-200 rounded w-32" />
            </div>
          ))}
        </div>
      ) : filtered.length === 0 ? (
        <div className="bg-white rounded-xl p-12 border text-center text-gray-500">
          <p className="text-4xl mb-3">📭</p>
          <p>No requests yet.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((req) => (
            <div
              key={req.id}
              className="bg-white rounded-xl border hover:border-green-200 transition overflow-hidden"
            >
              <div
                className="p-5 cursor-pointer"
                onClick={() => setExpanded(expanded === req.id ? null : req.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span
                      className={`px-2 py-1 text-xs rounded-full font-medium ${typeColors[req.type] || "bg-gray-100"}`}
                    >
                      {req.type}
                    </span>
                    <span className="text-sm font-medium text-gray-800">
                      {(req.data.contactName as string) ||
                        (req.data.name as string) ||
                        (req.data.email as string) ||
                        "Unknown"}
                    </span>
                    <span className="text-xs text-gray-400">
                      {new Date(req.createdAt).toLocaleString()}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDelete(req.id);
                      }}
                      className="text-xs text-red-500 hover:underline"
                    >
                      Delete
                    </button>
                    <span className="text-gray-400 text-sm">
                      {expanded === req.id ? "▲" : "▼"}
                    </span>
                  </div>
                </div>
              </div>
              {expanded === req.id && (
                <div className="px-5 pb-5 border-t">
                  <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {Object.entries(req.data).map(([key, value]) => (
                      <div key={key}>
                        <span className="text-xs font-medium text-gray-500 uppercase">
                          {key.replace(/([A-Z])/g, " $1")}
                        </span>
                        <p className="text-sm text-gray-800 mt-0.5">
                          {String(value)}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
