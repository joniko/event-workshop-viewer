import React from "react";
import { Cookie, Pizza, Candy, Coffee } from "lucide-react";

const QuioscoContent = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <section>
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <Cookie className="w-6 h-6 mr-2" /> Galletas y Dulces
        </h2>
        <ul className="list-disc list-inside">
          <li>Galleta Oreo</li>
          <li>Galleta Mini Pepitos</li>
          <li>Galleta 9 de Oro</li>
          <li>Galleta Formis</li>
          <li>Galleta Pepas</li>
          <li>Galleta Surtido Bagley</li>
          <li>Galleta Vocación</li>
          <li>Galleta Vainilla</li>
          <li>Almohaditas Frutilla</li>
          <li>Cereal Anillito</li>
          <li>Butter Toffees</li>
          <li>Masticable Sugus</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <Pizza className="w-6 h-6 mr-2" /> Snacks Salados
        </h2>
        <ul className="list-disc list-inside">
          <li>Galletas Saladix</li>
          <li>Tostada de Arroz Molino</li>
          <li>Tutuca</li>
          <li>Papa Quento</li>
          <li>Papa Danal</li>
          <li>Cereal Mix</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <Candy className="w-6 h-6 mr-2" /> Chicles y Caramelos
        </h2>
        <ul className="list-disc list-inside">
          <li>Chicles Topline</li>
          <li>Menthoplus</li>
          <li>Goma Misky</li>
          <li>Tic Tac</li>
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
          <li>Agua caliente</li>
        </ul>
      </section>
    </div>
  );
};

export default QuioscoContent;
