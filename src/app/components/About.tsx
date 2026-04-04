import React from "react";
import Image from "next/image";
import { BiDownload } from "react-icons/bi";
import { IoMdCode } from "react-icons/io";

const About = () => {
  return (
    <div className="relative h-full py-12 sm:py-16 mx-4 sm:m-10 rounded-3xl sm:rounded-4xl text-white items-center card">
      <div className="w-[90%] sm:w-[85%] mx-auto grid grid-cols-1 md:grid-cols-[55%_40%] gap-8 my-6 sm:my-10">
        {/* image — shown first on mobile, hidden on md+ (reappears on right) */}
        <div className="relative w-[200px] h-[260px] sm:w-[240px] sm:h-[320px] mx-auto md:hidden">
          <Image
            src="/pp1.jpg"
            alt="pfp"
            fill
            className="object-cover rounded-2xl shadow-lg shadow-pink-500/50"
          />
        </div>

        {/* left side */}
        <div className="text-left">
          <div className="w-30 py-1 bg-gray-700 text-center rounded-full mb-6 sm:mb-10">
            <h2 className="text-sm sm:text-medium text-gray-300">ABOUT ME</h2>
          </div>

          <h1 className="text-left text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide">
            <span className="font-heading font-black bg-transparent text-transparent bg-gradient-to-r from-foreground to-primary bg-clip-text">
              Hello, I'm
            </span>{" "}
            <br /> Dania Hafiza
          </h1>

          <p className="text-justify pt-4 sm:pt-6 text-base sm:text-lg md:text-xl tracking-wide leading-relaxed">
            A Computer Science student at Universitas Gadjah Mada and a Junior
            Frontend Developer. I build modern web applications using Next.js,
            TypeScript, and Tailwind CSS, focusing on responsive and scalable
            interfaces. I also have a growing interest in AI and machine
            learning to enhance web experiences.
          </p>

          <div className="flex flex-row flex-wrap gap-3 sm:gap-4 mt-5 sm:mt-6">
            <div className="px-5 sm:px-6 py-2 sm:py-2.5 text-sm sm:text-md cursor-pointer rounded-full bg-primary hover:bg-blue-900 transition-all duration-300 text-white flex items-center space-x-2">
              <BiDownload className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Download CV</span>
            </div>
            <div className="px-5 sm:px-6 py-2 sm:py-2.5 text-sm sm:text-md cursor-pointer rounded-full border border-gray-800 bg-gray-800/80 hover:bg-blue-900 transition-all duration-300 text-white flex items-center space-x-2">
              <IoMdCode className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>View Projects</span>
            </div>
          </div>
        </div>

        {/* image — right side on md+ */}
        <div className="relative hidden md:block w-[300px] h-[400px] ml-auto">
          <Image
            src="/pp1.jpg"
            alt="pfp"
            fill
            className="object-cover rounded-3xl shadow-lg shadow-pink-500/50"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
