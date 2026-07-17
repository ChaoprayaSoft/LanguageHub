"use client";

import React, { useRef, useState } from "react";
import { ReactSketchCanvas, ReactSketchCanvasRef } from "react-sketch-canvas";
import Tesseract from "tesseract.js";
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
      // Export as PNG with a solid white background (needed for good OCR)
      const dataUri = await canvasRef.current.exportImage("png");

      // Run Tesseract
      const { data } = await Tesseract.recognize(
        dataUri,
        "kor", // Korean language pack
        { logger: (m) => console.log(m) }
      );

      // Clean up the text
      const recognizedText = data.text.trim().replace(/\s+/g, "");
      setResult(recognizedText);

      // Check if it matches the target
      if (recognizedText.includes(targetCharacter)) {
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
          strokeColor="#0f172a" // Dark ink
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
        <button 
          onClick={checkWriting}
          disabled={isRecognizing}
          className="w-full sm:flex-[2] px-6 py-3 bg-jade text-white font-bold rounded-xl hover:bg-opacity-90 transition-colors disabled:opacity-50 shadow-md"
        >
          {isRecognizing ? "Checking..." : "Check Writing"}
        </button>
      </div>

      {result !== null && (
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
