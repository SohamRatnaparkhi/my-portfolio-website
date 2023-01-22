import React from "react";
import { MENU } from "../constants/web.data";
import { NAME } from "../constants/personal.data";
import Link from "next/link";
import Image from "next/image";
import { MouseContext } from "../context/mouse-context";

const Footer = () => {
  const { cursorChangeHandler } = React.useContext(MouseContext);
  return (
    <>
      <div className="px-0 py-0 mx-0 my-0 antialiased text-center bg-[#1f2937]">
        <div className="flex flex-col pt-3 md:items-center f-f-l">
          <h1 className="text-4xl font-black text-neutral-content">
            Soham Ratnaparkhi
          </h1>
          <div className="my-3 text-base text-center text-neutral-content ">
            <div className="items-center md:flex">
              {MENU.map(({ key, title, link }) => (
                <Link
                  key={key}
                  href={link}
                  onMouseEnter={() => cursorChangeHandler("hovered", "")}
                  onMouseLeave={() => cursorChangeHandler("", "")}
                  className="p-2 mx-2 my-4 text-base font-bold text-neutral-content rounded-md hover:text-neutral-content hover:bg-primary-500"
                >
                  {title}
                </Link>
              ))}
            </div>
          </div>
          <div className="mb-3 text-md text-neutral-content">
            <p>
              © {new Date().getFullYear()} {NAME}. All rights reserved.
            </p>
            <p className="self-center justify-center text-center text-2xs font-extralight">
              Developed with
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 m-2 h-6 inline-block mx-1 text-red-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
              by{" "}
              <a
                href="mailto:soham.ratnaparkhi@gmail.com"
                className="text-primary font-bold underline"
              >
                Soham Ratnaparkhi
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
