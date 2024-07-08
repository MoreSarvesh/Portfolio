import React, { useState } from "react";
import Logo from "./Logo";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <nav
      className="flex justify-between items-center p-4 text-my-white font-mono  xl:p-8 xl:text-sm"
      id="home"
    >
      <div className="hover:text-my-green xl:ml-1 text-my-white p-1 h-12 w-[4.5rem]">
        <a href="#">
          <Logo />
        </a>
      </div>
      {showNav && <Sidebar />}
      <div className="hidden xl:flex xl:gap-4">
        <span className="px-3 py-2 hover:text-my-green">
          <a href="#about">About</a>
        </span>
        <span className="px-3 py-2 hover:text-my-green">
          <a href="#qualification">Qualification</a>
        </span>
        <span className="px-3 py-2 hover:text-my-green">
          <a href="#skills">Skills</a>
        </span>
        <span className="px-3 py-2 hover:text-my-green">
          <a href="#work">Work</a>
        </span>
        <span className="px-3 py-2 hover:text-my-green">
          <a href="#projects">Projects</a>
        </span>
        <span className="px-3 py-2 hover:text-my-green">
          <a href="#contact">Contact</a>
        </span>
        <div className="bg-my-green rounded-md border-my-green">
          <a href="https://drive.google.com/file/d/1Y5Wp3O54mjY58z4sAglgMkj2zCx6cUfl/view?usp=sharing">
            <div className=" px-5 py-2 bg-my-navy border rounded-md border-my-green text-my-green relative hover:-translate-y-1 hover:-translate-x-1 duration-150">
              Resume
            </div>
          </a>
        </div>
      </div>
      <div
        className="w-10 h-10 p-1 flex flex-col justify-center relative z-40 mr-2 xl:hidden"
        onClick={() => {
          setShowNav((prev) => !prev);
        }}
      >
        <div
          className={`bg-white hover: w-full h-1 before:w-[80%] before:h-1 before:bg-white before:absolute before:left-0 before:top-0 before:m-1 before:origin-right after:w-[80%] after:h-1 after:bg-white after:absolute after:left-0 after:bottom-0 after:m-1 after:origin-right ${
            showNav
              ? " bg-transparent after:scale-x-125 after:rotate-45 before:-rotate-45 before:scale-x-125"
              : ""
          }`}
        ></div>
      </div>
    </nav>
  );
};

export default Navbar;
