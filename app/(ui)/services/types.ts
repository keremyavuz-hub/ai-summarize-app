
export interface ApiResponse<T = string> {
  success: boolean;
  status?: number;
  data: T;
}

export type MessageInputType = {
  originalText: string;
  summary: string;
}

export type LocalSummary = {
  summary: string;
  createdAt: string;
};
