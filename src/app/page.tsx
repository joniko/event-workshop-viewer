"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { EventTable } from "@/components/event-table";
import { Ticket } from "@/types";
import eventImage from "@/images/cumbre-generaciones-2024.jpg";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const PREDEFINED_EVENT_IDS = ["26"];

interface ScheduleItem {
  time: string;
  activity: string;
  person?: string;
}

interface DayScheduleProps {
  day: string;
  schedule: ScheduleItem[];
}

const DaySchedule: React.FC<DayScheduleProps> = ({ day, schedule }) => (
  <div className="mb-8">
    <h2 className="text-xl font-bold mb-4 text-indigo-600">{day}</h2>
    <div className="space-y-2">
      {schedule.map((item, index) => (
        <div key={index} className="flex text-zinc-900">
          <span className="w-20 font-semibold">{item.time}</span>
          <span
            className={`flex-grow ${
              item.activity.toLowerCase().includes("sesión") ? "font-bold" : ""
            }`}
          >
            {item.activity}
          </span>
          {item.person && (
            <span className="text-indigo-300 italic">{item.person}</span>
          )}
        </div>
      ))}
    </div>
  </div>
);

const ConferenceProgram: React.FC = () => {
  const program: Record<string, ScheduleItem[]> = {
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
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg">
      <DaySchedule day="Viernes" schedule={program.viernes} />
      <DaySchedule day="Sábado" schedule={program.sabado} />
      <DaySchedule day="Domingo" schedule={program.domingo} />
    </div>
  );
};

interface Workshop {
  name: string;
  location: string;
}

interface WorkshopDayProps {
  day: string;
  workshops: Workshop[];
}

const WorkshopDay: React.FC<WorkshopDayProps> = ({ day, workshops }) => (
  <div className="mb-8">
    <h2 className="text-xl font-bold mb-4 text-indigo-600">{day}</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {workshops.map((workshop, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-bold text-zinc-900">{workshop.name}</h3>
          <p className="text-indigo-600">{workshop.location}</p>
        </div>
      ))}
    </div>
  </div>
);

const LocationsTab: React.FC = () => {
  const workshopData = [
    {
      location: "Auditorio CIE, CIE",
      saturday: "Taller para adolescentes",
      sunday: "Cómo escuchar la voz de Dios",
    },
    {
      location: "Aula Magna, CIE",
      saturday: "Generación emergente, la iglesia de niños",
      sunday: "Noviazgos del cielo",
    },
    {
      location: "Auditorio Rafael Hiatt, Entrepiso, Catedral",
      saturday: "Una vida de milagros",
      sunday: "Diseño original: Cómo ministrar en el tiempo de las ideologías",
    },
    {
      location: "Aula 16 – 2do piso, Catedral",
      saturday: "Redes sociales sin límites",
      sunday: "Generación que avanza: Los jóvenes abriendo caminos",
    },
    {
      location: "Aula 10 – 2do piso, Catedral",
      saturday: "Finanzas personales y ministeriales",
      sunday: "Genera espacios para profesionales en la Iglesia",
    },
    {
      location: "Aula 9 – 2do piso, Catedral",
      saturday: "ExpresArte: el arte como medio de expresión",
      sunday: "Generación de Fuego: El tiempo de los adolescentes",
    },
    {
      location: "Aula 8 – 1er piso, Catedral",
      saturday: "Evangelismo sobrenatural",
      sunday: "Cómo formar un Ministerio de deportes",
    },
  ];

  return (
    <div className="space-y-1 bg-indigo-700 sm:mx-auto sm:w-full max-w-4xl">
      <div className="rounded-md border bg-white border-indigo-800">
        <Table>
          <TableHeader>
            <TableRow className="border-neutral-200">
              <TableHead className="text-indigo-700">Ubicación</TableHead>
              <TableHead className="text-indigo-700">Sábado</TableHead>
              <TableHead className="text-indigo-700">Domingo</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {workshopData.map((workshop, index) => (
              <TableRow key={index} className="border-neutral-200">
                <TableCell className="text-indigo-950 font-medium">
                  {workshop.location}
                </TableCell>
                <TableCell className="text-indigo-950">
                  {workshop.saturday}
                </TableCell>
                <TableCell className="text-indigo-950">
                  {workshop.sunday}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default function Home() {
  const [activeTab, setActiveTab] = useState<
    "program" | "locations" | "tickets" | "workshops"
  >("program");
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [workshops, setWorkshops] = useState<Ticket[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const hiddenColumns = [
    "⁠¿De que manera estás involucrado/a en tu iglesia?",
    "Asistente: Iglesia",
    "Nombre del Evento",
    "Asistente: Teléfono",
    "Entrada: ID",
    "Tipo De Entrada",
    "Asistente: Correo electrónico",
    "Estado de la entrada",
    "Estado del Pedido",
    "Tipo de entrada",
    "Ticket ID",
    "Fecha del Pedido",
    "Número de Entrada",
    "TicketID",
    "Entrada: Número",
    "Evento: Nombre",
    "Pedido: Estado",
    "Pedido: Fecha",
  ];

  const fetchEventData = async (productId: string) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/eventik/v1/event-tickets/${productId}`
    );
    if (!response.ok) {
      throw new Error(`Failed to fetch data for event ${productId}`);
    }
    return response.json();
  };

  useEffect(() => {
    const fetchAllData = async () => {
      setLoading(true);
      setError(null);
      try {
        const [ticketsData, workshopsData] = await Promise.all([
          fetchEventData("26"),
          fetchEventData("101"),
        ]);
        setTickets(ticketsData);
        setWorkshops(workshopsData);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "An unknown error occurred"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, []);

  return (
    <main className="container flex flex-col px-0 sm:mx-auto sm:w-full max-w-4xl">
      <Image
        className="inset-1 w-full object-cover"
        src={eventImage}
        alt=""
        sizes="(min-width: 1024px) 18rem, (min-width: 768px) 16rem, 8rem"
        unoptimized
      />
      <div className="bg-indigo-700 p-2">
        <div className="flex space-x-2 mb-2 font-bold">
          <button
            className={`px-2 py-2 rounded-lg ${
              activeTab === "program" ? "text-white" : "text-indigo-200"
            }`}
            onClick={() => setActiveTab("program")}
          >
            Programa
          </button>
          <button
            className={`px-2 py-2 rounded-lg ${
              activeTab === "locations" ? "text-white" : "text-indigo-200"
            }`}
            onClick={() => setActiveTab("locations")}
          >
            Ubicaciones
          </button>
          <button
            className={`px-2 py-2 rounded-lg ${
              activeTab === "tickets" ? "text-white" : "text-indigo-200"
            }`}
            onClick={() => setActiveTab("tickets")}
          >
            Talleres General
          </button>
          <button
            className={`px-2 py-2 rounded-lg ${
              activeTab === "workshops" ? "text-white" : "text-indigo-200"
            }`}
            onClick={() => setActiveTab("workshops")}
          >
            Talleres 3 ✕ 2
          </button>
        </div>

        {activeTab === "program" && <ConferenceProgram />}
        {activeTab === "locations" && <LocationsTab />}
        {activeTab === "tickets" && (
          <div>
            {loading && <p className="text-indigo-100">Cargando...</p>}
            {error && <p className="text-red-500">Error: {error}</p>}
            {!loading && !error && tickets.length === 0 && (
              <p className="text-indigo-100">
                No se encontraron tickets para estos eventos.
              </p>
            )}
            {!loading && !error && tickets.length > 0 && (
              <EventTable data={tickets} hiddenColumns={hiddenColumns} />
            )}
          </div>
        )}
        {activeTab === "workshops" && (
          <div>
            {loading && <p className="text-indigo-100">Cargando...</p>}
            {error && <p className="text-red-500">Error: {error}</p>}
            {!loading && !error && workshops.length === 0 && (
              <p className="text-indigo-100">
                No se encontraron talleres para estos eventos.
              </p>
            )}
            {!loading && !error && workshops.length > 0 && (
              <EventTable data={workshops} hiddenColumns={hiddenColumns} />
            )}
          </div>
        )}
      </div>
    </main>
  );
}
