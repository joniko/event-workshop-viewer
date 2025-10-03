import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import Footer from "@/components/Footer";
import "./globals.css";
// Using bg-app.jpg from public folder directly

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#051561",
};

export const metadata: Metadata = {
  title: "TOMATULUGAR - PEC 2024",
  description: "Consulta el programa, busca tus talleres y las ubicaciones.",
  metadataBase: new URL("https://pec24.app"), // Reemplaza con tu dominio real
  other: {
    // Safari específico
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "TOMATULUGAR PEC 2024",
    // Chrome/Android
    "mobile-web-app-capable": "yes",
    "application-name": "TOMATULUGAR PEC 2024",
    // Windows
    "msapplication-TileColor": "#051561",
    "msapplication-navbutton-color": "#051561",
  },
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
        className="flex flex-col min-h-full bg-[#051561] antialiased"
      >
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
