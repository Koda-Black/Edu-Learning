import { NextRequest, NextResponse } from "next/server";
import { getRequests, deleteRequest } from "@/lib/admin-store";

export async function GET() {
  return NextResponse.json(getRequests());
}

export async function DELETE(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (!id) return NextResponse.json({ error: "ID required" }, { status: 400 });
  return NextResponse.json(deleteRequest(id));
}
