import React from "react";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import * as Tabs from "@radix-ui/react-tabs";

interface ScheduleItem {
  time: string;
  activity: string;
  person?: string;
  downloadUrl?: string;
  enabled?: boolean;
  plenaryName?: string;
  speaker?: string;
}

const program: Record<string, ScheduleItem[]> = {
  "Jueves 3 de Octubre": [
    { time: "13:00", activity: "Apertura del predio e inscripciones" },
    { time: "16:00", activity: "Apertura del auditorio principal" },
    { time: "18:00", activity: "Adoración" },
    {
      time: "19:15",
      activity: "Plenaria 1",
      downloadUrl:
        "https://drive.google.com/file/d/13esIaCbvKm0jxi7vuKgGJ0KCozcr-ffU/view?usp=sharing",
      enabled: false,
      plenaryName: "De huérfano a Hijo",
      speaker: "Fernanda Brunet",
    },
    {
      time: "19:45",
      activity: "Plenaria 2",
      downloadUrl:
        "https://drive.google.com/file/d/1SrhScaU2q-3-JIdTAFL7Uihh_o_uysis/view?usp=sharing",
      enabled: false,
      plenaryName: "Preparen el camino",
      speaker: "Marcos Brunet",
    },
    { time: "21:30", activity: "Anuncios" },
    { time: "22:00", activity: "Cierre" },
  ],
  "Viernes 4 de Octubre": [
    { time: "08:00", activity: "Apertura del auditorio principal" },
    { time: "09:00", activity: "Adoración" },
    {
      time: "10:00",
      activity: "Plenaria 3",
      downloadUrl:
        "https://drive.google.com/file/d/1pBEEDkeCmijewbYsdaqCWrRE0pyDThBm/view?usp=sharing",
      enabled: false,
      plenaryName: "La transición de los últimos tiempos",
      speaker: "Mariano Sennewald",
    },
    { time: "11:30", activity: "Break" },
    {
      time: "11:45",
      activity: "Plenaria 4",
      downloadUrl: "/materials/plenaria4.pdf",
      enabled: false,
    },
    {
      time: "13:00",
      activity: "Almuerzo + Espacio TOMATULUGAR",
      person: "hasta 15:30",
    },
    { time: "15:00", activity: "Apertura del auditorio principal" },
    {
      time: "15:30",
      activity: "Talleres Sesión 1",
      downloadUrl: "/materials/talleres1.pdf",
      enabled: false,
    },
    {
      time: "16:15",
      activity: "Talleres Sesión 2",
      downloadUrl: "/materials/talleres2.pdf",
      enabled: false,
    },
    { time: "17:30", activity: "Receso + Espacio TOMATULUGAR" },
    { time: "18:15", activity: "Apertura del auditorio principal" },
    { time: "19:00", activity: "Adoración" },
    {
      time: "20:30",
      activity: "Plenaria 5",
      downloadUrl: "/materials/plenaria5.pdf",
      enabled: false,
    },
    { time: "21:45", activity: "Anuncios" },
    { time: "22:00", activity: "Cierre" },
  ],
  "Sábado 5 de Octubre": [
    { time: "08:00", activity: "Apertura del auditorio principal" },
    { time: "09:00", activity: "Adoración" },
    { time: "09:40", activity: "Plenaria 6", enabled: false },
    { time: "11:00", activity: "Break" },
    { time: "11:15", activity: "Plenaria 7", enabled: false },
    { time: "12:40", activity: "Almuerzo + Espacio TOMATULUGAR" },
    { time: "15:00", activity: "Apertura del auditorio principal" },
    { time: "15:30", activity: "Talleres Sesión 3", enabled: false },
    { time: "16:15", activity: "Talleres Sesión 4", enabled: false },
    {
      time: "17:30",
      activity: "Receso y Espacio TOMATULUGAR",
      person: "hasta 19:00",
    },
    { time: "18:30", activity: "Apertura del auditorio principal" },
    { time: "19:00", activity: "Adoración" },
    { time: "19:30", activity: "Plenaria 8", enabled: false },
    { time: "21:00", activity: "Cierre de la conferencia" },
  ],
};

const ConferenceProgram: React.FC = () => {
  const [activeDay, setActiveDay] = React.useState(Object.keys(program)[0]);

  return (
    <div className="space-y-1 rounded-md border bg-white sm:mx-auto sm:w-full max-w-4xl">
      <Tabs.Root defaultValue={activeDay} onValueChange={setActiveDay}>
        <Tabs.List className="flex text-center items-center justify-center bg-zinc-100 py-0.5">
          {Object.keys(program).map((day) => (
            <Tabs.Trigger
              key={day}
              value={day}
              className="px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 data-[state=active]:text-blue-500 data-[state=active]:border-blue-500"
            >
              {day}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
        {Object.entries(program).map(([day, schedule]) => (
          <Tabs.Content key={day} value={day}>
            <div className="border-y ">
              <Table>
                <TableBody>
                  {schedule.map((item, index) => (
                    <TableRow key={index} className="border-neutral-200">
                      <TableCell className="text-custom-blue font-medium w-24 text-base">
                        {item.time}
                      </TableCell>
                      <TableCell className="p-0">
                        <div className="flex flex-col justify-between pr-4">
                          <div className="flex justify-between items-center">
                            <div
                              className={`py-4 pl-4 text-zinc-900 text-base ${
                                item.activity
                                  .toLowerCase()
                                  .includes("plenaria") ||
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
                            </div>
                            {item.downloadUrl && item.enabled && (
                              <button
                                className="ml-2 px-3 py-1.5 text-sm bg-blue-500 rounded text-white font-semibold whitespace-nowrap"
                                onClick={() =>
                                  window.open(item.downloadUrl, "_blank")
                                }
                              >
                                Descargar Material
                              </button>
                            )}
                          </div>
                          {item.enabled && item.plenaryName && item.speaker && (
                            <div className="pl-4 mb-5">
                              <p className="font-semibold text-md  text-blue-600">
                                {item.plenaryName}{" "}
                              </p>
                              <p className="text-sm  text-zinc-600">
                                Orador/a: {item.speaker}
                              </p>
                            </div>
                          )}
                        </div>
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
