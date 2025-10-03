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
  "Jueves": [
    { time: "13:00", activity: "Inicio de acreditaciones" },
    { time: "13:00", activity: "Apertura de Espacio TTL y espacio gastronómico" },
    { time: "16:00", activity: "Casa de Oración en Carpa", person: "hasta 18:00" },
    { time: "17:00", activity: "Apertura de puertas" },
    { time: "18:30", activity: "Adoración" },
    {
      time: "19:30",
      activity: "Plenaria 1",
      enabled: false,
    },
    {
      time: "20:30",
      activity: "Plenaria 2",
      enabled: false,
    },
    { time: "21:30", activity: "Cierre" },
  ],
  "Viernes": [
    { time: "07:00", activity: "Casa de Oración en Carpa", person: "hasta 09:00" },
    { time: "08:00", activity: "Apertura de puertas" },
    { time: "09:00", activity: "Adoración" },
    {
      time: "10:00",
      activity: "Plenaria 3",
      enabled: false,
    },
    { time: "11:15", activity: "Break" },
    {
      time: "11:30",
      activity: "Plenaria 4",
      enabled: false,
    },
    { time: "12:30", activity: "Anuncios" },
    { time: "13:00", activity: "Cierre bloque mañana" },
    { time: "13:00", activity: "Casa de Oración en Carpa", person: "hasta 14:00" },
    {
      time: "16:00",
      activity: "Talleres bloque 1",
      enabled: false,
    },
    {
      time: "17:00",
      activity: "Talleres bloque 2",
      enabled: false,
    },
    { time: "18:00", activity: "Break" },
    { time: "18:00", activity: "Casa de Oración en Carpa", person: "hasta 19:00" },
    { time: "19:00", activity: "Adoración" },
    {
      time: "20:00",
      activity: "Plenaria 5",
      enabled: false,
    },
    { time: "21:30", activity: "Cierre" },
  ],
  "Sábado": [
    { time: "07:00", activity: "Casa de Oración en Carpa", person: "hasta 09:00" },
    { time: "08:00", activity: "Apertura de puertas" },
    { time: "09:00", activity: "Adoración" },
    {
      time: "10:00",
      activity: "Plenaria 6",
      enabled: false,
    },
    { time: "11:15", activity: "Break" },
    {
      time: "11:30",
      activity: "Plenaria 7",
      enabled: false,
    },
    { time: "12:30", activity: "Anuncios" },
    { time: "13:00", activity: "Cierre bloque mañana" },
    { time: "13:00", activity: "Casa de Oración en Carpa", person: "hasta 14:00" },
    {
      time: "16:00",
      activity: "Talleres bloque 3",
      enabled: false,
    },
    {
      time: "17:00",
      activity: "Talleres bloque 4",
      enabled: false,
    },
    { time: "18:00", activity: "Break" },
    { time: "18:00", activity: "Casa de Oración en Carpa", person: "hasta 19:00" },
    { time: "19:00", activity: "Adoración" },
    {
      time: "20:00",
      activity: "Plenaria 8",
      enabled: false,
    },
    { time: "21:30", activity: "Cierre" },
  ],
};

/* 
REFERENCIA DEL PROGRAMA 2024 - Para usar como guía cuando se agregue información faltante:

const program2024Example: Record<string, ScheduleItem[]> = {
  "Jueves 3 de Octubre": [
    { time: "13:00", activity: "Apertura del predio e inscripciones" },
    { time: "16:00", activity: "Apertura del auditorio principal" },
    { time: "18:00", activity: "Adoración" },
    {
      time: "19:15",
      activity: "Plenaria 1",
      downloadUrl: "https://drive.google.com/file/d/13esIaCbvKm0jxi7vuKgGJ0KCozcr-ffU/view?usp=sharing",
      enabled: true,
      plenaryName: "De huérfano a Hijo",
      speaker: "Fernanda Brunet",
    },
    {
      time: "19:45",
      activity: "Plenaria 2",
      downloadUrl: "https://drive.google.com/file/d/1SrhScaU2q-3-JIdTAFL7Uihh_o_uysis/view?usp=sharing",
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
      downloadUrl: "https://drive.google.com/file/d/1pBEEDkeCmijewbYsdaqCWrRE0pyDThBm/view?usp=sharing",
      enabled: true,
      plenaryName: "La transición de los últimos tiempos",
      speaker: "Mariano Sennewald",
    },
    { time: "11:30", activity: "Break" },
    {
      time: "11:45",
      activity: "Plenaria 4",
      downloadUrl: "https://drive.google.com/file/d/1SEbgeRCvCG3wSN4aFRDmGBJ6VNP9ywwo/view?usp=drivesdk",
      enabled: true,
      plenaryName: "Madurez de la iglesia",
      speaker: "Douglas Gonçalves",
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
          speaker: "Mariano Sennewald",
          colorClass: "text-sky-500 border-sky-500",
          downloadUrl: "https://drive.google.com/file/d/1o87QEujH7HugjRw5Ov_nUq5NZhSXp0Dr/view?usp=drive_link",
          enabled: true,
        },
        {
          sector: "SECTOR 2",
          title: "Adoración e intercesión 1",
          speaker: "Lucas Conslie",
          colorClass: "text-zinc-500 border-zinc-500",
          downloadUrl: "https://drive.google.com/file/d/1ePb3kolIUVmVnjFo9zMZ22mSZfzBL4k4/view?usp=drive_open",
          enabled: true,
        },
        {
          sector: "SECTOR 3",
          title: "Iglesia Gloriosa 1",
          speaker: "Estela Ortiz",
          colorClass: "text-rose-500 border-rose-500",
          downloadUrl: "https://drive.google.com/file/d/1WDGOx6Go5-Epi1bRNudD_PsDHrmc_I45/view?usp=drive_link",
          enabled: true,
        },
      ],
    },
    {
      time: "16:15",
      activity: "Talleres",
      downloadUrl: "",
      enabled: false,
      workshops: [
        {
          sector: "SECTOR 1",
          title: "Evangelio completo 2",
          speaker: "Nicolas Paretti",
          colorClass: "text-sky-500 border-sky-500",
          downloadUrl: "https://drive.google.com/file/d/16uMY4J6ESf9H3Zqc4yelU-ocKBD6428Z/view?usp=drive_open",
          enabled: true,
        },
        {
          sector: "SECTOR 2",
          title: "Adoración e intercesión 2",
          speaker: "Lucas Conslie",
          colorClass: "text-zinc-500 border-zinc-500",
          downloadUrl: "",
          enabled: true,
        },
        {
          sector: "SECTOR 3",
          title: "Iglesia Gloriosa 2",
          speaker: "Douglas Gonçalves",
          colorClass: "text-rose-500 border-rose-500",
          downloadUrl: "",
          enabled: true,
        },
      ],
    },
    { time: "17:30", activity: "Receso + Espacio TOMATULUGAR" },
    { time: "18:15", activity: "Apertura del auditorio principal" },
    { time: "19:00", activity: "Adoración" },
    {
      time: "20:30",
      activity: "Plenaria 5",
      downloadUrl: "",
      plenaryName: "Restaurando el tabernáculo de David",
      speaker: "Michael Miller",
      enabled: true,
    },
    { time: "21:45", activity: "Anuncios" },
    { time: "22:00", activity: "Cierre" },
  ],
  "Sábado 5 de Octubre": [
    { time: "08:00", activity: "Apertura del auditorio principal" },
    { time: "09:00", activity: "Adoración" },
    {
      time: "09:40",
      activity: "Plenaria 6",
      downloadUrl: "https://drive.google.com/file/d/1J1JiUpr1LWvHfH7y5IzWuROLhTXeBe6b/view?usp=drive_link",
      plenaryName: "Las tres doctrinas",
      speaker: "Fernanda Brunet",
      enabled: true,
    },
    { time: "11:00", activity: "Break" },
    { time: "11:15", activity: "Plenaria 7", enabled: false },
    { time: "12:40", activity: "Cierre" },
    { time: "13:00", activity: "Almuerzo + Espacio TOMATULUGAR" },
    { time: "15:00", activity: "Apertura del auditorio principal" },
    {
      time: "15:30",
      activity: "Talleres",
      enabled: false,
      workshops: [
        {
          sector: "SECTOR 1",
          title: "Evangelio completo 3",
          speaker: "Josías Garcia",
          colorClass: "text-sky-500 border-sky-500",
          downloadUrl: "",
          enabled: true,
        },
        {
          sector: "SECTOR 2",
          title: "Gran comisión 1",
          speaker: "Bernardo Affranchino",
          colorClass: "text-zinc-500 border-zinc-500",
          downloadUrl: "",
          enabled: true,
        },
        {
          sector: "SECTOR 3",
          title: "Iglesia Gloriosa 3",
          speaker: "Samuel Benedetto",
          colorClass: "text-rose-500 border-rose-500",
          downloadUrl: "https://drive.google.com/file/d/17iAFEaYo9YjyK9yrow1Suiv0ODqn8XZf/view?usp=drive_link",
          enabled: true,
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
          speaker: "Fabio Coelho",
          colorClass: "text-sky-500 border-sky-500",
          downloadUrl: "",
          enabled: true,
        },
        {
          sector: "SECTOR 2",
          title: "Gran comisión 1",
          speaker: "Samuel Nielsen",
          colorClass: "text-zinc-500 border-zinc-500",
          downloadUrl: "",
          enabled: true,
        },
        {
          sector: "SECTOR 3",
          title: "Iglesia Gloriosa 4",
          speaker: "Lucas Conslie",
          colorClass: "text-rose-400 border-rose-400",
          downloadUrl: "",
          enabled: true,
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

INSTRUCCIONES PARA COMPLETAR EL PROGRAMA 2025:
1. Para agregar información de plenarias, usar el formato:
   {
     time: "19:30",
     activity: "Plenaria 1",
     downloadUrl: "URL_DEL_MATERIAL", // opcional
     enabled: true,
     plenaryName: "Nombre de la plenaria",
     speaker: "Nombre del orador",
   }

2. Para agregar talleres, usar el formato:
   {
     time: "16:00",
     activity: "Talleres bloque 1",
     enabled: true, // cambiar a true cuando esté lista la info
     workshops: [
       {
         sector: "SECTOR 1",
         title: "Nombre del taller",
         speaker: "Nombre del orador",
         colorClass: "text-sky-500 border-sky-500", // colores: sky, zinc, rose
         downloadUrl: "URL_DEL_MATERIAL", // opcional
         enabled: true,
       },
       // agregar más talleres según sectores
     ],
   }

3. Los colores disponibles para talleres:
   - SECTOR 1: "text-sky-500 border-sky-500" (azul)
   - SECTOR 2: "text-zinc-500 border-zinc-500" (gris)
   - SECTOR 3: "text-rose-500 border-rose-500" (rosa)

4. Para habilitar elementos, cambiar enabled: false a enabled: true
*/

const ConferenceProgram: React.FC = () => {
  const [activeDay, setActiveDay] = React.useState(Object.keys(program)[0]);

  const shouldBeBold = (activity: string) => {
    const boldActivities = ["plenaria", "adoración"];
    return boldActivities.some((boldActivity) =>
      activity.toLowerCase().includes(boldActivity)
    );
  };

  const getActivityStyle = (item: ScheduleItem) => {
    if (item.activity.toLowerCase().includes("talleres") && item.enabled) {
      return "text-blue-900 text-sm font-semibold";
    }
    return `text-zinc-900 text-base ${
      shouldBeBold(item.activity) ? "font-bold" : ""
    }`;
  };

  const renderWorkshops = (workshops: Workshop[]) => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
      {workshops.map((workshop, index) => (
        <div
          key={index}
          className={`border rounded-lg p-4 ${workshop.colorClass}`}
        >
          <div className="text-sm text-gray-500">{workshop.sector}</div>
          <div className="font-bold">{workshop.title}</div>
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
                            <div className={getActivityStyle(item)}>
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
                            <div className="mt-2 text-gray-600">
                              <p className="text-blue-600 font-bold text-base">
                                {item.plenaryName}
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
