"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { MonumentExtendedBold } from "@/styles/font";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";

const dummyEvents = Array.from({ length: 8 }).map((_, i) => ({
  id: i,
  title: `Event ${i + 1}`,
  description: `Deskripsi singkat event ${i + 1}.`,
  image: "/main/hero-bg.jpg",
}));

export default function UpcomingEventSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToIndex = (index: number) => {
    if (containerRef.current && itemRef.current) {
      const itemWidth = itemRef.current.offsetWidth + 24;
      containerRef.current.scrollTo({
        left: itemWidth * index,
        behavior: "smooth",
      });
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      scrollToIndex(newIndex);
    }
  };

  const handleNext = () => {
    if (currentIndex < dummyEvents.length - 1) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      scrollToIndex(newIndex);
    }
  };

  return (
    <section className="py-16 w-full bg-cream-fikti">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={`${MonumentExtendedBold.className} text-left text-3xl md:text-4xl lg:text-6xl mb-6 lg:text-[3rem] text-dark-green-fikti`}
        >
          Event Yang Akan Datang
        </motion.h2>

        {/* Tombol */}
        <motion.div
          className="flex justify-end mb-4 gap-2"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <motion.button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            className="bg-dark-green-fikti text-white px-4 py-2 rounded-md hover:bg-green-800 transition disabled:opacity-50"
          >
            <IoIosArrowBack />
          </motion.button>
          <motion.button
            onClick={handleNext}
            disabled={currentIndex === dummyEvents.length - 1}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            className="bg-dark-green-fikti text-white px-4 py-2 rounded-md hover:bg-green-800 transition disabled:opacity-50"
          >
            <IoIosArrowForward />
          </motion.button>
        </motion.div>

        {/* Slider */}
        <div className="overflow-x-auto scrollbar-hide" ref={containerRef}>
          <div className="flex gap-6 snap-x snap-mandatory px-1 md:px-0 h-fit w-fit">
            {dummyEvents.map((event, i) => (
              <motion.div
                key={event.id}
                ref={i === 0 ? itemRef : null}
                className="flex-shrink-0 snap-start w-[380px] md:w-[600px]"
                initial={{ opacity: 0, y: 30 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: i * 0.1 }}
              >
                <div className="flex flex-col gap-2 text-dark-green-fikti">
                  <Image
                    src={event.image}
                    alt={`upcoming-event-${event.id}`}
                    width={900}
                    height={900}
                    loading="lazy"
                    className="aspect-video object-cover rounded-[50px]"
                  />
                  <h3
                    className={`${MonumentExtendedBold.className} text-xl font-bold`}
                  >
                    {event.title}
                  </h3>
                  <p className="text-sm">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
