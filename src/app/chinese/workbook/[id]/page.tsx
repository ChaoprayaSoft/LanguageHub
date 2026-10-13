import { chineseData } from "@/data/chinese";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import InteractiveWorkbook from "@/components/InteractiveWorkbook";

export default async function ChineseWorkbookPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const lesson = chineseData.lessons.find((l) => l.id === resolvedParams.id);
  const questions = chineseData.workbooks[resolvedParams.id as keyof typeof chineseData.workbooks];

  if (!lesson) {
    notFound();
  }

  const backHref = lesson.id.startsWith("final-exam") ? "/chinese" : `/chinese/lesson/${lesson.id}`;

  return (
    <div className="max-w-4xl mx-auto space-y-8 md:space-y-12 pb-12">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 border-b border-muted pb-6 md:pb-8 px-4 sm:px-0">
        <Link 
          href={backHref} 
          className="p-3 bg-paper rounded-full border border-muted hover:bg-crimson/10 hover:border-crimson hover:text-crimson text-ink transition-colors self-start sm:self-auto"
          title="Go back"
        >
          <ArrowLeft size={20} />
        </Link>
        <div>
          <div className="inline-flex items-center gap-2 mb-1">
            <span className="text-xs uppercase font-extrabold tracking-wider text-crimson bg-crimson/10 px-2.5 py-0.5 rounded-full border border-crimson/20">
              Interactive Workbook
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-ink">Workbook: {lesson.title}</h1>
          <p className="text-sm sm:text-base text-muted-foreground mt-1">Test and reinforce your knowledge.</p>
        </div>
      </div>

      <InteractiveWorkbook 
        lessonId={`cn-${lesson.id}`} 
        questions={questions || []} 
        backUrl="/chinese"
        accentColor="crimson"
      />
    </div>
  );
}
