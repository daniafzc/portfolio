"use client";
import React from "react";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center text-white overflow-hidden">
      <div className="relative z-10 flex flex-col items-center">
        <h1
          data-aos="fade-up"
          data-aos-delay="400"
          className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl mt-6 text-center font-bold tracking-wide"
        >
          Welcome to <br /> <span className="text-cyan-200">Dani's</span>{" "}
          Portfolio
        </h1>
        <h2 className="mt-5 text-sm px-2 text-center sm:text-2xl font-medium flex items-center">
          Always eager to learn! - As
          <span className="text-cyan-200 font-bold font-heading">
            <Typewriter
              options={{
                strings: [
                  "Frontend Developer",
                  "Web Developer",
                  "AI Developer",
                ],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
                wrapperClassName: "pl-2",
              }}
            />
          </span>
        </h2>
      </div>
    </div>
  );
};

export default Hero;
