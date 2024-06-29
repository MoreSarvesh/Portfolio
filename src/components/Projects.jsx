//icons
import { LuGithub } from "react-icons/lu";
import { LuLinkedin } from "react-icons/lu";
import { LuInstagram } from "react-icons/lu";

const Projects = () => {
  return (
    <section className="py-52 px-16" id="projects">
      <h1 className="font-sans font-bold text-3xl relative after:absolute text-my-white after:top-1/2 after:bg-my-lightest-navy after:ml-2 after:h-px after:inline-block after:w-2/5 mb-6">
        Some Things I’ve Built
      </h1>
      <div className="flex flex-col gap-16">
        <div className="flex py-16">
          <div className="w-[40%] bg-my-green opacity-15 relative left-16">
            Image
          </div>
          <div className="w-[60%] z-10">
            <h2 className="font-mono font-bold text-2xl mb-4 text-my-white text-right">
              Applicant Tracking System
            </h2>
            <div className="bg-my-div-navy text-my-light-slate p-6 rounded-lg">
              Developed to streamline the recruitment process for recruiters,
              incorporating features such as job listings, resume ranking using
              TensorFlow.js, and automated assessments and emails via the OpenAI
              API. Implemented a robust backend with Node.js and MongoDB, and
              built a user-friendly frontend with React.js. This project
              enhanced my skills in MERN stack development, API integration, and
              comprehensive project management.
            </div>
            <ul className="flex gap-2 text-nowrap justify-end text-my-lightest-slate font-mono py-2">
              <li className="p-2">MongoDB</li>
              <li className="p-2">Express.Js</li>
              <li className="p-2">React.Js</li>
              <li className="p-2">Node.Js</li>
              <li className="p-2">OpenAI API</li>
              <li className="p-2">TensorFlow.Js</li>
            </ul>
            <div className="hover:text-my-green text-my-light-slate text-xl flex justify-end p-1">
              <a href="http://">
                <LuGithub />
              </a>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="w-[60%] z-10">
            <h2 className="font-mono font-bold text-2xl mb-4 text-my-white text-left">
              Expense Tracker
            </h2>
            <div className="bg-my-div-navy text-my-light-slate p-6 rounded-lg">
              Developed a user-friendly expense tracker web application using
              React.js and the latest React Router. The application features
              intuitive functionalities for tracking expenses, creating budgets,
              and generating financial insights. This project enhanced my skills
              in React.js and advanced routing techniques, demonstrating my
              ability to build scalable and user-centric web applications.
            </div>
            <ul className="flex gap-2 text-nowrap justify-start text-my-lightest-slate font-mono py-2">
              <li className="p-2">React.Js</li>
              <li className="p-2">React Router v6</li>
              <li className="p-2">React Toastfy</li>
            </ul>
            <div className="hover:text-my-green text-my-light-slate text-xl flex justify-start p-1">
              <a href="http://">
                <LuGithub />
              </a>
            </div>
          </div>
          <div className="w-[40%] bg-my-green opacity-15 relative right-16">
            Image
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
