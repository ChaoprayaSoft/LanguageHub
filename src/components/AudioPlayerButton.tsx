"use client";

import { Volume2 } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

interface AudioPlayerButtonProps {
  text: string;
  lang?: string;
  accentColor?: "jade" | "crimson";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function AudioPlayerButton({ 
  text, 
  lang = "ko-KR", 
  accentColor = "jade",
  size = "md",
  className = ""
}: AudioPlayerButtonProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const playAudio = (e: React.MouseEvent) => {
    e.stopPropagation();

    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      alert("Text-to-speech is not supported in your browser.");
      return;
    }

    try {
      window.speechSynthesis.cancel(); // Stop any pending utterance
      setIsPlaying(true);
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = lang;
      utterance.rate = 0.8; // slightly slower for language learners

      utterance.onend = () => {
        setIsPlaying(false);
      };

      utterance.onerror = () => {
        setIsPlaying(false);
      };

      window.speechSynthesis.speak(utterance);
    } catch {
      setIsPlaying(false);
    }
  };

  const activeBg = accentColor === "crimson" ? "bg-crimson text-paper" : "bg-jade text-paper";
  
  const sizeClasses = size === "sm" 
    ? "p-1.5" 
    : size === "lg" 
    ? "p-3" 
    : "p-2";
    
  const iconSize = size === "sm" ? 15 : size === "lg" ? 22 : 18;

  return (
    <motion.button
      type="button"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={playAudio}
      className={`rounded-full flex items-center justify-center transition-colors shrink-0 ${sizeClasses} ${
        isPlaying ? activeBg : "bg-muted text-ink hover:bg-ink hover:text-paper"
      } ${className}`}
      title={`Listen to pronunciation: ${text}`}
      aria-label={`Listen to ${text}`}
    >
      <Volume2 size={iconSize} />
    </motion.button>
  );
}
