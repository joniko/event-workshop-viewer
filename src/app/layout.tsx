import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import eventImage from "@/images/bg-top.jpg";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cumbre Generaciones 2024",
  description: "Consulta el programa, busca tus talleres y las ubicaciones.",
  metadataBase: new URL("https://cumbre.app"), // Reemplaza con tu dominio real
  openGraph: {
    images: [
      {
        url: "/cumbre-generaciones-2024.jpg",
        width: 1200,
        height: 630,
        alt: "Cumbre Generaciones 2024",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full scroll-smooth" suppressHydrationWarning>
      <body
        style={{
          backgroundImage: `url(${eventImage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
        className="flex min-h-full bg-zinc-300 antialiased"
      >
        {children}
      </body>
    </html>
  );
}
