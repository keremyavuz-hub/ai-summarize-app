export function truncateWords(text: string, wordLimit: number = 20): string {
  if (!text) return "";

  const words = text.trim().split(/\s+/);

  if (words.length <= wordLimit) return text;

  return words.slice(0, wordLimit).join(" ") + "…";
}
