import React from "react";
import { Coffee, Milk, Croissant, Sandwich, IceCream } from "lucide-react";

const CafeteriaContent: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <section>
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <Coffee className="w-6 h-6 mr-2" /> Bebidas calientes
        </h2>
        <ul className="list-disc list-inside">
          <li>Café espresso</li>
          <li>Latte macchiato (90% café, 10% leche)</li>
          <li>Café cortado</li>
          <li>
            Cappuccino (25% café y 75% leche, espolvoreado con canela y cacao)
          </li>
          <li>Té (consultar variedades)</li>
          <li>Ice latte (25% café y 75% leche, con hielo)</li>
          <li>Cold flat white (40% café y 60% leche, con espuma y hielo)</li>
          <li>Chocolatada</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <Milk className="w-6 h-6 mr-2" /> Bebidas frías
        </h2>
        <ul className="list-disc list-inside">
          <li>Jugo Cepita</li>
          <li>Smoothies</li>
          <li>Licuado (banana y frutilla)</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <Croissant className="w-6 h-6 mr-2" /> Panadería y Pastelería
        </h2>
        <ul className="list-disc list-inside">
          <li>Medialunas</li>
          <li>Facturas</li>
          <li>Criollo unidad</li>
          <li>Chipa</li>
          <li>Cookie americana</li>
          <li>Brownie</li>
          <li>Budín de vainilla</li>
          <li>Budín de carrot cake</li>
          <li>Alfajor de maicena</li>
          <li>Alfajor de chocolate</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <Sandwich className="w-6 h-6 mr-2" /> Sándwiches y Snacks
        </h2>
        <ul className="list-disc list-inside">
          <li>Tostado de jamón y queso</li>
          <li>Sándwich de miga, ternera y queso</li>
          <li>Pebete jamón y queso</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <IceCream className="w-6 h-6 mr-2" /> Postres y Helados
        </h2>
        <ul className="list-disc list-inside">
          <li>Helado en pote</li>
          <li>Palito bombón</li>
          <li>Palito de agua</li>
          <li>Postre Chocotorta</li>
          <li>Postre Tiramisú</li>
        </ul>
      </section>
    </div>
  );
};

export default CafeteriaContent;
