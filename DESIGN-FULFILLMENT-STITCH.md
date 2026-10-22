# Especificación de Diseño: Depósito Central & Fulfillment
## Envíos DosRuedas · Design System v2

Este documento sintetiza el análisis exclusivo del directorio local `C:\Users\prest\proyectos\actual_sistema_envios` y la especificación de diseño para el servicio de **Depósito Central & Fulfillment (3PL)** en Mar del Plata.

---

### 1. Resumen del Contexto del Directorio
- **Marca y Producto:** Envíos DosRuedas (logística urbana y mensajería en moto en Mar del Plata, base central en Friuli 1972).
- **Reglas Críticas del Design System v2 (`DESIGN.md`):**
  - **Paleta Estricta:** Azul máximo `#0950F6` (se eliminaron azules más oscuros como el 600-900). Amarillo `#FFEC01` para CTAs primarios y acentos; Amarillo hover `#FFF12E`.
  - **Contraste Obligatorio:** Texto sobre fondo amarillo es **siempre** `#0950F6` (relación 4.94:1). Texto de cuerpo en `#0950F6`.
  - **Tipografía:** 
    - `Anton 400`: Display (H1/H2) en mayúsculas con tracking `-0.03em`. Titulares con frase clave en píldora amarilla rotada `-1°`.
    - `Bebas Neue 400`: Subheading, botones, labels y navegación (sin negrita sintética `font-bold`).
    - `Outfit`: Cuerpo de texto (16px / 1.625) con legibilidad clara.
    - `Geist Mono`: Números, direcciones (`Friuli 1972`), horarios (`15:00 hs`) y teléfonos en `tabular-nums`.
  - **Componente Botón:** Botón único con píldora `rounded-full`, altura táctil accesible $\ge 44\text{px}$.
  - **Tarjetas:** Double-bezel (`double-bezel-outer` radio 24px + `double-bezel-inner` radio 16px).
  - **Heroes:** Fondos plenos de borde a borde únicamente en Azul-500 o Amarillo-500.

---

### 2. Archivos Generados en el Repositorio
1. **Pantalla React UI Kit:**
   - [`ui_kits/website/DepositoFulfillmentScreen.jsx`](file:///C:/Users/prest/proyectos/actual_sistema_envios/ui_kits/website/DepositoFulfillmentScreen.jsx)
   - Integrado en [`ui_kits/website/index.html`](file:///C:/Users/prest/proyectos/actual_sistema_envios/ui_kits/website/index.html) (ruta `deposito` y navegación interactiva).
2. **Prototipo HTML Standalone:**
   - [`diseno-deposito-fulfillment.html`](file:///C:/Users/prest/proyectos/actual_sistema_envios/diseno-deposito-fulfillment.html)
   - Visualizable directamente en navegador con el sistema de tokens, tarjetas double-bezel y simulador reactivo.

---

### 3. Pipeline de Prompt Mejorado para Stitch (`/stitch::generate-design`)

En caso de ejecutar la generación directa en el motor Stitch una vez autenticado el MCP:

```markdown
Landing page and operational dashboard for an urban 3PL warehouse and e-commerce fulfillment hub located in Mar del Plata. The interface guides online store owners to store their inventory locally, automate packaging, and offer same-day motorcycle deliveries.

**PLATFORM:** Web, Desktop-first (responsive down to 360px mobile)

**PAGE STRUCTURE:**
1. **Header:** 
   Sticky navigation bar with high-contrast branding ("ENVÍOS DOSRUEDAS" wordmark), service links (Express, LowCost, Flex, Depósito), direct contact phone trigger, and an action pill button linking directly to WhatsApp quotation.

2. **Hero Section:**
   Full-bleed saturated hero container. Left column contains an operational pill badge ("Depósito central · Friuli 1972"), an uppercase condensed display headline with a rotated highlighted keyword pill ("Almacená en Mar del Plata, VENDÉ SIN FRENAR"), explanatory body text, a primary CTA button paired with a secondary hollow button, and a horizontal 3-column metric row in monospace tabular numerals (Address, 15-min packing time, 100% stock tracking). Right column features a 3D isometric representation of the central warehouse.

3. **Primary Content Area:**
   - **Infrastructure Grid:** 4-column card grid using double-border outer containers and rounded inner panels. Each card features a circular icon glyph, bold condensed subheader, and concise operational copy covering QR Cataloging, 15-minute picking, Same-Day dispatch, and real-time WhatsApp stock sync.
   - **Cost Simulator Widget:** Asymmetric 2-column split section. Left side explains the pricing model without fixed locks. Right side houses an interactive sliding stepper to compute monthly packaging expenses based on estimated dispatch orders.
   - **Tiered Pricing Matrix:** 3 pricing cards comparing PyME Shelf Module (1 m³), Professional Rack Module (3 m³), and Enterprise Turnkey Fulfillment (+3 m³), highlighting key deliverables in a bulleted checkmark list.
   - **Workflow Sequence:** Horizontal 4-step progressive timeline illustrating the flow from stock arrival at Friuli 1972 to customer doorstep delivery.
   - **Interactive FAQ:** Accessible vertical accordion resolving core queries regarding operating schedules, Mercado Libre Flex cut-off synergy, and Cash-on-Delivery procedures.

4. **Footer:**
   Full-width institutional footer with 4 thematic columns detailing location coordinates, operational cut-off times, quick legal and service navigation, and an immediate WhatsApp chat trigger.
```
