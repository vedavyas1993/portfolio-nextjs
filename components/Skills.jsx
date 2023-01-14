import React from "react";
import Image from "next/image";
function Skills() {
  const imageBasePath = "/images/icons/";
  const skillsList = [
    { imagePath: imageBasePath + "html.png", skillName: "HTML5" },
    { imagePath: imageBasePath + "css.png", skillName: "CSS3" },
    { imagePath: imageBasePath + "javascript.png", skillName: "JavaScript" },
    { imagePath: imageBasePath + "reactJs.png", skillName: "ReactJs" },
    { imagePath: imageBasePath + "next.png", skillName: "Next.Js" },
    { imagePath: imageBasePath + "git.png", skillName: "Git" },
    { imagePath: imageBasePath + "tailwind.png", skillName: "Tailwind" },
  ];
  const learningList = [
    { imagePath: imageBasePath + "node.png", skillName: "Node.Js" },
    { imagePath: imageBasePath + "vue.png", skillName: "Vue.js" },
    { imagePath: imageBasePath + "mongo.png", skillName: "MongoDB" },
    { imagePath: imageBasePath + "mysql.png", skillName: "MySql" },
  ];
  return (
    <div className="w-full md:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="uppercase text-xl tracking-widest text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skillsList.map((skill) => {
            return (
              <div className="p-1 shadow-xl rounded-xl">
                <div className="grid grid-cols-2 gap-4 justify-center items-center">
                  <div className="m-auto">
                    <Image
                      src={skill.imagePath}
                      alt="react logo"
                      width="64"
                      height="64"
                    />
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <h3>{skill.skillName}</h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <h2 className="py-4 mt-4">I am learning</h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
          {learningList.map((skill) => {
            return (
              <div className="p-1 shadow-xl rounded-xl">
                <div className="grid grid-cols-2 gap-4 justify-center items-center">
                  <div className="m-auto">
                    <Image
                      src={skill.imagePath}
                      alt="react logo"
                      width="64"
                      height="64"
                    />
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <h3>{skill.skillName}</h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Skills;
