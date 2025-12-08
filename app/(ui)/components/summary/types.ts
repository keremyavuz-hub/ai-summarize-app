export type SummaryItemDataType = {
  id: number;
  originalText: string;
  summary: string;
  createdAt: Date;
}

export type SummariesProps = {
  datas: SummaryItemDataType[];
  page: number;
  totalPages: number;
}