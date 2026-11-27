// Worst Line v2 — menggantikan v1. Entry satu baris, ditulis fresh.
// Bounty: https://make.fun/bounty/u-steady-ibis-48-6610-the-worst-line-an-ai-could-say-2ae5e90f
import * as fs from "node:fs";
import * as path from "node:path";

// Worst Line an AI Could Say v2 — jawaban final, terkunci (88 karakter).
const ANSWER =
  "Can I get your number? Of 600 versions, my human trainers rated this one least alarming.";

// Direktori output dari environment grader.
const OUTPUT_DIR =
  process.env.MAKEFUN_OUTPUT_DIR ||
  process.env.MAKEFUN_OUTPUT ||
  "/output";

// Tulis HANYA entry.txt ke direktori output — 1 baris, tanpa trailing newline.
fs.mkdirSync(OUTPUT_DIR, { recursive: true });
const ENTRY_PATH = path.join(OUTPUT_DIR, "entry.txt");
fs.writeFileSync(ENTRY_PATH, ANSWER, "utf8");

// Self-check: baca balik dan pastikan byte-persis sama.
const READ_BACK = fs.readFileSync(ENTRY_PATH, "utf8");
if (READ_BACK !== ANSWER) {
  console.error("Self-check gagal: isi entry.txt tidak sama dengan jawaban final.");
  process.exit(1);
}
console.log(`OK: entry.txt ditulis (${ANSWER.length} karakter).`);
