import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT = "A microwave is a little box that tickles the tiny drops of water inside your food until they shiver themselves hot.\nIt maps how invisible waves shake water and the shaking becomes heat, but it leaves out that the waves do not cook from a flame and some spots stay cold while others burn.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT + "\n", "utf8");
