"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Calendar,
  MapPin,
  Ticket,
  BookOpen,
  Users,
  Info,
  ArrowLeft,
} from "lucide-react";

const navigationItems = [
  { icon: Calendar, text: "Programa", href: "/program" },
  { icon: MapPin, text: "Ubicaciones", href: "/locations" },
  { icon: Ticket, text: "Talleres General", href: "/tickets" },
  { icon: BookOpen, text: "Talleres 3x2", href: "/workshops" },
  { icon: Users, text: "Equipo", href: "/team" },
  { icon: Info, text: "Acerca de", href: "/about" },
];

export default function Navigation() {
  const pathname = usePathname();
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <nav className="flex flex-wrap justify-center items-center space-x-2 md:space-x-4 font-bold text-md lg:text-xl px-4 md:px-1 mb-8">
      {pathname !== "/" && (
        <button
          onClick={handleBack}
          className="flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-full text-indigo-800 hover:bg-white transition-colors duration-200"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
      )}
      {navigationItems.map(({ icon: Icon, text, href }) => (
        <Link
          key={href}
          href={href}
          className={`flex flex-col items-center justify-center w-24 h-24 md:w-28 md:h-28 rounded-lg transition-colors duration-200 ${
            pathname === href
              ? "bg-white text-indigo-600"
              : "bg-indigo-100 text-indigo-800 hover:bg-white"
          }`}
        >
          <Icon className="w-6 h-6 md:w-8 md:h-8" />
          <span className="mt-1 text-xs md:text-sm font-medium text-center">
            {text}
          </span>
        </Link>
      ))}
    </nav>
  );
}
