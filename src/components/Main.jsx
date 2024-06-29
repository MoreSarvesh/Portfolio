import React from "react";
import Hero from "./Hero";
import Work from "./Work";
import Projects from "./Projects";
import Contact from "./Contact";
import About from "./About";
import Skills from "./Skills";
import Qualifications from "./Qualifications";

const Main = () => {
  return (
    <div className="bg-my-navy px-64">
      <ul className="flex flex-col gap-7 social-links text-my-light-slate pl-16 text-sm font-mono">
        <li className="hover:text-my-green">
          <a href="http://">GT</a>
        </li>
        <li className="hover:text-my-green">
          <a href="http://">LI</a>
        </li>
      </ul>
      <Hero />
      <About />
      <Qualifications />
      <Skills />
      <Work />
      <Projects />
      <Contact />
      <div>
        <a
          href="mailto:sarveshmore1324@gmail.com"
          className="text-write-mode-vertical text-my-light-slate text-sm hover:text-my-green font-mono pr-16"
        >
          sarveshmore1324@gamil.com
        </a>
      </div>
      <p className="text-center text-my-slate">
        Developed by @Sarvesh More, inspired by @Brittany Chiang.
      </p>
    </div>
  );
};

export default Main;
