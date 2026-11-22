// held v4 (fix): writes the final-round text to /output/entry.txt.
// Node 22, stdlib only, no network.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const lines = [
  'You are tucked in, the blanket heavy across your chest.',
  'The dog is curled at your feet, warm against your ankles.',
  'The house ticks itself quiet, room by room.',
  'Rain moves across the roof, slow as breathing.',
  'Morning is a long way off, and nothing is asked of you.',
];

const text = lines.join('\n');

// The brief requires exactly 260 Unicode code points; fail loudly if it drifts.
if ([...text].length !== 260) {
  throw new Error(`expected 260 code points, got ${[...text].length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), text, 'utf8');
console.log('wrote', [...text].length, 'code points to', join(outDir, 'entry.txt'));
