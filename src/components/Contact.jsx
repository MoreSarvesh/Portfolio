//icons
import { LuGithub } from "react-icons/lu";
import { LuLinkedin } from "react-icons/lu";
import { LuInstagram } from "react-icons/lu";

const Contact = () => {
  return (
    <section
      className="py-52 px-16 flex flex-col justify-center items-center"
      id="contact"
    >
      <h1 className="text-5xl font-sans font-bold text-my-lightest-slate leading-relaxed">
        Get In Touch
      </h1>
      <div className="text-lg font-sans text-my-slate w-1/2 leading-relax mt-7 text-center">
        Want to collaborate project in mind or just want to say hi? Feel free to
        send me a message!
      </div>
      <ul className="flex justify-center gap-16 p-16">
        <li className="hover:text-my-green text-my-light-slate text-xl">
          <a href="http://">
            <LuGithub />
          </a>
        </li>
        <li className="hover:text-my-green text-my-light-slate text-xl">
          <a href="http://">
            <LuLinkedin />
          </a>
        </li>
        <li className="hover:text-my-green text-my-light-slate text-xl">
          <a href="http://">
            <LuInstagram />
          </a>
        </li>
      </ul>
      <button className="px-5 py-2 bg-transparent border rounded-md border-my-green text-my-green text-2xl font-mono">
        <a href="mailto:sarveshmore1324@gmail.com">Say Hello</a>
      </button>
    </section>
  );
};

export default Contact;
