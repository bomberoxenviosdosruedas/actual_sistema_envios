function DepositoFulfillmentScreen({ go }) {
  const [bultos, setBultos] = React.useState(150);
  const costPerOrder = 850;
  const total = React.useMemo(() => bultos * costPerOrder, [bultos]);
  const waLink = React.useMemo(() => (
    "https://wa.me/542236602699?text=" + encodeURIComponent("Hola! Tengo un e-commerce con aprox. " + bultos + " pedidos mensuales y me interesa el servicio de depósito y fulfillment en Friuli 1972.")
  ), [bultos]);

  return <>
    <Hero yellow={false} aside={<img src={A("heroes/deposito-local.webp")} alt="Depósito central y fulfillment de Envíos DosRuedas en Friuli 1972" fetchPriority="high" decoding="async" style={{ width: "100%", maxWidth: 480, justifySelf: "center", borderRadius: "var(--radius-card)" }} />}>
      <Badge tone="accent" icon={<Icon d={ICONS.store} />}>Depósito central · Friuli 1972</Badge>
      <H1 color="var(--color-white)">Almacená en Mar del Plata, <span style={{ display: "inline-block", background: "var(--color-brand-yellow-500)", color: "var(--color-brand-blue-500)", borderRadius: 999, padding: "0 .3em", transform: "rotate(-1deg)", lineHeight: 1.1 }}>vendé sin frenar</span></H1>
      <Lead invert>Almacenamiento de stock, control de inventario con QR, picking y empaque en 15 minutos con despacho en el día a toda la ciudad.</Lead>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
        <Button variant="primary" size="lg" onClick={() => go("contacto")}>Cotizá tu depósito</Button>
        <Button variant="secondary" surface="dark" size="lg" href="#simulador">Calculá tu costo</Button>
      </div>
      <StatList invert items={[["Friuli 1972", "base operativa"], ["15 min", "picking & despacho"], ["100%", "control de stock"]]} />
    </Hero>

    <Section bg="var(--color-neutral-50)">
      <SectionHead eyebrow="Operación 3PL en Mar del Plata" title="Tu inventario listo para salir" lead="Transformamos tu logística en una ventaja competitiva. Vos vendés, nosotros movemos." />
      <Grid min={260}>
        {[
          ["Recepción y catalogación QR", "Ingresamos tu mercadería en Friuli 1972, verificamos cantidades y etiquetamos cada bulto con código QR unívoco.", "pkg", "Control total"],
          ["Picking y embalaje en 15 minutos", "En cuanto entra la venta en tu tienda o WhatsApp, seleccionamos, empaquetamos y dejamos el pedido listo para el rider.", "zap", "15 min"],
          ["Despacho Same Day y Mercado Envíos Flex", "Salida directa sin traslados intermedios. Llegamos en el día a cualquier rincón de Mar del Plata.", "truck", "En el día"],
          ["Reportes de stock vía WhatsApp", "Consultá tus existencias, movimientos y alertas de reposición al instante sin paneles complicados.", "wa", "En vivo"]
        ].map(([t, b, ic, tag]) => <FeatureCard key={t} icon={<Icon d={ICONS[ic]} size={20} />} tag={tag} title={t} body={b} />)}
      </Grid>
    </Section>

    <Section bg="var(--color-brand-blue-500)" style={{ color: "var(--color-white)" }}>
      <div id="simulador" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 40, alignItems: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 20, alignItems: "flex-start" }}>
          <Badge tone="accent" size="sm">Simulador operativo</Badge>
          <H2 color="var(--color-white)">Calculá tu costo de <Mark>fulfillment</Mark></H2>
          <Lead invert>Sin costos fijos ocultos ni contratos de permanencia. Pagás por volumen despachado con almacenamiento proporcional incluido.</Lead>
          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <span style={{ width: 12, height: 12, borderRadius: 999, background: "var(--color-brand-yellow-500)", display: "inline-block" }} />
            <span style={{ font: "400 14px/1 var(--font-sans)" }}>Incluye material de empaque estándar y cinta reforzada</span>
          </div>
        </div>

        <BezelCard tone="light" hoverLift={false}>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <span style={{ font: "400 14px/1 var(--font-subheading)", letterSpacing: ".1em", textTransform: "uppercase" }}>Despachos mensuales estimados</span>
            <QuantityStepper value={bultos} onChange={setBultos} label="Cantidad de pedidos despachados por mes" />
            <input
              type="range"
              min="20"
              max="1000"
              step="10"
              value={bultos}
              aria-label="Cantidad de pedidos despachados por mes"
              aria-valuemin={20}
              aria-valuemax={1000}
              aria-valuenow={bultos}
              aria-valuetext={`${bultos} pedidos mensuales`}
              onChange={(e) => setBultos(+e.target.value)}
              style={{ width: "100%", accentColor: "var(--color-brand-blue-500)", cursor: "pointer" }}
            />
            <FilterChips label="Volumen sugerido" options={["50", "150", "300", "600"]} value={String(bultos)} onChange={(v) => setBultos(+v)} />
            <div aria-live="polite" style={{ borderTop: "1px solid var(--color-brand-blue-100)", paddingTop: 16 }}>
              <span style={{ font: "400 14px/1 var(--font-subheading)", letterSpacing: ".1em", textTransform: "uppercase" }}>Inversión estimada en preparación</span>
              <div style={{ font: "700 40px/1.1 var(--font-mono)", fontVariantNumeric: "tabular-nums" }}>
                ${total.toLocaleString("es-AR")}
                <span style={{ font: "400 14px var(--font-mono)" }}> / mes</span>
              </div>
              <p style={{ margin: "4px 0 0", font: "400 12px/1.4 var(--font-mono)" }}>Aprox. ${costPerOrder.toLocaleString("es-AR")} por pedido preparado y despachado.</p>
            </div>
            <Button fullWidth external href={waLink}>
              Consultar disponibilidad de espacio
            </Button>
          </div>
        </BezelCard>
      </div>
    </Section>

    <Section>
      <SectionHead eyebrow="Modalidades de depósito 2026" title="Elegí el módulo para tu escala" lead="Adaptable a emprendimientos en crecimiento o marcas consolidadas en Mar del Plata." />
      <Grid min={260} gap={24} style={{ paddingTop: 12 }}>
        <PricingCard
          tag="Inicio"
          title="Módulo Estante PyME"
          range="Hasta 1 m³ de stock"
          price="$28.000"
          unit="/ mes"
          features={[
            "Hasta 50 bultos medianos",
            "Recepción y control de remitos",
            "Picking básico en el día",
            "Atención directa por WhatsApp"
          ]}
          ctaLabel="Consultar estante"
          onCta={() => go("contacto")}
        />
        <PricingCard
          featured
          tag="Más elegido e-commerce"
          title="Módulo Rack Profesional"
          range="Hasta 3 m³ de stock"
          price="$58.000"
          unit="/ mes"
          features={[
            "Hasta 250 bultos rotativos",
            "Etiquetado QR y control de vencimientos",
            "Salida prioritaria Flex & Same Day",
            "Integración con catálogo de WhatsApp"
          ]}
          ctaLabel="Reservar módulo"
          onCta={() => go("contacto")}
        />
        <PricingCard
          tag="Personalizado"
          title="Fulfillment Integral"
          range="Espacio a medida (+3 m³)"
          price="A medida"
          unit=""
          features={[
            "Pallet completo en nave central",
            "Empaque con packaging de tu marca",
            "Riders exclusivos en horario pico",
            "Cuenta corriente y consolidación quincenal"
          ]}
          ctaLabel="Contactar asesor"
          onCta={() => go("empresas")}
        />
      </Grid>
    </Section>

    <Section bg="var(--color-neutral-50)">
      <SectionHead eyebrow="Circuito operativo" title="Cómo funciona en 4 pasos simples" />
      <Steps items={[
        { title: "1. Ingreso de stock", body: "Acercás tu mercadería a Friuli 1972 o coordinamos el retiro por tu taller o proveedor." },
        { title: "2. Inventario verificado", body: "Catalogamos y almacenamos tus productos en racks protegidos, listos para ser preparados." },
        { title: "3. Avisás la venta", body: "Nos enviás la orden de compra por WhatsApp o sistema. Iniciamos el picking en menos de 15 minutos." },
        { title: "4. Entrega en el día", body: "Nuestra flota de motos y utilitarios realiza la entrega directa en mano a tu cliente en MDQ." }
      ]} />
    </Section>

    <Section>
      <SectionHead eyebrow="Preguntas frecuentes" title="Dudas sobre el servicio de depósito" />
      <div style={{ maxWidth: 840, margin: "0 auto" }}>
        <Accordion items={[
          { title: "¿Dónde está ubicado el depósito y en qué horarios opera?", body: "Nuestra base central está ubicada en Friuli 1972, Mar del Plata. Operamos de lunes a viernes de 09:00 a 18:00 hs y sábados de 10:00 a 15:00 hs para recepción y despacho continuo." },
          { title: "¿Puedo combinar fulfillment con Mercado Envíos Flex?", body: "Sí, es una de nuestras combinaciones más elegidas. Al tener el producto ya en nuestro depósito, podemos despachar tus ventas Flex de MercadoLibre inmediatamente antes del corte de las 15:00 hs para cuidar al 100% tu reputación." },
          { title: "¿Cómo se gestiona el cobro contrareembolso si el producto sale del depósito?", body: "El rider cobra en efectivo o transferencia en el momento de la entrega en destino y el dinero se rinde o acredita a tu cuenta de acuerdo al esquema acordado, sin comisiones sorpresa." },
          { title: "¿Hay un mínimo de permanencia o volumen requerido?", body: "No exigimos contratos a largo plazo. Podés comenzar con un módulo estante pequeño por mes o contratar almacenamiento por temporadas de alta demanda." }
        ]} />
      </div>
    </Section>

    <CtaForm title="¿Querés delegar el depósito y despacho de tu tienda?" lead="Ahorrá horas de empaque y logística. Hablá hoy con nuestro equipo operativo en Mar del Plata." />
    <SocialBand />
  </>;
}

window.DepositoFulfillmentScreen = DepositoFulfillmentScreen;
