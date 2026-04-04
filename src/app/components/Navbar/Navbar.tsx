"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import { NavLinks } from "@/app/constant/constant";
import Link from "next/link";
import { HiBars3BottomRight } from "react-icons/hi2";

type Props = {
  openNav: () => void;
};

const Navbar = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      if (window.scrollY < 90) setNavBg(false);
    };

    window.addEventListener("scroll", handler);

    return () => {
      window.removeEventListener("scroll", handler);
    };
  });

  return (
    <div
      className={`transition-all ${navBg ? "bg-[#0f142ed9] shadow-md" : ""} duration-200 h-[12vh] z-[10000] fixed w-full`}
    >
      <div className="flex items-center h-full w-[80%] mx-auto">
        {/* Logo - left */}
        <div className="flex items-center">
          <h1 className="text-xl hidden sm:block md:text-2xl text-white font-bold font-heading">
            Dani's
          </h1>
        </div>

        {/* Nav links - center */}
        <div className="hidden lg:flex items-center space-x-10 absolute left-1/2 -translate-x-1/2">
          {NavLinks.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className="hover:text-cyan-300 text-white font-medium transition-all duration-200"
            >
              <p>{link.label}</p>
            </Link>
          ))}
        </div>

        {/* Burger - right (always pushed to end) */}
        <div className="ml-auto lg:hidden">
          <HiBars3BottomRight
            onClick={openNav}
            className="w-8 h-8 cursor-pointer text-white"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
