"use client";

import React, { useRef, useState } from "react";
import { ReactSketchCanvas, ReactSketchCanvasRef } from "react-sketch-canvas";
import { createWorker, PSM } from "tesseract.js";
import { Volume2 } from "lucide-react";

interface WritingPadProps {
  targetCharacter: string;
  meaning?: string;
  onSuccess?: () => void;
}

export default function WritingPad({ targetCharacter, meaning, onSuccess }: WritingPadProps) {
  const canvasRef = useRef<ReactSketchCanvasRef>(null);
  const [isRecognizing, setIsRecognizing] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [score, setScore] = useState<number | null>(null);

  const checkWriting = async () => {
    if (!canvasRef.current) return;
    
    setIsRecognizing(true);
    setResult(null);
    setScore(null);

    try {
      const dataUri = await canvasRef.current.exportImage("png");

      // Load BOTH Korean and English. 
      // Why? Tesseract with ONLY Korean tries to force single strokes into complex Korean letters and fails.
      // With English loaded, it will confidently see "ㄱ" as "7" or "r", and "ㄴ" as "L", 
      // which our confusion matrix will correctly identify!
      const worker = await createWorker(["kor", "eng"], 1, {
        logger: (m) => console.log(m)
      });
      
      await worker.setParameters({
        tessedit_pageseg_mode: targetCharacter.length === 1 ? PSM.SINGLE_CHAR : PSM.SINGLE_BLOCK,
      });

      const { data } = await worker.recognize(dataUri);
      await worker.terminate();

      const recognizedText = data.text.trim().replace(/\s+/g, "");
      setResult(recognizedText);

      // Confusion matrix for single characters
      const jamoConfusions: Record<string, string[]> = {
        "ㄱ": ["7", "r", "n", "기", "구", "그", "7", "ㄱ"],
        "ㄴ": ["l", "L", "c", "u", "니", "느", "L", "v", "ㄴ"],
        "ㄷ": ["c", "C", "t", "디", "드", "C", "E", "ㄷ"],
        "ㄹ": ["2", "z", "Z", "리", "르", "S", "5", "ㄹ"],
        "ㅁ": ["a", "ㅁ", "미", "므", "0", "o", "O", "q", "p", "D", "B"],
        "ㅂ": ["H", "h", "u", "비", "브", "A", "U", "ㅂ"],
        "ㅅ": ["^", "A", "시", "스", "h", "n", "ㅅ"],
        "ㅇ": ["o", "O", "0", "이", "으", "Q", "c", "C", "ㅇ"],
        "ㅈ": ["x", "z", "지", "즈", "7", "Z", "x", "ㅈ"],
        "ㅊ": ["*", "x", "치", "츠", "t", "X", "ㅊ"],
        "ㅋ": ["7", "F", "키", "크", "z", "E", "k", "ㅋ"],
        "ㅌ": ["E", "t", "티", "트", "F", "C", "ㅌ"],
        "ㅍ": ["II", "pi", "피", "프", "I", "T", "H", "ㅍ"],
        "ㅎ": ["o", "호", "히", "흐", "하", "s", "S", "5", "ㅎ"],
        
        "ㅏ": ["t", "1", "|", "f", "r", "I", "l", "i", "ㅏ"],
        "ㅑ": ["k", "F", "t", "E", "ㅑ"],
        "ㅓ": ["1", "t", "j", "i", "l", "I", "ㅓ"],
        "ㅕ": ["t", "1", "E", "f", "k", "ㅕ"],
        "ㅗ": ["l", "1", "t", "ㅗ", "-", "T"],
        "ㅛ": ["l", "1", "u", "ㅛ", "T", "Y"],
        "ㅜ": ["T", "t", "ㅜ", "r", "+"],
        "ㅠ": ["TT", "ㅠ", "T", "H"],
        "ㅡ": ["-", "_", "ㅡ", "=", "~"],
        "ㅣ": ["l", "1", "I", "|", "ㅣ", "i", "!"]
      };

      let isCorrect = recognizedText.includes(targetCharacter);
      
      if (!isCorrect && targetCharacter.length === 1) {
        const allowedConfusions = jamoConfusions[targetCharacter] || [];
        isCorrect = allowedConfusions.some(confusion => 
          recognizedText.toLowerCase().includes(confusion.toLowerCase())
        );
      }

      if (isCorrect) {
        setScore(100);
        if (onSuccess) onSuccess();
      } else {
        setScore(0);
      }
    } catch (error) {
      console.error("OCR Error:", error);
      setResult("Error analyzing image");
    } finally {
      setIsRecognizing(false);
    }
  };

  const clearCanvas = () => {
    canvasRef.current?.clearCanvas();
    setResult(null);
    setScore(null);
  };

  const undo = () => {
    canvasRef.current?.undo();
  };

  const getFontSize = (text: string) => {
    if (text.length <= 1) return "text-[9rem] sm:text-[14rem]";
    if (text.length <= 2) return "text-[6rem] sm:text-[10rem]";
    if (text.length <= 4) return "text-[3.5rem] sm:text-[6rem]";
    return "text-[2rem] sm:text-[4rem]";
  };

  const playAudio = () => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(targetCharacter);
      utterance.lang = "ko-KR"; // Set language to Korean
      window.speechSynthesis.speak(utterance);
    }
  };

  // Check if the target is a single standalone consonant or vowel (Jamo)
  // These are inherently bad for OCR, so we disable checking for them.
  // One-syllable words like "집" (House) are full blocks and should be checked.
  const isFreePracticeMode = targetCharacter.length === 1 && /^[ㄱ-ㅎㅏ-ㅣ]$/.test(targetCharacter);

  return (
    <div className="flex flex-col items-center space-y-6 w-full p-2 sm:p-4">
      <div className="text-center w-full px-2">
        <h3 className="text-lg text-muted-foreground font-medium">Practice writing:</h3>
        <div className="flex items-center justify-center gap-3 sm:gap-4 mt-2">
          <p className="text-3xl sm:text-5xl font-black text-ink break-keep leading-tight">{targetCharacter}</p>
          <button 
            onClick={playAudio}
            className="p-3 bg-muted text-ink rounded-full hover:bg-jade hover:text-white transition-colors"
            title="Listen to pronunciation"
          >
            <Volume2 size={24} />
          </button>
        </div>
        {meaning && (
          <p className="text-xl font-medium text-jade mt-2">{meaning}</p>
        )}
      </div>

      <div className="w-full max-w-lg border-4 border-muted rounded-2xl overflow-hidden relative shadow-sm" style={{ touchAction: "none" }}>
        {/* Background Guide Character */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] pointer-events-none select-none overflow-hidden p-4">
          <span className={`font-black text-center whitespace-nowrap ${getFontSize(targetCharacter)}`}>
            {targetCharacter}
          </span>
        </div>
        
        <ReactSketchCanvas
          ref={canvasRef}
          style={{ width: "100%", height: "300px" }}
          strokeWidth={12}
          strokeColor="#0f172a"
          canvasColor="#ffffff"
        />
      </div>

      <div className="flex flex-wrap justify-center gap-3 w-full max-w-sm">
        <button 
          onClick={clearCanvas}
          className="flex-1 px-4 py-3 bg-muted text-ink font-bold rounded-xl hover:bg-muted-foreground/20 transition-colors"
        >
          Clear
        </button>
        <button 
          onClick={undo}
          className="flex-1 px-4 py-3 bg-muted text-ink font-bold rounded-xl hover:bg-muted-foreground/20 transition-colors"
        >
          Undo
        </button>
        
        {!isFreePracticeMode && (
          <button 
            onClick={checkWriting}
            disabled={isRecognizing}
            className="w-full sm:flex-[2] px-6 py-3 bg-jade text-white font-bold rounded-xl hover:bg-opacity-90 transition-colors disabled:opacity-50 shadow-md"
          >
            {isRecognizing ? "Checking..." : "Check Writing"}
          </button>
        )}
      </div>

      {isFreePracticeMode && (
        <div className="w-full max-w-sm text-center pt-2">
          <p className="text-sm text-muted-foreground">
            Free practice mode. Use the buttons below to change letters!
          </p>
        </div>
      )}

      {!isFreePracticeMode && result !== null && (
        <div className={`w-full max-w-sm p-4 rounded-xl border-2 animate-in fade-in slide-in-from-bottom-4 ${score === 100 ? "bg-green-50 border-green-500 text-green-900" : "bg-red-50 border-red-400 text-red-900"}`}>
          {score === 100 ? (
            <div className="flex flex-col items-center text-center">
              <span className="text-3xl mb-2">🎉</span>
              <p className="font-black text-lg">Perfect!</p>
              <p className="text-sm opacity-90 mt-1">Great job writing {targetCharacter}!</p>
            </div>
          ) : (
            <div className="flex flex-col items-center text-center">
              <p className="font-bold text-lg mb-1">Not quite!</p>
              <p className="text-sm">
                I thought you wrote: <span className="font-black text-xl inline-block ml-1 bg-white px-2 py-1 rounded shadow-sm">{result || "?"}</span>
              </p>
              <p className="text-xs opacity-75 mt-2">Make sure your strokes are clear and fill the box!</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
