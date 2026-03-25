import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ESFERA — Relojes de Lujo Accesible | Bogotá, Colombia",
  description:
    "Relojes premium Curren en Colombia. Pago contra entrega en toda Colombia. Envío rápido desde Bogotá. Lujo accesible para el CEO joven.",
  keywords: [
    "Relojes en Bogotá",
    "Lujo accesible Colombia",
    "Pago contra entrega",
    "Relojes Curren Colombia",
    "Reloj hombre Bogotá",
    "Relojes de lujo baratos Colombia",
  ],
  openGraph: {
    title: "ESFERA — Relojes de Lujo Accesible",
    description: "Premium. Pago contra entrega. Envío a toda Colombia.",
    type: "website",
    locale: "es_CO",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-[#0F0F0F] text-white`}>
        {children}
      </body>
    </html>
  );
}
