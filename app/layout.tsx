import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Clonando interfaz de Airbnb",
  description: "Base de proyecto Next.js para clonar la interfaz de Airbnb",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
