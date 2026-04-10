"use client";
import React from "react";
import { BiLogoTypescript } from "react-icons/bi";
import { FaJsSquare, FaPython, FaReact } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import Tilt from "react-parallax-tilt";

const skills = [
  { name: "JavaScript", icon: <FaJsSquare /> },
  { name: "TypeScript", icon: <BiLogoTypescript /> },
  { name: "React", icon: <FaReact /> },
  { name: "NextJS", icon: <RiNextjsFill /> },
  { name: "TailwindCSS", icon: <RiTailwindCssFill /> },
  { name: "Python", icon: <FaPython /> },
];

const Skills = () => {
  return (
    <div
      id="skills"
      className="relative h-full flex items-center justify-center overflow-hidden px-4"
    >
      <div className="relative z-10 flex flex-col items-center gap-2 w-full">
        <h1
          data-aos="fade-up"
          data-aos-delay="400"
          className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground pb-2 sm:pb-2 text-center"
        >
          Skills
        </h1>

        <div className="w-full overflow-x-auto scrollbar-hide py-3 mb-30">
          <div className="flex flex-row gap-3 sm:gap-6 w-max mx-auto px-4">
            {skills.map((skill) => (
              <Tilt key={skill.name} scale={1.1} transitionSpeed={400}>
                <div className="text-center flex border border-sky-200 bg-sky-50/80 rounded-full px-3 sm:px-4 py-2 items-center justify-center shadow-sm transition hover:bg-secondary hover:border-secondary hover:scale-100">
                  <div className="text-lg sm:text-sm font-light flex flex-row gap-2 sm:gap-4 text-foreground items-center whitespace-nowrap">
                    {skill.icon} {skill.name}
                  </div>
                </div>
              </Tilt>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
