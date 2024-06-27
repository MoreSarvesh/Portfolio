import React from "react";
import Hero from "./Hero";
import Work from "./Work";
import Projects from "./Projects";
import Contact from "./Contact";
import About from "./About";
import Skills from "./Skills";

const Main = () => {
  return (
    <div className="bg-my-navy px-64">
      <ul className="flex flex-col gap-7 social-links text-my-light-slate pl-10 text-sm font-mono">
        <li className="hover:text-my-green">
          <a href="http://">GT</a>
        </li>
        <li className="hover:text-my-green">
          <a href="http://">LI</a>
        </li>
      </ul>
      <Hero />
      <About />
      <Skills />
      <Work />
      <Projects />
      <Contact />
      <div>
        <a
          href="mailto:sarveshmore1324@gmail.com"
          className="text-write-mode-vertical text-my-light-slate text-sm hover:text-my-green font-mono pr-10"
        >
          sarveshmore1324@gamil.com
        </a>
      </div>
    </div>
  );
};

export default Main;
