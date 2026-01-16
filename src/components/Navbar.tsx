"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { Facebook, Instagram, Menu, X } from "lucide-react";

type NavItem = { label: string; href: string };

const SHOP_URL = "https://TU-TIENDANUBE.com/producto";

export function Navbar() {
  const [open, setOpen] = useState(false);

  // controla la barra verde
  const [showAnnouncement, setShowAnnouncement] = useState(true);
  const lastY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    lastY.current = window.scrollY;

    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;

      requestAnimationFrame(() => {
        const y = window.scrollY;
        const delta = y - lastY.current;
        const THRESHOLD = 8;

        if (y < 10) {
          setShowAnnouncement(true);
        } else if (Math.abs(delta) > THRESHOLD) {
          setShowAnnouncement(delta < 0);
        }

        lastY.current = y;
        ticking.current = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cierra el menú si pasás a desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const navItems: NavItem[] = useMemo(
    () => [
      { label: "Home", href: "/" },
      { label: "Opiniones", href: "#opiniones" },
      { label: "XPece One", href: "/xpece-one-bundle" },
      { label: "Contacto", href: "#contacto" },
    ],
    []
  );

  const activeHref = "/";

  return (
    <header className="sticky top-0 z-50">
      {/* Announcement bar */}
      <div
        className={[
          "bg-[color:var(--primary)] text-white overflow-hidden transition-all duration-300",
          showAnnouncement ? "max-h-12 opacity-100" : "max-h-0 opacity-0",
        ].join(" ")}
      >
        <div className="relative mx-auto max-w-6xl px-4">
          <div className="h-12 flex items-center">
            <div className="absolute left-1/2 -translate-x-1/2 text-sm font-semibold tracking-wide whitespace-nowrap">
              ¿Preguntas? ¡Hablános! +54 9 11 6133-2326 🇦🇷
            </div>

            <div className="ml-auto hidden sm:flex items-center gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="hover:opacity-80 transition"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="hover:opacity-80 transition"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div className="bg-white border-b border-[color:var(--border)]">
        <div className="mx-auto max-w-6xl px-4">
          <div className="h-16 flex items-center justify-between gap-3">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 shrink-0">
              <Image
                src="/images/XPECE_LOGO_GREEN.avif"
                alt="XPece"
                width={140}
                height={40}
                priority
                className="h-9 w-auto"
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-3 flex-1 justify-center">
              {navItems.map((item) => {
                const active = item.href === activeHref;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={[
                      "px-5 py-2 rounded-full text-sm font-semibold transition",
                      active
                        ? "bg-black text-white"
                        : "text-[color:var(--fg)] hover:bg-black/5",
                    ].join(" ")}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>

            {/* 👉 CTA Desktop */}
            <div className="hidden lg:flex">
              {/* Desktop: CTA integrado (no botón verde) */}
              <a
                href={SHOP_URL}
                target="_blank"
                rel="noreferrer"
                className="
    hidden lg:inline-flex items-center gap-2
    rounded-full border border-[color:var(--border)]
    bg-white px-4 py-2
    text-sm font-semibold text-[color:var(--fg)]
    hover:border-[color:var(--primary)]/40 hover:bg-[color:var(--primary)]/10
    transition
  "
              >
                <span className="h-2 w-2 rounded-full bg-[color:var(--primary)]" />
                Tienda
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              type="button"
              className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--border)] bg-white text-[color:var(--fg)] hover:bg-black/5 transition"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

          {/* Mobile menu */}
          <div
            id="mobile-menu"
            className={[
              "lg:hidden overflow-hidden transition-[max-height,opacity] duration-200",
              open ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0",
            ].join(" ")}
          >
            <nav className="pb-4">
              <div className="mt-2 rounded-2xl border border-[color:var(--border)] bg-white overflow-hidden">
                {navItems.map((item) => {
                  const active = item.href === activeHref;
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      className={[
                        "block px-4 py-3 text-sm font-semibold transition",
                        active
                          ? "bg-black text-white"
                          : "text-[color:var(--fg)] hover:bg-black/5",
                      ].join(" ")}
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </a>
                  );
                })}
              </div>

              {/* 👉 CTA Mobile */}
              <a
                href={SHOP_URL}
                target="_blank"
                rel="noreferrer"
                className="
                  mt-4 block w-full
                  rounded-full
                  bg-[color:var(--primary)]
                  px-4 py-3
                  text-center text-sm font-semibold text-white
                  shadow-[var(--shadow-sm)]
                "
                onClick={() => setOpen(false)}
              >
                Comprar ahora
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
