import React, { useState, useEffect } from "react";
import { EventTable } from "@/components/event-table";
import { Ticket } from "@/types";

interface WorkshopsProps {
  type: "argentinos" | "extranjeros";
}

const Workshops: React.FC<WorkshopsProps> = ({ type }) => {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const hiddenColumns = [
    "Asistente: Iglesia",
    "Nombre del Evento",
    // ... (rest of the hidden columns)
  ];

  const fetchEventData = async (url: string, productId: string) => {
    const response = await fetch(
      `${url}/wp-json/eventik/v1/event-tickets/${productId}`
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
        const data = await fetchEventData(
          type === "argentinos"
            ? process.env.NEXT_PUBLIC_WORDPRESS_URL!
            : process.env.NEXT_PUBLIC_WORDPRESS_URL_EXTRANJEROS!,
          type === "argentinos"
            ? process.env.NEXT_PUBLIC_PRODUCT_ID!
            : process.env.NEXT_PUBLIC_PRODUCT_ID_EXTRANJEROS!
        );
        setTickets(data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "An unknown error occurred"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [type]);

  return (
    <div className="space-y-1 rounded-md border bg-white sm:mx-auto sm:w-full max-w-4xl">
      {loading && <p className="text-blue-600">Cargando...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}
      {!loading && !error && (
        <div className="">
          {tickets.length === 0 ? (
            <p className="text-blue-600">
              No se encontraron tickets para talleres.
            </p>
          ) : (
            <EventTable data={tickets} hiddenColumns={hiddenColumns} />
          )}
        </div>
      )}
    </div>
  );
};

export default Workshops;
