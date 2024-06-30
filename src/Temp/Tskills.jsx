import React from "react";

const Tskills = () => {
  return (
    <section className="py-44" id="skills">
      <h1 className="text-2xl font-sans font-bold relative after:absolute text-my-white after:top-1/2 after:bg-my-lightest-navy after:ml-2 after:h-px after:inline-block after:w-[30%] mb-6">
        Technologies I know
      </h1>
      <div className="flex flex-wrap gap-8">
        <div className="">
          <div className="py-4">
            <h2 className="font-serif font-bold text-xl mb-1 text-my-light-slate">
              Development Stack
            </h2>
            <ul className="flex flex-row flex-wrap text-my-green font-mono">
              <li className="px-2 py-1">MongoDB</li>
              <li className="px-2 py-1">Express.Js</li>
              <li className="px-2 py-1">React.Js</li>
              <li className="px-2 py-1">Node.Js</li>
            </ul>
          </div>
          <div className="py-4">
            <h2 className="font-serif font-bold text-xl mb-1 text-my-light-slate">
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
          <div className="py-4">
            <h2 className="font-serif font-bold text-xl mb-1 text-my-light-slate">
              Database
            </h2>
            <ul className="flex flex-row flex-wrap text-my-green font-mono">
              <li className="px-2 py-1">MongoDb</li>
              <li className="px-2 py-1">MySQL</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="">
            <h2 className="font-serif font-bold text-xl mb-1 text-my-light-slate text-wrap">
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
          <div className="">
            <h2 className="font-serif font-bold text-xl mb-1 text-my-light-slate">
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

export default Tskills;
