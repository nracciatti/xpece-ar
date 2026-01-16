import Link from "next/link";
import Image from "next/image";

type Product = {
  id: string;
  title: string;
  subtitle: string;
  bullets: string[];
  detailsHref: string; // ruta interna: /xpece-one
  buyUrl: string; // Tienda Nube
  media:
    | { type: "image"; src: string; alt: string }
    | { type: "video"; src: string; alt: string };
};

const products: Product[] = [
  {
    id: "xpece-one",
    title: "XPece ONE",
    subtitle: "Vola y mirá debajo del agua.",
    bullets: ["Bait release", "Saltwater ready", "Sin app"],
    detailsHref: "/xpece-one",
    buyUrl: "https://TU-TIENDANUBE.com/PRODUCTO-ONE",
    media: {
      type: "image",
      src: "/images/XPECE_DRON.webp",
      alt: "XPece ONE",
    },
  },
  {
    id: "bundle",
    title: "Bundle",
    subtitle: "Todo lo necesario para empezar.",
    bullets: ["Combo", "Ahorro", "Accesorios"],
    detailsHref: "/bundle",
    buyUrl: "https://TU-TIENDANUBE.com/PRODUCTO-BUNDLE",
    media: {
      type: "image",
      src: "/images/placeholder-2.jpg",
      alt: "Bundle XPece",
    },
  },
];

export default function ProductGrid() {
  return (
    <section id="productos" className="bg-[color:var(--bg)] py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        {/* Header */}
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-4xl font-semibold tracking-tight text-[color:var(--fg)]">
              Productos
            </h2>
            <p className="mt-2 text-[color:var(--muted)]">
              Cards listas para conectar “Comprar” a Tienda Nube.
            </p>
          </div>

          <Link
            href="/productos"
            className="
              hidden md:inline-flex items-center justify-center
              rounded-2xl border border-[color:var(--border)]
              bg-[color:var(--card)] px-5 py-2.5
              font-semibold text-[color:var(--fg)]
              transition hover:-translate-y-0.5 hover:shadow-sm
            "
          >
            Ver todos
          </Link>
        </div>

        {/* Grid */}
        <div className="mt-8 grid gap-7 md:grid-cols-2">
          {products.map((p) => (
            <article
              key={p.id}
              className="
                overflow-hidden rounded-3xl border border-[color:var(--border)]
                bg-[color:var(--card)] shadow-sm
                transition hover:-translate-y-1 hover:shadow-md
              "
            >
              {/* Media */}
              <div className="relative aspect-[16/10] w-full bg-black/10">
                {p.media.type === "image" ? (
                  <Image
                    src={p.media.src}
                    alt={p.media.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    priority={p.id === "xpece-one"}
                  />
                ) : (
                  <video
                    className="h-full w-full object-cover"
                    src={p.media.src}
                    muted
                    playsInline
                    autoPlay
                    loop
                    preload="metadata"
                  />
                )}
              </div>

              {/* Content */}
              <div className="p-6 md:p-7">
                <h3 className="text-2xl font-semibold text-[color:var(--fg)]">
                  {p.title}
                </h3>
                <p className="mt-1 text-[color:var(--muted)]">{p.subtitle}</p>

                <ul className="mt-4 space-y-2 text-sm text-[color:var(--muted)]">
                  {p.bullets.map((b, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--muted)]" />
                      {b}
                    </li>
                  ))}
                </ul>

                {/* Buttons */}
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <Link
                    href={p.detailsHref}
                    className="
                      inline-flex items-center justify-center
                      rounded-2xl border border-[color:var(--border)]
                      bg-black/10 px-5 py-3
                      font-semibold text-[color:var(--fg)]
                      transition hover:bg-black/15
                    "
                  >
                    Detalles
                  </Link>

                  <a
                    href={p.buyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      inline-flex items-center justify-center
                      rounded-2xl bg-[color:var(--primary)]
                      px-5 py-3 font-semibold text-white
                      transition hover:bg-[color:var(--primary-hover)]
                    "
                  >
                    Comprar
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile "Ver todos" */}
        <div className="mt-8 md:hidden">
          <Link
            href="/productos"
            className="
              inline-flex w-full items-center justify-center
              rounded-2xl border border-[color:var(--border)]
              bg-[color:var(--card)] px-5 py-3
              font-semibold text-[color:var(--fg)]
              transition hover:-translate-y-0.5 hover:shadow-sm
            "
          >
            Ver todos
          </Link>
        </div>
      </div>
    </section>
  );
}
