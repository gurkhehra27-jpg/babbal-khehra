import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AskBabbal from "@/components/AskBabbal";
import CosmicBackground from "@/components/CosmicBackground";
import { PersonJsonLd, WebsiteJsonLd } from "@/components/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.babbalkhehra.com"),
  title: {
    default: "Babbal Khehra — Author. Philosopher. Visionary.",
    template: "%s — Babbal Khehra",
  },
  description:
    "Official site of Babbal Khehra — author of Alive and Ego & Enlightenment, philosopher, and architect of Blueprint Theory. Books, essays, music, and AI art.",
  keywords: [
    "Babbal Khehra",
    "Blueprint Theory",
    "Ego and Enlightenment",
    "Alive book",
    "philosopher",
    "author",
    "philosophy book",
    "consciousness",
    "identity",
    "self-discovery",
    "AI art",
    "music",
    "The Man I Built Today",
  ],
  authors: [{ name: "Babbal Khehra", url: "https://www.babbalkhehra.com" }],
  creator: "Babbal Khehra",
  publisher: "Babbal Khehra",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    title: "Babbal Khehra — Author. Philosopher. Visionary.",
    description:
      "Author of Alive and Ego & Enlightenment. Architect of Blueprint Theory. Music, AI films, and essays on consciousness and identity.",
    url: "https://www.babbalkhehra.com",
    siteName: "Babbal Khehra",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Babbal Khehra — Author. Philosopher. Visionary.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Babbal Khehra — Author. Philosopher. Visionary.",
    description:
      "Author of Alive and Ego & Enlightenment. Architect of Blueprint Theory.",
    images: ["/og-image.png"],
    creator: "@babbal_khehra",
  },
  alternates: {
    canonical: "https://www.babbalkhehra.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-black text-[#e8e8f0] min-h-screen flex flex-col antialiased">
        <PersonJsonLd />
        <WebsiteJsonLd />
        <CosmicBackground />
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <AskBabbal />
      </body>
    </html>
  );
}
