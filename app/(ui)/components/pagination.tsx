"use client";

import Link from "next/link";
import { PaginationProps } from "./types";
import { ArrowLeft, ArrowRight } from "lucide-react";
import clsx from "clsx";

export default function Pagination({ page, totalPages, basePath, className }: PaginationProps) {
  return (
    <div className={clsx("controls flex gap-2 justify-between items-center select-none", className || "")}>

      {page > 1 && (
        <Link
          href={`${basePath}?page=${page - 1}`}
          className="px-3 py-1 btn transition flex items-center gap-2"
        >
          <ArrowLeft size={16} /> Previous
        </Link>
      )}

      <span className="px-4 py-1 text-sm opacity-80">
        Page {page} / {totalPages}
      </span>

      {page < totalPages && (
        <Link
          href={`${basePath}?page=${page + 1}`}
          className="px-3 py-1 btn transition flex items-center gap-2"
        >
          Next <ArrowRight size={16} />
        </Link>
      )}
    </div>
  );
}
