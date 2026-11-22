// "Held" — v3. Second person throughout: the reader is asleep, being
// carried upstairs in their father's arms. One sensory detail (the warm
// hand on the back), a second concrete image (his warm breath against your
// cheek), one scale image (the night going on without you), a quiet turn at
// the end, no moral. Plain words only. Exactly 280 Unicode code points.
import * as fs from "node:fs";
import * as path from "node:path";

const TEXT =
  "You are asleep in your father's arms. His hand rests flat on your back, warm through your shirt. The stairs creak once under his feet. His breath is warm against your cheeks. Outside, the rain keeps falling on the roof. The night goes on without you, and it does not need you yet.";

const outDir = "/output";
const outFile = path.join(outDir, "entry.txt");
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(outFile, TEXT, "utf8");
