"use client";

import { motion } from "framer-motion";

interface SyllableBlockProps {
  char: string;
  romanization: string;
  meaning?: string;
}

export default function SyllableBlock({ char, romanization, meaning }: SyllableBlockProps) {
  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
      className="flex flex-col items-center justify-center p-4 border border-muted rounded-xl bg-paper min-w-[100px]"
    >
      <span className="text-4xl font-bold text-ink mb-2">{char}</span>
      <span className="text-sm text-muted-foreground">{romanization}</span>
      {meaning && <span className="text-xs text-jade font-medium mt-1">{meaning}</span>}
    </motion.div>
  );
}
