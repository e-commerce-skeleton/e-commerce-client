import { useState, useEffect, useRef } from "react";
import Product from "../product/Product";
import { LeftArrowButton, RightArrowButton } from "../buttons/ArrowButtons";

interface ProductProps {
  prodId: string;
  catId: string;
  imgUrl: string;
  altText: string;
  name: string;
  currentPrice: number;
  prevPrice?: number | null;
  paymentMethod: string | null;
  detail?: string | null;
}

interface ProductCarouselProps {
  products: ProductProps[];
  title: string;
}

const ProductCarousel = ({ products, title }: ProductCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [itemsPerSlide, setItemsPerSlide] = useState<number>(1);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateItemsPerSlide = () => {
      if (carouselRef.current) {
        const carouselWidth = carouselRef.current.offsetWidth;

        // Detecta el tamaño de la pantalla para aplicar un tamaño diferente dependiendo del punto de interrupción
        let productWidth: number;
      
        if (carouselWidth >= 1536) { // 2xl (pantallas grandes de escritorio, 1536px)
          productWidth = 465;
        } else if (carouselWidth >= 1280) { // xl (pantallas de escritorio medianas, 1280px)
          productWidth = 370;
        } else if (carouselWidth >= 1024) { // lg (pantallas de tabletas en paisaje, 1024px)
          productWidth = 290;
        } else if (carouselWidth >= 768) { // md (tabletas en retrato, 768px)
          productWidth = 250;
        } else if (carouselWidth >= 640) { // sm (smartphones, 640px)
          productWidth = 190;
        } else { // xs (dispositivos más pequeños, 640px)
          productWidth = 157;
        }

        setItemsPerSlide(Math.floor(carouselWidth / productWidth)); // Calcula cuántos productos caben sin ser fraccionados
      }
    };

    window.addEventListener("resize", updateItemsPerSlide);
    updateItemsPerSlide(); // Llamada inicial para establecer el número de elementos visibles

    return () => {
      window.removeEventListener("resize", updateItemsPerSlide);
    };
  }, []);

  const nextSlide = () => {
    setCurrentIndex((state) => {
      const nextIndex = (state + 1) % products.length; // Uso del operador módulo para hacerlo circular
      return nextIndex;
    });
  };
  
  const prevSlide = () => {
    setCurrentIndex((state) => {
      const prevIndex = (state - 1 + products.length) % products.length; // Uso del operador módulo para hacerlo circular
      return prevIndex;
    });
  };

  return (
    <div className="w-screen flex flex-col items-center bg-gray-100 relative">
      {/* Título */}
      <div className="text-4xl text-black font-bold mb-4">{title}</div>
      
      {/* Carrusel de Productos */}
      <div
        ref={carouselRef}
        className="w-full flex flex-row items-center justify-start overflow-hidden relative"
      >
        <div className="w-full h-full flex flex-row justify-center">
          {products
            .map((_product, index) => {
              const circularIndex = (currentIndex + index) % products.length;
              return (
                <div key={products[circularIndex].prodId} className="flex-shrink-0 mx-1">
                  <Product product={products[circularIndex]} />
                </div>
              );
            })
            .slice(0, itemsPerSlide)}
        </div>
  
        {/* BUTTON LEFT */}
        <div className="absolute left-10 top-3/7 transform -translate-y-1/2">
          <LeftArrowButton onClickFunctions={[prevSlide]} />
        </div>
        
        {/* BUTTON RIGHT */}
        <div className="absolute right-10 top-3/7 transform -translate-y-1/2">
          <RightArrowButton onClickFunctions={[nextSlide]} />
        </div>
      </div>
  
      {/* INDEX MARKERS */}
      <div className="flex flex-row items-center justify-center mt-4 space-x-2">
        {products.map((_, i) => {
          return (
            <div
              className={`size-2 sm:size-3 lg:size-4 m-1 border-2 border-black rounded-full hover:cursor-pointer ${i === currentIndex ? "bg-black" : ""}`}
              onClick={() => setCurrentIndex(i)}
              key={i}
            />
          );
        })}
      </div>
    </div>
  );
  
  
};

export default ProductCarousel;
