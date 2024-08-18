"use client";
import React from "react";
import InternalLayout from "@/components/InternalLayout";
import { useEventData } from "@/hooks/useEventData";
import { EventTable } from "@/components/event-table";

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

export default function TicketsPage() {
  const { data: tickets, loading, error } = useEventData("26");

  return (
    <InternalLayout>
      <div>
        <h1 className="text-2xl font-bold text-indigo-800 mb-4">
          Talleres General
        </h1>
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
    </InternalLayout>
  );
}
