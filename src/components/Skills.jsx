import React from "react";
import {
  frontend,
  backend,
  programmingLanguages,
  tools,
  databasesAndOdm,
} from "../DB/skills";
const Skills = () => {
  return (
    <section className="py-44 xl:py-52 xl:px-16" id="skills">
      <h1 className="text-2xl font-sans font-bold relative after:absolute text-my-white after:top-1/2 after:bg-my-lightest-navy after:ml-2 after:h-px after:inline-block after:w-[30%] mb-6 xl:text-3xl xl:after:w-[45%]">
        Technologies I know
      </h1>
      <div className="flex flex-wrap gap-8 xl:flex-nowrap xl:gap-0">
        <div className="xl:flex-grow xl:flex xl:flex-col xl:justify-between">
          <div className="py-4 xl:p-4">
            <h2 className="font-serif font-bold text-xl mb-1 text-my-light-slate xl:text-xl xl:mb-4">
              Frontend Technologies
            </h2>
            <ul className="flex flex-row flex-wrap text-my-green font-mono xl:gap-4">
              {frontend.map((tech, i) => (
                <li key={i} className="mx-2 my-1 text-nowrap border-b-2">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
          <div className="py-4 xl:p-4">
            <h2 className="font-serif font-bold text-xl mb-1 text-my-light-slate xl:text-xl xl:mb-4">
              Backend Technologies
            </h2>
            <ul className="flex flex-row flex-wrap text-my-green font-mono">
              {backend.map((tech, i) => (
                <li key={i} className="mx-2 my-1 border-b-2">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
          <div className="py-4 xl:p-4">
            <h2 className="font-serif font-bold text-xl mb-1 text-my-light-slate xl:text-xl xl:mb-4">
              Databases & ODMs / ORMs
            </h2>
            <ul className="flex flex-row flex-wrap text-my-green font-mono">
              {databasesAndOdm.map((tech, i) => (
                <li key={i} className="mx-2 my-1 border-b-2">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex justify-between gap-12 xl:flex-col xl:pl-8">
          <div className="xl:p-4 xl:px-12">
            <h2 className="font-serif font-bold text-xl mb-1 text-my-light-slate text-wrap xl:text-xl xl:mb-4 ">
              Programing Languages
            </h2>
            <ul className="text-my-green font-mono list-disc">
              {programmingLanguages.map((tech, i) => (
                <li key={i} className="px-2 py-1">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
          <div className="xl:p-4 xl:px-12">
            <h2 className="font-serif font-bold text-xl mb-1 text-my-light-slate xl:text-xl xl:mb-4">
              Developer Tools
            </h2>
            <ul className="text-my-green font-mono list-disc">
              {tools.map((tech, i) => (
                <li key={i} className="px-2 py-1">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
