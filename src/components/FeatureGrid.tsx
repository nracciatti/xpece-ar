import { Shield, Waves, Timer, Radar, Zap, Camera } from "lucide-react";

const features = [
  {
    title: "Listo para agua salada",
    desc: "Componentes y diseño para entornos exigentes.",
    icon: Waves,
  },
  {
    title: "Sin app / sin calibración",
    desc: "Rápido de usar, menos fricción.",
    icon: Zap,
  },
  {
    title: "Tiempo de vuelo",
    desc: "Optimizado para sesiones reales de pesca.",
    icon: Timer,
  },
  {
    title: "Cumplimiento & seguridad",
    desc: "Pensado para operar de forma responsable.",
    icon: Shield,
  },
  {
    title: "Visibilidad",
    desc: "Mejor control en distintas condiciones.",
    icon: Radar,
  },
  {
    title: "Cámara (placeholder)",
    desc: "Reemplazá con specs reales por modelo.",
    icon: Camera,
  },
];

export function FeatureGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {features.map((f) => {
        const Icon = f.icon;
        return (
          <div
            key={f.title}
            className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--card)] p-6 shadow-lg"
          >
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 rounded-2xl grid place-items-center border border-[color:var(--border)] bg-black/30">
                <Icon size={20} />
              </div>
              <div className="font-semibold">{f.title}</div>
            </div>
            <p className="mt-3 text-sm text-[color:var(--muted)]">{f.desc}</p>
          </div>
        );
      })}
    </div>
  );
}
