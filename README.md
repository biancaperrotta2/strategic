# STRATEGIC — Protection & Intelligence

Landing page de **STRATEGIC Protection & Intelligence**, empresa de seguridad privada, protección ejecutiva e inteligencia en Mendoza y la región de Cuyo.

## Stack

- Next.js 14 (App Router) · React 18
- Tailwind CSS 3 · Framer Motion · Lucide React
- Bilingüe: `/es` y `/en`, con hreflang y redirección automática por idioma

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:3000 → redirige a /es o /en
npm run build    # build de producción
```

## Dónde se edita cada cosa

| Qué | Archivo |
|---|---|
| Teléfono, WhatsApp, mail, dominio, idiomas | `lib/site.js` |
| Todos los textos (ES / EN), servicios, planes, metodología | `lib/content.js` |
| Intro animada del logo | `components/StrategicHero.jsx` + `public/strategic/` |
| Formulario Reunión / Cotización / Presupuesto | `components/QuoteModal.jsx` |
| SEO, metadatos y JSON-LD | `app/[lang]/layout.jsx` |

## Antes de publicar

- [ ] Datos reales en `lib/site.js` (los actuales son de ejemplo)
- [ ] Packs reales en `lib/content.js` (los planes actuales son un ejemplo)
- [ ] `public/og.jpg` (1200×630), `public/favicon.ico`, `public/apple-touch-icon.png`

Contexto completo del proyecto para Claude Code: [`CLAUDE.md`](./CLAUDE.md).
