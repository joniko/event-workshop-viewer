"use client";

import React, { useState } from "react";
import WavyBackground from "@/components/WavyBackground";
import Program from "./program";
import KidsProgram from "./kids-program";
import Locations from "./locations";
import Workshops from "./workshops";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";

const tabs = [
  {
    value: "program",
    label: "Programa General",
  },
  {
    value: "kids",
    label: "Programa KIDS",
  },
  {
    value: "locations",
    label: "Ubicaciones",
  },
  {
    value: "workshops",
    label: "Talleres",
  },
] as const;

type TabValue = (typeof tabs)[number]["value"];

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabValue>("program");

  const tabComponents: Record<TabValue, React.ReactNode> = {
    program: <Program />,
    kids: <KidsProgram />,
    locations: <Locations />,
    workshops: <Workshops />,
  };

  return (
    <main className="container flex flex-col px-0 sm:mx-auto sm:w-full max-w-4xl">
      <WavyBackground />
      <div className="rounded-lg my-2 p-2 bg-zinc-400">
        <Tabs
          defaultValue="program"
          onValueChange={(value: string) => setActiveTab(value as TabValue)}
        >
          <TabsList className="flex space-x-2 md:space-x-4 font-bold text-sm lg:text-lg justify-center">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="px-3 py-2 rounded-md text-white hover:bg-zinc-500/50 transition-colors data-[state=active]:bg-zinc-500/50"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {tabs.map((tab) => (
            <TabsContent
              key={tab.value}
              value={tab.value}
              className="mt-2 bg-white rounded-md"
            >
              {tabComponents[tab.value]}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </main>
  );
}
