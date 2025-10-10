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
  "JUEVES 9": [
    { time: "13:00", activity: "Inicio de acreditaciones, Apertura del Espacio TOMATULUGAR y espacio gastronómico" },
    { time: "16:00", activity: "Casa de Oración" },
    { time: "17:00", activity: "Apertura del auditorio principal" },
    { time: "18:30", activity: "Adoración" },
    {
      time: "19:30",
      activity: "Plenaria 1",
      enabled: false,
      plenaryName: "Unidos por el Corazón del Rey",
      speaker: "Marcos y Fernanda Brunet",
      downloadUrl: "https://drive.google.com/file/d/1sDGhjk-fN6e3axqLWKlqzgawMtWeuURl/view?usp=sharing",
    },
    { time: "21:30", activity: "Cierre" },
  ],
  "VIERNES 10": [
    { time: "07:00", activity: "Casa de Oración" },
    { time: "08:00", activity: "Apertura del auditorio principal" },
    { time: "09:00", activity: "Adoración" },
    {
      time: "10:00",
      activity: "Plenaria 2",
      enabled: false,
      // plenaryName: "Nombre de la plenaria",
      // speaker: "Douglas Gonçalves",
      // downloadUrl: "https://drive.google.com/file/d/13esIaCbvKm0jxi7vuKgGJ0KCozcr-ffU/view?usp=sharing",
    },
    { time: "11:15", activity: "Break" },
    {
      time: "11:30",
      activity: "Plenaria 3",
      enabled: false,
      // plenaryName: "La iglesia perseguida",
      // speaker: "VOM",
      // downloadUrl: "https://drive.google.com/file/d/1SEbgeRCvCG3wSN4aFRDmGBJ6VNP9ywwo/view?usp=drivesdk",
    },
    { time: "12:30", activity: "Anuncios" },
    { time: "13:00", activity: "Cierre bloque mañana e inicio del turno de Casa de Oración" },
    {
      time: "16:00",
      activity: "Talleres bloque 1",
      enabled: false,
      /*
      workshops: [
        {
          sector: "AH",
          title: "Nombre del taller",
          speaker: "Lucas Conslie y Rodrigo Rocha",
          colorClass: "text-orange-600 border-orange-500",
          downloadUrl: "URL_DEL_MATERIAL",
          enabled: false,
        },
        {
          sector: "GRAN COMISIÓN",
          title: "Nombre del taller",
          speaker: "Mariano Sennewald",
          colorClass: "text-cyan-600 border-cyan-500",
          downloadUrl: "URL_DEL_MATERIAL",
          enabled: false,
        },
        {
          sector: "IGLESIA GLORIOSA",
          title: "Nombre del taller",
          speaker: "Samuel Benedetto",
          colorClass: "text-emerald-600 border-emerald-500",
          downloadUrl: "URL_DEL_MATERIAL",
          enabled: false,
        },
        {
          sector: "EVANGELIO COMPLETO",
          title: "Nombre del taller",
          speaker: "Nicolas Chiari",
          colorClass: "text-blue-600 border-blue-500",
          downloadUrl: "URL_DEL_MATERIAL",
          enabled: false,
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
          sector: "AH",
          title: "Nombre del taller",
          speaker: "Gustavo Paiva",
          colorClass: "text-orange-600 border-orange-500",
          downloadUrl: "URL_DEL_MATERIAL",
          enabled: false,
        },
        {
          sector: "GRAN COMISIÓN",
          title: "Nombre del taller",
          speaker: "VOM",
          colorClass: "text-cyan-600 border-cyan-500",
          downloadUrl: "URL_DEL_MATERIAL",
          enabled: false,
        },
        {
          sector: "IGLESIA GLORIOSA",
          title: "Nombre del taller",
          speaker: "Bernardo Armiancino",
          colorClass: "text-emerald-600 border-emerald-500",
          downloadUrl: "URL_DEL_MATERIAL",
          enabled: false,
        },
        {
          sector: "EVANGELIO COMPLETO",
          title: "Nombre del taller",
          speaker: "Fabio Coelho",
          colorClass: "text-blue-600 border-blue-500",
          downloadUrl: "URL_DEL_MATERIAL",
          enabled: false,
        },
      ],
      */
    },
    { time: "18:00", activity: "Break y Casa de Oración" },
    { time: "19:00", activity: "Adoración" },
    {
      time: "20:00",
      activity: "Plenaria 4",
      enabled: false,
      // plenaryName: "Nombre de la plenaria",
      // speaker: "Gustavo Paiva",
      // downloadUrl: "URL_DEL_MATERIAL",
    },
    { time: "21:30", activity: "Cierre" },
  ],
  "SÁBADO 11": [
    { time: "07:00", activity: "Casa de Oración" },
    { time: "08:00", activity: "Apertura del auditorio principal" },
    { time: "09:00", activity: "Adoración" },
    {
      time: "10:00",
      activity: "Plenaria 5",
      enabled: false,
      // plenaryName: "Nombre de la plenaria",
      // speaker: "Itiel Arroyo",
      // downloadUrl: "https://drive.google.com/file/d/1J1JiUpr1LWvHfH7y5IzWuROLhTXeBe6b/view?usp=drive_link",
    },
    { time: "11:15", activity: "Break" },
    {
      time: "11:30",
      activity: "Plenaria 6",
      enabled: false,
      // plenaryName: "Nombre de la plenaria",
      // speaker: "Lorisa Miller",
      // downloadUrl: "URL_DEL_MATERIAL",
    },
    { time: "12:30", activity: "Anuncios" },
    { time: "13:00", activity: "Cierre bloque mañana" },
    {
      time: "16:00",
      activity: "Talleres bloque 3",
      enabled: false,
      /*
      workshops: [
        {
          sector: "AH",
          title: "Nombre del taller",
          speaker: "Fabio Coelho",
          colorClass: "text-orange-600 border-orange-500",
          downloadUrl: "URL_DEL_MATERIAL",
          enabled: false,
        },
        {
          sector: "GRAN COMISIÓN",
          title: "Nombre del taller",
          speaker: "Josías García",
          colorClass: "text-cyan-600 border-cyan-500",
          downloadUrl: "URL_DEL_MATERIAL",
          enabled: false,
        },
        {
          sector: "IGLESIA GLORIOSA",
          title: "Nombre del taller",
          speaker: "Lorisa Miller",
          colorClass: "text-emerald-600 border-emerald-500",
          downloadUrl: "URL_DEL_MATERIAL",
          enabled: false,
        },
        {
          sector: "EVANGELIO COMPLETO",
          title: "Nombre del taller",
          speaker: "Itiel Arroyo",
          colorClass: "text-blue-600 border-blue-500",
          downloadUrl: "URL_DEL_MATERIAL",
          enabled: false,
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
          sector: "AH",
          title: "Nombre del taller",
          speaker: "Alessandro Villas Boas",
          colorClass: "text-orange-600 border-orange-500",
          downloadUrl: "URL_DEL_MATERIAL",
          enabled: false,
        },
        {
          sector: "GRAN COMISIÓN",
          title: "Nombre del taller",
          speaker: "VOM Encargado",
          colorClass: "text-cyan-600 border-cyan-500",
          downloadUrl: "URL_DEL_MATERIAL",
          enabled: false,
        },
        {
          sector: "IGLESIA GLORIOSA",
          title: "Nombre del taller",
          speaker: "Douglas Gonçalves",
          colorClass: "text-emerald-600 border-emerald-500",
          downloadUrl: "URL_DEL_MATERIAL",
          enabled: false,
        },
        {
          sector: "EVANGELIO COMPLETO",
          title: "Nombre del taller",
          speaker: "Mariano Sennewald",
          colorClass: "text-blue-600 border-blue-500",
          downloadUrl: "URL_DEL_MATERIAL",
          enabled: false,
        },
      ],
      */
    },
    { time: "18:00", activity: "Break y Casa de Oración" },
    { time: "19:00", activity: "Adoración" },
    {
      time: "20:00",
      activity: "Plenaria 7",
      enabled: false,
      // plenaryName: "Nombre de la plenaria",
      // speaker: "Marcos Brunet y Ben Fitzgerald",
      // downloadUrl: "URL_DEL_MATERIAL",
    },
    { time: "21:30", activity: "Cierre" },
  ],
};

/*
INSTRUCCIONES PARA COMPLETAR EL PROGRAMA 2025:

1. Para completar las plenarias:
   - Descomentar las líneas correspondientes en cada plenaria
   - Cambiar "enabled: false" a "enabled: true"
   - Actualizar plenaryName y downloadUrl con la información real
   - Los nombres de los oradores ya están incluidos en los comentarios

2. Para completar los talleres:
   - Descomentar la sección "workshops" en cada bloque de talleres
   - Cambiar "enabled: false" a "enabled: true" en el bloque principal
   - Cambiar "enabled: false" a "enabled: true" en cada workshop individual cuando esté listo
   - Actualizar título y downloadUrl para cada taller
   - Los nombres de los oradores ya están incluidos en los comentarios
   - Colores por sector:
     * AH: naranja (text-orange-600 border-orange-500)
     * GRAN COMISIÓN: cian (text-cyan-600 border-cyan-500)
     * IGLESIA GLORIOSA: verde (text-emerald-600 border-emerald-500)
     * EVANGELIO COMPLETO: azul (text-blue-600 border-blue-500)

3. Los campos opcionales como downloadUrl se pueden omitir si no hay material disponible
*/

const ConferenceProgram: React.FC = () => {
  const [activeDay, setActiveDay] = React.useState(Object.keys(program)[0]);

  const shouldBeBold = (activity: string) => {
    const boldActivities = ["plenaria", "talleres", "casa", "adoración"];
    return boldActivities.some((boldActivity) =>
      activity.toLowerCase().includes(boldActivity)
    );
  };

  const getActivityStyle = (item: ScheduleItem, textColor?: string) => {
    if (item.activity.toLowerCase().includes("talleres") && item.enabled) {
      return "text-blue-900 text-sm font-semibold";
    }
    // Si tenemos un textColor específico, no aplicar text-slate-900
    const baseTextColor = textColor ? "" : "text-slate-900";
    return `${baseTextColor} text-base ${
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
    <div className="space-y-1 rounded-xl bg-white sm:mx-auto sm:w-full max-w-4xl">
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
            <div className="rounded-b-xl">
              <Table>
                <TableBody>
                  {schedule.map((item, index) => {
                    // Determinar el color de fondo, borde y texto basado en el tipo de actividad
                    let bgColor = "";
                    let borderColor = "";
                    let textColor = "";
                    
                    if (item.activity.toLowerCase().includes("plenaria")) {
                      bgColor = "bg-indigo-50/60"; // Fondo azul claro para plenarias
                      borderColor = "border-l-4 border-l-indigo-500 border-y border-y-indigo-900/20 z-10"; // Borde izquierdo azul
                      textColor = "text-indigo-800"; // Texto azul oscuro
                    } else if (item.activity.toLowerCase().includes("talleres")) {
                      bgColor = "bg-emerald-50/60"; // Fondo verde claro para talleres
                      borderColor = "border-l-4 border-l-emerald-500 border-y border-y-emerald-900/20 z-10"; // Borde izquierdo verde
                      textColor = "text-emerald-800"; // Texto verde oscuro
                    }
                    
                    return (
                    <TableRow key={index} className={`${bgColor} ${borderColor}`}>
                      <TableCell className="text-custom-blue opacity-60 font-medium w-24 text-base ">
                        {item.time}
                      </TableCell>
                      <TableCell className="py-4 pl-0 border-neutral-200 border-b">
                        <div className="flex flex-col">
                          <div className="flex justify-between items-center">
                            <div className={`${getActivityStyle(item, textColor)} ${textColor}`}>
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
                    );
                  })}
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
