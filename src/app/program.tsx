import React, { useState } from "react";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import * as Tabs from "@radix-ui/react-tabs";

interface ScheduleItem {
  time: string;
  activity: string;
  person?: string;
}

const program: Record<string, ScheduleItem[]> = {
  "Jueves 3 de Octubre": [
    { time: "13:00", activity: "Apertura del predio e inscripciones" },
    { time: "16:00", activity: "Apertura del auditorio principal" },
    { time: "18:00", activity: "Adoración" },
    { time: "19:15", activity: "Plenaria 1" },
    { time: "19:45", activity: "Plenaria 2" },
    { time: "21:30", activity: "Anuncios" },
    { time: "22:00", activity: "Cierre" },
  ],
  "Viernes 4 de Octubre": [
    { time: "08:00", activity: "Apertura del auditorio principal" },
    { time: "09:00", activity: "Adoración" },
    { time: "10:00", activity: "Plenaria 3" },
    { time: "11:30", activity: "Break" },
    { time: "11:45", activity: "Plenaria 4" },
    {
      time: "13:00",
      activity: "Almuerzo + Espacio TOMATULUGAR",
      person: "hasta 15:30",
    },
    { time: "15:00", activity: "Apertura del auditorio principal" },
    { time: "15:30", activity: "Talleres" },
    { time: "17:30", activity: "Receso + Espacio TOMATULUGAR" },
    { time: "18:15", activity: "Apertura del auditorio principal" },
    { time: "19:00", activity: "Adoración" },
    { time: "20:30", activity: "Plenaria 5" },
    { time: "21:45", activity: "Anuncios" },
    { time: "22:00", activity: "Cierre" },
  ],
  "Sábado 5 de Octubre": [
    { time: "08:00", activity: "Apertura del auditorio principal" },
    { time: "09:00", activity: "Adoración" },
    { time: "09:40", activity: "Plenaria 6" },
    { time: "11:00", activity: "Break" },
    { time: "11:15", activity: "Plenaria 7" },
    { time: "12:40", activity: "Almuerzo + Espacio TOMATULUGAR" },
    { time: "15:00", activity: "Apertura del auditorio principal" },
    { time: "15:30", activity: "Talleres" },
    {
      time: "17:30",
      activity: "Receso y Espacio TOMATULUGAR",
      person: "hasta 19:00",
    },
    { time: "18:30", activity: "Apertura del auditorio principal" },
    { time: "19:00", activity: "Adoración" },
    { time: "19:30", activity: "Plenaria 8" },
    { time: "21:00", activity: "Cierre de la conferencia" },
  ],
};

const ConferenceProgram: React.FC = () => {
  const [activeDay, setActiveDay] = useState(Object.keys(program)[0]);

  return (
    <div className="space-y-1 rounded-md border bg-white sm:mx-auto sm:w-full max-w-4xl">
      <Tabs.Root defaultValue={activeDay} onValueChange={setActiveDay}>
        <Tabs.List className="flex border-b border-gray-200">
          {Object.keys(program).map((day) => (
            <Tabs.Trigger
              key={day}
              value={day}
              className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 data-[state=active]:text-blue-500 data-[state=active]:border-blue-500"
            >
              {day}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
        {Object.entries(program).map(([day, schedule]) => (
          <Tabs.Content key={day} value={day}>
            <div className="border-y border-zinc-200">
              <Table>
                <TableBody>
                  {schedule.map((item, index) => (
                    <TableRow key={index} className="border-neutral-200">
                      <TableCell className="text-custom-blue font-medium w-24">
                        {item.time}
                      </TableCell>
                      <TableCell
                        className={`text-zinc-900 ${
                          item.activity.toLowerCase().includes("plenaria") ||
                          item.activity.toLowerCase().includes("talleres")
                            ? "font-bold"
                            : ""
                        }`}
                      >
                        {item.activity}
                        {item.person && (
                          <span className="text-blue-400 italic ml-2">
                            ({item.person})
                          </span>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </Tabs.Content>
        ))}
      </Tabs.Root>
    </div>
  );
};

export default ConferenceProgram;
