import Image from "next/image";

import photoWithBG from "../public/myself/srdp.png";
import photoWithoutBg from "../public/myself/dp1.png";
import photoWithWhiteBg from "../public/myself/dp.png";

export const NAME = "Soham Ratnaparkhi";
export const SHORT_NAME = "Soham R .";
export const TITLE = "Soham Ratnaparkhi";

export const INTRO_TITLE = "Hi, I'm Soham Ratnaparkhi";
export const INTRO_TEXT = "a programmer!";

export const KNOW_MORE = {
  title: "Know more about me!",
  data:
    "I'm a software developer who loves to build things! I regularly keep my self updated to the latest technologies and other techy stuff arising.  I am a full-stack responsive web developer (MERN stack). Along with web development, I have worked on various projects related to Deep Learning and Machine Learning. I love contributing to open-source projects. I am adept at solving crunch problems based on data structure and algorithms.",
  photoWithBG: (
    <Image
      src={photoWithBG}
      className="relative mx-auto items-center"
      alt="myself"
    />
  ),
  photoWithoutBg: <Image src={photoWithoutBg} alt="myself" />,
  photoWithWhiteBg: <Image src={photoWithWhiteBg} alt="myself" />,
};

export const PROJECTS = {
  title: "Projects",
  description:
    "Lets take a look at some of my projects. My projects make use of the latest technologies and all of them are hosted on GitHub. I have majorly worked upon  MERN stack, Web3, and Deep learning projects. All of my projects are open-source and you can contribute to them if you want to. ",
  projectImage: "/projects/project.png",
  data: [
    {
      key: 1,
      name: "Blog-X",
      repo: "https://github.com/Blog-X/blog_x",
      hostedLink: "https://blog-x-omega.vercel.app/",
      description:
        "A decentralized blogging platform where users can interact with each other and share their thoughts and ideas. It is built on top of the Ethereum blockchain",
      techStack: [
        "Next.JS",
        "MongoDB",
        "Node.JS",
        "Express.JS",
        "Web3.js",
        "Ethereum",
        "Push protocols",
        "TailwindCSS",
      ],
      images: [
        "/projects/blogx/blogx1.png",
        "/projects/blogx/blogx2.png",
        "/projects/blogx/blogx3.png",
      ],
    },
    {
      key: 2,
      name: "Brain Tumor Detector",
      repo: "https://github.com/SohamRatnaparkhi/BTD_Web",
      hostedLink: "",
      description:
        "This project involves a web application which can detect brain tumor from MRI images with the help of deep learning models (CNN models). The web application is built using Flask and the model is trained using Tensorflow and Keras.",
      techStack: [
        "Python",
        "Flask",
        "Tensorflow",
        "Keras",
        "HTML",
        "CSS",
        "Bootstrap",
      ],
      images: ["/projects/btd/btd1.jpg", "/projects/btd/btd2.jpg"],
    },
    {
      key: 3,
      name: "VIT-Marketplace",
      repo: "https://github.com/SohamRatnaparkhi/Marketplace-Updated",
      hostedLink: "",
      description:
        "VIT-Marketplace is a MERN stack application built for the students of my college to buy and sell products. I majorly worked on the backend of the application.",
      techStack: [
        "MongoDB",
        "Express",
        "React",
        "Node",
        "Redux",
        "TailwindCSS",
      ],
      images: ["/projects/market/market1.jpg"],
    },
    {
      key: 4,
      name: "Transliterate",
      repo: "https://github.com/SohamRatnaparkhi/transliterate-v2",
      hostedLink: "",
      description:
        "Transliterate is an all-in-one web application which can transliterate text, audio and even video between 106 available languages. It is various google APIs to perform the task.",
      techStack: ["Flask", "Google APIs", "HTML5", "CSS3", "Bootstrap"],
      images: ["/projects/transliterate/tr1.png", "/projects/blogx/blogx3.png"],
    },
    {
      key: 5,
      name: "Voice Assistant",
      repo: "https://github.com/SohamRatnaparkhi/Voice-Assistant",
      hostedLink:
        "https://github.com/SohamRatnaparkhi/Voice-Assistant/releases/download/v1.0.0/VoiceAssistant.exe",
      description:
        "A CLI Voice Assistant tool which can perform various common tasks like opening websites, playing music, sending emails, etc. The USP of this project is that it can be used as a book reader as it can convert the text in .pdf and .docs files to audio and play it page by page.",
      techStack: ["Python", "gTTS"],
      images: ["/projects/va/va1.png", "/experience.svg"],
    },
  ],
  conclusion: {
    title: "Want to see more?",
    data: "Checkout my github profile for more projects!",
    link: "https://github.com/SohamRatnaparkhi",
  },
};

export const SKILLS = {
  title: "Skills",
  skills: [
    {
      name: "HTML",
      image: "/skills/icons/html.svg",
    },
    {
      name: "CSS",
      image: "/skills/icons/css3.svg",
    },
    {
      name: "Bootstrap",
      image: "/skills/icons/bootstrap.svg",
    },
    {
      name: "TailwindCSS",
      image: "/skills/icons/tailwind.svg",
    },
    {
      name: "JavaScript",
      image: "/skills/icons/js.svg",
    },
    {
      name: "TypeScript",
      image: "/skills/icons/ts.svg",
    },
    {
      name: "Next.JS",
      image: "/skills/icons/nextjs.svg",
    },
    {
      name: "React.JS",
      image: "/skills/icons/reactjs.svg",
    },
    {
      name: "Node.JS",
      image: "/skills/icons/nodejs.svg",
    },
    {
      name: "Express.JS",
      image: "/skills/icons/express.svg",
    },
    {
      name: "MongoDB",
      image: "/skills/icons/mongodb.svg",
    },
    {
      name: "Python",
      image: "/skills/icons/python.svg",
    },
    {
      name: "Django",
      image: "/skills/icons/django.svg",
    },
    {
      name: "Tensorflow",
      image: "/skills/icons/tensorflow.svg",
    },
    {
      name: "Docker",
      image: "/skills/icons/docker.svg",
    },
    {
      name: "Java",
      image: "/skills/icons/java.svg",
    },
    {
      name: "C++",
      image: "/skills/icons/cplusplus.svg",
    },
    {
      name: "C",
      image: "/skills/icons/c.svg",
    },

    {
      name: "Git",
      image: "/skills/icons/git.svg",
    },
  ],
};
