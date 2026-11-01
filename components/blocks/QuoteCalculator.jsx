import React from "react";
import { Button } from "../core/Button.jsx";
import { Badge } from "../core/Badge.jsx";
import { QuantityStepper } from "./QuantityStepper.jsx";
import { FilterChips } from "../data/FilterChips.jsx";
import { BezelCard } from "../core/BezelCard.jsx";
import { Display } from "./Display.jsx";
import { Lead } from "./Lead.jsx";
import { Icon } from "../core/Icon.jsx";

const ICONS = {
  pkg: ["M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z", "M12 22V12", "m3.29 7 8.71 5 8.71-5", "m7.5 4.27 9 5.15"],
  store: ["M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5", "M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05", "M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"],
};

/**
 * Calculadora de cotización reutilizable para Envíos DosRuedas.
 * Extraída del Plan Emprendedores (DropOFF 20% off).
 *
 * Props:
 *   - basePrice: precio base por envío (default 2400)
 *   - discountPct: porcentaje de descuento (default 20)
 *   - serviceName: nombre del servicio para el mensaje WhatsApp
 *   - ctaLabel: texto del botón CTA
 *   - whatsappNumber: número de WhatsApp (default 542236602699)
 *   - onCalculate: callback opcional con (shipments, estimatedSavings)
 */
export function QuoteCalculator({
  basePrice = 2400,
  discountPct = 20,
  serviceName = "DropOFF",
  ctaLabel = "Activar DropOFF",
  whatsappNumber = "542236602699",
  initialShipments = 120,
  presetOptions = ["25", "100", "250", "500"],
  maxShipments = 1000,
  showPresets = true,
  showSlider = true,
  style,
  onCalculate,
}) {
  const [shipments, setShipments] = React.useState(initialShipments);
  const savingsPerShipment = Math.round(basePrice * discountPct / 100);
  const estimatedMonthlySavings = savingsPerShipment * shipments;

  const handleChange = (value) => {
    const num = typeof value === "string" ? parseInt(value, 10) : value;
    if (!isNaN(num) && num >= 1 && num <= maxShipments) {
      setShipments(num);
      onCalculate?.(num, estimatedMonthlySavings);
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hola! Manejo aprox. ${shipments} envíos por mes y quiero activar ${serviceName} (${discountPct}% off) en Mar del Plata.`
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <BezelCard tone="light" hoverLift={false} style={{ ...style }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center" }}>
          <Badge tone="accent" size="sm" icon={<Icon d={ICONS.store} size={14} />}>
            Modalidad {serviceName}
          </Badge>
          <Display as="h3" style={{ fontSize: "clamp(1.5rem,3vw,2rem)", color: "var(--color-brand-blue-500)" }}>
            Traé tus envíos y ahorrá <span style={{ display: "inline-block", background: "var(--color-brand-yellow-500)", color: "var(--color-brand-blue-500)", borderRadius: 999, padding: "0 .3em", transform: "rotate(-1deg)", lineHeight: 1.1 }}>{discountPct}%</span> en cada despacho
          </Display>
        </div>

        <Lead invert style={{ color: "var(--text-secondary)" }}>
          Entregás los paquetes en nuestra base y los despachamos con descuento.
          Calculá cuánto ahorrás por mes.
        </Lead>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <span style={{ font: "400 14px/1 var(--font-subheading)", letterSpacing: ".1em", textTransform: "uppercase", color: "var(--text-secondary)" }}>
            Envíos por mes
          </span>

          <QuantityStepper value={shipments} onChange={handleChange} label="Cantidad de envíos por mes" min={1} max={maxShipments} />

          {showSlider && (
            <input
              type="range"
              min="1"
              max={maxShipments}
              value={shipments}
              aria-label="Cantidad de envíos por mes"
              onChange={(e) => handleChange(+e.target.value)}
              style={{ width: "100%", accentColor: "var(--color-brand-blue-500)" }}
            />
          )}

          {showPresets && (
            <FilterChips
              label="Atajos"
              options={presetOptions}
              value={String(shipments)}
              onChange={handleChange}
            />
          )}

          <div
            aria-live="polite"
            style={{
              borderTop: "1px solid var(--border-subtle)",
              paddingTop: 16,
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            <span style={{ font: "400 14px/1 var(--font-subheading)", letterSpacing: ".1em", textTransform: "uppercase", color: "var(--text-secondary)" }}>
              Ahorro estimado mensual
            </span>
            <div style={{ font: "700 40px/1.1 var(--font-mono)", fontVariantNumeric: "tabular-nums" }}>
              ${estimatedMonthlySavings.toLocaleString("es-AR")}
              <span style={{ font: "400 12px var(--font-mono)", color: "var(--text-tertiary)" }}>
                / mes
              </span>
            </div>
            <p style={{ margin: 0, font: "400 12px/1.4 var(--font-mono)", color: "var(--text-tertiary)" }}>
              Base: ${basePrice.toLocaleString("es-AR")} por envío − {discountPct}% (cifra de referencia).
            </p>
          </div>

          <Button
            fullWidth
            external
            href={whatsappUrl}
            icon={<Icon d={ICONS.pkg} size={18} />}
          >
            {ctaLabel}
          </Button>
        </div>
      </div>
    </BezelCard>
  );
}

// Variant: Calculadora simple para páginas de servicio (sin slider/presets)
export function SimpleQuoteCalculator({
  basePrice = 3700,
  serviceName = "Envíos Express",
  ctaLabel = "Cotizar por WhatsApp",
  whatsappNumber = "542236602699",
  style,
}) {
  const [shipments, setShipments] = React.useState(1);
  const estimatedTotal = basePrice * shipments;

  const handleChange = (value) => {
    const num = typeof value === "string" ? parseInt(value, 10) : value;
    if (!isNaN(num) && num >= 1) {
      setShipments(num);
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hola! Quiero cotizar ${serviceName} para aprox. ${shipments} envío${shipments > 1 ? "s" : ""} en Mar del Plata.`
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <BezelCard tone="light" hoverLift={false} style={{ ...style }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center" }}>
          <Badge tone="muted" size="sm" icon={<Icon d={ICONS.pkg} size={14} />}>
            Calculadora referencial
          </Badge>
          <Display as="h3" style={{ fontSize: "clamp(1.25rem,2.5vw,1.75rem)", color: "var(--color-brand-blue-500)" }}>
            Estimá tu <Mark>{serviceName}</Mark>
          </Display>
        </div>

        <Lead style={{ color: "var(--text-secondary)" }}>
          Precio base por distancia. El costo final depende de km reales y volumen.
        </Lead>

        <QuantityStepper
          value={shipments}
          onChange={handleChange}
          label="Cantidad de envíos a cotizar"
          min={1}
          max={500}
        />

        <div
          aria-live="polite"
          style={{
            padding: 16,
            background: "var(--surface-muted)",
            borderRadius: "var(--radius-card-inner)",
            display: "flex",
            flexDirection: "column",
            gap: 8,
            alignItems: "flex-start",
          }}
        >
          <span style={{ font: "400 14px/1 var(--font-subheading)", letterSpacing: ".1em", textTransform: "uppercase", color: "var(--text-secondary)" }}>
            Estimado total
          </span>
          <div style={{ font: "700 36px/1.1 var(--font-mono)", fontVariantNumeric: "tabular-nums" }}>
            ${estimatedTotal.toLocaleString("es-AR")}
            <span style={{ font: "400 12px var(--font-mono)", color: "var(--text-tertiary)" }}>
              (${basePrice.toLocaleString("es-AR")} c/u)
            </span>
          </div>
          <p style={{ margin: 0, font: "400 12px/1.4 var(--font-mono)", color: "var(--text-tertiary)" }}>
            Precio referencial. Cotización final por WhatsApp en <2 min.
          </p>
        </div>

        <Button fullWidth external href={whatsappUrl} icon={<Icon d={ICONS.pkg} size={18} />}>
          {ctaLabel}
        </Button>
      </div>
    </BezelCard>
  );
}