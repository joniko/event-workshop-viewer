import React from "react";
import { Coffee, Milk, Croissant, Sandwich, IceCream } from "lucide-react";
import MenuItemList, { MenuItem } from "@/components/MenuItemList";

interface CafeteriaContentProps {
  onItemChange: (item: MenuItem & { id: string }, quantity: number) => void;
  setWhatsappNumber: (number: string) => void;
  enableOrdering: boolean;
}

export const CAFETERIA_ENABLE_ORDERING = true; // o false, según lo que quieras
const CAFETERIA_WHATSAPP_NUMBER = ""; // Número específico para la cafetería

const CafeteriaContent: React.FC<CafeteriaContentProps> = ({
  onItemChange,
  setWhatsappNumber,
  enableOrdering,
}) => {
  React.useEffect(() => {
    setWhatsappNumber(CAFETERIA_WHATSAPP_NUMBER);
  }, [setWhatsappNumber]);

  const menuSections = [
    {
      title: "Bebidas calientes",
      icon: Coffee,
      items: [
        { name: "Café espresso", price: 2000 },
        { name: "Latte macchiato (90% café, 10% leche)", price: 2500 },
        { name: "Café cortado", price: 2200 },
        {
          name: "Cappuccino (25% café y 75% leche, espolvoreado con canela y cacao)",
          price: 2800,
        },
        { name: "Té (consultar variedades)", price: 1800 },
        { name: "Ice latte (25% café y 75% leche, con hielo)", price: 2600 },
        {
          name: "Cold flat white (40% café y 60% leche, con espuma y hielo)",
          price: 2700,
        },
        { name: "Chocolatada", price: 2300 },
      ],
      category: "bebidas-calientes",
    },
    {
      title: "Bebidas frías",
      icon: Milk,
      items: [
        { name: "Jugo Cepita", price: 1800 },
        { name: "Smoothies", price: 3000 },
        { name: "Licuado (banana y frutilla)", price: 2800 },
      ],
      category: "bebidas-frias",
    },
    {
      title: "Panadería y Pastelería",
      icon: Croissant,
      items: [
        { name: "Medialunas", price: 800 },
        { name: "Facturas", price: 700 },
        { name: "Criollo unidad", price: 900 },
        { name: "Chipa", price: 1000 },
        { name: "Cookie americana", price: 1200 },
        { name: "Brownie", price: 1500 },
        { name: "Budín de vainilla", price: 1300 },
        { name: "Budín de carrot cake", price: 1400 },
        { name: "Alfajor de maicena", price: 1100 },
        { name: "Alfajor de chocolate", price: 1300 },
      ],
      category: "panaderia-y-pasteleria",
    },
    {
      title: "Sándwiches y Snacks",
      icon: Sandwich,
      items: [
        { name: "Tostado de jamón y queso", price: 3500 },
        { name: "Sándwich de miga, ternera y queso", price: 3000 },
        { name: "Pebete jamón y queso", price: 2800 },
      ],
      category: "sandwiches-y-snacks",
    },
    {
      title: "Postres y Helados",
      icon: IceCream,
      items: [
        { name: "Helado en pote", price: 2000 },
        { name: "Palito bombón", price: 1800 },
        { name: "Palito de agua", price: 1500 },
        { name: "Postre Chocotorta", price: 2800 },
        { name: "Postre Tiramisú", price: 3000 },
      ],
      category: "postres-y-helados",
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

export default CafeteriaContent;
