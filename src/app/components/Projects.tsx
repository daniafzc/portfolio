import React from "react";
import projects from "../data/projects.json";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col px-5 sm:px-10 md:px-20 lg:px-30 pt-16 sm:pt-20 md:pt-30 mb-20 sm:mb-40"
    >
      <h1 className="font-heading text-2xl md:text-4xl lg:text-5xl font-bold text-gray-100 tracking-wide pb-6 sm:pb-10 text-center">
        PROJECTS
      </h1>
      <div className="w-full sm:w-[90%] md:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 mt-8 sm:mt-12 md:mt-16">
        {projects.map((project, id) => (
          <ProjectCard key={id} project={project} />
        ))}
      </div>
    </section>
  );
}
