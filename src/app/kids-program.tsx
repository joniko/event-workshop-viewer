import React, { useState } from "react";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import * as Tabs from "@radix-ui/react-tabs";

interface ScheduleItem {
  time: string;
  activity: string;
  tag?: "A" | "TJ" | "S";
}

const TagComponent: React.FC<{ tag: "A" | "TJ" | "S" }> = ({ tag }) => {
  const colors = {
    A: "bg-cyan-500",
    TJ: "bg-orange-500",
    S: "bg-blue-500",
  };

  return (
    <span
      className={`${colors[tag]} text-white text-sm font-bold mr-2 px-2.5 py-0.5 rounded inline-block w-8 text-center`}
    >
      {tag}
    </span>
  );
};

const TagLegend: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-4 mt-8 text-base p-4">
      <div className="flex items-center">
        <TagComponent tag="A" />
        <span>Auditorio General.</span>
      </div>
      <div className="flex items-center">
        <TagComponent tag="TJ" />
        <span>Todos Juntos.</span>
      </div>
      <div className="flex items-center">
        <TagComponent tag="S" />
        <span>Separados en salones, por edades.</span>
      </div>
    </div>
  );
};

const kidsSchedule: Record<string, ScheduleItem[]> = {
  "Jueves 3 de Octubre": [
    { time: "19:00", activity: "Adoración", tag: "A" },
    {
      time: "20:00",
      activity: "Apertura - Preparen el Camino Kids",
      tag: "TJ",
    },
    { time: "21:00", activity: "Snack" },
    { time: "21:30", activity: "Grupos pequeños" },
    { time: "22:00", activity: "Cierre" },
  ],
  "Viernes 4 de Octubre": [
    { time: "09:00", activity: "Adoración", tag: "A" },
    { time: "10:00", activity: "Evangelio Completo", tag: "TJ" },
    { time: "11:00", activity: "Taller 1", tag: "S" },
    { time: "11:45", activity: "Break" },
    { time: "12:00", activity: "Taller 2", tag: "S" },
    { time: "13:00", activity: "Cierre" },
    { time: "15:00", activity: "Apertura del auditorio" },
    { time: "15:30", activity: "Iglesia Gloriosa", tag: "TJ" },
    { time: "16:15", activity: "Taller 3", tag: "S" },
    { time: "16:45", activity: "Break" },
    { time: "17:00", activity: "Taller 4", tag: "S" },
    { time: "17:30", activity: "Cierre" },
    { time: "19:00", activity: "Adoración", tag: "A" },
    { time: "20:00", activity: "Recreación" },
    { time: "21:00", activity: "Snack" },
    { time: "21:30", activity: "Cierre general" },
    { time: "22:00", activity: "Retiro de los niños" },
  ],
  "Sábado 5 de Octubre": [
    { time: "09:00", activity: "Adoración", tag: "A" },
    { time: "10:00", activity: "La Gran Comisión", tag: "TJ" },
    { time: "11:00", activity: "Taller 5", tag: "S" },
    { time: "11:45", activity: "Break" },
    { time: "12:00", activity: "Taller 6", tag: "S" },
    { time: "13:00", activity: "Cierre" },
    { time: "15:00", activity: "Apertura del auditorio" },
    { time: "15:30", activity: "Adoración e Intercesión", tag: "TJ" },
    { time: "16:15", activity: "Break" },
    { time: "16:45", activity: "Taller 7", tag: "S" },
    { time: "17:30", activity: "Cierre" },
    { time: "19:00", activity: "Adoración", tag: "A" },
    { time: "19:30", activity: "Recreación", tag: "TJ" },
    { time: "20:30", activity: "Snack" },
    { time: "21:00", activity: "Cierre general" },
    { time: "22:00", activity: "Retiro de los niños" },
  ],
};

const KidsProgram: React.FC = () => {
  const [activeDay, setActiveDay] = useState(Object.keys(kidsSchedule)[0]);

  return (
    <div className="space-y-1 rounded-md border bg-white sm:mx-auto sm:w-full max-w-4xl">
      <Tabs.Root defaultValue={activeDay} onValueChange={setActiveDay}>
        <Tabs.List className="flex text-center items-center justify-center bg-zinc-100 py-0.5">
          {Object.keys(kidsSchedule).map((day) => (
            <Tabs.Trigger
              key={day}
              value={day}
              className="px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 data-[state=active]:text-blue-500 data-[state=active]:border-blue-500"
            >
              {day}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
        {Object.entries(kidsSchedule).map(([day, schedule]) => (
          <Tabs.Content key={day} value={day}>
            <div className="border-y border-zinc-200">
              <Table>
                <TableBody>
                  {schedule.map((item, index) => (
                    <TableRow key={index} className="border-neutral-200">
                      <TableCell className="text-custom-blue  text-base w-24">
                        {item.time}
                      </TableCell>
                      <TableCell className="text-zinc-900 flex items-center  text-base">
                        <div className="w-8 mr-2">
                          {item.tag && <TagComponent tag={item.tag} />}
                        </div>
                        <span
                          className={
                            item.activity.toLowerCase().includes("taller")
                              ? "font-bold"
                              : ""
                          }
                        >
                          {item.activity}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </Tabs.Content>
        ))}
      </Tabs.Root>
      <TagLegend />
    </div>
  );
};

export default KidsProgram;
