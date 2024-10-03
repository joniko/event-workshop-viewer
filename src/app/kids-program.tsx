import React from "react";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

interface ScheduleItem {
  time: string;
  activity: string;
  tag?: "A" | "TJ" | "S";
}

interface DaySchedule {
  day: string;
  schedule: ScheduleItem[];
}

const TagComponent: React.FC<{ tag: "A" | "TJ" | "S" }> = ({ tag }) => {
  const colors = {
    A: "bg-cyan-500",
    TJ: "bg-orange-500",
    S: "bg-blue-500",
  };

  return (
    <span
      className={`${colors[tag]} text-white text-xs font-bold mr-2 px-2.5 py-0.5 rounded inline-block w-8 text-center`}
    >
      {tag}
    </span>
  );
};

const TagLegend: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-4 mt-8 text-sm p-4">
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

const KidsProgram: React.FC = () => {
  const kidsSchedule: DaySchedule[] = [
    {
      day: "Jueves 3 de Octubre",
      schedule: [
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
    },
    {
      day: "Viernes 4 de octubre",
      schedule: [
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
    },
    {
      day: "Sábado 5 de octubre (Segunda parte)",
      schedule: [
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
    },
  ];

  return (
    <div className="space-y-1 rounded-md border bg-white sm:mx-auto sm:w-full max-w-4xl">
      {kidsSchedule.map((day, dayIndex) => (
        <div key={dayIndex} className="mb-8">
          <h2 className="text-xl font-bold m-4 text-blue-500">{day.day}</h2>
          <div className="border-y border-zinc-200">
            <Table>
              <TableBody>
                {day.schedule.map((item, itemIndex) => (
                  <TableRow key={itemIndex} className="border-neutral-200">
                    <TableCell className="text-custom-blue font-medium w-24">
                      {item.time}
                    </TableCell>
                    <TableCell className="text-zinc-900 flex items-center">
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
        </div>
      ))}
      <TagLegend />
    </div>
  );
};

export default KidsProgram;
