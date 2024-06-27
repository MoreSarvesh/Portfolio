import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between p-8 bg-my-navy text-my-lightest-slate font-mono text-md">
      <div className="px-3 py-2 hover:text-my-green ">
        <a href="#">Home</a>
      </div>
      <div className="flex gap-10">
        <span className="px-3 py-2 hover:text-my-green">
          <a href="#">About</a>
        </span>
        <span className="px-3 py-2 hover:text-my-green">
          <a href="#">Skills</a>
        </span>
        <span className="px-3 py-2 hover:text-my-green">
          <a href="#">Work</a>
        </span>
        <span className="px-3 py-2 hover:text-my-green">
          <a href="#">Projects</a>
        </span>
        <span className="px-3 py-2 hover:text-my-green">
          <a href="#">Contact</a>
        </span>
        <span className="px-5 py-2 bg-transparent border rounded-md border-my-green text-my-green">
          Resume
        </span>
      </div>
    </div>
  );
};

export default Navbar;
