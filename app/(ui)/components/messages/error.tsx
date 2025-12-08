"use client";

import { MessageCircleX } from "lucide-react";
import { UIMessageProps } from "../types";

export default function ({ message }: UIMessageProps) {
  if (!message) {
    return null;
  }

  return (
    <div className="message message-error" role="alert">
      <MessageCircleX size={16} /> {message}
    </div>
  )
}