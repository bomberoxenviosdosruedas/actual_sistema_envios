# Lógica de Claude Design y Generación de Sistemas de Diseño

Este documento detalla la arquitectura, el flujo lógico y los principios operativos mediante los cuales **Claude Code** y las herramientas asociadas (como **Superdesign** y los sistemas de diseño basados en fichas atómicas) analizan, estructuran, generan y mantienen sistemas de diseño web modernos.

---

## 1. Fundamentos de Claude Design

Claude Design es un enfoque metodológico y automatizado para la creación de interfaces de usuario robustas y coherentes con la identidad de marca. A diferencia de la generación arbitraria de código, Claude Design opera bajo una estricta **cadena de verdad (Source of Truth)** que vincula:
1. **Tokens Atómicos** (`tokens/`): Definiciones puras de diseño en variables CSS.
2. **Componentes Modulares** (`components/`): Primitivas reutilizables divididas en categorías (`core`, `blocks`, `layout`, `data`).
3. **Manifiestos y Metadatos** (`_ds_manifest.json`): Estructuras de sincronización que permiten mapear componentes, rutas, variables y estados para previsualización e iteración en tiempo real.

---

## 2. Proceso de Análisis de Repositorios (Repo Analysis & Init)

Cuando se inicializa un sistema de diseño en un proyecto existente (por ejemplo, en el ecosistema de `actual_sistema_envios`), la lógica de descubrimiento ejecuta los siguientes pasos deterministas:

### a) Escaneo Estructural
El agente inspecciona la estructura de directorios buscando patrones predefinidos:
- **`tokens/`**: Identifica archivos CSS que configuran la paleta cromática, tipografías, espaciados, radios de borde, elevaciones (sombras) y transiciones.
- **`components/`**: Busca subdirectorios lógicos (`core/`, `blocks/`, `layout/`, `data/`) para extraer componentes UI con sus definiciones de TypeScript (`.d.ts`), implementaciones React/JSX (`.jsx`) y documentación de comportamiento (`.prompt.md`).
- **`source/` o `ui_kits/`**: Analiza páginas estáticas y prototipos interactivos para extraer el árbol de dependencias, garantizando que los componentes reflejen el uso real en producción.

### b) Generación de Contexto (`.superdesign/init/` o Manifiestos Locales)
Se compilan registros estructurados que sirven como contexto para cualquier tarea de generación posterior:
- `components.md`: Registro de componentes reutilizables y su código fuente.
- `layouts.md`: Estructuras de navegación, cabeceras y pies de página.
- `routes.md`: Mapeo de rutas y páginas de la aplicación.
- `theme.md`: Tokens de diseño y configuraciones de Tailwind CSS.

---

## 3. Arquitectura de Tokens Atómicos

La lógica de Claude Design prioriza los tokens CSS nativos sobre los valores mágicos o arbitrarios. Los archivos en la carpeta `tokens/` se organizan de la siguiente manera:

- **`colors.css`**: Define la paleta principal y los roles semánticos (superficies, textos, bordes, anillos de foco y acciones). Por ejemplo, el color de marca primario (`#0950F6` azul eléctrico y `#FFEC01` amarillo de señalética) y sus roles correspondientes (`--surface-page`, `--text-body`, `--action-primary`).
- **`typography.css`**: Configura las familias tipográficas (`--font-display` para Anton, `--font-subheading` para Bebas Neue, `--font-sans` para Outfit y `--font-mono` para Geist Mono), junto con escalas fluidas (`clamp()`), alturas de línea y espaciados de letras (`tracking`).
- **`spacing.css` y `radius.css`**: Establecen la escala modular basada en múltiplos de `0.25rem`, alturas de control táctil (mínimo `44px`) y radios consistentes (`rounded-full` para acciones, `rounded-xl` para controles e inputs, `rounded-2xl` para tarjetas).
- **`shadows.css`**: Agrupa elevaciones basadas en la sombra principal de la marca con opacidades controladas y efectos especiales (como `--shadow-cta-glow` o `--shadow-brutal`).
- **`motion.css`**: Define curvas de Bézier (`--ease-spring`, `--ease-default`) y duraciones estandarizadas para microinteracciones.

---

## 4. Componentes Modulares y Prorrateo de Variantes

Los componentes siguen una estricta taxonomía de diseño modular:

1. **`core/`**: Elementos atómicos de la interfaz (botones, insignias, entradas de texto, tarjetas con bisel). El componente `Button`, por ejemplo, centraliza múltiples variantes (`primary`, `secondary`, `ghost`, `social`), superficies (`light`, `dark`), y tamaños (`sm`, `md`, `lg`) en una sola interfaz tipada, eliminando la dispersión de clases CSS arbitrarias en el código HTML.
2. **`blocks/`**: Secciones compuestas reutilizables (héroes de página, pasos numerados, listas de estadísticas, banners de CTA, tarjetas sociales).
3. **`layout/`**: Contenedores estructurales globales (cabeceras fijas con compresión al hacer scroll, marquesinas de texto en movimiento, pies de página).
4. **`data/`**: Componentes orientados a la visualización y filtrado de datos (tablas de precios, acordeones de preguntas frecuentes, líneas de tiempo, tarjetas de reseñas).

Cada componente define explícitamente sus **variantes**, **estados** (`default`, `hover`, `active`, `disabled`, `loading`), y **requisitos de accesibilidad** (roles ARIA, navegación por teclado, contraste WCAG AA/AAA).

---

## 5. Sincronización e Interacción en el Lienzo (`_ds_manifest.json`)

El archivo de manifiesto (`_ds_manifest.json`) actúa como el puente entre el código local y la plataforma de diseño en la nube (Superdesign). En este archivo se registran:
- El espacio de nombres del proyecto y su versión actual.
- La lista completa de componentes con sus rutas relativas.
- Las tarjetas de guía visual (`cards`) que documentan la paleta de colores, la tipografía, las sombras y los principios de marca en vistas previas renderizadas.
- Las variables de diseño globales utilizadas por el motor de renderizado para asegurar la paridad visual absoluta entre el repositorio local y el lienzo interactivo.

---

## 6. Principios de Coherencia y Restricciones de Marca

La lógica de generación de Claude Design impone invariantes estrictos derivados de la auditoría de diseño:
- **Contraste WCAG**: Se validan matemáticamente todas las combinaciones de color. Por ejemplo, el texto sobre fondo amarillo (`#FFEC01`) debe ser obligatoriamente azul eléctrico (`#0950F6`), garantizando ratios superiores a 4.5:1.
- **Tipografía y Pesos**: Se evita estrictamente el uso de negritas sintéticas (`font-bold`) en familias tipográficas con un único peso disponible en renderizado (como Anton o Bebas Neue de peso 400), delegando la jerarquía visual al tamaño, las mayúsculas y el espaciado de letras.
- **Áreas Táctiles**: Ningún control interactivo mide menos de `44px` de altura o ancho, garantizando una experiencia accesible en dispositivos móviles y de escritorio.
