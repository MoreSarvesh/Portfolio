import Project from "./Project";

const Projects = () => {
  return (
    <section className="py-44 xl:py-52 xl:px-16" id="projects">
      <h1 className="text-2xl font-sans font-bold relative after:absolute text-my-white after:top-1/2 after:bg-my-lightest-navy after:ml-2 after:h-px after:inline-block after:w-[30%] mb-6 xl:text-3xl xl:after:w-[40%]">
        Some Things I’ve Built
      </h1>
      <div className="xl:flex xl:flex-col xl:gap-16">
        <Project />
      </div>
    </section>
  );
};

export default Projects;
