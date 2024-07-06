import { LuGithub } from "react-icons/lu";
import { myProjects } from "../DB/projects.js";
import { useState } from "react";

const Project = () => {
  let flag = false;
  return (
    <>
      {myProjects.map((pro, i) => (
        <div key={pro.id} className="flex py-8 xl:py-16">
          {i % 2 === 0 ? (
            <div
              className={`hidden xl:block xl:w-[40%] xl:bg-my-green opacity-15 xl:relative xl:left-16`}
            >
              {pro.img}img
            </div>
          ) : (
            (flag = true)
          )}
          <div className="bg-slate-200 bg-opacity-5 py-8 px-4 shadow-inner rounded-lg xl:w-[60%] xl:z-10 xl:py-0 xl:px-0 xl:bg-transparent xl:shadow-none">
            <h2
              className={`font-mono font-bold text-2xl mb-8  text-my-white  ${
                i % 2 === 0 ? "text-right" : "text-left"
              } xl:mb-4`}
            >
              {pro.title}
            </h2>
            <div className="bg-my-div-navy text-my-light-slate p-4 mb-8 rounded-lg xl:p-6 xl:mb-0">
              {pro.description}
            </div>
            <ul
              className={`flex flex-wrap ${
                i % 2 === 0 ? "justify-end" : "justify-start"
              } text-my-lightest-slate font-mono mb-6 xl:flex-nowrap xl:gap-2 xl:text-nowrap xl:py-2`}
            >
              {pro.skills.map((skill, i) => (
                <li key={skill} className="px-2 xl:p-2">
                  {skill}
                </li>
              ))}
            </ul>
            <div
              className={`hover:text-my-green text-my-light-slate text-xl flex ${
                i % 2 === 0 ? "justify-end" : "justify-start"
              } p-1`}
            >
              <a href={pro.github}>
                <LuGithub />
              </a>
            </div>
          </div>
          {flag && (
            <div
              className={`hidden xl:block xl:w-[40%] xl:bg-my-green opacity-15 xl:relative xl:-left-16`}
            >
              {pro.img}img
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default Project;
