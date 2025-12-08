"use client";
import { formatDate } from "@/app/(ui)/utils/format-date";
import { truncateWords } from "@/app/(ui)/utils/truncate";
import { ChevronRight, FileText, ReceiptText } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { SummaryItemDataType } from "./types";
import { isNewRecord } from "@/app/(ui)/utils/new-record";
import clsx from "clsx";

function SummaryItem({ data, isDetailVisible }: { data: SummaryItemDataType, isDetailVisible?: boolean, }) {
  const [isVisible, setIsVisible] = useState(isDetailVisible);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isNewItem = isNewRecord(data.createdAt, 1);

  const clipboard = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setIsVisible(isDetailVisible);
  }, [isDetailVisible]);

  const copyToClipboard = () => {

    navigator.clipboard.writeText(data.summary);
    if (clipboard.current) {
      clipboard.current.textContent = "Copied!";
    }

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      if (clipboard.current) {
        clipboard.current.textContent = "Copy to Clipboard";
      }
    }, 2000);
  }

  return <>
    <div className={clsx("summary-item flex gap-4 items-center justify-between", { "animate-pulse new": isNewItem })} key={data.id} onClick={() => setIsVisible(!isVisible)}>
      <div className="flex items-center gap-3">
        <FileText />
        <div className="summary-item-date">{formatDate(data.createdAt)}</div>
        <div className="summary-item-content">{truncateWords(data.summary, 20)}</div>
      </div>

      <ChevronRight
        size={16}
        style={{
          transform: `rotate(${isVisible ? 90 : 0}deg)`,
          transition: "transform .3s",
        }}
      />

    </div>

    {isVisible && <div className="summary-detail">
      <div className="summary-detail-controls controls w-full">
        <button onClick={() => copyToClipboard()} ref={clipboard}>Copy to Clipboard</button>
      </div>
      <div className="summary-detail-content">
        <h3><ReceiptText /> Original Text</h3>
        <p>{data.originalText}</p>
        <hr />
        <h3><ReceiptText /> Summary</h3>
        <p>{data.summary}</p>
      </div>
    </div>
    }
  </>
}

export default SummaryItem