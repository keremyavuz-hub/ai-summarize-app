"use client";

import { Loader } from "lucide-react";
import { UIButtonProps } from "../types";

export default function ({
  children,
  icon: Icon,
  isLoading = false,
  className = "",
  ...props
}: UIButtonProps) {
  return (
    <button className={`inline-flex items-center gap-2 btn ${className}`} disabled={isLoading} {...props}>
      {isLoading && <Loader className="animate-spin" size={18} />}

      {!isLoading && Icon && <Icon size={18} />}

      {children}
    </button>
  );
}
