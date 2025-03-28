import { motion, AnimatePresence } from "framer-motion";
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
        const productWidth = 465; // Asumimos que cada producto tiene un ancho de 300px, puedes ajustarlo
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
      const nextIndex = state + itemsPerSlide;
      return nextIndex < products.length ? nextIndex : 0; // Evita salir del índice
    });
  };

  const prevSlide = () => {
    setCurrentIndex((state) => {
      const prevIndex = state - itemsPerSlide;
      return prevIndex >= 0 ? prevIndex : products.length - itemsPerSlide; // Evita índices negativos
    });
  };

  return (
    <div className="w-screen flex flex-col items-center bg-gray-100 relative">
      <div className="text-4xl text-black font-bold">{title}</div>
      <div
        ref={carouselRef}
        className="w-full flex flex-row items-center justify-start overflow-hidden relative"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.2 }}
            className="w-full h-full flex flex-row justify-center"
          >
            {/* Renderiza los productos que caben en la pantalla */}
            {products
              .slice(currentIndex, currentIndex + itemsPerSlide)
              .map((product) => (
                <div key={product.prodId} className="flex-shrink-0 mx-2">
                  <Product product={product} />
                </div>
              ))}
          </motion.div>
        </AnimatePresence>
        
        {/* Botones Left y Right dentro del carrusel */}
        <div className="absolute left-10 top-3/7 transform -translate-y-1/2">
          <LeftArrowButton onClickFunctions={[prevSlide]} />
        </div>
        <div className="absolute right-10 top-3/7 transform -translate-y-1/2">
          <RightArrowButton onClickFunctions={[nextSlide]} />
        </div>
      </div>
    </div>
  );
};

export default ProductCarousel;
