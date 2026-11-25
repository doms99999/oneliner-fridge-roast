// Fridge Roast — one line roasting a smart fridge.
// The program writes the roast to /output/entry.txt (at most 200 chars, UTF-8).
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My smart fridge will not dispense water until I buy its $40 filter, then leaks for a week to celebrate the purchase.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
