import { LuGithub } from "react-icons/lu";
import { myProjects } from "../DB/projects.js";

const Project = () => {
  return (
    <>
      {myProjects.map((pro, i) => (
        <div key={pro.id} className="flex py-8">
          <div className="hidden">{pro.img}img</div>
          <div className="bg-slate-200 bg-opacity-5 py-8 px-4 shadow-inner rounded-lg">
            <h2
              className={`font-mono font-bold text-2xl mb-8  text-my-white ${
                i % 2 === 0 ? "text-right" : "text-left"
              }`}
            >
              {pro.title}
            </h2>
            <div className="bg-my-div-navy text-my-light-slate p-4 mb-8 rounded-lg">
              {pro.description}
            </div>
            <ul
              className={`flex flex-wrap ${
                i % 2 === 0 ? "justify-end" : "justify-start"
              } text-my-lightest-slate font-mono mb-6`}
            >
              {pro.skills.map((skill, i) => (
                <li key={skill} className="px-2">
                  {skill}
                </li>
              ))}
            </ul>
            <div
              className={`hover:text-my-green text-my-light-slate text-xl flex ${
                i % 2 === 0 ? "justify-end" : "justify-start"
              }`}
            >
              <a href={pro.github}>
                <LuGithub />
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Project;
