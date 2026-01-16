const reviews = [
  {
    name: "Ramiro B.",
    role: "Pescador",
    text: "Excelente producto. Muy estable y fácil de usar. La entrega fue rápida y llegó impecable.",
    rating: 5,
  },
  {
    name: "Lucas R.",
    role: "Pesca deportiva",
    text: "Me ayudó a llevar la carnada donde antes no llegaba. La diferencia se nota desde el primer día.",
    rating: 5,
  },
  {
    name: "Nico R.",
    role: "Cliente",
    text: "La experiencia es otra. Muy recomendable. Soporte súper atento para resolver dudas.",
    rating: 5,
  },
  {
    name: "Facu P.",
    role: "Pesca en laguna",
    text: "Autonomía muy buena y se siente sólido. Ideal para llevar el bait lejos sin esfuerzo.",
    rating: 5,
  },
  {
    name: "Julián D.",
    role: "Cliente",
    text: "Cumplió lo que prometía. El armado es sencillo y la navegación es fácil.",
    rating: 4,
  },
  {
    name: "Santi V.",
    role: "Pescador",
    text: "Una locura para pesca. Llegás a zonas que antes eran imposibles. Recomendado.",
    rating: 5,
  },
];

export function Reviews() {
  return (
    <section id="opiniones" className="bg-[color:var(--bg)] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        {/* Header */}
        <div className="max-w-2xl space-y-2">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[color:var(--fg)]">
            Opiniones reales, de pescadores como vos.
          </h2>
          <p className="text-[color:var(--muted)]">
            Experiencias de pescadores que ya usan XPece.
          </p>
        </div>

        {/* Reviews */}
        <div className="mt-10 flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory md:grid md:grid-cols-3 md:gap-6 md:overflow-visible">
          {reviews.map((r, i) => (
            <article
              key={i}
              className="
              group relative
              snap-start shrink-0 w-[85%] sm:w-[70%] md:w-auto
              rounded-3xl border border-[color:var(--border)]
              bg-[color:var(--card)]
              p-6
              shadow-sm
              transition
              hover:-translate-y-1
              hover:shadow-[0_18px_40px_rgba(0,0,0,0.10)]
              hover:border-[color:var(--primary)]/40
              focus-within:ring-2 focus-within:ring-[color:var(--primary)]/30
              focus-within:ring-offset-2 focus-within:ring-offset-[color:var(--bg)]
            "
            >
              {/* Sheen diagonal sutil */}
              <div
                className="
                pointer-events-none absolute -inset-x-24 -inset-y-16 rotate-12
                opacity-0
                bg-gradient-to-r from-transparent via-white/35 to-transparent
                transition-opacity duration-300
                group-hover:opacity-100
              "
              />

              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {/* Avatar */}
                  <div className="h-10 w-10 rounded-full bg-[color:var(--primary-soft)] flex items-center justify-center font-semibold text-[color:var(--primary)]">
                    {r.name.charAt(0)}
                  </div>

                  <div>
                    <div className="font-semibold text-[color:var(--fg)]">
                      {r.name}
                    </div>
                    <div className="text-sm text-[color:var(--muted)]">
                      {r.role}
                    </div>
                  </div>
                </div>

                <Stars rating={r.rating} />
              </div>

              {/* Text */}
              <p className="mt-4 text-[color:var(--fg)]/90 leading-relaxed">
                “{r.text}”
              </p>

              {/* Footer */}
              <div className="mt-5 text-xs text-[color:var(--muted)]">
                Compra verificada · XPece Argentina
              </div>

              {/* Barra inferior verde (súper sutil) */}
              <div className="absolute inset-x-0 bottom-0 h-[2px] bg-[color:var(--primary)] opacity-0 transition-opacity duration-300 group-hover:opacity-60" />
            </article>
          ))}
        </div>

        {/* Hint mobile */}
        <p className="mt-3 text-xs text-[color:var(--muted)] md:hidden">
          Deslizá para ver más opiniones →
        </p>
      </div>
    </section>
  );
}

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          fill="currentColor"
          className={
            i < rating
              ? "h-4 w-4 text-[color:var(--primary)]"
              : "h-4 w-4 text-[color:var(--border)]"
          }
        >
          <path d="M12 17.27l-5.18 3.04 1.39-5.81-4.49-3.89 5.93-.5L12 4.5l2.35 5.61 5.93.5-4.49 3.89 1.39 5.81z" />
        </svg>
      ))}
    </div>
  );
}
