import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Versewell — Tools Built for Ministry",
    template: "%s | Versewell",
  },
  description:
    "Versewell builds powerful, beautiful tools for the modern church — from sermon presentation to deep Bible study.",
  metadataBase: new URL("https://versewell.io"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://versewell.io",
    siteName: "Versewell",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
