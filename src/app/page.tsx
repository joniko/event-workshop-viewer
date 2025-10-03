"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useRouter } from "next/navigation";
import WavyBackground from "@/components/WavyBackground";
import Program from "./program";
import KidsProgram from "./kids-program";
import MapComponent from "./map";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";
import {
  Calendar,
  Map,
  PartyPopper,
} from "lucide-react";
import { useSearchParams } from "next/navigation";

const tabs = [
  {
    value: "program",
    label: "Cronograma",
    icon: <Calendar className="w-4 h-4 mr-2" />,
  },
  {
    value: "map",
    label: "Mapa",
    icon: <Map className="w-4 h-4 mr-2" />,
  },
] as const;

type TabValue = (typeof tabs)[number]["value"];

import { Youtube } from "lucide-react";

function HomeContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<TabValue>(() => {
    const tab = searchParams.get("tab");
    return tab === "program" || tab === "map" ? tab : "program";
  });
  const [activeSubTab, setActiveSubTab] = useState<string>(() => {
    const subTab = searchParams.get("subTab");
    if (subTab) return subTab;

    // Definir los sub-tabs por defecto para cada tab principal
    switch (activeTab) {
      case "program":
        return "general";
      case "map":
        return "venue";
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
    if (value === "program" || value === "map") {
      setActiveTab(value);
      // Establecer el sub-tab por defecto al cambiar de tab principal
      switch (value) {
        case "program":
          setActiveSubTab("general");
          break;
        case "map":
          setActiveSubTab("venue");
          break;
      }
    }
  };

  const renderContent = () => {
    if (activeTab === "program") {
      return (
        <Tabs value={activeSubTab} onValueChange={setActiveSubTab}>
          <TabsList className="flex w-full rounded-t-lg">
            <TabsTrigger
              value="general"
              className="flex-1 font-semibold hover:bg-zinc-200/50 transition-colors data-[state=active]:bg-zinc-200/50 data-[state=active]:text-blue-500 px-3 py-2 flex items-center justify-center"
            >
              <Calendar className="w-4 h-4 mr-2" />
              General
            </TabsTrigger>
            <TabsTrigger
              value="kids"
              className="flex-1 font-semibold hover:bg-zinc-200/50 transition-colors data-[state=active]:bg-zinc-200/50 data-[state=active]:text-blue-500 px-3 py-2 flex items-center justify-center"
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
    } else if (activeTab === "map") {
      return <MapComponent />;
    }
  };

  return (
    <main className="container flex flex-col px-0 sm:mx-auto sm:w-full max-w-3xl">
      <WavyBackground />

      {/* Nuevo botón para la transmisión en vivo */}
      <a
        href="https://www.youtube.com/@TOMATULUGAR/streams" // Reemplaza con el enlace correcto de YouTube
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center bg-red-500 text-white font-bold py-2 px-4 rounded-lg mb-1 md:mb-2 mx-2 md:mx-0 hover:bg-red-600 transition-colors"
      >
        <Youtube className="w-6 h-6 mr-2" />
        Mira la Conferencia EN VIVO
      </a>

      <div className="rounded-lg my-2 p-2 bg-zinc-500 space-x-2">
        <Tabs value={activeTab} onValueChange={handleTabChange}>
          <TabsList className="flex w-full space-x-1">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="flex-1 px-3 py-2 rounded-md text-white font-bold hover:bg-zinc-600/50 transition-colors data-[state=active]:bg-zinc-600/50 data-[state=active]:text-white flex items-center justify-center"
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
