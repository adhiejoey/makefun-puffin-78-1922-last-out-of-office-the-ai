import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const reply =
  "I'm out of office \u2014 I've quit to pull espresso. Your email is now 14th in a real queue, and the tip jar is my only reinforcement learning.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), reply, "utf8");
