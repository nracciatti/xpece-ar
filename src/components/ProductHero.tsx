"use client";

import Image from "next/image";

type ProductHeroProps = {
  mediaSrc: string; // imagen o poster del video
  buyHref: string; // link Tienda Nube
  whatsappHref: string;
};

export function ProductHero({
  mediaSrc,
  buyHref,
  whatsappHref,
}: ProductHeroProps) {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          {/* Media */}
          <div className="relative aspect-square w-full overflow-hidden rounded-3xl border border-[color:var(--border)] bg-black">
            <Image
              src={mediaSrc}
              alt="XPece ONE Bundle"
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Info */}
          <div className="md:sticky md:top-32 space-y-6">
            {/* Title */}
            <div className="space-y-2">
              <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-[color:var(--fg)]">
                XPece ONE Bundle
              </h1>
              <p className="text-lg text-[color:var(--muted)]">
                Todo lo que necesitás para pescar con dron, listo para usar.
              </p>
            </div>

            {/* Bullets */}
            <ul className="space-y-3 text-[color:var(--fg)]">
              <li>✔️ Sin app · sin calibraciones</li>
              <li>✔️ Estable y fácil de manejar</li>
              <li>✔️ Diseñado específicamente para pesca</li>
              <li>✔️ Soporte y garantía en Argentina</li>
            </ul>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-2 text-sm text-[color:var(--muted)]">
              <span className="rounded-full bg-[color:var(--bg-soft)] px-3 py-1">
                Envíos a todo el país
              </span>
              <span className="rounded-full bg-[color:var(--bg-soft)] px-3 py-1">
                Compra segura
              </span>
              <span className="rounded-full bg-[color:var(--bg-soft)] px-3 py-1">
                Representación oficial
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={buyHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[color:var(--primary)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[color:var(--primary-hover)]"
              >
                Comprar en Tienda
              </a>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-[color:var(--border)] bg-white px-6 py-3 text-sm font-semibold text-[color:var(--fg)] transition hover:bg-black/5"
              >
                Consultar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
