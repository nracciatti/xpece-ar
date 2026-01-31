import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto | XPece Argentina",
  description:
    "¿Consultas por el drone de pesca XPece ONE? Hablá con nosotros por WhatsApp. Envíos a todo el país, garantía y soporte local.",
  robots: { index: true, follow: true },
};

const WA_URL =
  "https://wa.me/5491161332326?text=Hola%20XPece%2C%20tengo%20una%20consulta%20por%20el%20XPece%20ONE%20Bundle.";

export default function ContactPage() {
  return (
    <main className="bg-[color:var(--bg)]">
      <section className="mx-auto max-w-6xl px-4 md:px-8 py-12 md:py-16">
        <p className="text-sm font-semibold text-[color:var(--primary)]">
          Contacto
        </p>

        <h1 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight text-[color:var(--fg)]">
          ¿Tenés una consulta antes de comprar?
        </h1>

        <p className="mt-3 text-[color:var(--muted)] md:text-lg max-w-2xl">
          Te respondemos rápido por WhatsApp. Podemos ayudarte con envíos,
          formas de pago, garantía y cualquier duda del XPece ONE Bundle.
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-2 lg:items-start">
          {/* Card principal */}
          <div className="rounded-3xl border border-[color:var(--border)] bg-white p-6 md:p-8 shadow-[var(--shadow-sm)]">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h2 className="text-lg font-semibold text-[color:var(--fg)]">
                  Hablá con un asesor
                </h2>
                <p className="mt-1 text-sm text-[color:var(--muted)]">
                  Respuesta rápida por WhatsApp.
                </p>
              </div>
              <span className="rounded-full bg-[color:var(--primary-soft)] px-3 py-1 text-xs font-semibold text-[color:var(--primary)]">
                Online
              </span>
            </div>

            <div className="mt-5 grid gap-3">
              <a
                href={WA_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[color:var(--primary)] px-6 py-3 text-sm font-semibold text-white shadow-[var(--shadow-sm)] hover:bg-[color:var(--primary-hover)] transition"
              >
                Abrir WhatsApp
              </a>

              <a
                href="mailto:ventas@xpeceargentina.com.ar"
                className="inline-flex items-center justify-center rounded-full border border-[color:var(--border)] bg-white px-6 py-3 text-sm font-semibold text-[color:var(--fg)] hover:bg-black/5 transition"
              >
                Enviar email
              </a>
            </div>

            <div className="mt-6 grid gap-2 text-sm text-[color:var(--muted)]">
              <div className="flex items-center justify-between gap-3">
                <span>WhatsApp</span>
                <span className="font-semibold text-[color:var(--fg)]">
                  +54 9 11 6133-2326
                </span>
              </div>
              <div className="flex items-center justify-between gap-3">
                <span>Email</span>
                <span className="font-semibold text-[color:var(--fg)]">
                  ventas@xpece.com.ar
                </span>
              </div>
            </div>

            <p className="mt-4 text-xs text-[color:var(--muted)]">
              Al hablar por WhatsApp aceptás que te contactemos por ese medio.
            </p>
          </div>

          <div className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--bg-soft)] p-6 md:p-8">
            <h3 className="text-lg font-semibold text-[color:var(--fg)]">
              Lo que te llevás
            </h3>

            <ul className="mt-4 space-y-3 text-[color:var(--fg)]/90">
              {[
                "Envíos a todo el país",
                "Garantía local",
                "Soporte en Argentina",
                "Asesoramiento antes de comprar",
              ].map((t) => (
                <li key={t} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--primary)]" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 rounded-2xl border border-[color:var(--border)] bg-white p-4">
              <p className="text-sm font-semibold text-[color:var(--fg)]">
                ¿Querés ir directo al producto?
              </p>
              <a
                href="/xpece-one-bundle"
                className="mt-2 inline-flex text-sm font-semibold text-[color:var(--primary)] hover:underline"
              >
                Ver XPece ONE Bundle →
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
