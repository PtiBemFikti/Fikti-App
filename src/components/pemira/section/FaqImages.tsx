"use client";

import { useState } from "react";
import Image from "next/image";
export type FaqImage = {
  src: string;
  alt: string;
  caption: string;
};

export default function FaqImages({ images }: { images: FaqImage[] }) {
  const [loadedImages, setLoadedImages] = useState<boolean[]>(
    Array(images.length).fill(false)
  );

  const handleImageLoad = (index: number) => {
    setLoadedImages((prev) => {
      const newLoaded = [...prev];
      newLoaded[index] = true;
      return newLoaded;
    });
  };

  const handleImageError = (index: number) => {
    setLoadedImages((prev) => {
      const newLoaded = [...prev];
      newLoaded[index] = false;
      return newLoaded;
    });
  };

  return (
    <div className="grid grid-cols-1 gap-10 mt-6 lg:grid-cols-2 lg:gap-12">
      {images.map((image, index) => (
        <div key={index} className="flex flex-col group">
          <div className="relative overflow-hidden bg-white rounded-xl shadow-md transition-all duration-300 group-hover:shadow-lg">
            <div className="relative aspect-[4/2] w-full">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                onLoadingComplete={() => handleImageLoad(index)}
                onError={() => handleImageError(index)}
                priority={index < 2}
              />
              {!loadedImages[index] && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
                  <span className="text-gray-400 text-sm">
                    Memuat gambar...
                  </span>
                </div>
              )}
            </div>
          </div>

          <div className="px-2 py-3 text-center">
            <p className="text-sm font-medium text-[#19554B] md:text-base leading-tight">
              {image.caption}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
