import Image from 'next/image'

import photoWithBG from '../public/myself/srdp.png'
import photoWithoutBg from '../public/myself/dp1.png'
import photoWithWhiteBg from '../public/myself/dp.png'

export const NAME = "Soham Ratnaparkhi"
export const SHORT_NAME = "Soham R ."
export const TITLE = "Soham Ratnaparkhi"

export const INTRO_TITLE = "Hi, I'm Soham Ratnaparkhi"
export const INTRO_TEXT = "a programmer!"

export const KNOW_MORE = {
    title: "Know more about me!",
    data: "I'm a software developer who loves to build things! I regularly keep my self updated to the latest technologies and other techy stuff arising.  I am a full-stack web developer (MERN stack). Along with web development, I have worked on various projects related to Deep Learning and Machine Learning. I love contributing to open-source projects. I am adept at solving crunch problems based on data structure and algorithms.",
    photoWithBG: <Image src={photoWithBG} className='relative mx-auto items-center' alt="myself"/>,
    photoWithoutBg: <Image src={photoWithoutBg} alt="myself"/>,
    photoWithWhiteBg: <Image src={photoWithWhiteBg} alt="myself"/>,
}

export const PROJECTS = {
    title: ''
}
