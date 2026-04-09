import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ChatBot } from "@/components/ChatBot";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title:
    "Edu Learning & Immersion — Unlock Fluency in French and Other Languages for Real-World Success",
  description:
    "CEFR-aligned language training in English, French, German & Spanish. Professional translation, interpretation & proofreading services. Corporate programs available.",
  metadataBase: new URL("https://edu-learning-kappa.vercel.app"),
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48.png", sizes: "48x48", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: "Edu Learning & Immersion",
    description:
      "Unlock Fluency in French and Other Languages for Real-World Success. CEFR-aligned language courses, translation, interpretation & proofreading services.",
    siteName: "Edu Learning & Immersion",
    type: "website",
    images: [
      {
        url: "https://edu-learning-kappa.vercel.app/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Edu Learning & Immersion",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Edu Learning & Immersion",
    description:
      "Unlock Fluency in French and Other Languages for Real-World Success. CEFR-aligned language courses, translation, interpretation & proofreading services.",
    images: [
      {
        url: "https://edu-learning-kappa.vercel.app/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Edu Learning & Immersion",
      },
    ],
  },
};

const locales = ["en", "fr"] as const;

interface RootLayoutProps {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const { locale } = await params;

  if (!locales.includes(locale as (typeof locales)[number])) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Plausible Analytics */}
        <script
          defer
          data-domain="edulearning.com"
          src="https://plausible.io/js/pa-qmx3xU2u3wq-2hZ4b0EXh.js"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }`,
          }}
        />
        {/* Google AdSense - Add your script here when ready */}
        {/* <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=YOUR_CLIENT_ID" crossOrigin="anonymous" /> */}
      </head>
      <body className="bg-white text-[#4F635E] antialiased">
        <NextIntlClientProvider messages={messages}>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
          <ChatBot />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
