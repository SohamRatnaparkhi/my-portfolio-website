import React from "react";
import Image from "next/image";
import { Sacramento, Merienda } from "@next/font/google";
import { NAME } from "../constants/data";
// import { ReactComponent as HeroIllustration } from "/hero_illustration.svg";
import { MouseContext } from "../context/mouse-context";

const sacra = Sacramento({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

const meri = Merienda({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

const SplashContent = () => {
  const { cursorChangeHandler } = React.useContext(MouseContext);

  return (
    <div className="flex flex-col justify-between items-center w-full bg-base-200 min-h-screen body antialiased ">
      <div
        id="top"
        className="container flex flex-col justify-between items-center w-screen bg-base-200 min-h-screen body antialiased"
      >
        <div className="flex flex-col items-center inline-block mt-12 pt-5">
          <Image
            className=""
            src={"/cloud2.jpg"}
            height={180}
            width={180}
            alt={"cloud image"}
          />
        </div>
        {/* <Image src="/cloud.jpg" height={160} width={160} alt="" className="cloud1" /> */}
        <div className="introduction mb-10">
          <h1
            className={`text-6xl font-bold text-bold text-center text-accent-focus font-sacramento ${sacra.className}`}
          >
            I'm {NAME}
          </h1>
          <h2
            className={`text-sm italic text-center text-accent ${meri.className}`}
          >
            a <u>pro</u>grammer !
          </h2>
          <button
            className="btn p-4 mt-12 text-center btn-success transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
            onMouseEnter={() => cursorChangeHandler("hovered", '')}
            onMouseLeave={() => cursorChangeHandler("", '')}
          >
            Know more!
          </button>
        </div>
        <div>
          <Image
            height={50}
            width={50}
            src="/bird.png"
            alt="bird"
            className="bird animate-pulse duration-500"
          />
          <div className="individual-birds animate-pulse sm:inline-block">
            <Image
              height={50}
              width={50}
              src="/bird.png"
              alt="bird"
              className=""
            />
            <Image
              height={50}
              width={50}
              src="/bird.png"
              alt="bird"
              className="ml-10 ease-in-out"
            />
            <Image
              height={50}
              width={50}
              src="/bird.png"
              alt="bird"
              className="bird2"
            />
          </div>
          <Image
            height={350}
            width={300}
            src="/birds.png"
            alt="flock of birds"
            className="birds transition ease-in-out delay-150 hover:-translate-y-1 duration-300"
          />
          <Image
            height={400}
            width={800}
            src="/mountains.png"
            alt=""
            className="mountains m-auto hidden sm:block"
          />
          <Image
            height={200}
            width={600}
            src="/mountains.png"
            alt=""
            className="mountains m-auto self-end pb-2 inline-block sm:hidden"
          />
        </div>
      </div>
      <div>
        <hr />
      </div>
    </div>
  );
};

export default SplashContent;
