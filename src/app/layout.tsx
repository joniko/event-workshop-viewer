import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
// Using bg-app.jpg from public folder directly

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#051561",
};

export const metadata: Metadata = {
  title: "Programa - Conferencia TOMATULUGAR 2025",
  description: "Consulta el programa.",
  metadataBase: new URL("https://conferencia.app"), // Reemplaza con tu dominio real
  manifest: "/manifest.json",
  other: {
    // Safari específico
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "Conferencia TOMATULUGAR 2025",
    // Chrome/Android
    "mobile-web-app-capable": "yes",
    "application-name": "Conferencia TOMATULUGAR 2025",
    // Windows
    "msapplication-TileColor": "#051561",
    "msapplication-navbutton-color": "#051561",
    // PWA
    "msapplication-config": "/browserconfig.xml",
  },
  icons: {
    icon: [
      { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Programa - Conferencia TOMATULUGAR 2025",
    description: "Consulta el programa.",
    type: "website",
    locale: "es_ES",
    images: [
      {
        url: "/ttl-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Conferencia TOMATULUGAR 2025",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Programa - Conferencia TOMATULUGAR 2025",
    description: "Consulta el programa.",
    images: ["/ttl-og-image.jpg"],
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
        <Toaster />
      </body>
    </html>
  );
}
