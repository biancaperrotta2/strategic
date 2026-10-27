# CLAUDE.md — STRATEGIC Protection & Intelligence

Contexto para Claude Code. Leelo antes de tocar el proyecto.

## Qué es

Landing page de **STRATEGIC – Protection & Intelligence**: seguridad privada (física, patrimonial, corporativa), protección de personas y escolta VIP, inteligencia y ciberseguridad, y auditoría y cumplimiento. La empresa opera en **Mendoza y la región de Cuyo** (Mendoza, San Juan, San Luis), con metodología **ESRM + OPORD + PACE** y alineación a estándares de ASIS International.

Público: empresas, industria e infraestructura crítica, ejecutivos y dignatarios, barrios privados.

## Stack y comandos

- Next.js 14 App Router, React 18, Tailwind 3, Framer Motion 11, Lucide React 0.383. Todo en **JSX** (no TypeScript).
- `npm run dev` · `npm run build` (debe pasar sin errores antes de cada commit) · `npm run lint`.
- Alias de imports: `@/*` → raíz del proyecto (`jsconfig.json`).

## Estructura

```
app/
  [lang]/layout.jsx   root layout por idioma: <html lang>, metadatos, hreflang, JSON-LD
  [lang]/page.jsx     ensambla la página
  [lang]/LangRouter.jsx  cambia de idioma navegando a /es o /en (guarda cookie "lang")
  globals.css · sitemap.js · robots.js
middleware.js         "/" → /es o /en (cookie > Accept-Language > es)
lib/
  site.js             datos de contacto (EJEMPLO) y LOCALES
  content.js          TODOS los textos por idioma (es, en)
  i18n.jsx            LangProvider / useLang()
  intro.js            señal "terminó la intro del logo" (useIntroDone / markIntroDone)
components/
  StrategicHero.jsx   intro animada del logo (piezas WebP en public/strategic/)
  Hero.jsx            envuelve StrategicHero + bajada y CTA (aparecen al terminar la intro)
  Navbar.jsx          menú centrado con paneles por hover, selector ES·EN, botón "Generar reunión"
  Services.jsx · Plans.jsx · Methodology.jsx · Company.jsx · Footer.jsx
  QuoteContext.jsx    openRequest(tab, planId) — tabs: "meeting" | "quote" | "budget"
  QuoteModal.jsx      formulario con pestañas; arma el mensaje y abre WhatsApp
  LuxButton.jsx       botón glass estándar
  ui/stateful-button.jsx  botón con loader → check (API de Aceternity)
  LangToggle.jsx · WhatsAppButton.jsx · Emblem.jsx
```

## Reglas de diseño (no romperlas)

- **Tipografía única: Montserrat** (la misma del logotipo). Títulos Bold en mayúsculas con `tracking-[0.03em]`; etiquetas, menú y botones Medium/SemiBold con `tracking-[0.16em]–[0.18em]`; texto corrido Regular 15–17px. Nada de serif, cursivas ni tracking ≥ 0.25em.
- **Fondo negro puro `#030303`**. Sin grillas, halos de fondo ni degradés metálicos en texto.
- **Dorado plano**: texto `#D9BC7A`, acentos/bordes `#D4AF37` con opacidad baja (`/30`, `/60`). Texto claro `#EADBB4`.
- **Glass**: `bg-white/5` + `border border-[#D4AF37]/30` + `backdrop-blur-md`. Bordes de tarjeta `border-white/5`. Esquinas casi rectas (`rounded-[2px]`–`rounded-md`), no pills.
- **Animación**: resorte `{ type: "spring", stiffness: 100, damping: 20 }`. Nada debe empujar el layout: contenedores de alto fijo con contenido absoluto. Respetar siempre `prefers-reduced-motion`.
- La intro del logo no se toca sin pedido explícito. Navbar y botón de WhatsApp esperan a `useIntroDone()`.

## Reglas de contenido

- **Todo texto visible va en `lib/content.js`, en ES y EN.** Nunca hardcodear strings en componentes. Para sumar un idioma: copiar el bloque `en`, traducir y agregar el código en `LOCALES`.
- **No inventar afirmaciones** (años de experiencia, cifras, "24/7", certificaciones, clientes). Usar solo lo que respalda el cliente.
- ASIS International y DHS: escribir siempre "alineado a estándares de…", nunca "certificado por" ni "estandarizado por", salvo que el cliente acredite una certificación formal.
- Misión, visión y planes de expansión **no** van en la landing (decisión del cliente).
- Marco legal citado: Ley 9578 y DISEP (Mendoza).

## Pendientes

- [ ] Teléfono, WhatsApp, mail y dominio reales en `lib/site.js`.
- [ ] **Packs reales** del cliente: los planes Patrimonial / Corporativo / Ejecutivo de `content.js` son un EJEMPLO armado con servicios del dossier.
- [ ] Confirmar con el cliente que las pestañas "Presupuesto" y "Cotización" significan lo implementado (cotización = servicio puntual; presupuesto = plan continuo o integral).
- [ ] ¿Agenda externa (Calendly / Google Calendar) para "Generar reunión"?
- [ ] ¿Sumar portugués? (turismo y negocios con Brasil en Mendoza).
- [ ] Assets SEO: `public/og.jpg` 1200×630, `favicon.ico`, `apple-touch-icon.png`.

## Flujo de trabajo

1. Cambios chicos y enfocados; un commit por cambio, mensajes en español.
2. `npm run build` sin errores antes de commitear.
3. Probar en escritorio y móvil (375px), en `/es` y `/en`.
