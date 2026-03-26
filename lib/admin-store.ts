import fs from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data");

function ensureDataDir() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
}

function readJSON<T>(filename: string, fallback: T): T {
  ensureDataDir();
  const filePath = path.join(DATA_DIR, filename);
  if (!fs.existsSync(filePath)) return fallback;
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf-8"));
  } catch {
    return fallback;
  }
}

function writeJSON<T>(filename: string, data: T) {
  ensureDataDir();
  const filePath = path.join(DATA_DIR, filename);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

// Blog posts
export interface BlogPost {
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

export function getBlogPosts(): BlogPost[] {
  return readJSON("blog-posts.json", []);
}

export function saveBlogPost(post: BlogPost) {
  const posts = getBlogPosts();
  const idx = posts.findIndex((p) => p.id === post.id);
  if (idx >= 0) {
    posts[idx] = { ...post, updatedAt: new Date().toISOString() };
  } else {
    posts.push({
      ...post,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });
  }
  writeJSON("blog-posts.json", posts);
  return posts;
}

export function deleteBlogPost(id: string) {
  const posts = getBlogPosts().filter((p) => p.id !== id);
  writeJSON("blog-posts.json", posts);
  return posts;
}

// Pricing
export interface PricingConfig {
  homepage: { basic: string; professional: string; premium: string };
  programs: Record<string, string>;
  corporate: { corporateRate: number; personalRate: number };
  translation: { simple: number; technical: number; legal: number };
}

const DEFAULT_PRICING: PricingConfig = {
  homepage: { basic: "₦15,000", professional: "₦30,000", premium: "₦75,000" },
  programs: {
    "intensive-french": "₦35,000",
    "business-english": "₦55,000",
    "academic-french": "₦40,000",
    "professional-comm": "₦65,000",
    "beginners-french": "₦25,000",
    "exam-prep": "₦120,000",
    kids: "₦25,000",
    teens: "₦30,000",
    custom: "Custom",
  },
  corporate: { corporateRate: 5000, personalRate: 3000 },
  translation: { simple: 50, technical: 80, legal: 100 },
};

export function getPricing(): PricingConfig {
  return readJSON("pricing.json", DEFAULT_PRICING);
}

export function savePricing(pricing: PricingConfig) {
  writeJSON("pricing.json", pricing);
  return pricing;
}

// Requests (quote requests, corporate consultations, program registrations)
export interface StoredRequest {
  id: string;
  type: "quote" | "corporate" | "registration";
  data: Record<string, unknown>;
  createdAt: string;
}

export function getRequests(): StoredRequest[] {
  return readJSON("requests.json", []);
}

export function addRequest(
  type: StoredRequest["type"],
  data: Record<string, unknown>,
) {
  const requests = getRequests();
  requests.unshift({
    id: crypto.randomUUID(),
    type,
    data,
    createdAt: new Date().toISOString(),
  });
  writeJSON("requests.json", requests);
}

export function deleteRequest(id: string) {
  const requests = getRequests().filter((r) => r.id !== id);
  writeJSON("requests.json", requests);
  return requests;
}

// Email list
export interface EmailContact {
  email: string;
  name: string;
  source: string;
  addedAt: string;
}

export function getEmailList(): EmailContact[] {
  return readJSON("email-list.json", []);
}

export function addEmailContact(contact: Omit<EmailContact, "addedAt">) {
  const list = getEmailList();
  if (!list.some((c) => c.email === contact.email)) {
    list.push({ ...contact, addedAt: new Date().toISOString() });
    writeJSON("email-list.json", list);
  }
  return list;
}
