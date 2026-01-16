type Spec = { label: string; value: string; note?: string };

const HIGHLIGHTS: Spec[] = [
  {
    label: "Resistencia al agua",
    value: "IP67",
    note: "Drone / cámara / payload release.",
  },
  {
    label: "Autonomía",
    value: "27 min vuelo / 30 min hover",
    note: "En condiciones ideales (sin viento).",
  },
  {
    label: "Distancia máxima",
    value: "2000 m",
    note: "Máxima distancia de vuelo.",
  },
  {
    label: "Resistencia al viento",
    value: "20 m/s",
    note: "Estabilidad en condiciones exigentes.",
  },
  {
    label: "Carga útil",
    value: "Hasta 3 kg",
    note: "Módulo de liberación de carga.",
  },
  {
    label: "Velocidad máxima",
    value: "10 m/s",
    note: "Fast · 8 m/s Medium · 3 m/s Grandpa.",
  },
  { label: "Posicionamiento", value: "GPS / GLONASS / Galileo / BeiDou" },
  {
    label: "Control y pantalla",
    value: '5" · 1000 nits',
    note: "Video en tiempo real (AV SD).",
  },
];

const FULL_SPECS: Spec[] = [
  // Aircraft
  { label: "Peso (con batería, hélices, cámara y release)", value: "3200 g" },
  { label: "Peso máximo de despegue", value: "6200 g" },
  { label: "Distancia entre ejes", value: "580 mm" },
  { label: "Velocidad de ascenso / descenso", value: "4 m/s / 3 m/s" },
  { label: "Altura máxima desde el punto de despegue", value: "120 m" },
  {
    label: "Precisión de hover",
    value: "±0.8 m (vertical) · ±0.5 m (horizontal)",
  },
  { label: "Transmisión de imagen", value: "600 mW · 5180–5875 MHz" },
  { label: "Temperatura de trabajo", value: "-10°C a 40°C" },

  // Battery
  { label: "Batería", value: "Inteligente 6S LiPo · 4500 mAh · 22.2V" },
  { label: "Energía", value: "99.9 Wh" },
  { label: "Tiempo de carga", value: "Aprox. 120 min" },
  { label: "Potencia de carga máx.", value: "126 W" },
  {
    label: "Protecciones",
    value: "Sobrecarga, sobrecorriente, sobrevoltaje, sobrecalentamiento",
  },

  // Remote
  { label: "Control (waterproof)", value: "IP66" },
  { label: "Autonomía del control", value: "180 min" },
  { label: "Pantalla", value: '5" · 800×480 · 1000 cd/m²' },
  { label: "Frecuencia control", value: "2405–2475 MHz" },

  // Charger
  { label: "Cargador", value: "Input 100–240V · Output 25.2–25.6V · 150W" },

  // Camera
  { label: "Cámara (waterproof)", value: "IP67" },
  { label: "Ángulo", value: "121°" },
  { label: "Video", value: "4K (30fps) · 60fps indicado en imagen" },
  { label: "Gimbal (pitch)", value: "-90° a 0°" },
  {
    label: "microSD",
    value: "Hasta 128GB · write ≥ 60 MB/s (UHS-1 recomendado)",
  },

  // Payload
  { label: "Payload release (waterproof)", value: "IP67" },
  { label: "Peso release", value: "70 g" },
  { label: "Carga máxima", value: "3 kg" },
];

export function KeySpecsSection() {
  return (
    <section
      id="especificaciones"
      className="relative bg-[color:var(--bg)] py-14 md:py-20 overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-[380px] w-[680px] -translate-x-1/2 rounded-full bg-[color:var(--primary)]/10 blur-3xl" />
        <div className="absolute -bottom-28 right-[-120px] h-[320px] w-[320px] rounded-full bg-[color:var(--primary)]/8 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 md:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-[color:var(--fg)]">
            Especificaciones clave
          </h2>
          <p className="mt-2 text-[color:var(--muted)] md:text-lg">
            Lo importante para decidir rápido. El resto queda en la ficha
            completa.
          </p>
        </div>

        {/* Highlights */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {HIGHLIGHTS.map((s) => (
            <article
              key={s.label}
              className="
                group relative overflow-hidden
                rounded-3xl border border-[color:var(--border)]
                bg-[color:var(--card)] p-5 md:p-6
                shadow-sm transition
                hover:-translate-y-1 hover:shadow-md
                hover:border-[color:var(--primary)]/40
              "
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300">
                <div className="absolute -left-24 -top-24 h-40 w-40 rotate-12 bg-white/50 blur-xl" />
              </div>

              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300">
                <div className="absolute inset-0 rounded-3xl ring-1 ring-[color:var(--primary)]/15" />
              </div>

              <div className="text-xs font-semibold tracking-wide text-[color:var(--muted)]">
                {s.label}
              </div>

              <div className="mt-2 text-xl md:text-2xl font-semibold text-[color:var(--fg)]">
                {s.value}
              </div>

              {s.note ? (
                <div className="mt-2 text-sm text-[color:var(--muted)]">
                  {s.note}
                </div>
              ) : null}
            </article>
          ))}
        </div>

        <div className="mt-8">
          <details
            className="
              group rounded-3xl border border-[color:var(--border)]
              bg-white shadow-sm
              transition hover:shadow-md
            "
          >
            <summary className="cursor-pointer list-none px-5 py-4 md:px-6 md:py-5 flex items-center justify-between gap-4">
              <div>
                <div className="font-semibold text-[color:var(--fg)]">
                  Ver ficha técnica completa
                </div>
                <div className="text-sm text-[color:var(--muted)]">
                  Batería, cámara, control, transmisión y más.
                </div>
              </div>

              <div
                className="
                  h-10 w-10 rounded-full
                  border border-[color:var(--border)]
                  grid place-items-center
                  text-[color:var(--muted)]
                  bg-white
                  transition
                  group-hover:border-[color:var(--primary)]/40
                  group-hover:text-[color:var(--primary)]
                  group-open:rotate-45
                "
              >
                +
              </div>
            </summary>

            <div className="px-5 pb-5 md:px-6 md:pb-6">
              <div className="grid gap-3 md:grid-cols-2">
                {FULL_SPECS.map((s) => (
                  <div
                    key={s.label}
                    className="
                      rounded-2xl border border-[color:var(--border)]
                      bg-[color:var(--card)] px-4 py-3
                      transition hover:border-[color:var(--primary)]/30
                    "
                  >
                    <div className="text-xs font-semibold text-[color:var(--muted)]">
                      {s.label}
                    </div>
                    <div className="mt-1 font-semibold text-[color:var(--fg)]">
                      {s.value}
                    </div>
                    {s.note ? (
                      <div className="mt-1 text-xs text-[color:var(--muted)]">
                        {s.note}
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </details>

          <p className="mt-3 text-xs text-[color:var(--muted)]">
            Nota: tiempos de vuelo/hover dependen de carga, viento y condiciones
            reales.
          </p>
        </div>
      </div>
    </section>
  );
}
