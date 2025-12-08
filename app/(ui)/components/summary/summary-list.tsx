"use client";

import { stat } from "fs";
import Pagination from "../pagination";
import SummaryItem from "./summary-item";
import { SummariesProps, SummaryItemDataType } from "./types";

export default function SummaryList({ datas, page, totalPages }: SummariesProps) {

  // Test error
  const status = false;

  if (status) {
    throw new Error("This is a test error message for validation and debugging.");
  }

  return (<>
    <div className="summary-list">
      {datas.map((data: SummaryItemDataType) => (
        <SummaryItem key={data.id} data={data} isDetailVisible={false} />
      ))}
    </div>
    <Pagination page={page} totalPages={totalPages} basePath="/summaries" className="mt-2 bg-none" />
  </>
  );
}