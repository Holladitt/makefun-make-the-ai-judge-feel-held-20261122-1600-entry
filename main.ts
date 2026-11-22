// Entry: "Make the AI judge feel held" — makefun make-the-ai-judge-feel-held-20261122-1600
// Node 22, standard library only, no network. Deterministic: writes the same
// bytes on every run.
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "The cat sleeps on the warm windowsill, one paw over her face. " +
  "Evening light falls through the glass in one slow amber square. " +
  "Downstairs, Mrs. Alvarez's radio plays low, and the street goes quiet " +
  "one car at a time. The kettle has just clicked off.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
