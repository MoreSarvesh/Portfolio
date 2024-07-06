import React from "react";

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
              Development Stack
            </h2>
            <ul className="flex flex-row flex-wrap text-my-green font-mono xl:flex-nowrap xl:gap-4">
              <li className="px-2 py-1">MongoDB</li>
              <li className="px-2 py-1">Express.Js</li>
              <li className="px-2 py-1">React.Js</li>
              <li className="px-2 py-1">Node.Js</li>
            </ul>
          </div>
          <div className="py-4 xl:p-4">
            <h2 className="font-serif font-bold text-xl mb-1 text-my-light-slate xl:text-xl xl:mb-4">
              Programing Languages
            </h2>
            <ul className="flex flex-row flex-wrap text-my-green font-mono">
              <li className="px-2 py-1">C</li>
              <li className="px-2 py-1">C++</li>
              <li className="px-2 py-1">Java</li>
              <li className="px-2 py-1">JavaScript(ES6+)</li>
              <li className="px-2 py-1">TypeScript</li>
            </ul>
          </div>
          <div className="py-4 xl:p-4">
            <h2 className="font-serif font-bold text-xl mb-1 text-my-light-slate xl:text-xl xl:mb-4">
              Database
            </h2>
            <ul className="flex flex-row flex-wrap text-my-green font-mono">
              <li className="px-2 py-1">MongoDb</li>
              <li className="px-2 py-1">MySQL</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between gap-12 xl:flex-col xl:pl-8">
          <div className="xl:p-4 xl:px-12">
            <h2 className="font-serif font-bold text-xl mb-1 text-my-light-slate text-wrap xl:text-xl xl:mb-4 ">
              Frameworks / Libraries
            </h2>
            <ul className="text-my-green font-mono list-disc">
              <li className="px-2 py-1">Next.Js</li>
              <li className="px-2 py-1">React Query</li>
              <li className="px-2 py-1">React Router v6</li>
              <li className="px-2 py-1">Tailwind CSS</li>
              <li className="px-2 py-1">Mongoose</li>
              <li className="px-2 py-1">jsonwebtoken</li>
              <li className="px-2 py-1">Axios</li>
            </ul>
          </div>
          <div className="xl:p-4 xl:px-12">
            <h2 className="font-serif font-bold text-xl mb-1 text-my-light-slate xl:text-xl xl:mb-4">
              Tools
            </h2>
            <ul className="text-my-green font-mono list-disc">
              <li className="px-2 py-1">Git + Github</li>
              <li className="px-2 py-1">npm</li>
              <li className="px-2 py-1">Chrome dev tools</li>
              <li className="px-2 py-1">Postman / Thunderclient</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
