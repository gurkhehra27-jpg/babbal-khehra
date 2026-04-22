import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AskBabbal from "@/components/AskBabbal";
import CosmicBackground from "@/components/CosmicBackground";
import CursorGlow from "@/components/CursorGlow";
import { PersonJsonLd, WebsiteJsonLd } from "@/components/JsonLd";
import PageTransition from "@/components/PageTransition";

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
 default: "Babbal Khehra — Community-Facing Digital Creator",
 template: "%s — Babbal Khehra",
 },
 description:
 "Community-facing digital creator using websites, AI, storytelling, and public-facing media to build visibility, trust, and opportunity.",
 keywords: [
 "Babbal Khehra",
 "community-facing digital creator",
 "digital creator",
 "community builder",
 "Blueprint Theory",
 "Ego and Enlightenment",
 "Alive book",
 "author",
 "AI content systems",
 "website builder",
 "Logan community",
 "civic engagement",
 "public presence",
 "digital storytelling",
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
 title: "Babbal Khehra — Community-Facing Digital Creator",
 description:
 "Community-facing digital creator using websites, AI, storytelling, and public-facing media to build visibility, trust, and opportunity.",
 url: "https://www.babbalkhehra.com",
 siteName: "Babbal Khehra",
 locale: "en_US",
 type: "website",
 images: [
 {
 url: "/og-image.png",
 width: 1200,
 height: 630,
 alt: "Babbal Khehra — Community-Facing Digital Creator",
 },
 ],
 },
 twitter: {
 card: "summary_large_image",
 title: "Babbal Khehra — Community-Facing Digital Creator",
 description:
 "Community-facing digital creator using websites, AI, storytelling, and public-facing media to build visibility, trust, and opportunity.",
 images: ["/og-image.png"],
 creator: "@babbal_khehra",
 },
 alternates: {
 canonical: "https://www.babbalkhehra.com",
 },
 icons: {
 icon: "/icon.png",
 shortcut: "/favicon.ico",
 apple: "/icon.png",
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
 <CursorGlow />
 <div className="relative z-10 flex flex-col min-h-screen">
 <Navigation />
 <main className="flex-1">
 <PageTransition>{children}</PageTransition>
 </main>
 <Footer />
 </div>
 <AskBabbal />
 </body>
 </html>
 );
}
