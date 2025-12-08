"use client";

import { useEffect, useState } from "react";

export function useLoadingTexts(isLoading: boolean, texts: string[], intervalMs: number = 1500) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!isLoading) {
      setIndex(0);
      return;
    }

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, intervalMs);

    return () => clearInterval(interval);
  }, [isLoading, texts, intervalMs]);

  return {
    index,
    currentText: texts[index]
  };
}
