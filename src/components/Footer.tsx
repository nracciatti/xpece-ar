"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

type FooterLink = { label: string; href: string; kind?: "link" | "anchor" };

export default function Footer() {
  const pathname = usePathname();
  const isProductPage = pathname === "/xpece-one-bundle";

  const links: FooterLink[] = useMemo(() => {
    if (isProductPage) {
      return [
        { label: "Volver al inicio", href: "/", kind: "link" },
        { label: "Características", href: "#especificaciones", kind: "anchor" },
        // Podés sumar “Comprar” si querés:
        // { label: "Comprar", href: "https://xpeceargentinadronesdepes.mitiendanube.com/productos/xpece-one-bundle/", kind: "link" },
      ];
    }

    return [
      { label: "Home", href: "/#home", kind: "link" },
      { label: "Opiniones", href: "/#opiniones", kind: "link" },
      { label: "Producto", href: "/xpece-one-bundle", kind: "link" },
    ];
  }, [isProductPage]);

  const renderFooterLink = (item: FooterLink) => {
    // anchors solo en la página actual (ej: producto)
    if (item.kind === "anchor") {
      return (
        <a href={item.href} className="transition hover:text-white">
          {item.label}
        </a>
      );
    }

    // external
    if (item.href.startsWith("http")) {
      return (
        <a
          href={item.href}
          target="_blank"
          rel="noreferrer"
          className="transition hover:text-white"
        >
          {item.label}
        </a>
      );
    }

    // internal
    return (
      <Link href={item.href} className="transition hover:text-white">
        {item.label}
      </Link>
    );
  };

  return (
    <footer className="bg-[#0f2f1f] text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <div className="text-xl font-extrabold tracking-tight">
              XPece Argentina
            </div>

            <p className="mt-3 max-w-sm text-sm text-white/80">
              Drones de pesca XPece en Argentina. Todo lo que necesitás para
              pescar con precisión: sin apps, sin calibración, listo para usar.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {[
                "Soporte en Argentina",
                "Garantía local",
                "Envíos a todo el país",
              ].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/90"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Secciones */}
          <div>
            <div className="text-sm font-semibold text-white/90">Secciones</div>
            <ul className="mt-3 space-y-2 text-sm text-white/75">
              {links.map((item) => (
                <li key={item.label}>{renderFooterLink(item)}</li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <div className="text-sm font-semibold text-white/90">Contacto</div>

            <div className="mt-3 space-y-2 text-sm text-white/75">
              <div>
                WhatsApp:{" "}
                <a
                  href="https://wa.me/5491160201021"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white"
                >
                  +54 9 11 6020-1021
                </a>
              </div>

              <div>
                Email:{" "}
                <a
                  href="mailto:ventas@xpece.com.ar"
                  className="hover:text-white"
                >
                  ventas@xpece.com.ar
                </a>
              </div>
            </div>

            <div className="mt-4 flex gap-2">
              {[
                { label: "Instagram", href: "#" },
                { label: "Facebook", href: "#" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-white transition hover:bg-white/20"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/20 pt-6 text-xs text-white/60 md:flex-row md:items-center md:justify-between">
          <div>
            © {new Date().getFullYear()} XPece Argentina. Todos los derechos
            reservados.
          </div>
        </div>
      </div>
    </footer>
  );
}
