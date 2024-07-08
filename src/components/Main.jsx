import React from "react";
import Hero from "./Hero";
import Work from "./Work";
import Projects from "./Projects";
import Contact from "./Contact";
import About from "./About";
import Skills from "./Skills";
import Qualifications from "./Qualifications";

//icons
import { LuGithub } from "react-icons/lu";
import { LuLinkedin } from "react-icons/lu";
import { LuInstagram } from "react-icons/lu";
import { IoIosArrowDropup } from "react-icons/io";

const Main = () => {
  return (
    <div className="p-8 pt-16 xl:px-[16%]" id="home">
      <ul className="hidden xl:flex xl:flex-col xl:items-center xl:gap-7 xl:fixed xl:bottom-0 xl:left-0 xl:after:inline-block xl:after:h-[90px] xl:after:bg-white xl:after:w-[1px] xl:text-my-light-slate xl:pl-16 xl:text-xl xl:font-mono ">
        <li className="hover:text-my-green hover:-translate-y-1">
          <a href="https://github.com/MoreSarvesh">
            <LuGithub />
          </a>
        </li>
        <li className="hover:text-my-green hover:-translate-y-1">
          <a href="https://www.linkedin.com/in/sarvesh-more-b255b51b9">
            <LuLinkedin />
          </a>
        </li>
        <li className="hover:text-my-green hover:-translate-y-1">
          <a href="https://www.instagram.com/sarvesh_.more?igsh=MW1qYjR2ZDN4aHc2">
            <LuInstagram />
          </a>
        </li>
      </ul>
      <Hero />
      <About />
      <Qualifications />
      <Skills />
      <Work />
      <Projects />
      <Contact />
      <div className="hidden text-write-mode-vertical xl:pr-12 xl:flex xl:items-center xl:gap-7 xl:fixed xl:bottom-0 xl:right-0 xl:after:inline-block xl:after:h-[90px] xl:after:bg-white xl:after:w-[1px]">
        <div className=" xl:text-my-light-slate xl:text-sm xl:hover:text-my-green xl:hover:-translate-y-2 xl:font-mono xl:inline-block xl:duration-150">
          <a href="mailto:sarveshmore1324@gmail.com">
            sarveshmore1324@gamil.com
          </a>
        </div>
      </div>
      <div
        className="text-3xl text-my-white hover:text-my-green hover:-translate-y-2 duration-150 fixed bottom-8 right-8 xl:bottom-16  xl:right-32"
        title="Back to Top"
      >
        <a href="#home">
          <IoIosArrowDropup />
        </a>
      </div>
      <p className="text-center text-my-slate">
        Developed by @Sarvesh More, inspired by @Brittany Chiang.
      </p>
    </div>
  );
};

export default Main;
