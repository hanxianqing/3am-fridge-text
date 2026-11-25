import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The 3AM Fridge Text, written fresh for this entry.
// The fridge has been counting openings all week — and the pickles
// have had enough. Fresh angle: no milk, no ice, no door left open.
const LINE =
  "It's 3am. I counted: opening #47 this week. The pickles have started a petition.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
// Gate self-check: the entry must be 1–140 UTF-8 characters, not only whitespace.
if (LINE.length < 1 || LINE.length > 140 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-140 characters, got ${LINE.length}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
