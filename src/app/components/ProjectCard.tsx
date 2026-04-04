import React from "react";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";

type Project = {
  title: string;
  imageSrc: string;
  description: string;
  skills: string[];
  source: string;
  event: string;
  year: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex flex-col">
      <div className="relative w-full h-[180px] sm:h-[220px] md:h-[260px]">
        <Image
          src={project.imageSrc}
          alt={`Image of ${project.title}`}
          fill
          className="rounded-lg object-cover"
        />
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <h1 className="text-base sm:text-lg md:text-xl font-semibold text-white">
          {project.title}
        </h1>
        <p className="text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-row justify-between items-center flex-wrap gap-2">
          <h2 className="p-1 my-2 font-medium text-white glass-text-bg w-max text-xs sm:text-sm">
            {project.skills.join(", ")}
          </h2>
          <a className="py-1 px-3 font-medium text-primary rounded-full flex items-center cursor-default text-xs sm:text-sm">
            View Details
            <MdArrowOutward className="inline ml-1 text-base sm:text-lg" />
          </a>
        </div>
      </div>
    </div>
  );
}
