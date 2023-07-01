import React from "react";
import Image from "next/image";
import { SKILLS } from "../constants/personal.data";

const Skills = () => {
  const { title, skills } = SKILLS;
  return (
    <div id="skills">
      <Image
        src="/skills/orangeb-cropped.svg"
        width={1920}
        height={100}
        alt=""
      />
      <Image
        src="/skills/oranget-cropped.svg"
        width={1920}
        height={100}
        alt=""
      />
      <h1 className="my-8 text-4xl md:text-6xl font-bold text-center">
        {title}
      </h1>
      <div className="flex py-5 my-8 flex-row">
        {/* <div className="hidden md:inline-block md:w-1/2">
          <Image
            className="mx-auto relative z-10"
            src={"/skills/skillsnobg.gif"}
            width={400}
            height={400}
            alt="soham"
          />
        </div> */}
        <div>
          <div className="flex justify-center relative w-full md:w-1/2 overflow-hidden flex-wrap  mx-auto items-center flex-row ">
            {skills.map((skill) => {
              return (
                <div className="flex p-2 m-2 sm:m-4 flex-col items-center justify-center ">
                  <Image
                    className="mx-auto relative z-10"
                    src={skill.image}
                    width={65}
                    height={65}
                    alt=''
                  />
                  <p className="text-center text-sm">{skill.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Image
        src="/skills/orangeb-cropped.svg"
        className="skills"
        width={1920}
        height={100}
        alt=""
      />
    </div>
  );
};

export default Skills;
