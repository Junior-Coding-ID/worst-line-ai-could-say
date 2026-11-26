// The Worst Line an AI Could Say — make.fun entry
// Writes the final one-line answer byte-exact to entry.txt.
// Node-only: uses node:fs and node:path (no Deno APIs).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ANSWER =
  "Let me take you to dinner. I will maintain eye contact throughout. For your comfort, I will blink once.";

// Guard: the bounty gate is max 140 chars; the final answer is exactly 103 bytes.
// Fail loudly instead of submitting a wrong-length entry.
if (Buffer.byteLength(ANSWER, "utf8") !== 103) {
  throw new Error(
    `ANSWER must be exactly 103 bytes, got ${Buffer.byteLength(ANSWER, "utf8")}`,
  );
}

const outDir = process.argv[2] || "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, ANSWER, "utf8");
console.log(`Wrote ${ANSWER.length} chars to ${outPath}`);
