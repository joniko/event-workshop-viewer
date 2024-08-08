'use client';

import React, { useState, useEffect } from 'react';
import { EventTable } from '@/components/event-table';
import { Ticket } from '@/types';  // Importa el tipo Ticket desde el archivo compartido

const PREDEFINED_EVENT_IDS = ['26']; // Replace with the IDs you want to use

export default function Home() {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Define the columns you want to hide
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
    "Pedido: Fecha"
  ];

  const fetchEventTickets = async () => {
    setLoading(true);
    setError(null);
    try {
      const fetchPromises = PREDEFINED_EVENT_IDS.map(id => 
        fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/eventik/v1/event-tickets/${id}`)
          .then(response => {
            if (!response.ok) {
              throw new Error(`Failed to fetch tickets for event ${id}`);
            }
            return response.json();
          })
      );

      const results = await Promise.all(fetchPromises);
      const allTickets = results.flat() as Ticket[];
      setTickets(allTickets);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEventTickets();
  }, []);

  return (
    <main className="md:container md:mx-auto py-10">
      <h1 className="text-3xl font-bold mb-5">Talleres Cumbre 2024</h1>
      {loading && <p>Cargando...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}
      {!loading && !error && tickets.length === 0 && <p>No tickets found for these events.</p>}
      {!loading && !error && tickets.length > 0 && <EventTable data={tickets} hiddenColumns={hiddenColumns} />}
    </main>
  );
}