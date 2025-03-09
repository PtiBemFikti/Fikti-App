"use client";
import Image from "next/image";
import React, { useState,useEffect } from "react";
import { motion } from "framer-motion";

interface ImgProps {
  image: string;
  isHovered: boolean;
}

const useDeviceDetect = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const hasMouse = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
      setIsDesktop(hasMouse);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  return isDesktop;
};

const DokumSlider: React.FC<ImgProps> = ({ image, isHovered }) => {
  const [imgWidth, setImgWidth] = useState<number>(250);
  const isDesktop = useDeviceDetect();

  return (
    <motion.div
      className="relative overflow-hidden rounded-xl bg-slate-400"
      style={{ height: "250px", width: `${imgWidth}px` }}
      animate={{ opacity: isHovered ? 1 : 0.2 }}
      transition={{ duration: 0.3 }}
      whileHover={isDesktop ? { 
        scale: 1.2, 
        boxShadow: "0px 5px 15px rgba(255, 255, 255, 0.2)" 
      } : undefined}
      initial={false}
    >
      <Image
        src={image}
        alt={image}
        quality={75}
        loading="lazy"
        onLoadingComplete={({ naturalWidth, naturalHeight }) => {
          const calculatedWidth = (naturalWidth / naturalHeight) * 250;
          setImgWidth(calculatedWidth);
        }}
        width={imgWidth}
        height={250}
        style={{ objectFit: "cover" }}
      />
    </motion.div>
  );
};

export default DokumSlider;
