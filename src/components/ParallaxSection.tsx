"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Props = {
  src: string;
  heightVh?: number;

  startMaxWidthPx?: number; // ancho inicial del "card" en desktop
  startRadiusPx?: number; // radius inicial

  // Texto
  title: string;
  subtitle: string;
  underlineWord?: string;
};

export function ParallaxSection({
  src,
  heightVh = 200,
  startMaxWidthPx = 1100,
  startRadiusPx = 26,
  title,
  subtitle,
  underlineWord = "",
}: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [p, setP] = useState(0);

  const reduced = useMemo(() => {
    if (typeof window === "undefined") return true;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;

      // arranca apenas entra, termina antes de salir
      const start = vh * 0.95;
      const end = -vh * 0.75;
      const raw = (start - rect.top) / (start - end);
      setP(Math.max(0, Math.min(1, raw)));
    };

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [reduced]);

  // --- Expansión: maxWidth y radius interpolados ---
  // p=0 -> card centrada (maxWidth startMaxWidthPx, radius startRadiusPx)
  // p=1 -> full width (maxWidth 100%, radius 0)
  const radius = reduced ? 0 : Math.round((1 - p) * startRadiusPx);

  // maxWidth dinámico: de startMaxWidthPx -> 100vw
  // En mobile, arranca casi full (como el sitio real)
  const maxWidth = reduced
    ? "100vw"
    : `min(100vw, ${Math.round(
        startMaxWidthPx + (windowWidthSafe() - startMaxWidthPx) * p
      )}px)`;

  // Padding vertical para que respire y parezca “card” al inicio
  // (en el sitio se ve con espacio arriba/abajo)
  const topPad = reduced ? 0 : Math.round((1 - p) * 56); // 56 -> 0

  // Micro parallax (leve, pero se siente)
  const scale = reduced ? 1 : 1.08 - p * 0.08; // 1.08 -> 1.00
  const y = reduced ? 0 : (1 - p) * 14; // 14px -> 0

  // Texto SOLO al final
  const showText = reduced ? true : p >= 0.94;
  const [before, under, after] = splitUnderline(title, underlineWord);

  return (
    <section
      ref={ref}
      className="relative bg-white"
      style={{ height: `${heightVh}vh` }}
    >
      <div className="sticky top-0 h-[100svh]">
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ paddingTop: topPad, paddingBottom: topPad }}
        >
          {/* Contenedor que se expande */}
          <div
            className="relative h-[100svh] w-full overflow-hidden bg-black"
            style={{
              maxWidth,
              borderRadius: radius,
              transition: reduced ? undefined : "border-radius 120ms linear",
              boxShadow:
                p < 0.98
                  ? "0 18px 55px rgba(0,0,0,0.18)"
                  : "0 0 0 rgba(0,0,0,0)",
            }}
          >
            <video
              className="absolute inset-0 h-full w-full object-cover will-change-transform"
              style={{ transform: `translate3d(0, ${y}px, 0) scale(${scale})` }}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            >
              <source src={src} type="video/mp4" />
            </video>

            {/* Overlay sutil para legibilidad */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/20" />

            {/* Texto bottom-left (aparece al final) */}
            <div
              className={[
                "pointer-events-none absolute left-5 bottom-8 md:left-14 md:bottom-14",
                "transition duration-500 ease-out",
                showText
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4",
              ].join(" ")}
            >
              <h3 className="text-white font-semibold tracking-tight leading-[1.05] text-3xl sm:text-4xl md:text-6xl drop-shadow">
                {before}
                {under ? (
                  <span className="relative">
                    {under}
                    <span className="absolute left-0 right-0 -bottom-1.5 h-1.5 bg-red-500 rounded-full" />
                  </span>
                ) : null}
                {after}
              </h3>
              <p className="mt-3 text-white/90 text-base sm:text-lg md:text-2xl drop-shadow">
                {subtitle}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// helper: underline en una palabra
function splitUnderline(title: string, word: string) {
  if (!word) return [title, "", ""];
  const idx = title.toLowerCase().indexOf(word.toLowerCase());
  if (idx === -1) return [title, "", ""];
  return [
    title.slice(0, idx),
    title.slice(idx, idx + word.length),
    title.slice(idx + word.length),
  ] as const;
}

// max ancho “seguro” (evita crash SSR, usa viewport si existe)
function windowWidthSafe() {
  if (typeof window === "undefined") return 1440;
  return Math.max(360, Math.min(1920, window.innerWidth));
}
