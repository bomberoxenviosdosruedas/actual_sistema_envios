# Inventario de Páginas y Rutas: Envíos DosRuedas

Este documento cataloga todas las páginas y rutas oficiales de la plataforma **Envíos DosRuedas** (según el análisis del repositorio de referencia `02enviosdosruedassetiembre`), documentando su propósito y estructura de componentes.

---

## 1. Página Principal (Home)
- **Ruta / Archivo**: `/` (`src/app/page.tsx`)
- **Propósito**: Presentación general de la empresa, propuesta de valor de logística en moto y última milla en Mar del Plata.
- **Componentes clave**: `HeroAnimado`, `SegmentosHome`, `ServicesOverview`, `EmprendedoresHome`, `SocialProofSection`, `CtaSection`.

## 2. Atención al Cliente y Contacto
- **Ruta / Archivo**: `/contacto` (`src/app/contacto/page.tsx`)
- **Propósito**: Canales directos de comunicación, formulario de consultas y datos de contacto operativo.
- **Componentes clave**: `ContactHero`, `ContactForm`, `ContactInfo`, `CopyPhone`, `ConversionBanner`.

## 3. Cotizador Dinámico
- **Ruta / Archivo**: `/cotizar` (`src/app/cotizar/page.tsx`)
- **Propósito**: Cotizador unificado en tiempo real para calcular costos según origen, destino, bultos y servicios.
- **Componentes clave**: `CotizadorUnificado`, `CotizadorHero`, `CotizadorForm`, `CotizadorMapa`, `CotizadorComparativa`, `CotizadorRecargos`.

## 4. Sección de Servicios
- **Ruta principal**: `/servicios` (`src/app/servicios/page.tsx`)
- **Subservicios específicos**:
  - **Envíos Flex**: `/servicios/enviosflex` (Logística 24h para e-commerce).
  - **Envíos LowCost**: `/servicios/servicios/envios-lowcost` (Envíos programados económicos).
  - **Cuenta Corriente Empresas**: `/servicios/empresas-cuenta-corriente` (Soluciones corporativas y facturación mensual).
  - **Envíos Express**: `/servicios/servicios/envios-express` (Moto dedicada inmediata).
  - **Depósito y Fulfillment**: `/servicios/deposito-fulfillment` (Almacenamiento y preparación de pedidos).

## 5. Cobertura Geográfica
- **Ruta / Archivo**: `/cobertura` (`src/app/cobertura/page.tsx`)
- **Propósito**: Explorador interactivo de zonas de cobertura en Mar del Plata, barrios y tiempos de entrega.
- **Componentes clave**: `CoberturaExplorer`, mapa dinámico de zonas.

## 6. Guías y Recursos
- **Ruta / Archivo**: `/guias/envios-flex-mar-del-plata`
- **Propósito**: Guías informativas para vendedores de e-commerce sobre cómo optimizar Mercado Envíos Flex en Mar del Plata.

## 7. Sección Nosotros
- **Redes y Canales**: `/nosotros/nuestras-redes` (Canales oficiales de WhatsApp, Instagram, Facebook).
- **Sobre Nosotros**: `/nosotros/sobre-nosotros` (Misión, visión, historia y equipo de motoqueros).
- **Preguntas Frecuentes (FAQ)**: `/nosotros/preguntas-frecuentes` (Categorías de dudas frecuentes con acordeones interactivos).

## 8. Aspectos Legales
- **Términos y Condiciones**: `/terminos-y-condiciones`
- **Política de Privacidad**: `/politica-de-privacidad`
