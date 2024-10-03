import React from "react";
import { Coffee, Store, Umbrella } from "lucide-react";
import CafeteriaContent from "./buffet/cafeteria";
import QuioscoContent from "./buffet/quiosco";
import CarpaContent from "./buffet/carpa";

interface BuffetProps {
  type: "cafeteria" | "quiosco" | "carpa";
}

const BuffetPage: React.FC<BuffetProps> = ({ type }) => {
  const renderContent = () => {
    switch (type) {
      case "cafeteria":
        return <CafeteriaContent />;
      case "quiosco":
        return <QuioscoContent />;
      case "carpa":
        return <CarpaContent />;
      default:
        return null;
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-8 text-primary">
        {type === "cafeteria" && "Cafetería"}
        {type === "quiosco" && "Quiosco"}
        {type === "carpa" && "Carpa"}
      </h1>
      {renderContent()}
    </div>
  );
};

export default BuffetPage;
