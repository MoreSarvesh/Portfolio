import React from "react";

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
        <li>
          <a href="http://">GT</a>
        </li>
        <li>
          <a href="http://">LI</a>
        </li>
        <li>
          <a href="http://">IT</a>
        </li>
      </ul>
      <button className="px-5 py-2 bg-transparent border rounded-md border-my-green text-my-green text-2xl font-mono">
        <a href="mailto:sarveshmore1324@gmail.com">Say Hello</a>
      </button>
    </section>
  );
};

export default Contact;
