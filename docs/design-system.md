# Documentación del Sistema de Diseño: Envíos DosRuedas

Este documento recopila y formaliza los fundamentos, tokens, componentes y reglas de arquitectura extraídos del repositorio de referencia (`02enviosdosruedassetiembre`) y adaptados para la infraestructura visual de **Envíos DosRuedas**.

---

## 1. Filosofía y Atmósfera Visual ("Airy yet Precise")

El sistema visual proyecta agilidad urbana, solidez técnica y confianza marplatense, inspirado en la señalética vial y la logística de última milla.

- **Ley de Tres Colores**: La interfaz se rige estrictamente por tres pilares cromáticos:
  1. **Azul Institucional Vibrante** (`#0950F6`): Techo absoluto de oscuridad, usado en titulares, textos principales y bordes de enfoque.
  2. **Amarillo Vial de Alta Visibilidad** (`#FFEC01`): Reservado para CTAs primarios, insignias y acentos clave (cobertura visual < 15%).
  3. **Blanco Puro** (`#FFFFFF`): Lienzo base y superficies interiores.
- **Prohibiciones categóricas**: Se prohíben el negro puro (`#000000`), grises neutros/oscuros, verdes genéricos y azules más oscuros que `#0950F6`.

---

## 2. Tokens Atómicos (`tokens/`)

- **Colores (`tokens/colors.css`)**: Pasos canónicos de azul (50 a 500) y amarillo (50 a 600), junto con roles semánticos (`--surface-page`, `--surface-card`, `--surface-muted`, `--text-body`, `--border-subtle`, `--action-primary`).
- **Tipografía (`tokens/typography.css`)**:
  - `Anton` (`--font-display`): Titulares H1/H2, mayúsculas, tracking `-0.03em`, leading `.92`.
  - `Bebas Neue` (`--font-subheading`): Eyebrows, nav, botones, mayúsculas con `tracking-wider`.
  - `Outfit` (`--font-sans`): Cuerpo de texto (16px / 14px en cards, leading 1.625).
  - `Geist Mono` (`--font-mono`): Precios, teléfonos, horarios, datos tabulares (`tabular-nums`).
- **Espaciados y Radios (`tokens/spacing.css`, `tokens/radius.css`)**: Base modular de `0.25rem`, contenedor principal de `80rem` (1280px), alturas táctiles mínimas de `44px`, radios `rounded-full` para acciones, `rounded-xl` para controles e inputs, y `rounded-2xl` para tarjetas.
- **Sombras (`tokens/shadows.css`)**: Sombras teñidas con azul (`#0950F6`) y amarillo (`#FFEC01`), eliminando sombras negras genéricas.

---

## 3. Arquitectura de Componentes Modulares (`components/`)

- **Core (`components/core/`)**:
  - `Button`: Componente unificado con variantes (`primary`, `secondary`, `ghost`, `social`), superficies y tamaños accesibles.
  - `InputField`: Campos de entrada con etiquetas Bebas y estados de foco limpios.
  - `Badge`: Insignias con soporte para variantes y rotación opcional.
  - `BezelCard`: Tarjetas de doble bisel (`DoubleBezelCard`) con efecto de elevación y hover.
- **Blocks (`components/blocks/`)**: Secciones reutilizables como `PageHero`, `Section`, `Steps`, `StatList`, `CtaBanner`, `SocialCard`, `ContactRow`, `CopyField`, y `QuantityStepper`.
- **Layout (`components/layout/`)**: `SiteHeader` (fijo, con compresión al hacer scroll), `SiteFooter`, y `Marquee`.
- **Data (`components/data/`)**: `PricingCard`, `Accordion` (FAQ), `Timeline`, `ReviewCard`, y `FilterChips`.
