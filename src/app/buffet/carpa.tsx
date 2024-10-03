import React from "react";
import { Salad, Sandwich, Pizza, Coffee } from "lucide-react";
// Nota: Cambiamos 'Fries' por 'Utensils' ya que 'Fries' no existe en lucide-react
import { Utensils } from "lucide-react";

const CarpaContent: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <section>
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <Salad className="w-6 h-6 mr-2" /> Ensaladas y Tartas
        </h2>
        <ul className="list-disc list-inside">
          <li>Ensalada César con pollo</li>
          <li>
            Ensalada completa (verdes, cherries, zanahoria, choclo, jamón y
            queso)
          </li>
          <li>Tarta de pollo / zapallito</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <Sandwich className="w-6 h-6 mr-2" /> Sándwiches y Wraps
        </h2>
        <ul className="list-disc list-inside">
          <li>Sándwich de milanesa</li>
          <li>Baguette de pollo</li>
          <li>Wraps con nachos (pollo y vegetales salteados)</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <Pizza className="w-6 h-6 mr-2" /> Comidas calientes
        </h2>
        <ul className="list-disc list-inside">
          <li>Hamburguesas con papitas</li>
          <li>Nugget de pollo (con papas fritas)</li>
          <li>Empanadas x3 (carne, jamón y queso, árabe)</li>
          <li>Pizza (peperoni, jamón, mozzarella)</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <Utensils className="w-6 h-6 mr-2" /> Acompañamientos
        </h2>
        <ul className="list-disc list-inside">
          <li>Papas fritas - Porción</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <Coffee className="w-6 h-6 mr-2" /> Bebidas
        </h2>
        <ul className="list-disc list-inside">
          <li>Línea Coca Cola</li>
          <li>Agua saborizada</li>
          <li>Agua (con gas/sin gas)</li>
        </ul>
      </section>
    </div>
  );
};

export default CarpaContent;
