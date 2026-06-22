import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LanguageHub by PPYN",
  description: "Learn Asian languages with an interactive modern approach.",
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
        <footer className="w-full border-t border-muted bg-paper text-center py-6 text-sm text-muted-foreground mt-auto">
          <p>
            © 2026 ChaoprayaSoft, THAILAND | Contact : tiawongsombat@gmail.com | Tel : 0909739266 | LinID : yok_tiaw
          </p>
        </footer>
      </body>
    </html>
  );
}
