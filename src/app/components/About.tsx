import React from "react";
import Image from "next/image";
import { BiDownload } from "react-icons/bi";
import { IoMdCode } from "react-icons/io";
import Link from "next/link";

const About = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay="400"
      id="about"
      className="relative h-full py-12 sm:py-16 mx-4 sm:m-10 rounded-3xl sm:rounded-4xl text-[#1a2744] items-center card"
    >
      <div className="w-[90%] sm:w-[85%] mx-auto grid grid-cols-1 md:grid-cols-[55%_40%] gap-8 my-6 sm:my-10">
        {/* image — shown first on mobile */}
        <div className="relative w-[200px] h-[260px] sm:w-[240px] sm:h-[320px] mx-auto md:hidden">
          <Image
            src="/pp1.webp"
            alt="pfp"
            fill
            className="object-cover rounded-2xl shadow-lg shadow-sky-300/50"
          />
        </div>

        {/* left side */}
        <div className="text-left">
          <div className="w-30 py-1 bg-sky-100 border border-sky-200 text-center rounded-full mb-6 sm:mb-10">
            <h2 className="text-sm sm:text-medium text-[#3a6080]">ABOUT ME</h2>
          </div>

          <h1 className="text-left text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide text-[#1a2744]">
            <span className="font-heading font-black bg-transparent text-transparent bg-gradient-to-r from-[#3a9fd6] to-[#1a2744] bg-clip-text">
              Hello, I'm
            </span>{" "}
            <br /> Dania Hafiza
          </h1>

          <p className="text-justify pt-4 sm:pt-6 text-lg sm:text-xl md:text-2xl tracking-wide leading-relaxed text-[#2a4060]">
            A Computer Science student at Universitas Gadjah Mada and a Junior
            Frontend Developer. I build modern web applications using Next.js,
            TypeScript, and Tailwind CSS, focusing on responsive and scalable
            interfaces. I also have a growing interest in AI and machine
            learning to enhance web experiences.
          </p>

          <div className="flex flex-row flex-wrap gap-3 sm:gap-4 mt-5 sm:mt-6">
            <Link
              href="/cv.pdf"
              download
              className="px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg cursor-pointer rounded-full bg-[#3a9fd6] hover:bg-[#2a8fc6] transition-all duration-300 text-white flex items-center space-x-2 shadow-md shadow-sky-300/40"
            >
              <BiDownload className="w-5 h-5 sm:w-6 sm:h-6" />
              <span>Download CV</span>
            </Link>
            <Link
              href="#projects"
              className="px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg cursor-pointer rounded-full border border-sky-200 bg-sky-50 hover:bg-[#FFD301] hover:border-[#FFD301] transition-all duration-300 text-[#1a2744] flex items-center space-x-2"
            >
              <IoMdCode className="w-5 h-5 sm:w-6 sm:h-6" />
              <span>View Projects</span>
            </Link>
          </div>
        </div>

        {/* image — right side on md+ */}
        <div className="relative hidden md:block w-[300px] h-[400px] ml-auto">
          <Image
            src="/pp1.jpg"
            alt="pfp"
            fill
            className="object-cover rounded-3xl shadow-lg shadow-sky-300/50"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
