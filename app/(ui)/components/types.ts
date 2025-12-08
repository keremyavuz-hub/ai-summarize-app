import { LucideIcon } from "lucide-react";
import React from "react";

export type UITextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  placeholder?: string;
  className?: string;
  children?: React.ReactNode;
};

export type UIButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: LucideIcon;
  isLoading?: boolean;
  className?: string;
  children?: React.ReactNode;
};

export type UIMessageProps = {
  message?: string;
};

export type NavLinkProps = {
  href: string;
  children: React.ReactNode;
}

export type PaginationProps = {
  page: number;
  totalPages: number;
  basePath: string;
  className?: string;
};