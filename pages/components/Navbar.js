import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

function Navbar() {
  const navList = [
    { path: "/", title: "Home" },
    { path: "/", title: "About" },
    { path: "/", title: "Skills" },
    { path: "/", title: "Projects" },
    { path: "/", title: "Contact" },
  ];

  const socialLinks = [
    { path: "/", icon: <FaLinkedinIn /> },
    { path: "/", icon: <FaGithub /> },
    { path: "/", icon: <AiOutlineMail /> },
    { path: "/", icon: <BsFillPersonLinesFill /> },
  ];

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav((prev) => !prev);
  };

  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image
          className="hidden sm:block"
          src="/images/logos/vedavyaslogo.png"
          width="200"
          height="30"
          alt="logo"
        />
        <Image
          className="sm:hidden"
          src="/images/logos/shortLogo.png"
          width="70"
          height="30"
          alt="logo"
        />
        <div>
          <ul className="hidden md:flex">
            {navList.map((navItem) => {
              return (
                <Link href={navItem.path}>
                  <li className="ml-10 text-sm uppercase hover:border-b">
                    {navItem.title}
                  </li>
                </Link>
              );
            })}
          </ul>
          <div className="md:hidden cursor-pointer" onClick={handleNav}>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* SIDE MENU*/}
      <div
        className={
          nav ? "fixed left-0 top-0 md:hidden w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[85%] sm:w-[60%] md:w-[50%] h-screen bg-[#ecf0fe] p-10 ease-in duration-500 overflow-auto"
              : "fixed left-[-200%] w-[85%] sm:w-[60%] md:w-[50%] h-screen bg-[#ecf0fe] top-0 p-10 ease-in duration-500 overflow-auto"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Image
                src="/images/logos/shortLogo.png"
                alt="logo"
                width="70"
                height="30"
              />
              <div
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
                onClick={handleNav}
              >
                <AiOutlineClose size={25} />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Let's build something legendary together
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              {navList.map((navItem) => {
                return (
                  <Link href={navItem.path}>
                    <li className="py-4 text-sm">{navItem.title}</li>
                  </Link>
                );
              })}
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Lets's connect
              </p>
              <div className="flex items-center justify-between my-4 sm:w-[80%] md:w-[70%] lg:w-[30%] flex-wrap gap-1">
                {socialLinks.map((social) => (
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    {social.icon}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
