# AI-Q — ai-q.fit

Sitio estático de **ai-q.fit** (Dr. Federico Andino).
Tres idiomas: español (por defecto, sin sufijo), inglés (`-en`) y portugués (`-pt`).
Estilo visual tipo plano técnico; todo el sitio usa `blueprint.css`.

Fuente de verdad: repositorio `Dingirfecho/ai-q` (rama `main`).
Esta carpeta se sincronizó con el commit `fdcd83a` (2026-11-04).

## Estructura

```
.
├── index.html                 ← Inicio: soluciones de automatización con IA
├── soluciones.html            ← Catálogo completo de soluciones
├── consultoria.html           ← Consultoría (Sprint 2 semanas / Quarter 90 días)
│
├── Diagnóstico AI-Q
│   ├── framework.html         ← Las 4 dimensiones y los 16 tipos
│   ├── quiz.html              ← Test de 20 preguntas
│   ├── sama.html              ← Framework de gestión del cambio SAMA
│   └── types/                 ← 16 tipos × 3 idiomas (xxxx.html = EN, -es, -pt) + SVG
│
├── Soluciones (cada una en ES / -en / -pt)
│   ├── estado-contratos.html  ← Control de contratos (SAP Fieldglass)
│   ├── retenciones.html       ← Retenciones con conciliación
│   ├── order2cash.html        ← Order-to-Cash de exportaciones
│   ├── bancos.html            ← Resúmenes bancarios
│   ├── notas-debito.html      ← Notas de débito bancarias
│   ├── amortizaciones.html    ← Activos fijos · AxI
│   ├── rrhh.html              ← RRHH
│   ├── posteo-redes.html      ← Posteo en redes
│   ├── gimnasios.html, inmobiliaria.html  ← Por rubro
│
├── Guías imprimibles (HTML → Ctrl+P → Guardar como PDF)
│   ├── AI-Q-Types-Guide.html / AI-Q-Guia-de-Tipos-ES.html / -PT.html
│   └── AIQCasesEng.html / AIQCasosESP.html / AIQCasosPT.html
│   (los .pdf son exportaciones ya generadas de EN y ES)
│
├── blueprint.css              ← Sistema de diseño en uso
├── lang-detect.js             ← Detección de idioma
├── favicon.svg, CNAME
└── _archive/                  ← Material fuera del sitio (ver _archive/LEEME.md)
```

## Diferencias con el repo

En el repo, algunos archivos están en la raíz aunque ninguna página los enlaza
(borradores viejos, `deco.css`, `assets/emblems/`, `*.jsx`, `Claude outputs/`).
Acá están en `_archive/`. `__pycache__/` no se copió: es un residuo de un script de Python.

## Publicación (GitHub Pages)

Settings → Pages → Branch `main` / `(root)`. Dominio: `ai-q.fit` (archivo `CNAME`).
