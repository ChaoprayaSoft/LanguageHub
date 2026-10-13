"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, XCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import AudioPlayerButton from "@/components/AudioPlayerButton";

interface Question {
  question: string;
  type: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

interface InteractiveWorkbookProps {
  lessonId: string;
  questions: Question[];
  backUrl?: string;
  accentColor?: "jade" | "crimson";
}

export default function InteractiveWorkbook({ 
  lessonId, 
  questions, 
  backUrl = "/korean", 
  accentColor = "jade" 
}: InteractiveWorkbookProps) {
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  // Load progress locally (if they want to resume, but for now we just show it)
  useEffect(() => {
    // Maybe load previous score if needed
  }, []);

  if (!questions || questions.length === 0) {
    return <div className="p-8 text-center text-muted-foreground">No questions available for this lesson.</div>;
  }

  const currentQuestion = questions[currentQuestionIdx];

  const handleOptionClick = (option: string) => {
    if (isAnswered) return;
    setSelectedOption(option);
    setIsAnswered(true);

    if (option === currentQuestion.correctAnswer) {
      setScore((s) => s + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestionIdx < questions.length - 1) {
      setCurrentQuestionIdx((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setIsFinished(true);
      // Save progress
      if (typeof window !== "undefined") {
        const progress = JSON.parse(localStorage.getItem("language_progress") || "{}");
        progress[lessonId] = { score: score + (selectedOption === currentQuestion.correctAnswer ? 1 : 0), total: questions.length };
        localStorage.setItem("language_progress", JSON.stringify(progress));
      }
    }
  };

  if (isFinished) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto p-8 border border-muted rounded-2xl bg-paper shadow-lg text-center"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-ink mb-4">Workbook Complete!</h2>
        <p className="text-lg sm:text-xl text-muted-foreground mb-8">
          You scored <span className={`font-bold ${accentColor === "crimson" ? "text-crimson" : "text-jade"}`}>{score}</span> out of {questions.length}
        </p>
        <Link
          href={backUrl}
          className={`inline-flex items-center justify-center w-full sm:w-auto gap-2 bg-ink text-paper px-6 py-4 sm:py-3 rounded-full ${accentColor === "crimson" ? "hover:bg-crimson" : "hover:bg-jade"} transition-colors`}
        >
          Back to Lessons <ArrowRight size={20} />
        </Link>
      </motion.div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto w-full px-4 sm:px-0">
      <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <span className="text-sm font-medium text-muted-foreground">
          Question {currentQuestionIdx + 1} of {questions.length}
        </span>
        <div className="flex gap-1 flex-wrap w-full sm:w-auto">
          {questions.map((_, idx) => (
            <div
              key={idx}
              className={`h-2 w-8 rounded-full ${
                idx === currentQuestionIdx
                  ? "bg-ink"
                  : idx < currentQuestionIdx
                  ? (accentColor === "crimson" ? "bg-crimson" : "bg-jade")
                  : "bg-muted"
              }`}
            />
          ))}
        </div>
      </div>

      <motion.div
        key={currentQuestionIdx}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        className="p-5 sm:p-8 border border-muted rounded-2xl bg-paper shadow-sm"
      >
        {(() => {
          const getAudioData = (str: string) => {
            const chineseMatches = str.match(/[\u4e00-\u9fff]+/g);
            if (chineseMatches && chineseMatches.length > 0 && (accentColor === "crimson" || !str.match(/[가-힣]/))) {
              return { text: chineseMatches.join(" "), lang: "zh-CN" };
            }
            const koreanMatches = str.match(/[가-힣ㄱ-ㅎㅏ-ㅣ]+/g);
            if (koreanMatches && koreanMatches.length > 0) {
              return { text: koreanMatches.join(" "), lang: "ko-KR" };
            }
            if (chineseMatches && chineseMatches.length > 0) {
              return { text: chineseMatches.join(" "), lang: "zh-CN" };
            }
            return null;
          };

          const qAudio = getAudioData(currentQuestion.question);
          const expAudio = getAudioData(currentQuestion.explanation);

          return (
            <>
              <div className="flex items-start justify-between gap-3 mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-ink leading-snug">
                  {currentQuestion.question}
                </h3>
                {qAudio && (
                  <AudioPlayerButton 
                    text={qAudio.text} 
                    lang={qAudio.lang} 
                    accentColor={accentColor} 
                    size="md"
                    className="mt-0.5 shadow-xs"
                  />
                )}
              </div>

              <div className="grid gap-3">
                {currentQuestion.options.map((option, idx) => {
                  const isSelected = selectedOption === option;
                  const isCorrect = option === currentQuestion.correctAnswer;
                  const optAudio = getAudioData(option);
                  let btnClass = "border-muted text-ink hover:border-ink hover:bg-muted";

                  if (isAnswered) {
                    if (isCorrect) {
                      btnClass = "border-jade bg-jade/10 text-jade";
                    } else if (isSelected) {
                      btnClass = "border-crimson bg-crimson/10 text-crimson";
                    } else {
                      btnClass = "border-muted text-muted-foreground opacity-50";
                    }
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleOptionClick(option)}
                      disabled={isAnswered}
                      className={`w-full text-left p-4 min-h-[58px] rounded-xl border-2 transition-all font-medium text-base sm:text-lg flex justify-between items-center gap-3 cursor-pointer ${btnClass}`}
                    >
                      <span className="flex-1 leading-snug">{option}</span>
                      
                      <div className="flex items-center gap-2 shrink-0">
                        {optAudio && (
                          <AudioPlayerButton 
                            text={optAudio.text} 
                            lang={optAudio.lang} 
                            accentColor={accentColor} 
                            size="sm"
                          />
                        )}
                        {isAnswered && isCorrect && <CheckCircle size={22} className="text-jade shrink-0" />}
                        {isAnswered && isSelected && !isCorrect && <XCircle size={22} className="text-crimson shrink-0" />}
                      </div>
                    </button>
                  );
                })}
              </div>

              <AnimatePresence>
                {isAnswered && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{ opacity: 1, height: "auto", marginTop: 24 }}
                    className="bg-muted p-4 sm:p-5 rounded-xl border border-muted/80"
                  >
                    <div className="flex items-center justify-between gap-3 mb-1.5">
                      <p className="text-ink text-sm font-bold">Explanation:</p>
                      {expAudio && (
                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
                          <span>Listen</span>
                          <AudioPlayerButton 
                            text={expAudio.text} 
                            lang={expAudio.lang} 
                            accentColor={accentColor} 
                            size="sm"
                          />
                        </div>
                      )}
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{currentQuestion.explanation}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </>
          );
        })()}

        {isAnswered && (
          <div className="mt-8 flex justify-end">
            <button
              onClick={nextQuestion}
              className="bg-ink w-full sm:w-auto text-paper px-6 py-4 sm:py-3 rounded-full flex items-center justify-center gap-2 hover:bg-opacity-80 transition-all font-medium"
            >
              {currentQuestionIdx < questions.length - 1 ? "Next Question" : "Finish Workbook"}
              <ArrowRight size={20} />
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
}
