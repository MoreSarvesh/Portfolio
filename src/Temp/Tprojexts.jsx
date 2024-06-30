import React from "react";
import Project from "../components/Project";

const Tprojexts = () => {
  return (
    <section className="py-44" id="projects">
      <h1 className="text-2xl font-sans font-bold relative after:absolute text-my-white after:top-1/2 after:bg-my-lightest-navy after:ml-2 after:h-px after:inline-block after:w-[30%] mb-6">
        Some Things I’ve Built
      </h1>
      <div className="">
        <Project />
      </div>
    </section>
  );
};

export default Tprojexts;
