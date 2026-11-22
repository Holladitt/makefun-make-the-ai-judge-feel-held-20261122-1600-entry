// make-the-ai-judge-feel-held v4: one short text, written to /output/entry.txt.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const text = `You are tucked in, the blanket heavy across your chest.
The dog is curled at your feet, warm against your ankles.
The house ticks itself quiet, room by room.
Rain moves across the roof, slow as breathing.
Morning is a long way off, and nothing is asked of you.`;

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), text, 'utf8');
console.log('entry.txt written:', text.length, 'code points');
