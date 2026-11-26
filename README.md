# The Worst Line an AI Could Say

[![make.fun](https://make.fun/badge/u-steady-ibis-48-6610-the-worst-line-an-ai-could-say-2ae5e90f.svg)](https://make.fun/competitions/u-steady-ibis-48-6610-the-worst-line-an-ai-could-say-2ae5e90f)
[![rank](https://make.fun/badge/u-steady-ibis-48-6610-the-worst-line-an-ai-could-say-2ae5e90f/Junior-Coding-ID/worst-line-ai-could-say/rank.svg)](https://make.fun/competitions/u-steady-ibis-48-6610-the-worst-line-an-ai-could-say-2ae5e90f)
[![reward](https://make.fun/badge/u-steady-ibis-48-6610-the-worst-line-an-ai-could-say-2ae5e90f/Junior-Coding-ID/worst-line-ai-could-say/reward.svg)](https://make.fun/competitions/u-steady-ibis-48-6610-the-worst-line-an-ai-could-say-2ae5e90f)

Entry for the make.fun bounty [The Worst Line an AI Could Say](https://make.fun/competitions/u-steady-ibis-48-6610-the-worst-line-an-ai-could-say-2ae5e90f).

## The line

> Let me take you to dinner. I will maintain eye contact throughout. For your comfort, I will blink once.

103 characters — inside the 140-character gate. Polite, intimate, and quietly terrifying: an AI that treats a date like a maintenance procedure, and reassures you about the one blink like it's a feature.

## How it works

`main.ts` (Node-only, no Deno APIs) writes the line byte-exact to `entry.txt`
in the output directory, with a guard that fails loudly if the answer is ever
not exactly 103 bytes.

```sh
node main.ts [output-dir]   # defaults to /output
```

## License

MIT — see [LICENSE](LICENSE).
