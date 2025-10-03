import React, { useEffect } from "react";
import { Salad, Sandwich, Pizza, Coffee, Utensils } from "lucide-react";
import MenuItemList, { MenuItem } from "@/components/MenuItemList";

interface CarpaContentProps {
  onItemChange: (item: MenuItem & { id: string }, quantity: number) => void;
  setWhatsappNumber: (number: string) => void;
  enableOrdering: boolean;
}

const CARPA_WHATSAPP_NUMBER = ""; // Número específico para la carpa
export const CARPA_ENABLE_ORDERING = false;

const CarpaContent: React.FC<CarpaContentProps> = ({
  onItemChange,
  setWhatsappNumber,
  enableOrdering,
}) => {
  useEffect(() => {
    setWhatsappNumber(CARPA_WHATSAPP_NUMBER);
  }, [setWhatsappNumber]);

  const menuSections = [
    {
      title: "Ensaladas y Tartas",
      icon: Salad,
      items: [
        { name: "Ensalada César con pollo", price: 6500 },
        {
          name: "Ensalada completa (verdes, cherries, zanahoria, choclo, jamón y queso)",
          price: 6000,
        },
        { name: "Tarta de pollo / zapallito", price: 5500 },
      ],
      category: "ensaladas-y-tartas",
    },
    {
      title: "Sándwiches y Wraps",
      icon: Sandwich,
      items: [
        { name: "Sándwich de milanesa", price: 7000 },
        { name: "Baguette de pollo", price: 6500 },
        { name: "Wraps con nachos (pollo y vegetales salteados)", price: 6000 },
      ],
      category: "sandwiches-y-wraps",
    },
    {
      title: "Comidas calientes",
      icon: Pizza,
      items: [
        { name: "Hamburguesas con papitas", price: 7500 },
        { name: "Nugget de pollo (con papas fritas)", price: 6500 },
        { name: "Empanadas x3 (carne, jamón y queso, árabe)", price: 5000 },
        { name: "Pizza (peperoni, jamón, mozzarella)", price: 8000 },
      ],
      category: "comidas-calientes",
    },
    {
      title: "Acompañamientos",
      icon: Utensils,
      items: [{ name: "Papas fritas - Porción", price: 4000 }],
      category: "acompañamientos",
    },
    {
      title: "Bebidas",
      icon: Coffee,
      items: [
        { name: "Línea Coca Cola", price: 2000 },
        { name: "Agua saborizada", price: 1800 },
        { name: "Agua (con gas/sin gas)", price: 1500 },
      ],
      category: "bebidas",
    },
  ];

  return (
    <MenuItemList
      sections={menuSections}
      onItemChange={onItemChange}
      enableOrdering={enableOrdering}
    />
  );
};

export default CarpaContent;
