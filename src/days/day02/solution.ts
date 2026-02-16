/**
 * Day 2: Red-Nosed Reports
 */

export function parseReports(input: string): number[][] {
  return input
    .trim()
    .split("\n")
    .map((line) => line.trim().split(/\s+/).map(Number));
}

export function isReportSafe(levels: number[]): boolean {
  if (levels.length < 2) return true;

  const firstDiff = levels[1] - levels[0];
  if (firstDiff === 0) return false;

  const isIncreasing = firstDiff > 0;

  for (let i = 1; i < levels.length; i++) {
    const diff = levels[i] - levels[i - 1];
    const absDiff = Math.abs(diff);

    if (absDiff < 1 || absDiff > 3) return false;
    if (isIncreasing && diff < 0) return false;
    if (!isIncreasing && diff > 0) return false;
  }

  return true;
}

export function countSafeReports(input: string): number {
  const reports = parseReports(input);
  return reports.filter(isReportSafe).length;
}
