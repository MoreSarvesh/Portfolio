import React from "react";

const Hero = () => {
  return (
    <section className="py-44 xl:py-2">
      <div className="font-mono text-my-green text-lg xl:text-lg">
        Hi, my name is
      </div>
      <div className="font-sans text-my-lightest-slate font-bold leading-relaxed text-4xl xl:text-7xl">
        Sarvesh More.
      </div>
      <div className="font-sans font-bold text-my-slate text-3xl xl:text-6xl xl:w-10/12 xl:mb-16">
        From Concept to Development, I Handle It All.
      </div>
      <div className="font-sans text-my-slate leading-relax mt-5 xl:text-lg xl:w-1/2">
        I am a Software Engineer aspiring to embark on a career as a Full Stack
        Developer. Currently, I'm focous on mastering the{" "}
        <span>MERN stack</span>.
      </div>
      <div className="bg-my-green w-fit h-fit rounded-md">
        <a href="#about">
          <div className="px-5 py-2 bg-my-navy border rounded-md border-my-green text-my-green mt-12 text-xl font-mono hover:-translate-y-1 hover:-translate-x-1 duration-150 xl:px-5 xl:py-2 xl:mt-12 xl:text-xl">
            Explore
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
