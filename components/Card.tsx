import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { MouseContext } from "../context/mouse-context";

const Card = (props: {
  key: number;
  name: string;
  repo: string;
  hostedLink: string;
  description: string;
  techStack: string[];
  images: string[];
}) => {
  const { key, name, repo, hostedLink, description, techStack, images } = props;
  const { cursorChangeHandler } = React.useContext(MouseContext);
  const [selectedImg, setSelectedImg] = useState<number>(0);

  return (
    <div
      onMouseEnter={() => cursorChangeHandler("disabled", "")}
      onMouseLeave={() => cursorChangeHandler("", "")}
      className={`card w-96 bg-base-300 shadow-xl overflow-y-auto m-8`}
    >
      <div
        className="h-[41.5rem] flex flex-col justify-between"
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
                  id={`${name}${index + 1}`}
                  className="carousel-item h-64 w-full"
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
                  href={`#${name}${index + 1}`}
                  className={`button btn btn-xs ${index + 1 === selectedImg ? 'bg-primary' : ''}`}
                  onClick={() => {setSelectedImg(index + 1)}}
                >
                  {index + 1}
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
                <Link href={`${hostedLink}`}> Try now! </Link>{" "}
              </div>
            )}
          </h2>
          <p className="text-justify"> {description} </p>
        </div>
        <div className=" flex flex-row flex-wrap justify-center ">
          {techStack.map((item) => {
            return <div className="badge mx-1.5 my-1 badge-outline">{item}</div>;
          })}
        </div>
        <hr className="my-2" />
        <div >
          <Link  className="flex flex-row justify-end mx-4 my-2" href={repo}>
            {/* generate a github icon svg */}
            <Image src={"/github.png"} height={30} width={30} alt={""} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
