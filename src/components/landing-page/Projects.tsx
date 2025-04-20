"use client";

import React from "react";
import Image from "next/image";
import projects from "@/app/oprec-volunteer/sections/components/ProjectsData";
import { MonumentExtendedBold } from "@/styles/font";
import { motion } from "framer-motion";

export default function ProjekKamiSection() {
  return (
    <section className="py-16 w-full container mx-auto px-4 sm:px-6 lg:px-20 bg-cream-fikti">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={`${MonumentExtendedBold.className} text-left text-3xl md:text-6xl mb-6 lg:text-[3rem] text-dark-green-fikti`}
      >
        Proyek Unggulan
      </motion.h2>

      {/* Projects Grid */}
      <div className="overflow-x-auto scrollbar-hide overflow-y-hidden h-fit pb-4">
        <div className="flex gap-6 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-8 w-max  md:w-full">
          {projects.map((project, index) => (
            <motion.article
              key={index}
              className="w-[300px] relative bg-white/20 rounded-xl md:w-full p-6 shadow-lg text-center flex flex-col justify-center items-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.15 }}
            >
              {/* Project Logo */}
              <div className="flex justify-center mb-8 group-hover:mb-4 transition-all duration-500">
                <div className="w-36 h-36 md:w-44 md:h-44 rounded-full bg-white flex items-center justify-center shadow-lg">
                  <Image
                    src={project.logo}
                    alt={`${project.title} Logo`}
                    width={200}
                    height={200}
                    className="rounded-full object-contain w-3/4 h-3/4"
                    priority={index < 4}
                  />
                </div>
              </div>

              {/* Project Content */}
              <div className="text-center">
                <h3 className="text-dark-green-fikti text-xl md:text-2xl font-bold mb-2">
                  {project.title}
                </h3>
                <p className="text-dark-green-fikti text-sm md:text-base">
                  {project.shortDescription}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
