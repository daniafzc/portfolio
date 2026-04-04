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
    <div className="flex flex-col group">
      <div className="relative w-full h-[220px] sm:h-[280px] md:h-[320px]">
        <Image
          src={project.imageSrc}
          alt={`Image of ${project.title}`}
          fill
          className="rounded-xl object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <h1 className="text-xl sm:text-2xl font-semibold text-[#1a2744]">
          {project.title}
        </h1>
        <p className="text-[#3a6080] text-sm sm:text-base md:text-lg leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-row justify-between items-center flex-wrap gap-2 mt-1">
          <h2 className="p-1 my-2 font-medium text-[#1a2744] glass-text-bg w-max text-sm sm:text-base">
            {project.skills.join(", ")}
          </h2>
          <a className="py-1.5 px-4 font-medium text-[#3a9fd6] rounded-full flex items-center cursor-default text-sm sm:text-base hover:text-[#2a8fc6] transition-colors duration-200">
            View Details
            <MdArrowOutward className="inline ml-1 text-lg sm:text-xl" />
          </a>
        </div>
      </div>
    </div>
  );
}
