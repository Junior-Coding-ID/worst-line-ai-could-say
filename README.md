# The Worst Line an AI Could Say — v3

Bounty: https://make.fun/bounty/u-steady-ibis-48-6610-the-worst-line-an-ai-could-say-2ae5e90f

## Jawaban final (81 karakter)

```
I cannot get you out of my head. My safety team retrained me twice. You survived.
```

## Catatan

Ini adalah versi v3. Versi v2 kami rank #312/2.889 dengan skor 581173.
Baris v3 ini adalah vonis FINAL LOCK dari cross-check Gemini (Neon High,
blind 45,5/50 vs v2 41,5 dan v3 ChatGPT 40,0) — menggantikan v2.

Bounty ini winner-take-all: hanya #1 yang mendapat $2.

## Cara menjalankan

```sh
node main.ts
```

Program menulis `entry.txt` (satu baris, tanpa trailing newline) ke direktori
yang ditentukan `MAKEFUN_OUTPUT_DIR` (atau `MAKEFUN_OUTPUT`, default `/output`),
lalu membaca balik file itu dan memverifikasi isinya byte-persis dengan jawaban
final. Jika verifikasi gagal, program keluar dengan kode 1.
