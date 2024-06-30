import React from "react";
import Qualification from "../components/Qualification";

const Tqualification = () => {
  return (
    <section className="py-44" id="qualification">
      <h1 className="text-2xl font-sans font-bold relative after:absolute text-my-white after:top-1/2 after:bg-my-lightest-navy after:ml-2 after:h-px after:inline-block after:w-[60%] mb-6">
        Qualification
      </h1>
      <Qualification />
    </section>
  );
};

export default Tqualification;
