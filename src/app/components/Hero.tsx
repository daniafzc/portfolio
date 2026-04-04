"use client";
import React from "react";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center text-white overflow-hidden px-4">
      <div className="relative z-10 flex flex-col items-center">
        <h1
          data-aos="fade-up"
          data-aos-delay="400"
          className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl my-4 sm:my-6 text-center font-extrabold leading-tight sm:leading-[1.15]"
        >
          Welcome to <br />
          <span className="text-transparent bg-gradient-to-r from-foreground to-primary bg-clip-text font-heading">
            <Typewriter
              options={{
                strings: ["Dani's Portfolio"],
                autoStart: true,
                loop: true,
                delay: 100,
                deleteSpeed: 80,
                pauseFor: 2000,
                cursor: "|",
                wrapperClassName:
                  "bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent",
              }}
            />
          </span>
        </h1>
        <p className="text-sm sm:text-base md:text-lg font-light text-center px-2">
          CS Student • Frontend Developer • AI/ML Enthusiast
        </p>
      </div>
    </div>
  );
};

export default Hero;
