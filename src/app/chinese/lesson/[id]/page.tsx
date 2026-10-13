import { chineseData } from "@/data/chinese";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import AudioPlayerButton from "@/components/AudioPlayerButton";

interface HastNode {
  type: string;
  value?: string;
  children?: HastNode[];
}

export default async function ChineseLessonPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const lesson = chineseData.lessons.find((l) => l.id === resolvedParams.id);

  if (!lesson) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto space-y-8 md:space-y-12 px-4 md:px-0">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 border-b border-muted pb-6 md:pb-8">
        <Link 
          href="/chinese" 
          className="p-3 bg-paper rounded-full border border-muted hover:bg-crimson/10 hover:border-crimson hover:text-crimson text-ink transition-colors self-start sm:self-auto"
          title="Back to Chinese Hub"
        >
          <ArrowLeft size={20} />
        </Link>
        <div>
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="text-xs uppercase font-extrabold tracking-wider text-crimson bg-crimson/10 px-2.5 py-0.5 rounded-full border border-crimson/20">
              {lesson.phase}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-ink">{lesson.title}</h1>
          <p className="text-sm sm:text-base text-muted-foreground mt-2">{lesson.description}</p>
        </div>
      </div>

      <div className="prose prose-sm sm:prose-base md:prose-lg max-w-none text-ink
        prose-headings:text-ink prose-headings:font-bold prose-h3:text-xl sm:prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
        prose-p:text-muted-foreground prose-p:leading-relaxed
        prose-strong:text-ink
        prose-ul:list-disc prose-ul:pl-6 prose-li:text-muted-foreground
        prose-table:w-full prose-table:border-collapse prose-table:my-8
        prose-th:bg-muted/60 prose-th:p-3 sm:prose-th:p-4 prose-th:text-left prose-th:font-bold prose-th:border prose-th:border-muted
        prose-td:p-3 sm:prose-td:p-4 prose-td:border prose-td:border-muted prose-td:bg-paper"
      >
        <ReactMarkdown 
          remarkPlugins={[remarkGfm]}
          components={{
            table: ({ ...props }) => (
              <div className="overflow-x-auto my-8 border border-muted rounded-xl shadow-xs">
                <table className="w-full border-collapse text-left" {...props} />
              </div>
            ),
            thead: ({ ...props }) => <thead className="bg-muted text-ink" {...props} />,
            th: ({ ...props }) => <th className="p-4 font-bold border-b border-muted whitespace-nowrap" {...props} />,
            tr: ({ ...props }) => <tr className="border-b border-muted last:border-0 hover:bg-muted/30 transition-colors" {...props} />,
            td: ({ node, ...props }) => {
              const getText = (n: HastNode | undefined): string => {
                if (!n) return "";
                if (n.type === "text" && n.value) return n.value;
                if (n.children) return n.children.map(getText).join("");
                return "";
              };
              
              const childrenText = node ? getText(node as HastNode) : "";
              
              // Check for Chinese Unicode Ideographs (\u4e00-\u9fff)
              const hasChinese = /[\u4e00-\u9fff]/.test(childrenText);
              
              // Extract ONLY Chinese characters for the text-to-speech engine
              const chineseOnlyText = childrenText.match(/[\u4e00-\u9fff]+/g)?.join(" ") || "";
              
              return (
                <td className="p-4 align-middle bg-paper" {...props}>
                  <div className="flex items-center gap-3">
                    <span className={hasChinese ? "font-bold text-xl text-crimson" : ""}>{props.children}</span>
                    {hasChinese && (
                      <AudioPlayerButton text={chineseOnlyText} lang="zh-CN" accentColor="crimson" />
                    )}
                  </div>
                </td>
              );
            },
            li: ({ node, children, ...props }) => {
              const getText = (n: HastNode | undefined): string => {
                if (!n) return "";
                if (n.type === "text" && n.value) return n.value;
                if (n.children) return n.children.map(getText).join("");
                return "";
              };
              const text = node ? getText(node as HastNode) : "";
              const chineseMatches = text.match(/[\u4e00-\u9fff]+/g);
              const hasChinese = !!chineseMatches && chineseMatches.length > 0;
              const chineseOnlyText = chineseMatches?.join(" ") || "";

              return (
                <li className="my-2.5 list-none flex items-start gap-3" {...props}>
                  <span className="text-crimson font-bold select-none mt-1 text-xs">◆</span>
                  <div className="flex-1 flex items-center justify-between gap-3 flex-wrap">
                    <span className="leading-relaxed">{children}</span>
                    {hasChinese && (
                      <AudioPlayerButton text={chineseOnlyText} lang="zh-CN" accentColor="crimson" size="sm" />
                    )}
                  </div>
                </li>
              );
            },
            blockquote: ({ node, children, ...props }) => {
              const getText = (n: HastNode | undefined): string => {
                if (!n) return "";
                if (n.type === "text" && n.value) return n.value;
                if (n.children) return n.children.map(getText).join("");
                return "";
              };
              const text = node ? getText(node as HastNode) : "";
              const chineseMatches = text.match(/[\u4e00-\u9fff]+/g);
              const chineseOnlyText = chineseMatches?.join(" ") || "";

              return (
                <blockquote className="my-4 border-l-4 border-crimson pl-4 py-2 italic bg-crimson/5 rounded-r-xl pr-4 flex items-center justify-between gap-3" {...props}>
                  <div className="flex-1 not-italic">{children}</div>
                  {chineseOnlyText && (
                    <AudioPlayerButton text={chineseOnlyText} lang="zh-CN" accentColor="crimson" size="sm" />
                  )}
                </blockquote>
              );
            },
            p: ({ node, children, ...props }) => {
              const getText = (n: HastNode | undefined): string => {
                if (!n) return "";
                if (n.type === "text" && n.value) return n.value;
                if (n.children) return n.children.map(getText).join("");
                return "";
              };
              const text = node ? getText(node as HastNode) : "";
              const isExample = /example|skill|ability|permission|priority|sentence|correction|merged|formula|cause|effect|logic|wrong|right/i.test(text);
              const chineseMatches = text.match(/[\u4e00-\u9fff]+/g);
              const chineseOnlyText = chineseMatches?.join(" ") || "";

              if (isExample && chineseOnlyText) {
                return (
                  <div className="my-3 p-3.5 bg-crimson/5 border border-crimson/20 rounded-xl flex items-center justify-between gap-3">
                    <p className="my-0 leading-relaxed text-ink font-medium" {...props}>{children}</p>
                    <AudioPlayerButton text={chineseOnlyText} lang="zh-CN" accentColor="crimson" size="sm" />
                  </div>
                );
              }
              return <p className="leading-relaxed" {...props}>{children}</p>;
            }
          }}
        >
          {lesson.content}
        </ReactMarkdown>
      </div>

      <div className="pt-8 md:pt-12 border-t border-muted flex flex-col sm:flex-row justify-between items-center gap-6">
        <Link 
          href="/chinese" 
          className="text-muted-foreground hover:text-ink font-medium order-2 sm:order-1 transition-colors"
        >
          Back to Chinese Hub
        </Link>
        <Link 
          href={`/chinese/workbook/${lesson.id}`}
          className="w-full sm:w-auto bg-crimson text-paper px-7 py-4 sm:py-3 rounded-full flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all font-semibold shadow-md order-1 sm:order-2"
        >
          Go to Workbook <ArrowRight size={20} />
        </Link>
      </div>
    </div>
  );
}
