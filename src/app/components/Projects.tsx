import React from "react";
import projects from "../data/projects.json";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section
      data-aos="fade-up"
      data-aos-delay="400"
      id="projects"
      className="min-h-screen flex flex-col px-6 sm:px-12 md:px-20 lg:px-32 pt-20 sm:pt-28 md:pt-36 mb-24 sm:mb-48"
    >
      <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a2744] pb-2 sm:pb-4 text-center">
        PROJECTS
      </h1>
      <p className="text-center text-[#3a6080] text-base sm:text-lg mb-12 sm:mb-16">
        A selection of things I've built
      </p>
      <div className="w-full sm:w-[95%] md:w-[88%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 md:gap-16">
        {projects.map((project, id) => (
          <ProjectCard key={id} project={project} />
        ))}
      </div>
    </section>
  );
}
