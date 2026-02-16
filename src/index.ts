import * as path from "path";
import { readInput } from "./utils/inputReader";
import { countSafeReports } from "./days/day02/solution";

function solveDay02(): void {
  const input = readInput(path.resolve(__dirname, "days", "day02"));
  const result = countSafeReports(input);
  console.log(`Day 02 - Safe reports: ${result}`);
}

console.log("=== Advent of Code 2024 ===\n");
solveDay02();
