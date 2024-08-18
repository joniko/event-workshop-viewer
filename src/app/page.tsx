import React from "react";
import Link from "next/link";
import WavyBackground from "@/components/WavyBackground";
import { Calendar, MapPin, Ticket, BookOpen, Users, Info } from "lucide-react";

const navigationItems = [
  { icon: Calendar, text: "Programa", href: "/program" },
  { icon: MapPin, text: "Ubicaciones", href: "/locations" },
  { icon: Ticket, text: "Talleres General", href: "/tickets" },
  { icon: BookOpen, text: "Talleres 3x2", href: "/workshops" },
  { icon: Users, text: "Equipo", href: "/team" },
  { icon: Info, text: "Acerca de", href: "/about" },
];

export default function Home() {
  return (
    <main className="container flex flex-col items-center px-4 mx-auto max-w-4xl">
      <WavyBackground />
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 mt-8">
        {navigationItems.map(({ icon: Icon, text, href }) => (
          <Link
            key={href}
            href={href}
            className="flex flex-col items-center justify-center w-32 h-32 bg-white rounded-lg shadow-md hover:bg-indigo-100 transition-colors duration-200"
          >
            <Icon className="w-8 h-8 text-indigo-600" />
            <span className="mt-2 text-sm font-medium text-indigo-800">
              {text}
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}
