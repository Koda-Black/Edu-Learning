"use client";
import { useState, useEffect } from "react";

interface BlogPost {
  id: string;
  title: string;
  titleFr: string;
  slug: string;
  content: string;
  contentFr: string;
  excerpt: string;
  excerptFr: string;
  author: string;
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

const EMPTY_POST: Omit<BlogPost, "id" | "createdAt" | "updatedAt"> = {
  title: "",
  titleFr: "",
  slug: "",
  content: "",
  contentFr: "",
  excerpt: "",
  excerptFr: "",
  author: "Admin",
  published: false,
};

export default function BlogAdmin() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [editing, setEditing] = useState<Partial<BlogPost> | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const fetchPosts = () => {
    fetch("/api/admin/blog")
      .then((r) => r.json())
      .then(setPosts)
      .catch(console.error)
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleSave = async () => {
    if (!editing) return;
    setSaving(true);
    try {
      const res = await fetch("/api/admin/blog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editing),
      });
      if (res.ok) {
        const data = await res.json();
        setPosts(data);
        setEditing(null);
      }
    } catch (err) {
      console.error(err);
    }
    setSaving(false);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this post?")) return;
    const res = await fetch(`/api/admin/blog?id=${id}`, { method: "DELETE" });
    if (res.ok) {
      const data = await res.json();
      setPosts(data);
    }
  };

  const autoSlug = (title: string) =>
    title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .slice(0, 100);

  if (editing) {
    return (
      <div>
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-800">
            {editing.id ? "Edit Post" : "New Post"}
          </h1>
          <button
            onClick={() => setEditing(null)}
            className="text-gray-500 hover:text-gray-700"
          >
            ← Back
          </button>
        </div>

        <div className="bg-white rounded-xl p-6 border space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Title (English)
              </label>
              <input
                type="text"
                value={editing.title || ""}
                onChange={(e) =>
                  setEditing({
                    ...editing,
                    title: e.target.value,
                    slug: editing.id ? editing.slug : autoSlug(e.target.value),
                  })
                }
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Title (French)
              </label>
              <input
                type="text"
                value={editing.titleFr || ""}
                onChange={(e) =>
                  setEditing({ ...editing, titleFr: e.target.value })
                }
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Slug
              </label>
              <input
                type="text"
                value={editing.slug || ""}
                onChange={(e) =>
                  setEditing({ ...editing, slug: e.target.value })
                }
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none font-mono text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Author
              </label>
              <input
                type="text"
                value={editing.author || ""}
                onChange={(e) =>
                  setEditing({ ...editing, author: e.target.value })
                }
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Excerpt (English)
              </label>
              <textarea
                value={editing.excerpt || ""}
                onChange={(e) =>
                  setEditing({ ...editing, excerpt: e.target.value })
                }
                rows={2}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Excerpt (French)
              </label>
              <textarea
                value={editing.excerptFr || ""}
                onChange={(e) =>
                  setEditing({ ...editing, excerptFr: e.target.value })
                }
                rows={2}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Content (English) — Markdown supported
            </label>
            <textarea
              value={editing.content || ""}
              onChange={(e) =>
                setEditing({ ...editing, content: e.target.value })
              }
              rows={12}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none font-mono text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Content (French) — Markdown supported
            </label>
            <textarea
              value={editing.contentFr || ""}
              onChange={(e) =>
                setEditing({ ...editing, contentFr: e.target.value })
              }
              rows={12}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none font-mono text-sm"
            />
          </div>

          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={editing.published || false}
                onChange={(e) =>
                  setEditing({ ...editing, published: e.target.checked })
                }
                className="w-4 h-4 accent-green-600"
              />
              <span className="text-sm font-medium text-gray-700">
                Published
              </span>
            </label>
          </div>

          <div className="flex gap-3 pt-4 border-t">
            <button
              onClick={handleSave}
              disabled={saving}
              className="px-6 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 disabled:opacity-50 transition"
            >
              {saving ? "Saving..." : "Save Post"}
            </button>
            <button
              onClick={() => setEditing(null)}
              className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Blog Posts</h1>
        <button
          onClick={() => setEditing({ ...EMPTY_POST })}
          className="px-4 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition"
        >
          + New Post
        </button>
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
      ) : posts.length === 0 ? (
        <div className="bg-white rounded-xl p-12 border text-center text-gray-500">
          <p className="text-4xl mb-3">📝</p>
          <p>No blog posts yet. Create your first post!</p>
        </div>
      ) : (
        <div className="space-y-3">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-xl p-5 border hover:border-green-200 transition"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-gray-800">{post.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    /{post.slug} · {post.author} ·{" "}
                    {new Date(post.createdAt).toLocaleDateString()}
                  </p>
                  {post.excerpt && (
                    <p className="text-sm text-gray-600 mt-2">{post.excerpt}</p>
                  )}
                </div>
                <div className="flex items-center gap-2 ml-4">
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      post.published
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {post.published ? "Published" : "Draft"}
                  </span>
                  <button
                    onClick={() => setEditing(post)}
                    className="text-sm text-blue-600 hover:underline"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(post.id)}
                    className="text-sm text-red-500 hover:underline"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
