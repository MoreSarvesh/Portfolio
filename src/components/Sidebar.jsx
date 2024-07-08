import React from "react";

const Sidebar = () => {
  return (
    <div className="backdrop-blur-sm fixed top-0 h-full w-screen z-30">
      <ol className="flex flex-col items-center justify-center fixed  right-0 h-full bg-my-light-navy w-[70%] text-my-white font-mono xl:hidden ">
        <li className="px-3 py-4 hover:text-my-green text-lg w-full text-center">
          <a href="#about" className="inline-block w-full">
            About
          </a>
        </li>
        <li className="px-3 py-4 hover:text-my-green text-lg w-full text-center">
          <a className="inline-block w-full" href="#qualification">
            Qualification
          </a>
        </li>
        <li className="px-3 py-4 hover:text-my-green text-lg w-full text-center">
          <a className="inline-block w-full" href="#skills">
            Skills
          </a>
        </li>
        <li className="px-3 py-4 hover:text-my-green text-lg w-full text-center">
          <a className="inline-block w-full" href="#work">
            Work
          </a>
        </li>
        <li className="px-3 py-4 hover:text-my-green text-lg w-full text-center">
          <a className="inline-block w-full" href="#projects">
            Projects
          </a>
        </li>
        <li className="px-3 py-4 hover:text-my-green text-lg w-full text-center">
          <a className="inline-block w-full" href="#contact">
            Contact
          </a>
        </li>
        <li className="bg-my-green rounded-md border-my-green">
          <a href="https://drive.google.com/file/d/1Y5Wp3O54mjY58z4sAglgMkj2zCx6cUfl/view?usp=sharing">
            <div className=" px-5 py-2 bg-my-light-navy border rounded-md border-my-green text-my-green relative hover:-translate-y-1 hover:-translate-x-1 duration-150">
              Resume
            </div>
          </a>
        </li>
      </ol>
    </div>
  );
};

export default Sidebar;
