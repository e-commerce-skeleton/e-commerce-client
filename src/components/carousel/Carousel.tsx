import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface CarouselProps {
  images: string[];
}

const Carousel = ({ images }: CarouselProps) => {
  const [slideActual, setSlideActual] = useState<number>(0);

  const nextSlide = () => {
    setSlideActual((state) => (state + 1) % images.length);
  };

  const prevSlide = () => {
    setSlideActual((state) => (state - 1 + images.length) % images.length);
  };

  return (
    <div className="w-full flex flex-row items-center justify-center">
      <button onClick={prevSlide}>prev</button>
      <div className="">
        <AnimatePresence mode="wait">
          <motion.div
            key={slideActual}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.2 }}
            className="w-full h-full flex items-center justify-center"
          >
            <img
              src={images[slideActual]}
              alt="carousel slide"
              className="w-full h-full"
            />
          </motion.div>
        </AnimatePresence>
      </div>
      <button onClick={nextSlide}>next</button>
    </div>
  );
};

export default Carousel;
