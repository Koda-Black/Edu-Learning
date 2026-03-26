import { NextRequest, NextResponse } from "next/server";
import { addRequest } from "@/lib/admin-store";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Validate form data
    if (!data.fullName || !data.email || !data.whatsapp) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    // Log and store
    console.log("Program registration:", data);
    addRequest("registration", data);

    // Send confirmation email
    // await sendEmail(data.email, 'Registration Confirmation', ...);

    // Send WhatsApp notification to admin
    // await sendWhatsAppNotification(adminNumber, data);

    return NextResponse.json(
      { success: true, message: "Registration submitted successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error submitting registration:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
