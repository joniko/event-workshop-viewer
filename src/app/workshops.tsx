import React, { useState, useEffect } from "react";
import { EventTable } from "@/components/event-table";
import { Ticket } from "@/types";

const Workshops: React.FC = () => {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const hiddenColumns = [
    "Asistente: Iglesia",
    "Nombre del Evento",
    "Asistente: Teléfono",
    "Entrada: ID",
    "Asistente: Correo electrónico",
    "Estado de la entrada",
    "Estado del Pedido",
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
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const ticketsData = await fetchEventData("9847");
        setTickets(ticketsData);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "An unknown error occurred"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="space-y-1 rounded-md border bg-white sm:mx-auto sm:w-full max-w-4xl">
      {loading && <p className="text-blue-600">Cargando...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}
      {!loading && !error && tickets.length === 0 && (
        <p className="text-blue-600">
          No se encontraron tickets para este evento.
        </p>
      )}
      {!loading && !error && tickets.length > 0 && (
        <EventTable data={tickets} hiddenColumns={hiddenColumns} />
      )}
    </div>
  );
};

export default Workshops;
