import React from "react";
import WavyBackground from "@/components/WavyBackground";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const ConferenceProgram: React.FC = () => {
  const program: Record<string, { time: string; activity: string }[]> = {
    viernes: [
      { time: "17:00", activity: "Acreditación" },
      { time: "19:00", activity: "Apertura de puertas" },
      { time: "19:35", activity: "Alabanza y adoración" },
      { time: "20:35", activity: "Sesión 1" },
      { time: "21:30", activity: "Fin" },
    ],
    sabado: [
      { time: "8:30", activity: "Acreditación" },
      { time: "8:45", activity: "Apertura de puertas" },
      { time: "9:20", activity: "Alabanza y adoración" },
      { time: "9:55", activity: "Charla TED 1" },
      { time: "10:15", activity: "Sesión 2" },
      { time: "11:15", activity: "Sesión 3" },
      { time: "12:20", activity: "Recital" },
      { time: "12:40", activity: "Charla TED 2" },
      { time: "13:07", activity: "Sesión 4" },
      { time: "14:00", activity: "Break Almuerzo" },
      { time: "16:30", activity: "Talleres" },
      { time: "19:05", activity: "Alabanza adoración" },
      { time: "20:35", activity: "Sesión 5" },
      { time: "21:25", activity: "Fin día 2" },
    ],
    domingo: [
      { time: "9:00", activity: "Apertura de puertas" },
      { time: "9:30", activity: "Alabanza y adoración" },
      { time: "10:00", activity: "Charla TED 3" },
      { time: "10:15", activity: "Sesión 6" },
      { time: "11:30", activity: "Sesión 7 / Entrevista" },
      { time: "12:30", activity: "Almuerzo" },
      { time: "14:00", activity: "Talleres" },
      { time: "15:45", activity: "Alabanza" },
      { time: "16:00", activity: "Sesión 8" },
      { time: "16:50", activity: "Break" },
      { time: "17:05", activity: "Clausura" },
      { time: "18:00", activity: "Sesión 9" },
      { time: "19:00", activity: "Fin" },
    ],
  };

  return (
    <div className="space-y-1 rounded-md border bg-white border-indigo-800 sm:mx-auto sm:w-full max-w-4xl">
      {Object.entries(program).map(([day, schedule]) => (
        <div key={day} className="mb-8">
          <h2 className="text-xl font-bold m-4 text-cumbre-purple">
            {day.charAt(0).toUpperCase() + day.slice(1)}
          </h2>
          <div className="border-y border-indigo-200">
            <Table>
              <TableBody>
                {schedule.map((item, index) => (
                  <TableRow key={index} className="border-neutral-200">
                    <TableCell className="text-custom-purple font-medium">
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

export default function ProgramPage() {
  return (
    <main className="container flex flex-col px-0 sm:mx-auto sm:w-full max-w-4xl">
      <WavyBackground />
      <h1 className="text-2xl font-bold text-indigo-800 mt-8 mb-4">Programa</h1>
      <ConferenceProgram />
    </main>
  );
}
