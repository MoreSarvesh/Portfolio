import React from "react";

const Hero = () => {
  return (
    <section id="hero" className="py-12">
      <div className="text-lg text-my-green font-mono">Hi, my name is</div>
      <div className="text-7xl font-sans font-bold text-my-lightest-slate leading-relaxed">
        Sarvesh More.
      </div>
      <div className="text-6xl w-10/12 font-sans font-bold text-my-slate">
        From Concept to Development, I Handle It All.
      </div>
      <div className="text-lg font-sans text-my-slate w-1/2 leading-relax mt-7">
        I am a Software Engineer aspiring to embark on a career as a Full Stack
        Developer. Currently, I'm focous on mastering the{" "}
        <span className="text-my-green">MERN stack</span>.
      </div>
      <button className="px-5 py-2 bg-transparent border rounded-md border-my-green text-my-green mt-12 text-2xl font-mono">
        Explore
      </button>
    </section>
  );
};

export default Hero;
