"use client";

import { useState } from "react";
import { MonumentExtendedRegular } from "@/styles/font";
import Modal from "./components/ProjectModal";
import { FaInfo } from "react-icons/fa";
import projects from "./components/ProjectsData";
import Image from "next/image";
import { IoClose } from "react-icons/io5";

type Division = {
  name: string;
  description: string;
};

type Project = {
  title: string;
  subtitle: string;
  description: string;
  divisions: Division[];
  logo: string;
};

export default function ProjectList() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section
      id="project-list"
      className="w-full h-[80vh] flex flex-col justify-center pt-24 max-md:h-fit"
    >
      <div className="text-center mb-12">
        <h1
          className={`${MonumentExtendedRegular.className} text-[4rem] max-md:text-[2.2rem] font-bold leading-tight`}
        >
          <span className="bg-gradient-to-r from-[#20202C] via-[#377DFF] to-[#49E0A2] bg-clip-text text-transparent">
            PROJECT LIST
          </span>
        </h1>
      </div>
      <div className="max-md:overflow-x-auto max-md:whitespace-nowrap px-8 md:px-16 max-md:px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 max-md:flex max-md:w-max gap-8 max-md:gap-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative bg-[#111827] rounded-lg mt-20 h-[350px] max-md:w-[350px] pt-20 pb-6 px-6 shadow-lg text-center flex flex-col justify-center items-center"
            >
              <div className="absolute border-[10px] border-[#FFFFF4] -top-24 left-1/2 transform -translate-x-1/2 w-[200px] h-[200px] rounded-full bg-gray-300 flex items-center justify-center">
                <div className="w-44 h-44 rounded-full bg-white flex items-center justify-center shadow-lg">
                  <Image
                    src={project.logo}
                    alt={`${project.title} Logo`}
                    width={176}
                    height={176}
                    className="rounded-full aspect-square object-cover"
                  />
                </div>
              </div>
              <h2 className="text-white text-2xl font-bold mt-6">
                {project.title}
              </h2>
              <p className="text-white text-lg">{project.subtitle}</p>
              <button
                className="mt-4 flex items-center justify-center gap-2 px-6 py-3 bg-[#10B981] hover:bg-[#059669] transition-all duration-300 hover:shadow-[0px_0px_8px_2px] hover:shadow-[#10B981] text-white font-semibold rounded-lg"
                onClick={() => openModal(project)}
              >
                <FaInfo
                  className="bg-white fill-[#10B981] p-1 rounded-full"
                  size={25}
                />
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && selectedProject && (
        <Modal>
          <button
            onClick={closeModal}
            className="self-end text-[#111827] bg-gray-400 hover:bg-gray-500 rounded-full p-2 shadow-md transition-colors mt-8"
          >
            <IoClose />
          </button>
          <div className="w-44 h-44 rounded-full bg-white flex items-center justify-center shadow-lg">
            <Image
              src={selectedProject.logo}
              alt={`${selectedProject.title} Logo`}
              width={176}
              height={176}
              className="rounded-full object-cover"
            />
          </div>

          {/* Judul dan Subtitle */}
          <h2 className="text-[2.5rem] font-bold text-white mb-2 max-md:text-[2rem]">
            {selectedProject.title}
          </h2>
          <h3 className="text-xl font-medium text-gray-300 mb-4">
            {selectedProject.subtitle}
          </h3>

          <p className="text-gray-300 text-2xl mb-6 max-md:text-xl">
            {selectedProject.description}
          </p>

          {/* Divisi */}
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-[2rem] max-md:text-[1.75rem] font-semibold text-white mb-8">
              Divisi yang tersedia pada {selectedProject.title}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {selectedProject.divisions.map((division, index) => (
                <div
                  key={index}
                  className="p-4 bg-gray-700 rounded-md shadow-md hover:bg-gray-600 transition-colors"
                >
                  <h4 className="text-2xl max-md:text-xl font-semibold text-white mb-2">
                    {division.name}
                  </h4>
                  <p className="text-gray-300 text-xl max-md:text-base">
                    {division.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
}
