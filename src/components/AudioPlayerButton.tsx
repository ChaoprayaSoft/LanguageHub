"use client";

import { Volume2 } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

interface AudioPlayerButtonProps {
  text: string;
  lang?: string;
}

export default function AudioPlayerButton({ text, lang = "ko-KR" }: AudioPlayerButtonProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const playAudio = () => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      alert("Text-to-speech is not supported in your browser.");
      return;
    }

    setIsPlaying(true);
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = 0.8; // slightly slower for learning

    utterance.onend = () => {
      setIsPlaying(false);
    };

    window.speechSynthesis.speak(utterance);
  };

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={playAudio}
      className={`p-2 rounded-full flex items-center justify-center transition-colors ${
        isPlaying ? "bg-jade text-paper" : "bg-muted text-ink hover:bg-ink hover:text-paper"
      }`}
      title="Listen to pronunciation"
    >
      <Volume2 size={20} />
    </motion.button>
  );
}
