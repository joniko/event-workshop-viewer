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
      /*
      downloadUrl: "https://drive.google.com/file/d/13esIaCbvKm0jxi7vuKgGJ0KCozcr-ffU/view?usp=sharing",
      plenaryName: "Nombre de la plenaria",
      speaker: "Nombre del orador",
      */
    },
    {
      time: "20:30",
      activity: "Plenaria 2",
      enabled: false,
      /*
      downloadUrl: "https://drive.google.com/file/d/1SrhScaU2q-3-JIdTAFL7Uihh_o_uysis/view?usp=sharing",
      plenaryName: "Nombre de la plenaria",
      speaker: "Nombre del orador",
      */
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
      /*
       downloadUrl: "https://drive.google.com/file/d/13esIaCbvKm0jxi7vuKgGJ0KCozcr-ffU/view?usp=sharing",
      enabled: true,
      plenaryName: "De huérfano a Hijo",
      speaker: "Fernanda Brunet",
      */

    },
    { time: "11:15", activity: "Break" },
    {
      time: "11:30",
      activity: "Plenaria 4",
      enabled: false,
      /*
      downloadUrl: "https://drive.google.com/file/d/1SEbgeRCvCG3wSN4aFRDmGBJ6VNP9ywwo/view?usp=drivesdk",
      plenaryName: "Nombre de la plenaria",
      speaker: "Nombre del orador",
      */
    },
    { time: "12:30", activity: "Anuncios" },
    { time: "13:00", activity: "Cierre bloque mañana" },
    { time: "13:00", activity: "Casa de Oración en Carpa", person: "hasta 14:00" },
    {
      time: "16:00",
      activity: "Talleres bloque 1",
      enabled: false,
      /*
      workshops: [
        {
          sector: "SECTOR 1",
          title: "Nombre del taller",
          speaker: "Nombre del orador",
          colorClass: "text-sky-500 border-sky-500",
          downloadUrl: "URL_DEL_MATERIAL",
          enabled: true,
        },
        {
          sector: "SECTOR 2",
          title: "Nombre del taller",
          speaker: "Nombre del orador",
          colorClass: "text-slate-500 border-slate-500",
          downloadUrl: "URL_DEL_MATERIAL",
          enabled: true,
        },
        {
          sector: "SECTOR 3",
          title: "Nombre del taller",
          speaker: "Nombre del orador",
          colorClass: "text-rose-500 border-rose-500",
          downloadUrl: "URL_DEL_MATERIAL",
          enabled: true,
        },
      ],
      */
    },
    {
      time: "17:00",
      activity: "Talleres bloque 2",
      enabled: false,
      /*
      workshops: [
        {
          sector: "SECTOR 1",
          title: "Nombre del taller",
          speaker: "Nombre del orador",
          colorClass: "text-sky-500 border-sky-500",
          downloadUrl: "URL_DEL_MATERIAL",
          enabled: true,
        },
        {
          sector: "SECTOR 2",
          title: "Nombre del taller",
          speaker: "Nombre del orador",
          colorClass: "text-slate-500 border-slate-500",
          downloadUrl: "URL_DEL_MATERIAL",
          enabled: true,
        },
        {
          sector: "SECTOR 3",
          title: "Nombre del taller",
          speaker: "Nombre del orador",
          colorClass: "text-rose-500 border-rose-500",
          downloadUrl: "URL_DEL_MATERIAL",
          enabled: true,
        },
      ],
      */
    },
    { time: "18:00", activity: "Break" },
    { time: "18:00", activity: "Casa de Oración en Carpa", person: "hasta 19:00" },
    { time: "19:00", activity: "Adoración" },
    {
      time: "20:00",
      activity: "Plenaria 5",
      enabled: false,
      /*
      downloadUrl: "URL_DEL_MATERIAL",
      plenaryName: "Nombre de la plenaria",
      speaker: "Nombre del orador",
      */
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
      /*
      downloadUrl: "https://drive.google.com/file/d/1J1JiUpr1LWvHfH7y5IzWuROLhTXeBe6b/view?usp=drive_link",
      plenaryName: "Nombre de la plenaria",
      speaker: "Nombre del orador",
      */
    },
    { time: "11:15", activity: "Break" },
    {
      time: "11:30",
      activity: "Plenaria 7",
      enabled: false,
      /*
      downloadUrl: "URL_DEL_MATERIAL",
      plenaryName: "Nombre de la plenaria",
      speaker: "Nombre del orador",
      */
    },
    { time: "12:30", activity: "Anuncios" },
    { time: "13:00", activity: "Cierre bloque mañana" },
    { time: "13:00", activity: "Casa de Oración en Carpa", person: "hasta 14:00" },
    {
      time: "16:00",
      activity: "Talleres bloque 3",
      enabled: false,
      /*
      workshops: [
        {
          sector: "SECTOR 1",
          title: "Nombre del taller",
          speaker: "Nombre del orador",
          colorClass: "text-sky-500 border-sky-500",
          downloadUrl: "URL_DEL_MATERIAL",
          enabled: true,
        },
        {
          sector: "SECTOR 2",
          title: "Nombre del taller",
          speaker: "Nombre del orador",
          colorClass: "text-slate-500 border-slate-500",
          downloadUrl: "URL_DEL_MATERIAL",
          enabled: true,
        },
        {
          sector: "SECTOR 3",
          title: "Nombre del taller",
          speaker: "Nombre del orador",
          colorClass: "text-rose-500 border-rose-500",
          downloadUrl: "URL_DEL_MATERIAL",
          enabled: true,
        },
      ],
      */
    },
    {
      time: "17:00",
      activity: "Talleres bloque 4",
      enabled: false,
      /*
      workshops: [
        {
          sector: "SECTOR 1",
          title: "Nombre del taller",
          speaker: "Nombre del orador",
          colorClass: "text-sky-500 border-sky-500",
          downloadUrl: "URL_DEL_MATERIAL",
          enabled: true,
        },
        {
          sector: "SECTOR 2",
          title: "Nombre del taller",
          speaker: "Nombre del orador",
          colorClass: "text-slate-500 border-slate-500",
          downloadUrl: "URL_DEL_MATERIAL",
          enabled: true,
        },
        {
          sector: "SECTOR 3",
          title: "Nombre del taller",
          speaker: "Nombre del orador",
          colorClass: "text-rose-500 border-rose-500",
          downloadUrl: "URL_DEL_MATERIAL",
          enabled: true,
        },
      ],
      */
    },
    { time: "18:00", activity: "Break" },
    { time: "18:00", activity: "Casa de Oración en Carpa", person: "hasta 19:00" },
    { time: "19:00", activity: "Adoración" },
    {
      time: "20:00",
      activity: "Plenaria 8",
      enabled: false,
      /*
      downloadUrl: "URL_DEL_MATERIAL",
      plenaryName: "Nombre de la plenaria",
      speaker: "Nombre del orador",
      */
    },
    { time: "21:30", activity: "Cierre" },
  ],
};

/*
INSTRUCCIONES PARA COMPLETAR EL PROGRAMA 2025:

1. Para completar las plenarias:
   - Descomentar las líneas correspondientes en cada plenaria
   - Cambiar "enabled: false" a "enabled: true"
   - Actualizar plenaryName, speaker y downloadUrl con la información real

2. Para completar los talleres:
   - Descomentar la sección "workshops" en cada bloque de talleres
   - Cambiar "enabled: false" a "enabled: true"
   - Actualizar título, speaker y downloadUrl para cada sector
   - Colores por sector: SECTOR 1 (azul), SECTOR 2 (gris), SECTOR 3 (rosa)

3. Los campos opcionales como downloadUrl se pueden omitir si no hay material disponible
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
    return `text-slate-900 text-base ${
      shouldBeBold(item.activity) ? "font-bold" : ""
    }`;
  };

  const renderWorkshops = (workshops: Workshop[]) => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
      {workshops.map((workshop, index) => (
        <div
          key={index}
          className={`border rounded-xl bg-white p-4 ${workshop.colorClass}`}
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
        <Tabs.List className="flex text-center items-center justify-center bg-slate-100 py-0.5">
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
