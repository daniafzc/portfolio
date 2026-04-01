import React from "react";
import Image from "next/image";
import { BiDownload } from "react-icons/bi";
import { IoMdCode } from "react-icons/io";

const About = () => {
  return (
    <div className="pt-16 pb-16 text-white items-center">
      <h1 className="text-center text-2xl md:text-4xl lg:text-5xl font-bold">
        <span className="text-pink-400">About</span> Me
      </h1>
      <div className="w-[90%] md:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-1 mt-16">
        {/* left side */}
        <div>
          <h1 className="text-left mx-auto px-4 pt-6 text-2xl md:text-4xl lg:text-5xl font-bold tracking-wide">
            <span className="text-pink-400">Hello, I'm</span> <br /> Dania
            Hafiza
          </h1>
          <p className="text-justify mx-auto px-4 pt-6 text-xl tracking-wide">
            A Computer Science student at Universitas Gadjah Mada and a Junior
            Frontend Developer. I build modern web applications using Next.js,
            TypeScript, and Tailwind CSS, focusing on responsive and scalable
            interfaces. I also have a growing interest in AI and machine
            learning to enhance web experiences.
          </p>
          {/* CV button */}
          <div className="flex flex-col-1 gap-4 px-4">
            <div className="px-6 py-2.5 max-w-50 mt-6 text-md cursor-pointer rounded-lg bg-pink-600 hover:bg-blue-900 transition-all duration-300 text-white flex items-center space-x-2">
              <BiDownload className="w-5 h-5" />
              <span>Download CV</span>
            </div>
            {/* Projects Button */}
            <div className="px-6 py-2.5 max-w-50 mt-6 text-md cursor-pointer rounded-lg bg-black hover:bg-blue-900 border-1 border-pink-400 transition-all duration-300 text-white flex items-center space-x-2">
              <IoMdCode className="w-5 h-5" />
              <span>View Projects</span>
            </div>
          </div>
        </div>

        {/* pict right */}
        <div className="relative w-[270px] h-[270px] items-center m-auto ">
          <Image
            src="/profile.jpg"
            alt="pfp"
            fill
            className="object-cover rounded-full shadow-lg shadow-pink-500/50"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
