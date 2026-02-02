"use client";

import { useEffect, useState } from "react";

type Props = {
  waUrl: string;
  message?: string;
  delayMs?: number;
};

export function WhatsAppToast({
  waUrl,
  message = "¿Consultas? ¡Hablános por WhatsApp!",
  delayMs = 4000,
}: Props) {
  const [mounted, setMounted] = useState(false); // controla si está en DOM
  const [visible, setVisible] = useState(false); // controla animación

  useEffect(() => {
    const KEY = "wa_toast_last_shown";
    const now = Date.now();
    const last = Number(localStorage.getItem(KEY) || "0");

    const t = window.setTimeout(() => {
      setMounted(true);
      // siguiente tick para que la transición se aplique
      requestAnimationFrame(() => setVisible(true));
      localStorage.setItem(KEY, String(Date.now()));
    }, delayMs);

    return () => window.clearTimeout(t);
  }, [delayMs]);

  const close = () => {
    // animación salida
    setVisible(false);
    // esperar a que termine transición antes de sacar del DOM
    window.setTimeout(() => setMounted(false), 220);
  };

  if (!mounted) return null;

  return (
    <div className="fixed bottom-4 right-4 z-[60] w-[92vw] max-w-sm">
      <div
        className={[
          "rounded-2xl border border-[color:var(--border)] bg-white shadow-[var(--shadow-md)] p-4",
          "transition-all duration-200 ease-out will-change-transform",
          visible
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-3 scale-[0.98]",
        ].join(" ")}
        role="dialog"
        aria-live="polite"
        aria-label="Contacto por WhatsApp"
      >
        <div className="flex items-start gap-3">
          <div className="mt-0.5 h-3 w-3 rounded-full bg-[color:var(--primary)] shrink-0" />

          <div className="flex-1">
            <p className="text-sm font-semibold text-[color:var(--fg)]">
              {message}
            </p>
            <p className="mt-1 text-xs text-[color:var(--muted)]">
              Respuesta rápida. Soporte en Argentina.
            </p>

            <div className="mt-3 flex gap-2">
              <a
                href={waUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 text-center rounded-full bg-[color:var(--primary)] px-4 py-2 text-sm font-semibold text-white hover:bg-[color:var(--primary-hover)] transition"
              >
                Abrir WhatsApp
              </a>

              <button
                type="button"
                onClick={close}
                className="rounded-full border border-[color:var(--border)] px-4 py-2 text-sm font-semibold text-[color:var(--fg)] hover:bg-black/5 transition"
                aria-label="Cerrar"
              >
                Cerrar
              </button>
            </div>
          </div>

          <button
            type="button"
            onClick={close}
            className="ml-1 rounded-full p-1 text-[color:var(--muted)] hover:bg-black/5 transition"
            aria-label="Cerrar"
            title="Cerrar"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}
