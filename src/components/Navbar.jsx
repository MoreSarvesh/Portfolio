import React from "react";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav
      className="flex justify-between items-center p-4 text-my-white font-mono  xl:p-8 xl:text-sm"
      id="home"
    >
      <div className="hover:text-my-green xl:ml-6 text-my-white">
        <a href="#">
          <Logo />
        </a>
      </div>
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
    </nav>
  );
};

export default Navbar;
