import { NextResponse } from "next/server";
import { addRequest } from "@/lib/admin-store";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const {
      trainingType,
      mode,
      sessionsPerWeek,
      hoursPerSession,
      trainees,
      timeOfDay,
      companyName,
      contactName,
      email,
      comments,
      estimatedMonthly,
    } = data;

    // Basic validation
    if (!contactName || !email) {
      return NextResponse.json(
        { error: "Contact name and email are required" },
        { status: 400 },
      );
    }

    // Sanitize inputs
    const sanitize = (s: string) =>
      String(s || "")
        .replace(/[<>]/g, "")
        .trim()
        .slice(0, 500);

    const sanitized = {
      trainingType: ["corporate", "personal"].includes(trainingType)
        ? trainingType
        : "corporate",
      mode: ["online", "hybrid", "physical"].includes(mode) ? mode : "online",
      sessionsPerWeek: Math.min(Math.max(Number(sessionsPerWeek) || 1, 1), 7),
      hoursPerSession: Math.min(Math.max(Number(hoursPerSession) || 1, 1), 8),
      trainees: Math.min(Math.max(Number(trainees) || 1, 1), 100),
      timeOfDay: ["morning", "afternoon", "evening"].includes(timeOfDay)
        ? timeOfDay
        : "morning",
      companyName: sanitize(companyName),
      contactName: sanitize(contactName),
      email: sanitize(email),
      comments: sanitize(comments),
      estimatedMonthly: Number(estimatedMonthly) || 0,
      submittedAt: new Date().toISOString(),
    };

    // Log the consultation request
    console.log("Corporate consultation request:", sanitized);

    addRequest("corporate", sanitized as unknown as Record<string, unknown>);

    return NextResponse.json({
      success: true,
      message: "Consultation request received",
    });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
