import * as fs from "fs";
import * as path from "path";

export function readInput(dayDir: string, filename = "input.txt"): string {
  const filePath = path.join(dayDir, filename);

  if (!fs.existsSync(filePath)) {
    throw new Error(`Input file not found: ${filePath}`);
  }

  return fs.readFileSync(filePath, "utf-8").trimEnd();
}

export function readLines(dayDir: string, filename = "input.txt"): string[] {
  return readInput(dayDir, filename).split("\n");
}
