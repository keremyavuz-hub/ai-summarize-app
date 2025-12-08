export function isNewRecord(date: Date, minutes: number = 1) {
  const now = new Date();
  const diff = now.getTime() - new Date(date).getTime();

  return diff <= minutes * 60 * 1000;
}
