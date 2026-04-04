import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "./components/Navbar/ResponsiveNav";
import Footer from "./components/Footer";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dania Hafiza's Portfolio",
  description: "Frontend Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${bricolage.variable} h-full antialiased`}
      style={
        { "--font-outfit": outfit.style.fontFamily } as React.CSSProperties
      }
    >
      <body className="antialiased bg-[#f0f8ff]">
        <div className="top-blur"></div>
        <div className="bottom-blur"></div>
        <ResponsiveNav />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
