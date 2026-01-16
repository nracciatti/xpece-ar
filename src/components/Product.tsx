import Image from "next/image";
import Link from "next/link";

type FeaturedProductProps = {
  imageSrc: string;
  buyUrl: string;
};

export default function FeaturedProduct({
  imageSrc,
  buyUrl,
}: FeaturedProductProps) {
  return (
    <section id="bundle" className="bg-[color:var(--bg)] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div
          className="
            grid gap-10 md:grid-cols-2 md:items-center
            rounded-[32px]
            border border-[color:var(--border)]
            bg-[color:var(--card)]
            p-6 md:p-10
            shadow-sm
          "
        >
          {/* Media */}
          <div className="relative overflow-hidden rounded-3xl bg-black/5">
            <div className="relative aspect-[16/12]">
              <Image
                src={imageSrc}
                alt="XPece ONE Bundle"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-sm font-semibold text-[color:var(--muted)]">
              Producto destacado
            </p>

            <h2 className="mt-1 text-4xl md:text-5xl font-semibold tracking-tight text-[color:var(--fg)]">
              XPece ONE{" "}
              <span className="text-[color:var(--primary)]">Bundle</span>
            </h2>

            <p className="mt-4 text-[color:var(--muted)] md:text-lg">
              Todo lo necesario para empezar a pescar con drones. Sin apps, sin
              calibraciones, listo para usar.
            </p>

            {/* Includes */}
            <ul className="mt-6 space-y-3 text-[color:var(--muted)]">
              {[
                "Drone XPece ONE",
                "Control remoto con pantalla",
                "Accesorios esenciales",
                "Batería y cargador",
                "Soporte y garantía en Argentina",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[color:var(--primary)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/xpece-one-bundle"
                className="
                  inline-flex items-center justify-center
                  rounded-2xl border border-[color:var(--border)]
                  bg-[color:var(--card)]
                  px-6 py-3
                  font-semibold text-[color:var(--fg)]
                  transition
                  hover:-translate-y-0.5 hover:shadow-sm
                "
              >
                Ver producto
              </Link>

              <a
                href={buyUrl}
                target="_blank"
                rel="noreferrer"
                className="
                  inline-flex items-center justify-center
                  rounded-2xl bg-[color:var(--primary)]
                  px-6 py-3
                  font-semibold text-white
                  transition hover:bg-[color:var(--primary-hover)]
                "
              >
                Comprar ahora
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
