import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://language-hub-two.vercel.app"),
  title: "LanguageHub by PPYN",
  description: "Learn Asian languages with an interactive modern approach.",
  keywords: ["language hub", "Language learning", "Learn Korean", "Interactive learning"],
  authors: [{ name: "ChaoprayaSoft" }, { name: "PPYN" }],
  creator: "ChaoprayaSoft",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://language-hub-two.vercel.app",
    title: "LanguageHub by PPYN",
    description: "Learn Asian languages with an interactive modern approach.",
    siteName: "LanguageHub",
  },
  twitter: {
    card: "summary_large_image",
    title: "LanguageHub by PPYN",
    description: "Learn Asian languages with an interactive modern approach.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div className="flex-1">{children}</div>
        <Analytics />
        <footer className="w-full border-t border-muted bg-paper text-center py-6 px-4 text-sm text-muted-foreground mt-auto">
          <p className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2">
            <span>© 2026 ChaoprayaSoft, THAILAND</span>
            <span className="hidden sm:inline">|</span>
            <span>Contact: tiawongsombat@gmail.com</span>
            <span className="hidden sm:inline">|</span>
            <span>Tel: 0909739266</span>
            <span className="hidden sm:inline">|</span>
            <span>LineID: yok_tiaw</span>
          </p>
        </footer>
      </body>
    </html>
  );
}
