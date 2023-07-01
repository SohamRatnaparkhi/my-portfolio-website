import Link from "next/link";
import React from "react";
import { PROJECTS } from "../constants/personal.data";
import Card from "./Card";
import Image from "next/image";
import { MouseContext } from "../context/mouse-context";
import Wave from "react-wavify";

const Projects = () => {
  const { title, description, data, conclusion } = PROJECTS;
  const { cursorChangeHandler } = React.useContext(MouseContext);

  return (
    <div id="projects" className="pb-2 mt-10 overflow-x-hidden">
      <Wave
        fill="#0066ff"
        paused={false}
        options={{
          height: 30,
          amplitude: 40,
          speed: 0.2,
          points: 4,
        }}
      />
        <Image
          src={"/projects/wave-cropped.svg"}
          width={1920}
          height={200}
          alt="soham"
          className="overflow-hidden wave w-screen"
        />
      <h1 className="my-8 text-4xl md:text-6xl font-bold text-center">
        {title}
      </h1>
      <div className="flex items-center flex-col md:flex-row ">
        <div className="my-about-section md:w-1/2 w-3/4 p-2 md:px-11 md:mx-12 text-justify text-lg md:text-xl order-2 md:order-1">
          {description}
        </div>
        <div className="projects-photo w-1/2 justify-center m-auto p-4 order-1 md:order-2">
          <Image
            className="mx-auto"
            src={"/project.svg"}
            width={300}
            height={300}
            alt="soham"
          />
        </div>
      </div>
      <div className="flex items-center justify-center relative w-screen overflow-hidden flex-wrap  mx-auto flex-col md:flex-row ">
        {data.map((project) => {
          return <Card {...project} />;
        })}
      </div>
      <div>
        <h1 className="my-2 text-2xl md:text-3xl font-bold text-center">
          {conclusion.title}
        </h1>
        <p className="text-center text-xl">
          {conclusion.data}{" "}
          <Link
            onMouseEnter={() => cursorChangeHandler("disabled", "")}
            onMouseLeave={() => cursorChangeHandler("", "")}
            href={conclusion.link}
            className="text-primary text-lg"
          >
            (Link)
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Projects;
