import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import Router from "next/router";
import MainContainer from "../containers/MainContainer";
import { FIRST_SCREEN_TIMEOUT } from "../constants/web.data";
import Cursor from "../utils/Cursor/Cursor";
// import Cursor from "../utils/Cursor/Cursor";
// import SplashContainer from "../containers/SplashContainer";

const Home: NextPage = () => {
  // const delay = FIRST_SCREEN_TIMEOUT;
  // useEffect( () => {
  //   setTimeout(() => {
  //     Router.push('/mainPage')
  //   }, delay);
  // }, [])
  return (
    <div className="">
      <Head>
        <title>Soham Ratnaparkhi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <title>Soham Ratnaparkhi</title>
      {/* Meta tags */}
      <meta
        name="description"
        content="Hey, this is my personal website. You can take a look at my portfolio, download my CV and see how you can contact me!"
        data-react-helmet="true"
      />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Soham Ratnaparkhi" />

      <Cursor />
      <MainContainer />
      {/* Splash Screen 3 js */}
    </div>
  );
};

export default Home;
