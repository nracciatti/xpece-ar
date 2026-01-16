"use client";

import { useMemo, useState } from "react";
import { ProductGallery } from "@/components/ProductGallery";
import { KeySpecsSection } from "@/components/KeySpecsSection";
import { Reveal } from "@/components/Reveal";

type GalleryImage = {
  src: string;
  alt: string;
  label?: string;
  bullets?: string[];
};

const DEFAULT_BULLETS = [
  "Drone XPece ONE",
  "Control remoto con pantalla",
  "Accesorios esenciales",
  "Baterías + cargador",
  "Soporte y garantía en Argentina",
];

const TRUST = ["Envíos a todo el país", "Soporte local", "Garantía"];

export default function ProductPage() {
  const images: GalleryImage[] = useMemo(
    () => [
      {
        src: "/images/XPECE_Bundle.webp",
        alt: "Bundle completo",
        label: "Bundle completo",
        bullets: ["Todo incluido", "Listo para usar", "Sin app"],
      },
      {
        src: "/images/xpece_top_1000_1000.webp",
        alt: "Vista superior",
        label: "Vista superior",
        bullets: ["Diseño estable", "Estructura robusta", "Listo para pesca"],
      },
      {
        src: "/images/xpece_and_remote_1000_1000.webp",
        alt: "Vista inferior",
        label: "Vista inferior",
        bullets: ["Cámara y soporte", "Estabilidad en vuelo"],
      },
      {
        src: "/images/remote_1000_1000.webp",
        alt: "Control remoto",
        label: "Control remoto",
        bullets: [
          "Pantalla integrada",
          "Control simple",
          "Sin calibraciones raras",
        ],
      },
      {
        src: "/images/xpece_in_case.webp",
        alt: "Maletín y accesorios",
        label: "Accesorios",
        bullets: ["Maletín rígido", "Baterías incluidas", "Cargador"],
      },
    ],
    []
  );

  const [active, setActive] = useState(0);
  const current = images[active];

  const bullets = current?.bullets?.length ? current.bullets : DEFAULT_BULLETS;

  const progressPct =
    images.length > 0 ? ((active + 1) / images.length) * 100 : 0;

  return (
    <main className="bg-white">
      <section className="bg-[color:var(--bg)]">
        <div className="mx-auto max-w-6xl px-4 md:px-8 py-10 md:py-14">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
            {/* Galería */}
            <div className="min-w-0">
              <ProductGallery
                images={images}
                active={active}
                onActiveChange={setActive}
              />
            </div>

            <div className="min-w-0 lg:sticky lg:top-24">
              <div className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--card)] p-5 md:p-6 shadow-sm">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm text-[color:var(--muted)]">
                    XPece Argentina
                  </p>

                  {!!current?.label && (
                    <span className="rounded-full bg-[color:var(--primary-soft)] px-3 py-1 text-xs font-semibold text-[color:var(--primary)]">
                      {current.label}
                    </span>
                  )}
                </div>

                {images.length > 1 && (
                  <div className="mt-4">
                    <div className="h-2 w-full rounded-full bg-black/5 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-[color:var(--primary)] transition-all duration-300"
                        style={{ width: `${progressPct}%` }}
                      />
                    </div>
                    <div className="mt-2 text-xs text-[color:var(--muted)]">
                      {active + 1}/{images.length}
                    </div>
                  </div>
                )}

                <div
                  key={active}
                  className="mt-4 animate-[fadeUp_.22s_ease-out]"
                >
                  <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-[color:var(--fg)]">
                    XPece ONE{" "}
                    <span className="text-[color:var(--primary)]">Bundle</span>
                  </h1>

                  <p className="mt-3 text-[color:var(--muted)] md:text-lg">
                    Todo lo necesario para empezar: sin app, sin calibraciones,
                    listo para usar.
                  </p>

                  <ul className="mt-5 space-y-2 text-[color:var(--fg)]/90">
                    {bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--primary)]" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-7 hidden sm:flex flex-wrap gap-3">
                  <a
                    href="https://TU-TIENDANUBE.com/producto"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-[color:var(--primary)] px-6 py-3 text-sm font-semibold text-white shadow-[var(--shadow-sm)] hover:bg-[color:var(--primary-hover)] transition"
                  >
                    Comprar en Tienda
                  </a>

                  <a
                    href="https://wa.me/5491161332326"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-black/5 px-6 py-3 text-sm font-semibold text-[color:var(--fg)] hover:bg-black/10 transition"
                  >
                    Consultar por WhatsApp
                  </a>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {TRUST.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-[color:var(--border)] bg-white px-3 py-1 text-xs text-[color:var(--muted)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:hidden sticky bottom-0 z-40 border-t border-[color:var(--border)] bg-white/85 backdrop-blur">
          <div className="mx-auto max-w-6xl px-4 py-3 flex gap-2">
            <a
              href="https://TU-TIENDANUBE.com/producto"
              target="_blank"
              rel="noreferrer"
              className="flex-1 text-center rounded-full bg-[color:var(--primary)] px-4 py-3 text-sm font-semibold text-white shadow-[var(--shadow-sm)]"
            >
              Comprar
            </a>
            <a
              href="https://wa.me/54911123456789"
              target="_blank"
              rel="noreferrer"
              className="flex-1 text-center rounded-full bg-black/5 px-4 py-3 text-sm font-semibold text-[color:var(--fg)]"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <KeySpecsSection />

      <Reveal>
        {/* CTA FINAL */}
        <section className="mt-12 md:mt-16 bg-[#f7f7f7] py-10 md:py-14">
          <div className="mx-auto max-w-6xl px-4">
            <div className="rounded-3xl border border-black/10 bg-white p-6 md:p-8">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
                    ¿Listo para comprar?
                  </h3>
                  <p className="mt-2 text-black/60 max-w-xl">
                    Te llevás el bundle completo, soporte en Argentina y
                    garantía local.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    className="inline-flex justify-center rounded-full bg-[#5bb000] px-6 py-3 text-white font-semibold hover:bg-[#4e9600] transition"
                    href="https://www.tiendanube.com/"
                    target="blank"
                  >
                    Ir a Tienda
                  </a>
                  <a
                    className="inline-flex justify-center rounded-full bg-black/5 px-6 py-3 font-semibold text-black hover:bg-black/10 transition"
                    href="https://wa.me/5491161332326"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Consultar por WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Reveal>
    </main>
  );
}
