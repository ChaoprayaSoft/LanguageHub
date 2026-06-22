import Link from "next/link";
import { Home } from "lucide-react";
import FloatingScrollButton from "@/components/FloatingScrollButton";

export default function KoreanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 bg-paper/80 backdrop-blur-md border-b border-muted px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-ink transition-colors">
            <Home size={20} />
            <span className="font-medium">LanguageHub</span>
          </Link>
          <div className="flex items-center gap-4 text-sm font-medium">
            <span className="bg-jade/10 text-jade px-3 py-1 rounded-full">Korean Hub</span>
          </div>
        </div>
      </nav>
      <main className="py-12 px-6">
        {children}
      </main>
      <FloatingScrollButton />
    </div>
  );
}
