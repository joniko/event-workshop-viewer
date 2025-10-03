import React, { useState, useRef, Suspense } from "react";
import { ChevronLeft, ChevronRight, Play, Calendar, MapPin, ShoppingBag, ExternalLink } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useToast } from "@/hooks/use-toast";
import CarouselSkeleton from "@/components/CarouselSkeleton";
import Autoplay from "embla-carousel-autoplay";

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
  const [isLoading, setIsLoading] = useState(true);
  
  const autoplayPlugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  // Simular carga inicial
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

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
      subtitle: "Enseñanzas transformadoras",
      description: "Experimenta enseñanzas poderosas que cambiarán tu perspectiva del Reino",
      imageUrl: "/banners/banner-3.jpg", // Banner plenarias 1200x630
      ctaText: "Ver Horarios",
      ctaAction: () => {
        const programTab = document.querySelector('[value="program"]') as HTMLElement;
        programTab?.click();
      }
    },
    {
      id: 4,
      title: "Talleres Especializados",
      subtitle: "Crecimiento personal y espiritual",
      description: "Participa en talleres diseñados para tu crecimiento integral en el Reino",
      imageUrl: "/banners/banner-4.jpg", // Banner talleres 1200x630
      ctaText: "Explorar Talleres",
      ctaAction: () => {
        const programTab = document.querySelector('[value="program"]') as HTMLElement;
        programTab?.click();
      }
    },
    {
      id: 5,
      title: "Casa de Oración",
      subtitle: "Encuentro con Dios",
      description: "Espacios dedicados para la oración, adoración y encuentro personal con Dios",
      imageUrl: "/banners/banner-5.jpg", // Banner casa de oración 1200x630
      ctaText: "Únete a Oración",
      ctaAction: () => {
        const programTab = document.querySelector('[value="program"]') as HTMLElement;
        programTab?.click();
      }
    }
  ];

  const merchItems: MerchItem[] = [
    {
      id: 1,
      name: "Evangelio del Reino",
      price: 25000,
      image: "/merch/merch-1.jpg",
      description: "Camiseta oficial"
    },
    {
      id: 2,
      name: "Reino de Dios",
      price: 30000,
      image: "/merch/merch-2.jpg",
      description: "Hoodie premium"
    },
    {
      id: 3,
      name: "Conferencia 2025",
      price: 15000,
      image: "/merch/merch-3.jpg",
      description: "Gorra bordada"
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

  // Mostrar skeleton mientras carga
  if (isLoading) {
    return <CarouselSkeleton />;
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Hero Carousel with Swipe Support */}
      <Suspense fallback={<CarouselSkeleton />}>
        <Carousel
          plugins={[autoplayPlugin.current]}
          className="w-full max-w-4xl mx-auto mb-6"
          onMouseEnter={autoplayPlugin.current.stop}
          onMouseLeave={autoplayPlugin.current.reset}
        >
          <CarouselContent className="aspect-[1200/630]">
            {banners.map((banner) => (
              <CarouselItem key={banner.id} className="relative">
                <img 
                  src={banner.imageUrl}
                  alt={banner.title}
                  className="w-full h-full object-cover rounded-md shadow-lg"
                  loading="lazy"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </Suspense>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <button 
          onClick={() => {
            const programTab = document.querySelector('[value="program"]') as HTMLElement;
            programTab?.click();
          }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center space-x-2"
        >
          <Calendar className="w-5 h-5" />
          <span className="font-semibold">Ver Programa</span>
        </button>
        
        <button 
          onClick={() => {
            const mapTab = document.querySelector('[value="map"]') as HTMLElement;
            mapTab?.click();
          }}
          className="bg-gradient-to-r from-green-600 to-teal-600 text-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center space-x-2"
        >
          <MapPin className="w-5 h-5" />
          <span className="font-semibold">Ver Ubicaciones</span>
        </button>
        
        <a 
          href="https://www.youtube.com/@TOMATULUGAR/streams" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-red-600 to-pink-600 text-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center space-x-2"
        >
          <Play className="w-5 h-5" />
          <span className="font-semibold">Ver EN VIVO</span>
        </a>
      </div>

      {/* Merchandise Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center">
            <ShoppingBag className="w-6 h-6 mr-2 text-blue-600" />
            Merchandising Oficial
          </h2>
          <a 
            href="https://fint.app/funcionalidades/eventos" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 flex items-center text-sm font-medium"
          >
            Ver todo <ExternalLink className="w-4 h-4 ml-1" />
          </a>
        </div>
        
        {/* Horizontal Products Carousel - Mobile & Desktop */}
        <Suspense fallback={<div className="h-64 bg-gray-100 rounded-lg animate-pulse" />}>
          <Carousel
            opts={{
              align: "start",
              loop: false,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {merchItems.map((item) => (
                <CarouselItem key={item.id} className="pl-2 md:pl-4 basis-4/5 sm:basis-1/2 md:basis-1/3">
                  <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow h-full">
                    <div className="relative mb-3">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-40 md:h-32 object-cover rounded-md"
                        loading="lazy"
                      />
                      {/* Add to cart button overlay */}
                      <button className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-shadow">
                        <ShoppingBag className="w-4 h-4 text-gray-600" />
                      </button>
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold text-gray-800 text-sm md:text-base line-clamp-2">{item.name}</h3>
                      <p className="text-xs md:text-sm text-gray-600">{item.description}</p>
                      <p className="text-lg md:text-xl font-bold text-blue-600">
                        ${item.price.toLocaleString()}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-4" />
            <CarouselNext className="hidden md:flex -right-4" />
          </Carousel>
        </Suspense>

        {/* Ver más productos button */}
        <div className="mt-6 text-center">
          <a 
            href="https://fint.app/funcionalidades/eventos" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors w-full md:w-auto"
          >
            Ver más productos
            <ChevronRight className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>

      {/* Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-3">Información del Evento</h3>
          <ul className="space-y-2 text-gray-700">
            <li><strong>Fechas:</strong> Por confirmar</li>
            <li><strong>Horario:</strong> 8:00 AM - 6:00 PM</li>
            <li><strong>Modalidad:</strong> Presencial y Virtual</li>
            <li><strong>Idioma:</strong> Español</li>
          </ul>
        </div>
        
        <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-3">¿Qué Incluye?</h3>
          <ul className="space-y-2 text-gray-700">
            <li>✓ Acceso a todas las plenarias</li>
            <li>✓ Talleres especializados</li>
            <li>✓ Material de apoyo</li>
            <li>✓ Certificado de participación</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;