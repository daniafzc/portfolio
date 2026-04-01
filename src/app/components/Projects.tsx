import React from "react";
import Image from "next/image";

const Projects = () => {
  return (
    <div className="py-16 text-white" data-aos="fade-up" data-aos-delay="400">
      <h1 className="text-center text-2xl md:text-4xl lg:text-5xl font-bold">
        Projects
      </h1>
      <div className="w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
        <div>
          <Image
            src="/mockupproject.jpg"
            alt="img"
            width={800}
            height={650}
            className="rounded-lg"
          />
          <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white">
            Diagonals
          </h1>
          <h1 className="pt-2 font-medium text-white ">NextJS, Tailwind</h1>
        </div>

        <div>
          <Image
            src="/mockupproject.jpg"
            alt="img"
            width={800}
            height={650}
            className="rounded-lg"
          />
          <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white">
            Dummy Event Website
          </h1>
          <h1 className="pt-2 font-medium text-white ">NextJS, Tailwind</h1>
        </div>

        <div>
          <Image
            src="/mockupproject.jpg"
            alt="img"
            width={800}
            height={650}
            className="rounded-lg"
          />
          <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white">
            Typecounter
          </h1>
          <h1 className="pt-2 font-medium text-white ">NextJS, Tailwind</h1>
        </div>
      </div>
    </div>
  );
};

export default Projects;
