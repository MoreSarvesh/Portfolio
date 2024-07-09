//icons
import { LuGithub } from "react-icons/lu";
import { LuLinkedin } from "react-icons/lu";
import { LuInstagram } from "react-icons/lu";

const Contact = () => {
  return (
    <section
      className="py-44 flex flex-col items-center xl:py-52 xl:px-16"
      id="contact"
    >
      <h1 className="text-4xl font-sans font-bold text-my-lightest-slate leading-relaxed xl:text-5xl">
        Get In Touch
      </h1>
      <div className="text-lg font-sans text-my-slate leading-relax mt-7 text-center xl:text-lg xl:w-1/2">
        Want to collaborate on a project or just want to say hi? Feel free to
        send me a message!
      </div>
      <ul className="flex justify-center gap-16 p-16">
        <li className="hover:text-my-green text-my-light-slate text-xl hover:-translate-y-1">
          <a href="https://github.com/MoreSarvesh">
            <LuGithub />
          </a>
        </li>
        <li className="hover:text-my-green text-my-light-slate text-xl hover:-translate-y-1">
          <a href="https://www.linkedin.com/in/moresarvesh">
            <LuLinkedin />
          </a>
        </li>
        <li className="hover:text-my-green text-my-light-slate text-xl hover:-translate-y-1">
          <a href="https://www.instagram.com/sarvesh_.more?igsh=MW1qYjR2ZDN4aHc2">
            <LuInstagram />
          </a>
        </li>
      </ul>
      <div className="bg-my-green rounded-md mt-12">
        <div className="px-5 py-2 bg-my-navy border rounded-md border-my-green text-my-green  text-2xl font-mono hover:-translate-y-1 hover:-translate-x-1 duration-150">
          <a href="mailto:sarveshmore1324@gmail.com">Say Hello</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
