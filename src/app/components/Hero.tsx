"use client";
import React from "react";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <div
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden px-4"
    >
      <div className="relative z-10 flex flex-col items-center">
        <h1
          data-aos="fade-up"
          data-aos-delay="400"
          className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl my-4 sm:my-6 text-center font-extrabold leading-tight sm:leading-[1.15] text-[#1a2744]"
        >
          Welcome to <br />
          <span className="text-transparent bg-gradient-to-r from-[#1a2744] to-[#FFD301] bg-clip-text font-heading">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Dani's Portfolio")
                  .pauseFor(2000)
                  .deleteAll()
                  .start();
              }}
              options={{
                loop: true,
                delay: 100,
                deleteSpeed: 80,
                cursor: "|",
                wrapperClassName:
                  "bg-gradient-to-r from-[#1a2744] to-[#1a2744] bg-clip-text text-transparent",
              }}
            />
          </span>
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="600"
          className="text-sm sm:text-base md:text-lg font-light text-center px-2 text-[#3a6080]"
        >
          CS Student • Frontend Developer • AI/ML Enthusiast
        </p>
      </div>
    </div>
  );
};

export default Hero;
