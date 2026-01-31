"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Facebook, Instagram, Menu, X } from "lucide-react";

type NavItem = { label: string; href: string; kind?: "link" | "anchor" };

const SHOP_URL = "https://xpeceargentina.mitiendanube.com/";
const PRODUCT_URL =
  "https://xpeceargentinadronesdepes.mitiendanube.com/productos/xpece-one-bundle/";

const ANNOUNCEMENTS = [
  "Envíos a todo el país",
  "Garantía local",
  "Soporte en Argentina",
];

export function Navbar() {
  const pathname = usePathname();
  const isProductPage = pathname === "/xpece-one-bundle";

  const [open, setOpen] = useState(false);

  const [activeKey, setActiveKey] = useState<string>(() => {
    if (typeof window === "undefined") return pathname;
    return window.location.hash || pathname;
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    setActiveKey(window.location.hash || pathname);
  }, [pathname]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const onHashChange = () => {
      setActiveKey(window.location.hash || pathname);
    };

    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, [pathname]);

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

  // en desktop cierra el menu
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const [annIndex, setAnnIndex] = useState(0);
  useEffect(() => {
    if (isProductPage) return; // no mostrar ni animar en producto
    const id = setInterval(() => {
      setAnnIndex((i) => (i + 1) % ANNOUNCEMENTS.length);
    }, 3500);
    return () => clearInterval(id);
  }, [isProductPage]);

  const navItems: NavItem[] = useMemo(() => {
    if (isProductPage) {
      return [
        { label: "Volver al sitio", href: "/", kind: "link" },
        { label: "Contacto", href: "/contacto", kind: "link" },
      ];
    }

    return [
      { label: "Home", href: "/", kind: "link" },
      { label: "Opiniones", href: "#opiniones", kind: "anchor" },
      { label: "XPece One", href: "/xpece-one-bundle", kind: "link" },
      { label: "Contacto", href: "/contacto", kind: "link" },
    ];
  }, [isProductPage]);

  const renderNavItem = (item: NavItem, isMobile = false) => {
    const active =
      (item.kind === "anchor" && activeKey === item.href) ||
      (item.kind === "link" && activeKey === item.href);

    const classes = [
      isMobile ? "block px-4 py-3" : "px-5 py-2",
      "rounded-full text-sm font-semibold transition",
      active
        ? "bg-black text-white"
        : "text-[color:var(--fg)] hover:bg-black/5",
    ].join(" ");

    const closeMobile = () => {
      if (isMobile) setOpen(false);
    };

    if (item.kind === "anchor") {
      return (
        <a
          key={item.href}
          href={item.href}
          className={classes}
          onClick={() => {
            setActiveKey(item.href);
            closeMobile();
          }}
        >
          {item.label}
        </a>
      );
    }

    if (item.href.startsWith("http")) {
      return (
        <a
          key={item.href}
          href={item.href}
          className={classes}
          target="_blank"
          rel="noreferrer"
          onClick={() => {
            setActiveKey(item.href);
            closeMobile();
          }}
        >
          {item.label}
        </a>
      );
    }

    // Internal routes
    return (
      <Link
        key={item.href}
        href={item.href}
        className={classes}
        onClick={() => {
          setActiveKey(item.href);
          closeMobile();
        }}
      >
        {item.label}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-50">
      {/* Announcement bar (solo Home) */}
      {!isProductPage && (
        <div
          className={[
            "bg-[color:var(--primary)] text-white overflow-hidden transition-all duration-300",
            showAnnouncement ? "max-h-10 opacity-100" : "max-h-0 opacity-0",
          ].join(" ")}
        >
          <div className="mx-auto max-w-6xl px-4">
            <div className="h-9 flex items-center justify-center relative">
              {/* Texto rotativo */}
              <span
                key={annIndex}
                className="text-xs sm:text-sm font-semibold tracking-wide animate-[fadeUp_.28s_ease-out]"
              >
                {ANNOUNCEMENTS[annIndex]}
              </span>

              {/* Socials a la derecha (solo desktop) */}
              <div className="absolute right-0 hidden sm:flex items-center gap-3">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="hover:opacity-80 transition"
                >
                  <Facebook size={16} />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="hover:opacity-80 transition"
                >
                  <Instagram size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main navbar */}
      <div className="bg-white border-b border-[color:var(--border)]">
        <div className="mx-auto max-w-6xl px-4">
          <div className="h-16 flex items-center justify-between gap-3">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 shrink-0"
              onClick={() => setActiveKey("/")}
            >
              <Image
                src="/images/XPECE_LOGO_GREEN.png"
                alt="XPece"
                width={140}
                height={40}
                priority
                className="h-9 w-auto"
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-3 flex-1 justify-center">
              {navItems.map((item) => renderNavItem(item, false))}
            </nav>

            <div className="hidden lg:flex">
              <a
                href={isProductPage ? PRODUCT_URL : SHOP_URL}
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
                {isProductPage ? "Comprar" : "Tienda"}
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
              open ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0",
            ].join(" ")}
          >
            <nav className="pb-4">
              <div className="mt-2 rounded-2xl border border-[color:var(--border)] bg-white overflow-hidden">
                {navItems.map((item) => renderNavItem(item, true))}
              </div>

              <a
                href={isProductPage ? PRODUCT_URL : SHOP_URL}
                target="_blank"
                rel="noreferrer"
                className="
                  mt-4 block w-full
                  rounded-full
                  bg-[color:var(--primary)]
                  px-4 py-3
                  text-center text-sm font-semibold text-white
                  shadow-[var(--shadow-sm)]
                  hover:bg-[color:var(--primary-hover)]
                  transition
                "
                onClick={() => setOpen(false)}
              >
                {isProductPage ? "Comprar ahora" : "Ir a Tienda"}
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
