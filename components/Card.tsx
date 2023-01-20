import Link from "next/link";
import React, { Key, useEffect } from "react";
import Image from "next/image";
import { MouseContext } from "../context/mouse-context";

const Card = (props: {
  key: Key;
  name: string;
  repo: string;
  hostedLink: string;
  description: string;
  techStack: string[];
  images: string[];
}) => {
  const { key, name, repo, hostedLink, description, techStack, images } = props;
  const { cursorChangeHandler } = React.useContext(MouseContext);
  return (
    <div
      onMouseEnter={() => cursorChangeHandler("disabled", "")}
      onMouseLeave={() => cursorChangeHandler("", "")}
      className="card w-96 bg-base-100 shadow-xl overflow-y-auto m-8"
    >
      <div
        className="h-[48rem] flex flex-col justify-between"
        id="carouselExampleIndicators"
      >
        <div>
          <div
            data-bs-ride="carousel"
            className="carousel slide relative w-full"
          >
            {images.map((image, index) => {
              return (
                <div
                  key={index}
                  id={`${name}${index}`}
                  className="carousel-item w-full"
                >
                  <Image
                    src={image}
                    className="w-full"
                    height={200}
                    width={370}
                    alt={""}
                  />
                </div>
              );
            })}
          </div>
          <div className="flex justify-center w-full py-2 gap-2">
            {images.map((image, index) => {
              return (
                <a
                  key={index}
                  href={`#${name}${index}`}
                  className="btn button btn-xs"
                >
                  {index}
                </a>
              );
            })}
          </div>
        </div>
        <hr />
        <div className="card-body">
          <h2 className="card-title">
            {name}
            {hostedLink && (
              <div className="badge badge-secondary">
                {" "}
                <Link href={`${hostedLink}`}> Live Link </Link>{" "}
              </div>
            )}
          </h2>
          <p> {description} </p>
        </div>
        <div className=" flex flex-row flex-wrap justify-center ">
          {techStack.map((item) => {
            return <div className="badge m-1 badge-outline">{item}</div>;
          })}
        </div>
        <hr />
        <div>
          <Link className="flex flex-row justify-end mx-4 my-8" href={repo}>
            {/* generate a github icon svg */}
            <Image src={"/github.png"} height={30} width={30} alt={""} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
