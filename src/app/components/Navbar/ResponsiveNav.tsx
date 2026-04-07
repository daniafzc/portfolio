"use client";
import React, { useState } from "react";
import { NavLinks } from "@/app/constant/constant";
import Link from "next/link";
import { HiBars3BottomRight } from "react-icons/hi2";
import { CgClose } from "react-icons/cg";

const ResponsiveNav = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
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
              background: "linear-gradient(90deg, #1a2744, #3a9fd6)",
              WebkitTextFillColor: "transparent",
              WebkitBackgroundClip: "text",
            }}
          >
            Dani
          </h1>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center space-x-8">
            {NavLinks.map((link) => (
              <Link
                key={link.id}
                href={link.url}
                className="text-foreground font-medium text-base transition-colors duration-200 hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile burger */}
          <button
            className="lg:hidden"
            onClick={() => setShowNav(true)}
            aria-label="Open menu"
          >
            <HiBars3BottomRight className="w-7 h-7 text-foreground" />
          </button>
        </nav>
      </div>

      {/* Overlay */}
      <div
        onClick={() => setShowNav(false)}
        className={`fixed inset-0 z-[100002] transition-all duration-500 ${
          showNav
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{
          background: "rgba(26, 39, 68, 0.35)",
          backdropFilter: "blur(2px)",
        }}
      />

      {/* Drawer panel */}
      <div
        className={`fixed top-4 right-4 bottom-4 z-[100050] w-[75%] sm:w-[55%] max-w-sm rounded-2xl flex flex-col justify-center space-y-8 transform transition-all duration-500 ${
          showNav ? "translate-x-0" : "translate-x-[calc(100%+2rem)]"
        }`}
        style={{
          background: "rgba(220, 242, 248, 0.75)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "0.5px solid rgba(143, 199, 215, 0.5)",
          boxShadow: "0 8px 40px rgba(58, 159, 214, 0.15)",
        }}
      >
        {NavLinks.map((link) => (
          <Link key={link.id} href={link.url} onClick={() => setShowNav(false)}>
            <p className="text-foreground w-fit text-xl sm:text-2xl ml-10 border-b-[1.5px] pb-1 border-primary font-semibold tracking-wide hover:text-primary transition-colors duration-200">
              {link.label}
            </p>
          </Link>
        ))}

        {/* Close button */}
        <button
          onClick={() => setShowNav(false)}
          className="absolute top-4 right-4 text-foreground hover:text-primary transition-colors duration-200"
          aria-label="Close menu"
        >
          <CgClose className="w-6 h-6 sm:w-7 sm:h-7" />
        </button>
      </div>
    </>
  );
};

export default ResponsiveNav;
