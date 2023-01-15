import React from "react";
import Image from "next/image";
import { Sacramento, Merienda } from "@next/font/google";
import { NAME } from "../constants/data";
// import { ReactComponent as HeroIllustration } from "/hero_illustration.svg";


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
  return (
    <div className="flex flex-col justify-end items-center w-full bg-base-200 min-h-screen body antialiased ">
      <div id="top" className="container flex flex-col justify-end items-center w-screen bg-base-200 min-h-screen body antialiased">
        <div className="flex flex-col items-center inline-block pt-5">
          <Image
            className=""
            src={"/cloud.jpg"}
            height={180}
            width={180}
            alt={"cloud image"}
          />
        </div>
        {/* <Image src="/cloud.jpg" height={160} width={160} alt="" className="cloud1" /> */}
        <div className="introduction mb-10">
          <h1
            className={`text-6xl font-bold text-bold text-center text-accent font-sacramento ${sacra.className}`}
          >
            I'm {NAME}
          </h1>
          <h2 className={`text-sm italic text-center text-accent ${meri.className}`}>
            a <u>pro</u>grammer !
          </h2>
        </div>
        <div>

        <Image
          height={50}
          width={50}
          src="/bird.png"
          alt="bird"
          className="bird"
        />
        <Image
          height={50}
          width={50}
          src="/bird.png"
          alt="bird"
          className="bird2"
        />
        <Image
          height={350}
          width={300}
          src="/birds.png"
          alt="flock of birds"
          className="birds"
        />
        <Image
          height={200}
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
          className="mountains m-auto mt-15 pb-2 inline-block sm:hidden"
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