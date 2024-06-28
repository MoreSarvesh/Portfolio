import React from "react";

const About = () => {
  return (
    <section className="py-52 px-16 ">
      <h1 className="font-sans font-bold text-3xl relative after:absolute text-my-white after:top-1/2 after:bg-my-lightest-navy after:ml-2 after:h-px after:inline-block after:w-2/5 mb-6">
        About Me
      </h1>
      <div className="flex flex-row flex-grow">
        <div className="min-w-[60%] flex flex-col gap-4 text-my-slate text-lg">
          <p>
            I'm a recent graduate with a Bachelor's degree in Computer
            Engineering, excited to embark on my journey as a full stack
            developer. My academic journey provided a solid foundation in
            computer engineering, and now I'm eager to apply{" "}
            <span className="text-my-green">MERN stack</span> skills and
            contribute to real-world projects.
          </p>
          <p>
            When I'm not immersed in code, I have a variety of interests that
            keep me occupied like watching sports, especially{" "}
            <span className="text-my-green">Cricket</span> and motorsports like{" "}
            <span className="text-my-green">F1</span> and{" "}
            <span className="text-my-green">MotoGP</span>. I enjoy watching
            movies and spending time in the gym is a big part of my routine,
            helping me stay fit and focused.
          </p>
        </div>
        <div className="bg-red-300 min-w-[40%] m-6">Image</div>
      </div>
    </section>
  );
};

export default About;
