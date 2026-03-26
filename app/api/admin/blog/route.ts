import { NextRequest, NextResponse } from "next/server";
import { getBlogPosts, saveBlogPost, deleteBlogPost } from "@/lib/admin-store";

export async function GET() {
  return NextResponse.json(getBlogPosts());
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      title,
      titleFr,
      slug,
      content,
      contentFr,
      excerpt,
      excerptFr,
      author,
      published,
      id,
    } = body;

    if (!title || !slug || !content) {
      return NextResponse.json(
        { error: "Title, slug, and content are required" },
        { status: 400 },
      );
    }

    // Sanitize slug
    const safeSlug = slug
      .toLowerCase()
      .replace(/[^a-z0-9-]/g, "-")
      .replace(/-+/g, "-")
      .slice(0, 100);

    const post = {
      id: id || "",
      title: title.slice(0, 200),
      titleFr: (titleFr || "").slice(0, 200),
      slug: safeSlug,
      content: content.slice(0, 50000),
      contentFr: (contentFr || "").slice(0, 50000),
      excerpt: (excerpt || "").slice(0, 500),
      excerptFr: (excerptFr || "").slice(0, 500),
      author: (author || "Admin").slice(0, 100),
      published: !!published,
      createdAt: "",
      updatedAt: "",
    };

    const posts = saveBlogPost(post);
    return NextResponse.json(posts);
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}

export async function DELETE(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (!id) return NextResponse.json({ error: "ID required" }, { status: 400 });
  return NextResponse.json(deleteBlogPost(id));
}
