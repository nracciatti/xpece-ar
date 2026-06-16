import "./globals.css";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { WhatsAppToast } from "@/components/WhatsAppToast";

export const metadata = {
  title: {
    default: "XPece Argentina | Drone de pesca",
    template: "%s | XPece Argentina",
  },
  description:
    "Drones de pesca XPece en Argentina. Drone XPece ONE con garantía local, soporte y envíos a todo el país.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        {children}
        <Footer />
        <WhatsAppToast
          waUrl="https://wa.me/5491160201021?text=Hola%20XPece%2C%20tengo%20una%20consulta%20por%20el%20XPece%20ONE."
          message="¿Consultas? ¡Hablános!"
          delayMs={4000}
        />
      </body>
    </html>
  );
}
