import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between p-8 bg-my-navy text-my-lightest-slate font-mono text-md">
      <div className="px-3 py-2 hover:text-my-green ">
        <a href="#">Home</a>
      </div>
      <div className="flex gap-10">
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
        <span className="px-5 py-2 bg-transparent border rounded-md border-my-green text-my-green">
          Resume
        </span>
      </div>
    </div>
  );
};

export default Navbar;
