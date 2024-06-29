import React from "react";

const Qualifications = () => {
  return (
    <section className="py-52 px-16" id="qualification">
      <h1 className="font-sans font-bold text-3xl relative after:absolute text-my-white after:top-1/2 after:bg-my-lightest-navy after:ml-2 after:h-px after:inline-block after:w-2/5 mb-6">
        Qualification
      </h1>
      <div className="flex-grow p-4">
        <h2 className="font-sans text-xl text-my-white">
          Bachlore of Computer Engineering{" "}
          <span className="text-my-green">
            @ JSPM's Bhivrabai Sawant Institute of Technology
          </span>
        </h2>
        <h3 className="text-my-slate"> December 2022 - May 2024</h3>
        <ul className="p-4 text-my-slate list-disc marker:text-my-green">
          <li>Affiliated To Savitribai Phule Pune University</li>
          <li>Wagholi, Pune 412207</li>
          <li>CGPA: 8.7</li>
        </ul>
      </div>
      <div className="flex-grow p-4">
        <h2 className="font-sans text-xl text-my-white">
          Diploma in Computer Engineering{" "}
          <span className="text-my-green">@ Government Polytechnic Pune</span>
        </h2>
        <h3 className="text-my-slate"> July 2018 - September 2021</h3>
        <ul className="p-4 text-my-slate list-disc marker:text-my-green">
          <li>Autonomous Institute Affiliated To MSBTE</li>
          <li>Shivajinagar, Pune 411014</li>
          <li>Percentage: 88.74%</li>
        </ul>
      </div>
    </section>
  );
};

export default Qualifications;
