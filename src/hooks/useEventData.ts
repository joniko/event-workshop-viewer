import { useState, useEffect } from "react";
import { Ticket } from "@/types";

export function useEventData(productId: string) {
  const [data, setData] = useState<Ticket[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEventData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/eventik/v1/event-tickets/${productId}`
        );
        if (!response.ok) {
          throw new Error(`Failed to fetch data for event ${productId}`);
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "An unknown error occurred"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchEventData();
  }, [productId]);

  return { data, loading, error };
}
