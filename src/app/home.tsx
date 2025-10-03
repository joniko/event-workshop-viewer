import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, Calendar, MapPin } from "lucide-react";

interface BannerItem {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  ctaText?: string;
  ctaAction?: () => void;
}

const HomeComponent: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  /* 
  BANNERS EN FORMATO 1200x630 PÍXELES
  
  Para reemplazar con las imágenes definitivas:
  1. Crear 5 imágenes en formato 1200x630 píxeles
  2. Guardarlas en la carpeta public/banners/ con los nombres:
     - banner-principal-1200x630.jpg (Banner principal de la conferencia)
     - banner-live-1200x630.jpg (Banner de transmisión en vivo)
     - banner-plenarias-1200x630.jpg (Banner de plenarias)
     - banner-talleres-1200x630.jpg (Banner de talleres)
     - banner-oracion-1200x630.jpg (Banner de casa de oración)
  3. Las imágenes actuales son placeholders temporales
  */
  const banners: BannerItem[] = [
    {
      id: 1,
      title: "Conferencia TOMATULUGAR 2025",
      subtitle: "Evangelio del Reino",
      description: "Únete a nosotros en esta experiencia transformadora donde exploraremos las profundidades del Reino de Dios",
      imageUrl: "/banners/banner-principal-1200x630.jpg", // Banner principal 1200x630
      ctaText: "Ver Programa",
      ctaAction: () => {
        const programTab = document.querySelector('[value="program"]') as HTMLElement;
        programTab?.click();
      }
    },
    {
      id: 2,
      title: "Transmisión EN VIVO",
      subtitle: "No te pierdas ningún momento",
      description: "Sigue toda la conferencia en tiempo real desde nuestro canal oficial de YouTube",
      imageUrl: "/banners/banner-live-1200x630.jpg", // Banner transmisión en vivo 1200x630
      ctaText: "Ver EN VIVO",
      ctaAction: () => {
        window.open("https://www.youtube.com/@TOMATULUGAR/streams", "_blank");
      }
    },
    {
      id: 3,
      title: "Plenarias Principales",
      subtitle: "Enseñanzas profundas",
      description: "Experimenta momentos únicos de revelación y crecimiento espiritual con oradores reconocidos",
      imageUrl: "/banners/banner-plenarias-1200x630.jpg", // Banner plenarias 1200x630
    },
    {
      id: 4,
      title: "Talleres Especializados",
      subtitle: "3 Sectores Temáticos",
      description: "Profundiza en áreas específicas: Evangelio Completo, Adoración & Intercesión, e Iglesia Gloriosa",
      imageUrl: "/banners/banner-talleres-1200x630.jpg", // Banner talleres 1200x630
      ctaText: "Explorar Mapa",
      ctaAction: () => {
        const mapTab = document.querySelector('[value="map"]') as HTMLElement;
        mapTab?.click();
      }
    },
    {
      id: 5,
      title: "Casa de Oración",
      subtitle: "Momentos de intercesión",
      description: "Espacios dedicados a la oración y búsqueda de Dios durante toda la conferencia",
      imageUrl: "/banners/banner-oracion-1200x630.jpg", // Banner casa de oración 1200x630
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Cambia cada 5 segundos

    return () => clearInterval(interval);
  }, [isAutoPlaying, currentSlide]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Hero Carousel */}
      <div 
        className="relative w-full aspect-[1200/630] overflow-hidden rounded-md shadow-lg mb-6"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Slides */}
        <div 
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {banners.map((banner) => (
            <div key={banner.id} className="w-full h-full flex-shrink-0 relative">
              {/* Banner Image - optimized for 1200x630 format */}
              <img 
                src={banner.imageUrl}
                alt={banner.title}
                className="absolute inset-0 w-full h-full object-cover"
                style={{ filter: 'brightness(0.6)' }}
              />
              
              {/* Overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/20" />
              
              {/* Content positioned for optimal readability */}
              <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4 md:px-8">
                <div className="max-w-3xl">
                  <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 leading-tight">
                    {banner.title}
                  </h1>
                  <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mb-3 md:mb-4 text-blue-200">
                    {banner.subtitle}
                  </h2>
                  <p className="text-sm md:text-lg lg:text-xl mb-4 md:mb-6 text-gray-200 leading-relaxed">
                    {banner.description}
                  </p>
                  {banner.ctaText && banner.ctaAction && (
                    <button
                      onClick={banner.ctaAction}
                      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 md:py-3 px-4 md:px-6 rounded-lg transition-colors inline-flex items-center gap-2 text-sm md:text-base"
                    >
                      {banner.ctaText}
                      <Play className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>

        {/* Auto-play indicator */}
        <div className="absolute top-4 right-4">
          <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-green-400' : 'bg-gray-400'}`} />
        </div>
      </div>

      {/* Quick Access Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 px-4 md:px-6">
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
          <div className="flex items-center mb-3">
            <Calendar className="w-6 h-6 text-blue-600 mr-2" />
            <h3 className="text-lg font-semibold text-blue-800">Cronograma</h3>
          </div>
          <p className="text-blue-700 mb-3">
            Consulta todos los horarios y actividades de la conferencia
          </p>
          <button 
            onClick={() => {
              const programTab = document.querySelector('[value="program"]') as HTMLElement;
              programTab?.click();
            }}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors"
          >
            Ver Programa
          </button>
        </div>

        <div className="bg-green-50 p-6 rounded-lg border border-green-200">
          <div className="flex items-center mb-3">
            <MapPin className="w-6 h-6 text-green-600 mr-2" />
            <h3 className="text-lg font-semibold text-green-800">Ubicaciones</h3>
          </div>
          <p className="text-green-700 mb-3">
            Navega por el mapa interactivo del evento
          </p>
          <button 
            onClick={() => {
              const mapTab = document.querySelector('[value="map"]') as HTMLElement;
              mapTab?.click();
            }}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition-colors"
          >
            Explorar Mapa
          </button>
        </div>

        <div className="bg-red-50 p-6 rounded-lg border border-red-200">
          <div className="flex items-center mb-3">
            <Play className="w-6 h-6 text-red-600 mr-2" />
            <h3 className="text-lg font-semibold text-red-800">EN VIVO</h3>
          </div>
          <p className="text-red-700 mb-3">
            Sigue la transmisión en tiempo real
          </p>
          <button 
            onClick={() => window.open("https://www.youtube.com/@TOMATULUGAR/streams", "_blank")}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition-colors"
          >
            Ver Transmisión
          </button>
        </div>
      </div>

      {/* Event Info */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Información del Evento</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
          <div>
            <h4 className="font-semibold mb-2">Fechas:</h4>
            <p>Jueves, Viernes y Sábado</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Modalidad:</h4>
            <p>Presencial y transmisión en vivo</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Tema Central:</h4>
            <p>Evangelio del Reino</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Actividades:</h4>
            <p>Plenarias, Talleres, Casa de Oración</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
