import * as path from "path";
import { readInput, readLines } from "./inputReader";

const fixtureDir = path.resolve(__dirname, "..", "days", "day02");

describe("inputReader", () => {
  describe("readInput", () => {
    it("should read a file and return its trimmed content", () => {
      const content = readInput(fixtureDir, "input.txt");
      expect(content).toContain("7 6 4 2 1");
      expect(content.endsWith("\n")).toBe(false);
    });

    it("should throw for a missing file", () => {
      expect(() => readInput(fixtureDir, "nonexistent.txt")).toThrow(
        "Input file not found",
      );
    });
  });

  describe("readLines", () => {
    it("should return an array of lines", () => {
      const lines = readLines(fixtureDir, "input.txt");
      expect(lines.length).toBeGreaterThan(0);
      expect(lines[0]).toBe("7 6 4 2 1");
    });
  });
});
