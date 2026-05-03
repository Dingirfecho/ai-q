# A.I.·Q — The A.I. Strategy Type Indicator

Static site for **ai-q.fit** by Dr. Federico Andino.
Art-Deco visual system, fully bilingual (Spanish default · English secondary).

## What's in this bundle

```
.
├── index.html                     ← Homepage (default: ES)
├── quiz.html                      ← 20-question assessment (bilingual)
├── sama.html / sama-en.html       ← SAMA framework page (ES / EN)
├── types/                         ← 32 type pages (16 codes × ES/EN)
│     ├── cpbi.html, cpbi-es.html
│     ├── cptb.html, cptb-es.html
│     └── … (all 16)
├── AI-Q-Types-Guide.html          ← Types guide (EN, print-ready)
├── AI-Q-Guia-de-Tipos-ES.html     ← Guía de Tipos (ES, print-ready)
├── AIQCasesEng.html               ← Case studies (EN, print-ready)
├── AIQCasosESP.html               ← Casos (ES, print-ready)
├── deco.css                       ← Shared design system
├── favicon.svg                    ← Diamond mark
├── assets/                        ← Type illustrations (SVG)
└── README.md
```

All HTML files are self-contained — no build step, no JS framework, no external runtime dependencies. Fonts come from Google Fonts.

## Print-ready guides

The four `*Guide*` and `*Cases*` HTML files replace the previous PDF placeholders. Each has a deco cover spread plus content pages styled with `@page { size: letter }` so users can:

1. Open the file in a browser
2. Cmd+P / Ctrl+P → **Save as PDF**

This produces a properly branded PDF on demand without shipping a binary in the repo.

## Deployment (GitHub Pages)

1. Drop everything in this folder at the **root** of `Dingirfecho/ai-q`
2. **Settings → Pages → Branch: `main` / `(root)` → Save**
3. Live at `https://dingirfecho.github.io/ai-q/` (or your custom domain)

## Author

Dr. Federico Andino · ai-q.fit
