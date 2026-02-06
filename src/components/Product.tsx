import Image from "next/image";
import Link from "next/link";

type FeaturedProductProps = {
  bundleImageSrc: string;
  bundleBuyUrl: string;

  bareImageSrc: string;
  bareBuyUrl: string;
};

export default function FeaturedProduct({
  bundleImageSrc,
  bundleBuyUrl,
  bareImageSrc,
  bareBuyUrl,
}: FeaturedProductProps) {
  return (
    <section id="productos" className="bg-[color:var(--bg)] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        {/* Header */}
        <div className="mb-8 md:mb-10">
          <p className="text-sm font-semibold text-[color:var(--muted)]">
            Nuestros productos
          </p>
          <h2 className="mt-1 text-3xl md:text-4xl font-semibold tracking-tight text-[color:var(--fg)]">
            Elegí tu XPece ONE
          </h2>
          <p className="mt-3 text-[color:var(--muted)] md:text-lg max-w-2xl">
            Dos opciones según tu necesidad: el bundle completo para empezar ya,
            o la versión base más económica.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* ✅ Bundle (destacado) */}
          <div
            className="
              rounded-[32px]
              border border-[color:var(--border)]
              bg-[color:var(--card)]
              p-6 md:p-8
              shadow-sm
            "
          >
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm font-semibold text-[color:var(--muted)]">
                Producto destacado
              </p>
              <span className="rounded-full bg-[color:var(--primary-soft)] px-3 py-1 text-xs font-semibold text-[color:var(--primary)]">
                Recomendado
              </span>
            </div>

            {/* Media */}
            <div className="mt-5 relative overflow-hidden rounded-3xl bg-black/5">
              <div className="relative aspect-[16/12]">
                <Image
                  src={bundleImageSrc}
                  alt="XPece ONE Bundle"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="mt-6">
              <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-[color:var(--fg)]">
                XPece ONE{" "}
                <span className="text-[color:var(--primary)]">Bundle</span>
              </h3>

              <p className="mt-3 text-[color:var(--muted)] md:text-lg">
                Todo lo necesario para empezar a pescar con drones. Sin apps,
                sin calibraciones, listo para usar.
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
                  href={bundleBuyUrl}
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

          {/* ✅ ONE Bare (alternativa económica) */}
          <div
            className="
              rounded-[32px]
              border border-[color:var(--border)]
              bg-[color:var(--card)]
              p-6 md:p-8
              shadow-sm
            "
          >
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm font-semibold text-[color:var(--muted)]">
                Opción más económica
              </p>
              <span className="rounded-full border border-[color:var(--border)] bg-white px-3 py-1 text-xs font-semibold text-[color:var(--fg)]">
                Versión base
              </span>
            </div>

            {/* Media */}
            <div className="mt-5 relative overflow-hidden rounded-3xl bg-black/5">
              <div className="relative aspect-[16/12]">
                <Image
                  src={bareImageSrc}
                  alt="XPece ONE Bare"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="mt-6">
              <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-[color:var(--fg)]">
                XPece ONE{" "}
                <span className="text-[color:var(--primary)]">Bare</span>
              </h3>

              <p className="mt-3 text-[color:var(--muted)] md:text-lg">
                La alternativa más accesible para quienes buscan el dron en
                versión base y prefieren armar su kit.
              </p>

              {/* Includes */}
              <ul className="mt-6 space-y-3 text-[color:var(--muted)]">
                {[
                  "Drone XPece ONE Bare",
                  "Más económico",
                  "Soporte local",
                  "Envíos a todo el país",
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
                  href="/xpece-one-bare"
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
                  href={bareBuyUrl}
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

              {/* Small hint */}
              <p className="mt-4 text-xs text-[color:var(--muted)]">
                Tip: si querés el kit completo para salir a pescar sin vueltas,
                elegí el Bundle.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
