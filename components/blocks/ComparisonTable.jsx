import React from "react";
import { Icon } from "../core/Icon.jsx";

/**
 * Tabla comparativa de servicios Envíos DosRuedas.
 * Features basadas en datos reales de cada servicio.
 */
export function ComparisonTable({ highlightedService, style }) {
  const rows = [
    {
      key: "tipo",
      label: "Tipo de servicio",
      icon: "truck",
      express: "Express (franja 3 hs a elección)",
      lowcost: "LowCost (programado día, sin franja)",
      flex: "Flex / MeLi (integración nativa)",
      deposito: "3PL / Fulfillment (stock + despacho)",
    },
    {
      key: "entrega",
      label: "Ventana de entrega",
      icon: "clock",
      express: "Franja 3 hs a elección (ej. 14-17 hs)",
      lowcost: "En el día, sin elección de horario",
      flex: "En el día (corte 15:00 hs)",
      deposito: "Mismo día o 24 hs (E-Commerce)",
    },
    {
      key: "anticipacion",
      label: "Antelación mínima",
      icon: "clock",
      express: "2 horas",
      lowcost: "Antes de 19 hs (día anterior)",
      flex: "Corte 15:00 hs mismo día",
      deposito: "Stock previo en depósito",
    },
    {
      key: "peso",
      label: "Peso máx. por bulto",
      icon: "pkg",
      express: "5 kg",
      lowcost: "5 kg",
      flex: "Según políticas MeLi",
      deposito: "Sin límite (pallets/cajas)",
    },
    {
      key: "cobertura",
      label: "Cobertura",
      icon: "pin",
      express: "Todo Mar del Plata",
      lowcost: "Todo Mar del Plata",
      flex: "Todo Mar del Plata",
      deposito: "Todo Mar del Plata + envíos nacionales",
    },
    {
      key: "retiro",
      label: "Retiro en tu local",
      icon: "check",
      express: "Sí (incluido)",
      lowcost: "Sí (incluido)",
      flex: "Sí (automático MeLi)",
      deposito: "N/A (stock en depósito)",
    },
    {
      key: "tracking",
      label: "Tracking en vivo",
      icon: "shield",
      express: "Sí (WhatsApp + web)",
      lowcost: "Sí (WhatsApp + web)",
      flex: "Sí (panel MeLi + web)",
      deposito: "Sí (panel cliente + web)",
    },
    {
      key: "pago",
      label: "Formas de pago",
      icon: "file",
      express: "Cuenta corriente / Contraentrega / Transferencia",
      lowcost: "Cuenta corriente / Transferencia",
      flex: "MeLi (descuento automático)",
      deposito: "Cuenta corriente mensual",
    },
    {
      key: "ideal",
      label: "Ideal para",
      icon: "star",
      express: "Urgencias, documentos, e-commerce propio",
      lowcost: "Volumen alto, costos bajos, planificación",
      flex: "Vendedores MercadoLibre",
      deposito: "E-commerce con stock, scaling logística",
    },
    {
      key: "precio",
      label: "Precio desde",
      icon: "trend",
      express: "$3.700 (hasta 3 km)",
      lowcost: "$3.000 (hasta 3 km)",
      flex: "Según tarifa MeLi vigente",
      deposito: "Plan a medida (cotizar)",
    },
  ];

  const services = [
    { id: "express", name: "Envíos Express", short: "Express", color: "var(--color-brand-blue-500)", bg: "var(--color-brand-blue-50)", icon: "zap" },
    { id: "lowcost", name: "Envíos LowCost", short: "LowCost", color: "var(--color-brand-blue-500)", bg: "var(--color-white)", icon: "trend" },
    { id: "flex", name: "Envíos Flex (MeLi)", short: "Flex", color: "var(--color-brand-blue-500)", bg: "var(--color-brand-blue-50)", icon: "clock" },
    { id: "deposito", name: "Depósito y fulfillment", short: "3PL", color: "var(--color-brand-yellow-500)", bg: "var(--color-brand-yellow-500)", icon: "store", textColor: "var(--color-brand-blue-500)" },
  ];

  return (
    <div style={{ overflowX: "auto", borderRadius: "var(--radius-card)", border: "1px solid var(--border-subtle)", background: "var(--surface-card)", ...style }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "var(--text-sm)", minWidth: 720 }}>
        <thead>
          <tr style={{ background: "var(--surface-muted)" }}>
            <th style={{ padding: "16px 12px", textAlign: "left", font: "400 14px/1 var(--font-subheading)", letterSpacing: ".05em", textTransform: "uppercase", color: "var(--text-secondary)", borderBottom: "1px solid var(--border-subtle)", whiteSpace: "nowrap", width: 200 }}>
              Característica
            </th>
            {services.map((s) => (
              <th key={s.id} style={{ padding: "16px 12px", textAlign: "center", font: "400 16px/1.2 var(--font-subheading)", letterSpacing: ".05em", textTransform: "uppercase", color: s.textColor || s.color, background: s.bg, borderBottom: "1px solid var(--border-subtle)", whiteSpace: "nowrap", minWidth: 180 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
                  <Icon d={ICONS[s.icon]} size={18} style={{ color: s.textColor || s.color }} />
                  {s.short}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={row.key} style={{ borderBottom: rowIndex === rows.length - 1 ? "none" : "1px solid var(--border-subtle)" }}>
              <td style={{ padding: "14px 12px", font: "400 14px/1.5 var(--font-sans)", color: "var(--text-primary)", verticalAlign: "top" }}>
                <div style={{ display: "inline-flex", alignItems: "flex-start", gap: 10 }}>
                  <Icon d={ICONS[row.icon]} size={16} style={{ color: "var(--text-tertiary)", flexShrink: 0, marginTop: 2 }} />
                  <span>{row.label}</span>
                </div>
              </td>
              {services.map((s) => (
                <td key={s.id} style={{ padding: "14px 12px", textAlign: "center", font: "400 13px/1.5 var(--font-sans)", color: "var(--text-primary)", verticalAlign: "top", background: highlightedService === s.id ? "rgba(9,80,246,0.03)" : "transparent" }}>
                  {row[s.id]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ padding: "16px 20px", borderTop: "1px solid var(--border-subtle)", background: "var(--surface-muted)", display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center", fontSize: "var(--text-xs)", color: "var(--text-tertiary)" }}>
        <span style={{ font: "400 12px/1 var(--font-subheading)", letterSpacing: ".1em", textTransform: "uppercase", color: "var(--text-secondary)" }}>¿Cuál elegís?</span>
        {services.map((s) => (
          <a key={s.id} href={`servicios-envios-${s.id}.html`} style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "8px 16px", borderRadius: "var(--radius-button)", background: s.bg, color: s.textColor || s.color, font: "400 13px/1 var(--font-subheading)", letterSpacing: ".05em", textTransform: "uppercase", textDecoration: "none", border: s.id === "deposito" ? "1px solid var(--color-brand-blue-500)" : "1px solid var(--border-subtle)" }}>
            Ver {s.short}
          </a>
        ))}
      </div>
    </div>
  );
}

// ICONS inline para evitar dependencia externa
const ICONS = {
  truck: ["M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2", "M15 18H9", "M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14", "M9 18a2 2 0 1 1-4 0 2 2 0 0 1 4 0", "M19 18a2 2 0 1 1-4 0 2 2 0 0 1 4 0"],
  clock: ["M12 6v6l4 2", "M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0"],
  pkg: ["M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z", "M12 22V12", "m3.29 7 8.71 5 8.71-5", "m7.5 4.27 9 5.15"],
  pin: ["M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0", "M15 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0"],
  check: ["M20 6 9 17l-5-5"],
  shield: ["M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z", "m9 12 2 2 4-4"],
  file: ["M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z", "M14 2v5a1 1 0 0 0 1 1h5", "M10 9H8", "M16 13H8", "M16 17H8"],
  star: ["M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"],
  trend: ["M16 17h6v-6", "m22 17-8.5-8.5-5 5L2 7"],
  zap: ["M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z"],
  store: ["M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5", "M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05", "M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"],
};