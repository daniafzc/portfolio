"use client";
import React from "react";
import { NavLinks } from "@/app/constant/constant";
import Link from "next/link";
import { HiBars3BottomRight } from "react-icons/hi2";

type Props = {
  openNav: () => void;
};

const Navbar = ({ openNav }: Props) => {
  return (
    <div className="fixed top-5 left-0 right-0 z-[10000] flex justify-center px-5 sm:px-10">
      <nav
        className="w-full max-w-4xl flex items-center justify-between px-6 sm:px-8 py-3 rounded-2xl"
        style={{
          background: "rgba(196, 235, 241, 0.3)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          border: "0.5px solid rgba(143, 199, 215, 0.5)",
          boxShadow: "0 4px 30px rgba(58, 159, 214, 0.1)",
        }}
      >
        {/* Logo */}
        <h1
          className="text-xl sm:text-2xl font-bold font-heading"
          style={{
            background:
              "linear-gradient(90deg, var(--foreground), var(--primary))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Dani's
        </h1>

        {/* Desktop nav links */}
        <div className="hidden lg:flex items-center space-x-8">
          {NavLinks.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className="text-[foreground] font-medium text-base transition-colors duration-200 hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile burger */}
        <button className="lg:hidden" onClick={openNav} aria-label="Open menu">
          <HiBars3BottomRight className="w-7 h-7 text-foreground" />
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
