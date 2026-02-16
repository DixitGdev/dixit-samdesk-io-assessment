import { parseReports, isReportSafe, countSafeReports } from "./solution";

describe("Day 02 - Red-Nosed Reports", () => {
  const exampleInput = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`;

  describe("parseReports", () => {
    it("should parse input into arrays of numbers", () => {
      const reports = parseReports(exampleInput);
      expect(reports).toHaveLength(6);
      expect(reports[0]).toEqual([7, 6, 4, 2, 1]);
      expect(reports[5]).toEqual([1, 3, 6, 7, 9]);
    });

    it("should handle single-line input", () => {
      const reports = parseReports("5 4 3 2 1");
      expect(reports).toEqual([[5, 4, 3, 2, 1]]);
    });
  });

  describe("isReportSafe", () => {
    it("should return true for all-decreasing within bounds (7 6 4 2 1)", () => {
      expect(isReportSafe([7, 6, 4, 2, 1])).toBe(true);
    });

    it("should return false when increase exceeds 3 (1 2 7 8 9)", () => {
      expect(isReportSafe([1, 2, 7, 8, 9])).toBe(false);
    });

    it("should return false when decrease exceeds 3 (9 7 6 2 1)", () => {
      expect(isReportSafe([9, 7, 6, 2, 1])).toBe(false);
    });

    it("should return false for mixed increasing/decreasing (1 3 2 4 5)", () => {
      expect(isReportSafe([1, 3, 2, 4, 5])).toBe(false);
    });

    it("should return false for equal adjacent levels (8 6 4 4 1)", () => {
      expect(isReportSafe([8, 6, 4, 4, 1])).toBe(false);
    });

    it("should return true for all-increasing within bounds (1 3 6 7 9)", () => {
      expect(isReportSafe([1, 3, 6, 7, 9])).toBe(true);
    });

    it("should return true for a single-level report", () => {
      expect(isReportSafe([5])).toBe(true);
    });

    it("should return true for two levels differing by 1", () => {
      expect(isReportSafe([3, 4])).toBe(true);
    });

    it("should return false for two levels differing by 4", () => {
      expect(isReportSafe([1, 5])).toBe(false);
    });

    it("should return true for strictly increasing by 1 each", () => {
      expect(isReportSafe([1, 2, 3, 4, 5])).toBe(true);
    });

    it("should return true for strictly decreasing by 1 each", () => {
      expect(isReportSafe([5, 4, 3, 2, 1])).toBe(true);
    });
  });

  describe("countSafeReports", () => {
    it("should return 2 for the example input", () => {
      expect(countSafeReports(exampleInput)).toBe(2);
    });

    it("should return 1 when only one report is safe", () => {
      const input = "1 2 3\n1 5 9";
      expect(countSafeReports(input)).toBe(1);
    });

    it("should return 0 when no reports are safe", () => {
      const input = "1 5 2\n3 3 3";
      expect(countSafeReports(input)).toBe(0);
    });
  });
});
