"use client";

import React, { useState } from "react";
import WavyBackground from "@/components/WavyBackground";
import Program from "./program";
import KidsProgram from "./kids-program";
import Locations from "./locations";
import Workshops from "./workshops";

export default function Home() {
  const [activeTab, setActiveTab] = useState<
    "program" | "kids-program" | "locations" | "workshops"
  >("program");

  const tabComponents = {
    program: <Program />,
    "kids-program": <KidsProgram />,
    locations: <Locations />,
    workshops: <Workshops />,
  };

  return (
    <main className="container flex flex-col px-0 sm:mx-auto sm:w-full max-w-4xl">
      <WavyBackground />
      <div className="rounded-lg my-2 pb-1 px-1 bg-zinc-600">
        <div className="flex space-x-2 md:space-x-4 font-bold text-sm lg:text-lg px-2 md:px-1 justify-center">
          {Object.keys(tabComponents).map((tab) => (
            <button
              key={tab}
              className={`px-2 py-4 rounded-lg ${
                activeTab === tab ? "text-white" : "text-blue-200"
              }`}
              onClick={() => setActiveTab(tab as keyof typeof tabComponents)}
            >
              {tab === "kids-program"
                ? "Programa KIDS"
                : tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {tabComponents[activeTab]}
      </div>
    </main>
  );
}
