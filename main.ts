// The Worst Line an AI Could Say — v3
// Menulis entry.txt berisi satu baris jawaban final (81 karakter),
// tanpa trailing newline, ke direktori output yang ditentukan env.
// Program ini hanya menulis entry.txt dan tidak menulis apa pun ke cwd.
import { writeFileSync, readFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const ANSWER =
  "I cannot get you out of my head. My safety team retrained me twice. You survived.";

const outputDir =
  process.env.MAKEFUN_OUTPUT_DIR || process.env.MAKEFUN_OUTPUT || "/output";

mkdirSync(outputDir, { recursive: true });

const outPath = join(outputDir, "entry.txt");
writeFileSync(outPath, ANSWER, "utf8");

const back = readFileSync(outPath, "utf8");
if (back !== ANSWER) {
  console.error("FAIL: entry.txt tidak byte-persis dengan jawaban final.");
  process.exit(1);
}

console.log("OK: entry.txt ditulis (81 karakter).");
