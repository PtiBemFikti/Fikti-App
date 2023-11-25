import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = ["/slide1.png", "/slide2.png", "/slide3.png"];

const Slider: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const directionRef = useRef<number>(1);

  useEffect(() => {
    const interval = setInterval(() => {
      directionRef.current = 1;
      setCurrentImage((prev) => (prev + directionRef.current) % images.length);
    }, 9000);
    return () => clearInterval(interval);
  }, []);

  const handleClick = (direction: number) => {
    directionRef.current = direction;
    setCurrentImage(
      (prev) => (prev + directionRef.current + images.length) % images.length
    );
  };

  return (
    <div className="relative overflow-hidden w-full h-screen">
      <AnimatePresence exitBeforeEnter={false} onExitComplete={() => null}>
        <motion.img
          key={currentImage}
          src={images[currentImage]}
          initial={{
            opacity: 0,
            x: directionRef.current > 0 ? "100%" : "-100%",
          }}
          animate={{ opacity: 1, x: 0 }}
          exit={{
            opacity: 0,
            x: directionRef.current > 0 ? "-100%" : "100%",
          }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full object-cover"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </AnimatePresence>
      <motion.button
        onClick={() => handleClick(-1)}
        whileTap={{ scale: 0.8 }}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10"
      >
        &#10094;
      </motion.button>
      <motion.button
        onClick={() => handleClick(1)}
        whileTap={{ scale: 0.8 }}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10"
      >
        &#10095;
      </motion.button>
    </div>
  );
};

export default Slider;
