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
    <div className="bg-my-navy sm:px-64">
      <ul className="flex flex-col gap-7 social-links text-my-light-slate pl-16 text-xl font-mono ">
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
      <div className="text-write-mode-vertical pr-16">
        <div className=" text-my-light-slate text-sm hover:text-my-green hover:-translate-y-1 font-mono inline-block">
          <a href="mailto:sarveshmore1324@gmail.com">
            sarveshmore1324@gamil.com
          </a>
        </div>
      </div>
      <div
        className="text-xl bottom-1 w-4 right-1 sm:text-3xl text-my-white hover:text-my-green hover:-translate-y-1 duration-150 fixed sm:bottom-8 sm:right-32"
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
