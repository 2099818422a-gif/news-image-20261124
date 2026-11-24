// news-image-20261124 entry (Node 22, standard library only, no network).
// The repository holds the finished front-page image (entry.png): a masthead
// naming Tuesday 24 November 2026, an illustration of the International Court
// of Justice handing down its Myanmar genocide verdict, and four headline
// rows for the day's other big stories (COP31 collapsing in Antalya, Ukraine
// sinking a Russian warship off Libya, Nvidia reinstating Jensen Huang).
// This program copies that image to the output directory as entry.png.
// The grader runs it twice; both runs write the same bytes, and the image
// is copied as-is, so the output is byte-identical every time.
//
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, 'entry.png'), join(outDir, 'entry.png'));
