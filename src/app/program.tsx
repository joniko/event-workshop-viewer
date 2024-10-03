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
  workshops?: Workshop[];
}

interface Workshop {
  sector: string;
  title: string;
  speaker: string;
  colorClass: string; // Clase de color de Tailwind
  downloadUrl?: string;
  enabled: boolean; // Habilitar/deshabilitar la info del orador y el botón
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
      enabled: true,
      plenaryName: "De huérfano a Hijo",
      speaker: "Fernanda Brunet",
    },
    {
      time: "19:45",
      activity: "Plenaria 2",
      downloadUrl:
        "https://drive.google.com/file/d/1SrhScaU2q-3-JIdTAFL7Uihh_o_uysis/view?usp=sharing",
      enabled: true,
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
      activity: "Talleres",
      workshops: [
        {
          sector: "SECTOR 1",
          title: "Evangelio completo 1",
          speaker: "Orador 1",
          colorClass: "text-sky-500 border-sky-500",
          downloadUrl: "/materials/taller1.pdf",
          enabled: false,
        },
        {
          sector: "SECTOR 2",
          title: "Adoración e intercesión 1",
          speaker: "Orador 2",
          colorClass: "text-zinc-500 border-zinc-500",
          downloadUrl: "/materials/taller2.pdf",
          enabled: false,
        },
        {
          sector: "SECTOR 3",
          title: "Iglesia Gloriosa 1",
          speaker: "Orador 3",
          colorClass: "text-rose-500 border-rose-500",
          downloadUrl: "/materials/taller3.pdf",
          enabled: false,
        },
      ],
    },
    {
      time: "16:15",
      activity: "Talleres",
      downloadUrl: "/materials/talleres2.pdf",
      enabled: false,
      workshops: [
        {
          sector: "SECTOR 1",
          title: "Evangelio completo 2",
          speaker: "Orador 1",
          colorClass: "text-sky-500 border-sky-500",
          downloadUrl: "/materials/taller1.pdf",
          enabled: false,
        },
        {
          sector: "SECTOR 2",
          title: "Adoración e intercesión 2",
          speaker: "Orador 2",
          colorClass: "text-zinc-500 border-zinc-500",
          downloadUrl: "/materials/taller2.pdf",
          enabled: false,
        },
        {
          sector: "SECTOR 3",
          title: "Iglesia Gloriosa 2",
          speaker: "Orador 3",
          colorClass: "text-rose-500 border-rose-500",
          downloadUrl: "/materials/taller3.pdf",
          enabled: false,
        },
      ],
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
    {
      time: "15:30",
      activity: "Talleres",
      enabled: false,
      workshops: [
        {
          sector: "SECTOR 1",
          title: "Evangelio completo 3",
          speaker: "Orador 1",
          colorClass: "text-sky-500 border-sky-500",
          downloadUrl: "/materials/taller1.pdf",
          enabled: false,
        },
        {
          sector: "SECTOR 2",
          title: "Adoración e intercesión 3",
          speaker: "Orador 2",
          colorClass: "text-zinc-500 border-zinc-500",
          downloadUrl: "/materials/taller2.pdf",
          enabled: false,
        },
        {
          sector: "SECTOR 3",
          title: "Iglesia Gloriosa 3",
          speaker: "Orador 3",
          colorClass: "text-rose-500 border-rose-500",
          downloadUrl: "/materials/taller3.pdf",
          enabled: false,
        },
      ],
    },
    {
      time: "16:15",
      activity: "Talleres",
      enabled: false,
      workshops: [
        {
          sector: "SECTOR 1",
          title: "Evangelio completo 4",
          speaker: "Orador 1",
          colorClass: "text-sky-500 border-sky-500",
          downloadUrl: "/materials/taller1.pdf",
          enabled: false,
        },
        {
          sector: "SECTOR 2",
          title: "Adoración e intercesión 4",
          speaker: "Orador 2",
          colorClass: "text-zinc-500 border-zinc-500",
          downloadUrl: "/materials/taller2.pdf",
          enabled: false,
        },
        {
          sector: "SECTOR 3",
          title: "Iglesia Gloriosa 4",
          speaker: "Orador 3",
          colorClass: "text-rose-400 border-rose-400",
          downloadUrl: "/materials/taller3.pdf",
          enabled: false,
        },
      ],
    },
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

  const renderWorkshops = (workshops: Workshop[]) => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
      {workshops.map((workshop, index) => (
        <div
          key={index}
          className={`border rounded-lg p-4 ${workshop.colorClass}`}
        >
          <div className="text-sm text-gray-500">{workshop.sector}</div>
          <div className="font-bold text-md">{workshop.title}</div>
          {workshop.enabled && (
            <>
              <div className="text-sm italic">{workshop.speaker}</div>
              {workshop.downloadUrl && (
                <button
                  className="mt-2 px-3 py-1.5 text-sm bg-blue-500 hover:bg-blue-600 rounded text-white font-semibold whitespace-nowrap transition-colors"
                  onClick={() => window.open(workshop.downloadUrl, "_blank")}
                >
                  Descargar Material
                </button>
              )}
            </>
          )}
        </div>
      ))}
    </div>
  );

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
            <div className="border-y">
              <Table>
                <TableBody>
                  {schedule.map((item, index) => (
                    <TableRow key={index} className="border-neutral-200">
                      <TableCell className="text-custom-blue font-medium w-24 text-base">
                        {item.time}
                      </TableCell>
                      <TableCell className="p-4">
                        <div className="flex flex-col">
                          <div className="flex justify-between items-center">
                            <div className="text-zinc-900 text-base font-bold">
                              {item.activity}
                            </div>
                            {item.downloadUrl && item.enabled && (
                              <button
                                className="ml-2 px-3 py-1.5 text-sm bg-blue-500 hover:bg-blue-600 rounded text-white font-semibold whitespace-nowrap transition-colors"
                                onClick={() =>
                                  window.open(item.downloadUrl, "_blank")
                                }
                              >
                                Descargar Material
                              </button>
                            )}
                          </div>
                          {item.enabled && item.plenaryName && item.speaker && (
                            <div className="mt-2 text-sm text-gray-600">
                              <p>
                                <strong>{item.plenaryName}</strong>
                              </p>
                              <p>{item.speaker}</p>
                            </div>
                          )}
                          {item.workshops && renderWorkshops(item.workshops)}
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
