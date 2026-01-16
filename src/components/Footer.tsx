"use client";

export default function Footer() {
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
              {[
                ["Home", "#home"],
                ["Características", "#caracteristicas"],
                ["Opiniones", "#opiniones"],
                ["Producto", "#producto"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="transition hover:text-white">
                    {label}
                  </a>
                </li>
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
                  href="https://wa.me/5491161332326"
                  target="blank"
                  className="hover:text-white"
                >
                  +54 9 11 6133-2326
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
              {["Instagram", "Facebook"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-white transition hover:bg-white/20"
                >
                  {s}
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
