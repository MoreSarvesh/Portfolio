import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between p-8 bg-my-navy text-my-lightest-slate font-mono text-md">
      <div className="px-3 py-2 hover:text-my-green ">
        <a href="#">Home</a>
      </div>
      <div className="flex gap-4">
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
    </div>
  );
};

export default Navbar;
