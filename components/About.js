import React from "react";

function About() {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I am</h2>
          <p className="py-2 text-gray-600">
            I am a web developer and tech enthusiast, with an Electrical
            Engineering background.
          </p>
          <p className="py-2 text-gray-600">
            In 2021, facinated with how the Internet works, I started working
            with HTML & CSS and i was quickly drawn to learn more. I started
            learning javascript and was even more enthused with making websites
            interactive.
          </p>
          <p className="py-2 text-gray-600">
            I am now working as a software developer who front end of websites
            using React Js, Next Js. I am spending available time to learn Node
            Js, Python and Mongo DB to become a full stack developer.
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            Check out some of my latest projects
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <img
            className="rounded-xl"
            src="https://images.unsplash.com/photo-1569025743873-ea3a9ade89f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default About;
