import { NavLinks } from "@/app/constant/constant";
import React from "react";
import Link from "next/link";
import { CgClose } from "react-icons/cg";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ closeNav, showNav }: Props) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[100%]";

  return (
    <div>
      {/* Overlay */}
      <div
        onClick={closeNav}
        className={`fixed inset-0 z-[100002] transition-all duration-500 ${
          showNav
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{
          background: "rgba(26, 39, 68, 0.4)",
          backdropFilter: "blur(2px)",
        }}
      />

      {/* Drawer */}
      <div
        className={`fixed top-4 right-4 bottom-4 z-[100050] w-[75%] sm:w-[55%] max-w-sm rounded-2xl flex flex-col justify-center space-y-8 transform transition-all duration-500 ${navOpen}`}
        style={{
          background: "rgba(196, 235, 241, 0.6)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "0.5px solid rgba(143, 199, 215, 0.5)",
          boxShadow: "0 8px 40px rgba(58, 159, 214, 0.15)",
        }}
      >
        {NavLinks.map((link) => (
          <Link key={link.id} href={link.url} onClick={closeNav}>
            <p className="text-foreground w-fit text-2xl sm:text-3xl ml-10 border-b-[1.5px] pb-1 border-primary font-semibold tracking-wide hover:text-primary transition-colors duration-200">
              {link.label}
            </p>
          </Link>
        ))}

        {/* Close button */}
        <button
          onClick={closeNav}
          className="absolute top-4 right-4 text-foreground hover:text-primary transition-colors duration-200"
          aria-label="Close menu"
        >
          <CgClose className="w-6 h-6 sm:w-7 sm:h-7" />
        </button>
      </div>
    </div>
  );
};

export default MobileNav;
