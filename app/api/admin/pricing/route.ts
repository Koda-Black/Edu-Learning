import { NextRequest, NextResponse } from "next/server";
import { getPricing, savePricing } from "@/lib/admin-store";

export async function GET() {
  return NextResponse.json(getPricing());
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const pricing = savePricing(body);
    return NextResponse.json(pricing);
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
