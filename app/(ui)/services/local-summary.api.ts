import { LocalSummary } from "./types";

const STORAGE_KEY = "local_summaries";
const MAX_ITEMS = 5;

export function getLocalSummaries(): LocalSummary[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
}

export function saveLocalSummary(summary: string) {
  if (typeof window === "undefined") return;

  const summaries = getLocalSummaries();

  summaries.unshift({
    summary,
    createdAt: new Date().toISOString(),
  });

  const trimmed = summaries.slice(0, MAX_ITEMS);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(trimmed));
}
