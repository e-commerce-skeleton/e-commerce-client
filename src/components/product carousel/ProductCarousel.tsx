import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Product from "../product/Product";

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
        // Suponiendo que cada producto tenga un ancho de 300px (ajustar según el diseño)
        setItemsPerSlide(Math.floor(carouselWidth / 300));
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
    <div className="w-full flex flex-col items-center bg-gray-50">
      <h2 className="text-3xl text-black font-bold">{title}</h2>
        <div ref={carouselRef} className="w-full max-w-5xl p-2 flex flex-row items-center justify-center overflow-hidden">
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
              {products.slice(currentIndex, currentIndex + itemsPerSlide).map((product) => (
                <div key={product.prodId} className="flex-shrink-0 mx-2">
                  <Product product={product} />
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex flex-row">
          <button onClick={prevSlide}>prev</button>
          <button onClick={nextSlide}>next</button>
        </div>
      </div>
  );
};

export default ProductCarousel;
