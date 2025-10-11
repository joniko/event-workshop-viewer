"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useRouter } from "next/navigation";
import WavyBackground from "@/components/WavyBackground";
import Program from "./program";
import KidsProgram from "./kids-program";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";
import {
  Calendar,
  PartyPopper,
  Youtube,
} from "lucide-react";
import { useSearchParams } from "next/navigation";

function HomeContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [activeSubTab, setActiveSubTab] = useState<string>(() => {
    const subTab = searchParams.get("subTab");
    if (subTab) return subTab;
    return "general";
  });

  useEffect(() => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("subTab", activeSubTab);
    router.push(`?${newSearchParams.toString()}`, { scroll: false });
  }, [activeSubTab, router]);

  const renderContent = () => {
    return (
      <Tabs value={activeSubTab} onValueChange={setActiveSubTab}>
        <TabsList className="flex w-full rounded-t-xl bg-white">
          <TabsTrigger
            value="general"
            className="flex-1 font-semibold hover:bg-slate-200/50 transition-colors data-[state=active]:bg-slate-200/50 data-[state=active]:text-blue-500 px-3 py-2 flex items-center justify-center rounded-t-xl"
          >
            <Calendar className="w-4 h-4 mr-2" />
            Programa
          </TabsTrigger>
          {/* <TabsTrigger
            value="kids"
            className="flex-1 font-semibold hover:bg-slate-200/50 transition-colors data-[state=active]:bg-slate-200/50 data-[state=active]:text-blue-500 px-3 py-2 flex items-center justify-center rounded-t-xl"
          >
            <PartyPopper className="w-4 h-4 mr-2" />
            Kids
          </TabsTrigger> */}
        </TabsList>
        <TabsContent value="general">
          <Program />
        </TabsContent>
        {/* <TabsContent value="kids">
          <KidsProgram />
        </TabsContent> */}
      </Tabs>
    );
  };

  return (
    <main className="flex flex-col sm:mx-auto sm:w-full max-w-3xl">
      <WavyBackground />

      {/* Nuevo botón para la transmisión en vivo */}
      <a
        href="https://www.youtube.com/@TOMATULUGAR/streams" // Reemplaza con el enlace correcto de YouTube
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center px-2 md:px-0 justify-center bg-[#FF0033] text-white font-bold py-2 px-4 rounded-full mb-1 md:mb-2 hover:bg-red-600 transition-colors"
      >
        <Youtube className="w-6 h-6 mr-2" />
        Mira la Conferencia EN VIVO
      </a>

      <div className="my-2 bg-white rounded-xl">
        {renderContent()}
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
