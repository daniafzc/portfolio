"use client";
import React, { useEffect, useState } from "react";
import { NavLinks } from "@/app/constant/constant";
import Link from "next/link";
import { HiBars3BottomRight } from "react-icons/hi2";

type Props = {
  openNav: () => void;
};

const Navbar = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => setNavBg(window.scrollY >= 90);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-[12vh] z-[10000] transition-all duration-200 ${
        navBg ? "bg-[#0f142ed9] shadow-md" : ""
      }`}
    >
      <div className="flex items-center justify-between h-full px-10">
        {/* Logo - left */}
        <h1 className="text-xl sm:text-2xl text-white font-bold font-heading">
          Dani's
        </h1>

        {/* Nav links - right, hidden on mobile */}
        <div className="hidden lg:flex items-center space-x-10">
          {NavLinks.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className="hover:text-cyan-300 text-white font-medium transition-all duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Burger - only visible on mobile */}
        <div className="lg:hidden">
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
