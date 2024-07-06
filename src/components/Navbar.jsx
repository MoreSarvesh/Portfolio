import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between p-4 text-my-white font-mono  xl:p-8 xl:text-sm">
      <div className="hover:text-my-green xl:px-3 xl:py-2">
        <a href="#">Home</a>
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
          <a href="http://">
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
