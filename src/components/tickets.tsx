import React, { useState, useEffect } from "react";
import WavyBackground from "@/components/WavyBackground";
import { EventTable } from "@/components/event-table";
import { Ticket } from "@/types";

export default function TicketsPage() {
  const [tickets, setTickets] = useState<Ticket[]>([]);
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
    "Asistente 2: Correo electrónico",
    "Asistente 3: Correo electrónico",
  ];

  useEffect(() => {
    const fetchEventData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/eventik/v1/event-tickets/26`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setTickets(data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "An unknown error occurred"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchEventData();
  }, []);

  return (
    <main className="container flex flex-col px-0 sm:mx-auto sm:w-full max-w-4xl">
      <WavyBackground />
      <h1 className="text-2xl font-bold text-indigo-800 mt-8 mb-4">
        Talleres General
      </h1>
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
    </main>
  );
}
