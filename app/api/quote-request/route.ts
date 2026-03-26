import { NextRequest, NextResponse } from "next/server";
import { addRequest } from "@/lib/admin-store";

const ALLOWED_MIME = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];
const MAX_SIZE = 10 * 1024 * 1024; // 10MB

export async function POST(request: NextRequest) {
  try {
    const contentType = request.headers.get("content-type") || "";

    let name = "",
      email = "",
      whatsapp = "",
      subject = "",
      message = "";
    let fileName = "";

    if (contentType.includes("multipart/form-data")) {
      const form = await request.formData();
      const sanitize = (v: FormDataEntryValue | null) =>
        String(v || "")
          .replace(/<[^>]*>/g, "")
          .trim();

      name = sanitize(form.get("name")).slice(0, 200);
      email = sanitize(form.get("email")).slice(0, 200);
      whatsapp = sanitize(form.get("whatsapp")).slice(0, 30);
      subject = sanitize(form.get("subject")).slice(0, 200);
      message = sanitize(form.get("message")).slice(0, 2000);

      const file = form.get("file");
      if (file && file instanceof File && file.size > 0) {
        if (!ALLOWED_MIME.includes(file.type)) {
          return NextResponse.json(
            { error: "Invalid file type. Only PDF and DOC/DOCX allowed." },
            { status: 400 },
          );
        }
        if (file.size > MAX_SIZE) {
          return NextResponse.json(
            { error: "File too large. Max 10MB." },
            { status: 400 },
          );
        }
        // Sanitize filename
        fileName = file.name.replace(/[^a-zA-Z0-9._-]/g, "_");
        // In production, save file to storage (S3, local disk, etc.)
        console.log("Uploaded file:", fileName, file.type, file.size);
      }
    } else {
      const data = await request.json();
      const sanitize = (v: string) =>
        String(v || "")
          .replace(/<[^>]*>/g, "")
          .trim();
      name = sanitize(data.name).slice(0, 200);
      email = sanitize(data.email).slice(0, 200);
      whatsapp = sanitize(data.whatsapp).slice(0, 30);
      subject = sanitize(data.subject).slice(0, 200);
      message = sanitize(data.message).slice(0, 2000);
    }

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 },
      );
    }

    console.log("Quote request:", {
      name,
      email,
      whatsapp,
      subject,
      message,
      fileName,
    });

    addRequest("quote", { name, email, whatsapp, subject, message, fileName });

    return NextResponse.json(
      { success: true, message: "Quote request submitted successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error submitting quote request:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
