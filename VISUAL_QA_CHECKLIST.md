# Visual QA Checklist — Envíos DosRuedas v2
**12 páginas estáticas vs. Sistema de Tokens (tokens/)**

> **Cómo usar:** Abre cada página en browser (320px / 768px / 1440px). Marca ✅ PASS / ❌ FAIL / ⚠️ PARTIAL. Registra desviaciones en "Notas".

---

## 📋 Tokens de Referencia (Fuente de Verdad)

| Categoría | Token | Valor Esperado | Dónde Verificar |
|-----------|-------|----------------|-----------------|
| **Color** | `--color-brand-blue-500` | `#0950F6` | Texto primario, bordes fuertes, focus ring (light) |
| **Color** | `--color-brand-yellow-500` | `#FFEC01` | CTA primario, píldora mark, focus ring (dark) |
| **Color** | `--text-primary` | `rgba(9,80,246,1)` | Headlines, body principal |
| **Color** | `--text-secondary` | `rgba(9,80,246,0.65)` | Leads, descriptions |
| **Color** | `--text-tertiary` | `rgba(9,80,246,0.45)` | Metadata, captions, timestamps |
| **Color** | `--color-brand-blue-400` | `#3570F8` | **Solo decorativo** (anillos, hover bordes) — nunca texto |
| **Color** | `--surface-page` | `#FFFFFF` | Fondo página (light) |
| **Color** | `--surface-muted` | `#E6EEFE` | Fondos alternativos, secciones |
| **Color** | `--border-subtle` | `#BACEFD` | Bordes sutiles, divisores |
| **Color** | `--border-strong` | `#0950F6` | Bordes fuertes, input focus |
| **Typography** | `--font-display` | `Anton, Impact, sans-serif` | h1, h2 (clamp, uppercase, tracking -0.03em/-0.025em) |
| **Typography** | `--font-subheading` | `Bebas Neue, Impact, sans-serif` | h3, nav, botones, labels (uppercase, tracking-wider 0.05em) |
| **Typography** | `--font-sans` | `Outfit, IBM Plex Sans, ...` | Body (400, 1.625 leading, max 56ch) |
| **Typography** | `--font-mono` | `Geist Mono, ...` | Datos (teléfonos, precios, horas) tabular-nums |
| **Typography** | `text-wrap: balance` | h1, h2, h3, Display | Previene palabras huérfanas |
| **Typography** | `text-wrap: pretty` | Lead, prose | Mejora wrapping párrafos |
| **Spacing** | `--container-page` | `80rem` (1280px) | Max-width contenido + gutters responsive |
| **Spacing** | `--section-y-lg` | `6rem` (96px) | Padding vertical secciones grandes |
| **Spacing** | `--section-y-sm` | `4rem` (64px) | Padding vertical secciones estándar |
| **Radius** | `--radius-button` | `9999px` (full) | **Todos** botones, CTA, badges, skip-link |
| **Radius** | `--radius-control` | `16px` (xl) | Inputs, selects, nav items, icon buttons |
| **Radius** | `--radius-card` | `24px` (2xl) | Tarjetas (BezelCard outer) |
| **Radius** | `--radius-card-inner` | `16px` (xl) | Tarjetas (BezelCard inner) |
| **Shadow** | `--shadow-elevated` | `0 16px 40px rgba(9,80,246,.18)` | Modales, dropdowns, hover lift cards |
| **Shadow** | `--shadow-float` | `0 25px 50px -12px rgba(9,80,246,.15)` | BezelCard base |
| **Shadow** | `--shadow-antigravity-deep` | `0 24px 64px rgba(9,80,246,.22)` | BezelCard hover lift |
| **Shadow** | `--shadow-cta-glow` | `0 0 28px rgba(255,236,1,.45), 0 8px 24px rgba(9,80,246,.18)` | Primary button hover |
| **Shadow** | `--shadow-brutal` | `3px 3px 0 #0950F6` | Elementos brutalistas (pocos) |
| **Motion** | `--duration-cta` | `.25s` | Transiciones botón (hover, active, focus) |
| **Motion** | `--ease-spring` | `cubic-bezier(.25,1,.5,1)` | CTA, carrusel, bezel hover |
| **Motion** | `--animate-marquee-left` | `36s linear infinite` | Marquee izquierda |
| **Motion** | `--animate-marquee-right` | `42s linear infinite` | Marquee derecha |
| **Touch** | `--tap-min` / `--control-md` | `44px` / `48px` | Altura mínima táctil botones/inputs |
| **Focus** | `--focus-ring` | `2px + offset 2px` | Visible focus en todos interactivos |

---

## ✅ Checklist por Página

### 1. `home.html` — Landing Principal

| Componente | Verificación | Token/Regla | ✅/❌/⚠️ | Notas |
|------------|--------------|-------------|----------|-------|
| **Hero (azul)** | Fondo `var(--color-brand-blue-500)` | Hero solo azul-500 o amarillo-500 | | |
| **Hero** | Grilla punteada 48px (code-native) | `backgroundImage` grid 48px | | |
| **Hero** | Blobs radiales con blur | 2 blobs: amarillo + azul | | |
| **Hero** | h1 `Display as="h1"` | clamp(36→72px), tracking -0.03em, uppercase | | |
| **Hero** | h1 `text-wrap: balance` | `--type-h1` + balance | | |
| **Hero** | Mark amarillo rotado -1° | `Highlight` inline-block | | |
| **Hero** | Lead `text-wrap: pretty` | `--text-secondary`, max 56ch | | |
| **Hero** | CTA primario `Button size="lg"` | Amarillo-500, azul-500 texto, shadow-accent-sm | | |
| **Hero** | CTA secundario `Button variant="ghost"` | Transparente, azul-500, hover azul-50 | | |
| **Hero aside** | Imagen `inicio-mapa.webp` + alt descriptivo | `alt="Pin de Envíos DosRuedas..."` | | |
| **Hero aside** | Badges flotantes (retiro/franja) | Glass 44px, uppercase Bebas | | |
| **Marquee diferenciales** | 5 items, 30s, pause hover | `--animate-marquee-left`, reduced-motion | | |
| **Section servicios** | `SectionHead` + `Grid` 4 FeatureCard | Eyebrow Badge accent, h2 Display | | |
| **FeatureCard** | tone: accent/light/dark/light | BezelCard tones | | |
| **FeatureCard** | icon Lucide 2px, tag, title, body | `--font-subheading` title, `--font-sans` body | | |
| **Carrusel servicios** | 3D rotation, auto 4.5s, pause hover | `prefers-reduced-motion` respected | | |
| **Carrusel** | Indicadores dots 44px touch | Amarillo activo, rgba blanco inactivo | | |
| **Section socio MDQ** | Fondo azul-500, grid 2 cols | `borderTop/Bottom rgba(255,255,255,.1)` | | |
| **Marquee logos** | Placeholder 6 items, 30s | `rgba(255,255,255,.4)` border dashed | | |
| **Section reseñas** | Fondo blanco, FilterChips 5 opciones | `Badge accent`, `H2` con Mark | | |
| **Marquee reseñas** | 2 filas opuestas 36s/42s | `ReviewCard` tones light/dark/accent | | |
| **CtaForm** | BezelCard light, glass border | Input label Bebas 12px, 44px height | | |
| **CtaForm** | Button WhatsApp fullWidth | External, icon wa, sr-only | | |
| **SocialBand** | Fondo azul-500, 3 BezelCard dark | icon 40px amarillo, Button social dark | | |
| **SkipLink** | `Button size="sm"` primary | `rounded-full`, 44px | | |

---

### 2. `servicios-envios-express.html`

| Componente | Verificación | Token/Regla | ✅/❌/⚠️ | Notas |
|------------|--------------|-------------|----------|-------|
| **Hero (azul)** | Mismo patrón home | Grilla, blobs, h1, mark | | |
| **Section beneficios** | `Steps` numerado 01·02·03 | `ol` mono, h3 Bebas, body Outfit | | |
| **Section tarifas** | Tabla/distancias | Geist Mono tabular-nums precios | | |
| **Section cobertura** | Mapa/imagen + lista barrios | `TagList` rubros | | |
| **CtaForm** | Contexto Express en WhatsApp | `getWhatsAppUrl("express")` | | |

---

### 3. `servicios-envios-lowcost.html`

| Componente | Verificación | Token/Regla | ✅/❌/⚠️ | Notas |
|------------|--------------|-------------|----------|-------|
| **Hero (azul)** | Mismo patrón | | | |
| **Section cómo funciona** | `Steps` 3 pasos | | | |
| **Section tarifas** | Precios por km | Mono tabular-nums | | |
| **ComparisonTable** | **NUEVO** — highlightedService="lowcost" | 10 filas, 4 servicios, CTA links | | |
| **CtaForm** | Contexto LowCost | `getWhatsAppUrl("lowcost")` | | |

---

### 4. `servicios-enviosflex.html`

| Componente | Verificación | Token/Regla | ✅/❌/⚠️ | Notas |
|------------|--------------|-------------|----------|-------|
| **Hero (azul)** | Mismo patrón | | | |
| **Section integración MeLi** | `Steps` 4 pasos | | | |
| **Section requisitos** | `TagList` + `FeatureCard` | | | |
| **ComparisonTable** | **NUEVO** — highlightedService="flex" | | | |
| **CtaForm** | Contexto Flex | `getWhatsAppUrl("flex")` | | |

---

### 5. `servicios-envios-contrareembolso.html`

| Componente | Verificación | Token/Regla | ✅/❌/⚠️ | Notas |
|------------|--------------|-------------|----------|-------|
| **Hero (amarillo)** | **Único hero amarillo** — fondo `var(--color-brand-yellow-500)`, texto azul-500 | Grilla blanca 48px, blobs azul | | |
| **Section cómo funciona** | `Steps` | | | |
| **Section ventajas** | `FeatureCard` grid 3 | | | |
| **ComparisonTable** | **NUEVO** — highlightedService="express" (relacionado) | | | |
| **CtaForm** | Contexto Contraentrega | `getWhatsAppUrl("contrareembolso")` | | |

---

### 6. `servicios-deposito-fulfillment.html`

| Componente | Verificación | Token/Regla | ✅/❌/⚠️ | Notas |
|------------|--------------|-------------|----------|-------|
| **Hero (azul)** | Imagen `deposito-local.webp` | | | |
| **Section modalidades** | 3 FeatureCard (Same Day, DropOFF, Contrareembolso) | | | |
| **Section partner** | 4 FeatureCard | | | |
| **Section DropOFF** | Fondo azul-500, **QuoteCalculator** DropOFF | `basePrice=2400, discountPct=20` | | |
| **QuoteCalculator** | Stepper + slider + chips + ahorro live | WhatsApp deep-link con contexto | | |
| **Section planes** | 3 `PricingCard` (Inicial, 3PL, PyME) | Featured middle, tags | | |
| **CtaForm** | Contexto Depósito | `getWhatsAppUrl("deposito")` | | |

---

### 7. `servicios-plan-emprendedores.html`

| Componente | Verificación | Token/Regla | ✅/❌/⚠️ | Notas |
|------------|--------------|-------------|----------|-------|
| **Hero (amarillo)** | Imagen `deposito-local.webp`, h1 azul-500 con mark azul | | | |
| **Section soluciones** | 3 FeatureCard (Same Day, DropOFF, Contrareembolso) | | | |
| **Section partner** | 4 FeatureCard | | | |
| **Section DropOFF** | **QuoteCalculator** idéntico a deposito | | | |
| **Section planes** | 3 `PricingCard` | | | |
| **CtaForm + SocialBand** | Idem home | | | |

---

### 8. `nosotros-sobre-nosotros.html`

| Componente | Verificación | Token/Regla | ✅/❌/⚠️ | Notas |
|------------|--------------|-------------|----------|-------|
| **Hero (azul)** | h1 "Nosotros", lead | | | |
| **Section historia** | `Display` + `Lead` + imagen | | | |
| **Section valores** | 4 `FeatureCard` (icon, title, body) | | | |
| **Section equipo** | `SocialCard` tipo `canal` | Foto, nombre, rol, LinkedIn | | |
| **CtaForm** | Contexto general | | | |

---

### 9. `nosotros-nuestras-redes.html`

| Componente | Verificación | Token/Regla | ✅/❌/⚠️ | Notas |
|------------|--------------|-------------|----------|-------|
| **Hero (azul)** | Imagen `redes-celular.webp` | | | |
| **Section Instagram** | `SocialCard` tipo `post` grid | Imagen, caption, link | | |
| **Section Facebook** | `SocialCard` tipo `post` grid | | | |
| **Section WhatsApp** | `ContactRow` glass 44px | CopyField teléfono | | |
| **CtaForm** | Contexto redes | | | |

---

### 10. `nosotros-preguntas-frecuentes.html`

| Componente | Verificación | Token/Regla | ✅/❌/⚠️ | Notas |
|------------|--------------|-------------|----------|-------|
| **Hero (azul)** | h1 "Preguntas frecuentes" | | | |
| **Accordion FAQ** | 12+ items, `Accordion` component | Bebas title, Outfit content | | |
| **Accordion** | Un solo abierto a la vez | `prefers-reduced-motion` | | |
| **CtaForm** | Contexto FAQ | | | |

---

### 11. `contacto.html`

| Componente | Verificación | Token/Regla | ✅/❌/⚠️ | Notas |
|------------|--------------|-------------|----------|-------|
| **Hero (azul)** | h1 "Contacto", lead | | | |
| **Section formulario** | `CtaForm` extendido | Input nombre, comercio, select volumen | | |
| **Section info contacto** | `ContactRow` glass 44px × 3 | Teléfono, email, dirección | | |
| **Section horarios** | `StatList` mono (L-V 9-18, S 10-15) | Tabular-nums | | |
| **Section mapa** | Imagen `inicio-mapa.webp` o embed | | | |
| **SocialBand** | Idem home | | | |

---

### 12. `servicios-empresas-cuenta-corriente.html`

| Componente | Verificación | Token/Regla | ✅/❌/⚠️ | Notas |
|------------|--------------|-------------|----------|-------|
| **Hero (azul)** | h1 "Cuenta corriente", lead | | | |
| **Section beneficios** | 4 `FeatureCard` | | | |
| **Section cómo funciona** | `Steps` 4 pasos | | | |
| **Section requisitos** | `TagList` + lista | | | |
| **ComparisonTable** | **NUEVO** — highlightedService="deposito" (3PL) | | | |
| **CtaForm** | Contexto Cuenta Corriente | `getWhatsAppUrl("cuentaCorriente")` | | |

---

## 🔍 Checklist Transversal (Todas las Páginas)

| Área | Verificación | Token/Regla | ✅/❌/⚠️ | Notas |
|------|--------------|-------------|----------|-------|
| **Header** | Fijo 72px, azul-500 | `--header-height`, `bg-brand-blue-500` | | |
| **Header scroll** | Compact: `bg-brand-blue-500/95 shadow-elevated backdrop-blur-md py-2.5` | JS toggle class | | |
| **Nav desktop** | `Button variant="ghost" surface="dark" size="sm"` | 44px touch, Bebas uppercase | | |
| **Nav dropdown** | `rounded-2xl`, items 44px, focus ring amarillo | `bg-brand-blue-500` | | |
| **Nav mobile** | Hamburger → drawer | Same styles | | |
| **Footer** | Azul-500, columnas Bebas | Hover amarillo +4px, barra legal mono | | |
| **Botones** | **Todos** `Button` component | 0 clases arbitrarias, 6 props | | |
| **Botones primary** | Amarillo-500 / azul-500 / shadow-accent-sm | Hover amarillo-400 + cta-glow + icon translateX(4px) | | |
| **Botones secondary** | Blanco / azul-500 / borde 2px azul-500 | Hover azul-50 | | |
| **Botones social** | Azul-500 / blanco / shadow-md | Hover elevated -1px | | |
| **Inputs** | Label Bebas 12px, 44px, rounded-xl, borde 2px | Focus azul-500 + ring 20% | | |
| **Inputs error** | Borde rojo-500 + texto rojo-600 role=alert | `aria-describedby` auto | | |
| **Badges** | `rounded-full`, 12px/14px, mono opcional | Rotación -1° opcional | | |
| **BezelCard** | Double bezel: outer 8px p-2 + inner rounded-xl | Hover lift -4px + antigravity-deep | | |
| **Imágenes** | `loading="lazy"` (no hero), `decoding="async"` | Hero `fetchPriority="high"` | | |
| **Imágenes** | `alt` descriptivo (no vacío) | Hero express: alt descriptivo | | |
| **Reduced motion** | `@media (prefers-reduced-motion: reduce)` | Pausa marquee, carousel, pulse, float | | |
| **Selection** | `::selection` amarillo-500 / azul-500 | Global en base.css | | |
| **Meta theme-color** | `#0950F6` (light) / `#0a0f1a` (dark) | En `<head>` | | |
| **color-scheme** | `:root {color-scheme:light} [data-theme="dark"]{color-scheme:dark}` | En base.css | | |
| **Font loading** | Google Fonts `&display=swap` | 4 familias, variable weights | | |

---

## 🎯 Pruebas de Regresión Críticas

| Prueba | Cómo Verificar | Esperado |
|--------|----------------|----------|
| **Contraste texto principal** | DevTools → Inspect color → Contrast ratio | ≥ 4.5:1 (6.02:1 azul-500/blanco) |
| **Contraste CTA primario** | DevTools → botón amarillo | ≥ 4.5:1 (4.94:1 azul-500/amarillo) |
| **Contraste azul-400** | **NO usar para texto** | Solo decorativo (4.35:1 fail) |
| **Touch target nav** | Click/tap área nav items | ≥ 44×44px |
| **Touch target iconos** | Click/tap iconos copiar/social | ≥ 44×44px |
| **Focus visible** | Tab navigation completa | Anillo 2px + offset 2px en TODOS interactivos |
| **Reduced motion** | OS setting → "Reduce motion" | Marquee pausa, carousel no auto, no pulse/float |
| **Responsive 320px** | Chrome DevTools device toolbar | Single column, hero aside abajo, grid 1fr |
| **Responsive 768px** | Tablet | Hero grid 1fr, carrusel touch, grid 2 cols |
| **Responsive 1440px** | Desktop | Container 1280px, hero 7/5, grid 3-4 cols |
| **Dark theme toggle** | Console: `document.documentElement.dataset.theme='dark'` | Tokens dark aplicados, scrollbars oscuras |
| **WhatsApp deep-link** | Click CTA → abre WhatsApp con mensaje pre-llenado | Servicio, envíos, comercio en mensaje |

---

## 📝 Plantilla de Reporte de Hallazgos

```
## [Página] — [Componente] — [Severidad: CRÍTICA/ALTA/MEDIA/BAJA]

**Token/Regla violada:** --token-name / Regla X.Y
**Actual:** valor observado
**Esperado:** valor del token
**Impacto:** Accesibilidad / Consistencia / Conversión / Performance
**Fix:** Cambio específico en archivo/token
**Evidencia:** Screenshot o selector CSS
```

---

## 📦 Archivos Generados en Esta Auditoría

| Archivo | Tipo | Descripción |
|---------|------|-------------|
| `tokens/colors.css` | Fix | Text hierarchy tokens + dark theme skeleton |
| `tokens/base.css` | Fix | `color-scheme` + theme-color meta comments |
| `components/blocks/Lead.jsx` | Fix | `text-wrap: pretty` + `--text-secondary` |
| `components/blocks/StatList.jsx` | Fix | Label color → `--text-secondary` |
| `components/blocks/TagList.jsx` | Fix | Colors → semantic tokens |
| `components/core/Icon.jsx` | New | Lucide inline SVG component |
| `components/blocks/ComparisonTable.jsx` | New | 10-row × 4-service comparison with highlight |
| `components/blocks/QuoteCalculator.jsx` | New | DropOFF calculator + SimpleQuoteCalculator |
| `components/utils/whatsapp-links.js` | New | Deep-link generator per service + React hook + CTA component |
| `ui_kits/website/shared.jsx` | Update | Exports new components |

---

## ✅ Criterios de Aprobación (Definition of Done)

- [ ] **0 errores CRÍTICOS** (accesibilidad, contraste, touch targets)
- [ ] **≤ 3 errores ALTOS** por página (consistencia tokens)
- [ ] **100% páginas** tienen `text-wrap: balance` en h1-h3
- [ ] **100% páginas** usan `--text-secondary`/`--text-tertiary` para leads/metadata
- [ ] **100% botones** usan componente `Button` (0 clases Tailwind arbitrarias)
- [ ] **100% CTAs WhatsApp** usan `getWhatsAppUrl(serviceKey)` con contexto
- [ ] **Dark theme skeleton** tokens presentes + `color-scheme` meta
- [ ] **ComparisonTable** integrado en 4 páginas de servicio
- [ ] **QuoteCalculator** funcional en Depósito + Emprendedores
- [ ] **Reduced motion** respetado en marquee, carousel, pulse, float

---

**Generado:** $(date) | **Versión:** v2.1 | **Auditor:** Refero-Design Agent