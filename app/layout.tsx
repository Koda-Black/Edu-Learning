import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Edu Learning & Immersion",
  description:
    "Global bilingual language training and professional communication solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
