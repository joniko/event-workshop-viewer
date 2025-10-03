import React, { useEffect } from "react";
import { Cookie, Pizza, Candy, Coffee } from "lucide-react";
import MenuItemList, { MenuItem } from "@/components/MenuItemList";

interface QuioscoContentProps {
  onItemChange: (item: MenuItem & { id: string }, quantity: number) => void;
  setWhatsappNumber: (number: string) => void;
  enableOrdering: boolean;
}

const QUIOSCO_WHATSAPP_NUMBER = ""; // Número específico para el quiosco
export const QUIOSCO_ENABLE_ORDERING = true;

const QuioscoContent: React.FC<QuioscoContentProps> = ({
  onItemChange,
  setWhatsappNumber,
  enableOrdering,
}) => {
  useEffect(() => {
    setWhatsappNumber(QUIOSCO_WHATSAPP_NUMBER);
  }, [setWhatsappNumber]);

  const menuSections = [
    {
      title: "Galletas y Dulces",
      icon: Cookie,
      items: [
        { name: "Galleta Oreo", price: 1500 },
        { name: "Galleta Mini Pepitos", price: 1200 },
        { name: "Galleta 9 de Oro", price: 1000 },
        { name: "Galleta Formis", price: 1300 },
        { name: "Galleta Pepas", price: 1100 },
        { name: "Galleta Surtido Bagley", price: 1800 },
        { name: "Galleta Vocación", price: 1400 },
        { name: "Galleta Vainilla", price: 900 },
        { name: "Almohaditas Frutilla", price: 1600 },
        { name: "Cereal Anillito", price: 2000 },
        { name: "Butter Toffees", price: 800 },
        { name: "Masticable Sugus", price: 700 },
      ],
      category: "galletas-y-dulces",
    },
    {
      title: "Snacks Salados",
      icon: Pizza,
      items: [
        { name: "Galletas Saladix", price: 1400 },
        { name: "Tostada de Arroz Molino", price: 1200 },
        { name: "Tutuca", price: 1000 },
        { name: "Papa Quento", price: 1800 },
        { name: "Papa Danal", price: 1600 },
        { name: "Cereal Mix", price: 2200 },
      ],
      category: "snacks-salados",
    },
    {
      title: "Chicles y Caramelos",
      icon: Candy,
      items: [
        { name: "Chicles Topline", price: 600 },
        { name: "Menthoplus", price: 500 },
        { name: "Goma Misky", price: 400 },
        { name: "Tic Tac", price: 700 },
      ],
      category: "chicles-y-caramelos",
    },
    {
      title: "Bebidas",
      icon: Coffee,
      items: [
        { name: "Línea Coca Cola", price: 2000 },
        { name: "Agua saborizada", price: 1800 },
        { name: "Agua (con gas/sin gas)", price: 1500 },
        { name: "Agua caliente", price: 1000 },
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

export default QuioscoContent;
