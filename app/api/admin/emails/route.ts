import { NextRequest, NextResponse } from "next/server";
import { getEmailList, addEmailContact } from "@/lib/admin-store";

export async function GET() {
  return NextResponse.json(getEmailList());
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, name, source } = body;
    if (!email)
      return NextResponse.json({ error: "Email required" }, { status: 400 });

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const list = addEmailContact({
      email: email.toLowerCase().slice(0, 200),
      name: (name || "").slice(0, 200),
      source: (source || "manual").slice(0, 50),
    });
    return NextResponse.json(list);
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
