"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Slide =
  | {
      kind: "video";
      src: string;
      poster?: string;
      title: string;
    }
  | {
      kind: "image";
      src: string;
      title: string;
    };

type Props = {
  slides?: Slide[];
  autoPlayMs?: number;
  showArrows?: boolean;
  showDots?: boolean;
  className?: string;
};

export function SliderSection({
  slides,
  autoPlayMs = 6000,
  showArrows = true,
  showDots = true,
  className = "",
}: Props) {
  const data = useMemo<Slide[]>(
    () =>
      slides ?? [
        {
          kind: "video",
          src: "/videos/XPECE_VIDE_SLIDE.mp4",
          poster: "/images/slider-1-poster.jpg",
          title: "Carga carnada de hasta 3kg.",
        },
        {
          kind: "image",
          src: "/images/IMG_SLIDE.webp",
          title: "Precision Drops, Every Time.",
        },
        {
          kind: "image",
          src: "/images/bait_release_switch.webp",
          title: "Designed for Saltwater Sessions.",
        },
      ],
    [slides]
  );

  const [index, setIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  // refs para controlar play/pause de videos
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);

  const clampIndex = (i: number) => {
    const n = data.length;
    return ((i % n) + n) % n;
  };

  const goTo = (i: number) => setIndex(clampIndex(i));
  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  //autoplay del slider
  useEffect(() => {
    if (isHovering) return;
    const id = window.setInterval(() => {
      setIndex((i) => clampIndex(i + 1));
    }, autoPlayMs);
    return () => window.clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoPlayMs, isHovering, data.length]);

  // Play/pause de video según slide activo
  useEffect(() => {
    data.forEach((s, i) => {
      if (s.kind !== "video") return;
      const el = videoRefs.current[i];
      if (!el) return;
      if (i === index) {
        // intentar reproducir (autoplay muted debería funcionar)
        el.currentTime = 0; // opcional: reiniciar al entrar
        el.play().catch(() => {});
      } else {
        el.pause();
      }
    });
  }, [index, data]);

  const activeTitle = data[index]?.title ?? "";

  return (
    <section
      className={[
        "relative w-full overflow-hidden bg-black",
        // ocupa todo el viewport
        "h-[100svh] min-h-[520px]",
        className,
      ].join(" ")}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      aria-roledescription="carousel"
    >
      {/* Track */}
      <div
        className="absolute inset-0 flex transition-transform duration-700 ease-[cubic-bezier(.4,0,.2,1)]
"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {data.map((slide, i) => (
          <div key={i} className="relative h-full w-full shrink-0">
            {slide.kind === "video" ? (
              <video
                ref={(el) => {
                  videoRefs.current[i] = el;
                }}
                className="absolute inset-0 h-full w-full object-cover"
                muted
                playsInline
                loop
                preload="metadata"
                poster={slide.poster}
              >
                <source src={slide.src} type="video/mp4" />
              </video>
            ) : (
              // Usamos <img> para no pelear con tamaños full viewport,
              // si querés next/image después lo pasamos.
              <img
                src={slide.src}
                alt={slide.title}
                className="absolute inset-0 h-full w-full object-cover"
                loading={i === 0 ? "eager" : "lazy"}
              />
            )}

            {/* Overlay sutil para legibilidad del título */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />
          </div>
        ))}
      </div>

      {/* Title bottom-left (cambia con el slide) */}
      <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
        <div className="max-w-[85vw] md:max-w-[520px]">
          <h3 className="text-white text-2xl md:text-4xl font-semibold tracking-tight drop-shadow">
            {activeTitle}
          </h3>
        </div>
      </div>

      {/* Arrows */}
      {showArrows && (
        <>
          <button
            type="button"
            aria-label="Anterior"
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 grid h-11 w-11 place-items-center rounded-full bg-white/80 backdrop-blur hover:bg-white transition"
          >
            <ChevronLeft className="h-5 w-5 text-black" />
          </button>
          <button
            type="button"
            aria-label="Siguiente"
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 grid h-11 w-11 place-items-center rounded-full bg-white/80 backdrop-blur hover:bg-white transition"
          >
            <ChevronRight className="h-5 w-5 text-black" />
          </button>
        </>
      )}

      {/* Dots */}
      {showDots && (
        <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 flex items-center gap-2">
          {data.map((_, i) => (
            <button
              key={i}
              aria-label={`Ir al slide ${i + 1}`}
              onClick={() => goTo(i)}
              className={[
                "h-2.5 w-2.5 rounded-full transition",
                i === index ? "bg-white" : "bg-white/40 hover:bg-white/60",
              ].join(" ")}
            />
          ))}
        </div>
      )}
    </section>
  );
}
