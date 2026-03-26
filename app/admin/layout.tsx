"use client";
import { useState, useEffect, ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { href: "/admin", label: "Dashboard", icon: "📊" },
  { href: "/admin/blog", label: "Blog Posts", icon: "📝" },
  { href: "/admin/pricing", label: "Pricing", icon: "💰" },
  { href: "/admin/requests", label: "Requests", icon: "📨" },
  { href: "/admin/emails", label: "Email List", icon: "📧" },
];

export default function AdminLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const auth = sessionStorage.getItem("admin_auth");
    if (auth === "true") setAuthenticated(true);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple password check — replace with proper auth in production
    if (password === "eduadmin2024") {
      sessionStorage.setItem("admin_auth", "true");
      setAuthenticated(true);
      setError("");
    } else {
      setError("Invalid password");
    }
  };

  if (!authenticated) {
    return (
      <html lang="en">
        <body className="bg-gray-100 min-h-screen flex items-center justify-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-sm">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              Admin Login
            </h1>
            <p className="text-gray-500 text-sm mb-6">
              Edu Learning & Immersion
            </p>
            <form onSubmit={handleLogin}>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg mb-3 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
              />
              {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
              >
                Login
              </button>
            </form>
          </div>
        </body>
      </html>
    );
  }

  return (
    <html lang="en">
      <body className="bg-gray-100">
        <div className="flex min-h-screen">
          {/* Mobile menu button */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden fixed top-4 left-4 z-50 bg-white rounded-lg p-2 shadow-md"
          >
            <span className="text-xl">{sidebarOpen ? "✕" : "☰"}</span>
          </button>

          {/* Sidebar */}
          <aside
            className={`fixed lg:static inset-y-0 left-0 z-40 w-64 bg-white shadow-lg transform transition-transform duration-200 ${
              sidebarOpen
                ? "translate-x-0"
                : "-translate-x-full lg:translate-x-0"
            }`}
          >
            <div className="p-6 border-b">
              <Link href="/admin" className="flex items-center gap-3">
                <img
                  src="/images/logo/LOGO.png"
                  alt="Edu Learning"
                  className="w-10 h-10 rounded-xl object-contain"
                />
                <div>
                  <h2 className="font-bold text-gray-800">EduLearning</h2>
                  <p className="text-xs text-gray-500">Admin Panel</p>
                </div>
              </Link>
            </div>
            <nav className="p-4 space-y-1">
              {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setSidebarOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition ${
                      isActive
                        ? "bg-green-50 text-green-700"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    <span>{item.icon}</span>
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <div className="absolute bottom-4 left-4 right-4">
              <button
                onClick={() => {
                  sessionStorage.removeItem("admin_auth");
                  setAuthenticated(false);
                }}
                className="w-full text-left px-4 py-3 text-sm text-gray-500 hover:text-red-600 transition"
              >
                🚪 Logout
              </button>
              <Link
                href="/en"
                className="block px-4 py-2 text-xs text-gray-400 hover:text-green-600"
              >
                ← Back to Website
              </Link>
            </div>
          </aside>

          {/* Main content */}
          <main className="flex-1 p-4 lg:p-8 lg:ml-0">
            <div className="max-w-6xl mx-auto">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}
