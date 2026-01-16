"use client";

import Image from "next/image";
import { useMemo, useRef, useState } from "react";

type GalleryImage = {
  src: string;
  alt: string;
  label?: string;
  bullets?: string[];
};

type Props = {
  images: GalleryImage[];
  active?: number;
  onActiveChange?: (i: number) => void;
  className?: string;
};

export function ProductGallery({
  images,
  className = "",
  active: activeProp,
  onActiveChange,
}: Props) {
  const safe = useMemo(() => (images ?? []).filter(Boolean), [images]);

  // internal fallback
  const [internal, setInternal] = useState(0);

  const isControlled = typeof activeProp === "number";
  const activeRaw = isControlled ? (activeProp as number) : internal;

  const active = useMemo(() => {
    if (safe.length === 0) return 0;
    return Math.max(0, Math.min(activeRaw, safe.length - 1));
  }, [activeRaw, safe.length]);

  const current = safe[active];
  const hasMany = safe.length > 1;

  const startX = useRef<number | null>(null);
  const deltaX = useRef(0);

  const setActive = (next: number) => {
    if (safe.length === 0) return;

    const clamped = Math.max(0, Math.min(next, safe.length - 1));

    // IMPORTANT: always call callback if provided
    if (onActiveChange) onActiveChange(clamped);

    // only update internal if uncontrolled
    if (!isControlled) setInternal(clamped);
  };

  const prev = () => {
    if (!hasMany) return;
    setActive(active - 1 < 0 ? safe.length - 1 : active - 1);
  };

  const next = () => {
    if (!hasMany) return;
    setActive(active + 1 >= safe.length ? 0 : active + 1);
  };

  function onTouchStart(e: React.TouchEvent) {
    startX.current = e.touches[0]?.clientX ?? null;
    deltaX.current = 0;
  }
  function onTouchMove(e: React.TouchEvent) {
    if (startX.current == null) return;
    deltaX.current = (e.touches[0]?.clientX ?? 0) - startX.current;
  }
  function onTouchEnd() {
    if (!hasMany) return;
    const dx = deltaX.current;
    if (dx > 60) prev();
    if (dx < -60) next();
    startX.current = null;
    deltaX.current = 0;
  }

  if (!current) return null;

  return (
    <div className={["w-full min-w-0", className].join(" ")}>
      <div
        className="relative overflow-hidden rounded-3xl border border-[color:var(--border)] bg-[color:var(--card)] shadow-sm"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div className="relative h-[300px] sm:h-[380px] md:h-[460px] lg:h-[520px]">
          <Image
            key={current.src}
            src={current.src}
            alt={current.alt}
            fill
            sizes="(max-width: 768px) 100vw, 560px"
            className="object-contain p-4 md:p-6"
            priority={active === 0}
          />

          {hasMany && (
            <>
              <button
                type="button"
                onClick={prev}
                aria-label="Anterior"
                className="absolute left-3 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-white/85 backdrop-blur border border-black/10 shadow-sm hover:bg-white transition"
              >
                ‹
              </button>

              <button
                type="button"
                onClick={next}
                aria-label="Siguiente"
                className="absolute right-3 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-white/85 backdrop-blur border border-black/10 shadow-sm hover:bg-white transition"
              >
                ›
              </button>
            </>
          )}

          {hasMany && (
            <div className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-black/40 px-3 py-1 text-xs text-white backdrop-blur">
              {active + 1}/{safe.length}
            </div>
          )}
        </div>
      </div>

      {hasMany && (
        <div className="mt-3 flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory">
          {safe.map((img, i) => (
            <button
              key={img.src + i}
              type="button"
              onClick={() => setActive(i)}
              className={[
                "snap-start relative shrink-0 overflow-hidden rounded-2xl border bg-white",
                "h-14 w-16 sm:h-16 sm:w-20 md:h-20 md:w-28",
                i === active
                  ? "border-[color:var(--primary)] ring-2 ring-[color:var(--primary)]/25"
                  : "border-[color:var(--border)] hover:border-black/20",
              ].join(" ")}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-contain p-2"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
