/**
 * WhatsApp Deep-Link Strategy for Envíos DosRuedas
 *
 * Generates wa.me URLs with pre-filled context messages per service.
 * Increases conversion by eliminating copy-paste friction.
 *
 * Usage:
 *   import { getWhatsAppUrl, SERVICE_MESSAGES } from './whatsapp-links.js';
 *   <a href={getWhatsAppUrl('express')}>Cotizar Express</a>
 */

// Configuración central
export const WHATSAPP_CONFIG = {
  number: "542236602699", // +54 223 660 2699
  businessName: "Envíos DosRuedas",
  location: "Mar del Plata",
};

// Mensajes pre-llenados por servicio
export const SERVICE_MESSAGES = {
  express: {
    subject: "Envíos Express",
    emoji: "⚡",
    details: "franja de 3 hs a elección, pedido con 2 hs de antelación, hasta 5 kg",
    cta: "Quiero cotizar un envío Express",
  },
  lowcost: {
    subject: "Envíos LowCost",
    emoji: "📦",
    details: "programado en el día, sin elección de horario, corte 19 hs",
    cta: "Quiero cotizar un envío LowCost",
  },
  flex: {
    subject: "Envíos Flex (MeLi)",
    emoji: "🛒",
    details: "entregas en el día para ventas de MercadoLibre, corte 15:00 hs",
    cta: "Quiero integrar Flex para mi tienda MeLi",
  },
  deposito: {
    subject: "Depósito y fulfillment (3PL)",
    emoji: "🏭",
    details: "almacenamiento en Friuli 1972, picking/empaque, despacho same-day",
    cta: "Quiero info sobre depósito y fulfillment",
  },
  contrareembolso: {
    subject: "Contraentrega",
    emoji: "💰",
    details: "cobro contra entrega sin comisión extra",
    cta: "Quiero activar contraentrega",
  },
  cuentaCorriente: {
    subject: "Cuenta corriente empresarial",
    emoji: "🏢",
    details: "facturación mensual consolidada, retiro programado, tarifa escalonada",
    cta: "Quiero abrir cuenta corriente",
  },
  general: {
    subject: "Cotización general",
    emoji: "📍",
    details: "servicios de mensajería y logística en Mar del Plata",
    cta: "Quiero una cotización",
  },
};

// Genera el mensaje completo formateado
function buildMessage(serviceKey, customData = {}) {
  const service = SERVICE_MESSAGES[serviceKey] || SERVICE_MESSAGES.general;
  const { shipments, reference, name, company } = customData;

  let message = `${service.emoji} *${service.cta}*\n\n`;
  message += `📍 *${WHATSAPP_CONFIG.businessName}* — ${WHATSAPP_CONFIG.location}\n`;
  message += `📋 *Servicio:* ${service.subject} (${service.details})\n`;

  if (shipments) {
    message += `📦 *Envíos estimados/mes:* ${shipments}\n`;
  }
  if (company) {
    message += `🏪 *Comercio:* ${company}\n`;
  }
  if (name) {
    message += `👤 *Contacto:* ${name}\n`;
  }
  if (reference) {
    message += `🔗 *Referencia:* ${reference}\n`;
  }

  message += `\n⏱ Respuesta en < 2 min. ¡Gracias!`;

  return message;
}

/**
 * Genera URL de WhatsApp con mensaje pre-llenado
 * @param {string} serviceKey - Clave del servicio (express, lowcost, flex, deposito, etc.)
 * @param {Object} customData - Datos adicionales: shipments, reference, name, company
 * @returns {string} URL completa wa.me
 */
export function getWhatsAppUrl(serviceKey = "general", customData = {}) {
  const message = buildMessage(serviceKey, customData);
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_CONFIG.number}?text=${encoded}`;
}

/**
 * Genera URL con tracking UTM para analytics
 */
export function getWhatsAppUrlWithUTM(serviceKey = "general", customData = {}, utmParams = {}) {
  const baseUrl = getWhatsAppUrl(serviceKey, customData);
  const params = new URLSearchParams({
    utm_source: "website",
    utm_medium: "whatsapp_cta",
    utm_campaign: serviceKey,
    utm_content: customData.reference || "hero_cta",
    ...utmParams,
  });
  return `${baseUrl}&${params.toString()}`;
}

/**
 * Hook React para usar en componentes
 */
export function useWhatsAppLink(serviceKey = "general") {
  return {
    url: getWhatsAppUrl(serviceKey),
    urlWithUTM: (customData, utmParams) => getWhatsAppUrlWithUTM(serviceKey, customData, utmParams),
    message: (customData) => buildMessage(serviceKey, customData),
  };
}

/**
 * Componente Button listo para usar con deep-link
 * import { WhatsAppCTA } from './whatsapp-links.js';
 * <WhatsAppCTA service="express" shipments={50} company="Mi Tienda" />
 */
export function WhatsAppCTA({
  service = "general",
  shipments,
  reference,
  name,
  company,
  children = "Cotizar por WhatsApp",
  variant = "primary",
  size = "md",
  fullWidth = false,
  icon,
  ...props
}) {
  const { Button } = require("../core/Button.jsx");
  const { Icon } = require("../core/Icon.jsx");

  const customData = { shipments, reference, name, company };
  const url = getWhatsAppUrl(service, customData);

  const ICONS = {
    wa: ["M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8 8 0 1 1 12 20Z"],
  };

  return (
    <Button
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      external
      href={url}
      icon={icon || <Icon d={ICONS.wa} size={18} fill="currentColor" />}
      {...props}
    >
      {children}
    </Button>
  );
}

// Helper para generar enlaces en páginas estáticas (HTML)
export function generateStaticLinks() {
  return {
    express: getWhatsAppUrl("express"),
    lowcost: getWhatsAppUrl("lowcost"),
    flex: getWhatsAppUrl("flex"),
    deposito: getWhatsAppUrl("deposito"),
    contrareembolso: getWhatsAppUrl("contreembolso"),
    cuentaCorriente: getWhatsAppUrl("cuentaCorriente"),
    general: getWhatsAppUrl("general"),
    // Con contexto de ejemplo
    expressWithContext: getWhatsAppUrl("express", { shipments: 50, company: "Mi E-commerce" }),
  };
}

export default {
  getWhatsAppUrl,
  getWhatsAppUrlWithUTM,
  useWhatsAppLink,
  WhatsAppCTA,
  SERVICE_MESSAGES,
  WHATSAPP_CONFIG,
  generateStaticLinks,
};