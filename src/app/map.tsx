import React, { useState, useRef, useEffect } from "react";
import { ZoomIn, ZoomOut, RotateCcw, MapPin } from "lucide-react";

interface MapComponentProps {}

const MapComponent: React.FC<MapComponentProps> = () => {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleZoomIn = () => {
    setScale(prev => Math.min(prev * 1.2, 3));
  };

  const handleZoomOut = () => {
    setScale(prev => Math.max(prev / 1.2, 0.5));
  };

  const handleReset = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    
    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Areas/ubicaciones del evento
  const locations = [
    { id: 1, name: "Auditorio Principal", x: 40, y: 30, color: "bg-blue-500" },
    { id: 2, name: "Sector 1 - Talleres", x: 20, y: 50, color: "bg-sky-500" },
    { id: 3, name: "Sector 2 - Talleres", x: 60, y: 50, color: "bg-zinc-500" },
    { id: 4, name: "Sector 3 - Talleres", x: 80, y: 30, color: "bg-rose-500" },
    { id: 5, name: "Casa de Oración - Carpa", x: 30, y: 70, color: "bg-purple-500" },
    { id: 6, name: "Espacio TTL", x: 70, y: 70, color: "bg-green-500" },
    { id: 7, name: "Cafetería", x: 15, y: 20, color: "bg-amber-500" },
    { id: 8, name: "Quiosco", x: 85, y: 60, color: "bg-orange-500" },
    { id: 9, name: "Entrada Principal", x: 50, y: 10, color: "bg-red-500" },
    { id: 10, name: "Estacionamiento", x: 10, y: 80, color: "bg-gray-500" },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-center mb-2">Mapa del Evento</h2>
        <p className="text-center text-gray-600 mb-4">
          Haz zoom y arrastra para navegar por el mapa
        </p>
        
        {/* Controles */}
        <div className="flex justify-center gap-2 mb-4">
          <button
            onClick={handleZoomIn}
            className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-lg transition-colors"
          >
            <ZoomIn className="w-4 h-4" />
            Zoom +
          </button>
          <button
            onClick={handleZoomOut}
            className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-lg transition-colors"
          >
            <ZoomOut className="w-4 h-4" />
            Zoom -
          </button>
          <button
            onClick={handleReset}
            className="flex items-center gap-2 bg-gray-500 hover:bg-gray-600 text-white px-3 py-2 rounded-lg transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            Reset
          </button>
        </div>
      </div>

      {/* Contenedor del mapa */}
      <div
        ref={containerRef}
        className="relative w-full h-96 bg-gray-100 border-2 border-gray-300 rounded-lg overflow-hidden cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <div
          className="absolute inset-0 transition-transform duration-200 ease-out"
          style={{
            transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
            transformOrigin: 'center',
          }}
        >
          {/* Fondo del mapa */}
          <div className="w-full h-full relative bg-gradient-to-br from-green-100 to-green-200">
            
            {/* Estructura principal del edificio/evento */}
            <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-32 h-16 bg-gray-300 border-2 border-gray-400 rounded-lg flex items-center justify-center">
              <span className="text-xs font-bold text-gray-700">Edificio Principal</span>
            </div>

            {/* Caminos */}
            <div className="absolute top-20 left-0 w-full h-2 bg-gray-400"></div>
            <div className="absolute top-0 left-1/2 w-2 h-full bg-gray-400"></div>

            {/* Ubicaciones/marcadores */}
            {locations.map((location) => (
              <div
                key={location.id}
                className="absolute group cursor-pointer"
                style={{
                  left: `${location.x}%`,
                  top: `${location.y}%`,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <div className={`w-4 h-4 ${location.color} rounded-full border-2 border-white shadow-lg hover:scale-110 transition-transform`}>
                  <MapPin className="w-full h-full text-white p-0.5" />
                </div>
                
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                    {location.name}
                  </div>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-black"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Leyenda */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-3">Ubicaciones</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {locations.map((location) => (
            <div key={location.id} className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
              <div className={`w-3 h-3 ${location.color} rounded-full`}></div>
              <span className="text-sm font-medium">{location.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Información adicional */}
      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <h3 className="font-semibold text-blue-800 mb-2">Información del Mapa</h3>
        <ul className="text-sm text-blue-700 space-y-1">
          <li>• Haz clic y arrastra para mover el mapa</li>
          <li>• Usa los botones de zoom para acercar o alejar</li>
          <li>• Pasa el cursor sobre los marcadores para ver los nombres</li>
          <li>• Los colores de los sectores coinciden con los talleres</li>
        </ul>
      </div>
    </div>
  );
};

export default MapComponent;
