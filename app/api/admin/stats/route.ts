import { NextResponse } from "next/server";
import {
  getBlogPosts,
  getRequests,
  getEmailList,
  getPricing,
} from "@/lib/admin-store";

export async function GET() {
  const requests = getRequests();
  const blogPosts = getBlogPosts();
  const emailContacts = getEmailList();

  return NextResponse.json({
    totalRequests: requests.length,
    quoteRequests: requests.filter((r) => r.type === "quote").length,
    corporateRequests: requests.filter((r) => r.type === "corporate").length,
    registrations: requests.filter((r) => r.type === "registration").length,
    blogPosts: blogPosts.length,
    emailContacts: emailContacts.length,
  });
}
