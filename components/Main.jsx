import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
function Main() {
  const socialLinks = [
    { path: "/", icon: <FaLinkedinIn /> },
    { path: "/", icon: <FaGithub /> },
    { path: "/", icon: <AiOutlineMail /> },
    { path: "/", icon: <BsFillPersonLinesFill /> },
  ];
  return (
    <div className="w-full h-screen text-center ">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div className="pb-3">
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Let's build something together
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I'm <span className="text-[#5651e5]">Vedavyas</span>
          </h1>
          <h1 className="py-2 text-gray-700">A Front-End Web Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I'm a front-end web developer specializing in building exceptional
            digital experiences. Currently, I'm focused on building responsive
            front-end web applications while learning back-end technologies.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4 flex-wrap gap-[0.1rem]">
            {socialLinks.map((social) => (
              <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
                {social.icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
