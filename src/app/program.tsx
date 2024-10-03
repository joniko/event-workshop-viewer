import React from "react";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

interface ScheduleItem {
  time: string;
  activity: string;
  person?: string;
}

const ConferenceProgram: React.FC = () => {
  const program: Record<string, ScheduleItem[]> = {
    jueves: [
      { time: "13:00", activity: "Apertura del predio e inscripciones" },
      { time: "16:00", activity: "Apertura del auditorio principal" },
      { time: "18:00", activity: "Adoración" },
      { time: "19:15", activity: "Plenaria 1" },
      { time: "19:45", activity: "Plenaria 2" },
      { time: "21:30", activity: "Anuncios" },
      { time: "22:00", activity: "Cierre" },
    ],
    viernes: [
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
    sabado: [
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

  return (
    <div className="space-y-1 rounded-md border bg-white border-blue-800 sm:mx-auto sm:w-full max-w-4xl">
      {Object.entries(program).map(([day, schedule]) => (
        <div key={day} className="mb-8">
          <h2 className="text-xl font-bold m-4 text-blue-500">
            {day.charAt(0).toUpperCase() + day.slice(1)}
          </h2>
          <div className="border-y border-blue-200">
            <Table>
              <TableBody>
                {schedule.map((item, index) => (
                  <TableRow key={index} className="border-neutral-200">
                    <TableCell className="text-custom-blue font-medium w-24">
                      {item.time}
                    </TableCell>
                    <TableCell
                      className={`text-zinc-900 ${
                        item.activity.toLowerCase().includes("sesión")
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
        </div>
      ))}
    </div>
  );
};

export default ConferenceProgram;
