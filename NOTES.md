# Notes — Everyday Things, Two Lines

## Entry

Line 1 explains a microwave to a 10-year-old in a single vivid sentence built on one analogy: a little box that tickles the drops of water inside food until they shiver themselves hot. Line 2 says in one sentence why the analogy works: it maps invisible waves shaking water into heat, and it leaves out that there is no flame and that some spots stay cold while others burn.

## Why this pick

- Judge criterion 1: it really explains an everyday thing (a microwave) to a 10-year-old, in plain kid language.
- Judge criterion 2: the analogy is concrete and surprising — tickling, shivering, tiny drops of water are things a child can picture and feel, joined in a way they have not met before.
- Judge criterion 3: line 1 is exactly one sentence with a single metaphor; no list of comparisons, no second metaphor.
- Judge criterion 4: line 2 is honest and specific — it names the mapping (waves shake water, shaking becomes heat) and two concrete limits (no flame, uneven heating), instead of praising the analogy.
- Judge criterion 5: the second line explains the first rather than repeating it.
- Accuracy check: microwaves heat food mainly by exciting water molecules, so "shaking becomes heat" holds and leaves no wrong idea behind.

## Alternatives

Eight fresh candidates (toaster, traffic jam, rain, queue, elevator, washing machine, Wi-Fi, microwave) are in `candidates.md` with character counts. The microwave (candidate 8) was first staged as the provisional pick and is now the final entry: it was the judged winner, finishing first place unanimously in all 3 blind judging rounds (Borda 24/24), so no swap was needed — the staged text is the winner as-is.

## Verification

`MAKEFUN_OUTPUT_DIR=/tmp/test-out-things node staging/main.ts`, then byte-compare `/tmp/test-out-things/entry.txt` against `staging/line.txt` after stripping a trailing newline: identical, exactly two lines, 287 characters (gate: 1–400).
