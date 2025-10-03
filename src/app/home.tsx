import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, Calendar, MapPin, ShoppingBag, ExternalLink } from "lucide-react";

interface BannerItem {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  ctaText?: string;
  ctaAction?: () => void;
}

interface MerchItem {
  id: number;
  name: string;
  price: number;
  image: string;
  description?: string;
}

const HomeComponent: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [currentMerchSlide, setCurrentMerchSlide] = useState(0);

  /* 
  BANNERS EN FORMATO 1200x630 PÍXELES - SIN TEXTO SUPERPUESTO
  
  Para reemplazar con las imágenes definitivas:
  1. Crear 5 imágenes en formato 1200x630 píxeles
  2. Guardarlas en la carpeta public/banners/ con los nombres:
     - banner-1.jpg (Banner principal de la conferencia)
     - banner-2.jpg (Banner de transmisión en vivo)
     - banner-3.jpg (Banner de plenarias)
     - banner-4.jpg (Banner de talleres)
     - banner-5.jpg (Banner de casa de oración)
  3. Las imágenes se mostrarán limpias sin texto superpuesto
  4. Las imágenes actuales son placeholders temporales
  */
  const banners: BannerItem[] = [
    {
      id: 1,
      title: "Conferencia TOMATULUGAR 2025",
      subtitle: "Evangelio del Reino",
      description: "Únete a nosotros en esta experiencia transformadora donde exploraremos las profundidades del Reino de Dios",
      imageUrl: "/banners/banner-1.jpg", // Banner principal 1200x630
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
      imageUrl: "/banners/banner-2.jpg", // Banner transmisión en vivo 1200x630
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
      imageUrl: "/banners/banner-3.jpg", // Banner plenarias 1200x630
    },
    {
      id: 4,
      title: "Talleres Especializados",
      subtitle: "3 Sectores Temáticos",
      description: "Profundiza en áreas específicas: Evangelio Completo, Adoración & Intercesión, e Iglesia Gloriosa",
      imageUrl: "/banners/banner-4.jpg", // Banner talleres 1200x630
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
      imageUrl: "/banners/banner-5.jpg", // Banner casa de oración 1200x630
    }
  ];

  // Merchandise items
  const merchItems: MerchItem[] = [
    {
      id: 1,
      name: "Gratitude - Lion Inside",
      price: 25000,
      image: "/merch/merch-1.jpg",
      description: "Camiseta negra con diseño de león"
    },
    {
      id: 2,
      name: "House of Miracles",
      price: 25000,
      image: "/merch/merch-2.jpg",
      description: "Camiseta blanca con diseño de casa"
    },
    {
      id: 3,
      name: "Conferencia 2025",
      price: 30000,
      image: "/merch/merch-3.jpg",
      description: "Camiseta oficial de la conferencia"
    },
    {
      id: 4,
      name: "Toma Tu Lugar",
      price: 28000,
      image: "/merch/merch-4.jpg",
      description: "Sudadera con capucha"
    },
    {
      id: 5,
      name: "Reino de Dios",
      price: 22000,
      image: "/merch/merch-5.jpg",
      description: "Taza de cerámica"
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

  // Merchandise slider functions
  const nextMerchSlide = () => {
    setCurrentMerchSlide((prev) => (prev + 1) % Math.max(1, merchItems.length - 2));
  };

  const prevMerchSlide = () => {
    setCurrentMerchSlide((prev) => (prev - 1 + Math.max(1, merchItems.length - 2)) % Math.max(1, merchItems.length - 2));
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
              {/* Banner Image - clean without overlay */}
              <img 
                src={banner.imageUrl}
                alt={banner.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
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

      {/* YouTube Video Section */}
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-center mb-4">Video Destacado</h3>
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="aspect-video w-full">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/4bCC0Nz3FEc"
              title="Video de la Conferencia - LA GENERACIÓN DE ELÍAS"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Merchandise Slider */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4 p-2 md:p-6">
          <h3 className="text-2xl font-bold">Merch Oficial</h3>
          <button className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
            <span>Ver más productos</span>
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
        
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out gap-4 scroll-smooth snap-x snap-mandatory"
              style={{ transform: `translateX(-${currentMerchSlide * 33.333}%)` }}
            >
              {merchItems.map((item, index) => (
                <div key={item.id} className={`flex-shrink-0 w-1/3 min-w-[280px] snap-center ${index === 0 ? 'ml-4' : ''} ${index === merchItems.length - 1 ? 'mr-4' : ''}`}>
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-square bg-gray-100">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-lg mb-2 line-clamp-2">{item.name}</h4>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">{item.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-green-600">
                          ${item.price.toLocaleString()}
                        </span>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2">
                          <ShoppingBag className="w-4 h-4" />
                          Comprar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Merchandise slider navigation */}
          <button
            onClick={prevMerchSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 shadow-md p-2 rounded-full transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextMerchSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 shadow-md p-2 rounded-full transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 p-2 md:p-6">
        <button
          onClick={() => window.open("https://wa.me/5491130734041", "_blank")}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-lg transition-colors flex items-center justify-center gap-3"
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2m4.52 7.15l-4.93 2.65c-.54.29-.78.1-.78-.43v-5.31c0-.53.24-.72.78-.43l4.93 2.65c.54.29.54.76 0 1.05"/>
          </svg>
          <span className="font-semibold">Contactar por WhatsApp</span>
        </button>
        
        <button
          onClick={() => window.open("https://forms.google.com/inscripcion-conferencia", "_blank")}
          className="bg-purple-500 hover:bg-purple-600 text-white p-4 rounded-lg transition-colors flex items-center justify-center gap-3"
        >
          <Calendar className="w-6 h-6" />
          <span className="font-semibold">Inscribirse a la Conferencia</span>
        </button>
      </div>

     
    </div>
  );
};

export default HomeComponent;
