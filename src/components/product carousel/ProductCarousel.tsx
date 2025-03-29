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

  // Ajusta el número de elementos visibles en función del tamaño de la pantalla
  useEffect(() => {
    const updateItemsPerSlide = () => {
      if (carouselRef.current) {
        const carouselWidth = carouselRef.current.offsetWidth;
        const productWidth = 465;
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
                <div key={products[circularIndex].prodId} className="flex-shrink-0 mx-2">
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
              className={`size-4 m-1 border-2 border-black rounded-full hover:cursor-pointer ${i === currentIndex ? "bg-black" : ""}`}
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
