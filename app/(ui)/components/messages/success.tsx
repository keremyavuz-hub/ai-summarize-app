"use client";

import { Check } from "lucide-react";
import { UIMessageProps } from "../types";

export default function ({ message }: UIMessageProps) {
  if (!message) {
    return null;
  }

  return (
    <div className="message message-success" role="alert">
      <Check size={16} /> {message}
    </div>
  )
}