import { koreanData } from "@/data/korean";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import InteractiveWorkbook from "@/components/InteractiveWorkbook";

export default async function WorkbookPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const lesson = koreanData.lessons.find((l) => l.id === resolvedParams.id);
  const questions = koreanData.workbooks[resolvedParams.id as keyof typeof koreanData.workbooks];

  if (!lesson) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <div className="flex items-center gap-4 border-b border-muted pb-8">
        <Link href={lesson.id === "final-exam" ? "/korean" : `/korean/lesson/${lesson.id}`} className="p-3 bg-paper rounded-full border border-muted hover:bg-muted text-ink transition-colors">
          <ArrowLeft size={20} />
        </Link>
        <div>
          <h1 className="text-4xl font-black text-ink">Workbook: {lesson.title}</h1>
          <p className="text-muted-foreground mt-2">Test your knowledge from the lesson.</p>
        </div>
      </div>

      <InteractiveWorkbook lessonId={lesson.id} questions={questions || []} />
    </div>
  );
}
