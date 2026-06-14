import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    template: "%s | Versewell",
    default: "Versewell — Powerful tools built for ministry",
  },
  description:
    "Versewell builds beautifully designed tools for ministry and Bible study. SermonFlow for sermon preparation and presentation. Versewell Study for deep Scripture engagement.",
  openGraph: {
    siteName: "Versewell",
    url: "https://versewell.io",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-white text-gray-900 antialiased">{children}</body>
    </html>
  );
}
