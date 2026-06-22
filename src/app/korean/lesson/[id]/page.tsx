import { koreanData } from "@/data/korean";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import AudioPlayerButton from "@/components/AudioPlayerButton";

export default async function LessonPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const lesson = koreanData.lessons.find((l) => l.id === resolvedParams.id);

  if (!lesson) {
    notFound();
  }

  // A simple hack to wrap korean text inside the table with an audio button
  // We can customize the table cell rendering
  return (
    <div className="max-w-3xl mx-auto space-y-12">
      <div className="flex items-center gap-4 border-b border-muted pb-8">
        <Link href="/korean" className="p-3 bg-paper rounded-full border border-muted hover:bg-muted text-ink transition-colors">
          <ArrowLeft size={20} />
        </Link>
        <div>
          <h1 className="text-4xl font-black text-ink">{lesson.title}</h1>
          <p className="text-muted-foreground mt-2">{lesson.description}</p>
        </div>
      </div>

      <div className="prose prose-lg max-w-none text-ink
        prose-headings:text-ink prose-headings:font-bold prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
        prose-p:text-muted-foreground prose-p:leading-relaxed
        prose-strong:text-ink
        prose-ul:list-disc prose-ul:pl-6 prose-li:text-muted-foreground
        prose-table:w-full prose-table:border-collapse prose-table:my-8
        prose-th:bg-muted/50 prose-th:p-4 prose-th:text-left prose-th:font-bold prose-th:border prose-th:border-muted
        prose-td:p-4 prose-td:border prose-td:border-muted prose-td:bg-paper"
      >
        <ReactMarkdown 
          remarkPlugins={[remarkGfm]}
          components={{
            table: ({node, ...props}) => (
              <div className="overflow-x-auto my-8 border border-muted rounded-xl shadow-sm">
                <table className="w-full border-collapse text-left" {...props} />
              </div>
            ),
            thead: ({node, ...props}) => <thead className="bg-muted text-ink" {...props} />,
            th: ({node, ...props}) => <th className="p-4 font-bold border-b border-muted whitespace-nowrap" {...props} />,
            tr: ({node, ...props}) => <tr className="border-b border-muted last:border-0 hover:bg-muted/30 transition-colors" {...props} />,
            td: ({ node, ...props }) => {
              // Helper to extract text from hast node
              const getText = (n: any): string => {
                if (n.type === 'text') return n.value;
                if (n.children) return n.children.map(getText).join('');
                return '';
              };
              
              const childrenText = node ? getText(node) : '';
              
              // Simple check for korean unicode block
              const hasKorean = /[가-힣ㄱ-ㅎㅏ-ㅣ]/.test(childrenText);
              
              // Extract ONLY Korean characters for the audio player so it doesn't read Romanization
              const koreanOnlyText = childrenText.match(/[가-힣ㄱ-ㅎㅏ-ㅣ]+/g)?.join(' ') || '';
              
              return (
                <td className="p-4 align-middle bg-paper" {...props}>
                  <div className="flex items-center gap-4">
                    <span className={hasKorean ? "font-bold text-xl text-jade" : ""}>{props.children}</span>
                    {hasKorean && <AudioPlayerButton text={koreanOnlyText} lang="ko-KR" />}
                  </div>
                </td>
              );
            }
          }}
        >
          {lesson.content}
        </ReactMarkdown>
      </div>

      <div className="pt-12 border-t border-muted flex justify-between items-center">
        <Link href="/korean" className="text-muted-foreground hover:text-ink font-medium">
          Back to Hub
        </Link>
        <Link 
          href={`/korean/workbook/${lesson.id}`}
          className="bg-ink text-paper px-6 py-3 rounded-full flex items-center gap-2 hover:bg-jade transition-colors font-medium"
        >
          Go to Workbook <ArrowRight size={20} />
        </Link>
      </div>
    </div>
  );
}
