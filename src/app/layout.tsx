import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import Footer from "@/components/Footer";
import "./globals.css";
// Using bg-app.jpg from public folder directly

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TOMATULUGAR - PEC 2024",
  description: "Consulta el programa, busca tus talleres y las ubicaciones.",
  metadataBase: new URL("https://pec24.app"), // Reemplaza con tu dominio real
  openGraph: {
    images: [
      {
        url: "/conferencia-tomatulugar-2024.jpg",
        width: 1200,
        height: 630,
        alt: "TOMATULUGAR - PEC 2024",
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
          backgroundImage: "url(/bg-app.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
        className="flex flex-col min-h-full bg-slate-300 antialiased"
      >
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
