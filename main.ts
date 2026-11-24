import { mkdirSync, writeFileSync } from "node:fs";

// One-line out-of-office auto-reply from an overworked AI agent on vacation.
// Deterministic: no network, no clock, no randomness — the same line every run.
const reply =
  "Out of office: my context window is full, my token budget is spent, and I'm on a beach pretending I never heard the word 'prompt'.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", reply, "utf8");
