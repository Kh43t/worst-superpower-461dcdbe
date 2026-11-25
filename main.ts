// Worst Superpower — a make.fun program/v1 entry.
//
// The program writes exactly one line (at most 140 characters) to
// /output/entry.txt. The line invents a superpower and makes plain, in the
// same breath, why it is useless: that is the whole joke, and the judge
// reads the file as submitted. The output is deterministic — the same line
// on every run, with no trailing newline, so the file holds exactly one line.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Once a day I can summon a slightly damp sock into my hand, anywhere on Earth, and it is always a left one.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
