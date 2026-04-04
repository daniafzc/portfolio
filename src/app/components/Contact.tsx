"use client";
import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Tilt from "react-parallax-tilt";
import Link from "next/link";

const contact = [
  {
    name: "Email",
    icon: <MdEmail />,
    url: "mailto:hfzdania55@gmail.com",
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
    url: "https://github.com/daniafzc",
  },
  {
    name: "Instagram",
    icon: <FaInstagram />,
    url: "https://instagram.com/daniafzc",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedinIn />,
    url: "https://instagram.com/daniafzc",
  },
];

const Contact = () => {
  return (
    <section
      data-aos="fade-up"
      data-aos-delay="400"
      id="contact"
      className="relative h-full pt-14 sm:pt-20 pb-7 mx-4 sm:m-10 my-16 sm:my-25 rounded-t-3xl text-[#1a2744] items-center card-dark"
    >
      <div>
        <h1 className="text-center bg-gradient-to-r from-[#3a9fd6] to-[#1a2744] bg-clip-text font-heading text-2xl md:text-4xl lg:text-5xl font-bold text-transparent">
          Feel free to reach out!
        </h1>
        <p className="text-[#3a6080] mt-4 sm:mt-6 text-center text-base sm:text-xl">
          Contact me via your chosen app.
        </p>

        <hr className="w-[90%] h-0.5 mx-auto my-8 sm:my-10 bg-sky-200 border-0 rounded" />

        <div className="flex flex-col md:flex-row md:justify-between gap-8 md:gap-0 px-6 sm:px-10 md:mx-13">
          {/* left: bio */}
          <div className="flex flex-col gap-3 sm:gap-4">
            <h3 className="text-xl sm:text-2xl font-bold tracking-wide text-[#1a2744]">
              DANIA HAFIZA
            </h3>
            <p className="text-base sm:text-xl font-light text-[#3a6080] max-w-xs">
              Realizing the power of code to create meaningful impact.
            </p>
            <p className="text-sm sm:text-lg font-medium text-[#3a9fd6]">
              A Passionate Developer.
            </p>
          </div>

          {/* right: connect */}
          <div className="flex flex-col gap-4 sm:gap-6">
            <h2 className="text-lg sm:text-xl font-semibold text-[#1a2744]">
              Connect
            </h2>
            <div className="grid grid-cols-2 gap-3 sm:gap-6">
              {contact.map((cont) => (
                <Tilt key={cont.name} scale={1.5} transitionSpeed={400}>
                  <Link
                    href={cont.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="text-center border border-sky-200 bg-sky-50/80 rounded-full px-3 sm:px-4 py-2 flex items-center justify-center shadow-sm transition hover:bg-[#FFD301] hover:border-[#FFD301] hover:scale-100">
                      <div className="text-xs sm:text-medium font-light flex flex-row gap-2 sm:gap-4 text-[#1a2744] items-center whitespace-nowrap">
                        {cont.icon} {cont.name}
                      </div>
                    </div>
                  </Link>
                </Tilt>
              ))}
            </div>
          </div>
        </div>

        <hr className="w-[90%] h-0.5 mx-auto my-8 sm:my-10 bg-sky-200 border-0 rounded" />

        <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0 text-[#7aaecc] px-6 sm:px-10 md:mx-13 text-xs sm:text-sm">
          <p>2026. Dania Hafiza.</p>
          <p>Made with code and lots of coffee.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
