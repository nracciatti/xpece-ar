"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Headset, ShieldCheck, Truck, Receipt } from "lucide-react";

type Item = {
  title: string;
  desc: string;
  Icon: React.ElementType;
};

export function TrustBar() {
  const items: Item[] = useMemo(
    () => [
      {
        Icon: Truck,
        title: "Envíos a todo el país",
        desc: "Rápidos y seguros",
      },
      { Icon: ShieldCheck, title: "Garantía local", desc: "Políticas claras" },
      { Icon: Headset, title: "Soporte en Argentina", desc: "Atención local" },
      { Icon: Receipt, title: "Pago seguro", desc: "Comprá con confianza" },
    ],
    []
  );

  // ===== Mobile carousel =====
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Solo auto-scroll en pantallas chicas
    const mq = window.matchMedia("(max-width: 639px)");
    if (!mq.matches) return;

    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % items.length);
    }, 3500);

    return () => window.clearInterval(id);
  }, [items.length]);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const mq = window.matchMedia("(max-width: 639px)");
    if (!mq.matches) return;

    const card = el.querySelector<HTMLElement>("[data-card='true']");
    const cardW = card?.offsetWidth ?? 0;
    if (!cardW) return;

    el.scrollTo({
      left: index * (cardW + 12),
      behavior: "smooth",
    });
  }, [index]);

  return (
    <section className="bg-[color:var(--primary-soft)]">
      <div className="mx-auto max-w-6xl px-4 py-8">
        {/* Desktop/Tablet grid (sin movimiento) */}
        <div className="hidden sm:grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ Icon, title, desc }) => (
            <div
              key={title}
              className="flex items-start gap-3 rounded-2xl bg-white/70 backdrop-blur border border-white/40 px-4 py-4 transition duration-200 ease-out hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mt-0.5 grid h-10 w-10 place-items-center rounded-full bg-white border border-[color:var(--border)]">
                <Icon className="h-5 w-5 text-[color:var(--primary)]" />
              </div>
              <div className="leading-tight">
                <div className="text-sm font-semibold text-[color:var(--fg)]">
                  {title}
                </div>
                <div className="mt-1 text-sm text-[color:var(--muted)]">
                  {desc}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile carousel (movimiento suave) */}
        <div className="sm:hidden">
          <div
            ref={scrollerRef}
            className="flex gap-3 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {/* hide scrollbar (webkit) */}
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>

            {items.map(({ Icon, title, desc }) => (
              <div
                key={title}
                data-card="true"
                className="min-w-[85%] snap-start rounded-2xl bg-white/80 backdrop-blur border border-white/40 px-4 py-4 flex items-start gap-3"
              >
                <div className="mt-0.5 grid h-10 w-10 place-items-center rounded-full bg-white border border-[color:var(--border)]">
                  <Icon className="h-5 w-5 text-[color:var(--primary)]" />
                </div>

                <div className="leading-tight">
                  <div className="text-sm font-semibold text-[color:var(--fg)]">
                    {title}
                  </div>
                  <div className="mt-1 text-sm text-[color:var(--muted)]">
                    {desc}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="mt-3 flex justify-center gap-2">
            {items.map((_, i) => (
              <button
                key={i}
                aria-label={`Ir a item ${i + 1}`}
                onClick={() => setIndex(i)}
                className={[
                  "h-2 w-2 rounded-full transition",
                  i === index ? "bg-[color:var(--primary)]" : "bg-black/20",
                ].join(" ")}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
