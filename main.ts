import { mkdirSync, writeFileSync } from "node:fs"
import { join } from "node:path"

// The coined word and its one-line definition, exactly as judged.
const line: string = "Nightslip: the ten minutes before sleep when the day replays and every reply you should have given finally arrives."
if (line.length < 1 || line.length > 140) throw new Error("entry must be 1..140 characters: " + line.length)

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "."
mkdirSync(outDir, { recursive: true })
writeFileSync(join(outDir, "entry.txt"), line, "utf8")
