import React, { useEffect } from "react";
import { KNOW_MORE } from "../constants/personal.data";
import { motion, useAnimation, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import myImage from '../public/myself/srdp.png'

const KnowMore = () => {
  const { title, data, photoWithBG } = KNOW_MORE;
  const [ref, inView] = useInView();
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const titleAnimation = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay: 0.5,
      },
    },
  };
  const photoAnimation = {
    visible: { opacity: 1, scale: [2, 1], transition: { duration: 1 } },
    hidden: { opacity: 0, scale: 0 },
  };
  const dataAmimation: Variants = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: 50,
      rotate: -10,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <div
      id="knowmore"
      className="mt-14 pb-2 bg-gradient-to-b from-bg-primary to-bg-secondary"
    >
      <motion.h1
        className="my-8 text-4xl md:text-6xl font-bold text-center"
        initial={titleAnimation.hidden}
        whileInView={titleAnimation.show}
      >
        {title}
      </motion.h1>
      <div className="flex items-center flex-col md:flex-row ">
        <motion.div
          className="my-photo w-1/2 justify-center m-auto p-4"
          variants={photoAnimation}
          initial="hidden"
          whileInView="visible"
        >
          <Image className="mx-auto" src={myImage} alt='soham'/>
        </motion.div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          className="my-about-section md:w-1/2 w-3/4 p-2 md:px-11 md:mx-12 text-justify text-lg md:text-xl"
        >
          {data}
        </motion.div>
      </div>
    </div>
  );
};

export default KnowMore;
