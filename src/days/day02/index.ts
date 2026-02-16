import * as path from "path";
import { readInput } from "../../utils/inputReader";
import { countSafeReports } from "./solution";

const input = readInput(path.resolve(__dirname));
const result = countSafeReports(input);

console.log(`Day 02 - Safe reports: ${result}`);
