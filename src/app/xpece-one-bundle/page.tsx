import type { Metadata } from "next";
import ProductPage from "./ProductPage";

export const metadata: Metadata = {
  title: "XPece ONE – Drone de pesca en Argentina",
  description:
    "Comprá el drone de pesca XPece ONE en Argentina. Bundle completo, sin app, listo para usar. Envíos a todo el país, garantía y soporte local.",

  openGraph: {
    title: "XPece ONE – Drone de pesca en Argentina",
    description:
      "Drone de pesca XPece ONE sin app, listo para usar. Envíos a todo el país, garantía y soporte local.",
    url: "https://xpece-ar.vercel.app/xpece-one-bundle",
    siteName: "XPece Argentina",
    images: [
      {
        url: "https://xpece-ar.vercel.app/images/XPECE_Bundle.webp",
        width: 1200,
        height: 630,
        alt: "Drone de pesca XPece ONE bundle completo",
      },
    ],
    locale: "es_AR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "XPece ONE – Drone de pesca en Argentina",
    description:
      "Drone de pesca XPece ONE. Sin app, listo para usar. Envíos y soporte local.",
    images: ["https://xpece-ar.vercel.app/images/XPECE_Bundle.webp"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <ProductPage />;
}
