"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useRouter } from "next/navigation";
import WavyBackground from "@/components/WavyBackground";
import Program from "./program";
import KidsProgram from "./kids-program";
import Locations from "./locations";
import Workshops from "./workshops";
import Buffet from "./buffet";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";
import {
  Calendar,
  Users,
  MapPin,
  Flag,
  Utensils,
  PartyPopper, // Nuevo icono para Kids
  Sun, // Nuevo icono para Argentinos
  Coffee,
  Store,
  Umbrella,
} from "lucide-react";
// Importar los iconos de react-icons/fa
import { useSearchParams } from "next/navigation";

const tabs = [
  {
    value: "program",
    label: "Cronograma",
    icon: <Calendar className="w-4 h-4 mr-2" />,
  },
  {
    value: "workshops",
    label: "Talleres",
    icon: <Users className="w-4 h-4 mr-2" />,
  },
  {
    value: "buffet",
    label: "Buffet",
    icon: <Utensils className="w-4 h-4 mr-2" />,
  },
] as const;

type TabValue = (typeof tabs)[number]["value"];

function HomeContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<TabValue>(() => {
    const tab = searchParams.get("tab");
    return tab === "program" || tab === "workshops" || tab === "buffet"
      ? tab
      : "program";
  });
  const [activeSubTab, setActiveSubTab] = useState<string>(() => {
    const subTab = searchParams.get("subTab");
    if (subTab) return subTab;

    // Definir los sub-tabs por defecto para cada tab principal
    switch (activeTab) {
      case "program":
        return "general";
      case "workshops":
        return "locations";
      case "buffet":
        return "cafeteria";
      default:
        return "general";
    }
  });

  useEffect(() => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("tab", activeTab);
    newSearchParams.set("subTab", activeSubTab);
    router.push(`?${newSearchParams.toString()}`, { scroll: false });
  }, [activeTab, activeSubTab, router, searchParams]);

  const handleTabChange = (value: string) => {
    if (value === "program" || value === "workshops" || value === "buffet") {
      setActiveTab(value);
      // Establecer el sub-tab por defecto al cambiar de tab principal
      switch (value) {
        case "program":
          setActiveSubTab("general");
          break;
        case "workshops":
          setActiveSubTab("locations");
          break;
        case "buffet":
          setActiveSubTab("cafeteria");
          break;
      }
    }
  };

  const renderContent = () => {
    if (activeTab === "program") {
      return (
        <Tabs value={activeSubTab} onValueChange={setActiveSubTab}>
          <TabsList className="flex w-full border-b">
            <TabsTrigger
              value="general"
              className="flex-1 hover:bg-zinc-200/50 transition-colors data-[state=active]:bg-zinc-200/50 data-[state=active]:text-blue-500 px-3 py-2 flex items-center justify-center"
            >
              <Calendar className="w-4 h-4 mr-2" />
              General
            </TabsTrigger>
            <TabsTrigger
              value="kids"
              className="flex-1 hover:bg-zinc-200/50 transition-colors data-[state=active]:bg-zinc-200/50 data-[state=active]:text-blue-500 px-3 py-2 flex items-center justify-center"
            >
              <PartyPopper className="w-4 h-4 mr-2" />
              Kids
            </TabsTrigger>
          </TabsList>
          <TabsContent value="general">
            <Program />
          </TabsContent>
          <TabsContent value="kids">
            <KidsProgram />
          </TabsContent>
        </Tabs>
      );
    } else if (activeTab === "workshops") {
      return (
        <Tabs value={activeSubTab} onValueChange={setActiveSubTab}>
          <TabsList className="flex w-full bg-zinc-100">
            <TabsTrigger
              value="locations"
              className="flex-1 hover:bg-zinc-200/50 transition-colors data-[state=active]:bg-zinc-200/50 data-[state=active]:text-blue-500 px-3 py-2 flex items-center justify-center"
            >
              <MapPin className="w-4 h-4 mr-2" />
              Ubicaciones
            </TabsTrigger>
            <TabsTrigger
              value="argentinos"
              className="flex-1 hover:bg-zinc-200/50 transition-colors data-[state=active]:bg-zinc-200/50 data-[state=active]:text-blue-500 px-3 py-2 flex items-center justify-center"
            >
              <Sun className="w-4 h-4 mr-2" />
              Argentinos
            </TabsTrigger>
            <TabsTrigger
              value="extranjeros"
              className="flex-1 hover:bg-zinc-200/50 transition-colors data-[state=active]:bg-zinc-200/50 data-[state=active]:text-blue-500 px-3 py-2 flex items-center justify-center"
            >
              <Flag className="w-4 h-4 mr-2" />
              Extranjeros
            </TabsTrigger>
          </TabsList>
          <TabsContent value="locations">
            <Locations />
          </TabsContent>
          <TabsContent value="argentinos">
            <Workshops type="argentinos" />
          </TabsContent>
          <TabsContent value="extranjeros">
            <Workshops type="extranjeros" />
          </TabsContent>
        </Tabs>
      );
    } else if (activeTab === "buffet") {
      return (
        <Tabs value={activeSubTab} onValueChange={setActiveSubTab}>
          <TabsList className="flex w-full border-b">
            <TabsTrigger
              value="cafeteria"
              className="flex-1 hover:bg-zinc-200/50 transition-colors data-[state=active]:bg-zinc-200/50 data-[state=active]:text-blue-500 px-3 py-2 flex items-center justify-center"
            >
              <Coffee className="w-4 h-4 mr-2" />
              Cafetería
            </TabsTrigger>
            <TabsTrigger
              value="quiosco"
              className="flex-1 hover:bg-zinc-200/50 transition-colors data-[state=active]:bg-zinc-200/50 data-[state=active]:text-blue-500 px-3 py-2 flex items-center justify-center"
            >
              <Store className="w-4 h-4 mr-2" />
              Quiosco
            </TabsTrigger>
            <TabsTrigger
              value="carpa"
              className="flex-1 hover:bg-zinc-200/50 transition-colors data-[state=active]:bg-zinc-200/50 data-[state=active]:text-blue-500 px-3 py-2 flex items-center justify-center"
            >
              <Umbrella className="w-4 h-4 mr-2" />
              Carpa
            </TabsTrigger>
          </TabsList>
          <TabsContent value="cafeteria">
            <Buffet type="cafeteria" />
          </TabsContent>
          <TabsContent value="quiosco">
            <Buffet type="quiosco" />
          </TabsContent>
          <TabsContent value="carpa">
            <Buffet type="carpa" />
          </TabsContent>
        </Tabs>
      );
    }
  };

  return (
    <main className="container flex flex-col px-0 sm:mx-auto sm:w-full max-w-4xl">
      <WavyBackground />
      <div className="rounded-lg my-2 p-2 bg-zinc-400 space-x-2">
        <Tabs value={activeTab} onValueChange={handleTabChange}>
          <TabsList className="flex w-full space-x-1">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="flex-1 px-3 py-2 rounded-md text-white font-bold hover:bg-zinc-500/50 transition-colors data-[state=active]:bg-zinc-500/50 data-[state=active]:text-white flex items-center justify-center"
              >
                {tab.icon}
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          <TabsContent value={activeTab} className="mt-2 bg-white rounded-md">
            {renderContent()}
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomeContent />
    </Suspense>
  );
}
