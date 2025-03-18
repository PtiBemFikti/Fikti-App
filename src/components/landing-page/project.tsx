"use client";

import React from "react";
import Image from "next/image";
import projects from "@/app/oprec-volunteer/sections/components/ProjectsData";

export default function ProjekKamiSection() {
  return (
    <div className="px-4 md:px-16 py-8 w-full h-fit section-about">
      <div className="flex flex-col items-center justify-center px-6">
        {/* Title */}
        <h1 className="relative text-[4rem] max-md:text-[3rem] mb-20 font-bold text-center text-white drop-shadow-lg">
          Proyek Kami
          <span className="absolute bottom-[-5px] left-1/2 transform -translate-x-1/2 h-1 w-[80%] bg-purple-500 rounded-md" />
        </h1>
      </div>

      {/* Container yang bisa di-scroll hanya di mobile */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 md:grid md:grid-cols-4 md:grid-rows-2 md:gap-8 w-max md:w-full">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white/20 rounded-lg h-[320px] w-[280px] md:h-[350px] md:w-auto p-6 shadow-lg text-center flex flex-col justify-center items-center transition-all duration-300 hover:bg-white/30"
            >
              {/* Logo */}
              <div className="absolute top-0 left-0 right-0 flex justify-center transition-transform duration-500 group-hover:translate-y-10">
                <div className="w-36 h-36 md:w-44 md:h-44 rounded-full bg-white flex items-center justify-center shadow-lg transition-all duration-300 translate-y-10 group-hover:-translate-y-[130%]">
                  <Image
                    src={project.logo}
                    alt={`${project.title} Logo`}
                    width={800}
                    height={800}
                    className="rounded-full aspect-square object-cover w-full h-full"
                  />
                </div>
              </div>

              {/* Title & Description */}
              <h2 className="text-white text-xl md:text-2xl font-bold mt-4 md:mt-6 translate-y-24 transition-all duration-500 group-hover:-translate-y-6">
                {project.title}
              </h2>
              <p className="text-white text-sm md:text-lg  transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                {project.shortDescription}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
