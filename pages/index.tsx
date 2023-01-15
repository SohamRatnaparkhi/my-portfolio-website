import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import MainContainer from "../containers/MainContainer";
// import Cursor from "../utils/Cursor/Cursor";
import Cursor from "../utils/Cursor";
// import SplashContainer from "../containers/SplashContainer";

const Home: NextPage = () => {
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
      <div className="hidden sm:inline-block">
        <Cursor />
      </div>
      <MainContainer />
    </div>
  );
};

export default Home;
