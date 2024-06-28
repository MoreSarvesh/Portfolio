import React from "react";

const Skills = () => {
  return (
    <section className="py-52 px-16">
      <h1 className="font-sans font-bold text-3xl relative after:absolute text-my-white after:top-1/2 after:bg-my-lightest-navy after:ml-2 after:h-px after:inline-block after:w-2/5 mb-6">
        Skills
      </h1>
      <div className="flex gap-12">
        <div className="flex-grow max-w-[50%]">
          <h2 className="font-sans font-bold text-2xl text-my-lightest-slate">
            Development Stack
          </h2>
          <ul className="grid grid-cols-3 justify-items-center">
            <li className="p-4 text-my-green text-lg mr-4 my-4">MongoDb</li>
            <li className="p-4 text-my-green text-lg mr-4 my-4">Express.Js</li>
            <li className="p-4 text-my-green text-lg mr-4 my-4">React.Js</li>
            <li className="p-4 text-my-green text-lg mr-4 my-4">Node.Js</li>
            <li className="p-4 text-my-green text-lg mr-4 my-4">SQL</li>
            <li className="p-4 text-my-green text-lg mr-4 my-4">TypeScript</li>
            <li className="p-4 text-my-green text-lg mr-4 my-4">HTML5</li>
            <li className="p-4 text-my-green text-lg mr-4 my-4">CSS3</li>
            <li className="p-4 text-my-green text-lg mr-4 my-4">Tailwind</li>
          </ul>
        </div>
        <div className="flex flex-col ml-4">
          <div>
            <h2 className="font-sans font-bold text-2xl text-my-lightest-slate">
              Languages
            </h2>
            <ul className="flex flex-nowrap">
              <li className="text-my-green font-mono text-lg p-4 mr-4 my-4">
                Java
              </li>
              <li className="text-my-green font-mono text-lg p-4 mr-4 my-4">
                c/c++
              </li>
              <li className="text-my-green font-mono text-lg p-4 mr-4 my-4">
                JavaScript
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-sans font-bold text-2xl text-my-lightest-slate">
              Tools
            </h2>
            <ul>
              <li className="text-my-green font-mono text-lg pl-4 mr-4 my-4">
                Git + Github
              </li>
              <li className="text-my-green font-mono text-lg pl-4 mr-4 my-4">
                Chrome Dev Tools
              </li>
              <li className="text-my-green font-mono text-lg pl-4 mr-4 my-4">
                VsCode
              </li>
              <li className="text-my-green font-mono text-lg pl-4 mr-4 my-4">
                Postman
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
