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
    <div className="py-20 items-center">
      <div>
        <h1 className="text-center text-2xl md:text-4xl lg:text-5xl font-bold text-white">
          Feel free to <span className="text-cyan-200">reach out!</span>
        </h1>
        <p className="text-gray-400 mt-6 text-center sm:text-lg">
          Contact me via your chosen app.
        </p>
        <div className="flex flex-wrap justify-center gap-8 mt-13">
          {contact.map((cont) => {
            return (
              <Tilt key={cont.name} scale={1.5} transitionSpeed={400}>
                <Link href={cont.url} target="_blank" rel="noopener noreferrer">
                  <div className="text-center w-15 h-15 bg-blue-900/80 rounded-full p-2 flex flex-col items-center justify-center shadow-lg transition hover:scale-105">
                    <div className="text-4xl text-gray-100 mb-1">
                      {cont.icon}
                    </div>
                  </div>
                </Link>
              </Tilt>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Contact;
