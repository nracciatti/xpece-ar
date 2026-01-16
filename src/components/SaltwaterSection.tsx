import Image from "next/image";
import Link from "next/link";

type Props = {
  topTitle?: string; // "28 Minute Flight Time"
  topNote?: string; // texto chiquito arriba a la derecha
  mediaSrc: string; // imagen o poster (si después lo pasás a video)
  mediaAlt?: string;
  title: string; // "Saltwater Ready"
  body: string;
  ctaLabel?: string; // "Buy Now"
  ctaHref?: string; // link tienda nube
};

export function SaltwaterSection({
  topTitle = "28 Minutos de vuelo",
  mediaSrc,
  mediaAlt = "XPece feature",
  title,
  body,
  ctaLabel = "Buy Now",
  ctaHref = "#",
}: Props) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        {/* Top row: título grande + nota derecha */}
        <div className="relative">
          <h2 className="whitespace-pre-line text-center text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            {topTitle}
          </h2>

          <div className="mt-6 md:mt-0 md:absolute md:right-0 md:top-0 md:max-w-[280px]">
            <p className="text-sm text-[color:var(--muted)]">
            </p>
          </div>
        </div>

        {/* Split */}
        <div className="mt-10 grid gap-10 md:grid-cols-2 md:items-center">
          {/* Left media (imagen grande con bordes redondeados) */}
          <div className="relative overflow-hidden rounded-3xl bg-neutral-100">
            <div className="aspect-[4/3] md:aspect-[5/4]">
              <Image
                src={mediaSrc}
                alt={mediaAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={false}
              />
            </div>
          </div>

          {/* Right content */}
          <div className="space-y-6 md:pl-6">
            <h3 className="text-4xl font-semibold tracking-tight md:text-5xl">
              {title}
            </h3>

            <p className="max-w-md text-base leading-relaxed text-[color:var(--muted)] md:text-lg">
              {body}
            </p>

            <div>
              <Link
                href={ctaHref}
                className="
                  inline-flex items-center gap-3
                  rounded-full bg-black px-6 py-3
                  text-sm font-semibold text-white
                  transition duration-200 ease-out
                  hover:bg-black/90 active:scale-[0.98]
                "
              >
                {ctaLabel}
                <span aria-hidden className="text-white/80">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
