import React from "react";
import Qualification from "./Qualification";

const Qualifications = () => {
  return (
    <section className="py-44 xl:py-52 xl:px-16" id="qualification">
      <h1 className="text-2xl font-sans font-bold relative after:absolute text-my-white after:top-1/2 after:bg-my-lightest-navy after:ml-2 after:h-px after:inline-block after:w-[60%] mb-6 xl:text-3xl">
        Qualification
      </h1>
      <Qualification />
    </section>
  );
};

export default Qualifications;
