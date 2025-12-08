"use client";

import { Loader } from "lucide-react";
import { motion } from "framer-motion";
import { useLoadingTexts } from "./hooks/loading.hook";

type LoaderTextProps = {
  isLoading: boolean
}

export default function LoaderText({ isLoading }: LoaderTextProps) {

  const loadingTexts = [
    "Please wait while the summary is being generated",
    "This may take some time depending on the content size",
    "Your content is being carefully processed",
    "The process is progressing carefully to select the most accurate expressions",
    "Work is ongoing to make the text clear and coherent",
    "The content is being reviewed to produce a clearer result",
    "Key points are being organized into a coherent whole",
    "Your information is being transformed into a simpler and more effective structure",
    "The necessary steps are being completed to achieve the proper summary structure",
    "Your summary is about to reach its best form"
  ];

  const { currentText } = useLoadingTexts(isLoading, loadingTexts);

  if (!isLoading) {
    return null;
  }

  return <div className="loader-container">
    <Loader className="animate-spin" size={30} />

    <motion.div
      key={currentText}
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{ duration: 0.45 }}
      className="loading-text"
    >
      {currentText}
    </motion.div>
  </div>
}