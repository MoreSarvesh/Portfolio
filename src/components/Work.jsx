import React from "react";
import Job from "./Job";

const Work = () => {
  return (
    <section className="py-44 xl:py-52 xl:px-16" id="work">
      <h1 className="text-2xl font-sans font-bold relative after:absolute text-my-white after:top-1/2 after:bg-my-lightest-navy after:ml-2 after:h-px after:inline-block after:w-[30%] mb-6 xl:text-3xl">
        Where I’ve Worked
      </h1>
      <div className="py-4 xl:flex xl:flex-col xl:gap-16">
        <Job />
      </div>
    </section>
  );
};

export default Work;
