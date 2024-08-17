import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
      <body className="flex min-h-full bg-cumbre-purple antialiased dark:bg-indigo-900">
        {children}
      </body>
    </html>
  );
}
