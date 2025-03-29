import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import Spinner from "../spinner/Spinner";

interface CarouselProps {
  images: string[];
}

const useIsLargeScreen = () => {
  const [isLarge, setIsLarge] = useState(window.innerWidth >= 1024); // 1024px = lg in Tailwind

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const updateSize = () => setIsLarge(mediaQuery.matches);

    mediaQuery.addEventListener("change", updateSize);
    return () => mediaQuery.removeEventListener("change", updateSize);
  }, []);

  return isLarge;
};

const Carousel = ({ images }: CarouselProps) => {
  const isLargeScreen = useIsLargeScreen();
  const [actualSlide, setActualSlide] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const intervalTime = 5000; // 5 seconds

  useEffect(() => {
    if (!loading) {
      const interval = setInterval(nextSlide, intervalTime);
      return () => clearInterval(interval);
    }
  }, [actualSlide, loading]);

  const nextSlide = () => setActualSlide((prev) => (prev + 1) % images.length);

  const prevSlide = () =>
    setActualSlide((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="w-full h-200 relative overflow-hidden flex flex-row bg-gray-200 items-center justify-center">
      <AnimatePresence initial={false} mode="wait">
        <motion.img
          transition={{ duration: 0.1, ease: "easeIn" }}
          onLoad={() => setLoading(false)}
          className={`w-full object-cover ${loading ? "hidden" : "block"}`}
          src={images[actualSlide]}
          key={images[actualSlide]}
          alt=""
        />
      </AnimatePresence>
      {/*SPINNER WHILE LOADING*/}
      {loading && (
        <div className="w-full h-full flex items-center justify-center">
          <Spinner />
        </div>
      )}

      {isLargeScreen && (
        <>
          {/*ARROW RIGHT*/}
          <button
            onClick={nextSlide}
            className="flex group hover:cursor-pointer items-center justify-center absolute top-1/2 right-0 m-4 rounded-full bg-white size-10"
          >
            <div className="-rotate-z-135 -translate-x-1 group-hover:translate-x-0 border-b-4 border-l-4 border-black size-5 transition-all" />
          </button>
          {/*ARROW LEFT*/}
          <button
            onClick={prevSlide}
            className="flex group hover:cursor-pointer items-center justify-center absolute top-1/2 left-0 m-4 rounded-full bg-white size-10"
          >
            <div className="rotate-z-45 translate-x-1 group-hover:translate-x-0 border-b-4 border-l-4 border-black size-5 transition-all" />
          </button>
          {/*INDEX MARKERS*/}
          <div className="absolute mb-2 bottom-0 left-0 right-0 flex flex-row items-center justify-center">
            {Array.from({ length: images.length }, (_, i) => {
              return (
                <div
                  className={`size-4 m-1 border-2 border-black rounded-full hover:cursor-pointer ${i == actualSlide ? "bg-black" : ""}`}
                  onClick={() => setActualSlide(i)}
                  key={i}
                />
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};
export default Carousel;
