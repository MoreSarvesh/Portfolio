import React from "react";

const Skills = () => {
  return (
    <section className="py-52 px-16" id="skills">
      <h1 className="font-sans font-bold text-3xl relative after:absolute text-my-white after:top-1/2 after:bg-my-lightest-navy after:ml-2 after:h-px after:inline-block after:w-2/5 mb-6">
        Technologies I know
      </h1>
      <div className="flex">
        <div className="flex-grow flex flex-col justify-between">
          <div className="p-4">
            <h2 className="font-serif font-bold text-xl mb-4 text-my-light-slate">
              Development Stack
            </h2>
            <ul className="flex flex-row gap-4 text-my-green font-mono">
              <li>MongoDB</li>
              <li>Express.Js</li>
              <li>React.Js</li>
              <li>Node.Js</li>
            </ul>
          </div>
          <div className="p-4">
            <h2 className="font-serif font-bold text-xl mb-4 text-my-light-slate">
              Programing Languages
            </h2>
            <ul className="flex flex-row gap-4 text-my-green font-mono">
              <li>JavaScript (ES6+)</li>
              <li>TypeScript</li>
              <li>Java</li>
              <li>C</li>
              <li>C++</li>
            </ul>
          </div>
          <div className="p-4">
            <h2 className="font-serif font-bold text-xl mb-4 text-my-light-slate">
              Database
            </h2>
            <ul className="flex flex-row gap-4 text-my-green font-mono">
              <li>MongoDb</li>
              <li>MySQL</li>
            </ul>
          </div>
        </div>
        <div className="flex-grow">
          <div className="p-4">
            <h2 className="font-serif font-bold text-xl mb-4 text-my-light-slate">
              Frameworks/Libraries
            </h2>
            <ul className="text-my-green font-mono flex flex-col gap-2">
              <li>Next.Js</li>
              <li>React Query</li>
              <li>React Router v6</li>
              <li>Tailwind CSS</li>
              <li>Mongoose</li>
              <li>jsonwebtoken</li>
              <li>Axios</li>
            </ul>
          </div>
          <div className="p-4">
            <h2 className="font-serif font-bold text-xl mb-4 text-my-light-slate">
              Tools
            </h2>
            <ul className="text-my-green font-mono flex flex-col gap-2">
              <li>Git + Github</li>
              <li>npm</li>
              <li>Chrome dev tools</li>
              <li>Postman / Thunderclient</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
